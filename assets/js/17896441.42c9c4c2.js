"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[7918],{8943:function(e,t,a){a.r(t),a.d(t,{default:function(){return O}});var n=a(7294),l=a(6010),i=a(3783),r=a(9960),s=a(5999);var o=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(r.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(r.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},c=a(2263),d=a(907),m=a(2822);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function g(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:l},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){let{versionMetadata:t}=e;const{siteConfig:{title:a}}=(0,c.Z)(),{pluginId:i}=(0,d.gA)({failfast:!0}),{savePreferredVersionName:r}=(0,m.J)(i),{latestDocSuggestion:s,latestVersionSuggestion:o}=(0,d.Jo)(i),u=null!=s?s:(h=o).docs.find((e=>e.id===h.mainDocId));var h;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:a,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(g,{versionLabel:o.label,to:u.path,onClick:()=>r(o.name)})))}var p=function(e){let{versionMetadata:t}=e;return t.banner?n.createElement(h,{versionMetadata:t}):n.createElement(n.Fragment,null)},E=a(1217);function b(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var k=a(6753),N=a(62),Z="lastUpdated_13-_";function L(e){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(N.Z,e)))}function U(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:i,formattedLastUpdatedAt:r}=e;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(k.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",Z)},(a||i)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:i})))}function T(e){const{content:t}=e,{metadata:a}=t,{editUrl:i,lastUpdatedAt:r,formattedLastUpdatedAt:s,lastUpdatedBy:o,tags:c}=a,d=c.length>0,u=!!(i||r||o);return d||u?n.createElement("footer",{className:(0,l.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(L,{tags:c}),u&&n.createElement(U,{editUrl:i,lastUpdatedAt:r,lastUpdatedBy:o,formattedLastUpdatedAt:s})):n.createElement(n.Fragment,null)}var C=a(1575),y="tocCollapsible_1PrD",M="tocCollapsibleButton_2O1e",w="tocCollapsibleContent_2Ydz",A="tocCollapsibleExpanded_3GYr",H=a(5002);function x(e){let{toc:t,className:a,minHeadingLevel:i,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:c}=(0,m.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(y,{[A]:!o},a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",M),onClick:c},n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:w,collapsed:o},n.createElement(H.Z,{toc:t,minHeadingLevel:i,maxHeadingLevel:r})))}var B=a(9649),S="docItemContainer_33ec",D="docItemCol_3FnS",F="tocMobile_3Hoh";function O(e){const{content:t,versionMetadata:a}=e,{metadata:r,frontMatter:s}=t,{image:c,keywords:d,hide_title:u,hide_table_of_contents:v,toc_min_heading_level:g,toc_max_heading_level:h}=s,{description:b,title:f}=r,_=!u&&void 0===t.contentTitle,k=(0,i.Z)(),N=!v&&t.toc&&t.toc.length>0,Z=N&&("desktop"===k||"ssr"===k);return n.createElement(n.Fragment,null,n.createElement(E.Z,{title:f,description:b,keywords:d,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[D]:!v})},n.createElement(p,{versionMetadata:a}),n.createElement("div",{className:S},n.createElement("article",null,a.badge&&n.createElement("span",{className:(0,l.Z)(m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label),N&&n.createElement(x,{toc:t.toc,minHeadingLevel:g,maxHeadingLevel:h,className:(0,l.Z)(m.kM.docs.docTocMobile,F)}),n.createElement("div",{className:(0,l.Z)(m.kM.docs.docMarkdown,"markdown")},_&&n.createElement(B.N,null,f),n.createElement(t,null)),n.createElement(T,e)),n.createElement(o,{metadata:r}))),Z&&n.createElement("div",{className:"col col--3"},n.createElement(C.Z,{toc:t.toc,minHeadingLevel:g,maxHeadingLevel:h,className:m.kM.docs.docTocDesktop}))))}},6753:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),l=a(5999),i=a(7462),r=a(6010),s="iconEdit_2_ui";var o=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},c=a(2822);function d(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.kM.common.editThisPage},n.createElement(o,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9649:function(e,t,a){a.d(t,{N:function(){return d},Z:function(){return m}});var n=a(7462),l=a(7294),i=a(6010),r=a(5999),s=a(2822),o="anchorWithStickyNavbar_31ik",c="anchorWithHideOnScrollNavbar_3R7-";const d=function(e){let{...t}=e;return l.createElement("header",null,l.createElement("h1",(0,n.Z)({},t,{id:void 0}),t.children))};var m=e=>{return"h1"===e?d:(t=e,function(e){let{id:a,...d}=e;const{navbar:{hideOnScroll:m}}=(0,s.LU)();return a?l.createElement(t,(0,n.Z)({},d,{className:(0,i.Z)("anchor",{[c]:m,[o]:!m}),id:a}),d.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+a,title:(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,d)});var t}},1575:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7462),l=a(7294),i=a(6010),r=a(5002),s="tableOfContents_35-E";var o=function(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},l.createElement(r.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7462),l=a(7294),i=a(2822);function r(e){let{toc:t,className:a,linkClassName:n,isChild:i}=e;return t.length?l.createElement("ul",{className:i?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(r,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}function s(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:d,...m}=e;const u=(0,i.LU)(),v=null!=c?c:u.tableOfContents.minHeadingLevel,g=null!=d?d:u.tableOfContents.maxHeadingLevel,h=(0,i.DA)({toc:t,minHeadingLevel:v,maxHeadingLevel:g}),p=(0,l.useMemo)((()=>{if(s&&o)return{linkClassName:s,linkActiveClassName:o,minHeadingLevel:v,maxHeadingLevel:g}}),[s,o,v,g]);return(0,i.Si)(p),l.createElement(r,(0,n.Z)({toc:h,className:a,linkClassName:s},m))}},7774:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(6010),i=a(9960),r="tag_1Okp",s="tagRegular_3MiF",o="tagWithCount_1HU1";var c=function(e){const{permalink:t,name:a,count:c}=e;return n.createElement(i.Z,{href:t,className:(0,l.Z)(r,{[s]:!c,[o]:c})},a,c&&n.createElement("span",null,c))}},62:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(6010),i=a(5999),r=a(7774),s="tags_2ga9",o="tag_11ep";function c(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(s,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:o},n.createElement(r.Z,{name:t,permalink:a}))}))))}}}]);