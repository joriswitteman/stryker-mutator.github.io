(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{131:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),o=(t(0),t(194)),i={title:"Angular",custom_edit_url:"https://github.com/stryker-mutator/stryker/edit/master/docs/guides/legacy/stryker-3/angular.md"},s={unversionedId:"stryker/guides/legacy/stryker-3/angular",id:"stryker/guides/legacy/stryker-3/angular",isDocsHomePage:!1,title:"Angular",description:"Stryker supports Angular projects using the Angular CLI between @angular/cli 6.1.0 and 8.3.29. Are you using an older version? Then there are some tips later in this document.",source:"@site/docs/stryker/guides/legacy/stryker-3/angular.md",slug:"/stryker/guides/legacy/stryker-3/angular",permalink:"/docs/stryker/guides/legacy/stryker-3/angular",editUrl:"https://github.com/stryker-mutator/stryker/edit/master/docs/guides/legacy/stryker-3/angular.md",version:"current"},u=[{value:"@angular/cli 6.1.0-8.3.29",id:"angularcli-610-8329",children:[]},{value:"Install",id:"install",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Run",id:"run",children:[]}]}],c={toc:u};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Stryker supports Angular projects using the Angular CLI between @angular/cli 6.1.0 and 8.3.29. Are you using an older version? Then there are some tips later in this document."),Object(o.b)("h2",{id:"angularcli-610-8329"},"@angular/cli 6.1.0-8.3.29"),Object(o.b)("p",null,"This setup only works with @angular/cli 6.1.0-8.3.29. Are you using an older version of Angular? Then we highly suggest upgrading to at least version 6.1.0 of the cli. You can use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://update.angular.io/"}),"Angular Update Guide")," to help you with this. If it's not possible for you to upgrade your Angular version, please check out ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/nicojs/angular-stryker-example"}),"this repo and its commits"),"."),Object(o.b)("h2",{id:"install"},"Install"),Object(o.b)("p",null,"Install the Stryker packages using this command: ",Object(o.b)("inlineCode",{parentName:"p"},"npm i -D @stryker-mutator/core@3 @stryker-mutator/karma-runner@3 @stryker-mutator/typescript@3 @stryker-mutator/html-reporter@3")),Object(o.b)("p",null,"Recommended other packages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"@angular/cli 6.1.0-8.3.29"),Object(o.b)("li",{parentName:"ul"},"@angular-devkit/build-angular 0.7.2-0.803.29"),Object(o.b)("li",{parentName:"ul"},"karma 2.0.4 or higher"),Object(o.b)("li",{parentName:"ul"},"typescript 2.4.2 or higher")),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"After installing the recommended packages, create the ",Object(o.b)("inlineCode",{parentName:"p"},"stryker.conf.js")," file in your repository.\nThe configuration below contains a good starting point for Angular projects.\nYou may have to change some paths or config settings like the selected browsers.\nWe highly suggest using a headless browser when testing using stryker."),Object(o.b)("p",null,"Coverage analysis with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://npmjs.com/package/@stryker-mutator/jasmine-framework"}),"@stryker-mutator/jasmine-framework")," is unfortunately not supported as of right now."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"module.exports = function (config) {\n  config.set({\n    mutate: ['src/**/*.ts', '!src/**/*.spec.ts', '!src/test.ts', '!src/environments/*.ts'],\n    mutator: 'typescript',\n    testRunner: 'karma',\n    karma: {\n      configFile: 'src/karma.conf.js',\n      projectType: 'angular-cli',\n      config: {\n        browsers: ['ChromeHeadless'],\n      },\n    },\n    reporters: ['progress', 'clear-text', 'html'],\n    // maxConcurrentTestRunners: 2, // Recommended to not use all cores when running stryker with angular.\n    coverageAnalysis: 'off',\n  });\n};\n")),Object(o.b)("p",null,"It is recommended to configure the ",Object(o.b)("inlineCode",{parentName:"p"},"maxConcurrentTestRunners")," option and configure about half of your available cores there."),Object(o.b)("h3",{id:"run"},"Run"),Object(o.b)("p",null,"Run Stryker using ",Object(o.b)("inlineCode",{parentName:"p"},"npx stryker run")))}l.isMDXComponent=!0},194:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),l=function(e){var r=a.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return a.a.createElement(c.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(t),m=n,b=p["".concat(i,".").concat(m)]||p[m]||g[m]||o;return t?a.a.createElement(b,s(s({ref:r},c),{},{components:t})):a.a.createElement(b,s({ref:r},c))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);