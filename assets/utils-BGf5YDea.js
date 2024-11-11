var x=t=>{throw TypeError(t)};var C=(t,e,n)=>e.has(t)||x("Cannot "+n);var E=(t,e,n)=>(C(t,e,"read from private field"),n?n.call(t):e.get(t)),q=(t,e,n)=>e.has(t)?x("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);var u=(t,e,n)=>(C(t,e,"access private method"),n);import{a as G}from"./vendor-CNNbG8jS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const I="/goit-js-finalproject-team-6/assets/sprites-BBg-cZko.svg";var L,l,y,O,H;class J{constructor(){q(this,l);q(this,L,G.create({baseURL:"https://your-energy.b.goit.study/api/"}))}async exerciseInfo(e){return u(this,l,y).call(this,`exercises/${e}`)}async setExerciseRating({exerciseId:e,rate:n,email:i,review:o}){return u(this,l,O).call(this,`exercises/${e}/rating`,{rate:n,email:i,review:o})}async getQuote(){return u(this,l,y).call(this,"quote")}async searchExercises({filter:e,page:n,limit:i,keyword:o}){return u(this,l,y).call(this,"filters",{query:{filter:e,page:n,limit:i,keyword:o}})}async exerciseDetails({page:e,limit:n,keyword:i,custom:o}){return await u(this,l,y).call(this,"exercises",{query:{page:e,limit:n,keyword:i,...o??{}}})}}L=new WeakMap,l=new WeakSet,y=async function(e,{query:n}={}){const i={};return n&&(i.params=u(this,l,H).call(this,n)),(await E(this,L).get(e,i)).data},O=async function(e,n){return(await E(this,L).patch(e,n)).data},H=function(e={}){const n={};return Object.entries(e).forEach(([i,o])=>{o!=null&&(n[i]=o,typeof o=="string"&&(n[i]=o.replace(/%20/g," ")))}),n};const $=new J;class X{info(e){alert(e)}success(e){alert(e)}error(e){alert(e)}}const f=new X,P="favorites";function N(){try{return JSON.parse(localStorage.getItem(P))||[]}catch{return[]}}function _(t){if(!t)return;const e=N(),n=e.indexOf(t);n>=0?e.splice(n,1):e.push(t),localStorage.setItem(P,JSON.stringify(e))}const a={closeModalButton:"[data-modal-close]",modalContainer:"[data-modal]",exerciseModal:".modal",ratingModal:".add-rating-modal",addToFavoritesButton:".btn-modal-add-fav",imgModalExercise:".img-modal-exercise",titleModal:".title-modal",ratingValue:".rating-value",statsList:".stats-list",descText:".desc-text",btnFavText:".btn-fav-text",iconFavBtnUse:".icon-fav-btn-use",openRatingModalButton:"[data-add-rating-open]",closeRatingModalButton:"[data-add-rating-close]",ratingForm:".add-rating-form",addRatingValue:".add-rating-value",iconModalRatingStar:".icon-modal-rating-star",addRatingRadioBtn:".add-rating-radio-btn",openModalButtons:"[data-modal-open]",ratingStars:".rating-stars"},s={visuallyHidden:"visually-hidden",favAdded:"fav-added",modalOpen:"modal-open",gold:"gold"},z=document.querySelector(a.closeModalButton),R=document.querySelector(a.modalContainer),v=document.querySelector(a.exerciseModal),g=document.querySelector(a.ratingModal),V=document.querySelector(a.addToFavoritesButton);let S=null;async function Q(t){const e=await $.exerciseInfo(S=t);U(e),j(),D(),R.classList.toggle(s.visuallyHidden),K(),et()}function Z(){document.querySelector(a.imgModalExercise).src="",document.querySelector(a.titleModal).textContent="",document.querySelector(a.ratingValue).textContent="0",document.querySelector(a.statsList).innerHTML="",document.querySelector(a.descText).textContent=""}function U(t){Z(),document.querySelector(a.imgModalExercise).src=t.gifUrl,document.querySelector(a.titleModal).textContent=t.name.trim(),document.querySelector(a.descText).textContent=t.description.trim(),document.querySelector(a.ratingValue).textContent=t.rating,ot(t.rating),W(t)}function W(t){const e=document.querySelector(a.statsList);e.innerHTML="";let n="";t.target&&(n+=p("Target",t.target)),t.bodyPart&&(n+=p("BodyPart",t.bodyPart)),t.equipment&&(n+=p("Equipment",t.equipment)),t.popularity&&(n+=p("Popular",t.popularity)),t.burnedCalories&&(n+=p("Burned Calories",`${t.burnedCalories}/${t.time} min`)),e.insertAdjacentHTML("beforeend",n)}function p(t,e){return`<li class="stats-item">
    <p class="stats-title">${t}</p>
    <p class="stats-value">${e}</p>
  </li>`}function j(){const t=N().includes(S);V.classList.toggle(s.favAdded,t),document.querySelector(a.btnFavText).textContent=t?"Remove from favorites":"Add to favorites",document.querySelector(a.iconFavBtnUse).setAttribute("href",`${I}#${t?"trash-bin":"heart"}`)}function D(){V.addEventListener("click",t=>{t.currentTarget.classList.toggle(s.favAdded),_(S),j(),t.stopImmediatePropagation()})}function K(){document.addEventListener("keydown",Y),document.body.classList.add(s.modalOpen)}function tt(){document.removeEventListener("keydown",Y),document.body.classList.remove(s.modalOpen),S=null}function Y(t){t.key==="Escape"&&B()}function B(){g.classList.add(s.visuallyHidden),v.classList.remove(s.visuallyHidden),R.classList.add(s.visuallyHidden),tt()}z.addEventListener("click",B);R.addEventListener("click",t=>{w(t,v.getBoundingClientRect())||w(t,g.getBoundingClientRect())||B(),t.stopImmediatePropagation()});function w(t,e){return e.top<=t.clientY&&t.clientY<=e.top+e.height&&e.left<=t.clientX&&t.clientX<=e.left+e.width}function et(){const t=document.querySelector(a.openRatingModalButton);document.querySelector(a.addRatingValue).textContent="0",t.addEventListener("click",i=>{g.classList.remove(s.visuallyHidden),v.classList.add(s.visuallyHidden),K(),n(),i.stopImmediatePropagation()}),document.querySelector(a.closeRatingModalButton).addEventListener("click",i=>{g.classList.add(s.visuallyHidden),v.classList.remove(s.visuallyHidden),clearRatingForm(g.querySelector("form")),i.stopImmediatePropagation()});function n(){document.querySelectorAll(a.addRatingRadioBtn).forEach(o=>{o.addEventListener("click",r=>{const c=Number(r.currentTarget.value);document.querySelector(a.addRatingValue).textContent=`${c}`,document.querySelectorAll(a.iconModalRatingStar).forEach((h,d)=>{h.classList.toggle(s.gold,d<c)}),r.stopImmediatePropagation()})})}document.querySelector(a.ratingForm).addEventListener("submit",nt)}async function nt(t){var c,h;t.preventDefault();const e=parseInt(document.querySelector(a.addRatingValue).textContent??"0"),n=t.target,i=n.elements.email.value,o=n.elements.comment.value;function r(d){d.elements.email.value="",d.elements.comment.value="",d.elements.radio.forEach(M=>M.checked=!1),document.querySelector(a.addRatingValue).textContent="0",document.querySelectorAll(a.iconModalRatingStar).forEach(M=>M.classList.remove(s.gold))}if(!e)f.info("Choose your rating");else if(!i)f.info("Enter your email");else if(!o)f.info("Leave a comment");else try{const d=await $.setExerciseRating({exerciseId:S,rate:e,email:i,review:o});r(n),f.success("Rating successfully updated"),g.classList.add(s.visuallyHidden),v.classList.remove(s.visuallyHidden),U(d)}catch(d){f.error(`Error: ${((h=(c=d==null?void 0:d.response)==null?void 0:c.data)==null?void 0:h.message)??d.message}`)}t.stopImmediatePropagation()}function ct(){document.querySelectorAll(a.openModalButtons).forEach(e=>{e.addEventListener("click",n=>{Q(n.currentTarget.value)})})}function ot(t){const e=document.querySelector(a.ratingStars);e.innerHTML="",e.append(...at(5,t))}function at(t,e){const n=[];for(let i=0;i<t;i++){const o=Math.min(100,Math.max(0,(e-i)*100)),r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("width","18"),r.setAttribute("height","18"),r.setAttribute("class","icon icon-modal-star");const c=`gradient-${i}-${o}`;r.innerHTML=`
      <defs>
        <linearGradient id="${c}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="${o}%" stop-color="var(--color-accent)" />
          <stop offset="${o}%" stop-color="var(--color-rating)" />
        </linearGradient>
      </defs>
      <use href="${I}#star" fill="url(#${c})"></use>
    `,n.push(r)}return n}const it=document.querySelector(".burger-menu"),T=document.querySelector(".close-btn"),k=document.querySelector(".menu-backdrop"),b=document.querySelector(".menu-backdrop>.menu");function m(){b.classList.contains("is-open")?(b.classList.remove("is-open"),k.removeEventListener("click",F),document.removeEventListener("keydown",A),T.removeEventListener("click",m)):(b.classList.add("is-open"),k.addEventListener("click",F),document.addEventListener("keydown",A),T.addEventListener("click",m))}it.addEventListener("click",m);const A=t=>{t.code==="Escape"&&m()},F=t=>{t.target===document.querySelector(".menu-backdrop")&&m();const e=t.target.closest("a");e!=null&&e.classList.contains("nav-link")&&m(),e!=null&&e.classList.contains("soc-link")&&m()};document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".nav-link"),e=window.location.pathname;t.forEach(n=>{n.getAttribute("href")==="."+e&&n.classList.add("active")}),document.querySelector(".nav-link.active")||t[0].classList.add("active")});function dt(t){return t[0].toUpperCase()+t.slice(1)}export{$ as a,I as b,dt as c,N as g,ct as i,_ as t};
//# sourceMappingURL=utils-BGf5YDea.js.map
