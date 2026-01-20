import { useEffect, useRef } from 'react'

const features = [
    {
        icon: '🌿',
        title: 'Eco-Friendly',
        description: 'Made with biodegradable ingredients that are safe for the environment and your family.'
    },
    {
        icon: '⚡',
        title: 'Powerful Formula',
        description: 'Professional-grade cleaning power that tackles the toughest stains and grime.'
    },
    {
        icon: '💰',
        title: 'Great Value',
        description: 'Premium quality at affordable prices. More cleaning power per rupee.'
    },
    {
        icon: '🛡️',
        title: 'Safe & Gentle',
        description: 'Dermatologically tested formulas that are gentle on hands and surfaces.'
    }
]

const Features = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
        )

        const cards = sectionRef.current?.querySelectorAll('.fade-in')
        cards?.forEach((card) => observer.observe(card))

        return () => observer.disconnect()
    }, [])

    return (
        <section className="features section" id="features" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Why Choose MerisClean?</h2>
                    <p className="section-subtitle">
                        We're committed to delivering premium quality cleaning products that make a difference
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`feature-card fade-in stagger-${index + 1}`}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
