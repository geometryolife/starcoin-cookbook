"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[1189],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2276:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=n(3117),i=(n(7294),n(3905));const o={},r="User Guide of Move Package Manager",s={unversionedId:"move/move-package-manager",id:"move/move-package-manager",title:"User Guide of Move Package Manager",description:"Move Package Manager(mpm) is a command line tool to develop move projects, like Cargo for Rust, or NPM for NodeJS.",source:"@site/docs/03-move/05-move-package-manager.md",sourceDirName:"03-move",slug:"/move/move-package-manager",permalink:"/starcoin-cookbook/docs/move/move-package-manager",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/03-move/05-move-package-manager.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Understanding abilities",permalink:"/starcoin-cookbook/docs/move/understanding-ability"},next:{title:"Starcoin Move Framework",permalink:"/starcoin-cookbook/docs/move/starcoin-framework/"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Overview",id:"overview",level:3},{value:"Spec Test",id:"spec-test",level:3},{value:"Integration test Directives",id:"integration-test-directives",level:3},{value:"Directive - init",id:"directive---init",level:4},{value:"Directive - block",id:"directive---block",level:4},{value:"Directive - faucet",id:"directive---faucet",level:4},{value:"Directive - publish",id:"directive---publish",level:4},{value:"Directive - run",id:"directive---run",level:4},{value:"Directive - view",id:"directive---view",level:4},{value:"Directive - print-bytecode",id:"directive---print-bytecode",level:4},{value:"Installation Test Expectation",id:"installation-test-expectation",level:3},{value:"More example",id:"more-example",level:2},{value:"Questions",id:"questions",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"user-guide-of-move-package-manager"},"User Guide of Move Package Manager"),(0,i.kt)("p",null,"Move Package Manager(mpm) is a command line tool to develop move projects, like Cargo for Rust, or NPM for NodeJS."),(0,i.kt)("p",null,"It integrates the latest move pacakge system introduced in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/move-language/move/tree/main/language/tools/move-package"},"move-language/move"),",\nand reuse most functionality of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/move-language/move/tree/main/language/tools/move-cli"},"move-cli")," by diem.\n",(0,i.kt)("strong",{parentName:"p"},"Before dive into this tutorial, please read the ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/move-language/move/blob/main/language/documentation/book/src/packages.md"},"pacakge section")," of move book first."),"\nUnderstanding how move package work is a prerequest."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Download from the release page of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/starcoinorg/starcoin"},"starcoiorg/starcoin"),"."),(0,i.kt)("p",null,"Or use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cargo install --git https://github.com/starcoinorg/starcoin move-package-manager --bin mpm\n")),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"joe@MX:~$ mpm\nmove-package-manager 1.11.7-rc\nStarcoin Core Dev <dev@starcoin.org>\nCLI frontend for the Move compiler and VM\n\nUSAGE:\n    mpm [OPTIONS] <SUBCOMMAND>\n\nOPTIONS:\n        --abi                          Generate ABIs for packages\n    -d, --dev                          Compile in 'dev' mode. The 'dev-addresses' and 'dev-\n                                       dependencies' fields will be used if this flag is set. This\n                                       flag is useful for development of packages that expose named\n                                       addresses that are not set to a specific value\n        --doc                          Generate documentation for packages\n        --force                        Force recompilation of all packages\n    -h, --help                         Print help information\n        --install-dir <INSTALL_DIR>    Installation directory for compiled artifacts. Defaults to\n                                       current directory\n    -p, --path <PACKAGE_PATH>          Path to a package which the command should be run with\n                                       respect to [default: .]\n        --test                         Compile in 'test' mode. The 'dev-addresses' and 'dev-\n                                       dependencies' fields will be used along with any code in the\n                                       'test' directory\n    -v                                 Print additional diagnostics if available\n    -V, --version                      Print version information\n\nSUBCOMMANDS:\n    check-compatibility    Check compatibility of modules comparing with remote chain chate\n    experimental           (Experimental) Run static analyses on Move source or bytecode\n    help                   Print this message or the help of the given subcommand(s)\n    integration-test       Run integration tests in tests dir\n    package                Execute a package command. Executed in the current directory or the\n                               closest containing Move package\n    release                Release the package\n    sandbox                Execute a sandbox command\n")),(0,i.kt)("p",null,"mpm is a convenient wrapper and superset of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/move-language/move/tree/main/language/tools/move-cli"},"move-cli"),"."),(0,i.kt)("p",null,"What applies to move-cli is also applied to mpm."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"So, We recommend you to go through the (",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/move-language/move/tree/main/language/documentation/tutorial"},"https://github.com/move-language/move/tree/main/language/documentation/tutorial"),") written by move-language.")),(0,i.kt)("p",null,"In that tutorial, you can add an alias ",(0,i.kt)("inlineCode",{parentName:"p"},'alias move="mpm"')," so that you can invoke move as it is."),(0,i.kt)("p",null,"You can check that it is working by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"move package -h\n\nmpm-package 0.1.0\nExecute a package command. Executed in the current directory or the closest containing Move package\n\nUSAGE:\n    mpm package [FLAGS] [OPTIONS] <SUBCOMMAND>\n\nFLAGS:\n    -d, --dev        Compile in 'dev' mode. The 'dev-addresses' and 'dev-dependencies' fields will be used if this flag\n                     is set. This flag is useful for development of packages that expose named addresses that are not\n                     set to a specific value\n        --force      Force recompilation of all packages\n        --abi        Generate ABIs for packages\n        --doc        Generate documentation for packages\n    -h, --help       Prints help information\n        --test       Compile in 'test' mode. The 'dev-addresses' and 'dev-dependencies' fields will be used along with\n                     any code in the 'test' directory\n    -V, --version    Prints version information\n    -v               Print additional diagnostics if available\n\nOPTIONS:\n        --install-dir <install-dir>    Installation directory for compiled artifacts. Defaults to current directory\n    -p, --path <package-path>          Path to a package which the command should be run with respect to [default: .]\n\nSUBCOMMANDS:\n    build          Build the package at `path`. If no path is provided defaults to current directory\n    coverage       Inspect test coverage for this package. A previous test run with the `--coverage` flag must have\n                   previously been run\n    disassemble    Disassemble the Move bytecode pointed to\n    errmap         Generate error map for the package and its dependencies at `path` for use by the Move explanation\n                   tool\n    help           Prints this message or the help of the given subcommand(s)\n    info           Print address information\n    new            Create a new Move package with name `name` at `path`. If `path` is not provided the package will\n                   be created in the directory `name`\n    prove          Run the Move Prover on the package at `path`. If no path is provided defaults to current\n                   directory. Use `.. prove .. -- <options>` to pass on options to the prover\n    test           Run Move unit tests in this package\n")),(0,i.kt)("h3",{id:"spec-test"},"Spec Test"),(0,i.kt)("p",null,"Based on move-cli, mpm add the support of integration test to test your move project in the whole."),(0,i.kt)("p",null,"It can simulates:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"account initialization."),(0,i.kt)("li",{parentName:"ul"},"block generation."),(0,i.kt)("li",{parentName:"ul"},"module publishing."),(0,i.kt)("li",{parentName:"ul"},"execute scripts or script function.")),(0,i.kt)("p",null,"All actions are wrapped into transactions."),(0,i.kt)("p",null,"All integration test files should be in ",(0,i.kt)("inlineCode",{parentName:"p"},"integration-tests")," dir under the package root path."),(0,i.kt)("p",null,"spec test file contains test directives seperated by empty newlines."),(0,i.kt)("p",null,"directives works like a command line, you provide command name and command arguments,\nand move pacakge manager executes the directives like OS executes cli commands."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ mpm integration-test --help\nmpm-integration-test\nRun integration tests in tests dir\n\nUSAGE:\n    mpm integration-test [OPTIONS] [FILTER]\n\nARGS:\n    <FILTER>    The FILTER string is tested against the name of all tests, and only those tests\n                whose names contain the filter are run\n\nOPTIONS:\n        --abi\n            Generate ABIs for packages\n\n    -d, --dev\n            Compile in 'dev' mode. The 'dev-addresses' and 'dev-dependencies' fields will be used if\n            this flag is set. This flag is useful for development of packages that expose named\n            addresses that are not set to a specific value\n\n        --doc\n            Generate documentation for packages\n\n        --exact\n            Exactly match filters rather than by substring\n\n        --force\n            Force recompilation of all packages\n\n        --format <FORMAT>\n            Configure formatting of output: pretty = Print verbose output; terse = Display one\n            character per test; (json is unsupported, exists for compatibility with the default test\n            harness) [default: pretty] [possible values: pretty, terse]\n\n    -h, --help\n            Print help information\n\n        --install-dir <INSTALL_DIR>\n            Installation directory for compiled artifacts. Defaults to current directory\n\n        --list\n            List all tests\n\n    -p, --path <PACKAGE_PATH>\n            Path to a package which the command should be run with respect to [default: .]\n\n    -q, --quiet\n            Output minimal information\n\n        --test\n            Compile in 'test' mode. The 'dev-addresses' and 'dev-dependencies' fields will be used\n            along with any code in the 'test' directory\n\n        --test-threads <TEST_THREADS>\n            Number of threads used for running tests in parallel [env: RUST_TEST_THREADS=] [default:\n            32]\n\n        --ub\n            update test baseline\n\n    -v\n            Print additional diagnostics if available@\n")),(0,i.kt)("h3",{id:"integration-test-directives"},"Integration test Directives"),(0,i.kt)("h4",{id:"directive---init"},"Directive - init"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"task-init 0.1.0\n\nUSAGE:\n    task init [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --block-number <block-number>       block number to read state from. default to latest block number\n        --addresses <named-addresses>...\n    -n, --network <network>                 genesis with the network\n        --public-keys <public-keys>...\n        --rpc <rpc>                         use remote starcoin rpc as initial state\n")),(0,i.kt)("p",null,"Directive ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," can declare the initial state of you spec test.\nYou can either start from a fresh blockchain state by providing arg ",(0,i.kt)("inlineCode",{parentName:"p"},"-n test"),",\nor fork from a remote state snapshot like ",(0,i.kt)("inlineCode",{parentName:"p"},"--rpc http://main.seed.starcoin.org:9850 --block-number 100000"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"--address <named-addresses>")," can be used to declare additional named addressed which will be used in the spec test later."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"//# init -n dev\n\n//# init -n test --addresses alice=0xAA\n\n//# init -n barnard\n\n//# init --rpc http://main.seed.starcoin.org:9850 --block-number 100000\n\n")),(0,i.kt)("h4",{id:"directive---block"},"Directive - block"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"task-block 0.1.0\n\nUSAGE:\n    task block [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --author <author>\n        --number <number>\n        --timestamp <timestamp>\n        --uncles <uncles>\n")),(0,i.kt)("p",null,"Directive ",(0,i.kt)("inlineCode",{parentName:"p"},"block")," start a new block."),(0,i.kt)("p",null,"Every directives between this block directive and next block directive are running in this block.\nYou can pass custom ",(0,i.kt)("inlineCode",{parentName:"p"},"--author"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--timestamp"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--uncles")," to fit your need."),(0,i.kt)("p",null,"If no block directive specified, transactions will run on default block whose block number is the next block number of initial state.\nIf you fork from a remote state of block number ",(0,i.kt)("inlineCode",{parentName:"p"},"h"),", then the next block's number is ",(0,i.kt)("inlineCode",{parentName:"p"},"h+1"),"."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"//# block\n\n//# block --author alice\n\n//# block --timestamp 100000000\n\n//# block --uncles 10\n")),(0,i.kt)("h4",{id:"directive---faucet"},"Directive - faucet"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"task-faucet 0.1.0\n\nUSAGE:\n    task faucet [OPTIONS] --addr <address>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --addr <address>\n        --amount <initial-balance>     [default: 100000000000]\n        --public-key <public-key>\n")),(0,i.kt)("p",null,"Directive ",(0,i.kt)("strong",{parentName:"p"},"faucet")," can create and faucet an address (can be named address like ",(0,i.kt)("inlineCode",{parentName:"p"},"alice"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tom")," or raw address like ",(0,i.kt)("inlineCode",{parentName:"p"},"0x1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"0x2"),") with some STC of given amount.\nIf the address is a named address, it will auto generate an raw address(and public key) and assign it to the named address.\nIf you has some specific requirements on ",(0,i.kt)("inlineCode",{parentName:"p"},"public-key"),", use ",(0,i.kt)("inlineCode",{parentName:"p"},"--public-key")," to specify it."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"//# faucet --addr bob\n\n//# faucet --addr alice --amount 0\n\n//# faucet --addr tom --amount 10000000000000\n\n")),(0,i.kt)("h4",{id:"directive---publish"},"Directive - publish"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"task-publish 0.1.0\nStarcoin-specific arguments for the publish command\n\nUSAGE:\n    task publish [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --gas-budget <gas-budget>\n    -k, --public-key <public-key>\n        --syntax <syntax>\n")),(0,i.kt)("p",null,"Directive ",(0,i.kt)("inlineCode",{parentName:"p"},"publish")," can publish a module to the blockchain.\nThe module code must follows the directive."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--gas-budget")," specifies the max gas of the transaction.\n",(0,i.kt)("inlineCode",{parentName:"p"},"--syntax")," can be ingored for now."),(0,i.kt)("p",null,"Exmaples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"//# publish\nmodule alice::Holder {\n    use StarcoinFramework::Signer;\n\n    struct Hold<T> has key, store {\n        x: T\n    }\n\n    public fun hold<T: store>(account: &signer, x: T) {\n        move_to(account, Hold<T>{x})\n    }\n\n    public fun get<T: store>(account: &signer): T\n    acquires Hold {\n        let Hold {x} = move_from<Hold<T>>(Signer::address_of(account));\n        x\n    }\n}\n\n//# publish\nmodule Dummy::DummyModule {}\n\n\n")),(0,i.kt)("h4",{id:"directive---run"},"Directive - run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"task-run 0.1.0\nStarcoin-specifc arguments for the run command,\n\nUSAGE:\n    task run [FLAGS] [OPTIONS] [--] [NAME]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n    -v, --verbose    print detailed outputs\n\nOPTIONS:\n        --args <args>...\n        --gas-budget <gas-budget>\n    -k, --public-key <public-key>\n        --signers <signers>...\n        --syntax <syntax>\n        --type-args <type-args>...\n\nARGS:\n    <NAME>\n")),(0,i.kt)("p",null,"Directive ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," can execute a script of script function.\nIf it's a script, the script code must follow the directive.\nIf it's a script function, then ",(0,i.kt)("inlineCode",{parentName:"p"},"<NAME>")," should be provided."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--signers")," declare the transaction sender.\n",(0,i.kt)("inlineCode",{parentName:"p"},"--type-args")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--args")," declare type arguments and arguments of the script of script function."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"//# run --signers alice\nscript {\nuse StarcoinFramework::STC::{STC};\nuse StarcoinFramework::Token;\nuse StarcoinFramework::Account;\nfun main(account: signer) {\n    let coin = Account::withdraw<STC>(&account, 0);\n    Token::destroy_zero(coin);\n}\n}\n\n//# run --signers alice --type-args 0x1::DummyToken::DummyToken 0x1::Account::accept_token\n\n")),(0,i.kt)("h4",{id:"directive---view"},"Directive - view"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"task-view 0.1.0\n\nUSAGE:\n    task view --address <address> --resource <resource>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --address <address>\n        --resource <resource>\n")),(0,i.kt)("p",null,"Directive ",(0,i.kt)("inlineCode",{parentName:"p"},"view")," can query any resource of any address."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"//# view --address alice --resource 01::Account::Account\n\n//# view --address StarcoinFramework --resource 0x1::Config::Config<0x1::VMConfig::VMConfig>\n")),(0,i.kt)("h4",{id:"directive---print-bytecode"},"Directive - print-bytecode"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"task-print-bytecode 0.1.0\nTranslates the given Move IR module or script into bytecode, then prints a textual representation of that bytecode\n\nUSAGE:\n    task print-bytecode [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --input <input>    The kind of input: either a script, or a module [default: script]\n")),(0,i.kt)("p",null,"Directive ",(0,i.kt)("inlineCode",{parentName:"p"},"print-bytecode")," can print the bytecode of given module or script."),(0,i.kt)("h3",{id:"installation-test-expectation"},"Installation Test Expectation"),(0,i.kt)("p",null,"Each integration test should have an corresponding expectation file, which contains the expected output of each directives in integration test.\nMove package manager will compare the test result of a integration test with the expectation file.\nIf there are different outputs, then the integration test fails.\nYou can generate the expected file by providing ",(0,i.kt)("inlineCode",{parentName:"p"},"--ub")," argument when running ",(0,i.kt)("inlineCode",{parentName:"p"},"mpm integration-test")," for the first time.\nBut you have to check whether the generated output really is the expected output of your integration test."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd coin-swap\nmpm pacakge build\nmpm integration-test test_coin_swap\n")),(0,i.kt)("p",null,"This's all about integration test of move."),(0,i.kt)("h2",{id:"more-example"},"More example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin-cookbook/tree/main/examples/basic-coin/"},"basic-coin")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin-cookbook/tree/main/examples/coin-swap/"},"coin-swap")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin-cookbook/tree/main/examples/my-token/"},"my-token")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin-cookbook/tree/main/examples/my-counter/"},"my-counter")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin-cookbook/tree/main/examples/simple-nft/"},"simple-nft")," A NFT example")),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("p",null,"If you have any question, please go to ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/channels/822159062475997194/892760287797714954"},"Starcoin/move-lang channel in Discord"),"."))}d.isMDXComponent=!0}}]);