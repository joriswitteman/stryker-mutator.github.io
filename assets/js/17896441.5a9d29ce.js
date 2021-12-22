"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[7918],{9483:function(e,t,a){a.r(t),a.d(t,{default:function(){return O}});var n=a(7294),l=a(6010),i=a(3783),s=a(5999),r=a(9960);var o=function(e){const{navLink:t,next:a}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link"),to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},a?n.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"):n.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},t.title))};var c=function(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(o,{navLink:t})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(o,{navLink:a,next:!0})))},d=a(2263),m=a(907),u=a(3810);const v={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=v[e.versionMetadata.banner];return n.createElement(t,e)}function g(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:l},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:i}}=(0,d.Z)(),{pluginId:s}=(0,m.gA)({failfast:!0}),{savePreferredVersionName:r}=(0,u.J)(s),{latestDocSuggestion:o,latestVersionSuggestion:c}=(0,m.Jo)(s),v=null!=o?o:(p=c).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:(0,l.Z)(t,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:i,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(g,{versionLabel:c.label,to:v.path,onClick:()=>r(c.name)})))}function E(e){let{className:t}=e;const a=(0,u.E6)();return a.banner?n.createElement(p,{className:t,versionMetadata:a}):null}function b(e){let{className:t}=e;const a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}var f=a(1217);function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function k(e){let{lastUpdatedBy:t}=e;return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(k,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var L=a(6753),Z=a(62),U="lastUpdated_mt2f";function T(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(Z.Z,e)))}function C(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:i,formattedLastUpdatedAt:s}=e;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(L.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",U)},(a||i)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:i})))}function y(e){const{content:t}=e,{metadata:a}=t,{editUrl:i,lastUpdatedAt:s,formattedLastUpdatedAt:r,lastUpdatedBy:o,tags:c}=a,d=c.length>0,m=!!(i||s||o);return d||m?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(T,{tags:c}),m&&n.createElement(C,{editUrl:i,lastUpdatedAt:s,lastUpdatedBy:o,formattedLastUpdatedAt:r})):null}var w=a(1575),A="tocCollapsible_aw-L",M="tocCollapsibleButton_zr6a",x="tocCollapsibleContent_0dom",H="tocCollapsibleExpanded_FSiv",S=a(5002);function B(e){let{toc:t,className:a,minHeadingLevel:i,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:c}=(0,u.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(A,{[H]:!o},a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",M),onClick:c},n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:x,collapsed:o},n.createElement(S.Z,{toc:t,minHeadingLevel:i,maxHeadingLevel:r})))}var V=a(9649),F="docItemContainer_oiyr",D="docItemCol_zHA2",I="tocMobile_Tx6Y";function O(e){const{content:t}=e,{metadata:a,frontMatter:s}=t,{image:r,keywords:o,hide_title:d,hide_table_of_contents:m,toc_min_heading_level:v,toc_max_heading_level:h}=s,{description:g,title:p}=a,N=!d&&void 0===t.contentTitle,k=(0,i.Z)(),_=!m&&t.toc&&t.toc.length>0,L=_&&("desktop"===k||"ssr"===k);return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:p,description:g,keywords:o,image:r}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[D]:!m})},n.createElement(E,null),n.createElement("div",{className:F},n.createElement("article",null,n.createElement(b,null),_&&n.createElement(B,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:h,className:(0,l.Z)(u.kM.docs.docTocMobile,I)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},N&&n.createElement(V.N,null,p),n.createElement(t,null)),n.createElement(y,e)),n.createElement(c,{previous:a.previous,next:a.next}))),L&&n.createElement("div",{className:"col col--3"},n.createElement(w.Z,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:h,className:u.kM.docs.docTocDesktop}))))}},6753:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),l=a(5999),i=a(7462),s=a(6010),r="iconEdit_mS5F";var o=function(e){let{className:t,...a}=e;return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(r,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},c=a(3810);function d(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.kM.common.editThisPage},n.createElement(o,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9649:function(e,t,a){a.d(t,{N:function(){return d},Z:function(){return m}});var n=a(7462),l=a(7294),i=a(6010),s=a(5999),r=a(3810),o="anchorWithStickyNavbar_y2LR",c="anchorWithHideOnScrollNavbar_3ly5";const d=e=>{let{...t}=e;return l.createElement("header",null,l.createElement("h1",(0,n.Z)({},t,{id:void 0}),t.children))};var m=e=>{return"h1"===e?d:(t=e,e=>{let{id:a,...d}=e;const{navbar:{hideOnScroll:m}}=(0,r.LU)();return a?l.createElement(t,(0,n.Z)({},d,{className:(0,i.Z)("anchor",{[c]:m,[o]:!m}),id:a}),d.children,l.createElement("a",{className:"hash-link",href:"#"+a,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,d)});var t}},1575:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7462),l=a(7294),i=a(6010),s=a(5002),r="tableOfContents_vrFS";var o=function(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,i.Z)(r,"thin-scrollbar",t)},l.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7462),l=a(7294),i=a(3810);function s(e){let{toc:t,className:a,linkClassName:n,isChild:i}=e;return t.length?l.createElement("ul",{className:i?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}function r(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:d,...m}=e;const u=(0,i.LU)(),v=null!=c?c:u.tableOfContents.minHeadingLevel,h=null!=d?d:u.tableOfContents.maxHeadingLevel,g=(0,i.DA)({toc:t,minHeadingLevel:v,maxHeadingLevel:h}),p=(0,l.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:v,maxHeadingLevel:h}}),[r,o,v,h]);return(0,i.Si)(p),l.createElement(s,(0,n.Z)({toc:g,className:a,linkClassName:r},m))}},7774:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(6010),i=a(9960),s="tag_WK-t",r="tagRegular_LXbV",o="tagWithCount_S5Zl";var c=function(e){const{permalink:t,name:a,count:c}=e;return n.createElement(i.Z,{href:t,className:(0,l.Z)(s,{[r]:!c,[o]:c})},a,c&&n.createElement("span",null,c))}},62:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(6010),i=a(5999),s=a(7774),r="tags_NBRY",o="tag_F03v";function c(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(r,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:o},n.createElement(s.Z,{name:t,permalink:a}))}))))}}}]);