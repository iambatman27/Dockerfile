const subcategories = ["All","AI Trip Planner", "Flight Price Prediction", "Hotel Recommendations", "Itinerary Generation", "Language Translation", "Local Experience Suggestions", "Travel Chatbots", "Route Optimization", "Tourist Guide AI", "Expense Management AI"];
const tools = [
    
// Travel AI Trip Planner
{ name: "Utrip", category: "Travel", subcategory: "AI Trip Planner", desc: "AI-powered trip planning platform creating personalized travel itineraries.", url: "https://www.utrip.com", price: "Free/Paid" },
{ name: "Roam Around", category: "Travel", subcategory: "AI Trip Planner", desc: "AI-assisted platform suggesting personalized travel plans and destinations.", url: "https://www.roamaround.io", price: "Paid" },
{ name: "Sygic Travel", category: "Travel", subcategory: "AI Trip Planner", desc: "AI-driven trip planner creating custom travel itineraries with maps.", url: "https://travel.sygic.com", price: "Free/Paid" },
{ name: "TripHobo", category: "Travel", subcategory: "AI Trip Planner", desc: "AI-powered platform generating travel itineraries with optimized schedules.", url: "https://www.triphobo.com", price: "Free/Paid" },
{ name: "Journy", category: "Travel", subcategory: "AI Trip Planner", desc: "AI-assisted travel planning service offering curated itineraries.", url: "https://www.gojourny.com", price: "Paid" },


// Travel Flight Price Prediction AI Tools
{ name: "Hopper", category: "Travel", subcategory: "Flight Price Prediction", desc: "AI-powered app predicting the best flight prices and booking times.", url: "https://www.hopper.com", price: "Free/Paid" },
{ name: "Google Flights", category: "Travel", subcategory: "Flight Price Prediction", desc: "AI-assisted flight search predicting price trends and alerts.", url: "https://www.google.com/flights", price: "Free" },
{ name: "Kayak", category: "Travel", subcategory: "Flight Price Prediction", desc: "AI-driven platform predicting flight price changes and deals.", url: "https://www.kayak.com", price: "Free/Paid" },
{ name: "Skyscanner", category: "Travel", subcategory: "Flight Price Prediction", desc: "AI-powered flight search predicting price drops and best booking times.", url: "https://www.skyscanner.com", price: "Free/Paid" },
{ name: "Priceline", category: "Travel", subcategory: "Flight Price Prediction", desc: "AI-assisted platform providing flight price predictions and deals.", url: "https://www.priceline.com", price: "Free/Paid" },


// Travel Hotel Recommendations AI Tools
{ name: "Booking.com AI Recommendations", category: "Travel", subcategory: "Hotel Recommendations", desc: "AI-powered hotel recommendations based on preferences and past bookings.", url: "https://www.booking.com", price: "Free/Paid" },
{ name: "Expedia", category: "Travel", subcategory: "Hotel Recommendations", desc: "AI-assisted platform suggesting hotels and accommodations.", url: "https://www.expedia.com", price: "Free/Paid" },
{ name: "Tripadvisor", category: "Travel", subcategory: "Hotel Recommendations", desc: "AI-driven hotel suggestion engine based on reviews and preferences.", url: "https://www.tripadvisor.com", price: "Free/Paid" },
{ name: "Hotels.com", category: "Travel", subcategory: "Hotel Recommendations", desc: "AI-powered platform recommending hotels tailored to user preferences.", url: "https://www.hotels.com", price: "Free/Paid" },
{ name: "Trivago", category: "Travel", subcategory: "Hotel Recommendations", desc: "AI-assisted hotel search and recommendation engine.", url: "https://www.trivago.com", price: "Free/Paid" },


// Travel Itinerary Generation AI Tools
{ name: "TripIt", category: "Travel", subcategory: "Itinerary Generation", desc: "AI-powered app automatically generating travel itineraries from bookings.", url: "https://www.tripit.com", price: "Free/Paid" },
{ name: "Utrip", category: "Travel", subcategory: "Itinerary Generation", desc: "AI-assisted platform creating optimized travel itineraries.", url: "https://www.utrip.com", price: "Free/Paid" },
{ name: "Sygic Travel", category: "Travel", subcategory: "Itinerary Generation", desc: "AI-driven platform generating custom itineraries with maps and schedules.", url: "https://travel.sygic.com", price: "Free/Paid" },
{ name: "TripHobo", category: "Travel", subcategory: "Itinerary Generation", desc: "AI-powered platform generating personalized trip plans.", url: "https://www.triphobo.com", price: "Free/Paid" },
{ name: "Kayak Trip Huddle", category: "Travel", subcategory: "Itinerary Generation", desc: "AI-assisted group itinerary planning tool.", url: "https://www.kayak.com/triphuddle", price: "Free/Paid" },


// Travel Language Translation AI Tools
{ name: "Google Translate", category: "Travel", subcategory: "Language Translation", desc: "AI-powered translation platform for text, speech, and images.", url: "https://translate.google.com", price: "Free" },
{ name: "DeepL", category: "Travel", subcategory: "Language Translation", desc: "AI-assisted translation tool for accurate multilingual communication.", url: "https://www.deepl.com", price: "Free/Paid" },
{ name: "iTranslate", category: "Travel", subcategory: "Language Translation", desc: "AI-driven language translation app for travelers.", url: "https://www.itranslate.com", price: "Free/Paid" },
{ name: "Microsoft Translator", category: "Travel", subcategory: "Language Translation", desc: "AI-powered translation platform supporting multiple languages.", url: "https://www.microsoft.com/translator", price: "Free/Paid" },
{ name: "SayHi Translate", category: "Travel", subcategory: "Language Translation", desc: "AI-assisted app translating speech and text in real-time.", url: "https://www.sayhitranslate.com", price: "Free/Paid" },


// Travel Local Experience Suggestions AI Tools
{ name: "Detour", category: "Travel", subcategory: "Local Experience Suggestions", desc: "AI-powered platform offering immersive local audio tours and experiences.", url: "https://www.detour.com", price: "Paid" },
{ name: "GuidiGO", category: "Travel", subcategory: "Local Experience Suggestions", desc: "AI-assisted platform providing guided tours and local experiences.", url: "https://www.guidigo.com", price: "Paid" },
{ name: "LikeALocal", category: "Travel", subcategory: "Local Experience Suggestions", desc: "AI-driven app suggesting local hidden gems and experiences.", url: "https://www.likealocal.com", price: "Free/Paid" },
{ name: "Spotted by Locals", category: "Travel", subcategory: "Local Experience Suggestions", desc: "AI-powered recommendations for authentic local experiences.", url: "https://www.spottedbylocals.com", price: "Paid" },
{ name: "Journy", category: "Travel", subcategory: "Local Experience Suggestions", desc: "AI-assisted travel platform curating unique local experiences.", url: "https://www.gojourny.com", price: "Paid" },


// Travel Travel Chatbots AI Tools
{ name: "Mezi (American Express)", category: "Travel", subcategory: "Travel Chatbots", desc: "AI-powered travel assistant chatbot for booking and recommendations.", url: "https://www.amextravel.com", price: "Free/Paid" },
{ name: "Pana", category: "Travel", subcategory: "Travel Chatbots", desc: "AI-assisted corporate travel chatbot managing itineraries and bookings.", url: "https://www.pana.com", price: "Paid" },
{ name: "HelloGbye", category: "Travel", subcategory: "Travel Chatbots", desc: "AI-powered chatbot for automated travel booking and planning.", url: "https://www.hellogbye.com", price: "Paid" },
{ name: "Skyscanner Bot", category: "Travel", subcategory: "Travel Chatbots", desc: "AI-driven chatbot assisting with flight and hotel searches.", url: "https://www.skyscanner.com/bot", price: "Free/Paid" },
{ name: "Expedia Virtual Agent", category: "Travel", subcategory: "Travel Chatbots", desc: "AI-powered chatbot for booking, support, and travel recommendations.", url: "https://www.expedia.com/service/", price: "Free/Paid" },


// Travel Route Optimization AI Tools
{ name: "Rome2rio", category: "Travel", subcategory: "Route Optimization", desc: "AI-powered platform optimizing travel routes using multiple transport modes.", url: "https://www.rome2rio.com", price: "Free/Paid" },
{ name: "Google Maps", category: "Travel", subcategory: "Route Optimization", desc: "AI-assisted map platform providing optimized routes and traffic predictions.", url: "https://maps.google.com", price: "Free" },
{ name: "Waze", category: "Travel", subcategory: "Route Optimization", desc: "AI-driven navigation app optimizing routes with real-time traffic data.", url: "https://www.waze.com", price: "Free" },
{ name: "Route4Me", category: "Travel", subcategory: "Route Optimization", desc: "AI-powered route planning and optimization platform for travelers and delivery.", url: "https://www.route4me.com", price: "Paid" },
{ name: "Circuit Route Planner", category: "Travel", subcategory: "Route Optimization", desc: "AI-assisted route optimization app for multiple stops and efficient travel.", url: "https://getcircuit.com/route-planner", price: "Free/Paid" },


// Travel Tourist Guide AI Tools
{ name: "GuidiGO", category: "Travel", subcategory: "Tourist Guide AI", desc: "AI-powered interactive tourist guide with personalized tours.", url: "https://www.guidigo.com", price: "Paid" },
{ name: "Detour", category: "Travel", subcategory: "Tourist Guide AI", desc: "AI-assisted immersive audio tours guiding tourists through cities.", url: "https://www.detour.com", price: "Paid" },
{ name: "TripScout", category: "Travel", subcategory: "Tourist Guide AI", desc: "AI-driven travel guide app providing curated city tours and tips.", url: "https://www.tripscout.co", price: "Free/Paid" },
{ name: "Tourpal", category: "Travel", subcategory: "Tourist Guide AI", desc: "AI-powered mobile guide offering personalized tourist routes.", url: "https://www.tourpal.com", price: "Paid" },
{ name: "PocketGuide", category: "Travel", subcategory: "Tourist Guide AI", desc: "AI-assisted audio guide app providing personalized tours worldwide.", url: "https://www.pocketguideapp.com", price: "Free/Paid" },


// Travel Expense Management AI Tools
{ name: "Trail Wallet", category: "Travel", subcategory: "Expense Management AI", desc: "AI-powered travel expense tracker helping manage budgets on trips.", url: "https://www.trailwalletapp.com", price: "Paid" },
{ name: "Splitwise", category: "Travel", subcategory: "Expense Management AI", desc: "AI-assisted app for tracking shared travel expenses among groups.", url: "https://www.splitwise.com", price: "Free/Paid" },
{ name: "TravelBank", category: "Travel", subcategory: "Expense Management AI", desc: "AI-driven travel expense management platform for budgeting and reporting.", url: "https://www.travelbank.com", price: "Free/Paid" },
{ name: "Expensify", category: "Travel", subcategory: "Expense Management AI", desc: "AI-powered expense tracking and reporting tool for travelers.", url: "https://www.expensify.com", price: "Free/Paid" },
{ name: "Tripcoin", category: "Travel", subcategory: "Expense Management AI", desc: "AI-assisted app for tracking travel costs and optimizing budgets.", url: "https://www.tripcoin.com", price: "Paid" },
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