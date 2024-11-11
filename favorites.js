import{g as h,t as x,b as u,c as d,a as p}from"./assets/utils-CpFMTryu.js";import"./assets/vendor-CNNbG8jS.js";async function m(){function e(){return fetch("https://your-energy.b.goit.study/api/quote").then(o=>{if(!o.ok)throw new Error(`Fetch error with ${o.status}: ${o.statusText}`);return o.json()})}const s=new Date().getDate();let r=JSON.parse(localStorage.getItem("quoteData"))??{};const c=r.day??0;if(s!==c){const a=await e();a.day=s,localStorage.setItem("quoteData",JSON.stringify(a)),r=a}const i=document.querySelector(".quote-text"),l=document.querySelector(".quote-author");i.textContent=r.quote,l.textContent=r.author}m();const n={galleryList:document.querySelector(".gallery-list"),defaultText:document.querySelector(".js-hidden-text")};async function v(e){return await Promise.all(e.map(async s=>await p.exerciseInfo(s)))}async function w(e){return v(e).then(t=>t.map(({_id:s,bodyPart:r,burnedCalories:c,target:i,name:l,time:a})=>`<li data-id="${s}" class="exercise-card">
            <div class="exercise-header">
              <div class="exercise-trash">
                <p class="exercise-workout">WORKOUT</p>
                <button class="trash-btn" type="submit">
                  <svg class="trash-svg"  width="16" height="16">
                    <use id = "dell" href="${u}#icon-trash-fav"></use>
                  </svg> 
                </button> 
              </div>
              <button id = "open" class="exercise-btn" type="button">
                Start
                <svg class="exercise-arrow" width="13" height="13">
                  <use href="${u}#icon-start-arrow"></use>
                </svg>
              </button>
            </div>
            <h3 class="exercise-name">
              <svg class="exercise-name-icon" width="24" height="24">
                <use href="${u}#icon-icon-2"></use>
              </svg>${d(l)}</h3>
            <div class="exercise-info">
              <p class="truncate-text"><strong class="exercise-info-title">Burned calories:</strong> ${c}/${a}min</p>
              <p class="truncate-text"><strong class="exercise-info-title">Body part:</strong> ${d(r)}</p>
              <p class="truncate-text"><strong class="exercise-info-title">Target:</strong> ${d(i)}</p>
            </div>
          </li>
          `).join(""))}function q(e){w(e).then(t=>{n.galleryList.innerHTML="",n.galleryList.insertAdjacentHTML("beforeend",t),n.defaultText.style.display="none",n.galleryList.style.display="flex";const s=document.querySelectorAll(".exercise-card");for(let r of s)r.addEventListener("click",f);e.length===0&&(n.defaultText.style.display="flex",n.galleryList.style.display="none")},t=>{console.log(t)})}window.addEventListener("resize",g);function g(){let e=h();q(e)}g();const S=document.querySelectorAll(".exercise-card");for(let e of S)e.addEventListener("click",f);async function f(e){switch(e.target.id){case"dell":return T(e);case"open":return y(e);case"arrow":return y(e)}}function T(e){const t=e.currentTarget.dataset.id;x(t),g()}async function y(e){e.currentTarget.dataset.id}
//# sourceMappingURL=favorites.js.map
