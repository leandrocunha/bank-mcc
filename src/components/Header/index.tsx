import { Link } from 'react-router-dom';
import './index.css';

export const Header = () => {
    return (
        <header className="header">
          <Link className="header__linkWrapper" to="/">
            <span style={{display: 'inline-block', height: 32, width: 46}}>
              <svg  style={{height: 32, width: 46}}>
                <path d="M40.649 12.795c-2.108 0-3.615.975-4.376 2.419 0-3.411 1.19-6.383 4.015-6.383 1.796 0 2.509 1.034 2.889 2.728l2.616-.523c-.615-2.926-2.474-4.347-5.487-4.347-3.785 0-6.617 2.906-6.617 9.42 0 5.783 2.361 8.641 6.43 8.641 3.363 0 5.881-2.296 5.881-6.08 0-2.956-1.576-5.875-5.351-5.875zm-.523 9.818c-2.087 0-3.531-1.92-3.782-4.463.634-2.172 2.04-3.253 3.701-3.253 2.136 0 3.342 1.577 3.342 3.82 0 2.407-1.373 3.896-3.261 3.896zM26.211 18.975c-.847.847-2.756 2.376-4.088 3.296h7.991v2.292H18.355V22.47c1.363-.973 4.193-3.086 5.964-4.858 1.695-1.695 2.805-3.244 2.805-5.518 0-2.237-1.229-3.167-2.89-3.167-1.702 0-3.062.984-3.062 3.039 0 .448.05.946.174 1.519l-2.671-.259a5.647 5.647 0 01-.174-1.395c0-2.743 1.924-5.142 5.821-5.142 3.215 0 5.593 1.669 5.593 5.318 0 3.318-2.423 5.705-3.513 6.779l-.191.189zM0 0h14.251v2.292H0zM11.579 6.875v12.1h-.001c0 1.071.025 1.719.075 2.342h-.05c-.262-.713-.571-1.338-1.031-2.152L3.416 6.875H.146v17.688h2.548v-12.1h.002c0-1.072-.025-1.719-.075-2.342h.05c.261.713.57 1.338 1.03 2.151l7.156 12.291h3.237V6.875h-2.515zM0 29.146h14.251v2.28H0z" />
              </svg>
          </span>
          <span className="header__appName">MCC</span>
        </Link>
      </header>        
    )
}