import{_ as r,J as d,o as t,c,b as n,w as o,a5 as s,V as h,k as e,a,N as l}from"./chunks/framework.18088fb0.js";const D=JSON.parse('{"title":"Transaction flow","description":"","frontmatter":{},"headers":[],"relativePath":"reference/transaction-flow.md","filePath":"reference/transaction-flow.md","lastUpdated":1692307602000}'),u={name:"reference/transaction-flow.md"},p=h("",6),f=e("h2",{id:"transaction-validation-and-processing",tabindex:"-1"},[a("Transaction validation and processing "),e("a",{class:"header-anchor",href:"#transaction-validation-and-processing","aria-label":'Permalink to "Transaction validation and processing"'},"​")],-1),A=e("h2",{id:"block-processing",tabindex:"-1"},[a("Block processing "),e("a",{class:"header-anchor",href:"#block-processing","aria-label":'Permalink to "Block processing"'},"​")],-1),m=e("h2",{id:"fraud-proof-gossip-and-forking",tabindex:"-1"},[a("Fraud proof gossip and forking "),e("a",{class:"header-anchor",href:"#fraud-proof-gossip-and-forking","aria-label":'Permalink to "Fraud proof gossip and forking"'},"​")],-1),g=e("p",null,"To transact, users submit a transaction to their light node, which gossips the transaction to a full node. Before adding the transaction to their mempool, the full node checks its validity. Valid transactions are included in the mempool, while invalid ones are refused, and the user's transaction will not be processed.",-1),b=e("p",null,"If the transaction is valid and has been included in the mempool, the sequencer can add it to a rollup block, which is then submitted to the data availability (DA) layer. This results in a successful transaction flow for the user, and the state of the rollup is updated accordingly.",-1),k=e("p",null,"After the block is submitted to the DA layer, the full nodes download and validate the block. However, there is a possibility that the sequencer may maliciously submit a block to the DA layer with invalid transactions or state. In such cases, the full nodes of the rollup chain will consider the block invalid. In the case of an optimistic rollup, if they find the block invalid, they generate fraud proofs and gossip them in the P2P network among other full and light nodes.",-1),_=e("p",null,[a("As a result, the rollup chain will halt, and the network will decide to fork the chain through social consensus. In the future, when a decentralized sequencer scheme is in place, additional options will be available, such as slashing the sequencer or selecting another full node as the sequencer. However, in any case, a new block must be created and submitted to the DA layer. You can read more about sequencer nodes "),e("a",{href:"/pr-preview/pr-226/reference/stack#sequencer-node"},"here"),a(".")],-1);function w(N,E,v,F,y,T){const i=d("Mermaid");return t(),c("div",null,[p,(t(),n(s,null,{default:o(()=>[l(i,{id:"mermaid-29",graph:"sequenceDiagram%0A%20%20%20%20participant%20User%0A%20%20%20%20participant%20LightNode%0A%20%20%20%20participant%20FullNode%0A%20%20%20%20%0A%20%20%20%20User-%3E%3ELightNode%3A%20Submit%20Transaction%0A%20%20%20%20LightNode-%3E%3EFullNode%3A%20Gossip%20Transaction%0A%20%20%20%20FullNode--%3E%3EUser%3A%20Refuse%20(if%20invalid)%0A"})]),fallback:o(()=>[a(" Loading... ")]),_:1})),f,(t(),n(s,null,{default:o(()=>[l(i,{id:"mermaid-33",graph:"sequenceDiagram%0A%20%20%20%20participant%20FullNode%0A%20%20%20%20participant%20Sequencer%0A%0A%20%20%20%20FullNode-%3E%3EFullNode%3A%20Check%20Validity%0A%20%20%20%20FullNode-%3E%3EFullNode%3A%20Add%20to%20Mempool%20(if%20valid)%0A%20%20%20%20FullNode--%3E%3EUser%3A%20Transaction%20Processed%20(if%20valid)%0A%20%20%20%20FullNode-%3E%3ESequencer%3A%20Inform%20about%20Valid%20Transaction%0A%20%20%20%20Sequencer-%3E%3EDALayer%3A%20Add%20to%20Rollup%20Block%0A"})]),fallback:o(()=>[a(" Loading... ")]),_:1})),A,(t(),n(s,null,{default:o(()=>[l(i,{id:"mermaid-37",graph:"sequenceDiagram%0A%20%20%20%20participant%20DALayer%0A%20%20%20%20participant%20FullNode%0A%20%20%20%20participant%20RollupChain%0A%0A%20%20%20%20DALayer-%3E%3ERollupChain%3A%20Update%20State%0A%20%20%20%20DALayer-%3E%3EFullNode%3A%20Download%20%26%20Validate%20Block%0A%20%20%20%20FullNode-%3E%3EFullNode%3A%20Generate%20Fraud%20Proofs%20(if%20invalid)%0A"})]),fallback:o(()=>[a(" Loading... ")]),_:1})),m,(t(),n(s,null,{default:o(()=>[l(i,{id:"mermaid-41",graph:"sequenceDiagram%0A%20%20%20%20participant%20FullNode%0A%20%20%20%20participant%20LightNode%0A%20%20%20%20participant%20RollupChain%0A%0A%20%20%20%20FullNode-%3E%3ELightNode%3A%20Gossip%20Fraud%20Proofs%20(if%20invalid)%0A%20%20%20%20RollupChain-%3E%3ERollupChain%3A%20Halt%20%26%20Decide%20to%20Fork%20(if%20invalid)%0A%20%20%20%20RollupChain-%3E%3EDALayer%3A%20Submit%20New%20Block%20(after%20fork)%0A"})]),fallback:o(()=>[a(" Loading... ")]),_:1})),g,b,k,_])}const P=r(u,[["render",w]]);export{D as __pageData,P as default};
