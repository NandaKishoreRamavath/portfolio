import brandLogo from "../assets/images/services/brand_service.webp";
import brandImg from "../assets//images/services/branding.webp";
import webLogo from "../assets/images/services/web_service.webp";
import webImg from "../assets/images/services/webDev.webp";
import illustrationLogo from "../assets/images/services/3d_service.webp";
import illustrationImg from "../assets/images/services/3d.webm";
const data = {
    BrandService : {
        header : "BRANDING",
        subHeader : "& IDENTITY",
        logo : brandLogo,
        mainImg : brandImg,
        subContext : "Distinct brands. Iconic logos.",
        mainContext : "Memorable identities.",
        activeContextHeader : "Identity Systems",
        activeContext : "Creating distinctive, strategy-driven brands that cut through the noise and inspire loyalty.",
        tags : ["Logotypes" , "Fonts" ,"2D"],
        category : "branding"
    },

    WebService : {
        header : "WEB DESIGN",
        subHeader : "& DEVELOPMENT",
        logo : webLogo,
        mainImg : webImg,
        subContext : "Pixel-perfect. Fast-loading.",
        mainContext : "Strategy-driven sites.",
        activeContextHeader : "Conversion Focused",
        activeContext : "Crafting fast, reliable websites optimized for user engagement, visibility, and growth.",
        tags : ["Responsive" , "UI/UX" ,"SEO"],
        category : "web"
        
    },
    illustrationService : {
        header : "3D MODELS",
        subHeader : "& ILLUSTRATIONS",
        logo : illustrationLogo,
        mainVideo : illustrationImg,
        subContext : "Striking visuals. Bold assets.",
        mainContext : "Next-level creativity.",
        activeContextHeader : "Immersive Assets",
        activeContext : "Designing dynamic 3D models and illustrations that captivate attention and boost conversions.",
        tags : ["Renders" , "Concepts"],
        category : "3d"
    }
}

export default data;