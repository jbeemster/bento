"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[7716],{85375:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return i}});var r=n(85893),a=n(11151);n(74866),n(85162);const s={title:"beanstalkd",slug:"beanstalkd",type:"output",status:"experimental",categories:["Services"],name:"beanstalkd"},l=void 0,o={id:"components/outputs/beanstalkd",title:"beanstalkd",description:"\x3c!--",source:"@site/docs/components/outputs/beanstalkd.md",sourceDirName:"components/outputs",slug:"/components/outputs/beanstalkd",permalink:"/bento/docs/components/outputs/beanstalkd",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/outputs/beanstalkd.md",tags:[],version:"current",frontMatter:{title:"beanstalkd",slug:"beanstalkd",type:"output",status:"experimental",categories:["Services"],name:"beanstalkd"},sidebar:"docs",previous:{title:"azure_table_storage",permalink:"/bento/docs/components/outputs/azure_table_storage"},next:{title:"broker",permalink:"/bento/docs/components/outputs/broker"}},u={},i=[{value:"Fields",id:"fields",level:2},{value:"<code>address</code>",id:"address",level:3},{value:"<code>max_in_flight</code>",id:"max_in_flight",level:3}];function c(e){const t={admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"EXPERIMENTAL",type:"caution",children:(0,r.jsx)(t.p,{children:"This component is experimental and therefore subject to change or removal outside of major version releases."})}),"\n",(0,r.jsx)(t.p,{children:"Write messages to a Beanstalkd queue."}),"\n",(0,r.jsx)(t.p,{children:"Introduced in version 4.7.0."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yml",children:'# Config fields, showing default values\noutput:\n  label: ""\n  beanstalkd:\n    address: 127.0.0.1:11300 # No default (required)\n    max_in_flight: 64\n'})}),"\n",(0,r.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(t.h3,{id:"address",children:(0,r.jsx)(t.code,{children:"address"})}),"\n",(0,r.jsx)(t.p,{children:"An address to connect to."}),"\n",(0,r.jsxs)(t.p,{children:["Type: ",(0,r.jsx)(t.code,{children:"string"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yml",children:"# Examples\n\naddress: 127.0.0.1:11300\n"})}),"\n",(0,r.jsx)(t.h3,{id:"max_in_flight",children:(0,r.jsx)(t.code,{children:"max_in_flight"})}),"\n",(0,r.jsx)(t.p,{children:"The maximum number of messages to have in flight at a given time. Increase to improve throughput."}),"\n",(0,r.jsxs)(t.p,{children:["Type: ",(0,r.jsx)(t.code,{children:"int"}),(0,r.jsx)(t.br,{}),"\n","Default: ",(0,r.jsx)(t.code,{children:"64"})]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},85162:function(e,t,n){n.d(t,{Z:function(){return l}});n(67294);var r=n(86010),a={tabItem:"tabItem_Ymn6"},s=n(85893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n,children:t})}},74866:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(67294),a=n(86010),s=n(12466),l=n(16550),o=n(20469),u=n(91980),i=n(67392),c=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,u._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[l,u]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const a=null!=(t=r.find((e=>e.default)))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,d]=f({queryString:n,groupId:a}),[h,b]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=null!=i?i:h;return m({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);u(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},g=n(85893);function x(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=o[n].value;a!==r&&(i(t),l(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var r;const t=u.indexOf(e.currentTarget)+1;n=null!=(r=u[t])?r:u[0];break}case"ArrowLeft":{var a;const t=u.indexOf(e.currentTarget)-1;n=null!=(a=u[t])?a:u[u.length-1];break}}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function k(e){const t=h(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(t))}},11151:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var r=n(67294);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);