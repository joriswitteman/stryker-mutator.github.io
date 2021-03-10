(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{105:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return o})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(3),a=(t(0),t(196));const i={title:"Angular",custom_edit_url:"https://github.com/stryker-mutator/stryker/edit/master/docs/guides/angular.md"},o={unversionedId:"stryker/guides/angular",id:"stryker/guides/angular",isDocsHomePage:!1,title:"Angular",description:"Stryker 4.0 and higher supports Angular projects using the Angular CLI starting from @angular/cli v9.0.0. Are you using an older version? Then there are some tips later in this document.",source:"@site/docs/stryker/guides/angular.md",slug:"/stryker/guides/angular",permalink:"/docs/stryker/guides/angular",editUrl:"https://github.com/stryker-mutator/stryker/edit/master/docs/guides/angular.md",version:"current",sidebar:"docs",previous:{title:"TypeScript Checker",permalink:"/docs/stryker/typescript-checker"},next:{title:"React",permalink:"/docs/stryker/guides/react"}},s=[{value:"@angular/cli 9.0.0 and higher",id:"angularcli-900-and-higher",children:[]},{value:"Install",id:"install",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Run",id:"run",children:[]}]}],c={toc:s};function l({components:e,...r}){return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Stryker 4.0 and higher supports Angular projects using the Angular CLI starting from @angular/cli v9.0.0. Are you using an older version? Then there are some tips later in this document."),Object(a.b)("h2",{id:"angularcli-900-and-higher"},"@angular/cli 9.0.0 and higher"),Object(a.b)("p",null,"This setup only works with @angular/cli 9.0.0 or higher. Are you using an older version of Angular? Then we highly suggest upgrading to at least version 9.0.0 of the cli. You can use the ",Object(a.b)("a",{parentName:"p",href:"https://update.angular.io/"},"Angular Update Guide")," to help you with this. If it's not possible for you to upgrade your Angular version, please check out ",Object(a.b)("a",{parentName:"p",href:"/docs/stryker/guides/legacy/stryker-3/angular"},"the legacy guide for Stryker 3 and Angular CLI 6.1-8.2"),"."),Object(a.b)("h2",{id:"install"},"Install"),Object(a.b)("p",null,"Either install the Stryker CLI globally using ",Object(a.b)("inlineCode",{parentName:"p"},"npm install --global stryker-cli"),", or use ",Object(a.b)("inlineCode",{parentName:"p"},"npx")," in front of every Stryker command.\nInstall the Stryker packages using the command ",Object(a.b)("inlineCode",{parentName:"p"},"stryker init"),"."),Object(a.b)("p",null,"Recommended other packages:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"@angular/cli 9.0.0 or higher"),Object(a.b)("li",{parentName:"ul"},"@angular-devkit/build-angular 0.900.0 or higher"),Object(a.b)("li",{parentName:"ul"},"karma 4.3.0 or higher"),Object(a.b)("li",{parentName:"ul"},"typescript 3.7.2 or higher")),Object(a.b)("h3",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"stryker init")," command also creates a ",Object(a.b)("inlineCode",{parentName:"p"},"stryker.conf.json")," or ",Object(a.b)("inlineCode",{parentName:"p"},"stryker.conf.js")," configuration in your repository\nlike the one below which is a good starting point for Angular projects.\nYou may have to change some paths or config settings like the selected browsers.\nWe highly suggest using a headless browser when testing using Stryker."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",\n  "_comment": "This config was generated using a preset. Please see website for more information: https://stryker-mutator.io/docs/guides/angular",\n  "mutate": ["src/**/*.ts", "!src/**/*.spec.ts", "!src/test.ts", "!src/environments/*.ts"],\n  "testRunner": "karma",\n  "karma": {\n    "configFile": "karma.conf.js",\n    "projectType": "angular-cli",\n    "config": {\n      "browsers": ["ChromeHeadless"]\n    }\n  },\n  "reporters": ["progress", "clear-text", "html"],\n  "concurrency": 2,\n  "concurrency_comment": "Recommended to use about half of your available cores when running stryker with angular",\n  "coverageAnalysis": "perTest"\n}\n')),Object(a.b)("p",null,"Consider adding the Stryker TypeScript checker to increase mutation testing performance and kill mutants that would result in compilation errors:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Install ",Object(a.b)("inlineCode",{parentName:"li"},"@stryker-mutator/typescript-checker")," as a development dependency:\n",Object(a.b)("inlineCode",{parentName:"li"},"npm install --save-dev @stryker-mutator/typescript-checker")),Object(a.b)("li",{parentName:"ol"},"Configure the TypeScript checker in ",Object(a.b)("inlineCode",{parentName:"li"},"stryker.conf.json"),":",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "checkers": ["typescript"],\n  "tsconfigFile": "tsconfig.json"\n}\n')),"If you experience issues, try setting the ",Object(a.b)("inlineCode",{parentName:"li"},"tsconfigFile")," option to ",Object(a.b)("inlineCode",{parentName:"li"},"tsconfig.app.json"),".")),Object(a.b)("h3",{id:"run"},"Run"),Object(a.b)("p",null,"Run Stryker using ",Object(a.b)("inlineCode",{parentName:"p"},"stryker run"),"."))}l.isMDXComponent=!0},196:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=n,b=p["".concat(o,".").concat(d)]||p[d]||g[d]||i;return t?a.a.createElement(b,s(s({ref:r},l),{},{components:t})):a.a.createElement(b,s({ref:r},l))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);