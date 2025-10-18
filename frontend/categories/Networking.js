const subcategories = ["All","Network Monitoring AI", "Traffic Analysis", "Threat Detection", "Performance Optimization", "Network Automation", "Anomaly Detection", "Cybersecurity AI", "Load Balancing AI", "Wi-Fi Optimization", "Packet Analysis"];
const tools = [
    // Networking Network Monitoring AI Tools
{ name: "Paessler PRTG", category: "Networking", subcategory: "Network Monitoring AI", desc: "AI-powered network monitoring for performance, traffic, and uptime.", url: "https://www.paessler.com/prtg", price: "Paid" },
{ name: "SolarWinds NPM", category: "Networking", subcategory: "Network Monitoring AI", desc: "AI-assisted network performance monitoring and alerting platform.", url: "https://www.solarwinds.com/network-performance-monitor", price: "Paid" },
{ name: "Datadog Network Monitoring", category: "Networking", subcategory: "Network Monitoring AI", desc: "AI-driven monitoring of network traffic, devices, and applications.", url: "https://www.datadoghq.com/network-monitoring", price: "Paid" },
{ name: "Zabbix", category: "Networking", subcategory: "Network Monitoring AI", desc: "Open-source AI-enabled network and infrastructure monitoring tool.", url: "https://www.zabbix.com", price: "Free/Paid" },
{ name: "LogicMonitor", category: "Networking", subcategory: "Network Monitoring AI", desc: "AI-powered platform for proactive network and infrastructure monitoring.", url: "https://www.logicmonitor.com", price: "Paid" },


// Networking Traffic Analysis AI Tools
{ name: "Cisco Stealthwatch", category: "Networking", subcategory: "Traffic Analysis", desc: "AI-driven network traffic analysis and threat detection.", url: "https://www.cisco.com/c/en/us/products/security/stealthwatch", price: "Paid" },
{ name: "NetFlow Analyzer", category: "Networking", subcategory: "Traffic Analysis", desc: "AI-assisted network traffic analytics and bandwidth monitoring.", url: "https://www.manageengine.com/products/netflow/", price: "Paid" },
{ name: "Darktrace Network", category: "Networking", subcategory: "Traffic Analysis", desc: "AI cybersecurity platform analyzing network traffic for anomalies.", url: "https://www.darktrace.com", price: "Paid" },
{ name: "Paessler PRTG", category: "Networking", subcategory: "Traffic Analysis", desc: "AI-powered traffic monitoring and network bandwidth analysis.", url: "https://www.paessler.com/prtg", price: "Paid" },
{ name: "Wireshark AI Plugins", category: "Networking", subcategory: "Traffic Analysis", desc: "AI-assisted packet and traffic analysis for advanced network monitoring.", url: "https://www.wireshark.org", price: "Free" },


// Networking Threat Detection AI Tools
{ name: "Darktrace", category: "Networking", subcategory: "Threat Detection", desc: "AI cybersecurity platform detecting advanced threats in real-time.", url: "https://www.darktrace.com", price: "Paid" },
{ name: "Vectra AI", category: "Networking", subcategory: "Threat Detection", desc: "AI platform for detecting and responding to network security threats.", url: "https://www.vectra.ai", price: "Paid" },
{ name: "CrowdStrike Falcon", category: "Networking", subcategory: "Threat Detection", desc: "AI-powered endpoint and network threat detection platform.", url: "https://www.crowdstrike.com", price: "Paid" },
{ name: "Cisco Secure Network Analytics", category: "Networking", subcategory: "Threat Detection", desc: "AI-enabled solution for identifying and mitigating network threats.", url: "https://www.cisco.com/c/en/us/products/security/secure-network-analytics", price: "Paid" },
{ name: "Fortinet FortiAI", category: "Networking", subcategory: "Threat Detection", desc: "AI cybersecurity solution for automated threat detection and response.", url: "https://www.fortinet.com", price: "Paid" },


// Networking Performance Optimization AI Tools
{ name: "Cisco DNA Center", category: "Networking", subcategory: "Performance Optimization", desc: "AI-driven platform for network performance optimization and automation.", url: "https://www.cisco.com/c/en/us/products/cloud-systems-management/dna-center", price: "Paid" },
{ name: "Juniper Mist AI", category: "Networking", subcategory: "Performance Optimization", desc: "AI platform optimizing Wi-Fi performance and network operations.", url: "https://www.juniper.net/us/en/products-services/wireless/mist-ai", price: "Paid" },
{ name: "NetBrain", category: "Networking", subcategory: "Performance Optimization", desc: "AI network automation platform for performance and issue resolution.", url: "https://www.netbraintech.com", price: "Paid" },
{ name: "AppNeta", category: "Networking", subcategory: "Performance Optimization", desc: "AI-powered network and application performance monitoring and optimization.", url: "https://www.appneta.com", price: "Paid" },
{ name: "SolarWinds NPM", category: "Networking", subcategory: "Performance Optimization", desc: "AI-assisted platform for optimizing network performance and uptime.", url: "https://www.solarwinds.com/network-performance-monitor", price: "Paid" },


// Networking Network Automation AI Tools
{ name: "Cisco DNA Center", category: "Networking", subcategory: "Network Automation", desc: "AI platform automating network provisioning, management, and policies.", url: "https://www.cisco.com/c/en/us/products/cloud-systems-management/dna-center", price: "Paid" },
{ name: "Juniper Mist AI", category: "Networking", subcategory: "Network Automation", desc: "AI-driven network automation for Wi-Fi, LAN, and WAN management.", url: "https://www.juniper.net/us/en/products-services/wireless/mist-ai", price: "Paid" },
{ name: "NetBrain", category: "Networking", subcategory: "Network Automation", desc: "AI platform automating network workflows and diagnostics.", url: "https://www.netbraintech.com", price: "Paid" },
{ name: "Ansible by Red Hat", category: "Networking", subcategory: "Network Automation", desc: "AI-assisted automation platform for network configuration and management.", url: "https://www.ansible.com", price: "Free/Paid" },
{ name: "StackStorm", category: "Networking", subcategory: "Network Automation", desc: "Open-source AI-driven automation platform for IT and network operations.", url: "https://stackstorm.com", price: "Free/Paid" },


// Networking Anomaly Detection AI Tools
{ name: "Darktrace", category: "Networking", subcategory: "Anomaly Detection", desc: "AI platform detecting network anomalies and unusual behavior in real time.", url: "https://www.darktrace.com", price: "Paid" },
{ name: "Vectra AI", category: "Networking", subcategory: "Anomaly Detection", desc: "AI-driven detection of abnormal network activity and threats.", url: "https://www.vectra.ai", price: "Paid" },
{ name: "Cisco Stealthwatch", category: "Networking", subcategory: "Anomaly Detection", desc: "AI-based anomaly detection for traffic patterns and potential attacks.", url: "https://www.cisco.com/c/en/us/products/security/stealthwatch", price: "Paid" },
{ name: "ExtraHop Reveal(x)", category: "Networking", subcategory: "Anomaly Detection", desc: "AI-powered network detection and response for anomalies and threats.", url: "https://www.extrahop.com/products/revealx/", price: "Paid" },
{ name: "IBM QRadar", category: "Networking", subcategory: "Anomaly Detection", desc: "AI analytics for identifying anomalies and security incidents in networks.", url: "https://www.ibm.com/security/security-intelligence/qradar", price: "Paid" },


// Networking Cybersecurity AI Tools
{ name: "Darktrace", category: "Networking", subcategory: "Cybersecurity AI", desc: "AI cybersecurity platform for real-time threat detection and response.", url: "https://www.darktrace.com", price: "Paid" },
{ name: "CrowdStrike Falcon", category: "Networking", subcategory: "Cybersecurity AI", desc: "AI-driven endpoint security and network threat prevention.", url: "https://www.crowdstrike.com", price: "Paid" },
{ name: "Vectra AI", category: "Networking", subcategory: "Cybersecurity AI", desc: "AI platform for detecting and responding to advanced cyber threats.", url: "https://www.vectra.ai", price: "Paid" },
{ name: "Fortinet FortiAI", category: "Networking", subcategory: "Cybersecurity AI", desc: "AI cybersecurity solution for automated threat intelligence and protection.", url: "https://www.fortinet.com", price: "Paid" },
{ name: "Palo Alto Networks Cortex XDR", category: "Networking", subcategory: "Cybersecurity AI", desc: "AI-powered extended detection and response platform for networks.", url: "https://www.paloaltonetworks.com/cortex", price: "Paid" },


// Networking Load Balancing AI Tools
{ name: "F5 BIG-IP", category: "Networking", subcategory: "Load Balancing AI", desc: "AI-driven application delivery and load balancing platform.", url: "https://www.f5.com/products/big-ip", price: "Paid" },
{ name: "Citrix ADC", category: "Networking", subcategory: "Load Balancing AI", desc: "AI-powered application and load balancing solution.", url: "https://www.citrix.com/products/citrix-adc/", price: "Paid" },
{ name: "Kemp LoadMaster", category: "Networking", subcategory: "Load Balancing AI", desc: "AI-assisted load balancing and application optimization platform.", url: "https://kemptechnologies.com", price: "Paid" },
{ name: "Nginx Plus", category: "Networking", subcategory: "Load Balancing AI", desc: "AI-supported load balancing and web server optimization solution.", url: "https://www.nginx.com/products/nginx/", price: "Paid" },
{ name: "A10 Thunder ADC", category: "Networking", subcategory: "Load Balancing AI", desc: "AI-based load balancing and application delivery controller.", url: "https://www.a10networks.com/products/thunder-adc/", price: "Paid" },


// Networking Wi-Fi Optimization AI Tools
{ name: "Juniper Mist AI", category: "Networking", subcategory: "Wi-Fi Optimization", desc: "AI-driven platform for Wi-Fi performance optimization and monitoring.", url: "https://www.juniper.net/us/en/products-services/wireless/mist-ai", price: "Paid" },
{ name: "Cisco DNA Center", category: "Networking", subcategory: "Wi-Fi Optimization", desc: "AI-powered Wi-Fi optimization and network performance management.", url: "https://www.cisco.com/c/en/us/products/cloud-systems-management/dna-center", price: "Paid" },
{ name: "Aruba ESP", category: "Networking", subcategory: "Wi-Fi Optimization", desc: "AI-driven Wi-Fi optimization and predictive network analytics.", url: "https://www.arubanetworks.com/solutions/ai-powered-esp/", price: "Paid" },
{ name: "ExtremeCloud IQ", category: "Networking", subcategory: "Wi-Fi Optimization", desc: "AI-enabled cloud platform for Wi-Fi management and optimization.", url: "https://www.extremenetworks.com", price: "Paid" },
{ name: "NETSCOUT Omnis", category: "Networking", subcategory: "Wi-Fi Optimization", desc: "AI platform monitoring and optimizing Wi-Fi network performance.", url: "https://www.netscout.com", price: "Paid" },


// Networking Packet Analysis AI Tools
{ name: "Wireshark", category: "Networking", subcategory: "Packet Analysis", desc: "AI-assisted open-source tool for packet capture and network analysis.", url: "https://www.wireshark.org", price: "Free" },
{ name: "SolarWinds Deep Packet Inspection", category: "Networking", subcategory: "Packet Analysis", desc: "AI-powered packet analysis for traffic and network performance.", url: "https://www.solarwinds.com/network-performance-monitor", price: "Paid" },
{ name: "Paessler PRTG", category: "Networking", subcategory: "Packet Analysis", desc: "AI-enabled packet sniffing and network traffic analysis platform.", url: "https://www.paessler.com/prtg", price: "Paid" },
{ name: "ntopng", category: "Networking", subcategory: "Packet Analysis", desc: "AI-assisted network traffic monitoring and packet analysis tool.", url: "https://www.ntop.org/products/traffic-analysis/ntop/", price: "Free/Paid" },
{ name: "ManageEngine NetFlow Analyzer", category: "Networking", subcategory: "Packet Analysis", desc: "AI platform analyzing network packets and traffic flows.", url: "https://www.manageengine.com/products/netflow/", price: "Paid" },
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