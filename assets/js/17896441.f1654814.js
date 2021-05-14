(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[7918],{3319:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return T}});var n=a(7294),l=a(6742),i=a(4973);var s=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(l.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(l.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},r=a(2263),o=a(907),c=a(6700);function d({siteTitle:e,versionLabel:t}){return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:n.createElement("strong",null,t)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function m({siteTitle:e,versionLabel:t}){return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:n.createElement("strong",null,t)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function u({versionLabel:e,to:t,onClick:a}){return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:e,latestVersionLink:n.createElement("strong",null,n.createElement(l.Z,{to:t,onClick:a},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var v=function(){const{siteConfig:{title:e}}=(0,r.default)(),{pluginId:t}=(0,o.useActivePlugin)({failfast:!0}),{savePreferredVersionName:a}=(0,c.J)(t),l=(0,o.useActiveVersion)(t),{latestDocSuggestion:i,latestVersionSuggestion:s}=(0,o.useDocVersionSuggestions)(t);if(!s)return n.createElement(n.Fragment,null);const v=i??(p=s).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,"current"===l.name?n.createElement(d,{siteTitle:e,versionLabel:l.label}):n.createElement(m,{siteTitle:e,versionLabel:l.label})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:s.label,to:v.path,onClick:()=>a(s.name)})))},p=a(1217),g="lastUpdatedDate_1WI_";function h({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("time",{dateTime:new Date(1e3*e).toISOString(),className:g},t)}}," on {date}")}function E({lastUpdatedBy:e}){return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("strong",null,e)}}," by {user}")}function b({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:a}){return n.createElement("div",{className:"col text--right"},n.createElement("em",null,n.createElement("small",null,n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?n.createElement(h,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:a?n.createElement(E,{lastUpdatedBy:a}):""}},"Last updated{atDate}{byUser}"),!1)))}var f=a(571),_=a(6146),L=a(6010),N="docTitle_3a4h",U="docItemContainer_33ec",k="docItemCol_3FnS";var T=function(e){const{content:t}=e,{metadata:a,frontMatter:l}=t,{image:i,keywords:r,hide_title:c,hide_table_of_contents:d}=l,{description:m,title:u,editUrl:g,lastUpdatedAt:h,formattedLastUpdatedAt:E,lastUpdatedBy:T}=a,{pluginId:y}=(0,o.useActivePlugin)({failfast:!0}),Z=(0,o.useVersions)(y),w=(0,o.useActiveVersion)(y),A=Z.length>1,C=l.title||u;return n.createElement(n.Fragment,null,n.createElement(p.Z,{title:C,description:m,keywords:r,image:i}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,L.Z)("col",{[k]:!d})},n.createElement(v,null),n.createElement("div",{className:U},n.createElement("article",null,A&&n.createElement("div",null,n.createElement("span",{className:"badge badge--secondary"},"Version: ",w.label)),!c&&n.createElement("header",null,n.createElement("h1",{className:N},u)),n.createElement("div",{className:"markdown"},n.createElement(t,null))),(g||h||T)&&n.createElement("div",{className:"margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},g&&n.createElement(_.Z,{editUrl:g})),(h||T)&&n.createElement(b,{lastUpdatedAt:h,formattedLastUpdatedAt:E,lastUpdatedBy:T}))),n.createElement("div",{className:"margin-vert--lg"},n.createElement(s,{metadata:a})))),!d&&t.toc&&n.createElement("div",{className:"col col--3"},n.createElement(f.Z,{toc:t.toc}))))}},6146:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7294),l=a(4973),i=a(2122),s=a(6010),r="iconEdit_2_ui";var o=({className:e,...t})=>n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:(0,s.Z)(r,e),"aria-label":"Edit page"},t),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));function c({editUrl:e}){return n.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},n.createElement(o,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7294),l=a(6010);var i=function(e,t,a){const[l,i]=(0,n.useState)(void 0);(0,n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){return e[e.indexOf(t)-1]??t}return t}return e[e.length-1]}();if(n){let a=0,s=!1;const r=document.getElementsByClassName(e);for(;a<r.length&&!s;){const e=r[a],{href:o}=e,c=decodeURIComponent(o.substring(o.indexOf("#")+1));n.id===c&&(l&&l.classList.remove(t),e.classList.add(t),i(e),s=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},s="tableOfContents_35-E";const r="table-of-contents__link";function o({toc:e,isChild:t}){return e.length?n.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:r,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))))):null}var c=function({toc:e}){return i(r,"table-of-contents__link--active",100),n.createElement("div",{className:(0,l.Z)(s,"thin-scrollbar")},n.createElement(o,{toc:e}))}}}]);