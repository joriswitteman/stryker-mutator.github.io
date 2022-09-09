"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[8568],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return c}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),u=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=u(r),c=n,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return r?a.createElement(h,i(i({ref:e},p),{},{components:r})):a.createElement(h,i({ref:e},p))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1383:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=r(7462),n=(r(7294),r(3905));const o={slug:"connect-pit-to-stryker-dashboard",title:"Connect PIT to Stryker Dashboard",author:"Maarten Mulders",author_title:"Stryker Team",author_url:"https://maarten.mulders.it/",author_image_url:"https://maarten.mulders.it/img/twitter-profile-202106.png",tags:["pit","java","maven","dashboard"]},i=void 0,l={permalink:"/blog/connect-pit-to-stryker-dashboard",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2022-08-16-connect-pit-to-stryker-dashboard.md",source:"@site/blog/2022-08-16-connect-pit-to-stryker-dashboard.md",title:"Connect PIT to Stryker Dashboard",description:"Until recently, it would be quite cumbersome to integrate PIT with the Stryker Mutator Dashboard.",date:"2022-08-16T00:00:00.000Z",formattedDate:"August 16, 2022",tags:[{label:"pit",permalink:"/blog/tags/pit"},{label:"java",permalink:"/blog/tags/java"},{label:"maven",permalink:"/blog/tags/maven"},{label:"dashboard",permalink:"/blog/tags/dashboard"}],readingTime:2.02,hasTruncateMarker:!0,authors:[{name:"Maarten Mulders",title:"Stryker Team",url:"https://maarten.mulders.it/",imageURL:"https://maarten.mulders.it/img/twitter-profile-202106.png"}],frontMatter:{slug:"connect-pit-to-stryker-dashboard",title:"Connect PIT to Stryker Dashboard",author:"Maarten Mulders",author_title:"Stryker Team",author_url:"https://maarten.mulders.it/",author_image_url:"https://maarten.mulders.it/img/twitter-profile-202106.png",tags:["pit","java","maven","dashboard"]},prevItem:{title:"Announcing StrykerJS incremental mode",permalink:"/blog/announcing-incremental-mode"},nextItem:{title:"StrykerJS v6.0: Expeditious Superior Mutations",permalink:"/blog/stryker-js-v6-expeditious-superior-mutations"}},s={authorsImageUrls:[void 0]},u=[{value:"How to use it?",id:"how-to-use-it",level:2},{value:"Credits",id:"credits",level:2},{value:"Post Scriptum",id:"post-scriptum",level:2}],p={toc:u};function m(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://maarten.mulders.it/2022/07/mutation-testing-badge-with-pit-and-stryker-dashboard/"})),(0,n.kt)("p",null,"Until recently, it would be quite cumbersome to integrate PIT with the Stryker Mutator Dashboard.\nIt involved (mis-) using a different PIT reporter, a fragile Bash script to fiddle around in one of the generated JavaScript files...\nNot pretty at all."),(0,n.kt)("p",null,"A first-class tool like PIT deserves a better integration with a first-class dashboard like the Stryker Mutator Dashboard!"),(0,n.kt)("p",null,"That's why today, I am introducing a much cleaner and simpler approach: the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mthmulders/pit-stryker-dashboard-reporter"},"Stryker Mutator Dashboard reporter for PIT"),"."),(0,n.kt)("p",null,"Here's how it works:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"It collects mutation testing results from ",(0,n.kt)("a",{parentName:"li",href:"https://pitest.org/"},"PIT"),"."),(0,n.kt)("li",{parentName:"ol"},"It converts the collected mutation testing results into the format that the ",(0,n.kt)("a",{parentName:"li",href:"https://dashboard.stryker-mutator.io/"},"Stryker Mutator Dashboard")," expects."),(0,n.kt)("li",{parentName:"ol"},"It uploads the converted report to the ",(0,n.kt)("a",{parentName:"li",href:"https://dashboard.stryker-mutator.io/"},"Stryker Mutator Dashboard"),".")),(0,n.kt)("h2",{id:"how-to-use-it"},"How to use it?"),(0,n.kt)("p",null,"I've tried to make it as simple as possible to use the reporter."),(0,n.kt)("p",null,"As a prerequisite, make sure there is an environment variable ",(0,n.kt)("inlineCode",{parentName:"p"},"STRYKER_DASHBOARD_API_KEY")," with the API key that you got when you set up your project."),(0,n.kt)("p",null,"Now, follow these four steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Find the place in your ",(0,n.kt)("strong",{parentName:"p"},"pom.xml")," where you define the ",(0,n.kt)("em",{parentName:"p"},"pitest-maven")," plugin.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add a dependency to this plugin declaration:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n   <groupId>it.mulders.stryker</groupId>\n   <artifactId>pit-dashboard-reporter</artifactId>\n   <version>0.1.2</version>\n</dependency>\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure PIT to use the new output format:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n    <outputFormats>\n        <format>stryker-dashboard</format>\n    </outputFormats>\n</configuration>\n")),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Alternatively, if ",(0,n.kt)("inlineCode",{parentName:"li"},"<configuration>")," is already there, add the ",(0,n.kt)("inlineCode",{parentName:"li"},"<outputFormats>"),"."),(0,n.kt)("li",{parentName:"ol"},"Similarly, if ",(0,n.kt)("inlineCode",{parentName:"li"},"<outputFormats>")," is already there, add (or replace) with ",(0,n.kt)("inlineCode",{parentName:"li"},"<format>stryker-dashboard</format>"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Important")," If you are working on a multi-module Maven project, add the following to the ",(0,n.kt)("inlineCode",{parentName:"p"},"<configuration>")," block:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pluginConfiguration>\n    <stryker.moduleName>${project.artifactId}</stryker.moduleName>\n</pluginConfiguration>\n")),(0,n.kt)("p",{parentName:"li"},"This will ensure the mutation testing results of the various Maven modules will not mix up in the report.\nYou ",(0,n.kt)("strong",{parentName:"p"},"should not")," do this if you have a single-module Maven project!")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For all the other things, the reporter will autoconfigure itself, given your build runs on any of the following environments:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"GitHub Actions")),(0,n.kt)("p",{parentName:"li"},"If your builds run in another environment, please feel free to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mthmulders/pit-stryker-dashboard-reporter/issues/new"},"open an issue"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"That's all - you're done!"),"\nKick off a fresh build, wait a few minutes and enjoy the online report!"),(0,n.kt)("h2",{id:"credits"},"Credits"),(0,n.kt)("p",null,"Credit where credit is due: this reporter would not exist without this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wmaarts/pitest-mutation-testing-elements-plugin"},"tremendous work")," by Wouter Aarts.\nHis reporter contains all the complex mapping from PIT results to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/mutation-testing-elements/tree/master/packages/report-schema"},"mutation-testing-elements' JSON format"),"."),(0,n.kt)("h2",{id:"post-scriptum"},"Post Scriptum"),(0,n.kt)("p",null,"I have a slightly longer version of this blog (including some historical background) on ",(0,n.kt)("a",{parentName:"p",href:"https://maarten.mulders.it/2022/07/mutation-testing-badge-with-pit-and-stryker-dashboard/"},"my personal blog"),"."))}m.isMDXComponent=!0}}]);