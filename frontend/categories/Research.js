const subcategories = ["All","AI Research Search Engines", "Literature Review Assistants", "Data Analysis", "Experiment Design", "Citation & Reference Management" ,"Literature Mapping" , "Collaboration Tools" , "Summarization" , "Trend Analysis" ,"Project Management"];
const tools = [
    // Research AI Research Search Engines Tools
{ name: "Semantic Scholar", category: "Research", subcategory: "AI Research Search Engines", desc: "AI-powered academic search engine for research papers.", url: "https://www.semanticscholar.org", price: "Free" },
{ name: "Google Scholar", category: "Research", subcategory: "AI Research Search Engines", desc: "AI-assisted search engine for scholarly articles and citations.", url: "https://scholar.google.com", price: "Free" },
{ name: "Microsoft Academic", category: "Research", subcategory: "AI Research Search Engines", desc: "AI-driven platform for discovering academic papers and authors.", url: "https://academic.microsoft.com", price: "Free" },
{ name: "ResearchGate", category: "Research", subcategory: "AI Research Search Engines", desc: "AI-assisted academic network for sharing and finding research.", url: "https://www.researchgate.net", price: "Free" },
{ name: "PubMed", category: "Research", subcategory: "AI Research Search Engines", desc: "AI-powered search engine for biomedical literature.", url: "https://pubmed.ncbi.nlm.nih.gov", price: "Free" },


// Research Literature Review Assistants Tools
{ name: "Elicit", category: "Research", subcategory: "Literature Review Assistants", desc: "AI research assistant for literature reviews and summaries.", url: "https://elicit.org", price: "Free/Paid" },
{ name: "Research Rabbit", category: "Research", subcategory: "Literature Review Assistants", desc: "AI-powered tool to explore and visualize research papers.", url: "https://www.researchrabbit.ai", price: "Free/Paid" },
{ name: "Connected Papers", category: "Research", subcategory: "Literature Review Assistants", desc: "AI-driven tool for discovering related academic papers.", url: "https://www.connectedpapers.com", price: "Free" },
{ name: "Scite", category: "Research", subcategory: "Literature Review Assistants", desc: "AI-powered citation analysis and literature evaluation tool.", url: "https://scite.ai", price: "Free/Paid" },
{ name: "Scholarcy", category: "Research", subcategory: "Literature Review Assistants", desc: "AI tool summarizing research papers and extracting key findings.", url: "https://www.scholarcy.com", price: "Paid" },


// Research Data Analysis AI Tools
{ name: "IBM Watson Studio", category: "Research", subcategory: "Data Analysis", desc: "AI-powered platform for data analysis and modeling.", url: "https://www.ibm.com/cloud/watson-studio", price: "Paid" },
{ name: "Google Colab", category: "Research", subcategory: "Data Analysis", desc: "AI-assisted cloud platform for coding and data analysis in Python.", url: "https://colab.research.google.com", price: "Free/Paid" },
{ name: "RapidMiner", category: "Research", subcategory: "Data Analysis", desc: "AI-powered data science platform for analysis and predictions.", url: "https://rapidminer.com", price: "Free/Paid" },
{ name: "KNIME", category: "Research", subcategory: "Data Analysis", desc: "AI-assisted tool for data analytics and machine learning workflows.", url: "https://www.knime.com", price: "Free/Paid" },
{ name: "Orange Data Mining", category: "Research", subcategory: "Data Analysis", desc: "AI-driven visual data analysis and machine learning tool.", url: "https://orange.biolab.si", price: "Free" },


// Research Experiment Design AI Tools
{ name: "LabArchives", category: "Research", subcategory: "Experiment Design", desc: "AI-assisted platform for designing and managing experiments.", url: "https://www.labarchives.com", price: "Paid" },
{ name: "Benchling", category: "Research", subcategory: "Experiment Design", desc: "AI-powered tool for designing, tracking, and analyzing experiments.", url: "https://www.benchling.com", price: "Paid" },
{ name: "Labguru", category: "Research", subcategory: "Experiment Design", desc: "AI-assisted electronic lab notebook for experiment planning.", url: "https://www.labguru.com", price: "Paid" },
{ name: "Protocols.io", category: "Research", subcategory: "Experiment Design", desc: "AI-powered platform for designing and sharing scientific protocols.", url: "https://www.protocols.io", price: "Free/Paid" },
{ name: "Quartzy", category: "Research", subcategory: "Experiment Design", desc: "AI-assisted lab management platform for experiment tracking.", url: "https://www.quartzy.com", price: "Free/Paid" },


// Research Citation & Reference Management AI Tools
{ name: "Zotero", category: "Research", subcategory: "Citation & Reference Management", desc: "AI-assisted reference management and citation tool.", url: "https://www.zotero.org", price: "Free" },
{ name: "Mendeley", category: "Research", subcategory: "Citation & Reference Management", desc: "AI-powered tool for managing research papers and references.", url: "https://www.mendeley.com", price: "Free/Paid" },
{ name: "EndNote", category: "Research", subcategory: "Citation & Reference Management", desc: "AI-assisted platform for citation, bibliography, and reference management.", url: "https://www.endnote.com", price: "Paid" },
{ name: "RefWorks", category: "Research", subcategory: "Citation & Reference Management", desc: "AI-powered tool for organizing and managing citations.", url: "https://refworks.proquest.com", price: "Paid" },
{ name: "Paperpile", category: "Research", subcategory: "Citation & Reference Management", desc: "AI-assisted reference manager for academic papers.", url: "https://paperpile.com", price: "Paid" },


// Research Literature Mapping AI Tools
{ name: "Research Rabbit", category: "Research", subcategory: "Literature Mapping", desc: "AI-driven tool for mapping and visualizing research papers.", url: "https://www.researchrabbit.ai", price: "Free/Paid" },
{ name: "Connected Papers", category: "Research", subcategory: "Literature Mapping", desc: "AI-powered platform for visual exploration of related research papers.", url: "https://www.connectedpapers.com", price: "Free" },
{ name: "VOSviewer", category: "Research", subcategory: "Literature Mapping", desc: "AI-assisted tool for constructing and visualizing bibliometric networks.", url: "https://www.vosviewer.com", price: "Free" },
{ name: "CiteSpace", category: "Research", subcategory: "Literature Mapping", desc: "AI-driven software for visualizing trends and patterns in scientific literature.", url: "http://cluster.cis.drexel.edu/~cchen/citespace/", price: "Free" },
{ name: "Litmaps", category: "Research", subcategory: "Literature Mapping", desc: "AI-powered tool for tracking and mapping research papers.", url: "https://www.litmaps.com", price: "Free/Paid" },


// Research Collaboration Tools AI Tools
{ name: "Overleaf", category: "Research", subcategory: "Collaboration Tools", desc: "AI-assisted online LaTeX editor for collaborative research writing.", url: "https://www.overleaf.com", price: "Free/Paid" },
{ name: "Authorea", category: "Research", subcategory: "Collaboration Tools", desc: "AI-powered platform for collaborative research paper writing.", url: "https://www.authorea.com", price: "Free/Paid" },
{ name: "Notion", category: "Research", subcategory: "Collaboration Tools", desc: "AI-assisted workspace for collaborative research notes and documentation.", url: "https://www.notion.so", price: "Free/Paid" },
{ name: "Slack", category: "Research", subcategory: "Collaboration Tools", desc: "AI-powered collaboration platform for research teams.", url: "https://slack.com", price: "Free/Paid" },
{ name: "Microsoft Teams", category: "Research", subcategory: "Collaboration Tools", desc: "AI-assisted platform for collaborative research meetings and communication.", url: "https://www.microsoft.com/microsoft-teams", price: "Free/Paid" },


// Research Summarization AI Tools
{ name: "Scholarcy", category: "Research", subcategory: "Summarization", desc: "AI-powered tool for summarizing research papers and extracting key points.", url: "https://www.scholarcy.com", price: "Paid" },
{ name: "QuillBot", category: "Research", subcategory: "Summarization", desc: "AI-assisted platform for summarizing articles and papers.", url: "https://quillbot.com", price: "Free/Paid" },
{ name: "Resoomer", category: "Research", subcategory: "Summarization", desc: "AI-powered tool for condensing research content into summaries.", url: "https://resoomer.com", price: "Free/Paid" },
{ name: "SMMRY", category: "Research", subcategory: "Summarization", desc: "AI-assisted summarization tool for academic papers and documents.", url: "https://smmry.com", price: "Free" },
{ name: "ChatGPT", category: "Research", subcategory: "Summarization", desc: "AI-driven platform for generating concise summaries of research content.", url: "https://chat.openai.com", price: "Free/Paid" },


// Research Trend Analysis AI Tools
{ name: "Dimensions", category: "Research", subcategory: "Trend Analysis", desc: "AI-powered platform for analyzing research trends and metrics.", url: "https://www.dimensions.ai", price: "Paid" },
{ name: "Altmetric", category: "Research", subcategory: "Trend Analysis", desc: "AI-assisted tool for tracking research impact and trends.", url: "https://www.altmetric.com", price: "Paid" },
{ name: "Scite", category: "Research", subcategory: "Trend Analysis", desc: "AI-powered platform analyzing citation patterns and research trends.", url: "https://scite.ai", price: "Free/Paid" },
{ name: "VOSviewer", category: "Research", subcategory: "Trend Analysis", desc: "AI-assisted tool for visualizing research trends in literature networks.", url: "https://www.vosviewer.com", price: "Free" },
{ name: "CiteSpace", category: "Research", subcategory: "Trend Analysis", desc: "AI-driven tool for identifying emerging research trends.", url: "http://cluster.cis.drexel.edu/~cchen/citespace/", price: "Free" },


// Research Project Management AI Tools
{ name: "Labguru", category: "Research", subcategory: "Project Management", desc: "AI-assisted platform for managing research projects, tasks, and lab inventories.", url: "https://www.labguru.com", price: "Paid" },
{ name: "Benchling", category: "Research", subcategory: "Project Management", desc: "AI-powered platform for managing life sciences research projects and experiments.", url: "https://www.benchling.com", price: "Paid" },
{ name: "Quartzy", category: "Research", subcategory: "Project Management", desc: "AI-assisted lab management tool for tracking research projects and inventory.", url: "https://www.quartzy.com", price: "Free/Paid" },
{ name: "LabArchives", category: "Research", subcategory: "Project Management", desc: "AI-powered platform for organizing and managing research workflows.", url: "https://www.labarchives.com", price: "Paid" },
{ name: "Asana", category: "Research", subcategory: "Project Management", desc: "AI-assisted project management tool used for planning and tracking research tasks.", url: "https://asana.com", price: "Free/Paid" }]

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