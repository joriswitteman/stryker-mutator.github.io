"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[7650],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9009:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(7462),o=(n(7294),n(3905));const i={title:"Config file",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/config-file.md"},a=void 0,s={unversionedId:"stryker-js/config-file",id:"stryker-js/config-file",title:"Config file",description:"Although a config file is not mandatory, it is recommended. You can define your Stryker configuration in either a .js or .json file. If you use a .js file, it should contain a NodeJS module that exports the configuration object. Autocompletion is supported using JSON schema or using @type JS docs.",source:"@site/docs/stryker-js/config-file.md",sourceDirName:"stryker-js",slug:"/stryker-js/config-file",permalink:"/docs/stryker-js/config-file",editUrl:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/config-file.md",tags:[],version:"current",frontMatter:{title:"Config file",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/config-file.md"},sidebar:"docs",previous:{title:"Usage",permalink:"/docs/stryker-js/usage"},next:{title:"Configuration",permalink:"/docs/stryker-js/configuration"}},l=[{value:"Configuration options",id:"configuration-options",children:[],level:2},{value:"Setup",id:"setup",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Glob patterns",id:"glob-patterns",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],c={toc:l};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Although a config file is not mandatory, it is recommended. You can define your Stryker configuration in either a ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," file. If you use a ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," file, it should contain a NodeJS module that exports the configuration object. Autocompletion is supported using JSON schema or using ",(0,o.kt)("a",{parentName:"p",href:"https://jsdoc.app/"},(0,o.kt)("inlineCode",{parentName:"a"},"@type")," JS docs"),"."),(0,o.kt)("h2",{id:"configuration-options"},"Configuration options"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/stryker-js/configuration"},"configuration")," for a list of available options."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"With a ",(0,o.kt)("inlineCode",{parentName:"p"},"stryker.conf.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",\n  "_comment": "Comments can be put inside `xxx_comment` properties."\n}\n')),(0,o.kt)("p",null,"Or as ",(0,o.kt)("inlineCode",{parentName:"p"},"stryker.conf.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n* @type {import('@stryker-mutator/api/core').StrykerOptions}\n*/\nmodule.exports = {\n  // Your config here\n};\n")),(0,o.kt)("p",null,"You can use your editor's autocompletion to help you author your configuration file."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"config file autocompletion",src:n(3442).Z})),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,'By default, Stryker will look for a "stryker.conf.js" or "stryker.conf.json" file in the current working directory (cwd). You can also use a different configuration file with a second argument to the ',(0,o.kt)("inlineCode",{parentName:"p"},"run")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# Use "stryker.conf.js" or "stryker.conf.json" in the cwd\nnpx stryker run\n# Use "alternative-stryker.conf.json"\nnpx stryker run alternative-stryker.conf.json\n')),(0,o.kt)("h2",{id:"glob-patterns"},"Glob patterns"),(0,o.kt)("p",null,"Some options allow for a glob pattern to be defined. These glob patterns are defined relative to the cwd. "),(0,o.kt)("p",null,"For example, using ",(0,o.kt)("inlineCode",{parentName:"p"},'"mutate": [ "src/components/**/*.component.js" ]'),' will make sure only files ending with ".component.js" in the "src/components" directory are mutated.'),(0,o.kt)("p",null,"We suggest using ",(0,o.kt)("a",{parentName:"p",href:"https://globster.xyz/"},"https://globster.xyz/")," when auditing more complex glob expressions; it can help you get them just right."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"The following is an example ",(0,o.kt)("inlineCode",{parentName:"p"},"stryker.conf.json")," file. It specifies running mocha tests with the mocha test runner."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",\n  "testRunner": "mocha",\n  "coverageAnalysis": "perTest"\n}\n')))}u.isMDXComponent=!0},3442:function(e,t,n){t.Z=n.p+"assets/images/config-file-autocompletion-41622b4a7ef06603ae14a26f9913c09e.gif"}}]);