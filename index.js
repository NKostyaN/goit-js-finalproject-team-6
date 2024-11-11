import{i as m,c as f,a as g}from"./assets/utils-BxkcCQyX.js";import{a as d}from"./assets/vendor-CNNbG8jS.js";document.getElementById("subscriptionForm").addEventListener("submit",async function(n){n.preventDefault();const s=n.target.email,t=s.value;if(!s.checkValidity()){alert("Please enter a valid email address.");return}try{const e=await d.post("https://your-energy.b.goit.study/api/subscription",{email:t});e.status===201&&(alert(e.data.message),s.value="")}catch(e){e.response?e.response.status===400?alert("Bad request: invalid request body."):e.response.status===404?alert("Not found: The endpoint could not be found."):e.response.status===409?alert("Subscription already exists."):e.response.status===500&&alert("Server error: please try again later."):alert("An unexpected error occurred. Please try again.")}});async function i(n="Muscles",s=1,t=12){try{const e=n.replace(/%20/g," "),r=await d.get("https://your-energy.b.goit.study/api/filters",{params:{filter:e,page:s,limit:t}}),a=r.data.results,o=r.data.totalPages;y(a),C(o,n,t,s)}catch(e){console.error("Помилка при завантаженні даних:",e)}}function y(n){const s=document.getElementById("exercises-container");s.innerHTML="",n.forEach(t=>{const e=document.createElement("div");e.classList.add("exercises-md-col-4"),e.innerHTML=`
      <div class="exercises__item">
        <img src="${t.imgURL}" alt="Опис зображення" />
        <div class="text-overlay">
          <h5>${t.name}</h5>
          <p>${t.filter}</p>
        </div>
      </div>
    `,e.addEventListener("click",async()=>{h(e);const r=t.filter,a=t.name,o=await v(r,a,1);x(o.results),m()}),s.appendChild(e)})}function h(n){const s=n.querySelector(".text-overlay h5").textContent,t=document.querySelector(".breadcrumbs");let e=t.querySelector("span");e||(e=document.createElement("span"),e.textContent="/");let r=t.querySelector("li:last-child");if(r&&r!==t.querySelector("li"))r.textContent="",r.appendChild(e),r.appendChild(document.createTextNode(s));else{const a=document.createElement("li");a.appendChild(e),a.appendChild(document.createTextNode(s)),t.appendChild(a)}}function x(n){const s=document.getElementById("search-container");s.style.display="flex";const t=document.getElementById("exercises-container");t.innerHTML="",n.forEach(e=>{const r=document.createElement("div");r.classList.add("exercises-md-col-6");const a=document.createElement("div");a.classList.add("exercise-item"),a.innerHTML=`
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
          </svg>${f(e.name)}</h3>
        <div class="exercise-info">
          <p class="truncate-text"><strong class="exercise-info-title">Burned calories:</strong> ${e.burnedCalories}</p>
          <p class="truncate-text"><strong class="exercise-info-title">Body part:</strong> ${e.bodyPart}</p>
          <p class="truncate-text"><strong class="exercise-info-title">Target:</strong> ${e.target}</p>
        </div>
      </div>
    `,r.appendChild(a),t.appendChild(r)})}async function v(n,s,t=1){let e=n.toLowerCase().replace(/\s+/g,"");e.endsWith("ts")&&(e=e.slice(0,-1));const r=encodeURIComponent(s),a=`https://your-energy.b.goit.study/api/exercises?${e}=${r}&page=${t}&limit=10`;try{const o=await fetch(a);if(!o.ok)throw new Error("Помилка завантаження даних");return await o.json()}catch(o){return console.error("Помилка при запиті до API:",o),{results:[]}}}function E(){document.querySelectorAll(".exercises-filters li").forEach(s=>{s.addEventListener("click",()=>{const t=document.getElementById("search-container");t.style.display="none";const e=s.id;i(e),document.querySelectorAll(".exercises-filters__selected").forEach(r=>{r.classList.remove("exercises-filters__selected")}),s.classList.add("exercises-filters__selected")})})}function C(n,s,t=12,e=1){const r=document.querySelector(".exercises-pagination ul");r.innerHTML="";for(let a=1;a<=n;a++){const o=document.createElement("li");o.textContent=a,a===e&&o.classList.add("exercises-pagination__current"),o.addEventListener("click",()=>{document.querySelectorAll(".exercises-pagination li").forEach(c=>{c.classList.remove("exercises-pagination__current")}),o.classList.add("exercises-pagination__current"),i(s,a,t)}),r.appendChild(o)}}i();E();const u=document.querySelector(".quote-text"),p=document.querySelector(".quote-author");async function b(){const n=JSON.parse(localStorage.getItem("dailyQuote")),s=new Date().toISOString().split("T")[0];if(n&&n.date===s){l(n.quote);return}try{const t=await g.getQuote();localStorage.setItem("dailyQuote",JSON.stringify({quote:t,date:s})),l(t)}catch(t){console.error("Error fetching quote:",t),u.textContent="Could not load quote.",p.textContent=""}}function l(n){u.textContent=n.quote,p.textContent=n.author}document.addEventListener("DOMContentLoaded",b);
//# sourceMappingURL=index.js.map
