import{a as o,i as y,c as u,b as c}from"./assets/utils-BJo1Nr-F.js";import{a as x}from"./assets/vendor-CNNbG8jS.js";document.getElementById("subscriptionForm").addEventListener("submit",async function(n){n.preventDefault();const r=n.target.email,t=r.value;if(!r.checkValidity()){alert("Please enter a valid email address.");return}try{const e=await x.post("https://your-energy.b.goit.study/api/subscription",{email:t});e.status===201&&(alert(e.data.message),r.value="")}catch(e){e.response?e.response.status===400?alert("Bad request: invalid request body."):e.response.status===404?alert("Not found: The endpoint could not be found."):e.response.status===409?alert("Subscription already exists."):e.response.status===500&&alert("Server error: please try again later."):alert("An unexpected error occurred. Please try again.")}});function v(){l(),L()}async function l(n="Muscles",r=1,t=12,e){try{const s=await o.searchExercises({filter:n,page:r,limit:t,keyword:e}),a=s.results,i=s.totalPages;E(a),b(i,n,t,r)}catch(s){console.error("Помилка при завантаженні даних:",s)}}function E(n){const r=document.getElementById("exercises-container");r.innerHTML="",n.forEach(t=>{const e=document.createElement("div");e.classList.add("exercises-md-col-4"),e.innerHTML=`
      <div class="exercises__item">
        <img src="${t.imgURL}" alt="Опис зображення" />
        <div class="text-overlay">
          <h5>${t.name}</h5>
          <p>${t.filter}</p>
        </div>
      </div>
    `,e.addEventListener("click",async()=>{C(e);const s=await p(t.filter,t.name,1);m(t,s.results)}),r.appendChild(e)})}function m(n,r,{skipSearchInit:t}={}){S(r),y(),!t&&q(n)}function C(n){const r=u(n.querySelector(".text-overlay h5").textContent),t=document.querySelector(".breadcrumbs");let e=t.querySelector("span");e||(e=document.createElement("span"),e.textContent="/");let s=t.querySelector("li:last-child");if(s&&s!==t.querySelector("li"))s.textContent="",s.appendChild(e),s.appendChild(document.createTextNode(r));else{const a=document.createElement("li");a.appendChild(e),a.appendChild(document.createTextNode(r)),t.appendChild(a)}}function S(n){const r=document.getElementById("search-container");r.style.display="flex";const t=document.getElementById("exercises-container");t.innerHTML="",n.forEach(e=>{const s=document.createElement("div");s.classList.add("exercises-md-col-6");const a=document.createElement("div");a.classList.add("exercise-item"),a.innerHTML=`
      <div class="exercise-details__item">
        <div class="exercise-header">
        <div class="exercise-header-left">
          <p class="exercise-workout">WORKOUT</p>
            <div class="exercise-rating">${e.rating||"Немає даних"} <span>
                <svg width="24" height="24">
                  <use href="${c}#star"></use>
                </svg>
              </span>
            </div>
          </div>
          <button type="button" class="btn-start" data-modal-open value="${e._id}">
            Start
            <svg class="exercise-arrow" width="13" height="13">
              <use href="${c}#icon-start-arrow"></use>
            </svg>
          </button>
        </div>
        <h3 class="exercise-name">
          <svg class="exercise-name-icon" width="24" height="24">
            <use href="${c}#icon-icon-2"></use>
          </svg>${u(e.name)}</h3>
        <div class="exercise-info">
          <p class="truncate-text"><strong class="exercise-info-title">Burned calories:</strong> ${e.burnedCalories}</p>
          <p class="truncate-text"><strong class="exercise-info-title">Body part:</strong> ${e.bodyPart}</p>
          <p class="truncate-text"><strong class="exercise-info-title">Target:</strong> ${e.target}</p>
        </div>
      </div>
    `,s.appendChild(a),t.appendChild(s)})}async function p(n,r,t=1,e){let s=n.toLowerCase().replace(/\s+/g,"");return s.endsWith("ts")&&(s=s.slice(0,-1)),o.exerciseDetails({page:t,limit:10,keyword:e,custom:{[s]:encodeURIComponent(r)}})}function L(){document.querySelectorAll(".exercises-filters li").forEach(r=>{r.addEventListener("click",()=>{const t=document.getElementById("search-container");t.style.display="none";const e=r.id;l(e),document.querySelectorAll(".exercises-filters__selected").forEach(s=>{s.classList.remove("exercises-filters__selected")}),r.classList.add("exercises-filters__selected")})})}function b(n,r,t=12,e=1){const s=document.querySelector(".exercises-pagination ul");s.innerHTML="";for(let a=1;a<=n;a++){const i=document.createElement("li");i.textContent=a,a===e&&i.classList.add("exercises-pagination__current"),i.addEventListener("click",()=>{document.querySelectorAll(".exercises-pagination li").forEach(g=>{g.classList.remove("exercises-pagination__current")}),i.classList.add("exercises-pagination__current"),l(r,a,t)}),s.appendChild(i)}}function q(n){const r=document.querySelector(".search-button"),t=document.querySelector("#search-input");async function e(a){const i=await p(n.filter,n.name,1,a);m(n,i.results,{skipSearchInit:!0})}r.addEventListener("click",async a=>e(t.value));let s;t.addEventListener("input",a=>{s&&clearTimeout(s),s=setTimeout(()=>e(a.target.value),500)})}v();const f=document.querySelector(".quote-text"),h=document.querySelector(".quote-author");async function _(){const n=JSON.parse(localStorage.getItem("dailyQuote")),r=new Date().toISOString().split("T")[0];if(n&&n.date===r){d(n.quote);return}try{const t=await o.getQuote();localStorage.setItem("dailyQuote",JSON.stringify({quote:t,date:r})),d(t)}catch(t){console.error("Error fetching quote:",t),f.textContent="Could not load quote.",h.textContent=""}}function d(n){f.textContent=n.quote,h.textContent=n.author}document.addEventListener("DOMContentLoaded",_);
//# sourceMappingURL=index.js.map
