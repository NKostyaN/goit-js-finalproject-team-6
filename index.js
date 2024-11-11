import{a as c,i as h,c as y}from"./assets/utils-ChBCUOCi.js";import{a as g}from"./assets/vendor-CNNbG8jS.js";document.getElementById("subscriptionForm").addEventListener("submit",async function(s){s.preventDefault();const n=s.target.email,t=n.value;if(!n.checkValidity()){alert("Please enter a valid email address.");return}try{const e=await g.post("https://your-energy.b.goit.study/api/subscription",{email:t});e.status===201&&(alert(e.data.message),n.value="")}catch(e){e.response?e.response.status===400?alert("Bad request: invalid request body."):e.response.status===404?alert("Not found: The endpoint could not be found."):e.response.status===409?alert("Subscription already exists."):e.response.status===500&&alert("Server error: please try again later."):alert("An unexpected error occurred. Please try again.")}});function x(){o(),S()}async function o(s="Muscles",n=1,t=12,e){try{const r=await c.searchExercises({filter:s,page:n,limit:t,keyword:e}),a=r.results,i=r.totalPages;v(a),L(i,s,t,n)}catch(r){console.error("Помилка при завантаженні даних:",r)}}function v(s){const n=document.getElementById("exercises-container");n.innerHTML="",s.forEach(t=>{const e=document.createElement("div");e.classList.add("exercises-md-col-4"),e.innerHTML=`
      <div class="exercises__item">
        <img src="${t.imgURL}" alt="Опис зображення" />
        <div class="text-overlay">
          <h5>${t.name}</h5>
          <p>${t.filter}</p>
        </div>
      </div>
    `,e.addEventListener("click",async()=>{E(e);const r=await u(t.filter,t.name,1);d(t,r.results)}),n.appendChild(e)})}function d(s,n,{skipSearchInit:t}={}){C(n),h(),!t&&q(s)}function E(s){const n=s.querySelector(".text-overlay h5").textContent,t=document.querySelector(".breadcrumbs");let e=t.querySelector("span");e||(e=document.createElement("span"),e.textContent="/");let r=t.querySelector("li:last-child");if(r&&r!==t.querySelector("li"))r.textContent="",r.appendChild(e),r.appendChild(document.createTextNode(n));else{const a=document.createElement("li");a.appendChild(e),a.appendChild(document.createTextNode(n)),t.appendChild(a)}}function C(s){const n=document.getElementById("search-container");n.style.display="flex";const t=document.getElementById("exercises-container");t.innerHTML="",s.forEach(e=>{const r=document.createElement("div");r.classList.add("exercises-md-col-6");const a=document.createElement("div");a.classList.add("exercise-item"),a.innerHTML=`
      <div class="exercise-details__item">
        <div class="exercise-header">
        <div class="exercise-header-left">
          <p class="exercise-workout">WORKOUT</p>
          <div class="exercise-rating">${e.rating||"Немає даних"} <span>⭐</span></div>
          </div>
          <button type="button" class="btn-start" data-modal-open value="${e._id}">Start ➔</button>
        </div>
        <h3 class="exercise-name">
          <svg class="exercise-name-icon" width="24" height="24">
            <use href="../img/icons/sprites.svg#icon-icon-2"></use>
          </svg>${y(e.name)}</h3>
        <div class="exercise-info">
          <p class="truncate-text"><strong class="exercise-info-title">Burned calories:</strong> ${e.burnedCalories}</p>
          <p class="truncate-text"><strong class="exercise-info-title">Body part:</strong> ${e.bodyPart}</p>
          <p class="truncate-text"><strong class="exercise-info-title">Target:</strong> ${e.target}</p>
        </div>
      </div>
    `,r.appendChild(a),t.appendChild(r)})}async function u(s,n,t=1,e){let r=s.toLowerCase().replace(/\s+/g,"");return r.endsWith("ts")&&(r=r.slice(0,-1)),c.exerciseDetails({page:t,limit:10,keyword:e,custom:{[r]:encodeURIComponent(n)}})}function S(){document.querySelectorAll(".exercises-filters li").forEach(n=>{n.addEventListener("click",()=>{const t=document.getElementById("search-container");t.style.display="none";const e=n.id;o(e),document.querySelectorAll(".exercises-filters__selected").forEach(r=>{r.classList.remove("exercises-filters__selected")}),n.classList.add("exercises-filters__selected")})})}function L(s,n,t=12,e=1){const r=document.querySelector(".exercises-pagination ul");r.innerHTML="";for(let a=1;a<=s;a++){const i=document.createElement("li");i.textContent=a,a===e&&i.classList.add("exercises-pagination__current"),i.addEventListener("click",()=>{document.querySelectorAll(".exercises-pagination li").forEach(f=>{f.classList.remove("exercises-pagination__current")}),i.classList.add("exercises-pagination__current"),o(n,a,t)}),r.appendChild(i)}}function q(s){const n=document.querySelector(".search-button"),t=document.querySelector("#search-input");n.addEventListener("click",async e=>{const r=await u(s.filter,s.name,1,t.value);d(s,r.results,{skipSearchInit:!0})})}x();const m=document.querySelector(".quote-text"),p=document.querySelector(".quote-author");async function b(){const s=JSON.parse(localStorage.getItem("dailyQuote")),n=new Date().toISOString().split("T")[0];if(s&&s.date===n){l(s.quote);return}try{const t=await c.getQuote();localStorage.setItem("dailyQuote",JSON.stringify({quote:t,date:n})),l(t)}catch(t){console.error("Error fetching quote:",t),m.textContent="Could not load quote.",p.textContent=""}}function l(s){m.textContent=s.quote,p.textContent=s.author}document.addEventListener("DOMContentLoaded",b);
//# sourceMappingURL=index.js.map
