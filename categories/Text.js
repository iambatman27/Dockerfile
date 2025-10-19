const subcategories = ["All","Writing","Chatbots","Summarization","Translation","Grammar Check","SEO Content","Email Drafting","Storytelling","Scripts","Q&A Assistants"];

const tools = [// ---------- Text Tools ----------
  { name: "ChatGPT", category: "Text", subcategory: "Writing", desc: "Generates conversations, articles, summaries, and more using advanced AI language models.", url: "https://chat.openai.com", price: "Free/Paid" },
{ name: "Jasper AI", category: "Text", subcategory: "Writing", desc: "AI-powered tool for marketing copy, blog posts, and social media content creation.", url: "https://www.jasper.ai", price: "Paid" },
{ name: "Writesonic", category: "Text", subcategory: "Writing", desc: "Creates articles, ads, product descriptions, and other creative writing content.", url: "https://writesonic.com", price: "Free/Paid" },
{ name: "Grammarly", category: "Text", subcategory: "Writing", desc: "Checks grammar, style, tone, and clarity to improve your writing.", url: "https://www.grammarly.com", price: "Free/Paid" },
{ name: "Copy.ai", category: "Text", subcategory: "Writing", desc: "Generates blog posts, emails, and digital marketing copy with AI assistance.", url: "https://www.copy.ai", price: "Free/Paid" },


  // Chatbots
  { name: "DeepSeek", category: "Text", subcategory: "Chatbots", desc: "AI chatbot for intelligent search.", url: "https://www.deepseek.com", price: "Paid" },
  { name: "ChatGPT", category: "Text", subcategory: "Chatbots", desc: "Advanced conversational AI.", url: "https://chat.openai.com", price: "Free/Paid" },
  { name: "Gemini", category: "Text", subcategory: "Chatbots", desc: "Next-gen AI assistant.", url: "https://gemini.google.com", price: "Paid" },
  { name: "Copilot", category: "Text", subcategory: "Chatbots", desc: "AI coding assistant.", url: "https://github.com/features/copilot", price: "Paid" },
  { name: "Perplexity", category: "Text", subcategory: "Chatbots", desc: "Conversational AI with search integration.", url: "https://www.perplexity.ai", price: "Free/Paid" },

  // Summarization
  { name: "Jasper AI", category: "Text", subcategory: "Summarization", desc: "Summarizes long texts into concise summaries.", url: "https://www.jasper.ai", price: "Paid" },
  { name: "QuillBot", category: "Text", subcategory: "Summarization", desc: "Paraphrasing and summarization tool.", url: "https://quillbot.com", price: "Free/Paid" },
  { name: "2ThePoint", category: "Text", subcategory: "Summarization", desc: "Summarizes articles with a single click.", url: "https://2thepoint.com", price: "Free" },
  { name: "Summarizer.org", category: "Text", subcategory: "Summarization", desc: "Summarizes articles and essays; offers bullet points and best lines.", url: "https://summarizer.org", price: "Free" },
  { name: "ZeroGPT", category: "Text", subcategory: "Summarization", desc: "Summarizes text while maintaining context.", url: "https://www.zerogpt.com", price: "Free/Paid" },
    // Translation
  { name: "DeepL", category: "Text", subcategory: "Translation", desc: "AI-powered translation tool that produces highly accurate translations in multiple languages.", url: "https://www.deepl.com", price: "Free/Paid" },
{ name: "Google Translate", category: "Text", subcategory: "Translation", desc: "Widely used AI translation service supporting over 100 languages.", url: "https://translate.google.com", price: "Free" },
{ name: "Microsoft Translator", category: "Text", subcategory: "Translation", desc: "AI translation and transcription tool for text, speech, and documents.", url: "https://www.microsoft.com/translator", price: "Free/Paid" },
{ name: "Amazon Translate", category: "Text", subcategory: "Translation", desc: "Neural machine translation service for fast and accurate language translations.", url: "https://aws.amazon.com/translate/", price: "Paid" },
{ name: "LingvaNex", category: "Text", subcategory: "Translation", desc: "AI-powered translation platform for text, voice, and websites with multi-language support.", url: "https://lingvanex.com", price: "Free/Paid" },
 // Grammar Check
{ name: "Grammarly", category: "Text", subcategory: "Grammar Check", desc: "Checks grammar, punctuation, style, and tone to improve your writing.", url: "https://www.grammarly.com", price: "Free/Paid" },
{ name: "ProWritingAid", category: "Text", subcategory: "Grammar Check", desc: "AI-powered writing assistant for grammar, style, and readability improvements.", url: "https://prowritingaid.com", price: "Free/Paid" },
{ name: "Ginger", category: "Text", subcategory: "Grammar Check", desc: "Grammar, punctuation, and spell-checking AI tool with translation features.", url: "https://www.gingersoftware.com", price: "Free/Paid" },
{ name: "LanguageTool", category: "Text", subcategory: "Grammar Check", desc: "Open-source AI tool for grammar, style, and spell checking in multiple languages.", url: "https://languagetool.org", price: "Free/Paid" },
{ name: "Slick Write", category: "Text", subcategory: "Grammar Check", desc: "Analyzes your writing for grammar errors, potential stylistic mistakes, and other issues.", url: "https://www.slickwrite.com", price: "Free" },
  // SEO Content
{ name: "Surfer SEO", category: "Text", subcategory: "SEO Content", desc: "AI-powered tool for optimizing content to rank higher in search engines.", url: "https://surferseo.com", price: "Paid" },
{ name: "Frase", category: "Text", subcategory: "SEO Content", desc: "Creates SEO-focused content briefs and optimizes articles for better search rankings.", url: "https://www.frase.io", price: "Paid" },
{ name: "Writesonic", category: "Text", subcategory: "SEO Content", desc: "Generates blog posts, landing pages, and marketing copy optimized for SEO.", url: "https://writesonic.com", price: "Free/Paid" },
{ name: "ContentBot", category: "Text", subcategory: "SEO Content", desc: "AI writing assistant for creating SEO-friendly content, ads, and emails.", url: "https://contentbot.ai", price: "Free/Paid" },
{ name: "Copy.ai", category: "Text", subcategory: "SEO Content", desc: "Generates SEO-focused blog posts, social media content, and marketing copy.", url: "https://www.copy.ai", price: "Free/Paid" },
  // Email Drafting
{ name: "Lavender", category: "Text", subcategory: "Email Drafting", desc: "AI tool that helps write, optimize, and personalize professional emails.", url: "https://www.lavender.ai", price: "Paid" },
{ name: "Flowrite", category: "Text", subcategory: "Email Drafting", desc: "Generates ready-to-send emails and replies using AI assistance.", url: "https://www.flowrite.com", price: "Paid" },
{ name: "Copy.ai", category: "Text", subcategory: "Email Drafting", desc: "Creates persuasive and professional email content quickly using AI.", url: "https://www.copy.ai", price: "Free/Paid" },
{ name: "Smartwriter.ai", category: "Text", subcategory: "Email Drafting", desc: "AI platform for writing personalized email outreach and campaigns.", url: "https://www.smartwriter.ai", price: "Paid" },
{ name: "Grammarly", category: "Text", subcategory: "Email Drafting", desc: "Checks grammar, tone, and clarity to ensure polished email communication.", url: "https://www.grammarly.com", price: "Free/Paid" },
  // Storytelling
{ name: "Sudowrite", category: "Text", subcategory: "Storytelling", desc: "AI writing assistant for creative storytelling, helping authors brainstorm, continue, and enhance stories.", url: "https://www.sudowrite.com", price: "Paid" },
{ name: "AI Dungeon", category: "Text", subcategory: "Storytelling", desc: "Interactive AI storytelling platform that generates endless story adventures.", url: "https://play.aidungeon.io", price: "Free/Paid" },
{ name: "NovelAI", category: "Text", subcategory: "Storytelling", desc: "AI-powered tool to help authors write novels, stories, and creative fiction.", url: "https://novelai.net", price: "Paid" },
{ name: "StoryAI", category: "Text", subcategory: "Storytelling", desc: "Generates story ideas, plots, and complete stories using AI assistance.", url: "https://storyai.com", price: "Free/Paid" },
{ name: "Writesonic", category: "Text", subcategory: "Storytelling", desc: "Creates short stories, narratives, and creative content with AI.", url: "https://writesonic.com", price: "Free/Paid" },
  // Scriptwriting
{ name: "Final Draft AI", category: "Text", subcategory: "Scripts", desc: "AI-assisted screenwriting tool for creating professional scripts for film, TV, and theater.", url: "https://www.finaldraft.com", price: "Paid" },
{ name: "Celtx AI", category: "Text", subcategory: "Scripts", desc: "Scriptwriting and pre-production software with AI assistance for story and dialogue generation.", url: "https://www.celtx.com", price: "Paid" },
{ name: "WriterDuet", category: "Text", subcategory: "Scripts", desc: "Collaborative scriptwriting platform that uses AI to assist with story structure and dialogue.", url: "https://www.writerduet.com", price: "Free/Paid" },
{ name: "Plotagon", category: "Text", subcategory: "Scripts", desc: "AI-powered tool to create animated stories from written scripts.", url: "https://www.plotagon.com", price: "Paid" },
{ name: "Scrite AI", category: "Text", subcategory: "Scripts", desc: "AI tool for scriptwriting, analyzing dialogues, and formatting scripts professionally.", url: "https://www.scrite.com", price: "Free/Paid" },
  // Q&A Assistants
{ name: "Perplexity AI", category: "Text", subcategory: "Q&A Assistants", desc: "Conversational AI that answers questions with context-aware responses.", url: "https://www.perplexity.ai", price: "Free/Paid" },
{ name: "YouChat", category: "Text", subcategory: "Q&A Assistants", desc: "AI chat assistant that provides answers to questions and summarizes content.", url: "https://you.com/youchat", price: "Free/Paid" },
{ name: "Claude", category: "Text", subcategory: "Q&A Assistants", desc: "AI assistant by Anthropic designed for safe and accurate Q&A.", url: "https://www.anthropic.com/claude", price: "Paid" },
{ name: "ChatGPT", category: "Text", subcategory: "Q&A Assistants", desc: "OpenAI’s conversational AI capable of answering questions and generating explanations.", url: "https://chat.openai.com", price: "Free/Paid" },
{ name: "Elicit", category: "Text", subcategory: "Q&A Assistants", desc: "AI research assistant that answers research questions and summarizes papers.", url: "https://elicit.org", price: "Free/Paid" },

]
// ---- Subcategory buttons ----
const subcatsDiv = document.getElementById('subcats');
subcategories.forEach(sub => {
  const btn = document.createElement('button');
  btn.textContent = sub;
  btn.className = 'main-btn';
  btn.onclick = () => filterTools(sub);
  subcatsDiv.appendChild(btn);
});

// ---- Cards rendering ----
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

// ---- Filter function ----
function filterTools(subcat){
  if(subcat === "All"){
    renderList(tools);
  } else {
    const filtered = tools.filter(t => t.subcategory === subcat);
    renderList(filtered);
  }
}

// ---- Search filter ----
document.getElementById('search').addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  const filtered = tools.filter(t => t.name.toLowerCase().includes(term) || t.desc.toLowerCase().includes(term));
  renderList(filtered);
});

// Initial render
renderList(tools);