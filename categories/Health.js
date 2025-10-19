const subcategories = ["All","Diagnostics", "Fitness Tracking", "Telemedicine", "Mental Health", "Drug Discovery", "Nutrition", "Medical Imaging", "Wearables", "Symptom Checkers", "Health Analytics"];
const tools = [
    
// Health Diagnostics AI Tools
{ name: "IBM Watson Health", category: "Health", subcategory: "Diagnostics", desc: "AI-powered platform assisting in medical diagnosis and clinical decision support.", url: "https://www.ibm.com/watson-health", price: "Paid" },
{ name: "PathAI", category: "Health", subcategory: "Diagnostics", desc: "AI platform improving pathology diagnosis accuracy using deep learning algorithms.", url: "https://www.pathai.com", price: "Paid" },
{ name: "Aidoc", category: "Health", subcategory: "Diagnostics", desc: "AI solution for radiology that detects abnormalities in medical imaging.", url: "https://www.aidoc.com", price: "Paid" },
{ name: "Butterfly Network", category: "Health", subcategory: "Diagnostics", desc: "AI-powered handheld ultrasound device for rapid medical imaging diagnostics.", url: "https://www.butterflynetwork.com", price: "Paid" },
{ name: "Tempus", category: "Health", subcategory: "Diagnostics", desc: "AI-driven platform providing molecular diagnostics and precision medicine insights.", url: "https://www.tempus.com", price: "Paid" },


// Health Fitness Tracking AI Tools
{ name: "WHOOP", category: "Health", subcategory: "Fitness Tracking", desc: "AI-powered wearable tracking recovery, strain, and sleep for optimal performance.", url: "https://www.whoop.com", price: "Paid" },
{ name: "Fitbit Premium", category: "Health", subcategory: "Fitness Tracking", desc: "AI-driven fitness insights, personalized guidance, and activity tracking.", url: "https://www.fitbit.com/premium", price: "Free/Paid" },
{ name: "Garmin Connect", category: "Health", subcategory: "Fitness Tracking", desc: "AI analytics for wearable fitness data, heart rate, and performance metrics.", url: "https://connect.garmin.com", price: "Free/Paid" },
{ name: "MyFitnessPal", category: "Health", subcategory: "Fitness Tracking", desc: "AI-powered app for tracking workouts, nutrition, and health goals.", url: "https://www.myfitnesspal.com", price: "Free/Paid" },
{ name: "Strava", category: "Health", subcategory: "Fitness Tracking", desc: "AI-based performance analytics for running and cycling activities.", url: "https://www.strava.com", price: "Free/Paid" },


// Health Telemedicine AI Tools
{ name: "Teladoc Health", category: "Health", subcategory: "Telemedicine", desc: "AI-powered telehealth platform for virtual consultations and diagnosis.", url: "https://www.teladochealth.com", price: "Paid" },
{ name: "Amwell", category: "Health", subcategory: "Telemedicine", desc: "AI-enhanced telemedicine service connecting patients with doctors remotely.", url: "https://www.amwell.com", price: "Paid" },
{ name: "MDLIVE", category: "Health", subcategory: "Telemedicine", desc: "Telehealth platform using AI for virtual care and symptom triage.", url: "https://www.mdlive.com", price: "Paid" },
{ name: "Doctor on Demand", category: "Health", subcategory: "Telemedicine", desc: "AI-assisted virtual healthcare for urgent care, mental health, and chronic conditions.", url: "https://www.doctorondemand.com", price: "Paid" },
{ name: "Babylon Health", category: "Health", subcategory: "Telemedicine", desc: "AI-driven telehealth app offering virtual consultations and symptom checking.", url: "https://www.babylonhealth.com", price: "Free/Paid" },


// Health Mental Health AI Tools
{ name: "Woebot", category: "Health", subcategory: "Mental Health", desc: "AI chatbot providing cognitive behavioral therapy and mental health support.", url: "https://woebothealth.com", price: "Free/Paid" },
{ name: "Wysa", category: "Health", subcategory: "Mental Health", desc: "AI-driven mental health chatbot offering emotional support and therapy guidance.", url: "https://www.wysa.io", price: "Free/Paid" },
{ name: "Youper", category: "Health", subcategory: "Mental Health", desc: "AI-powered emotional health assistant for mood tracking and therapy.", url: "https://www.youper.ai", price: "Free/Paid" },
{ name: "Ginger", category: "Health", subcategory: "Mental Health", desc: "AI platform combining coaching, therapy, and psychiatry support.", url: "https://www.ginger.com", price: "Paid" },
{ name: "Mindstrong", category: "Health", subcategory: "Mental Health", desc: "AI-based mental health platform using digital biomarkers for monitoring.", url: "https://mindstrong.com", price: "Paid" },


// Health Drug Discovery AI Tools
{ name: "Insilico Medicine", category: "Health", subcategory: "Drug Discovery", desc: "AI platform for drug discovery, biomarker development, and clinical trials.", url: "https://insilico.com", price: "Paid" },
{ name: "Atomwise", category: "Health", subcategory: "Drug Discovery", desc: "AI-driven platform for predicting drug efficacy and molecular interactions.", url: "https://www.atomwise.com", price: "Paid" },
{ name: "BenevolentAI", category: "Health", subcategory: "Drug Discovery", desc: "AI-powered drug discovery platform analyzing biomedical data for new therapies.", url: "https://www.benevolent.com", price: "Paid" },
{ name: "Exscientia", category: "Health", subcategory: "Drug Discovery", desc: "AI platform optimizing drug design and discovery processes.", url: "https://www.exscientia.ai", price: "Paid" },
{ name: "Recursion Pharmaceuticals", category: "Health", subcategory: "Drug Discovery", desc: "AI-driven drug discovery using cellular imaging and machine learning.", url: "https://www.recursion.com", price: "Paid" },


// Health Nutrition AI Tools
{ name: "Nutrino", category: "Health", subcategory: "Nutrition", desc: "AI-powered nutrition platform providing personalized meal recommendations.", url: "https://www.nutrino.co", price: "Paid" },
{ name: "Suggestic", category: "Health", subcategory: "Nutrition", desc: "AI-driven app for personalized nutrition guidance and meal planning.", url: "https://www.suggestic.com", price: "Paid" },
{ name: "Bitesnap", category: "Health", subcategory: "Nutrition", desc: "AI app that tracks meals and provides nutrition insights using photo recognition.", url: "https://www.bitesnap.com", price: "Free/Paid" },
{ name: "Foodvisor", category: "Health", subcategory: "Nutrition", desc: "AI-powered nutrition tracker analyzing meals and providing dietary recommendations.", url: "https://www.foodvisor.io", price: "Free/Paid" },
{ name: "Lifesum", category: "Health", subcategory: "Nutrition", desc: "AI app for personalized nutrition advice, meal tracking, and health goals.", url: "https://www.lifesum.com", price: "Free/Paid" },


// Health Medical Imaging AI Tools
{ name: "Aidoc", category: "Health", subcategory: "Medical Imaging", desc: "AI platform for analyzing medical images and detecting abnormalities.", url: "https://www.aidoc.com", price: "Paid" },
{ name: "Zebra Medical Vision", category: "Health", subcategory: "Medical Imaging", desc: "AI-powered medical imaging analytics for radiology and diagnosis.", url: "https://www.zebra-med.com", price: "Paid" },
{ name: "Arterys", category: "Health", subcategory: "Medical Imaging", desc: "AI platform for cloud-based medical image analysis in cardiology and oncology.", url: "https://www.arterys.com", price: "Paid" },
{ name: "Qure.ai", category: "Health", subcategory: "Medical Imaging", desc: "AI for radiology imaging interpretation, detecting abnormalities in X-rays and CT scans.", url: "https://www.qure.ai", price: "Paid" },
{ name: "RadNet AI", category: "Health", subcategory: "Medical Imaging", desc: "AI-based radiology platform providing automated imaging analysis and reporting.", url: "https://www.radnet.com", price: "Paid" },


// Health Wearables AI Tools
{ name: "Apple Watch", category: "Health", subcategory: "Wearables", desc: "AI-powered wearable tracking heart rate, activity, and health metrics.", url: "https://www.apple.com/watch", price: "Paid" },
{ name: "Fitbit", category: "Health", subcategory: "Wearables", desc: "AI wearable tracking fitness, sleep, and overall health metrics.", url: "https://www.fitbit.com", price: "Free/Paid" },
{ name: "Whoop", category: "Health", subcategory: "Wearables", desc: "AI wearable monitoring recovery, strain, and sleep performance.", url: "https://www.whoop.com", price: "Paid" },
{ name: "Garmin Wearables", category: "Health", subcategory: "Wearables", desc: "AI-powered devices for health, fitness, and activity tracking.", url: "https://www.garmin.com", price: "Paid" },
{ name: "Oura Ring", category: "Health", subcategory: "Wearables", desc: "AI-driven wearable tracking sleep, recovery, and readiness metrics.", url: "https://ouraring.com", price: "Paid" },


// Health Symptom Checkers AI Tools
{ name: "Ada Health", category: "Health", subcategory: "Symptom Checkers", desc: "AI-powered symptom assessment and health guidance platform.", url: "https://ada.com", price: "Free/Paid" },
{ name: "Buoy Health", category: "Health", subcategory: "Symptom Checkers", desc: "AI chatbot helping patients assess symptoms and recommend next steps.", url: "https://www.buoyhealth.com", price: "Free/Paid" },
{ name: "Your.MD", category: "Health", subcategory: "Symptom Checkers", desc: "AI-driven digital health platform providing symptom checking and guidance.", url: "https://www.your.md", price: "Free/Paid" },
{ name: "Infermedica", category: "Health", subcategory: "Symptom Checkers", desc: "AI platform for preliminary diagnosis and symptom triage.", url: "https://infermedica.com", price: "Paid" },
{ name: "Sensely", category: "Health", subcategory: "Symptom Checkers", desc: "AI virtual nurse platform for symptom checking and patient guidance.", url: "https://www.sensely.com", price: "Paid" },


// Health Analytics AI Tools
{ name: "IBM Watson Health Analytics", category: "Health", subcategory: "Health Analytics", desc: "AI platform providing clinical and operational analytics for healthcare providers.", url: "https://www.ibm.com/watson-health", price: "Paid" },
{ name: "Health Catalyst", category: "Health", subcategory: "Health Analytics", desc: "AI-driven healthcare analytics platform optimizing patient outcomes and operations.", url: "https://www.healthcatalyst.com", price: "Paid" },
{ name: "Tempus Analytics", category: "Health", subcategory: "Health Analytics", desc: "AI platform analyzing clinical and molecular data for precision medicine insights.", url: "https://www.tempus.com", price: "Paid" },
{ name: "SAS Health Analytics", category: "Health", subcategory: "Health Analytics", desc: "AI-powered analytics platform for population health, risk prediction, and outcomes.", url: "https://www.sas.com/health", price: "Paid" },
{ name: "Qventus", category: "Health", subcategory: "Health Analytics", desc: "AI-driven platform for real-time operational analytics in hospitals and healthcare systems.", url: "https://www.qventus.com", price: "Paid" },
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