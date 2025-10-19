const subcategories = [
  "All","SEO Analysis","Content Generation","Social Media Tools","Email Campaigns",
  "Analytics / Insights","Ad Creatives","Audience Targeting","Trend Analysis",
  "Brand Monitoring","Competitor Analysis"
];

const tools = [
  // SEO Analysis
  { name: "Semrush", category: "Marketing", subcategory: "SEO Analysis", desc: "Comprehensive SEO analytics and AI-powered insights for improving website ranking.", url: "https://www.semrush.com", price: "Paid" },
  { name: "Ahrefs", category: "Marketing", subcategory: "SEO Analysis", desc: "SEO toolset for backlink analysis, keyword research, and AI-driven recommendations.", url: "https://ahrefs.com", price: "Paid" },
  { name: "Moz Pro", category: "Marketing", subcategory: "SEO Analysis", desc: "AI-powered SEO software for site audits, keyword research, and rank tracking.", url: "https://moz.com/products/pro", price: "Paid" },
  { name: "Ubersuggest", category: "Marketing", subcategory: "SEO Analysis", desc: "AI-assisted SEO tool for keyword research, backlink analysis, and site audits.", url: "https://neilpatel.com/ubersuggest/", price: "Free/Paid" },
  { name: "SE Ranking", category: "Marketing", subcategory: "SEO Analysis", desc: "AI-based SEO platform for website auditing, competitor analysis, and keyword tracking.", url: "https://seranking.com", price: "Paid" },

  // Content Generation
  { name: "Jasper AI", category: "Marketing", subcategory: "Content Generation", desc: "AI-powered tool for creating marketing copy, blog posts, and social media content.", url: "https://www.jasper.ai", price: "Paid" },
  { name: "Copy.ai", category: "Marketing", subcategory: "Content Generation", desc: "Generates blog posts, emails, and ad copy using AI.", url: "https://www.copy.ai", price: "Free/Paid" },
  { name: "Writesonic", category: "Marketing", subcategory: "Content Generation", desc: "AI tool for creating landing pages, ads, and long-form content quickly.", url: "https://writesonic.com", price: "Free/Paid" },
  { name: "Rytr", category: "Marketing", subcategory: "Content Generation", desc: "AI writing assistant for generating content in multiple languages and tones.", url: "https://rytr.me", price: "Free/Paid" },
  { name: "Anyword", category: "Marketing", subcategory: "Content Generation", desc: "AI-driven content creation and optimization platform for ads and marketing.", url: "https://anyword.com", price: "Paid" },

  // Social Media Tools
  { name: "Lately AI", category: "Marketing", subcategory: "Social Media Tools", desc: "AI platform that generates social media posts from long-form content.", url: "https://www.lately.ai", price: "Paid" },
  { name: "Buffer", category: "Marketing", subcategory: "Social Media Tools", desc: "AI-assisted social media scheduling, analytics, and content optimization.", url: "https://buffer.com", price: "Free/Paid" },
  { name: "Hootsuite", category: "Marketing", subcategory: "Social Media Tools", desc: "AI tools for social media management, analytics, and scheduling.", url: "https://hootsuite.com", price: "Paid" },
  { name: "Canva Content Planner", category: "Marketing", subcategory: "Social Media Tools", desc: "AI-powered social media content creation and scheduling tool.", url: "https://www.canva.com/content-planner", price: "Free/Paid" },
  { name: "Later", category: "Marketing", subcategory: "Social Media Tools", desc: "AI-assisted social media scheduling and analytics platform.", url: "https://later.com", price: "Free/Paid" },

  // Email Campaigns
  { name: "Mailchimp", category: "Marketing", subcategory: "Email Campaigns", desc: "AI-powered email marketing platform for automation, personalization, and analytics.", url: "https://mailchimp.com", price: "Free/Paid" },
  { name: "HubSpot Email Marketing", category: "Marketing", subcategory: "Email Campaigns", desc: "AI-assisted tool for designing, automating, and analyzing email campaigns.", url: "https://www.hubspot.com/products/marketing/email", price: "Free/Paid" },
  { name: "Sendinblue", category: "Marketing", subcategory: "Email Campaigns", desc: "AI-driven email marketing platform with automation and analytics features.", url: "https://www.sendinblue.com", price: "Free/Paid" },
  { name: "ActiveCampaign", category: "Marketing", subcategory: "Email Campaigns", desc: "AI-assisted marketing automation and email campaign platform.", url: "https://www.activecampaign.com", price: "Paid" },
  { name: "Moosend", category: "Marketing", subcategory: "Email Campaigns", desc: "AI-powered email marketing platform for personalization and automation.", url: "https://moosend.com", price: "Free/Paid" },

  // Analytics / Insights
  { name: "Google Analytics 4", category: "Marketing", subcategory: "Analytics / Insights", desc: "AI-powered analytics platform for tracking website and app performance.", url: "https://analytics.google.com", price: "Free" },
  { name: "Tableau", category: "Marketing", subcategory: "Analytics / Insights", desc: "Data visualization and AI-driven insights for marketing analytics.", url: "https://www.tableau.com", price: "Paid" },
  { name: "Adobe Analytics", category: "Marketing", subcategory: "Analytics / Insights", desc: "AI-enhanced analytics for real-time customer insights and reporting.", url: "https://www.adobe.com/analytics", price: "Paid" },
  { name: "Zoho Analytics", category: "Marketing", subcategory: "Analytics / Insights", desc: "AI-assisted business intelligence and analytics platform.", url: "https://www.zoho.com/analytics", price: "Free/Paid" },
  { name: "PaveAI", category: "Marketing", subcategory: "Analytics / Insights", desc: "Converts Google Analytics data into actionable AI insights for marketing.", url: "https://www.paveai.com", price: "Paid" },

  // Ad Creatives
  { name: "AdCreative.ai", category: "Marketing", subcategory: "Ad Creatives", desc: "AI platform for generating high-converting ad creatives for various platforms.", url: "https://www.adcreative.ai", price: "Paid" },
  { name: "Designs.ai", category: "Marketing", subcategory: "Ad Creatives", desc: "AI-powered tool for creating ad visuals, videos, and branding assets.", url: "https://designs.ai", price: "Paid" },
  { name: "CopyMonkey", category: "Marketing", subcategory: "Ad Creatives", desc: "Generates AI-optimized ad copy and creatives for e-commerce campaigns.", url: "https://copymonkey.ai", price: "Paid" },
  { name: "Bannerbear", category: "Marketing", subcategory: "Ad Creatives", desc: "Automates creation of social media and display ad visuals using AI.", url: "https://www.bannerbear.com", price: "Paid" },
  { name: "Crello (VistaCreate)", category: "Marketing", subcategory: "Ad Creatives", desc: "AI-assisted graphic design tool for ads, social media, and banners.", url: "https://crello.com", price: "Free/Paid" },

  // Audience Targeting
  { name: "Facebook Ads Manager", category: "Marketing", subcategory: "Audience Targeting", desc: "AI-powered audience targeting for social media advertising campaigns.", url: "https://www.facebook.com/business/tools/ads-manager", price: "Paid" },
  { name: "Google Ads Audience Targeting", category: "Marketing", subcategory: "Audience Targeting", desc: "AI-assisted audience targeting and optimization for Google Ads campaigns.", url: "https://ads.google.com", price: "Paid" },
  { name: "Segment", category: "Marketing", subcategory: "Audience Targeting", desc: "AI-driven customer data platform for precise audience segmentation.", url: "https://segment.com", price: "Paid" },
  { name: "Optimove", category: "Marketing", subcategory: "Audience Targeting", desc: "AI platform for customer segmentation, retention, and campaign personalization.", url: "https://www.optimove.com", price: "Paid" },
  { name: "Zeta Marketing Platform", category: "Marketing", subcategory: "Audience Targeting", desc: "AI-powered customer engagement and audience targeting solution.", url: "https://zetaglobal.com", price: "Paid" },

  // Trend Analysis
  { name: "BuzzSumo", category: "Marketing", subcategory: "Trend Analysis", desc: "AI-powered tool for content research and trending topics analysis.", url: "https://buzzsumo.com", price: "Paid" },
  { name: "Trendalytics", category: "Marketing", subcategory: "Trend Analysis", desc: "AI platform for tracking trends and predicting consumer behavior.", url: "https://www.trendalytics.co", price: "Paid" },
  { name: "Google Trends", category: "Marketing", subcategory: "Trend Analysis", desc: "AI-assisted tool to analyze search trends and popular topics.", url: "https://trends.google.com", price: "Free" },
  { name: "Exploding Topics", category: "Marketing", subcategory: "Trend Analysis", desc: "Discover rapidly growing trends using AI-driven insights.", url: "https://explodingtopics.com", price: "Paid" },
  { name: "Mention", category: "Marketing", subcategory: "Trend Analysis", desc: "AI-powered social listening tool for tracking trending topics and brand mentions.", url: "https://mention.com", price: "Free/Paid" },

  // Brand Monitoring
  { name: "Brand24", category: "Marketing", subcategory: "Brand Monitoring", desc: "AI-powered platform for monitoring brand mentions across the web and social media.", url: "https://brand24.com", price: "Paid" },
  { name: "Mention", category: "Marketing", subcategory: "Brand Monitoring", desc: "Tracks online mentions of your brand using AI-driven analytics.", url: "https://mention.com", price: "Free/Paid" },
  { name: "Talkwalker", category: "Marketing", subcategory: "Brand Monitoring", desc: "AI-based social listening and brand monitoring platform.", url: "https://www.talkwalker.com", price: "Paid" },
  { name: "Awario", category: "Marketing", subcategory: "Brand Monitoring", desc: "AI-powered tool for tracking brand mentions, competitors, and keywords.", url: "https://awario.com", price: "Paid" },
  { name: "Hootsuite Insights", category: "Marketing", subcategory: "Brand Monitoring", desc: "AI-enhanced platform for monitoring brand sentiment and mentions.", url: "https://hootsuite.com", price: "Paid" },

  // Competitor Analysis
  { name: "SimilarWeb", category: "Marketing", subcategory: "Competitor Analysis", desc: "AI-powered tool for analyzing competitors' traffic, marketing, and strategies.", url: "https://www.similarweb.com", price: "Paid" },
  { name: "SpyFu", category: "Marketing", subcategory: "Competitor Analysis", desc: "AI-assisted platform to analyze competitors’ keywords and ad campaigns.", url: "https://www.spyfu.com", price: "Paid" },
  { name: "iSpionage", category: "Marketing", subcategory: "Competitor Analysis", desc: "AI tool for tracking competitor PPC campaigns and SEO performance.", url: "https://www.ispionage.com", price: "Paid" },
  { name: "SEMrush Competitive Research", category: "Marketing", subcategory: "Competitor Analysis", desc: "AI-enhanced competitor insights, backlink tracking, and SEO research.", url: "https://www.semrush.com/analytics/competitive-research/", price: "Paid" },
  { name: "Ahrefs Competitor Analysis", category: "Marketing", subcategory: "Competitor Analysis", desc: "Analyze competitors' SEO, backlinks, and traffic using AI insights.", url: "https://ahrefs.com", price: "Paid" }
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
