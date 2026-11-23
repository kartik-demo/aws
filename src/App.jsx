import { useState, useEffect, useRef } from "react";
import "./App.css";

const passages = [
  "The best way to learn programming is to practice every day and build projects that solve real problems.",
  "Technology continues to change the world by making communication faster and information easier to access.",
  "Success is not achieved overnight but through consistent effort patience and a willingness to learn.",
  "Developers write code to create applications that make everyday tasks easier and more efficient.",
  "Focus on improving your skills every day because small improvements lead to remarkable results.",
];

const TEST_DURATION = 60;

export default function App() {
  const [text, setText] = useState(passages[0]);
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(TEST_DURATION);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const inputRef = useRef(null);

  const correctChars = input
    .split("")
    .filter((char, index) => char === text[index]).length;

  const incorrectChars = input.length - correctChars;

  const accuracy =
    input.length > 0
      ? Math.round((correctChars / input.length) * 100)
      : 100;

  const elapsedTime = TEST_DURATION - timeLeft;

  const wpm =
    elapsedTime > 0
      ? Math.round(correctChars / 5 / (elapsedTime / 60))
      : 0;

  useEffect(() => {
    if (!started || finished) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setFinished(true);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [started, finished]);

  const handleChange = (e) => {
    const value = e.target.value;

    if (finished || value.length > text.length) return;

    if (!started && value.length > 0) {
      setStarted(true);
    }

    setInput(value);

    if (value.length === text.length) {
      setFinished(true);
    }
  };

  const restartTest = () => {
    const newText = passages[Math.floor(Math.random() * passages.length)];

    setText(newText);
    setInput("");
    setTimeLeft(TEST_DURATION);
    setStarted(false);
    setFinished(false);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const formatTime = (seconds) => {
    return `00:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="typing-app">
      <header className="header">
        <div className="brand">
          <div className="brand-logo">⌨</div>
          <span>TypeFlow</span>
        </div>

        <div className="header-badge">
          <span className="live-dot"></span>
          Typing Practice
        </div>
      </header>

      <main className="main-content">
        <section className="intro">
          <span className="eyebrow">YOUR DAILY PRACTICE</span>
          <h1>
            Test your <span>typing speed.</span>
          </h1>
          <p>
            Improve your speed, accuracy, and focus.
            Every keystroke makes you better.
          </p>
        </section>

        <section className="stats">
          <div className="stat-card">
            <span className="stat-label">WORDS / MIN</span>
            <strong>{finished ? wpm : wpm}</strong>
            <span className="stat-description">Typing speed</span>
          </div>

          <div className="stat-card">
            <span className="stat-label">ACCURACY</span>
            <strong>{accuracy}%</strong>
            <span className="stat-description">Correct characters</span>
          </div>

          <div className="stat-card timer-card">
            <span className="stat-label">TIME LEFT</span>
            <strong className={timeLeft <= 10 ? "timer-warning" : ""}>
              {formatTime(timeLeft)}
            </strong>
            <span className="stat-description">
              {started ? "Test in progress" : "60 second test"}
            </span>
          </div>
        </section>

        <section className="typing-card">
          <div className="typing-card-header">
            <div className="test-info">
              <span className="test-indicator"></span>
              <span>English text</span>
              <span className="separator">/</span>
              <span>60 seconds</span>
            </div>

            <button className="restart-button" onClick={restartTest}>
              <span>↻</span> Restart
            </button>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${(input.length / text.length) * 100}%`,
              }}
            />
          </div>

          <div
            className="passage"
            onClick={() => inputRef.current?.focus()}
          >
            {text.split("").map((char, index) => {
              let className = "char";

              if (index < input.length) {
                className +=
                  input[index] === char ? " correct" : " incorrect";
              } else if (index === input.length) {
                className += " current";
              }

              return (
                <span key={index} className={className}>
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </div>

          <textarea
            ref={inputRef}
            className="typing-input"
            value={input}
            onChange={handleChange}
            disabled={finished}
            placeholder={
              finished
                ? "Test completed!"
                : "Start typing the text above..."
            }
            spellCheck="false"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
          />

          <div className="typing-card-footer">
            <div className="keyboard-hint">
              <kbd>Tab</kbd>
              <span>Restart test</span>
            </div>

            <div className="character-count">
              {input.length} / {text.length} characters
            </div>
          </div>
        </section>

        {finished && (
          <section className="result-card">
            <div className="result-icon">🏆</div>
            <div>
              <h2>Test completed!</h2>
              <p>
                You typed at <strong>{wpm} WPM</strong> with{" "}
                <strong>{accuracy}% accuracy</strong>.
              </p>
            </div>

            <button onClick={restartTest}>Try again →</button>
          </section>
        )}

        <section className="tips">
          <div className="tip">
            <div className="tip-icon">⌘</div>
            <div>
              <strong>Stay focused</strong>
              <p>Keep your eyes on the text.</p>
            </div>
          </div>

          <div className="tip">
            <div className="tip-icon">⚡</div>
            <div>
              <strong>Find your rhythm</strong>
              <p>Speed comes with consistency.</p>
            </div>
          </div>

          <div className="tip">
            <div className="tip-icon">✓</div>
            <div>
              <strong>Prioritize accuracy</strong>
              <p>Correct typing beats rushing.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>TypeFlow</span>
        <span>Practice. Improve. Repeat.</span>
      </footer>
    </div>
  );
}