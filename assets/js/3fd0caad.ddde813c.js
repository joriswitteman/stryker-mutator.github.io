"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[618],{3905:function(e,t,s){s.d(t,{Zo:function(){return d},kt:function(){return p}});var n=s(7294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=c(s),p=r,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||a;return s?n.createElement(m,i(i({ref:t},d),{},{components:s})):n.createElement(m,i({ref:t},d))}));function p(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=s.length,i=new Array(a);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<a;c++)i[c]=s[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,s)}h.displayName="MDXCreateElement"},3976:function(e,t,s){s.r(t),s.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return c}});var n=s(7462),r=(s(7294),s(3905));const a={title:"Testing frameworks",sidebar_position:50,custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/testing-frameworks.md"},i="Testing Frameworks undocumented",o={unversionedId:"stryker-net/technical-reference/testing-framework",id:"stryker-net/technical-reference/testing-framework",title:"Testing frameworks",description:"This document captures the discoveries made about the various testing frameworks while working on Stryker.",source:"@site/docs/stryker-net/technical-reference/testing-framework.md",sourceDirName:"stryker-net/technical-reference",slug:"/stryker-net/technical-reference/testing-framework",permalink:"/docs/stryker-net/technical-reference/testing-framework",draft:!1,editUrl:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/testing-frameworks.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Testing frameworks",sidebar_position:50,custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/testing-frameworks.md"},sidebar:"docs",previous:{title:"Project components",permalink:"/docs/stryker-net/technical-reference/project-components"},next:{title:"Classes",permalink:"/docs/stryker-net/technical-reference/fsharp/classes"}},l={},c=[{value:"Generalities",id:"generalities",level:2},{value:"Identification",id:"identification",level:2},{value:"xUnit",id:"xunit",level:2},{value:"Conflicting test cases",id:"conflicting-test-cases",level:3},{value:"Ignored tests",id:"ignored-tests",level:3},{value:"Theories",id:"theories",level:3},{value:"Static theories",id:"static-theories",level:4},{value:"Run time theories",id:"run-time-theories",level:4},{value:"Run sequence",id:"run-sequence",level:3},{value:"NUnit",id:"nunit",level:3},{value:"Conflicting test cases",id:"conflicting-test-cases-1",level:3},{value:"Ignored tests",id:"ignored-tests-1",level:3},{value:"TestCases with variable data",id:"testcases-with-variable-data",level:3},{value:"TestCase",id:"testcase",level:3},{value:"TestCaseSource",id:"testcasesource",level:3},{value:"Run Sequence",id:"run-sequence-1",level:3}],d={toc:c};function u(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testing-frameworks-undocumented"},"Testing Frameworks undocumented"),(0,r.kt)("p",null,"This document captures the discoveries made about the various testing frameworks while working on Stryker.\nThis can help understanding the design and logic of the mutation test classes.\nThis is a mandatory reading for anyone trying to understand and/or fix bugs related to coverage capture, analysis and testing phase."),(0,r.kt)("p",null,"For the sake of simplicity, this document confuses testing frameworks with their respective VsTest adapters.\nThis is because what matters to Stryker is how the framework/runner behaves when integrated with VsTests."),(0,r.kt)("h2",{id:"generalities"},"Generalities"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/vstest-docs/blob/master/RFCs/0006-DataCollection-Protocol.md"},"VsTest protocol")," is not\nrich enough to cover every test framework feature. Therefore, each framework makes their own decisions on how to handle\nsome of their specificities. That is the reason why we can observe different behavior and surprising results."),(0,r.kt)("p",null,"This affects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"how tests are discovered"),(0,r.kt)("li",{parentName:"ul"},"how tests are described/identified"),(0,r.kt)("li",{parentName:"ul"},"how tests are filtered"),(0,r.kt)("li",{parentName:"ul"},"how tests are executed"),(0,r.kt)("li",{parentName:"ul"},"how test results are reported")),(0,r.kt)("h2",{id:"identification"},"Identification"),(0,r.kt)("p",null,"By default, VsTest generates unique identifiers stored as ",(0,r.kt)("inlineCode",{parentName:"p"},"Guid"),". I do not know if test runners are able to provide\na specific implementation but in practice, this identifier is derived from the(test's) display's name hash code."),(0,r.kt)("p",null,"Note that this is a weaker authentication method than it may appear and there are several situations where several tests (from the coder\u2019s perspective) will appear as a single test case (from VsTest\u2019s point of view).\nTest frameworks adapters can deal with this with various strategies."),(0,r.kt)("h2",{id:"xunit"},"xUnit"),(0,r.kt)("h3",{id:"conflicting-test-cases"},"Conflicting test cases"),(0,r.kt)("p",null,"If multiple xUnit test cases have the same id (",(0,r.kt)("em",{parentName:"p"},"Guid"),"), xUnit will report each of those as test results for the same VsTest test case."),(0,r.kt)("h3",{id:"ignored-tests"},"Ignored tests"),(0,r.kt)("p",null,"Ignored test cases are fully ignored by xUnit runner and are not reported whatsoever."),(0,r.kt)("h3",{id:"theories"},"Theories"),(0,r.kt)("p",null,"xUnit's theory is a pattern where some test is executed multiple times with varying input data (like NUnit's TestCase).\nThese test methods accept one or more parameters and bear one of this attributes: ",(0,r.kt)("inlineCode",{parentName:"p"},"InlineData"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MemberData")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ClassData"),".\nThere are differences\nbetween compile time theories (data is fixed at build time) and run time theories (data is discovered at run time).\nFrom a VsTest perspective, the sub cases of the theory share a single display name."),(0,r.kt)("h4",{id:"static-theories"},"Static theories"),(0,r.kt)("p",null,"Static theories are seen and processed as different test cases, unless two (or more) test cases have the same parameters. Static theories used the ",(0,r.kt)("inlineCode",{parentName:"p"},"InlineData")),(0,r.kt)("h4",{id:"run-time-theories"},"Run time theories"),(0,r.kt)("p",null,"Run time theories may be discovered as one test, disregarding the number of underlying data set.\nDuring discovery phase, xUnit maps each data set to a test case; test case may be different (if they result in a new display name) or the same than an existing ne.\nif it can, those test cases are processed as usual; otherwise it will provide several results for the same test case."),(0,r.kt)("p",null,"It will then run all tests."),(0,r.kt)("h3",{id:"run-sequence"},"Run sequence"),(0,r.kt)("p",null,"Overall, xUnit first discovers every tests at (test) startup. If a list of tests is provided, xUnit filters the discovered lists,\ndisacring those which are not part of the provided list. Note that there will be no report for requested tests that have not been\nfound during discovery.\nHere is a summarized timeline of tests execution:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"TestSession start event\nxUnit discovers test\n   xUnit discovers theories\n     xUnit enumerates data source (for tests)\n...\nTestCase start event\n   xUnit runs test with first set of data\n   xUnit runs test with second set of data\n   ...\n   xUnit runs test with last set of data\n\n   xUnit reports first test results\nTestCase end event\n   xUnit reports second test result\n   ...\n   xUnit reports last test result\nTestCase start event\n   ...\nTestSession end event\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Remark"),": in this situation, each test result includes the TOTAL execution time (i.e. the time to test every data set) so one should not sum them."),(0,r.kt)("p",null,"The difficulty here is that a lot happens between ",(0,r.kt)("inlineCode",{parentName:"p"},"testcase end")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"testcase start")," events.\nAt coverage capture it is a problem, because there is a risk of spilling coverage information to the next tests: Stryker\ncan only capture coverage information on ",(0,r.kt)("inlineCode",{parentName:"p"},"testcase end")," events, and only in association with the current running test.\nSo, every mutants covered between ",(0,r.kt)("inlineCode",{parentName:"p"},"testcase end")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"testcase start")," will be associated with the ",(0,r.kt)("strong",{parentName:"p"},"next")," test."),(0,r.kt)("p",null,"And during execution phase, it is impossible to predict when the test will really be over, so it is difficult to\nestablish if the test was successful.  "),(0,r.kt)("p",null,"Also, if a mutation ends up changing a test case name - typically by changing the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"ToString()"),", it will change the\ntest identifier so this testcase will only run when running ",(0,r.kt)("strong",{parentName:"p"},"all tests")," and can no longer be executed in isolation, as\nStryker can't anticipate the test name."),(0,r.kt)("h3",{id:"nunit"},"NUnit"),(0,r.kt)("h3",{id:"conflicting-test-cases-1"},"Conflicting test cases"),(0,r.kt)("p",null,"If multiple NUnit test cases have the same id (",(0,r.kt)("em",{parentName:"p"},"Guid"),"), NUnit will report them as a single test case, and will merge all associated results in a single test result.\nI.e. multiple NUnit tests will be reported as one test with one result. "),(0,r.kt)("h3",{id:"ignored-tests-1"},"Ignored tests"),(0,r.kt)("p",null,"Ignored test cases are discovered as normal, but the tests are not run, events are not raised for data collectors and they are reported as ",(0,r.kt)("inlineCode",{parentName:"p"},"Skipped"),"."),(0,r.kt)("h3",{id:"testcases-with-variable-data"},"TestCases with variable data"),(0,r.kt)("p",null,"NUnit's TestCases is a pattern where some test is executed multiple times with varying input data (like xUnit's Theory).\nThese test methods accept one or more parameters and bear one of these attributes (on top of the ",(0,r.kt)("inlineCode",{parentName:"p"},"[Test]")," attribute):\n",(0,r.kt)("inlineCode",{parentName:"p"},"TestCase")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"TestCaseSource"),"."),(0,r.kt)("p",null,"There are some differences\nbetween ",(0,r.kt)("inlineCode",{parentName:"p"},"TestCase")," (data is fixed at build time) and ",(0,r.kt)("inlineCode",{parentName:"p"},"TestCaseSource")," (data is discovered at run time)."),(0,r.kt)("h3",{id:"testcase"},"TestCase"),(0,r.kt)("p",null,"Basically, each ",(0,r.kt)("inlineCode",{parentName:"p"},"TestCase")," is considered to be a specific test, and NUnit generates a name for each of those using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"ToString()")," method for each parameter (e.g: ",(0,r.kt)("inlineCode",{parentName:"p"},"Test(1,2)")," for parameter 1 and 2).\nThen each test is run separately and a test result is provided for each test.\n",(0,r.kt)("strong",{parentName:"p"},"Caveat"),": if the ",(0,r.kt)("inlineCode",{parentName:"p"},"ToString()")," method is not overridden, multiple test cases will have the same name\n(eg: ",(0,r.kt)("inlineCode",{parentName:"p"},"Test(MyClass"),"). Then, there will be no way to distinguish between tests as well as properly associate test\nresults."),(0,r.kt)("h3",{id:"testcasesource"},"TestCaseSource"),(0,r.kt)("p",null,"Each test case is reported during the discovery phase, and NUnit generates a name for each of those using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"ToString()")," method for each parameter (e.g: ",(0,r.kt)("inlineCode",{parentName:"p"},"Test(1,2)")," for parameter 1 and 2).\nThen each test is run separately and a test result is provided for each test.\n",(0,r.kt)("strong",{parentName:"p"},"Caveat"),": if the ",(0,r.kt)("inlineCode",{parentName:"p"},"ToString()")," method is not overridden, multiple test cases will have the same name\n(eg: ",(0,r.kt)("inlineCode",{parentName:"p"},"Test(MyClass"),"). Then, there will be no way to distinguish between tests as well as properly associate test\nresults.\nWhen this happens, NUnit will run the test against all data in the set and return a single result (failed if at least one test failed).\nThe drawback is that you can't identify which data set failed the test."),(0,r.kt)("h3",{id:"run-sequence-1"},"Run Sequence"),(0,r.kt)("p",null,"Here is a summarized timeline of tests execution:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NUnit runner calls the TestCaseSource and gets every test case.\nTestSession start event\n ...\n   NUnit discovers test\n     NUnit enumerates data source (for tests)\n...\n  \nTestCase start event\n   NUnit run test with first set of data\n   NUnit run test with second set of data\n   ...\n   NUnit reports test result\nTestCase end event\n   ...\n   NUnit reports last test result\nTestCase end event\nTestCase start event\n   ...\n")),(0,r.kt)("p",null,"The problems for Stryker are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If test cases have the same name, we cannot distinguish between test cases, so it must be handled as a single test. This ",(0,r.kt)("em",{parentName:"li"},"single test")," reports multiple test cases so Stryker needs to wait either for one failure or for each testcase\nto succeed to establish the correct status. The good news is that discovery should provide the number of results to wait for."),(0,r.kt)("li",{parentName:"ol"},"Every mutation encountered by the ",(0,r.kt)("inlineCode",{parentName:"li"},"TestCaseSource")," method will be reported as covered by the first test case,\nwhereas it is likely these mutations would need to be adequately associated with their relative test case."),(0,r.kt)("li",{parentName:"ol"},"TestCaseSource is called ",(0,r.kt)("strong",{parentName:"li"},"before")," Testcase start event which means Stryker may set the active mutation too late.\nThe only way to handle this is to force any concerned mutants to run in dedicated test sessions.")))}u.isMDXComponent=!0}}]);