import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'

const Products = () => {
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
        <section className="products section" id="products" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Premium Products</h2>
                    <p className="section-subtitle">
                        Discover our premium range of cleaning solutions crafted with care for your home
                    </p>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <Link
                            to={`/product/${product.id}`}
                            key={product.id}
                            className={`product-card fade-in stagger-${(index % 6) + 1}`}
                        >
                            {product.badge && (
                                <span className="product-badge">{product.badge}</span>
                            )}

                            <div className="product-image-wrapper">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-image"
                                    loading="lazy"
                                />
                            </div>

                            <div className="product-content">
                                <span className="product-category">{product.category}</span>
                                <h3 className="product-title">{product.name}</h3>
                                <p className="product-description">{product.description}</p>

                                <div className="product-rating-small">
                                    <span className="stars-small">★</span>
                                    <span>{product.rating}</span>
                                    <span className="reviews-count">({product.reviews})</span>
                                </div>

                                <div className="product-footer">
                                    <div className="price-group">
                                        <span className="product-price">{product.currency}{product.price}</span>
                                        <span className="original-price-small">{product.currency}{product.originalPrice}</span>
                                    </div>

                                    <span className="product-btn">
                                        View Details
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="products-cta">
                    <Link to="/products" className="btn btn-outline-dark">
                        View All Products
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Products
