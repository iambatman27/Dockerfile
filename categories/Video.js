const subcategories = ["All","Video Generation","Animation","Video Editing","Video Upscaling","Screen Recording","Motion Capture","3D Animation","Video Summarization","Subtitles / Captions","Special Effects"];

const tools = [  // ---------- Video Tools ----------
  { name: "Pictory AI", category: "Video", subcategory: "Video Generation", desc: "AI-powered video creation from scripts and text content.", url: "https://pictory.ai", price: "Free/Paid" },
{ name: "Synthesia", category: "Video", subcategory: "Video Generation", desc: "Generate AI videos with virtual avatars and voiceovers.", url: "https://www.synthesia.io", price: "Paid" },
{ name: "Runway (Gen 2/4)", category: "Video", subcategory: "Video Generation", desc: "AI tool for generating and editing videos with text prompts.", url: "https://runwayml.com", price: "Paid" },
{ name: "DeepBrain AI", category: "Video", subcategory: "Video Generation", desc: "AI video generation with a focus on corporate and explainer videos.", url: "https://www.deepbrain.io", price: "Paid" },
{ name: "InVideo", category: "Video", subcategory: "Video Generation", desc: "Create AI-powered videos for YouTube and marketing content.", url: "https://invideo.io", price: "Free/Paid" },
  // Animation
{ name: "Animaker", category: "Video", subcategory: "Animation", desc: "Create animated videos and presentations easily using AI-powered templates.", url: "https://www.animaker.com", price: "Free/Paid" },
{ name: "Vyond", category: "Video", subcategory: "Animation", desc: "AI-assisted animation tool for making professional animated videos.", url: "https://www.vyond.com", price: "Paid" },
{ name: "Toonly", category: "Video", subcategory: "Animation", desc: "Drag-and-drop animated video creation software with AI support.", url: "https://www.toonly.com", price: "Paid" },
{ name: "Powtoon", category: "Video", subcategory: "Animation", desc: "AI-enhanced platform for animated explainer videos and presentations.", url: "https://www.powtoon.com", price: "Free/Paid" },
{ name: "Renderforest Animation Maker", category: "Video", subcategory: "Animation", desc: "Create animated videos, intros, and presentations with AI tools.", url: "https://www.renderforest.com/animation-maker", price: "Free/Paid" },
  // Video Editing
{ name: "Descript", category: "Video", subcategory: "Video Editing", desc: "Text-based video editing, podcast editing, and screen recording.", url: "https://www.descript.com", price: "Free/Paid" },
{ name: "CapCut", category: "Video", subcategory: "Video Editing", desc: "User-friendly video editing with AI-enhanced features.", url: "https://www.capcut.com", price: "Free" },
{ name: "Veed.io", category: "Video", subcategory: "Video Editing", desc: "All-in-one editor with AI tools for subtitles, translations, and effects.", url: "https://www.veed.io", price: "Free/Paid" },
{ name: "Pictory", category: "Video", subcategory: "Video Editing", desc: "AI video editing for marketers.", url: "https://pictory.ai", price: "Free/Paid" },
{ name: "Filmora by Wondershare", category: "Video", subcategory: "Video Editing", desc: "Cinematic video editing with AI tools and templates.", url: "https://filmora.wondershare.com", price: "Paid" },
  // Video Upscaling
{ name: "Topaz Video AI", category: "Video", subcategory: "Video Upscaling", desc: "Upscale videos up to 8K with AI-powered enhancement and noise reduction.", url: "https://www.topazlabs.com/video-enhance-ai", price: "Paid" },
{ name: "DVDFab Enlarger AI", category: "Video", subcategory: "Video Upscaling", desc: "AI video upscaling for improving resolution and clarity of videos.", url: "https://www.dvdfab.cn/enlarger-ai.htm", price: "Paid" },
{ name: "HitPaw Video Enhancer", category: "Video", subcategory: "Video Upscaling", desc: "Enhances and upscales videos using AI with minimal quality loss.", url: "https://www.hitpaw.com/video-enhancer.html", price: "Paid" },
{ name: "AVCLabs Video Enhancer AI", category: "Video", subcategory: "Video Upscaling", desc: "AI tool to upscale and enhance videos automatically.", url: "https://www.avclabs.com/video-enhancer-ai.html", price: "Paid" },
{ name: "Video2X", category: "Video", subcategory: "Video Upscaling", desc: "Open-source AI video upscaling and frame interpolation tool.", url: "https://github.com/k4yt3x/video2x", price: "Free" },
  // Screen Recording
{ name: "Loom", category: "Video", subcategory: "Screen Recording", desc: "AI-powered screen and video recording with instant sharing and editing features.", url: "https://www.loom.com", price: "Free/Paid" },
{ name: "OBS Studio", category: "Video", subcategory: "Screen Recording", desc: "Open-source screen recording and streaming software with AI plugin support.", url: "https://obsproject.com", price: "Free" },
{ name: "Screencast-O-Matic", category: "Video", subcategory: "Screen Recording", desc: "Screen recorder with AI-driven video editing and captioning tools.", url: "https://screencast-o-matic.com", price: "Free/Paid" },
{ name: "Camtasia", category: "Video", subcategory: "Screen Recording", desc: "Professional screen recording software with AI-assisted video editing.", url: "https://www.techsmith.com/camtasia.html", price: "Paid" },
{ name: "Movavi Screen Recorder", category: "Video", subcategory: "Screen Recording", desc: "AI-enhanced screen recording and editing for tutorials and presentations.", url: "https://www.movavi.com/screen-recorder/", price: "Paid" },
  // Motion Capture
{ name: "Rokoko Studio", category: "Video", subcategory: "Motion Capture", desc: "AI-powered motion capture for animators and game developers.", url: "https://www.rokoko.com", price: "Paid" },
{ name: "Xsens", category: "Video", subcategory: "Motion Capture", desc: "Full-body motion capture with AI-driven tracking and data analysis.", url: "https://www.xsens.com", price: "Paid" },
{ name: "DeepMotion", category: "Video", subcategory: "Motion Capture", desc: "AI motion capture platform for animating 3D characters from videos.", url: "https://www.deepmotion.com", price: "Paid" },
{ name: "iPi Soft", category: "Video", subcategory: "Motion Capture", desc: "Markerless motion capture software using AI for precise tracking.", url: "https://ipisoft.com", price: "Paid" },
{ name: "Adobe Mixamo", category: "Video", subcategory: "Motion Capture", desc: "AI-powered 3D character animation and motion capture library.", url: "https://www.mixamo.com", price: "Free" },
  // 3D Animation
{ name: "Blender", category: "Video", subcategory: "3D Animation", desc: "Open-source 3D creation suite with AI-assisted animation and modeling tools.", url: "https://www.blender.org", price: "Free" },
{ name: "Autodesk Maya", category: "Video", subcategory: "3D Animation", desc: "Professional 3D animation software with AI-driven rigging and animation features.", url: "https://www.autodesk.com/products/maya", price: "Paid" },
{ name: "Cinema 4D", category: "Video", subcategory: "3D Animation", desc: "3D modeling, animation, and rendering with AI-powered tools.", url: "https://www.maxon.net/en/cinema-4d", price: "Paid" },
{ name: "Houdini", category: "Video", subcategory: "3D Animation", desc: "AI-enhanced procedural 3D animation and visual effects software.", url: "https://www.sidefx.com", price: "Paid" },
{ name: "Mixamo", category: "Video", subcategory: "3D Animation", desc: "AI-assisted 3D character rigging and animation library.", url: "https://www.mixamo.com", price: "Free" },
  // Video Summarization
{ name: "Glasp Video Summarizer", category: "Video", subcategory: "Video Summarization", desc: "AI tool to summarize long videos into concise highlights.", url: "https://www.glasp.co", price: "Free/Paid" },
{ name: "Wisecut", category: "Video", subcategory: "Video Summarization", desc: "Automatically summarizes and edits videos using AI.", url: "https://www.wisecut.video", price: "Free/Paid" },
{ name: "Pictory", category: "Video", subcategory: "Video Summarization", desc: "AI-powered tool to generate short video highlights from long content.", url: "https://pictory.ai", price: "Free/Paidm" },
{ name: "Elai.io", category: "Video", subcategory: "Video Summarization", desc: "Generates summarized versions of videos for faster consumption.", url: "https://elai.io", price: "Paid" },
{ name: "Synthesia", category: "Video", subcategory: "Video Summarization", desc: "AI video platform capable of creating concise video summaries.", url: "https://www.synthesia.io", price: "Paid" },
  // Subtitles / Captions
{ name: "Rev.com", category: "Video", subcategory: "Subtitles / Captions", desc: "AI-powered video transcription and captioning service with high accuracy.", url: "https://www.rev.com", price: "Paid" },
{ name: "VEED.io", category: "Video", subcategory: "Subtitles / Captions", desc: "Automatically generates subtitles and captions for videos using AI.", url: "https://www.veed.io", price: "Free/Paid" },
{ name: "Kapwing", category: "Video", subcategory: "Subtitles / Captions", desc: "AI-driven video editor that creates subtitles and captions quickly.", url: "https://www.kapwing.com", price: "Free/Paid" },
{ name: "Descript", category: "Video", subcategory: "Subtitles / Captions", desc: "AI transcription and subtitle generation for video and audio content.", url: "https://www.descript.com", price: "Free/Paid" },
{ name: "Zubtitle", category: "Video", subcategory: "Subtitles / Captions", desc: "Automatically adds captions to videos using AI for social media ready content.", url: "https://zubtitle.com", price: "Paid" },
  // Special Effects
{ name: "HitFilm Express", category: "Video", subcategory: "Special Effects", desc: "Free video editing software with AI-assisted special effects and compositing.", url: "https://fxhome.com/hitfilm-express", price: "Free/Paid" },
{ name: "Adobe After Effects", category: "Video", subcategory: "Special Effects", desc: "Professional motion graphics and visual effects with AI-enhanced tools.", url: "https://www.adobe.com/products/aftereffects.html", price: "Paid" },
{ name: "Runway (Gen 4)", category: "Video", subcategory: "Special Effects", desc: "AI-powered tools for generating cinematic effects and visual enhancements.", url: "https://runwayml.com", price: "Paid" },
{ name: "Blackmagic Fusion", category: "Video", subcategory: "Special Effects", desc: "Node-based visual effects and motion graphics software with AI integration.", url: "https://www.blackmagicdesign.com/products/fusion", price: "Free/Paid" },
{ name: "Boris FX Optics", category: "Video", subcategory: "Special Effects", desc: "AI-enhanced visual effects, filters, and compositing tools for video creators.", url: "https://borisfx.com/products/optics/", price: "Paid" },

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
  const filtered = tools.filter(t => t.name.toLowerCase().includes(term) || t.desc.toLowerCase().includes(term));
  renderList(filtered);
});

// Initial render
renderList(tools);
