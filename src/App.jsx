import { useState } from "react";
import "./App.css";

export default function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Side */}
        <div className="login-left">
          <div className="brand">
            <div className="brand-icon">✦</div>
            <span>nexora</span>
          </div>

          <div className="login-content">
            <div className="welcome-tag">
              <span className="status-dot"></span>
              Welcome back
            </div>

            <h1>
              Sign in to
              <br />
              your account
            </h1>

            <p className="subtitle">
              Enter your details to access your workspace
              and continue where you left off.
            </p>

            <form className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email address</label>

                <div className="input-wrapper">
                  <span className="input-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="3"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <path
                        d="M4 7L12 13L20 7"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>

                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="label-row">
                  <label htmlFor="password">Password</label>
                  <a href="#forgot">Forgot password?</a>
                </div>

                <div className="input-wrapper">
                  <span className="input-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect
                        x="4"
                        y="10"
                        width="16"
                        height="11"
                        rx="3"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <path
                        d="M8 10V7a4 4 0 1 1 8 0v3"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="remember-row">
                <label className="remember-label">
                  <input type="checkbox" />
                  <span className="custom-checkbox"></span>
                  Remember me
                </label>
              </div>

              <button type="submit" className="login-button">
                Sign in
                <span>→</span>
              </button>
            </form>

            <div className="divider">
              <span>OR CONTINUE WITH</span>
            </div>

            <button className="google-button" type="button">
              <svg viewBox="0 0 48 48" width="19" height="19">
                <path
                  fill="#FFC107"
                  d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8.1 3.2l5.7-5.7C34.2 5.8 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5Z"
                />
                <path
                  fill="#FF3D00"
                  d="m6.3 14.7 6.6 4.8C14.7 15.2 19 12 24 12c3.1 0 5.9 1.2 8.1 3.2l5.7-5.7C34.2 5.8 29.4 4 24 4 16.3 4 9.6 8.3 6.3 14.7Z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.2 0 10-2 13.6-5.4l-6.3-5.3C29.2 35.1 26.7 36 24 36c-5.2 0-9.7-3.3-11.3-8l-6.6 5C9.4 39.6 16.2 44 24 44Z"
                />
                <path
                  fill="#1976D2"
                  d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.3 5.5l6.3 5.3C41.1 35.2 44 29.9 44 24c0-1.2-.1-2.4-.4-3.5Z"
                />
              </svg>
              Continue with Google
            </button>

            <p className="signup-text">
              Don't have an account? <a href="#signup">Create account</a>
            </p>
          </div>

          <div className="login-footer">
            <span>© 2026 Nexora Inc.</span>
            <div>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="login-right">
          <div className="visual-grid"></div>

          <div className="visual-content">
            <div className="floating-card card-top">
              <div className="mini-icon">↗</div>
              <div>
                <span className="card-label">Productivity</span>
                <strong>+28.4%</strong>
              </div>
            </div>

            <div className="visual-circle">
              <div className="circle circle-outer"></div>
              <div className="circle circle-middle"></div>
              <div className="circle circle-inner"></div>

              <div className="center-logo">
                <span>✦</span>
              </div>

              <div className="orbit-dot dot-one"></div>
              <div className="orbit-dot dot-two"></div>
              <div className="orbit-dot dot-three"></div>
            </div>

            <div className="floating-card card-bottom">
              <div className="avatar-stack">
                <div className="avatar avatar-one">A</div>
                <div className="avatar avatar-two">J</div>
                <div className="avatar avatar-three">M</div>
                <div className="avatar avatar-four">+</div>
              </div>

              <div>
                <strong>2,400+</strong>
                <span className="card-label">People working smarter</span>
              </div>
            </div>

            <div className="right-text">
              <h2>Everything you need.</h2>
              <p>
                One workspace. Endless possibilities.
                Stay focused, stay productive, and
                make your next big move.
              </p>
            </div>
          </div>

          <div className="right-footer">
            <span>Designed for modern teams</span>
            <span>● ● ●</span>
          </div>
        </div>
      </div>
    </div>
  );
}