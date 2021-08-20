"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[1611],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),c=a,h=m["".concat(u,".").concat(c)]||m[c]||d[c]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83276:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(22122),a=(n(67294),n(3905));const o={sidebar_label:"FAQ",title:"Frequently Asked Questions",sidebar_position:4},i=void 0,s={unversionedId:"General/faq",id:"General/faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"Here you will find the answer to the most common issues first-time users of Stryker encounter.",source:"@site/docs/General/faq.md",sourceDirName:"General",slug:"/General/faq",permalink:"/docs/General/faq",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/docs/General/faq.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"FAQ",title:"Frequently Asked Questions",sidebar_position:4},sidebar:"docs",previous:{title:"Stryker dashboard",permalink:"/docs/General/dashboard"},next:{title:"Equivalent mutants",permalink:"/docs/mutation-testing-elements/equivalent-mutants"}},u=[{value:"Q: Stryker is slow! How do I speed it up?",id:"q-stryker-is-slow-how-do-i-speed-it-up",children:[]},{value:"Q: So, what is this &quot;mutation score&quot;?",id:"q-so-what-is-this-mutation-score",children:[]},{value:"Q: What do all these metrics mean?",id:"q-what-do-all-these-metrics-mean",children:[]},{value:"Q: I found a bug! What do I do now?",id:"q-i-found-a-bug-what-do-i-do-now",children:[]}],l={toc:u};function p({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here you will find the answer to the most common issues first-time users of Stryker encounter.",(0,a.kt)("br",{parentName:"p"}),"\n","If this page doesn't answer your question, please feel free to ",(0,a.kt)("a",{parentName:"p",href:"https://gitter.im/stryker-mutator/stryker?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"},(0,a.kt)("img",{parentName:"a",src:"https://badges.gitter.im/stryker-mutator/stryker.svg",alt:"Gitter"})),".\nIf you think you've encountered a bug, please also contact us on Gitter first, before submitting a bug report."),(0,a.kt)("h2",{id:"q-stryker-is-slow-how-do-i-speed-it-up"},"Q: Stryker is slow! How do I speed it up?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A: Improve your tests' performance"),(0,a.kt)("br",{parentName:"p"}),"\n","As we're running ",(0,a.kt)("em",{parentName:"p"},"your")," tests, the first thing you should do, is to improve the performance of your unit tests.\nFor example: when running tests in a browser, try to reduce the number of files loaded in the browser."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A: Only mutate what's needed"),(0,a.kt)("br",{parentName:"p"}),"\n","Make sure you're not mutating unnecessary files (e.g. test files, third party code, etc.).\nDouble-check your ",(0,a.kt)("inlineCode",{parentName:"p"},"files")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"mutate")," settings."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A: Create a RAM disk/drive"),(0,a.kt)("br",{parentName:"p"}),"\n","Take a look at your disk I/O. Is it peaking when running Stryker? Consider creating a RAM disk!",(0,a.kt)("br",{parentName:"p"}),"\n","This will speed up writing and/or reading intermediate files (such as temporary HTML files) by doing everything in your secondary storage.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"Note"),": We didn't test this ourselves yet. So take it with a grain of salt. ;-)"),(0,a.kt)("h2",{id:"q-so-what-is-this-mutation-score"},'Q: So, what is this "mutation score"?'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A: It's the percentage of mutants that have been killed."),(0,a.kt)("br",{parentName:"p"}),"\n","We suppose that mutants to the original source code will be ",(0,a.kt)("inlineCode",{parentName:"p"},"killed")," by a unit test.\nIf that is not the case, the mutant will ",(0,a.kt)("inlineCode",{parentName:"p"},"survive"),".\nThat's not good - so the higher the mutation score, the better is the quality of your tests!"),(0,a.kt)("p",null,"To determine the mutation score, Stryker calculates the following numbers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Total detected = # timedOut + # killed\n# Total undetected = # survived + # no coverage\n# Total mutants = # Total detected + # Total undetected\n% Mutation score = # Total detected / # Total mutants * 100\n")),(0,a.kt)("p",null,"Please note that mutants that resulted in an ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," are not used in the calculation."),(0,a.kt)("h2",{id:"q-what-do-all-these-metrics-mean"},"Q: What do all these metrics mean?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A: After running, Stryker gives each mutant a status:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Killed")," means that a mutant in the original code caused a test to fail. The mutant is dead!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Survived")," means that a mutant in the original code did not cause a test to fail.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"TimedOut")," means that, due to a mutant in the original code, the test takes too long to run. This is often an indication that the mutant created an infinite loop. Such cases are killed by Stryker.\nAn example of a ",(0,a.kt)("inlineCode",{parentName:"p"},"TimedOut")," due to a mutant would be a snippet of code like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"while (moreDataAvailable) {\n    // perform some logic\n}\n")),(0,a.kt)("p",{parentName:"li"},"Stryker could decide to mutate the ",(0,a.kt)("inlineCode",{parentName:"p"},"moreDataAvailable")," into the constant ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," (Stryker would not do this, but let's say that he does.), thus creating an infinite loop.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"No coverage")," means that the original, unmodified code did not have test coverage, As such, every mutant would survive and is as such considered 'survived'.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"An ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," is used to indicate that an ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," was thrown while running a test. This could be due to a mutant, but that is not always the case. Due to that, in this situation, the mutant is ",(0,a.kt)("em",{parentName:"p"},"not")," considered being killed."),(0,a.kt)("p",{parentName:"li"},"An example of an ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," due to a mutant would be a line of code like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"const fs = require('f' + 's');\n")),(0,a.kt)("p",{parentName:"li"},"Stryker could decide to mutate the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," into a ",(0,a.kt)("inlineCode",{parentName:"p"},"-"),", which would result in ",(0,a.kt)("inlineCode",{parentName:"p"},"AssertionError: missing path at Module.require (module.js:496:3)"),". In such cases, Stryker will report:"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"1 mutant(s) caused an error and were therefore not accounted for in the mutation score")))),(0,a.kt)("h2",{id:"q-i-found-a-bug-what-do-i-do-now"},"Q: I found a bug! What do I do now?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A: First ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/stryker-mutator/stryker-js/issues"},"take a look at the known issues")," before filing an issue yourself"),(0,a.kt)("br",{parentName:"p"}),"\n","You can also ",(0,a.kt)("a",{parentName:"p",href:"https://gitter.im/stryker-mutator/stryker-js"},"contact us on Gitter")," and ask if the (mis)behavior you've encountered is known.",(0,a.kt)("br",{parentName:"p"}),"\n","When reporting an issue, please read ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/blob/master/CONTRIBUTING.md#bug-triage"},"our documentation on how to report bugs"),"."))}p.isMDXComponent=!0}}]);