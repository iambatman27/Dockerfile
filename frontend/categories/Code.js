const subcategories = ["All","Code / Programming AI", "Data Analysis / AI Analytics", "Code Generation", "Debugging Tools", "API Integration", "Database Tools", "Code Refactoring", "No-Code AI Platforms", "Automation Scripts", "Algorithm Optimization"];

const tools = [
   // Code / Programming AI
 { name: "GitHub Copilot", category: "Code", subcategory: "Code / Programming AI", desc: "AI-powered code completion and suggestions integrated directly into your IDE.", url: "https://github.com/features/copilot", price: "Paid" },
{ name: "Tabnine", category: "Code", subcategory: "Code / Programming AI", desc: "AI code assistant for autocompletion and intelligent code suggestions.", url: "https://www.tabnine.com", price: "Free/Paid" },
{ name: "Codeium", category: "Code", subcategory: "Code / Programming AI", desc: "Free AI-powered coding assistant supporting multiple languages and IDEs.", url: "https://codeium.com", price: "Free" },
{ name: "Replit Ghostwriter", category: "Code", subcategory: "Code / Programming AI", desc: "AI coding assistant built into Replit for code completion, error fixing, and suggestions.", url: "https://replit.com", price: "Free/Paid" },
{ name: "Kite", category: "Code", subcategory: "Code / Programming AI", desc: "AI-powered code completions for Python, JavaScript, and other languages.", url: "https://www.kite.com", price: "Free/Paid" },


  // Data Analysis / AI Analytics
 { name: "ChatGPT (OpenAI)", category: "Code", subcategory: "Data Analysis / AI Analytics", desc: "AI assistant capable of analyzing data, generating reports, and answering queries.", url: "https://chat.openai.com", price: "Free/Paid" },
{ name: "Claude AI", category: "Code", subcategory: "Data Analysis / AI Analytics", desc: "AI-powered analytics assistant for data queries and summarization.", url: "https://www.anthropic.com/claude", price: "Paid" },
{ name: "Perplexity AI", category: "Code", subcategory: "Data Analysis / AI Analytics", desc: "AI tool for querying datasets and generating insights.", url: "https://www.perplexity.ai", price: "Free/Paid" },
{ name: "You.com AI", category: "Code", subcategory: "Data Analysis / AI Analytics", desc: "AI-driven platform for searching, summarizing, and analyzing data.", url: "https://you.com", price: "Free/Paid" },
{ name: "AIDungeon Analytics", category: "Code", subcategory: "Data Analysis / AI Analytics", desc: "Uses AI to analyze text and datasets for patterns and insights.", url: "https://play.aidungeon.io", price: "Free/Paid" },

  // Code Generation
{ name: "GitHub Copilot", category: "Code", subcategory: "Code Generation", desc: "AI-powered code completion and generation integrated into IDEs for multiple programming languages.", url: "https://github.com/features/copilot", price: "Paid" },
{ name: "OpenAI Codex", category: "Code", subcategory: "Code Generation", desc: "Generates code from natural language prompts in multiple programming languages.", url: "https://openai.com/codex", price: "Paid" },
{ name: "Tabnine", category: "Code", subcategory: "Code Generation", desc: "AI assistant for autocompletion and intelligent code generation.", url: "https://www.tabnine.com", price: "Free/Paid" },
{ name: "Replit Ghostwriter", category: "Code", subcategory: "Code Generation", desc: "Generates and completes code within the Replit IDE using AI assistance.", url: "https://replit.com", price: "Free/Paid" },
{ name: "Codeium", category: "Code", subcategory: "Code Generation", desc: "Free AI-powered code generation and autocompletion tool for multiple languages.", url: "https://codeium.com", price: "Free" },

  // Debugging Tools
{ name: "DeepCode (Snyk Code)", category: "Code", subcategory: "Debugging Tools", desc: "AI-powered static code analysis that finds bugs and security vulnerabilities.", url: "https://snyk.io/product/code/", price: "Free/Paid" },
{ name: "Codiga", category: "Code", subcategory: "Debugging Tools", desc: "Automated code review and bug detection using AI.", url: "https://www.codiga.io", price: "Free/Paid" },
{ name: "Ponicode", category: "Code", subcategory: "Debugging Tools", desc: "Generates unit tests and detects bugs in your code using AI.", url: "https://www.ponicode.com", price: "Free/Paid" },
{ name: "Embold", category: "Code", subcategory: "Debugging Tools", desc: "AI-driven code analysis platform to identify errors and quality issues.", url: "https://www.embold.io", price: "Paid" },
{ name: "SonarQube with AI Plugins", category: "Code", subcategory: "Debugging Tools", desc: "AI-assisted static code analysis and bug detection for multiple languages.", url: "https://www.sonarqube.org", price: "Free/Paid" },

  // API Integration
{ name: "Postman AI", category: "Code", subcategory: "API Integration", desc: "AI-assisted API testing, documentation, and integration.", url: "https://www.postman.com", price: "Free/Paid" },
{ name: "RapidAPI AI", category: "Code", subcategory: "API Integration", desc: "Discover, connect, and test APIs with AI-powered recommendations.", url: "https://rapidapi.com", price: "Free/Paid" },
{ name: "Kong Konnect", category: "Code", subcategory: "API Integration", desc: "AI-enhanced API management and integration platform.", url: "https://konghq.com", price: "Paid" },
{ name: "APIMatic", category: "Code", subcategory: "API Integration", desc: "AI-assisted code generation for API SDKs and integration.", url: "https://www.apimatic.io", price: "Free/Paid" },
{ name: "Stoplight", category: "Code", subcategory: "API Integration", desc: "Design, mock, and document APIs with AI-driven suggestions.", url: "https://stoplight.io", price: "Free/Paid" },

  // Database Tools
{ name: "SQLGPT", category: "Code", subcategory: "Database Tools", desc: "AI assistant for generating SQL queries and analyzing database structures.", url: "https://sqlgpt.io", price: "Free/Paid" },
{ name: "AI2SQL", category: "Code", subcategory: "Database Tools", desc: "Generates SQL queries from natural language prompts using AI.", url: "https://www.ai2sql.com", price: "Free/Paid" },
{ name: "SeekWell", category: "Code", subcategory: "Database Tools", desc: "AI-powered platform for querying databases and automating reports.", url: "https://www.seekwell.io", price: "Paid" },
{ name: "Text2SQL (OpenAI)", category: "Code", subcategory: "Database Tools", desc: "Uses AI to convert plain language into SQL queries.", url: "https://openai.com", price: "Paid" },
{ name: "Dbdiagram.io AI", category: "Code", subcategory: "Database Tools", desc: "AI-assisted database schema generation and visualization.", url: "https://dbdiagram.io", price: "Free/Paid" },

  // Code Refactoring
{ name: "Refactor.ai", category: "Code", subcategory: "Code Refactoring", desc: "AI-powered tool to refactor and optimize code for readability and performance.", url: "https://refactor.ai", price: "Paid" },
{ name: "Codiga", category: "Code", subcategory: "Code Refactoring", desc: "AI-driven code improvement, refactoring suggestions, and automated fixes.", url: "https://www.codiga.io", price: "Free/Paid" },
{ name: "DeepCode (Snyk Code)", category: "Code", subcategory: "Code Refactoring", desc: "AI-assisted code analysis and refactoring recommendations.", url: "https://snyk.io/product/code/", price: "Free/Paid" },
{ name: "IntelliCode (Visual Studio)", category: "Code", subcategory: "Code Refactoring", desc: "AI-powered code suggestions and refactoring within Visual Studio.", url: "https://visualstudio.microsoft.com/services/intellicode/", price: "Free/Paid" },
{ name: "PyCharm Code With Me + AI", category: "Code", subcategory: "Code Refactoring", desc: "AI-assisted code optimization and refactoring for Python projects.", url: "https://www.jetbrains.com/pycharm/", price: "Free/Paid" },

  // No-Code AI Platforms
{ name: "Levity", category: "Code", subcategory: "No-Code AI Platforms", desc: "Automate tasks and workflows using AI without writing code.", url: "https://www.levity.ai", price: "Paid" },
{ name: "Obviously AI – Excel AI", category: "Code", subcategory: "No-Code AI Platforms", desc: "AI integration in spreadsheets for predictions and data insights.", url: "https://www.obviously.ai", price: "Free/Paid" },
{ name: "FloydHub", category: "Code", subcategory: "No-Code AI Platforms", desc: "Cloud platform for training and deploying AI models without deep coding.", url: "https://www.floydhub.com", price: "Paid" },
{ name: "Softr", category: "Code", subcategory: "No-Code AI Platforms", desc: "Build web apps and workflows without coding; integrates AI for smarter automation.", url: "https://www.softr.io", price: "Free/Paid" },
{ name: "Airtable", category: "Code", subcategory: "No-Code AI Platforms", desc: "No-code platform to create custom apps, databases, and workflows; supports AI integrations.", url: "https://airtable.com", price: "Free/Paid" },

  // Automation Scripts
{ name: "Zapier AI", category: "Code", subcategory: "Automation Scripts", desc: "Automate workflows across apps using AI-powered triggers and actions.", url: "https://zapier.com", price: "Free/Paid" },
{ name: "Make (formerly Integromat)", category: "Code", subcategory: "Automation Scripts", desc: "AI-assisted automation to connect apps and automate tasks.", url: "https://www.make.com", price: "Free/Paid" },
{ name: "Parabola", category: "Code", subcategory: "Automation Scripts", desc: "Automate data workflows and business processes using AI.", url: "https://parabola.io", price: "Paid" },
{ name: "Tray.io", category: "Code", subcategory: "Automation Scripts", desc: "AI-powered automation platform for complex enterprise workflows.", url: "https://tray.io", price: "Paid" },
{ name: "Activepieces", category: "Code", subcategory: "Automation Scripts", desc: "Open-source AI-driven workflow automation platform.", url: "https://activepieces.com", price: "Free/Paid" },

  // Algorithm Optimization
{ name: "Google AutoML", category: "Code", subcategory: "Algorithm Optimization", desc: "Automatically optimizes machine learning models and algorithms for performance.", url: "https://cloud.google.com/automl", price: "Paid" },
{ name: "H2O.ai Driverless AI", category: "Code", subcategory: "Algorithm Optimization", desc: "AI platform for automatic feature engineering, model tuning, and optimization.", url: "https://www.h2o.ai/products/h2o-driverless-ai/", price: "Paid" },
{ name: "DataRobot", category: "Code", subcategory: "Algorithm Optimization", desc: "Automates machine learning model selection, tuning, and optimization.", url: "https://www.datarobot.com", price: "Paid" },
{ name: "Weights & Biases", category: "Code", subcategory: "Algorithm Optimization", desc: "Tool for tracking, optimizing, and comparing ML experiments and algorithms.", url: "https://wandb.ai", price: "Free/Paid" },
{ name: "Optuna", category: "Code", subcategory: "Algorithm Optimization", desc: "Open-source framework for hyperparameter optimization and algorithm tuning.", url: "https://optuna.org", price: "Free" },

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
