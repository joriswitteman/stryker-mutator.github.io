(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[2392],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),f=l(r),m=o,y=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(y,i(i({ref:e},s),{},{components:r})):n.createElement(y,i({ref:e},s))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5167:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u},default:function(){return l}});var n=r(2122),o=(r(7294),r(3905));const a={slug:"introduction-to-mutation-testing",title:"Introduction to mutation testing",author:"Simon de Lang",author_title:"Stryker Team",author_url:"https://github.com/simondel",author_image_url:"https://avatars1.githubusercontent.com/u/4221997?s=460&u=d09f7c27690d66764ff2f2ebb6d9f8d5431ad9e3&v=4",tags:["stryker"]},i={permalink:"/blog/introduction-to-mutation-testing",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2017-01-17-introduction-to-mutation-testing.md",source:"@site/blog/2017-01-17-introduction-to-mutation-testing.md",title:"Introduction to mutation testing",description:"Writing unit tests can be hard. Even for an easy example such as a calculator app.",date:"2017-01-17T00:00:00.000Z",formattedDate:"January 17, 2017",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:4.505,truncated:!0,prevItem:{title:"Stryker weekend",permalink:"/blog/stryker-weekend"},nextItem:{title:"Happy new Stryker!",permalink:"/blog/happy-new-stryker"}},u=[],c={toc:u};function l({components:t,...e}){return(0,o.kt)("wrapper",(0,n.Z)({},c,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Writing unit tests can be hard. Even for an easy example such as a calculator app.\nThere are unlimited combinations of inputs for a calculator and you're not going to test every single one. So when are you done testing?"))}l.isMDXComponent=!0}}]);