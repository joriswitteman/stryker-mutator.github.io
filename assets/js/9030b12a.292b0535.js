"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[6485],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7141:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(7462),i=(n(7294),n(3905));const o={title:"VueJS",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/vuejs.md"},a=void 0,s={unversionedId:"stryker-js/guides/vuejs",id:"stryker-js/guides/vuejs",title:"VueJS",description:"Stryker supports Vue projects. It can mutate both your js/ts files as the script tags in your *.vue files.",source:"@site/docs/stryker-js/guides/vuejs.md",sourceDirName:"stryker-js/guides",slug:"/stryker-js/guides/vuejs",permalink:"/docs/stryker-js/guides/vuejs",editUrl:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/vuejs.md",tags:[],version:"current",frontMatter:{title:"VueJS",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/vuejs.md"},sidebar:"docs",previous:{title:"React",permalink:"/docs/stryker-js/guides/react"},next:{title:"NodeJS",permalink:"/docs/stryker-js/guides/nodejs"}},l=[{value:"Jest configuration",id:"jest-configuration",children:[],level:2},{value:"Mocha configuration",id:"mocha-configuration",children:[{value:"Rebuild unit tests with webpack and mocha",id:"rebuild-unit-tests-with-webpack-and-mocha",children:[],level:3}],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[],level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Stryker supports Vue projects. It can mutate both your js/ts files as the script tags in your ",(0,i.kt)("inlineCode",{parentName:"p"},"*.vue")," files."),(0,i.kt)("p",null,"This article will explain how to configure Stryker with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vuejs/vue-cli"},"vue-cli"),". If you're not using the vue-cli, you'll have to configure Stryker manually."),(0,i.kt)("p",null,"To get started using Stryker with the vue-cli, first install the core package: ",(0,i.kt)("inlineCode",{parentName:"p"},"npm i -D @stryker-mutator/core")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn add --dev @stryker-mutator/core"),". Next follow the guide for Jest or Mocha based on if you're using the ",(0,i.kt)("a",{parentName:"p",href:"https://cli.vuejs.org/core-plugins/unit-jest.html"},"unit-jest")," plugin or the ",(0,i.kt)("a",{parentName:"p",href:"https://cli.vuejs.org/core-plugins/unit-mocha.html"},"unit-mocha")," plugin."),(0,i.kt)("p",null,"Keep in mind that you may have to change some configuration settings such as paths to files."),(0,i.kt)("h2",{id:"jest-configuration"},"Jest configuration"),(0,i.kt)("p",null,"Follow this guide if you're using the if you're using the ",(0,i.kt)("a",{parentName:"p",href:"https://cli.vuejs.org/core-plugins/unit-jest.html"},"unit-jest")," plugin."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the ",(0,i.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/jest-runner")," plugin: ",(0,i.kt)("inlineCode",{parentName:"li"},"npm i -D @stryker-mutator/jest-runner")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn add --dev @stryker-mutator/jest-runner"),"."),(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"crossenv")," plugin(if you haven't already): ",(0,i.kt)("inlineCode",{parentName:"li"},"npm i -D cross-env")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn add -D cross-env"),"."),(0,i.kt)("li",{parentName:"ol"},'Create a "stryker.conf.json" file that looks like this:',(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n  "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",\n  "mutator": {\n    "plugins": []\n  },\n  "tempDirName_comment": "Jest doesn\'t play nice with the default (.stryker-tmp).",\n  "tempDirName": "stryker-tmp",\n  "testRunner": "jest",\n  "coverageAnalysis": "off"\n}\n'))),(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"stryker-tmp")," to your ",(0,i.kt)("inlineCode",{parentName:"li"},".gitignore")," file."),(0,i.kt)("li",{parentName:"ol"},"Add this script to your package.json:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test:mutation": "cross-env BABEL_ENV=test VUE_CLI_TRANSPILE_BABEL_RUNTIME=true VUE_CLI_BABEL_TARGET_NODE=true VUE_CLI_BABEL_TRANSPILE_MODULES=true stryker run"\n  }\n}\n')))),(0,i.kt)("p",null,"Now give it a go with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run test:mutation")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn test:mutation"),"."),(0,i.kt)("p",null,"Note that it is important to configure ",(0,i.kt)("inlineCode",{parentName:"p"},"BABEL_ENV"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"VUE_CLI_TRANSPILE_BABEL_RUNTIME")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"VUE_CLI_BABEL_TARGET_NODE")," environment variables. This is done with the ",(0,i.kt)("inlineCode",{parentName:"p"},"test:mutation")," script."),(0,i.kt)("h2",{id:"mocha-configuration"},"Mocha configuration"),(0,i.kt)("p",null,"Follow this guide if you're using the if you're using the ",(0,i.kt)("a",{parentName:"p",href:"https://cli.vuejs.org/core-plugins/unit-mocha.html"},"unit-mocha")," plugin."),(0,i.kt)("p",null,"To enable Stryker with your vue-cli project, we will have to rebuild parts of the ",(0,i.kt)("inlineCode",{parentName:"p"},"unit-mocha")," plugin in Stryker configuration here. First we'll make unit tests run by running webpack and mocha separately. Next we'll configure Stryker to use it. After following this guide you can also opt to remove the \"unit-mocha\" vue-cli plugin entirely and use this setup for normal unit testing as well."),(0,i.kt)("h3",{id:"rebuild-unit-tests-with-webpack-and-mocha"},"Rebuild unit tests with webpack and mocha"),(0,i.kt)("p",null,'Follow these steps to be able "manually" run webpack and mocha.'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-cli")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"glob"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"npm i -D webpack-cli glob")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn add --dev webpack-cli glob"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack.stryker.config.js")," file with the following content:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// webpack.stryker.config.js\nconst glob = require('glob');\n\n// Set env\nprocess.env.BABEL_ENV = 'test';\nprocess.env.NODE_ENV = 'test';\nprocess.env.VUE_CLI_BABEL_TARGET_NODE = 'true';\nprocess.env.VUE_CLI_TRANSPILE_BABEL_RUNTIME = 'true';\nprocess.env.BUILD_ENV = 'testing';\n\n// Load webpack config\nconst conf = require('@vue/cli-service/webpack.config.js');\n\n// Override the entry files\nconf.entry = {\n  // Choose your test files here:\n  tests: ['./test/setup-unit.js', ...glob.sync('src/**/*+(spec).js').map((fileName) => `./${fileName}`)],\n};\n\nmodule.exports = conf;\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Try it out: ",(0,i.kt)("inlineCode",{parentName:"p"},"npx webpack --config webpack.stryker.config.js"),". This should create a ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," directory with these files ",(0,i.kt)("inlineCode",{parentName:"p"},"dist/js/chunk-vendors.js")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dist/js/tests.js"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ npx webpack --config webpack.stryker.config.js\nStarting type checking service...\nUsing 1 worker with 2048MB memory limit\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DONE  Compiled successfully in 5343ms\n")),(0,i.kt)("p",null,"   Hash: 8a4d024467cd0b96397e\nVersion: webpack 4.44.2\nTime: 5343ms\nBuilt at: 10/06/2020 9:49:20 PM\nAsset      Size  Chunks             Chunk Names\nfavicon.ico  4.19 KiB          ","[emitted]","\nindex.html  1.02 KiB          ","[emitted]","\njs/tests.js  1000 KiB   tests  ","[emitted]","  tests\nversion.json  91 bytes          ","[emitted]","\nEntrypoint tests = js/tests.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\n4. Now test out a test run with `mocha`. Run `npx mocha --require @vue/cli-plugin-unit-mocha/setup.js dist/js/chunk-vendors.js dist/js/tests.js`.\n\nThis needs to work first before progressing to the next step. You might need to tweak your `webpack.stryker.config.js` file in order to make this work.\n\n### Configure and run Stryker\n\nOnce mocha runs succesfully on the webpack output, you\'re ready to install and run Stryker:\n\n1. Install the `@stryker-mutator/mocha-runner` plugin: `npm i -D @stryker-mutator/mocha-runner` or `yarn add --dev @stryker-mutator/mocha-runner`.\n2. Create your `stryker.conf.json` file:\n```json\n{\n  "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",\n  "testRunner": "mocha",\n  "concurrency": 2,\n  "coverageAnalysis": "perTest",\n  "symlinkNodeModules": false,\n  "buildCommand": "webpack --config webpack.stryker.config.js",\n  "mutator": {\n    "plugins": []\n  },\n  "mochaOptions": {\n    "package": "package.json",\n    "require": ["@vue/cli-plugin-unit-mocha/setup.js"],\n    "spec": ["dist/js/chunk-vendors.js", "dist/js/tests.js"]\n  }\n}\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},".stryker-tmp")," to your ",(0,i.kt)("inlineCode",{parentName:"li"},".gitignore")," file."),(0,i.kt)("li",{parentName:"ol"},"Add this script to your package.json:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test:mutation": "stryker run"\n  }\n}\n')))),(0,i.kt)("p",null,"Now give it a go with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run test:mutation")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn test:mutation"),"."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"Please take a look at the ",(0,i.kt)("a",{parentName:"p",href:"/docs/stryker-js/troubleshooting"},"troubleshooting page")," when you run into any problems setting up StrykerJS."))}p.isMDXComponent=!0}}]);