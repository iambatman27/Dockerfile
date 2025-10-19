const subcategories = ["All","Recipe Generation", "Meal Planning AI", "Nutrition Analysis", "Calorie Tracking", "Food Recognition", "Diet Recommendations", "Menu Optimization", "Smart Kitchen AI", "Ingredient Substitution", "Restaurant Analytics"];
const tools = [
    // Food Recipe Generation AI Tools
{ name: "ChefGPT", category: "Food", subcategory: "Recipe Generation", desc: "AI-powered platform generating recipes based on available ingredients.", url: "https://www.chefgpt.com", price: "Free/Paid" },
{ name: "Plant Jammer", category: "Food", subcategory: "Recipe Generation", desc: "AI tool creating recipes with plant-based ingredients and substitutions.", url: "https://www.plantjammer.com", price: "Free/Paid" },
{ name: "Tasty AI", category: "Food", subcategory: "Recipe Generation", desc: "AI-driven recipe generator providing personalized meal ideas.", url: "https://tasty.co", price: "Free/Paid" },
{ name: "Cookpad AI", category: "Food", subcategory: "Recipe Generation", desc: "AI-assisted recipe generation and meal inspiration platform.", url: "https://www.cookpad.com", price: "Free/Paid" },
{ name: "SideChef", category: "Food", subcategory: "Recipe Generation", desc: "AI-powered platform offering personalized recipes and cooking instructions.", url: "https://www.sidechef.com", price: "Free/Paid" },


// Food Meal Planning AI Tools
{ name: "Eat This Much", category: "Food", subcategory: "Meal Planning AI", desc: "AI-powered meal planning platform generating weekly menus automatically.", url: "https://www.eatthismuch.com", price: "Free/Paid" },
{ name: "PlateJoy", category: "Food", subcategory: "Meal Planning AI", desc: "AI-driven meal planner providing personalized nutrition and grocery lists.", url: "https://www.platejoy.com", price: "Paid" },
{ name: "Mealime", category: "Food", subcategory: "Meal Planning AI", desc: "AI-assisted meal planning app optimizing for preferences and dietary goals.", url: "https://www.mealime.com", price: "Free/Paid" },
{ name: "Yummly", category: "Food", subcategory: "Meal Planning AI", desc: "AI-powered meal planner offering recipe suggestions and grocery integration.", url: "https://www.yummly.com", price: "Free/Paid" },
{ name: "Prepear", category: "Food", subcategory: "Meal Planning AI", desc: "AI platform for meal planning, recipes, and weekly menu creation.", url: "https://www.prepear.com", price: "Free/Paid" },


// Food Nutrition Analysis AI Tools
{ name: "Spoonacular", category: "Food", subcategory: "Nutrition Analysis", desc: "AI platform providing nutrition information for recipes and ingredients.", url: "https://spoonacular.com", price: "Free/Paid" },
{ name: "Nutrimind", category: "Food", subcategory: "Nutrition Analysis", desc: "AI-powered nutrition analysis tool for personalized dietary insights.", url: "https://www.nutrimind.ai", price: "Paid" },
{ name: "Foodvisor", category: "Food", subcategory: "Nutrition Analysis", desc: "AI-driven app analyzing meal photos and providing nutrition information.", url: "https://www.foodvisor.io", price: "Free/Paid" },
{ name: "CalorieMama", category: "Food", subcategory: "Nutrition Analysis", desc: "AI platform analyzing food photos to provide nutritional breakdowns.", url: "https://www.caloriemama.ai", price: "Free/Paid" },
{ name: "Bitesnap", category: "Food", subcategory: "Nutrition Analysis", desc: "AI-powered food recognition and nutrition tracking platform.", url: "https://www.bitesnap.com", price: "Free/Paid" },


// Food Calorie Tracking AI Tools
{ name: "MyFitnessPal", category: "Food", subcategory: "Calorie Tracking", desc: "AI-powered app for tracking calories, macros, and meals.", url: "https://www.myfitnesspal.com", price: "Free/Paid" },
{ name: "Lose It!", category: "Food", subcategory: "Calorie Tracking", desc: "AI-assisted calorie and weight tracking app with food recognition.", url: "https://www.loseit.com", price: "Free/Paid" },
{ name: "Cronometer", category: "Food", subcategory: "Calorie Tracking", desc: "AI-powered app providing detailed calorie and nutrient tracking.", url: "https://cronometer.com", price: "Free/Paid" },
{ name: "Lifesum", category: "Food", subcategory: "Calorie Tracking", desc: "AI app for tracking calories, nutrition, and health goals.", url: "https://www.lifesum.com", price: "Free/Paid" },
{ name: "Yazio", category: "Food", subcategory: "Calorie Tracking", desc: "AI-driven calorie counter and nutrition tracker app.", url: "https://www.yazio.com", price: "Free/Paid" },


// Food Food Recognition AI Tools
{ name: "FoodAI by Clarifai", category: "Food", subcategory: "Food Recognition", desc: "AI platform recognizing food items in images for analysis and tracking.", url: "https://www.clarifai.com/models/food-image-recognition", price: "Free/Paid" },
{ name: "CalorieMama", category: "Food", subcategory: "Food Recognition", desc: "AI app identifying food items from photos and calculating nutrition.", url: "https://www.caloriemama.ai", price: "Free/Paid" },
{ name: "Bitesnap", category: "Food", subcategory: "Food Recognition", desc: "AI-driven platform recognizing foods and tracking nutrition from photos.", url: "https://www.bitesnap.com", price: "Free/Paid" },
{ name: "Foodvisor", category: "Food", subcategory: "Food Recognition", desc: "AI-powered image recognition for identifying foods and nutrition.", url: "https://www.foodvisor.io", price: "Free/Paid" },
{ name: "Spoonacular Food API", category: "Food", subcategory: "Food Recognition", desc: "AI-based food recognition API for identifying ingredients and meals.", url: "https://spoonacular.com/food-api", price: "Paid" },


// Food Diet Recommendations AI Tools
{ name: "Nutrimind", category: "Food", subcategory: "Diet Recommendations", desc: "AI-powered personalized diet recommendations based on health data.", url: "https://www.nutrimind.ai", price: "Paid" },
{ name: "PlateJoy", category: "Food", subcategory: "Diet Recommendations", desc: "AI-driven personalized diet and meal recommendations.", url: "https://www.platejoy.com", price: "Paid" },
{ name: "Eat This Much", category: "Food", subcategory: "Diet Recommendations", desc: "AI platform generating diet plans tailored to individual goals.", url: "https://www.eatthismuch.com", price: "Free/Paid" },
{ name: "Yazio", category: "Food", subcategory: "Diet Recommendations", desc: "AI-powered diet and nutrition recommendation app.", url: "https://www.yazio.com", price: "Free/Paid" },
{ name: "Lifesum", category: "Food", subcategory: "Diet Recommendations", desc: "AI app providing personalized diet guidance and healthy meal suggestions.", url: "https://www.lifesum.com", price: "Free/Paid" },


// Food Menu Optimization AI Tools
{ name: "Foodpairing", category: "Food", subcategory: "Menu Optimization", desc: "AI platform for optimizing menus based on flavors and ingredient compatibility.", url: "https://www.foodpairing.com", price: "Paid" },
{ name: "Grubhub Insights", category: "Food", subcategory: "Menu Optimization", desc: "AI-powered analytics for restaurant menu optimization and trends.", url: "https://www.grubhub.com", price: "Paid" },
{ name: "Toast Analytics", category: "Food", subcategory: "Menu Optimization", desc: "AI analytics platform for menu performance and optimization in restaurants.", url: "https://pos.toasttab.com", price: "Paid" },
{ name: "Tovala", category: "Food", subcategory: "Menu Optimization", desc: "AI-assisted smart kitchen platform optimizing meal selection and preparation.", url: "https://www.tovala.com", price: "Paid" },
{ name: "IBM Watson for Food", category: "Food", subcategory: "Menu Optimization", desc: "AI tool for optimizing menus and predicting customer preferences.", url: "https://www.ibm.com/watson", price: "Paid" },


// Food Smart Kitchen AI Tools
{ name: "June Oven", category: "Food", subcategory: "Smart Kitchen AI", desc: "AI-powered smart oven that automates cooking and meal preparation.", url: "https://juneoven.com", price: "Paid" },
{ name: "Tovala", category: "Food", subcategory: "Smart Kitchen AI", desc: "Smart kitchen platform with AI-driven cooking automation.", url: "https://www.tovala.com", price: "Paid" },
{ name: "Hestan Cue", category: "Food", subcategory: "Smart Kitchen AI", desc: "AI-assisted smart cookware for guided cooking and precise control.", url: "https://www.hestancue.com", price: "Paid" },
{ name: "Drop Kitchen", category: "Food", subcategory: "Smart Kitchen AI", desc: "AI-enabled smart kitchen devices with recipe integration.", url: "https://www.getdrop.com", price: "Paid" },
{ name: "Brava Oven", category: "Food", subcategory: "Smart Kitchen AI", desc: "AI-powered smart oven with guided cooking and automated settings.", url: "https://www.brava.com", price: "Paid" },


// Food Ingredient Substitution AI Tools
{ name: "Plant Jammer", category: "Food", subcategory: "Ingredient Substitution", desc: "AI tool suggesting ingredient substitutions for recipes.", url: "https://www.plantjammer.com", price: "Free/Paid" },
{ name: "Spoonacular", category: "Food", subcategory: "Ingredient Substitution", desc: "AI-powered recipe API suggesting substitutions for ingredients.", url: "https://spoonacular.com/food-api", price: "Paid" },
{ name: "Cookpad AI", category: "Food", subcategory: "Ingredient Substitution", desc: "AI platform recommending alternative ingredients in recipes.", url: "https://www.cookpad.com", price: "Free/Paid" },
{ name: "Yummly", category: "Food", subcategory: "Ingredient Substitution", desc: "AI-driven app providing ingredient substitution suggestions.", url: "https://www.yummly.com", price: "Free/Paid" },
{ name: "SideChef", category: "Food", subcategory: "Ingredient Substitution", desc: "AI-powered recipe app offering alternative ingredient suggestions.", url: "https://www.sidechef.com", price: "Free/Paid" },


// Food Restaurant Analytics AI Tools
{ name: "Toast Analytics", category: "Food", subcategory: "Restaurant Analytics", desc: "AI-powered analytics platform for restaurant operations and sales insights.", url: "https://pos.toasttab.com", price: "Paid" },
{ name: "Upserve by Lightspeed", category: "Food", subcategory: "Restaurant Analytics", desc: "AI platform providing restaurant analytics, sales, and customer insights.", url: "https://upserve.com", price: "Paid" },
{ name: "Square for Restaurants", category: "Food", subcategory: "Restaurant Analytics", desc: "AI-assisted analytics for restaurant management and performance tracking.", url: "https://squareup.com", price: "Paid" },
{ name: "SevenRooms", category: "Food", subcategory: "Restaurant Analytics", desc: "AI-powered platform offering restaurant analytics and guest experience insights.", url: "https://sevenrooms.com", price: "Paid" },
{ name: "Zenput", category: "Food", subcategory: "Restaurant Analytics", desc: "AI platform for operational analytics and compliance in restaurants.", url: "https://www.zenput.com", price: "Paid" },
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