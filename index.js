import{a as m,i as b,c as g,b as d}from"./assets/utils-DVuX7Ad2.js";import{a as C}from"./assets/vendor-CNNbG8jS.js";document.getElementById("subscriptionForm").addEventListener("submit",async function(r){r.preventDefault();const t=r.target.email,s=t.value;if(!t.checkValidity()){alert("Please enter a valid email address.");return}try{const e=await C.post("https://your-energy.b.goit.study/api/subscription",{email:s});e.status===201&&(alert(e.data.message),t.value="")}catch(e){e.response?e.response.status===400?alert("Bad request: invalid request body."):e.response.status===404?alert("Not found: The endpoint could not be found."):e.response.status===409?alert("Subscription already exists."):e.response.status===500&&alert("Server error: please try again later."):alert("An unexpected error occurred. Please try again.")}});const p="data-view-type",l={exercises:"exercises",details:"details"},o={filter:"filter",name:"name"};function S(){f(),w()}async function f(r="Muscles",t=1,s=12,e){try{const n=await m.searchExercises({filter:r,page:t,limit:s,keyword:e}),a=n.results,i=n.totalPages;L(a),T(i,r,s,t)}catch(n){console.error("Помилка при завантаженні даних:",n)}}function L(r){const t=document.getElementById("exercises-container");t.setAttribute(p,l.exercises),t.innerHTML="";const s=document.getElementById("search-container");s.removeAttribute(o.filter),s.removeAttribute(o.name),r.forEach(e=>{const n=document.createElement("div");n.classList.add("exercises-md-col-4"),n.innerHTML=`
      <div class="exercises__item">
        <img src="${e.imgURL}" alt="Опис зображення" />
        <div class="text-overlay">
          <h5>${e.name}</h5>
          <p>${e.filter}</p>
        </div>
      </div>
    `,n.addEventListener("click",async()=>{q(n),x(e)}),t.appendChild(n)}),A()}async function x({filter:r,name:t,keyword:s,page:e}){const n=(await I(r,t,e??1,s)).results;_({filter:r,name:t,exercises:n}),b()}function q(r){const t=g(r.querySelector(".text-overlay h5").textContent),s=document.querySelector(".breadcrumbs");let e=s.querySelector("span");e||(e=document.createElement("span"),e.textContent="/");let n=s.querySelector("li:last-child");if(n&&n!==s.querySelector("li"))n.textContent="",n.appendChild(e),n.appendChild(document.createTextNode(t));else{const a=document.createElement("li");a.appendChild(e),a.appendChild(document.createTextNode(t)),s.appendChild(a)}}function _({exercises:r,filter:t,name:s}){const e=document.getElementById("search-container");e.setAttribute(o.filter,t),e.setAttribute(o.name,s),e.style.display="flex";const n=document.getElementById("exercises-container");n.setAttribute(p,l.details),n.innerHTML="",r.forEach(a=>{const i=document.createElement("div");i.classList.add("exercises-md-col-6");const c=document.createElement("div");c.classList.add("exercise-item"),c.innerHTML=`
      <div class="exercise-details__item">
        <div class="exercise-header">
        <div class="exercise-header-left">
          <p class="exercise-workout">WORKOUT</p>
            <div class="exercise-rating">${a.rating||"Немає даних"} <span>
                <svg width="24" height="24">
                  <use href="${d}#star"></use>
                </svg>
              </span>
            </div>
          </div>
          <button type="button" class="btn-start" data-modal-open value="${a._id}">
            Start
            <svg class="exercise-arrow" width="13" height="13">
              <use href="${d}#icon-start-arrow"></use>
            </svg>
          </button>
        </div>
        <h3 class="exercise-name">
          <svg class="exercise-name-icon" width="24" height="24">
            <use href="${d}#icon-icon-2"></use>
          </svg>${g(a.name)}</h3>
        <div class="exercise-info">
          <p class="truncate-text"><strong class="exercise-info-title">Burned calories:</strong> ${a.burnedCalories}</p>
          <p class="truncate-text"><strong class="exercise-info-title">Body part:</strong> ${a.bodyPart}</p>
          <p class="truncate-text"><strong class="exercise-info-title">Target:</strong> ${a.target}</p>
        </div>
      </div>
    `,i.appendChild(c),n.appendChild(i)})}async function I(r,t,s=1,e){let n=r.toLowerCase().replace(/\s+/g,"");return n.endsWith("ts")&&(n=n.slice(0,-1)),m.exerciseDetails({page:s,limit:10,keyword:e,custom:{[n]:encodeURIComponent(t)}})}function w(){document.querySelectorAll(".exercises-filters li").forEach(t=>{t.addEventListener("click",()=>{const s=document.getElementById("search-container");s.style.display="none";const e=t.id;f(e),document.querySelectorAll(".exercises-filters__selected").forEach(n=>{n.classList.remove("exercises-filters__selected")}),t.classList.add("exercises-filters__selected")})})}function T(r,t,s=12,e=1){const n=document.querySelector(".exercises-pagination ul");n.innerHTML="";const a=document.getElementById("exercises-container");for(let i=1;i<=r;i++){const c=document.createElement("li");c.textContent=i,i===e&&c.classList.add("exercises-pagination__current"),c.addEventListener("click",()=>{switch(document.querySelectorAll(".exercises-pagination li").forEach(E=>{E.classList.remove("exercises-pagination__current")}),c.classList.add("exercises-pagination__current"),a.getAttribute(p)){case l.exercises:{f(t,i,s);break}case l.details:{u({page:i});break}}}),n.appendChild(c)}}function A(){const r=document.querySelector(".search-button"),t=document.querySelector("#search-input");t.value="",r.addEventListener("click",async e=>u({keyword:t.value}));let s;t.addEventListener("input",e=>{s&&clearTimeout(s),s=setTimeout(()=>u({keyword:e.target.value}),500)})}async function u({keyword:r,page:t}){const s=document.getElementById("search-container"),e=s.getAttribute(o.filter),n=s.getAttribute(o.name);x({filter:e,name:n,keyword:r,page:t})}S();const y=document.querySelector(".quote-text"),v=document.querySelector(".quote-author");async function B(){const r=JSON.parse(localStorage.getItem("dailyQuote")),t=new Date().toISOString().split("T")[0];if(r&&r.date===t){h(r.quote);return}try{const s=await m.getQuote();localStorage.setItem("dailyQuote",JSON.stringify({quote:s,date:t})),h(s)}catch(s){console.error("Error fetching quote:",s),y.textContent="Could not load quote.",v.textContent=""}}function h(r){y.textContent=r.quote,v.textContent=r.author}document.addEventListener("DOMContentLoaded",B);
//# sourceMappingURL=index.js.map
