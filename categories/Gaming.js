const subcategories = ["All","AI Game Characters","Procedural Level Generation","Game Story","AI Game Testing","Game Asset Creation","AI Game Balancing","Voice / Dialogue Generation","Animation AI","AI Game Analytics","Cheat Detection / Anti-Cheat AI"];
const tools = [
    // Gaming AI Game Characters Tools
{ name: "Promethean AI", category: "Gaming", subcategory: "AI Game Characters", desc: "AI platform for creating intelligent NPC behaviors in games.", url: "https://www.prometheanai.com", price: "Paid" },
{ name: "Charisma.ai", category: "Gaming", subcategory: "AI Game Characters", desc: "AI-driven interactive characters for games and storytelling.", url: "https://www.charisma.ai", price: "Paid" },
{ name: "Spirit AI", category: "Gaming", subcategory: "AI Game Characters", desc: "AI platform for dynamic NPC dialogue and behavior.", url: "https://www.spiritai.com", price: "Paid" },
{ name: "Inworld AI", category: "Gaming", subcategory: "AI Game Characters", desc: "Generative AI for creating realistic in-game characters and interactions.", url: "https://www.inworld.ai", price: "Paid" },
{ name: "Botpress", category: "Gaming", subcategory: "AI Game Characters", desc: "AI framework for building NPC chat and character-driven AI experiences.", url: "https://botpress.com", price: "Free/Paid" },


// Gaming Procedural Level Generation Tools
{ name: "Promethean AI", category: "Gaming", subcategory: "Procedural Level Generation", desc: "AI tool for generating game environments and levels procedurally.", url: "https://www.prometheanai.com", price: "Paid" },
{ name: "Houdini Engine", category: "Gaming", subcategory: "Procedural Level Generation", desc: "AI-powered procedural generation for game assets and levels.", url: "https://www.sidefx.com", price: "Paid" },
{ name: "Unity ML-Agents", category: "Gaming", subcategory: "Procedural Level Generation", desc: "Machine learning toolkit for AI-driven procedural content creation.", url: "https://unity.com/products/machine-learning-agents", price: "Free/Paid" },
{ name: "Voxel Farm", category: "Gaming", subcategory: "Procedural Level Generation", desc: "AI procedural terrain and voxel-based level generation platform.", url: "https://www.voxelfarm.com", price: "Paid" },
{ name: "Tiled AI", category: "Gaming", subcategory: "Procedural Level Generation", desc: "AI tool for automatic level layout and map generation.", url: "https://www.mapeditor.org", price: "Free/Paid" },


// Gaming Game Story AI Tools
{ name: "AI Dungeon", category: "Gaming", subcategory: "Game Story", desc: "AI-powered platform for generating dynamic game narratives and stories.", url: "https://play.aidungeon.io", price: "Free/Paid" },
{ name: "Charisma.ai", category: "Gaming", subcategory: "Game Story", desc: "AI storytelling engine for creating branching narratives and dialogue.", url: "https://www.charisma.ai", price: "Paid" },
{ name: "Inworld AI", category: "Gaming", subcategory: "Game Story", desc: "Generative AI for interactive storytelling and character-driven plots.", url: "https://www.inworld.ai", price: "Paid" },
{ name: "Latitude.io", category: "Gaming", subcategory: "Game Story", desc: "AI platform for procedurally generated game stories and campaigns.", url: "https://latitude.io", price: "Paid" },
{ name: "Plotagon", category: "Gaming", subcategory: "Game Story", desc: "AI-powered tool for creating interactive story-driven games.", url: "https://www.plotagon.com", price: "Free/Paid" },


// Gaming AI Game Testing Tools
{ name: "GameDriver", category: "Gaming", subcategory: "AI Game Testing", desc: "AI-assisted automated game testing platform for QA and bug detection.", url: "https://www.gamedriver.io", price: "Paid" },
{ name: "Applitools", category: "Gaming", subcategory: "AI Game Testing", desc: "Visual AI testing platform for games and interactive applications.", url: "https://applitools.com", price: "Paid" },
{ name: "Mabl", category: "Gaming", subcategory: "AI Game Testing", desc: "AI-driven automated testing tool for game UI and functionality.", url: "https://www.mabl.com", price: "Paid" },
{ name: "Test.ai", category: "Gaming", subcategory: "AI Game Testing", desc: "AI platform for automating mobile and desktop game testing.", url: "https://test.ai", price: "Paid" },
{ name: "Rainforest QA", category: "Gaming", subcategory: "AI Game Testing", desc: "AI-powered QA automation for game workflows and testing scenarios.", url: "https://www.rainforestqa.com", price: "Paid" },


// Gaming Game Asset Creation AI Tools
{ name: "Promethean AI", category: "Gaming", subcategory: "Game Asset Creation", desc: "AI tool for creating 3D game assets and environments.", url: "https://www.prometheanai.com", price: "Paid" },
{ name: "Runway ML", category: "Gaming", subcategory: "Game Asset Creation", desc: "Generative AI for creating textures, sprites, and game visuals.", url: "https://runwayml.com", price: "Free/Paid" },
{ name: "Kaedim3D", category: "Gaming", subcategory: "Game Asset Creation", desc: "AI platform converting 2D art into 3D game assets.", url: "https://www.kaedim3d.com", price: "Paid" },
{ name: "NVIDIA Omniverse", category: "Gaming", subcategory: "Game Asset Creation", desc: "AI-powered platform for collaborative 3D content creation.", url: "https://www.nvidia.com/en-us/omniverse", price: "Free/Paid" },
{ name: "Artbreeder", category: "Gaming", subcategory: "Game Asset Creation", desc: "AI tool for generating characters, landscapes, and game visuals.", url: "https://www.artbreeder.com", price: "Free/Paid" },


// Gaming AI Game Balancing Tools
{ name: "Latitude.io", category: "Gaming", subcategory: "AI Game Balancing", desc: "AI platform for automatically adjusting game difficulty and balance.", url: "https://latitude.io", price: "Paid" },
{ name: "Colossal-AI", category: "Gaming", subcategory: "AI Game Balancing", desc: "AI-assisted tool for balancing gameplay mechanics and player progression.", url: "https://www.colossalai.com", price: "Free/Paid" },
{ name: "Promethean AI", category: "Gaming", subcategory: "AI Game Balancing", desc: "AI-driven platform for dynamically balancing in-game challenges and mechanics.", url: "https://www.prometheanai.com", price: "Paid" },
{ name: "DeepMotion", category: "Gaming", subcategory: "AI Game Balancing", desc: "AI for analyzing player behavior and optimizing gameplay balance.", url: "https://www.deepmotion.com", price: "Paid" },
{ name: "GameAnalytics", category: "Gaming", subcategory: "AI Game Balancing", desc: "AI-powered analytics platform helping developers balance game progression.", url: "https://gameanalytics.com", price: "Free/Paid" },


// Gaming Voice / Dialogue Generation AI Tools
{ name: "Replica Studios", category: "Gaming", subcategory: "Voice / Dialogue Generation", desc: "AI platform for generating realistic voice acting for game characters.", url: "https://replicastudios.com", price: "Paid" },
{ name: "Respeecher", category: "Gaming", subcategory: "Voice / Dialogue Generation", desc: "AI voice cloning and dialogue generation for games and media.", url: "https://www.respeecher.com", price: "Paid" },
{ name: "Altered Studio", category: "Gaming", subcategory: "Voice / Dialogue Generation", desc: "AI voice generation platform for characters and interactive storytelling.", url: "https://www.altered.ai", price: "Paid" },
{ name: "Inworld AI", category: "Gaming", subcategory: "Voice / Dialogue Generation", desc: "AI creating interactive characters with realistic dialogue and voice.", url: "https://www.inworld.ai", price: "Paid" },
{ name: "Speechify", category: "Gaming", subcategory: "Voice / Dialogue Generation", desc: "AI-driven text-to-speech tool for generating character dialogues.", url: "https://speechify.com", price: "Free/Paid" },


// Gaming Animation AI Tools
{ name: "DeepMotion", category: "Gaming", subcategory: "Animation AI", desc: "AI-powered motion capture and character animation for games.", url: "https://www.deepmotion.com", price: "Paid" },
{ name: "Cascadeur", category: "Gaming", subcategory: "Animation AI", desc: "AI-assisted software for keyframe animation and realistic movement.", url: "https://cascadeur.com", price: "Free/Paid" },
{ name: "RADiCAL", category: "Gaming", subcategory: "Animation AI", desc: "AI-driven motion capture and animation platform for game developers.", url: "https://www.getrad.co", price: "Paid" },
{ name: "Plask", category: "Gaming", subcategory: "Animation AI", desc: "AI motion capture and animation editing software for character movements.", url: "https://plask.ai", price: "Free/Paid" },
{ name: "Move.ai", category: "Gaming", subcategory: "Animation AI", desc: "AI platform converting video into 3D character animations.", url: "https://www.move.ai", price: "Paid" },


// Gaming AI Game Analytics Tools
{ name: "GameAnalytics", category: "Gaming", subcategory: "AI Game Analytics", desc: "AI platform providing insights on player behavior and game performance.", url: "https://gameanalytics.com", price: "Free/Paid" },
{ name: "DeltaDNA", category: "Gaming", subcategory: "AI Game Analytics", desc: "AI-driven analytics for player engagement, retention, and monetization.", url: "https://deltadna.com", price: "Paid" },
{ name: "Unity Analytics", category: "Gaming", subcategory: "AI Game Analytics", desc: "AI-powered analytics integrated with Unity for tracking game metrics.", url: "https://unity.com/products/unity-analytics", price: "Free/Paid" },
{ name: "Kochava", category: "Gaming", subcategory: "AI Game Analytics", desc: "AI analytics platform for mobile game user behavior and monetization.", url: "https://www.kochava.com", price: "Paid" },
{ name: "Amplitude", category: "Gaming", subcategory: "AI Game Analytics", desc: "AI-powered product and game analytics for understanding player actions.", url: "https://amplitude.com", price: "Free/Paid" },


// Gaming Cheat Detection / Anti-Cheat AI Tools
{ name: "BattlEye", category: "Gaming", subcategory: "Cheat Detection / Anti-Cheat AI", desc: "AI-powered anti-cheat system used in online multiplayer games.", url: "https://www.battleye.com", price: "Paid" },
{ name: "Easy Anti-Cheat", category: "Gaming", subcategory: "Cheat Detection / Anti-Cheat AI", desc: "AI-based cheat prevention platform integrated into games.", url: "https://www.easy.ac", price: "Paid" },
{ name: "PunkBuster", category: "Gaming", subcategory: "Cheat Detection / Anti-Cheat AI", desc: "AI-assisted software preventing cheating in multiplayer games.", url: "https://punkbuster.com", price: "Paid" },
{ name: "FairFight", category: "Gaming", subcategory: "Cheat Detection / Anti-Cheat AI", desc: "AI-driven server-side anti-cheat system monitoring player behavior.", url: "https://www.ea.com/fairfight", price: "Paid" },
{ name: "Vanguard (Riot Games)", category: "Gaming", subcategory: "Cheat Detection / Anti-Cheat AI", desc: "AI-enhanced anti-cheat platform used in competitive esports games.", url: "https://playvalorant.com", price: "Free/Paid" },
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