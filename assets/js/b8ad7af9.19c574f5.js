"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[1795],{81879:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return u}});var r=n(85893),s=n(11151);n(74866),n(85162);const o={title:"socket",slug:"socket",type:"output",status:"stable",categories:["Network"],name:"socket"},l=void 0,a={id:"components/outputs/socket",title:"socket",description:"\x3c!--",source:"@site/docs/components/outputs/socket.md",sourceDirName:"components/outputs",slug:"/components/outputs/socket",permalink:"/bento/docs/components/outputs/socket",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/outputs/socket.md",tags:[],version:"current",frontMatter:{title:"socket",slug:"socket",type:"output",status:"stable",categories:["Network"],name:"socket"},sidebar:"docs",previous:{title:"snowflake_put",permalink:"/bento/docs/components/outputs/snowflake_put"},next:{title:"splunk_hec",permalink:"/bento/docs/components/outputs/splunk_hec"}},c={},u=[{value:"Fields",id:"fields",level:2},{value:"<code>network</code>",id:"network",level:3},{value:"<code>address</code>",id:"address",level:3},{value:"<code>codec</code>",id:"codec",level:3}];function i(e){const t={br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Connects to a (tcp/udp/unix) server and sends a continuous stream of data, dividing messages according to the specified codec."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yml",children:'# Config fields, showing default values\noutput:\n  label: ""\n  socket:\n    network: "" # No default (required)\n    address: /tmp/bento.sock # No default (required)\n    codec: lines\n'})}),"\n",(0,r.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(t.h3,{id:"network",children:(0,r.jsx)(t.code,{children:"network"})}),"\n",(0,r.jsx)(t.p,{children:"A network type to connect as."}),"\n",(0,r.jsxs)(t.p,{children:["Type: ",(0,r.jsx)(t.code,{children:"string"}),(0,r.jsx)(t.br,{}),"\n","Options: ",(0,r.jsx)(t.code,{children:"unix"}),", ",(0,r.jsx)(t.code,{children:"tcp"}),", ",(0,r.jsx)(t.code,{children:"udp"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"address",children:(0,r.jsx)(t.code,{children:"address"})}),"\n",(0,r.jsx)(t.p,{children:"The address to connect to."}),"\n",(0,r.jsxs)(t.p,{children:["Type: ",(0,r.jsx)(t.code,{children:"string"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yml",children:"# Examples\n\naddress: /tmp/bento.sock\n\naddress: 127.0.0.1:6000\n"})}),"\n",(0,r.jsx)(t.h3,{id:"codec",children:(0,r.jsx)(t.code,{children:"codec"})}),"\n",(0,r.jsxs)(t.p,{children:["The way in which the bytes of messages should be written out into the output data stream. It's possible to write lines using a custom delimiter with the ",(0,r.jsx)(t.code,{children:"delim:x"})," codec, where x is the character sequence custom delimiter."]}),"\n",(0,r.jsxs)(t.p,{children:["Type: ",(0,r.jsx)(t.code,{children:"string"}),(0,r.jsx)(t.br,{}),"\n","Default: ",(0,r.jsx)(t.code,{children:'"lines"'})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Option"}),(0,r.jsx)(t.th,{children:"Summary"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"all-bytes"})}),(0,r.jsx)(t.td,{children:"Only applicable to file based outputs. Writes each message to a file in full, if the file already exists the old content is deleted."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"append"})}),(0,r.jsx)(t.td,{children:"Append each message to the output stream without any delimiter or special encoding."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"lines"})}),(0,r.jsx)(t.td,{children:"Append each message to the output stream followed by a line break."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"delim:x"})}),(0,r.jsx)(t.td,{children:"Append each message to the output stream followed by a custom delimiter."})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yml",children:'# Examples\n\ncodec: lines\n\ncodec: "delim:\\t"\n\ncodec: delim:foobar\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},85162:function(e,t,n){n.d(t,{Z:function(){return l}});n(67294);var r=n(86010),s={tabItem:"tabItem_Ymn6"},o=n(85893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:n,children:t})}},74866:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(67294),s=n(86010),o=n(12466),l=n(16550),a=n(20469),c=n(91980),u=n(67392),i=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=h(e),[l,c]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const s=null!=(t=r.find((e=>e.default)))?t:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[u,d]=m({queryString:n,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[s,o]=(0,i.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),x=(()=>{const e=null!=u?u:f;return p({value:e,tabValues:o})?e:null})();(0,a.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);c(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=n(72389),x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},j=n(85893);function v(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),i=e=>{const t=e.currentTarget,n=c.indexOf(t),s=a[n].value;s!==r&&(u(t),l(s))},d=e=>{var t;let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{var r;const t=c.indexOf(e.currentTarget)+1;n=null!=(r=c[t])?r:c[0];break}case"ArrowLeft":{var s;const t=c.indexOf(e.currentTarget)-1;n=null!=(s=c[t])?s:c[c.length-1];break}}null==(t=n)||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:d,onClick:i,...o,className:(0,s.Z)("tabs__item",x.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=n?n:t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function k(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,j.jsx)(k,{...e,children:d(e.children)},String(t))}},11151:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var r=n(67294);const s={},o=r.createContext(s);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);