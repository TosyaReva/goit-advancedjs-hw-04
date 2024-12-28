import{S as g,a as m,i as l}from"./assets/vendor-BDaiwwc1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const d=document.querySelector(".gallery"),u=new g(".gallery .gallery-item a",{captionDelay:250,captionsData:"alt"});window.qwerty=u;function y(e){let o="";e.hits.forEach(t=>{o+=`
        <li class="gallery-item">
            <a href="${t.largeImageURL}">
                <div class="image-wrapper"><img src="${t.webformatURL}" alt="${t.tags}" /></div>
                <ul class="image-description">
                    <li class="gallery-description">
                        <h3 class="description-title">Likes</h3>
                        <p class="description-value">${t.likes}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Views</h3>
                        <p class="description-value">${t.views}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Comments</h3>
                        <p class="description-value">${t.comments}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Downloads</h3>
                        <p class="description-value">${t.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>
        `}),d.insertAdjacentHTML("beforeend",o),u.refresh()}function w(){d.innerHTML=""}const p=document.querySelector(".loader");function v(){p.hidden=!1}function L(){p.hidden=!0}const c=document.querySelector(".load-more");function b({page:e,total:o,per_page:t}){o-(e-1)*t>0?S():f()}function S(){c.hidden=!1}function f(){c.hidden=!0}function q(){return c.hidden===!0}const M=m.create({baseURL:"https://pixabay.com/api/",timeout:1e3,params:{key:"29951838-c03d41fde620325ff539c52c5"}}),i={page:1,total:null,query:"",per_page:15};async function h(e){e&&(i.page=1,w(),v()),f();const o={image_type:"photo",orientation:"horizontal",safesearch:!0,q:e||i.query,per_page:i.per_page,page:i.page};try{const t=await M.request({params:o});if(i.total=t.data.total,i.page+=1,e&&(i.query=e),t.status!==200)throw new Error(t.status);const a=t.data;if(a.totalHits===0)throw new Error("Empty response");y(a)}catch{l.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}L(),b(i),e||E(),!e&&q()&&l.success({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}function E(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e,behavior:"smooth"})}const $=document.querySelector("form"),P=document.querySelector(".load-more");$.addEventListener("submit",e=>{e.preventDefault();const o=e.target.search.value.trim();if(!o)return l.warning({position:"topRight",message:"Please fill-in the search input"});h(o)});P.addEventListener("click",e=>{h()});
//# sourceMappingURL=index.js.map
