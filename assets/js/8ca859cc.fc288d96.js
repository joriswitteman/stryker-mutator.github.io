(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[8007],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(r),k=a,h=m["".concat(i,".").concat(k)]||m[k]||c[k]||s;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79853:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return i},default:function(){return p}});var n=r(22122),a=(r(67294),r(3905));const s={title:"Plugins",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/plugins.md"},o=void 0,u={unversionedId:"stryker-js/plugins",id:"stryker-js/plugins",isDocsHomePage:!1,title:"Plugins",description:"Stryker supports several plugins, which are listed below. You can also search npm for the stryker-plugin tag.",source:"@site/docs/stryker-js/plugins.md",sourceDirName:"stryker-js",slug:"/stryker-js/plugins",permalink:"/docs/stryker-js/plugins",editUrl:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/plugins.md",version:"current",frontMatter:{title:"Plugins",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/plugins.md"},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/stryker-js/configuration"},next:{title:"Jasmine Runner",permalink:"/docs/stryker-js/jasmine-runner"}},i=[{value:"Test runners",id:"test-runners",children:[]},{value:"Reporters",id:"reporters",children:[]},{value:"Checkers",id:"checkers",children:[]},{value:"&lt;Your plugin here&gt;",id:"your-plugin-here",children:[]}],l={toc:i};function p({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Stryker supports several plugins, which are listed below. You can also ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=stryker-plugin"},"search npm for the stryker-plugin tag"),"."),(0,a.kt)("p",null,"Test runner and checker plugins are packaged separately; you should install them yourself. For example, if you want to use the mocha test runner you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install -D @stryker-mutator/mocha-runner"),"."),(0,a.kt)("p",null,"Don't worry about plugins if you're just getting started. The needed plugins will be installed when you're following our ",(0,a.kt)("a",{parentName:"p",href:"/docs/stryker-js/getting-started"},"getting started guide"),"."),(0,a.kt)("h2",{id:"test-runners"},"Test runners"),(0,a.kt)("p",null,"A test runner plugin can hook into your test runner support coverage analysis or improve performance. If your test runner isn't listed here, you can probably still use the\n",(0,a.kt)("a",{parentName:"p",href:"./configuration#testrunner-string"},"command test runner"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/stryker-js/jasmine-runner"},"Jasmine")," (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/tree/master/packages/jasmine-runner"},"@stryker-mutator/jasmine-runner"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/stryker-js/jest-runner"},"Jest")," (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/tree/master/packages/jest-runner"},"@stryker-mutator/jest-runner"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/stryker-js/karma-runner"},"Karma")," (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/tree/master/packages/karma-runner"},"@stryker-mutator/karma-runner"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/stryker-js/mocha-runner"},"Mocha")," (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/tree/master/packages/mocha-runner"},"@stryker-mutator/mocha-runner"),")")),(0,a.kt)("p",null,"Removed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},"Web Component Tester")," (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/tree/v3.3.1/packages/wct-runner"},"@stryker-mutator/wct-runner"),") (Removed in v4 of Stryker).")),(0,a.kt)("p",null,"After choosing your test runner plugin, install "),(0,a.kt)("h2",{id:"reporters"},"Reporters"),(0,a.kt)("p",null,"A reporter plugin can act on events that happen during the mutation testing process. They should be used to, well, report results, or progress."),(0,a.kt)("p",null,"Stryker already comes with the most useful reporters included:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"progress: Report progress during mutation testing."),(0,a.kt)("li",{parentName:"ul"},"dots: Report progress as dots during mutation testing."),(0,a.kt)("li",{parentName:"ul"},"clear-text: A clear text report at the end of the mutation testing phase."),(0,a.kt)("li",{parentName:"ul"},"html: An HTML report. See ",(0,a.kt)("a",{parentName:"li",href:"https://dashboard.stryker-mutator.io/reports/github.com/stryker-mutator/stryker-js/master"},"Stryker's own report")," for an example."),(0,a.kt)("li",{parentName:"ul"},"dashboard: Upload your mutation testing report to the ",(0,a.kt)("a",{parentName:"li",href:"https://dashboard.stryker-mutator.io"},"Stryker dashboard"),". See the ",(0,a.kt)("a",{parentName:"li",href:"/docs/General/dashboard"},"dashboard docs")," for more information."),(0,a.kt)("li",{parentName:"ul"},"event-recorder: Write all events to disk. Useful for debug purposes.")),(0,a.kt)("h2",{id:"checkers"},"Checkers"),(0,a.kt)("p",null,"A checker plugin can ",(0,a.kt)("em",{parentName:"p"},"check")," a mutant before it is mutation tested. The check can ",(0,a.kt)("em",{parentName:"p"},"fail")," or ",(0,a.kt)("em",{parentName:"p"},"pass"),"; when a check fails, the mutant is not mutation tested."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"./typescript-checker"},"TypeScript")," (@stryker-mutator/typescript-checker)"),": This checker will check each mutant for typescript compile errors.")),(0,a.kt)("h2",{id:"your-plugin-here"},"<","Your plugin here",">"),(0,a.kt)("p",null,"You can write your plugins for Stryker. Interested? Have a look at our ",(0,a.kt)("a",{parentName:"p",href:"./guides/create-a-plugin"},"create a plugin guide"),"."))}p.isMDXComponent=!0}}]);