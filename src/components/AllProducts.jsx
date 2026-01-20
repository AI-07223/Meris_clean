import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { products, categories } from '../data/products'

const AllProducts = () => {
    const [activeCategory, setActiveCategory] = useState('All')
    const [filteredProducts, setFilteredProducts] = useState(products)
    const sectionRef = useRef(null)

    useEffect(() => {
        if (activeCategory === 'All') {
            setFilteredProducts(products)
        } else {
            setFilteredProducts(products.filter(p => p.category === activeCategory))
        }
    }, [activeCategory])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )

        const cards = sectionRef.current?.querySelectorAll('.fade-in')
        cards?.forEach((card) => observer.observe(card))

        return () => observer.disconnect()
    }, [filteredProducts])

    return (
        <div className="all-products-page" ref={sectionRef}>
            {/* Hero Banner */}
            <div className="products-hero">
                <div className="container">
                    <h1>Our Products</h1>
                    <p>Premium cleaning solutions for every corner of your home</p>
                </div>
            </div>

            {/* Category Filter */}
            <div className="category-filter">
                <div className="container">
                    <div className="filter-tabs">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <section className="products-list section">
                <div className="container">
                    <div className="products-grid-large">
                        {filteredProducts.map((product, index) => (
                            <Link
                                to={`/product/${product.id}`}
                                key={product.id}
                                className={`product-card-large fade-in stagger-${(index % 6) + 1}`}
                            >
                                {product.badge && (
                                    <span className="product-badge">{product.badge}</span>
                                )}
                                <div className="product-card-image">
                                    <img src={product.image} alt={product.name} loading="lazy" />
                                </div>
                                <div className="product-card-content">
                                    <span className="product-category">{product.category}</span>
                                    <h3 className="product-title">{product.name}</h3>
                                    <p className="product-tagline">{product.tagline}</p>

                                    <div className="product-rating-small">
                                        <span className="stars-small">★</span>
                                        <span>{product.rating}</span>
                                        <span className="reviews-count">({product.reviews})</span>
                                    </div>

                                    <div className="product-card-footer">
                                        <div className="price-group">
                                            <span className="current-price">{product.currency}{product.price}</span>
                                            <span className="original-price-small">{product.currency}{product.originalPrice}</span>
                                        </div>
                                        <span className="view-btn">
                                            View Details
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AllProducts
