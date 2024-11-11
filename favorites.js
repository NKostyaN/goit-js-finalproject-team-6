import{g,i as h,t as p,b as u,c as d,a as v}from"./assets/utils-BZdYtfRu.js";import"./assets/vendor-CNNbG8jS.js";async function f(){function e(){return fetch("https://your-energy.b.goit.study/api/quote").then(n=>{if(!n.ok)throw new Error(`Fetch error with ${n.status}: ${n.statusText}`);return n.json()})}const s=new Date().getDate();let a=JSON.parse(localStorage.getItem("quoteData"))??{};const i=a.day??0;if(s!==i){const r=await e();r.day=s,localStorage.setItem("quoteData",JSON.stringify(r)),a=r}const c=document.querySelector(".quote-text"),l=document.querySelector(".quote-author");c.textContent=a.quote,l.textContent=a.author}f();const o={galleryList:document.querySelector(".gallery-list"),defaultText:document.querySelector(".js-hidden-text")};async function x(e){return await Promise.all(e.map(async s=>await v.exerciseInfo(s)))}async function m(e){return x(e).then(t=>t.map(({_id:s,bodyPart:a,burnedCalories:i,target:c,name:l,time:r})=>`<li data-id="${s}" class="exercise-card">
                  <div class="exercise-header">
                    <div class="exercise-trash">
                      <p class="workout">WORKOUT</p>
                    <button id="dell" class="trash-btn" type="submit">
                    <svg class="trash-svg"  width="16" height="16">
                          <use  href="${u}#icon-trash-fav"></use>
                          </svg> 
                    </button>              
                    </div>    
                      <button class="exercise-btn" type="button" data-modal-open value="${s}">Start
                        <svg  class="arrow-svg" width="16" height="16">
                          <use href="${u}#icon-arrow"></use>
                        </svg>
                      </button>
                  </div>  
                    <div class = "exercise-tittle"> 
                    <div class= "man-svg-thumb">
                      <svg width="24" height="24">
                        <use href="${u}#icon-icon-2"></use>
                      </svg>
                      </div>
                      <p class="favorite-exercise-name">${d(l)}</p>
                    </div> 
                    <div class="exercise-information">
                      <p class="exercise-category">Burned calories: <span>${i}/${r}min</span></p>
                      <p class="exercise-category">Body part: <span>${d(a)}</span></p>
                      <p class="exercise-category">Target: <span>${d(c)}</span></p>
                    </div>            
                </li>`).join(""))}function q(e){m(e).then(t=>{o.galleryList.innerHTML="",o.galleryList.insertAdjacentHTML("beforeend",t),o.defaultText.style.display="none",o.galleryList.style.display="flex";const s=document.querySelectorAll(".exercise-card");for(let a of s)a.querySelector("#dell").addEventListener("click",w);e.length===0&&(o.defaultText.style.display="flex",o.galleryList.style.display="none"),h()},t=>{console.log(t)})}window.addEventListener("resize",y);async function y(){let e=g();await q(e)}y();function w(e){const t=document.querySelector(".exercise-card").dataset.id;p(t),y()}
//# sourceMappingURL=favorites.js.map
