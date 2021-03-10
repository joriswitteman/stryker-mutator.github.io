(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{135:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return c}));var a=r(3),n=(r(0),r(196));const o={slug:"use-git-to-select-files",title:"Use git to select files",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},i={permalink:"/blog/use-git-to-select-files",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2018-04-04-use-git-to-select-files.md",source:"@site/blog/2018-04-04-use-git-to-select-files.md",description:"The 0.21 release of Stryker simplifies configuration by using your git database.",date:"2018-04-04T00:00:00.000Z",formattedDate:"April 4, 2018",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],title:"Use git to select files",readingTime:2.385,truncated:!0,prevItem:{title:"Introducing Stryker.NET and Stryker4s",permalink:"/blog/csharp-and-scala-support"},nextItem:{title:"Get your mutation score badge now!",permalink:"/blog/get-your-mutation-score-badge-now"}},s=[{value:"Sandboxes",id:"sandboxes",children:[]},{value:"Remove your <code>files</code> configuration",id:"remove-your-files-configuration",children:[]},{value:"Breaking change!",id:"breaking-change",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}],l={toc:s};function c({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The 0.21 release of Stryker simplifies configuration by using your git database."),Object(n.b)("p",null,"For a change log per package:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker/blob/master/packages/stryker/CHANGELOG.md"},"stryker changelog")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker/blob/master/packages/stryker-api/CHANGELOG.md"},"stryker-api changelog")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker/blob/master/packages/stryker-mocha-runner/CHANGELOG.md"},"stryker-mocha-runner changelog")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker/blob/master/packages/stryker-karma-runner/CHANGELOG.md"},"stryker-karma-runner changelog")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker/blob/master/packages/stryker-typescript/CHANGELOG.md"},"stryker-typescript changelog")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker/blob/master/packages/stryker-webpack-transpiler/CHANGELOG.md"},"stryker-webpack-transpiler changelog"))),Object(n.b)("h2",{id:"sandboxes"},"Sandboxes"),Object(n.b)("p",null,"Stryker only works on copies of your source code. A copy is called a ",Object(n.b)("em",{parentName:"p"},"sandbox"),". It creates as much of them as you want parallel test runners.\nYou don't want a big sandbox. Just imagine what would happen if all your node_modules end up in there! That's why Stryker allows you to configure\nthe files to load into it."),Object(n.b)("p",null,"One of the most common issues in ",Object(n.b)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker/issues"},"our issue tracker")," has to do with\nthe way you needed to configure it using the ",Object(n.b)("inlineCode",{parentName:"p"},"files")," configuration. It was very confusing. The fact that stryker-karma-runner (pre 0.13) and stryker-typescript (pre 0.10)\nmodified your files array (without you knowing it) only added to the complexity.\nJust ",Object(n.b)("a",{parentName:"p",href:"https://github.com/nicojs/angular-stryker-example/blob/72d85e19657247a77faa8e12587d3d301147b2bd/stryker.conf.js#L6"},"a small look at the angular example file"),"\nwill leave you scratching your head."),Object(n.b)("p",null,"Further more, you had properties like ",Object(n.b)("inlineCode",{parentName:"p"},"included"),", ",Object(n.b)("inlineCode",{parentName:"p"},"transpiled")," and ",Object(n.b)("inlineCode",{parentName:"p"},"mutated"),". It was kind of a mess really."),Object(n.b)("h2",{id:"remove-your-files-configuration"},"Remove your ",Object(n.b)("inlineCode",{parentName:"h2"},"files")," configuration"),Object(n.b)("p",null,"No longer! From release 0.21 of Stryker, the files array is ",Object(n.b)("em",{parentName:"p"},"optional"),". Please remove it. Everything should work as expected.\nStryker will fallback to a sane default: your git database. It does this by executing the following command:\n",Object(n.b)("inlineCode",{parentName:"p"},"git ls-files --others --exclude-standard --cached"),". The result should be exactly what you want in your sandbox\n(given you're using ",Object(n.b)("inlineCode",{parentName:"p"},".gitignore")," files like a boss). If you want to deviate from this for whatever reason,\nyou can still use the ",Object(n.b)("inlineCode",{parentName:"p"},"files")," property with an array of strings."),Object(n.b)("p",null,"Stryker also stopped keeping track of ",Object(n.b)("inlineCode",{parentName:"p"},"included"),", ",Object(n.b)("inlineCode",{parentName:"p"},"transpiled")," and ",Object(n.b)("inlineCode",{parentName:"p"},"mutated")," properties. For ",Object(n.b)("inlineCode",{parentName:"p"},"mutate")," please use the\ndesignated ",Object(n.b)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker/tree/master/packages/stryker#source-code-files-to-mutate"},Object(n.b)("inlineCode",{parentName:"a"},"mutate")," top level stryker property"),"."),Object(n.b)("h2",{id:"breaking-change"},"Breaking change!"),Object(n.b)("p",null,"Unfortunately we couldn't create this feature without some breaking changes. The biggest one is that we've had to remove the old\n",Object(n.b)("inlineCode",{parentName:"p"},"InputFileDescriptor")," object way of defining your input file."),Object(n.b)("p",null,"This:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"// DEPRECATED\nfiles: [{ pattern: 'pattern', included: true, mutated: true, transpiled: true }];\n")),Object(n.b)("p",null,"Is deprecated. If you are using it we strongly suggest to try to remove ",Object(n.b)("inlineCode",{parentName:"p"},"files")," entirely."),Object(n.b)("p",null,"We've had to update the API to test runner plugins and transpiler plugins as well. Before, Stryker was keeping track of which file\nneeded to be included in the test runner or transpiled by the transpiler. This is\nno longer the case. To see what this means for you, please consult the readme of the plugins you are using:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker/blob/master/packages/stryker-mocha-runner/README.md"},"stryker-mocha-runner readme")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker/blob/master/packages/stryker-karma-runner/README.md"},"stryker-karma-runner readme")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker/blob/master/packages/stryker-typescript/README.md"},"stryker-typescript readme")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker/blob/master/packages/stryker-webpack-transpiler/README.md"},"stryker-webpack-transpiler readme"))),Object(n.b)("h2",{id:"whats-next"},"What's next?"),Object(n.b)("p",null,"With this major refactoring out of the way we will hone in to our next target: an actual v1 release.\nWe've opened up ",Object(n.b)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker/issues/654"},"issue 654")," to keep track of our\nprogress on this front. Want to help? Or curious about our plans? Please get in touch."))}c.isMDXComponent=!0},196:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return r?n.a.createElement(d,s(s({ref:t},c),{},{components:r})):n.a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);