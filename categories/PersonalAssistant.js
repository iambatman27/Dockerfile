const subcategories = ["All","Voice Assistants", "Reminder AI", "Task Management", "Email Drafting", "Scheduling", "Calendar Optimization", "Meeting Summaries", "Habit Tracking", "Personal Insights", "AI Concierge"];
const tools = [
    // Personal Assistant Voice Assistants AI Tools
{ name: "Google Assistant", category: "PersonalAssistant", subcategory: "Voice Assistants", desc: "AI-powered voice assistant for search, tasks, and smart home control.", url: "https://assistant.google.com", price: "Free" },
{ name: "Amazon Alexa", category: "PersonalAssistant", subcategory: "Voice Assistants", desc: "AI-assisted voice assistant for smart devices, reminders, and skills.", url: "https://www.amazon.com/alexa", price: "Free/Paid" },
{ name: "Apple Siri", category: "PersonalAssistant", subcategory: "Voice Assistants", desc: "AI-powered voice assistant integrated into Apple devices for tasks and queries.", url: "https://www.apple.com/siri", price: "Free" },
{ name: "Microsoft Cortana", category: "PersonalAssistant", subcategory: "Voice Assistants", desc: "AI-assisted voice assistant for Windows devices and productivity.", url: "https://www.microsoft.com/cortana", price: "Free/Paid" },
{ name: "Mycroft AI", category: "PersonalAssistant", subcategory: "Voice Assistants", desc: "Open-source AI voice assistant for smart home and personal tasks.", url: "https://mycroft.ai", price: "Free/Paid" },


// Personal Assistant Reminder AI Tools
{ name: "Todoist", category: "PersonalAssistant", subcategory: "Reminder AI", desc: "AI-powered task and reminder app for managing personal and work tasks.", url: "https://todoist.com", price: "Free/Paid" },
{ name: "Microsoft To Do", category: "PersonalAssistant", subcategory: "Reminder AI", desc: "AI-assisted app for task management and smart reminders.", url: "https://to-do.microsoft.com", price: "Free" },
{ name: "Any.do", category: "PersonalAssistant", subcategory: "Reminder AI", desc: "AI-driven task and reminder app syncing across devices.", url: "https://www.any.do", price: "Free/Paid" },
{ name: "Google Keep", category: "PersonalAssistant", subcategory: "Reminder AI", desc: "AI-powered note and reminder app integrated with Google services.", url: "https://keep.google.com", price: "Free" },
{ name: "Remember The Milk", category: "PersonalAssistant", subcategory: "Reminder AI", desc: "AI-assisted task manager and reminder app for personal productivity.", url: "https://www.rememberthemilk.com", price: "Free/Paid" },


// Personal Assistant Task Management AI Tools
{ name: "ClickUp", category: "PersonalAssistant", subcategory: "Task Management", desc: "AI-powered task and project management platform.", url: "https://clickup.com", price: "Free/Paid" },
{ name: "Asana", category: "PersonalAssistant", subcategory: "Task Management", desc: "AI-assisted task management tool for teams and individuals.", url: "https://asana.com", price: "Free/Paid" },
{ name: "Trello", category: "PersonalAssistant", subcategory: "Task Management", desc: "AI-powered task organization platform with boards and automation.", url: "https://trello.com", price: "Free/Paid" },
{ name: "Notion AI", category: "PersonalAssistant", subcategory: "Task Management", desc: "AI-assisted all-in-one workspace for task tracking and notes.", url: "https://www.notion.so/product/ai", price: "Free/Paid" },
{ name: "Monday.com", category: "PersonalAssistant", subcategory: "Task Management", desc: "AI-powered task and project management platform for teams.", url: "https://monday.com", price: "Paid" },


// Personal Assistant Email Drafting AI Tools
{ name: "Grammarly", category: "PersonalAssistant", subcategory: "Email Drafting", desc: "AI-powered tool for drafting, improving, and correcting emails.", url: "https://www.grammarly.com", price: "Free/Paid" },
{ name: "Lavender", category: "PersonalAssistant", subcategory: "Email Drafting", desc: "AI-assisted platform optimizing email writing and personalization.", url: "https://www.lavender.ai", price: "Paid" },
{ name: "Flowrite", category: "PersonalAssistant", subcategory: "Email Drafting", desc: "AI-driven email and message drafting assistant.", url: "https://www.flowrite.com", price: "Paid" },
{ name: "WriteSonic", category: "PersonalAssistant", subcategory: "Email Drafting", desc: "AI-powered tool for creating professional email content quickly.", url: "https://writesonic.com", price: "Free/Paid" },
{ name: "Copy.ai", category: "PersonalAssistant", subcategory: "Email Drafting", desc: "AI-assisted email and content writing platform.", url: "https://www.copy.ai", price: "Free/Paid" },


// Personal Assistant Scheduling AI Tools
{ name: "Calendly", category: "PersonalAssistant", subcategory: "Scheduling", desc: "AI-powered scheduling tool automating meeting and appointment bookings.", url: "https://calendly.com", price: "Free/Paid" },
{ name: "x.ai", category: "PersonalAssistant", subcategory: "Scheduling", desc: "AI-assisted scheduling platform for automating meeting coordination.", url: "https://x.ai", price: "Paid" },
{ name: "Clara", category: "PersonalAssistant", subcategory: "Scheduling", desc: "AI-powered virtual assistant for scheduling meetings and appointments.", url: "https://claralabs.com", price: "Paid" },
{ name: "Reclaim.ai", category: "PersonalAssistant", subcategory: "Scheduling", desc: "AI-assisted tool optimizing calendar schedules automatically.", url: "https://reclaim.ai", price: "Free/Paid" },
{ name: "Woven (by Slack)", category: "PersonalAssistant", subcategory: "Scheduling", desc: "AI-powered calendar and scheduling tool for productivity.", url: "https://woven.com", price: "Paid" },


// Personal Assistant Calendar Optimization AI Tools
{ name: "Clockwise", category: "PersonalAssistant", subcategory: "Calendar Optimization", desc: "AI-powered tool for optimizing calendar schedules and meeting times.", url: "https://www.getclockwise.com", price: "Free/Paid" },
{ name: "Reclaim.ai", category: "PersonalAssistant", subcategory: "Calendar Optimization", desc: "AI-assisted platform automatically organizing tasks and events in your calendar.", url: "https://reclaim.ai", price: "Free/Paid" },
{ name: "Woven (by Slack)", category: "PersonalAssistant", subcategory: "Calendar Optimization", desc: "AI-driven calendar assistant for smart scheduling and optimization.", url: "https://woven.com", price: "Paid" },
{ name: "TimeHero", category: "PersonalAssistant", subcategory: "Calendar Optimization", desc: "AI-powered tool optimizing time allocation and calendar planning.", url: "https://www.timehero.com", price: "Paid" },
{ name: "Skedpal", category: "PersonalAssistant", subcategory: "Calendar Optimization", desc: "AI-assisted calendar and task planning tool for maximizing productivity.", url: "https://www.skedpal.com", price: "Paid" },


// Personal Assistant Meeting Summaries AI Tools
{ name: "Otter.ai", category: "PersonalAssistant", subcategory: "Meeting Summaries", desc: "AI-powered tool for recording and summarizing meetings.", url: "https://otter.ai", price: "Free/Paid" },
{ name: "Fireflies.ai", category: "PersonalAssistant", subcategory: "Meeting Summaries", desc: "AI-assisted platform capturing and summarizing meeting notes.", url: "https://www.fireflies.ai", price: "Free/Paid" },
{ name: "Fathom", category: "PersonalAssistant", subcategory: "Meeting Summaries", desc: "AI-driven meeting assistant for transcription and highlights.", url: "https://fathom.video", price: "Free/Paid" },
{ name: "Avoma", category: "PersonalAssistant", subcategory: "Meeting Summaries", desc: "AI-powered platform summarizing meetings and providing actionable insights.", url: "https://www.avoma.com", price: "Free/Paid" },
{ name: "MeetGeek", category: "PersonalAssistant", subcategory: "Meeting Summaries", desc: "AI-assisted tool automatically recording and summarizing meetings.", url: "https://meetgeek.ai", price: "Paid" },


// Personal Assistant Habit Tracking AI Tools
{ name: "Fabulous", category: "PersonalAssistant", subcategory: "Habit Tracking", desc: "AI-powered app for building healthy habits and daily routines.", url: "https://www.thefabulous.co", price: "Free/Paid" },
{ name: "Streaks", category: "PersonalAssistant", subcategory: "Habit Tracking", desc: "AI-assisted habit tracker for personal productivity and routines.", url: "https://streaksapp.com", price: "Paid" },
{ name: "Habitica", category: "PersonalAssistant", subcategory: "Habit Tracking", desc: "AI-driven gamified habit tracker for motivation and accountability.", url: "https://habitica.com", price: "Free/Paid" },
{ name: "Loop Habit Tracker", category: "PersonalAssistant", subcategory: "Habit Tracking", desc: "AI-powered habit tracking app providing analytics and reminders.", url: "https://loophabittracker.com", price: "Free" },
{ name: "Way of Life", category: "PersonalAssistant", subcategory: "Habit Tracking", desc: "AI-assisted app helping users track habits and behavioral patterns.", url: "https://wayoflifeapp.com", price: "Paid" },


// Personal Assistant Personal Insights AI Tools
{ name: "Youper", category: "PersonalAssistant", subcategory: "Personal Insights", desc: "AI-powered emotional health assistant providing insights and self-reflection.", url: "https://www.youper.ai", price: "Free/Paid" },
{ name: "Reflectly", category: "PersonalAssistant", subcategory: "Personal Insights", desc: "AI-assisted journaling app providing personal insights and mood tracking.", url: "https://reflectly.app", price: "Free/Paid" },
{ name: "Moodfit", category: "PersonalAssistant", subcategory: "Personal Insights", desc: "AI-driven platform analyzing mental health and daily habits.", url: "https://www.getmoodfit.com", price: "Free/Paid" },
{ name: "Daylio", category: "PersonalAssistant", subcategory: "Personal Insights", desc: "AI-assisted mood tracker and journal generating personal insights.", url: "https://daylio.net", price: "Free/Paid" },
{ name: "Foresight AI", category: "PersonalAssistant", subcategory: "Personal Insights", desc: "AI-powered tool providing personal and productivity insights based on habits.", url: "https://www.foresight.ai", price: "Paid" },


// Personal Assistant AI Concierge Tools
{ name: "x.ai", category: "PersonalAssistant", subcategory: "AI Concierge", desc: "AI-powered virtual assistant for scheduling, planning, and concierge tasks.", url: "https://x.ai", price: "Paid" },
{ name: "Magic", category: "PersonalAssistant", subcategory: "AI Concierge", desc: "AI-assisted platform providing personal concierge services on demand.", url: "https://www.getmagic.com", price: "Paid" },
{ name: "Fin", category: "PersonalAssistant", subcategory: "AI Concierge", desc: "AI-powered virtual assistant handling personal and professional tasks.", url: "https://www.fin.com", price: "Paid" },
{ name: "Clara", category: "PersonalAssistant", subcategory: "AI Concierge", desc: "AI-driven concierge assistant managing meetings, tasks, and communications.", url: "https://claralabs.com", price: "Paid" },
{ name: "Trevor AI", category: "PersonalAssistant", subcategory: "AI Concierge", desc: "AI-powered personal assistant helping with planning and task execution.", url: "https://trevorai.com", price: "Free/Paid" },
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