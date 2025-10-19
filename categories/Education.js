const subcategories = ["All","AI Tutoring", "Homework Assistance", "Language Learning", "Exam Preparation", "Personalized Learning", "Quiz / Test Generation", "Content Summarization", "Interactive Lessons", "Virtual Labs", "Learning Analytics"];
const tools =[
    
// Education AI Tutoring Tools
{ name: "Socratic by Google", category: "Education", subcategory: "AI Tutoring", desc: "AI-powered tutoring app providing explanations and step-by-step solutions.", url: "https://socratic.org", price: "Free" },
{ name: "Khan Academy", category: "Education", subcategory: "AI Tutoring", desc: "AI-assisted platform offering personalized tutoring and learning paths.", url: "https://www.khanacademy.org", price: "Free" },
{ name: "Brainly", category: "Education", subcategory: "AI Tutoring", desc: "AI-powered community tutoring platform for homework and learning help.", url: "https://brainly.com", price: "Free/Paid" },
{ name: "Thinkster Math", category: "Education", subcategory: "AI Tutoring", desc: "AI-driven math tutoring platform providing personalized guidance.", url: "https://hellothinkster.com", price: "Paid" },
{ name: "Querium", category: "Education", subcategory: "AI Tutoring", desc: "AI-based STEM tutoring platform with step-by-step feedback.", url: "https://querium.com", price: "Paid" },


// Education Homework Assistance AI Tools
{ name: "Chegg Study", category: "Education", subcategory: "Homework Assistance", desc: "AI-powered platform offering homework solutions and explanations.", url: "https://www.chegg.com/study", price: "Paid" },
{ name: "Brainly", category: "Education", subcategory: "Homework Assistance", desc: "AI-assisted homework help community providing step-by-step solutions.", url: "https://brainly.com", price: "Free/Paid" },
{ name: "Socratic by Google", category: "Education", subcategory: "Homework Assistance", desc: "AI app helping students solve homework questions using explanations.", url: "https://socratic.org", price: "Free" },
{ name: "Quizlet", category: "Education", subcategory: "Homework Assistance", desc: "AI-driven flashcards and homework study assistance platform.", url: "https://quizlet.com", price: "Free/Paid" },
{ name: "Photomath", category: "Education", subcategory: "Homework Assistance", desc: "AI app solving math problems from pictures with step-by-step guidance.", url: "https://photomath.app", price: "Free/Paid" },


// Education Language Learning AI Tools
{ name: "Duolingo", category: "Education", subcategory: "Language Learning", desc: "AI-powered language learning platform with personalized lessons.", url: "https://www.duolingo.com", price: "Free/Paid" },
{ name: "Babbel", category: "Education", subcategory: "Language Learning", desc: "AI-assisted language learning app offering interactive lessons.", url: "https://www.babbel.com", price: "Paid" },
{ name: "Rosetta Stone", category: "Education", subcategory: "Language Learning", desc: "AI-driven language learning platform with immersive experiences.", url: "https://www.rosettastone.com", price: "Paid" },
{ name: "Busuu", category: "Education", subcategory: "Language Learning", desc: "AI-based language learning app with personalized feedback.", url: "https://www.busuu.com", price: "Free/Paid" },
{ name: "LingQ", category: "Education", subcategory: "Language Learning", desc: "AI-powered platform for learning languages through content immersion.", url: "https://www.lingq.com", price: "Paid" },


// Education Exam Preparation AI Tools
{ name: "PrepScholar", category: "Education", subcategory: "Exam Preparation", desc: "AI-assisted platform for personalized SAT, ACT, and exam prep.", url: "https://www.prepscholar.com", price: "Paid" },
{ name: "Magoosh", category: "Education", subcategory: "Exam Preparation", desc: "AI-powered platform for GRE, GMAT, and other standardized exams.", url: "https://magoosh.com", price: "Paid" },
{ name: "Quizlet", category: "Education", subcategory: "Exam Preparation", desc: "AI-assisted platform for creating study sets and exam prep materials.", url: "https://quizlet.com", price: "Free/Paid" },
{ name: "Brilliant", category: "Education", subcategory: "Exam Preparation", desc: "AI-driven problem-solving and exam preparation platform.", url: "https://www.brilliant.org", price: "Free/Paid" },
{ name: "Edulastic", category: "Education", subcategory: "Exam Preparation", desc: "AI platform for practice tests and formative assessment preparation.", url: "https://edulastic.com", price: "Free/Paid" },


// Education Personalized Learning AI Tools
{ name: "Knewton Alta", category: "Education", subcategory: "Personalized Learning", desc: "AI-powered platform offering adaptive learning for students.", url: "https://www.knewton.com", price: "Paid" },
{ name: "Smart Sparrow", category: "Education", subcategory: "Personalized Learning", desc: "AI-assisted adaptive learning platform for personalized experiences.", url: "https://www.smartsparrow.com", price: "Paid" },
{ name: "DreamBox", category: "Education", subcategory: "Personalized Learning", desc: "AI-driven math platform providing personalized learning paths.", url: "https://www.dreambox.com", price: "Paid" },
{ name: "Squirrel AI", category: "Education", subcategory: "Personalized Learning", desc: "AI adaptive learning platform for individualized education.", url: "https://www.squirrelai.com", price: "Paid" },
{ name: "Century Tech", category: "Education", subcategory: "Personalized Learning", desc: "AI platform delivering personalized learning and analytics to students.", url: "https://www.century.tech", price: "Paid" },


// Education Quiz / Test Generation AI Tools
{ name: "Quizlet", category: "Education", subcategory: "Quiz / Test Generation", desc: "AI-assisted platform for generating quizzes and practice tests.", url: "https://quizlet.com", price: "Free/Paid" },
{ name: "Kahoot!", category: "Education", subcategory: "Quiz / Test Generation", desc: "AI-powered tool for creating interactive quizzes and assessments.", url: "https://kahoot.com", price: "Free/Paid" },
{ name: "Socrative", category: "Education", subcategory: "Quiz / Test Generation", desc: "AI-enabled platform for creating quizzes, polls, and formative assessments.", url: "https://www.socrative.com", price: "Free/Paid" },
{ name: "GoConqr", category: "Education", subcategory: "Quiz / Test Generation", desc: "AI platform for generating quizzes and learning resources.", url: "https://www.goconqr.com", price: "Free/Paid" },
{ name: "ExamSoft", category: "Education", subcategory: "Quiz / Test Generation", desc: "AI-assisted platform for generating and analyzing exams securely.", url: "https://examsoft.com", price: "Paid" },


// Education Content Summarization AI Tools
{ name: "Scholarcy", category: "Education", subcategory: "Content Summarization", desc: "AI-powered tool summarizing research papers and articles.", url: "https://www.scholarcy.com", price: "Free/Paid" },
{ name: "SMMRY", category: "Education", subcategory: "Content Summarization", desc: "AI-assisted platform for summarizing articles and documents.", url: "https://smmry.com", price: "Free" },
{ name: "Resoomer", category: "Education", subcategory: "Content Summarization", desc: "AI tool that automatically summarizes texts for students and researchers.", url: "https://www.resoomer.com", price: "Free/Paid" },
{ name: "QuillBot", category: "Education", subcategory: "Content Summarization", desc: "AI-powered summarizer and paraphrasing tool for learning content.", url: "https://quillbot.com", price: "Free/Paid" },
{ name: "Scholarcy Chrome Extension", category: "Education", subcategory: "Content Summarization", desc: "AI-assisted extension summarizing online articles and research papers.", url: "https://www.scholarcy.com/chrome-extension", price: "Free/Paid" },


// Education Interactive Lessons AI Tools
{ name: "Nearpod", category: "Education", subcategory: "Interactive Lessons", desc: "AI-assisted platform for creating interactive lessons and activities.", url: "https://www.nearpod.com", price: "Free/Paid" },
{ name: "Edpuzzle", category: "Education", subcategory: "Interactive Lessons", desc: "AI-powered platform for making interactive video lessons.", url: "https://edpuzzle.com", price: "Free/Paid" },
{ name: "Pear Deck", category: "Education", subcategory: "Interactive Lessons", desc: "AI-assisted tool for designing interactive presentations and lessons.", url: "https://www.peardeck.com", price: "Free/Paid" },
{ name: "Genially", category: "Education", subcategory: "Interactive Lessons", desc: "AI platform for creating interactive content and lessons.", url: "https://www.genial.ly", price: "Free/Paid" },
{ name: "ThingLink", category: "Education", subcategory: "Interactive Lessons", desc: "AI-powered platform for interactive images, videos, and lessons.", url: "https://www.thinglink.com", price: "Free/Paid" },


// Education Virtual Labs AI Tools
{ name: "Labster", category: "Education", subcategory: "Virtual Labs", desc: "AI-powered virtual lab simulations for science education.", url: "https://www.labster.com", price: "Paid" },
{ name: "PraxiLabs", category: "Education", subcategory: "Virtual Labs", desc: "AI-assisted virtual labs for biology, chemistry, and physics experiments.", url: "https://www.praxilabs.com", price: "Paid" },
{ name: "Beyond Labz", category: "Education", subcategory: "Virtual Labs", desc: "AI-driven virtual lab platform for interactive science experiments.", url: "https://www.beyondlabz.com", price: "Paid" },
{ name: "Visible Body", category: "Education", subcategory: "Virtual Labs", desc: "AI-assisted interactive 3D anatomy and biology virtual labs.", url: "https://www.visiblebody.com", price: "Paid" },
{ name: "ChemCollective", category: "Education", subcategory: "Virtual Labs", desc: "AI-powered virtual chemistry lab simulations for learning experiments.", url: "http://chemcollective.org", price: "Free" },


// Education Learning Analytics AI Tools
{ name: "Knewton Alta", category: "Education", subcategory: "Learning Analytics", desc: "AI-powered platform providing learning analytics and adaptive feedback.", url: "https://www.knewton.com", price: "Paid" },
{ name: "Edmodo Insights", category: "Education", subcategory: "Learning Analytics", desc: "AI-assisted platform analyzing student performance and engagement.", url: "https://new.edmodo.com", price: "Free/Paid" },
{ name: "Civitas Learning", category: "Education", subcategory: "Learning Analytics", desc: "AI platform providing analytics for student learning outcomes.", url: "https://www.civitaslearning.com", price: "Paid" },
{ name: "Brightspace Insights", category: "Education", subcategory: "Learning Analytics", desc: "AI-driven learning analytics platform for tracking and improving student performance.", url: "https://www.d2l.com/brightspace", price: "Paid" },
{ name: "Instructure Analytics", category: "Education", subcategory: "Learning Analytics", desc: "AI-powered learning analytics platform integrated with LMS solutions.", url: "https://www.instructure.com", price: "Paid" },
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