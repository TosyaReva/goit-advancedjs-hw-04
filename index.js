import{S as g,a as m,i as l}from"./assets/vendor-BDaiwwc1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const c=document.querySelector(".gallery"),d=new g(".gallery .gallery-item a",{captionDelay:250,captionsData:"alt"});window.qwerty=d;function y(t){let r="";t.hits.forEach(o=>{r+=`
        <li class="gallery-item">
            <a href="${o.largeImageURL}">
                <div class="image-wrapper"><img src="${o.webformatURL}" alt="${o.tags}" /></div>
                <ul class="image-description">
                    <li class="gallery-description">
                        <h3 class="description-title">Likes</h3>
                        <p class="description-value">${o.likes}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Views</h3>
                        <p class="description-value">${o.views}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Comments</h3>
                        <p class="description-value">${o.comments}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Downloads</h3>
                        <p class="description-value">${o.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>
        `}),c.insertAdjacentHTML("beforeend",r),d.refresh()}function w(){c.innerHTML=""}const u=document.querySelector(".loader");function v(){u.hidden=!1}function L(){u.hidden=!0}const p=document.querySelector(".load-more");function b({page:t,total:r,per_page:o}){return r-(t-1)*o>0?(S(),!1):(f(),!0)}function S(){p.hidden=!1}function f(){p.hidden=!0}const q=m.create({baseURL:"https://pixabay.com/api/",timeout:1e3,params:{key:"29951838-c03d41fde620325ff539c52c5"}}),a={page:1,total:null,query:"",per_page:15};async function h(t){t&&(w(),v()),f();const r={image_type:"photo",orientation:"horizontal",safesearch:!0,q:t||a.query,per_page:a.per_page,page:a.page};try{const i=await q.request({params:r});if(a.total=i.data.total,a.page+=1,t&&(a.query=t),i.status!==200)throw new Error(i.status);const e=i.data;if(e.totalHits===0)throw new Error("Empty response");y(e)}catch{l.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}L();const o=b(a);t||E(),!t&&o&&l.success({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}function E(){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t,behavior:"smooth"})}const M=document.querySelector("form"),$=document.querySelector(".load-more");M.addEventListener("submit",t=>{t.preventDefault();const r=t.target.search.value.trim();if(!r)return l.warning({position:"topRight",message:"Please fill-in the search input"});h(r)});$.addEventListener("click",t=>{h()});
//# sourceMappingURL=index.js.map
