"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[796],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(r),h=o,f=m["".concat(i,".").concat(h)]||m[h]||c[h]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6607:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return i},toc:function(){return s},default:function(){return c}});var n=r(7462),o=(r(7294),r(3905));const a={slug:"new-html-report",title:"New HTML reporter",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},l=void 0,u={permalink:"/blog/new-html-report",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2017-10-28-new-html-report.md",source:"@site/blog/2017-10-28-new-html-report.md",title:"New HTML reporter",description:"The Stryker HTML Reporter version 0.10 has a lot of new features, but more importantly: a sexy new look.",date:"2017-10-28T00:00:00.000Z",formattedDate:"October 28, 2017",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:.88,truncated:!0,authors:[{name:"Nico Jansen",title:"Stryker Team",url:"https://github.com/nicojs",imageURL:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4"}],prevItem:{title:"Stryker adds Babel support",permalink:"/blog/babel-support"},nextItem:{title:"TypeScript support",permalink:"/blog/typescript-support"}},i={authorsImageUrls:[void 0]},s=[{value:"Sexy new look",id:"sexy-new-look",children:[],level:2},{value:"New features",id:"new-features",children:[],level:2}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Stryker HTML Reporter version 0.10 has a lot of new features, but more importantly: a sexy new look."),(0,o.kt)("p",null,"For the entire changelog:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-html-reporter/CHANGELOG.md"},"stryker-html-reporter changelog"))),(0,o.kt)("h2",{id:"sexy-new-look"},"Sexy new look"),(0,o.kt)("p",null,"Without further ado:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(6901).Z})),(0,o.kt)("p",null,"As you might already suspect, we've upgraded to ",(0,o.kt)("a",{parentName:"p",href:"http://getbootstrap.com/"},"bootstrap 4 (beta)"),"."),(0,o.kt)("h2",{id:"new-features"},"New features"),(0,o.kt)("p",null,"This new report has a ton of new features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Mutant states"),". The file report will now show the exact ",(0,o.kt)("a",{parentName:"li",href:"http://stryker-mutator.github.io/faq.html#q-what-do-all-these-metrics-mean"},"state of a mutant"),".\nIt's also possible to filter out the exact states at the top. It even shows the amount of mutants with that state in parentheses.\nThis should give you more details as to what happened when testing your application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Detailed mutant report"),". On the right side (or below on small screens) of a file report, you can now see a detailed table with even more information about the mutants."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Breadcrumb"),". The days of getting lost in your Stryker report belong to the past. Behold: the new breadcrumb in your report!")),(0,o.kt)("p",null,"Please try it out yourself and let us know what your think!"))}c.isMDXComponent=!0},6901:function(e,t,r){t.Z=r.p+"assets/images/html-report-bootstrap4-7a2db262ba912804cb7081fde4f1046a.png"}}]);