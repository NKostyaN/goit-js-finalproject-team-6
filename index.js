import{i as d}from"./assets/nav-CIvTxdMp.js";import{a as l}from"./assets/vendor-CNNbG8jS.js";document.getElementById("subscriptionForm").addEventListener("submit",async function(r){r.preventDefault();const s=r.target.email,t=s.value;if(!s.checkValidity()){alert("Please enter a valid email address.");return}try{const e=await l.post("https://your-energy.b.goit.study/api/subscription",{email:t});e.status===201&&(alert(e.data.message),s.value="")}catch(e){e.response?e.response.status===400?alert("Bad request: invalid request body."):e.response.status===404?alert("Not found: The endpoint could not be found."):e.response.status===409?alert("Subscription already exists."):e.response.status===500&&alert("Server error: please try again later."):alert("An unexpected error occurred. Please try again.")}});async function c(r="Muscles",s=1,t=12){try{const e=r.replace(/%20/g," "),n=await l.get("https://your-energy.b.goit.study/api/filters",{params:{filter:e,page:s,limit:t}}),i=n.data.results,a=n.data.totalPages;u(i),g(a,r,t,s)}catch(e){console.error("Помилка при завантаженні даних:",e)}}function u(r){const s=document.getElementById("exercises-container");s.innerHTML="",r.forEach(t=>{const e=document.createElement("div");e.classList.add("exercises-md-col-4"),e.innerHTML=`
      <div class="exercises__item">
        <img src="${t.imgURL}" alt="Опис зображення" />
        <div class="text-overlay">
          <h5>${t.name}</h5>
          <p>${t.filter}</p>
        </div>
      </div>
    `,e.addEventListener("click",async()=>{const n=t.filter,i=t.name,a=await m(n,i,1);p(a.results),d()}),s.appendChild(e)})}function p(r){const s=document.getElementById("exercises-container");s.innerHTML="",r.forEach(t=>{const e=document.createElement("div");e.classList.add("exercises-md-col-6");const n=document.createElement("div");n.classList.add("exercise-item"),n.innerHTML=`
      <div class="exercise-details__item">
        <div class="exercise-header">
          <button type="button" class='btn-workout'>WORKOUT</button>
          <div class="exercise-rating">${t.rating||"Немає даних"} <span>⭐</span></div>
          <button type="button" class="btn-start" data-modal-open value="${t._id}">Start ➔</button>
        </div>
        <h3 class="exercise-name">${t.name}</h3>
        <div class="exercise-info">
          <p class="truncate-text"><strong class="exercise-info-title">Burned calories:</strong> ${t.burnedCalories}</p>
          <p class="truncate-text"><strong class="exercise-info-title">Body part:</strong> ${t.bodyPart}</p>
          <p class="truncate-text"><strong class="exercise-info-title">Target:</strong> ${t.target}</p>
        </div>
      </div>
    `,e.appendChild(n),s.appendChild(e)})}async function m(r,s,t=1){let e=r.toLowerCase().replace(/\s+/g,"");e.endsWith("ts")&&(e=e.slice(0,-1));const n=encodeURIComponent(s),i=`https://your-energy.b.goit.study/api/exercises?${e}=${n}&page=${t}&limit=10`;try{const a=await fetch(i);if(!a.ok)throw new Error("Помилка завантаження даних");return await a.json()}catch(a){return console.error("Помилка при запиті до API:",a),{results:[]}}}function f(){document.querySelectorAll(".exercises-filters li").forEach(s=>{s.addEventListener("click",()=>{const t=s.id;c(t),document.querySelectorAll(".exercises-filters__selected").forEach(e=>{e.classList.remove("exercises-filters__selected")}),s.classList.add("exercises-filters__selected")})})}function g(r,s,t=12,e=1){const n=document.querySelector(".exercises-pagination ul");n.innerHTML="";for(let i=1;i<=r;i++){const a=document.createElement("li");a.textContent=i,i===e&&a.classList.add("exercises-pagination__current"),a.addEventListener("click",()=>{document.querySelectorAll(".exercises-pagination li").forEach(o=>{o.classList.remove("exercises-pagination__current")}),a.classList.add("exercises-pagination__current"),c(s,i,t)}),n.appendChild(a)}}c();f();
//# sourceMappingURL=index.js.map
