"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[3089],{46165:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(67294),r=a(86010),l=a(5227),i=a(36742),s="sidebar_2ahu",o="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",m="sidebarItem_2UVv",d="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM",g=a(24973);function E({sidebar:e}){return 0===e.items.length?null:n.createElement("nav",{className:(0,r.Z)(s,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(o,"margin-bottom--md")},e.title),n.createElement("ul",{className:c},e.items.map((e=>n.createElement("li",{key:e.permalink,className:m},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:u},e.title))))))}var p=a(571);var h=function(e){const{sidebar:t,toc:a,children:i,...s}=e,o=t&&t.items.length>0;return n.createElement(l.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(E,{sidebar:t})),n.createElement("main",{className:(0,r.Z)("col",{"col--7":o,"col--9 col--offset-1":!o})},i),a&&n.createElement("div",{className:"col col--2"},n.createElement(p.Z,{toc:a})))))}},44428:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(67294),r=a(52263),l=a(46165),i=a(43146),s=a(36742),o=a(24973);var c=function(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,o.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(o.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(s.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(o.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(13018);var d=function(e){const{metadata:t,items:a,sidebar:s}=e,{siteConfig:{title:o}}=(0,r.Z)(),{blogDescription:d,blogTitle:u,permalink:g}=t,E="/"===g?o:u;return n.createElement(l.Z,{title:E,description:d,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:s},a.map((({content:e})=>n.createElement(i.Z,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},n.createElement(e,null)))),n.createElement(c,{metadata:t}))}},43146:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),r=a(86010),l=a(3905),i=a(24973),s=a(36742),o=a(13018),c=a(60637),m=a(41217),d=a(86146),u="blogPostTitle_GeHD",g="blogPostData_291c",E="blogPostDetailsFull_3kfx";var p=function(e){const t=function(){const{selectMessage:e}=(0,o.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:p,metadata:h,truncated:v,isBlogPostPage:b=!1}=e,{date:f,formattedDate:_,permalink:N,tags:k,readingTime:Z,title:T,editUrl:L}=h,{author:w,image:C,keywords:y}=p,I=p.author_url||p.authorURL,x=p.author_title||p.authorTitle,M=p.author_image_url||p.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:y,image:C}),n.createElement("article",{className:b?void 0:"margin-bottom--xl"},(()=>{const e=b?"h1":"h2";return n.createElement("header",null,n.createElement(e,{className:u},b?T:n.createElement(s.Z,{to:N},T)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:f},_),Z&&n.createElement(n.Fragment,null," \xb7 ",t(Z))),n.createElement("div",{className:"avatar margin-vert--md"},M&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:I},n.createElement("img",{src:M,alt:w})),n.createElement("div",{className:"avatar__intro"},w&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(s.Z,{href:I},w)),n.createElement("small",{className:"avatar__subtitle"},x)))))})(),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:c.Z},a)),(k.length>0||v)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",{[E]:b})},k.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((({label:e,permalink:t})=>n.createElement(s.Z,{key:t,className:"margin-horiz--sm",to:t},e)))),b&&L&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:L})),!b&&v&&n.createElement("div",{className:"col text--right"},n.createElement(s.Z,{to:h.permalink,"aria-label":`Read more about ${T}`},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},86146:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=a(24973),l=a(22122),i=a(86010),s="iconEdit_2_ui";var o=({className:e,...t})=>n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,e),"aria-hidden":"true"},t),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));function c({editUrl:e}){return n.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},n.createElement(o,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){a.d(t,{r:function(){return o},Z:function(){return c}});var n=a(67294),r=a(86010);var l=function(e,t,a){const[r,l]=(0,n.useState)(void 0);(0,n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){return e[e.indexOf(t)-1]??t}return t}return e[e.length-1]}();if(n){let a=0,i=!1;const s=document.getElementsByClassName(e);for(;a<s.length&&!i;){const e=s[a],{href:o}=e,c=decodeURIComponent(o.substring(o.indexOf("#")+1));n.id===c&&(r&&r.classList.remove(t),e.classList.add(t),l(e),i=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_35-E";const s="table-of-contents__link";function o({toc:e,isChild:t}){return e.length?n.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))))):null}var c=function({toc:e}){return l(s,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement(o,{toc:e}))}}}]);