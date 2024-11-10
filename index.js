var C=t=>{throw TypeError(t)};var B=(t,e,n)=>e.has(t)||C("Cannot "+n);var h=(t,e,n)=>(B(t,e,"read from private field"),n?n.call(t):e.get(t)),S=(t,e,n)=>e.has(t)?C("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);var M=(t,e,n)=>(B(t,e,"access private method"),n);import"./assets/menu-CA55vn1W.js";import{a as $}from"./assets/vendor-CNNbG8jS.js";const F="/goit-js-finalproject-team-6/assets/sprites-7s4RqKzA.svg";var v,m,w,A;class O{constructor(){S(this,m);S(this,v,$.create({baseURL:"https://your-energy.b.goit.study/api/"}))}async exerciseInfo(e){return M(this,m,w).call(this,`exercises/${e}`)}async setExerciseRating({exerciseId:e,rate:n,email:a,review:i}){return M(this,m,A).call(this,`exercises/${e}/rating`,{rate:n,email:a,review:i})}}v=new WeakMap,m=new WeakSet,w=async function(e){return(await h(this,v).get(e)).data},A=async function(e,n){return(await h(this,v).patch(e,n)).data};const H=new O;function x(){return JSON.parse(localStorage.getItem("favorites"))||[]}function N(t){const e=x();e.push(t),localStorage.setItem("favorites",JSON.stringify(e))}function U(t){const e=x(),n=e.indexOf(t);n!==-1&&(e.splice(n,1),localStorage.setItem("favorites",JSON.stringify(e)))}const o={closeModalButton:"[data-modal-close]",modalContainer:"[data-modal]",exerciseModal:".modal",ratingModal:".add-rating-modal",addToFavoritesButton:".btn-modal-add-fav",imgModalExercise:".img-modal-exercise",titleModal:".title-modal",ratingValue:".rating-value",statsList:".stats-list",descText:".desc-text",btnFavText:".btn-fav-text",iconFavBtnUse:".icon-fav-btn-use",openRatingModalButton:"[data-add-rating-open]",closeRatingModalButton:"[data-add-rating-close]",ratingForm:".add-rating-form",addRatingValue:".add-rating-value",iconModalRatingStar:".icon-modal-rating-star",addRatingRadioBtn:".add-rating-radio-btn",openModalButtons:"[data-modal-open]",ratingStars:".rating-stars"},c={visuallyHidden:"visually-hidden",favAdded:"fav-added",modalOpen:"modal-open",gold:"gold"},V=document.querySelector(o.closeModalButton),q=document.querySelector(o.modalContainer),y=document.querySelector(o.exerciseModal),u=document.querySelector(o.ratingModal),_=document.querySelector(o.addToFavoritesButton);async function j(t){const e=await H.exerciseInfo(t);I(e),E(t),z(t),q.classList.toggle(c.visuallyHidden),P(),W(t)}function J(){document.querySelector(o.imgModalExercise).src="",document.querySelector(o.titleModal).textContent="",document.querySelector(o.ratingValue).textContent="0",document.querySelector(o.statsList).innerHTML="",document.querySelector(o.descText).textContent=""}function I(t){J(),document.querySelector(o.imgModalExercise).src=t.gifUrl,document.querySelector(o.titleModal).textContent=t.name.trim(),document.querySelector(o.descText).textContent=t.description.trim(),document.querySelector(o.ratingValue).textContent=t.rating,Y(t.rating),K(t)}function K(t){const e=document.querySelector(o.statsList);e.innerHTML="";let n="";t.target&&(n+=p("Target",t.target)),t.bodyPart&&(n+=p("BodyPart",t.bodyPart)),t.equipment&&(n+=p("Equipment",t.equipment)),t.popularity&&(n+=p("Popular",t.popularity)),t.burnedCalories&&(n+=p("Burned Calories",`${t.burnedCalories}/${t.time} min`)),e.insertAdjacentHTML("beforeend",n)}function p(t,e){return`<li class="stats-item">
    <p class="stats-title">${t}</p>
    <p class="stats-value">${e}</p>
  </li>`}function E(t){const e=x().includes(t);_.classList.toggle(c.favAdded,e),document.querySelector(o.btnFavText).textContent=e?"Remove from favorites":"Add to favorites",document.querySelector(o.iconFavBtnUse).setAttribute("href",`${F}#${e?"trash-bin":"heart"}`)}function z(t){_.addEventListener("click",e=>{const n=e.currentTarget;n.classList.toggle(c.favAdded),n.classList.contains(c.favAdded)?(N(t),E(t)):(U(t),E(t)),e.stopImmediatePropagation()})}function P(){document.addEventListener("keydown",k),document.body.classList.add(c.modalOpen)}function G(){document.removeEventListener("keydown",k),document.body.classList.remove(c.modalOpen)}function k(t){t.key==="Escape"&&R()}function R(){u.classList.add(c.visuallyHidden),y.classList.remove(c.visuallyHidden),q.classList.add(c.visuallyHidden),G()}V.addEventListener("click",R);q.addEventListener("click",t=>{T(t,y.getBoundingClientRect())||T(t,u.getBoundingClientRect())||R(),t.stopImmediatePropagation()});function T(t,e){return e.top<=t.clientY&&t.clientY<=e.top+e.height&&e.left<=t.clientX&&t.clientX<=e.left+e.width}function W(t){const e=document.querySelector(o.openRatingModalButton);let n=0;e.addEventListener("click",l=>{u.classList.remove(c.visuallyHidden),y.classList.add(c.visuallyHidden),P(),s(),l.stopImmediatePropagation()}),document.querySelector(o.closeRatingModalButton).addEventListener("click",l=>{u.classList.add(c.visuallyHidden),y.classList.remove(c.visuallyHidden),i(u.querySelector("form")),l.stopImmediatePropagation()});function i(l){l.elements.email.value="",l.elements.comment.value="",l.elements.radio.forEach(d=>d.checked=!1),document.querySelector(o.addRatingValue).textContent="0",document.querySelectorAll(o.iconModalRatingStar).forEach(d=>d.classList.remove(c.gold))}function s(){document.querySelectorAll(o.addRatingRadioBtn).forEach(d=>{d.addEventListener("click",g=>{n=Number(g.currentTarget.value),document.querySelector(o.addRatingValue).textContent=n,document.querySelectorAll(o.iconModalRatingStar).forEach((L,f)=>{L.classList.toggle(c.gold,f<n)}),g.stopImmediatePropagation()})})}document.querySelector(o.ratingForm).addEventListener("submit",async l=>{l.preventDefault();const d=l.target,g=d.elements.email.value,L=d.elements.comment.value;if(!n)alert("Choose your rating");else if(!g)alert("Enter your email");else if(!L)alert("Leave a comment");else try{const f=await H.setExerciseRating({exerciseId:t,rate:n,email:g,review:L});u.classList.add(c.visuallyHidden),i(d),y.classList.remove(c.visuallyHidden),I(f)}catch(f){alert(`Error: ${f.message}`)}l.stopImmediatePropagation()})}function X(){document.querySelectorAll(o.openModalButtons).forEach(e=>{e.addEventListener("click",n=>{const a=n.currentTarget.value;j(a)})})}function Y(t){const e=document.querySelector(o.ratingStars);e.innerHTML="",e.append(...Q(5,t))}function Q(t,e){const n=[];for(let a=0;a<t;a++){const i=Math.min(100,Math.max(0,(e-a)*100)),s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("width","18"),s.setAttribute("height","18"),s.setAttribute("class","icon icon-modal-star");const r=`gradient-${a}-${i}`;s.innerHTML=`
      <defs>
        <linearGradient id="${r}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="${i}%" stop-color="var(--color-accent)" />
          <stop offset="${i}%" stop-color="var(--color-rating)" />
        </linearGradient>
      </defs>
      <use href="${F}#star" fill="url(#${r})"></use>
    `,n.push(s)}return n}X();async function b(t="Muscles",e=1,n=12){try{const a=t.replace(/%20/g," "),i=await $.get("https://your-energy.b.goit.study/api/filters",{params:{filter:a,page:e,limit:n}}),s=i.data.results,r=i.data.totalPages;Z(s),nt(r,t,n,e)}catch(a){console.error("Помилка при завантаженні даних:",a)}}function Z(t){const e=document.getElementById("exercises-container");e.innerHTML="",t.forEach(n=>{const a=document.createElement("div");a.classList.add("exercises__col"),a.innerHTML=`
      <div class="exercises__item">
        <img src="${n.imgURL}" alt="Опис зображення" />
        <div class="text-overlay">
          <h5>${n.name}</h5>
          <p>${n.filter}</p>
        </div>
      </div>
    `,a.addEventListener("click",async()=>{const i=n.filter,s=n.name,r=await tt(i,s,1);D(r.results)}),e.appendChild(a)})}function D(t){const e=document.getElementById("exercises-container");e.innerHTML="",t.forEach(n=>{const a=document.createElement("li");a.classList.add("exercise-item"),a.innerHTML=`
      <div class="exercise-details__item">
        <div class="exercise-header">
          <button type="button" class='btn-workout'>WORKOUT</button>
          <div class="exercise-rating">${n.rating||"Немає даних"} <span>⭐</span></div>
          <button type="button" class="btn-start">Start ➔</button>
        </div>
        <h3 class="exercise-name">${n.name}</h3>
        <div class="exercise-info">
          <p class="truncate-text"<strong class="exercise-info-title">Burned calories:</strong> ${n.burnedCalories}</p>
          <p class="truncate-text"><strong class="exercise-info-title">Body part:</strong> ${n.bodyPart}</p>
          <p class="truncate-text"><strong class="exercise-info-title">Target:</strong> ${n.target}</p>
        </div>
      </div>
    `,e.appendChild(a)})}async function tt(t,e,n=1){let a=t.toLowerCase().replace(/\s+/g,"");a.endsWith("ts")&&(a=a.slice(0,-1));const i=encodeURIComponent(e),s=`https://your-energy.b.goit.study/api/exercises?${a}=${i}&page=${n}&limit=10`;try{const r=await fetch(s);if(!r.ok)throw new Error("Помилка завантаження даних");return await r.json()}catch(r){return console.error("Помилка при запиті до API:",r),{results:[]}}}function et(){document.querySelectorAll(".exercises-filters ul li").forEach(e=>{e.addEventListener("click",()=>{const n=e.id;b(n),document.querySelectorAll(".exercises-filters__selected").forEach(a=>{a.classList.remove("exercises-filters__selected")}),e.classList.add("exercises-filters__selected")})})}function nt(t,e,n=12,a=1){const i=document.querySelector(".exercises-pagination ul");i.innerHTML="";for(let s=1;s<=t;s++){const r=document.createElement("li");r.textContent=s,s===a&&r.classList.add("exercises-pagination__current"),r.addEventListener("click",()=>{document.querySelectorAll(".exercises-pagination li").forEach(l=>{l.classList.remove("exercises-pagination__current")}),r.classList.add("exercises-pagination__current"),b(e,s,n)}),i.appendChild(r)}}b();et();
//# sourceMappingURL=index.js.map
