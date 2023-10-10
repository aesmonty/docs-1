import{_ as e,o as t,c as a,X as l}from"./chunks/framework.34f146d0.js";const m=JSON.parse('{"title":"Building with Rollkit","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Building with Rollkit | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"learn/building-with-rollkit.md","filePath":"learn/building-with-rollkit.md","lastUpdated":1696978110000}'),n={name:"learn/building-with-rollkit.md"},s=l(`<h1 id="building-with-rollkit" tabindex="-1">Building with Rollkit <a class="header-anchor" href="#building-with-rollkit" aria-label="Permalink to &quot;Building with Rollkit&quot;">​</a></h1><p>While Rollkit is a modular framework that aims to be compatible with a wide range of data availability layers, settlement layers, and execution environments, the most supported development environment is building on Celestia as a data availability layer.</p><h2 id="building-from-source" tabindex="-1">Building from source <a class="header-anchor" href="#building-from-source" aria-label="Permalink to &quot;Building from source&quot;">​</a></h2><h3 id="dependencies" tabindex="-1">Dependencies <a class="header-anchor" href="#dependencies" aria-label="Permalink to &quot;Dependencies&quot;">​</a></h3><ul><li>Requires Go version &gt;= 1.19</li></ul><p>To build:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/rollkit/rollkit.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rollkit</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./...</span></span></code></pre></div><h2 id="building-on-celestia" tabindex="-1">Building on Celestia <a class="header-anchor" href="#building-on-celestia" aria-label="Permalink to &quot;Building on Celestia&quot;">​</a></h2><p>There are currently 2 ways to build on Celestia:</p><ol><li>Using a local development environment with <a href="https://github.com/rollkit/local-celestia-devnet" target="_blank" rel="noreferrer">local-celestia-devnet</a></li><li>Using the Arabica or Mocha Celestia testnets*</li></ol><h3 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h3><table><thead><tr><th>network</th><th>rollkit</th><th>celestia-node</th><th>celestia-app</th></tr></thead><tbody><tr><td>local-celestia-devnet</td><td>v0.10.2</td><td>v0.11.0-rc8</td><td>v1.0.0-rc7</td></tr><tr><td>arabica</td><td>v0.10.2</td><td>v0.11.0-rc8</td><td>v1.0.0-rc7</td></tr></tbody></table><table><thead><tr><th>rollkit/cosmos-sdk</th><th>rollkit/cometbft</th><th>rollkit</th></tr></thead><tbody><tr><td>v0.47.3-rollkit-v0.10.2-no-fraud-proofs</td><td>v0.37.2</td><td>v0.10.2</td></tr><tr><td>v0.45.16-rollkit-v0.9.0-no-fraud-proofs</td><td>v0.0.0-20230524013001-2968c8b8b121</td><td>v0.9.0</td></tr></tbody></table><h3 id="local-development-environment" tabindex="-1">Local Development Environment <a class="header-anchor" href="#local-development-environment" aria-label="Permalink to &quot;Local Development Environment&quot;">​</a></h3><p>The Rollkit v0.10.2 release is compatible with the <a href="https://github.com/rollkit/local-celestia-devnet" target="_blank" rel="noreferrer">local-celestia-devnet</a> <a href="https://github.com/rollkit/local-celestia-devnet/releases/tag/v0.11.0-rc8" target="_blank" rel="noreferrer">oolong</a> release. This version combination is compatible with celestia-app <a href="https://github.com/celestiaorg/celestia-app/releases/tag/v1.0.0-rc7" target="_blank" rel="noreferrer">v1.0.0-rc7</a> and celestia-node <a href="https://github.com/celestiaorg/celestia-node/releases/tag/v0.11.0-rc8" target="_blank" rel="noreferrer">v0.11.0-rc8</a>.</p><h3 id="arabica-devnet-and-mocha-testnet" tabindex="-1">Arabica devnet and Mocha testnet <a class="header-anchor" href="#arabica-devnet-and-mocha-testnet" aria-label="Permalink to &quot;Arabica devnet and Mocha testnet&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>Rollkit v0.10.2 is not compatible with latest release of Mocha.</strong></p></div><p>The Rollkit v0.10.2 release is compatible with Arabica devnet which is running celestia-app <a href="https://github.com/celestiaorg/celestia-app/releases/tag/v1.0.0-rc7" target="_blank" rel="noreferrer">v1.0.0-rc7</a> and celestia-node <a href="https://github.com/celestiaorg/celestia-node/releases/tag/v0.11.0-rc8" target="_blank" rel="noreferrer">v0.11.0-rc8</a>.</p><h2 id="testing" tabindex="-1">Testing <a class="header-anchor" href="#testing" aria-label="Permalink to &quot;Testing&quot;">​</a></h2><ol><li>Install <a href="https://golangci-lint.run/usage/install/" target="_blank" rel="noreferrer">golangci-lint</a></li><li>Install <a href="https://github.com/DavidAnson/markdownlint" target="_blank" rel="noreferrer">markdownlint</a></li><li>Install <a href="https://github.com/hadolint/hadolint" target="_blank" rel="noreferrer">hadolint</a></li><li>Install <a href="https://yamllint.readthedocs.io/en/stable/quickstart.html" target="_blank" rel="noreferrer">yamllint</a></li></ol><h3 id="helpful-commands" tabindex="-1">Helpful Commands <a class="header-anchor" href="#helpful-commands" aria-label="Permalink to &quot;Helpful Commands&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Run unit tests</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test-unit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Run unit tests with the data race detector</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test-unit-race</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Run tests with and without the data race detector</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test-all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Generate protobuf files (requires Docker)</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">proto-gen</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Run linters (requires golangci-lint, markdownlint, hadolint, and yamllint)</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lint</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Lint protobuf files (requires Docker and buf)</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">proto-lint</span></span></code></pre></div><h2 id="contributing" tabindex="-1">Contributing <a class="header-anchor" href="#contributing" aria-label="Permalink to &quot;Contributing&quot;">​</a></h2><p>We welcome your contributions! Everyone is welcome to contribute, whether it&#39;s in the form of code, documentation, bug reports, feature requests, or anything else.</p><p>If you&#39;re looking for issues to work on, try looking at the <a href="https://github.com/rollkit/rollkit/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22" target="_blank" rel="noreferrer">Good First Issues</a> on GitHub. Issues with this tag are suitable for a new external contributor and is a great way to find something you can help with!</p><p>See the <a href="https://github.com/rollkit/rollkit/tree/main/CONTRIBUTING.md" target="_blank" rel="noreferrer">Contributing Guide</a> for more details.</p><p>Please join our <a href="https://t.me/rollkit" target="_blank" rel="noreferrer">Community Telegram</a> to ask questions, discuss your ideas, and connect with other contributors.</p><h2 id="dependency-graph" tabindex="-1">Dependency Graph <a class="header-anchor" href="#dependency-graph" aria-label="Permalink to &quot;Dependency Graph&quot;">​</a></h2><p>To see our progress and a possible future of Rollkit visit our <a href="https://github.com/rollkit/rollkit/tree/main/docs/specification/rollkit-dependency-graph.md" target="_blank" rel="noreferrer">Dependency Graph</a>.</p>`,29),o=[s];function i(r,c,p,d,h,u){return t(),a("div",null,o)}const g=e(n,[["render",i]]);export{m as __pageData,g as default};
