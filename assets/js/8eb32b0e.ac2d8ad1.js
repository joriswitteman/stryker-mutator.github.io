(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{143:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return A})),r.d(t,"default",(function(){return c}));var n=r(3),a=(r(0),r(196));const o={custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/Reporters.md"},s={unversionedId:"stryker-net/Reporters",id:"stryker-net/Reporters",isDocsHomePage:!1,title:"Reporters",description:"Stryker supports a variety of reporters. Enabled reporters will be activated during and after your Stryker run.",source:"@site/docs/stryker-net/Reporters.md",slug:"/stryker-net/Reporters",permalink:"/docs/stryker-net/Reporters",editUrl:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/Reporters.md",version:"current",sidebar:"docs",previous:{title:"Regex mutations",permalink:"/docs/stryker-net/RegexMutators"},next:{title:"Installing Stryker in pipelines",permalink:"/docs/stryker-net/Stryker-in-pipeline"}},A=[{value:"Api key",id:"api-key",children:[]},{value:"Project name",id:"project-name",children:[]},{value:"Project version",id:"project-version",children:[]},{value:"Project module",id:"project-module",children:[]},{value:"Configure using file",id:"configure-using-file",children:[]}],l={toc:A};function c({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Stryker supports a variety of reporters. Enabled reporters will be activated during and after your Stryker run. "),Object(a.b)("p",null,"The default reporters are:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"dotnet stryker --reporters \"['html', 'progress']\"\n")),Object(a.b)("h1",{id:"html-reporter"},"Html reporter"),Object(a.b)("p",null,"Our html reporter will output a html file that will visually display your project and all mutations. This is our recomended reporter for larger projects, since it displays large number of mutations in a clear way. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"dotnet stryker --reporters \"['html']\"\n")),Object(a.b)("p",null,"Example:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"html reporter",src:r(292).default})),Object(a.b)("h1",{id:"dashboard-reporter"},"Dashboard reporter"),Object(a.b)("p",null,"The dashboard reporter will upload your stryker result as json to the ",Object(a.b)("a",{parentName:"p",href:"https://dashboard.stryker-mutator.io/"},"stryker dashboard"),". To use this reporter some settings should be configured:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"dotnet stryker --reporters \"['dashboard']\"\n")),Object(a.b)("h2",{id:"api-key"},"Api key"),Object(a.b)("p",null,"Get your api key at ",Object(a.b)("a",{parentName:"p",href:"https://dashboard.stryker-mutator.io/"},"stryker dashboard"),". To keep your api key safe, store it in an encrypted variable in your pipeline."),Object(a.b)("p",null,"Configure the key using the following option:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"dotnet stryker --dashboard-api-key <key>\n")),Object(a.b)("p",null,"or by setting the environment variable ",Object(a.b)("inlineCode",{parentName:"p"},"STRYKER_DASHBOARD_API_KEY"),"."),Object(a.b)("h2",{id:"project-name"},"Project name"),Object(a.b)("p",null,"The name registered with the dashboard. It is in the form of ",Object(a.b)("inlineCode",{parentName:"p"},"gitProvider/organization/repository"),". At the moment the dashboard backend only supports github.com as a git provider, but we will also support gitlab.com/bitbucket.org, etc in the future. It can have an indefinite number of levels. Slashes (/) in this name are not escaped. For example ",Object(a.b)("inlineCode",{parentName:"p"},"github.com/stryker-mutator/stryker-net"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"dotnet stryker --dashboard-project <name>\n")),Object(a.b)("h2",{id:"project-version"},"Project version"),Object(a.b)("p",null,'The version of the report. This should be filled with the branch name, git tag or git sha (although no validation is done). You can override a report of a specific version, like docker tags. Slashes in the version should not be encoded. For example, it\'s valid to use "feat/logging".'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"dotnet stryker --dashboard-version <version>\n")),Object(a.b)("h2",{id:"project-module"},"Project module"),Object(a.b)("p",null,"Optional. If you want to store multiple reports for a version, you can use this value to separate them logically. For example, in a mono-repo setup where each package (or project or module) delivers a report."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"dotnet stryker --dashboard-module <name>\n")),Object(a.b)("h2",{id:"configure-using-file"},"Configure using file"),Object(a.b)("p",null,"The dashboard can also be configured using the config file. But keep in mind your api-key should not be pushed to version control. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "stryker-config": {\n    "dashboard-api-key": "xxx",\n    "dashboard-project": "xxx",\n    "dashboard-version": "test",\n    "dashboard-module": "sub",\n    "reporters": [\n      "dashboard"\n    ]\n  }\n}\n')),Object(a.b)("h1",{id:"cleartext-reporter"},"Cleartext reporter"),Object(a.b)("p",null,"It displays all files right after the mutation testrun is done. Ideal for a quick run, as it leaves no file on your system."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"dotnet stryker --reporters \"['cleartext']\"\n")),Object(a.b)("p",null,"Example:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"console reporter",src:r(293).default})),Object(a.b)("h1",{id:"cleartext-tree-reporter"},"Cleartext tree reporter"),Object(a.b)("p",null,"It displays all mutations right after the mutation testrun is done. Ideal for a quick run, as it leaves no file on your system. It is recommended to turn this reporter off on big projects."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"dotnet stryker --reporters \"['cleartextTree']\"\n")),Object(a.b)("p",null,"Example:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"console reporter",src:r(294).default})),Object(a.b)("h1",{id:"progress-reporter"},"Progress reporter"),Object(a.b)("p",null,"This reporter outputs the current status of the mutation testrun. It has a nice visual look so you can quickly see the progress. We recomend to use this reporter on large projects. It also shows an indication of the estimated time for Stryker.NET to complete."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"dotnet stryker --reporters \"['progress']\"\n")),Object(a.b)("p",null,"Example:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"progress bar reporter",src:r(295).default})),Object(a.b)("h1",{id:"console-dots-reporter"},"Console dots reporter"),Object(a.b)("p",null,"A basic reporter to display the progress of the mutationtest run. It indicates in a very simple way how many mutants have been tested and their status. This is ideal to use on build servers, as it has little/no performance loss while still giving insight."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"dotnet stryker --reporters \"['dots']\"\n")),Object(a.b)("p",null,"Example:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"console dots reporter",src:r(296).default})),Object(a.b)("p",null,"Where ",Object(a.b)("inlineCode",{parentName:"p"},'"."')," means killed, ",Object(a.b)("inlineCode",{parentName:"p"},'"S"')," means survived and ",Object(a.b)("inlineCode",{parentName:"p"},'"T"')," means timed out."),Object(a.b)("h1",{id:"json-reporter"},"Json reporter"),Object(a.b)("p",null,"This reporter outputs a json file with all mutation testrun info of the last run. The json is also used for the HTML reporter, but using this reporter you could use the file for your own purposes."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"dotnet stryker --reporters \"['json']\"\n")))}c.isMDXComponent=!0},196:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):A(A({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},i=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(r),i=n,d=u["".concat(s,".").concat(i)]||u[i]||p[i]||o;return r?a.a.createElement(d,A(A({ref:t},c),{},{components:r})):a.a.createElement(d,A({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=i;var A={};for(var l in t)hasOwnProperty.call(t,l)&&(A[l]=t[l]);A.originalType=e,A.mdxType="string"==typeof e?e:n,s[1]=A;for(var c=2;c<o;c++)s[c]=r[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}i.displayName="MDXCreateElement"},292:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/html-report-net-5d95a90c798dfc78504a2c4bc307348f.png"},293:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/console-reporter-net-77e130ec3c45215de462bcfa79a6753d.png"},294:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/console-reporter-tree-5c9c13dde2e923c03c89bcb40172daa4.png"},295:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,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"},296:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,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"}}]);