(function(){"use strict";function r(i){window.showInstruction?window.showInstruction(i,"ctl00_ibtnCloseInstructionBox","ctl00_lblInstrctionTitle","Ø¨Ø±Ø§Ù…Ø¬ ØªØ¹Ù„ÙŠÙ…ÙŠØ© eduwebdev.net","350","170"):alert(i)}function d(){var s;if(!window.location.href.includes("noor.moe.gov.sa")){r("ÙŠÙ…ÙƒÙ† Ø§Ù„Ø§Ø³ØªÙØ§Ø¯Ø© Ù…Ù† Ø§Ù„Ø§Ø¯Ø§Ø© ÙÙŠ Ù…ÙˆÙ‚Ø¹ Ù†Ø¸Ø§Ù… Ù†ÙˆØ± ÙÙ‚Ø·");return}if((s=window.hideInstructionDialog)==null||s.call(window),document.querySelector("#eduwebdev_dot_net_ExportContainer"))return;const n=document.querySelector(".MSRS-RVC"),c=n==null?void 0:n.parentElement;if(!n||!c){r("Ø§Ø¶ØºØ· Ø§Ù„Ø±Ø§Ø¨Ø· Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ¸Ù‡Ø± Ø§Ù„ØªÙ‚Ø±ÙŠØ± Ø§Ù„Ù…Ø±Ø§Ø¯ ØªØµØ¯ÙŠØ±Ù‡ Ø¹Ù„Ù‰ Ø§Ù„Ø´Ø§Ø´Ø©");return}const u=n.id,o=document.createElement("div");o.setAttribute("style","padding: 20px; text-align: center;"),o.setAttribute("id","eduwebdev_dot_net_ExportContainer");for(const e of["pdf","excel","word"]){const t=document.createElement("input");t.type="submit",t.name="eduwebdev_dot_net_ExportButton_"+e,t.id="eduwebdev_dot_net_ExportButton_"+e,t.value=`ØªØµØ¯ÙŠØ± ${e.toUpperCase()}`,t.title=`ØªØµØ¯ÙŠØ± ${e.toUpperCase()}`,t.classList.add("btnstyle"),t.addEventListener("click",()=>window.$find(u).exportReport(e==="excel"?"EXCELOPENXML":e)),o.append(t)}c.prepend(o)}window.EDUWEBDEVDOTNET=d,d()})();