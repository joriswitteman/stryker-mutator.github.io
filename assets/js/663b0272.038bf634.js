"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[9075],{3905:function(t,e,o){o.d(e,{Zo:function(){return c},kt:function(){return h}});var n=o(7294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function u(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var s=n.createContext({}),l=function(t){var e=n.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},c=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),g=l(o),h=r,m=g["".concat(s,".").concat(h)]||g[h]||d[h]||a;return o?n.createElement(m,i(i({ref:e},c),{},{components:o})):n.createElement(m,i({ref:e},c))}));function h(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,i=new Array(a);i[0]=g;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},8479:function(t,e,o){o.r(e),o.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});var n=o(7462),r=(o(7294),o(3905));const a={slug:"introduction-to-mutation-testing",title:"Introduction to mutation testing",author:"Simon de Lang",author_title:"Stryker Team",author_url:"https://github.com/simondel",author_image_url:"https://avatars1.githubusercontent.com/u/4221997?s=460&u=d09f7c27690d66764ff2f2ebb6d9f8d5431ad9e3&v=4",tags:["stryker-js"]},i=void 0,u={permalink:"/blog/introduction-to-mutation-testing",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2017-01-17-introduction-to-mutation-testing.md",source:"@site/blog/2017-01-17-introduction-to-mutation-testing.md",title:"Introduction to mutation testing",description:"Writing unit tests can be hard. Even for an easy example such as a calculator app.",date:"2017-01-17T00:00:00.000Z",formattedDate:"January 17, 2017",tags:[{label:"stryker-js",permalink:"/blog/tags/stryker-js"}],readingTime:4.505,hasTruncateMarker:!0,authors:[{name:"Simon de Lang",title:"Stryker Team",url:"https://github.com/simondel",imageURL:"https://avatars1.githubusercontent.com/u/4221997?s=460&u=d09f7c27690d66764ff2f2ebb6d9f8d5431ad9e3&v=4"}],frontMatter:{slug:"introduction-to-mutation-testing",title:"Introduction to mutation testing",author:"Simon de Lang",author_title:"Stryker Team",author_url:"https://github.com/simondel",author_image_url:"https://avatars1.githubusercontent.com/u/4221997?s=460&u=d09f7c27690d66764ff2f2ebb6d9f8d5431ad9e3&v=4",tags:["stryker-js"]},prevItem:{title:"Stryker weekend",permalink:"/blog/stryker-weekend"},nextItem:{title:"Happy new Stryker!",permalink:"/blog/happy-new-stryker"}},s={authorsImageUrls:[void 0]},l=[{value:"The code coverage problem",id:"the-code-coverage-problem",level:2},{value:"Mutation testing",id:"mutation-testing",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Setting goals",id:"setting-goals",level:2}],c={toc:l};function d(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Writing unit tests can be hard. Even for an easy example such as a calculator app.\nThere are unlimited combinations of inputs for a calculator and you're not going to test every single one. So when are you done testing?"),(0,r.kt)("p",null,"Say you're building an online casino, users can only enter the casino when they're over 18. So you write the following piece of code to check if someone is allowed to use the website:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function isUserOldEnough(user) {\n  return user.age >= 18;\n}\n")),(0,r.kt)("p",null,"Easy right? So what inputs do you use to test? Perhaps you would pick your own age (25 for example) if you're over 18 and pick something below 18 (16 or so) to check the other outcome.\nYou run your code coverage tool on the code and it turns out your code is 100% covered. Great, we're done testing!"),(0,r.kt)("h2",{id:"the-code-coverage-problem"},"The code coverage problem"),(0,r.kt)("p",null,"I used to think that code coverage tells you which code is tested. But I realized I was wrong. Code coverage doesn\u2019t tell you which code is tested, it only tells you which code is being executed during testing. There is an important difference here. You could write one test which hits 100 lines of code, but that doesn\u2019t mean that all 100 lines of code work as you would expect. If you would write 10 tests for that piece of code, you may still have the same code coverage. You could even write tests without assertions to boost your code coverage."),(0,r.kt)("p",null,"And how do you know that enough is enough? Some teams even have code coverage goals that they have to hit (100% anyone?). As if that would make you write better tests. Sure, it forces you to write tests, but it doesn\u2019t promise that they\u2019re good tests. It even encourages bad behavior for some people. During one of my projects as a student, our school decided a little competition would be fun. The team with the highest code coverage at the end of the project would win a small prize. It didn\u2019t take long to find out that tests could be written without assertions to easily boost their code coverage (of course, I would never do that ;))."),(0,r.kt)("p",null,"The only way to know that a test actually ",(0,r.kt)("em",{parentName:"p"},"works")," is when it fails when you make a code change."),(0,r.kt)("h2",{id:"mutation-testing"},"Mutation testing"),(0,r.kt)("p",null,"You could go through your code base and make changes to see if certain tests fail. However, this process is time consuming. You're much better off using a mutation testing framework. A mutation testing framework will look through your code to see where it can introduce bugs, which we will call ",(0,r.kt)("em",{parentName:"p"},"mutants")," from now on."),(0,r.kt)("p",null,"Say you have the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function isUserOldEnough(user) {\n  return user.age >= 18;\n}\n")),(0,r.kt)("p",null,"A mutation testing framework will find the return statement and decide to change it in a number of ways:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"/* 1 */ return user.age > 18;\n/* 2 */ return user.age < 18;\n/* 3 */ return false;\n/* 4 */ return true;\n")),(0,r.kt)("p",null,"Each one of those mutants should make a test fail. After the mutants have been found, they are applied one by one and your tests will be executed. If at least one of your tests fail, we say the mutant is ",(0,r.kt)("em",{parentName:"p"},"killed"),". If no tests fail, it ",(0,r.kt)("em",{parentName:"p"},"survived"),". The better your tests, the less mutants survive. The first mutant would have survived if we had a test with a user aged 16 and 25, since we didn't test the boundary."),(0,r.kt)("p",null,"With mutation testing you\u2019re testing your tests."),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"The best thing to do if you\u2019re not already using mutation testing is to just try it once. Most languages have a mutation testing framework.\nJust take a look on GitHub and you will probably find one for the language you use."),(0,r.kt)("p",null,"If you\u2019re using JavaScript, I would suggest looking at Stryker. It has a great ",(0,r.kt)("a",{parentName:"p",href:"http://stryker-mutator.github.io/quickstart.html"},"quickstart page")," to get you up and running."),(0,r.kt)("p",null,"If you've first used a mutation testing framework, you may find that there are a lot of mutations that survive, but that\u2019s ok!"),(0,r.kt)("h2",{id:"setting-goals"},"Setting goals"),(0,r.kt)("p",null,"After you\u2019ve used a mutation framework a couple of times, you may think about setting a mutation testing goal,\njust like with your code coverage goal. I sometimes get asked what a good goal is for mutation testing.\nIt can be a difficult question to answer and I honestly don\u2019t know what a good goal is for your application."),(0,r.kt)("p",null,"Mutation testing frameworks make very different changes depending on the language or even framework you\u2019re using.\nStryker could assign any value to any variable since it tests JavaScript. That doesn\u2019t work for a framework like ",(0,r.kt)("a",{parentName:"p",href:"http://pitest.org/"},"PIT"),",\nwhich can be used to mutation test Java code. This means that your score could differ a lot depending on the language and framework you use.\nThe goal you want to set may also differ depending on the type of application that you're writing. A banking application may require a higher mutation score than some side project."),(0,r.kt)("p",null,"I would suggest running a mutation testing framework and set a higher goal than your current score.\nI would not advise to make 100% mutation coverage your goal though. The most important thing is that you write good tests and mutation testing can help you achieve that.\nSo if you\u2019re going to set any goal, make writing good tests your goal."))}d.isMDXComponent=!0}}]);