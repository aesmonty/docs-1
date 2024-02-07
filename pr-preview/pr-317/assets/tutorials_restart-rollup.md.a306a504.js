import{_ as s,o as a,c as o,X as l}from"./chunks/framework.ac4af93b.js";const A=JSON.parse('{"title":"🔄 How to restart your rollup","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"🔄 How to restart your rollup | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/restart-rollup.md","filePath":"tutorials/restart-rollup.md","lastUpdated":1707333102000}'),e={name:"tutorials/restart-rollup.md"},n=l(`<h1 id="🔄-how-to-restart-your-rollup" tabindex="-1">🔄 How to restart your rollup <a class="header-anchor" href="#🔄-how-to-restart-your-rollup" aria-label="Permalink to &quot;🔄 How to restart your rollup&quot;">​</a></h1><p>This guide will teach you how to restart your Rollkit rollup.</p><h2 id="restart-rollup" tabindex="-1">Restart rollup <a class="header-anchor" href="#restart-rollup" aria-label="Permalink to &quot;Restart rollup&quot;">​</a></h2><p>This section covers the case where you need to restart your rollup.</p><p>In order to restart your rollup, you will need to run the <code>&lt;your-binary&gt;d start [...args]</code> command for your rollup. This <a href="https://github.com/rollkit/docs/blob/8c69bfc1a545b758a260198feecb39806e9794a7/scripts/gm/init-local.sh#L94" target="_blank" rel="noreferrer">is the example for the GM world tutorial</a>.</p><p>For the GM world tutorial, you can restart the chain by <a href="https://github.com/rollkit/docs/blob/8c69bfc1a545b758a260198feecb39806e9794a7/scripts/gm/init-local.sh#L85-L91" target="_blank" rel="noreferrer">running the <code>restart-local.sh</code> script that was generated by <code>init-local.sh</code></a>.</p><p>Use the <code>DA_START_HEIGHT</code>, <code>NAMESPACE</code>, and <code>AUTH_TOKEN</code> variables from your original start command.</p><p>Using the <code>gmd</code> rollup as an example, you can add something similar to your respective start script to make it easier to save variables for later use:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># the rest of your init script</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># create a restart-local.sh file to restart the chain later</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart-local.sh</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">DA_BLOCK_HEIGHT=</span><span style="color:#A6ACCD;">$DA_BLOCK_HEIGHT</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart-local.sh</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NAMESPACE=</span><span style="color:#A6ACCD;">$NAMESPACE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart-local.sh</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">AUTH_TOKEN=</span><span style="color:#A6ACCD;">$AUTH_TOKEN</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart-local.sh</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">gmd start --rollkit.aggregator true --rollkit.da_layer celestia --rollkit.da_config=&#39;{</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">base_url</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">http://localhost:26658</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">timeout</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:60000000000,</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">fee</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:600000,</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">gas_limit</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:6000000,</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">auth_token</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">&#39;</span><span style="color:#A6ACCD;">\\$</span><span style="color:#C3E88D;">AUTH_TOKEN&#39;</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">}&#39; --rollkit.namespace_id </span><span style="color:#A6ACCD;">\\$</span><span style="color:#C3E88D;">NAMESPACE --rollkit.da_start_height </span><span style="color:#A6ACCD;">\\$</span><span style="color:#C3E88D;">DA_BLOCK_HEIGHT --rpc.laddr tcp://127.0.0.1:36657 --p2p.laddr </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">0.0.0.0:36656</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart-local.sh</span></span></code></pre></div><h2 id="restart-rollup-after-running-out-of-funds" tabindex="-1">Restart rollup after running out of funds <a class="header-anchor" href="#restart-rollup-after-running-out-of-funds" aria-label="Permalink to &quot;Restart rollup after running out of funds&quot;">​</a></h2><p>This section covers the case that the node that you are using to post blocks to your DA and consensus layer runs out of funds (tokens), and you need to restart your rollup.</p><p>In this example, we&#39;re using Celestia&#39;s <a href="https://docs.celestia.org/nodes/mocha-testnet/" target="_blank" rel="noreferrer">Mocha testnet</a> and running a <a href="./gm-world">GM world rollup</a>. In this example, our Celestia DA light node ran out of Mocha testnet TIA and we are unable to post new blocks to Celestia due to a <a href="https://github.com/cosmos/cosmos-sdk/blob/main/types/errors/errors.go#L95" target="_blank" rel="noreferrer"><code>Code: 19</code></a> error. This error is defined by Cosmos SDK as:</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ErrTxInMempoolCache defines an ABCI typed error where a tx already exists in the mempool.</span></span>
<span class="line"><span style="color:#A6ACCD;">ErrTxInMempoolCache </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Register</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">RootCodespace</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">19</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tx already in mempool</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>In order to get around this error, and the same error on other Rollkit rollups, you will need to re-fund your Celestia account and increase the gas fee. This will override the transaction that is stuck in the mempool.</p><p>If you top up the balance of your node and don&#39;t increase the gas fee, you will still encounter the <code>Code: 19</code> error because there is a transaction (posting block to DA) that is duplicate to one that already exists. In order to get around this, you&#39;ll need to increase the gas fee and restart the chain.</p><h3 id="errors" tabindex="-1">🟠 Errors in this example <a class="header-anchor" href="#errors" aria-label="Permalink to &quot;🟠 Errors in this example {#errors}&quot;">​</a></h3><p>This is what the errors will look like if your DA node runs out of funding or you restart the chain without changing the gas fee:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">4:51PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submitting</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">28126</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">4:51PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ERR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submission</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">failed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">error=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Codespace: &#39;sdk&#39;, Code: 19, Message: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">attempt=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">4:51PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ERR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submission</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">failed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Error=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Codespace: &#39;sdk&#39;, Code: 19, Message: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">attempt=</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">4:51PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ERR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submission</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">failed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">error=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Codespace: &#39;sdk&#39;, Code: 19, Message: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">attempt=</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span></code></pre></div><h3 id="refund-your-account" tabindex="-1">💰 Re-fund your account <a class="header-anchor" href="#refund-your-account" aria-label="Permalink to &quot;💰 Re-fund your account {#refund-your-account}&quot;">​</a></h3><p>First, you&#39;ll need to send more tokens to the account running your Celestia node. If you didn&#39;t keep track of your key, you can run the following to get your address:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> $HOME </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">celestia-node</span></span>
<span class="line"><span style="color:#FFCB6B;">./cel-key</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--keyring-backend</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--node.type</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">light</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--p2p.network</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">networ</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="stopping-your-rollup" tabindex="-1">🛑 Stopping your rollup <a class="header-anchor" href="#stopping-your-rollup" aria-label="Permalink to &quot;🛑 Stopping your rollup {#stopping-your-rollup}&quot;">​</a></h3><p>You can stop your gm chain (or other Rollkit rollup) by using <code>Control + C</code> in your terminal where the node is running.</p><h3 id="increase-gas-fee" tabindex="-1">⛽ Increase the gas fee <a class="header-anchor" href="#increase-gas-fee" aria-label="Permalink to &quot;⛽ Increase the gas fee {#increase-gas-fee}&quot;">​</a></h3><p>To reiterate, before restarting the chain, you will need to increase the gas fee in order to avoid a <code>Code: 19</code> error:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">gmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.aggregator</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.da_layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">celestia</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.da_config=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;base_url&quot;:&quot;http://localhost:26658&quot;,&quot;timeout&quot;:60000000000,&quot;fee&quot;:800000,&quot;gas_limit&quot;:6000000,&quot;auth_token&quot;:&quot;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">$AUTH_TOKEN</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&quot;}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.namespace_id</span><span style="color:#A6ACCD;"> $NAMESPACE </span><span style="color:#C3E88D;">--rollkit.da_start_height</span><span style="color:#A6ACCD;"> $DA_BLOCK_HEIGHT </span><span style="color:#C3E88D;">--rpc.laddr</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tcp://127.0.0.1:36657</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--p2p.laddr</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.0.0.0:36656</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><h3 id="restarting-your-rollup" tabindex="-1">🔁 Restarting your rollup <a class="header-anchor" href="#restarting-your-rollup" aria-label="Permalink to &quot;🔁 Restarting your rollup {#restarting-your-rollup}&quot;">​</a></h3><p>Follow the <a href="#restart-rollup">restart rollup</a> section above.</p><h3 id="reduce-gas-fee-restart-again" tabindex="-1">🛢️ Reduce gas fee &amp; restart again <a class="header-anchor" href="#reduce-gas-fee-restart-again" aria-label="Permalink to &quot;🛢️ Reduce gas fee &amp; restart again {#reduce-gas-fee-restart-again}&quot;">​</a></h3><p>In order to save your TIA, we also recommend stopping the chain with <code>Control + C</code>, changing the gas fee back to the default (in our case, 8000 utia) and restarting the chain:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">gmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.aggregator</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.da_layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">celestia</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.da_config=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;base_url&quot;:&quot;http://localhost:26658&quot;,&quot;timeout&quot;:60000000000,&quot;fee&quot;:600000,&quot;gas_limit&quot;:6000000,&quot;auth_token&quot;:&quot;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">$AUTH_TOKEN</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&quot;}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.namespace_id</span><span style="color:#A6ACCD;"> $NAMESPACE </span><span style="color:#C3E88D;">--rollkit.da_start_height</span><span style="color:#A6ACCD;"> $DA_BLOCK_HEIGHT </span><span style="color:#C3E88D;">--rpc.laddr</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tcp://127.0.0.1:36657</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--p2p.laddr</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.0.0.0:36656</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>🎊 Congrats! You&#39;ve successfully restarted your Rollkit rollup after running out of TIA.</p>`,32),t=[n];function r(p,c,C,y,i,D){return a(),o("div",null,t)}const d=s(e,[["render",r]]);export{A as __pageData,d as default};
