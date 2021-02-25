(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var o=n(3),a=n(7),r=(n(0),n(194)),i={title:"Mocha Runner",custom_edit_url:"https://github.com/stryker-mutator/stryker/edit/master/docs/mocha-runner.md"},c={unversionedId:"stryker/mocha-runner",id:"stryker/mocha-runner",isDocsHomePage:!1,title:"Mocha Runner",description:"A plugin to use Mocha in Stryker",source:"@site/docs/stryker/mocha-runner.md",slug:"/stryker/mocha-runner",permalink:"/docs/stryker/mocha-runner",editUrl:"https://github.com/stryker-mutator/stryker/edit/master/docs/mocha-runner.md",version:"current",sidebar:"docs",previous:{title:"Karma Runner",permalink:"/docs/stryker/karma-runner"},next:{title:"TypeScript Checker",permalink:"/docs/stryker/typescript-checker"}},p=[{value:"Install",id:"install",children:[]},{value:"Peer dependencies",id:"peer-dependencies",children:[]},{value:"Configuring",id:"configuring",children:[{value:"<code>mochaOptions.spec</code> [<code>string</code> or <code>string[]</code>]",id:"mochaoptionsspec-string-or-string",children:[]},{value:"<code>mochaOptions.config</code> string | undefined",id:"mochaoptionsconfig-string--undefined",children:[]},{value:"<code>mochaOptions.package</code> string | undefined",id:"mochaoptionspackage-string--undefined",children:[]},{value:"<code>mochaOptions.opts</code> string | false",id:"mochaoptionsopts-string--false",children:[]},{value:"<code>mochaOptions.grep</code> RegExp",id:"mochaoptionsgrep-regexp",children:[]},{value:"<code>mochaOptions.ui</code> string",id:"mochaoptionsui-string",children:[]},{value:"<code>mochaOptions.extension</code> string",id:"mochaoptionsextension-string",children:[]},{value:"<code>mochaOptions.require</code> [<code>string[]</code>]",id:"mochaoptionsrequire-string",children:[]},{value:"<code>mochaOptions.async-only</code> boolean",id:"mochaoptionsasync-only-boolean",children:[]},{value:"<code>mochaOptions.timeout</code> number",id:"mochaoptionstimeout-number",children:[]}]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A plugin to use Mocha in Stryker"),Object(r.b)("h2",{id:"install"},"Install"),Object(r.b)("p",null,"Install @stryker-mutator/mocha-runner locally within your project folder, like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"npm i --save-dev @stryker-mutator/mocha-runner\n")),Object(r.b)("h2",{id:"peer-dependencies"},"Peer dependencies"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"@stryker-mutator/mocha-runner")," is a plugin for ",Object(r.b)("inlineCode",{parentName:"p"},"stryker")," to enable ",Object(r.b)("inlineCode",{parentName:"p"},"mocha")," as a test runner.\nAs such, you should make sure you have the correct versions of its dependencies installed:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mocha")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@stryker-mutator/core"))),Object(r.b)("h2",{id:"configuring"},"Configuring"),Object(r.b)("p",null,"You can configure the mocha test runner in the ",Object(r.b)("inlineCode",{parentName:"p"},"stryker.conf.json")," (or ",Object(r.b)("inlineCode",{parentName:"p"},"stryker.conf.js"),") file."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "testRunner": "mocha",\n  "coverageAnalysis": "perTest",\n  "mochaOptions": {\n    "spec": [ "test/**/*.js" ],\n    "config": "path/to/mocha/config/.mocharc.json",\n    "package": "path/to/custom/package/package.json",\n    "opts": "path/to/custom/mocha.opts",\n    "ui": "bdd",\n    "require": [ /*\'babel-register\' */],\n    "async-only": false,\n    "grep": /.*/\n  }\n}\n')),Object(r.b)("p",null,"When using Mocha version 6, @stryker-mutator/mocha-runner will use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://mochajs.org/api/module-lib_cli_options.html#.loadOptions"}),"mocha's internal file loading mechanism")," to load your mocha configuration.\nSo feel free to ",Object(r.b)("em",{parentName:"p"},"leave out the mochaOptions entirely")," if you're using one of the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://mochajs.org/#configuring-mocha-nodejs"}),"default file locations"),"."),Object(r.b)("p",null,"Alternatively, use ",Object(r.b)("inlineCode",{parentName:"p"},"['no-config']: true"),", ",Object(r.b)("inlineCode",{parentName:"p"},"['no-package']: true")," or ",Object(r.b)("inlineCode",{parentName:"p"},"['no-opts']: true")," to ignore the default mocha config, default mocha package.json and default mocha opts locations respectively."),Object(r.b)("h3",{id:"mochaoptionsspec-string-or-string"},Object(r.b)("inlineCode",{parentName:"h3"},"mochaOptions.spec")," [",Object(r.b)("inlineCode",{parentName:"h3"},"string")," or ",Object(r.b)("inlineCode",{parentName:"h3"},"string[]"),"]"),Object(r.b)("p",null,"Default: ",Object(r.b)("inlineCode",{parentName:"p"},'"test/**/*.js"')),Object(r.b)("p",null,"Choose which files to include. This is comparable to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://mochajs.org/#the-test-directory"}),"mocha's test directory")," although there is no support for ",Object(r.b)("inlineCode",{parentName:"p"},"--recursive"),"."),Object(r.b)("p",null,"If you want to load all files recursively: use a globbing expression (",Object(r.b)("inlineCode",{parentName:"p"},"'test/**/*.js'"),"). If you want to decide on the order of files, use multiple globbing expressions. For example: use ",Object(r.b)("inlineCode",{parentName:"p"},"['test/helpers/**/*.js', 'test/unit/**/*.js']")," if you want to make sure your helpers are loaded before your unit tests."),Object(r.b)("h3",{id:"mochaoptionsconfig-string--undefined"},Object(r.b)("inlineCode",{parentName:"h3"},"mochaOptions.config")," ","[",Object(r.b)("inlineCode",{parentName:"h3"},"string")," | ",Object(r.b)("inlineCode",{parentName:"h3"},"undefined"),"]"),Object(r.b)("p",null,"Default: ",Object(r.b)("inlineCode",{parentName:"p"},"undefined")),Object(r.b)("p",null,"Explicit path to the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://mochajs.org/#-config-path"}),"mocha config file")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"New since Mocha 6")),Object(r.b)("h3",{id:"mochaoptionspackage-string--undefined"},Object(r.b)("inlineCode",{parentName:"h3"},"mochaOptions.package")," ","[",Object(r.b)("inlineCode",{parentName:"h3"},"string")," | ",Object(r.b)("inlineCode",{parentName:"h3"},"undefined"),"]"),Object(r.b)("p",null,"Default: ",Object(r.b)("inlineCode",{parentName:"p"},"undefined")),Object(r.b)("p",null,"Specify an explicit path to a package.json file (ostensibly containing configuration in a mocha property).\nSee ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://mochajs.org/#-package-path"}),"https://mochajs.org/#-package-path"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"New since Mocha 6")),Object(r.b)("h3",{id:"mochaoptionsopts-string--false"},Object(r.b)("inlineCode",{parentName:"h3"},"mochaOptions.opts")," ","[",Object(r.b)("inlineCode",{parentName:"h3"},"string")," | false]"),Object(r.b)("p",null,"Default: ",Object(r.b)("inlineCode",{parentName:"p"},'"test/mocha.opts"')),Object(r.b)("p",null,"Specify a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://mochajs.org/#mochaopts"}),"'mocha.opts' file")," to be loaded. Options specified directly in your stryker.conf.js file will overrule options from the 'mocha.opts' file. Disable loading of an additional mocha.opts file with ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."),Object(r.b)("p",null,"The only supported mocha options are used: ",Object(r.b)("inlineCode",{parentName:"p"},"--ui"),", ",Object(r.b)("inlineCode",{parentName:"p"},"--require"),", ",Object(r.b)("inlineCode",{parentName:"p"},"--async-only"),", ",Object(r.b)("inlineCode",{parentName:"p"},"--timeout"),", ",Object(r.b)("inlineCode",{parentName:"p"},"--grep")," (or their short form counterparts). Others are ignored by the @stryker-mutator/mocha-runner."),Object(r.b)("h3",{id:"mochaoptionsgrep-regexp"},Object(r.b)("inlineCode",{parentName:"h3"},"mochaOptions.grep")," ","[",Object(r.b)("inlineCode",{parentName:"h3"},"RegExp"),"]"),Object(r.b)("p",null,"Default: ",Object(r.b)("inlineCode",{parentName:"p"},"undefined")),Object(r.b)("p",null,"Specify a mocha ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://mochajs.org/#grep"}),Object(r.b)("inlineCode",{parentName:"a"},"grep"))," command, to single out individual tests."),Object(r.b)("h3",{id:"mochaoptionsui-string"},Object(r.b)("inlineCode",{parentName:"h3"},"mochaOptions.ui")," ","[",Object(r.b)("inlineCode",{parentName:"h3"},"string"),"]"),Object(r.b)("p",null,"Default: ",Object(r.b)("inlineCode",{parentName:"p"},"undefined")),Object(r.b)("p",null,"Set the name of your ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://mochajs.org/#-u---ui-name"}),"mocha ui")),Object(r.b)("h3",{id:"mochaoptionsextension-string"},Object(r.b)("inlineCode",{parentName:"h3"},"mochaOptions.extension")," ","[",Object(r.b)("inlineCode",{parentName:"h3"},"string"),"]"),Object(r.b)("p",null,"Default: ",Object(r.b)("inlineCode",{parentName:"p"},"undefined")),Object(r.b)("p",null,"Set mocha's ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://mochajs.org/#-extension-ext"}),"--extension")," property."),Object(r.b)("h3",{id:"mochaoptionsrequire-string"},Object(r.b)("inlineCode",{parentName:"h3"},"mochaOptions.require")," [",Object(r.b)("inlineCode",{parentName:"h3"},"string[]"),"]"),Object(r.b)("p",null,"Default: ",Object(r.b)("inlineCode",{parentName:"p"},"[]")),Object(r.b)("p",null,"Set mocha's ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://mochajs.org/#-r---require-module-name"}),Object(r.b)("inlineCode",{parentName:"a"},"require")," option")),Object(r.b)("h3",{id:"mochaoptionsasync-only-boolean"},Object(r.b)("inlineCode",{parentName:"h3"},"mochaOptions.async-only")," ","[",Object(r.b)("inlineCode",{parentName:"h3"},"boolean"),"]"),Object(r.b)("p",null,"Default: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Set mocha's ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://mochajs.org/#usage"}),Object(r.b)("inlineCode",{parentName:"a"},"asyncOnly")," option")),Object(r.b)("h3",{id:"mochaoptionstimeout-number"},Object(r.b)("inlineCode",{parentName:"h3"},"mochaOptions.timeout")," ","[",Object(r.b)("inlineCode",{parentName:"h3"},"number"),"]"),Object(r.b)("p",null,"Default: ",Object(r.b)("inlineCode",{parentName:"p"},"undefined")),Object(r.b)("p",null,"Set mocha's ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://mochajs.org/#-t---timeout-ms"}),Object(r.b)("inlineCode",{parentName:"a"},"timeout")," option")))}l.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),m=o,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||r;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);