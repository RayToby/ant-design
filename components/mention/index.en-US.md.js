webpackJsonp([152,197],{794:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var s=e(1),o=(a(s),e(2));a(o);t.exports={content:["section",["p","Mention component\u3002"],["h2","When To Use"],["p","When need to mention someone or something."]],meta:{category:"Components",cols:1,type:"Views",title:"Mention",filename:"components/mention/index.en-US.md"},toc:["ul",["li",["a",{href:"#When-To-Use"},"When To Use"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Mention</span>\n  <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span>\n  <span class="token attr-name" >suggestions</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'afc163\'</span><span class="token punctuation" >,</span> <span class="token string" >\'benjycui\'</span><span class="token punctuation" >,</span> <span class="token string" >\'yiminghe\'</span><span class="token punctuation" >,</span> <span class="token string" >\'jljsj33\'</span><span class="token punctuation" >,</span> <span class="token string" >\'dqaria\'</span><span class="token punctuation" >,</span> <span class="token string" >\'RaoHai\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span>\n<span class="token punctuation" >/></span></span>'},["code","<Mention\n  onChange={onChange}\n  suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}\n/>"]],["h3","Mention API"],["table",["thead",["tr",["th","API"],["th","Description"],["th","Type"]]],["tbody",["tr",["td","toString"],["td","convert EditorState to string"],["td","Function(editorState: EditorState): String"]],["tr",["td","toEditorState"],["td","convert string to  EditorState"],["td","Function(string: String): EditorState"]],["tr",["td","getMentions"],["td","get mentioned people in current editorState"],["td","Function(editorState: EditorState): Array",["string"]]]]],["h3","Mention props"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","suggestions"],["td","suggestion content"],["td","Array",["string"]," or Array<Mention.Nav>"],["td","[]"]],["tr",["td","suggestionStyle"],["td","style of suggestion container"],["td","Object"],["td","{}"]],["tr",["td","onSearchChange"],["td","Callback function called when search content changes"],["td","function(value:String)"],["td","[]"]],["tr",["td","onChange"],["td","Callback function called when content of input changes"],["td","function(editorState: EditorState)"],["td","null"]],["tr",["td","onSelect"],["td","Callback function called when select from suggestions"],["td","function(suggestion: String)"],["td","null"]],["tr",["td","notFoundContent"],["td","suggestion when suggestions empty"],["td","string"],["td","'\u65e0\u5339\u914d\u7ed3\u679c\uff0c\u8f7b\u6572\u7a7a\u683c\u5b8c\u6210\u8f93\u5165'"]],["tr",["td","loading"],["td","loading mode"],["td","boolean"],["td","false"]],["tr",["td","multiLines"],["td","multilines mode"],["td","boolean"],["td","false"]],["tr",["td","prefix"],["td","character which will trigger Mention to show mention list"],["td","string"],["td","'@'"]],["tr",["td","defaultValue"],["td","default value"],["td","EditorState, you can use ",["code","Mention.toEditorState"]," to convert text to ",["code","EditorState"]],["td","null"]],["tr",["td","value"],["td","core state of mention"],["td","EditorState"],["td","null"]],["tr",["td","placeHolder"],["td","placeholder of input"],["td","string"],["td","null"]]]],["h3","Nav props"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","value"],["td","value of suggestion\uff0cthe value will insert into input filed while selected"],["td","string"],["td",'""']],["tr",["td","children"],["td","suggestion content"],["td","Objet"],["td","{}"]]]]]}}});