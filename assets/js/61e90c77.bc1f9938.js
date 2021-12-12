"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[6539],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),g=u(r),m=o,y=g["".concat(l,".").concat(m)]||g[m]||p[m]||a;return r?n.createElement(y,s(s({ref:e},c),{},{components:r})):n.createElement(y,s({ref:e},c))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,s=new Array(a);s[0]=g;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1446:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return c}});var n=r(7462),o=(r(7294),r(3905));const a={title:"Getting started",custom_edit_url:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/getting-started.md",sidebar_position:1},s=void 0,i={unversionedId:"stryker4s/getting-started",id:"stryker4s/getting-started",title:"Getting started",description:"Stryker4s is a mutation testing framework for Scala. It allows you to test your tests by temporarily inserting bugs.",source:"@site/docs/stryker4s/getting-started.md",sourceDirName:"stryker4s",slug:"/stryker4s/getting-started",permalink:"/docs/stryker4s/getting-started",editUrl:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting started",custom_edit_url:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/getting-started.md",sidebar_position:1},sidebar:"docs",previous:{title:"Packages",permalink:"/docs/stryker-net/technical-reference/fsharp/packages"},next:{title:"Configuration",permalink:"/docs/stryker4s/configuration"}},l=[{value:"1 Install",id:"1-install",children:[],level:2},{value:"2 Configure",id:"2-configure",children:[],level:2},{value:"3 Let&#39;s kill some mutants",id:"3-lets-kill-some-mutants",children:[],level:2},{value:"4 Having trouble?",id:"4-having-trouble",children:[],level:2}],u={toc:l};function c(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Stryker4s is a mutation testing framework for Scala. It allows you to test your tests by temporarily inserting bugs."),(0,o.kt)("p",null,"This guide is for the sbt plugin for Stryker4s. For other ways to run Stryker4s, such as on Maven projects, look at our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker4s/blob/master/README.md#getting-started"},"README"),"."),(0,o.kt)("h2",{id:"1-install"},"1 Install"),(0,o.kt)("p",null,"To install Stryker4s on your project, add the following line to ",(0,o.kt)("inlineCode",{parentName:"p"},"project/plugins.sbt")," ",(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=g:io.stryker-mutator"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.stryker-mutator/stryker4s-core_2.12.svg?label=Maven%20Central&colorB=brightgreen",alt:"Maven Central"})),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'addSbtPlugin("io.stryker-mutator" % "sbt-stryker4s" % stryker4sVersion)\n')),(0,o.kt)("h2",{id:"2-configure"},"2 Configure"),(0,o.kt)("p",null,"Stryker4s will look for a ",(0,o.kt)("inlineCode",{parentName:"p"},"stryker4s.conf")," file in the root of your project. If found, it will use the configured values. All arguments in the configuration (and the file itself) are optional. You can find the possible values in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/stryker4s/configuration"},"configuration")," page."),(0,o.kt)("h2",{id:"3-lets-kill-some-mutants"},"3 Let's kill some mutants"),(0,o.kt)("p",null,"Run Stryker4s to mutation test your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sbt stryker\n")),(0,o.kt)("h2",{id:"4-having-trouble"},"4 Having trouble?"),(0,o.kt)("p",null,"Are you having troubles? Try enabling debug logging. For more information on how to enable debug logging visit our ",(0,o.kt)("a",{parentName:"p",href:"/docs/stryker4s/configuration#log-level-string"},"configuration page"),".\nIf you are having issues, please let us know by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker4s/issues/new"},"reporting an issue")," or talk to us on ",(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM"},"Slack"),"."))}c.isMDXComponent=!0}}]);