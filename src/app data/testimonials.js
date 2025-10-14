import profileA from "../assets/images/testimonials/ProfileA.jpg";
import profileB from "../assets/images/testimonials/ProfileB.png";
import posterA from "../assets/images/testimonials/posterA.png";
import posterB from "../assets/images/testimonials/posterB.png";
import emojiA from "../assets/images/testimonials/happiness.png";

const testimonials = [
    {
        id:1, 
        name: "Nashwan",
        quote: "Go to person for all my needs. His attention to detail and thoughtful design helped elevate our presence",
        img: profileB,
        tags: ["Posters", "Video Editing", "Brand Identity"],
        poster: posterB,
        emoji: emojiA
    },
    {
        id:2, 
        name: "Alice",
        quote: "Working with him was a fantastic experience. He took the time to understand our brand and delivered designs that exceeded our expectations.",  
        img: profileA,
        tags: ["Social Media", "Brand Identity", "Logo Design"],
        poster: posterA,
        emoji: emojiA
    }
];

export default testimonials;