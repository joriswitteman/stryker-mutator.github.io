"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[3053],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||h[d]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7098:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var n=r(7462),a=(r(7294),r(3905));const o={title:"Classes",sidebar_position:10,custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/fsharp/classes.md"},s=void 0,i={unversionedId:"stryker-net/technical-reference/fsharp/classes",id:"stryker-net/technical-reference/fsharp/classes",title:"Classes",description:"The Following Classes need extra context to explain the current workings.",source:"@site/docs/stryker-net/technical-reference/fsharp/classes.md",sourceDirName:"stryker-net/technical-reference/fsharp",slug:"/stryker-net/technical-reference/fsharp/classes",permalink:"/docs/stryker-net/technical-reference/fsharp/classes",editUrl:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/fsharp/classes.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Classes",sidebar_position:10,custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/fsharp/classes.md"},sidebar:"docs",previous:{title:"Testing frameworks",permalink:"/docs/stryker-net/technical-reference/testing-framework"},next:{title:"Current state",permalink:"/docs/stryker-net/technical-reference/fsharp/current-state"}},c=[{value:"FsharpProjectComponentsBuilder",id:"fsharpprojectcomponentsbuilder",children:[],level:3},{value:"FsharpCoreOrchestrator",id:"fsharpcoreorchestrator",children:[],level:3},{value:"FsharpMutationProcess",id:"fsharpmutationprocess",children:[],level:3}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Following Classes need extra context to explain the current workings.\nNot every feature of C# has been ported to F#."),(0,a.kt)("h3",{id:"fsharpprojectcomponentsbuilder"},"FsharpProjectComponentsBuilder"),(0,a.kt)("p",null,"The current ProjectComponentsBuilder for F# does ",(0,a.kt)("strong",{parentName:"p"},"not")," have support for the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mutanthelpers injection"),(0,a.kt)("li",{parentName:"ul"},"auto generated code detection")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FindProjectFilesScanningProjectFolders")," method (the backup for if buildalyzer doesn't work) has not been tested.\nThis was done because the ",(0,a.kt)("inlineCode",{parentName:"p"},"FindProjectFilesScanningProjectFolders")," has been ","[deprecated]"," so any development would be a waste."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fsharpcoreorchestrator"},"FsharpCoreOrchestrator"),(0,a.kt)("p",null,"The Orchestrators works in a similar fashion to those in the CsharpMutantOrchestrator.\nThis process starts with a method: ",(0,a.kt)("inlineCode",{parentName:"p"},"Mutate(FSharpList<SynModuleOrNamespace>)")," inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"FsharpMutantOrchestrator"),".\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"FsharpMutantOrchestrator")," is only used as a starting point, after that the ",(0,a.kt)("inlineCode",{parentName:"p"},"FsharpCoreOrchestrator")," takes over."),(0,a.kt)("p",null,"Inside the 'Core' is the actual process.\nThis works by defining a Mutate() method which handles the iteration over a spesific part of a SyntaxTree. (SynExpr for example)"),(0,a.kt)("p",null,"Inside the Mutate method (contained in ",(0,a.kt)("inlineCode",{parentName:"p"},"FsharpCoreOrchestrator"),") we look for a specific Orchestrator in a Dictionary belonging to the type that the Mutate function handles. (the dictionary gets filled like this: ",(0,a.kt)("inlineCode",{parentName:"p"},"_fsharpMutationsSynExpr.Add(typeof(SynExpr.Match), new MatchOrchestrator());"),")\nOnce a specific orchestrator class has been found we initialize it and use it to iterate further.\nThe Orchestrator itself defines how to iterate further."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fsharpmutationprocess"},"FsharpMutationProcess"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Context:")),(0,a.kt)("p",null,"Whilst implementing the Compile function we ran into some limitations.\nThere is a flag (lastcompiled) that should be set on the last file in the compilation sequence.\nDuring our testing this flag remained unset and the compiler failed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Effect:")),(0,a.kt)("p",null,"To solve this the flag get hardcoded on the file named ",(0,a.kt)("inlineCode",{parentName:"p"},"Program.fs"),",\nthis is because ",(0,a.kt)("inlineCode",{parentName:"p"},"Program.fs")," is the last file in the project used to test the compile method."),(0,a.kt)("p",null,"This is also the reason the orchestrator works with ",(0,a.kt)("inlineCode",{parentName:"p"},"FSharpList<SynModuleOrNamespace>")," and not ",(0,a.kt)("inlineCode",{parentName:"p"},"ParsedInput"),".\nBecause we need to set the flag on the ParsedInput.\nTherefore making it easier to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"FSharpList<SynModuleOrNamespace>")," until we ave set the flag."))}p.isMDXComponent=!0}}]);