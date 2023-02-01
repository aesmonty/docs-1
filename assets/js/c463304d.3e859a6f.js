"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2,sidebar_label:"Rollkit Stack",description:"Intro to Rollkit's stack, a modular framework for rollups."},l="The Rollkit Stack",i={unversionedId:"rollkit-stack",id:"rollkit-stack",title:"The Rollkit Stack",description:"Intro to Rollkit's stack, a modular framework for rollups.",source:"@site/docs/rollkit-stack.md",sourceDirName:".",slug:"/rollkit-stack",permalink:"/docs/rollkit-stack",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/rollkit-stack.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Rollkit Stack",description:"Intro to Rollkit's stack, a modular framework for rollups."},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Tutorials",permalink:"/docs/category/tutorials"}},s={},p=[{value:"Rollup Application Dependencies",id:"rollup-application-dependencies",level:2},{value:"Mempool",id:"mempool",level:2},{value:"State Fraud Proofs",id:"state-fraud-proofs",level:2},{value:"P2P-Layer",id:"p2p-layer",level:2},{value:"DA-Access",id:"da-access",level:2},{value:"Rollkit Node Types",id:"rollkit-node-types",level:2},{value:"Sequencer node",id:"sequencer-node",level:3},{value:"Full node",id:"full-node",level:3},{value:"Light node",id:"light-node",level:3},{value:"Block-Manager",id:"block-manager",level:2},{value:"RPC Layer",id:"rpc-layer",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-rollkit-stack"},"The Rollkit Stack"),(0,r.kt)("p",null,"This section will cover the dependencies and customizeable components of Rollkit."),(0,r.kt)("p",null,"Rollup sequencer nodes collect transactions from users, aggregate them into blocks, and post the blocks onto Celestia (or other DA layer) to be ordered and finalized. Full nodes execute and verify rollup blocks, and propagate fraud-proofs when needed. Light clients receive headers, verify fraud proofs, and can authenticate trust-minimized queries about the state."),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you're familiar with Rollkit's stack, you may want to skip to the ",(0,r.kt)("a",{parentName:"p",href:"../category/tutorials"},"tutorials section"))),(0,r.kt)("p",null,"For an understanding of the Rollkit stack, let's first look at the key components of a rollup. A typical rollup has:"),(0,r.kt)("h2",{id:"rollup-application-dependencies"},"Rollup Application Dependencies"),(0,r.kt)("p",null,"Would you like to change your Cosmos-SDK application to a Rollkit rollup?\nNo problem! You need to replace the Cosmos-SDK Go dependency with\nRollkit-enabled version, which can be found\nhere: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rollkit/cosmos-sdk"},"https://github.com/rollkit/cosmos-sdk"),"."),(0,r.kt)("p",null,"To note, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rollkit/cosmos-sdk"},(0,r.kt)("inlineCode",{parentName:"a"},"rollkit/cosmos-sdk"))," repository follows the release branches of\nupstream Cosmos-SDK, but with the bonus of using Rollkit instead of Tendermint\nas the ABCI client."),(0,r.kt)("p",null,"And don't forget to replace another dependency, ",(0,r.kt)("inlineCode",{parentName:"p"},"tendermint"),", with\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rollkit/tendermint"},(0,r.kt)("inlineCode",{parentName:"a"},"rollkit/tendermint")),", which has an enhanced ABCI interface that includes\nthe methods needed for state fraud proofs."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Requires Golang version 1.19+"))),(0,r.kt)("h2",{id:"mempool"},"Mempool"),(0,r.kt)("p",null,"The mempool keeps the set of pending transactions, and is used by block\nproducers to produce blocks and full nodes to verify blocks. Currently, transactions are handled by\nnodes in the First-Come, First-Served (FCFS) manner. Ordering of transactions\ncan be implemented on the application level (for example by adding\nnonce/sequence number). This behavior is similar to the Tendermint mempool."),(0,r.kt)("p",null,"We plan to make transaction ordering in blocks configurable in the future."),(0,r.kt)("h2",{id:"state-fraud-proofs"},"State Fraud Proofs"),(0,r.kt)("p",null,"Currently, Rollkit's design consists of a single sequencer that posts blocks to the DA layer, and multiple (optional) full nodes. Sequencers gossip block headers to full nodes and full nodes fetch posted blocks from the DA layer. Full nodes then execute transactions in these blocks to update their state, and gossip block headers over P2P to Rollkit light nodes. However, if a block contains a fraudulent state transition, Rollkit full nodes can detect it by comparing intermediate state roots (ISRs) between transactions, and generate a state fraud proof that can be gossiped over P2P to Rollkit light nodes. These Rollkit light nodes can use this state fraud proof to verify whether a fraudulent state transition occurred or not by themselves."),(0,r.kt)("p",null,"Overall, State Fraud Proofs enable trust-minimization between full nodes and light node as long as there is at least one honest full node in the system that will generate state fraud proofs."),(0,r.kt)("p",null,"Note that Rollkit State Fraud Proofs require new methods on top of ABCI, specifically, ",(0,r.kt)("inlineCode",{parentName:"p"},"GenerateFraudProof"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"VerifyFraudProof"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"GetAppHash"),"."),(0,r.kt)("p",null,"Future plans:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add ability for light nodes to receive and verify state fraud proofs."),(0,r.kt)("li",{parentName:"ul"},"Support for multiple sequencers in the future, in which case, fraud proof detection works the same as described above."),(0,r.kt)("li",{parentName:"ul"},"Support more ABCI-compatible State Machines, in addition to the Cosmos SDK state machine.")),(0,r.kt)("h2",{id:"p2p-layer"},"P2P-Layer"),(0,r.kt)("p",null,"Rollkit's P2P layer enables direct communication between rollup nodes.\nIt's used to gossip transactions, headers of newly created blocks and state fraud proofs.\nThe P2P layer is implemented using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/libp2p"},"libp2p"),"."),(0,r.kt)("p",null,"Rollkit uses ",(0,r.kt)("a",{parentName:"p",href:"https://curriculum.pl-launchpad.io/curriculum/libp2p/dht/"},"DHT-based active peer discovery"),".\nStarting a node connects to preconfigured bootstrap peers, and advertises it's namespace ID in DHT.\nThis solution is flexible, because multiple rollup networks may reuse the same DHT/bootstrap nodes,\nbut specific rollup network might decide to use dedicated nodes as well."),(0,r.kt)("h2",{id:"da-access"},"DA-Access"),(0,r.kt)("p",null,"Data Availability (DA) can be accessed using generic ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rollkit/rollkit/blob/main/da/da.go"},"interfaces"),". This design allows for seamless integration with any DA."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DataAvailabilityLayerClient")," interface includes essential life-cycle methods (",(0,r.kt)("inlineCode",{parentName:"p"},"Init"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Start"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Stop"),") as well as data-availability methods (",(0,r.kt)("inlineCode",{parentName:"p"},"SubmitBlock"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckBlockAvailability"),")."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockRetriever")," interface serves to enable syncing of full nodes from the Data Availability layer.\nIt's important to keep in mind that there is no direct correlation between the DA block height and the rollup height. Each DA block may contain an arbitrary number of rollup blocks."),(0,r.kt)("h2",{id:"rollkit-node-types"},"Rollkit Node Types"),(0,r.kt)("h3",{id:"sequencer-node"},"Sequencer node"),(0,r.kt)("p",null,"Some rollups utilize ",(0,r.kt)("em",{parentName:"p"},"sequencer nodes"),". Sequencers are the main block producers for rollups, respoonsible for aggregating transactions into blocks, and typically executing transactions to produce a state root, securing the rollup's light clients."),(0,r.kt)("p",null,"Rollkit plans to support multiple different pluggable sequencer schemes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"Deploy in one-click"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Faster soft-confirmations than L1"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Control over rollup's transaction ordering"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Atomic Composability with other Rollups"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Censorship resistance"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Implementation Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Centralized Sequencer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Requires spinning up a sequencer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No \u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Eventual \u23f3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Implemented! \u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Decentralized Sequencer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Requires spinning up a sequencer set"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No \u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Real-time \u26a1\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Coming soon \ud83d\udfe2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Shared Decentralized Sequencer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No \u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Real-time \u26a1\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Coming soon \ud83d\udfe2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Pure Fork-Choice Rule"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No \u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Maybe \ud83d\udfe1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Maybe \ud83d\udfe1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Eventual \u23f3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Coming soon \ud83d\udfe2")))),(0,r.kt)("h3",{id:"full-node"},"Full node"),(0,r.kt)("p",null,"Full nodes verify all blocks and can produce fraud proofs for optimistic rollups. Since they fully validate all rollup blocks, they don't rely on fraud or validity proofs for security."),(0,r.kt)("h3",{id:"light-node"},"Light node"),(0,r.kt)("p",null,"Light nodes are light-weight rollup nodes that authenticate block headers, and are secured by fraud proofs or validity proofs. They're recommended for average users on low-resource devices. Users running light nodes can make trust-minimized queries about the rollup's state."),(0,r.kt)("h2",{id:"block-manager"},"Block-Manager"),(0,r.kt)("p",null,"The Block Manager contains go routines, ",(0,r.kt)("inlineCode",{parentName:"p"},"AggregationLoop"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RetrieveLoop"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SyncLoop")," that communicate through go channels. These go routines are run when a Rollkit Node starts up (",(0,r.kt)("inlineCode",{parentName:"p"},"OnStart"),"). Only the Sequencer Nodes run ",(0,r.kt)("inlineCode",{parentName:"p"},"AggregatonLoop")," which controls the frequency of block production for a roll-up with a timer as per the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockTime")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockManager"),"."),(0,r.kt)("p",null,"All nodes run ",(0,r.kt)("inlineCode",{parentName:"p"},"SyncLoop")," which looks for the following operations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Receive block headers"),": Block headers are received through a channel ",(0,r.kt)("inlineCode",{parentName:"li"},"HeaderInCh")," and Rollkit Nodes attempt to verify the block with the corresponding block data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Receive block data"),": Block bodies are received through a channel ",(0,r.kt)("inlineCode",{parentName:"li"},"blockInCh")," and Rollkit Nodes attempt to verify the block."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Receive State Fraud Proofs"),": State Fraud Proofs are received through a channel ",(0,r.kt)("inlineCode",{parentName:"li"},"FraudProofInCh")," and Rollkit Notes attempt to verify them. Note that we plan to make this configurable for Full Nodes since Full Nodes also produce State Fraud Proofs on their own."),(0,r.kt)("li",{parentName:"ul"},"Signal ",(0,r.kt)("inlineCode",{parentName:"li"},"RetrieveLoop")," with timer as per the ",(0,r.kt)("inlineCode",{parentName:"li"},"DABlockTime")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"BlockManager"),".")),(0,r.kt)("p",null,"All nodes also run ",(0,r.kt)("inlineCode",{parentName:"p"},"RetrieveLoop")," which is responsible for interacting with the Data Availability layer. It checks the last updated ",(0,r.kt)("inlineCode",{parentName:"p"},"DAHeight")," to retrieve a block with timer ",(0,r.kt)("inlineCode",{parentName:"p"},"DABlockTime")," signaled by ",(0,r.kt)("inlineCode",{parentName:"p"},"SyncLoop"),". Note that the start height of the DA layer for the roll-up, ",(0,r.kt)("inlineCode",{parentName:"p"},"DAStartHeight"),", is configurable in ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockManager"),"."),(0,r.kt)("h2",{id:"rpc-layer"},"RPC Layer"),(0,r.kt)("p",null,"This layer is for exploring the rollup chain and submitting transactions."))}d.isMDXComponent=!0}}]);