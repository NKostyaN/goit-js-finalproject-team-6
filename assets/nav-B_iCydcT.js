var A=t=>{throw TypeError(t)};var T=(t,e,n)=>e.has(t)||A("Cannot "+n);var q=(t,e,n)=>(T(t,e,"read from private field"),n?n.call(t):e.get(t)),b=(t,e,n)=>e.has(t)?A("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);var E=(t,e,n)=>(T(t,e,"access private method"),n);import{a as Q}from"./vendor-CNNbG8jS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();const $="/goit-js-finalproject-team-6/assets/sprites-BC2IQxlo.svg";var L,u,B,P;class X{constructor(){b(this,u);b(this,L,Q.create({baseURL:"https://your-energy.b.goit.study/api/"}))}async exerciseInfo(e){return E(this,u,B).call(this,`exercises/${e}`)}async setExerciseRating({exerciseId:e,rate:n,email:c,review:a}){return E(this,u,P).call(this,`exercises/${e}/rating`,{rate:n,email:c,review:a})}async getQuote(){return E(this,u,B).call(this,"quote")}}L=new WeakMap,u=new WeakSet,B=async function(e){return(await q(this,L).get(e)).data},P=async function(e,n){return(await q(this,L).patch(e,n)).data};const N=new X;class _{info(e){alert(e)}success(e){alert(e)}error(e){alert(e)}}const p=new _,V="favorites";function K(){try{return JSON.parse(localStorage.getItem(V))||[]}catch{return[]}}function z(t){const e=K(),n=e.indexOf(t);n>=0?e.splice(n,1):e.push(t),localStorage.setItem(V,JSON.stringify(e))}const o={closeModalButton:"[data-modal-close]",modalContainer:"[data-modal]",exerciseModal:".modal",ratingModal:".add-rating-modal",addToFavoritesButton:".btn-modal-add-fav",imgModalExercise:".img-modal-exercise",titleModal:".title-modal",ratingValue:".rating-value",statsList:".stats-list",descText:".desc-text",btnFavText:".btn-fav-text",iconFavBtnUse:".icon-fav-btn-use",openRatingModalButton:"[data-add-rating-open]",closeRatingModalButton:"[data-add-rating-close]",ratingForm:".add-rating-form",addRatingValue:".add-rating-value",iconModalRatingStar:".icon-modal-rating-star",addRatingRadioBtn:".add-rating-radio-btn",openModalButtons:"[data-modal-open]",ratingStars:".rating-stars"},r={visuallyHidden:"visually-hidden",favAdded:"fav-added",modalOpen:"modal-open",gold:"gold"},W=document.querySelector(o.closeModalButton),x=document.querySelector(o.modalContainer),v=document.querySelector(o.exerciseModal),g=document.querySelector(o.ratingModal),U=document.querySelector(o.addToFavoritesButton);let S=null;async function Z(t){const e=await N.exerciseInfo(S=t);j(e),Y(),et(),x.classList.toggle(r.visuallyHidden),G(),ot()}function D(){document.querySelector(o.imgModalExercise).src="",document.querySelector(o.titleModal).textContent="",document.querySelector(o.ratingValue).textContent="0",document.querySelector(o.statsList).innerHTML="",document.querySelector(o.descText).textContent=""}function j(t){D(),document.querySelector(o.imgModalExercise).src=t.gifUrl,document.querySelector(o.titleModal).textContent=t.name.trim(),document.querySelector(o.descText).textContent=t.description.trim(),document.querySelector(o.ratingValue).textContent=t.rating,at(t.rating),tt(t)}function tt(t){const e=document.querySelector(o.statsList);e.innerHTML="";let n="";t.target&&(n+=y("Target",t.target)),t.bodyPart&&(n+=y("BodyPart",t.bodyPart)),t.equipment&&(n+=y("Equipment",t.equipment)),t.popularity&&(n+=y("Popular",t.popularity)),t.burnedCalories&&(n+=y("Burned Calories",`${t.burnedCalories}/${t.time} min`)),e.insertAdjacentHTML("beforeend",n)}function y(t,e){return`<li class="stats-item">
    <p class="stats-title">${t}</p>
    <p class="stats-value">${e}</p>
  </li>`}function Y(){const t=K().includes(S);U.classList.toggle(r.favAdded,t),document.querySelector(o.btnFavText).textContent=t?"Remove from favorites":"Add to favorites",document.querySelector(o.iconFavBtnUse).setAttribute("href",`${$}#${t?"trash-bin":"heart"}`)}function et(){U.addEventListener("click",t=>{t.currentTarget.classList.toggle(r.favAdded),z(S),Y(),t.stopImmediatePropagation()})}function G(){document.addEventListener("keydown",J),document.body.classList.add(r.modalOpen)}function nt(){document.removeEventListener("keydown",J),document.body.classList.remove(r.modalOpen),S=null}function J(t){t.key==="Escape"&&C()}function C(){g.classList.add(r.visuallyHidden),v.classList.remove(r.visuallyHidden),x.classList.add(r.visuallyHidden),nt()}W.addEventListener("click",C);x.addEventListener("click",t=>{F(t,v.getBoundingClientRect())||F(t,g.getBoundingClientRect())||C(),t.stopImmediatePropagation()});function F(t,e){return e.top<=t.clientY&&t.clientY<=e.top+e.height&&e.left<=t.clientX&&t.clientX<=e.left+e.width}function ot(){const t=document.querySelector(o.openRatingModalButton);let e=0;document.querySelector(o.addRatingValue).textContent="0",t.addEventListener("click",i=>{g.classList.remove(r.visuallyHidden),v.classList.add(r.visuallyHidden),G(),a(),i.stopImmediatePropagation()}),document.querySelector(o.closeRatingModalButton).addEventListener("click",i=>{g.classList.add(r.visuallyHidden),v.classList.remove(r.visuallyHidden),c(g.querySelector("form")),i.stopImmediatePropagation()});function c(i){e=0,i.elements.email.value="",i.elements.comment.value="",i.elements.radio.forEach(d=>d.checked=!1),document.querySelector(o.addRatingValue).textContent="0",document.querySelectorAll(o.iconModalRatingStar).forEach(d=>d.classList.remove(r.gold))}function a(){document.querySelectorAll(o.addRatingRadioBtn).forEach(d=>{d.addEventListener("click",f=>{e=Number(f.currentTarget.value),document.querySelector(o.addRatingValue).textContent=e,document.querySelectorAll(o.iconModalRatingStar).forEach((h,M)=>{h.classList.toggle(r.gold,M<e)}),f.stopImmediatePropagation()})})}document.querySelector(o.ratingForm).addEventListener("submit",async i=>{var M,w;i.preventDefault();const d=i.target,f=d.elements.email.value,h=d.elements.comment.value;if(!e)p.info("Choose your rating");else if(!f)p.info("Enter your email");else if(!h)p.info("Leave a comment");else try{const m=await N.setExerciseRating({exerciseId:S,rate:e,email:f,review:h});c(d),p.success("Rating successfully updated"),g.classList.add(r.visuallyHidden),v.classList.remove(r.visuallyHidden),j(m)}catch(m){p.error(`Error: ${((w=(M=m==null?void 0:m.response)==null?void 0:M.data)==null?void 0:w.message)??m.message}`)}i.stopImmediatePropagation()})}function dt(){document.querySelectorAll(o.openModalButtons).forEach(e=>{e.addEventListener("click",n=>{Z(n.currentTarget.value)})})}function at(t){const e=document.querySelector(o.ratingStars);e.innerHTML="",e.append(...it(5,t))}function it(t,e){const n=[];for(let c=0;c<t;c++){const a=Math.min(100,Math.max(0,(e-c)*100)),s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("width","18"),s.setAttribute("height","18"),s.setAttribute("class","icon icon-modal-star");const i=`gradient-${c}-${a}`;s.innerHTML=`
      <defs>
        <linearGradient id="${i}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="${a}%" stop-color="var(--color-accent)" />
          <stop offset="${a}%" stop-color="var(--color-rating)" />
        </linearGradient>
      </defs>
      <use href="${$}#star" fill="url(#${i})"></use>
    `,n.push(s)}return n}const st=document.querySelector(".burger-menu"),I=document.querySelector(".close-btn"),k=document.querySelector(".menu-backdrop"),R=document.querySelector(".menu-backdrop>.menu");function l(){R.classList.contains("is-open")?(R.classList.remove("is-open"),k.removeEventListener("click",O),document.removeEventListener("keydown",H),I.removeEventListener("click",l)):(R.classList.add("is-open"),k.addEventListener("click",O),document.addEventListener("keydown",H),I.addEventListener("click",l))}st.addEventListener("click",l);const H=t=>{t.code==="Escape"&&l()},O=t=>{t.target===document.querySelector(".menu-backdrop")&&l();const e=t.target.closest("a");e!=null&&e.classList.contains("nav-link")&&l(),e!=null&&e.classList.contains("soc-link")&&l()};document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname;document.querySelectorAll(".nav-link").forEach(n=>{(t.includes("index.html")&&n.getAttribute("href").includes("index.html")||t.includes("favorites.html")&&n.getAttribute("href").includes("favorites.html"))&&n.classList.add("active")})});export{N as a,$ as b,K as g,dt as i,z as t};
//# sourceMappingURL=nav-B_iCydcT.js.map
