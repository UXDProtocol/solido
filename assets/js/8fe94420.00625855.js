"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7417],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,h=p["".concat(l,".").concat(g)]||p[g]||u[g]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1503:function(e,t,n){n.r(t),n.d(t,{default:function(){return h},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return p}});var o=n(2122),a=n(9756),i=(n(7294),n(3905)),r=n(3902),s=n.p+"assets/images/updated-b00828d70e59c8d506105cf986ce34e4.png",l=n(1599),c=["components"],d={title:"Ledger",description:"Overview of user staking in LIDO for Solana with Ledger",keywords:["staking","end-user","lido","solana","ledger"],sidebar_label:"Ledger",sidebar_position:6},u={unversionedId:"staking/ledger",id:"staking/ledger",isDocsHomePage:!1,title:"How to Stake Solana on Lido",description:"Overview of user staking in LIDO for Solana with Ledger",source:"@site/docs/staking/ledger.md",sourceDirName:"staking",slug:"/staking/ledger",permalink:"/solido/staking/ledger",version:"current",sidebar_label:"Ledger",sidebarPosition:6,frontMatter:{title:"Ledger",description:"Overview of user staking in LIDO for Solana with Ledger",keywords:["staking","end-user","lido","solana","ledger"],sidebar_label:"Ledger",sidebar_position:6},sidebar:"solidoSidebar",previous:{title:"How to Stake Solana on Lido",permalink:"/solido/staking/solong"},next:{title:"Governance Overview",permalink:"/solido/governance/governance"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Lido for Solana staking guide",id:"lido-for-solana-staking-guide",children:[]},{value:"Step 1: Using Solana App on Ledger",id:"step-1-using-solana-app-on-ledger",children:[{value:"Setting up",id:"setting-up",children:[]}]},{value:"Step 2: Connect Ledger to Lido",id:"step-2-connect-ledger-to-lido",children:[]},{value:"Step 2: Explore the interface",id:"step-2-explore-the-interface",children:[{value:"Account info",id:"account-info",children:[]},{value:"Transaction Parameters",id:"transaction-parameters",children:[]},{value:"Lido Statistics",id:"lido-statistics",children:[]},{value:"FAQs",id:"faqs",children:[]}]},{value:"Step 3: Stake your SOL",id:"step-3-stake-your-sol",children:[]},{value:"Step 4: View the transaction on Blockexplorer",id:"step-4-view-the-transaction-on-blockexplorer",children:[]},{value:"Withdrawing Solana",id:"withdrawing-solana",children:[]},{value:"Resources",id:"resources",children:[]}],g={toc:p};function h(e){var t=e.components,d=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},g,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A quick guide on staking your Solana on the Lido widget"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"\u2018Lido for Solana\u2019 is a Lido-DAO governed liquid staking protocol for the Solana blockchain. Anyone who stakes their SOL tokens with Lido will be issued an on-chain representation of SOL staking position with Lido validators, called stSOL. This will allow Solana token holders to get liquidity on their staked assets which can then be traded, or further utilized as collateral in DeFi products."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Widget",src:n(1478).Z})),(0,i.kt)("h2",{id:"lido-for-solana-staking-guide"},"Lido for Solana staking guide"),(0,i.kt)("p",null,"In this step-by-step guide, we will learn how to stake your Solana via the Lido staking widget. This guide shows the testnet for demonstration purposes. However, the process remains the same for mainnet. You can use one of the following wallets to connect to Lido. The facility to use the hardware wallet Ledger is also provided. This guarantees an extra layer of security for the user."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sollet"),(0,i.kt)("li",{parentName:"ol"},"Phantom"),(0,i.kt)("li",{parentName:"ol"},"Solflare"),(0,i.kt)("li",{parentName:"ol"},"Solong"),(0,i.kt)("li",{parentName:"ol"},"Ledger")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"step-1-using-solana-app-on-ledger"},"Step 1: Using Solana App on Ledger"),(0,i.kt)("p",null,"To setup your ledger please head over to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.solana.com/wallet-guide/ledger-live"},"Solana documentation site")," and follow the instructions written in the following sections."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Getting Started"),(0,i.kt)("li",{parentName:"ol"},"Install the Solana App on your Nano")),(0,i.kt)("p",null,"Additional instructions can also be found on the ",(0,i.kt)("a",{parentName:"p",href:"https://support.ledger.com/hc/en-us/articles/360016265659-Solana-SOL-"},"Ledger site")),(0,i.kt)("h3",{id:"setting-up"},"Setting up"),(0,i.kt)("p",null,"Make sure to note down the seed phrase for your address and store it in a safe place. Additionally, fund your Solana address with some SOL tokens before interacting with Lido"),(0,i.kt)("p",null,"When your app is ready you'll see something like this on the Ledger screen.\n",(0,i.kt)("img",{alt:"Ready",src:n(5817).Z})),(0,i.kt)("h2",{id:"step-2-connect-ledger-to-lido"},"Step 2: Connect Ledger to Lido"),(0,i.kt)("p",null,"Once the Ledger is setup visit ",(0,i.kt)("a",{parentName:"p",href:"https://solana.lido.fi"},"https://solana.lido.fi")," to stake your SOL tokens. Now connect your Ledger device to your machine and press the connect button in the top-right corner of the Lido interface."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connect",src:n(9969).Z})),(0,i.kt)("p",null,"Pressing the connect wallet button, on the top right hand corner of the screen, pops up the wallet screen."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wallet List",src:n(376).Z})),(0,i.kt)("p",null,"Selecting Ledger and pressing the connect button pops up a dialog box for you to ",(0,i.kt)("strong",{parentName:"p"},"approve the connection"),". Make sure to verify the details (if any) listed on the approval dialog box by Ledger."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Approve 1",src:n(5881).Z}),"\n",(0,i.kt)("img",{alt:"Approve 2",src:n(8342).Z})),(0,i.kt)("p",null,"Once connected you would be able to see your balance on the Lido widget. Before you interact with the widget further it is important to explore the widget and understand its functionality."),(0,i.kt)("h2",{id:"step-2-explore-the-interface"},"Step 2: Explore the interface"),(0,i.kt)("p",null,"At the top you can see your account\u2019s information\u200a\u2014\u200ayour current stSOL balance and the number of SOL tokens available for staking. For new account holders, the staked amount (stSOL) will be 0 in the beginning. You can also see the returns you will get by staking with Lido under Lido APR. Below that you can enter the number of SOL you want to stake."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Interface",src:n(6153).Z})),(0,i.kt)("h3",{id:"account-info"},"Account info"),(0,i.kt)("p",null,"You can go to the top-right corner of the screen and click on your connected account. This lets you take a look at your address and disconnect at any point during the process."),(0,i.kt)("p",null,"To view the transaction history of your address on Solana's blockexplorer you can add your address to the end of the following URL"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://explorer.solana.com/address/**your-address-goes-here"},"https://explorer.solana.com/address/**your-address-goes-here"),"**")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Account Info",src:n(3871).Z}),"\n",(0,i.kt)("img",{alt:"Connect Dialog",src:n(4697).Z})),(0,i.kt)("h3",{id:"transaction-parameters"},"Transaction Parameters"),(0,i.kt)("p",null,"When you enter the amount of SOL you want to stake, the values below the submit button change automatically. These values give you specific information about the transaction you are about to perform. It tells you the"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Exchange rate of SOL v/s stSOL at the moment"),(0,i.kt)("li",{parentName:"ul"},"Amount of stSOL you will receive"),(0,i.kt)("li",{parentName:"ul"},"Transaction cost"),(0,i.kt)("li",{parentName:"ul"},"Fee that will be deducted for this transaction")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction Params",src:n(226).Z})),(0,i.kt)("h3",{id:"lido-statistics"},"Lido Statistics"),(0,i.kt)("p",null,"Just below the transaction parameters you also see global Lido statistics. This gives you a clear idea of how much SOL is being staked worldwide and other information regarding the liquid staking ecosystem."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lido Params",src:n(6205).Z})),(0,i.kt)("h3",{id:"faqs"},"FAQs"),(0,i.kt)("p",null,"You can see the FAQ section right below the Lido statistics. It is prudent to familiarize yourself with some of the basic features of liquid staking and the risks involved. The FAQ section also gives more information about the stSOL and its value. In case, you have even more questions you can always reach out to the Lido team or Chorus One for any clarifications. The contact information is given at the end of this article."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Faqs",src:n(1479).Z})),(0,i.kt)("h2",{id:"step-3-stake-your-sol"},"Step 3: Stake your SOL"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Stake",src:n(6070).Z})),(0,i.kt)("p",null,"To stake your SOL with lido enter the amount you wanter to stake. On the lido widget will see a pop-up showing the state of your transaction. The Lido widget waits for you to approve this transaction through your Ledger device."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note ",(0,i.kt)("strong",{parentName:"p"},"This transaction will only go through if you go back to Ledger and approve it."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Staking",src:n(7385).Z})),(0,i.kt)("p",null,"You get additional information about the transaction details while approving the transaction. Go ahead and approve the transaction."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Approve Transaction",src:n(3780).Z})),(0,i.kt)("p",null,"After verifying the information you can approve now."),(0,i.kt)("h2",{id:"step-4-view-the-transaction-on-blockexplorer"},"Step 4: View the transaction on Blockexplorer"),(0,i.kt)("p",null,"Once you hit approve on your wallet, you can come back to the lido widget and click on ",(0,i.kt)("strong",{parentName:"p"},"View on Solana Blockexplorer.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:r.Z,alt:"View Tx",width:"500"})),(0,i.kt)("p",null,"This is useful as it tells you the current status of your transaction. In the block explorer, if you look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"Confirmations")," field you can slowly see it increasing from 0 to 32. Once it reaches the MAX number of confirmations your transaction gets added to the blockchain"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Finally after 32 confirmations, our transaction gets confirmed")),(0,i.kt)("p",null,"You can now go back to the Lido widget and look at your updated stSOL balance. Just below the stSOL balance, you will also be able to see the amount of SOL you can get back for it a.k.a the exchange rate."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Update",src:n(8386).Z})),(0,i.kt)("p",null,"Zooming into the widget we can observe the new SOL balance and the updated stSOL balance"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note 1: We had 2 SOL in the beginning and we staked 1 SOL. We should be left with 1 SOL but we had to pay an additional 0.0021 SOL as the rent for the new stSOL account that got created for us.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note 2: This rent is a one-time fee that won\u2019t reccur on the next staking transaction.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:s,alt:"Updated Balance",width:"450"})),(0,i.kt)("h2",{id:"withdrawing-solana"},"Withdrawing Solana"),(0,i.kt)("p",null,"Withdrawals are not enabled yet. They will be live within the coming months. If you click on the ",(0,i.kt)("strong",{parentName:"p"},"Unstake")," tab you will see an error message pop up."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:l.Z,alt:"Unstake",width:"450"})),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://medium.com/chorus-one/introducing-lido-for-solana-8aa02db8503"},"Introducing Lido for Solana")," - Explaining the SOL liquid staking solution by Chorus One"))}h.isMDXComponent=!0},1599:function(e,t,n){t.Z=n.p+"assets/images/unstake-ff2783514f68340f6894e6afdca39954.png"},3902:function(e,t,n){t.Z=n.p+"assets/images/view_tx-dfd323a7dd1a452a2dc4876e8ac1b760.png"},9969:function(e,t,n){t.Z=n.p+"assets/images/connect-3dc119fcf29f83cab7aff88398f35670.png"},1479:function(e,t,n){t.Z=n.p+"assets/images/faqs-671274d0d5fdd0090752e3091275d9bf.png"},6153:function(e,t,n){t.Z=n.p+"assets/images/interface-49238591196cf9e54fd5ad68297ec267.png"},6205:function(e,t,n){t.Z=n.p+"assets/images/lido_params-537175b3683c562d73893a34ab7a7614.png"},6070:function(e,t,n){t.Z=n.p+"assets/images/stake-f2349237ab1661f08b0cb0e988f5e5de.png"},1478:function(e,t,n){t.Z=n.p+"assets/images/widget-e2704ae984009eee59cfd911dc01736a.png"},3871:function(e,t,n){t.Z=n.p+"assets/images/account_info_bl-beb019d470d3817a30105ee24e43cb17.png"},5881:function(e,t,n){t.Z=n.p+"assets/images/approve1-d681a2fcd58395d883ccc8f2e87c1b2e.png"},8342:function(e,t,n){t.Z=n.p+"assets/images/approve2-f119ab8224d19171ca04616320ef97bd.png"},3780:function(e,t,n){t.Z=n.p+"assets/images/approve_tx-e2303da6c64c986b3854ad36feabf41a.jpg"},4697:function(e,t,n){t.Z=n.p+"assets/images/connect_dialog-2e9f83a1dda3c6dd2cb6dcd1d30b5668.png"},5817:function(e,t,n){t.Z=n.p+"assets/images/ready-fac295ce66ad2805a3ae4af043b48823.jpg"},7385:function(e,t,n){t.Z=n.p+"assets/images/staking-c1b410e45dd8106d431af88422d8282d.png"},226:function(e,t,n){t.Z=n.p+"assets/images/tx_params-85f6822765e8825c28c1669208e2664b.png"},8386:function(e,t,n){t.Z=n.p+"assets/images/update-19375eb31602fa4386ebbc98729a875a.png"},376:function(e,t,n){t.Z=n.p+"assets/images/wallet_list-39504bbe1b201fb7b42532af1765cfc1.png"}}]);