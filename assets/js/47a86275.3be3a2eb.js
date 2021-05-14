(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[4972],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},477:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var n=r(2122),a=(r(7294),r(3905));const o={sidebar_label:"Contributing",title:"Contribute to Stryker4s",custom_edit_url:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/contributing.md",sidebar_position:3},i={unversionedId:"stryker4s/contributing",id:"stryker4s/contributing",isDocsHomePage:!1,title:"Contribute to Stryker4s",description:"This is the contribution guide for Stryker4s. Great to have you here! Here are a few ways you can help to make this project better.",source:"@site/docs/stryker4s/contributing.md",sourceDirName:"stryker4s",slug:"/stryker4s/contributing",permalink:"/docs/stryker4s/contributing",editUrl:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/contributing.md",version:"current",sidebar_label:"Contributing",sidebarPosition:3,frontMatter:{sidebar_label:"Contributing",title:"Contribute to Stryker4s",custom_edit_url:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/contributing.md",sidebar_position:3},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/stryker4s/configuration"},next:{title:"Versioning strategy",permalink:"/docs/stryker4s/versioning"}},s=[{value:"Getting started",id:"getting-started",children:[]},{value:"Adding a new feature",id:"adding-a-new-feature",children:[]},{value:"Running Stryker4s on Stryker4s",id:"running-stryker4s-on-stryker4s",children:[]},{value:"Learning resources",id:"learning-resources",children:[]},{value:"Mutation switching",id:"mutation-switching",children:[]},{value:"Community",id:"community",children:[]}],l={toc:s};function u({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is the contribution guide for Stryker4s. Great to have you here! Here are a few ways you can help to make this project better."),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"To get started with developing Stryker4s, you'll need a couple of tools:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://openjdk.java.net/"},"Java JDK"),", a recent version like 11 is recommended"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.scala-sbt.org/"},"sbt"),", to build and test the project")),(0,a.kt)("p",null,"Once these tools are installed you can open the project with ",(0,a.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/"},"IntelliJ"),", or ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code")," combined with ",(0,a.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"Metals"),"."),(0,a.kt)("p",null,"If you use VS Code with Metals, you can also install the ",(0,a.kt)("a",{parentName:"p",href:"https://scalacenter.github.io/bloop/"},"Bloop CLI")," for easier compiling and testing via the command-line."),(0,a.kt)("p",null,"If you are have issues with setup, or want to keep a clean environment you can also use the ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/containers"},"VS Code Remote Containers")," feature to develop in a clean reproducible Docker container. All you need for it is VS Code, the ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers"},"Remote Containers extension")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker"),". Then run 'Remote-Containers: Open Repository in Container...' and enter ",(0,a.kt)("inlineCode",{parentName:"p"},"stryker-mutator/stryker4s")," as the repository. The devcontainer also has the ",(0,a.kt)("a",{parentName:"p",href:"https://scalacenter.github.io/bloop/"},"Bloop")," and ",(0,a.kt)("a",{parentName:"p",href:"https://get-coursier.io/"},"Coursier")," CLI tools installed."),(0,a.kt)("h2",{id:"adding-a-new-feature"},"Adding a new feature"),(0,a.kt)("p",null,"New features are welcome! Both as ideas or in the form of a pull request."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Please ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker4s/issues/new"},"create an issue")," with your idea first or let us know via ",(0,a.kt)("a",{parentName:"li",href:"https://gitter.im/stryker-mutator/stryker4s"},"Gitter"),"."),(0,a.kt)("li",{parentName:"ol"},"Create a fork on your GitHub account."),(0,a.kt)("li",{parentName:"ol"},"When writing your code, please conform the existing coding style. We use Scalafmt as a code formatter. You can format your code by running ",(0,a.kt)("inlineCode",{parentName:"li"},"./bin/scalafmt"),", or with editor-specific settings. It also helps to take a moment to review the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.scala-lang.org/style/"},"Scala style guide"),"."),(0,a.kt)("li",{parentName:"ol"},"Please create or edit unit/integration tests for any changed or added code."),(0,a.kt)("li",{parentName:"ol"},"Confirm everything still works by running ",(0,a.kt)("inlineCode",{parentName:"li"},"sbt test")," (or let the CI do the work for you)."),(0,a.kt)("li",{parentName:"ol"},"Submit the pull request!")),(0,a.kt)("p",null,"Don't hesitate or get discouraged to get in touch! We are always happy to help you if you get stuck or have a question. Even if you don't finish something it can still be a good contribution."),(0,a.kt)("h2",{id:"running-stryker4s-on-stryker4s"},"Running Stryker4s on Stryker4s"),(0,a.kt)("p",null,"We support mutation testing Stryker4s with Stryker4s! The easiest way is to follow our guide in the root readme. If you want to test any local changes, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"sbt publishPluginLocal")," to publish a test snapshot as ",(0,a.kt)("inlineCode",{parentName:"li"},"0.0.0-TEST-SNAPSHOT")," version to your local ivy repository."),(0,a.kt)("li",{parentName:"ol"},"Add the sbt plugin to ",(0,a.kt)("inlineCode",{parentName:"li"},"project/plugins.sbt")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"0.0.0-TEST-SNAPSHOT")," as the version number.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"If the project you are running against is not a 2.13 project, publish ",(0,a.kt)("inlineCode",{parentName:"li"},"stryker4s-api")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"stryker4s-sbt-testrunner")," manually for your appropriate version (.e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},'sbt "stryker4s-api2_11/publishLocal; stryker4s-sbt-testrunner2_11/publishLocal"'),")"))),(0,a.kt)("li",{parentName:"ol"},"Run stryker4s as described in the readme.")),(0,a.kt)("h2",{id:"learning-resources"},"Learning resources"),(0,a.kt)("p",null,"Here are some resources you can use if you are new to mutation testing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stryker-mutator.io/"},"What is mutation testing?")," (and the rest of the website). On the Stryker mutator website."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.guru99.com/mutation-testing.html"},"Mutation Testing: Complete Guide - Guru99")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://portal.klewel.com/watch/webcast/scala-days-2019/talk/18/"},"Scala Days 2019 - Daniel Westheide - Testing in the postapocalyptic future")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/ba_86FlRiKg"},"TechDays 2017 - Simon de Lang - Using Mutation Testing to Improve your JavaScript Tests"))),(0,a.kt)("h2",{id:"mutation-switching"},"Mutation switching"),(0,a.kt)("p",null,"Stryker4s uses a technique called 'mutation switching' to perform mutations. It does this by adding all mutations into a single pattern match, and activating the correct mutation via an environment variable. This would change the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"def isAdult(person: Person) = {\n  person.age >= 18\n}\n")),(0,a.kt)("p",null,"To:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'def isAdult(person: Person) = {\n  sys.env.get("ACTIVE_MUTATION") match {\n    case Some("1") => person.age > 18\n    case Some("2") => person.age < 18\n    case Some("3") => person.age == 18\n    case _         => person.age >= 18 // Original\n  }\n}\n')),(0,a.kt)("p",null,"The effect is the same as compiling each mutation seperately, but instead we only have to do it once. This is a big performance improvement, but does mean we have to be more careful about compile errors. Read more about mutation switching on ",(0,a.kt)("a",{parentName:"p",href:"https://stryker-mutator.io/blog/2018-10-6/mutation-switching"},"our blog")),(0,a.kt)("h2",{id:"community"},"Community"),(0,a.kt)("p",null,"Want to help in some other ways? Great! Here are some things you could do:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Evangelize mutation testing",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Mutation testing is still relatively new, especially in Scala. Please help us get the word out there!"),(0,a.kt)("li",{parentName:"ul"},"Share your stories in blog posts and on social media. And please let us know about it!"))),(0,a.kt)("li",{parentName:"ul"},"Did you use Stryker4s? Your feedback is very valuable to us. Both good and bad! Please ",(0,a.kt)("a",{parentName:"li",href:"https://gitter.im/stryker-mutator/stryker4s"},"contact us")," to let us know what you think.")))}u.isMDXComponent=!0}}]);