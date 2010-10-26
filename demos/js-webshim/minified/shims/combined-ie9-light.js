(function(b){if(!navigator.geolocation){b.support.geolocation="shim";var i=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatibel with this plugin";},1)},t=0;navigator.geolocation=function(){var p,k={getCurrentPosition:function(r,f,d){var a=function(){clearTimeout(c);if(!(p||!window.google||!google.loader||!google.loader.ClientLocation)){var e=google.loader.ClientLocation;p={coords:{latitude:e.latitude,longitude:e.longitude,altitude:null,
accuracy:43E3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:b.extend({streetNumber:"",street:"",premises:"",county:"",postalCode:""},e.address)}}if(p)r(b.extend(p,{timestamp:(new Date).getTime()}));else f&&f({code:2,message:"POSITION_UNAVAILABLE"})},c;if(!window.google||!google.loader){if(b.webshims.modules.geolocation.options.destroyWrite){document.write=i;document.writeln=i}b(document).one("google-loader",a);b.webshims.loader.loadScript("http://www.google.com/jsapi",false,
"google-loader");if(d&&d.timeout)c=setTimeout(function(){b(document).unbind("google-loader",a);f&&f({code:3,message:"TIMEOUT"})},d.timeout)}else setTimeout(a,1)},clearWatch:b.noop};k.watchPosition=function(r,f,d){k.getCurrentPosition(r,f,d);t++;return t};return k}()}})(jQuery);
jQuery.webshims.ready("es5",function(b,i,t){var p=i.validityMessages,k=b.support,r=false,f=document;if(k.validity===true)r=!t.noHTMLExtFixes;b.extend(b.expr.filters,{valid:function(d){return(b.attr(d,"validity")||{valid:true}).valid},invalid:function(d){return!b.expr.filters.valid(d)},willValidate:function(d){return b.attr(d,"willValidate")}});i.triggerInlineForm=function(){var d=function(a){if(typeof a!="string"||a.indexOf("-")!==-1||a.indexOf(".")!==-1||a.indexOf('"')!==-1)return"";return"var "+
a+' = this.form["'+a+'"];'};return function(a,c){var e=a["on"+c]||a.getAttribute("on"+c)||"";c=b.Event({type:c,target:a[0],currentTarget:a[0]});if(e&&typeof e=="string"&&a.form&&a.form.elements){var j="";b(a.form.elements).each(function(){var l=this.name,o=this.id;if(o||l){if(l)j+=d(l);if(o&&o!==l)j+=d(o)}});(function(){eval(j+e)}).call(a,c)}b(a).trigger(c)}}();i.validityAlert=function(){var d=!b.browser.msie||parseInt(b.browser.version,10)>7?"span":"label",a={hideDelay:5E3,showFor:function(m,n,v){m=
b(m);var u=(m.data("inputUIReplace")||{visual:m}).visual;o();a.clear();this.getMessage(m,n);this.position(u);this.show();if(this.hideDelay)e=setTimeout(j,this.hideDelay);if(!v){m=b("input, select, textarea, .ui-slider-handle",u).filter(":visible:first");m[0]||(m=u);c.attr("for",i.getID(m));m.focus();b(f).bind("focusout.validityalert",j)}},getMessage:function(m,n){b("> span",c).html(n||m.attr("validationMessage"))},position:function(m){var n=m.offset();n.top+=m.outerHeight();c.css(n)},show:function(){c.css("display")===
"none"?c.fadeIn():c.fadeTo(400,1)},hide:function(){a.clear();c.fadeOut()},clear:function(){clearTimeout(e);b(f).unbind("focusout.validityalert");c.stop().removeAttr("for")},alert:b("<"+d+' class="validity-alert" role="alert"><span class="va-box" /></'+d+">").css({position:"absolute",display:"none"})},c=a.alert,e=false,j=b.proxy(a,"hide"),l=false,o=function(){if(!l){l=true;b(function(){c.appendTo("body")})}};return a}();p.en=p.en||p["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",
url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",stepMismatch:"The value {%value} is not allowed for this form.",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",
patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};p["en-US"]=p["en-US"]||p.en;p[""]=p[""]||p.en;p.de=p.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",
rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",valueMissing:"Sie m\u00fcssen einen Wert eingeben"};(function(){var d,
a=[],c,e,j,l;if(r&&t.addEventListener){var o={timer:void 0,prevented:false};t.addEventListener("submit",function(n){if(!o.prevented&&n.target.checkValidity&&b.attr(n.target,"novalidate")==null&&!n.target.checkValidity())j=true},true);var m=function(n){if(b.attr(n.target,"formnovalidate")!=null){o.timer&&clearTimeout(o.timer);o.prevented=true;o.timer=setTimeout(function(){o.prevented=false},20)}};t.addEventListener("click",m,true);t.addEventListener("touchstart",m,true);t.addEventListener("touchend",
m,true)}b(f).bind("invalid",function(n){r&&b.attr(n.target,"validity").valid&&n.stopImmediatePropagation();if(!d){if((e=n.target.form)&&r){var v=b(e).bind("submit.preventInvalidSubmit",function(u){if(b.attr(e,"novalidate")==null){u.stopImmediatePropagation();return false}}).data("events").submit;v&&v.length>1&&v.unshift(v.pop())}d=b.Event("firstinvalid");b(n.target).trigger(d)}d&&d.isDefaultPrevented()&&n.preventDefault();if(k.validity!==true||a.indexOf(n.target)==-1)a.push(n.target);else if(r){l=
true;n.stopImmediatePropagation()}n.extraData="fix";clearTimeout(c);c=setTimeout(function(){var u={type:"lastinvalid",cancelable:false,invalidlist:b(a)};j&&!l&&d.target!==f.activeElement&&f.activeElement&&!b.data(d.target,"maybePreventedinvalid")&&i.validityAlert.showFor(d.target);j=d=l=false;a=[];b(e).unbind("submit.preventInvalidSubmit");b(n.target).trigger(u,u)},0)})})();(function(){if(r){k.fieldsetValidation=k.fieldsetValidation||"shim";var d=function(a){var c=(b.attr(a,"validity")||{valid:true}).valid;
!c&&a.checkValidity()&&b(a).trigger("invalid");return c};i.addMethod("checkValidity",function(){if(this.elements||b.nodeName(this,"fieldset")){var a=true;b(this.elements||"input, textarea, select",this).each(function(){d(this)||(a=false)});return a}else if(this.checkValidity)return d(this)})}})();(function(){var d=k.validity===true&&i.overrideValidationMessages,a=true,c=true;if(k.validity===true){a=!!("required"in f.createElement("select")||t.noHTMLExtFixes);c=!!(b('<input type="datetime-local" />')[0].type==
"datetime-local"&&b('<input type="range" />')[0].type=="range")}var e=!a||!c||d,j=i.inputTypes,l={},o=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],m=b.attr,n=b.fn.val,v=d?{value:1,checked:1}:{value:1},u=d?["textarea"]:[],F={radio:1,checkbox:1},x=function(g,s){if(g.form){var h=(g.getAttribute&&g.getAttribute("type")||g.type||"").toLowerCase();if(!d)if(!(!a&&h=="select-one")&&!j[h])return;d&&!s&&F[h]&&g.name?b(f.getElementsByName(g.name)).each(function(){b.attr(this,
"validity")}):b.attr(g,"validity")}};if(!a||d){b.extend(v,{required:1,size:1,multiple:1,selectedIndex:1});u.push("select")}if(!c||d){b.extend(v,{min:1,max:1,step:1});u.push("input")}var C=p[""];b(f).bind("htmlExtLangChange",function(){i.activeLang(p,"validation-base",function(g){C=g})});i.createValidationMessage=function(g,s){var h=C[s];if(h&&typeof h!=="string")h=h[(g.getAttribute("type")||"").toLowerCase()]||h.defaultMessage;h&&["value","min","max","title","maxlength","label"].forEach(function(q){if(h.indexOf("{%"+
q)!==-1){var w=(q=="label"?b.trim(b("label[for="+g.id+"]",g.form).text()).replace(/\*$|:$/,""):b.attr(g,q))||"";h=h.replace("{%"+q+"}",w);if("value"==q)h=h.replace("{%valueLen}",w.length)}});return h||""};b.each(k.validationMessage?["customValidationMessage"]:["customValidationMessage","validationMessage"],function(g,s){i.attr(s,{elementNames:["input","select","textarea"],getter:function(h){var q="";if(!b.attr(h,"willValidate"))return q;var w=b.attr(h,"validity")||{valid:1};if(w.valid)return q;if(w.customError||
s==="validationMessage")if(q="validationMessage"in h?h.validationMessage:b.data(h,"customvalidationMessage"))return q;b.each(w,function(z,A){if(!(z=="valid"||!A))if(q=i.createValidationMessage(h,z))return false});return q||""}})});k.validationMessage=k.validationMessage||"shim";i.addMethod("setCustomValidity",function(g){g+="";if(this.setCustomValidity){this.setCustomValidity(g);if(e){b.data(this,"hasCustomError",!!g);x(this)}}else b.data(this,"customvalidationMessage",""+g)});if(k.validity===true){i.addInputType=
function(g,s){j[g]=s};i.addValidityRule=function(g,s){l[g]=s};i.addValidityRule("typeMismatch",function(g,s,h,q){if(s==="")return false;q=q.typeMismatch;if(!("type"in h))h.type=(g[0].getAttribute("type")||"").toLowerCase();if(j[h.type]&&j[h.type].mismatch)q=j[h.type].mismatch(s,g);return q})}if(!a){i.createBooleanAttrs("required",["select"]);i.addValidityRule("valueMissing",function(g,s,h,q){if(h.nodeName=="select"&&!s&&g.attr("required")&&g[0].size<2){if(!h.type)h.type=g[0].type;if(h.type=="select-one"&&
b("> option:first-child:not(:disabled)",g).attr("selected"))return true}return q.valueMissing})}if(e){i.attr("validity",{elementNames:u,getter:function(g){var s=g.validity;if(!s)return s;var h={};o.forEach(function(y){h[y]=s[y]});if(!b.attr(g,"willValidate"))return h;var q=b(g),w={type:(g.getAttribute&&g.getAttribute("type")||"").toLowerCase(),nodeName:(g.nodeName||"").toLowerCase()},z=n.call(q),A=!!b.data(g,"hasCustomError"),D;h.customError=A;if(h.valid&&h.customError)h.valid=false;else if(!h.valid){var E=
true;b.each(h,function(y,B){if(B)return E=false});if(E)h.valid=true}b.each(l,function(y,B){h[y]=B(q,z,w,h);if(h[y]&&(h.valid||!D&&d)){g.setCustomValidity(i.createValidationMessage(g,y));h.valid=false;D=true}});h.valid&&g.setCustomValidity("");return h}});b.fn.val=function(){var g=n.apply(this,arguments);this.each(function(){x(this)});return g};b.attr=function(g,s,h){var q=m.apply(this,arguments);v[s]&&h!==void 0&&g.form&&x(g);return q};if(f.addEventListener){f.addEventListener("change",function(g){x(g.target)},
true);c||f.addEventListener("input",function(g){x(g.target)},true)}i.addReady(function(g){g===f?b(u.join(",")).each(function(){x(this,true)}):b(u.join(","),g).each(function(){x(this,true)})})}})();i.createReadyEvent("validation-base")},true);
jQuery.webshims.ready("validation-base",function(b){if(!b.support.validity){var i=b.webshims;i.inputTypes=i.inputTypes||{};var t=i.inputTypes,p={radio:1,checkbox:1};i.addInputType=function(a,c){t[a]=c};var k={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},r={valueMissing:function(a,c,e){if(!a.attr("required"))return false;var j=false;if(!("type"in e))e.type=(a[0].getAttribute("type")||
a[0].type||"").toLowerCase();return j=e.nodeName=="select"?!c&&a[0].type=="select-one"&&a[0].size<2&&b("> option:first-child:not(:disabled)",a).attr("selected"):p[e.type]?!b(a[0].form&&a[0].name?a[0].form[a[0].name]:[]).filter(":checked")[0]:!c},tooLong:function(a,c,e){if(c===""||e.nodeName=="select")return false;a=a.attr("maxlength");e=false;var j=c.length;if(j&&a>=0&&c.replace&&(typeof a=="number"||a&&a==a*1))e=j>a;return e},typeMismatch:function(a,c,e){if(c===""||e.nodeName=="select")return false;
var j=false;if(!("type"in e))e.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();if(t[e.type]&&t[e.type].mismatch)j=t[e.type].mismatch(c,a);return j},patternMismatch:function(a,c,e){if(c===""||e.nodeName=="select")return false;a=a.attr("pattern");if(!a)return false;return!RegExp("^(?:"+a+")$").test(c)}};i.addValidityRule=function(a,c){r[a]=c};i.addMethod("checkValidity",function(){var a,c=function(e){var j,l=b.attr(e,"validity");if(l)b.data(e,"cachedValidity",l);else return true;if(!l.valid){j=
b.Event("invalid");var o=b(e).trigger(j);if(!a&&!j.isDefaultPrevented()){i.validityAlert.showFor(o);a=true}}b.data(e,"cachedValidity",false);return l.valid};return function(){a=false;if(b.nodeName(this,"form")||b.nodeName(this,"fieldset")){for(var e=true,j=this.elements||b("input, textarea, select",this),l=0,o=j.length;l<o;l++)c(j[l])||(e=false);return e}else return this.form?c(this):true}}());b.event.special.invalid={add:function(){b.data(this,"invalidEventShim")||b.event.special.invalid.setup.call(this)},
setup:function(){b(this).bind("submit",b.event.special.invalid.handler).data("invalidEventShim",true);var a=b(this).data("events").submit;a&&a.length>1&&a.unshift(a.pop())},teardown:function(){b(this).unbind("submit",b.event.special.invalid.handler).data("invalidEventShim",false)},handler:function(a){if(!(a.type!="submit"||!b.nodeName(a.target,"form")||b.attr(a.target,"novalidate")!=null||b.data(a.target,"novalidate")))if(!b(a.target).checkValidity()){!a.originalEvent&&window.console&&console.log&&
console.log("submit");a.stopImmediatePropagation();return false}}};i.attr("validity",{elementNames:["input","select","textarea"],getter:function(a){var c=b.data(a,"cachedValidity");if(c)return c;c=b.extend({},k);if(!b.attr(a,"willValidate"))return c;var e=b(a),j=e.val(),l={nodeName:a.nodeName.toLowerCase()};c.customError=!!b.data(a,"customvalidationMessage");if(c.customError)c.valid=false;b.each(r,function(o,m){if(m(e,j,l)){c[o]=true;c.valid=false}});return c}});i.createBooleanAttrs("required",["input",
"textarea","select"]);i.attr("willValidate",{elementNames:["input","select","textarea"],getter:function(){var a={button:1,reset:1,add:1,remove:1,"move-up":1,"move-down":1,hidden:1,submit:1};return function(c){return!!(c.name&&c.form&&!c.disabled&&!c.readOnly&&!a[c.type]&&b.attr(c.form,"novalidate")==null)}}()});i.addInputType("email",{mismatch:function(){var a=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(c){return!a.test(c)}}()});i.addInputType("url",{mismatch:function(){var a=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(c){return!a.test(c)}}()});var f=function(){var a=this;if(a.form){b.data(a.form,"novalidate",true);setTimeout(function(){b.data(a.form,"novalidate",false)},1)}},d={submit:1,button:1};b(document).bind("click",function(a){a.target&&a.target.form&&d[a.target.type]&&b.attr(a.target,"formnovalidate")!=null&&f.call(a.target)});i.addReady(function(a){a=b("form",a).bind("invalid",b.noop).find("button[formnovalidate]").bind("click",f).end();if(!document.activeElement||!document.activeElement.form)b("input, select, textarea",
a).filter("[autofocus]:first").focus()});b.support.validity=b.support.validity||"shim";i.createReadyEvent("validity")}},true);
jQuery.webshims.ready("validation-base",function(b,i){if(!("value"in document.createElement("output"))){var t=document;(function(){var k={input:1,textarea:1},r={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,color:1},f=function(d){var a,c=d.attr("value"),e=function(l){if(d){var o=d.attr("value");if(o!==c){c=o;if(!l||l.type!="input")i.triggerInlineForm(d[0],"input")}}},j=function(){d.unbind("focusout",j).unbind("input",e);clearInterval(a);e();d=null};clearInterval(a);a=setInterval(e,b.browser.mozilla?
250:111);setTimeout(e,9);d.bind("focusout",j).bind("input",e)};b(t).bind("focusin",function(d){if(d.target&&d.target.type&&!d.target.readonly&&!d.target.readOnly&&!d.target.disabled&&k[(d.target.nodeName||"").toLowerCase()]&&!r[d.target.type])f(b(d.target))})})();var p=function(k){if(!k.getAttribute("aria-live")){k=b(k);var r=(k.text()||"").trim(),f=k.attr("id"),d=k.attr("for"),a=b('<input class="output-shim" type="hidden" name="'+(k.attr("name")||"")+'" value="'+r+'" style="display: none" />').insertAfter(k),
c=a[0].form||t,e=function(j){a[0].value=j;j=a[0].value;k.text(j);k[0].value=j};k[0].defaultValue=r;k[0].value=r;k.attr({"aria-live":"polite"});if(f){a.attr("id",f);k.attr("aria-labeldby",i.getID(b("label[for="+f+"]",c)))}if(d){f=i.getID(k);d.split(" ").forEach(function(j){(j=c.getElementById(j))&&j.setAttribute("aria-controls",f)})}k.data("outputShim",e);a.data("outputShim",e);return e}};i.attr("value",{elementNames:["output","input"],getter:true,setter:function(k,r,f){var d=b.data(k,"outputShim");
if(!d)if(b.nodeName(k,"output"))d=p(k);else return f();d(r)}});i.addReady(function(k){b("output",k).each(function(){p(this)})});i.createReadyEvent("output")}},true);
(function(b){if(!b.support.placeholder){b.support.placeholder="shim";var i=function(f,d,a,c,e){if(!c){c=b.data(f,"placeHolder");if(!c)return}if(e=="focus"||!e&&f===document.activeElement)c.box.removeClass("placeholder-visible");else{if(d===false)d=b.attr(f,"value");if(d)c.box.removeClass("placeholder-visible");else{if(a===false)a=b.attr(f,"placeholder");c.box[a&&!d?"addClass":"removeClass"]("placeholder-visible")}}},t=function(f){f=b(f);var d=f.attr("id"),a=!!(f.attr("title")||f.attr("aria-labeledby"));
if(!a&&d)a=!!b("label[for="+d+"]",f[0].form)[0];return b(a?'<span class="placeholder-text"></span>':'<label for="'+(d||b.webshims.getID(f))+'" class="placeholder-text"></label>')},p=function(){var f=/\n|\r|\f|\t/g,d={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(a){var c=b.data(a,"placeHolder");if(c)return c;c=b.data(a,"placeHolder",{text:t(a)});c.box=b(a).wrap('<span class="placeholder-box placeholder-box-'+(a.nodeName||"").toLowerCase()+'" />').bind("focus.placeholder blur.placeholder",
function(o){i(this,false,false,c,o.type)}).parent();c.text.insertAfter(a).bind("mousedown.placeholder",function(){i(this,false,false,c,"focus");a.focus();return false});b.each(["Left","Top"],function(o,m){var n=(parseInt(b.curCSS(a,"padding"+m),10)||0)+Math.max(parseInt(b.curCSS(a,"margin"+m),10)||0,0)+(parseInt(b.curCSS(a,"border"+m+"Width"),10)||0);c.text.css("padding"+m,n)});var e=b.curCSS(a,"lineHeight"),j={width:b(a).getwidth(),height:b(a).getheight()},l=b.curCSS(a,"float");c.text.css("lineHeight")!==
e&&c.text.css("lineHeight",e);j.width&&j.height&&c.text.css(j);l!=="none"&&c.box.addClass("placeholder-box-"+l);return c},update:function(a,c){if(d[b.attr(a,"type")]||b.nodeName(a,"textarea")){if(b.nodeName(a,"input"))c=c.replace(f,"");var e=p.create(a);a.setAttribute("placeholder",c);e.text.text(c);i(a,false,c,e)}}}}();b.webshims.attr("placeholder",{elementNames:["input","textarea"],setter:function(f,d){p.update(f,d)},getter:function(f){return f.getAttribute("placeholder")||""}});var k={elementNames:["input",
"textarea"],setter:function(f,d,a){var c=f.getAttribute("placeholder");c&&"value"in f&&i(f,d,c);a()},getter:true};b.webshims.attr("value",k);var r=b.fn.val;b.fn.val=function(f){f!==undefined&&this.each(function(){this.nodeType===1&&k.setter(this,f,b.noop)});return r.apply(this,arguments)};b.webshims.addReady(function(f){b("input[placeholder], textarea[placeholder]",f).attr("placeholder",function(d,a){return a})})}})(jQuery);
