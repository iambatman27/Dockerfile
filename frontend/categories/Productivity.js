const subcategories = [
  "All","Task Management","Note-taking","Calendar & Scheduling","Time Tracking",
  "Collaboration","Automation","Focus & Mindfulness","File Management","AI Assistants","Workflow Optimization"
];

const tools = [
  // Task Management
  { name: "Asana", category: "Productivity", subcategory: "Task Management", desc: "Manage projects, tasks, and teams efficiently with AI-assisted tracking.", url: "https://asana.com", price: "Free/Paid" },
  { name: "Trello", category: "Productivity", subcategory: "Task Management", desc: "Visual task management board for teams with AI suggestions.", url: "https://trello.com", price: "Free/Paid" },
  { name: "ClickUp", category: "Productivity", subcategory: "Task Management", desc: "All-in-one productivity platform with AI-driven task prioritization.", url: "https://clickup.com", price: "Free/Paid" },
  { name: "Monday.com", category: "Productivity", subcategory: "Task Management", desc: "Project management platform with AI automation and analytics.", url: "https://monday.com", price: "Paid" },
  { name: "Todoist", category: "Productivity", subcategory: "Task Management", desc: "AI-powered task manager to boost personal and team productivity.", url: "https://todoist.com", price: "Free/Paid" },

  // Note-taking
  { name: "Notion", category: "Productivity", subcategory: "Note-taking", desc: "AI-enhanced workspace for notes, databases, and collaborative docs.", url: "https://www.notion.so", price: "Free/Paid" },
  { name: "Evernote", category: "Productivity", subcategory: "Note-taking", desc: "AI-powered note-taking, organizing, and task management.", url: "https://evernote.com", price: "Free/Paid" },
  { name: "Obsidian", category: "Productivity", subcategory: "Note-taking", desc: "Knowledge management app with AI integration for linking notes.", url: "https://obsidian.md", price: "Free/Paid" },
  { name: "Roam Research", category: "Productivity", subcategory: "Note-taking", desc: "Networked note-taking with AI-assisted backlinking and ideas.", url: "https://roamresearch.com", price: "Paid" },
  { name: "Mem", category: "Productivity", subcategory: "Note-taking", desc: "AI-based note-taking and personal knowledge management platform.", url: "https://getmem.ai", price: "Free/Paid" },

  // Calendar & Scheduling
  { name: "Google Calendar", category: "Productivity", subcategory: "Calendar & Scheduling", desc: "Smart scheduling, reminders, and AI event suggestions.", url: "https://calendar.google.com", price: "Free" },
  { name: "Microsoft Outlook Calendar", category: "Productivity", subcategory: "Calendar & Scheduling", desc: "AI-powered calendar integration with tasks and emails.", url: "https://outlook.live.com/calendar/", price: "Free/Paid" },
  { name: "Calendly", category: "Productivity", subcategory: "Calendar & Scheduling", desc: "AI-assisted scheduling tool to book meetings efficiently.", url: "https://calendly.com", price: "Free/Paid" },
  { name: "TimeHero", category: "Productivity", subcategory: "Calendar & Scheduling", desc: "AI-powered scheduling and task automation platform.", url: "https://www.timehero.com", price: "Paid" },
  { name: "x.ai", category: "Productivity", subcategory: "Calendar & Scheduling", desc: "AI virtual assistant to schedule meetings automatically.", url: "https://x.ai", price: "Paid" },

  // Time Tracking
  { name: "Toggl Track", category: "Productivity", subcategory: "Time Tracking", desc: "Track time with AI insights to optimize productivity.", url: "https://toggl.com/track/", price: "Free/Paid" },
  { name: "RescueTime", category: "Productivity", subcategory: "Time Tracking", desc: "AI-powered productivity tracking and focus analytics.", url: "https://www.rescuetime.com", price: "Free/Paid" },
  { name: "Clockify", category: "Productivity", subcategory: "Time Tracking", desc: "AI-enhanced time tracker for teams and projects.", url: "https://clockify.me", price: "Free/Paid" },
  { name: "Timely", category: "Productivity", subcategory: "Time Tracking", desc: "Automatic time tracking with AI insights for efficiency.", url: "https://timelyapp.com", price: "Paid" },
  { name: "Everhour", category: "Productivity", subcategory: "Time Tracking", desc: "Integrates with tools like Asana for AI-assisted time tracking.", url: "https://everhour.com", price: "Paid" },

  // Collaboration
  { name: "Slack", category: "Productivity", subcategory: "Collaboration", desc: "AI-powered collaboration platform for messaging and workspaces.", url: "https://slack.com", price: "Free/Paid" },
  { name: "Microsoft Teams", category: "Productivity", subcategory: "Collaboration", desc: "AI-enhanced team collaboration, video calls, and file sharing.", url: "https://www.microsoft.com/en-us/microsoft-teams", price: "Free/Paid" },
  { name: "Figma", category: "Productivity", subcategory: "Collaboration", desc: "AI-assisted design collaboration platform for teams.", url: "https://www.figma.com", price: "Free/Paid" },
  { name: "Miro", category: "Productivity", subcategory: "Collaboration", desc: "Visual collaboration platform with AI brainstorming and boards.", url: "https://miro.com", price: "Free/Paid" },
  { name: "Google Workspace", category: "Productivity", subcategory: "Collaboration", desc: "All-in-one AI-powered productivity suite for teams.", url: "https://workspace.google.com", price: "Paid" },

  // Automation
  { name: "Zapier", category: "Productivity", subcategory: "Automation", desc: "AI-powered workflow automation between apps and tools.", url: "https://zapier.com", price: "Free/Paid" },
  { name: "IFTTT", category: "Productivity", subcategory: "Automation", desc: "AI-assisted automation for apps, devices, and services.", url: "https://ifttt.com", price: "Free/Paid" },
  { name: "Integromat (Make)", category: "Productivity", subcategory: "Automation", desc: "AI-enhanced automation platform connecting multiple services.", url: "https://www.make.com", price: "Free/Paid" },
  { name: "Workato", category: "Productivity", subcategory: "Automation", desc: "Enterprise automation with AI workflow optimization.", url: "https://www.workato.com", price: "Paid" },
  { name: "Parabola", category: "Productivity", subcategory: "Automation", desc: "AI workflow builder for automating repetitive tasks.", url: "https://parabola.io", price: "Paid" },

  // Focus & Mindfulness
  { name: "Headspace", category: "Productivity", subcategory: "Focus & Mindfulness", desc: "AI-guided meditation and focus sessions to boost productivity.", url: "https://www.headspace.com", price: "Free/Paid" },
  { name: "Calm", category: "Productivity", subcategory: "Focus & Mindfulness", desc: "Meditation and mindfulness app with AI recommendations.", url: "https://www.calm.com", price: "Free/Paid" },
  { name: "Forest", category: "Productivity", subcategory: "Focus & Mindfulness", desc: "Stay focused using AI productivity gamification.", url: "https://www.forestapp.cc", price: "Paid" },
  { name: "Focus@Will", category: "Productivity", subcategory: "Focus & Mindfulness", desc: "AI-generated music to improve concentration.", url: "https://www.focusatwill.com", price: "Paid" },
  { name: "Brain.fm", category: "Productivity", subcategory: "Focus & Mindfulness", desc: "AI-powered focus music and cognitive enhancement.", url: "https://www.brain.fm", price: "Paid" },

  // File Management
  { name: "Dropbox", category: "Productivity", subcategory: "File Management", desc: "Cloud storage and AI-assisted file organization.", url: "https://www.dropbox.com", price: "Free/Paid" },
  { name: "Google Drive", category: "Productivity", subcategory: "File Management", desc: "AI-powered file management and collaboration platform.", url: "https://drive.google.com", price: "Free/Paid" },
  { name: "OneDrive", category: "Productivity", subcategory: "File Management", desc: "Microsoft cloud storage with AI file search and sync.", url: "https://onedrive.live.com", price: "Free/Paid" },
  { name: "Box", category: "Productivity", subcategory: "File Management", desc: "AI-enhanced enterprise file management and collaboration.", url: "https://www.box.com", price: "Paid" },
  { name: "pCloud", category: "Productivity", subcategory: "File Management", desc: "AI-assisted secure cloud storage platform.", url: "https://www.pcloud.com", price: "Free/Paid" },

  // AI Assistants
  { name: "Notion AI", category: "Productivity", subcategory: "AI Assistants", desc: "AI writing and productivity assistant integrated in Notion.", url: "https://www.notion.so/product/ai", price: "Paid" },
  { name: "Grammarly", category: "Productivity", subcategory: "AI Assistants", desc: "AI writing assistant for grammar, clarity, and tone.", url: "https://www.grammarly.com", price: "Free/Paid" },
  { name: "Otter.ai", category: "Productivity", subcategory: "AI Assistants", desc: "AI-powered transcription and meeting assistant.", url: "https://otter.ai", price: "Free/Paid" },
  { name: "Cogram", category: "Productivity", subcategory: "AI Assistants", desc: "AI assistant for coding and productivity in IDEs.", url: "https://cogram.com", price: "Paid" },
  { name: "Reclaim.ai", category: "Productivity", subcategory: "AI Assistants", desc: "AI calendar assistant to automatically schedule your tasks.", url: "https://reclaim.ai", price: "Paid" },

  // Workflow Optimization
  { name: "Process Street", category: "Productivity", subcategory: "Workflow Optimization", desc: "AI-powered workflow management and SOP automation.", url: "https://www.process.st", price: "Paid" },
  { name: "Nintex", category: "Productivity", subcategory: "Workflow Optimization", desc: "AI-assisted workflow automation for enterprise processes.", url: "https://www.nintex.com", price: "Paid" },
  { name: "Kissflow", category: "Productivity", subcategory: "Workflow Optimization", desc: "AI-enhanced platform to design and automate workflows.", url: "https://kissflow.com", price: "Paid" },
  { name: "AirTable", category: "Productivity", subcategory: "Workflow Optimization", desc: "AI-powered relational database to optimize workflows.", url: "https://airtable.com", price: "Free/Paid" },
  { name: "Smartsheet", category: "Productivity", subcategory: "Workflow Optimization", desc: "AI-assisted collaborative work management platform.", url: "https://www.smartsheet.com", price: "Paid" }
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
