(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(3),r=(n(0),n(196));const c={title:"Research",custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/research.md"},o={unversionedId:"stryker-net/technical-reference/Research",id:"stryker-net/technical-reference/Research",isDocsHomePage:!1,title:"Research",description:"Stryker.NET wants to be a blazing fast mutation test framework. To achieve this some research has taken place before designing the framework.",source:"@site/docs/stryker-net/technical-reference/Research.md",slug:"/stryker-net/technical-reference/Research",permalink:"/docs/stryker-net/technical-reference/Research",editUrl:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/research.md",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/stryker-net/technical-reference/Introduction"},next:{title:"Mutant schemata",permalink:"/docs/stryker-net/technical-reference/Mutant-schemata"}},i=[{value:"Criteria",id:"criteria",children:[]},{value:"Options",id:"options",children:[]},{value:"Comparison",id:"comparison",children:[{value:"Mutating source code",id:"mutating-source-code",children:[]},{value:"Mutating byte code",id:"mutating-byte-code",children:[]},{value:"Mutant schemata (mutation switching)",id:"mutant-schemata-mutation-switching",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],l={toc:i};function u({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Stryker.NET wants to be a blazing fast mutation test framework. To achieve this some research has taken place before designing the framework."),Object(r.b)("h2",{id:"criteria"},"Criteria"),Object(r.b)("p",null,"The framework had to conform the following criteria:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Be fast"),Object(r.b)("li",{parentName:"ul"},"Be able to show the exact location of the mutations to the user"),Object(r.b)("li",{parentName:"ul"},"The following mutations should be able to be made",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Binary mutations"),Object(r.b)("li",{parentName:"ul"},"Boolean mutations"),Object(r.b)("li",{parentName:"ul"},"Logical mutations"),Object(r.b)("li",{parentName:"ul"},"Conditional mutations"),Object(r.b)("li",{parentName:"ul"},"Unary mutations"),Object(r.b)("li",{parentName:"ul"},"Return value mutations")))),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("p",null,"By looking at other frameworks two options could be found regarding architectures:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Mutating source code (",Object(r.b)("a",{parentName:"li",href:"https://stryker-mutator.io/"},"Stryker"),")"),Object(r.b)("li",{parentName:"ul"},"Mutating byte code (",Object(r.b)("a",{parentName:"li",href:"http://pitest.org/"},"PiTest"),")")),Object(r.b)("p",null,"Later another architecture was found: mutant schemata (also dubbed mutation switching). This technique places all mutations inside if statements. Such an if statement could look like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp"},'if(Environment.GetEnvironmentVariable("ActiveMutation") == "1") {\n  i--; // mutated code\n} else {\n  i++; // original code\n}\n')),Object(r.b)("h2",{id:"comparison"},"Comparison"),Object(r.b)("p",null,"For each option a seperate prototype has been created. The results showed the following pros and cons. "),Object(r.b)("h3",{id:"mutating-source-code"},"Mutating source code"),Object(r.b)("p",null,"Pros:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Exact location can be shown to users.")),Object(r.b)("p",null,"Cons:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Each mutation has to be compiled seperate. So mutating is slow.")),Object(r.b)("h3",{id:"mutating-byte-code"},"Mutating byte code"),Object(r.b)("p",null,"Pros:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fast")),Object(r.b)("p",null,"Cons:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Mutators are difficult to create."),Object(r.b)("li",{parentName:"ul"},"Exact location cannot be shown to users.")),Object(r.b)("h3",{id:"mutant-schemata-mutation-switching"},"Mutant schemata (mutation switching)"),Object(r.b)("p",null,"Pros:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"All mutants can be compiled at once, so mutating is fast."),Object(r.b)("li",{parentName:"ul"},"Exact location can be shown to users."),Object(r.b)("li",{parentName:"ul"},"Mutated assembly can be kept in memory during mutation testruns."),Object(r.b)("li",{parentName:"ul"},"Mutation coverage can be easily calculated."),Object(r.b)("li",{parentName:"ul"},"Testing multiple mutations in one testrun is possible.")),Object(r.b)("p",null,"Cons:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Not all mutations are possible",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Mutating constant values"),Object(r.b)("li",{parentName:"ul"},"Mutating method names"),Object(r.b)("li",{parentName:"ul"},"Mutating access modifiers"))),Object(r.b)("li",{parentName:"ul"},"Compile errors should not occur.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Since all mutations will compile at once, all mutations should compile correctly")))),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"Mutant schemata works fastest and the exact location for every mutation can be shown to the user. Stryker.NET has chosen the path of mutant schemata. "))}u.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),p=a,h=b["".concat(o,".").concat(p)]||b[p]||m[p]||c;return n?r.a.createElement(h,i(i({ref:t},u),{},{components:n})):r.a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);