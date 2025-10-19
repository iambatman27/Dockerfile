// --- Subcategories ---
const subcategories = ["All","Music Generation","Voice / TTS","Sound Effects","Noise Removal","Audio Enhancement","Podcast Editing","Audio Transcription","Music Remixing","Voice Cloning","Audio Analysis"];
  // Music Generation
 const tools = [  { name: "AIVA", category: "Audio", subcategory: "Music Generation", desc: "AI composer that creates original music for videos, games, and content.", url: "https://www.aiva.ai", price: "Free/Paid" },
{ name: "Amper Music", category: "Audio", subcategory: "Music Generation", desc: "Generates royalty-free music tracks using AI for content creators.", url: "https://www.ampermusic.com", price: "Free/Paid" },
{ name: "Soundraw", category: "Audio", subcategory: "Music Generation", desc: "AI-powered music generator that allows customization of compositions.", url: "https://soundraw.io", price: "Paid" },
{ name: "Boomy", category: "Audio", subcategory: "Music Generation", desc: "AI platform to quickly create, customize, and release music tracks.", url: "https://boomy.com", price: "Free/Paid" },
{ name: "Endlesss", category: "Audio", subcategory: "Music Generation", desc: "Collaborative AI-driven music creation and jam platform.", url: "https://endlesss.fm", price: "Free/Paid" },

  // Voice / TTS
  { name: "Murf AI", category: "Audio", subcategory: "Voice / TTS", desc: "AI text-to-speech platform with natural-sounding voices for presentations and videos.", url: "https://murf.ai", price: "Free/Paid" },
{ name: "Descript Overdub", category: "Audio", subcategory: "Voice / TTS", desc: "AI voice cloning and TTS tool for creating synthetic voices.", url: "https://www.descript.com/overdub", price: "Paid" },
{ name: "Play.ht", category: "Audio", subcategory: "Voice / TTS", desc: "Realistic AI voices for podcasts, articles, and content narration.", url: "https://play.ht", price: "Free/Paid" },
{ name: "Resemble AI", category: "Audio", subcategory: "Voice / TTS", desc: "Custom AI voice generation and TTS with multi-language support.", url: "https://www.resemble.ai", price: "Paid" },
{ name: "WellSaid Labs", category: "Audio", subcategory: "Voice / TTS", desc: "High-quality AI voice generation for e-learning, videos, and presentations.", url: "https://www.wellsaidlabs.com", price: "Paid" },


  // Sound Effects
  { name: "Boom Library AI", category: "Audio", subcategory: "Sound Effects", desc: "AI-assisted sound effect generation and library for films, games, and media.", url: "https://www.boomlibrary.com", price: "Paid" },
{ name: "Endlesss", category: "Audio", subcategory: "Sound Effects", desc: "Collaborative AI platform to create unique sound effects and music loops.", url: "https://endlesss.fm", price: "Free/Paid" },
{ name: "Soundraw", category: "Audio", subcategory: "Sound Effects", desc: "AI-driven tool to generate custom sound effects and audio content.", url: "https://soundraw.io", price: "Paid" },
{ name: "AIVA Sound Effects", category: "Audio", subcategory: "Sound Effects", desc: "AI tool for generating cinematic sound effects and audio cues.", url: "https://www.aiva.ai", price: "Free/Paid" },
{ name: "Boomy", category: "Audio", subcategory: "Sound Effects", desc: "AI platform to create music and sound effects instantly for various media.", url: "https://boomy.com", price: "Free/Paid" },

  // Noise Removal
{ name: "Krisp", category: "Audio", subcategory: "Noise Removal", desc: "AI-powered noise cancellation for calls, recordings, and streaming.", url: "https://krisp.ai", price: "Free/Paid" },
{ name: "Adobe Podcast (Enhance Speech)", category: "Audio", subcategory: "Noise Removal", desc: "AI tool to clean audio and remove background noise from recordings.", url: "https://podcast.adobe.com", price: "Free/Paid" },
{ name: "NVIDIA RTX Voice", category: "Audio", subcategory: "Noise Removal", desc: "AI-driven real-time noise removal for microphones and speakers.", url: "https://www.nvidia.com/en-us/geforce/technologies/rtx-voice/", price: "Free" },
{ name: "Descript Studio Sound", category: "Audio", subcategory: "Noise Removal", desc: "AI audio processing to remove noise and enhance voice quality.", url: "https://www.descript.com/studio-sound", price: "Free/Paid" },
{ name: "Auphonic", category: "Audio", subcategory: "Noise Removal", desc: "AI audio post-production platform that removes noise and balances levels.", url: "https://auphonic.com", price: "Free/Paid" },

  // Audio Enhancement
{ name: "iZotope RX", category: "Audio", subcategory: "Audio Enhancement", desc: "Professional AI-powered audio repair and enhancement suite for music and podcasts.", url: "https://www.izotope.com/en/products/rx.html", price: "Paid" },
{ name: "Adobe Podcast (Enhance Speech)", category: "Audio", subcategory: "Audio Enhancement", desc: "AI enhancement to improve voice clarity and overall audio quality.", url: "https://podcast.adobe.com", price: "Free/Paid" },
{ name: "Auphonic", category: "Audio", subcategory: "Audio Enhancement", desc: "AI-driven audio mastering and leveling for podcasts, music, and videos.", url: "https://auphonic.com", price: "Free/Paid" },
{ name: "Cedar DNS One", category: "Audio", subcategory: "Audio Enhancement", desc: "Real-time AI audio processing for noise reduction and enhancement.", url: "https://www.cedaraudio.com/products/dns-one/", price: "Paid" },
{ name: "LALAL.AI", category: "Audio", subcategory: "Audio Enhancement", desc: "AI stem separation and audio enhancement tool for music and voice.", url: "https://www.lalal.ai", price: "Free/Paid" },

  // Podcast Editing
{ name: "Descript", category: "Audio", subcategory: "Podcast Editing", desc: "AI-powered podcast editing, transcription, and audio cleanup.", url: "https://www.descript.com", price: "Free/Paid" },
{ name: "Alitu", category: "Audio", subcategory: "Podcast Editing", desc: "Automates podcast production with AI-powered editing and cleanup.", url: "https://alitu.com", price: "Paid" },
{ name: "Auphonic", category: "Audio", subcategory: "Podcast Editing", desc: "AI-based audio post-production for leveling, noise reduction, and mastering.", url: "https://auphonic.com", price: "Free/Paid" },
{ name: "Podcastle", category: "Audio", subcategory: "Podcast Editing", desc: "Record, edit, and enhance podcasts using AI tools.", url: "https://podcastle.ai", price: "Free/Paid" },
{ name: "Hindenburg Journalist", category: "Audio", subcategory: "Podcast Editing", desc: "Audio editing software with AI-assisted voice leveling and noise reduction.", url: "https://hindenburg.com", price: "Paid" },

  // Audio Transcription
{ name: "Otter.ai", category: "Audio", subcategory: "Audio Transcription", desc: "AI-powered transcription for meetings, lectures, and interviews with real-time captions.", url: "https://otter.ai", price: "Free/Paid" },
{ name: "Sonix", category: "Audio", subcategory: "Audio Transcription", desc: "Automatic transcription and translation powered by AI for audio and video files.", url: "https://sonix.ai", price: "Paid" },
{ name: "Trint", category: "Audio", subcategory: "Audio Transcription", desc: "AI transcription platform with editing tools and collaboration features.", url: "https://trint.com", price: "Paid" },
{ name: "Descript", category: "Audio", subcategory: "Audio Transcription", desc: "Transcribe audio/video files with AI and edit like a text document.", url: "https://www.descript.com", price: "Free/Paid" },
{ name: "Rev AI", category: "Audio", subcategory: "Audio Transcription", desc: "AI-driven transcription with high accuracy for speech-to-text applications.", url: "https://www.rev.com/ai", price: "Paid" },

  // Music Remixing
{ name: "Endlesss", category: "Audio", subcategory: "Music Remixing", desc: "Collaborative AI platform for creating music loops, remixes, and live jams.", url: "https://endlesss.fm", price: "Free/Paid" },
{ name: "AIVA", category: "Audio", subcategory: "Music Remixing", desc: "AI composer that can remix and generate music for different styles and moods.", url: "https://www.aiva.ai", price: "Free/Paid" },
{ name: "LANDR", category: "Audio", subcategory: "Music Remixing", desc: "AI-powered platform for music mastering and remixing tracks.", url: "https://www.landr.com", price: "Paid" },
{ name: "Splash", category: "Audio", subcategory: "Music Remixing", desc: "AI music creation platform for remixing, composing, and producing tracks.", url: "https://splashmusic.com", price: "Free/Paid" },
{ name: "Jukebox by OpenAI", category: "Audio", subcategory: "Music Remixing", desc: "Generates music and remixes using AI models trained on various genres.", url: "https://openai.com/research/jukebox", price: "Free" },

  // Voice Cloning
{ name: "Resemble AI", category: "Audio", subcategory: "Voice Cloning", desc: "AI voice cloning platform for creating custom synthetic voices.", url: "https://www.resemble.ai", price: "Paid" },
{ name: "iSpeech", category: "Audio", subcategory: "Voice Cloning", desc: "AI-powered text-to-speech and voice cloning services.", url: "https://www.ispeech.org", price: "Paid" },
{ name: "VocaliD", category: "Audio", subcategory: "Voice Cloning", desc: "Creates unique AI voices by blending real voices with synthetic models.", url: "https://www.vocalid.ai", price: "Paid" },
{ name: "Descript Overdub", category: "Audio", subcategory: "Voice Cloning", desc: "AI voice cloning feature to generate audio in your own voice.", url: "https://www.descript.com/overdub", price: "Free/Paid" },
{ name: "ElevenLabs", category: "Audio", subcategory: "Voice Cloning", desc: "High-quality AI voice cloning and text-to-speech platform.", url: "https://elevenlabs.io", price: "Free/Paid" },

  // Audio Analysis
{ name: "LANDR Analytics", category: "Audio", subcategory: "Audio Analysis", desc: "AI-powered analysis of tracks for loudness, frequency, and mastering quality.", url: "https://www.landr.com", price: "Paid" },
{ name: "Sonic Visualiser", category: "Audio", subcategory: "Audio Analysis", desc: "Open-source software for detailed visual analysis of audio files.", url: "https://www.sonicvisualiser.org", price: "Free" },
{ name: "AudioSet by Google", category: "Audio", subcategory: "Audio Analysis", desc: "Large-scale AI audio dataset for classification and research.", url: "https://research.google.com/audioset/", price: "Free" },
{ name: "Audionamix XTRAX STEMS", category: "Audio", subcategory: "Audio Analysis", desc: "Separates and analyzes audio tracks for stems and instruments.", url: "https://audionamix.com", price: "Paid" },
{ name: "Cyanite.ai", category: "Audio", subcategory: "Audio Analysis", desc: "AI music analysis platform for mood, genre, and instrumentation detection.", url: "https://cyanite.ai", price: "Paid" },
 ]
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