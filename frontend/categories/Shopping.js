const subcategories = ["All","Price Comparison AI", "Product Recommendation", "Visual Search", "Style / Outfit Suggestions", "Smart Cart Management", "Discount & Deal Finder", "Inventory Prediction", "Customer Review Analysis", "Personalized Offers", "E-commerce Analytics"];
const tools = [
    // Shopping Price Comparison AI Tools
{ name: "Prisync", category: "Shopping", subcategory: "Price Comparison AI", desc: "AI-powered platform tracking competitor prices and automating comparisons.", url: "https://prisync.com", price: "Paid" },
{ name: "Price2Spy", category: "Shopping", subcategory: "Price Comparison AI", desc: "AI-enabled price monitoring and comparison tool for e-commerce.", url: "https://www.price2spy.com", price: "Paid" },
{ name: "Shopify Price Comparison Apps", category: "Shopping", subcategory: "Price Comparison AI", desc: "AI tools for comparing prices across e-commerce platforms.", url: "https://www.shopify.com/apps", price: "Paid" },
{ name: "Keepa", category: "Shopping", subcategory: "Price Comparison AI", desc: "AI-assisted Amazon price tracking and comparison tool.", url: "https://keepa.com", price: "Free/Paid" },
{ name: "CamelCamelCamel", category: "Shopping", subcategory: "Price Comparison AI", desc: "AI-based Amazon price tracker and historical price comparison platform.", url: "https://camelcamelcamel.com", price: "Free" },


// Shopping Product Recommendation AI Tools
{ name: "Nosto", category: "Shopping", subcategory: "Product Recommendation", desc: "AI-powered personalization and product recommendation platform.", url: "https://www.nosto.com", price: "Paid" },
{ name: "Algolia Recommend", category: "Shopping", subcategory: "Product Recommendation", desc: "AI-based product recommendation engine for e-commerce.", url: "https://www.algolia.com", price: "Paid" },
{ name: "Dynamic Yield", category: "Shopping", subcategory: "Product Recommendation", desc: "AI platform providing personalized product recommendations and experiences.", url: "https://www.dynamicyield.com", price: "Paid" },
{ name: "Salesforce Commerce Cloud", category: "Shopping", subcategory: "Product Recommendation", desc: "AI-driven product recommendation and personalization platform.", url: "https://www.salesforce.com/products/commerce-cloud/overview/", price: "Paid" },
{ name: "Klevu", category: "Shopping", subcategory: "Product Recommendation", desc: "AI search and recommendation platform for e-commerce products.", url: "https://www.klevu.com", price: "Paid" },


// Shopping Visual Search AI Tools
{ name: "Slyce", category: "Shopping", subcategory: "Visual Search", desc: "AI-powered visual search platform for retail and e-commerce.", url: "https://www.slyce.it", price: "Paid" },
{ name: "ViSenze", category: "Shopping", subcategory: "Visual Search", desc: "AI visual search and image recognition platform for product discovery.", url: "https://www.visenze.com", price: "Paid" },
{ name: "Syte", category: "Shopping", subcategory: "Visual Search", desc: "AI-based visual search and product recommendation platform.", url: "https://www.syte.ai", price: "Paid" },
{ name: "Pinterest Lens", category: "Shopping", subcategory: "Visual Search", desc: "AI visual search tool for discovering products through images.", url: "https://www.pinterest.com/lens", price: "Free" },
{ name: "CamFind", category: "Shopping", subcategory: "Visual Search", desc: "AI app for visual product search using images captured via camera.", url: "https://www.camfindapp.com", price: "Free" },


// Shopping Style / Outfit Suggestions AI Tools
{ name: "Vue.ai", category: "Shopping", subcategory: "Style / Outfit Suggestions", desc: "AI-powered styling and outfit recommendation platform.", url: "https://vue.ai", price: "Paid" },
{ name: "Fashwell", category: "Shopping", subcategory: "Style / Outfit Suggestions", desc: "AI visual search and style recommendation platform for fashion.", url: "https://www.fashwell.com", price: "Paid" },
{ name: "Stylumia", category: "Shopping", subcategory: "Style / Outfit Suggestions", desc: "AI-driven fashion trend and outfit recommendation engine.", url: "https://www.stylumia.ai", price: "Paid" },
{ name: "Lily AI", category: "Shopping", subcategory: "Style / Outfit Suggestions", desc: "AI platform for personalized fashion recommendations and styling.", url: "https://www.lily.ai", price: "Paid" },
{ name: "Heuritech", category: "Shopping", subcategory: "Style / Outfit Suggestions", desc: "AI platform predicting fashion trends and providing outfit suggestions.", url: "https://www.heuritech.com", price: "Paid" },


// Shopping Smart Cart Management AI Tools
{ name: "Cortexica SmartCart", category: "Shopping", subcategory: "Smart Cart Management", desc: "AI-assisted smart cart platform optimizing product recommendations and upsells.", url: "https://www.cortexica.com", price: "Paid" },
{ name: "Nosto", category: "Shopping", subcategory: "Smart Cart Management", desc: "AI-powered platform for personalized cart recommendations and promotions.", url: "https://www.nosto.com", price: "Paid" },
{ name: "Dynamic Yield", category: "Shopping", subcategory: "Smart Cart Management", desc: "AI-driven cart personalization and automated upselling platform.", url: "https://www.dynamicyield.com", price: "Paid" },
{ name: "Reflektion", category: "Shopping", subcategory: "Smart Cart Management", desc: "AI platform optimizing e-commerce cart experience and product recommendations.", url: "https://www.reflektion.com", price: "Paid" },
{ name: "Barilliance", category: "Shopping", subcategory: "Smart Cart Management", desc: "AI-powered platform for cart management, recommendations, and recovery.", url: "https://www.barilliance.com", price: "Paid" },


// Shopping Discount & Deal Finder AI Tools
{ name: "Honey", category: "Shopping", subcategory: "Discount & Deal Finder", desc: "AI-powered browser extension finding discounts, coupons, and deals automatically.", url: "https://www.joinhoney.com", price: "Free" },
{ name: "RetailMeNot", category: "Shopping", subcategory: "Discount & Deal Finder", desc: "AI-assisted platform for discovering coupons, promo codes, and deals.", url: "https://www.retailmenot.com", price: "Free" },
{ name: "ShopSavvy", category: "Shopping", subcategory: "Discount & Deal Finder", desc: "AI-based app comparing prices and finding the best deals across stores.", url: "https://www.shopsavvy.com", price: "Free" },
{ name: "Capital One Shopping", category: "Shopping", subcategory: "Discount & Deal Finder", desc: "AI-powered tool finding deals and applying coupons automatically.", url: "https://www.capitaloneshopping.com", price: "Free" },
{ name: "CouponBirds", category: "Shopping", subcategory: "Discount & Deal Finder", desc: "AI-assisted platform for finding online coupons and discounts.", url: "https://www.couponbirds.com", price: "Free" },


// Shopping Inventory Prediction AI Tools
{ name: "Llamasoft", category: "Shopping", subcategory: "Inventory Prediction", desc: "AI platform forecasting inventory demand and optimizing supply chains.", url: "https://www.llamasoft.com", price: "Paid" },
{ name: "ClearMetal", category: "Shopping", subcategory: "Inventory Prediction", desc: "AI-driven inventory and supply chain prediction platform.", url: "https://www.clearmetal.com", price: "Paid" },
{ name: "Blue Yonder", category: "Shopping", subcategory: "Inventory Prediction", desc: "AI-powered inventory optimization and demand forecasting tool.", url: "https://blueyonder.com", price: "Paid" },
{ name: "E2open", category: "Shopping", subcategory: "Inventory Prediction", desc: "AI-assisted inventory prediction and supply chain management platform.", url: "https://www.e2open.com", price: "Paid" },
{ name: "o9 Solutions", category: "Shopping", subcategory: "Inventory Prediction", desc: "AI-powered platform for inventory planning and demand forecasting.", url: "https://o9solutions.com", price: "Paid" },


// Shopping Customer Review Analysis AI Tools
{ name: "MonkeyLearn", category: "Shopping", subcategory: "Customer Review Analysis", desc: "AI platform analyzing customer reviews and feedback for insights.", url: "https://monkeylearn.com", price: "Free/Paid" },
{ name: "Lexalytics", category: "Shopping", subcategory: "Customer Review Analysis", desc: "AI-driven platform for sentiment analysis and review mining.", url: "https://www.lexalytics.com", price: "Paid" },
{ name: "ReviewTrackers", category: "Shopping", subcategory: "Customer Review Analysis", desc: "AI-powered platform for analyzing customer reviews and ratings.", url: "https://www.reviewtrackers.com", price: "Paid" },
{ name: "Yotpo", category: "Shopping", subcategory: "Customer Review Analysis", desc: "AI-enabled platform for customer review analytics and insights.", url: "https://www.yotpo.com", price: "Paid" },
{ name: "Talkwalker", category: "Shopping", subcategory: "Customer Review Analysis", desc: "AI platform analyzing social and customer reviews for brand insights.", url: "https://www.talkwalker.com", price: "Paid" },


// Shopping Personalized Offers AI Tools
{ name: "Dynamic Yield", category: "Shopping", subcategory: "Personalized Offers", desc: "AI platform delivering personalized promotions and product offers.", url: "https://www.dynamicyield.com", price: "Paid" },
{ name: "Nosto", category: "Shopping", subcategory: "Personalized Offers", desc: "AI-powered personalization engine for personalized deals and recommendations.", url: "https://www.nosto.com", price: "Paid" },
{ name: "Salesforce Commerce Cloud", category: "Shopping", subcategory: "Personalized Offers", desc: "AI-assisted platform delivering personalized offers and product suggestions.", url: "https://www.salesforce.com/products/commerce-cloud/overview/", price: "Paid" },
{ name: "Barilliance", category: "Shopping", subcategory: "Personalized Offers", desc: "AI platform for personalized e-commerce offers, upsells, and discounts.", url: "https://www.barilliance.com", price: "Paid" },
{ name: "Algolia Recommend", category: "Shopping", subcategory: "Personalized Offers", desc: "AI-powered personalization for delivering custom offers and recommendations.", url: "https://www.algolia.com", price: "Paid" },


// Shopping E-commerce Analytics AI Tools
{ name: "Heap", category: "Shopping", subcategory: "E-commerce Analytics", desc: "AI-powered analytics platform tracking e-commerce customer behavior.", url: "https://heap.io", price: "Free/Paid" },
{ name: "Google Analytics 4", category: "Shopping", subcategory: "E-commerce Analytics", desc: "AI-assisted e-commerce analytics for traffic, conversions, and user behavior.", url: "https://analytics.google.com", price: "Free" },
{ name: "Mixpanel", category: "Shopping", subcategory: "E-commerce Analytics", desc: "AI-driven analytics for user behavior and e-commerce performance.", url: "https://mixpanel.com", price: "Free/Paid" },
{ name: "Kissmetrics", category: "Shopping", subcategory: "E-commerce Analytics", desc: "AI-powered analytics for tracking e-commerce performance and conversion.", url: "https://www.kissmetrics.io", price: "Paid" },
{ name: "Adobe Analytics", category: "Shopping", subcategory: "E-commerce Analytics", desc: "AI-enabled e-commerce analytics platform providing deep insights.", url: "https://www.adobe.com/analytics", price: "Paid" },
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
