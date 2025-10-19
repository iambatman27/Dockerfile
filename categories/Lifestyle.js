const subcategories = ["All","Fitness Planner AI", "Meal Planning AI", "Meditation & Relaxation AI", "Sleep Tracking", "Fashion AI", "Interior Design Suggestions", "Gardening AI", "Pet Care AI", "Event Planning AI", "Hobby Suggestions AI"];
const tools = [
    // Lifestyle Fitness Planner AI Tools
{ name: "Freeletics", category: "Lifestyle", subcategory: "Fitness Planner AI", desc: "AI-powered fitness app creating personalized workout plans.", url: "https://www.freeletics.com", price: "Free/Paid" },
{ name: "Fitbod", category: "Lifestyle", subcategory: "Fitness Planner AI", desc: "AI-assisted workout planner adjusting exercises based on user progress.", url: "https://www.fitbod.me", price: "Free/Paid" },
{ name: "Vi Trainer", category: "Lifestyle", subcategory: "Fitness Planner AI", desc: "AI-driven personal training app providing adaptive fitness guidance.", url: "https://www.vi.ai", price: "Free/Paid" },
{ name: "Aaptiv Coach", category: "Lifestyle", subcategory: "Fitness Planner AI", desc: "AI-powered fitness coaching app with personalized plans.", url: "https://aaptiv.com/coach", price: "Paid" },
{ name: "Trainiac", category: "Lifestyle", subcategory: "Fitness Planner AI", desc: "AI-assisted fitness planner delivering custom workout programs.", url: "https://www.trainiac.fit", price: "Paid" },


// Lifestyle Meal Planning AI Tools
{ name: "Eat This Much", category: "Lifestyle", subcategory: "Meal Planning AI", desc: "AI-powered meal planning platform creating personalized menus.", url: "https://www.eatthismuch.com", price: "Free/Paid" },
{ name: "PlateJoy", category: "Lifestyle", subcategory: "Meal Planning AI", desc: "AI-assisted meal planning service based on dietary preferences.", url: "https://www.platejoy.com", price: "Paid" },
{ name: "Yummly", category: "Lifestyle", subcategory: "Meal Planning AI", desc: "AI-driven recipe recommendations and meal planning app.", url: "https://www.yummly.com", price: "Free/Paid" },
{ name: "NutriAI", category: "Lifestyle", subcategory: "Meal Planning AI", desc: "AI platform providing personalized nutrition and meal planning.", url: "https://www.nutri.ai", price: "Paid" },
{ name: "Mealime", category: "Lifestyle", subcategory: "Meal Planning AI", desc: "AI-assisted meal planning app simplifying cooking and grocery lists.", url: "https://www.mealime.com", price: "Free/Paid" },


// Lifestyle Meditation & Relaxation AI Tools
{ name: "Calm", category: "Lifestyle", subcategory: "Meditation & Relaxation AI", desc: "AI-powered app providing guided meditation and relaxation exercises.", url: "https://www.calm.com", price: "Free/Paid" },
{ name: "Headspace", category: "Lifestyle", subcategory: "Meditation & Relaxation AI", desc: "AI-assisted meditation platform for mindfulness and stress reduction.", url: "https://www.headspace.com", price: "Free/Paid" },
{ name: "Insight Timer", category: "Lifestyle", subcategory: "Meditation & Relaxation AI", desc: "AI-driven meditation app with personalized recommendations.", url: "https://insighttimer.com", price: "Free/Paid" },
{ name: "Muse", category: "Lifestyle", subcategory: "Meditation & Relaxation AI", desc: "AI-assisted brain-sensing headband offering guided meditation feedback.", url: "https://choosemuse.com", price: "Paid" },
{ name: "Simple Habit", category: "Lifestyle", subcategory: "Meditation & Relaxation AI", desc: "AI-powered meditation app creating tailored relaxation sessions.", url: "https://www.simplehabit.com", price: "Free/Paid" },


// Lifestyle Sleep Tracking AI Tools
{ name: "SleepScore", category: "Lifestyle", subcategory: "Sleep Tracking", desc: "AI-powered app analyzing sleep quality and providing recommendations.", url: "https://www.sleepscore.com", price: "Free/Paid" },
{ name: "Oura Ring", category: "Lifestyle", subcategory: "Sleep Tracking", desc: "AI-assisted wearable tracking sleep patterns and health metrics.", url: "https://ouraring.com", price: "Paid" },
{ name: "Sleep Cycle", category: "Lifestyle", subcategory: "Sleep Tracking", desc: "AI-driven sleep tracking app analyzing sleep phases and patterns.", url: "https://www.sleepcycle.com", price: "Free/Paid" },
{ name: "Eight Sleep", category: "Lifestyle", subcategory: "Sleep Tracking", desc: "AI-powered smart mattress tracking sleep and optimizing comfort.", url: "https://www.eightsleep.com", price: "Paid" },
{ name: "Withings Sleep", category: "Lifestyle", subcategory: "Sleep Tracking", desc: "AI-assisted sleep monitoring platform with detailed analytics.", url: "https://www.withings.com/sleep", price: "Paid" },


// Lifestyle Fashion AI Tools
{ name: "Fashwell", category: "Lifestyle", subcategory: "Fashion AI", desc: "AI-powered visual search and fashion recommendation platform.", url: "https://www.fashwell.com", price: "Paid" },
{ name: "Vue.ai", category: "Lifestyle", subcategory: "Fashion AI", desc: "AI-assisted fashion personalization and styling recommendations.", url: "https://vue.ai", price: "Paid" },
{ name: "Syte", category: "Lifestyle", subcategory: "Fashion AI", desc: "AI platform for fashion visual search, personalization, and recommendations.", url: "https://www.syte.ai", price: "Paid" },
{ name: "Stitch Fix", category: "Lifestyle", subcategory: "Fashion AI", desc: "AI-driven personal styling and fashion subscription service.", url: "https://www.stitchfix.com", price: "Paid" },
{ name: "Fashmates", category: "Lifestyle", subcategory: "Fashion AI", desc: "AI-powered fashion recommendation and outfit planning app.", url: "https://www.fashmates.com", price: "Paid" },


// Lifestyle Interior Design Suggestions AI Tools
{ name: "Planner 5D", category: "Lifestyle", subcategory: "Interior Design Suggestions", desc: "AI-powered platform for interior design and virtual room planning.", url: "https://planner5d.com", price: "Free/Paid" },
{ name: "Modsy", category: "Lifestyle", subcategory: "Interior Design Suggestions", desc: "AI-assisted interior design platform creating realistic room layouts.", url: "https://www.modsy.com", price: "Paid" },
{ name: "Havenly", category: "Lifestyle", subcategory: "Interior Design Suggestions", desc: "AI-driven interior design consultation and visualization platform.", url: "https://havenly.com", price: "Paid" },
{ name: "RoomGPT", category: "Lifestyle", subcategory: "Interior Design Suggestions", desc: "AI-powered tool generating interior design ideas from images.", url: "https://roomgpt.io", price: "Free/Paid" },
{ name: "Morpholio Board", category: "Lifestyle", subcategory: "Interior Design Suggestions", desc: "AI-assisted platform for interior mood boards and design suggestions.", url: "https://www.morpholioapps.com/board", price: "Paid" },


// Lifestyle Gardening AI Tools
{ name: "Plantix", category: "Lifestyle", subcategory: "Gardening AI", desc: "AI-powered app for plant disease detection and garden care guidance.", url: "https://plantix.net", price: "Free/Paid" },
{ name: "Garden Answers", category: "Lifestyle", subcategory: "Gardening AI", desc: "AI-assisted plant identification and gardening advice platform.", url: "https://www.gardenanswers.com", price: "Free/Paid" },
{ name: "PlantSnap", category: "Lifestyle", subcategory: "Gardening AI", desc: "AI-powered plant identification and gardening recommendations app.", url: "https://www.plantsnap.com", price: "Free/Paid" },
{ name: "GrowSmart", category: "Lifestyle", subcategory: "Gardening AI", desc: "AI-driven platform for garden monitoring and plant care optimization.", url: "https://www.growsmart.ai", price: "Paid" },
{ name: "AgriApp", category: "Lifestyle", subcategory: "Gardening AI", desc: "AI-assisted platform providing crop and garden management advice.", url: "https://www.agriapp.com", price: "Free/Paid" },


// Lifestyle Pet Care AI Tools
{ name: "Pawtrack", category: "Lifestyle", subcategory: "Pet Care AI", desc: "AI-powered GPS tracker and health monitor for cats and pets.", url: "https://pawtrack.com", price: "Paid" },
{ name: "Furbo Dog Camera", category: "Lifestyle", subcategory: "Pet Care AI", desc: "AI-assisted camera monitoring and treat dispensing for dogs.", url: "https://www.furbo.com", price: "Paid" },
{ name: "PetDesk", category: "Lifestyle", subcategory: "Pet Care AI", desc: "AI-driven platform for pet health management and appointments.", url: "https://www.petdesk.com", price: "Free/Paid" },
{ name: "Petrics", category: "Lifestyle", subcategory: "Pet Care AI", desc: "AI-powered pet monitoring and wellness tracking system.", url: "https://www.petrics.com", price: "Paid" },
{ name: "Tractive", category: "Lifestyle", subcategory: "Pet Care AI", desc: "AI-assisted GPS tracker and activity monitoring for pets.", url: "https://tractive.com", price: "Paid" },


// Lifestyle Event Planning AI Tools
{ name: "Allseated", category: "Lifestyle", subcategory: "Event Planning AI", desc: "AI-powered platform for event planning, seating, and layout design.", url: "https://www.allseated.com", price: "Paid" },
{ name: "Bizzabo", category: "Lifestyle", subcategory: "Event Planning AI", desc: "AI-assisted platform for event management and attendee engagement.", url: "https://www.bizzabo.com", price: "Paid" },
{ name: "Gather", category: "Lifestyle", subcategory: "Event Planning AI", desc: "AI-driven event planning platform for venues and catering management.", url: "https://www.gatherhere.com", price: "Paid" },
{ name: "Social Tables", category: "Lifestyle", subcategory: "Event Planning AI", desc: "AI-assisted software for event diagramming and planning.", url: "https://www.socialtables.com", price: "Paid" },
{ name: "Hopin", category: "Lifestyle", subcategory: "Event Planning AI", desc: "AI-powered virtual and hybrid event platform for planning and attendee analytics.", url: "https://www.hopin.com", price: "Free/Paid" },


// Lifestyle Hobby Suggestions AI Tools
{ name: "Replika", category: "Lifestyle", subcategory: "Hobby Suggestions AI", desc: "AI-powered chatbot suggesting hobbies and activities based on your interests.", url: "https://replika.ai", price: "Free/Paid" },
{ name: "Suggester AI", category: "Lifestyle", subcategory: "Hobby Suggestions AI", desc: "AI-assisted platform recommending hobbies and creative pursuits tailored to you.", url: "https://www.suggester.ai", price: "Paid" },
{ name: "Hobbi", category: "Lifestyle", subcategory: "Hobby Suggestions AI", desc: "AI-driven app helping users discover and track hobbies and activities.", url: "https://www.hobbi.com", price: "Free/Paid" },
{ name: "Pixa AI", category: "Lifestyle", subcategory: "Hobby Suggestions AI", desc: "AI platform suggesting creative hobbies like photography, drawing, and design.", url: "https://www.pixa.ai", price: "Paid" },
{ name: "Skillshare AI Recommendations", category: "Lifestyle", subcategory: "Hobby Suggestions AI", desc: "AI-powered platform recommending courses and hobbies based on user interests.", url: "https://www.skillshare.com", price: "Free/Paid" },
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