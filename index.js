import{S as u,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const n=document.querySelector(".gallery"),c=new u(".gallery .gallery-item a",{captionDelay:250,captionsData:"alt"});window.qwerty=c;function p(s){let e="";s.hits.forEach(r=>{e+=`
        <li class="gallery-item">
            <a href="${r.largeImageURL}">
                <div class="image-wrapper"><img src="${r.webformatURL}" alt="${r.tags}" /></div>
                <ul class="image-description">
                    <li class="gallery-description">
                        <h3 class="description-title">Likes</h3>
                        <p class="description-value">${r.likes}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Views</h3>
                        <p class="description-value">${r.views}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Comments</h3>
                        <p class="description-value">${r.comments}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Downloads</h3>
                        <p class="description-value">${r.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>
        `}),n.innerHTML=e+'<li class="gallery-item">',c.refresh()}function h(){n.innerHTML=""}const d=document.querySelector(".loader");function f(){d.hidden=!1}function m(){d.hidden=!0}const g="29951838-c03d41fde620325ff539c52c5",y="https://pixabay.com/api?";function w(s){return new Promise((e,r)=>{h(),f();const o=new URLSearchParams({key:g,image_type:"photo",orientation:"horizontal",safesearch:!0,q:s||""}).toString();fetch(y+o,{method:"GET"}).then(e).catch(r)}).then(e=>{if(e.status!==200||!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.totalHits===0)throw new Error("Empty response");p(e)}).catch(e=>{l.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{m()})}const L=document.querySelector("form");L.addEventListener("submit",s=>{s.preventDefault();const e=s.target.search.value;if(!e)return l.warning({position:"topRight",message:"Please fill-in the search input"});w(e)});
//# sourceMappingURL=index.js.map
