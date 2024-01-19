import{_ as s,K as i,o as e,c as o,b as n,w as a,a5 as h,X as t,O as l,a as d}from"./chunks/framework.a6c35d17.js";const y=JSON.parse('{"title":"Pessimistic Rollup with a Shared Sequencer","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Pessimistic Rollup with a Shared Sequencer | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"learn/pessimistic-rollup-with-a-shared-sequencer.md","filePath":"learn/pessimistic-rollup-with-a-shared-sequencer.md","lastUpdated":1705677915000}'),c={name:"learn/pessimistic-rollup-with-a-shared-sequencer.md"},u=t("",5),p=t("",15);function m(g,S,f,A,q,_){const r=i("Mermaid");return e(),o("div",null,[u,(e(),n(h,null,{default:a(()=>[l(r,{id:"mermaid-15",graph:"graph%20TB%0A%20%20U%5B%22User%22%5D%20--%3E%20T%5B%22Transaction%22%5D%20--%3E%20SA%5B%22Shared%20Aggregator%22%5D%0A%0A%20%20subgraph%20A%5B%22Aggregator%22%5D%0A%20%20%20%20SA%20--%3E%20OB1%5B%22Ordered%20Batch%22%5D%20--%3E%20DAL%5B%22DA-Layer%22%5D%0A%20%20%20%20SA%20--%3E%20OB2%5B%22Soft%20Committed%20Ordered%20Batch%20%5Cn%20%26%20Shared%20Aggregator%20Header%2B%22%5D%0A%20%20end%0A%20%20%0A%20%20OB2%20--%3E%20FN%5B%22Rollup%20Full%20Node%22%5D%0A%20%20DAL%20--%3E%20OB3%5B%22Ordered%20Batch%22%5D%20--%3E%20FN%0A%0A%20%20style%20U%20stroke%3AcurrentColor%2C%20fill%3A%23FFA07A%0A%20%20style%20SA%20stroke%3AcurrentColor%2C%20fill%3A%2387CEFA%0A%20%20style%20FN%20stroke%3AcurrentColor%2C%20fill%3A%2398FB98%0A%20%20style%20DAL%20stroke%3AcurrentColor%2C%20fill%3A%23D8BFD8%0A"})]),fallback:a(()=>[d(" Loading... ")]),_:1})),p])}const D=s(c,[["render",m]]);export{y as __pageData,D as default};
