(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[223],{8828:function(t){"use strict";t.exports=Object.assign},6045:function(t,e,n){"use strict";n.d(e,{A:function(){return mt}});var r,o,i,a,s=n(6540),u=n(5556),c=n.n(u),l=n(2098),f=n.n(l),p=n(115),d=n.n(p),y=n(8828),h=n.n(y),m="bodyAttributes",b="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(v).map((function(t){return v[t]})),"charset"),w="cssText",C="href",O="http-equiv",A="innerHTML",E="itemprop",S="name",k="property",j="rel",P="src",x="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",M="defer",N="encodeSpecialCharacters",B="onChangeClientState",D="titleTemplate",R=Object.keys(I).reduce((function(t,e){return t[I[e]]=e,t}),{}),H=[v.NOSCRIPT,v.SCRIPT,v.STYLE],_="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},U=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},z=function(t){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(t){var e=G(t,v.TITLE),n=G(t,D);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=G(t,L);return e||r||void 0},V=function(t){return G(t,B)||function(){}},W=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return Y({},t,e)}),{})},$=function(t,e){return e.filter((function(t){return void 0!==t[v.BASE]})).map((function(t){return t[v.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},J=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&et("Helmet: "+t+' should be of type "Array". Instead found type "'+q(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var s=i[a],u=s.toLowerCase();-1===e.indexOf(u)||n===j&&"canonical"===t[n].toLowerCase()||u===j&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(s)||s!==A&&s!==w&&s!==E||(n=s)}if(!n||!t[n])return!1;var c=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],u=h()({},r[s],o[s]);r[s]=u}return t}),[]).reverse()},G=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},Q=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){Q(t)}),0)}),X=function(t){return clearTimeout(t)},Z="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,tt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||X:n.g.cancelAnimationFrame||X,et=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},nt=null,rt=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,u=t.onChangeClientState,c=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;at(v.BODY,r),at(v.HTML,o),it(f,p);var d={baseTag:st(v.BASE,n),linkTags:st(v.LINK,i),metaTags:st(v.META,a),noscriptTags:st(v.NOSCRIPT,s),scriptTags:st(v.SCRIPT,c),styleTags:st(v.STYLE,l)},y={},h={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(y[t]=n),r.length&&(h[t]=d[t].oldTags)})),e&&e(),u(t,y,h)},ot=function(t){return Array.isArray(t)?t.join(""):t},it=function(t,e){void 0!==t&&document.title!==t&&(document.title=ot(t)),at(v.TITLE,e)},at=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(_),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),s=0;s<a.length;s++){var u=a[s],c=e[u]||"";n.getAttribute(u)!==c&&n.setAttribute(u,c),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(_):n.getAttribute(_)!==a.join(",")&&n.setAttribute(_,a.join(","))}},st=function(t,e){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(t+"["+_+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===A)n.innerHTML=e.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var s=void 0===e[r]?"":e[r];n.setAttribute(r,s)}n.setAttribute(_,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},ut=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ct=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[I[n]||n]=t[n],e}),e)},lt=function(t,e,n){switch(t){case v.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[_]=!0,o=ct(n,r),[s.createElement(v.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=ut(n),i=ot(e);return o?"<"+t+" "+_+'="true" '+o+">"+z(i,r)+"</"+t+">":"<"+t+" "+_+'="true">'+z(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case m:case b:return{toComponent:function(){return ct(e)},toString:function(){return ut(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[_]=!0,r);return Object.keys(e).forEach((function(t){var n=I[t]||t;if(n===A||n===w){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),s.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===A||t===w)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+z(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===H.indexOf(t);return e+"<"+t+" "+_+'="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},ft=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,u=t.scriptTags,c=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:lt(v.BASE,e,r),bodyAttributes:lt(m,n,r),htmlAttributes:lt(b,o,r),link:lt(v.LINK,i,r),meta:lt(v.META,a,r),noscript:lt(v.NOSCRIPT,s,r),script:lt(v.SCRIPT,u,r),style:lt(v.STYLE,c,r),title:lt(v.TITLE,{title:f,titleAttributes:p},r)}},pt=f()((function(t){return{baseTag:$([C,x],t),bodyAttributes:W(m,t),defer:G(t,M),encode:G(t,N),htmlAttributes:W(b,t),linkTags:J(v.LINK,[j,C],t),metaTags:J(v.META,[S,T,O,k,E],t),noscriptTags:J(v.NOSCRIPT,[A],t),onChangeClientState:V(t),scriptTags:J(v.SCRIPT,[P,A],t),styleTags:J(v.STYLE,[w],t),title:K(t),titleAttributes:W(g,t)}}),(function(t){nt&&tt(nt),t.defer?nt=Z((function(){rt(t,(function(){nt=null}))})):(rt(t),nt=null)}),ft)((function(){return null})),dt=(o=pt,a=i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!d()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:e};case v.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return Y({},r,((e={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case v.TITLE:return Y({},o,((e={})[r.type]=a,e.titleAttributes=Y({},i),e));case v.BODY:return Y({},o,{bodyAttributes:Y({},i)});case v.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((n={})[r.type]=Y({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=Y({},e);return Object.keys(t).forEach((function(e){var r;n=Y({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return s.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[R[n]||n]=t[n],e}),e)}(U(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=U(t,["children"]),r=Y({},n);return e&&(r=this.mapChildrenToProps(e,r)),s.createElement(o,r)},F(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(s.Component),i.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=ft({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);dt.renderStatic=dt.rewind;function yt(){return yt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yt.apply(this,arguments)}var ht={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};new(function(){function t(){}var e=t.prototype;return e.load=function(t,e,n){if(t.el="string"==typeof n?document.querySelector(n):n,t.options=yt({},ht,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),t.stringsElement="string"==typeof t.options.stringsElement?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var r=Array.prototype.slice.apply(t.stringsElement.children),o=r.length;if(o)for(var i=0;i<o;i+=1)t.strings.push(r[i].innerHTML.trim())}for(var a in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[a]=a;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(n)}},e.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(n)}},t}()),new(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(t,e,n){if("html"!==n.contentType)return e;var r=t.substring(e).charAt(0);if("<"===r||"&"===r){var o;for(o="<"===r?">":";";t.substring(e+1).charAt(0)!==o&&!(1+ ++e>t.length););e++}return e},e.backSpaceHtmlChars=function(t,e,n){if("html"!==n.contentType)return e;var r=t.substring(e).charAt(0);if(">"===r||";"===r){var o;for(o=">"===r?"<":"&";t.substring(e-1).charAt(0)!==o&&!(--e<0););e--}return e},t}());var mt=t=>{let{pageTitle:e,children:n}=t;return s.createElement("div",null,s.createElement(dt,null,s.createElement("title",null,e),s.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",rel:"stylesheet"})),s.createElement("div",{className:"layout-module--container--6b122"},s.createElement("main",null,n)))}},115:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var s,u,c,l;if(Array.isArray(t)){if((s=t.length)!=a.length)return!1;for(u=s;0!=u--;)if(!i(t[u],a[u]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((s=t.length)!=a.length)return!1;for(u=s;0!=u--;)if(t[u]!==a[u])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"==typeof t.valueOf&&"function"==typeof a.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString&&"function"==typeof t.toString&&"function"==typeof a.toString)return t.toString()===a.toString();if((s=(c=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(u=s;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,c[u]))return!1;if(e&&t instanceof Element)return!1;for(u=s;0!=u--;)if(("_owner"!==c[u]&&"__v"!==c[u]&&"__o"!==c[u]||!t.$$typeof)&&!i(t[c[u]],a[c[u]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return i(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},2098:function(t,e,n){"use strict";var r,o=n(6540),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,c=[];function l(){u=t(c.map((function(t){return t.props}))),f.canUseDOM?e(u):n&&(u=n(u))}var f=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,c=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){c.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var t=c.indexOf(this);c.splice(t,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(f,"canUseDOM",s),f}}},7097:function(t){"use strict";t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8d8","images":{"fallback":{"src":"/static/c0089f4e52ed5041f6c060085c4de027/afa21/profile3.jpg","srcSet":"/static/c0089f4e52ed5041f6c060085c4de027/1b894/profile3.jpg 320w,\\n/static/c0089f4e52ed5041f6c060085c4de027/30f07/profile3.jpg 640w,\\n/static/c0089f4e52ed5041f6c060085c4de027/afa21/profile3.jpg 1280w","sizes":"(min-width: 1280px) 1280px, 100vw"},"sources":[{"srcSet":"/static/c0089f4e52ed5041f6c060085c4de027/5e011/profile3.webp 320w,\\n/static/c0089f4e52ed5041f6c060085c4de027/90d07/profile3.webp 640w,\\n/static/c0089f4e52ed5041f6c060085c4de027/9e21f/profile3.webp 1280w","type":"image/webp","sizes":"(min-width: 1280px) 1280px, 100vw"}]},"width":1280,"height":1280}')}}]);
//# sourceMappingURL=commons-f146f67d7fc91557c4b0.js.map