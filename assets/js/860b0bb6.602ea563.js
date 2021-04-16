(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{136:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return c}));var n=r(3),a=(r(0),r(196));const o={slug:"stryker-0-8-0",title:"Stryker 0.8 release",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},s={permalink:"/blog/stryker-0-8-0",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2017-08-11-stryker-0-8-0.md",source:"@site/blog/2017-08-11-stryker-0-8-0.md",description:"Stryker 0.8 just released with better CI integration and configurable thresholds.",date:"2017-08-11T00:00:00.000Z",formattedDate:"August 11, 2017",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],title:"Stryker 0.8 release",readingTime:1.37,truncated:!0,prevItem:{title:"TypeScript support",permalink:"/blog/typescript-support"},nextItem:{title:"Road to Stryker 1.0",permalink:"/blog/road-to-stryker-1-0"}},l=[{value:"Better CI integration",id:"better-ci-integration",children:[]},{value:"Configurable color thresholds",id:"configurable-color-thresholds",children:[]},{value:"Bugfixes",id:"bugfixes",children:[]},{value:"Enjoy!",id:"enjoy",children:[]}],i={toc:l};function c({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Stryker 0.8 just released with better CI integration and configurable thresholds."),Object(a.b)("p",null,"For the entire changelog per package:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker/CHANGELOG.md"},"stryker changelog")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-api/CHANGELOG.md"},"stryker-api changelog")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-html-reporter/CHANGELOG.md"},"stryker-html-reporter changelog")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-mocha-runner/CHANGELOG.md"},"stryker-mocha-runner changelog")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-mocha-framework/CHANGELOG.md"},"stryker-mocha-framework changelog"))),Object(a.b)("h2",{id:"better-ci-integration"},"Better CI integration"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/pull/355"},"Original PR")),Object(a.b)("p",null,"It's now possible to let your build fail based on your mutation score.\nThe way to do this is to make sure stryker runs inside your (nightly) build and configure the ",Object(a.b)("inlineCode",{parentName:"p"},"threshold.break")," value:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// stryker.conf.js\n// ...\nthresholds: {\n    break: 70, // Fail if mutation score < 70\n    // ..\n}\n// ...\n")),Object(a.b)("p",null,"This will break the build if your mutation score falls below 70%."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"[2017-08-11 13:46:10.190] [ERROR] ScoreResultCalculator - Final mutation score 66.97 under breaking threshold 70, setting exit code to 1 (failure).\nnpm ERR! code ELIFECYCLE\nnpm ERR! errno 1\nnpm ERR! stryker@0.8.0 stryker: `node bin/stryker run`\n")),Object(a.b)("p",null,"Want to know what a 'mutation score' is? See ",Object(a.b)("a",{parentName:"p",href:"../docs/General/faq.md"},"our faq"),"."),Object(a.b)("h2",{id:"configurable-color-thresholds"},"Configurable color thresholds"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/pull/355"},"Original PR")),Object(a.b)("p",null,"The clear-text and html reporters now honor configured high and low thresholds.\nYou once again configure it using the ",Object(a.b)("inlineCode",{parentName:"p"},"thresholds")," config option:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// stryker.conf.js\n// ...\nthresholds: {\n    high: 80,\n    low: 60,\n    // ...\n}\n// ...\n")),Object(a.b)("p",null,"Configuring these values will color mutation scores above 80% ",Object(a.b)("span",{class:"text-success"},"green"),", between 80 and 60% ",Object(a.b)("span",{class:"text-warning"},"yellow")," and anything below 60% ",Object(a.b)("span",{class:"text-danger"},"red"),".\nYou can see an example of an html report based on stryker itself ",Object(a.b)("a",{parentName:"p",href:"https://stryker-mutator.github.io/stryker-html-reporter"},"here"),"."),Object(a.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(a.b)("p",null,"Bugfixes this release:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/issues/335"},"Incorrect relative path for html reporter #355")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/issues/350"},"Mutation testing in node based environments can generate false warnings #350"))),Object(a.b)("h2",{id:"enjoy"},"Enjoy!"),Object(a.b)("p",null,"Enjoy this new release! We're always happy with feedback, negative or positive."))}c.isMDXComponent=!0},196:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,h=b["".concat(s,".").concat(m)]||b[m]||p[m]||o;return r?a.a.createElement(h,l(l({ref:t},c),{},{components:r})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);