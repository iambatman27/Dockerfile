const subcategories = ["All","AI Chat Companions", "Sentiment Analysis", "Content Suggestion", "Social Media Insights", "Trend Detection", "Influencer Analytics", "Engagement Optimization", "Hashtag Suggestions", "Community Monitoring AI", "Event Promotion AI"];
const tools = [
    // Social AI Chat Companions
{ name: "Replika", category: "Social", subcategory: "AI Chat Companions", desc: "AI-powered chatbot providing companionship and conversation.", url: "https://replika.ai", price: "Free/Paid" },
{ name: "Character.ai", category: "Social", subcategory: "AI Chat Companions", desc: "AI platform for chatting with virtual characters and companions.", url: "https://beta.character.ai", price: "Free/Paid" },
{ name: "Woebot", category: "Social", subcategory: "AI Chat Companions", desc: "AI-driven mental health chatbot providing conversational support.", url: "https://woebothealth.com", price: "Free/Paid" },
{ name: "Cai.chat", category: "Social", subcategory: "AI Chat Companions", desc: "AI chatbot platform for personalized social interactions.", url: "https://cai.chat", price: "Paid" },
{ name: "Mitsuku (Kuki)", category: "Social", subcategory: "AI Chat Companions", desc: "Award-winning AI chatbot for conversation and entertainment.", url: "https://www.kuki.ai", price: "Free/Paid" },


// Social Sentiment Analysis AI Tools
{ name: "Lexalytics", category: "Social", subcategory: "Sentiment Analysis", desc: "AI-powered sentiment and text analytics platform.", url: "https://www.lexalytics.com", price: "Paid" },
{ name: "MonkeyLearn", category: "Social", subcategory: "Sentiment Analysis", desc: "AI-assisted sentiment analysis and text classification platform.", url: "https://monkeylearn.com", price: "Free/Paid" },
{ name: "Brandwatch", category: "Social", subcategory: "Sentiment Analysis", desc: "AI-driven platform analyzing social sentiment and brand perception.", url: "https://www.brandwatch.com", price: "Paid" },
{ name: "Repustate", category: "Social", subcategory: "Sentiment Analysis", desc: "AI-powered text analytics and sentiment detection tool.", url: "https://www.repustate.com", price: "Paid" },
{ name: "SentiStrength", category: "Social", subcategory: "Sentiment Analysis", desc: "AI-assisted tool measuring positive and negative sentiment in text.", url: "http://sentistrength.wlv.ac.uk/", price: "Free/Paid" },


// Social Content Suggestion AI Tools
{ name: "BuzzSumo", category: "Social", subcategory: "Content Suggestion", desc: "AI-powered platform suggesting trending content ideas.", url: "https://www.buzzsumo.com", price: "Paid" },
{ name: "ContentStudio", category: "Social", subcategory: "Content Suggestion", desc: "AI-assisted content discovery and recommendation platform.", url: "https://www.contentstudio.io", price: "Paid" },
{ name: "Lately.ai", category: "Social", subcategory: "Content Suggestion", desc: "AI-driven content suggestion and repurposing platform.", url: "https://www.lately.ai", price: "Paid" },
{ name: "Curata", category: "Social", subcategory: "Content Suggestion", desc: "AI-powered content curation and recommendation platform.", url: "https://www.curata.com", price: "Paid" },
{ name: "Feedly AI", category: "Social", subcategory: "Content Suggestion", desc: "AI-assisted platform suggesting personalized content feeds.", url: "https://feedly.com", price: "Free/Paid" },


// Social Social Media Insights AI Tools
{ name: "Hootsuite Insights", category: "Social", subcategory: "Social Media Insights", desc: "AI-powered social media analytics and insights platform.", url: "https://www.hootsuite.com/products/insights", price: "Paid" },
{ name: "Sprout Social", category: "Social", subcategory: "Social Media Insights", desc: "AI-assisted platform providing social media performance analytics.", url: "https://sproutsocial.com", price: "Paid" },
{ name: "Brand24", category: "Social", subcategory: "Social Media Insights", desc: "AI-driven platform for monitoring social media mentions and insights.", url: "https://brand24.com", price: "Paid" },
{ name: "Talkwalker", category: "Social", subcategory: "Social Media Insights", desc: "AI-powered social media analytics and monitoring platform.", url: "https://www.talkwalker.com", price: "Paid" },
{ name: "Zoho Social", category: "Social", subcategory: "Social Media Insights", desc: "AI-assisted social media analytics platform providing actionable insights.", url: "https://www.zoho.com/social", price: "Free/Paid" },


// Social Trend Detection AI Tools
{ name: "TrendSpottr", category: "Social", subcategory: "Trend Detection", desc: "AI-powered platform detecting emerging trends and influencers.", url: "https://www.trendspottr.com", price: "Paid" },
{ name: "Google Trends", category: "Social", subcategory: "Trend Detection", desc: "AI-assisted tool for identifying trending topics and searches.", url: "https://trends.google.com", price: "Free" },
{ name: "Exploding Topics", category: "Social", subcategory: "Trend Detection", desc: "AI-driven platform identifying rapidly growing trends.", url: "https://explodingtopics.com", price: "Free/Paid" },
{ name: "BuzzSumo", category: "Social", subcategory: "Trend Detection", desc: "AI-assisted tool for discovering trending content and topics.", url: "https://www.buzzsumo.com", price: "Paid" },
{ name: "Trendalytics", category: "Social", subcategory: "Trend Detection", desc: "AI-powered consumer trend prediction and analytics platform.", url: "https://www.trendalytics.co", price: "Paid" },


// Social Influencer Analytics AI Tools
{ name: "Heepsy", category: "Social", subcategory: "Influencer Analytics", desc: "AI-powered platform for finding and analyzing social media influencers.", url: "https://www.heepsy.com", price: "Paid" },
{ name: "Upfluence", category: "Social", subcategory: "Influencer Analytics", desc: "AI-assisted influencer analytics and marketing platform.", url: "https://www.upfluence.com", price: "Paid" },
{ name: "HypeAuditor", category: "Social", subcategory: "Influencer Analytics", desc: "AI-driven tool providing influencer performance and authenticity metrics.", url: "https://hypeauditor.com", price: "Paid" },
{ name: "Klear", category: "Social", subcategory: "Influencer Analytics", desc: "AI-powered platform for influencer identification and analytics.", url: "https://klear.com", price: "Paid" },
{ name: "CreatorIQ", category: "Social", subcategory: "Influencer Analytics", desc: "AI-assisted influencer marketing and analytics platform.", url: "https://www.creatoriQ.com", price: "Paid" },


// Social Engagement Optimization AI Tools
{ name: "Socialbakers", category: "Social", subcategory: "Engagement Optimization", desc: "AI-powered platform optimizing social media engagement and content strategy.", url: "https://www.socialbakers.com", price: "Paid" },
{ name: "Lately.ai", category: "Social", subcategory: "Engagement Optimization", desc: "AI-assisted tool for automating social media posts and maximizing engagement.", url: "https://www.lately.ai", price: "Paid" },
{ name: "Sprinklr", category: "Social", subcategory: "Engagement Optimization", desc: "AI-driven social media engagement and marketing platform.", url: "https://www.sprinklr.com", price: "Paid" },
{ name: "Buffer Analyze", category: "Social", subcategory: "Engagement Optimization", desc: "AI-assisted analytics tool for optimizing social media engagement.", url: "https://buffer.com/analyze", price: "Paid" },
{ name: "HubSpot Social Tools", category: "Social", subcategory: "Engagement Optimization", desc: "AI-powered platform for social media scheduling and engagement optimization.", url: "https://www.hubspot.com/products/marketing/social", price: "Free/Paid" },


// Social Hashtag Suggestions AI Tools
{ name: "RiteTag", category: "Social", subcategory: "Hashtag Suggestions", desc: "AI-powered tool suggesting trending hashtags for social media posts.", url: "https://ritetag.com", price: "Paid" },
{ name: "Hashtagify", category: "Social", subcategory: "Hashtag Suggestions", desc: "AI-assisted platform for discovering and analyzing hashtags.", url: "https://hashtagify.me", price: "Free/Paid" },
{ name: "All Hashtag", category: "Social", subcategory: "Hashtag Suggestions", desc: "AI-driven tool generating optimized hashtags for social media content.", url: "https://www.all-hashtag.com", price: "Free/Paid" },
{ name: "Seekmetrics", category: "Social", subcategory: "Hashtag Suggestions", desc: "AI-powered hashtag generator and analytics platform.", url: "https://seekmetrics.com/hashtag-generator", price: "Free" },
{ name: "Inflact Hashtag Generator", category: "Social", subcategory: "Hashtag Suggestions", desc: "AI-assisted platform generating relevant hashtags for social campaigns.", url: "https://inflact.com/tools/instagram-hashtag-generator/", price: "Paid" },


// Social Community Monitoring AI Tools
{ name: "Mention", category: "Social", subcategory: "Community Monitoring AI", desc: "AI-powered platform for monitoring brand mentions and community conversations.", url: "https://mention.com", price: "Paid" },
{ name: "Brandwatch", category: "Social", subcategory: "Community Monitoring AI", desc: "AI-assisted tool analyzing online communities and social media activity.", url: "https://www.brandwatch.com", price: "Paid" },
{ name: "Talkwalker", category: "Social", subcategory: "Community Monitoring AI", desc: "AI-driven platform for social listening and community insights.", url: "https://www.talkwalker.com", price: "Paid" },
{ name: "Awario", category: "Social", subcategory: "Community Monitoring AI", desc: "AI-powered social listening tool for monitoring communities and mentions.", url: "https://awario.com", price: "Paid" },
{ name: "Keyhole", category: "Social", subcategory: "Community Monitoring AI", desc: "AI-assisted platform monitoring hashtags, mentions, and social communities.", url: "https://keyhole.co", price: "Paid" },


// Social Event Promotion AI Tools
{ name: "Eventbrite", category: "Social", subcategory: "Event Promotion AI", desc: "AI-powered platform promoting events and optimizing ticket sales.", url: "https://www.eventbrite.com", price: "Free/Paid" },
{ name: "Hopin", category: "Social", subcategory: "Event Promotion AI", desc: "AI-assisted virtual event platform for promotion and attendee engagement.", url: "https://www.hopin.com", price: "Free/Paid" },
{ name: "Splash", category: "Social", subcategory: "Event Promotion AI", desc: "AI-driven platform for event marketing, promotion, and analytics.", url: "https://splashthat.com", price: "Paid" },
{ name: "Bizzabo", category: "Social", subcategory: "Event Promotion AI", desc: "AI-powered event management platform for promotion and audience targeting.", url: "https://www.bizzabo.com", price: "Paid" },
{ name: "Cvent", category: "Social", subcategory: "Event Promotion AI", desc: "AI-assisted platform for event promotion, registration, and analytics.", url: "https://www.cvent.com", price: "Paid" },
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