"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[6103],{9058:function(e,t,n){n.d(t,{Z:function(){return _}});var a=n(7294),l=n(6010),r=n(3659),o=n(7524),i=n(9960),s=n(5999),c="sidebar_re4s",m="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",g="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function f(e){let{sidebar:t}=e;return a.createElement("aside",{className:"col col--3"},a.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),a.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((e=>a.createElement("li",{key:e.permalink,className:d},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var h=n(3102);function v(e){let{sidebar:t}=e;return a.createElement("ul",{className:"menu__list"},t.items.map((e=>a.createElement("li",{key:e.permalink,className:"menu__list-item"},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return a.createElement(h.Zo,{component:v,props:e})}function E(e){let{sidebar:t}=e;const n=(0,o.i)();return null!=t&&t.items.length?"mobile"===n?a.createElement(b,{sidebar:t}):a.createElement(f,{sidebar:t}):null}function _(e){const{sidebar:t,toc:n,children:o,...i}=e,s=t&&t.items.length>0;return a.createElement(r.Z,i,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement(E,{sidebar:t}),a.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&a.createElement("div",{className:"col col--2"},n))))}},1860:function(e,t,n){n.d(t,{Z:function(){return L}});var a=n(7294),l=n(6010),r=n(5999),o=n(9960),i=n(4996),s=n(8824),c=n(8780),m=n(3548),u=n(6114),d=n(1526);function g(e){return e.href?a.createElement(o.Z,e):a.createElement(a.Fragment,null,e.children)}function p(e){let{author:t}=e;const{name:n,title:l,url:r,imageURL:o,email:i}=t,s=r||i&&"mailto:"+i||void 0;return a.createElement("div",{className:"avatar margin-bottom--sm"},o&&a.createElement(g,{href:s,className:"avatar__photo-link"},a.createElement("img",{className:"avatar__photo",src:o,alt:n})),n&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(g,{href:s,itemProp:"url"},a.createElement("span",{itemProp:"name"},n))),l&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var f="authorCol_sTYa",h="imageOnlyAuthorRow_vA2J",v="imageOnlyAuthorCol_kG3X";function b(e){let{authors:t,assets:n}=e;if(0===t.length)return null;const r=t.every((e=>{let{name:t}=e;return!t}));return a.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",r?h:"row")},t.map(((e,t)=>{var o;return a.createElement("div",{className:(0,l.Z)(!r&&"col col--6",r?v:f),key:t},a.createElement(p,{author:{...e,imageURL:null!=(o=n.authorsImageUrls[t])?o:e.imageURL}}))})))}var E="blogPostTitle_Ikge",_="blogPostData_SAv4",N="blogPostDetailsFull_u0Nl";function L(e){var t;const n=function(){const{selectMessage:e}=(0,s.c)();return t=>{const n=Math.ceil(t);return e(n,(0,r.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}(),{withBaseUrl:g}=(0,i.C)(),{children:p,frontMatter:f,assets:h,metadata:v,truncated:L,isBlogPostPage:k=!1}=e,{date:Z,formattedDate:P,permalink:x,tags:y,readingTime:I,title:C,editUrl:H,authors:w}=v,A=null!=(t=h.image)?t:f.image,T=!k&&L,M=y.length>0,O=k?"h1":"h2";return a.createElement("article",{className:k?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},a.createElement("header",null,a.createElement(O,{className:E,itemProp:"headline"},k?C:a.createElement(o.Z,{itemProp:"url",to:x},C)),a.createElement("div",{className:(0,l.Z)(_,"margin-vert--md")},a.createElement("time",{dateTime:Z,itemProp:"datePublished"},P),void 0!==I&&a.createElement(a.Fragment,null," \xb7 ",n(I))),a.createElement(b,{authors:w,assets:h})),A&&a.createElement("meta",{itemProp:"image",content:g(A,{absolute:!0})}),a.createElement("div",{id:k?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},a.createElement(m.Z,null,p)),(M||L)&&a.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",k&&N)},M&&a.createElement("div",{className:(0,l.Z)("col",{"col--9":T})},a.createElement(d.Z,{tags:y})),k&&H&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(u.Z,{editUrl:H})),T&&a.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":M})},a.createElement(o.Z,{to:v.permalink,"aria-label":(0,r.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:C})},a.createElement("b",null,a.createElement(r.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},8166:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(7294),l=n(6010),r=n(833),o=n(5281),i=n(9058),s=n(1860),c=n(7462),m=n(5999),u=n(2244);function d(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(u.Z,(0,c.Z)({},n,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(u.Z,(0,c.Z)({},t,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var g=n(9407);function p(e){var t;const{content:n}=e,{assets:l,metadata:o}=n,{title:i,description:s,date:c,tags:m,authors:u,frontMatter:d}=o,{keywords:g}=d,p=null!=(t=l.image)?t:d.image;return a.createElement(r.d,{title:i,description:s,keywords:g,image:p},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:c}),u.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:u.map((e=>e.url)).filter(Boolean).join(",")}),m.length>0&&a.createElement("meta",{property:"article:tag",content:m.map((e=>e.label)).join(",")}))}function f(e){const{content:t,sidebar:n}=e,{assets:l,metadata:r}=t,{nextItem:o,prevItem:c,frontMatter:m}=r,{hide_table_of_contents:u,toc_min_heading_level:p,toc_max_heading_level:f}=m;return a.createElement(i.Z,{sidebar:n,toc:!u&&t.toc&&t.toc.length>0?a.createElement(g.Z,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:f}):void 0},a.createElement(s.Z,{frontMatter:m,assets:l,metadata:r,isBlogPostPage:!0},a.createElement(t,null)),(o||c)&&a.createElement(d,{nextItem:o,prevItem:c}))}function h(e){return a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(p,e),a.createElement(f,e))}},9407:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7462),l=n(7294),r=n(6010),o=n(3743),i="tableOfContents_bqdL";function s(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),l=n(7294);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}var i=n(6668);function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>s(e).top>=a));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),s=c(i,{anchorTopOffset:n.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}var g=l.memo(d);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:d,...p}=e;const f=(0,i.L)(),h=null!=m?m:f.tableOfContents.minHeadingLevel,v=null!=d?d:f.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>o({toc:r(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:v});return u((0,l.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:v}}),[s,c,h,v])),l.createElement(g,(0,a.Z)({toc:b,className:n,linkClassName:s},p))}},8824:function(e,t,n){n.d(t,{c:function(){return c}});var a=n(7294),l=n(2263);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),i}}),[e])}function c(){const e=s();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);const l=n.select(t),r=n.pluralForms.indexOf(l);return a[Math.min(r,a.length-1)]}(n,t,e)}}}}]);