"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[1005],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3256:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905));const i={},s="Multi-signature",o={unversionedId:"concepts/multisig",id:"concepts/multisig",title:"Multi-signature",description:"Multisignature is also often written as multisig or multi-signature.",source:"@site/docs/99-concepts/08-multisig.md",sourceDirName:"99-concepts",slug:"/concepts/multisig",permalink:"/starcoin-cookbook/docs/concepts/multisig",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/99-concepts/08-multisig.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Proof",permalink:"/starcoin-cookbook/docs/concepts/proof"},next:{title:"Global State Tree",permalink:"/starcoin-cookbook/docs/concepts/gst"}},l={},u=[{value:"Example",id:"example",level:2},{value:"Multi-signature transaction",id:"multi-signature-transaction",level:2},{value:"Multi-signature address",id:"multi-signature-address",level:2},{value:"Why do you need multiple signatures",id:"why-do-you-need-multiple-signatures",level:2},{value:"Summary",id:"summary",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"multi-signature"},"Multi-signature"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Multisignature")," is also often written as multisig or multi-signature.\nIf a transaction requires two or more signatures to be valid, then the situation is called multi-signature."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Suppose the company has a bank account, the first three digits of the password are kept by A, and the last three digits of the password are kept by B.\nWhen transferring money, both A and B must enter the passwords at the same time to transfer successfully.\nThis is a typical multi-signature case."),(0,a.kt)("p",null,"The full name of multi-signature is multi-signature technology, which was first used for Bitcoin addresses in 2012, and then gave birth to multi-signature wallets."),(0,a.kt)("h2",{id:"multi-signature-transaction"},"Multi-signature transaction"),(0,a.kt)("p",null,"Generally, transfers can be completed with only a single signature, which means that a private key can sign the transaction and complete the transfer.\nHowever, multi-signature transactions require the authorization of multiple key holders to transfer digital currency, which makes the assets in the wallet more secure and prevents internal theft."),(0,a.kt)("p",null,"Multi-signature transactions are sometimes called ",(0,a.kt)("inlineCode",{parentName:"p"},"M-of-N transactions"),".\n",(0,a.kt)("strong",{parentName:"p"},"M")," refers to the number of signatures required for the transaction to take effect, and ",(0,a.kt)("strong",{parentName:"p"},"N")," refers to the total number of parties involved in this transaction."),(0,a.kt)("p",null,"Specifically, it is assumed that N individuals hold N private keys, and as long as M individuals agree to sign, they can use the funds of a ",(0,a.kt)("strong",{parentName:"p"},"multi-signature account"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1-2: Two people can use the funds as long as one of them agrees."),(0,a.kt)("li",{parentName:"ul"},"2-2: Both must agree to use the funds."),(0,a.kt)("li",{parentName:"ul"},"2-3: Two of the three people must agree to use the funds."),(0,a.kt)("li",{parentName:"ul"},"4-7: 4 out of 7 people must agree to use the funds."),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("p",null,"The value of N is not limited to the above cases.\nThe value of M only needs to be a positive integer less than or equal to N.\nDifferent values of M and N can be suitable for different application scenarios."),(0,a.kt)("h2",{id:"multi-signature-address"},"Multi-signature address"),(0,a.kt)("p",null,"A multi-signature address is a special wallet address.\nTo transfer money out of the address, you need to perform a multi-signature transaction.\nUsing multi-signature, the risk of losing the private key can be distributed to N people, and the problem of a few people stealing funds can be avoided."),(0,a.kt)("p",null,"In short, an ",(0,a.kt)("inlineCode",{parentName:"p"},"M-of-N")," address needs to be generated by collecting the address information of N parties.\nOnce the token is transferred to this address, the M party must co-sign the transaction before the token can be transferred out."),(0,a.kt)("h2",{id:"why-do-you-need-multiple-signatures"},"Why do you need multiple signatures"),(0,a.kt)("p",null,"From the above analysis, we can see that it is safer to use multiple signatures than single signatures."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Prevent private key loss.")),(0,a.kt)("p",null,"Usually, once a single-signature account loses the private key, there is no way to withdraw the funds of the corresponding address.\nThis increases the risk of losing funds due to loss of private keys.\nThe multi-signature mechanism can disperse the risk of losing the private key and ensure the security of funds."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Prevent hacking.")),(0,a.kt)("p",null,"For multi-signature accounts, if hackers want to steal funds, they usually need to obtain multiple multi-signature private keys, which is more difficult than obtaining private keys for single-signature accounts."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Prevent internal theft.")),(0,a.kt)("p",null,"If the private key is in the hands of individuals, there may be internal theft.\nIf it is in the hands of multiple people, it can effectively reduce the occurrence of this situation."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Multi-signature technology can make the management and transaction of funds more secure, so the wallets of large exchanges generally use multi-signature accounts."))}p.isMDXComponent=!0}}]);