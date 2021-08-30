(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2362],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),h=n,c=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return a?r.createElement(c,o(o({ref:t},p),{},{components:a})):r.createElement(c,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3833:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),o={},s={unversionedId:"administration",id:"administration",isDocsHomePage:!1,title:"Administration",description:"Lido for Solana is governed by the **Lido Decentralized",source:"@site/docs/administration.md",sourceDirName:".",slug:"/administration",permalink:"/solido/administration",version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"Governance",permalink:"/solido/governance"},next:{title:"Fees",permalink:"/solido/fees"}},l=[{value:"Administrator responsibilities",id:"administrator-responsibilities",children:[]},{value:"Multisig administration",id:"multisig-administration",children:[]},{value:"Multisig details",id:"multisig-details",children:[]},{value:"Multisig origin",id:"multisig-origin",children:[]}],d={toc:l};function p(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Lido for Solana ",(0,i.kt)("a",{parentName:"p",href:"/solido/governance"},"is governed")," by the ",(0,i.kt)("strong",{parentName:"p"},"Lido Decentralized\nAutonomous Organization")," (",(0,i.kt)("strong",{parentName:"p"},"Lido DAO"),"). Members of the DAO \u2014 holders of\nthe LDO governance token \u2014 can vote on high-level proposals, such as whether to\nexpand to a new chain. For day to day tasks, we have a much more narrowly scoped\nneed for somebody to execute privileged operations: an ",(0,i.kt)("strong",{parentName:"p"},"administrator"),". The\nadministrator rights reside with a 4-out-of-7 multisig that consists of\nestablished validators and ecosystem partners."),(0,i.kt)("h2",{id:"administrator-responsibilities"},"Administrator responsibilities"),(0,i.kt)("p",null,"Lido for Solana is implemented as a program called ",(0,i.kt)("em",{parentName:"p"},"Solido"),", that runs on the\nSolana blockchain. Programs on Solana have an ",(0,i.kt)("strong",{parentName:"p"},"upgrade authority"),": an address\nthat can replace the program with a newer version. This upgrade authority has a\nlot of power, especially for a program like Solido that manages user\u2019s funds.\nAfter all, the upgrade authority could deploy a new program that withdraws all\nstaked SOL into an address of their choice. Therefore, it is essential that the\nupgrade authority is trustworthy."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is possible on Solana to disable upgrades for a program. In that case nobody\nwill ever be able to change it, so there is no party to trust \u2014 you only need to\ntrust the code itself. This is a double-edged sword: if the code contains a\ncritical bug, then nobody can fix it. This makes disabling upgrades dangerous,\npotentially more risky than trusting an upgrade authority. Especially for early\nversions of a program, we need a way to upgrade."))),(0,i.kt)("p",null,"Aside from the program code itself, the Solido program has parameters, whose\nvalues must be set by somebody:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How much fees does it take, and how are those split up among the treasury,\nthe developer, and validators?"),(0,i.kt)("li",{parentName:"ul"},"Which validators are part of the validator set?")),(0,i.kt)("p",null,"In the program, we refer to the address that can sign parameter changes as the\n",(0,i.kt)("strong",{parentName:"p"},"manager"),". The role of the administrator, is to act as the manager for\nparameter changes, and to act as the upgrade authority for program changes."),(0,i.kt)("h2",{id:"multisig-administration"},"Multisig administration"),(0,i.kt)("p",null,"Different administration methods exists, each with different advantages and\ndisadvantages."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A single person could act as the administrator. This has very low overhead,\nand the administrator can move quickly when there is a need to deploy a\ncritical bugfix. However, it also places a high degree of trust in a single\nperson.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"On the opposide side of the spectrum, a DAO program could act as the\nadministrator. Administrative tasks could only be executed after a majority\nof LDO token holders approve. This is decentralized, but it makes it very\ndifficult to act quickly when needed."))),(0,i.kt)("p",null,"A good middle ground between these two extremes is a ",(0,i.kt)("strong",{parentName:"p"},"multisig"),", a program\nthat executes administrative tasks after ",(0,i.kt)("em",{parentName:"p"},"m")," out of ",(0,i.kt)("em",{parentName:"p"},"n")," members have approved.\nFor ",(0,i.kt)("em",{parentName:"p"},"m")," greater than one, no single party can unilaterally execute\nadministrative tasks, but we only need to coordinate with ",(0,i.kt)("em",{parentName:"p"},"m")," parties to get\nsomething done, not with a majority of LDO holders."),(0,i.kt)("h2",{id:"multisig-details"},"Multisig details"),(0,i.kt)("p",null,"For Lido for Solana, we use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/project-serum/multisig"},"Serum Multisig program"),", and we\nrequire approval from 4 out of 7 members. The members are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bonfida.org/"},"Bonafida")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://chorus.one"},"Chorus One")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://figment.io/"},"Figment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://p2p.org/"},"P2P")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://saber.so/"},"Saber")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://solana.com/"},"Solana Foundation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stakingfacilities.com/"},"Staking Facilities"))),(0,i.kt)("p",null,"The addresses of the multisig members are listed on the ",(0,i.kt)("a",{parentName:"p",href:"/solido/deployments"},"deployments\npage"),". The multisig instance is used both as the upgrade\nauthority of the Solido program, and as the manager of the Solido instance."),(0,i.kt)("p",null,"Aside from approving parameter changes to onboard validators, the multisig\nmembers also verify that the deployed Solido program can be\n",(0,i.kt)("a",{parentName:"p",href:"https://blog.lido.fi/lido-dao-treasury-fund/"},"reproduced"),", to ensure that the on-chain program was built from the\npublicly available source code, and contains no back doors."),(0,i.kt)("h2",{id:"multisig-origin"},"Multisig origin"),(0,i.kt)("p",null,"The 4-out-of-7 multisig was established as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chorus One reached out to all participants, and verified their identities\non Telegram and GitHub."),(0,i.kt)("li",{parentName:"ul"},"Participants shared their public keys on GitHub."),(0,i.kt)("li",{parentName:"ul"},"Chorus one deployed the Serum Multisig program, and created an instance that\nhas the 7 public keys as owners. The upgrade authority of the multisig\nprogram was set to the multisig instance itself."),(0,i.kt)("li",{parentName:"ul"},"Participants verified that they could ",(0,i.kt)("a",{parentName:"li",href:"https://blog.lido.fi/lido-dao-treasury-fund/"},"reproduce")," the program, and\nthat the list of public keys matched the keys shared earlier on GitHub.")))}p.isMDXComponent=!0}}]);