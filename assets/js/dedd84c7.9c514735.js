"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[3304],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return k}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,l=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=u(r),k=o,g=d["".concat(s,".").concat(k)]||d[k]||p[k]||l;return r?n.createElement(g,a(a({ref:e},c),{},{components:r})):n.createElement(g,a({ref:e},c))}));function k(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,a[1]=i;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5741:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var n=r(7462),o=(r(7294),r(3905));const l={title:"Getting started",sidebar_position:20,custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/getting-started.md"},a="Install prerequisites",i={unversionedId:"stryker-net/getting-started",id:"stryker-net/getting-started",title:"Getting started",description:"General",source:"@site/docs/stryker-net/getting-started.md",sourceDirName:"stryker-net",slug:"/stryker-net/getting-started",permalink:"/docs/stryker-net/getting-started",editUrl:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/getting-started.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Getting started",sidebar_position:20,custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/getting-started.md"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/stryker-net/introduction"},next:{title:"Configuration",permalink:"/docs/stryker-net/configuration"}},s=[{value:"General",id:"general",children:[],level:2},{value:"Dotnet framework specific",id:"dotnet-framework-specific",children:[],level:2},{value:"Migrating",id:"migrating",children:[],level:2},{value:"Install globally",id:"install-globally",children:[],level:2},{value:"Install in project",id:"install-in-project",children:[],level:2}],u={toc:s};function c(t){let{components:e,...l}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-prerequisites"},"Install prerequisites"),(0,o.kt)("h2",{id:"general"},"General"),(0,o.kt)("p",null,"Stryker is installed using the dotnet cli as a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/core/tools/global-tools"},"dotnet tool")),(0,o.kt)("p",null,"Stryker requires the dotnet 5.0 runtime or newer: ",(0,o.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download"},"Install dotnet")),(0,o.kt)("p",null,"*"," Note: Your application does not need to be dotnet 5.0 or newer. You only need the runtime installed so stryker can run."),(0,o.kt)("h2",{id:"dotnet-framework-specific"},"Dotnet framework specific"),(0,o.kt)("p",null,"Nuget is required for dotnet framework. Follow the instructions at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/nuget/install-nuget-client-tools#windows"},"Install nuget")," including adding nuget to the path. Otherwise stryker will not be able to find and use nuget."),(0,o.kt)("p",null,"Make sure NuGet targets and build tasks are installed. You can install them with visual studio by going to Tools > Get Tools and Features > Individual components > Code tools"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:r(9389).Z},"NuGet targets and build tasks feature")),(0,o.kt)("h2",{id:"migrating"},"Migrating"),(0,o.kt)("p",null,"Coming from Stryker.NET V0.x? Take a look at our ",(0,o.kt)("a",{parentName:"p",href:"https://stryker-mutator.io/docs/stryker-net/migration-guide"},"migration guide"),"."),(0,o.kt)("h1",{id:"install-stryker"},"Install stryker"),(0,o.kt)("p",null,"Stryker can be installed globally for your whole system or locally for a specific project."),(0,o.kt)("h2",{id:"install-globally"},"Install globally"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet tool install -g dotnet-stryker\n")),(0,o.kt)("h2",{id:"install-in-project"},"Install in project"),(0,o.kt)("p",null,"Create a file called dotnet-tools.json in your project folder if this is your first local tool."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new tool-manifest\n")),(0,o.kt)("p",null,"Then install stryker without the -g flag by executing the following command in the project folder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet tool install dotnet-stryker\n")),(0,o.kt)("p",null,"Check the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet-tools.json")," file into source control"),(0,o.kt)("p",null,"Now the rest of your team can install or update stryker with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet tool restore\n")),(0,o.kt)("h1",{id:"prepare"},"Prepare"),(0,o.kt)("p",null,"Make sure the working directory for your console is set to the ",(0,o.kt)("em",{parentName:"p"},"unit test")," project dir."),(0,o.kt)("h1",{id:"lets-kill-some-mutants"},"Let's kill some mutants"),(0,o.kt)("p",null,"For most projects no configuration is needed. Simply run stryker and it will find your source project to mutate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet stryker\n")),(0,o.kt)("p",null,"If more configuration is needed follow the instructions in your console."),(0,o.kt)("h1",{id:"configure"},"Configure"),(0,o.kt)("p",null,"Optionally you can add a config file to store your options so they won't have to be passed using CLI each run."),(0,o.kt)("p",null,"Do this by adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"stryker-config.json")," file to your run location. Now add your config to the file like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "stryker-config":\n    {\n        "reporters": [\n            "progress",\n            "html"\n        ]\n    }\n}\n')),(0,o.kt)("p",null,"For all available configuration see ",(0,o.kt)("a",{parentName:"p",href:"https://stryker-mutator.io/docs/stryker-net/Configuration"},"our configuration page"),"."),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"Have troubles running Stryker? Try running with trace logging."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet stryker --verbosity trace --log-to-file\n")),(0,o.kt)("p",null,"Please ",(0,o.kt)("a",{parentName:"p",href:"http://github.com/stryker-mutator/stryker-net/issues"},"report any issues")," you have or let us know ",(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM"},"via Slack"),"."))}c.isMDXComponent=!0},9389:function(t,e,r){e.Z=r.p+"assets/files/install-nuget-targets-7cdb9c39c50b899bea754d87e56f514d.png"}}]);