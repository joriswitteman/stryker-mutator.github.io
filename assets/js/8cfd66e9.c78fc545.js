"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[6241],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3810:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=(n(7294),n(3905));const i={title:"Create a plugin",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/create-a-plugin.md"},a=void 0,s={unversionedId:"stryker-js/guides/create-a-plugin",id:"stryker-js/guides/create-a-plugin",title:"Create a plugin",description:"You can extend Stryker with the following plugin kinds:",source:"@site/docs/stryker-js/guides/create-a-plugin.md",sourceDirName:"stryker-js/guides",slug:"/stryker-js/guides/create-a-plugin",permalink:"/docs/stryker-js/guides/create-a-plugin",draft:!1,editUrl:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/create-a-plugin.md",tags:[],version:"current",frontMatter:{title:"Create a plugin",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/create-a-plugin.md"},sidebar:"docs",previous:{title:"NodeJS",permalink:"/docs/stryker-js/guides/nodejs"},next:{title:"Introduction",permalink:"/docs/stryker-net/introduction"}},l={},u=[{value:"Creating a plugin",id:"creating-a-plugin",level:2},{value:"Declaring your plugin",id:"declaring-your-plugin",level:2},{value:"Test your plugin",id:"test-your-plugin",level:2},{value:"Dependency injection",id:"dependency-injection",level:2},{value:"High-level Stryker workings",id:"high-level-stryker-workings",level:2},{value:"Step 1: code instrumentation",id:"step-1-code-instrumentation",level:3},{value:"Step 2: dry run",id:"step-2-dry-run",level:3},{value:"Step 3: mutation testing",id:"step-3-mutation-testing",level:3},{value:"A note on <code>capabilities</code> and <code>mutantActivation</code>",id:"a-note-on-capabilities-and-mutantactivation",level:4},{value:"What&#39;s next?",id:"whats-next",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can extend Stryker with the following plugin kinds:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export enum PluginKind {\n  Checker = 'Checker',\n  TestRunner = 'TestRunner',\n  Reporter = 'Reporter',\n}\n")),(0,o.kt)("p",null,"They are loaded using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/stryker-js/configuration#plugins-string"},(0,o.kt)("inlineCode",{parentName:"a"},"plugins")," configuration option")),(0,o.kt)("p",null,"Each plugin has its own job to do. For inspiration, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/tree/master/packages"},"stryker monorepo"),"."),(0,o.kt)("h2",{id:"creating-a-plugin"},"Creating a plugin"),(0,o.kt)("p",null,"Creating plugins is best done with typescript, as that will help you immensely with type safety and intellisense."),(0,o.kt)("p",null,"We provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/api")," dependency on the types and basic helper functionality. You can install this as a dependency on your plugin. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @stryker-mutator/api\n")),(0,o.kt)("p",null,"Next, you need to create a class that ",(0,o.kt)("em",{parentName:"p"},"is the actual plugin"),". For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { TestRunner, DryRunResult, DryRunOptions, MutantRunOptions, MutantRunResult } from '@stryker-mutator/api/test-runner';\n\nclass FooTestRunner implements TestRunner {\n  public init(): Promise<void> {\n    // TODO: Implement or remove\n  }\n  \n  public dryRun(options: DryRunOptions): Promise<DryRunResult> {\n   // TODO: Implement\n  }\n  \n  public mutantRun(options: MutantRunOptions): Promise<MutantRunResult> {\n    // TODO: Implement\n  }\n  \n  public dispose(): Promise<void> {\n   // TODO: Implement or remove\n  }\n}\n")),(0,o.kt)("p",null,"In this example, a ",(0,o.kt)("inlineCode",{parentName:"p"},"TestRunner")," plugin is constructed. Each plugin kind has its own interface, so getting started with a skeleton implementation is straightforward."),(0,o.kt)("p",null,"After you've created your skeleton plugin, you're ready to declare it."),(0,o.kt)("h2",{id:"declaring-your-plugin"},"Declaring your plugin"),(0,o.kt)("p",null,"To make your plugin known to Stryker, you should export the declaration of it. You can either declare it as a factory method or a class.\nStryker will take care of creating your plugin implementation at the right moment in the Stryker lifecycle. "),(0,o.kt)("p",null,"A class example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// index.ts\nimport FooTestRunner from './foo-test-runner';\nimport { PluginKind, declareClassPlugin } from '@stryker-mutator/api/plugin';\n\nexport const strykerPlugins = [declareClassPlugin(PluginKind.TestRunner, 'foo', FooTestRunner)];\n")),(0,o.kt)("p",null,"A factory method example (useful when you want to inject additional values/classes into the DI system):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// index.ts\nimport { declareFactoryPlugin, PluginKind } from '@stryker-mutator/api/plugin';\nimport FooTestRunner from './foo-test-runner.js';\nimport FooTestRunnerConfigFileLoader from './foo-test-runner-config-file-loader.js';\nimport { configLoaderToken, processEnvToken } from './plugin-tokens.js';\n\nconst createFooTestRunner = createFooTestRunnerFactory();\n\nexport function createFooTestRunnerFactory() {\n  fooTestRunnerFactory.inject = tokens(commonTokens.injector);\n  function fooTestRunnerFactory(injector: Injector<PluginContext>): FooTestRunner {\n    return injector\n      .provideValue(processEnvToken, process.env)\n      .provideClass(configLoaderToken, FooTestRunnerConfigFileLoader)\n      .injectClass(FooTestRunner);\n  }\n  return fooTestRunnerFactory;\n}\n\nexport const strykerPlugins = [declareFactoryPlugin(PluginKind.TestRunner, 'foo', createFooTestRunner)];\n")),(0,o.kt)("p",null,"Now you're ready to test out your plugin!"),(0,o.kt)("h2",{id:"test-your-plugin"},"Test your plugin"),(0,o.kt)("p",null,"It is easy to test your plugin on a test project by loading it via the plugins section."),(0,o.kt)("p",null,"For example, when your test project resides next to your plugin implementation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  // name of your test runner\n  "testRunner": "foo", \n  // name of your checker\n  "checkers": ["bar"], \n  // name your reporter\n  "reporters": ["progress", "my-reporter"], \n  // load your test runner, reporter or checker plugin here\n  "plugins": ["@stryker-mutator/*", "../my-plugin"], \n  // useful for debugging your \n  "concurrency": 1, \n  // useful for debugging your test runner plugin\n  "testRunnerNodeArgs": ["--inspect"], \n  // useful for debugging your checker plugin\n  "checkerNodeArgs": ["--inspect"]\n};\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: Be sure you have compiled your TypeScript correctly.")),(0,o.kt)("p",null,"You can test it out with StrykerJS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx stryker run\n")),(0,o.kt)("p",null,"Test runner and checker plugins get created in their own child process. Therefore you cannot debug them directly. Instead you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"testRunnerNodeArgs: ['--inspect']")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"checkerNodeArgs: ['--inspect']")," to debug your test runner or respectively plugin respectively."),(0,o.kt)("p",null,"After you've verified that your plugin loads correctly, creating your integration tests is recommended, and not relying on Stryker to test it each time. This will allow you to develop your plugin faster."),(0,o.kt)("h2",{id:"dependency-injection"},"Dependency injection"),(0,o.kt)("p",null,"Stryker uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nicojs/typed-inject#readme"},"typed-inject")," as a ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@jansennico/advanced-typescript-type-safe-dependency-injection-873426e2cc96"},"dependency injection (DI) framework"),"."),(0,o.kt)("p",null,"It would help if you also used this as your DI framework inside the plugin."),(0,o.kt)("p",null,"See this example below. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { StrykerOptions } from '@stryker-mutator/api/core';\nimport { Logger } from '@stryker-mutator/api/logging';\nimport { commonTokens, PluginContext } from '@stryker-mutator/api/plugin';\nimport { TestRunner, DryRunResult, DryRunOptions, MutantRunOptions, MutantRunResult, TestRunnerCapabilities } from '@stryker-mutator/api/test-runner';\nimport * as pluginTokens from './plugin-tokens';\nimport FooTestRunnerConfigFileLoader from './foo-test-runner-config-file-loader';\n\nexport class FooTestRunner implements TestRunner {\n  public static inject = [\n    commonTokens.logger,\n    commonTokens.options,\n    pluginTokens.configLoader,\n    pluginTokens.processEnv\n  ] as const;\n  \n  constructor(\n    private readonly log: Logger,\n    private readonly options: StrykerOptions,\n    private readonly configLoader: FooTestRunnerConfigFileLoader,\n    private readonly processEnvRef: NodeJS.ProcessEnv,\n  ) { }\n\n  public capabilities(): TestRunnerCapabilities {\n    return { reloadEnvironment: false };\n  }\n\n  public init(): Promise<void> {\n    // TODO: Implement or remove\n  }\n  \n  public dryRun(options: DryRunOptions): Promise<DryRunResult> {\n   // TODO: Implement\n  }\n  \n  public mutantRun(options: MutantRunOptions): Promise<MutantRunResult> {\n    // TODO: Implement\n  }\n  \n  public dispose(): Promise<void> {\n   // TODO: Implement or remove\n  }\n}\n\n\nexport function fooTestRunnerFactory(injector: Injector<PluginContext>) {\n  return injector\n    .provideValue(pluginTokens.processEnv, process.env)\n    .provideClass(pluginTokens.configLoader, FooTestRunnerConfigFileLoader)\n    .injectClass(FooTestRunner);\n}\nfooTestRunnerFactory.inject = [commonTokens.injector] as const;\n")),(0,o.kt)("p",null,"In this example, you can see that some tokens are loaded from ",(0,o.kt)("inlineCode",{parentName:"p"},"commonTokens")," and some are loaded from ",(0,o.kt)("inlineCode",{parentName:"p"},"pluginTokens"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"commonTokens"),": These contain the tokens belonging to values Stryker itself provides."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pluginTokens"),": These are examples of tokens you can provide yourself in your plugin. The ",(0,o.kt)("inlineCode",{parentName:"li"},"fooTestRunnerFactory")," factory method is an example of where the tokens are provided.")),(0,o.kt)("p",null,"DI in this way is type-safe. When you declare your plugin, TypedInject will validate that you don't inject something that does not exist at runtime."),(0,o.kt)("h2",{id:"high-level-stryker-workings"},"High-level Stryker workings"),(0,o.kt)("p",null,"This chapter explains how StrykerJS works internally. It might be helpful for plugin creators that want to contribute or plan to create their test runner or checker plugin."),(0,o.kt)("h3",{id:"step-1-code-instrumentation"},"Step 1: code instrumentation"),(0,o.kt)("p",null,"When you run Stryker on your project, Stryker will first load the files to be mutated. Then, it will mutate those files, placing ",(0,o.kt)("em",{parentName:"p"},"all mutations")," into the code at once. But Stryker is smart about it."),(0,o.kt)("p",null,"This:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function add(a, b) {\n  return a + b;\n}\n")),(0,o.kt)("p",null,"Becomes (simplified):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function cover(id) {\n  if (global.__stryker__.activeTest) {\n    global.__stryker__.mutantCoverage.perTest[global.__stryker__.activeTest][id]++;\n  }\n  else {\n    global.__stryker__.mutantCoverage.static.[id]++;\n  }\n}\n\nfunction add(a, b) {\n  if (global.__stryker__.activeMutant === 0) {\n    // \ud83d\udc7e\n  } else {\n    cover(0);\n    return global.__stryker__.activeMutant === 1\n      ? a - b // \ud83d\udc7d\n      : (cover(1), a + b);\n  }\n}\n")),(0,o.kt)("p",null,"Placing all mutants into the source code is called 'mutant schemata' (or mutation switching). All mutants are in the code, but only one can be active at once. Mutant schemata allow for performance optimization like:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Compiling only once"),(0,o.kt)("li",{parentName:"ol"},"Running tests multiple times in quick succession without having to reload the test files.")),(0,o.kt)("p",null,"As you can see, we don't rely on Istanbul code coverage. Instead, we instrument the 'mutant coverage' directly into the source file."),(0,o.kt)("h3",{id:"step-2-dry-run"},"Step 2: dry run"),(0,o.kt)("p",null,"During this step, Stryker tries to run the code without activating any mutations. Tests should pass here. It validates that we didn't break anything and allows us to determine the code coverage per test (also some other things, but that's not important here)."),(0,o.kt)("p",null,"Stryker will instantiate the configured test runner plugin and call its ",(0,o.kt)("inlineCode",{parentName:"p"},"dryRun")," method. During the dry run, it's the test runner's job to hook into the test framework's ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeEach")," hook and switch the ",(0,o.kt)("inlineCode",{parentName:"p"},"global.__stryker__.activeTest"),". Doing so records ",(0,o.kt)("em",{parentName:"p"},"mutant coverage per test"),". Although this is technically optional (StrykerJS can work when a test runner doesn't report mutation coverage), it dramatically improves performance when supported."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"dryRun(options: DryRunOptions): Promise<DryRunResult> {\n}\n")),(0,o.kt)("p",null,"After the test runner performs the dry run, it reports a ",(0,o.kt)("inlineCode",{parentName:"p"},"DryRunResult")," object, which should contain the test results and the 'mutation coverage per test' object. "),(0,o.kt)("h3",{id:"step-3-mutation-testing"},"Step 3: mutation testing"),(0,o.kt)("p",null,"When the dry run is finished, StrykerJS makes a mutant run plan. This plan specifies precisely the tests to run for each mutant as well as the timeout value the test runner should use when running it. After those calculations, it is time for the mutation testing step."),(0,o.kt)("p",null,"During mutation testing, the test runner's ",(0,o.kt)("inlineCode",{parentName:"p"},"mutantRun")," method is called for each mutant:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"mutantRun(options: MutantRunOptions): Promise<MutantRunResult> {\n}\n")),(0,o.kt)("p",null,"A test runner should:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Load the test environment"),(0,o.kt)("li",{parentName:"ol"},"Activate the mutant "),(0,o.kt)("li",{parentName:"ol"},"Run the filtered tests"),(0,o.kt)("li",{parentName:"ol"},"Report back the mutant result: either ",(0,o.kt)("inlineCode",{parentName:"li"},"Killed"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Survived"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"Timeout"),". ")),(0,o.kt)("p",null,"This step is performed in parallel worker processes for speed benefits (depending on the configured ",(0,o.kt)("inlineCode",{parentName:"p"},"--concurrency"),"). "),(0,o.kt)("p",null,"After that, Stryker is done, and an excellent mutation test report gets generated."),(0,o.kt)("h4",{id:"a-note-on-capabilities-and-mutantactivation"},"A note on ",(0,o.kt)("inlineCode",{parentName:"h4"},"capabilities")," and ",(0,o.kt)("inlineCode",{parentName:"h4"},"mutantActivation")),(0,o.kt)("p",null,"Stryker relies on test runners to run mutants in quick succession, each time calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"mutantRun")," method. However, it might occur that Stryker needs to test a ",(0,o.kt)("a",{parentName:"p",href:"../../../mutation-testing-elements/static-mutants/"},"static mutant")," (when ",(0,o.kt)("inlineCode",{parentName:"p"},"--ignoreStatic")," isn't enabled). In order to solve this: "),(0,o.kt)("p",null,"This pseudo code should help illustrate what needs to happen"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"mutantRun(options: MutantRunOptions): Promise<MutantRunResult> {\n  if(options.mutantActivation === 'static') {\n    global.__stryker__.activeMutant = options.activeMutant.id;\n  }\n  if(options.reloadEnvironment || this.notLoadedTheEnvironmentYet){\n    this.loadTestFiles();\n  }\n  if(options.mutantActivation === 'runtime'){\n    global.__stryker__.activeMutant = options.activeMutant.id;\n  }\n  return runFilteredTests(options.testFilter);\n}\n")),(0,o.kt)("p",null,'As you can see, mutant activation can be either "static" or "runtime".'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Mutant activation static: the mutant should be active during the loading of the test environment"),(0,o.kt)("li",{parentName:"ol"},"Mutant activation runtime: The mutant MUST NOT be active during the loading of the environment, instead only when actually running the tests.")),(0,o.kt)("p",null,"And then there is also the ",(0,o.kt)("inlineCode",{parentName:"p"},"reloadEnvironment")," boolean."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Reload environment ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),": the source- and test files should be reloaded."),(0,o.kt)("li",{parentName:"ol"},"Reload environment ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),": the source- and test files don't need reloading, you can use them from the previous run.")),(0,o.kt)("p",null,"When your test runner executes tests in the same process ('in bound') and those tests are loaded using ESM modules, then a the test runner is unable to support this 'reloading' of those files. In that case, a test runner can implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"capabilities"),' method. This is the way to communicate to Stryker what the capabilities of your test runner are. At the moment of writing, there is only one capability that Stryker needs to know about: whether or not the test runner can "reload the environment".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"capabilities(): {\n  return { reloadEnvironment: false };\n}\n")),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"If you have a plugin that you think other users might be able to benefit from, or you need some help, please let us know on ",(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM"},"Slack"),". "),(0,o.kt)("p",null,"We're always looking to promote user-created plugins \ud83d\udc97"))}c.isMDXComponent=!0}}]);