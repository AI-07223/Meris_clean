import { Link } from 'react-router-dom'

const Navbar = ({ scrolled }) => {
    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src="/MerisLogo.png" alt="MerisClean" className="navbar-logo" />
                </Link>

                <ul className="nav-links">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/products" className="nav-link">Products</Link></li>
                    <li><a href="/#features" className="nav-link">Why Us</a></li>
                    <li><a href="/#about" className="nav-link">About</a></li>
                    <li><a href="/#contact" className="nav-link nav-cta">Contact Us</a></li>
                </ul>

                <button className="mobile-menu-btn" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
