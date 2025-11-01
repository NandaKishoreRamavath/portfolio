import profileBigB from "../assets/images/testimonials/bigB.webp";
import profileAlessaDesign from "../assets/images/testimonials/alessa_designs.webp";
import profileDaudRunClub from "../assets/images/testimonials/daud_run_club.webp";
import profileSky_civil_tech from "../assets/images/testimonials/sky_civil_tech.webp";
import assetBigB from "../assets/images/testimonials/asset_bigB.webp";
import assetAlessaDesign from "../assets/images/testimonials/asset_alessa.webp";
import assetSkyCivilTech from "../assets/images/testimonials/asset_skyCivilTech.webp";
import assetDaudRunClub from "../assets/images/testimonials/asset_daudRunClub.webp";
import emojiHappy from "../assets/images/testimonials/happiness.webp";
import emojiFire from "../assets/images/testimonials/fires.webp";
import emojiLove from "../assets/images/testimonials/love.webp";

const testimonials = [
    {
        id:1, 
        name: "Nashwan",
        quote: "Go to person for all my needs. His attention to detail and thoughtful design helped elevate our presence",
        img: profileBigB,
        tags: ["Logo Design", "Video Editing", "Brand Identity"],
        asset: assetBigB,
        emoji: emojiHappy
    },
    {
        id:2, 
        name: "Alessa designs",
        quote: "Working with him was a fantastic experience. He took the time to understand our brand and delivered designs that exceeded our expectations.",  
        img: profileAlessaDesign,
        tags: ["Social Media", "Brand Identity", "Posters"],
        asset: assetAlessaDesign,
        emoji: emojiLove
    },
    {
        id:3, 
        name: "Bhanu",
        quote: "Really impressed with the creativity and quality. The posters gave our new business a strong start — people instantly noticed the difference.",  
        img: profileSky_civil_tech,
        tags: ["Posters", "Marketing", "Brand Visibility"],
        asset: assetSkyCivilTech,
        emoji: emojiHappy
    },
    {
        id:4, 
        name: "Deepak",
        quote: "Creative and full of energy! The posters perfectly matched our event’s youthful vibe and got people talking.",  
        img: profileDaudRunClub,
        tags: ["Event Posters", "Visual Design", "Creative Direction"],
        asset: assetDaudRunClub,
        emoji: emojiFire
    }
];

export default testimonials;