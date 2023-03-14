(()=>{"use strict";var n,e,t,i,r,o,a,s,l,c,d,u,p,m,h={426:(n,e,t)=>{t.d(e,{Z:()=>p});var i=t(81),r=t.n(i),o=t(645),a=t.n(o),s=t(667),l=t.n(s),c=new URL(t(602),t.b),d=a()(r()),u=l()(c);d.push([n.id,"html,\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 100%;\n}\n\n:root {\n  --main-page-color: #fff5e6;\n  --main-red: #ef4444;\n  --main-white: #f8fafc;\n  --main-black: #18181b;\n  --border-radius: 15px;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  font-family: 'Damion', cursive;\n}\n\nul {\n  list-style: none;\n}\n\nbutton {\n  font-family: 'Damion', cursive;\n  font-size: 25px;\n  border-radius: var(--border-radius);\n  color: var(--main-red);\n  background-color: var(--main-white);\n  border: 5px dashed var(--main-black);\n  padding: 20px 40px 20px 40px;\n}\n\nbutton:hover {\n  cursor: pointer;\n  box-shadow: 0px 0px 10px var(--main-red);\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n}\n\n.header {\n  width: 100%;\n  background-color: var(--main-page-color);\n  border-bottom: 5px solid var(--main-black);\n}\n\n.header ul {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  list-style: none;\n  gap: 100px;\n  padding: 40px 0 40px 0;\n  margin: 0px;\n}\n\nimg {\n  height: 100%;\n  width: 100%;\n}\n\n#main-container {\n  height: 1500px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background: url("+u+");\n  background-repeat: repeat;\n}\n\n.content-container {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--main-page-color);\n  border-radius: var(--border-radius);\n  border: 5px solid var(--main-black);\n  width: 1250px;\n  min-width: 700px;\n  height: 1500px;\n  max-width: 90%;\n  max-height: 90%;\n}\n\nh2 {\n  font-family: 'Holtwood One SC', serif;\n  font-size: 80px;\n  color: var(--main-red);\n  margin: 25px 0px 0px 0px;\n}\n\nh4 {\n  font-size: 27px;\n  font-weight: 100;\n  margin-top: 0px;\n}\n\n.sub-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  font-size: 25px;\n  margin-top: 0px;\n}\n\n.luigi-image {\n  width: 100px;\n  height: 110px;\n}\n\n.customer-review,\n.opening-times,\n.contact-us,\n.make-a-booking,\n.burger,\n.grattan,\n.smoothie {\n  align-self: center;\n  justify-self: center;\n  width: 1300px;\n  max-width: 80%;\n  font-family: 'Damion', cursive;\n  font-size: 25px;\n  padding: 10px;\n  border-radius: var(--border-radius);\n  border: 5px dotted var(--main-red);\n  margin-top: 60px;\n  background-color: var(--main-white);\n}\n\n.mario-image {\n  width: 60px;\n  height: 80px;\n}\n\n.quote {\n  margin-bottom: 0px;\n  padding-bottom: 0px;\n}\n\n.quote-attribute {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-top: 0px;\n}\n\n.footer {\n  background-color: var(--main-page-color);\n  border-top: 5px solid var(--main-black);\n  font-size: 20px;\n  font-weight: 70;\n  padding: 50px 0 20px 0;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: auto;\n}\n",""]);const p=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);i&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},a=[],s=0;s<n.length;s++){var l=n[s],c=i.base?l[0]+i.base:l[0],d=o[c]||0,u="".concat(c," ").concat(d);o[c]=d+1;var p=t(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=r(m,i);i.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=i(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=t(o[a]);e[s].references--}for(var l=i(n,r),c=0;c<o.length;c++){var d=t(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=l}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},602:(n,e,t)=>{n.exports=t.p+"8c50902cfbd9c8c7bd73.jpg"}},g={};function f(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return h[n](t,t.exports,f),t.exports}f.m=h,f.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return f.d(e,{a:e}),e},f.d=(n,e)=>{for(var t in e)f.o(e,t)&&!f.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),f.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;f.g.importScripts&&(n=f.g.location+"");var e=f.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),f.p=n})(),f.b=document.baseURI||self.location.href,f.nc=void 0,n=f(379),e=f.n(n),t=f(795),i=f.n(t),r=f(569),o=f.n(r),a=f(565),s=f.n(a),l=f(216),c=f.n(l),d=f(589),u=f.n(d),p=f(426),(m={}).styleTagTransform=u(),m.setAttributes=s(),m.insert=o().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=c(),e()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,document.getElementById("content").innerHTML='\n  <div class="header" id="top-nav"> \n  <ul>\n    <li><button id="home-page-button">Home</button></li>\n    <li><button id="bookings-button">Bookings</button></li>\n    <li><button id="menu-button">Menu</button></li>\n  </ul>\n  </div>\n  <div id="main-container">\n    <div class="content-container">\n        <div class="title">\n            <h2>Luigi\'s Diner</h2>\n            <div class="sub-title">\n              <h4>The best Diner in town "just like mama used to make it!" </h4>\n              <img class="luigi-image" src="./images/luigi.png" alt="Luigi">\n            </div>\n        </div>\n        <div class="customer-review">\n            <p class="quote"> "Luigi\'s has the best green shells in the whole of Mushroom World! \n            Me and my girl Peach feel much safer here than at Bowser\'s firey flame grill." </p> \n            <div class="quote-attribute">\n              <p> - It\'s a me, Mario! </p>\n              <img class="mario-image" src="./images/mario.png" alt="Mario">\n            </div>\n        </div>\n        <div class="opening-times">\n            <h3>Opening times</h3>\n            <ul>\n                <li>Tuesday - Thursday: 6pm - 11pm</li>\n                <li>Friday - Saturday: 12pm - 1am </li>\n                <li>Sunday: 12pm - 7pm </li>\n            </ul>\n        </div>\n        <div class="contact-us">\n            <h3>Contact us</h3>\n            <p>Address: 5 Pipe Lane, Grass Land, Mushroom World </p>\n            <p>Phone: 929-55-LUIGI </p>\n            <p>Email: luigi@yoshimail.com</p>\n        </div>\n    </div>  \n   </div>\n   <div class="footer">\n    <p> © Made by\n    <a href="https://github.com/Barrymoonshine">Barry Moonshine</a> for\n    <a href="https://www.theodinproject.com/">The Odin Project</a>\n    </p>\n    </div>\n  ',document.getElementById("top-nav").addEventListener("click",(n=>{const e=n.target.id;"home-page-button"===e?document.getElementById("main-container").innerHTML='\n      <div class="content-container">\n          <div class="title">\n              <h2>Luigi\'s Diner</h2>\n              <div class="sub-title">\n                <h4>The best Diner in town "just like mama used to make it!" </h4>\n                <img class="luigi-image" src="./images/luigi.png" alt="Luigi">\n              </div>\n          </div>\n          <div class="customer-review">\n              <p class="quote"> "Luigi\'s has the best green shells in the whole of Mushroom World! \n              Me and my girl Peach feel much safer here than at Bowser\'s firey flame grill." </p> \n              <div class="quote-attribute">\n                <p> - It\'s a me, Mario! </p>\n                <img class="mario-image" src="./images/mario.png" alt="Mario">\n              </div>\n          </div>\n          <div class="opening-times">\n              <h3>Opening times</h3>\n              <ul>\n                  <li>Tuesday - Thursday: 6pm - 11pm</li>\n                  <li>Friday - Saturday: 12pm - 1am </li>\n                  <li>Sunday: 12pm - 7pm </li>\n              </ul>\n          </div>\n          <div class="contact-us">\n              <h3>Contact us</h3>\n              <p>Address: 5 Pipe Lane, Grass Land, Mushroom World </p>\n              <p>Phone: 929-55-LUIGI </p>\n              <p>Email: luigi@yoshimail.com</p>\n          </div>\n      </div>  \n     </div>\n    ':"bookings-button"===e?document.getElementById("main-container").innerHTML='\n      <div class="content-container">\n          <div class="title">\n              <h2>Luigi\'s Diner</h2>\n              <div class="sub-title">\n                <h4>The best Diner in town "just like mama used to make it!" </h4>\n                <img class="luigi-image" src="./images/luigi.png" alt="Luigi">\n              </div>\n          </div>\n          <div class="make-a-booking">\n              <p> To make a booking please contact us on our details below, or come into the diner during opening hours.</p> \n          </div>\n          <div class="contact-us">\n              <h3>Contact us</h3>\n              <p>Address: 5 Pipe Lane, Grass Land, Mushroom World </p>\n              <p>Phone: 929-55-LUIGI </p>\n              <p>Email: luigi@yoshimail.com</p>\n          </div>\n          <div class="opening-times">\n              <h3>Opening times</h3>\n              <ul>\n                  <li>Tuesday - Thursday: 6pm - 11pm</li>\n                  <li>Friday - Saturday: 12pm - 1am </li>\n                  <li>Sunday: 12pm - 7pm </li>\n              </ul>\n          </div>\n      </div>  \n    ':"menu-button"===e&&(document.getElementById("main-container").innerHTML='\n        <div class="content-container">\n            <div class="title">\n                <h2>Menu</h2>\n            </div>\n            <div class="burger">\n                <h3>Green shell burger</h3>\n                At Luigi\'s we know what it takes to make a tooth cracking perfect burger! \n                We pack our burgers full of prime green shells, cheese and fry to them to perfection!\n                <h5>$10</h5> \n            </div>\n            <div class="grattan">\n                <h3>Goompa Grattan</h3>\n                Our grattan is a culinary triumph of cheese, butter and Goompa\'s. The ultimate comfort food!\n                <h5>$8</h5> \n            </div>\n            <div class="smoothie">\n                <h3>Mushroom smoothie</h3>\n                Feel on top of the world with our signature mushroom smoothie? In mushrooms we trust ;-) \n                <h5>$5.50</h5> \n            </div>\n        </div>  \n      ')}))})();