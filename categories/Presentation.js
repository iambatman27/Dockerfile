const subcategories = ["All","Slide Generation", "Design Templates", "AI Pitch Decks", "Infographics", "Data Visualization", "Content Summarization", "Image / Diagram Creation", "Chart Generation", "Animations", "Speaker Notes Assistance"];
const tools = [
    // Presentation Slide Generation AI Tools
{ name: "Beautiful.ai", category: "Presentation", subcategory: "Slide Generation", desc: "AI-powered platform automatically generating professional slides.", url: "https://www.beautiful.ai", price: "Free/Paid" },
{ name: "Tome", category: "Presentation", subcategory: "Slide Generation", desc: "AI-assisted tool for generating story-driven slides quickly.", url: "https://tome.app", price: "Free/Paid" },
{ name: "Decktopus", category: "Presentation", subcategory: "Slide Generation", desc: "AI-powered slide generation platform with smart content suggestions.", url: "https://www.decktopus.com", price: "Free/Paid" },
{ name: "Designs.ai SlideMaker", category: "Presentation", subcategory: "Slide Generation", desc: "AI-assisted tool creating slides from text or scripts.", url: "https://designs.ai/tools/slidemaker", price: "Paid" },
{ name: "Slidebean", category: "Presentation", subcategory: "Slide Generation", desc: "AI-driven platform generating slides and pitch decks automatically.", url: "https://slidebean.com", price: "Free/Paid" },


// Presentation Design Templates AI Tools
{ name: "Canva", category: "Presentation", subcategory: "Design Templates", desc: "AI-powered platform offering customizable design templates for presentations.", url: "https://www.canva.com", price: "Free/Paid" },
{ name: "Visme", category: "Presentation", subcategory: "Design Templates", desc: "AI-assisted presentation tool with professional design templates.", url: "https://www.visme.co", price: "Free/Paid" },
{ name: "Crello", category: "Presentation", subcategory: "Design Templates", desc: "AI-powered platform offering a wide variety of presentation templates.", url: "https://crello.com", price: "Free/Paid" },
{ name: "Slidesgo", category: "Presentation", subcategory: "Design Templates", desc: "AI-assisted platform providing free and premium slide templates.", url: "https://slidesgo.com", price: "Free/Paid" },
{ name: "Emaze", category: "Presentation", subcategory: "Design Templates", desc: "AI-driven tool with ready-made presentation templates.", url: "https://www.emaze.com", price: "Free/Paid" },


// Presentation AI Pitch Decks Tools
{ name: "Slidebean", category: "Presentation", subcategory: "AI Pitch Decks", desc: "AI-powered platform generating startup pitch decks automatically.", url: "https://slidebean.com", price: "Free/Paid" },
{ name: "Pitch.com", category: "Presentation", subcategory: "AI Pitch Decks", desc: "AI-assisted platform for collaborative pitch deck creation.", url: "https://pitch.com", price: "Free/Paid" },
{ name: "Tome", category: "Presentation", subcategory: "AI Pitch Decks", desc: "AI-driven tool for designing engaging pitch decks and presentations.", url: "https://tome.app", price: "Free/Paid" },
{ name: "Decktopus", category: "Presentation", subcategory: "AI Pitch Decks", desc: "AI-powered pitch deck generator for startups and businesses.", url: "https://www.decktopus.com", price: "Free/Paid" },
{ name: "Visme", category: "Presentation", subcategory: "AI Pitch Decks", desc: "AI-assisted platform creating professional pitch decks quickly.", url: "https://www.visme.co", price: "Free/Paid" },


// Presentation Infographics AI Tools
{ name: "Venngage", category: "Presentation", subcategory: "Infographics", desc: "AI-powered platform creating professional infographics easily.", url: "https://venngage.com", price: "Free/Paid" },
{ name: "Piktochart", category: "Presentation", subcategory: "Infographics", desc: "AI-assisted infographic creation platform with templates.", url: "https://piktochart.com", price: "Free/Paid" },
{ name: "Canva", category: "Presentation", subcategory: "Infographics", desc: "AI-driven platform for designing infographics and visuals.", url: "https://www.canva.com", price: "Free/Paid" },
{ name: "Easel.ly", category: "Presentation", subcategory: "Infographics", desc: "AI-assisted tool for creating and sharing infographics.", url: "https://www.easel.ly", price: "Free/Paid" },
{ name: "Visme", category: "Presentation", subcategory: "Infographics", desc: "AI-powered platform for making infographics, charts, and visuals.", url: "https://www.visme.co", price: "Free/Paid" },


// Presentation Data Visualization AI Tools
{ name: "Tableau", category: "Presentation", subcategory: "Data Visualization", desc: "AI-powered data visualization platform for insights and analytics.", url: "https://www.tableau.com", price: "Paid" },
{ name: "Power BI", category: "Presentation", subcategory: "Data Visualization", desc: "AI-assisted tool for creating interactive data dashboards.", url: "https://powerbi.microsoft.com", price: "Paid" },
{ name: "Zoho Analytics", category: "Presentation", subcategory: "Data Visualization", desc: "AI-driven platform for visualizing and analyzing data.", url: "https://www.zoho.com/analytics", price: "Free/Paid" },
{ name: "Infogram", category: "Presentation", subcategory: "Data Visualization", desc: "AI-assisted tool for creating charts, graphs, and dashboards.", url: "https://infogram.com", price: "Free/Paid" },
{ name: "Google Data Studio", category: "Presentation", subcategory: "Data Visualization", desc: "AI-powered tool for building interactive reports and visualizations.", url: "https://datastudio.google.com", price: "Free" },


// Presentation Content Summarization AI Tools
{ name: "ChatGPT", category: "Presentation", subcategory: "Content Summarization", desc: "AI-powered tool for summarizing content and generating concise points.", url: "https://chat.openai.com", price: "Free/Paid" },
{ name: "QuillBot", category: "Presentation", subcategory: "Content Summarization", desc: "AI-assisted platform for summarizing text and creating bullet points.", url: "https://quillbot.com", price: "Free/Paid" },
{ name: "SMMRY", category: "Presentation", subcategory: "Content Summarization", desc: "AI-driven tool for condensing text into key points and summaries.", url: "https://smmry.com", price: "Free" },
{ name: "Resoomer", category: "Presentation", subcategory: "Content Summarization", desc: "AI-powered text summarization tool for articles and reports.", url: "https://resoomer.com", price: "Free/Paid" },
{ name: "Scholarcy", category: "Presentation", subcategory: "Content Summarization", desc: "AI-assisted platform summarizing research papers and documents.", url: "https://www.scholarcy.com", price: "Paid" },


// Presentation Image / Diagram Creation AI Tools
{ name: "Canva", category: "Presentation", subcategory: "Image / Diagram Creation", desc: "AI-powered platform for creating diagrams, images, and visuals.", url: "https://www.canva.com", price: "Free/Paid" },
{ name: "Visme", category: "Presentation", subcategory: "Image / Diagram Creation", desc: "AI-assisted tool for generating diagrams and visual content.", url: "https://www.visme.co", price: "Free/Paid" },
{ name: "Lucidchart", category: "Presentation", subcategory: "Image / Diagram Creation", desc: "AI-driven platform for diagrams, flowcharts, and visuals.", url: "https://www.lucidchart.com", price: "Free/Paid" },
{ name: "Draw.io", category: "Presentation", subcategory: "Image / Diagram Creation", desc: "AI-assisted diagram creation tool for charts and visuals.", url: "https://app.diagrams.net", price: "Free" },
{ name: "MindMeister", category: "Presentation", subcategory: "Image / Diagram Creation", desc: "AI-powered mind mapping and diagram tool for presentations.", url: "https://www.mindmeister.com", price: "Free/Paid" },


// Presentation Chart Generation AI Tools
{ name: "Infogram", category: "Presentation", subcategory: "Chart Generation", desc: "AI-powered tool to create charts, graphs, and infographics.", url: "https://infogram.com", price: "Free/Paid" },
{ name: "Tableau", category: "Presentation", subcategory: "Chart Generation", desc: "AI-assisted platform for creating interactive and visual charts.", url: "https://www.tableau.com", price: "Paid" },
{ name: "Microsoft Power BI", category: "Presentation", subcategory: "Chart Generation", desc: "AI-driven data visualization tool with advanced charting features.", url: "https://powerbi.microsoft.com", price: "Paid" },
{ name: "Google Data Studio", category: "Presentation", subcategory: "Chart Generation", desc: "AI-powered tool for creating dynamic charts and reports.", url: "https://datastudio.google.com", price: "Free" },
{ name: "ChartBlocks", category: "Presentation", subcategory: "Chart Generation", desc: "AI-assisted platform for building custom charts quickly.", url: "https://www.chartblocks.com", price: "Free/Paid" },


// Presentation Animations AI Tools
{ name: "Powtoon", category: "Presentation", subcategory: "Animations", desc: "AI-powered tool for creating animated presentations and videos.", url: "https://www.powtoon.com", price: "Free/Paid" },
{ name: "Vyond", category: "Presentation", subcategory: "Animations", desc: "AI-assisted platform for professional animated presentations.", url: "https://www.vyond.com", price: "Paid" },
{ name: "Animaker", category: "Presentation", subcategory: "Animations", desc: "AI-driven tool for building animated videos and slides.", url: "https://www.animaker.com", price: "Free/Paid" },
{ name: "Renderforest", category: "Presentation", subcategory: "Animations", desc: "AI-powered animation and video creation platform.", url: "https://www.renderforest.com", price: "Free/Paid" },
{ name: "Moovly", category: "Presentation", subcategory: "Animations", desc: "AI-assisted tool for creating animated content and presentations.", url: "https://www.moovly.com", price: "Free/Paid" },


// Presentation Speaker Notes Assistance AI Tools
{ name: "Tome", category: "Presentation", subcategory: "Speaker Notes Assistance", desc: "AI-powered tool generating speaker notes from slides automatically.", url: "https://tome.app", price: "Free/Paid" },
{ name: "Beautiful.ai", category: "Presentation", subcategory: "Speaker Notes Assistance", desc: "AI-assisted platform providing smart speaker notes for slides.", url: "https://www.beautiful.ai", price: "Free/Paid" },
{ name: "Slidebean", category: "Presentation", subcategory: "Speaker Notes Assistance", desc: "AI-powered presentation tool generating speaker notes and cues.", url: "https://slidebean.com", price: "Free/Paid" },
{ name: "Microsoft PowerPoint AI", category: "Presentation", subcategory: "Speaker Notes Assistance", desc: "AI-driven PowerPoint feature suggesting speaker notes and talking points.", url: "https://www.microsoft.com/microsoft-365/powerpoint", price: "Paid" },
{ name: "Copy.ai", category: "Presentation", subcategory: "Speaker Notes Assistance", desc: "AI-assisted tool generating slide notes and content suggestions.", url: "https://www.copy.ai", price: "Free/Paid" }]

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