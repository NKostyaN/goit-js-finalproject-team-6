import{g as h,t as p,b as d,c as u,a as x}from"./assets/utils-BxkcCQyX.js";import"./assets/vendor-CNNbG8jS.js";async function v(){function e(){return fetch("https://your-energy.b.goit.study/api/quote").then(o=>{if(!o.ok)throw new Error(`Fetch error with ${o.status}: ${o.statusText}`);return o.json()})}const s=new Date().getDate();let r=JSON.parse(localStorage.getItem("quoteData"))??{};const c=r.day??0;if(s!==c){const a=await e();a.day=s,localStorage.setItem("quoteData",JSON.stringify(a)),r=a}const i=document.querySelector(".quote-text"),l=document.querySelector(".quote-author");i.textContent=r.quote,l.textContent=r.author}v();const n={galleryList:document.querySelector(".gallery-list"),defaultText:document.querySelector(".js-hidden-text")};async function m(e){return await Promise.all(e.map(async s=>await x.exerciseInfo(s)))}async function w(e){return m(e).then(t=>t.map(({_id:s,bodyPart:r,burnedCalories:c,target:i,name:l,time:a})=>`<li data-id="${s}" class="exercise-card">
                  <div class="exercise-header">
                    <div class="exercise-trash">
                      <p class="workout">WORKOUT</p>
                    <button class="trash-btn" type="submit">
                    <svg class="trash-svg"  width="16" height="16">
                          <use id = "dell" href="${d}#icon-trash-fav"></use>
                          </svg> 
                    </button>              
                    </div>    
                      <button id = "open" class="exercise-btn" type="button">Start
                        <svg id = "arrow" class="arrow-svg" width="16" height="16">
                          <use href="${d}#icon-arrow"></use>
                        </svg>
                      </button>
                  </div>  
                    <div class = "exercise-tittle"> 
                    <div class= "man-svg-thumb">
                      <svg width="24" height="24">
                        <use href="${d}#icon-icon-2"></use>
                      </svg>
                      </div>
                      <p class="favorite-exercise-name">${u(l)}</p>
                    </div> 
                    <div class="exercise-information">
                      <p class="exercise-category">Burned calories: <span>${c}/${a}min</span></p>
                      <p class="exercise-category">Body part: <span>${u(r)}</span></p>
                      <p class="exercise-category">Target: <span>${u(i)}</span></p>
                    </div>            
                </li>`).join(""))}function q(e){w(e).then(t=>{n.galleryList.innerHTML="",n.galleryList.insertAdjacentHTML("beforeend",t),n.defaultText.style.display="none",n.galleryList.style.display="flex";const s=document.querySelectorAll(".exercise-card");for(let r of s)r.addEventListener("click",f);e.length===0&&(n.defaultText.style.display="flex",n.galleryList.style.display="none")},t=>{console.log(t)})}window.addEventListener("resize",y);function y(){let e=h();q(e)}y();const S=document.querySelectorAll(".exercise-card");for(let e of S)e.addEventListener("click",f);async function f(e){switch(e.target.id){case"dell":return T(e);case"open":return g(e);case"arrow":return g(e)}}function T(e){const t=e.currentTarget.dataset.id;p(t),y()}async function g(e){e.currentTarget.dataset.id}
//# sourceMappingURL=favorites.js.map
