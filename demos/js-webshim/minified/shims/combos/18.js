jQuery.webshims.register("form-datalist",function(b,c,h,g,o){c.propTypes.element=function(g){c.createPropDefault(g,"attr");if(!g.prop)g.prop={get:function(){var c=g.attr.get.call(this);c&&(c=b("#"+c)[0])&&g.propNodeName&&!b.nodeName(c,g.propNodeName)&&(c=null);return c||null},writeable:!1}};(function(){var i=b.webshims.cfg.forms,j=Modernizr.input.list;if(!j||i.customDatalist){var u=0,q={submit:1,button:1,reset:1,hidden:1,range:1,date:1},t=b.browser.msie&&7>parseInt(b.browser.version,10),v={},r=function(a){if(!a)return[];
if(v[a])return v[a];var b;try{b=JSON.parse(localStorage.getItem("storedDatalistOptions"+a))}catch(d){}v[a]=b||[];return b||[]},f={_create:function(a){if(!q[b.prop(a.input,"type")]){var e=a.datalist,d=b.data(a.input,"datalistWidget");if(e&&d&&d.datalist!==e)d.datalist=e,d.id=a.id,b(d.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",b.proxy(d,"_resetListCached")),d._resetListCached();else if(e){if(!(d&&d.datalist===e)){u++;var c=this;this.hideList=b.proxy(c,"hideList");
this.timedHide=function(){clearTimeout(c.hideTimer);c.hideTimer=setTimeout(c.hideList,9)};this.datalist=e;this.id=a.id;this.hasViewableData=!0;this._autocomplete=b.attr(a.input,"autocomplete");b.data(a.input,"datalistWidget",this);this.shadowList=b('<div class="datalist-polyfill" />');i.positionDatalist?this.shadowList.insertAfter(a.input):this.shadowList.appendTo("body");this.index=-1;this.input=a.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",
function(e){var d=b("li:not(.hidden-item)",c.shadowList),n="mousedown"==e.type||"click"==e.type;c.markItem(d.index(e.currentTarget),n,d);"click"==e.type&&(c.hideList(),b(a.input).trigger("datalistselect"));return"mousedown"!=e.type}).bind("focusout",this.timedHide);a.input.setAttribute("autocomplete","off");b(a.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",function(){if(!c.triggeredByDatalist)c.changedValue=!1,c.showHideOptions()}).bind("keydown.datalistWidget",function(e){var d=
e.keyCode,n;if(40==d&&!c.showList())return c.markItem(c.index+1,!0),!1;if(c.isListVisible){if(38==d)return c.markItem(c.index-1,!0),!1;if(!e.shiftKey&&(33==d||36==d))return c.markItem(0,!0),!1;if(!e.shiftKey&&(34==d||35==d))return e=b("li:not(.hidden-item)",c.shadowList),c.markItem(e.length-1,!0,e),!1;if(13==d||27==d)return 13==d&&(n=b("li.active-item:not(.hidden-item)",c.shadowList),c.changeValue(b("li.active-item:not(.hidden-item)",c.shadowList))),c.hideList(),n&&n[0]&&b(a.input).trigger("datalistselect"),
!1}}).bind("focus.datalistWidget",function(){b(this).hasClass("list-focus")&&c.showList()}).bind("mousedown.datalistWidget",function(){(this==g.activeElement||b(this).is(":focus"))&&c.showList()}).bind("blur.datalistWidget",this.timedHide);b(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",b.proxy(this,"_resetListCached"));this._resetListCached();a.input.form&&a.input.id&&b(a.input.form).bind("submit.datalistWidget"+a.input.id,function(){var e=b.prop(a.input,
"value"),d=(a.input.name||a.input.id)+b.prop(a.input,"type");if(!c.storedOptions)c.storedOptions=r(d);if(e&&-1==c.storedOptions.indexOf(e)&&(c.storedOptions.push(e),e=c.storedOptions,d)){e=e||[];try{localStorage.setItem("storedDatalistOptions"+d,JSON.stringify(e))}catch(n){}}});b(h).bind("unload",function(){c.destroy()})}}else d&&d.destroy()}},destroy:function(){var a=b.attr(this.input,"autocomplete");b(this.input).unbind(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();b(g).unbind(".datalist"+
this.id);this.input.form&&this.input.id&&b(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");a===o?this.input.removeAttribute("autocomplete"):b(this.input).attr("autocomplete",a)},_resetListCached:function(a){var b=this,d;this.needsUpdate=!0;this.lastUpdatedValue=!1;this.lastUnfoundValue="";this.updateTimer||(h.QUnit||(d=a&&g.activeElement==b.input)?b.updateListOptions(d):c.ready("WINDOWLOAD",function(){b.updateTimer=setTimeout(function(){b.updateListOptions();
b=null;u=1},200+100*u)}))},updateListOptions:function(a){this.needsUpdate=!1;clearTimeout(this.updateTimer);this.updateTimer=!1;this.shadowList.css({fontSize:b.curCSS(this.input,"fontSize"),fontFamily:b.curCSS(this.input,"fontFamily")});this.searchStart=b(this.input).hasClass("search-start");var e=[],d=[],c=[],m,g,n,s;for(g=b.prop(this.datalist,"options"),n=0,s=g.length;n<s;n++){m=g[n];if(m.disabled)return;m={value:b(m).val()||"",text:b.trim(b.attr(m,"label")||m.textContent||m.innerText||b.text([m])||
""),className:m.className||"",style:b.attr(m,"style")||""};m.text?m.text!=m.value&&(m.className+=" different-label-value"):m.text=m.value;d[n]=m.value;c[n]=m}if(!this.storedOptions)this.storedOptions=r((this.input.name||this.input.id)+b.prop(this.input,"type"));this.storedOptions.forEach(function(a){-1==d.indexOf(a)&&c.push({value:a,text:a,className:"stored-suggest",style:""})});for(n=0,s=c.length;n<s;n++)g=c[n],e[n]='<li class="'+g.className+'" style="'+g.style+'" tabindex="-1" role="listitem"><span class="option-label">'+
g.text+'</span> <span class="option-value">'+g.value+"</span></li>";this.arrayOptions=c;this.shadowList.html('<div><ul role="list" class="'+(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom">'+e.join("\n")+"</ul></div>");b.fn.bgIframe&&t&&this.shadowList.bgIframe();(a||this.isListVisible)&&this.showHideOptions()},showHideOptions:function(a){var e=b.prop(this.input,"value").toLowerCase();if(!(e===this.lastUpdatedValue||this.lastUnfoundValue&&0===e.indexOf(this.lastUnfoundValue))){this.lastUpdatedValue=
e;var d=!1,c=this.searchStart,m=b("li",this.shadowList);e?this.arrayOptions.forEach(function(a,g){var s;if(!("lowerText"in a))a.lowerText=a.text!=a.value?a.text.toLowerCase()+a.value.toLowerCase():a.text.toLowerCase();s=a.lowerText.indexOf(e);(s=c?!s:-1!==s)?(b(m[g]).removeClass("hidden-item"),d=!0):b(m[g]).addClass("hidden-item")}):m.length&&(m.removeClass("hidden-item"),d=!0);this.hasViewableData=d;!a&&d&&this.showList();if(!d)this.lastUnfoundValue=e,this.hideList()}},setPos:function(){var a=i.positionDatalist?
b(this.input).position():c.getRelOffset(this.shadowList,this.input);a.top+=b(this.input).outerHeight();a.width=b(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);this.shadowList.css(a);return a},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&this.updateListOptions();this.showHideOptions(!0);if(!this.hasViewableData)return!1;this.isListVisible=!0;var a=this,e;a.setPos();a.shadowList.addClass("datalist-visible");
b(g).unbind(".datalist"+a.id).bind("mousedown.datalist"+a.id+" focusin.datalist"+a.id,function(e){e.target===a.input||a.shadowList[0]===e.target||b.contains(a.shadowList[0],e.target)?(clearTimeout(a.hideTimer),setTimeout(function(){clearTimeout(a.hideTimer)},9)):a.timedHide()});b(h).unbind(".datalist"+a.id).bind("resize.datalist"+a.id+"orientationchange.datalist "+a.id+" emchange.datalist"+a.id,function(){clearTimeout(e);e=setTimeout(function(){a.setPos()},9)});clearTimeout(e);return!0},hideList:function(){if(!this.isListVisible)return!1;
var a=this,e=function(){a.changedValue&&b(a.input).trigger("change");a.changedValue=!1};a.shadowList.removeClass("datalist-visible list-item-active").scrollTop(0).find("li.active-item").removeClass("active-item");a.index=-1;a.isListVisible=!1;if(a.changedValue){a.triggeredByDatalist=!0;c.triggerInlineForm&&c.triggerInlineForm(a.input,"input");if(a.input==g.activeElement||b(a.input).is(":focus"))b(a.input).one("blur",e);else e();a.triggeredByDatalist=!1}b(g).unbind(".datalist"+a.id);b(h).unbind(".datalist"+
a.id);return!0},scrollIntoView:function(a){var e=b("ul",this.shadowList),d=b("div",this.shadowList),c=a.position();c.top-=(parseInt(e.css("paddingTop"),10)||0)+(parseInt(e.css("marginTop"),10)||0)+(parseInt(e.css("borderTopWidth"),10)||0);0>c.top?d.scrollTop(d.scrollTop()+c.top-2):(c.top+=a.outerHeight(),a=d.height(),c.top>a&&d.scrollTop(d.scrollTop()+(c.top-a)+2))},changeValue:function(a){if(a[0]){var a=b("span.option-value",a).text(),e=b.prop(this.input,"value");if(a!=e)b(this.input).prop("value",
a).triggerHandler("updateInput"),this.changedValue=!0}},markItem:function(a,e,c){c=c||b("li:not(.hidden-item)",this.shadowList);if(c.length)0>a?a=c.length-1:a>=c.length&&(a=0),c.removeClass("active-item"),this.shadowList.addClass("list-item-active"),c=c.filter(":eq("+a+")").addClass("active-item"),e&&(this.changeValue(c),this.scrollIntoView(c)),this.index=a}};(function(){j||c.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var a=b("select",this);a[0]?a=a[0].options:
(a=b("option",this).get(),a.length&&c.warn("you should wrap you option-elements for a datalist in a select element to support IE and other old browsers."));return a}}});var a={autocomplete:{attr:{get:function(){var a=b.data(this,"datalistWidget");return a?a._autocomplete:"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},set:function(a){var c=b.data(this,"datalistWidget");c?(c._autocomplete=a,"off"==a&&c.hideList()):"autocomplete"in this?this.autocomplete=a:this.setAttribute("autocomplete",
a)}}}};if(!j||!1 in b("<input />")[0])a.selectedOption={prop:{writeable:!1,get:function(){var a=b.prop(this,"list"),c=null,g;if(!a)return c;g=b.attr(this,"value");if(!g)return c;a=b.prop(a,"options");if(!a.length)return c;b.each(a,function(a,e){if(g==b.prop(e,"value"))return c=e,!1});return c}}};a.list=j?{attr:{get:function(){var a=c.contentAttr(this,"list");null!=a?this.removeAttribute("list"):a=b.data(this,"datalistListAttr");return null==a?o:a},set:function(a){b.data(this,"datalistListAttr",a);
c.objectCreate(f,o,{input:this,id:a,datalist:b.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}:{attr:{get:function(){var a=c.contentAttr(this,"list");return null==a?o:a},set:function(a){c.contentAttr(this,"list",a);c.objectCreate(f,o,{input:this,id:a,datalist:b.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"};c.defineNodeNameProperties("input",a);if(b.event.customEvent)b.event.customEvent.updateDatalist=!0,b.event.customEvent.updateInput=
!0,b.event.customEvent.datalistselect=!0;c.addReady(function(a,b){b.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").triggerHandler("updateDatalist")})})()}})()});
jQuery.webshims.register("form-extend",function(b,c,h,g,o,i){h=h.Modernizr;o=h.inputtypes;if(h.formvalidation&&!c.bugs.bustedValidity){var j=c.inputTypes,u={};c.addInputType=function(a,b){j[a]=b};c.addValidityRule=function(a,b){u[a]=b};c.addValidityRule("typeMismatch",function(a,b,c,e){if(""===b)return!1;e=e.typeMismatch;if(!("type"in c))c.type=(a[0].getAttribute("type")||"").toLowerCase();j[c.type]&&j[c.type].mismatch&&(e=j[c.type].mismatch(b,a));return e});var q=i.overrideMessages,t=!o.number||
!o.time||!o.range||q,v="customError,typeMismatch,rangeUnderflow,rangeOverflow,stepMismatch,tooLong,patternMismatch,valueMissing,valid".split(","),i=q?["value","checked"]:["value"],r=[],f=function(a,c){if(a){var e=(a.getAttribute&&a.getAttribute("type")||a.type||"").toLowerCase();if(q||j[e])q&&!c&&"radio"==e&&a.name?b(g.getElementsByName(a.name)).each(function(){b.prop(this,"validity")}):b.prop(a,"validity")}},a={};["input","textarea","select"].forEach(function(e){var d=c.defineNodeNameProperty(e,
"setCustomValidity",{prop:{value:function(a){var a=a+"",s="input"==e?b(this).getNativeElement()[0]:this;d.prop._supvalue.call(s,a);c.bugs.validationMessage&&c.data(s,"customvalidationMessage",a);t&&(c.data(s,"hasCustomError",!!a),f(s))}}});a[e]=d.prop._supvalue});if(t||q)i.push("min"),i.push("max"),i.push("step"),r.push("input");q&&(i.push("required"),i.push("pattern"),r.push("select"),r.push("textarea"));if(t){var e;r.forEach(function(d){var g=c.defineNodeNameProperty(d,"validity",{prop:{get:function(){if(!e){var f=
"input"==d?b(this).getNativeElement()[0]:this,s=g.prop._supget.call(f);if(!s)return s;var k={};v.forEach(function(a){k[a]=s[a]});if(!b.prop(f,"willValidate"))return k;e=!0;var l=b(f),y={type:(f.getAttribute&&f.getAttribute("type")||"").toLowerCase(),nodeName:(f.nodeName||"").toLowerCase()},i=l.val(),w=!!c.data(f,"hasCustomError"),h;e=!1;k.customError=w;if(k.valid&&k.customError)k.valid=!1;else if(!k.valid){var p=!0;b.each(k,function(a,b){if(b)return p=!1});if(p)k.valid=!0}b.each(u,function(b,e){k[b]=
e(l,i,y,k);if(k[b]&&(k.valid||!h)&&(q||j[y.type]&&j[y.type].mismatch))a[d].call(f,c.createValidationMessage(f,b)),k.valid=!1,h=!0});k.valid?(a[d].call(f,""),c.data(f,"hasCustomError",!1)):q&&!h&&!w&&b.each(k,function(b,l){if("valid"!==b&&l)return a[d].call(f,c.createValidationMessage(f,b)),!1});return k}},writeable:!1}})});i.forEach(function(a){c.onNodeNamesPropertyModify(r,a,function(){f(this)})});if(g.addEventListener){var d;g.addEventListener("change",function(a){clearTimeout(d);f(a.target)},!0);
g.addEventListener("input",function(a){clearTimeout(d);d=setTimeout(function(){f(a.target)},290)},!0)}var w=r.join(",");c.addReady(function(a,c){b(w,a).add(c.filter(w)).each(function(){b.prop(this,"validity")})});q&&c.ready("DOM form-message",function(){c.activeLang({register:"form-core",callback:function(){b("input, select, textarea").getNativeElement().each(function(){if(!c.data(this,"hasCustomError")){var e=this,d=b.prop(e,"validity")||{valid:!0},g;d.valid||(g=(e.nodeName||"").toLowerCase(),b.each(d,
function(b,d){if("valid"!==b&&d)return a[g].call(e,c.createValidationMessage(e,b)),!1}))}})}})})}c.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return c.inputTypes[a]?a:this.type}}});b.browser.webkit&&h.inputtypes.date&&function(){var a={updateInput:1,input:1},c={date:1,time:1,"datetime-local":1},e={focusout:1,blur:1},d={updateInput:1,change:1},k=function(b){var c,k=!0,g=b.prop("value"),f=g,p=function(c){if(b){var e=b.prop("value");
e!==g&&(g=e,(!c||!a[c.type])&&b.trigger("input"));c&&d[c.type]&&(f=e);!k&&e!==f&&b.trigger("change")}},A,x=function(a){clearInterval(c);setTimeout(function(){a&&e[a.type]&&(k=!1);b&&(b.unbind("focusout blur",x).unbind("input change updateInput",p),p());b=null},1)};clearInterval(c);c=setInterval(p,160);clearTimeout(A);A=setTimeout(p,9);b.unbind("focusout blur",x).unbind("input change updateInput",p);b.bind("focusout blur",x).bind("input updateInput change",p)};if(b.event.customEvent)b.event.customEvent.updateInput=
!0;b(g).bind("focusin",function(a){a.target&&c[a.target.type]&&!a.target.readOnly&&!a.target.disabled&&k(b(a.target))})}();h.input.list&&!(b("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&c.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var a=this.options||[];if(!a.length){var c=b("select",this);if(c[0]&&c[0].options&&c[0].options.length)a=c[0].options}return a}}})}});
jQuery.webshims.register("form-number-date-api",function(b,c){if(!c.getStep)c.getStep=function(a,c){var d=b.attr(a,"step");if("any"===d)return d;c=c||j(a);if(!g[c]||!g[c].step)return d;d=f.number.asNumber(d);return(!isNaN(d)&&0<d?d:g[c].step)*g[c].stepScaleFactor};if(!c.addMinMaxNumberToCache)c.addMinMaxNumberToCache=function(a,b,c){a+"AsNumber"in c||(c[a+"AsNumber"]=g[c.type].asNumber(b.attr(a)),isNaN(c[a+"AsNumber"])&&a+"Default"in g[c.type]&&(c[a+"AsNumber"]=g[c.type][a+"Default"]))};var h=parseInt("NaN",
10),g=c.inputTypes,o=function(a){return"number"==typeof a||a&&a==1*a},i=function(a){return b('<input type="'+a+'" />').prop("type")===a},j=function(a){return(a.getAttribute("type")||"").toLowerCase()},u=c.addMinMaxNumberToCache,q=function(a,b){for(var a=""+a,b=b-a.length,c=0;c<b;c++)a="0"+a;return a},t=c.bugs.valueAsNumberSet||c.bugs.bustedValidity;c.addValidityRule("stepMismatch",function(a,b,d,f){if(""===b)return!1;if(!("type"in d))d.type=j(a[0]);if("date"==d.type)return!1;f=(f||{}).stepMismatch;
if(g[d.type]&&g[d.type].step){if(!("step"in d))d.step=c.getStep(a[0],d.type);if("any"==d.step)return!1;if(!("valueAsNumber"in d))d.valueAsNumber=g[d.type].asNumber(b);if(isNaN(d.valueAsNumber))return!1;u("min",a,d);a=d.minAsNumber;isNaN(a)&&(a=g[d.type].stepBase||0);f=Math.abs((d.valueAsNumber-a)%d.step);f=!(1.0E-7>=f||1.0E-7>=Math.abs(f-d.step))}return f});[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(a){c.addValidityRule(a.name,function(b,
c,f,i){i=(i||{})[a.name]||!1;if(""===c)return i;if(!("type"in f))f.type=j(b[0]);if(g[f.type]&&g[f.type].asNumber){if(!("valueAsNumber"in f))f.valueAsNumber=g[f.type].asNumber(c);if(isNaN(f.valueAsNumber))return!1;u(a.attr,b,f);if(isNaN(f[a.attr+"AsNumber"]))return i;i=f[a.attr+"AsNumber"]*a.factor<f.valueAsNumber*a.factor-1.0E-7}return i})});c.reflectProperties(["input"],["max","min","step"]);var v=c.defineNodeNameProperty("input","valueAsNumber",{prop:{get:function(){var a=j(this),a=g[a]&&g[a].asNumber?
g[a].asNumber(b.prop(this,"value")):v.prop._supget&&v.prop._supget.apply(this,arguments);null==a&&(a=h);return a},set:function(a){var e=j(this);g[e]&&g[e].numberToString?isNaN(a)?b.prop(this,"value",""):(e=g[e].numberToString(a),!1!==e?b.prop(this,"value",e):c.warn("INVALID_STATE_ERR: DOM Exception 11")):v.prop._supset&&v.prop._supset.apply(this,arguments)}}}),r=c.defineNodeNameProperty("input","valueAsDate",{prop:{get:function(){var a=j(this);return g[a]&&g[a].asDate&&!g[a].noAsDate?g[a].asDate(b.prop(this,
"value")):r.prop._supget&&r.prop._supget.call(this)||null},set:function(a){var e=j(this);if(g[e]&&g[e].dateToString&&!g[e].noAsDate){if(null===a)return b.prop(this,"value",""),"";e=g[e].dateToString(a);if(!1!==e)return b.prop(this,"value",e),e;c.warn("INVALID_STATE_ERR: DOM Exception 11")}else return r.prop._supset&&r.prop._supset.apply(this,arguments)||null}}}),f={number:{mismatch:function(a){return!o(a)},step:1,stepScaleFactor:1,asNumber:function(a){return o(a)?1*a:h},numberToString:function(a){return o(a)?
a:!1}},range:{minDefault:0,maxDefault:100},date:{mismatch:function(a){if(!a||!a.split||!/\d$/.test(a))return!0;var c=a.split(/\u002D/);if(3!==c.length)return!0;var d=!1;b.each(c,function(a,b){if(!(o(b)||b&&b=="0"+1*b))return d=!0,!1});if(d)return d;if(4!==c[0].length||2!=c[1].length||12<c[1]||2!=c[2].length||33<c[2])d=!0;return a!==this.dateToString(this.asDate(a,!0))},step:1,stepScaleFactor:864E5,asDate:function(a,b){return!b&&this.mismatch(a)?null:new Date(this.asNumber(a,!0))},asNumber:function(a,
b){var c=h;if(b||!this.mismatch(a))a=a.split(/\u002D/),c=Date.UTC(a[0],a[1]-1,a[2]);return c},numberToString:function(a){return o(a)?this.dateToString(new Date(1*a)):!1},dateToString:function(a){return a&&a.getFullYear?a.getUTCFullYear()+"-"+q(a.getUTCMonth()+1,2)+"-"+q(a.getUTCDate(),2):!1}},time:{mismatch:function(a,c){if(!a||!a.split||!/\d$/.test(a))return!0;a=a.split(/\u003A/);if(2>a.length||3<a.length)return!0;var d=!1,f;a[2]&&(a[2]=a[2].split(/\u002E/),f=parseInt(a[2][1],10),a[2]=a[2][0]);b.each(a,
function(a,b){if(!(o(b)||b&&b=="0"+1*b)||2!==b.length)return d=!0,!1});if(d||23<a[0]||0>a[0]||59<a[1]||0>a[1]||a[2]&&(59<a[2]||0>a[2])||f&&isNaN(f))return!0;f&&(100>f?f*=100:10>f&&(f*=10));return!0===c?[a,f]:!1},step:60,stepBase:0,stepScaleFactor:1E3,asDate:function(a){a=new Date(this.asNumber(a));return isNaN(a)?null:a},asNumber:function(a){var b=h,a=this.mismatch(a,!0);!0!==a&&(b=Date.UTC("1970",0,1,a[0][0],a[0][1],a[0][2]||0),a[1]&&(b+=a[1]));return b},dateToString:function(a){if(a&&a.getUTCHours){var b=
q(a.getUTCHours(),2)+":"+q(a.getUTCMinutes(),2),c=a.getSeconds();"0"!=c&&(b+=":"+q(c,2));c=a.getUTCMilliseconds();"0"!=c&&(b+="."+q(c,3));return b}return!1}},"datetime-local":{mismatch:function(a,b){if(!a||!a.split||2!==(a+"special").split(/\u0054/).length)return!0;a=a.split(/\u0054/);return f.date.mismatch(a[0])||f.time.mismatch(a[1],b)},noAsDate:!0,asDate:function(a){a=new Date(this.asNumber(a));return isNaN(a)?null:a},asNumber:function(a){var b=h,c=this.mismatch(a,!0);!0!==c&&(a=a.split(/\u0054/)[0].split(/\u002D/),
b=Date.UTC(a[0],a[1]-1,a[2],c[0][0],c[0][1],c[0][2]||0),c[1]&&(b+=c[1]));return b},dateToString:function(a,b){return f.date.dateToString(a)+"T"+f.time.dateToString(a,b)}}};if(t||!i("range")||!i("time")||!i("datetime-local"))f.range=b.extend({},f.number,f.range),f.time=b.extend({},f.date,f.time),f["datetime-local"]=b.extend({},f.date,f.time,f["datetime-local"]);(t||!i("number"))&&c.addInputType("number",f.number);(t||!i("range"))&&c.addInputType("range",f.range);(t||!i("date"))&&c.addInputType("date",
f.date);(t||!i("time"))&&c.addInputType("time",f.time);(t||!i("datetime-local"))&&c.addInputType("datetime-local",f["datetime-local"])});
jQuery.webshims.register("form-number-date-ui",function(b,c,h,g,o,i){var j=c.triggerInlineForm,u=Modernizr.inputtypes,q=function(){var a={"padding-box":"innerWidth","border-box":"outerWidth","content-box":"width"},b=Modernizr.prefixed&&Modernizr.prefixed("boxSizing");return function(c,d){var e,f,g;f="width";b&&(f=a[c.css(b)]||f);e=c[f]();f="width"==f;if(e){var p=parseInt(d.css("marginLeft"),10)||0,i=d.outerWidth();(g=parseInt(c.css("marginRight"),10)||0)&&c.css("marginRight",0);p<=-1*i?(d.css("marginRight",
Math.floor(Math.abs(i+p)+g)),c.css("paddingRight",(parseInt(c.css("paddingRight"),10)||0)+Math.abs(p)),f&&c.css("width",Math.floor(e+p))):(d.css("marginRight",g),c.css("width",Math.floor(e-p-i)))}}}(),t={dateFormat:"yy-mm-dd"},v=b([]),r,f=function(a,k){b("input",a).add(k.filter("input")).each(function(){var a=b.prop(this,"type");if(f[a]&&!c.data(this,"shadowData"))f[a](b(this))})},a=function(a,c){if(i.lazyDate){var l=b.data(a[0],"setDateLazyTimer");l&&clearTimeout(l);b.data(a[0],"setDateLazyTimer",
setTimeout(function(){a.datepicker("setDate",c);b.removeData(a[0],"setDateLazyTimer");a=null},0))}else a.datepicker("setDate",c)};if(i.lazyDate===o)try{i.lazyDate=b.browser.msie&&9>c.browserVersion||500>b(h).width()&&500>b(h).height()}catch(e){}var d={tabindex:1,tabIndex:1,title:1,"aria-required":1,"aria-invalid":1};if(!i.copyAttrs)i.copyAttrs={};c.extendUNDEFProp(i.copyAttrs,d);f.common=function(a,k,l){Modernizr.formvalidation&&a.bind("firstinvalid",function(b){(c.fromSubmit||!r)&&a.unbind("invalid.replacedwidgetbubble").bind("invalid.replacedwidgetbubble",
function(l){!b.isInvalidUIPrevented()&&!l.isDefaultPrevented()&&(c.validityAlert.showFor(b.target),b.preventDefault(),l.preventDefault());a.unbind("invalid.replacedwidgetbubble")})});var e,f,g=b("input, span.ui-slider-handle",k),j=a[0].attributes;for(e in i.copyAttrs)if((f=j[e])&&f.specified)d[e]&&g[0]?g.attr(e,f.nodeValue):k[0].setAttribute(e,f.nodeValue);f=a.attr("id");e=i.calculateWidth?{css:{marginRight:a.css("marginRight"),marginLeft:a.css("marginLeft")},outerWidth:a.outerWidth()}:{};e.label=
f?b('label[for="'+f+'"]',a[0].form):v;f=c.getID(e.label);k.addClass(a[0].className);c.addShadowDom(a,k,{data:l||{},shadowFocusElement:b("input.input-datetime-local-date, span.ui-slider-handle",k)[0],shadowChilds:g});a.after(k).hide();a[0].form&&b(a[0].form).bind("reset",function(b){b.originalEvent&&!b.isDefaultPrevented()&&setTimeout(function(){a.prop("value",a.prop("value"))},0)});1==k.length&&!b("*",k)[0]&&(k.attr("aria-labelledby",f),e.label.bind("click",function(){k.focus();return!1}));return e};
Modernizr.formvalidation&&["input","form"].forEach(function(a){var b=c.defineNodeNameProperty(a,"checkValidity",{prop:{value:function(){r=!0;var a=b.prop._supvalue.apply(this,arguments);r=!1;return a}}})});if(!u["datetime-local"]||i.replaceUI){var w=[0.595,0.395],m=[0.565,0.425],z=!b.browser.msie||6<c.browserVersion?0:0.45,n=function(a,e,l,f){var d,j,h=function(){p.dpDiv.unbind("mousedown.webshimsmousedownhandler");j=d=!1},p=e.bind("focusin",function(){h();p.dpDiv.unbind("mousedown.webshimsmousedownhandler").bind("mousedown.webshimsmousedownhandler",
function(){d=!0})}).bind("focusout blur",function(a){d&&(j=!0,a.stopImmediatePropagation())}).datepicker(b.extend({onClose:function(){j&&g.activeElement!==e[0]?(h(),e.trigger("focusout"),e.triggerHandler("blur")):h()}},t,i.datepicker,a.data("datepicker"))).bind("change",l).data("datepicker");p.dpDiv.addClass("input-date-datepicker-control");f&&c.triggerDomUpdate(f[0]);["disabled","min","max","value","step"].forEach(function(b){var c=a.prop(b);""!==c&&("disabled"!=b||!c)&&a.prop(b,c)});return p};f["datetime-local"]=
function(a){if(b.fn.datepicker){var c=b('<span role="group" class="input-datetime-local"><input type="text" class="input-datetime-local-date" /><input type="time" class="input-datetime-local-time" /></span>'),l=this.common(a,c,f["datetime-local"].attrs),e=b("input.input-datetime-local-date",c),d=n(a,e,function(l){var d=e.prop("value")||"",g="";if(i.lazyDate){var x=b.data(e[0],"setDateLazyTimer");x&&(clearTimeout(x),b.removeData(e[0],"setDateLazyTimer"))}if(d){g=b("input.input-datetime-local-time",
c).prop("value")||"00:00";try{d=(d=b.datepicker.parseDate(e.datepicker("option","dateFormat"),d))?b.datepicker.formatDate("yy-mm-dd",d):e.prop("value")}catch(h){d=e.prop("value")}}f["datetime-local"].blockAttr=!0;a.prop("value",!d&&!g?"":d+"T"+g);f["datetime-local"].blockAttr=!1;l.stopImmediatePropagation();j(a[0],"input");j(a[0],"change")},c);b("input.input-datetime-local-time",c).bind("change",function(c){var l=b.prop(this,"value"),d=["",""];if(l){d=a.prop("value").split("T");if(2>d.length||!d[0])d[0]=
b.datepicker.formatDate("yy-mm-dd",new Date);if(d[1]=l)try{e.prop("value",b.datepicker.formatDate(e.datepicker("option","dateFormat"),b.datepicker.parseDate("yy-mm-dd",d[0])))}catch(k){}}d=!d[0]&&!d[1]?"":d.join("T");f["datetime-local"].blockAttr=!0;a.prop("value",d);f["datetime-local"].blockAttr=!1;c.stopImmediatePropagation();j(a[0],"input");j(a[0],"change")});c.attr("aria-labelledby",l.label.attr("id"));l.label.bind("click",function(){e.focus();return!1});if(l.css&&(c.css(l.css),l.outerWidth)){c.outerWidth(l.outerWidth);
var l=c.width(),g=d.trigger[0]?w:m;e.outerWidth(Math.floor(l*g[0]-z),!0);b("input.input-datetime-local-time",c).outerWidth(Math.floor(l*g[1]-z),!0);d.trigger[0]&&q(e,d.trigger)}}};f["datetime-local"].attrs={disabled:function(a,c,d){b("input.input-datetime-local-date",c).prop("disabled",!!d);b("input.input-datetime-local-time",c).prop("disabled",!!d)},step:function(a,c,d){b("input.input-datetime-local-time",c).attr("step",d)},min:function(a,c,d){if(d){d=d.split?d.split("T"):[];try{d=b.datepicker.parseDate("yy-mm-dd",
d[0])}catch(e){d=!1}}d||(d=null);b("input.input-datetime-local-date",c).datepicker("option","minDate",d)},max:function(a,c,d){if(d){d=d.split?d.split("T"):[];try{d=b.datepicker.parseDate("yy-mm-dd",d[0])}catch(e){d=!1}}d||(d=null);b("input.input-datetime-local-date",c).datepicker("option","maxDate",d)},value:function(c,d,e){var g;if(e){e=e.split?e.split("T"):[];try{g=b.datepicker.parseDate("yy-mm-dd",e[0])}catch(i){g=!1}}g?(f["datetime-local"].blockAttr||a(b("input.input-datetime-local-date",d),g),
b("input.input-datetime-local-time",d).prop("value",e[1]||"00:00")):(b("input.input-datetime-local-date",d).prop("value",e[0]||""),b("input.input-datetime-local-time",d).prop("value",e[1]||""))}};f.date=function(a){if(b.fn.datepicker){var c=b('<input class="input-date" type="text" />'),d=this.common(a,c,f.date.attrs),e=n(a,c,function(d){f.date.blockAttr=!0;var e;if(i.lazyDate){var g=b.data(c[0],"setDateLazyTimer");g&&(clearTimeout(g),b.removeData(c[0],"setDateLazyTimer"))}try{e=(e=b.datepicker.parseDate(c.datepicker("option",
"dateFormat"),c.prop("value")))?b.datepicker.formatDate("yy-mm-dd",e):c.prop("value")}catch(l){e=c.prop("value")}a.prop("value",e);f.date.blockAttr=!1;d.stopImmediatePropagation();j(a[0],"input");j(a[0],"change")});d.css&&(c.css(d.css),d.outerWidth&&c.outerWidth(d.outerWidth),e.trigger[0]&&q(c,e.trigger))}};f.date.attrs={disabled:function(a,c,d){b.prop(c,"disabled",!!d)},min:function(a,c,d){try{d=b.datepicker.parseDate("yy-mm-dd",d)}catch(e){d=!1}d&&b(c).datepicker("option","minDate",d)},max:function(a,
c,d){try{d=b.datepicker.parseDate("yy-mm-dd",d)}catch(e){d=!1}d&&b(c).datepicker("option","maxDate",d)},value:function(c,d,e){if(!f.date.blockAttr){try{var g=b.datepicker.parseDate("yy-mm-dd",e)}catch(i){g=!1}g?a(b(d),g):b.prop(d,"value",e)}}}}if(!u.range||i.replaceUI)f.range=function(a){if(b.fn.slider){var c=b('<span class="input-range"><span class="ui-slider-handle" role="slider" tabindex="0" /></span>'),d=this.common(a,c,f.range.attrs);b("span",c).attr("aria-labelledby",d.label.attr("id"));d.label.bind("click",
function(){b("span",c).focus();return!1});d.css&&(c.css(d.css),d.outerWidth&&c.outerWidth(d.outerWidth));c.slider(b.extend({},i.slider,a.data("slider"),{slide:function(b,c){if(b.originalEvent)f.range.blockAttr=!0,a.prop("value",c.value),f.range.blockAttr=!1,j(a[0],"input"),j(a[0],"change")}}));["disabled","min","max","step","value"].forEach(function(c){var d=a.attr(c),e;"value"==c&&!d&&(e=a.getShadowElement())&&(d=(b(e).slider("option","max")-b(e).slider("option","min"))/2);null!=d&&a.attr(c,d)})}},
f.range.attrs={disabled:function(a,c,d){d=!!d;b(c).slider("option","disabled",d);b("span",c).attr({"aria-disabled":d+"",tabindex:d?"-1":"0"})},min:function(a,c,d){d=d?1*d||0:0;b(c).slider("option","min",d);b("span",c).attr({"aria-valuemin":d})},max:function(a,c,d){d=d||0===d?1*d||100:100;b(c).slider("option","max",d);b("span",c).attr({"aria-valuemax":d})},value:function(a,c,d){d=b(a).prop("valueAsNumber");isNaN(d)||(f.range.blockAttr||b(c).slider("option","value",d),b("span",c).attr({"aria-valuenow":d,
"aria-valuetext":d}))},step:function(a,c,d){d=d&&b.trim(d)?1*d||1:1;b(c).slider("option","step",d)}};if(!c.bugs.valueAsNumberSet&&(i.replaceUI||!Modernizr.inputtypes.date||!Modernizr.inputtypes["datetime-local"]||!Modernizr.inputtypes.range))h=function(){c.data(this,"hasShadow")&&b.prop(this,"value",b.prop(this,"value"))},c.onNodeNamesPropertyModify("input","valueAsNumber",h),c.onNodeNamesPropertyModify("input","valueAsDate",h);b.each(["disabled","min","max","value","step"],function(a,b){c.onNodeNamesPropertyModify("input",
b,function(a){var d=c.data(this,"shadowData");if(d&&d.data&&d.data[b]&&d.nativeElement===this)d.data[b](this,d.shadowElement,a)})});if(!i.availabeLangs)i.availabeLangs="af ar ar-DZ az bg bs ca cs da de el en-AU en-GB en-NZ eo es et eu fa fi fo fr fr-CH gl he hr hu hy id is it ja ko kz lt lv ml ms nl no pl pt-BR rm ro ru sk sl sq sr sr-SR sv ta th tr uk vi zh-CN zh-HK zh-TW".split(" ");h=function(){b.datepicker&&(c.activeLang({langObj:b.datepicker.regional,module:"form-number-date-ui",callback:function(a){b("input.hasDatepicker").filter(".input-date, .input-datetime-local-date").datepicker("option",
b.extend(t,a,i.datepicker))}}),b(g).unbind("jquery-uiReady.langchange input-widgetsReady.langchange"))};b(g).bind("jquery-uiReady.langchange input-widgetsReady.langchange",h);h();(function(){var a=function(){var a={};return function(c){return c in a?a[c]:a[c]=b('<input type="'+c+'" />')[0].type===c}}();if(!a("number")||!a("time")){var d=c.cfg["forms-ext"],e=c.inputTypes,f=function(a,d,f){f=f||{};if(!("type"in f))f.type=b.prop(a,"type");if(!("step"in f))f.step=c.getStep(a,f.type);if(!("valueAsNumber"in
f))f.valueAsNumber=e[f.type].asNumber(b.prop(a,"value"));var g="any"==f.step?e[f.type].step*e[f.type].stepScaleFactor:f.step;c.addMinMaxNumberToCache("min",b(a),f);c.addMinMaxNumberToCache("max",b(a),f);if(isNaN(f.valueAsNumber))f.valueAsNumber=e[f.type].stepBase||0;if("any"!==f.step&&(a=Math.round(1E7*((f.valueAsNumber-(f.minAsnumber||0))%f.step))/1E7)&&Math.abs(a)!=f.step)f.valueAsNumber-=a;a=f.valueAsNumber+g*d;return a=!isNaN(f.minAsNumber)&&a<f.minAsNumber?f.valueAsNumber*d<f.minAsNumber?f.minAsNumber:
isNaN(f.maxAsNumber)?f.valueAsNumber:f.maxAsNumber:!isNaN(f.maxAsNumber)&&a>f.maxAsNumber?f.valueAsNumber*d>f.maxAsNumber?f.maxAsNumber:isNaN(f.minAsNumber)?f.valueAsNumber:f.minAsNumber:Math.round(1E7*a)/1E7};c.modules["form-number-date-ui"].getNextStep=f;var i=function(a,c,d){if(!a.disabled&&!a.readOnly&&!b(d).hasClass("step-controls")&&(b.prop(a,"value",e[c].numberToString(f(a,b(d).hasClass("step-up")?1:-1,{type:c}))),b(a).unbind("blur.stepeventshim"),j(a,"input"),g.activeElement)){if(g.activeElement!==
a)try{a.focus()}catch(i){}setTimeout(function(){if(g.activeElement!==a)try{a.focus()}catch(c){}b(a).one("blur.stepeventshim",function(){j(a,"change")})},0)}};if(d.stepArrows){var h={set:function(){var a=c.data(this,"step-controls");if(a)a[this.disabled||this.readonly?"addClass":"removeClass"]("disabled-step-control")}};c.onNodeNamesPropertyModify("input","disabled",h);c.onNodeNamesPropertyModify("input","readonly",b.extend({},h))}var m={38:1,40:-1};c.addReady(function(g,h){d.stepArrows&&b("input",
g).add(h.filter("input")).each(function(){var g=b.prop(this,"type");if(e[g]&&e[g].asNumber&&d.stepArrows&&!(!0!==d.stepArrows&&!d.stepArrows[g]||a(g)||b(h).hasClass("has-step-controls"))){var h=this,n=b('<span class="step-controls" unselectable="on"><span class="step-up" /><span class="step-down" /></span>').insertAfter(h).bind("selectstart dragstart",function(){return!1}).bind("mousedown mousepress",function(a){i(h,g,a.target);return!1}).bind("mousepressstart mousepressend",function(a){b(a.target)["mousepressstart"==
a.type?"addClass":"removeClass"]("mousepress-ui")}),p=function(a,c){if(!h.disabled&&!h.readOnly)return b.prop(h,"value",e[g].numberToString(f(h,c,{type:g}))),j(h,"input"),!1},o=b(h).addClass("has-step-controls").attr({readonly:h.readOnly,disabled:h.disabled,autocomplete:"off",role:"spinbutton"}).bind(b.browser.msie?"keydown":"keypress",function(a){if(!h.disabled&&!h.readOnly&&m[a.keyCode])return b.prop(h,"value",e[g].numberToString(f(h,m[a.keyCode],{type:g}))),j(h,"input"),!1});b.fn.mwheelIntent?
o.add(n).bind("mwheelIntent",p):o.bind("focus",function(){o.add(n).unbind(".mwhellwebshims").bind("mousewheel.mwhellwebshims",p)}).bind("blur",function(){b(h).add(n).unbind(".mwhellwebshims")});c.data(h,"step-controls",n);d.calculateWidth&&(q(o,n),n.css("marginTop",(o.outerHeight()-n.outerHeight())/2))}})})}})();c.addReady(function(a,d){b(g).bind("jquery-uiReady.initinputui input-widgetsReady.initinputui",function(){(b.datepicker||b.fn.slider)&&f(a,d);b.datepicker&&b.fn.slider?b(g).unbind(".initinputui"):
c.modules["input-widgets"].src||c.warn('jQuery UI Widget factory is already included, but not datepicker or slider. configure src of $.webshims.modules["input-widgets"].src')})})});
