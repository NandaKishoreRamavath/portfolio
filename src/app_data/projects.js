 import bigBopening from "../assets/images/projects/bigB_home.webp";
 import bigBitem1 from "../assets/images/projects/bigB_showcase.png";
 import bigBitem2 from "../assets/images/projects/BigB_logo_breakdown.png";
 import bigBitem3 from "../assets/images/projects/jersey_showcase.png";
 import bigBitem4 from "../assets/images/projects/posters.svg";
 import sctopening from "../assets/images/projects/sct_home.webp";
 import sctitem from "../assets/images/projects/sky_civil_tech.svg";
 import asdopening from "../assets/images/projects/agro_drone_aspirants_home.webp";
 import asditem1 from "../assets/images/projects/agrosky_drone_showcase.svg";
 import asditem2 from "../assets/images/projects/agrosky_drone_showcase_page2.svg";
 import asditem3 from "../assets/images/projects/agrosky_drone_showcase_page3.svg";
 import CEopening from "../assets/images/projects/CE_home.webp";
import explorationitem from "../assets/images/projects/others.svg";
import togglOpening from "../assets/images/projects/toggl_home.webp";
import togglitem from "../assets/images/projects/toggl_showcase.gif";

 
 
 
 const projectsData = [
    {
      id : 1,
      openingImage : bigBopening,
      projectName : "K One Big B",
      projectClass: "Branding",
      projectClass_span : "&identity",
      desc: "BigB Mehndi is a heritage-driven brand known for its traditional henna products. When I began collaborating with them, the focus was on strengthening their digital identity — giving the brand a visual presence that felt authentic, memorable, and emotionally grounded.\n\nWhat started with a few poster designs quickly evolved into a deeper creative partnership. I developed a consistent visual language for their social media — combining rich, earthy tones of royal blue, brown, and cream with typography and textures inspired by Indian art and culture. The goal was to make each post feel like a story, not an ad — something that carried emotion, family, and tradition.\n\nImpressed by the brand’s new direction, the client extended the collaboration beyond digital content. I was later entrusted with designing a refreshed logo and a custom jersey for their sponsored sports team — blending legacy with modern design sensibility.\n\nThrough this project, I realized how powerful consistent storytelling can be. BigB Mehndi’s identity now stands as a refined blend of tradition and modernity — built not just on visuals, but on emotion and meaning.",
      showcase : [bigBitem1, bigBitem2, bigBitem3, bigBitem4]
    },
    {
      id : 2,
      openingImage : sctopening,
      projectName : "Sky Civil Technologies",
      projectClass: "Branding",
      projectClass_span : "&identity",
      desc: "Sky Civil Technologies was a newly emerging construction solutions brand preparing for its official launch. I was brought on to shape their early visual identity through a set of curated posters — designed to introduce the brand’s services and upcoming product collaborations.\n\nThe goal was to strike a balance between technical precision and modern appeal — turning a typically industrial space into something visually engaging and trustworthy. Each design reflected the brand’s focus on innovation and reliability while maintaining a clean, consistent aesthetic.\n\nThrough this project, I helped the brand present itself with clarity and confidence — setting the tone for a strong market entry.",
      showcase : [sctitem]
    },  
    {
      id : 3,
      openingImage : CEopening,
      projectName : "Creative Explorations",
      projectClass: "Branding",
      projectClass_span : "&identity",
      desc:"A showcase of campaign posters created for a range of situations—some to answer real client briefs, others as conceptual studies designed to expand creative range. Each piece responds to different needs, translating brand goals or event energy into visually compelling narratives.\n\nTypography, color, and layout are shaped by each campaign’s unique purpose—whether driving excitement for an event, introducing product identity, or capturing the essence of lifestyle and culture. Solutions are tailored, but always clear and intentional.\n\nTogether, these posters reflect adaptability and creative problem-solving, turning varied concepts into bold, memorable visuals that stand out in any context.",
      showcase : [explorationitem]
    },
      {
      id : 4,
      openingImage : asdopening,
      projectName : "Agro Sky Drones",
      projectClass: "Web Design",
      projectClass_span : "&development",
      desc: "Redefining Agri-Tech Through Design & Development\nAgroSky Drone Aspirant pioneers smart agriculture with UAV solutions for precision farming, surveillance, and emergency response. The website redesign transforms their technical innovation into an elegant, credible digital experience.\n\nThe Challenge\nThe existing site lacked clarity and modern functionality — cluttered navigation and weak hierarchy failed to communicate the brand's cutting-edge capabilities. The brief was to revamp while preserving AgroSky's identity, then elevate it with sophistication and seamless performance.\n\nDesign Approach\nDeep maroon and earthy cream reflect agricultural roots and modern innovation. Clean layouts, strategic white space, and bold imagery create hierarchy that guides users through complex offerings without overwhelming them. High-quality visuals paired with concise descriptions build trust, while icons and infographics translate technical data into digestible insights.\n\nDevelopment\nBuilt on the MERN stack for performance and scalability, the site delivers smooth navigation, fast load times, and full responsiveness across devices. Dynamic product filtering, intuitive service sections, and strategic CTAs drive engagement while maintaining visual integrity from desktop to mobile.\n\nOutcome\nThe revamped platform positions AgroSky as a future-ready agri-tech leader — blending credibility with accessibility. It's a digital experience that informs, inspires confidence, and drives meaningful engagement with farmers, partners, and stakeholders.",
      showcase : [asditem1, asditem2,asditem3]
    },
   {
  id: 5,
  openingImage: togglOpening,
  projectName: "Toggl Track Clone",
  projectClass: "Web Design",
  projectClass_span: "&development",
  desc: "The Toggl interface recreation project was an exploration in precision design, interaction, and user experience replication. The goal was to rebuild the landing page of a modern SaaS brand using only front-end technologies — focusing on visual hierarchy, responsive structure, and motion fluidity.\n\nEvery component — from the navigation bar to the hero animation — was designed and coded from scratch, ensuring pixel-level accuracy while maintaining optimized performance and accessibility. The build emphasizes the balance between clarity and personality — a hallmark of great product marketing websites.\n\nThis exercise deepened understanding of UI consistency, layout scalability, and performance tuning — proving how effective design and clean implementation can coexist even in visually dense interfaces.\n\nOutcome:\nA polished, responsive clone that captures the feel and flow of a professional SaaS landing experience, built entirely with modern front-end practices.",
  showcase: [togglitem],
}
    // Add more ProjectCard components as needed
  ];

  export default projectsData;