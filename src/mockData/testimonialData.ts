export interface testimonialType {
    id: number,
    name: string,
    position: string,
    image: string,
    review: string,
    rating: number
}

export const testimonialData: testimonialType[] = [
    {
        id: 1,
        name: "John W.",
        position: "Tech Blogger",
        image: "/images/testimonial/user-1.png",
        review: "As a tech reviewer, I test a lot of audio devices, and Vexora's earbuds deliver fantastic sound quality for their price range. The noise-canceling feature is particularly impressive, making them perfect for daily commutes and office work.",
        rating: 5.00
    },
    {
        id: 2,
        name: "Sarah K.",
        position: "Fitness Trainer",
        image: "/images/testimonial/user-2.png",
        review: "The Vexora Smartwatch has become my go-to fitness companion. It tracks my steps, heart rate, and workouts flawlessly. The customizable interface is an added bonus, making it both practical and stylish.",
        rating: 5.00
    },
    {
        id: 3,
        name: "David M.",
        position: "Photographer",
        image: "/images/testimonial/user-3.png",
        review: "I use drones for aerial photography, and the Vexora Drone exceeded my expectations. Its 4K camera and stability in flight offer professional-grade footage, making it a must-have for photographers like me.",
        rating: 5.00
    },
    {
        id: 4,
        name: "Emily R.",
        position: "Travel Vlogger",
        image: "/images/testimonial/user-4.png",
        review: "I've tested a lot of action cameras on my adventures, but the Vexora Action Camera really stands out. The video quality is crystal clear, and it's durable enough to handle extreme conditions. Vexora has nailed it!",
        rating: 4.00
    },
    {
        id: 5,
        name: "Michael T.",
        position: "Audio Engineer",
        image: "/images/testimonial/user-5.png",
        review: "For an audio engineer, sound clarity is everything, and Vexora's smart speakers deliver just that. The bass is deep, the highs are crisp, and the voice assistant integration is seamless. I highly recommend it for music lovers.",
        rating: 5.00
    },
    {
        id: 6,
        name: "Jessica L.",
        position: "Product Manager",
        image: "/images/testimonial/user-6.png",
        review: "I've been using Vexora earbuds for conference calls and listening to music on the go. They fit comfortably and stay secure during workouts. The battery life is impressive, lasting me through a busy workday.",
        rating: 4.5
    },
    {
        id: 7,
        name: "Tom B.",
        position: "",
        image: "/images/testimonial/user-7.png",
        review: "Vexora's drone provides professional-grade aerial photography with smooth navigation and precise control. I've used it for several short films, and it performs just as well as some of the more expensive models out there.",
        rating: 5.00
    },
    {
        id: 8,
        name: "Anna P.",
        position: "Yoga Instructor",
        image: "/images/testimonial/user-8.png",
        review: "The Vexora Smartwatch keeps me on track with my fitness goals. From tracking my yoga sessions to monitoring my sleep, it's sleek and stylish, so I wear it all day, even during classes.",
        rating: 5.00
    },
    {
        id: 9,
        name: "James D.",
        position: "Adventure Sports Enthusiast",
        image: "/images/testimonial/user-9.png",
        review: "Whether I'm surfing or snowboarding, the Vexora Action Camera captures every moment in stunning detail. It's lightweight, easy to mount, and has fantastic image stabilization. Perfect for adrenaline junkies like me!",
        rating: 5.00
    }
]