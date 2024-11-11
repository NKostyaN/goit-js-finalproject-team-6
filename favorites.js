import{g as p,t as f,b as i,a as h}from"./assets/nav-B_iCydcT.js";import"./assets/vendor-CNNbG8jS.js";async function x(){const t=new Date().getDate();let s=JSON.parse(localStorage.getItem("quoteData"))??{};const a=s.day??0;if(t!==a){const n=await serviceQuote();n.day=t,localStorage.setItem("quoteData",JSON.stringify(n)),s=n}const o=document.querySelector(".quote-text"),c=document.querySelector(".quote-author");o.textContent=s.quote,c.textContent=s.author}x();const r={galleryList:document.querySelector(".gallery-list"),defaultText:document.querySelector(".js-hidden-text")};async function v(e){return await Promise.all(e.map(async s=>await h.exerciseInfo(s)))}async function m(e){return v(e).then(t=>t.map(({_id:s,bodyPart:a,burnedCalories:o,target:c,name:n,time:y})=>`<li data-id="${s}" class="exercise-card">
                  <div class="exercise-header">
                    <div class="exercise-trash">
                      <p class="workout">WORKOUT</p>
                    <button class="trash-btn" type="submit">
                    <svg class="trash-svg"  width="16" height="16">
                          <use id = "dell" href="${i}#icon-trash-fav"></use>
                          </svg> 
                    </button>              
                    </div>    
                      <button id = "open" class="exercise-btn" type="button">Start
                        <svg id = "arrow" class="arrow-svg" width="16" height="16">
                          <use href="${i}#icon-arrow"></use>
                        </svg>
                      </button>
                  </div>  
                    <div class = "exercise-tittle"> 
                    <div class= "man-svg-thumb">
                      <svg width="24" height="24">
                        <use href="${i}#icon-icon-2"></use>
                      </svg>
                      </div>
                      <p class="favorite-exercise-name">${l(n)}</p>
                    </div> 
                    <div class="exercise-information">
                      <p class="exercise-category">Burned calories: <span>${o}/${y}min</span></p>
                      <p class="exercise-category">Body part: <span>${l(a)}</span></p>
                      <p class="exercise-category">Target: <span>${l(c)}</span></p>
                    </div>            
                </li>`).join(""))}function w(e){m(e).then(t=>{r.galleryList.innerHTML="",r.galleryList.insertAdjacentHTML("beforeend",t),r.defaultText.style.display="none",r.galleryList.style.display="flex";const s=document.querySelectorAll(".exercise-card");for(let a of s)a.addEventListener("click",g);e.length===0&&(r.defaultText.style.display="flex",r.galleryList.style.display="none")},t=>{console.log(t)})}window.addEventListener("resize",d);function d(){let e=p();w(e)}d();const q=document.querySelectorAll(".exercise-card");for(let e of q)e.addEventListener("click",g);async function g(e){switch(e.target.id){case"dell":return S(e);case"open":return u(e);case"arrow":return u(e)}}function S(e){const t=e.currentTarget.dataset.id;f(t),d()}async function u(e){e.currentTarget.dataset.id}function l(e){return e[0].toUpperCase()+e.slice(1)}
//# sourceMappingURL=favorites.js.map
