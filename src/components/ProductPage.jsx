import { useParams, Link } from 'react-router-dom'
import { getProductById, products } from '../data/products'
import { useState } from 'react'

const ProductPage = () => {
    const { id } = useParams()
    const product = getProductById(id)
    const [quantity, setQuantity] = useState(1)
    const [activeTab, setActiveTab] = useState('features')

    if (!product) {
        return (
            <div className="product-page-not-found">
                <div className="container">
                    <h1>Product Not Found</h1>
                    <p>Sorry, we couldn't find the product you're looking for.</p>
                    <Link to="/products" className="btn btn-primary">View All Products</Link>
                </div>
            </div>
        )
    }

    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

    // Get related products (same category, excluding current)
    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3)

    // If not enough related, add from other categories
    if (relatedProducts.length < 3) {
        const otherProducts = products
            .filter(p => p.id !== product.id && !relatedProducts.includes(p))
            .slice(0, 3 - relatedProducts.length)
        relatedProducts.push(...otherProducts)
    }

    return (
        <div className="product-page">
            {/* Breadcrumb */}
            <div className="breadcrumb">
                <div className="container">
                    <Link to="/">Home</Link>
                    <span className="separator">/</span>
                    <Link to="/products">Products</Link>
                    <span className="separator">/</span>
                    <span className="current">{product.name}</span>
                </div>
            </div>

            {/* Main Product Section */}
            <section className="product-detail">
                <div className="container">
                    <div className="product-detail-grid">
                        {/* Product Image */}
                        <div className="product-detail-image">
                            <div className="image-wrapper">
                                {product.badge && (
                                    <span className="product-detail-badge">{product.badge}</span>
                                )}
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-highlights-row">
                                {product.highlights.map((highlight, index) => (
                                    <div key={index} className="highlight-item">
                                        <span className="highlight-icon">{highlight.icon}</span>
                                        <span className="highlight-text">{highlight.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="product-detail-info">
                            <span className="product-detail-category">{product.category}</span>
                            <h1 className="product-detail-title">{product.name}</h1>
                            <p className="product-detail-tagline">{product.tagline}</p>

                            {/* Rating */}
                            <div className="product-rating">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <span className="rating-value">{product.rating}</span>
                                <span className="review-count">({product.reviews.toLocaleString()} reviews)</span>
                            </div>

                            {/* Price */}
                            <div className="product-detail-pricing">
                                <span className="current-price">{product.currency}{product.price}</span>
                                <span className="original-price">{product.currency}{product.originalPrice}</span>
                                <span className="discount-badge">{discount}% OFF</span>
                            </div>

                            <p className="product-detail-description">{product.longDescription}</p>

                            {/* Size */}
                            <div className="product-size">
                                <span className="size-label">Size:</span>
                                <span className="size-value">{product.size}</span>
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className="product-actions">
                                <div className="quantity-selector">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="qty-btn"
                                    >
                                        −
                                    </button>
                                    <span className="qty-value">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="qty-btn"
                                    >
                                        +
                                    </button>
                                </div>
                                <button className="btn btn-add-cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                    Add to Cart
                                </button>
                                <button className="btn btn-buy-now">
                                    Buy Now
                                </button>
                            </div>

                            {/* Trust Badges */}
                            <div className="trust-badges">
                                <div className="trust-badge">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                    <span>Premium Quality</span>
                                </div>
                                <div className="trust-badge">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="1" y="3" width="15" height="13"></rect>
                                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                        <circle cx="5.5" cy="18.5" r="2.5"></circle>
                                        <circle cx="18.5" cy="18.5" r="2.5"></circle>
                                    </svg>
                                    <span>Free Delivery</span>
                                </div>
                                <div className="trust-badge">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="23 4 23 10 17 10"></polyline>
                                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                                    </svg>
                                    <span>Easy Returns</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Tabs */}
            <section className="product-tabs-section">
                <div className="container">
                    <div className="tabs-header">
                        <button
                            className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
                            onClick={() => setActiveTab('features')}
                        >
                            Features
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'ingredients' ? 'active' : ''}`}
                            onClick={() => setActiveTab('ingredients')}
                        >
                            Ingredients
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'usage' ? 'active' : ''}`}
                            onClick={() => setActiveTab('usage')}
                        >
                            How to Use
                        </button>
                    </div>

                    <div className="tabs-content">
                        {activeTab === 'features' && (
                            <div className="tab-panel">
                                <ul className="features-list">
                                    {product.features.map((feature, index) => (
                                        <li key={index}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {activeTab === 'ingredients' && (
                            <div className="tab-panel">
                                <div className="ingredients-grid">
                                    {product.ingredients.map((ingredient, index) => (
                                        <div key={index} className="ingredient-item">
                                            <span className="ingredient-icon">🌿</span>
                                            <span>{ingredient}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {activeTab === 'usage' && (
                            <div className="tab-panel">
                                <p className="usage-text">{product.usage}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="related-products section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">You May Also Like</h2>
                    </div>
                    <div className="related-products-grid">
                        {relatedProducts.map(relProduct => (
                            <Link
                                to={`/product/${relProduct.id}`}
                                key={relProduct.id}
                                className="related-product-card"
                            >
                                <div className="related-product-image">
                                    <img src={relProduct.image} alt={relProduct.name} />
                                </div>
                                <div className="related-product-info">
                                    <span className="related-product-category">{relProduct.category}</span>
                                    <h3>{relProduct.name}</h3>
                                    <span className="related-product-price">{relProduct.currency}{relProduct.price}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductPage
