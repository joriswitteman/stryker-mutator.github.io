(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{161:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var o=r(3),a=r(7),n=(r(0),r(194)),i={slug:"stryker-dashboard-host-your-mutation-testing-report",title:"Host your mutation testing report",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["dashboard"]},s={permalink:"/blog/stryker-dashboard-host-your-mutation-testing-report",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2019-12-27-stryker-dashboard-host-your-mutation-testing-report.md",source:"@site/blog/2019-12-27-stryker-dashboard-host-your-mutation-testing-report.md",description:"\ud83d\udcca The Stryker Dashboard can now host your mutation testing report in the cloud.",date:"2019-12-27T00:00:00.000Z",tags:[{label:"dashboard",permalink:"/blog/tags/dashboard"}],title:"Host your mutation testing report",readingTime:3,truncated:!0,prevItem:{title:"Announcing Stryker 3.0",permalink:"/blog/stryker-version-3"},nextItem:{title:"Announcing Stryker 2.0",permalink:"/blog/announcing-stryker-2-0"}},u=[{value:"Some examples",id:"some-examples",children:[]},{value:"Why do we need it?",id:"why-do-we-need-it",children:[]},{value:"Where can I get my own?",id:"where-can-i-get-my-own",children:[]},{value:"Eating our own dog food \ud83c\udf74\ud83d\udc36\ud83e\udd6b",id:"eating-our-own-dog-food-\ud83e\udd6b",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}],b={toc:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"\ud83d\udcca The Stryker Dashboard can now host your mutation testing report in the cloud."),Object(n.b)("p",null,"If you're new to mutation testing, it's a way to measure how effective your tests are at finding bugs.\nPlease take a look at ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/example"}),"our RoboBar \ud83e\udd16\ud83c\udf77 example")," and see how even 100% code coverage doesn't tell the whole story.\nMutation testing is the only way to make sure your code is tested."),Object(n.b)("p",null,"Mutation testing is done by a mutation testing framework. After a mutation test run, you'll get a report that gives you all the details.\nSince mutation testing is still growing in popularity, there wasn't a convenient way yet to view the report in the cloud.\nThe Stryker Dashboard solves that problem."),Object(n.b)("p",null,"The dashboard now has several new features:"),Object(n.b)("p",null,"\ud83d\udc84 Store and show gorgeous reports.",Object(n.b)("br",{parentName:"p"}),"\n","\ud83e\udd47 Brag about your mutation score with the mutation score badge.",Object(n.b)("br",{parentName:"p"}),"\n","\ud83d\udd00 Support for Git workflows with mutation reports per branch and tag.",Object(n.b)("br",{parentName:"p"}),"\n","\ud83d\udc09 Support for Monorepos. Multiple reports are aggregated to show a report of all your modules.",Object(n.b)("br",{parentName:"p"}),"\n","\ud83d\udcb8 Free for open source projects.",Object(n.b)("br",{parentName:"p"}),"\n","\ud83e\udd1d Supports all Stryker mutation testing frameworks. Other frameworks will add support over time or you can send your report through a cURL request. See ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker-handbook/blob/master/dashboard.md"}),"the Stryker handbook")," for more details."),Object(n.b)("h2",{id:"some-examples"},"Some examples"),Object(n.b)("p",null,"Click on the links below to see some examples of mutation testing reports hosted in the Stryker Dashboard."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://dashboard.stryker-mutator.io/reports/github.com/stryker-mutator/stryker/master"}),"Stryker ",Object(n.b)("img",Object(o.a)({parentName:"a"},{src:"https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fstryker-mutator%2Fstryker%2Fmaster",alt:"badge"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://dashboard.stryker-mutator.io/reports/github.com/stryker-mutator/stryker4s/master"}),"Stryker4s ",Object(n.b)("img",Object(o.a)({parentName:"a"},{src:"https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fstryker-mutator%2Fstryker4s%2Fmaster",alt:"badge"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://dashboard.stryker-mutator.io/reports/github.com/stryker-mutator/stryker-net/master"}),"Stryker.NET ",Object(n.b)("img",Object(o.a)({parentName:"a"},{src:"https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fstryker-mutator%2Fstryker-net%2Fmaster",alt:"badge"}))))),Object(n.b)("h2",{id:"why-do-we-need-it"},"Why do we need it?"),Object(n.b)("p",null,"Mutation testing can be time-consuming.\nUsing your PC to do it is fine for small projects, but for bigger projects, you really want to run it in your CI/CD pipeline."),Object(n.b)("p",null,"This is also something we've experienced developing Stryker, the mutation testing framework for JavaScript and TypeScript.\nAt first, we would run Stryker on Stryker every week.\nBut as our codebase grew, this became impractical."),Object(n.b)("p",null,"Luckily, running mutation testing in your CI/CD pipeline is a trivial task.\nMost mutation testing frameworks can be run from the command line.\nThis is also true for the Stryker family of frameworks."),Object(n.b)("p",null,"The problem becomes: what is a convenient way to read the mutation testing report \ud83d\udc40?\nManually downloading files and opening them in your browser isn't a way anyone should be forced to spend an afternoon."),Object(n.b)("h2",{id:"where-can-i-get-my-own"},"Where can I get my own?"),Object(n.b)("p",null,"Getting up and running with the dashboard is simple."),Object(n.b)("p",null,"\ud83c\udfaf Navigate to ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://dashboard.stryker-mutator.io"}),"dashboard.stryker-mutator.io")," and log in with your GitHub account.",Object(n.b)("br",{parentName:"p"}),"\n","\u2705 Enable the Stryker Dashboard for your repository.",Object(n.b)("br",{parentName:"p"}),"\n","\ud83d\udd11 Configure your API key. See ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker-handbook/blob/master/dashboard.md"}),"the dashboard article on the Stryker handbook for the details"),Object(n.b)("br",{parentName:"p"}),"\n","\ud83c\udfc3\u200d\u2640\ufe0f Run Stryker.NET, Stryker4s or Stryker (with the dashboard reporter enabled) and upload your first report."),Object(n.b)("h2",{id:"eating-our-own-dog-food-\ud83e\udd6b"},"Eating our own dog food \ud83c\udf74\ud83d\udc36\ud83e\udd6b"),Object(n.b)("p",null,"We are eating our own dog food since we're using the new dashboard features to make our own mutation testing reports visible.\nWe're naturally welcoming pull requests to help improve our tests.\nImproving tests is a good way to get to know a new codebase."),Object(n.b)("h2",{id:"whats-next"},"What's next?"),Object(n.b)("p",null,"We can't wait for people to start using the dashboard and give feedback.\nPlease enable it on your open-source project and tell us what you think!\nTogether, we'll be able to spread the word about mutation testing\nand test quality by making it more visible"),Object(n.b)("p",null,"We'd like to get more mutation testing frameworks on board. To this date, ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://twitter.com/maks_rafalko/status/1207256423404638208"}),"InfectionPHP")," for PHP,\n",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://twitter.com/1101_debian/status/1206613696564346881"}),"Mull")," for C++ and ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://twitter.com/_pitest/status/1207251028653068288"}),"Pitest")," for Java\nhave shown interest."),Object(n.b)("p",null,"We're looking to improve the dashboard further. You can expect more features and open-source git providers to be added.\nWe're always looking for feedback, please don't hesitate to create ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker-dashboard/issues/new"}),"an issue"),"."))}l.isMDXComponent=!0},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return m}));var o=r(0),a=r.n(o);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),c=l(r),d=o,m=c["".concat(i,".").concat(d)]||c[d]||p[d]||n;return r?a.a.createElement(m,s(s({ref:t},b),{},{components:r})):a.a.createElement(m,s({ref:t},b))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var b=2;b<n;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);