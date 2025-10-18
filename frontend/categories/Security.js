const subcategories = ["All","Face Recognition", "Surveillance AI", "Anomaly Detection", "Cybersecurity Alerts", "Password Management AI", "Threat Prediction", "Smart Lock Control", "Network Monitoring", "Phishing Detection", "Data Encryption AI"];
const tools = [
    
// Security Face Recognition AI Tools
{ name: "Face++", category: "Security", subcategory: "Face Recognition", desc: "AI-powered facial recognition platform for identity verification and security.", url: "https://www.faceplusplus.com", price: "Paid" },
{ name: "Microsoft Azure Face API", category: "Security", subcategory: "Face Recognition", desc: "AI-assisted facial recognition API for applications and security systems.", url: "https://azure.microsoft.com/en-us/services/cognitive-services/face/", price: "Paid" },
{ name: "Amazon Rekognition", category: "Security", subcategory: "Face Recognition", desc: "AI platform for facial recognition and analysis in images and videos.", url: "https://aws.amazon.com/rekognition/", price: "Paid" },
{ name: "Kairos", category: "Security", subcategory: "Face Recognition", desc: "AI-driven facial recognition and emotion detection platform.", url: "https://www.kairos.com", price: "Paid" },
{ name: "FaceFirst", category: "Security", subcategory: "Face Recognition", desc: "AI-powered face recognition system for security and access control.", url: "https://www.facefirst.com", price: "Paid" },


// Security Surveillance AI Tools
{ name: "Eagle Eye Networks", category: "Security", subcategory: "Surveillance AI", desc: "AI-powered cloud video surveillance platform.", url: "https://www.een.com", price: "Paid" },
{ name: "Avigilon AI", category: "Security", subcategory: "Surveillance AI", desc: "AI-assisted video surveillance and analytics platform.", url: "https://www.avigilon.com", price: "Paid" },
{ name: "BriefCam", category: "Security", subcategory: "Surveillance AI", desc: "AI platform providing video analytics and real-time surveillance insights.", url: "https://www.briefcam.com", price: "Paid" },
{ name: "AnyVision", category: "Security", subcategory: "Surveillance AI", desc: "AI-driven facial recognition and surveillance solution.", url: "https://www.anyvision.com", price: "Paid" },
{ name: "VCA AI", category: "Security", subcategory: "Surveillance AI", desc: "AI-based video content analysis for security and surveillance.", url: "https://www.vca.ai", price: "Paid" },


// Security Anomaly Detection AI Tools
{ name: "Darktrace", category: "Security", subcategory: "Anomaly Detection", desc: "AI-powered cybersecurity platform detecting unusual behavior and threats.", url: "https://www.darktrace.com", price: "Paid" },
{ name: "Vectra AI", category: "Security", subcategory: "Anomaly Detection", desc: "AI-assisted network threat detection and anomaly analytics.", url: "https://www.vectra.ai", price: "Paid" },
{ name: "Cynet", category: "Security", subcategory: "Anomaly Detection", desc: "AI platform for detecting security anomalies and automated threat response.", url: "https://www.cynet.com", price: "Paid" },
{ name: "Exabeam", category: "Security", subcategory: "Anomaly Detection", desc: "AI-driven user and entity behavior analytics for anomaly detection.", url: "https://www.exabeam.com", price: "Paid" },
{ name: "Securonix", category: "Security", subcategory: "Anomaly Detection", desc: "AI-powered security analytics platform for detecting abnormal activity.", url: "https://www.securonix.com", price: "Paid" },


// Security Cybersecurity Alerts AI Tools
{ name: "CrowdStrike Falcon", category: "Security", subcategory: "Cybersecurity Alerts", desc: "AI platform providing threat detection and real-time alerts.", url: "https://www.crowdstrike.com", price: "Paid" },
{ name: "Palo Alto Networks Cortex XDR", category: "Security", subcategory: "Cybersecurity Alerts", desc: "AI-assisted platform for detecting threats and generating cybersecurity alerts.", url: "https://www.paloaltonetworks.com/cortex", price: "Paid" },
{ name: "IBM QRadar", category: "Security", subcategory: "Cybersecurity Alerts", desc: "AI-driven security information and event management with alerts.", url: "https://www.ibm.com/security/qradar", price: "Paid" },
{ name: "LogRhythm", category: "Security", subcategory: "Cybersecurity Alerts", desc: "AI-powered platform generating real-time cybersecurity alerts.", url: "https://logrhythm.com", price: "Paid" },
{ name: "Splunk Enterprise Security", category: "Security", subcategory: "Cybersecurity Alerts", desc: "AI-assisted analytics platform providing threat alerts and security insights.", url: "https://www.splunk.com/en_us/software/enterprise-security.html", price: "Paid" },


// Security Password Management AI Tools
{ name: "1Password", category: "Security", subcategory: "Password Management AI", desc: "AI-assisted password manager providing secure storage and suggestions.", url: "https://1password.com", price: "Paid" },
{ name: "LastPass", category: "Security", subcategory: "Password Management AI", desc: "AI-powered password manager with password generation and alerts.", url: "https://www.lastpass.com", price: "Free/Paid" },
{ name: "Dashlane", category: "Security", subcategory: "Password Management AI", desc: "AI-assisted password manager providing secure login and autofill.", url: "https://www.dashlane.com", price: "Free/Paid" },
{ name: "Keeper Security", category: "Security", subcategory: "Password Management AI", desc: "AI-powered password management platform for secure credentials.", url: "https://www.keepersecurity.com", price: "Paid" },
{ name: "Bitwarden", category: "Security", subcategory: "Password Management AI", desc: "AI-assisted password manager providing secure storage and organization.", url: "https://bitwarden.com", price: "Free/Paid" },


// Security Threat Prediction AI Tools
{ name: "IBM X-Force Exchange", category: "Security", subcategory: "Threat Prediction", desc: "AI-powered platform predicting cyber threats and vulnerabilities.", url: "https://exchange.xforce.ibmcloud.com", price: "Free/Paid" },
{ name: "Recorded Future", category: "Security", subcategory: "Threat Prediction", desc: "AI-assisted threat intelligence platform for proactive threat prediction.", url: "https://www.recordedfuture.com", price: "Paid" },
{ name: "FireEye Helix", category: "Security", subcategory: "Threat Prediction", desc: "AI-driven threat prediction and security management platform.", url: "https://www.fireeye.com/solutions/helix.html", price: "Paid" },
{ name: "Anomali", category: "Security", subcategory: "Threat Prediction", desc: "AI platform providing threat intelligence and predictive analytics.", url: "https://www.anomali.com", price: "Paid" },
{ name: "ThreatConnect", category: "Security", subcategory: "Threat Prediction", desc: "AI-assisted threat intelligence and prediction platform.", url: "https://threatconnect.com", price: "Paid" },


// Security Smart Lock Control AI Tools
{ name: "August Smart Lock", category: "Security", subcategory: "Smart Lock Control", desc: "AI-powered smart lock system with remote access and control.", url: "https://august.com", price: "Paid" },
{ name: "Yale Smart Lock", category: "Security", subcategory: "Smart Lock Control", desc: "AI-assisted smart lock platform for home security and access control.", url: "https://www.yalehome.com", price: "Paid" },
{ name: "Schlage Encode", category: "Security", subcategory: "Smart Lock Control", desc: "AI-powered smart lock with Wi-Fi connectivity and security management.", url: "https://www.schlage.com", price: "Paid" },
{ name: "Kwikset Kevo", category: "Security", subcategory: "Smart Lock Control", desc: "AI-assisted smart lock system with Bluetooth and remote access.", url: "https://www.kwikset.com", price: "Paid" },
{ name: "Level Lock", category: "Security", subcategory: "Smart Lock Control", desc: "AI-powered smart lock integrated with mobile app control and automation.", url: "https://www.level.co", price: "Paid" },


// Security Network Monitoring AI Tools
{ name: "Paessler PRTG", category: "Security", subcategory: "Network Monitoring", desc: "AI-powered network monitoring platform for IT infrastructure.", url: "https://www.paessler.com/prtg", price: "Paid" },
{ name: "Nagios XI", category: "Security", subcategory: "Network Monitoring", desc: "AI-assisted platform for monitoring network devices and traffic.", url: "https://www.nagios.com/products/nagios-xi/", price: "Paid" },
{ name: "SolarWinds Network Performance Monitor", category: "Security", subcategory: "Network Monitoring", desc: "AI-driven tool for network monitoring and performance analysis.", url: "https://www.solarwinds.com/network-performance-monitor", price: "Paid" },
{ name: "Zabbix", category: "Security", subcategory: "Network Monitoring", desc: "AI-assisted open-source network monitoring platform.", url: "https://www.zabbix.com", price: "Free/Paid" },
{ name: "LogicMonitor", category: "Security", subcategory: "Network Monitoring", desc: "AI-powered platform for cloud and network infrastructure monitoring.", url: "https://www.logicmonitor.com", price: "Paid" },


// Security Phishing Detection AI Tools
{ name: "IRONSCALES", category: "Security", subcategory: "Phishing Detection", desc: "AI-powered platform detecting and preventing phishing attacks.", url: "https://ironscales.com", price: "Paid" },
{ name: "KnowBe4", category: "Security", subcategory: "Phishing Detection", desc: "AI-assisted phishing simulation and detection platform.", url: "https://www.knowbe4.com", price: "Paid" },
{ name: "Barracuda Sentinel", category: "Security", subcategory: "Phishing Detection", desc: "AI platform detecting phishing attacks and email threats.", url: "https://www.barracuda.com/products/sentinel", price: "Paid" },
{ name: "Proofpoint Email Protection", category: "Security", subcategory: "Phishing Detection", desc: "AI-driven email security and phishing detection tool.", url: "https://www.proofpoint.com", price: "Paid" },
{ name: "Microsoft Defender for Office 365", category: "Security", subcategory: "Phishing Detection", desc: "AI-powered platform protecting against phishing and malware.", url: "https://www.microsoft.com/security/business/threat-protection/office-365", price: "Paid" },


// Security Data Encryption AI Tools
{ name: "Vormetric Data Security", category: "Security", subcategory: "Data Encryption AI", desc: "AI-powered platform providing enterprise data encryption and protection.", url: "https://www.thalesgroup.com/en/markets/digital-identity-and-security/data-encryption", price: "Paid" },
{ name: "Symantec Encryption", category: "Security", subcategory: "Data Encryption AI", desc: "AI-assisted data encryption platform for secure communications.", url: "https://www.broadcom.com/products/cyber-security/encryption", price: "Paid" },
{ name: "McAfee Complete Data Protection", category: "Security", subcategory: "Data Encryption AI", desc: "AI-driven encryption and data loss prevention solution.", url: "https://www.mcafee.com/enterprise/en-us/products/complete-data-protection.html", price: "Paid" },
{ name: "IBM Guardium", category: "Security", subcategory: "Data Encryption AI", desc: "AI-powered platform for data encryption, monitoring, and compliance.", url: "https://www.ibm.com/security/data-security/guardium", price: "Paid" },
{ name: "Trend Micro Endpoint Encryption", category: "Security", subcategory: "Data Encryption AI", desc: "AI-assisted platform for secure endpoint data encryption.", url: "https://www.trendmicro.com/en_us/business/products/user-protection/endpoint/endpoint-encryption.html", price: "Paid" },
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