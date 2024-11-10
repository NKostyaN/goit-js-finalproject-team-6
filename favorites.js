import{g as h,r as v,i as l,a as x}from"./assets/nav-Cb0vPAKX.js";import"./assets/vendor-CNNbG8jS.js";async function m(){const t=new Date().getDate();let r=JSON.parse(localStorage.getItem("quoteData"))??{};const s=r.day??0;if(t!==s){const i=await serviceQuote();i.day=t,localStorage.setItem("quoteData",JSON.stringify(i)),r=i}const o=document.querySelector(".quote-text"),c=document.querySelector(".quote-author");o.textContent=r.quote,c.textContent=r.author}m();const a={galleryList:document.querySelector(".gallery-list"),defaultText:document.querySelector(".js-hidden-text")};async function w(e){return await Promise.all(e.map(async r=>await x.exerciseInfo(r)))}async function q(e){return w(e).then(t=>t.map(({_id:r,bodyPart:s,burnedCalories:o,target:c,name:i,time:f})=>`<li data-id="${r}" class="exercise-card">
                  <div class="exercise-header">
                    <div class="exercise-trash">
                      <p class="workout">WORKOUT</p>
                    <button class="trash-btn" type="submit">
                    <svg class="trash-svg"  width="16" height="16">
                          <use id = "dell" href="${l}#icon-trash-fav"></use>
                          </svg> 
                    </button>              
                    </div>    
                      <button id = "open" class="exercise-btn" type="button">Start
                        <svg id = "arrow" class="arrow-svg" width="16" height="16">
                          <use href="${l}#icon-arrow"></use>
                        </svg>
                      </button>
                  </div>  
                    <div class = "exercise-tittle"> 
                    <div class= "man-svg-thumb">
                      <svg width="24" height="24">
                        <use href="${l}#icon-icon-2"></use>
                      </svg>
                      </div>
                      <p class="favorite-exercise-name">${d(i)}</p>
                    </div> 
                    <div class="exercise-information">
                      <p class="exercise-category">Burned calories: <span>${o}/${f}min</span></p>
                      <p class="exercise-category">Body part: <span>${d(s)}</span></p>
                      <p class="exercise-category">Target: <span>${d(c)}</span></p>
                    </div>            
                </li>`).join(""))}function y(e){q(e).then(t=>{a.galleryList.innerHTML="",a.galleryList.insertAdjacentHTML("beforeend",t),a.defaultText.style.display="none",a.galleryList.style.display="flex";const r=document.querySelectorAll(".exercise-card");for(let s of r)s.addEventListener("click",p);e.length===0&&(a.defaultText.style.display="flex",a.galleryList.style.display="none")},t=>{console.log(t)})}let n=7;window.addEventListener("resize",u);function u(){let e=h();window.innerWidth>=768&&(n=10),window.innerWidth>=1440&&(n=6),y(e.slice(0,n)),makePaginationByItems(n,e.length).on("afterMove",({page:t})=>{let r=(t-1)*n,s=t*n;y(e.slice(r,s))})}u();const S=document.querySelectorAll(".exercise-card");for(let e of S)e.addEventListener("click",p);async function p(e){switch(e.target.id){case"dell":return b(e);case"open":return g(e);case"arrow":return g(e)}}function b(e){const t=e.currentTarget.dataset.id;v(t),u()}async function g(e){e.currentTarget.dataset.id}function d(e){return e[0].toUpperCase()+e.slice(1)}
//# sourceMappingURL=favorites.js.map
