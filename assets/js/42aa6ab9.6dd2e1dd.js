"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[632],{35623:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var r=t(85893),s=t(11151),o=t(74866),l=t(85162);const a={title:"couchbase",slug:"couchbase",type:"processor",status:"experimental",categories:["Integration"],name:"couchbase"},c=void 0,i={id:"components/processors/couchbase",title:"couchbase",description:"\x3c!--",source:"@site/docs/components/processors/couchbase.md",sourceDirName:"components/processors",slug:"/components/processors/couchbase",permalink:"/bento/docs/components/processors/couchbase",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/couchbase.md",tags:[],version:"current",frontMatter:{title:"couchbase",slug:"couchbase",type:"processor",status:"experimental",categories:["Integration"],name:"couchbase"},sidebar:"docs",previous:{title:"compress",permalink:"/bento/docs/components/processors/compress"},next:{title:"decompress",permalink:"/bento/docs/components/processors/decompress"}},d={},u=[{value:"Fields",id:"fields",level:2},{value:"<code>url</code>",id:"url",level:3},{value:"<code>username</code>",id:"username",level:3},{value:"<code>password</code>",id:"password",level:3},{value:"<code>bucket</code>",id:"bucket",level:3},{value:"<code>collection</code>",id:"collection",level:3},{value:"<code>transcoder</code>",id:"transcoder",level:3},{value:"<code>timeout</code>",id:"timeout",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>content</code>",id:"content",level:3},{value:"<code>operation</code>",id:"operation",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"EXPERIMENTAL",type:"caution",children:(0,r.jsx)(n.p,{children:"This component is experimental and therefore subject to change or removal outside of major version releases."})}),"\n",(0,r.jsx)(n.p,{children:"Performs operations against Couchbase for each message, allowing you to store or retrieve data within message payloads."}),"\n",(0,r.jsx)(n.p,{children:"Introduced in version 4.11.0."}),"\n",(0,r.jsxs)(o.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,r.jsx)(l.Z,{value:"common",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\nlabel: ""\ncouchbase:\n  url: couchbase://localhost:11210 # No default (required)\n  username: "" # No default (optional)\n  password: "" # No default (optional)\n  bucket: "" # No default (required)\n  id: ${! json("id") } # No default (required)\n  content: "" # No default (optional)\n  operation: get\n'})})}),(0,r.jsx)(l.Z,{value:"advanced",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\nlabel: ""\ncouchbase:\n  url: couchbase://localhost:11210 # No default (required)\n  username: "" # No default (optional)\n  password: "" # No default (optional)\n  bucket: "" # No default (required)\n  collection: _default\n  transcoder: legacy\n  timeout: 15s\n  id: ${! json("id") } # No default (required)\n  content: "" # No default (optional)\n  operation: get\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["When inserting, replacing or upserting documents, each must have the ",(0,r.jsx)(n.code,{children:"content"})," property set."]}),"\n",(0,r.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(n.h3,{id:"url",children:(0,r.jsx)(n.code,{children:"url"})}),"\n",(0,r.jsx)(n.p,{children:"Couchbase connection string."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nurl: couchbase://localhost:11210\n"})}),"\n",(0,r.jsx)(n.h3,{id:"username",children:(0,r.jsx)(n.code,{children:"username"})}),"\n",(0,r.jsx)(n.p,{children:"Username to connect to the cluster."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.h3,{id:"password",children:(0,r.jsx)(n.code,{children:"password"})}),"\n",(0,r.jsx)(n.p,{children:"Password to connect to the cluster."}),"\n",(0,r.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,r.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,r.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.h3,{id:"bucket",children:(0,r.jsx)(n.code,{children:"bucket"})}),"\n",(0,r.jsx)(n.p,{children:"Couchbase bucket."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.h3,{id:"collection",children:(0,r.jsx)(n.code,{children:"collection"})}),"\n",(0,r.jsx)(n.p,{children:"Bucket collection."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'"_default"'})]}),"\n",(0,r.jsx)(n.h3,{id:"transcoder",children:(0,r.jsx)(n.code,{children:"transcoder"})}),"\n",(0,r.jsx)(n.p,{children:"Couchbase transcoder to use."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'"legacy"'})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Summary"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"json"})}),(0,r.jsx)(n.td,{children:"JSONTranscoder implements the default transcoding behavior and applies JSON transcoding to all values. This will apply the following behavior to the value: binary ([]byte) -> error. default -> JSON value, JSON Flags."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"legacy"})}),(0,r.jsx)(n.td,{children:"LegacyTranscoder implements the behaviour for a backward-compatible transcoder. This transcoder implements behaviour matching that of gocb v1.This will apply the following behavior to the value: binary ([]byte) -> binary bytes, Binary expectedFlags. string -> string bytes, String expectedFlags. default -> JSON value, JSON expectedFlags."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"raw"})}),(0,r.jsx)(n.td,{children:"RawBinaryTranscoder implements passthrough behavior of raw binary data. This transcoder does not apply any serialization. This will apply the following behavior to the value: binary ([]byte) -> binary bytes, binary expectedFlags. default -> error."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"rawjson"})}),(0,r.jsx)(n.td,{children:"RawJSONTranscoder implements passthrough behavior of JSON data. This transcoder does not apply any serialization. It will forward data across the network without incurring unnecessary parsing costs. This will apply the following behavior to the value: binary ([]byte) -> JSON bytes, JSON expectedFlags. string -> JSON bytes, JSON expectedFlags. default -> error."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"rawstring"})}),(0,r.jsx)(n.td,{children:"RawStringTranscoder implements passthrough behavior of raw string data. This transcoder does not apply any serialization. This will apply the following behavior to the value: string -> string bytes, string expectedFlags. default -> error."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"timeout",children:(0,r.jsx)(n.code,{children:"timeout"})}),"\n",(0,r.jsx)(n.p,{children:"Operation timeout."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'"15s"'})]}),"\n",(0,r.jsx)(n.h3,{id:"id",children:(0,r.jsx)(n.code,{children:"id"})}),"\n",(0,r.jsxs)(n.p,{children:["Document id.\nThis field supports ",(0,r.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Examples\n\nid: ${! json("id") }\n'})}),"\n",(0,r.jsx)(n.h3,{id:"content",children:(0,r.jsx)(n.code,{children:"content"})}),"\n",(0,r.jsx)(n.p,{children:"Document content."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.h3,{id:"operation",children:(0,r.jsx)(n.code,{children:"operation"})}),"\n",(0,r.jsx)(n.p,{children:"Couchbase operation to perform."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'"get"'})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Summary"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"get"})}),(0,r.jsx)(n.td,{children:"fetch a document."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"insert"})}),(0,r.jsx)(n.td,{children:"insert a new document."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"remove"})}),(0,r.jsx)(n.td,{children:"delete a document."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"replace"})}),(0,r.jsx)(n.td,{children:"replace the contents of a document."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"upsert"})}),(0,r.jsx)(n.td,{children:"creates a new document if it does not exist, if it does exist then it updates it."})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:function(e,n,t){t.d(n,{Z:function(){return l}});t(67294);var r=t(86010),s={tabItem:"tabItem_Ymn6"},o=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(67294),s=t(86010),o=t(12466),l=t(16550),a=t(20469),c=t(91980),i=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=h(e),[l,c]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const s=null!=(n=r.find((e=>e.default)))?n:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[i,u]=x({queryString:t,groupId:s}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[s,o]=(0,d.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),j=(()=>{const e=null!=i?i:m;return p({value:e,tabValues:o})?e:null})();(0,a.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);c(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=t(72389),j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},f=t(85893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),s=a[t].value;s!==r&&(i(n),l(s))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var r;const n=c.indexOf(e.currentTarget)+1;t=null!=(r=c[n])?r:c[0];break}case"ArrowLeft":{var s;const n=c.indexOf(e.currentTarget)-1;t=null!=(s=c[n])?s:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...o,className:(0,s.Z)("tabs__item",j.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(g,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function w(e){const n=(0,b.Z)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var r=t(67294);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);