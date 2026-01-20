import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const Hero = () => {
    const sparklesRef = useRef(null)

    useEffect(() => {
        if (!sparklesRef.current) return

        // Create sparkle particles
        for (let i = 0; i < 40; i++) {
            const sparkle = document.createElement('div')
            sparkle.classList.add('sparkle')
            sparkle.style.left = `${Math.random() * 100}%`
            sparkle.style.top = `${Math.random() * 100}%`
            const size = Math.random() * 12 + 4
            sparkle.style.width = `${size}px`
            sparkle.style.height = `${size}px`
            sparkle.style.animationDelay = `${Math.random() * 5}s`
            sparkle.style.animationDuration = `${Math.random() * 3 + 2}s`
            sparklesRef.current.appendChild(sparkle)
        }

        return () => {
            if (sparklesRef.current) {
                sparklesRef.current.innerHTML = ''
            }
        }
    }, [])

    return (
        <section className="hero" id="home">
            <div className="sparkles" ref={sparklesRef}></div>

            {/* Decorative elements */}
            <div className="hero-decor hero-decor-1"></div>
            <div className="hero-decor hero-decor-2"></div>
            <div className="hero-decor hero-decor-3"></div>

            <div className="hero-content">
                <div className="hero-badge">
                    <span className="badge-icon">✨</span>
                    <span>PREMIUM QUALITY</span>
                    <span className="badge-icon">✨</span>
                </div>

                <img
                    src="/MerisLogo.png"
                    alt="MerisClean Logo"
                    className="hero-logo"
                />

                <h1 className="hero-title">
                    Professional Cleaning<br />
                    <span>Made Simple</span>
                </h1>

                <p className="hero-description">
                    Experience the power of premium cleaning solutions designed for your home.
                    Eco-friendly formulas that deliver exceptional results every time.
                </p>

                <div className="hero-buttons">
                    <Link to="/products" className="btn btn-primary">
                        <span>Explore Products</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                    <a href="#about" className="btn btn-secondary">
                        <span>Learn More</span>
                    </a>
                </div>

                <div className="hero-trust">
                    <div className="trust-item">
                        <span className="trust-number">50K+</span>
                        <span className="trust-label">Happy Customers</span>
                    </div>
                    <div className="trust-divider"></div>
                    <div className="trust-item">
                        <span className="trust-number">15+</span>
                        <span className="trust-label">Products</span>
                    </div>
                    <div className="trust-divider"></div>
                    <div className="trust-item">
                        <span className="trust-number">99%</span>
                        <span className="trust-label">Satisfaction</span>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <span>Scroll Down</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
            </div>
        </section>
    )
}

export default Hero
