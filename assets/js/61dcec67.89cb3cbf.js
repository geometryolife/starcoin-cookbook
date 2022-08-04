"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[9483],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(n),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||o;return n?r.createElement(m,i(i({ref:e},c),{},{components:n})):r.createElement(m,i({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7094:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const o={},i="How to participate in a test network",l={unversionedId:"getting-started/setup/test-network",id:"getting-started/setup/test-network",title:"How to participate in a test network",description:"Starcoin testnet introduction",source:"@site/docs/02-getting-started/02-setup/04-test-network.md",sourceDirName:"02-getting-started/02-setup",slug:"/getting-started/setup/test-network",permalink:"/starcoin-cookbook/docs/getting-started/setup/test-network",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/02-getting-started/02-setup/04-test-network.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to set up a local dev network",permalink:"/starcoin-cookbook/docs/getting-started/setup/dev-network"},next:{title:"How to sync the block and state faster",permalink:"/starcoin-cookbook/docs/getting-started/setup/fast-sync-data"}},s={},p=[{value:"Starcoin testnet introduction",id:"starcoin-testnet-introduction",level:2},{value:"Join Halley network",id:"join-halley-network",level:2},{value:"Join Halley network",id:"join-halley-network-1",level:2},{value:"Join Proxima network",id:"join-proxima-network",level:2},{value:"Join Barnard network",id:"join-barnard-network",level:2},{value:"Get the Token of the test network",id:"get-the-token-of-the-test-network",level:2},{value:"Seed Node JSON-RPC",id:"seed-node-json-rpc",level:2},{value:"Connect to test network",id:"connect-to-test-network",level:3}],c={toc:p};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-participate-in-a-test-network"},"How to participate in a test network"),(0,a.kt)("h2",{id:"starcoin-testnet-introduction"},"Starcoin testnet introduction"),(0,a.kt)("p",null,"Starcoin has a total of three testnets, ",(0,a.kt)("inlineCode",{parentName:"p"},"Halley"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Proxima")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Barnard"),"."),(0,a.kt)("h2",{id:"join-halley-network"},"Join Halley network"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Halley"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Introduction: It is the first test network of Starcoin, and the data on it will be cleaned regularly."),(0,a.kt)("li",{parentName:"ul"},"Meaning: The name ",(0,a.kt)("inlineCode",{parentName:"li"},"Halley")," is inspired by ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Halley%27s_Comet"},"Halley's Comet"),", officially named ",(0,a.kt)("inlineCode",{parentName:"li"},"1P/Halley"),", a short-period comet that can be seen from Earth every 75-76 years."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Proxima"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Introduction: It is a long-running test network for Starcoin, released in the third quarter of 2020. Every time a major protocol upgrade is performed on the mainnet, such as the upgrade of ",(0,a.kt)("inlineCode",{parentName:"li"},"starcoin-framework"),", the network will be reset first, and then the new ",(0,a.kt)("inlineCode",{parentName:"li"},"starcoin-framework")," will be upgraded."),(0,a.kt)("li",{parentName:"ul"},"Meaning: The name ",(0,a.kt)("inlineCode",{parentName:"li"},"Proxima")," is inspired by ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Proxima_Centauri"},"Proxima Centauri"),", a small, low-mass star located 4.246 light-years (1.302 pc) from the Sun in the southern constellation Centaurus."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Barnard"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Introduction: As the permanent test network of Starcoin, the Barnard network was launched on 2021/3/27 and is the successor of Proxima."),(0,a.kt)("li",{parentName:"ul"},"Meaning: The name ",(0,a.kt)("inlineCode",{parentName:"li"},"Barnard")," is inspired by ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Barnard%27s_Star"},"Barnard's Star"),", a very low-mass red dwarf star located near the star Ophiuchus, 6 light-years from the Sun.")))),(0,a.kt)("h2",{id:"join-halley-network-1"},"Join Halley network"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"starcoin -n halley\n")),(0,a.kt)("h2",{id:"join-proxima-network"},"Join Proxima network"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"starcoin -n proxima\n")),(0,a.kt)("h2",{id:"join-barnard-network"},"Join Barnard network"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"starcoin -n barnard\n")),(0,a.kt)("h2",{id:"get-the-token-of-the-test-network"},"Get the Token of the test network"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://faucet.starcoin.org/barnard"},"Barnard Authenticated Faucet"))),(0,a.kt)("h2",{id:"seed-node-json-rpc"},"Seed Node JSON-RPC"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Network"),(0,a.kt)("th",{parentName:"tr",align:null},"HTTP"),(0,a.kt)("th",{parentName:"tr",align:null},"HTTPS"),(0,a.kt)("th",{parentName:"tr",align:null},"WebSocket"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Halley"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"http://halley.seed.starcoin.org"},"http://halley.seed.starcoin.org")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://halley-seed.starcoin.org"},"https://halley-seed.starcoin.org")),(0,a.kt)("td",{parentName:"tr",align:null},"ws://halley.seed.starcoin.org:9870")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Proxima"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"http://proxima.seed.starcoin.org"},"http://proxima.seed.starcoin.org")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://proxima-seed.starcoin.org"},"https://proxima-seed.starcoin.org")),(0,a.kt)("td",{parentName:"tr",align:null},"ws://proxima.seed.starcoin.org:9870")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Barnard"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"http://proxima.seed.starcoin.org"},"http://proxima.seed.starcoin.org")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://barnard-seed.starcoin.org"},"https://barnard-seed.starcoin.org")),(0,a.kt)("td",{parentName:"tr",align:null},"ws://barnard.seed.starcoin.org:9870")))),(0,a.kt)("h3",{id:"connect-to-test-network"},"Connect to test network"),(0,a.kt)("p",null,"Take ",(0,a.kt)("inlineCode",{parentName:"p"},"Barnard")," test network as an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"starcoin --connect ws://barnard.seed.starcoin.org:9870 --local-account-dir ~/.starcoin/barnard/account_vaults console\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"--connect")," points to the seed node JSON-PRC, and ",(0,a.kt)("inlineCode",{parentName:"p"},"--local-account-dir")," points to the directory of accouts. You will not be able to execute account related operaions without it."))}d.isMDXComponent=!0}}]);