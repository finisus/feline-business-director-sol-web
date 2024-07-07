"use strict";(self.webpackChunkfeline_business_director_sol_web=self.webpackChunkfeline_business_director_sol_web||[]).push([[57],{208:(n,e,t)=>{t.d(e,{A:()=>f});var a=t(354),r=t.n(a),o=t(314),A=t.n(o),i=t(417),c=t.n(i),s=new URL(t(491),t.b),p=new URL(t(123),t.b),l=new URL(t(236),t.b),d=new URL(t(229),t.b),C=A()(r()),m=c()(s),u=c()(p),g=c()(l),B=c()(d);C.push([n.id,`@font-face {\n  font-family: 'corleone';\n  src: url(${m});\n}\n@font-face {\n  font-family: 'corleoneDue';\n  src: url(${u});\n}\n@font-face {\n  font-family: 'hardsign';\n  src: url(${g});\n}\n@font-face {\n  font-family: 'heird';\n  src: url(${B});\n}\n\n:root {\n  --background: rgba(28, 27, 23, 1.0);\n  --backgroundTranslucent: rgba(28, 27, 23, 0.69);\n  --text: rgba(255, 255, 255, 1.0);\n  --primary: rgba(235, 174, 94, 1.0);\n  --primaryTranslucent: rgba(235, 174, 94, 0.69);\n  --secondary: rgba(133,76,21, 1.0);\n  --secondaryTranslucent: rgba(133,76,21, 0.8);\n  --accent: rgba(190, 35, 21, 1.0);\n  --accentTranslucent: rgba(190, 35, 21, 0.69);\n}\n\n.goldText {\n  color: var(--primary) !important;\n}\n\nhtml {\n  height: 100%;\n}\nbody {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n\n  font-family: 'hardsign';\n  background-color: var(--background);\n  color: var(--text);\n\n  overflow: hidden;\n}\n\n#landingPage {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n#closeLandingBtn {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  white-space: nowrap;\n  font-size: 1.6rem;\n  font-family: 'hardsign';\n  letter-spacing: 3px;\n  color: var(--text);\n  background-color: var(--background);\n  padding: 8px 16px;\n  border: 3px solid var(--primary);\n  cursor: pointer;\n}\n\n\n#mainPage {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 16px;\n}\n\n#mainPage header {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin-top: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#mainPage header span {\n  margin: 0;\n  font-size: 4rem;\n  letter-spacing: 2px;\n  line-height: 3.5rem;\n  text-align: center;\n}\n\n\n#mainPage main {\n  width: 100%;\n  height: calc(100% - 170px);\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin-top: 96px;\n}\n\n#fbdMainImg {\n  width: 400px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin-top: -24px;\n  border: 3px solid var(--primary);\n  padding: 16px;\n  background-color: var(--background);\n}\n\n#socials {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n#socials button {\n  font-family: 'hardsign';\n  font-size: 1.5rem;\n  letter-spacing: 3px;\n  color: var(--text);\n  background-color: var(--background);\n  padding: 8px 16px;\n  border: 3px solid var(--primary);\n}\n#buyBtn {\n  color: var(--text) !important;\n  background-color: rgba(34, 44, 44, 1.0) !important;\n  border: 3px solid rgba(115, 139, 140, 1.0) !important;\n}\n\n\n#mainPage footer {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n#contractContainer {\n  width: 100%;\n  display: flex; \n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 16px;\n  background-color: var(--background);\n  border: 3px solid var(--primary);\n}\n#contractContainer span {\n  font-size: 1.4rem;\n  letter-spacing: 2px;\n  white-space: nowrap;\n}\n#contractContainer button {\n  font-family: 'hardsign';\n  font-size: 1.5rem;\n  letter-spacing: 3px;\n  white-space: nowrap;\n\n  background-color: var(--background);\n  border: none;\n  color: var(--primary);\n  cursor: pointer;\n}\n\n\n@media screen and (max-width: 736px) {\n  \n  #closeLandingBtn {\n    font-size: 1.2rem;\n  }\n\n\n  #mainPage header {\n    margin-top: 12px;\n    white-space: wrap;\n  }\n  #mainPage header span {\n    margin: 0;\n    font-size: 3rem;\n  }\n\n\n  #mainPage main {\n    height: calc(100% - 200px);\n    margin-top: 125px;\n  }\n\n  #fbdMainImg {\n    width: 240px;\n    margin-top: -64px;\n    border: 3px solid var(--primary);\n    padding: 12px;\n  }\n\n\n  #socials {\n    margin-bottom: 12px;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-column-gap: 12px;\n    grid-row-gap: 12px; \n  }\n  #socials button {\n    font-size: 1.4rem;\n    letter-spacing: 2px;\n    padding: 6px 12px;\n  }\n\n\n  #contractContainer {\n    gap: 12px;\n    padding: 12px;\n    justify-content: center;\n  }\n  #contractContainer span {\n    font-size: 1rem;\n    white-space: wrap;\n    word-break: break-all;\n    text-align: start;\n  }\n  #contractContainer button {\n    font-size: 1.4rem;\n    letter-spacing: 2px;\n  }\n\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:["@font-face {\n  font-family: 'corleone';\n  src: url('./metadata/font/corleone.ttf');\n}\n@font-face {\n  font-family: 'corleoneDue';\n  src: url('./metadata/font/corleoneDue.ttf');\n}\n@font-face {\n  font-family: 'hardsign';\n  src: url('./metadata/font/hardsignLayered.ttf');\n}\n@font-face {\n  font-family: 'heird';\n  src: url('./metadata/font/heidardemoRegular.otf');\n}\n\n:root {\n  --background: rgba(28, 27, 23, 1.0);\n  --backgroundTranslucent: rgba(28, 27, 23, 0.69);\n  --text: rgba(255, 255, 255, 1.0);\n  --primary: rgba(235, 174, 94, 1.0);\n  --primaryTranslucent: rgba(235, 174, 94, 0.69);\n  --secondary: rgba(133,76,21, 1.0);\n  --secondaryTranslucent: rgba(133,76,21, 0.8);\n  --accent: rgba(190, 35, 21, 1.0);\n  --accentTranslucent: rgba(190, 35, 21, 0.69);\n}\n\n.goldText {\n  color: var(--primary) !important;\n}\n\nhtml {\n  height: 100%;\n}\nbody {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n\n  font-family: 'hardsign';\n  background-color: var(--background);\n  color: var(--text);\n\n  overflow: hidden;\n}\n\n#landingPage {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n#closeLandingBtn {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  white-space: nowrap;\n  font-size: 1.6rem;\n  font-family: 'hardsign';\n  letter-spacing: 3px;\n  color: var(--text);\n  background-color: var(--background);\n  padding: 8px 16px;\n  border: 3px solid var(--primary);\n  cursor: pointer;\n}\n\n\n#mainPage {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 16px;\n}\n\n#mainPage header {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin-top: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#mainPage header span {\n  margin: 0;\n  font-size: 4rem;\n  letter-spacing: 2px;\n  line-height: 3.5rem;\n  text-align: center;\n}\n\n\n#mainPage main {\n  width: 100%;\n  height: calc(100% - 170px);\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin-top: 96px;\n}\n\n#fbdMainImg {\n  width: 400px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin-top: -24px;\n  border: 3px solid var(--primary);\n  padding: 16px;\n  background-color: var(--background);\n}\n\n#socials {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n#socials button {\n  font-family: 'hardsign';\n  font-size: 1.5rem;\n  letter-spacing: 3px;\n  color: var(--text);\n  background-color: var(--background);\n  padding: 8px 16px;\n  border: 3px solid var(--primary);\n}\n#buyBtn {\n  color: var(--text) !important;\n  background-color: rgba(34, 44, 44, 1.0) !important;\n  border: 3px solid rgba(115, 139, 140, 1.0) !important;\n}\n\n\n#mainPage footer {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n#contractContainer {\n  width: 100%;\n  display: flex; \n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 16px;\n  background-color: var(--background);\n  border: 3px solid var(--primary);\n}\n#contractContainer span {\n  font-size: 1.4rem;\n  letter-spacing: 2px;\n  white-space: nowrap;\n}\n#contractContainer button {\n  font-family: 'hardsign';\n  font-size: 1.5rem;\n  letter-spacing: 3px;\n  white-space: nowrap;\n\n  background-color: var(--background);\n  border: none;\n  color: var(--primary);\n  cursor: pointer;\n}\n\n\n@media screen and (max-width: 736px) {\n  \n  #closeLandingBtn {\n    font-size: 1.2rem;\n  }\n\n\n  #mainPage header {\n    margin-top: 12px;\n    white-space: wrap;\n  }\n  #mainPage header span {\n    margin: 0;\n    font-size: 3rem;\n  }\n\n\n  #mainPage main {\n    height: calc(100% - 200px);\n    margin-top: 125px;\n  }\n\n  #fbdMainImg {\n    width: 240px;\n    margin-top: -64px;\n    border: 3px solid var(--primary);\n    padding: 12px;\n  }\n\n\n  #socials {\n    margin-bottom: 12px;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-column-gap: 12px;\n    grid-row-gap: 12px; \n  }\n  #socials button {\n    font-size: 1.4rem;\n    letter-spacing: 2px;\n    padding: 6px 12px;\n  }\n\n\n  #contractContainer {\n    gap: 12px;\n    padding: 12px;\n    justify-content: center;\n  }\n  #contractContainer span {\n    font-size: 1rem;\n    white-space: wrap;\n    word-break: break-all;\n    text-align: start;\n  }\n  #contractContainer button {\n    font-size: 1.4rem;\n    letter-spacing: 2px;\n  }\n\n}"],sourceRoot:""}]);const f=C},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(a)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(A[c]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);a&&A[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),o="/*# ".concat(r," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},A=[],i=0;i<n.length;i++){var c=n[i],s=a.base?c[0]+a.base:c[0],p=o[s]||0,l="".concat(s," ").concat(p);o[s]=p+1;var d=t(l),C={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(C);else{var m=r(C,a);a.byIndex=i,e.splice(i,0,{identifier:l,updater:m,references:1})}A.push(l)}return A}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var A=0;A<o.length;A++){var i=t(o[A]);e[i].references--}for(var c=a(n,r),s=0;s<o.length;s++){var p=t(o[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=c}}},659:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},639:(n,e,t)=>{var a=t(72),r=t.n(a),o=t(825),A=t.n(o),i=t(659),c=t.n(i),s=t(56),p=t.n(s),l=t(540),d=t.n(l),C=t(113),m=t.n(C),u=t(208),g={};g.styleTagTransform=m(),g.setAttributes=p(),g.insert=c().bind(null,"head"),g.domAPI=A(),g.insertStyleElement=d(),r()(u.A,g),u.A&&u.A.locals&&u.A.locals;const B=t.p+"140a737f694758abe33d.mp3",f=t.p+"c2aaf276e2677436264a.jpg",E=document.getElementById("landingPage");E.style.display="block";const b=document.createElement("button");b.id="closeLandingBtn",b.innerHTML="STAND ON BIDNESS",E.appendChild(b);const h=document.getElementById("mainPage");h.style.display="none";const x=document.querySelector("header"),y=document.createElement("span");y.innerHTML="";const v=document.createElement("span");v.classList.add("goldText"),v.innerHTML="F",y.appendChild(v);const k=document.createElement("span");k.innerHTML="eline ",y.appendChild(k);const w=document.createElement("span");w.classList.add("goldText"),w.innerHTML="B",y.appendChild(w);const T=document.createElement("span");T.innerHTML="usiness ",y.appendChild(T);const I=document.createElement("span");I.classList.add("goldText"),I.innerHTML="D",y.appendChild(I);const S=document.createElement("span");S.innerHTML="irector",y.appendChild(S),x.appendChild(y);const L=document.querySelector("main"),M=document.createElement("img");M.id="fbdMainImg",M.src=f,L.appendChild(M);const P=document.createElement("div");P.id="socials";const j=document.createElement("button");j.id="telegramBtn",j.innerHTML="Telegram",P.appendChild(j);const z=document.createElement("button");z.id="twitterBtn",z.innerHTML="Twitter",P.appendChild(z);const H=document.createElement("button");H.id="chartBtn",H.innerHTML="Chart",P.appendChild(H);const O=document.createElement("button");O.id="buyBtn",O.innerHTML="BUY",P.appendChild(O),L.appendChild(P);const D=document.querySelector("footer"),q=document.createElement("div");q.id="contractContainer";const N=document.createElement("span");N.innerHTML="J1HzSWXGdebYKQoEA4qCtaimYpWiSpSPvhuUnxXdpump",q.appendChild(N);const R=document.createElement("button");R.innerHTML="COPY",q.appendChild(R),D.appendChild(q),document.addEventListener("DOMContentLoaded",(function(){const n=new Audio(B);n.loop=!0,n.volume=1,b.addEventListener("click",(function(){n.play(),E.style.display="none",h.style.display="block"})),j.addEventListener("click",(()=>window.open("https://t.me/fbdportal","_self"))),z.addEventListener("click",(()=>window.open("https://x.com/felinebusiness","_self"))),H.addEventListener("click",(()=>window.open("https://dexscreener.com/solana/Ev6Pq1F5hxXcFVAyKdisWMLfHgvGzCNpL4G1xBaNFhNr","_blank"))),O.addEventListener("click",(()=>window.open("https://raydium.io/swap?outputMint=J1HzSWXGdebYKQoEA4qCtaimYpWiSpSPvhuUnxXdpump","_blank")));const e=N.innerHTML;R.addEventListener("click",(async()=>{try{await navigator.clipboard.writeText(e),console.log("Text copied successfully using Clipboard API"),alert("Contract copied successfully!")}catch(n){const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),console.log("Text copied successfully using legacy approach"),alert("Contract copied successfully!")}}))}))},491:(n,e,t)=>{n.exports=t.p+"fonts/corleone.ttf"},123:(n,e,t)=>{n.exports=t.p+"fonts/corleoneDue.ttf"},236:(n,e,t)=>{n.exports=t.p+"fonts/hardsignLayered.ttf"},229:(n,e,t)=>{n.exports=t.p+"fonts/heidardemoRegular.otf"}},n=>{n(n.s=639)}]);
//# sourceMappingURL=index.bundle.js.map