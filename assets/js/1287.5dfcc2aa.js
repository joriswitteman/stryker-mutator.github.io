"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[1287],{830:function(e,t,n){n.d(t,{W:function(){return r}});var a=n(7294);function r(){return a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},541:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r="iconExternalLink_3J9K";var l=e=>{let{width:t=13.5,height:n=13.5}=e;return a.createElement("svg",{width:t,height:n,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},1287:function(e,t,n){n.d(t,{Z:function(){return ve}});var a=n(7294),r=n(6010),l=n(6775),o=n(5999),c=n(2822),s="skipToContent_1oUP";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){const e=(0,a.useRef)(null),{action:t}=(0,l.k6)();return(0,c.SL)((n=>{let{location:a}=n;e.current&&!a.hash&&"PUSH"===t&&i(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:s,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m=n(7462);function d(e){let{width:t=21,height:n=21,color:r="currentColor",strokeWidth:l=1.2,className:o,...c}=e;return a.createElement("svg",(0,m.Z)({viewBox:"0 0 15 15",width:t,height:n},c),a.createElement("g",{stroke:r,strokeWidth:l},a.createElement("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})))}var h="announcementBar_3WsW",g="announcementBarPlaceholder_2m9F",f="announcementBarClose_38nx",v="announcementBarContent_3EUC";var b=function(){const{isActive:e,close:t}=(0,c.nT)(),{announcementBar:n}=(0,c.LU)();if(!e)return null;const{content:l,backgroundColor:s,textColor:i,isCloseable:u}=n;return a.createElement("div",{className:h,style:{backgroundColor:s,color:i},role:"banner"},u&&a.createElement("div",{className:g}),a.createElement("div",{className:v,dangerouslySetInnerHTML:{__html:l}}),u?a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn close",f),onClick:t,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement(d,{width:14,height:14,strokeWidth:3.1})):null)},E=n(4978),p=n(2389),k={toggle:"toggle_71bT",toggleScreenReader:"toggleScreenReader_28Tw",toggleDisabled:"toggleDisabled_3cF-",toggleTrack:"toggleTrack_32Fl",toggleTrackCheck:"toggleTrackCheck_3lV7",toggleChecked:"toggleChecked_2FvV",toggleTrackX:"toggleTrackX_S2yS",toggleTrackThumb:"toggleTrackThumb_xI_Z",toggleFocused:"toggleFocused_my6j",toggleIcon:"toggleIcon_O4iE"};const _=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(k.toggleIcon,k.dark),style:n},t)},Z=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(k.toggleIcon,k.light),style:n},t)},y=(0,a.memo)((e=>{let{className:t,icons:n,checked:l,disabled:o,onChange:c}=e;const[s,i]=(0,a.useState)(l),[u,m]=(0,a.useState)(!1),d=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)(k.toggle,t,{[k.toggleChecked]:s,[k.toggleFocused]:u,[k.toggleDisabled]:o})},a.createElement("div",{className:k.toggleTrack,role:"button",tabIndex:-1,onClick:()=>{var e;return null==(e=d.current)?void 0:e.click()}},a.createElement("div",{className:k.toggleTrackCheck},n.checked),a.createElement("div",{className:k.toggleTrackX},n.unchecked),a.createElement("div",{className:k.toggleTrackThumb})),a.createElement("input",{ref:d,checked:s,type:"checkbox",className:k.toggleScreenReader,"aria-label":"Switch between dark and light mode",onChange:c,onClick:()=>i(!s),onFocus:()=>m(!0),onBlur:()=>m(!1),onKeyDown:e=>{var t;"Enter"===e.key&&(null==(t=d.current)||t.click())}}))}));function w(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:l}}}=(0,c.LU)(),o=(0,p.Z)();return a.createElement(y,(0,m.Z)({disabled:!o,icons:{checked:a.createElement(_,{icon:t,style:n}),unchecked:a.createElement(Z,{icon:r,style:l})}},e))}var C=n(5350);var N=e=>{const[t,n]=(0,a.useState)(e),r=(0,a.useRef)(!1),l=(0,a.useRef)(0),o=(0,a.useCallback)((e=>{null!==e&&(l.current=e.getBoundingClientRect().height)}),[]);return(0,c.RF)(((t,a)=>{if(!e)return;const o=t.scrollY;if(o<l.current)return void n(!0);if(r.current)return void(r.current=!1);const c=null==a?void 0:a.scrollY,s=document.documentElement.scrollHeight-l.current,i=window.innerHeight;c&&o>=c?n(!1):o+i<s&&n(!0)})),(0,c.SL)((t=>{if(e)return t.location.hash?(r.current=!0,void n(!1)):void n(!0)})),{navbarRef:o,isNavbarVisible:t}};var S=function(e){void 0===e&&(e=!0),(0,a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])},L=n(3783),T=n(907),I=n(2207),D=n(5537);var B=e=>{let{width:t=30,height:n=30,className:r,...l}=e;return a.createElement("svg",(0,m.Z)({className:r,width:t,height:n,viewBox:"0 0 30 30","aria-hidden":"true"},l),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},x={toggle:"toggle_3Zt9",navbarHideable:"navbarHideable_2qcr",navbarHidden:"navbarHidden_3yey",navbarSidebarToggle:"navbarSidebarToggle_wkoY"};const M="right";function P(){return(0,c.LU)().navbar.items}function R(){const{colorMode:{disableSwitch:e}}=(0,c.LU)(),{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=(0,C.Z)();return{isDarkTheme:t,toggle:(0,a.useCallback)((e=>e.target.checked?r():n()),[n,r]),disabled:e}}function A(e){let{sidebarShown:t,toggleSidebar:n}=e;S(t);const l=P(),s=R(),i=function(e){var t;let{sidebarShown:n,toggleSidebar:r}=e;const l=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:r}),o=(0,c.D9)(l),[s,i]=(0,a.useState)((()=>!1));(0,a.useEffect)((()=>{l&&!o&&i(!0)}),[l,o]);const u=!!l;return(0,a.useEffect)((()=>{u?n||i(!0):i(!1)}),[n,u]),{shown:s,hide:(0,a.useCallback)((()=>{i(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(D.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&a.createElement(w,{className:x.navbarSidebarToggle,checked:s.isDarkTheme,onChange:s.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(d,{color:"var(--ifm-color-emphasis-600)",className:x.navbarSidebarCloseSvg}))),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":i.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map(((e,t)=>a.createElement(I.Z,(0,m.Z)({mobile:!0},e,{onClick:n,key:t})))))),a.createElement("div",{className:"navbar-sidebar__item menu"},l.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:i.hide},a.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),i.content)))}var U=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,c.LU)(),n=function(){const e=(0,L.Z)(),t="mobile"===e,[n,r]=(0,a.useState)(!1);(0,c.Rb)((()=>{if(n)return r(!1),!1}));const l=(0,a.useCallback)((()=>{r((e=>!e))}),[]);return(0,a.useEffect)((()=>{"desktop"===e&&r(!1)}),[e]),{shouldRender:t,toggle:l,shown:n}}(),l=R(),o=(0,T.gA)(),{navbarRef:s,isNavbarVisible:i}=N(e),u=P(),d=u.some((e=>"search"===e.type)),{leftItems:h,rightItems:g}=function(e){return{leftItems:e.filter((e=>{var t;return"left"===(null!=(t=e.position)?t:M)})),rightItems:e.filter((e=>{var t;return"right"===(null!=(t=e.position)?t:M)}))}}(u);return a.createElement("nav",{ref:s,className:(0,r.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":n.shown,[x.navbarHideable]:e,[x.navbarHidden]:e&&!i})},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},((null==u?void 0:u.length)>0||o)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:n.toggle,onKeyDown:n.toggle},a.createElement(B,null)),a.createElement(D.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),h.map(((e,t)=>a.createElement(I.Z,(0,m.Z)({},e,{key:t}))))),a.createElement("div",{className:"navbar__items navbar__items--right"},g.map(((e,t)=>a.createElement(I.Z,(0,m.Z)({},e,{key:t})))),!l.disabled&&a.createElement(w,{className:x.toggle,checked:l.isDarkTheme,onChange:l.toggle}),!d&&a.createElement(E.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:n.toggle}),n.shouldRender&&a.createElement(A,{sidebarShown:n.shown,toggleSidebar:n.toggle}))},O=n(9960),F=n(4996),V=n(3919),W="footerLogoLink_MyFc",H=n(9750),z=n(541);function K(e){let{to:t,href:n,label:r,prependBaseUrlToHref:l,...o}=e;const c=(0,F.Z)(t),s=(0,F.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(O.Z,(0,m.Z)({className:"footer__link-item"},n?{href:l?s:n}:{to:c},o),n&&!(0,V.Z)(n)?a.createElement("span",null,r,a.createElement(z.Z,null)):r)}const j=e=>{let{sources:t,alt:n,width:r,height:l}=e;return a.createElement(H.Z,{className:"footer__logo",alt:n,sources:t,width:r,height:l})};var q=function(){const{footer:e}=(0,c.LU)(),{copyright:t,links:n=[],logo:l={}}=e||{},o={light:(0,F.Z)(l.src),dark:(0,F.Z)(l.srcDark||l.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},n&&n.length>0&&a.createElement("div",{className:"row footer__links"},n.map(((e,t)=>a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(K,e))))):null)))),(l||t)&&a.createElement("div",{className:"footer__bottom text--center"},l&&(l.src||l.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},l.href?a.createElement(O.Z,{href:l.href,className:W},a.createElement(j,{alt:l.alt,sources:o,width:l.width,height:l.height})):a.createElement(j,{alt:l.alt,sources:o})),t?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null},Q=n(412);const G=(0,c.WA)("theme"),X="light",Y="dark",J=e=>e===Y?Y:X,$=e=>{(0,c.WA)("theme").set(J(e))};var ee=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,c.LU)(),[r,l]=(0,a.useState)((e=>Q.default.canUseDOM?J(document.documentElement.getAttribute("data-theme")):J(e))(e)),o=(0,a.useCallback)((()=>{l(X),$(X)}),[]),s=(0,a.useCallback)((()=>{l(Y),$(Y)}),[]);return(0,a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",J(r))}),[r]),(0,a.useEffect)((()=>{if(!t)try{const e=G.get();null!==e&&l(J(e))}catch(e){console.error(e)}}),[t,l]),(0,a.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;l(t?Y:X)}))}),[t,n]),{isDarkTheme:r===Y,setLightTheme:o,setDarkTheme:s}},te=n(2924);var ne=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=ee();return a.createElement(te.Z.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)};const ae="docusaurus.tab.";var re=()=>{const[e,t]=(0,a.useState)({}),n=(0,a.useCallback)(((e,t)=>{(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((()=>{try{const e={};(0,c._f)().forEach((t=>{if(t.startsWith(ae)){const n=t.substring(ae.length);e[n]=(0,c.WA)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}};var le=(0,a.createContext)(void 0);var oe=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=re();return a.createElement(le.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)};function ce(e){let{children:t}=e;return a.createElement(ne,null,a.createElement(c.pl,null,a.createElement(oe,null,a.createElement(c.OC,null,a.createElement(c.L5,null,a.createElement(c.Cn,null,t))))))}var se=n(2859),ie=n(2263);function ue(e){let{locale:t,version:n,tag:r}=e;const l=t;return a.createElement(se.Z,null,l&&a.createElement("meta",{name:"docsearch:language",content:l}),n&&a.createElement("meta",{name:"docsearch:version",content:n}),r&&a.createElement("meta",{name:"docsearch:docusaurus_tag",content:r}))}var me=n(1217);function de(){const{i18n:{defaultLocale:e,locales:t}}=(0,ie.Z)(),n=(0,c.l5)();return a.createElement(se.Z,null,t.map((e=>a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),a.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function he(e){let{permalink:t}=e;const{siteConfig:{url:n}}=(0,ie.Z)(),r=function(){const{siteConfig:{url:e}}=(0,ie.Z)(),{pathname:t}=(0,l.TH)();return e+(0,F.Z)(t)}(),o=t?""+n+t:r;return a.createElement(se.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function ge(e){const{siteConfig:{favicon:t},i18n:{currentLocale:n,localeConfigs:r}}=(0,ie.Z)(),{metadatas:l,image:o}=(0,c.LU)(),{title:s,description:i,image:u,keywords:d,searchMetadatas:h}=e,g=(0,F.Z)(t),f=(0,c.pe)(s),v=n,b=r[n].direction;return a.createElement(a.Fragment,null,a.createElement(se.Z,null,a.createElement("html",{lang:v,dir:b}),t&&a.createElement("link",{rel:"shortcut icon",href:g}),a.createElement("title",null,f),a.createElement("meta",{property:"og:title",content:f}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),o&&a.createElement(me.Z,{image:o}),u&&a.createElement(me.Z,{image:u}),a.createElement(me.Z,{description:i,keywords:d}),a.createElement(he,null),a.createElement(de,null),a.createElement(ue,(0,m.Z)({tag:c.HX,locale:n},h)),a.createElement(se.Z,null,l.map(((e,t)=>a.createElement("meta",(0,m.Z)({key:"metadata_"+t},e))))))}var fe=function(){(0,a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var ve=function(e){const{children:t,noFooter:n,wrapperClassName:l,pageClassName:o}=e;return fe(),a.createElement(ce,null,a.createElement(ge,e),a.createElement(u,null),a.createElement(b,null),a.createElement(U,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,l,o)},t),!n&&a.createElement(q,null))}},5537:function(e,t,n){var a=n(7462),r=n(7294),l=n(9960),o=n(9750),c=n(4996),s=n(2263),i=n(2822);t.Z=e=>{const{siteConfig:{title:t}}=(0,s.Z)(),{navbar:{title:n,logo:u={src:""}}}=(0,i.LU)(),{imageClassName:m,titleClassName:d,...h}=e,g=(0,c.Z)(u.href||"/"),f={light:(0,c.Z)(u.src),dark:(0,c.Z)(u.srcDark||u.src)},v=r.createElement(o.Z,{sources:f,height:u.height,width:u.width,alt:u.alt||n||t});return r.createElement(l.Z,(0,a.Z)({to:g},h,u.target&&{target:u.target}),u.src&&(m?r.createElement("div",{className:m},v):r.createElement(r.Fragment,null,v)),null!=n&&r.createElement("b",{className:d},n))}},5525:function(e,t,n){n.d(t,{O:function(){return d}});var a=n(7462),r=n(7294),l=n(6010),o=n(9960),c=n(4996),s=n(541),i=n(3919),u=n(2822),m=n(2207);function d(e){var t;let{activeBasePath:n,activeBaseRegex:l,to:m,href:d,label:h,activeClassName:g="",prependBaseUrlToHref:f,...v}=e;const b=(0,c.Z)(m),E=(0,c.Z)(n),p=(0,c.Z)(d,{forcePrependBaseUrl:!0}),k=h&&d&&!(0,i.Z)(d),_="dropdown__link--active"===g;return r.createElement(o.Z,(0,a.Z)({},d?{href:f?p:d}:{isNavLink:!0,activeClassName:null!=(t=v.className)&&t.includes(g)?"":g,to:b,...n||l?{isActive:(e,t)=>l?(0,u.Fx)(l,t.pathname):t.pathname.startsWith(E)}:null},v),k?r.createElement("span",null,h,r.createElement(s.Z,_&&{width:12,height:12})):h)}function h(e){let{className:t,isDropdownItem:n=!1,...o}=e;const c=r.createElement(d,(0,a.Z)({className:(0,l.Z)(n?"dropdown__link":"navbar__item navbar__link",t)},o));return n?r.createElement("li",null,c):c}function g(e){let{className:t,isDropdownItem:n,...o}=e;return r.createElement("li",{className:"menu__list-item"},r.createElement(d,(0,a.Z)({className:(0,l.Z)("menu__link",t)},o)))}t.Z=function(e){var t;let{mobile:n=!1,position:l,...o}=e;const c=n?g:h;return r.createElement(c,(0,a.Z)({},o,{activeClassName:null!=(t=o.activeClassName)?t:(0,m.E)(n)}))}},6400:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),l=n(5525),o=n(907),c=n(6010),s=n(2207),i=n(2822),u=n(8780);function m(e){let{docId:t,label:n,docsPluginId:m,...d}=e;const{activeVersion:h,activeDoc:g}=(0,o.Iw)(m),{preferredVersion:f}=(0,i.J)(m),v=(0,o.yW)(m),b=function(e,t){const n=e.flatMap((e=>e.docs)),a=n.find((e=>e.id===t));if(!a){const a=n.map((e=>e.id)).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((e=>e.name)).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return a}((0,u.uniq)([h,f,v].filter(Boolean)),t),E=(0,s.E)(d.mobile);return r.createElement(l.Z,(0,a.Z)({exact:!0},d,{className:(0,c.Z)(d.className,{[E]:(null==g?void 0:g.sidebar)&&g.sidebar===b.sidebar}),activeClassName:E,label:null!=n?n:b.id,to:b.path}))}},9308:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),l=n(5525),o=n(3154),c=n(907),s=n(2822),i=n(5999);const u=e=>e.docs.find((t=>t.id===e.mainDocId));function m(e){var t,n;let{mobile:m,docsPluginId:d,dropdownActiveClassDisabled:h,dropdownItemsBefore:g,dropdownItemsAfter:f,...v}=e;const b=(0,c.Iw)(d),E=(0,c.gB)(d),p=(0,c.yW)(d),{preferredVersion:k,savePreferredVersionName:_}=(0,s.J)(d);const Z=function(){const e=E.map((e=>{const t=(null==b?void 0:b.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==b?void 0:b.activeVersion),onClick:()=>{_(e.name)}}}));return[...g,...e,...f]}(),y=null!=(t=null!=(n=b.activeVersion)?n:k)?t:p,w=m&&Z?(0,i.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):y.label,C=m&&Z?void 0:u(y).path;return Z.length<=1?r.createElement(l.Z,(0,a.Z)({},v,{mobile:m,label:w,to:C,isActive:h?()=>!1:void 0})):r.createElement(o.Z,(0,a.Z)({},v,{mobile:m,label:w,to:C,items:Z,isActive:h?()=>!1:void 0}))}},7250:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7462),r=n(7294),l=n(5525),o=n(907),c=n(2822);function s(e){var t;let{label:n,to:s,docsPluginId:i,...u}=e;const m=(0,o.zu)(i),{preferredVersion:d}=(0,c.J)(i),h=(0,o.yW)(i),g=null!=(t=null!=m?m:d)?t:h,f=null!=n?n:g.label,v=null!=s?s:(e=>e.docs.find((t=>t.id===e.mainDocId)))(g).path;return r.createElement(l.Z,(0,a.Z)({},u,{label:f,to:v}))}},3154:function(e,t,n){var a=n(7462),r=n(7294),l=n(6010),o=n(2822),c=n(5525),s=n(2207);function i(e,t){return e.some((e=>function(e,t){return!!(0,o.Mg)(e.to,t)||!!(0,o.Fx)(e.activeBaseRegex,t)||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function u(e){var t;let{items:n,position:o,className:i,...u}=e;const m=(0,r.useRef)(null),d=(0,r.useRef)(null),[h,g]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=e=>{m.current&&!m.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[m]),r.createElement("div",{ref:m,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===o,"dropdown--show":h})},r.createElement(c.O,(0,a.Z)({className:(0,l.Z)("navbar__link",i)},u,{onClick:u.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),g(!h))}}),null!=(t=u.children)?t:u.label),r.createElement("ul",{ref:d,className:"dropdown__menu"},n.map(((e,t)=>r.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:e=>{if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);const t=m.current.nextElementSibling;t&&t.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))))))}function m(e){var t;let{items:n,className:u,position:m,...d}=e;const h=(0,o.be)(),g=i(n,h),{collapsed:f,toggleCollapsed:v,setCollapsed:b}=(0,o.uR)({initialState:()=>!g});return(0,r.useEffect)((()=>{g&&b(!g)}),[h,g,b]),r.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":f})},r.createElement(c.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",u)},d,{onClick:e=>{e.preventDefault(),v()}}),null!=(t=d.children)?t:d.label),r.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},n.map(((e,t)=>r.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}t.Z=function(e){let{mobile:t=!1,...n}=e;const a=t?m:u;return r.createElement(a,n)}},2207:function(e,t,n){n.d(t,{Z:function(){return v},E:function(){return f}});var a=n(7294),r=n(5525),l=n(3154),o=n(7462);var c=e=>{let{width:t=20,height:n=20,...r}=e;return a.createElement("svg",(0,o.Z)({viewBox:"0 0 20 20",width:t,height:n,"aria-hidden":"true"},r),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},s=n(2263),i=n(2822),u="iconLanguage_3vod";function m(e){let{mobile:t,dropdownItemsBefore:n,dropdownItemsAfter:r,...m}=e;const{i18n:{currentLocale:d,locales:h,localeConfigs:g}}=(0,s.Z)(),f=(0,i.l5)();function v(e){return g[e].label}const b=[...n,...h.map((e=>{const t="pathname://"+f.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:v(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===d?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...r],E=t?"Languages":v(d);return a.createElement(l.Z,(0,o.Z)({},m,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(c,{className:u}),a.createElement("span",null,E)),items:b}))}var d=n(4978);function h(e){let{mobile:t}=e;return t?null:a.createElement(d.Z,null)}const g={default:()=>r.Z,localeDropdown:()=>m,search:()=>h,dropdown:()=>l.Z,docsVersion:()=>n(7250).Z,docsVersionDropdown:()=>n(9308).Z,doc:()=>n(6400).Z};const f=e=>e?"menu__link--active":"navbar__link--active";function v(e){let{type:t,...n}=e;const r=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),l=(e=>{const t=g[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()})(r);return a.createElement(l,n)}},2924:function(e,t,n){const a=n(7294).createContext(void 0);t.Z=a},9750:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),c=n(5350),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"};var i=e=>{const t=(0,o.Z)(),{isDarkTheme:n}=(0,c.Z)(),{sources:i,className:u,alt:m="",...d}=e,h=t?n?["dark"]:["light"]:["light","dark"];return r.createElement(r.Fragment,null,h.map((e=>r.createElement("img",(0,a.Z)({key:e,src:i[e],alt:m,className:(0,l.Z)(s.themedImage,s["themedImage--"+e],u)},d)))))}},5350:function(e,t,n){var a=n(7294),r=n(2924);t.Z=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},4978:function(e,t,n){n.d(t,{Z:function(){return S}});var a=n(7462),r=n(7294),l=n(3935),o=n(2263),c=n(6775),s=n(4996),i=n(9960),u=n(2859),m=n(6397),d=n(2822);function h(){return r.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var g=n(830);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b="Ctrl";var E=r.forwardRef((function(e,t){var n=e.translations,a=void 0===n?{}:n,l=v(e,["translations"]),o=a.buttonText,c=void 0===o?"Search":o,s=a.buttonAriaLabel,i=void 0===s?"Search":s,u=(0,r.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":b:null}),[]);return r.createElement("button",f({type:"button",className:"DocSearch DocSearch-Button","aria-label":i},l,{ref:t}),r.createElement("span",{className:"DocSearch-Button-Container"},r.createElement(g.W,null),r.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),r.createElement("span",{className:"DocSearch-Button-Keys"},null!==u&&r.createElement(r.Fragment,null,r.createElement("span",{className:"DocSearch-Button-Key"},u===b?r.createElement(h,null):u),r.createElement("span",{className:"DocSearch-Button-Key"},"K"))))})),p=n(907);function k(){const{locale:e,tags:t}=function(){const{i18n:e}=(0,o.Z)(),t=(0,p._r)(),n=(0,p.WS)(),a=(0,d.Oh)(),r=[d.HX,...Object.keys(t).map((function(e){var r,l;const o=(null==n||null==(r=n.activePlugin)?void 0:r.pluginId)===e?n.activeVersion:void 0,c=a[e],s=t[e].versions.find((e=>e.isLast)),i=null!=(l=null!=o?o:c)?l:s;return(0,d.os)(e,i.name)}))];return{locale:e.currentLocale,tags:r}}();return["language:"+e,t.map((e=>"docusaurus_tag:"+e))]}var _=n(5999),Z="searchBox_1Doo";let y=null;function w(e){let{hit:t,children:n}=e;return r.createElement(i.Z,{to:t.url},n)}function C(e){let{state:t,onClose:n}=e;const{generateSearchPageLink:a}=(0,m.Z)();return r.createElement(i.Z,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function N(e){var t,i;let{contextualSearch:m,externalUrlRegex:h,...g}=e;const{siteMetadata:f}=(0,o.Z)(),v=k(),b=null!=(t=null==(i=g.searchParameters)?void 0:i.facetFilters)?t:[],p=m?[...v,...b]:b,N={...g.searchParameters,facetFilters:p},{withBaseUrl:S}=(0,s.C)(),L=(0,c.k6)(),T=(0,r.useRef)(null),I=(0,r.useRef)(null),[D,B]=(0,r.useState)(!1),[x,M]=(0,r.useState)(null),P=(0,r.useCallback)((()=>y?Promise.resolve():Promise.all([n.e(831).then(n.bind(n,831)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,6945)),Promise.all([n.e(532),n.e(5256)]).then(n.bind(n,400))]).then((e=>{let[{DocSearchModal:t}]=e;y=t}))),[]),R=(0,r.useCallback)((()=>{P().then((()=>{T.current=document.createElement("div"),document.body.insertBefore(T.current,document.body.firstChild),B(!0)}))}),[P,B]),A=(0,r.useCallback)((()=>{B(!1),T.current.remove()}),[B]),U=(0,r.useCallback)((e=>{P().then((()=>{B(!0),M(e.key)}))}),[P,B,M]),O=(0,r.useRef)({navigate(e){let{itemUrl:t}=e;(0,d.Fx)(h,t)?window.location.href=t:L.push(t)}}).current,F=(0,r.useRef)((e=>e.map((e=>{if((0,d.Fx)(h,e.url))return e;const t=new URL(e.url);return{...e,url:S(""+t.pathname+t.hash)}})))).current,V=(0,r.useMemo)((()=>e=>r.createElement(C,(0,a.Z)({},e,{onClose:A}))),[A]),W=(0,r.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",f.docusaurusVersion),e)),[f.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,l=e.onInput,o=e.searchButtonRef;r.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&l&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&l(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,l,o])}({isOpen:D,onOpen:R,onClose:A,onInput:U,searchButtonRef:I});const H=(0,_.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(u.Z,null,r.createElement("link",{rel:"preconnect",href:"https://"+g.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.createElement("div",{className:Z},r.createElement(E,{onTouchStart:P,onFocus:P,onMouseOver:P,onClick:R,ref:I,translations:{buttonText:H,buttonAriaLabel:H}})),D&&(0,l.createPortal)(r.createElement(y,(0,a.Z)({onClose:A,initialScrollY:window.scrollY,initialQuery:x,navigator:O,transformItems:F,hitComponent:w,resultsFooterComponent:V,transformSearchClient:W},g,{searchParameters:N})),T.current))}var S=function(){const{siteConfig:e}=(0,o.Z)();return r.createElement(N,e.themeConfig.algolia)}},6397:function(e,t,n){var a=n(6775),r=n(2263),l=n(7294);t.Z=function(){const e=(0,a.k6)(),{siteConfig:{baseUrl:t}}=(0,r.Z)(),[n,o]=(0,l.useState)("");return(0,l.useEffect)((()=>{var e;const t=null!=(e=new URLSearchParams(window.location.search).get("q"))?e:"";o(t)}),[]),{searchQuery:n,setSearchQuery:(0,l.useCallback)((t=>{const n=new URLSearchParams(window.location.search);t?n.set("q",t):n.delete("q"),e.replace({search:n.toString()}),o(t)}),[e]),generateSearchPageLink:(0,l.useCallback)((e=>t+"search?q="+encodeURIComponent(e)),[t])}}}}]);