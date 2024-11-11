import{g,i as x,t as f,b as u,c as d,a as h}from"./assets/utils-Wf47xSBS.js";import"./assets/vendor-CNNbG8jS.js";async function v(){function e(){return fetch("https://your-energy.b.goit.study/api/quote").then(o=>{if(!o.ok)throw new Error(`Fetch error with ${o.status}: ${o.statusText}`);return o.json()})}const s=new Date().getDate();let r=JSON.parse(localStorage.getItem("quoteData"))??{};const i=r.day??0;if(s!==i){const n=await e();n.day=s,localStorage.setItem("quoteData",JSON.stringify(n)),r=n}const c=document.querySelector(".quote-text"),l=document.querySelector(".quote-author");c.textContent=r.quote,l.textContent=r.author}v();const a={galleryContainer:document.querySelector(".favorites-gallery"),galleryList:document.querySelector(".gallery-list"),defaultText:document.querySelector(".js-hidden-text")};a.defaultText.style.display="none";a.galleryContainer.style.display="none";async function p(e){return await Promise.all(e.map(async s=>await h.exerciseInfo(s)))}async function m(e){return p(e).then(t=>t.map(({_id:s,bodyPart:r,burnedCalories:i,target:c,name:l,time:n})=>`<li data-id="${s}" class="exercise-card">
              <div class="exercise-header">
                <div class="exercise-trash">
                  <p class="workout">WORKOUT</p>
                <button id="dell" class="trash-btn" type="submit">
                <svg class="trash-svg"  width="16" height="16">
                  <use href="${u}#icon-trash-fav"></use>
                </svg> 
                </button>              
                </div>    
                  <button class="exercise-btn" type="button" data-modal-open value="${s}">
                  Start
                    <svg class="exercise-arrow" width="13" height="13">
                      <use href="${u}#icon-start-arrow"></use>
                    </svg>
                  </button>
              </div>  
                    <div class = "exercise-tittle"> 
            <h3 class="exercise-name">
              <svg class="exercise-name-icon" width="24" height="24">
                <use href="${u}#icon-icon-2"></use>
              </svg>${d(l)}</h3>
                    </div> 
            <div class="exercise-info">
              <p class="truncate-text"><strong class="exercise-info-title">Burned calories:</strong> ${i}/${n}min</p>
              <p class="truncate-text"><strong class="exercise-info-title">Body part:</strong> ${d(r)}</p>
              <p class="truncate-text"><strong class="exercise-info-title">Target:</strong> ${d(c)}</p>
            </div>
          </li>`).join(""))}function q(e){m(e).then(t=>{a.galleryList.innerHTML="",a.galleryList.insertAdjacentHTML("beforeend",t),a.defaultText.style.display="none",a.galleryContainer.style.display="block";const s=document.querySelectorAll(".exercise-card");for(let r of s)r.querySelector("#dell").addEventListener("click",w);e.length===0&&(a.defaultText.style.display="flex",a.galleryContainer.style.display="none"),x()},t=>{console.log(t)})}window.addEventListener("resize",y);async function y(){let e=g();await q(e)}y();function w(e){const t=document.querySelector(".exercise-card").dataset.id;f(t),y()}
//# sourceMappingURL=favorites.js.map
