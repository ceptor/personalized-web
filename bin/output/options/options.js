/**
 * Copyright 2010 by Anadan. All rights reserved.
 * @author Anadan (aaafwd@gmail.com)
 */

function P(){this.f=true;this.a=new l;this.c=null;Q(this,true);da(this);this.display(v(this.a),true)}
function da(a){function b(){var c=!!B("tab-open").checked;w(a.a,"aaa.pweb.tabopen",c);c=!!B("show-page-action").checked;w(a.a,"aaa.pweb.show_page_action",c)}B("tab-open").addEventListener("click",b,false);B("show-page-action").addEventListener("click",b,false);B("add-new-rule").addEventListener("click",function(){var c=B("rules-container"),e=B("rule-template");e=F(e);R(a,e,{enabled:true,urlRegex:"^http://"});c.appendChild(e);Q(a,false);L(e,"collapsed");K(e,"expanded");window.scrollTo(0,e.offsetTop);
S(a,e);C("input-rule-name",e)[0].select()},false);B("save-changes").addEventListener("click",function(){T(a)},false);B("dump-rules").addEventListener("click",function(){U(a,G("should_save_changes"))&&V(a,v(a.a))},false);B("load-dumped-rules").addEventListener("click",function(){if(U(a,G("should_save_changes"))){V(a,null);var c=prompt(G("enter_dump_prompt"),"");if(c){var e;try{e=typeof c=="string"?JSON.parse(c):c}catch(g){alert(G("error_json_parse",""+g))}if(e){c=v(a.a);c=c.concat(e);a.display(c);
Q(a,false)}}}},false);B("rules-container").addEventListener("change",function(){Q(a,false)},false);window.addEventListener("load",function(){B("tab-open").checked=!!!!t(a.a,"aaa.pweb.tabopen");B("show-page-action").checked=!!m(a.a)},false);window.addEventListener("keydown",function(c){var e=c.keyCode;if(e==8||e==13||e==45||e==46||c.ctrlKey&&(e==67||e==86||e==88||e==90))window.setTimeout(function(){ea(a,c.target);Q(a,false)},0);else if(e==27){V(a,null);a.c=null;W(a)}},true);window.addEventListener("keydown",
function(c){if(a.f){c=c.target&&c.target.tagName;if(c=="INPUT"||c=="TEXTAREA")window.setTimeout(function(){Q(a,false)},0)}},false);window.addEventListener("click",function(c){a:{for(var e=B("popup-menu"),g,i=c&&c.target;i;i=i.parentNode){if(i==e)if(fa(a,c.target.id)){g=null;break}else break a;if(M(i,"rule-options")){g=i;break}}if(g==a.c)g=null;a.c=g;W(a)}e=c.target;g=N(e,["rule-expander","rule-header"]);if(!g)for(i=e;i;i=i.parentNode)if(M(i,"rule-expander")){g=true;break}if(g){e=X(a,e);g=H(e);for(i=
0;i<g.length;i++)if(g[i]=="expanded")g[i]="collapsed";else if(g[i]=="collapsed")g[i]="expanded";e.className=g.join(" ");e=e.getElementsByTagName("TEXTAREA");for(g=0;i=e[g];++g)ea(a,i)}e=c.target;if(M(e,"add-new-filter")){e=C("filters-container",X(a,e))[0];g=B("filter-template");g=F(g);ga(a,g,{});e.appendChild(g)}c=c.target;M(c,"rule-enabled")&&Y(a,X(a,c))},false);window.addEventListener("resize",function(){a.c=null;W(a)},false)}
P.prototype.display=function(a,b){var c=B("rules-container"),e=B("rule-template");D(c);for(var g=0,i;i=a[g];++g){var d=F(e);R(this,d,i);g||ha(this,d,true);c.appendChild(d)}b&&Z(this)};function V(a,b){a=B("dump-rules-output");if(b){b=JSON.stringify(b).replace(/  /g," \\u0020");a.value=b;a.style.display="";a.select()}else a.style.display="none"}function S(a,b){L(b,"highlight");window.setTimeout(function(){K(b,"highlight")},0)}
function T(a){var b=a.a,c=Z(a);w(b,"aaa.pweb.filters",c);w(b,"aaa.pweb.filters_update_time",Date.now());for(b=B("rules-container").firstChild;b;b=b.nextSibling)ia(a,b);Q(a,true)}function Z(a){var b=[];B("errors").innerHTML="";for(var c=B("rules-container").firstChild;c;c=c.nextSibling){var e=ja(a,c);b.push(e)}return b}
function ja(a,b){var c={},e=C("input-rule-name",b)[0];c.name=e.value||G("rule_name_noname");e=C("input-url-pattern",b)[0];c.urlRegex=e.value;c.urlRegex?$(a,c.urlRegex,G("error_invalid_match_regex",c.name)):ka(a,G("error_empty_match_regex",c.name));e=C("input-url-exclude",b)[0];c.urlExcludeRegex=e.value;$(a,c.urlExcludeRegex,G("error_invalid_exclude_regex",c.name));e=C("rule-enabled",b)[0];c.enabled=!!e.checked;e=C("intercept-doc-write",b)[0];c.preserveDocWrite=!e.checked;e=C("rule-css",b)[0];c.css=
e.value;e=C("rule-html",b)[0];c.html=e.value;e=C("rule-js",b)[0];c.js=e.value;e=[];for(b=C("filters-container",b)[0].firstChild;b;b=b.nextSibling){var g={},i=C("filter-tags",b)[0];g.tags=i.value;i=C("filter-attr",b)[0];g.attribute=i.value;i=C("filter-value",b)[0];g.value=i.value;i=C("filter-value-regex",b)[0];g.valueRegex=i.value;$(a,g.valueRegex,G("error_invalid_remover_regex",[c.name,e.length+1]));i=true;for(var d in g)if(g[d]){i=false;break}i||e.push(g)}c.filters=e;return c}
function $(a,b,c){try{a.X=new RegExp(b,"i")}catch(e){ka(a,c+": "+b)}}function ka(a,b){B("errors").innerHTML+=b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;")+"<br>"}
function R(a,b,c){b.removeAttribute("id");b.style.display="";C("input-rule-name",b)[0].value=c.name||G("rule_name_noname");C("input-url-pattern",b)[0].value=c.urlRegex||"";C("input-url-exclude",b)[0].value=c.urlExcludeRegex||"";C("rule-enabled",b)[0].checked=!!c.enabled;C("intercept-doc-write",b)[0].checked=!c.preserveDocWrite;for(var e=C("filters-container",b)[0],g=B("filter-template"),i=0,d;d=c.filters&&c.filters[i];++i){var f=F(g);ga(a,f,d);e.appendChild(f)}C("rule-css",b)[0].value=c.css||"";C("rule-html",
b)[0].value=c.html||"";C("rule-js",b)[0].value=c.js||"";ia(a,b);Y(a,b)}function ia(a,b){a=C("input-rule-name",b)[0];var c=C("rule-name",b)[0];E(c,a.value);a=C("input-url-pattern",b)[0];b=C("rule-url-pattern",b)[0];E(b,a.value)}
function ha(a,b,c){c?K(b,"adblocker"):L(b,"adblocker");for(var e=["INPUT","TEXTAREA"],g=0,i;i=e[g];++g){i=b.getElementsByTagName(i);for(var d=0,f;f=i[d];++d)if(!N(f,["input-url-pattern","input-url-exclude","rule-enabled"])){O(f,"readonly",c);f.type=="checkbox"&&O(f,"disabled",c)}}Y(a,b)}function Y(a,b){!C("rule-enabled",b)[0].checked?K(b,"disabled"):L(b,"disabled")}
function ga(a,b,c){b.removeAttribute("id");b.style.display="";C("filter-tags",b)[0].value=c.tags||"";C("filter-attr",b)[0].value=c.attribute||"";C("filter-value",b)[0].value=c.value||"";C("filter-value-regex",b)[0].value=c.valueRegex||""}function ea(a,b){if(!(!b||b.tagName!="TEXTAREA"||!N(b,["rule-css","rule-js","rule-html"])))if(b.value){a=Math.max(80,b.scrollHeight-4);a=Math.min(a,1200);b.style.height=a>80?a+"px":""}else b.style.height=""}
function X(a,b){for(;b;b=b.parentNode)if(N(b,["rule-template","filter"]))return b;return null}
function fa(a,b){var c=X(a,a.c),e=c.parentNode;if(b=="menu-move-up"){(b=c.previousSibling)&&!M(b,"adblocker")&&e.insertBefore(c,b);Q(a,false)}else if(b=="menu-move-down"){(b=c.nextSibling)&&e.insertBefore(c,b.nextSibling);Q(a,false)}else if(b=="menu-dump"){V(a,ja(a,c));window.scrollTo(0,B("dump-rules-output").offsetTop);return true}else if(b=="menu-clone"){b=F(c);e.insertBefore(b,c.nextSibling);M(b,"adblocker")&&ha(a,b,false);Q(a,false);window.scrollTo(0,b.offsetTop);S(a,b);return true}else if(b==
"menu-delete"){e.removeChild(c);Q(a,false);return true}return false}function W(a){var b=B("popup-menu");if(a.c){b.style.display="";var c=X(a,a.c);b.className=M(c,"adblocker")?"adblocker":c.parentNode==B("rules-container")?"rule":"filter";a=a.c.getBoundingClientRect();c=b.getBoundingClientRect();b.style.top=window.scrollY+a.bottom+"px";b.style.left=Math.max(0,window.scrollX+a.right-c.width)+"px"}else b.style.display="none"}
function U(a,b){if(!a.f){(b=confirm(b||G("save_changes")))&&T(a);return b}return true}function Q(a,b){if(!b){var c=v(a.a),e=Z(a);if(c.length==e.length&&JSON.stringify(c)==JSON.stringify(e))b=true}a.f=b;O(B("save-changes"),"disabled",a.f);if(!a.f)B("dump-rules-output").style.display="none"}(function(){var a=new P;window.onbeforeunload=function(){if(!a.f)return G("discard_changes")}})();