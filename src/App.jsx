import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Features from './components/Features'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ProductPage from './components/ProductPage'
import AllProducts from './components/AllProducts'
import ScrollToTop from './components/ScrollToTop'

function App() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <Router>
            <ScrollToTop />
            <div className="app">
                <Navbar scrolled={scrolled} />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <Products />
                            <Features />
                            <About />
                            <CTA />
                        </>
                    } />
                    <Route path="/products" element={<AllProducts />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
