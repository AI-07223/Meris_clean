const ProductCard = ({ product, delay }) => {
    return (
        <div className={`product-card fade-in stagger-${(delay % 6) + 1}`}>
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

                <div className="product-footer">
                    <span className="product-price">
                        {product.price}
                        <span> / bottle</span>
                    </span>

                    <button className="product-btn">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
