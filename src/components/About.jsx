import { useEffect, useRef, useState } from 'react'

const stats = [
    { number: 50000, suffix: '+', label: 'Happy Customers' },
    { number: 15, suffix: '+', label: 'Products' },
    { number: 99, suffix: '%', label: 'Satisfaction Rate' }
]

const About = () => {
    const sectionRef = useRef(null)
    const [countersStarted, setCountersStarted] = useState(false)
    const [counts, setCounts] = useState(stats.map(() => 0))

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')

                        // Start counter animation
                        if (!countersStarted && entry.target.classList.contains('about-stats')) {
                            setCountersStarted(true)
                            animateCounters()
                        }
                    }
                })
            },
            { threshold: 0.3 }
        )

        const elements = sectionRef.current?.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .about-stats')
        elements?.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [countersStarted])

    const animateCounters = () => {
        const duration = 2000
        const steps = 60
        const interval = duration / steps

        let step = 0
        const timer = setInterval(() => {
            step++
            const progress = step / steps
            const easeOut = 1 - Math.pow(1 - progress, 3)

            setCounts(stats.map(stat => Math.floor(stat.number * easeOut)))

            if (step >= steps) {
                clearInterval(timer)
                setCounts(stats.map(stat => stat.number))
            }
        }, interval)
    }

    return (
        <section className="about section" id="about" ref={sectionRef}>
            <div className="container">
                <div className="about-content">
                    <div className="about-image fade-in-left">
                        <img
                            src="/MerisLogo.png"
                            alt="MerisClean Products"
                            style={{
                                width: '100%',
                                maxWidth: '400px',
                                margin: '0 auto',
                                display: 'block'
                            }}
                        />
                    </div>

                    <div className="about-text fade-in-right">
                        <h2>
                            About <span className="text-gradient">MerisClean</span>
                        </h2>
                        <p>
                            At MerisClean, we believe that every home deserves premium quality cleaning
                            products. Our journey started with a simple mission: to create powerful,
                            eco-friendly cleaning solutions that don't compromise on quality or safety.
                        </p>
                        <p>
                            Every product in our range is carefully formulated using the finest ingredients,
                            ensuring exceptional cleaning performance while being gentle on surfaces and
                            the environment. We're proud to be a trusted name in homes across the country.
                        </p>

                        <div className="about-stats">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat">
                                    <div className="stat-number">
                                        {counts[index].toLocaleString()}{stat.suffix}
                                    </div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
