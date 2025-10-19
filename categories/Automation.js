const subcategories = ["All","Task Automation", "Workflow Automation", "Email Automation", "Marketing Automation", "Process Optimization", "Robotic Process Automation (RPA)", "Scripting AI", "AI Assistants", "Report Automation", "Data Pipeline Automation"];

const tools = [
    // Automation Task Automation AI Tools
    { name: "Zapier", category: "Automation", subcategory: "Task Automation", desc: "AI-powered platform automating repetitive tasks across apps.", url: "https://zapier.com", price: "Free/Paid" },
{ name: "IFTTT", category: "Automation", subcategory: "Task Automation", desc: "AI-assisted tool connecting apps and automating workflows.", url: "https://ifttt.com", price: "Free/Paid" },
{ name: "Microsoft Power Automate", category: "Automation", subcategory: "Task Automation", desc: "AI-driven platform for automating tasks and processes.", url: "https://flow.microsoft.com", price: "Free/Paid" },
{ name: "Integromat (Make)", category: "Automation", subcategory: "Task Automation", desc: "AI-assisted workflow automation platform connecting apps and services.", url: "https://www.make.com", price: "Free/Paid" },
{ name: "Automate.io", category: "Automation", subcategory: "Task Automation", desc: "AI-powered tool for automating repetitive tasks and workflows.", url: "https://automate.io", price: "Free/Paid" },


// Automation Workflow Automation AI Tools
{ name: "Monday.com", category: "Automation", subcategory: "Workflow Automation", desc: "AI-assisted workflow automation platform for teams.", url: "https://monday.com", price: "Paid" },
{ name: "Trello", category: "Automation", subcategory: "Workflow Automation", desc: "AI-powered workflow automation and project management tool.", url: "https://trello.com", price: "Free/Paid" },
{ name: "Asana", category: "Automation", subcategory: "Workflow Automation", desc: "AI-driven platform for automating team workflows and tasks.", url: "https://asana.com", price: "Free/Paid" },
{ name: "Kissflow", category: "Automation", subcategory: "Workflow Automation", desc: "AI-powered workflow automation software for businesses.", url: "https://kissflow.com", price: "Paid" },
{ name: "Process Street", category: "Automation", subcategory: "Workflow Automation", desc: "AI-assisted tool for automating workflows and checklists.", url: "https://www.process.st", price: "Free/Paid" },


// Automation Email Automation AI Tools
{ name: "Mailchimp", category: "Automation", subcategory: "Email Automation", desc: "AI-powered email marketing and automation platform.", url: "https://mailchimp.com", price: "Free/Paid" },
{ name: "Sendinblue", category: "Automation", subcategory: "Email Automation", desc: "AI-assisted platform for automated email campaigns.", url: "https://www.sendinblue.com", price: "Free/Paid" },
{ name: "HubSpot", category: "Automation", subcategory: "Email Automation", desc: "AI-driven email automation and CRM platform.", url: "https://www.hubspot.com", price: "Free/Paid" },
{ name: "ActiveCampaign", category: "Automation", subcategory: "Email Automation", desc: "AI-assisted platform for email marketing automation and segmentation.", url: "https://www.activecampaign.com", price: "Paid" },
{ name: "GetResponse", category: "Automation", subcategory: "Email Automation", desc: "AI-powered email automation and marketing platform.", url: "https://www.getresponse.com", price: "Free/Paid" },


// Automation Marketing Automation AI Tools
{ name: "HubSpot", category: "Automation", subcategory: "Marketing Automation", desc: "AI-powered marketing automation and CRM platform.", url: "https://www.hubspot.com", price: "Free/Paid" },
{ name: "Marketo", category: "Automation", subcategory: "Marketing Automation", desc: "AI-assisted platform for marketing automation and analytics.", url: "https://www.marketo.com", price: "Paid" },
{ name: "ActiveCampaign", category: "Automation", subcategory: "Marketing Automation", desc: "AI-driven marketing automation platform with email and sales tools.", url: "https://www.activecampaign.com", price: "Paid" },
{ name: "Pardot", category: "Automation", subcategory: "Marketing Automation", desc: "AI-powered marketing automation solution for B2B businesses.", url: "https://www.salesforce.com/products/pardot", price: "Paid" },
{ name: "Omnisend", category: "Automation", subcategory: "Marketing Automation", desc: "AI-assisted platform for automated email, SMS, and marketing campaigns.", url: "https://www.omnisend.com", price: "Free/Paid" },


// Automation Process Optimization AI Tools
{ name: "Celonis", category: "Automation", subcategory: "Process Optimization", desc: "AI-powered process mining and optimization platform.", url: "https://www.celonis.com", price: "Paid" },
{ name: "Signavio", category: "Automation", subcategory: "Process Optimization", desc: "AI-assisted process management and optimization tool.", url: "https://www.signavio.com", price: "Paid" },
{ name: "IBM Blueworks Live", category: "Automation", subcategory: "Process Optimization", desc: "AI-driven platform for process modeling and optimization.", url: "https://www.ibm.com/cloud/blueworks-live", price: "Paid" },
{ name: "Appian", category: "Automation", subcategory: "Process Optimization", desc: "AI-assisted business process management and optimization software.", url: "https://www.appian.com", price: "Paid" },
{ name: "Kofax", category: "Automation", subcategory: "Process Optimization", desc: "AI-powered platform for automating and optimizing business processes.", url: "https://www.kofax.com", price: "Paid" },


// Automation Robotic Process Automation (RPA) AI Tools
{ name: "UiPath", category: "Automation", subcategory: "Robotic Process Automation (RPA)", desc: "AI-powered RPA platform for automating repetitive business tasks.", url: "https://www.uipath.com", price: "Free/Paid" },
{ name: "Automation Anywhere", category: "Automation", subcategory: "Robotic Process Automation (RPA)", desc: "AI-assisted RPA platform for enterprise automation.", url: "https://www.automationanywhere.com", price: "Paid" },
{ name: "Blue Prism", category: "Automation", subcategory: "Robotic Process Automation (RPA)", desc: "AI-driven RPA solution for process automation in enterprises.", url: "https://www.blueprism.com", price: "Paid" },
{ name: "Kofax RPA", category: "Automation", subcategory: "Robotic Process Automation (RPA)", desc: "AI-powered platform for automating workflows and tasks.", url: "https://www.kofax.com/products/rpa", price: "Paid" },
{ name: "WorkFusion", category: "Automation", subcategory: "Robotic Process Automation (RPA)", desc: "AI-assisted RPA platform with cognitive automation capabilities.", url: "https://www.workfusion.com", price: "Paid" },


// Automation Scripting AI Tools
{ name: "OpenAI Codex", category: "Automation", subcategory: "Scripting AI", desc: "AI-powered tool generating scripts and code from natural language.", url: "https://openai.com/codex", price: "Paid" },
{ name: "GitHub Copilot", category: "Automation", subcategory: "Scripting AI", desc: "AI-assisted coding assistant generating code snippets and scripts.", url: "https://github.com/features/copilot", price: "Paid" },
{ name: "Tabnine", category: "Automation", subcategory: "Scripting AI", desc: "AI-driven code completion and script generation tool.", url: "https://www.tabnine.com", price: "Free/Paid" },
{ name: "Replit Ghostwriter", category: "Automation", subcategory: "Scripting AI", desc: "AI-assisted code generator and scripting tool integrated in Replit.", url: "https://replit.com/ghostwriter", price: "Paid" },
{ name: "Kite", category: "Automation", subcategory: "Scripting AI", desc: "AI-powered coding assistant for script and code completion.", url: "https://www.kite.com", price: "Free/Paid" },


// Automation AI Assistants Tools
{ name: "x.ai", category: "Automation", subcategory: "AI Assistants", desc: "AI-powered virtual assistant for task and meeting management.", url: "https://x.ai", price: "Paid" },
{ name: "Clara", category: "Automation", subcategory: "AI Assistants", desc: "AI-driven assistant handling scheduling and task automation.", url: "https://claralabs.com", price: "Paid" },
{ name: "Trevor AI", category: "Automation", subcategory: "AI Assistants", desc: "AI-powered personal assistant for task and calendar management.", url: "https://trevorai.com", price: "Free/Paid" },
{ name: "Fin", category: "Automation", subcategory: "AI Assistants", desc: "AI-assisted virtual assistant for business and personal tasks.", url: "https://www.fin.com", price: "Paid" },
{ name: "Magic", category: "Automation", subcategory: "AI Assistants", desc: "AI-powered platform providing virtual assistant services.", url: "https://www.getmagic.com", price: "Paid" },


// Automation Report Automation AI Tools
{ name: "Narrative Science Quill", category: "Automation", subcategory: "Report Automation", desc: "AI-powered platform automatically generating business reports.", url: "https://narrativescience.com", price: "Paid" },
{ name: "Automated Insights Wordsmith", category: "Automation", subcategory: "Report Automation", desc: "AI-assisted platform converting data into natural language reports.", url: "https://automatedinsights.com", price: "Paid" },
{ name: "Zoho Analytics", category: "Automation", subcategory: "Report Automation", desc: "AI-driven reporting tool for automated dashboards and insights.", url: "https://www.zoho.com/analytics", price: "Free/Paid" },
{ name: "Power BI", category: "Automation", subcategory: "Report Automation", desc: "AI-assisted platform for automated report generation from data.", url: "https://powerbi.microsoft.com", price: "Paid" },
{ name: "Tableau", category: "Automation", subcategory: "Report Automation", desc: "AI-powered reporting and visualization platform for automation.", url: "https://www.tableau.com", price: "Paid" },
// Automation Data Pipeline Automation AI Tools
{ name: "Apache NiFi", category: "Automation", subcategory: "Data Pipeline Automation", desc: "AI-assisted platform for automating data workflows and pipelines.", url: "https://nifi.apache.org", price: "Free" },
{ name: "Airflow (Apache)", category: "Automation", subcategory: "Data Pipeline Automation", desc: "AI-powered workflow and data pipeline orchestration tool.", url: "https://airflow.apache.org", price: "Free" },
{ name: "Talend", category: "Automation", subcategory: "Data Pipeline Automation", desc: "AI-assisted data integration and pipeline automation platform.", url: "https://www.talend.com", price: "Paid" },
{ name: "Fivetran", category: "Automation", subcategory: "Data Pipeline Automation", desc: "AI-powered platform for automating ETL and data pipelines.", url: "https://www.fivetran.com", price: "Paid" },
{ name: "Prefect", category: "Automation", subcategory: "Data Pipeline Automation", desc: "AI-assisted tool for orchestrating and automating data workflows.", url: "https://www.prefect.io", price: "Free/Paid" },]
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