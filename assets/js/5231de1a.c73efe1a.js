(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[6395],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(r),m=a,f=h["".concat(p,".").concat(m)]||h[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},77269:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var n=r(22122),a=(r(67294),r(3905));const o={custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/fsharp/Packages.md"},i=void 0,l={unversionedId:"stryker-net/technical-reference/fsharp/Packages",id:"stryker-net/technical-reference/fsharp/Packages",isDocsHomePage:!1,title:"Packages",description:"During the development of Stryker.net for F# packages have been added to Stryker.net.",source:"@site/docs/stryker-net/technical-reference/fsharp/Packages.md",sourceDirName:"stryker-net/technical-reference/fsharp",slug:"/stryker-net/technical-reference/fsharp/Packages",permalink:"/docs/stryker-net/technical-reference/fsharp/Packages",editUrl:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/fsharp/Packages.md",version:"current",frontMatter:{custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/fsharp/Packages.md"},sidebar:"docs",previous:{title:"CurrentState",permalink:"/docs/stryker-net/technical-reference/fsharp/CurrentState"},next:{title:"Getting started",permalink:"/docs/stryker4s/getting-started"}},p=[{value:"FSharp.Compiler.Service",id:"fsharpcompilerservice",children:[]},{value:"Microsoft.FSharp",id:"microsoftfsharp",children:[]},{value:"FSharp.Core",id:"fsharpcore",children:[]}],s={toc:p};function c({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"During the development of Stryker.net for F# packages have been added to Stryker.net.\nHere follow a description of those packages and how they are used in Stryker.net"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fsharpcompilerservice"},"FSharp.Compiler.Service"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"FSharp.Compiler.SyntaxTree"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SynModuleDecl",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Let"),(0,a.kt)("li",{parentName:"ul"},"NestedModule"))),(0,a.kt)("li",{parentName:"ul"},"SynExpr",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Match"),(0,a.kt)("li",{parentName:"ul"},"LetOrUse"),(0,a.kt)("li",{parentName:"ul"},"IfThenElse"))),(0,a.kt)("li",{parentName:"ul"},"SynConst"),(0,a.kt)("li",{parentName:"ul"},"SynPat"),(0,a.kt)("li",{parentName:"ul"},"ParsedInput")))),(0,a.kt)("p",null,"These classes describe the structure of the SyntaxTree for F#, the name for the SyntaxTree in F# is ParsedInput.\nThe other classes are used for the structure of said ParsedInput."),(0,a.kt)("p",null,"Walking over a ParsedInput: ",(0,a.kt)("a",{parentName:"p",href:"https://fsharp.github.io/FSharp.Compiler.Service/untypedtree.html"},"https://fsharp.github.io/FSharp.Compiler.Service/untypedtree.html"),(0,a.kt)("br",{parentName:"p"}),"\n","Viewing the ParsedInput online: ",(0,a.kt)("a",{parentName:"p",href:"https://fsprojects.github.io/fantomas-tools/#/ast"},"https://fsprojects.github.io/fantomas-tools/#/ast")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"FSharp.Compiler.SourceCodeServices")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"FSharpChecker",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"The FSharpChecker contains a lot of logic needed for F# support, compiling for example. Currently it is used for: Generating FSharpProjectOptions and FSharpParseFileResults as well as compiling the F# SyntaxTrees")),(0,a.kt)("li",{parentName:"ul"},"FSharpErrorInfo",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"The error format for F# operations, used by the compiler and whilst generating the FSharpProjectOptions")),(0,a.kt)("li",{parentName:"ul"},"FSharpProjectOptions",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"Future-proofing needed for a lot of parts within the FSharpChecker, used to get FSharpParseFileResults")),(0,a.kt)("li",{parentName:"ul"},"FSharpParseFileResults",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"The parsing result of the function which creates an ParsedInput from sourcecode (string)")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"FSharp.Compiler.Text")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SourceText",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"The SourceText Class contains the sourcecode from a given F# file, used to generate the initial SyntaxTrees."))))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"microsoftfsharp"},"Microsoft.FSharp"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Microsoft.FSharp.Collections"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"FSharpList"),(0,a.kt)("li",{parentName:"ul"},"ListModule.OfSeq",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"Used to convert the standard C# List to FSharpList and back. FSharpList is expected by the functions from FSharp.Compiler.Service")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Microsoft.FSharp.Control"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"FSharpAsync.RunSynchronously",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"Some of the functions in FSharp.Compiler.Service are Async, we have to specify that the process comes from F# for it to work correctly, hence we use FSharpAsync.RunSynchronously"))))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fsharpcore"},"FSharp.Core"),(0,a.kt)("p",null,"needed if we want the compile function to work. Since it checks for the local version of Fsharp.Compile."),(0,a.kt)("hr",null))}c.isMDXComponent=!0}}]);