/**
 * clients-data.js
 * 
 * Complete Client Configuration File
 * Add, update, or remove clients here
 * 
 * Format:
 * {
 *   name: "Client Name",
 *   slug: "client-slug",           // folder name (lowercase, no spaces, use hyphens)
 *   pin: "123456",                  // 6-digit PIN code for access
 *   pinHint: "Event date (YYYYMMDD)", // Optional hint for the PIN
 *   thumbnail: null,                // path to thumbnail or null for gradient placeholder
 *   backgroundImage: "path/to/bg.jpg",  // relative to client folder (../../assets/...)
 *   tagline: "Your Stories, Beautifully Preserved",
 *   events: [
 *     {
 *       title: "Event Name",
 *       date: "December 15, 2025",
 *       deliverables: [
 *         { type: "photos", label: "Photos", description: "View your photo gallery", link: "https://..." },
 *         { type: "videos", label: "Videos", description: "Watch your video highlights", link: "https://..." }
 *       ]
 *     }
 *   ]
 * }
 */

const CLIENTS_DATA = [
    {
        name: "Vharam",
        slug: "vharam",
        pin: "20260122",
        pinHint: "Birthday (YYYYMMDD)",
        thumbnail: "../assets/client-thumbnails/vharam.jpg",
        backgroundImage: "../../assets/client-thumbnails/vharam.jpg",
        tagline: "Your Stories, Beautifully Preserved",
        events: [
            {
                title: "1st Birthday Celebration",
                date: "January 22, 2026",
                deliverables: [
                    {
                        type: "photos",
                        label: "Photos",
                        description: "View your photo gallery",
                        link: "https://storiesblossomed.lightfolio.com/gallery/vharams-wild-one"
                    },
                    {
                        type: "videos",
                        label: "Videos",
                        description: "Watch your video highlights",
                        link: "https://your-vidflow-link.com/vharam-videos"
                    }
                ]
            }
        ]
    },
    {
        name: "Saruha & Rogan",
        slug: "saruha-rogan",
        pin: "20250621",
        pinHint: "Wedding date (YYYYMMDD)",
        thumbnail: "../assets/client-thumbnails/saruha-rogan.jpg",
        backgroundImage: "../../assets/client-thumbnails/saruha-rogan.jpg",
        tagline: "Your Stories, Beautifully Preserved",
        events: [
            {
                title: "Wedding Celebration",
                date: "June 21, 2025",
                deliverables: [
                    {
                        type: "photos",
                        label: "Mehendi",
                        description: "View your photo gallery",
                        link: "https://storiesblossomed.lightfolio.com/gallery/saruhas-mehendi"
                    },
                    {
                        type: "photos",
                        label: "Pon Urukkal",
                        description: "View your photo gallery",
                        link: "https://storiesblossomed.lightfolio.com/gallery/sarogan-ponurukkal"
                    }
                ]
            }
        ]
    }
];

/**
 * Get client data by slug
 */
function getClientBySlug(slug) {
    return CLIENTS_DATA.find(client => client.slug === slug);
}
