// Thanksgiving Challenge - Complete App Controller & Engine
// Fully responsive, offline-ready, touch & mouse friendly

class ThanksgivingApp {
  constructor() {
    this.currentScreen = 'screen-home';
    this.timerInterval = null;
    this.timeLeft = 120; // 2 minutes (120 seconds)
    this.activeGame = null; // 'feast', 'trivia', 'memory', 'wheel'
    
    // Confetti Engine
    this.confettiAnimId = null;
    this.confettiParticles = [];

    // DOM Elements
    this.initElements();
    this.bindEvents();
    this.updateSoundButton();
  }

  initElements() {
    // Screens
    this.screens = {
      home: document.getElementById('screen-home'),
      feast: document.getElementById('screen-game-feast'),
      trivia: document.getElementById('screen-game-trivia'),
      memory: document.getElementById('screen-game-memory'),
      wheel: document.getElementById('screen-game-wheel'),
      victory: document.getElementById('screen-victory'),
      gameover: document.getElementById('screen-gameover')
    };

    // Navigation & Header
    this.btnSound = document.getElementById('btn-sound-toggle');
    this.btnRules = document.getElementById('btn-rules-modal');
    this.btnHome = document.getElementById('btn-home-nav');
    this.btnBrandHome = document.getElementById('btn-brand-home');
    this.modalRules = document.getElementById('modal-rules');
    this.btnCloseModal = document.getElementById('btn-close-modal');

    // Confetti Canvas
    this.confettiCanvas = document.getElementById('confetti-canvas');
    this.confettiCtx = this.confettiCanvas.getContext('2d');
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  resizeCanvas() {
    this.confettiCanvas.width = window.innerWidth;
    this.confettiCanvas.height = window.innerHeight;
  }

  bindEvents() {
    // Sound Toggle
    this.btnSound.addEventListener('click', () => {
      const isMuted = window.sound.toggleMute();
      this.updateSoundButton(isMuted);
    });

    // Modal Rules
    this.btnRules.addEventListener('click', () => {
      window.sound.playClick();
      this.modalRules.classList.add('active');
    });

    this.btnCloseModal.addEventListener('click', () => {
      window.sound.playClick();
      this.modalRules.classList.remove('active');
    });

    this.modalRules.addEventListener('click', (e) => {
      if (e.target === this.modalRules) {
        this.modalRules.classList.remove('active');
      }
    });

    // Home buttons
    const goHome = () => {
      window.sound.playClick();
      this.stopTimer();
      this.stopConfetti();
      this.showScreen('home');
    };
    this.btnHome.addEventListener('click', goHome);
    this.btnBrandHome.addEventListener('click', goHome);
    document.getElementById('btn-gameover-home').addEventListener('click', goHome);

    // Cards Click to start games
    document.getElementById('card-feast').addEventListener('click', () => this.startFeastGame());
    document.getElementById('card-trivia').addEventListener('click', () => this.startTriviaGame());
    document.getElementById('card-memory').addEventListener('click', () => this.startMemoryGame());
    document.getElementById('card-wheel').addEventListener('click', () => this.startWheelGame());

    // Next Player button
    document.getElementById('btn-next-player').addEventListener('click', () => {
      window.sound.playClick();
      this.stopConfetti();
      this.showScreen('home');
    });

    // Try Again button
    document.getElementById('btn-try-again').addEventListener('click', () => {
      window.sound.playClick();
      if (this.activeGame === 'feast') this.startFeastGame();
      else if (this.activeGame === 'trivia') this.startTriviaGame();
      else if (this.activeGame === 'memory') this.startMemoryGame();
      else if (this.activeGame === 'wheel') this.startWheelGame();
      else this.showScreen('home');
    });
  }

  updateSoundButton(muted) {
    const isMuted = muted !== undefined ? muted : window.sound.muted;
    this.btnSound.textContent = isMuted ? '🔇' : '🔊';
  }

  showScreen(name) {
    Object.values(this.screens).forEach(screen => screen.classList.remove('active'));
    if (this.screens[name]) {
      this.screens[name].classList.add('active');
      this.currentScreen = name;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // =========================================================================
  // UNIVERSAL 2-MINUTE TIMER ENGINE (120 SECONDS)
  // =========================================================================
  startTimer(timerElementId, onTimeoutCallback) {
    this.stopTimer();
    this.timeLeft = 120; // 2 minutes
    const timerEl = document.getElementById(timerElementId);
    timerEl.classList.remove('urgent');
    this.renderTimerDisplay(timerEl);

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      this.renderTimerDisplay(timerEl);

      // Sound tick on last 10 seconds
      if (this.timeLeft <= 10 && this.timeLeft > 0) {
        window.sound.playTick();
        timerEl.classList.add('urgent');
      } else if (this.timeLeft <= 20) {
        timerEl.classList.add('urgent');
      }

      if (this.timeLeft <= 0) {
        this.stopTimer();
        if (onTimeoutCallback) onTimeoutCallback();
      }
    }, 1000);
  }

  renderTimerDisplay(el) {
    const mins = Math.floor(this.timeLeft / 60);
    const secs = this.timeLeft % 60;
    el.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  // =========================================================================
  // VICTORY SCREEN & GOLDEN SNACK TICKET GENERATOR
  // =========================================================================
  showVictory(gameName) {
    this.stopTimer();
    window.sound.playFanfare();
    
    // Generate unique lucky pass code
    const randomCode = 'TG-' + Math.floor(1000 + Math.random() * 9000);
    const now = new Date();
    const timeString = now.toLocaleDateString() + ' • ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    document.getElementById('ticket-time-stamp').textContent = `Pass ID: ${randomCode} • ${timeString} • ${gameName}`;
    this.showScreen('victory');
    this.startConfetti();
  }

  showGameOver(title, message) {
    this.stopTimer();
    window.sound.playLose();
    document.getElementById('gameover-title').textContent = title || 'So Close!';
    document.getElementById('gameover-desc').textContent = message || 'You almost made it. Give it another shot!';
    this.showScreen('gameover');
  }

  // =========================================================================
  // GAME 1: BUILD YOUR FEAST
  // Target: 5 traditional foods. Lives: 2 (Max 1 mistake). Timer: 2 mins.
  // =========================================================================
  startFeastGame() {
    this.activeGame = 'feast';
    window.sound.playClick();
    this.showScreen('feast');

    this.feastTarget = 5;
    this.feastServed = [];
    this.feastLives = 2; // Can make 1 mistake. 2nd mistake = Game Over

    document.getElementById('feast-count').textContent = `0 / ${this.feastTarget}`;
    document.getElementById('feast-lives').textContent = '❤️❤️';
    document.getElementById('plate-slots').innerHTML = '';
    document.getElementById('plate-empty-msg').style.display = 'block';
    document.getElementById('feast-fact').textContent = '👉 Tap the foods on the buffet that belong to traditional Thanksgiving dinner!';

    this.renderFeastBuffet();
    this.startTimer('feast-timer', () => {
      this.showGameOver('Time Ran Out!', 'The 2-minute timer finished before your Thanksgiving feast was complete.');
    });
  }

  renderFeastBuffet() {
    const grid = document.getElementById('buffet-grid');
    grid.innerHTML = '';

    // Mix 6 traditional and 6 distractors, then shuffle
    const trad = [...THANKSGIVING_DATA.traditionalFoods].sort(() => 0.5 - Math.random()).slice(0, 6);
    const dist = [...THANKSGIVING_DATA.distractorFoods].sort(() => 0.5 - Math.random()).slice(0, 6);
    const pool = [...trad, ...dist].sort(() => 0.5 - Math.random());

    pool.forEach(food => {
      const isTrad = THANKSGIVING_DATA.traditionalFoods.some(t => t.id === food.id);
      const card = document.createElement('div');
      card.className = 'food-card';
      card.innerHTML = `
        <span class="food-card-icon">${food.icon}</span>
        <span class="food-card-name">${food.name}</span>
      `;

      card.addEventListener('click', () => {
        if (card.classList.contains('served')) return;

        if (isTrad) {
          // Correct choice!
          window.sound.playCorrect();
          card.classList.add('served');
          this.feastServed.push(food);
          this.addFoodToPlate(food);

          document.getElementById('feast-count').textContent = `${this.feastServed.length} / ${this.feastTarget}`;
          document.getElementById('feast-fact').innerHTML = `✨ <strong>${food.name}:</strong> ${food.fact}`;

          if (this.feastServed.length >= this.feastTarget) {
            setTimeout(() => this.showVictory('Build Your Feast'), 600);
          }
        } else {
          // Distractor mistake!
          window.sound.playWrong();
          card.classList.add('shake-wrong');
          this.feastLives--;

          document.getElementById('feast-lives').textContent = this.feastLives === 1 ? '❤️🖤' : '🖤🖤';
          document.getElementById('feast-fact').innerHTML = `❌ <strong>${food.name}</strong> is delicious, but not traditional for Thanksgiving!`;

          if (this.feastLives <= 0) {
            setTimeout(() => {
              this.showGameOver('Too Many Distractors!', 'You made 2 mistakes with modern foods. Only 1 mistake is allowed!');
            }, 600);
          }
        }
      });

      grid.appendChild(card);
    });
  }

  addFoodToPlate(food) {
    document.getElementById('plate-empty-msg').style.display = 'none';
    const slots = document.getElementById('plate-slots');

    // 5 balanced positions on the circular plate
    const positions = [
      { top: '15%', left: '35%' },
      { top: '48%', left: '16%' },
      { top: '48%', left: '55%' },
      { top: '22%', left: '60%' },
      { top: '22%', left: '12%' }
    ];

    const pos = positions[this.feastServed.length - 1] || { top: '35%', left: '35%' };

    const item = document.createElement('div');
    item.className = 'plate-food-item';
    item.style.top = pos.top;
    item.style.left = pos.left;
    item.innerHTML = `
      <span class="plate-food-icon">${food.icon}</span>
      <span class="plate-food-name">${food.name}</span>
    `;
    slots.appendChild(item);
  }

  // =========================================================================
  // GAME 2: TRIVIA RUSH
  // 7 questions randomly picked from pool. Max 1 mistake (Score 6/7 to win).
  // =========================================================================
  startTriviaGame() {
    this.activeGame = 'trivia';
    window.sound.playClick();
    this.showScreen('trivia');

    // Select 7 random questions
    this.triviaQuestions = [...THANKSGIVING_DATA.triviaPool]
      .sort(() => 0.5 - Math.random())
      .slice(0, 7);

    this.triviaCurrentIndex = 0;
    this.triviaScore = 0;
    this.triviaMistakes = 0;

    this.updateTriviaHUD();
    this.loadTriviaQuestion();

    this.startTimer('trivia-timer', () => {
      this.showGameOver('Time Out!', 'The 2-minute timer finished before answering all 7 questions.');
    });
  }

  updateTriviaHUD() {
    document.getElementById('trivia-progress').textContent = `${this.triviaCurrentIndex + 1} / 7`;
    document.getElementById('trivia-mistakes').textContent = `${this.triviaMistakes} / 1 max`;
    const percent = ((this.triviaCurrentIndex) / 7) * 100;
    document.getElementById('trivia-progress-fill').style.width = `${percent}%`;
  }

  loadTriviaQuestion() {
    const q = this.triviaQuestions[this.triviaCurrentIndex];
    document.getElementById('trivia-q-num').textContent = `Question ${this.triviaCurrentIndex + 1} of 7`;
    document.getElementById('trivia-q-text').textContent = q.question;

    const expBox = document.getElementById('trivia-explanation');
    expBox.style.display = 'none';
    expBox.textContent = '';

    const grid = document.getElementById('trivia-options-grid');
    grid.innerHTML = '';

    // Shuffle options while keeping track of correct
    const choices = q.options.map((opt, i) => ({ text: opt, isCorrect: i === q.correct }));
    choices.sort(() => 0.5 - Math.random());

    const letters = ['A', 'B', 'C', 'D'];

    choices.forEach((choice, idx) => {
      const btn = document.createElement('button');
      btn.className = 'trivia-btn';
      btn.innerHTML = `
        <span class="trivia-btn-letter">${letters[idx]}</span>
        <span>${choice.text}</span>
      `;

      btn.addEventListener('click', () => {
        // Disable all buttons
        const allBtns = grid.querySelectorAll('.trivia-btn');
        allBtns.forEach(b => b.style.pointerEvents = 'none');

        if (choice.isCorrect) {
          window.sound.playCorrect();
          btn.classList.add('correct');
          this.triviaScore++;
        } else {
          window.sound.playWrong();
          btn.classList.add('wrong');
          this.triviaMistakes++;
          this.updateTriviaHUD();

          // Highlight correct one
          allBtns.forEach((b, i) => {
            if (choices[i].isCorrect) b.classList.add('correct');
          });
        }

        // Show explanation
        expBox.style.display = 'block';
        expBox.innerHTML = `💡 <strong>Did you know?</strong> ${q.explanation}`;

        // Check if exceeded max 1 mistake
        if (this.triviaMistakes > 1) {
          setTimeout(() => {
            this.showGameOver('Too Many Mistakes!', `You reached ${this.triviaMistakes} errors. Remember, maximum 1 mistake allowed!`);
          }, 1500);
          return;
        }

        setTimeout(() => {
          this.triviaCurrentIndex++;
          if (this.triviaCurrentIndex < 7) {
            this.updateTriviaHUD();
            this.loadTriviaQuestion();
          } else {
            // Completed 7 questions with <= 1 mistake
            this.showVictory('Trivia Rush (Score 6+/7)');
          }
        }, 1600);
      });

      grid.appendChild(btn);
    });
  }

  // =========================================================================
  // GAME 3: MEMORY MATCH
  // 8 Pairs (16 cards). Beat the 2-minute clock. NO mistake limit.
  // =========================================================================
  startMemoryGame() {
    this.activeGame = 'memory';
    window.sound.playClick();
    this.showScreen('memory');

    this.memoryPairsTotal = 8;
    this.memoryPairsFound = 0;
    this.flippedCards = [];
    this.isBoardLocked = false;

    document.getElementById('memory-pairs-count').textContent = `0 / ${this.memoryPairsTotal}`;

    // Pick 8 random pairs from pool
    const selected = [...THANKSGIVING_DATA.memoryPairs]
      .sort(() => 0.5 - Math.random())
      .slice(0, 8);

    // Duplicate each item to make a pair
    const deck = [];
    selected.forEach(item => {
      deck.push({ ...item, uid: item.id + '-1' });
      deck.push({ ...item, uid: item.id + '-2' });
    });

    // Shuffle deck
    deck.sort(() => 0.5 - Math.random());

    const grid = document.getElementById('memory-grid');
    grid.innerHTML = '';

    deck.forEach(cardData => {
      const card = document.createElement('div');
      card.className = 'memory-card';
      card.dataset.id = cardData.id;

      card.innerHTML = `
        <div class="card-face card-back">🍁</div>
        <div class="card-face card-front">
          <span class="memory-item-icon">${cardData.icon}</span>
          <span class="memory-item-word">${cardData.word}</span>
        </div>
      `;

      card.addEventListener('click', () => {
        if (this.isBoardLocked) return;
        if (card.classList.contains('flipped') || card.classList.contains('matched')) return;

        window.sound.playCardFlip();
        card.classList.add('flipped');
        this.flippedCards.push(card);

        if (this.flippedCards.length === 2) {
          this.checkMemoryMatch();
        }
      });

      grid.appendChild(card);
    });

    this.startTimer('memory-timer', () => {
      this.showGameOver('Time Out!', 'The 2 minutes ran out before matching all 8 pairs.');
    });
  }

  checkMemoryMatch() {
    this.isBoardLocked = true;
    const [c1, c2] = this.flippedCards;

    if (c1.dataset.id === c2.dataset.id) {
      // Match found!
      setTimeout(() => {
        window.sound.playCorrect();
        c1.classList.add('matched');
        c2.classList.add('matched');
        this.memoryPairsFound++;
        document.getElementById('memory-pairs-count').textContent = `${this.memoryPairsFound} / ${this.memoryPairsTotal}`;
        this.flippedCards = [];
        this.isBoardLocked = false;

        if (this.memoryPairsFound >= this.memoryPairsTotal) {
          setTimeout(() => this.showVictory('Memory Match'), 500);
        }
      }, 300);
    } else {
      // No match - simply flip back (unlimited tries, user only fights the 2-minute timer!)
      setTimeout(() => {
        c1.classList.remove('flipped');
        c2.classList.remove('flipped');
        this.flippedCards = [];
        this.isBoardLocked = false;
      }, 750);
    }
  }

  // =========================================================================
  // GAME 4: THE CATEGORY WHEEL
  // Wheel selects 1 of 4 categories -> 3 multiple choice questions.
  // Max 1 mistake (Score 2/3 to win). 2-minute timer.
  // =========================================================================
  startWheelGame() {
    this.activeGame = 'wheel';
    window.sound.playClick();
    this.showScreen('wheel');

    document.getElementById('wheel-stage-view').style.display = 'flex';
    document.getElementById('wheel-result-banner').style.display = 'none';
    document.getElementById('wheel-quiz-card').style.display = 'none';
    document.getElementById('wheel-quiz-hud-meta').style.display = 'none';
    document.getElementById('wheel-hud-theme').textContent = 'Spin the Wheel!';
    document.getElementById('btn-spin-wheel').disabled = false;

    this.wheelSpinning = false;
    this.wheelRotation = 0;
    this.wheelCategories = ['history', 'food', 'traditions', 'vocabulary'];

    this.drawWheelCanvas();

    const spinBtn = document.getElementById('btn-spin-wheel');
    spinBtn.onclick = () => this.spinWheel();

    this.startTimer('wheel-timer', () => {
      this.showGameOver('Time Out!', 'The 2-minute timer finished before completing the 3 questions.');
    });
  }

  drawWheelCanvas() {
    const canvas = document.getElementById('wheel-canvas');
    const ctx = canvas.getContext('2d');
    const size = 340;
    const center = size / 2;
    const radius = center - 8;
    const sliceAngle = (2 * Math.PI) / 4; // 4 slices

    ctx.clearRect(0, 0, size, size);

    const cats = this.wheelCategories.map(k => THANKSGIVING_DATA.wheelCategories[k]);

    cats.forEach((cat, i) => {
      const angle = i * sliceAngle;
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, radius, angle, angle + sliceAngle);
      ctx.fillStyle = cat.color;
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#FFFFFF';
      ctx.stroke();

      // Draw text and icon
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(angle + sliceAngle / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 15px Segoe UI, sans-serif';
      ctx.fillText(`${cat.icon} ${cat.name}`, radius - 20, 5);
      ctx.restore();
    });
  }

  spinWheel() {
    if (this.wheelSpinning) return;
    this.wheelSpinning = true;
    document.getElementById('btn-spin-wheel').disabled = true;

    window.sound.playClick();

    // Random landing category index (0, 1, 2, 3)
    const targetIndex = Math.floor(Math.random() * 4);
    const sliceAngleDeg = 90;

    // Needle is at top (270 degrees in standard canvas or pointing down from top)
    // Slices: 0: 0-90, 1: 90-180, 2: 180-270, 3: 270-360
    // To land under top arrow at 270 deg:
    const targetSliceCenter = targetIndex * 90 + 45;
    const offsetToTop = 270 - targetSliceCenter;
    const extraSpins = 360 * 5; // 5 full rotations

    const finalAngle = extraSpins + offsetToTop + (Math.random() * 20 - 10);
    const canvas = document.getElementById('wheel-canvas');

    // Tick sounds during rotation
    let tickCount = 0;
    const tickInterval = setInterval(() => {
      window.sound.playWheelTick();
      tickCount++;
      if (tickCount > 30) clearInterval(tickInterval);
    }, 110);

    canvas.style.transform = `rotate(${finalAngle}deg)`;

    setTimeout(() => {
      clearInterval(tickInterval);
      this.wheelSpinning = false;
      const chosenKey = this.wheelCategories[targetIndex];
      const chosenCat = THANKSGIVING_DATA.wheelCategories[chosenKey];

      // Show Category Banner
      const banner = document.getElementById('wheel-result-banner');
      banner.style.display = 'block';
      banner.innerHTML = `🎉 Category Selected: <strong>${chosenCat.icon} ${chosenCat.name}</strong>`;
      document.getElementById('wheel-hud-theme').textContent = `${chosenCat.icon} ${chosenCat.name}`;

      window.sound.playCorrect();

      // Transition to the 3 questions
      setTimeout(() => {
        document.getElementById('wheel-stage-view').style.display = 'none';
        document.getElementById('wheel-quiz-hud-meta').style.display = 'flex';
        document.getElementById('wheel-quiz-card').style.display = 'block';
        this.startWheelQuestions(chosenKey);
      }, 1500);

    }, 4200);
  }

  startWheelQuestions(categoryKey) {
    const cat = THANKSGIVING_DATA.wheelCategories[categoryKey];
    this.wheelQuestions = [...cat.questions].sort(() => 0.5 - Math.random()).slice(0, 3);
    this.wheelCurrentIndex = 0;
    this.wheelScore = 0;
    this.wheelMistakes = 0;

    this.loadWheelQuestion();
  }

  loadWheelQuestion() {
    const q = this.wheelQuestions[this.wheelCurrentIndex];
    document.getElementById('wheel-q-progress').textContent = `${this.wheelCurrentIndex + 1} / 3`;
    document.getElementById('wheel-q-num').textContent = `Question ${this.wheelCurrentIndex + 1} of 3 (${this.wheelMistakes}/1 error)`;
    document.getElementById('wheel-q-text').textContent = q.question;

    const expBox = document.getElementById('wheel-explanation');
    expBox.style.display = 'none';

    const grid = document.getElementById('wheel-options-grid');
    grid.innerHTML = '';

    const choices = q.options.map((opt, i) => ({ text: opt, isCorrect: i === q.correct }));
    choices.sort(() => 0.5 - Math.random());
    const letters = ['A', 'B', 'C', 'D'];

    choices.forEach((choice, idx) => {
      const btn = document.createElement('button');
      btn.className = 'trivia-btn';
      btn.innerHTML = `
        <span class="trivia-btn-letter">${letters[idx]}</span>
        <span>${choice.text}</span>
      `;

      btn.addEventListener('click', () => {
        const allBtns = grid.querySelectorAll('.trivia-btn');
        allBtns.forEach(b => b.style.pointerEvents = 'none');

        if (choice.isCorrect) {
          window.sound.playCorrect();
          btn.classList.add('correct');
          this.wheelScore++;
        } else {
          window.sound.playWrong();
          btn.classList.add('wrong');
          this.wheelMistakes++;

          allBtns.forEach((b, i) => {
            if (choices[i].isCorrect) b.classList.add('correct');
          });
        }

        expBox.style.display = 'block';
        expBox.innerHTML = `💡 ${q.explanation}`;

        if (this.wheelMistakes > 1) {
          setTimeout(() => {
            this.showGameOver('Too Many Mistakes!', `You had ${this.wheelMistakes} errors. You needed at least 2 out of 3 correct!`);
          }, 1500);
          return;
        }

        setTimeout(() => {
          this.wheelCurrentIndex++;
          if (this.wheelCurrentIndex < 3) {
            this.loadWheelQuestion();
          } else {
            // Completed 3 questions with <= 1 mistake
            this.showVictory('Category Wheel Challenge');
          }
        }, 1600);
      });

      grid.appendChild(btn);
    });
  }

  // =========================================================================
  // CELEBRATION CONFETTI ENGINE
  // =========================================================================
  startConfetti() {
    this.stopConfetti();
    this.confettiParticles = [];
    const colors = ['#E65100', '#FF8F00', '#880E4F', '#D4AF37', '#2E7D32', '#FFD54F', '#FFF'];

    for (let i = 0; i < 90; i++) {
      this.confettiParticles.push({
        x: Math.random() * this.confettiCanvas.width,
        y: Math.random() * this.confettiCanvas.height - this.confettiCanvas.height,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 3 + 2,
        angle: Math.random() * 360,
        spin: Math.random() * 8 - 4
      });
    }

    const render = () => {
      this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);

      this.confettiParticles.forEach(p => {
        p.y += p.speed;
        p.angle += p.spin;

        if (p.y > this.confettiCanvas.height) {
          p.y = -10;
          p.x = Math.random() * this.confettiCanvas.width;
        }

        this.confettiCtx.save();
        this.confettiCtx.translate(p.x, p.y);
        this.confettiCtx.rotate((p.angle * Math.PI) / 180);
        this.confettiCtx.fillStyle = p.color;
        this.confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        this.confettiCtx.restore();
      });

      this.confettiAnimId = requestAnimationFrame(render);
    };

    render();
  }

  stopConfetti() {
    if (this.confettiAnimId) {
      cancelAnimationFrame(this.confettiAnimId);
      this.confettiAnimId = null;
    }
    this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);
  }
}

// Initialize application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new ThanksgivingApp();
});
