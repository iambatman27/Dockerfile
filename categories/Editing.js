const subcategories = ["All","Photo Editing", "Video Editing", "Background Removal", "Color Correction", "Image Retouching", "Video Stabilization", "Cropping / Resizing", "Filters / Effects", "Collage Making", "Template Editing"];

const tools = [
   // Photo Editing
 { name: "Adobe Photoshop (Neural Filters)", category: "Editing", subcategory: "Photo Editing", desc: "AI-powered photo editing with advanced neural filters for retouching and enhancements.", url: "https://www.adobe.com/products/photoshop.html", price: "Paid" },
{ name: "Luminar Neo", category: "Editing", subcategory: "Photo Editing", desc: "AI photo editor for retouching, sky replacement, and creative enhancements.", url: "https://skylum.com/luminar", price: "Paid" },
{ name: "Fotor", category: "Editing", subcategory: "Photo Editing", desc: "AI-powered photo editor with filters, effects, and enhancement tools.", url: "https://www.fotor.com", price: "Free/Paid" },
{ name: "Pixlr", category: "Editing", subcategory: "Photo Editing", desc: "Online AI photo editor for quick editing, retouching, and design.", url: "https://pixlr.com", price: "Free/Paid" },
  { name: "Canva", category: "Editing", subcategory: "Photo Editing", desc: "AI-powered photo editor with filters, effects, background removal, and design templates.", url: "https://www.canva.com", price: "Free/Paid" },


  // Video Editing
  { name: "Adobe Premiere Pro", category: "Editing", subcategory: "Video Editing", desc: "Professional video editing with AI features.", url: "https://www.adobe.com/products/premiere.html", price: "Paid" },
  { name: "DaVinci Resolve", category: "Editing", subcategory: "Video Editing", desc: "AI-assisted video editing.", url: "https://www.blackmagicdesign.com/products/davinciresolve/", price: "Free/Paid" },
  { name: "Wondershare Filmora", category: "Editing", subcategory: "Video Editing", desc: "User-friendly AI video editing.", url: "https://filmora.wondershare.com", price: "Paid" },
 { name: "CapCut", category: "Editing", subcategory: "Video Editing", desc: "AI-powered video editing app with auto-captioning, scene detection, and templates for social media.", url: "https://www.capcut.com", price: "Free" },
{ name: "Descript", category: "Editing", subcategory: "Video Editing", desc: "Edit videos and podcasts by editing text, complete with AI overdub and automatic transcription.", url: "https://www.descript.com", price: "Free/Paid" },

  // Color Correction
{ name: "DaVinci Resolve", category: "Editing", subcategory: "Color Correction", desc: "Professional-grade AI color correction and grading tool used in Hollywood productions.", url: "https://www.blackmagicdesign.com/products/davinciresolve", price: "Free/Paid" },
{ name: "Adobe Premiere Pro", category: "Editing", subcategory: "Color Correction", desc: "Includes AI-based color matching and auto-tone tools for professional video editing.", url: "https://www.adobe.com/products/premiere.html", price: "Paid" },
{ name: "ColorLab AI", category: "Editing", subcategory: "Color Correction", desc: "AI-driven film color grading platform that automates look creation and matching.", url: "https://www.colorlab.ai", price: "Paid" },
{ name: "LUT Generator AI", category: "Editing", subcategory: "Color Correction", desc: "Automatically generates LUTs (Look-Up Tables) based on visual references using AI.", url: "https://lutcreator.com", price: "Free/Paid" },
{ name: "Pixop", category: "Editing", subcategory: "Color Correction", desc: "AI-powered video remastering and color enhancement platform for professional video restoration.", url: "https://www.pixop.com", price: "Paid" },

  // Image Retouching
{ name: "Luminar Neo", category: "Editing", subcategory: "Image Retouching", desc: "AI-powered photo editor with tools for skin retouching, portrait enhancement, and background cleanup.", url: "https://skylum.com/luminar", price: "Paid" },
{ name: "Fotor", category: "Editing", subcategory: "Image Retouching", desc: "AI photo retoucher for portraits, blemish removal, and lighting adjustments.", url: "https://www.fotor.com", price: "Free/Paid" },
{ name: "Pixlr", category: "Editing", subcategory: "Image Retouching", desc: "Online AI photo editor for quick touch-ups, background fixes, and effects.", url: "https://pixlr.com", price: "Free/Paid" },
{ name: "BeFunky", category: "Editing", subcategory: "Image Retouching", desc: "AI retouching and portrait enhancement with wrinkle remover and teeth whitener.", url: "https://www.befunky.com", price: "Free/Paid" },
{ name: "PhotoWorks", category: "Editing", subcategory: "Image Retouching", desc: "AI-based retouching software for portraits and automatic skin tone correction.", url: "https://photo-works.net", price: "Paid" },

  // Video Stabilization
{ name: "Adobe Premiere Pro", category: "Editing", subcategory: "Video Stabilization", desc: "Professional video editing suite with built-in Warp Stabilizer for smooth footage.", url: "https://www.adobe.com/products/premiere.html", price: "Paid" },
{ name: "DaVinci Resolve", category: "Editing", subcategory: "Video Stabilization", desc: "Advanced video editor with AI-driven stabilization and motion tracking tools.", url: "https://www.blackmagicdesign.com/products/davinciresolve", price: "Free/Paid" },
{ name: "Shaky Video Stabilizer", category: "Editing", subcategory: "Video Stabilization", desc: "Simple online AI tool that stabilizes shaky videos automatically.", url: "https://shakyvideo.com", price: "Free/Paid" },
{ name: "Deshake (VirtualDub Plugin)", category: "Editing", subcategory: "Video Stabilization", desc: "Plugin for VirtualDub that reduces camera shake in video footage.", url: "https://www.virtualdub.org", price: "Free" },
{ name: "Gyroflow", category: "Editing", subcategory: "Video Stabilization", desc: "Open-source stabilization tool using gyro data for perfectly steady videos.", url: "https://gyroflow.xyz", price: "Free" },

  // Cropping / Resizing
{ name: "Pixlr", category: "Editing", subcategory: "Cropping / Resizing", desc: "Online AI photo editor that allows quick cropping, resizing, and smart adjustments.", url: "https://pixlr.com", price: "Free/Paid" },
{ name: "Fotor", category: "Editing", subcategory: "Cropping / Resizing", desc: "AI-powered photo editor with smart crop and resize options for all image formats.", url: "https://www.fotor.com", price: "Free/Paid" },
{ name: "Canva", category: "Editing", subcategory: "Cropping / Resizing", desc: "AI-assisted design tool that includes smart image cropping and auto-resize for different platforms.", url: "https://www.canva.com", price: "Free/Paid" },
{ name: "Remove.bg Resize", category: "Editing", subcategory: "Cropping / Resizing", desc: "Resize and crop images automatically after background removal using AI precision.", url: "https://www.remove.bg", price: "Free/Paid" },
{ name: "Photopea", category: "Editing", subcategory: "Cropping / Resizing", desc: "Free online Photoshop alternative supporting cropping, resizing, and AI-powered editing.", url: "https://www.photopea.com", price: "Free" },

  // Filters / Effects
{ name: "Luminar Neo", category: "Editing", subcategory: "Filters / Effects", desc: "AI-powered photo editor offering creative filters, cinematic effects, and intelligent enhancements.", url: "https://skylum.com/luminar", price: "Paid" },
{ name: "Prisma", category: "Editing", subcategory: "Filters / Effects", desc: "Turns photos into art using AI filters inspired by famous artists and styles.", url: "https://prisma-ai.com", price: "Free/Paid" },
{ name: "BeFunky", category: "Editing", subcategory: "Filters / Effects", desc: "All-in-one photo editor with AI filters, effects, and aesthetic adjustments.", url: "https://www.befunky.com", price: "Free/Paid" },
{ name: "Picsart", category: "Editing", subcategory: "Filters / Effects", desc: "AI-based creative platform for adding smart filters, effects, and instant photo enhancements.", url: "https://picsart.com", price: "Free/Paid" },
{ name: "Fotor Effects", category: "Editing", subcategory: "Filters / Effects", desc: "AI-driven photo effects and filters to enhance color, lighting, and style automatically.", url: "https://www.fotor.com/features/photo-effects", price: "Free/Paid" },

  // Collage Making
{ name: "Canva", category: "Editing", subcategory: "Collage Making", desc: "AI-powered collage maker with customizable layouts, drag-and-drop design, and smart alignment tools.", url: "https://www.canva.com", price: "Free/Paid" },
{ name: "Fotor", category: "Editing", subcategory: "Collage Making", desc: "Online collage maker with AI templates, filters, and automatic photo arrangement.", url: "https://www.fotor.com", price: "Free/Paid" },
{ name: "BeFunky", category: "Editing", subcategory: "Collage Making", desc: "AI collage maker with one-click layouts, text effects, and smart photo alignment.", url: "https://www.befunky.com", price: "Free/Paid" },
{ name: "Adobe Express", category: "Editing", subcategory: "Collage Making", desc: "Quick collage creation tool with AI design suggestions and smart resizing.", url: "https://www.adobe.com/express", price: "Free/Paid" },
{ name: "Pixlr", category: "Editing", subcategory: "Collage Making", desc: "AI collage and photo editor with customizable grids, layouts, and templates.", url: "https://pixlr.com", price: "Free/Paid" },

  // Template Editing
{ name: "Canva", category: "Editing", subcategory: "Template Editing", desc: "AI-powered templates for social media, presentations, posters, and more, with easy editing.", url: "https://www.canva.com", price: "Free/Paid" },
{ name: "Adobe Express", category: "Editing", subcategory: "Template Editing", desc: "Provides AI-assisted design templates for graphics, videos, and web content.", url: "https://www.adobe.com/express", price: "Free/Paid" },
{ name: "Crello (VistaCreate)", category: "Editing", subcategory: "Template Editing", desc: "AI-assisted editable templates for social media, ads, and marketing visuals.", url: "https://crello.com", price: "Free/Paid" },
{ name: "Snappa", category: "Editing", subcategory: "Template Editing", desc: "Easy-to-use AI template editor for creating online graphics quickly.", url: "https://snappa.com", price: "Free/Paid" },
{ name: "Fotor Templates", category: "Editing", subcategory: "Template Editing", desc: "AI-based ready-to-edit templates for posters, cards, social media posts, and more.", url: "https://www.fotor.com", price: "Free/Paid" },

  // Background Removal
  { name: "Remove.bg", category: "Editing", subcategory: "Background Removal", desc: "Instant AI background removal.", url: "https://www.remove.bg", price: "Free/Paid" },
  { name: "PhotoRoom", category: "Editing", subcategory: "Background Removal", desc: "AI background removal & editing.", url: "https://www.photoroom.com", price: "Free/Paid" },
  { name: "Canva Background Remover", category: "Editing", subcategory: "Background Removal", desc: "Design tool with AI background remover.", url: "https://www.canva.com/features/background-remover/", price: "Free/Paid" },
  { name: "Photoshop Background Remover", category: "Editing", subcategory: "Background Removal", desc: "Professional AI background removal tools.", url: "https://www.adobe.com/products/photoshop.html", price: "Paid" },
  { name: "Aiarty Image Matting", category: "Editing", subcategory: "Background Removal", desc: "Advanced AI background removal.", url: "https://www.aiarty.com", price: "Paid" },

  
  // ---------- AI Effects ----------
  { name: "Runway ML", category: "Editing", subcategory: "AI Effects", desc: "Apply AI effects like background removal, style transfer, and object detection.", url: "https://runwayml.com", price: "Free/Paid" }
];

// --- Subcategory buttons ---
const subcatsDiv = document.getElementById('subcats');
subcategories.forEach(sub => {
  const btn = document.createElement('button');
  btn.textContent = sub;
  btn.className = 'main-btn';
  btn.onclick = () => filterTools(sub);
  subcatsDiv.appendChild(btn);
});

// --- Cards rendering ---
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

// --- Filter function ---
function filterTools(subcat){
  document.querySelectorAll('#subcats button').forEach(b => b.classList.remove('active'));
  const activeBtn = Array.from(subcatsDiv.children).find(b => b.textContent === subcat);
  if(activeBtn) activeBtn.classList.add('active');

  if(subcat === "All"){
    renderList(tools);
  } else {
    const filtered = tools.filter(t => t.subcategory === subcat);
    renderList(filtered);
  }
}

// --- Search filter ---
document.getElementById('search').addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  const filtered = tools.filter(t =>
    t.name.toLowerCase().includes(term) || t.desc.toLowerCase().includes(term)
  );
  renderList(filtered);
});

// Initial render
renderList(tools);
