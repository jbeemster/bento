"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[2694],{22586:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var s=n(85893),r=n(11151),a=n(74866),o=n(85162);const l={title:"javascript",slug:"javascript",type:"processor",status:"experimental",categories:["Mapping"],name:"javascript"},i=void 0,c={id:"components/processors/javascript",title:"javascript",description:"\x3c!--",source:"@site/docs/components/processors/javascript.md",sourceDirName:"components/processors",slug:"/components/processors/javascript",permalink:"/bento/docs/components/processors/javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/javascript.md",tags:[],version:"current",frontMatter:{title:"javascript",slug:"javascript",type:"processor",status:"experimental",categories:["Mapping"],name:"javascript"},sidebar:"docs",previous:{title:"insert_part",permalink:"/bento/docs/components/processors/insert_part"},next:{title:"jmespath",permalink:"/bento/docs/components/processors/jmespath"}},d={},u=[{value:"Fields",id:"fields",level:2},{value:"<code>code</code>",id:"code",level:3},{value:"<code>file</code>",id:"file",level:3},{value:"<code>global_folders</code>",id:"global_folders",level:3},{value:"Examples",id:"examples",level:2},{value:"Runtime",id:"runtime",level:2},{value:"Functions",id:"functions",level:2},{value:"<code>bento.v0_fetch</code>",id:"bentov0_fetch",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Examples",id:"examples-1",level:4},{value:"<code>bento.v0_msg_as_string</code>",id:"bentov0_msg_as_string",level:3},{value:"Examples",id:"examples-2",level:4},{value:"<code>bento.v0_msg_as_structured</code>",id:"bentov0_msg_as_structured",level:3},{value:"Examples",id:"examples-3",level:4},{value:"<code>bento.v0_msg_exists_meta</code>",id:"bentov0_msg_exists_meta",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Examples",id:"examples-4",level:4},{value:"<code>bento.v0_msg_get_meta</code>",id:"bentov0_msg_get_meta",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Examples",id:"examples-5",level:4},{value:"<code>bento.v0_msg_set_meta</code>",id:"bentov0_msg_set_meta",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Examples",id:"examples-6",level:4},{value:"<code>bento.v0_msg_set_string</code>",id:"bentov0_msg_set_string",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Examples",id:"examples-7",level:4},{value:"<code>bento.v0_msg_set_structured</code>",id:"bentov0_msg_set_structured",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Examples",id:"examples-8",level:4}];function h(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"EXPERIMENTAL",type:"caution",children:(0,s.jsx)(t.p,{children:"This component is experimental and therefore subject to change or removal outside of major version releases."})}),"\n",(0,s.jsx)(t.p,{children:"Executes a provided JavaScript code block or file for each message."}),"\n",(0,s.jsx)(t.p,{children:"Introduced in version 4.14.0."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:'# Config fields, showing default values\nlabel: ""\njavascript:\n  code: "" # No default (optional)\n  file: "" # No default (optional)\n  global_folders: []\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://github.com/dop251/goja",children:"execution engine"})," behind this processor provides full ECMAScript 5.1 support (including regex and strict mode). Most of the ECMAScript 6 spec is implemented but this is a work in progress."]}),"\n",(0,s.jsxs)(t.p,{children:["Imports via ",(0,s.jsx)(t.code,{children:"require"})," should work similarly to NodeJS, and access to the console is supported which will print via the Bento logger. More caveats can be ",(0,s.jsx)(t.a,{href:"https://github.com/dop251/goja#known-incompatibilities-and-caveats",children:"found here"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This processor is implemented using the ",(0,s.jsx)(t.a,{href:"https://github.com/dop251/goja",children:"github.com/dop251/goja"})," library."]}),"\n",(0,s.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsx)(t.h3,{id:"code",children:(0,s.jsx)(t.code,{children:"code"})}),"\n",(0,s.jsxs)(t.p,{children:["An inline JavaScript program to run. One of ",(0,s.jsx)(t.code,{children:"code"})," or ",(0,s.jsx)(t.code,{children:"file"})," must be defined.\nThis field supports ",(0,s.jsx)(t.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"string"})]}),"\n",(0,s.jsx)(t.h3,{id:"file",children:(0,s.jsx)(t.code,{children:"file"})}),"\n",(0,s.jsxs)(t.p,{children:["A file containing a JavaScript program to run. One of ",(0,s.jsx)(t.code,{children:"code"})," or ",(0,s.jsx)(t.code,{children:"file"})," must be defined.\nThis field supports ",(0,s.jsx)(t.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"string"})]}),"\n",(0,s.jsx)(t.h3,{id:"global_folders",children:(0,s.jsx)(t.code,{children:"global_folders"})}),"\n",(0,s.jsx)(t.p,{children:"List of folders that will be used to load modules from if the requested JS module is not found elsewhere."}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"array"}),(0,s.jsx)(t.br,{}),"\n","Default: ",(0,s.jsx)(t.code,{children:"[]"})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(a.Z,{defaultValue:"Simple mutation",values:[{label:"Simple mutation",value:"Simple mutation"},{label:"Structured mutation",value:"Structured mutation"}],children:[(0,s.jsxs)(o.Z,{value:"Simple mutation",children:[(0,s.jsx)(t.p,{children:"In this example we define a simple function that performs a basic mutation against messages, treating their contents as raw strings."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - javascript:\n        code: 'bento.v0_msg_set_string(bento.v0_msg_as_string() + \"hello world\");'\n"})})]}),(0,s.jsxs)(o.Z,{value:"Structured mutation",children:[(0,s.jsx)(t.p,{children:"In this example we define a function that performs basic mutations against a structured message. Note that we encapsulate the logic within an anonymous function that is called for each invocation, this is required in order to avoid duplicate variable declarations in the global state."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'pipeline:\n  processors:\n    - javascript:\n        code: |\n          (() => {\n            let thing = bento.v0_msg_as_structured();\n            thing.num_keys = Object.keys(thing).length;\n            delete thing["b"];\n            bento.v0_msg_set_structured(thing);\n          })();\n'})})]})]}),"\n",(0,s.jsx)(t.h2,{id:"runtime",children:"Runtime"}),"\n",(0,s.jsx)(t.p,{children:"In order to optimise code execution JS runtimes are created on demand (in order to support parallel execution) and are reused across invocations. Therefore, it is important to understand that global state created by your programs will outlive individual invocations. In order for your programs to avoid failing after the first invocation ensure that you do not define variables at the global scope."}),"\n",(0,s.jsx)(t.p,{children:"Although technically possible, it is recommended that you do not rely on the global state for maintaining state across invocations as the pooling nature of the runtimes will prevent deterministic behaviour. We aim to support deterministic strategies for mutating global state in the future."}),"\n",(0,s.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(t.h3,{id:"bentov0_fetch",children:(0,s.jsx)(t.code,{children:"bento.v0_fetch"})}),"\n",(0,s.jsxs)(t.p,{children:["Executes an HTTP request synchronously and returns the result as an object of the form ",(0,s.jsx)(t.code,{children:'{"status":200,"body":"foo"}'}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"url"})})," <string> The URL to fetch",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"headers"})})," <object(string,string)> An object of string/string key/value pairs to add the request as headers.",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"method"})})," <string> The method of the request.",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"body"})})," <(optional) string> A body to send."]}),"\n",(0,s.jsx)(t.h4,{id:"examples-1",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'let result = bento.v0_fetch("http://example.com", {}, "GET", "")\nbento.v0_msg_set_structured(result);\n'})}),"\n",(0,s.jsx)(t.h3,{id:"bentov0_msg_as_string",children:(0,s.jsx)(t.code,{children:"bento.v0_msg_as_string"})}),"\n",(0,s.jsx)(t.p,{children:"Obtain the raw contents of the processed message as a string."}),"\n",(0,s.jsx)(t.h4,{id:"examples-2",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"let contents = bento.v0_msg_as_string();\n"})}),"\n",(0,s.jsx)(t.h3,{id:"bentov0_msg_as_structured",children:(0,s.jsx)(t.code,{children:"bento.v0_msg_as_structured"})}),"\n",(0,s.jsx)(t.p,{children:"Obtain the root of the processed message as a structured value. If the message is not valid JSON or has not already been expanded into a structured form this function will throw an error."}),"\n",(0,s.jsx)(t.h4,{id:"examples-3",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"let foo = bento.v0_msg_as_structured().foo;\n"})}),"\n",(0,s.jsx)(t.h3,{id:"bentov0_msg_exists_meta",children:(0,s.jsx)(t.code,{children:"bento.v0_msg_exists_meta"})}),"\n",(0,s.jsx)(t.p,{children:"Check that a metadata key exists."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"name"})})," <string> The metadata key to search for."]}),"\n",(0,s.jsx)(t.h4,{id:"examples-4",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'if (bento.v0_msg_exists_meta("kafka_key")) {}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"bentov0_msg_get_meta",children:(0,s.jsx)(t.code,{children:"bento.v0_msg_get_meta"})}),"\n",(0,s.jsx)(t.p,{children:"Get the value of a metadata key from the processed message."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"name"})})," <string> The metadata key to search for."]}),"\n",(0,s.jsx)(t.h4,{id:"examples-5",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'let key = bento.v0_msg_get_meta("kafka_key");\n'})}),"\n",(0,s.jsx)(t.h3,{id:"bentov0_msg_set_meta",children:(0,s.jsx)(t.code,{children:"bento.v0_msg_set_meta"})}),"\n",(0,s.jsx)(t.p,{children:"Set a metadata key on the processed message to a value."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"name"})})," <string> The metadata key to set.",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"value"})})," <anything> The value to set it to."]}),"\n",(0,s.jsx)(t.h4,{id:"examples-6",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'bento.v0_msg_set_meta("thing", "hello world");\n'})}),"\n",(0,s.jsx)(t.h3,{id:"bentov0_msg_set_string",children:(0,s.jsx)(t.code,{children:"bento.v0_msg_set_string"})}),"\n",(0,s.jsx)(t.p,{children:"Set the contents of the processed message to a given string."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"value"})})," <string> The value to set it to."]}),"\n",(0,s.jsx)(t.h4,{id:"examples-7",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'bento.v0_msg_set_string("hello world");\n'})}),"\n",(0,s.jsx)(t.h3,{id:"bentov0_msg_set_structured",children:(0,s.jsx)(t.code,{children:"bento.v0_msg_set_structured"})}),"\n",(0,s.jsx)(t.p,{children:"Set the root of the processed message to a given value of any type."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"value"})})," <anything> The value to set it to."]}),"\n",(0,s.jsx)(t.h4,{id:"examples-8",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'bento.v0_msg_set_structured({\n  "foo": "a thing",\n  "bar": "something else",\n  "baz": 1234\n});\n'})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},85162:function(e,t,n){n.d(t,{Z:function(){return o}});n(67294);var s=n(86010),r={tabItem:"tabItem_Ymn6"},a=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,o),hidden:n,children:t})}},74866:function(e,t,n){n.d(t,{Z:function(){return y}});var s=n(67294),r=n(86010),a=n(12466),o=n(16550),l=n(20469),i=n(91980),c=n(67392),d=n(50012);function u(e){var t,n;return null!=(t=null==(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=null!=t?t:function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[o,i]=(0,s.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=s.find((e=>e.default)))?t:s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=m({queryString:n,groupId:r}),[v,g]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[r,a]=(0,d.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),x=(()=>{const e=null!=c?c:v;return p({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);i(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=n(72389),x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},j=n(85893);function f(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),r=l[n].value;r!==s&&(c(t),o(r))},u=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var s;const t=i.indexOf(e.currentTarget)+1;n=null!=(s=i[t])?s:i[0];break}case"ArrowLeft":{var r;const t=i.indexOf(e.currentTarget)-1;n=null!=(r=i[t])?r:i[i.length-1];break}}null==(t=n)||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.Z)("tabs__item",x.tabItem,null==a?void 0:a.className,{"tabs__item--active":s===t}),children:null!=n?n:t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function _(e){const t=v(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(f,{...e,...t}),(0,j.jsx)(b,{...e,...t})]})}function y(e){const t=(0,g.Z)();return(0,j.jsx)(_,{...e,children:u(e.children)},String(t))}},11151:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var s=n(67294);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);