const subcategories = ["All","Air Quality Monitoring", "Energy Optimization", "Waste Management AI", "Climate Forecasting", "Water Usage Optimization", "Smart Agriculture", "Traffic Prediction", "Urban Planning AI", "Noise Monitoring", "Sustainable Recommendations"];
const tools = [
    // Environment Air Quality Monitoring AI Tools
{ name: "BreezoMeter", category: "Environment", subcategory: "Air Quality Monitoring", desc: "AI-powered platform providing real-time air quality data and forecasts.", url: "https://www.breezometer.com", price: "Free/Paid" },
{ name: "Plume Labs", category: "Environment", subcategory: "Air Quality Monitoring", desc: "AI-assisted app monitoring air pollution and providing actionable insights.", url: "https://plumelabs.com", price: "Free/Paid" },
{ name: "Airthings", category: "Environment", subcategory: "Air Quality Monitoring", desc: "AI-driven indoor and outdoor air quality monitoring solutions.", url: "https://www.airthings.com", price: "Paid" },
{ name: "IQAir", category: "Environment", subcategory: "Air Quality Monitoring", desc: "AI platform offering real-time air quality data and pollution forecasts.", url: "https://www.iqair.com", price: "Free/Paid" },
{ name: "Clarity AI", category: "Environment", subcategory: "Air Quality Monitoring", desc: "AI-assisted air quality monitoring system for cities and industries.", url: "https://www.clarity.io", price: "Paid" },


// Environment Energy Optimization AI Tools
{ name: "GridEdge", category: "Environment", subcategory: "Energy Optimization", desc: "AI-powered platform optimizing energy consumption for buildings and utilities.", url: "https://www.gridedge.io", price: "Paid" },
{ name: "AutoGrid", category: "Environment", subcategory: "Energy Optimization", desc: "AI-assisted energy management platform for demand response and optimization.", url: "https://www.auto-grid.com", price: "Paid" },
{ name: "Verdigris", category: "Environment", subcategory: "Energy Optimization", desc: "AI-driven energy optimization and smart building analytics platform.", url: "https://verdigris.co", price: "Paid" },
{ name: "Carbon Lighthouse", category: "Environment", subcategory: "Energy Optimization", desc: "AI-powered platform reducing energy usage and emissions in buildings.", url: "https://www.carbonlighthouse.com", price: "Paid" },
{ name: "EnergyHub", category: "Environment", subcategory: "Energy Optimization", desc: "AI platform for optimizing energy usage and grid management.", url: "https://www.energyhub.com", price: "Paid" },


// Environment Waste Management AI Tools
{ name: "Rubicon", category: "Environment", subcategory: "Waste Management AI", desc: "AI-powered platform for smart waste collection and recycling optimization.", url: "https://www.rubiconglobal.com", price: "Paid" },
{ name: "Compology", category: "Environment", subcategory: "Waste Management AI", desc: "AI-assisted waste monitoring platform for efficiency and sustainability.", url: "https://www.compology.com", price: "Paid" },
{ name: "Evreka", category: "Environment", subcategory: "Waste Management AI", desc: "AI-driven platform optimizing waste collection and recycling operations.", url: "https://www.evreka.com", price: "Paid" },
{ name: "ZenRobotics", category: "Environment", subcategory: "Waste Management AI", desc: "AI platform automating waste sorting and recycling using robotics.", url: "https://www.zenrobotics.com", price: "Paid" },
{ name: "Bigbelly Smart Waste", category: "Environment", subcategory: "Waste Management AI", desc: "AI-assisted smart waste management system with real-time monitoring.", url: "https://bigbelly.com", price: "Paid" },


// Environment Climate Forecasting AI Tools
{ name: "IBM The Weather Company", category: "Environment", subcategory: "Climate Forecasting", desc: "AI-powered platform providing weather and climate forecasts.", url: "https://www.ibm.com/weather", price: "Paid" },
{ name: "ClimateAI", category: "Environment", subcategory: "Climate Forecasting", desc: "AI-assisted platform predicting climate risks and future scenarios.", url: "https://www.climate.ai", price: "Paid" },
{ name: "Tomorrow.io", category: "Environment", subcategory: "Climate Forecasting", desc: "AI-driven weather and climate forecasting platform for businesses.", url: "https://www.tomorrow.io", price: "Paid" },
{ name: "Earth AI", category: "Environment", subcategory: "Climate Forecasting", desc: "AI platform using satellite data for climate forecasting and risk assessment.", url: "https://www.earth-ai.com", price: "Paid" },
{ name: "Descartes Labs", category: "Environment", subcategory: "Climate Forecasting", desc: "AI-powered platform for environmental and climate prediction.", url: "https://www.descarteslabs.com", price: "Paid" },


// Environment Water Usage Optimization AI Tools
{ name: "AquaSeca", category: "Environment", subcategory: "Water Usage Optimization", desc: "AI-powered platform optimizing water usage in agriculture and cities.", url: "https://www.aquaseca.com", price: "Paid" },
{ name: "Rachio", category: "Environment", subcategory: "Water Usage Optimization", desc: "AI-assisted smart irrigation system for efficient water usage.", url: "https://rachio.com", price: "Paid" },
{ name: "CropX", category: "Environment", subcategory: "Water Usage Optimization", desc: "AI-driven platform for precision irrigation and soil water optimization.", url: "https://www.cropx.com", price: "Paid" },
{ name: "Echologics", category: "Environment", subcategory: "Water Usage Optimization", desc: "AI-powered platform for water distribution optimization and monitoring.", url: "https://www.echologics.com", price: "Paid" },
{ name: "HydroPoint WeatherTRAK", category: "Environment", subcategory: "Water Usage Optimization", desc: "AI-assisted smart irrigation and water management platform.", url: "https://www.hydropoint.com", price: "Paid" },


// Environment Smart Agriculture AI Tools
{ name: "Taranis", category: "Environment", subcategory: "Smart Agriculture", desc: "AI-powered platform monitoring crops and predicting threats.", url: "https://www.taranis.ag", price: "Paid" },
{ name: "Prospera", category: "Environment", subcategory: "Smart Agriculture", desc: "AI-assisted platform for crop monitoring and precision agriculture.", url: "https://www.prospera.ag", price: "Paid" },
{ name: "FarmWise", category: "Environment", subcategory: "Smart Agriculture", desc: "AI-driven autonomous weeding and crop management platform.", url: "https://www.farmwise.io", price: "Paid" },
{ name: "CropIn", category: "Environment", subcategory: "Smart Agriculture", desc: "AI platform providing data-driven farm management solutions.", url: "https://www.cropin.com", price: "Paid" },
{ name: "Iron Ox", category: "Environment", subcategory: "Smart Agriculture", desc: "AI-assisted robotic farming and smart agriculture solutions.", url: "https://www.ironox.com", price: "Paid" },


// Environment Traffic Prediction AI Tools
{ name: "INRIX", category: "Environment", subcategory: "Traffic Prediction", desc: "AI-powered platform for traffic analytics and predictive congestion management.", url: "https://www.inrix.com", price: "Paid" },
{ name: "Waycare", category: "Environment", subcategory: "Traffic Prediction", desc: "AI-assisted traffic prediction and smart city mobility platform.", url: "https://www.waycaretech.com", price: "Paid" },
{ name: "Optibus", category: "Environment", subcategory: "Traffic Prediction", desc: "AI-driven public transportation optimization and traffic prediction.", url: "https://www.optibus.com", price: "Paid" },
{ name: "TomTom Traffic AI", category: "Environment", subcategory: "Traffic Prediction", desc: "AI platform predicting traffic congestion and travel times.", url: "https://www.tomtom.com", price: "Paid" },
{ name: "Miovision", category: "Environment", subcategory: "Traffic Prediction", desc: "AI-assisted traffic monitoring and predictive analytics platform.", url: "https://www.miovision.com", price: "Paid" },


// Environment Urban Planning AI Tools
{ name: "CityFormLab", category: "Environment", subcategory: "Urban Planning AI", desc: "AI-powered platform for urban design and planning simulations.", url: "https://cityform.mit.edu", price: "Free/Paid" },
{ name: "Sidewalk Labs Flow", category: "Environment", subcategory: "Urban Planning AI", desc: "AI-assisted urban planning and infrastructure optimization platform.", url: "https://www.sidewalklabs.com", price: "Paid" },
{ name: "UrbanFootprint", category: "Environment", subcategory: "Urban Planning AI", desc: "AI platform providing urban planning, sustainability, and land use analytics.", url: "https://urbanfootprint.com", price: "Paid" },
{ name: "Spacemaker AI", category: "Environment", subcategory: "Urban Planning AI", desc: "AI-driven tool for optimizing building design and urban layouts.", url: "https://www.spacemakerai.com", price: "Paid" },
{ name: "CityForm Lab Tools", category: "Environment", subcategory: "Urban Planning AI", desc: "AI platform for modeling, simulation, and urban planning insights.", url: "https://cityform.mit.edu/tools", price: "Free/Paid" },


// Environment Noise Monitoring AI Tools
{ name: "Bruel & Kjaer Noise Monitoring", category: "Environment", subcategory: "Noise Monitoring", desc: "AI-powered platform for real-time noise measurement and analytics.", url: "https://www.bksv.com", price: "Paid" },
{ name: "AcousticAI", category: "Environment", subcategory: "Noise Monitoring", desc: "AI-assisted noise monitoring and environmental sound analysis platform.", url: "https://www.acousticai.com", price: "Paid" },
{ name: "Wavesense", category: "Environment", subcategory: "Noise Monitoring", desc: "AI platform detecting and analyzing environmental noise pollution.", url: "https://wavesense.ai", price: "Paid" },
{ name: "SoundPrint", category: "Environment", subcategory: "Noise Monitoring", desc: "AI-driven app providing real-time noise level monitoring in public spaces.", url: "https://www.soundprint.co", price: "Free/Paid" },
{ name: "NoiseAware", category: "Environment", subcategory: "Noise Monitoring", desc: "AI-powered solution for monitoring and alerting on noise levels.", url: "https://www.noiseaware.io", price: "Paid" },


// Environment Sustainable Recommendations AI Tools
{ name: "Ecochain", category: "Environment", subcategory: "Sustainable Recommendations", desc: "AI-powered platform providing sustainability insights for businesses.", url: "https://www.ecochain.com", price: "Paid" },
{ name: "Watershed", category: "Environment", subcategory: "Sustainable Recommendations", desc: "AI-assisted platform helping companies track emissions and recommend sustainability actions.", url: "https://www.watershed.com", price: "Paid" },
{ name: "Normative", category: "Environment", subcategory: "Sustainable Recommendations", desc: "AI-driven tool for measuring environmental impact and offering sustainable solutions.", url: "https://www.normative.io", price: "Paid" },
{ name: "Plan A", category: "Environment", subcategory: "Sustainable Recommendations", desc: "AI platform providing actionable sustainability recommendations for organizations.", url: "https://plana.earth", price: "Paid" },
{ name: "SustLabs", category: "Environment", subcategory: "Sustainable Recommendations", desc: "AI-assisted sustainability analytics and recommendation platform.", url: "https://sustlabs.com", price: "Paid" },
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