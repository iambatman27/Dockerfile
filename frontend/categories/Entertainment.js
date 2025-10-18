const subcategories = ["All","Movie/TV Recommendations", "Music Recommendations", "Playlist Generators", "AI Storytelling", "Interactive Games", "Virtual Concerts", "Voice Cloning for Fun", "Fan Art Generation", "Meme Generation", "AI Quizzes"];
const tools = [
    
// Entertainment Movie/TV Recommendations AI Tools
{ name: "Reelgood", category: "Entertainment", subcategory: "Movie/TV Recommendations", desc: "AI-powered platform providing personalized movie and TV show recommendations.", url: "https://reelgood.com", price: "Free/Paid" },
{ name: "TasteDive", category: "Entertainment", subcategory: "Movie/TV Recommendations", desc: "AI-assisted recommendation engine for movies, TV shows, and media.", url: "https://tastedive.com", price: "Free/Paid" },
{ name: "CineTrak", category: "Entertainment", subcategory: "Movie/TV Recommendations", desc: "AI-powered movie and TV recommendation platform with ratings tracking.", url: "https://www.cinetrak.com", price: "Free/Paid" },
{ name: "Movix AI", category: "Entertainment", subcategory: "Movie/TV Recommendations", desc: "AI platform for personalized movie and TV show suggestions.", url: "https://www.movix.ai", price: "Free/Paid" },
{ name: "Jinni", category: "Entertainment", subcategory: "Movie/TV Recommendations", desc: "AI-based entertainment discovery platform for movies and TV.", url: "https://www.jinni.com", price: "Paid" },


// Entertainment Music Recommendations AI Tools
{ name: "Spotify AI", category: "Entertainment", subcategory: "Music Recommendations", desc: "AI-powered music recommendation and playlist personalization platform.", url: "https://www.spotify.com", price: "Free/Paid" },
{ name: "Pandora", category: "Entertainment", subcategory: "Music Recommendations", desc: "AI-assisted music discovery and personalized radio stations.", url: "https://www.pandora.com", price: "Free/Paid" },
{ name: "SoundHound", category: "Entertainment", subcategory: "Music Recommendations", desc: "AI-powered music discovery and personalized song recommendations.", url: "https://www.soundhound.com", price: "Free/Paid" },
{ name: "Musicovery", category: "Entertainment", subcategory: "Music Recommendations", desc: "AI music recommendation platform providing mood-based playlists.", url: "https://musicovery.com", price: "Free/Paid" },
{ name: "Boomy", category: "Entertainment", subcategory: "Music Recommendations", desc: "AI platform generating music and recommending tracks for users.", url: "https://www.boomy.com", price: "Free/Paid" },


// Entertainment Playlist Generators AI Tools
{ name: "Endel", category: "Entertainment", subcategory: "Playlist Generators", desc: "AI-powered platform creating personalized soundscapes and playlists.", url: "https://www.endel.io", price: "Free/Paid" },
{ name: "Aiva", category: "Entertainment", subcategory: "Playlist Generators", desc: "AI music composer generating personalized playlists and compositions.", url: "https://www.aiva.ai", price: "Free/Paid" },
{ name: "Amper Music", category: "Entertainment", subcategory: "Playlist Generators", desc: "AI-driven platform creating custom music and playlists for users.", url: "https://www.ampermusic.com", price: "Free/Paid" },
{ name: "Boomy", category: "Entertainment", subcategory: "Playlist Generators", desc: "AI platform generating custom playlists and music tracks automatically.", url: "https://www.boomy.com", price: "Free/Paid" },
{ name: "Soundraw", category: "Entertainment", subcategory: "Playlist Generators", desc: "AI music generator creating adaptive playlists and tracks.", url: "https://soundraw.io", price: "Paid" },


// Entertainment AI Storytelling Tools
{ name: "AI Dungeon", category: "Entertainment", subcategory: "AI Storytelling", desc: "AI-powered platform for interactive storytelling and adventure creation.", url: "https://play.aidungeon.io", price: "Free/Paid" },
{ name: "Sudowrite", category: "Entertainment", subcategory: "AI Storytelling", desc: "AI writing assistant for creative storytelling and fiction generation.", url: "https://www.sudowrite.com", price: "Paid" },
{ name: "NovelAI", category: "Entertainment", subcategory: "AI Storytelling", desc: "AI platform for generating creative stories and interactive narratives.", url: "https://novelai.net", price: "Paid" },
{ name: "ShortlyAI", category: "Entertainment", subcategory: "AI Storytelling", desc: "AI-powered storytelling assistant for writers and content creators.", url: "https://www.shortlyai.com", price: "Paid" },
{ name: "StoryStream", category: "Entertainment", subcategory: "AI Storytelling", desc: "AI tool for automated story creation and content personalization.", url: "https://storystream.ai", price: "Paid" },


// Entertainment Interactive Games AI Tools
{ name: "AI Dungeon", category: "Entertainment", subcategory: "Interactive Games", desc: "AI-powered platform for interactive text-based adventure games.", url: "https://play.aidungeon.io", price: "Free/Paid" },
{ name: "Bot Colony", category: "Entertainment", subcategory: "Interactive Games", desc: "AI-driven interactive game with natural language conversations.", url: "https://www.botcolony.com", price: "Paid" },
{ name: "GPT-3 Game Labs", category: "Entertainment", subcategory: "Interactive Games", desc: "AI platform enabling interactive gaming experiences with GPT-3.", url: "https://openai.com", price: "Paid" },
{ name: "Latitude AI Games", category: "Entertainment", subcategory: "Interactive Games", desc: "AI-powered interactive gaming and storytelling platform.", url: "https://latitude.io", price: "Paid" },
{ name: "Inworld AI", category: "Entertainment", subcategory: "Interactive Games", desc: "AI platform creating intelligent interactive characters for games.", url: "https://inworld.ai", price: "Paid" },


// Entertainment Virtual Concerts AI Tools
{ name: "Wave", category: "Entertainment", subcategory: "Virtual Concerts", desc: "AI-powered platform for creating immersive virtual concerts and events.", url: "https://wavexr.com", price: "Paid" },
{ name: "MelodyVR", category: "Entertainment", subcategory: "Virtual Concerts", desc: "AI-assisted VR platform for live virtual music performances.", url: "https://www.melodyvr.com", price: "Paid" },
{ name: "TheWaveVR", category: "Entertainment", subcategory: "Virtual Concerts", desc: "AI-driven virtual reality concerts and interactive music experiences.", url: "https://www.thewavevr.com", price: "Free/Paid" },
{ name: "Oculus Venues", category: "Entertainment", subcategory: "Virtual Concerts", desc: "AI-powered platform for attending live virtual concerts in VR.", url: "https://www.oculus.com/experiences/venues", price: "Free/Paid" },
{ name: "NextVR", category: "Entertainment", subcategory: "Virtual Concerts", desc: "AI-enabled immersive virtual reality concerts and sports events.", url: "https://www.nextvr.com", price: "Paid" },


// Entertainment Voice Cloning for Fun AI Tools
{ name: "Voicemod", category: "Entertainment", subcategory: "Voice Cloning for Fun", desc: "AI-powered voice changer and voice cloning software.", url: "https://www.voicemod.net", price: "Free/Paid" },
{ name: "Resemble AI", category: "Entertainment", subcategory: "Voice Cloning for Fun", desc: "AI platform for realistic voice cloning and synthesis.", url: "https://www.resemble.ai", price: "Paid" },
{ name: "iSpeech", category: "Entertainment", subcategory: "Voice Cloning for Fun", desc: "AI-powered text-to-speech and voice cloning platform.", url: "https://www.ispeech.org", price: "Free/Paid" },
{ name: "VocaliD", category: "Entertainment", subcategory: "Voice Cloning for Fun", desc: "AI platform for custom voice cloning and voice generation.", url: "https://vocalid.ai", price: "Paid" },
{ name: "Altered Studio", category: "Entertainment", subcategory: "Voice Cloning for Fun", desc: "AI tool for creating realistic voice clones for entertainment.", url: "https://www.altered.ai", price: "Paid" },


// Entertainment Fan Art Generation AI Tools
{ name: "Artbreeder", category: "Entertainment", subcategory: "Fan Art Generation", desc: "AI-powered platform for creating fan art and visual content.", url: "https://www.artbreeder.com", price: "Free/Paid" },
{ name: "DeepArt", category: "Entertainment", subcategory: "Fan Art Generation", desc: "AI platform transforming photos into artistic fan art creations.", url: "https://deepart.io", price: "Free/Paid" },
{ name: "Runway ML", category: "Entertainment", subcategory: "Fan Art Generation", desc: "AI tool for creating generative art and fan illustrations.", url: "https://runwayml.com", price: "Free/Paid" },
{ name: "Fotor AI Art Generator", category: "Entertainment", subcategory: "Fan Art Generation", desc: "AI-powered platform for generating fan art from text prompts.", url: "https://www.fotor.com/features/ai-image-generator", price: "Free/Paid" },
{ name: "NightCafe", category: "Entertainment", subcategory: "Fan Art Generation", desc: "AI-based platform for creating fan art and AI-generated images.", url: "https://creator.nightcafe.studio", price: "Free/Paid" },


// Entertainment Meme Generation AI Tools
{ name: "Imgflip AI Meme Generator", category: "Entertainment", subcategory: "Meme Generation", desc: "AI-powered meme creation platform generating memes automatically.", url: "https://imgflip.com/ai-meme", price: "Free/Paid" },
{ name: "MemeBot AI", category: "Entertainment", subcategory: "Meme Generation", desc: "AI-assisted tool generating humorous memes from text prompts.", url: "https://memebot.ai", price: "Free/Paid" },
{ name: "Kapwing AI Meme Maker", category: "Entertainment", subcategory: "Meme Generation", desc: "AI platform for creating and editing memes easily online.", url: "https://www.kapwing.com/meme-maker", price: "Free/Paid" },
{ name: "Make a Meme AI", category: "Entertainment", subcategory: "Meme Generation", desc: "AI tool for generating memes with custom text and images.", url: "https://makeameme.org", price: "Free" },
{ name: "DeepAI Meme Generator", category: "Entertainment", subcategory: "Meme Generation", desc: "AI-powered platform generating memes using neural networks.", url: "https://deepai.org/machine-learning-model/meme-generator", price: "Free" },


// Entertainment AI Quizzes Tools
{ name: "Kahoot!", category: "Entertainment", subcategory: "AI Quizzes", desc: "AI-assisted platform for creating interactive quizzes and trivia.", url: "https://kahoot.com", price: "Free/Paid" },
{ name: "Quizizz", category: "Entertainment", subcategory: "AI Quizzes", desc: "AI-powered platform for generating and playing quizzes online.", url: "https://quizizz.com", price: "Free/Paid" },
{ name: "Sporcle", category: "Entertainment", subcategory: "AI Quizzes", desc: "AI-assisted platform for trivia quizzes and interactive challenges.", url: "https://www.sporcle.com", price: "Free/Paid" },
{ name: "Quizlet", category: "Entertainment", subcategory: "AI Quizzes", desc: "AI-powered platform for quiz creation and study practice.", url: "https://quizlet.com", price: "Free/Paid" },
{ name: "ClassMarker", category: "Entertainment", subcategory: "AI Quizzes", desc: "AI-assisted platform for online quizzes and assessments.", url: "https://www.classmarker.com", price: "Paid" },
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