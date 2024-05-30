"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[4377],{6597:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(85893),o=t(11151),s=t(74866),a=t(85162);const l={title:"mongodb",slug:"mongodb",type:"input",status:"experimental",categories:["Services"],name:"mongodb"},i=void 0,c={id:"components/inputs/mongodb",title:"mongodb",description:"\x3c!--",source:"@site/docs/components/inputs/mongodb.md",sourceDirName:"components/inputs",slug:"/components/inputs/mongodb",permalink:"/bento/docs/components/inputs/mongodb",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/inputs/mongodb.md",tags:[],version:"current",frontMatter:{title:"mongodb",slug:"mongodb",type:"input",status:"experimental",categories:["Services"],name:"mongodb"},sidebar:"docs",previous:{title:"kafka_franz",permalink:"/bento/docs/components/inputs/kafka_franz"},next:{title:"mqtt",permalink:"/bento/docs/components/inputs/mqtt"}},d={},u=[{value:"Fields",id:"fields",level:2},{value:"<code>url</code>",id:"url",level:3},{value:"<code>database</code>",id:"database",level:3},{value:"<code>username</code>",id:"username",level:3},{value:"<code>password</code>",id:"password",level:3},{value:"<code>collection</code>",id:"collection",level:3},{value:"<code>operation</code>",id:"operation",level:3},{value:"<code>json_marshal_mode</code>",id:"json_marshal_mode",level:3},{value:"<code>query</code>",id:"query",level:3},{value:"<code>auto_replay_nacks</code>",id:"auto_replay_nacks",level:3},{value:"<code>batch_size</code>",id:"batch_size",level:3},{value:"<code>sort</code>",id:"sort",level:3},{value:"<code>limit</code>",id:"limit",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"EXPERIMENTAL",type:"caution",children:(0,r.jsx)(n.p,{children:"This component is experimental and therefore subject to change or removal outside of major version releases."})}),"\n",(0,r.jsx)(n.p,{children:"Executes a query and creates a message for each document received."}),"\n",(0,r.jsx)(n.p,{children:"Introduced in version 3.64.0."}),"\n",(0,r.jsxs)(s.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,r.jsx)(a.Z,{value:"common",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\ninput:\n  label: ""\n  mongodb:\n    url: mongodb://localhost:27017 # No default (required)\n    database: "" # No default (required)\n    username: ""\n    password: ""\n    collection: "" # No default (required)\n    query: |2 # No default (required)\n        root.from = {"$lte": timestamp_unix()}\n        root.to = {"$gte": timestamp_unix()}\n    auto_replay_nacks: true\n    batch_size: 1000 # No default (optional)\n    sort: {} # No default (optional)\n    limit: 0 # No default (optional)\n'})})}),(0,r.jsx)(a.Z,{value:"advanced",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\ninput:\n  label: ""\n  mongodb:\n    url: mongodb://localhost:27017 # No default (required)\n    database: "" # No default (required)\n    username: ""\n    password: ""\n    collection: "" # No default (required)\n    operation: find\n    json_marshal_mode: canonical\n    query: |2 # No default (required)\n        root.from = {"$lte": timestamp_unix()}\n        root.to = {"$gte": timestamp_unix()}\n    auto_replay_nacks: true\n    batch_size: 1000 # No default (optional)\n    sort: {} # No default (optional)\n    limit: 0 # No default (optional)\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Once the documents from the query are exhausted, this input shuts down, allowing the pipeline to gracefully terminate (or the next input in a ",(0,r.jsx)(n.a,{href:"/docs/components/inputs/sequence",children:"sequence"})," to execute)."]}),"\n",(0,r.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(n.h3,{id:"url",children:(0,r.jsx)(n.code,{children:"url"})}),"\n",(0,r.jsx)(n.p,{children:"The URL of the target MongoDB server."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nurl: mongodb://localhost:27017\n"})}),"\n",(0,r.jsx)(n.h3,{id:"database",children:(0,r.jsx)(n.code,{children:"database"})}),"\n",(0,r.jsx)(n.p,{children:"The name of the target MongoDB database."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.h3,{id:"username",children:(0,r.jsx)(n.code,{children:"username"})}),"\n",(0,r.jsx)(n.p,{children:"The username to connect to the database."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.h3,{id:"password",children:(0,r.jsx)(n.code,{children:"password"})}),"\n",(0,r.jsx)(n.p,{children:"The password to connect to the database."}),"\n",(0,r.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,r.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,r.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.h3,{id:"collection",children:(0,r.jsx)(n.code,{children:"collection"})}),"\n",(0,r.jsx)(n.p,{children:"The collection to select from."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.h3,{id:"operation",children:(0,r.jsx)(n.code,{children:"operation"})}),"\n",(0,r.jsx)(n.p,{children:"The mongodb operation to perform."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'"find"'}),(0,r.jsx)(n.br,{}),"\n","Requires version 4.2.0 or newer",(0,r.jsx)(n.br,{}),"\n","Options: ",(0,r.jsx)(n.code,{children:"find"}),", ",(0,r.jsx)(n.code,{children:"aggregate"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"json_marshal_mode",children:(0,r.jsx)(n.code,{children:"json_marshal_mode"})}),"\n",(0,r.jsx)(n.p,{children:"The json_marshal_mode setting is optional and controls the format of the output message."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'"canonical"'}),(0,r.jsx)(n.br,{}),"\n","Requires version 4.7.0 or newer"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Summary"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"canonical"})}),(0,r.jsx)(n.td,{children:"A string format that emphasizes type preservation at the expense of readability and interoperability. That is, conversion from canonical to BSON will generally preserve type information except in certain specific cases."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"relaxed"})}),(0,r.jsx)(n.td,{children:"A string format that emphasizes readability and interoperability at the expense of type preservation.That is, conversion from relaxed format to BSON can lose type information."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"query",children:(0,r.jsx)(n.code,{children:"query"})}),"\n",(0,r.jsx)(n.p,{children:"Bloblang expression describing MongoDB query."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Examples\n\nquery: |2\n    root.from = {"$lte": timestamp_unix()}\n    root.to = {"$gte": timestamp_unix()}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"auto_replay_nacks",children:(0,r.jsx)(n.code,{children:"auto_replay_nacks"})}),"\n",(0,r.jsxs)(n.p,{children:["Whether messages that are rejected (nacked) at the output level should be automatically replayed indefinitely, eventually resulting in back pressure if the cause of the rejections is persistent. If set to ",(0,r.jsx)(n.code,{children:"false"})," these messages will instead be deleted. Disabling auto replays can greatly improve memory efficiency of high throughput streams as the original shape of the data can be discarded immediately upon consumption and mutation."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"bool"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsx)(n.h3,{id:"batch_size",children:(0,r.jsx)(n.code,{children:"batch_size"})}),"\n",(0,r.jsxs)(n.p,{children:["A explicit number of documents to batch up before flushing them for processing. Must be greater than ",(0,r.jsx)(n.code,{children:"0"}),". Operations: ",(0,r.jsx)(n.code,{children:"find"}),", ",(0,r.jsx)(n.code,{children:"aggregate"})]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"int"}),(0,r.jsx)(n.br,{}),"\n","Requires version 4.26.0 or newer"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nbatch_size: 1000\n"})}),"\n",(0,r.jsx)(n.h3,{id:"sort",children:(0,r.jsx)(n.code,{children:"sort"})}),"\n",(0,r.jsxs)(n.p,{children:["An object specifying fields to sort by, and the respective sort order (",(0,r.jsx)(n.code,{children:"1"})," ascending, ",(0,r.jsx)(n.code,{children:"-1"})," descending). Note: The driver currently appears to support only one sorting key. Operations: ",(0,r.jsx)(n.code,{children:"find"})]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"object"}),(0,r.jsx)(n.br,{}),"\n","Requires version 4.26.0 or newer"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nsort:\n  name: 1\n\nsort:\n  age: -1\n"})}),"\n",(0,r.jsx)(n.h3,{id:"limit",children:(0,r.jsx)(n.code,{children:"limit"})}),"\n",(0,r.jsxs)(n.p,{children:["An explicit maximum number of documents to return. Operations: ",(0,r.jsx)(n.code,{children:"find"})]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"int"}),(0,r.jsx)(n.br,{}),"\n","Requires version 4.26.0 or newer"]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:function(e,n,t){t.d(n,{Z:function(){return a}});t(67294);var r=t(86010),o={tabItem:"tabItem_Ymn6"},s=t(85893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,a),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return _}});var r=t(67294),o=t(86010),s=t(12466),a=t(16550),l=t(20469),i=t(91980),c=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=h(e),[a,i]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const o=null!=(n=r.find((e=>e.default)))?n:r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:o}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[o,s]=(0,d.Nk)(t);return[o,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),b=(()=>{const e=null!=c?c:x;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);i(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=t(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},j=t(85893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),o=l[t].value;o!==r&&(c(n),a(o))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var r;const n=i.indexOf(e.currentTarget)+1;t=null!=(r=i[n])?r:i[0];break}case"ArrowLeft":{var o;const n=i.indexOf(e.currentTarget)-1;t=null!=(o=i[n])?o:i[i.length-1];break}}null==(n=t)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,o.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,o.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(g,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function _(e){const n=(0,f.Z)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var r=t(67294);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);