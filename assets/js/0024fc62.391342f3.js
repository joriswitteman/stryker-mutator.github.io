(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{196:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,f=c["".concat(l,".").concat(m)]||c[m]||b[m]||a;return r?o.a.createElement(f,i(i({ref:t},s),{},{components:r})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},265:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/html-report-bootstrap4-7a2db262ba912804cb7081fde4f1046a.png"},73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),o=(r(0),r(196));const a={slug:"new-html-report",title:"New HTML reporter",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},l={permalink:"/blog/new-html-report",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2017-10-28-new-html-report.md",source:"@site/blog/2017-10-28-new-html-report.md",description:"The Stryker HTML Reporter version 0.10 has a lot of new features, but more importantly: a sexy new look.",date:"2017-10-28T00:00:00.000Z",formattedDate:"October 28, 2017",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],title:"New HTML reporter",readingTime:.88,truncated:!0,prevItem:{title:"Stryker adds Babel support",permalink:"/blog/babel-support"},nextItem:{title:"TypeScript support",permalink:"/blog/typescript-support"}},i=[{value:"Sexy new look",id:"sexy-new-look",children:[]},{value:"New features",id:"new-features",children:[]}],u={toc:i};function s({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Stryker HTML Reporter version 0.10 has a lot of new features, but more importantly: a sexy new look."),Object(o.b)("p",null,"For the entire changelog:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-html-reporter/CHANGELOG.md"},"stryker-html-reporter changelog"))),Object(o.b)("h2",{id:"sexy-new-look"},"Sexy new look"),Object(o.b)("p",null,"Without further ado:"),Object(o.b)("p",null,Object(o.b)("img",{src:r(265).default})),Object(o.b)("p",null,"As you might already suspect, we've upgraded to ",Object(o.b)("a",{parentName:"p",href:"http://getbootstrap.com/"},"bootstrap 4 (beta)"),"."),Object(o.b)("h2",{id:"new-features"},"New features"),Object(o.b)("p",null,"This new report has a ton of new features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Mutant states"),". The file report will now show the exact ",Object(o.b)("a",{parentName:"li",href:"http://stryker-mutator.github.io/faq.html#q-what-do-all-these-metrics-mean"},"state of a mutant"),".\nIt's also possible to filter out the exact states at the top. It even shows the amount of mutants with that state in parentheses.\nThis should give you more details as to what happened when testing your application."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Detailed mutant report"),". On the right side (or below on small screens) of a file report, you can now see a detailed table with even more information about the mutants."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Breadcrumb"),". The days of getting lost in your Stryker report belong to the past. Behold: the new breadcrumb in your report!")),Object(o.b)("p",null,"Please try it out yourself and let us know what your think!"))}s.isMDXComponent=!0}}]);