const subcategories = ["All","AI Art","Generative Art","Photo Editing","Design","Background Removal","Avatar Generators","Image Upscaling","Style Transfer","Memes / Fun Images","3D Models"];

const tools = [
 // AI Art
  { name: "DALL·E 3", category: "Image", subcategory: "AI Art", desc: "Generates highly realistic and creative images from text prompts using OpenAI’s AI.", url: "https://openai.com/dall-e", price: "Free/Paid" },
{ name: "MidJourney", category: "Image", subcategory: "AI Art", desc: "AI platform for creating artistic and stylized images from text prompts.", url: "https://www.midjourney.com", price: "Paid" },
{ name: "Artbreeder", category: "Image", subcategory: "AI Art", desc: "Collaborative AI tool for creating and evolving artworks, portraits, and landscapes.", url: "https://www.artbreeder.com", price: "Free/Paid" },
{ name: "DeepArt", category: "Image", subcategory: "AI Art", desc: "Transforms photos into artworks in the style of famous artists using AI.", url: "https://deepart.io", price: "Paid" },
{ name: "NightCafe Studio", category: "Image", subcategory: "AI Art", desc: "AI art generator for creating creative artworks from text prompts or images.", url: "https://creator.nightcafe.studio", price: "Free/Paid" },


  // Generative Art
  { name: "Runway Gen-2", category: "Image", subcategory: "Generative Art", desc: "Generates unique artworks and animations from text or image prompts using AI.", url: "https://runwayml.com", price: "Paid" },
{ name: "DeepDream Generator", category: "Image", subcategory: "Generative Art", desc: "AI platform that creates dreamlike, surreal artworks from images.", url: "https://deepdreamgenerator.com", price: "Free/Paid" },
{ name: "Playground AI", category: "Image", subcategory: "Generative Art", desc: "Generates digital art and illustrations using text prompts and AI models.", url: "https://playgroundai.com", price: "Free/Paid" },
{ name: "Fotor AI Art Generator", category: "Image", subcategory: "Generative Art", desc: "Transforms ideas into artistic images with AI-driven generation.", url: "https://www.fotor.com/features/ai-image-generator", price: "Free/Paid" },
{ name: "StarryAI", category: "Image", subcategory: "Generative Art", desc: "AI tool for creating unique NFT-ready artworks from text prompts.", url: "https://www.starryai.com", price: "Free/Paid" },


  // Photo Editing 
  { name: "Adobe Photoshop", category: "Image", subcategory: "Photo Editing", desc: "Industry-standard photo editing with AI-powered tools.", url: "https://www.adobe.com/products/photoshop.html", price: "Paid" },
  { name: "Fotor", category: "Image", subcategory: "Photo Editing", desc: "AI photo editor for quick enhancements, retouching, and creative effects.", url: "https://www.fotor.com", price: "Free/Paid" },
{ name: "Pixlr", category: "Image", subcategory: "Photo Editing", desc: "Online AI photo editor with filters, effects, and automatic corrections.", url: "https://pixlr.com", price: "Free/Paid" },
{ name: "Remove.bg", category: "Image", subcategory: "Photo Editing", desc: "Automatically removes backgrounds from photos using AI.", url: "https://www.remove.bg", price: "Free/Paid" },
{ name: "Luminar Neo", category: "Image", subcategory: "Photo Editing", desc: "AI-powered photo editor with tools for sky replacement, relighting, and portrait enhancement.", url: "https://skylum.com/luminar", price: "Paid" },
  // Design
{ name: "Canva AI", category: "Image", subcategory: "Design", desc: "AI-powered design platform for creating graphics, presentations, and social media posts.", url: "https://www.canva.com", price: "Free/Paid" },
{ name: "Figma AI", category: "Image", subcategory: "Design", desc: "AI-assisted design tool for UI/UX, web, and mobile app designs.", url: "https://www.figma.com", price: "Free/Paid" },
{ name: "Adobe Express (formerly Spark)", category: "Image", subcategory: "Design", desc: "AI features for creating banners, social media graphics, and marketing materials.", url: "https://www.adobe.com/express", price: "Free/Paid" },
{ name: "Looka", category: "Image", subcategory: "Design", desc: "AI-powered logo and brand design platform.", url: "https://looka.com", price: "Paid" },
{ name: "Designify", category: "Image", subcategory: "Design", desc: "Automated AI design tool for creating professional visuals from images.", url: "https://www.designify.com", price: "Free/Paid" },
  // Background Removal
{ name: "Remove.bg", category: "Image", subcategory: "Background Removal", desc: "Automatically removes backgrounds from images with AI for quick editing.", url: "https://www.remove.bg", price: "Free/Paid" },
{ name: "Slazzer", category: "Image", subcategory: "Background Removal", desc: "AI tool to remove or replace image backgrounds instantly.", url: "https://www.slazzer.com", price: "Free/Paid" },
{ name: "Adobe Express Background Remover", category: "Image", subcategory: "Background Removal", desc: "AI-powered background removal integrated into Adobe Express for creative designs.", url: "https://www.adobe.com/express", price: "Free/Paid" },
{ name: "Fotor Background Remover", category: "Image", subcategory: "Background Removal", desc: "Quick AI tool for removing image backgrounds online.", url: "https://www.fotor.com/features/background-remover", price: "Free/Paid" },
{ name: "Pixlr BG Remover", category: "Image", subcategory: "Background Removal", desc: "AI-powered background removal for photos and graphics.", url: "https://pixlr.com/remove-background", price: "Free/Paid" },
  // Avatar Generators
{ name: "Ready Player Me", category: "Image", subcategory: "Avatar Generators", desc: "Create personalized 3D avatars for games, VR, and social apps using AI.", url: "https://readyplayer.me", price: "Free/Paid" },
{ name: "Avatar AI", category: "Image", subcategory: "Avatar Generators", desc: "Generate AI-powered avatars from photos with customizable styles.", url: "https://avatarai.app", price: "Free/Paid" },
{ name: "Dollify", category: "Image", subcategory: "Avatar Generators", desc: "Create cartoon-style avatars with AI-assisted tools.", url: "https://www.dollifyapp.com", price: "Free/Paid" },
{ name: "Fotor AI Avatar Maker", category: "Image", subcategory: "Avatar Generators", desc: "AI tool to generate personalized avatars for social media and profiles.", url: "https://www.fotor.com/features/ai-avatar", price: "Free/Paid" },
{ name: "Artbreeder Avatars", category: "Image", subcategory: "Avatar Generators", desc: "Blend and generate unique avatars using AI-powered generative tools.", url: "https://www.artbreeder.com", price: "Free/Paid" },
  // Image Upscaling
{ name: "Let's Enhance", category: "Image", subcategory: "Image Upscaling", desc: "AI-powered tool to upscale and enhance image quality without losing details.", url: "https://letsenhance.io", price: "Free/Paid" },
{ name: "Topaz Gigapixel AI", category: "Image", subcategory: "Image Upscaling", desc: "Uses AI to enlarge images up to 600% while maintaining clarity and detail.", url: "https://www.topazlabs.com/gigapixel-ai", price: "Paid" },
{ name: "VanceAI Image Enlarger", category: "Image", subcategory: "Image Upscaling", desc: "AI tool for enlarging and enhancing images automatically.", url: "https://vanceai.com/image-enlarger", price: "Free/Paid" },
{ name: "Upscale Pics", category: "Image", subcategory: "Image Upscaling", desc: "Online AI image upscaler to increase resolution and remove noise.", url: "https://www.upscalepics.com", price: "Free/Paid" },
{ name: "Icons8 Smart Upscaler", category: "Image", subcategory: "Image Upscaling", desc: "Upscale images using AI for better resolution and sharper details.", url: "https://icons8.com/upscaler", price: "Free/Paid" },
  // Style Transfer
{ name: "DeepArt.io", category: "Image", subcategory: "Style Transfer", desc: "Transform your photos into artworks using AI-powered style transfer techniques.", url: "https://deepart.io", price: "Free/Paid" },
{ name: "Prisma", category: "Image", subcategory: "Style Transfer", desc: "Apply artistic styles to your images using AI filters and neural networks.", url: "https://prisma-ai.com", price: "Free/Paid" },
{ name: "Fotor AI Art Effects", category: "Image", subcategory: "Style Transfer", desc: "AI tool for transforming photos into different artistic styles.", url: "https://www.fotor.com/features/ai-art-effects", price: "Free/Paid" },
{ name: "Deep Dream Generator", category: "Image", subcategory: "Style Transfer", desc: "Use AI to convert images into dreamlike, artistic interpretations.", url: "https://deepdreamgenerator.com", price: "Free/Paid" },
{ name: "Runway ML – Style Transfer", category: "Image", subcategory: "Style Transfer", desc: "Apply AI style transfer to videos and images for creative content.", url: "https://runwayml.com", price: "Paid" },
  // Memes / Fun Images
{ name: "Imgflip AI Meme Generator", category: "Image", subcategory: "Memes / Fun Images", desc: "Create memes automatically using AI-powered text-to-image features.", url: "https://imgflip.com/ai-meme", price: "Free/Paid" },
{ name: "Kapwing AI Meme Generator", category: "Image", subcategory: "Memes / Fun Images", desc: "AI tool to generate and customize memes quickly for social media.", url: "https://www.kapwing.com/tools/meme-generator", price: "Free/Paid" },
{ name: "Make a Meme", category: "Image", subcategory: "Memes / Fun Images", desc: "Simple AI-assisted meme creation platform.", url: "https://makeameme.org", price: "Free" },
{ name: "Meme AI by DeepAI", category: "Image", subcategory: "Memes / Fun Images", desc: "Generates humorous memes automatically using AI.", url: "https://deepai.org/machine-learning-model/meme-generator", price: "Free" },
{ name: "DALL·E for Fun Images", category: "Image", subcategory: "Memes / Fun Images", desc: "Create funny and creative images from text prompts using AI.", url: "https://openai.com/dall-e", price: "Free/Paid" },
  // 3D Models
{ name: "Spline AI", category: "Image", subcategory: "3D Models", desc: "Create and edit 3D models and scenes with AI-assisted design tools.", url: "https://spline.design", price: "Free/Paid" },
{ name: "NVIDIA Omniverse", category: "Image", subcategory: "3D Models", desc: "AI-powered platform for collaborative 3D design and simulations.", url: "https://developer.nvidia.com/nvidia-omniverse-platform", price: "Free/Paid" },
{ name: "Kaedim 3D AI", category: "Image", subcategory: "3D Models", desc: "Turn 2D concept art into 3D models using AI.", url: "https://www.kaedim3d.com", price: "Paid" },
{ name: "DeepMotion Animate 3D", category: "Image", subcategory: "3D Models", desc: "AI-powered motion capture to animate 3D characters automatically.", url: "https://www.deepmotion.com", price: "Free/Paid" },
{ name: "Daz 3D AI Tools", category: "Image", subcategory: "3D Models", desc: "AI-assisted 3D character creation and scene design platform.", url: "https://www.daz3d.com", price: "Free/Paid" },

];

// ---- Subcategory buttons ----
const subcatsDiv = document.getElementById('subcats');
subcategories.forEach(sub => {
  const btn = document.createElement('button');
  btn.textContent = sub;
  btn.className = 'main-btn';
  btn.onclick = () => filterTools(sub);
  subcatsDiv.appendChild(btn);
});

// ---- Cards rendering ----
const cards = document.getElementById('cards');

function makeCard(tool){
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `
    <h3>${tool.name}</h3>
    <p>${tool.desc}</p>
    <p><strong>Price:</strong> ${tool.price}</p>
    <a href="${tool.url}" target="_blank" class="visit-btn">Visit</a>
  `;
  return div;
}



function renderList(list){
  cards.innerHTML = '';
  list.forEach(tool => cards.appendChild(makeCard(tool)));
}

// ---- Filter function ----
function filterTools(subcat){
  if(subcat === "All"){
    renderList(tools);
  } else {
    const filtered = tools.filter(t => t.subcategory === subcat);
    renderList(filtered);
  }
}

// ---- Search filter ----
document.getElementById('search').addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  const filtered = tools.filter(t => t.name.toLowerCase().includes(term) || t.desc.toLowerCase().includes(term));
  renderList(filtered);
});

// Initial render
renderList(tools);
