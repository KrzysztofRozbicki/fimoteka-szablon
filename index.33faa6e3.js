function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=n.parcelRequireee52;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},n.parcelRequireee52=i),i.register("27Lyk",(function(t,n){var r,a;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>a),(e=>a=e));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("27Lyk").register(JSON.parse('{"9vqfN":"index.33faa6e3.js","fDMEU":"camera.f952092c.png","90HkZ":"film.00eaedd2.png","br9vd":"index.715f30e0.css","3tz8O":"index.b4ff12f2.js"}'));var d=i("fmRoT"),s=i("4rMUO"),o=i("geVIX"),l=i("ibngl");var g,c=i("cz9oG");g=new URL(i("27Lyk").resolve("fDMEU"),import.meta.url).toString();var u;const f=`\n<div id="loager" class="loader">\n  <div class="loader__container">\n    <div class="loader__film">\n      <img\n        class="loader__film-img"\n        src="${t(u=new URL(i("27Lyk").resolve("90HkZ"),import.meta.url).toString())}"\n        alt=""\n      />\n      <img\n        class="loader__film-img"\n        src="${t(u)}"\n        alt=""\n      />\n    </div>\n    <img\n      class="loader__camera"\n      src="${t(g)}"\n      alt=""\n    />\n  </div>\n</div>`;var m=i("koqPI"),p=i("lwfqC");const v=document.getElementById("wrapper"),y=document.getElementById("search-form"),E=document.getElementById("search-input"),_=document.getElementById("next-btn"),b=document.getElementById("previous-btn"),h=document.getElementById("pagination"),w=document.getElementById("search-error");(0,m.reloadHeader)(),(0,m.setRegisterAndSignUp)();const L=new class{#e=1;#t=0;#n="";#r=!0;get page(){return this.#e}set page(e){this.#e=e}incrementPage(){this.#e++}decrementPage(){this.#e--}get totalPages(){return this.#t}set totalPages(e){this.#t=e}get query(){return this.#n}set query(e){this.#n=e}get trending(){return this.#r}set trending(e){this.#r=e}},k=()=>new URLSearchParams({query:L.query,api_key:o.KEY,language:o.LANGUAGE,include_adult:!1,page:L.page}),H=async e=>{try{v.innerHTML=f;const t=await d.default.get(e);if(0===t.data.results.length)throw new Error;(0,l.createMovies)(t.data,L)}catch(e){w.classList.remove("waiting")}},R=async e=>{H(e?`${o.URL}trending/movie/week?${k()}`:`${o.URL}search/movie?${k()}`)};R(L.trending),h.addEventListener("click",(e=>{"number"==typeof+e.target.innerText&&(L.page=+e.target.innerText),R(L.trending)})),_.addEventListener("click",(()=>{L.incrementPage(),R(L.trending)})),b.addEventListener("click",(()=>{L.decrementPage(),R(L.trending)})),y.addEventListener("submit",(e=>{e.preventDefault(),w.classList.add("waiting"),L.query=E.value,L.trending=!1,R(L.trending),E.value=""})),v.addEventListener("click",(e=>{(0,s.fetchSingleMovie)(+e.target.parentNode.dataset.id,d.default)})),window.addEventListener("resize",t(p)((()=>(0,c.createPagination)(L)),100));
//# sourceMappingURL=index.33faa6e3.js.map
