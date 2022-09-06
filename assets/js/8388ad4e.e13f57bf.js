"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[7503],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,g=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6999:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var n=r(7462),o=(r(7294),r(3905));const a={slug:"announcing-incremental-mode",title:"Announcing StrykerJS incremental mode",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},i=void 0,u={permalink:"/blog/announcing-incremental-mode",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2022-09-06-announcing-incremental-mode.md",source:"@site/blog/2022-09-06-announcing-incremental-mode.md",title:"Announcing StrykerJS incremental mode",description:"We're excited to announce StrykerJS 6.2. Of course, this release comes with some bug fixes, but in this article, we want to focus on a popular new feature: incremental mutation testing.",date:"2022-09-06T00:00:00.000Z",formattedDate:"September 6, 2022",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:6.725,hasTruncateMarker:!0,authors:[{name:"Nico Jansen",title:"Stryker Team",url:"https://github.com/nicojs",imageURL:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4"}],frontMatter:{slug:"announcing-incremental-mode",title:"Announcing StrykerJS incremental mode",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},nextItem:{title:"Connect PIT to Stryker Dashboard",permalink:"/blog/connect-pit-to-stryker-dashboard"}},c={authorsImageUrls:[void 0]},s=[],l={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We're excited to announce StrykerJS 6.2. Of course, this release comes with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/releases/tag/v6.2.0"},"some bug fixes"),", but in this article, we want to focus on a popular new feature: incremental mutation testing."),(0,o.kt)("p",null,"Incremental mutation testing is ideal for Continuous Integration (CI) scenarios or if you want a faster feedback cycle locally. Indeed, many users seem to be interested in this since ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues/2753"},"it was our most upvoted issue ever"),"."),(0,o.kt)("p",null,"While in 'incremental mode', StrykerJS will track the changes you make to your code and tests and only runs mutation testing on the changed code; while still providing a full mutation testing report at the end!"))}m.isMDXComponent=!0}}]);