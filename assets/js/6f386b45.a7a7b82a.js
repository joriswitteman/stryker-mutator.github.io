"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[1526],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8930:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=r(7462),a=(r(7294),r(3905));const o={slug:"announcing-stryker-2-0",title:"Announcing Stryker 2.0",author:"Simon de Lang",author_title:"Stryker Team",author_url:"https://github.com/simondel",author_image_url:"https://avatars1.githubusercontent.com/u/4221997?s=460&u=d09f7c27690d66764ff2f2ebb6d9f8d5431ad9e3&v=4",tags:["stryker"]},i=void 0,s={permalink:"/blog/announcing-stryker-2-0",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2019-05-17-announcing-stryker-2-0.md",source:"@site/blog/2019-05-17-announcing-stryker-2-0.md",title:"Announcing Stryker 2.0",description:"A new major version of Stryker for JavaScript and TypeScript has been released: version 2.0.0.",date:"2019-05-17T00:00:00.000Z",formattedDate:"May 17, 2019",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:2.08,hasTruncateMarker:!0,authors:[{name:"Simon de Lang",title:"Stryker Team",url:"https://github.com/simondel",imageURL:"https://avatars1.githubusercontent.com/u/4221997?s=460&u=d09f7c27690d66764ff2f2ebb6d9f8d5431ad9e3&v=4"}],frontMatter:{slug:"announcing-stryker-2-0",title:"Announcing Stryker 2.0",author:"Simon de Lang",author_title:"Stryker Team",author_url:"https://github.com/simondel",author_image_url:"https://avatars1.githubusercontent.com/u/4221997?s=460&u=d09f7c27690d66764ff2f2ebb6d9f8d5431ad9e3&v=4",tags:["stryker"]},prevItem:{title:"Host your mutation testing report",permalink:"/blog/stryker-dashboard-host-your-mutation-testing-report"},nextItem:{title:"Announcing Stryker.NET 0.10 with .NET Framework support",permalink:"/blog/announcing-dotnet-framework-support"}},l={authorsImageUrls:[void 0]},u=[{value:"\ud83d\ude80 Migration",id:"-migration",level:2},{value:"\ud83d\udd25 Breaking changes",id:"-breaking-changes",level:2},{value:"\u2728 What&#39;s new",id:"-whats-new",level:2},{value:"\ud83d\udc74 Deprecations",id:"-deprecations",level:2},{value:"\ud83d\udcc5 Release schedule",id:"-release-schedule",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A new major version of Stryker for JavaScript and TypeScript has been released: version 2.0.0.\nThis blog post will cover some of the changes. For a full list of changes, please read ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/blob/master/CHANGELOG.md#200-2019-05-17"},"our changelog"),"."),(0,a.kt)("p",null,"If you run into any issues using the latest version of Stryker, please let us know!"),(0,a.kt)("h2",{id:"-migration"},"\ud83d\ude80 Migration"),(0,a.kt)("p",null,"Migrating to the latest major version is easy! Just update all ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator")," dependencies to at least version 2.0.0. If you are still using version 0.x.x, then please look at ",(0,a.kt)("a",{parentName:"p",href:"https://stryker-mutator.io/blog/2019-02-13/announcing-stryker-1-0"},"our blog post regarding stryker v1"),"."),(0,a.kt)("p",null,"If you're new to Stryker, please see ",(0,a.kt)("a",{parentName:"p",href:"/stryker/quickstart"},"our quickstart"),". Have fun with mutation testing!"),(0,a.kt)("h2",{id:"-breaking-changes"},"\ud83d\udd25 Breaking changes"),(0,a.kt)("p",null,"This major release comes with some breaking changes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"NodeJS version 8 or higher is now required to run Stryker"),(0,a.kt)("li",{parentName:"ol"},"The code of Stryker is now es2017 code instead of es5")),(0,a.kt)("h2",{id:"-whats-new"},"\u2728 What's new"),(0,a.kt)("p",null,"Not a big list of new features this time around. Mainly housekeeping and other optimizations. Here you'll find a list of small improvements."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prettier has been removed as a direct dependency. We use prettier when initially writing your stryker.conf.js to disk (with ",(0,a.kt)("inlineCode",{parentName:"li"},"stryker init"),").\nWe now run prettier using the npx command instead of packaging it with Stryker, keeping Stryker lean and mean."),(0,a.kt)("li",{parentName:"ul"},"We've updated our source-map dependency to enable lazy loading. This ensures that coverage data is only mapped when (and if) it's required."),(0,a.kt)("li",{parentName:"ul"},"VueJS files are only mutated when they contain ",(0,a.kt)("inlineCode",{parentName:"li"},"<script>")," blocks.")),(0,a.kt)("h2",{id:"-deprecations"},"\ud83d\udc74 Deprecations"),(0,a.kt)("p",null,"Since Stryker v1, we've introduced a deprecation policy. This means that we'll support features for one major release after we've deprecated them.\nThis is a (small) list of stuff we've deprecated. You'll also get a warning if you still use them in your setup."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The use of mocha version 5 and below is deprecated. This is mainly because of big changes the way you configure mocha.\nPlease upgrade to mocha 6 or above. See ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mochajs/mocha/blob/master/CHANGELOG.md#600--2019-02-18"},"their changelog")," for more information about upgrading.\nSupport for mocha version 5 and below will be removed in the future (with Stryker v3 probably)."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"onScoreCalculated")," internal reporter event is deprecated. Please use ",(0,a.kt)("inlineCode",{parentName:"li"},"onMutationTestReportReady")," and calculate the score using ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/mutation-testing-elements/tree/master/packages/mutation-testing-metrics#readme"},"mutation-testing-metrics"),".\nAll reporters maintained by the Stryker team are already migrated.")),(0,a.kt)("h2",{id:"-release-schedule"},"\ud83d\udcc5 Release schedule"),(0,a.kt)("p",null,"We'll keep improving Stryker by fixing nasty bugs, improving code (and test) quality and by adding new features.\nThe next major release of Stryker will probably be at the start of 2020 due to the LTS support of NodeJS version 8 ending."))}p.isMDXComponent=!0}}]);