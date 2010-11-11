(function(b){var n=document,i=b.support,q=b.event.special;"polyfillspan abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section source summary time track video".replace(/\w+/g,function(a){n.createElement(a)});i.dynamicHTML5=!!b("<video><div></div></video>")[0].innerHTML;b("html").addClass("js-on").removeClass("js-off");b.webshims={version:"pre1.0.4",useImportantStyles:true,fix:{},fixHTML5:function(){var a,e;return i.dynamicHTML5?function(d){return d}:
function(d){if(typeof d!="string")return d;if(!a){e=n.body;a=n.createElement("div");a.style.display="none"}var c=a.cloneNode(false);e.appendChild(c);c.innerHTML=d;e.removeChild(c);return c.childNodes}}(),createReadyEvent:function(){var a=function(e,d){if(p[d]||h.features[d])e+="Ready";if(!(q[e]&&q[e].add)){q[e]=b.extend(q[e]||{},{add:function(c){c.handler.call(this,b.Event(e))}});b.event.trigger(e)}};return function(e,d){if(e){b.isArray(e)||(e=[e]);b.each(e,function(c,g){if(!(d&&p[g]&&p[g].noAutoCallback)){a(g+
"SYS",g,d);a(g,g,d)}})}}}(),moduleList:[],modules:{},features:{},featureList:[],loader:{basePath:function(){var a=b("script");a=a[a.length-1].src.split("?")[0];return a.slice(0,a.lastIndexOf("/")+1)}(),combinations:{},addModule:function(a,e){p[a]=e},loadList:function(){var a=[];return function(e){var d=[];b.each(e,function(c,g){var f=p[g];if("test"in f&&f.test())s(g);else{f.css&&m.loadCSS(f.css);d.push(g);f.loadInit&&f.loadInit()}});h.debug||b.each(m.combinations||[],function(c,g){var f=true;b.each(g,
function(j,k){if(b.inArray(k,d)===-1||b.inArray(k,a)!==-1)return f=false});if(f){a=a.concat(g);m.loadScript(c,false,g);return false}});b.each(d,function(c,g){if(b.inArray(g,a)==-1)m.loadScript(p[g].src||g,false,g)})}}(),makePath:function(a){if(a.indexOf("://")!=-1||a.indexOf("/")===0)return a;if(a.indexOf(".js")==-1&&a.indexOf(".css")==-1)a+=".js";return m.basePath+a},loadCSS:function(){var a,e=[];return function(d){d=this.makePath(d);if(b.inArray(d,e)==-1){a=a||n.getElementsByTagName("head")[0]||
n.body;e.push(d);b('<link rel="stylesheet" href="'+d+'" />').prependTo(a).attr({href:d,rel:"stylesheet"})}}}(),loadScript:function(){var a,e=[];return function(d,c,g){d=m.makePath(d);if(b.inArray(d,e)==-1){a=a||n.getElementsByTagName("head")[0]||n.body;if(!a||!a.appendChild)setTimeout(function(){m.loadScript(d,c,g)},9);else{var f=n.createElement("script"),j=function(k){if(!this.readyState||this.readyState=="loaded"||this.readyState=="complete"){f.onload=null;f.onerror=null;f.onreadystatechange=null;
c&&c(k,this);s(g,true);f=null}};f.setAttribute("async","async");f.src=d;f.onload=j;f.onerror=j;f.onreadystatechange=j;a.appendChild(f);f.async=true;e.push(d)}}}}()},ready:function(a,e,d,c){if(typeof a=="string")a=a.split(" ");c||(a=b.map(a,function(f){var j=f;if(d&&j!="ready")j+="SYS";if(p[f]||h.features[f])j+="Ready";return j}));if(a.length){c=a.shift();var g=function(){h.ready(a,e,d,true)};c=="ready"?b(g):b(n).one(c,g)}else e(b,h,window,document)},capturingEvents:function(a,e){if(n.addEventListener){if(typeof a==
"string")a=[a];b.each(a,function(d,c){var g=function(f){f=b.event.fix(f);if(e){var j=f.preventDefault;f.preventDefault=function(){j.apply(this,arguments);clearTimeout(b.data(f.target,"maybePrevented"+f.type));b.data(f.target,"maybePrevented"+f.type,setTimeout(function(){b.removeData(f.target,"maybePrevented"+f.type)},90))}}return b.event.handle.call(this,f)};q[c]=q[c]||{};q[c].setup||q[c].teardown||b.extend(q[c],{setup:function(){this.addEventListener(c,g,true)},teardown:function(){this.removeEventListener(c,
g,true)}})})}},attr:function(){var a=[{}],e=function(d){var c=b.attr;b.attr=function(g,f,j,k,l){if(!d[f]||g.nodeType!==1||d[f].elementNames[0]!=="*"&&b.inArray((g.nodeName||"").toLowerCase(),d[f].elementNames)===-1)return c(g,f,j,k,l);var r=function(){return c(g,f,j,k,l)};if(j===void 0)return d[f].getter(g,r,j,k,l);d[f].setter(g,j,r,k,l)}};e(a[0]);return function(d,c){c.elementNames=c.elementNames||["*"];if(c.setter){if(!b.isFunction(c.setter))c.setter=function(j,k,l){return l()}}else c.setter=function(){throw d+
" is readonly";};if(!c.getter||!b.isFunction(c.getter))c.getter=function(j,k){return k()};if(typeof c.elementNames=="string")c.elementNames=[c.elementNames];var g=false;b.each(a,function(j,k){if(!k[d]){k[d]=c;g=true;return false}});if(!g){var f={};f[d]=c;e(f);a.push(f)}}}(),createBooleanAttrs:function(a,e){if(typeof name==="string")a=[a];b.each(a,function(d,c){h.attr(c,{elementNames:e,getter:function(g){return typeof g[c]=="boolean"?g[c]:!!(g.attributes[c]||{}).specified},setter:function(g,f){(f=
!!f)?g.setAttribute(c,c):g.removeAttribute(c);g[c]=f}})})},addMethod:function(a,e){var d=b.fn[a].elementNames||["*"];if(typeof d=="string")d=[ext.elementNames];b.fn[a]=function(){var c=arguments,g;this.each(function(){if(d[0]=="*"||b.inArray((this.nodeName||"").toLowerCase(),d)!==-1){g=e.apply(this,c);return g!==void 0}});return g===void 0?this:g};b.fn[a].elementNames=d;b.fn[a].shim=true},addMethodName:function(a,e){if(!(b.fn[a]&&"shim"in b.fn[a])){b.fn[a]=function(){var d=arguments,c;this.each(function(){if(this[a]){c=
this[a].apply(this,d);if(c!==void 0)return false}});return c!==void 0?c:this};b.fn[a].shim=false;b.fn[a].elementNames=e}},addPolyfill:function(a,e){e=e||{};var d=e.feature||a,c=h;if(!c.features[d]){c.features[d]=[];c.featureList.push(d)}c.features[d].push(a);m.addModule(a,e);c.moduleList.push(a);b.each(e.combination||[],function(g,f){if(t[f])t[f].push(a);else t[f]=[a]});if(e.methodNames){if(!b.isArray(e.methodNames))e.methodNames=[e.methodNames];b.each(e.methodNames,function(g,f){h.addMethodName(f.name,
f.elementNames)})}},polyfill:function(a,e){var d=this,c=d.loader,g=[],f=function(){b("html").removeClass("loading-polyfills long-loading-polyfills");b(window).unbind("load.loadingPolyfills error.loadingPolyfills");clearTimeout(j)},j;e=e||b.noop;a=a||d.featureList;if(a=="lightweight")a=h.light;if(typeof a=="string")a=a.split(" ");if(!b.isReady){b("html").addClass("loading-polyfills");b(window).bind("load.loadingPolyfills error.loadingPolyfills",f);j=setTimeout(function(){b("html").addClass("long-loading-polyfills")},
400)}h.useImportantStyles&&b("html").addClass("polyfill-important");h.ready(a,function(){f();e(b,h,window,document)});b.each(a,function(k,l){l!==d.features[l][0]&&d.ready(d.features[l],function(){s(l)},true);g=g.concat(d.features[l])});c.loadCSS("shim.css");c.loadList(g)},getID:function(){var a=(new Date).getTime();return function(e){e=b(e);var d=e.attr("id");if(!d){a++;d="elem-id-"+a;e.attr("id",d)}return d}}(),activeLang:function(){var a=[navigator.browserLanguage||navigator.language||""],e=b("html").attr("lang"),
d;e&&a.push(e);return function(c,g,f){if(c)if(!g||!f){if(c!==a[0]){a[0]=c;clearTimeout(d);d=setTimeout(function(){b(n).triggerHandler("htmlExtLangChange",a)},9)}}else{g=p[g].options;var j=function(l){if(b.inArray(l,k)!==-1){m.loadScript(g.langSrc+l+".js",function(){c[l]&&f(c[l])});return true}return false},k=g&&g.availabeLangs;b.each(a,function(l,r){var u=r.split("-")[0];if(c[r]||c[u]){f(c[r]||c[u]);return false}if(k&&g.langSrc&&(j(r)||j(u)))return false})}return a}}()};var h=b.webshims,s=h.createReadyEvent,
m=h.loader,p=h.modules,t=m.combinations,o=h.addPolyfill;(function(){var a=[];b.extend(h,{addReady:function(e){var d=function(c){b(function(){e(c)})};a.push(d);d(n)},triggerDomUpdate:function(e){e&&b.each(a,function(d,c){c(e)})}})})();b.fn.htmlWebshim=function(a){a=this.html(a?h.fixHTML5(a):a);a===this&&b.isReady&&this.each(function(){h.triggerDomUpdate(this)});return a};b.each(["after","before","append","prepend"],function(a,e){b.fn[e+"Webshim"]=function(d){d=b(h.fixHTML5(d));this[e](d);b.isReady&&
d.each(function(){h.triggerDomUpdate(this)});return this}});b.each({height:["height","innerHeight","outerHeight"],width:["width","innerWidth","outerWidth"]},function(a,e){b.each(e,function(d,c){b.fn["get"+c]=function(){if(!this[0])return false;var g=b.fn[c].apply(this,arguments),f;if(!this[0].offsetHeight&&!this[0].offsetWidth){f=parseInt(this.css(a),10);if(!f)return false;g+=f}return g}})});s("htmlExtLangChange",true);m.addModule("jquery-ui",{src:"http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js",
test:function(){return!!(b.widget&&b.Widget)}});m.addModule("input-widgets",{src:"",test:function(){return!(b.widget&&!(b.datepicker||b.fn.slider))}});m.addModule("swfobject",{src:"http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js",test:function(){return"swfobject"in window}});o("html5shiv",{test:function(){return i.dynamicHTML5},combination:["combined-ie7","combined-ie8","combined-ie7-light","combined-ie8-light"]});i.es5=!!(Object.defineProperties&&Object.keys&&String.prototype.trim&&
Function.prototype.bind&&!isNaN(Date.parse("T00:00"))&&Date.now&&Date.prototype.toISOString);i.es5&&b.each(["filter","map","every","reduce","reduceRight","lastIndexOf"],function(a,e){if(!Array.prototype[e])return i.es5=false});i.objectAccessor=!!(Object.create&&Object.defineProperties||Object.prototype.__defineGetter__);i.domAccessor=!!(Object.prototype.__defineGetter__||Object.defineProperty&&Object.defineProperty(document.createElement("b"),"x",{get:function(){return true}}).x);h.objectCreate=Object.create;
h.defineProperty=Object.defineProperties;h.defineProperties=Object.defineProperties;o("es5",{test:function(){return i.es5},combination:["combined-ie7","combined-ie8","combined-ff3","combined-ie7-light","combined-ie8-light","combined-ff3-light"]});i.geolocation="geolocation"in navigator;o("geolocation",{test:function(){return i.geolocation},options:{destroyWrite:true},combination:["combined-ie7","combined-ie8","combined-ie9","combined-ie7-light","combined-ie8-light","combined-ie9-light"]});i.canvas=
"getContext"in b("<canvas />")[0];o("canvas",{test:function(){return i.canvas},noAutoCallback:true,methodNames:[{name:"getContext",elementNames:["canvas"]}],combination:["combined-ie7","combined-ie8","combined-ie7-light","combined-ie8-light"]});i.validity="checkValidity"in b('<form action="#" />')[0];h.validityMessages=[];h.inputTypes={};(function(){var a=b('<form action="#"><fieldset><input name="a" required /><select><option>y</option></select></fieldset></form>'),e=b("fieldset",a)[0];i.validationMessage=
!!b("input",a).attr("validationMessage");i.fieldsetValidation=!!(e.elements&&e.checkValidity&&"disabled"in e&&!e.checkValidity());i.output=!!("value"in n.createElement("output"));i.inputUI=b('<input type="range" />')[0].type=="range"&&b('<input type="date" />')[0].type=="date";i.requiredSelect="required"in b("select",a)[0];h.fix.interactiveValidation=b.browser.webkit&&!i.requiredSelect&&!i.output;h.fix.checkValidity=h.fix.interactiveValidation;h.fix.submission=window.opera&&!i.requiredSelect||h.fix.interactiveValidation;
o("validation-base",{feature:"forms",noAutoCallback:true,test:function(){return false},combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ff4","combined-ie7-light","combined-ie8-light","combined-ie9-light","combined-ff3-light"]})})();o("output",{feature:"forms",noAutoCallback:true,test:function(){return i.output},combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ie7-light","combined-ie8-light","combined-ie9-light","combined-ff3-light"]});
o("validity",{feature:"forms",noAutoCallback:true,test:function(){return i.validity},methodNames:[{name:"setCustomValidity",elementNames:["input","select","textarea"]},{name:"checkValidity",elementNames:["form","fieldset","input","select","textarea"]}],options:{},combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ie7-light","combined-ie8-light","combined-ie9-light","combined-ff3-light"]});if(i.validity){h.capturingEvents(["input"]);h.capturingEvents(["invalid"],true)}o("number-date-type",
{feature:"forms-ext",noAutoCallback:true,test:function(){return i.inputUI},combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ff4"],options:{stepArrows:{number:1,time:1},calculateWidth:true}});o("inputUI",{feature:"forms-ext",test:function(){return i.inputUI&&!p.inputUI.options.replaceNative},combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ff4"],noAutoCallback:true,loadInit:function(){m.loadList(["jquery-ui"]);p["input-widgets"].src&&
m.loadList(["input-widgets"])},options:{slider:{},datepicker:{},langSrc:"http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/i18n/jquery.ui.datepicker-",availabeLangs:"af ar az bg bs cs da de el en-GB eo es et eu fa fi fo fr fr-CH he hr hu hy id is it ja ko it lt lv ms nl no pl pt-BR ro ru sk sl sq sr sr-SR sv ta th tr uk vi zh-CN zh-HK zh-TW".split(" "),recalcWidth:true,replaceNative:false}});i.placeholder=b('<input type="text" />').attr("placeholder")!=null;o("placeholder",{feature:"forms",test:function(){return i.placeholder},
combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ie7-light","combined-ie8-light","combined-ie9-light","combined-ff3-light"]});i.jsonStorage="JSON"in window&&"localStorage"in window&&"sessionStorage"in window;o("json-storage",{test:function(){return i.jsonStorage},loadInit:function(){m.loadList(["swfobject"])},noAutoCallback:true,combination:["combined-ie7","combined-ie7-light"]});h.light=["html5shiv","es5","canvas","geolocation","forms","json-storage"]})(jQuery);
