"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[336],{2729:function(e){const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,s=new RegExp("^"+o.source),l=new RegExp(o.source+n.source,"gu"),i=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):o(e);return e!==o(e)&&(e=((e,a,n)=>{let o=!1,s=!1,l=!1;for(let i=0;i<e.length;i++){const c=e[i];o&&t.test(c)?(e=e.slice(0,i)+"-"+e.slice(i),o=!1,l=s,s=!0,i++):s&&l&&r.test(c)?(e=e.slice(0,i-1)+"-"+e.slice(i-1),l=s,s=!1,o=!0):(o=a(c)===c&&n(c)!==c,l=s,s=n(c)===c&&a(c)!==c)}return e})(e,o,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,o):o(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,i.lastIndex=0,e.replace(l,((e,r)=>t(r))).replace(i,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,r){r.d(t,{L:function(){return g},M:function(){return k},P:function(){return w},S:function(){return W},_:function(){return l},a:function(){return s},b:function(){return u},g:function(){return d},h:function(){return i}});var a=r(6540),n=(r(2729),r(5556)),o=r.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t.indexOf(r=o[a])>=0||(n[r]=e[r]);return n}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r){const a={};let n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}function u(e,t,r,a,n){return void 0===n&&(n={}),s({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function d(e,t,r,a,n,o,l,i){const c={};o&&(c.backgroundColor=o,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=o,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),i&&(c.objectPosition=i);const u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],p=function(e){let{layout:t,width:r,height:n}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${r}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,r=l(e,m);return a.createElement(a.Fragment,null,a.createElement(p,s({},r)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:r,loading:n,alt:o="",shouldLoad:i}=e,c=l(e,f);return a.createElement("img",s({},c,{decoding:"async",loading:n,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?r:void 0,"data-srcset":i?void 0:r,alt:o}))},y=function(e){let{fallback:t,sources:r=[],shouldLoad:n=!0}=e,o=l(e,h);const i=o.sizes||(null==t?void 0:t.sizes),c=a.createElement(b,s({},o,t,{sizes:i,shouldLoad:n}));return r.length?a.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:o}=e;return a.createElement("source",{key:`${t}-${o}-${r}`,type:o,media:t,srcSet:n?r:void 0,"data-srcset":n?void 0:r,sizes:i})})),c):c};var v;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],w=function(e){let{fallback:t}=e,r=l(e,E);return t?a.createElement(y,s({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",s({},r))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(v=y.propTypes)?void 0:v.sources,alt:function(e,t,r){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${r}\`. Validation failed.`):null}};const k=function(e){return a.createElement(a.Fragment,null,a.createElement(y,s({},e)),a.createElement("noscript",null,a.createElement(y,s({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=y.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],O=["style","className"],L=e=>e.replace(/\n/g,""),j=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),s=3;s<a;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?o().string.apply(o(),[e,t,r].concat(n)):new Error(`The "alt" prop is required in ${r}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},C={image:o().object.isRequired,alt:j},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],P=new Set;let I,T;const $=function(e){let{as:t="div",image:n,style:o,backgroundColor:u,className:d,class:m,onStartLoad:p,onLoad:g,onError:f}=e,h=l(e,S);const{width:b,height:y,layout:v}=n,E=c(b,y,v),{style:w,className:k}=E,N=l(E,x),O=(0,a.useRef)(),L=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const j=function(e,t,r){let a="";return"fullWidth"===e&&(a=`<div aria-hidden="true" style="padding-top: ${r/t*100}%;"></div>`),"constrained"===e&&(a=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),a}(v,b,y);return(0,a.useEffect)((()=>{I||(I=r.e(108).then(r.bind(r,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=O.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void P.add(L);if(T&&P.has(L))return;let t,a;return I.then((e=>{let{renderImageToString:r,swapPlaceholderImage:l}=e;O.current&&(O.current.innerHTML=r(s({isLoading:!0,isLoaded:P.has(L),image:n},h)),P.has(L)||(t=requestAnimationFrame((()=>{O.current&&(a=l(O.current,L,P,o,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{P.has(L)&&T&&(O.current.innerHTML=T(s({isLoading:P.has(L),isLoaded:P.has(L),image:n},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,a.createElement)(t,s({},N,{style:s({},w,o,{backgroundColor:u}),className:`${k}${d?` ${d}`:""}`,ref:O,dangerouslySetInnerHTML:{__html:j},suppressHydrationWarning:!0}))},_=(0,a.memo)((function(e){return e.image?(0,a.createElement)($,e):null}));_.propTypes=C,_.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:r,__imageData:n,__error:o}=t,i=l(t,R);return o&&console.warn(o),n?a.createElement(e,s({image:n},i)):(console.warn("Image not loaded",r),null)}}const q=A((function(e){let{as:t="div",className:r,class:n,style:o,image:i,loading:m="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:b,objectPosition:y}=e,v=l(e,N);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(r=n),f=s({objectFit:b,objectPosition:y,backgroundColor:h},f);const{width:E,height:j,layout:C,images:S,placeholder:x,backgroundColor:P}=i,I=c(E,j,C),{style:T,className:$}=I,_=l(I,O),R={fallback:void 0,sources:[]};return S.fallback&&(R.fallback=s({},S.fallback,{srcSet:S.fallback.srcSet?L(S.fallback.srcSet):void 0})),S.sources&&(R.sources=S.sources.map((e=>s({},e,{srcSet:L(e.srcSet)})))),a.createElement(t,s({},_,{style:s({},T,o,{backgroundColor:h}),className:`${$}${r?` ${r}`:""}`}),a.createElement(g,{layout:C,width:E,height:j},a.createElement(w,s({},d(x,!1,C,E,j,P,b,y))),a.createElement(k,s({"data-gatsby-image-ssr":"",className:p},v,u("eager"===m,!1,R,m,f)))))})),z=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(a)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},D=new Set(["fixed","fullWidth","constrained"]),M={src:o().string.isRequired,alt:j,width:z,height:z,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!D.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};q.displayName="StaticImage",q.propTypes=M;const W=A(_);W.displayName="StaticImage",W.propTypes=M},9371:function(e,t,r){r.d(t,{A:function(){return o}});var a=r(6540),n=r(8027);var o=()=>a.createElement("footer",{className:"footerbar-module--footerBar--d638e"},a.createElement("div",{className:"footerbar-module--content--e511c"},a.createElement("h1",null,"Raveen Prabhu"),a.createElement("p",null,"Full-Stack Developer"),a.createElement("div",{className:"footerbar-module--icons--e982e"},a.createElement("a",{href:"https://www.linkedin.com/in/raveenprabhu/",target:"_blank",rel:"noopener noreferrer"},a.createElement(n.QEs,null)),a.createElement("a",{href:"https://github.com/itsraveen",target:"_blank",rel:"noopener noreferrer"},a.createElement(n.hL4,null)),a.createElement("a",{href:"mailto:raveenprabhu99@gmail.com"},a.createElement(n.maD,null))),a.createElement("p",{className:"footerbar-module--builtby--13443"},"Built with React & Gatsby for Desktop (Mobile ver coming soon!). Icons by ",a.createElement("a",{href:"https://icons8.com/",target:"_blank",rel:"noopener noreferrer"},"Icons8"))))},9875:function(e,t,r){r.d(t,{A:function(){return l}});var a=r(6540),n=r(4794),o="navbar-module--navbarItem--e0fb4",s="navbar-module--navbarLink--2eeb6";var l=()=>a.createElement("nav",{id:"navbar",className:"navbar-module--navbar--b30c8"},a.createElement("div",{className:"navbar-module--navbarLeft--2bfc4"},a.createElement(n.Link,{to:"/",className:s},a.createElement("span",{className:"navbar-module--navbarBrand--79f0b"},"Raveen Prabhu"))),a.createElement("div",{className:"navbar-module--navbarRight--393de"},a.createElement("ul",{className:"navbar-module--navbarMenu--0cac3"},a.createElement("li",{className:o},a.createElement(n.Link,{to:"/",className:s},"Home")),a.createElement("li",{className:o},a.createElement(n.Link,{to:"/about",className:s},"About")),a.createElement("li",{className:o},a.createElement(n.Link,{to:"/experience",className:s},"Experiences")),a.createElement("li",{className:o},a.createElement(n.Link,{to:"/projects",className:s},"Projects")))))},2225:function(e,t,r){r.d(t,{k5:function(){return p}});var a=r(6540),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=a.createContext&&a.createContext(n),s=["attr","size","title"];function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){return e&&e.map(((e,t)=>a.createElement(e.tag,u({key:t},e.attr),m(e.child))))}function p(e){return t=>a.createElement(g,i({attr:u({},e.attr)},t),m(e.child))}function g(e){var t=t=>{var r,{attr:n,size:o,title:c}=e,d=l(e,s),m=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,d,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),e.children)};return void 0!==o?a.createElement(o.Consumer,null,(e=>t(e))):t(n)}}}]);
//# sourceMappingURL=d4ad233efeb1d959420253442063e6db7488fdeb-39dfe4a85ca6e1c67911.js.map