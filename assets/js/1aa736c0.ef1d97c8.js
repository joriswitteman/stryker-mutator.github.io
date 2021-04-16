(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{196:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(t),m=r,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return t?a.a.createElement(d,c(c({ref:n},u),{},{components:t})):a.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=(t(0),t(196));const i={title:"Karma Runner",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/karma-runner.md"},o={unversionedId:"stryker-js/karma-runner",id:"stryker-js/karma-runner",isDocsHomePage:!1,title:"Karma Runner",description:"Installation",source:"@site/docs/stryker-js/karma-runner.md",slug:"/stryker-js/karma-runner",permalink:"/docs/stryker-js/karma-runner",editUrl:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/karma-runner.md",version:"current",sidebar:"docs",previous:{title:"Jest Runner",permalink:"/docs/stryker-js/jest-runner"},next:{title:"Mocha Runner",permalink:"/docs/stryker-js/mocha-runner"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Install",id:"install",children:[]},{value:"Bring your own test runner",id:"bring-your-own-test-runner",children:[]},{value:"Configuring",id:"configuring",children:[{value:'<code>karma.projectType</code> "custom" | "angular-cli"',id:"karmaprojecttype-custom--angular-cli",children:[]},{value:"<code>karma.configFile</code> string",id:"karmaconfigfile-string",children:[]},{value:"<code>karma.config</code> object",id:"karmaconfig-object",children:[]},{value:"<code>karma.ngConfig.testArguments</code> object",id:"karmangconfigtestarguments-object",children:[]}]},{value:"Non overridable options",id:"non-overridable-options",children:[]},{value:"Configure angular cli",id:"configure-angular-cli",children:[]},{value:"Debugging",id:"debugging",children:[]}],l={toc:c};function u({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"A plugin to use the karma test runner (or ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@angular/cli"},"@angular/cli"),"'s ",Object(a.b)("inlineCode",{parentName:"p"},"ng test"),") in Stryker."),Object(a.b)("h2",{id:"install"},"Install"),Object(a.b)("p",null,"Install @stryker-mutator/karma-runner locally within your project folder, like so:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @stryker-mutator/karma-runner\n")),Object(a.b)("h2",{id:"bring-your-own-test-runner"},"Bring your own test runner"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@stryker-mutator/karma-runner")," is a plugin for ",Object(a.b)("inlineCode",{parentName:"p"},"stryker")," to enable ",Object(a.b)("inlineCode",{parentName:"p"},"karma")," as a test runner.\nHowever, it does ",Object(a.b)("em",{parentName:"p"},"not")," come packaged with it's own version of ",Object(a.b)("inlineCode",{parentName:"p"},"karma"),", instead it\nuses ",Object(a.b)("em",{parentName:"p"},"your very own karma")," version. It can also work with ",Object(a.b)("inlineCode",{parentName:"p"},"@angular/cli"),", see ",Object(a.b)("a",{parentName:"p",href:"#configuring"},"Configuring")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," karma v2.0.3 has a ",Object(a.b)("a",{parentName:"p",href:"https://github.com/karma-runner/karma/issues/3057"},"known issue")," which makes it impossible to use it with Stryker. please upgrade to 2.0.4 or higher."),Object(a.b)("h2",{id:"configuring"},"Configuring"),Object(a.b)("p",null,"You can configure the ",Object(a.b)("inlineCode",{parentName:"p"},"@stryker-mutator/karma-runner")," using the ",Object(a.b)("inlineCode",{parentName:"p"},"stryker.conf.js")," (or ",Object(a.b)("inlineCode",{parentName:"p"},"stryker.conf.json"),") config file."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "testRunner": "karma",\n  "karma": {\n    "projectType": "custom",\n    "configFile": "path/to/karma.conf.js",\n    "config": {\n      "browsers": ["ChromeHeadless"]\n    }\n  }\n}\n')),Object(a.b)("h3",{id:"karmaprojecttype-custom--angular-cli"},Object(a.b)("inlineCode",{parentName:"h3"},"karma.projectType")," ","[",Object(a.b)("inlineCode",{parentName:"h3"},'"custom"')," | ",Object(a.b)("inlineCode",{parentName:"h3"},'"angular-cli"'),"]"),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},'"custom"')),Object(a.b)("p",null,"Specify which kind of project you're using. This determines which command is used to start karma"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},'"custom"')),": configure @stryker-mutator/karma-runner to use ",Object(a.b)("inlineCode",{parentName:"li"},"karma start"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},'"angular-cli"')),": configure @stryker-mutator/karma-runner to use ",Object(a.b)("inlineCode",{parentName:"li"},"ng test")," (see ",Object(a.b)("a",{parentName:"li",href:"#configure-angular-cli"},"configuring for angular-cli"),").")),Object(a.b)("h3",{id:"karmaconfigfile-string"},Object(a.b)("inlineCode",{parentName:"h3"},"karma.configFile")," ","[",Object(a.b)("inlineCode",{parentName:"h3"},"string"),"]"),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"undefined")),Object(a.b)("p",null,"Specify a ",Object(a.b)("a",{parentName:"p",href:"http://karma-runner.github.io/2.0/config/configuration-file.html"},"'karma.conf.js' file")," to be loaded.\nOptions specified directly in your stryker.conf.js file using ",Object(a.b)("inlineCode",{parentName:"p"},"karma.config")," will overrule options in your karma.conf.js file."),Object(a.b)("h3",{id:"karmaconfig-object"},Object(a.b)("inlineCode",{parentName:"h3"},"karma.config")," ","[",Object(a.b)("inlineCode",{parentName:"h3"},"object"),"]"),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"undefined")),Object(a.b)("p",null,"Specify ",Object(a.b)("a",{parentName:"p",href:"http://karma-runner.github.io/2.0/config/configuration-file.html"},"karma configuration options")," directly.\nOptions specified here will overrule any options in your karma.conf.js file."),Object(a.b)("h3",{id:"karmangconfigtestarguments-object"},Object(a.b)("inlineCode",{parentName:"h3"},"karma.ngConfig.testArguments")," ","[",Object(a.b)("inlineCode",{parentName:"h3"},"object"),"]"),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"undefined")),Object(a.b)("p",null,"Add ",Object(a.b)("a",{parentName:"p",href:"https://github.com/angular/angular-cli/wiki/test#options"},"ng test arguments"),". For example, specify an alternative project with:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "karma": {\n    "projectType": "angular-cli",\n      "ngConfig": {\n        "testArguments": {\n          "project": "my-lib"\n        }\n    }\n  }\n}\n')),Object(a.b)("p",null,"This will run ng test with ",Object(a.b)("inlineCode",{parentName:"p"},"--project")," argument: ",Object(a.b)("inlineCode",{parentName:"p"},"ng test --project=my-lib"),"."),Object(a.b)("h2",{id:"non-overridable-options"},"Non overridable options"),Object(a.b)("p",null,"The browser's life cycle is determined by ",Object(a.b)("inlineCode",{parentName:"p"},"@stryker-mutator/karma-runner"),". I.e. these settings cannot be overridden. You configuration settings for these will be ignored."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"{\n  browserNoActivityTimeout: 1000000,\n  autoWatch: false,\n  singleRun: false,\n  detached: false\n}\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"coverage")," plugin will also be removed (not needed for mutation testing)."),Object(a.b)("h2",{id:"configure-angular-cli"},"Configure angular cli"),Object(a.b)("p",null,"Please follow the ",Object(a.b)("a",{parentName:"p",href:"/docs/stryker-js/guides/angular"},"angular guide"),"."),Object(a.b)("h2",{id:"debugging"},"Debugging"),Object(a.b)("p",null,"As Stryker runs karma in its own process, its logging output will be consumed by Stryker."),Object(a.b)("p",null,"To see all logging from karma, set the log level to ",Object(a.b)("inlineCode",{parentName:"p"},"trace")," in ",Object(a.b)("inlineCode",{parentName:"p"},"stryker.conf.json"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "logLevel": "trace"\n}\n')))}u.isMDXComponent=!0}}]);