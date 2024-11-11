var T=t=>{throw TypeError(t)};var A=(t,e,n)=>e.has(t)||T("Cannot "+n);var b=(t,e,n)=>(A(t,e,"read from private field"),n?n.call(t):e.get(t)),R=(t,e,n)=>e.has(t)?T("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);var g=(t,e,n)=>(A(t,e,"access private method"),n);import{a as G}from"./vendor-CNNbG8jS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();const $="/goit-js-finalproject-team-6/assets/sprites-B78JF5Xj.svg";var M,l,L,P;class _{constructor(){R(this,l);R(this,M,G.create({baseURL:"https://your-energy.b.goit.study/api/"}))}async exerciseInfo(e){return g(this,l,L).call(this,`exercises/${e}`)}async setExerciseRating({exerciseId:e,rate:n,email:i,review:a}){return g(this,l,P).call(this,`exercises/${e}/rating`,{rate:n,email:i,review:a})}async getQuote(){return g(this,l,L).call(this,"quote")}async searchExercises({filter:e,page:n,limit:i,keyword:a}){return g(this,l,L).call(this,"filters",{query:{filter:e.replace(/%20/g," "),page:n,limit:i,keyword:a}})}async exerciseDetails({page:e,limit:n,keyword:i,custom:a}){i&&(i=i.replace(/%20/g," "));const s={page:e,limit:n,keyword:i,...a??{}};return await g(this,l,L).call(this,"exercises",{query:s})}}M=new WeakMap,l=new WeakSet,L=async function(e,{query:n}={}){const i={};return n&&(i.params=n),(await b(this,M).get(e,i)).data},P=async function(e,n){return(await b(this,M).patch(e,n)).data};const N=new _;class z{info(e){alert(e)}success(e){alert(e)}error(e){alert(e)}}const y=new z,V="favorites";function U(){try{return JSON.parse(localStorage.getItem(V))||[]}catch{return[]}}function Q(t){const e=U(),n=e.indexOf(t);n>=0?e.splice(n,1):e.push(t),localStorage.setItem(V,JSON.stringify(e))}const o={closeModalButton:"[data-modal-close]",modalContainer:"[data-modal]",exerciseModal:".modal",ratingModal:".add-rating-modal",addToFavoritesButton:".btn-modal-add-fav",imgModalExercise:".img-modal-exercise",titleModal:".title-modal",ratingValue:".rating-value",statsList:".stats-list",descText:".desc-text",btnFavText:".btn-fav-text",iconFavBtnUse:".icon-fav-btn-use",openRatingModalButton:"[data-add-rating-open]",closeRatingModalButton:"[data-add-rating-close]",ratingForm:".add-rating-form",addRatingValue:".add-rating-value",iconModalRatingStar:".icon-modal-rating-star",addRatingRadioBtn:".add-rating-radio-btn",openModalButtons:"[data-modal-open]",ratingStars:".rating-stars"},c={visuallyHidden:"visually-hidden",favAdded:"fav-added",modalOpen:"modal-open",gold:"gold"},W=document.querySelector(o.closeModalButton),x=document.querySelector(o.modalContainer),S=document.querySelector(o.exerciseModal),f=document.querySelector(o.ratingModal),j=document.querySelector(o.addToFavoritesButton);let h=null;async function Z(t){const e=await N.exerciseInfo(h=t);K(e),J(),et(),x.classList.toggle(c.visuallyHidden),X(),ot()}function D(){document.querySelector(o.imgModalExercise).src="",document.querySelector(o.titleModal).textContent="",document.querySelector(o.ratingValue).textContent="0",document.querySelector(o.statsList).innerHTML="",document.querySelector(o.descText).textContent=""}function K(t){D(),document.querySelector(o.imgModalExercise).src=t.gifUrl,document.querySelector(o.titleModal).textContent=t.name.trim(),document.querySelector(o.descText).textContent=t.description.trim(),document.querySelector(o.ratingValue).textContent=t.rating,at(t.rating),tt(t)}function tt(t){const e=document.querySelector(o.statsList);e.innerHTML="";let n="";t.target&&(n+=v("Target",t.target)),t.bodyPart&&(n+=v("BodyPart",t.bodyPart)),t.equipment&&(n+=v("Equipment",t.equipment)),t.popularity&&(n+=v("Popular",t.popularity)),t.burnedCalories&&(n+=v("Burned Calories",`${t.burnedCalories}/${t.time} min`)),e.insertAdjacentHTML("beforeend",n)}function v(t,e){return`<li class="stats-item">
    <p class="stats-title">${t}</p>
    <p class="stats-value">${e}</p>
  </li>`}function J(){const t=U().includes(h);j.classList.toggle(c.favAdded,t),document.querySelector(o.btnFavText).textContent=t?"Remove from favorites":"Add to favorites",document.querySelector(o.iconFavBtnUse).setAttribute("href",`${$}#${t?"trash-bin":"heart"}`)}function et(){j.addEventListener("click",t=>{t.currentTarget.classList.toggle(c.favAdded),Q(h),J(),t.stopImmediatePropagation()})}function X(){document.addEventListener("keydown",Y),document.body.classList.add(c.modalOpen)}function nt(){document.removeEventListener("keydown",Y),document.body.classList.remove(c.modalOpen),h=null}function Y(t){t.key==="Escape"&&C()}function C(){f.classList.add(c.visuallyHidden),S.classList.remove(c.visuallyHidden),x.classList.add(c.visuallyHidden),nt()}W.addEventListener("click",C);x.addEventListener("click",t=>{w(t,S.getBoundingClientRect())||w(t,f.getBoundingClientRect())||C(),t.stopImmediatePropagation()});function w(t,e){return e.top<=t.clientY&&t.clientY<=e.top+e.height&&e.left<=t.clientX&&t.clientX<=e.left+e.width}function ot(){const t=document.querySelector(o.openRatingModalButton);let e=0;document.querySelector(o.addRatingValue).textContent="0",t.addEventListener("click",r=>{f.classList.remove(c.visuallyHidden),S.classList.add(c.visuallyHidden),X(),a(),r.stopImmediatePropagation()}),document.querySelector(o.closeRatingModalButton).addEventListener("click",r=>{f.classList.add(c.visuallyHidden),S.classList.remove(c.visuallyHidden),i(f.querySelector("form")),r.stopImmediatePropagation()});function i(r){e=0,r.elements.email.value="",r.elements.comment.value="",r.elements.radio.forEach(d=>d.checked=!1),document.querySelector(o.addRatingValue).textContent="0",document.querySelectorAll(o.iconModalRatingStar).forEach(d=>d.classList.remove(c.gold))}function a(){document.querySelectorAll(o.addRatingRadioBtn).forEach(d=>{d.addEventListener("click",p=>{e=Number(p.currentTarget.value),document.querySelector(o.addRatingValue).textContent=e,document.querySelectorAll(o.iconModalRatingStar).forEach((E,q)=>{E.classList.toggle(c.gold,q<e)}),p.stopImmediatePropagation()})})}document.querySelector(o.ratingForm).addEventListener("submit",async r=>{var q,F;r.preventDefault();const d=r.target,p=d.elements.email.value,E=d.elements.comment.value;if(!e)y.info("Choose your rating");else if(!p)y.info("Enter your email");else if(!E)y.info("Leave a comment");else try{const m=await N.setExerciseRating({exerciseId:h,rate:e,email:p,review:E});i(d),y.success("Rating successfully updated"),f.classList.add(c.visuallyHidden),S.classList.remove(c.visuallyHidden),K(m)}catch(m){y.error(`Error: ${((F=(q=m==null?void 0:m.response)==null?void 0:q.data)==null?void 0:F.message)??m.message}`)}r.stopImmediatePropagation()})}function dt(){document.querySelectorAll(o.openModalButtons).forEach(e=>{e.addEventListener("click",n=>{Z(n.currentTarget.value)})})}function at(t){const e=document.querySelector(o.ratingStars);e.innerHTML="",e.append(...it(5,t))}function it(t,e){const n=[];for(let i=0;i<t;i++){const a=Math.min(100,Math.max(0,(e-i)*100)),s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("width","18"),s.setAttribute("height","18"),s.setAttribute("class","icon icon-modal-star");const r=`gradient-${i}-${a}`;s.innerHTML=`
      <defs>
        <linearGradient id="${r}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="${a}%" stop-color="var(--color-accent)" />
          <stop offset="${a}%" stop-color="var(--color-rating)" />
        </linearGradient>
      </defs>
      <use href="${$}#star" fill="url(#${r})"></use>
    `,n.push(s)}return n}const st=document.querySelector(".burger-menu"),I=document.querySelector(".close-btn"),k=document.querySelector(".menu-backdrop"),B=document.querySelector(".menu-backdrop>.menu");function u(){B.classList.contains("is-open")?(B.classList.remove("is-open"),k.removeEventListener("click",O),document.removeEventListener("keydown",H),I.removeEventListener("click",u)):(B.classList.add("is-open"),k.addEventListener("click",O),document.addEventListener("keydown",H),I.addEventListener("click",u))}st.addEventListener("click",u);const H=t=>{t.code==="Escape"&&u()},O=t=>{t.target===document.querySelector(".menu-backdrop")&&u();const e=t.target.closest("a");e!=null&&e.classList.contains("nav-link")&&u(),e!=null&&e.classList.contains("soc-link")&&u()};document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".nav-link"),e=window.location.pathname;t.forEach(n=>{n.getAttribute("href")==="."+e&&n.classList.add("active")}),document.querySelector(".nav-link.active")||t[0].classList.add("active")});function lt(t){return t[0].toUpperCase()+t.slice(1)}export{N as a,$ as b,lt as c,U as g,dt as i,Q as t};
//# sourceMappingURL=utils-ChBCUOCi.js.map