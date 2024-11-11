var x=t=>{throw TypeError(t)};var C=(t,e,n)=>e.has(t)||x("Cannot "+n);var E=(t,e,n)=>(C(t,e,"read from private field"),n?n.call(t):e.get(t)),q=(t,e,n)=>e.has(t)?x("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);var m=(t,e,n)=>(C(t,e,"access private method"),n);import{a as Y}from"./vendor-CNNbG8jS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const I="/goit-js-finalproject-team-6/assets/sprites-BBg-cZko.svg";var L,l,y,H;class G{constructor(){q(this,l);q(this,L,Y.create({baseURL:"https://your-energy.b.goit.study/api/"}))}async exerciseInfo(e){return m(this,l,y).call(this,`exercises/${e}`)}async setExerciseRating({exerciseId:e,rate:n,email:i,review:o}){return m(this,l,H).call(this,`exercises/${e}/rating`,{rate:n,email:i,review:o})}async getQuote(){return m(this,l,y).call(this,"quote")}async searchExercises({filter:e,page:n,limit:i,keyword:o}){return m(this,l,y).call(this,"filters",{query:{filter:e.replace(/%20/g," "),page:n,limit:i,keyword:o}})}async exerciseDetails({page:e,limit:n,keyword:i,custom:o}){i&&(i=i.replace(/%20/g," "));const s={page:e,limit:n,keyword:i,...o??{}};return await m(this,l,y).call(this,"exercises",{query:s})}}L=new WeakMap,l=new WeakSet,y=async function(e,{query:n}={}){const i={};return n&&(i.params=n),(await E(this,L).get(e,i)).data},H=async function(e,n){return(await E(this,L).patch(e,n)).data};const $=new G;class J{info(e){alert(e)}success(e){alert(e)}error(e){alert(e)}}const f=new J,O="favorites";function P(){try{return JSON.parse(localStorage.getItem(O))||[]}catch{return[]}}function X(t){if(!t)return;const e=P(),n=e.indexOf(t);n>=0?e.splice(n,1):e.push(t),localStorage.setItem(O,JSON.stringify(e))}const a={closeModalButton:"[data-modal-close]",modalContainer:"[data-modal]",exerciseModal:".modal",ratingModal:".add-rating-modal",addToFavoritesButton:".btn-modal-add-fav",imgModalExercise:".img-modal-exercise",titleModal:".title-modal",ratingValue:".rating-value",statsList:".stats-list",descText:".desc-text",btnFavText:".btn-fav-text",iconFavBtnUse:".icon-fav-btn-use",openRatingModalButton:"[data-add-rating-open]",closeRatingModalButton:"[data-add-rating-close]",ratingForm:".add-rating-form",addRatingValue:".add-rating-value",iconModalRatingStar:".icon-modal-rating-star",addRatingRadioBtn:".add-rating-radio-btn",openModalButtons:"[data-modal-open]",ratingStars:".rating-stars"},r={visuallyHidden:"visually-hidden",favAdded:"fav-added",modalOpen:"modal-open",gold:"gold"},_=document.querySelector(a.closeModalButton),R=document.querySelector(a.modalContainer),v=document.querySelector(a.exerciseModal),g=document.querySelector(a.ratingModal),N=document.querySelector(a.addToFavoritesButton);let S=null;async function z(t){const e=await $.exerciseInfo(S=t);V(e),U(),W(),R.classList.toggle(r.visuallyHidden),K(),tt()}function Q(){document.querySelector(a.imgModalExercise).src="",document.querySelector(a.titleModal).textContent="",document.querySelector(a.ratingValue).textContent="0",document.querySelector(a.statsList).innerHTML="",document.querySelector(a.descText).textContent=""}function V(t){Q(),document.querySelector(a.imgModalExercise).src=t.gifUrl,document.querySelector(a.titleModal).textContent=t.name.trim(),document.querySelector(a.descText).textContent=t.description.trim(),document.querySelector(a.ratingValue).textContent=t.rating,nt(t.rating),Z(t)}function Z(t){const e=document.querySelector(a.statsList);e.innerHTML="";let n="";t.target&&(n+=p("Target",t.target)),t.bodyPart&&(n+=p("BodyPart",t.bodyPart)),t.equipment&&(n+=p("Equipment",t.equipment)),t.popularity&&(n+=p("Popular",t.popularity)),t.burnedCalories&&(n+=p("Burned Calories",`${t.burnedCalories}/${t.time} min`)),e.insertAdjacentHTML("beforeend",n)}function p(t,e){return`<li class="stats-item">
    <p class="stats-title">${t}</p>
    <p class="stats-value">${e}</p>
  </li>`}function U(){const t=P().includes(S);N.classList.toggle(r.favAdded,t),document.querySelector(a.btnFavText).textContent=t?"Remove from favorites":"Add to favorites",document.querySelector(a.iconFavBtnUse).setAttribute("href",`${I}#${t?"trash-bin":"heart"}`)}function W(){N.addEventListener("click",t=>{t.currentTarget.classList.toggle(r.favAdded),X(S),U(),t.stopImmediatePropagation()})}function K(){document.addEventListener("keydown",j),document.body.classList.add(r.modalOpen)}function D(){document.removeEventListener("keydown",j),document.body.classList.remove(r.modalOpen),S=null}function j(t){t.key==="Escape"&&B()}function B(){g.classList.add(r.visuallyHidden),v.classList.remove(r.visuallyHidden),R.classList.add(r.visuallyHidden),D()}_.addEventListener("click",B);R.addEventListener("click",t=>{T(t,v.getBoundingClientRect())||T(t,g.getBoundingClientRect())||B(),t.stopImmediatePropagation()});function T(t,e){return e.top<=t.clientY&&t.clientY<=e.top+e.height&&e.left<=t.clientX&&t.clientX<=e.left+e.width}function tt(){const t=document.querySelector(a.openRatingModalButton);document.querySelector(a.addRatingValue).textContent="0",t.addEventListener("click",i=>{g.classList.remove(r.visuallyHidden),v.classList.add(r.visuallyHidden),K(),n(),i.stopImmediatePropagation()}),document.querySelector(a.closeRatingModalButton).addEventListener("click",i=>{g.classList.add(r.visuallyHidden),v.classList.remove(r.visuallyHidden),clearRatingForm(g.querySelector("form")),i.stopImmediatePropagation()});function n(){document.querySelectorAll(a.addRatingRadioBtn).forEach(o=>{o.addEventListener("click",s=>{const c=Number(s.currentTarget.value);document.querySelector(a.addRatingValue).textContent=`${c}`,document.querySelectorAll(a.iconModalRatingStar).forEach((M,d)=>{M.classList.toggle(r.gold,d<c)}),s.stopImmediatePropagation()})})}document.querySelector(a.ratingForm).addEventListener("submit",et)}async function et(t){var c,M;t.preventDefault();const e=parseInt(document.querySelector(a.addRatingValue).textContent??"0"),n=t.target,i=n.elements.email.value,o=n.elements.comment.value;function s(d){d.elements.email.value="",d.elements.comment.value="",d.elements.radio.forEach(h=>h.checked=!1),document.querySelector(a.addRatingValue).textContent="0",document.querySelectorAll(a.iconModalRatingStar).forEach(h=>h.classList.remove(r.gold))}if(!e)f.info("Choose your rating");else if(!i)f.info("Enter your email");else if(!o)f.info("Leave a comment");else try{const d=await $.setExerciseRating({exerciseId:S,rate:e,email:i,review:o});s(n),f.success("Rating successfully updated"),g.classList.add(r.visuallyHidden),v.classList.remove(r.visuallyHidden),V(d)}catch(d){f.error(`Error: ${((M=(c=d==null?void 0:d.response)==null?void 0:c.data)==null?void 0:M.message)??d.message}`)}t.stopImmediatePropagation()}function rt(){document.querySelectorAll(a.openModalButtons).forEach(e=>{e.addEventListener("click",n=>{z(n.currentTarget.value)})})}function nt(t){const e=document.querySelector(a.ratingStars);e.innerHTML="",e.append(...ot(5,t))}function ot(t,e){const n=[];for(let i=0;i<t;i++){const o=Math.min(100,Math.max(0,(e-i)*100)),s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("width","18"),s.setAttribute("height","18"),s.setAttribute("class","icon icon-modal-star");const c=`gradient-${i}-${o}`;s.innerHTML=`
      <defs>
        <linearGradient id="${c}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="${o}%" stop-color="var(--color-accent)" />
          <stop offset="${o}%" stop-color="var(--color-rating)" />
        </linearGradient>
      </defs>
      <use href="${I}#star" fill="url(#${c})"></use>
    `,n.push(s)}return n}const at=document.querySelector(".burger-menu"),A=document.querySelector(".close-btn"),w=document.querySelector(".menu-backdrop"),b=document.querySelector(".menu-backdrop>.menu");function u(){b.classList.contains("is-open")?(b.classList.remove("is-open"),w.removeEventListener("click",k),document.removeEventListener("keydown",F),A.removeEventListener("click",u)):(b.classList.add("is-open"),w.addEventListener("click",k),document.addEventListener("keydown",F),A.addEventListener("click",u))}at.addEventListener("click",u);const F=t=>{t.code==="Escape"&&u()},k=t=>{t.target===document.querySelector(".menu-backdrop")&&u();const e=t.target.closest("a");e!=null&&e.classList.contains("nav-link")&&u(),e!=null&&e.classList.contains("soc-link")&&u()};document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".nav-link"),e=window.location.pathname;t.forEach(n=>{n.getAttribute("href")==="."+e&&n.classList.add("active")}),document.querySelector(".nav-link.active")||t[0].classList.add("active")});function ct(t){return t[0].toUpperCase()+t.slice(1)}export{$ as a,I as b,ct as c,P as g,rt as i,X as t};
//# sourceMappingURL=utils-s80rmx-h.js.map
