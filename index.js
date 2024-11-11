import{a as c,i as h,c as y}from"./assets/utils-ChBCUOCi.js";import{a as g}from"./assets/vendor-CNNbG8jS.js";document.getElementById("subscriptionForm").addEventListener("submit",async function(n){n.preventDefault();const r=n.target.email,t=r.value;if(!r.checkValidity()){alert("Please enter a valid email address.");return}try{const e=await g.post("https://your-energy.b.goit.study/api/subscription",{email:t});e.status===201&&(alert(e.data.message),r.value="")}catch(e){e.response?e.response.status===400?alert("Bad request: invalid request body."):e.response.status===404?alert("Not found: The endpoint could not be found."):e.response.status===409?alert("Subscription already exists."):e.response.status===500&&alert("Server error: please try again later."):alert("An unexpected error occurred. Please try again.")}});function x(){o(),S()}async function o(n="Muscles",r=1,t=12,e){try{const s=await c.searchExercises({filter:n,page:r,limit:t,keyword:e}),a=s.results,i=s.totalPages;v(a),L(i,n,t,r)}catch(s){console.error("Помилка при завантаженні даних:",s)}}function v(n){const r=document.getElementById("exercises-container");r.innerHTML="",n.forEach(t=>{const e=document.createElement("div");e.classList.add("exercises-md-col-4"),e.innerHTML=`
      <div class="exercises__item">
        <img src="${t.imgURL}" alt="Опис зображення" />
        <div class="text-overlay">
          <h5>${t.name}</h5>
          <p>${t.filter}</p>
        </div>
      </div>
    `,e.addEventListener("click",async()=>{E(e);const s=await u(t.filter,t.name,1);d(t,s.results)}),r.appendChild(e)})}function d(n,r,{skipSearchInit:t}={}){C(r),h(),!t&&q(n)}function E(n){const r=n.querySelector(".text-overlay h5").textContent,t=document.querySelector(".breadcrumbs");let e=t.querySelector("span");e||(e=document.createElement("span"),e.textContent="/");let s=t.querySelector("li:last-child");if(s&&s!==t.querySelector("li"))s.textContent="",s.appendChild(e),s.appendChild(document.createTextNode(r));else{const a=document.createElement("li");a.appendChild(e),a.appendChild(document.createTextNode(r)),t.appendChild(a)}}function C(n){const r=document.getElementById("search-container");r.style.display="flex";const t=document.getElementById("exercises-container");t.innerHTML="",n.forEach(e=>{const s=document.createElement("div");s.classList.add("exercises-md-col-6");const a=document.createElement("div");a.classList.add("exercise-item"),a.innerHTML=`
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
    `,s.appendChild(a),t.appendChild(s)})}async function u(n,r,t=1,e){let s=n.toLowerCase().replace(/\s+/g,"");return s.endsWith("ts")&&(s=s.slice(0,-1)),c.exerciseDetails({page:t,limit:10,keyword:e,custom:{[s]:encodeURIComponent(r)}})}function S(){document.querySelectorAll(".exercises-filters li").forEach(r=>{r.addEventListener("click",()=>{const t=document.getElementById("search-container");t.style.display="none";const e=r.id;o(e),document.querySelectorAll(".exercises-filters__selected").forEach(s=>{s.classList.remove("exercises-filters__selected")}),r.classList.add("exercises-filters__selected")})})}function L(n,r,t=12,e=1){const s=document.querySelector(".exercises-pagination ul");s.innerHTML="";for(let a=1;a<=n;a++){const i=document.createElement("li");i.textContent=a,a===e&&i.classList.add("exercises-pagination__current"),i.addEventListener("click",()=>{document.querySelectorAll(".exercises-pagination li").forEach(f=>{f.classList.remove("exercises-pagination__current")}),i.classList.add("exercises-pagination__current"),o(r,a,t)}),s.appendChild(i)}}function q(n){const r=document.querySelector(".search-button"),t=document.querySelector("#search-input");async function e(a){const i=await u(n.filter,n.name,1,a);d(n,i.results,{skipSearchInit:!0})}r.addEventListener("click",async a=>e(t.value));let s;t.addEventListener("input",a=>{s&&clearTimeout(s),s=setTimeout(()=>e(a.target.value),500)})}x();const m=document.querySelector(".quote-text"),p=document.querySelector(".quote-author");async function b(){const n=JSON.parse(localStorage.getItem("dailyQuote")),r=new Date().toISOString().split("T")[0];if(n&&n.date===r){l(n.quote);return}try{const t=await c.getQuote();localStorage.setItem("dailyQuote",JSON.stringify({quote:t,date:r})),l(t)}catch(t){console.error("Error fetching quote:",t),m.textContent="Could not load quote.",p.textContent=""}}function l(n){m.textContent=n.quote,p.textContent=n.author}document.addEventListener("DOMContentLoaded",b);
//# sourceMappingURL=index.js.map
