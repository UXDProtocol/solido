(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4662],{3905:function(t,e,o){"use strict";o.d(e,{Zo:function(){return u},kt:function(){return p}});var n=o(7294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},u=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),h=c(o),p=a,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||i;return o?n.createElement(m,r(r({ref:e},u),{},{components:o})):n.createElement(m,r({ref:e},u))}));function p(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=o.length,r=new Array(i);r[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,r[1]=l;for(var c=2;c<i;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},8021:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=o(2122),a=o(9756),i=(o(7294),o(3905)),r={title:"Phantom",description:"Overview of user staking in LIDO for Solana with Phantom",keywords:["staking","end-user","lido","solana","phantom"],sidebar_label:"Phantom",sidebar_position:3},l={unversionedId:"Guides/Staking/Wallets/Phantom",id:"Guides/Staking/Wallets/Phantom",isDocsHomePage:!1,title:"How to Stake Solana on Lido",description:"Overview of user staking in LIDO for Solana with Phantom",source:"@site/docs/Guides/Staking/Wallets/Phantom.md",sourceDirName:"Guides/Staking/Wallets",slug:"/Guides/Staking/Wallets/Phantom",permalink:"/solido/docs/Guides/Staking/Wallets/Phantom",version:"current",sidebar_label:"Phantom",sidebarPosition:3,frontMatter:{title:"Phantom",description:"Overview of user staking in LIDO for Solana with Phantom",keywords:["staking","end-user","lido","solana","phantom"],sidebar_label:"Phantom",sidebar_position:3},sidebar:"solidoSidebar",previous:{title:"How to Stake Solana on Lido",permalink:"/solido/docs/Guides/Staking/Wallets/Sollet"},next:{title:"How to Stake Solana on Lido",permalink:"/solido/docs/Guides/Staking/Wallets/Solflare"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Lido for Solana staking guide",id:"lido-for-solana-staking-guide",children:[]},{value:"Step 1: Create or Restore Phantom Wallet",id:"step-1-create-or-restore-phantom-wallet",children:[{value:"Creating the wallet",id:"creating-the-wallet",children:[]},{value:"Restoring the wallet",id:"restoring-the-wallet",children:[]},{value:"Logged In",id:"logged-in",children:[]}]},{value:"Step 2: Connect Lido to Phantom",id:"step-2-connect-lido-to-phantom",children:[]},{value:"Step 3: Explore the interface",id:"step-3-explore-the-interface",children:[{value:"Account info",id:"account-info",children:[]},{value:"Transaction Parameters",id:"transaction-parameters",children:[]},{value:"Lido Statistics",id:"lido-statistics",children:[]},{value:"FAQs",id:"faqs",children:[]}]},{value:"Step 4: Stake your SOL",id:"step-4-stake-your-sol",children:[]},{value:"Step 5: View the transaction on Blockexplorer",id:"step-5-view-the-transaction-on-blockexplorer",children:[]},{value:"Withdrawing Solana",id:"withdrawing-solana",children:[]},{value:"Resources",id:"resources",children:[]}],c={toc:s};function u(t){var e=t.components,r=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A quick guide on staking your Solana on the Lido widget"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"\u2018Lido for Solana\u2019 is a Lido-DAO governed liquid staking protocol for the Solana blockchain. Anyone who stakes their SOL tokens with Lido will be issued an on-chain representation of SOL staking position with Lido validators, called stSOL. This will allow Solana token holders to get liquidity on their staked assets which can then be traded, or further utilized as collateral in DeFi products."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Widget",src:o(923).Z})),(0,i.kt)("h2",{id:"lido-for-solana-staking-guide"},"Lido for Solana staking guide"),(0,i.kt)("p",null,"In this step-by-step guide, we will learn how to stake your Solana via the Lido staking widget. This guide shows the testnet for demonstration purposes. However, the process remains the same for mainnet. You can use one of the following wallets to connect to Lido. The facility to use the hardware wallet Ledger is also provided. This guarantees an extra layer of security for the user."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sollet"),(0,i.kt)("li",{parentName:"ol"},"Phantom"),(0,i.kt)("li",{parentName:"ol"},"Solflare"),(0,i.kt)("li",{parentName:"ol"},"Solong"),(0,i.kt)("li",{parentName:"ol"},"Ledger")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"step-1-create-or-restore-phantom-wallet"},"Step 1: Create or Restore Phantom Wallet"),(0,i.kt)("p",null,"Navigate to ",(0,i.kt)("a",{parentName:"p",href:"https://phantom.app/"},"https://phantom.app/")," to create/restore your solana wallet."),(0,i.kt)("h3",{id:"creating-the-wallet"},"Creating the wallet"),(0,i.kt)("p",null,"If you do not have a wallet you yet, you should create a new wallet and note down the seed phrase and store it in a safe place. Follow the onscreen instructions and make sure to fund your wallet with some SOL tokens before interacting with Lido"),(0,i.kt)("img",{src:"./images/phantom/create_wallet.png",alt:"Create Wallet",width:"1000"}),(0,i.kt)("img",{src:"./images/phantom/create_wallet2.png",alt:"Create Wallet",width:"1000"}),(0,i.kt)("h3",{id:"restoring-the-wallet"},"Restoring the wallet"),(0,i.kt)("p",null,"If you already have a wallet, you can restore it on Phantom using the associated seed phrase. Follow the online instructions to restore your SOL account."),(0,i.kt)("img",{src:"./images/phantom/restore.png",alt:"Restore Wallet",width:"1000"}),(0,i.kt)("img",{src:"./images/phantom/restore2.png",alt:"Restore Wallet",width:"1000"}),(0,i.kt)("h3",{id:"logged-in"},"Logged In"),(0,i.kt)("p",null,"Once you have funded your Phantom wallet with Solana, you can click on the Phantom extension to see your account details."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"./images/phantom/logged_in.png",alt:"logged_in",width:"300"})),(0,i.kt)("h2",{id:"step-2-connect-lido-to-phantom"},"Step 2: Connect Lido to Phantom"),(0,i.kt)("p",null,"Once your wallet is setup visit ",(0,i.kt)("a",{parentName:"p",href:"https://solana.lido.fi"},"https://solana.lido.fi")," to stake your SOL tokens. Now connect your Phantom account to the Lido interface."),(0,i.kt)("img",{src:"./images/common/connect.png",alt:"connect",width:"1000"}),(0,i.kt)("p",null,"Pressing the connect wallet button, on the top right hand corner of the screen, pops up the wallet screen."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"./images/phantom/connect.png",alt:"wallet_list",width:"350"})),(0,i.kt)("p",null,"Selecting your wallet and pressing the connect button takes you to another window with the wallet\u2019s browser extension. On this window you will have to ",(0,i.kt)("strong",{parentName:"p"},"approve the connection"),". Make sure to verify the details listed on the approval screen by Phantom."),(0,i.kt)("img",{src:"./images/phantom/approve_connection.png",alt:"Approve-connection",width:"1000"}),(0,i.kt)("p",null,"If you have set a password to open the wallet, you might get prompted to unlock your wallet. You will, then, have to allow Lido to connect to your wallet and fetch its balance. Once connected you would be able to see your balance on the Lido widget."),(0,i.kt)("img",{src:"./images/phantom/connected.png",alt:"Connected",width:"1000"}),(0,i.kt)("p",null,"Before you interact with the widget further it is important to explore the widget and understand its functionality."),(0,i.kt)("h2",{id:"step-3-explore-the-interface"},"Step 3: Explore the interface"),(0,i.kt)("p",null,"At the top you can see your account\u2019s information\u200a\u2014\u200ayour current stSOL balance and the number of SOL tokens available for staking. For new account holders, the staked amount (stSOL) will be 0 in the beginning. You can also see the returns you will get by staking with Lido under Lido APR. Below that you can enter the number of SOL you want to stake."),(0,i.kt)("img",{src:"./images/common/interface.png",alt:"Interface",width:"1000"}),(0,i.kt)("h3",{id:"account-info"},"Account info"),(0,i.kt)("p",null,"You can go to the top-right corner of the screen and click on your connected account. This lets you take a look at your address and disconnect at any point during the process.\nThe address for the demo account is"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Address - ",(0,i.kt)("inlineCode",{parentName:"p"},"yBfu1AzbyRcfoJRU5TcUf59QwntqoFeDDTF9efh6XjL"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Blockexplorer URL - ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.solana.com/address/yBfu1AzbyRcfoJRU5TcUf59QwntqoFeDDTF9efh6XjL?cluster=testnet"},"https://explorer.solana.com/address/yBfu1AzbyRcfoJRU5TcUf59QwntqoFeDDTF9efh6XjL?cluster=testnet"))),(0,i.kt)("p",null,"Its transaction history can be viewed on the blockexplorer ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.solana.com/address/yBfu1AzbyRcfoJRU5TcUf59QwntqoFeDDTF9efh6XjL?cluster=testnet"},"here"),"."),(0,i.kt)("img",{src:"./images/phantom/account_info.png",alt:"Account Info",width:"1000"}),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"./images/phantom/connect_dialog.png",alt:"connect_dialog",width:"350"})),(0,i.kt)("h3",{id:"transaction-parameters"},"Transaction Parameters"),(0,i.kt)("p",null,"When you enter the amount of SOL you want to stake, the values below the submit button change automatically. These values give you specific information about the transaction you are about to perform. It tells you the"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Exchange rate of SOL v/s stSOL at the moment"),(0,i.kt)("li",{parentName:"ul"},"Amount of stSOL you will receive"),(0,i.kt)("li",{parentName:"ul"},"Transaction cost"),(0,i.kt)("li",{parentName:"ul"},"Fee that will be deducted for this transaction")),(0,i.kt)("img",{src:"./images/phantom/tx_params.png",alt:"Transaction Params",width:"1000"}),(0,i.kt)("h3",{id:"lido-statistics"},"Lido Statistics"),(0,i.kt)("p",null,"Just below the transaction parameters you also see global Lido statistics. This gives you a clear idea of how much SOL is being staked worldwide and other information regarding the liquid staking ecosystem."),(0,i.kt)("img",{src:"./images/phantom/lido_params.png",alt:"Lido Params",width:"1000"}),(0,i.kt)("h3",{id:"faqs"},"FAQs"),(0,i.kt)("p",null,"You can see the FAQ section right below the Lido statistics. It is prudent to familiarize yourself with some of the basic features of liquid staking and the risks involved. The FAQ section also gives more information about the stSOL and its value. In case, you have even more questions you can always reach out to the Lido team or Chorus One for any clarifications. The contact information is given at the end of this article."),(0,i.kt)("img",{src:"./images/common/faqs.png",alt:"FAQs",width:"1000"}),(0,i.kt)("h2",{id:"step-4-stake-your-sol"},"Step 4: Stake your SOL"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"./images/common/stake.png",alt:"stake",width:"750"})),(0,i.kt)("p",null,"To stake your SOL with lido enter the amount you wanter to stake. Once you submit you might get redirected to your wallet. On the lido widget will see a pop-up showing the state of your transaction. The Lido widget waits for you to approve this transaction through your wallet."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note ",(0,i.kt)("strong",{parentName:"p"},"This transaction will only go through if you go back to your wallet and approve it."))),(0,i.kt)("img",{src:"./images/phantom/staking.png",alt:"staking",width:"1000"}),(0,i.kt)("p",null,"You get additional information about the transaction details while approving the transaction. Go ahead and approve the transaction."),(0,i.kt)("img",{src:"./images/phantom/approve.png",alt:"approve",width:"1000"}),(0,i.kt)("p",null,"After verifying the information you can approve now."),(0,i.kt)("h2",{id:"step-5-view-the-transaction-on-blockexplorer"},"Step 5: View the transaction on Blockexplorer"),(0,i.kt)("p",null,"Once you hit approve on your wallet, you can come back to the lido widget and click on ",(0,i.kt)("strong",{parentName:"p"},"View on Solana Blockexplorer.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"./images/common/view_tx.png",alt:"view_tx",width:"500"})),(0,i.kt)("p",null,"This is useful as it tells you the ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.solana.com/tx/3jDcSYVRVUEyNfTVZ6T6WaddAKq24wyp5PapndbrzUQj2xbk3LAuSaTp4B2UAfseobQsTNaBsWaW5hzEqPwkyQKB?cluster=testnet"},"current status")," of your transaction."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Link for the above transaction - ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.solana.com/tx/3jDcSYVRVUEyNfTVZ6T6WaddAKq24wyp5PapndbrzUQj2xbk3LAuSaTp4B2UAfseobQsTNaBsWaW5hzEqPwkyQKB?cluster=testnet"},"https://explorer.solana.com/tx/3jDcSYVRVUEyNfTVZ6T6WaddAKq24wyp5PapndbrzUQj2xbk3LAuSaTp4B2UAfseobQsTNaBsWaW5hzEqPwkyQKB?cluster=testnet"))),(0,i.kt)("p",null,"If you look at the Confirmations field you can slowly see it increasing from 0 to 32. Once it reaches the MAX number of confirmations your transaction gets added to the blockchain"),(0,i.kt)("img",{src:"./images/phantom/confirmations1.png",alt:"View Tx on Blockexplorer",width:"1000"}),(0,i.kt)("img",{src:"./images/phantom/confirmations2.png",alt:"View Tx on Blockexplorer",width:"1000"}),(0,i.kt)("img",{src:"./images/phantom/confirmations3.png",alt:"View Tx on Blockexplorer",width:"1000"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Finally after 32 confirmations, our transaction gets confirmed")),(0,i.kt)("img",{src:"./images/phantom/confirmations4.png",alt:"View Tx on Blockexplorer",width:"1000"}),(0,i.kt)("p",null,"You can now go back to the Lido widget and look at your updated stSOL balance. Just below the stSOL balance, you will also be able to see the amount of SOL you can get back for it a.k.a the exchange rate."),(0,i.kt)("img",{src:"./images/phantom/update.png",alt:"update",width:"1000"}),(0,i.kt)("p",null,"Zooming into the widget we can observe the new SOL balance and the updated stSOL balance"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note 1: We had 2 SOL in the beginning and we staked 1 SOL. We should be left with 1 SOL but we had to pay an additional 0.0021 SOL as the rent for the new stSOL account that got created for us.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note 2: This rent is a one-time fee that won\u2019t reccur on the next staking transaction.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"./images/phantom/updated.png",alt:"updated",width:"450"})),(0,i.kt)("h2",{id:"withdrawing-solana"},"Withdrawing Solana"),(0,i.kt)("p",null,"Withdrawals are not enabled yet. They will be live within the coming months. If you click on the ",(0,i.kt)("strong",{parentName:"p"},"Unstake")," tab you will see an error message pop up."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"./images/common/unstake.png",alt:"Unstake",width:"450"})),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://medium.com/chorus-one/introducing-lido-for-solana-8aa02db8503"},"Introducing Lido for Solana")," - Explaining the SOL liquid staking solution by Chorus One"))}u.isMDXComponent=!0},923:function(t,e,o){"use strict";e.Z=o.p+"assets/images/widget-e2704ae984009eee59cfd911dc01736a.png"}}]);