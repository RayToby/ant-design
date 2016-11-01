webpackJsonp([8,197],{70:function(n,a,s){"use strict";s(6),s(123)},95:function(n,a,s){"use strict";s(6),s(365)},115:function(n,a,s){"use strict";s(6),s(224)},123:function(n,a){},224:function(n,a){},365:function(n,a){},894:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(115),s(149)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u4e00\u4e2a\u7b80\u5355\u7684 loading \u72b6\u6001\u3002"]],"en-US":[["p","A simple loading status."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c\u7528\u6cd5","en-US":"basic Usage"},filename:"components/spin/demo/basic.md",id:"components-spin-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(e["default"],null)}}},895:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(115),s(149)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u653e\u5165\u4e00\u4e2a\u5bb9\u5668\u4e2d\u3002"]],"en-US":[["p","Spin in a container."]]},meta:{order:2,title:{"zh-CN":"\u5bb9\u5668","en-US":"Inside a container"},filename:"components/spin/demo/inside.md",id:"components-spin-demo-inside"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",{className:"example"},c["default"].createElement(e["default"],null))},style:".example {\n  text-align: center;\n  background: rgba(0,0,0,0.05);\n  border-radius: 4px;\n  margin-bottom: 20px;\n  padding: 30px 50px;\n  margin: 20px 0;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.example</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >text-align</span><span class="token punctuation" >:</span> center<span class="token punctuation" >;</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token function" >rgba</span><span class="token punctuation" >(</span><span class="token number" >0</span>,<span class="token number" >0</span>,<span class="token number" >0</span>,<span class="token number" >0.05</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token property" >border-radius</span><span class="token punctuation" >:</span> <span class="token number" >4</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin-bottom</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >30</span>px <span class="token number" >50</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px <span class="token number" >0</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},896:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(70),s(97)),e=t(p),o=(s(115),s(149)),c=t(o),l=(s(95),s(94)),u=t(l),i=s(1),k=t(i),r=s(2);t(r);n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u76f4\u63a5\u628a\u5185\u5bb9\u5185\u5d4c\u5230 ",["code","Spin"]," \u4e2d\uff0c\u5c06\u73b0\u6709\u5bb9\u5668\u53d8\u4e3a\u52a0\u8f7d\u72b6\u6001\u3002"]],"en-US":[["p","Embedding content into ",["code","Spin"]," will alter it into loading state."]]},meta:{order:3,title:{"zh-CN":"\u5361\u7247\u52a0\u8f7d\u4e2d","en-US":"Embedded mode"},filename:"components/spin/demo/nested.md",id:"components-spin-demo-nested"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin<span class="token punctuation" >,</span> Switch<span class="token punctuation" >,</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Card <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span> loading<span class="token punctuation" >:</span> <span class="token boolean" >false</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >toggle</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> loading<span class="token punctuation" >:</span> value <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> container <span class="token operator" >=</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Alert</span> <span class="token attr-name" >message</span> <span class="token attr-name" >title"</span>\n        <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Further</span> <span class="token attr-name" >details</span> <span class="token attr-name" >about</span> <span class="token attr-name" >the</span> <span class="token attr-name" >context</span> <span class="token attr-name" >of</span> <span class="token attr-name" >this</span> <span class="token attr-name" >alert."</span>\n        <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span>\n      <span class="token punctuation" >/></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >spinning</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>loading<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>container<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Spin</span><span class="token punctuation" >></span></span>\n        Loading state\uff1a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >checked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>loading<span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>toggle<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=k["default"].createClass({displayName:"Card",getInitialState:function(){return{loading:!1}},toggle:function(n){this.setState({loading:n})},render:function(){var n=k["default"].createElement(u["default"],{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"});return k["default"].createElement("div",null,k["default"].createElement(c["default"],{spinning:this.state.loading},n),"Loading state\uff1a",k["default"].createElement(e["default"],{checked:this.state.loading,onChange:this.toggle}))}});return k["default"].createElement(n,null)}}},897:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(115),s(149)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u5c0f\u7684\u7528\u4e8e\u6587\u672c\u52a0\u8f7d\uff0c\u9ed8\u8ba4\u7528\u4e8e\u5361\u7247\u5bb9\u5668\u7ea7\u52a0\u8f7d\uff0c\u5927\u7684\u7528\u4e8e",["strong","\u9875\u9762\u7ea7"],"\u52a0\u8f7d\u3002"]],"en-US":[["p","A small ",["code","Spin"]," use in loading text, default ",["code","Spin"]," use in loading card-level block, and large ",["code","Spin"]," use in loading ",["strong","page"],"."]]},meta:{order:1,title:{"zh-CN":"\u5404\u79cd\u5927\u5c0f","en-US":"Size"},filename:"components/spin/demo/size.md",id:"components-spin-demo-size"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>large<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(e["default"],{size:"small"}),c["default"].createElement(e["default"],null),c["default"].createElement(e["default"],{size:"large"}))},style:"\n.ant-spin {\n  margin-right: 16px;\n}\n"}},898:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(115),s(149)),e=t(p),o=(s(95),s(94)),c=t(o),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:{"zh-CN":[["p","\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848\u3002"]],"en-US":[["p","Customized description content."]]},meta:{order:4,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848","en-US":"Customized description"},filename:"components/spin/demo/tip.md",id:"components-spin-demo-tip"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin<span class="token punctuation" >,</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >tip</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Loading...<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Alert</span> <span class="token attr-name" >message</span> <span class="token attr-name" >title"</span>\n      <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Further</span> <span class="token attr-name" >details</span> <span class="token attr-name" >about</span> <span class="token attr-name" >the</span> <span class="token attr-name" >context</span> <span class="token attr-name" >of</span> <span class="token attr-name" >this</span> <span class="token attr-name" >alert."</span>\n      <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span>\n    <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Spin</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement(e["default"],{tip:"Loading..."},u["default"].createElement(c["default"],{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"}))}}},1178:function(n,a,s){n.exports={basic:s(894),inside:s(895),nested:s(896),size:s(897),tip:s(898)}}});