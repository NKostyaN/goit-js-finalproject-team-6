import{i as d}from"./assets/nav-CLhVHAZZ.js";import{a as l}from"./assets/vendor-CNNbG8jS.js";document.getElementById("subscriptionForm").addEventListener("submit",async function(a){a.preventDefault();const s=a.target.email,t=s.value;if(!s.checkValidity()){alert("Please enter a valid email address.");return}try{const e=await l.post("https://your-energy.b.goit.study/api/subscription",{email:t});e.status===201&&(alert(e.data.message),s.value="")}catch(e){e.response?e.response.status===400?alert("Bad request: invalid request body."):e.response.status===404?alert("Not found: The endpoint could not be found."):e.response.status===409?alert("Subscription already exists."):e.response.status===500&&alert("Server error: please try again later."):alert("An unexpected error occurred. Please try again.")}});async function c(a="Muscles",s=1,t=12){try{const e=a.replace(/%20/g," "),n=await l.get("https://your-energy.b.goit.study/api/filters",{params:{filter:e,page:s,limit:t}}),r=n.data.results,i=n.data.totalPages;u(r),g(i,a,t,s)}catch(e){console.error("Помилка при завантаженні даних:",e)}}function u(a){const s=document.getElementById("exercises-container");s.innerHTML="",a.forEach(t=>{const e=document.createElement("div");e.classList.add("exercises-md-col-4"),e.innerHTML=`
      <div class="exercises__item">
        <img src="${t.imgURL}" alt="Опис зображення" />
        <div class="text-overlay">
          <h5>${t.name}</h5>
          <p>${t.filter}</p>
        </div>
      </div>
    `,e.addEventListener("click",async()=>{p(e);const n=t.filter,r=t.name,i=await f(n,r,1);m(i.results),d()}),s.appendChild(e)})}function p(a){const s=a.querySelector(".text-overlay h5").textContent,t=document.querySelector(".breadcrumbs");let e=t.querySelector("span");e||(e=document.createElement("span"),e.textContent="/");let n=t.querySelector("li:last-child");if(n&&n!==t.querySelector("li"))n.textContent="",n.appendChild(e),n.appendChild(document.createTextNode(s));else{const r=document.createElement("li");r.appendChild(e),r.appendChild(document.createTextNode(s)),t.appendChild(r)}}function m(a){const s=document.getElementById("search-container");s.style.display="flex";const t=document.getElementById("exercises-container");t.innerHTML="",a.forEach(e=>{const n=document.createElement("div");n.classList.add("exercises-md-col-6");const r=document.createElement("div");r.classList.add("exercise-item"),r.innerHTML=`
      <div class="exercise-details__item">
        <div class="exercise-header">
          <button type="button" class='btn-workout'>WORKOUT</button>
          <div class="exercise-rating">${e.rating||"Немає даних"} <span>⭐</span></div>
          <button type="button" class="btn-start" data-modal-open value="${e._id}">Start ➔</button>
        </div>
        <h3 class="exercise-name">${e.name}</h3>
        <div class="exercise-info">
          <p class="truncate-text"><strong class="exercise-info-title">Burned calories:</strong> ${e.burnedCalories}</p>
          <p class="truncate-text"><strong class="exercise-info-title">Body part:</strong> ${e.bodyPart}</p>
          <p class="truncate-text"><strong class="exercise-info-title">Target:</strong> ${e.target}</p>
        </div>
      </div>
    `,n.appendChild(r),t.appendChild(n)})}async function f(a,s,t=1){let e=a.toLowerCase().replace(/\s+/g,"");e.endsWith("ts")&&(e=e.slice(0,-1));const n=encodeURIComponent(s),r=`https://your-energy.b.goit.study/api/exercises?${e}=${n}&page=${t}&limit=10`;try{const i=await fetch(r);if(!i.ok)throw new Error("Помилка завантаження даних");return await i.json()}catch(i){return console.error("Помилка при запиті до API:",i),{results:[]}}}function y(){document.querySelectorAll(".exercises-filters li").forEach(s=>{s.addEventListener("click",()=>{const t=document.getElementById("search-container");t.style.display="none";const e=s.id;c(e),document.querySelectorAll(".exercises-filters__selected").forEach(n=>{n.classList.remove("exercises-filters__selected")}),s.classList.add("exercises-filters__selected")})})}function g(a,s,t=12,e=1){const n=document.querySelector(".exercises-pagination ul");n.innerHTML="";for(let r=1;r<=a;r++){const i=document.createElement("li");i.textContent=r,r===e&&i.classList.add("exercises-pagination__current"),i.addEventListener("click",()=>{document.querySelectorAll(".exercises-pagination li").forEach(o=>{o.classList.remove("exercises-pagination__current")}),i.classList.add("exercises-pagination__current"),c(s,r,t)}),n.appendChild(i)}}c();y();
//# sourceMappingURL=index.js.map
