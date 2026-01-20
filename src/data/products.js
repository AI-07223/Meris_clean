// Product data with complete information for detailed pages
import allPurposeCleaner from '../assets/images/all_purpose_cleaner.png'
import glassCleaner from '../assets/images/glass_cleaner.png'
import floorCleaner from '../assets/images/floor_cleaner.png'
import bathroomCleaner from '../assets/images/bathroom_cleaner.png'
import kitchenDegreaser from '../assets/images/kitchen_degreaser.png'
import fabricSoftener from '../assets/images/fabric_softener.png'

export const products = [
    {
        id: 'all-purpose-cleaner',
        name: 'All-Purpose Cleaner',
        shortName: 'All-Purpose',
        category: 'Multi-Surface',
        tagline: 'One Solution. Every Surface.',
        description: 'Powerful formula for all surfaces. Cuts through grease and grime effortlessly.',
        longDescription: `Experience the ultimate cleaning power with MerisClean All-Purpose Cleaner. Our advanced formula is scientifically designed to tackle dirt, grease, and grime on virtually any surface in your home.

Whether it's kitchen countertops, bathroom tiles, glass surfaces, or stainless steel appliances, this versatile cleaner delivers professional-grade results every time. The pH-balanced formula is tough on messes but gentle on surfaces, ensuring no damage or residue.`,
        price: 299,
        originalPrice: 399,
        currency: '₹',
        size: '500ml',
        image: allPurposeCleaner,
        badge: 'Best Seller',
        rating: 4.8,
        reviews: 1247,
        inStock: true,
        features: [
            'Cleans 99.9% of household surfaces',
            'Streak-free shine guaranteed',
            'Pleasant fresh scent',
            'Safe for food-contact surfaces',
            'Biodegradable formula'
        ],
        ingredients: ['Purified Water', 'Plant-based Surfactants', 'Natural Fragrances', 'Citric Acid'],
        usage: 'Spray directly onto surface. Wipe with a clean cloth. No rinsing required for most surfaces.',
        highlights: [
            { icon: '🌿', text: 'Eco-Friendly' },
            { icon: '🏠', text: 'All Surfaces' },
            { icon: '✨', text: 'Streak-Free' },
            { icon: '🍋', text: 'Fresh Scent' }
        ]
    },
    {
        id: 'glass-sparkle',
        name: 'Glass Sparkle',
        shortName: 'Glass',
        category: 'Glass & Mirrors',
        tagline: 'Crystal Clear. Every Time.',
        description: 'Crystal clear streak-free shine for windows, mirrors, and glass surfaces.',
        longDescription: `Transform your glass surfaces with MerisClean Glass Sparkle. Our specialized formula is engineered to dissolve fingerprints, smudges, and water spots instantly, leaving behind nothing but brilliant, streak-free clarity.

Perfect for windows, mirrors, glass tables, shower doors, and even car windows. The quick-drying formula means no waiting – just spray, wipe, and admire the crystal-clear results.`,
        price: 249,
        originalPrice: 329,
        currency: '₹',
        size: '500ml',
        image: glassCleaner,
        badge: null,
        rating: 4.7,
        reviews: 892,
        inStock: true,
        features: [
            '100% streak-free formula',
            'Fast-drying technology',
            'Anti-static coating prevents dust',
            'Safe for tinted windows',
            'Ammonia-free formula'
        ],
        ingredients: ['Purified Water', 'Isopropyl Alcohol', 'Surfactants', 'Anti-static Agents'],
        usage: 'Spray evenly onto glass surface. Wipe with a lint-free cloth in circular motions for best results.',
        highlights: [
            { icon: '💎', text: 'Crystal Clear' },
            { icon: '⚡', text: 'Fast Drying' },
            { icon: '🪟', text: 'All Glass' },
            { icon: '🧲', text: 'Anti-Static' }
        ]
    },
    {
        id: 'floor-fresh',
        name: 'Floor Fresh',
        shortName: 'Floor',
        category: 'Floor Care',
        tagline: 'Walk on Brilliance.',
        description: 'Long-lasting freshness and brilliant shine for all floor types.',
        longDescription: `Elevate your floors with MerisClean Floor Fresh. This powerful yet gentle formula works on all floor types – tile, marble, hardwood, laminate, and vinyl – delivering a deep clean that leaves surfaces gleaming.

The concentrated formula means a little goes a long way. One capful is all you need for an entire room. The long-lasting fragrance keeps your home smelling fresh for hours after cleaning.`,
        price: 399,
        originalPrice: 499,
        currency: '₹',
        size: '1 Litre',
        image: floorCleaner,
        badge: 'New',
        rating: 4.9,
        reviews: 634,
        inStock: true,
        features: [
            'Works on all floor types',
            'Concentrated formula - high yield',
            '24-hour lasting fragrance',
            'Non-slip finish',
            'Safe for pets and children'
        ],
        ingredients: ['Purified Water', 'Coconut-derived Surfactants', 'Essential Oils', 'Natural Polymers'],
        usage: 'Add 1 capful to 5 litres of water. Mop as usual. For stubborn stains, apply directly and scrub.',
        highlights: [
            { icon: '🏡', text: 'All Floors' },
            { icon: '🌸', text: '24hr Fresh' },
            { icon: '🐕', text: 'Pet Safe' },
            { icon: '👶', text: 'Child Safe' }
        ]
    },
    {
        id: 'bathroom-shield',
        name: 'Bathroom Shield',
        shortName: 'Bathroom',
        category: 'Bathroom',
        tagline: 'Defence Against Germs.',
        description: 'Kills 99.9% germs. Removes limescale and soap scum effectively.',
        longDescription: `Protect your family with MerisClean Bathroom Shield. This powerful disinfectant is specially formulated for bathroom surfaces, killing 99.9% of bacteria and viruses on contact.

Say goodbye to limescale, soap scum, and hard water stains. The foaming action penetrates deep into grout lines and hard-to-reach areas, ensuring a thorough clean every time.`,
        price: 279,
        originalPrice: 349,
        currency: '₹',
        size: '500ml',
        image: bathroomCleaner,
        badge: null,
        rating: 4.6,
        reviews: 1089,
        inStock: true,
        features: [
            'Kills 99.9% bacteria and viruses',
            'Removes limescale and hard water stains',
            'Foaming action for deep cleaning',
            'Prevents mold and mildew growth',
            'Fresh disinfectant scent'
        ],
        ingredients: ['Purified Water', 'Sodium Hypochlorite', 'Surfactants', 'Chelating Agents'],
        usage: 'Spray on surface. Let sit for 5 minutes for disinfection. Scrub if needed and rinse with water.',
        highlights: [
            { icon: '🦠', text: '99.9% Germs' },
            { icon: '🧼', text: 'No Limescale' },
            { icon: '🛡️', text: 'Disinfects' },
            { icon: '💨', text: 'Fresh Scent' }
        ]
    },
    {
        id: 'kitchen-power',
        name: 'Kitchen Power',
        shortName: 'Kitchen',
        category: 'Kitchen',
        tagline: 'Cuts Through Grease. Instantly.',
        description: 'Heavy-duty degreaser for tough kitchen messes. Food-safe formula.',
        longDescription: `Tackle the toughest kitchen challenges with MerisClean Kitchen Power. This heavy-duty degreaser is specifically formulated to cut through baked-on grease, oil splatters, and stubborn food residue.

Perfect for stovetops, range hoods, ovens, and countertops. The food-safe formula means you can safely use it on surfaces that come in contact with food, giving you peace of mind in your kitchen.`,
        price: 329,
        originalPrice: 429,
        currency: '₹',
        size: '500ml',
        image: kitchenDegreaser,
        badge: 'Popular',
        rating: 4.8,
        reviews: 956,
        inStock: true,
        features: [
            'Cuts through baked-on grease',
            'Food-safe formula',
            'Works on stainless steel',
            'No harsh chemical smell',
            'Gentle on hands'
        ],
        ingredients: ['Purified Water', 'Plant-based Degreasers', 'Citrus Extracts', 'Emulsifiers'],
        usage: 'Spray on greasy surface. Wait 2-3 minutes. Wipe clean with damp cloth. Rinse for food-contact areas.',
        highlights: [
            { icon: '🔥', text: 'Cuts Grease' },
            { icon: '🍽️', text: 'Food Safe' },
            { icon: '🥄', text: 'All Metals' },
            { icon: '🧤', text: 'Gentle Hands' }
        ]
    },
    {
        id: 'fabric-soft',
        name: 'Fabric Soft',
        shortName: 'Fabric',
        category: 'Laundry',
        tagline: 'Softness You Can Feel.',
        description: 'Ultra-soft fabrics with long-lasting fragrance. Gentle on clothes.',
        longDescription: `Pamper your clothes with MerisClean Fabric Soft. This premium fabric softener wraps your fabrics in luxurious softness while infusing them with a delicate, long-lasting fragrance that stays fresh for days.

Our advanced formula reduces static cling, makes ironing easier, and extends the life of your clothes by reducing friction damage. Suitable for all fabric types and washing machines.`,
        price: 349,
        originalPrice: 449,
        currency: '₹',
        size: '1 Litre',
        image: fabricSoftener,
        badge: null,
        rating: 4.7,
        reviews: 723,
        inStock: true,
        features: [
            'Ultra-soft fabric finish',
            'Long-lasting fragrance (up to 7 days)',
            'Reduces static cling',
            'Makes ironing easier',
            'Suitable for sensitive skin'
        ],
        ingredients: ['Purified Water', 'Cationic Surfactants', 'Natural Fragrances', 'Silicone Emulsion'],
        usage: 'Add 35ml to the fabric softener compartment. For hand wash, add to final rinse water.',
        highlights: [
            { icon: '🧸', text: 'Ultra Soft' },
            { icon: '🌺', text: '7 Day Fresh' },
            { icon: '⚡', text: 'No Static' },
            { icon: '👕', text: 'Easy Iron' }
        ]
    }
]

export const getProductById = (id) => {
    return products.find(product => product.id === id)
}

export const getProductsByCategory = (category) => {
    if (category === 'All') return products
    return products.filter(product => product.category === category)
}

export const categories = ['All', 'Multi-Surface', 'Glass & Mirrors', 'Floor Care', 'Bathroom', 'Kitchen', 'Laundry']
