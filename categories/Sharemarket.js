const subcategories = [
  "All","Stock Analysis","Portfolio Management","Trading Platforms","Market News",
  "Research & Analytics","AI Prediction Tools","Crypto Tracking","Investment Tools","Risk Management","Brokers"
];

const tools = [
  // Stock Analysis
  { name: "TradingView", category: "Share Market", subcategory: "Stock Analysis", desc: "Advanced charts, AI indicators, and technical analysis for stocks and crypto.", url: "https://www.tradingview.com", price: "Free/Paid" },
  { name: "Finviz", category: "Share Market", subcategory: "Stock Analysis", desc: "Stock screening and analysis platform with AI-powered filters.", url: "https://finviz.com", price: "Free/Paid" },
  { name: "StockCharts", category: "Share Market", subcategory: "Stock Analysis", desc: "Charting platform with AI-assisted technical analysis tools.", url: "https://stockcharts.com", price: "Paid" },

  // Portfolio Management
  { name: "Personal Capital", category: "Share Market", subcategory: "Portfolio Management", desc: "AI-powered investment tracking and portfolio management.", url: "https://www.personalcapital.com", price: "Free/Paid" },
  { name: "Morningstar", category: "Share Market", subcategory: "Portfolio Management", desc: "Comprehensive portfolio analysis and stock research with AI insights.", url: "https://www.morningstar.com", price: "Free/Paid" },
  { name: "SigFig", category: "Share Market", subcategory: "Portfolio Management", desc: "AI-driven investment portfolio management and analytics.", url: "https://www.sigfig.com", price: "Free/Paid" },

  // Trading Platforms
  { name: "Robinhood", category: "Share Market", subcategory: "Trading Platforms", desc: "Commission-free trading platform with AI insights and alerts.", url: "https://robinhood.com", price: "Free" },
  { name: "eToro", category: "Share Market", subcategory: "Trading Platforms", desc: "Social trading platform with AI-powered trading suggestions.", url: "https://www.etoro.com", price: "Free/Paid" },
  { name: "Interactive Brokers", category: "Share Market", subcategory: "Trading Platforms", desc: "Advanced trading platform with AI tools for professionals.", url: "https://www.interactivebrokers.com", price: "Paid" },

  // Market News
  { name: "Yahoo Finance", category: "Share Market", subcategory: "Market News", desc: "Real-time market news, AI summaries, and stock updates.", url: "https://finance.yahoo.com", price: "Free" },
  { name: "Bloomberg", category: "Share Market", subcategory: "Market News", desc: "Financial news and AI-powered market insights.", url: "https://www.bloomberg.com", price: "Paid" },
  { name: "MarketWatch", category: "Share Market", subcategory: "Market News", desc: "AI-assisted stock news, trends, and analysis.", url: "https://www.marketwatch.com", price: "Free/Paid" },

  // Research & Analytics
  { name: "Zacks Investment Research", category: "Share Market", subcategory: "Research & Analytics", desc: "Stock research and AI-based analytics for smarter decisions.", url: "https://www.zacks.com", price: "Free/Paid" },
  { name: "Trading Economics", category: "Share Market", subcategory: "Research & Analytics", desc: "Economic and market data with AI forecasting tools.", url: "https://tradingeconomics.com", price: "Free/Paid" },

  // AI Prediction Tools
  { name: "Tickeron", category: "Share Market", subcategory: "AI Prediction Tools", desc: "AI-driven stock pattern recognition and predictions.", url: "https://www.tickeron.com", price: "Free/Paid" },
  { name: "EquBot", category: "Share Market", subcategory: "AI Prediction Tools", desc: "AI-powered investment research and trading signals.", url: "https://equbot.com", price: "Paid" },

  // Crypto Tracking
  { name: "CoinMarketCap", category: "Share Market", subcategory: "Crypto Tracking", desc: "AI insights and tracking for cryptocurrencies.", url: "https://coinmarketcap.com", price: "Free" },
  { name: "CoinGecko", category: "Share Market", subcategory: "Crypto Tracking", desc: "Crypto price tracker with AI-powered analytics.", url: "https://www.coingecko.com", price: "Free" },

  // Investment Tools
  { name: "Wealthfront", category: "Share Market", subcategory: "Investment Tools", desc: "AI-based investment advisory and portfolio optimization.", url: "https://www.wealthfront.com", price: "Free/Paid" },
  { name: "Betterment", category: "Share Market", subcategory: "Investment Tools", desc: "Automated investing platform with AI-driven insights.", url: "https://www.betterment.com", price: "Free/Paid" },

  // Risk Management
  { name: "Riskalyze", category: "Share Market", subcategory: "Risk Management", desc: "AI-powered risk assessment and portfolio analysis.", url: "https://www.riskalyze.com", price: "Paid" },
  { name: "Portfolio Visualizer", category: "Share Market", subcategory: "Risk Management", desc: "AI analytics for portfolio risk, backtesting, and optimization.", url: "https://www.portfoliovisualizer.com", price: "Free/Paid" },

  // Brokers
  { name: "Charles Schwab", category: "Share Market", subcategory: "Brokers", desc: "Brokerage services with AI-assisted investment tools.", url: "https://www.schwab.com", price: "Paid" },
  { name: "Fidelity", category: "Share Market", subcategory: "Brokers", desc: "Investment brokerage platform with AI-driven analytics.", url: "https://www.fidelity.com", price: "Paid" },
  { name: "TD Ameritrade", category: "Share Market", subcategory: "Brokers", desc: "Trading platform with AI-supported market analysis.", url: "https://www.tdameritrade.com", price: "Paid" }
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
