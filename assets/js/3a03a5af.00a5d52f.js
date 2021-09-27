"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[8133],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(r),d=a,m=g["".concat(l,".").concat(d)]||g[d]||p[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},32596:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var n=r(87462),a=(r(67294),r(3905));const o={title:"Angular",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/angular.md"},i=void 0,s={unversionedId:"stryker-js/guides/angular",id:"stryker-js/guides/angular",isDocsHomePage:!1,title:"Angular",description:"Stryker 4.0 and higher supports Angular projects using the Angular CLI starting from @angular/cli v9.0.0. Are you using an older version? Then there are some tips later in this document.",source:"@site/docs/stryker-js/guides/angular.md",sourceDirName:"stryker-js/guides",slug:"/stryker-js/guides/angular",permalink:"/docs/stryker-js/guides/angular",editUrl:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/angular.md",tags:[],version:"current",frontMatter:{title:"Angular",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/angular.md"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/docs/stryker-js/troubleshooting"},next:{title:"React",permalink:"/docs/stryker-js/guides/react"}},l=[{value:"@angular/cli 9.0.0 and higher",id:"angularcli-900-and-higher",children:[]},{value:"Install",id:"install",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Run",id:"run",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],u={toc:l};function c({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Stryker 4.0 and higher supports Angular projects using the Angular CLI starting from @angular/cli v9.0.0. Are you using an older version? Then there are some tips later in this document."),(0,a.kt)("h2",{id:"angularcli-900-and-higher"},"@angular/cli 9.0.0 and higher"),(0,a.kt)("p",null,"This setup only works with @angular/cli 9.0.0 or higher. Are you using an older version of Angular? Then we highly suggest upgrading to at least version 9.0.0 of the cli. You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://update.angular.io/"},"Angular Update Guide")," to help you with this. If it's not possible for you to upgrade your Angular version, please check out ",(0,a.kt)("a",{parentName:"p",href:"/docs/stryker-js/guides/legacy/stryker-3/angular"},"the legacy guide for Stryker 3 and Angular CLI 6.1-8.2"),"."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"Either install the Stryker CLI globally using ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install --global stryker-cli"),", or use ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," in front of every Stryker command.\nInstall the Stryker packages using the command ",(0,a.kt)("inlineCode",{parentName:"p"},"stryker init"),"."),(0,a.kt)("p",null,"Recommended other packages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@angular/cli 9.0.0 or higher"),(0,a.kt)("li",{parentName:"ul"},"@angular-devkit/build-angular 0.900.0 or higher"),(0,a.kt)("li",{parentName:"ul"},"karma 4.3.0 or higher"),(0,a.kt)("li",{parentName:"ul"},"typescript 3.7.2 or higher")),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"stryker init")," command also creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"stryker.conf.json")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"stryker.conf.js")," configuration in your repository\nlike the one below which is a good starting point for Angular projects.\nYou may have to change some paths or config settings like the selected browsers.\nWe highly suggest using a headless browser when testing using Stryker."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",\n  "_comment": "This config was generated using a preset. Please see website for more information: https://stryker-mutator.io/docs/guides/angular",\n  "mutate": ["src/**/*.ts", "!src/**/*.spec.ts", "!src/test.ts", "!src/environments/*.ts"],\n  "testRunner": "karma",\n  "karma": {\n    "configFile": "karma.conf.js",\n    "projectType": "angular-cli",\n    "config": {\n      "browsers": ["ChromeHeadless"]\n    }\n  },\n  "reporters": ["progress", "clear-text", "html"],\n  "concurrency": 2,\n  "concurrency_comment": "Recommended to use about half of your available cores when running stryker with angular",\n  "coverageAnalysis": "perTest"\n}\n')),(0,a.kt)("p",null,"Consider adding the Stryker TypeScript checker to increase mutation testing performance and kill mutants that would result in compilation errors:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/typescript-checker")," as a development dependency:\n",(0,a.kt)("inlineCode",{parentName:"li"},"npm install --save-dev @stryker-mutator/typescript-checker")),(0,a.kt)("li",{parentName:"ol"},"Configure the TypeScript checker in ",(0,a.kt)("inlineCode",{parentName:"li"},"stryker.conf.json"),":",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "checkers": ["typescript"],\n  "tsconfigFile": "tsconfig.json"\n}\n')),"If you experience issues, try setting the ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfigFile")," option to ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.app.json"),".")),(0,a.kt)("h3",{id:"run"},"Run"),(0,a.kt)("p",null,"Run Stryker using ",(0,a.kt)("inlineCode",{parentName:"p"},"stryker run"),"."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"Please take a look at the ",(0,a.kt)("a",{parentName:"p",href:"/docs/stryker-js/troubleshooting"},"troubleshooting page")," when you run into any problems setting up StrykerJS."))}c.isMDXComponent=!0}}]);