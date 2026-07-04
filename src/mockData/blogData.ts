export interface AuthorType {
    name: string;
    image: string;
}

export interface DateType {
    day: string;
    month: string;
    year: number;
}

export interface BlogType {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    author: AuthorType;
    date: DateType;
    size: "large" | "medium" | "small";
}

export const blogData: BlogType[] = [
    {
        id: 1,
        title: "Samsung Galaxy Watch Ultra – Den ultimata smartklockan för träning och vardag",
        thumbnail: "/images/blogs/blogg-shop-ornexa1.webp",
        description: "Upptäck varför Samsung Galaxy Watch Ultra är ett av marknadens mest avancerade smarta klockor med kraftfull batteritid, GPS och avancerade hälsofunktioner.",
        author: {
            name: "Ornexa team",
            image: "/images/blogs/user-1.png"
        },
        date: {
            day: "04",
            month: "Juli",
            year: 2026
        },
        size: "large"
    },
    {
        id: 2,
        title: "Capture Every Angle with the Vexora 360 Pro: A Complete Review",
        thumbnail: "/images/blogs/blog-2.png",
        description: "Smart thermostats aren’t just a fancier way to control your home’s temperature. Contemporary smart thermostats allow",
        author: {
            name: "Evan Davis",
            image: "/images/blogs/user-2.png"
        },
        date: {
            day: "25",
            month: "June",
            year: 2024
        },
        size: "small"
    },
    {
        id: 3,
        title: "Experience Immersive Sound Anywhere with Wave Speaker",
        thumbnail: "/images/blogs/blog-3.png",
        description: "Smart thermostats aren’t just a fancier way to control your home’s temperature. Contemporary smart thermostats allow",
        author: {
            name: "Kathryn Murphy",
            image: "/images/blogs/user-3.png"
        },
        date: {
            day: "12",
            month: "June",
            year: 2024
        },
        size: "small"
    },
    {
        id: 4,
        title: "Capture Every Angle with the Vexora 360 Pro: A Complete Review",
        thumbnail: "/images/blogs/blog-4.png",
        description: "Smart thermostats aren’t just a fancier way to control your home’s temperature. Contemporary smart thermostats allow",
        author: {
            name: "Kathryn Murphy",
            image: "/images/blogs/user-1.png"
        },
        date: {
            day: "12",
            month: "June",
            year: 2024
        },
        size: "small"
    },
    {
        id: 5,
        title: "BeatBlaze Mini: Big Sound, Small Package",
        thumbnail: "/images/blogs/blog-1.png",
        description:
            "The BeatBlaze Mini delivers impressive audio performance in a compact form, making it perfect for travel and small spaces.",
        author: {
            name: "Emily Thompson",
            image: "/images/blogs/user-2.png",
        },
        date: {
            day: "05",
            month: "April",
            year: 2024,
        },
        size: "small",
    },
    {
        id: 6,
        title: "Swap Your Style: The Best Bands for Your Vexora Watch",
        thumbnail: "/images/blogs/blog-2.png",
        description:
            "Discover the best replacement bands for your Vexora Watch to match every outfit and occasion.",
        author: {
            name: "Floyd Miles",
            image: "/images/blogs/user-3.png",
        },
        date: {
            day: "25",
            month: "June",
            year: 2024,
        },
        size: "small",
    },
    {
        id: 7,
        title: "SkyFly Ultra Review: The Drone That Sees What You Can’t",
        thumbnail: "/images/blogs/blog-7.png",
        description:
            "SkyFly Ultra brings next-level aerial photography with obstacle avoidance and cinematic flight modes.",
        author: {
            name: "Kathryn Murphy",
            image: "/images/blogs/user-4.png",
        },
        date: {
            day: "12",
            month: "June",
            year: 2024,
        },
        size: "large",
    },
    {
        id: 8,
        title: "Capture Every Angle with the Vexora 360 Pro: A Complete Review",
        thumbnail: "/images/blogs/blog-4.png",
        description:
            "The Vexora 360 Pro redefines immersive content creation with stunning 360° video and advanced stabilization.",
        author: {
            name: "Kathryn Murphy",
            image: "/images/blogs/user-4.png",
        },
        date: {
            day: "12",
            month: "June",
            year: 2024,
        },
        size: "small",
    },
    {
        id: 9,
        title: "Smartwatch Face-Off: Pulse X1 vs Galaxy Watch 6",
        thumbnail: "/images/blogs/blog-5.png",
        description:
            "We compare design, battery life, and performance to help you choose between Pulse X1 and Galaxy Watch 6.",
        author: {
            name: "Emily Thompson",
            image: "/images/blogs/user-1.png",
        },
        date: {
            day: "05",
            month: "April",
            year: 2024,
        },
        size: "small",
    },
]