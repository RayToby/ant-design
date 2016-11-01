webpackJsonp([29,197],{38:function(n,a,s){"use strict";s(6),s(76)},76:function(n,a){},294:function(n,a,s){"use strict";s(6),s(1514),s(24),s(38)},981:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(294),s(244)),e=t(p),o=s(1),c=t(o),u=s(2);t(u);n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"]],"en-US":[["p","The most basic usage."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/tree-select/demo/basic.md",id:"components-tree-select-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TreeSelect <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> TreeNode <span class="token operator" >=</span> TreeSelect<span class="token punctuation" >.</span>TreeNode<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Demo <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> undefined<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>arguments<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> value <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeSelect</span>\n        <span class="token attr-name" >showSearch</span>\n        <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >300</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >dropdownStyle</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> maxHeight<span class="token punctuation" >:</span> <span class="token number" >400</span><span class="token punctuation" >,</span> overflow<span class="token punctuation" >:</span> <span class="token string" >\'auto\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Please</span> <span class="token attr-name" >select"</span>\n        <span class="token attr-name" >allowClear</span>\n        <span class="token attr-name" >treeDefaultExpandAll</span>\n        <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onChange<span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeNode</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>parent</span> <span class="token attr-name" >1"</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>parent</span> <span class="token attr-name" >1"</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>0-1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeNode</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>parent</span> <span class="token attr-name" >1-0"</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>parent</span> <span class="token attr-name" >1-0"</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>0-1-1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeNode</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>leaf1<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>my</span> <span class="token attr-name" >leaf"</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>random<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeNode</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>leaf2<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>your</span> <span class="token attr-name" >leaf"</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>random1<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TreeNode</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeNode</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>parent</span> <span class="token attr-name" >1-1"</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>parent</span> <span class="token attr-name" >1-1"</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>random2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeNode</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sss<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>b style<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> color<span class="token punctuation" >:</span> <span class="token string" >\'#08c\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>sss<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>b</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span> key<span class="token operator" >=</span><span class="token string" >"random3"</span> <span class="token operator" >/</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TreeNode</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TreeNode</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TreeSelect</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Demo</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=e["default"].TreeNode,a=c["default"].createClass({displayName:"Demo",getInitialState:function(){return{value:void 0}},onChange:function(n){console.log(arguments),this.setState({value:n})},render:function(){return c["default"].createElement(e["default"],{showSearch:!0,style:{width:300},value:this.state.value,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Please select",allowClear:!0,treeDefaultExpandAll:!0,onChange:this.onChange},c["default"].createElement(n,{value:"parent 1",title:"parent 1",key:"0-1"},c["default"].createElement(n,{value:"parent 1-0",title:"parent 1-0",key:"0-1-1"},c["default"].createElement(n,{value:"leaf1",title:"my leaf",key:"random"}),c["default"].createElement(n,{value:"leaf2",title:"your leaf",key:"random1"})),c["default"].createElement(n,{value:"parent 1-1",title:"parent 1-1",key:"random2"},c["default"].createElement(n,{value:"sss",title:c["default"].createElement("b",{style:{color:"#08c"}},"sss"),key:"random3"}))))}});return c["default"].createElement(a,null)}}},982:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(294),s(244)),e=t(p),o=s(1),c=t(o),u=s(2);t(u);n.exports={content:{"zh-CN":[["p","\u591a\u9009\u548c\u52fe\u9009\u6846\u529f\u80fd\u3002"]],"en-US":[["p","Multiple and checkable."]]},meta:{order:2,title:{"zh-CN":"\u591a\u9009","en-US":"Multiple"},filename:"components/tree-select/demo/checkable.md",id:"components-tree-select-demo-checkable"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TreeSelect <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> SHOW_PARENT <span class="token operator" >=</span> TreeSelect<span class="token punctuation" >.</span>SHOW_PARENT<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> treeData <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  label<span class="token punctuation" >:</span> <span class="token string" >\'Node1\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'0-0\'</span><span class="token punctuation" >,</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'0-0\'</span><span class="token punctuation" >,</span>\n  children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'Child Node1\'</span><span class="token punctuation" >,</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'0-0-0\'</span><span class="token punctuation" >,</span>\n    key<span class="token punctuation" >:</span> <span class="token string" >\'0-0-0\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  label<span class="token punctuation" >:</span> <span class="token string" >\'Node2\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'0-1\'</span><span class="token punctuation" >,</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'0-1\'</span><span class="token punctuation" >,</span>\n  children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'Child Node3\'</span><span class="token punctuation" >,</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'0-1-0\'</span><span class="token punctuation" >,</span>\n    key<span class="token punctuation" >:</span> <span class="token string" >\'0-1-0\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'Child Node4\'</span><span class="token punctuation" >,</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'0-1-1\'</span><span class="token punctuation" >,</span>\n    key<span class="token punctuation" >:</span> <span class="token string" >\'0-1-1\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'Child Node5\'</span><span class="token punctuation" >,</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'0-1-2\'</span><span class="token punctuation" >,</span>\n    key<span class="token punctuation" >:</span> <span class="token string" >\'0-1-2\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Demo <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'0-0-0\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'onChange \'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >,</span> arguments<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> value <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> tProps <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n      treeData<span class="token punctuation" >,</span>\n      value<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value<span class="token punctuation" >,</span>\n      onChange<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>onChange<span class="token punctuation" >,</span>\n      multiple<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n      treeCheckable<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n      showCheckedStrategy<span class="token punctuation" >:</span> SHOW_PARENT<span class="token punctuation" >,</span>\n      searchPlaceholder<span class="token punctuation" >:</span> <span class="token string" >\'Please select\'</span><span class="token punctuation" >,</span>\n      style<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        width<span class="token punctuation" >:</span> <span class="token number" >300</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token operator" >&lt;</span>TreeSelect <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>tProps<span class="token punctuation" >}</span> <span class="token operator" >/</span><span class="token operator" >></span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Demo</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=e["default"].SHOW_PARENT,a=[{label:"Node1",value:"0-0",key:"0-0",children:[{label:"Child Node1",value:"0-0-0",key:"0-0-0"}]},{label:"Node2",value:"0-1",key:"0-1",children:[{label:"Child Node3",value:"0-1-0",key:"0-1-0"},{label:"Child Node4",value:"0-1-1",key:"0-1-1"},{label:"Child Node5",value:"0-1-2",key:"0-1-2"}]}],s=c["default"].createClass({displayName:"Demo",getInitialState:function(){return{value:["0-0-0"]}},onChange:function(n){console.log("onChange ",n,arguments),this.setState({value:n})},render:function(){var s={treeData:a,value:this.state.value,onChange:this.onChange,multiple:!0,treeCheckable:!0,showCheckedStrategy:n,searchPlaceholder:"Please select",style:{width:300}};return c["default"].createElement(e["default"],s)}});return c["default"].createElement(s,null)}}},983:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(294),s(244)),e=t(p),o=s(1),c=t(o),u=s(2);t(u);n.exports={content:{"zh-CN":[["p","\u4f7f\u7528 ",["code","treeData"]," \u628a JSON \u6570\u636e\u76f4\u63a5\u751f\u6210\u6811\u7ed3\u6784\u3002"]],"en-US":[["p","The tree structure can be populated using ",["code","treeData"]," property. This is a quick and easy way to provide the tree content."]]},meta:{order:1,title:{"zh-CN":"\u4ece\u6570\u636e\u76f4\u63a5\u751f\u6210","en-US":"Generate form tree data"},filename:"components/tree-select/demo/treeData.md",id:"components-tree-select-demo-treeData"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TreeSelect <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> treeData <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  label<span class="token punctuation" >:</span> <span class="token string" >\'Node1\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'0-0\'</span><span class="token punctuation" >,</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'0-0\'</span><span class="token punctuation" >,</span>\n  children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'Child Node1\'</span><span class="token punctuation" >,</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'0-0-1\'</span><span class="token punctuation" >,</span>\n    key<span class="token punctuation" >:</span> <span class="token string" >\'0-0-1\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'Child Node2\'</span><span class="token punctuation" >,</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'0-0-2\'</span><span class="token punctuation" >,</span>\n    key<span class="token punctuation" >:</span> <span class="token string" >\'0-0-2\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  label<span class="token punctuation" >:</span> <span class="token string" >\'Node2\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'0-1\'</span><span class="token punctuation" >,</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'0-1\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Demo <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> undefined<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>arguments<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> value <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeSelect</span>\n        <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >300</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >dropdownStyle</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> maxHeight<span class="token punctuation" >:</span> <span class="token number" >400</span><span class="token punctuation" >,</span> overflow<span class="token punctuation" >:</span> <span class="token string" >\'auto\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >treeData</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>treeData<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Please</span> <span class="token attr-name" >select"</span>\n        <span class="token attr-name" >treeDefaultExpandAll</span>\n        <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onChange<span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >/></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Demo</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=[{label:"Node1",value:"0-0",key:"0-0",children:[{label:"Child Node1",value:"0-0-1",key:"0-0-1"},{label:"Child Node2",value:"0-0-2",key:"0-0-2"}]},{label:"Node2",value:"0-1",key:"0-1"}],a=c["default"].createClass({displayName:"Demo",
getInitialState:function(){return{value:void 0}},onChange:function(n){console.log(arguments),this.setState({value:n})},render:function(){return c["default"].createElement(e["default"],{style:{width:300},value:this.state.value,dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:n,placeholder:"Please select",treeDefaultExpandAll:!0,onChange:this.onChange})}});return c["default"].createElement(a,null)}}},1189:function(n,a,s){n.exports={basic:s(981),checkable:s(982),treeData:s(983)}},1514:function(n,a){}});