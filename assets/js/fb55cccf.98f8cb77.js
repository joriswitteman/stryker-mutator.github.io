"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[6730],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4186:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(7462),o=(n(7294),n(3905));const i={title:"NodeJS",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/nodejs.md"},a=void 0,s={unversionedId:"stryker-js/guides/nodejs",id:"stryker-js/guides/nodejs",title:"NodeJS",description:"Stryker can run Mutation Testing on all NodeJS projects. Either by using one of the test runner plugins or with the command test runner. It also supports a custom buildCommand. This command is useful to compile TypeScript or babel code or to bundle your code.",source:"@site/docs/stryker-js/guides/nodejs.md",sourceDirName:"stryker-js/guides",slug:"/stryker-js/guides/nodejs",permalink:"/docs/stryker-js/guides/nodejs",editUrl:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/nodejs.md",tags:[],version:"current",frontMatter:{title:"NodeJS",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/nodejs.md"},sidebar:"docs",previous:{title:"VueJS",permalink:"/docs/stryker-js/guides/vuejs"},next:{title:"Create a plugin",permalink:"/docs/stryker-js/guides/create-a-plugin"}},l=[{value:"About transpiling",id:"about-transpiling",children:[],level:2},{value:"Configuration",id:"configuration",children:[{value:"Build command",id:"build-command",children:[],level:3},{value:"Test runner",id:"test-runner",children:[{value:"Mocha",id:"mocha",children:[],level:4},{value:"Jest",id:"jest",children:[],level:4},{value:"Jasmine",id:"jasmine",children:[],level:4}],level:3}],level:2},{value:"Run",id:"run",children:[],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[],level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Stryker can run Mutation Testing on all NodeJS projects. Either by using one of the test runner plugins or with the command test runner. It also supports a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"buildCommand"),". This command is useful to compile TypeScript or babel code or to bundle your code."),(0,o.kt)("h2",{id:"about-transpiling"},"About transpiling"),(0,o.kt)("p",null,"There are multiple scenarios of transpiling code when running your tests. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ahead-of-time"),(0,o.kt)("br",{parentName:"li"}),"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"tsc")," or ",(0,o.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-cli"},(0,o.kt)("inlineCode",{parentName:"a"},"@babel/cli"))," to compile your code before testing or use ",(0,o.kt)("a",{parentName:"li",href:"https://webpack.js.org/api/cli/"},"webpack")," or another bundler to create a bundle before running tests. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Just-in-time"),(0,o.kt)("br",{parentName:"li"}),"Use ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ts-node"},(0,o.kt)("inlineCode",{parentName:"a"},"ts-node"))," or ",(0,o.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-register/"},(0,o.kt)("inlineCode",{parentName:"a"},"@babel/register"))," as a just-in-time compiler to compile your code on the fly.")),(0,o.kt)("p",null,"Both scenarios are supported, however using just-in-time transpiling during mutation testing is not recommended because it means running the compiler a large number of times. Since ",(0,o.kt)("a",{parentName:"p",href:"https://stryker-mutator.io/blog/announcing-stryker-4-mutation-switching"},"Stryker uses mutation switching"),", compiling only once is preferred. Don't worry; this guide will help you configuring Stryker correctly."),(0,o.kt)("p",null,"If you manage your code's compilation through a ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file, this guide ensures that your TypeScript code uses that configuration."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This guide does not cover using ",(0,o.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/typescript-checker"),". Please review the page ",(0,o.kt)("a",{parentName:"p",href:"/docs/stryker-js/typescript-checker"},"here")," if you want to include the typescript checker.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Please follow this configuration guide. Place the configuration examples inside your ",(0,o.kt)("inlineCode",{parentName:"p"},"stryker.conf.json")," file."),(0,o.kt)("h3",{id:"build-command"},"Build command"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "buildCommand": "tsc -b path/to/tsconfig.json"\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You generally don't have to configure a ",(0,o.kt)("inlineCode",{parentName:"p"},"buildCommand")," if you're using the Jest test runner.")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"buildCommand")," to configure a command that Stryker can run in its sandbox, just after your code is mutated. If you're using a bundler, you will need to change this command by a command that creates a bundle, like ",(0,o.kt)("inlineCode",{parentName:"p"},'"webpack --config webpack.test.config.js"'),". You can also use a script you've defined in package.json, for example ",(0,o.kt)("inlineCode",{parentName:"p"},'"npm run build"'),". "),(0,o.kt)("p",null,"Don't worry about your ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PATH_(variable)"},"PATH environment variable"),"; Stryker will make sure your local dependencies are available there before executing the build command inside the sandbox. "),(0,o.kt)("p",null,"If you're using ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/register")," to just-in-time compile during unit testing, then it's a good idea to configure your build command-equivalent here. Some examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For ts-node: ",(0,o.kt)("inlineCode",{parentName:"li"},"tsc -b path/to/tsconfig.json")),(0,o.kt)("li",{parentName:"ul"},"For @babel/register: ",(0,o.kt)("inlineCode",{parentName:"li"},"babel src --out-dir lib"),"\n(using the ",(0,o.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-cli"},"@babel/cli"),")")),(0,o.kt)("p",null,"Be sure to test them out yourself first."),(0,o.kt)("h3",{id:"test-runner"},"Test runner"),(0,o.kt)("p",null,"Next, configure the test runner you're using. If you're using a different test runner than described here, you can still use the default ",(0,o.kt)("a",{parentName:"p",href:"/docs/stryker-js/configuration#testrunner-string"},"command test runner")),(0,o.kt)("h4",{id:"mocha"},"Mocha"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "coverageAnalysis": "perTest",\n  "mochaOptions": {\n    "config": "path/to/your/.mocharc.js/file",\n    "spec": [ "dist/test/**/*.spec.js"]\n  },\n  "testRunner": "mocha"\n}\n')),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"mochaOptions")," to configure the mocha test runner. If your project uses a ",(0,o.kt)("a",{parentName:"p",href:"https://mochajs.org/#-config-path"},"mocha config file"),", you can specify it in ",(0,o.kt)("inlineCode",{parentName:"p"},"mochaOptions.config"),"; use other settings to override settings in the config file. "),(0,o.kt)("p",null,"If you're using a ",(0,o.kt)("inlineCode",{parentName:"p"},"buildCommand"),", be sure to configure the ",(0,o.kt)("em",{parentName:"p"},"js output files in the ",(0,o.kt)("inlineCode",{parentName:"em"},"mochaOptions.spec")," instead of the ts input files"),", otherwise mocha won't be able to find your test files."),(0,o.kt)("p",null,"If you choose to keep using your just-in-time compiler and accept the performance penalty, you can use ",(0,o.kt)("a",{parentName:"p",href:"/docs/stryker-js/mocha-runner#mochaoptionsrequire-string"},"mochaOptions.require")," to configure your ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/register")," transpiler. Also, you may want to override the ts-node configuration options via environment variables. You can do so using environment variables, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test:mutation": "cross-env TS_NODE_PROJECT=path/to/your/tsconfig.json stryker run"\n  }\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cross-env"},(0,o.kt)("inlineCode",{parentName:"a"},"cross-env"))," is a tool to help you set environment variables across platforms.")),(0,o.kt)("h4",{id:"jest"},"Jest"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "coverageAnalysis": "perTest",\n  "jest": {\n    "projectType": "custom",\n    "configFile": "path/to/your/custom/jestConfig.js"\n   },\n  "tempDirName": "stryker-tmp",\n  "testRunner": "jest"\n}\n')),(0,o.kt)("p",null,"Jest has two ways to provide TypeScript compilation, either ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/getting-started#using-typescript"},"using babel")," (default) or using ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ts-jest"},"ts-jest"),". For both, you ",(0,o.kt)("em",{parentName:"p"},"don't need to configure the ",(0,o.kt)("inlineCode",{parentName:"em"},"buildCommand")),". "),(0,o.kt)("h4",{id:"jasmine"},"Jasmine"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "coverageAnalysis": "perTest",\n  "jasmineConfigFile": "spec/support/jasmine.json",\n  "testRunner": "jasmine"\n}\n')),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"Run Stryker as per usual, either using a custom script in package.json or using ",(0,o.kt)("inlineCode",{parentName:"p"},"npx"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'npx stryker run\n# OR, if your script is called "test:mutation"\nnpm run test:mutation \n')),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"Please take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/docs/stryker-js/troubleshooting"},"troubleshooting page")," when you run into any problems setting up StrykerJS."))}p.isMDXComponent=!0}}]);