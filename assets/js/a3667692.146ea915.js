(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[5282],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),s=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),f=s(r),m=o,y=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(y,i(i({ref:e},l),{},{components:r})):n.createElement(y,i({ref:e},l))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},266:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u},default:function(){return s}});var n=r(2122),o=(r(7294),r(3905));const a={slug:"announcing-stryker-4-mutation-switching",title:"Announcing Stryker 4.0 - Mutation Switching",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},i={permalink:"/blog/announcing-stryker-4-mutation-switching",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2020-10-07-announcing-stryker-4-mutation-switching.md",source:"@site/blog/2020-10-07-announcing-stryker-4-mutation-switching.md",title:"Announcing Stryker 4.0 - Mutation Switching",description:"We're proud to announce the next major release of the Stryker mutation testing framework for JavaScript and friends: Stryker 4.0.",date:"2020-10-07T00:00:00.000Z",formattedDate:"October 7, 2020",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:10.575,truncated:!0,nextItem:{title:"Announcing Stryker 4.0 Beta",permalink:"/blog/announcing-stryker-4-beta-mutation-switching"}},u=[],c={toc:u};function s({components:t,...e}){return(0,o.kt)("wrapper",(0,n.Z)({},c,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We're proud to announce the next major release of the Stryker mutation testing framework for JavaScript and friends: Stryker 4.0."),(0,o.kt)("p",null,"This release marks a fundamental shift in the way Stryker works internally. It now uses \"mutation switching\", which improves performance and usability, similar to how Stryker.NET and Stryker4s already work. This change, unfortunately, couldn't be done without breaking changes. See the breaking changes paragraph if you're interested."))}s.isMDXComponent=!0}}]);