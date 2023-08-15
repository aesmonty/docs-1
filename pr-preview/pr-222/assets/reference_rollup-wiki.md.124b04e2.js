import{_ as t,o as e,c as o,V as i}from"./chunks/framework.50c170cb.js";const f=JSON.parse('{"title":"Rollup Wiki","description":"","frontmatter":{},"headers":[],"relativePath":"reference/rollup-wiki.md","filePath":"reference/rollup-wiki.md","lastUpdated":1692119203000}'),s={name:"reference/rollup-wiki.md"},a=i('<h1 id="rollup-wiki" tabindex="-1">Rollup Wiki <a class="header-anchor" href="#rollup-wiki" aria-label="Permalink to &quot;Rollup Wiki&quot;">​</a></h1><p>A wiki of terms to define different Rollup designs and terminology:</p><p><strong>Terminology</strong>:</p><ul><li><strong>Aggregation</strong> is the process of batching transactions into one batch. A batch of transactions consists of one or more transactions.</li><li>A <strong>based rollup</strong> is a rollup that delegates aggregation to a DA-Layer.</li><li><strong>Execution</strong> is the process by which the transactions in the blockchain are processed and their effects are applied to the state of the blockchain.</li><li><strong>Header production</strong> is the process of creating the Rollup header backed by specific security properties.</li><li><strong>Inclusion</strong> is the process by which a transaction is accepted into the blockchain.</li><li><strong>Ordering</strong> is the process of arranging transactions in a specific sequence in the blockchain.</li><li>A <strong>pessimistic rollup</strong> is a rollup that only supports full nodes that replay all the transactions in the rollup to check its validity.</li><li><strong>Rollup Block</strong> is a data structure representing the Blockchain at a certain height. It consists of <strong>Rollup Data</strong> and <strong>Rollup Headers</strong>.</li><li><strong>Rollup Data</strong> is either a batch of transactions or the state difference between transaction batches.</li><li><strong>Rollup Header</strong> is metadata about the block which at minimum includes a commitment to the transactions in that blocks.</li><li><strong>Rollups</strong> are blockchains that post their Transaction Data to another blockchain and inherit its consensus and data availability.</li><li><strong>Sequencing</strong> is the process of aggregation and header production.</li></ul>',4),n=[a];function r(l,c,h,p,g,d){return e(),o("div",null,n)}const _=t(s,[["render",r]]);export{f as __pageData,_ as default};
