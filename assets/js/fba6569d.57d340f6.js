"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[7530],{75980:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d}});var r=t(85893),s=t(11151),a=t(74866),o=t(85162);const l={title:"bounds_check",slug:"bounds_check",type:"processor",status:"stable",categories:["Utility"],name:"bounds_check"},c=void 0,i={id:"components/processors/bounds_check",title:"bounds_check",description:"\x3c!--",source:"@site/docs/components/processors/bounds_check.md",sourceDirName:"components/processors",slug:"/components/processors/bounds_check",permalink:"/bento/docs/components/processors/bounds_check",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/bounds_check.md",tags:[],version:"current",frontMatter:{title:"bounds_check",slug:"bounds_check",type:"processor",status:"stable",categories:["Utility"],name:"bounds_check"},sidebar:"docs",previous:{title:"bloblang",permalink:"/bento/docs/components/processors/bloblang"},next:{title:"branch",permalink:"/bento/docs/components/processors/branch"}},u={},d=[{value:"Fields",id:"fields",level:2},{value:"<code>max_part_size</code>",id:"max_part_size",level:3},{value:"<code>min_part_size</code>",id:"min_part_size",level:3},{value:"<code>max_parts</code>",id:"max_parts",level:3},{value:"<code>min_parts</code>",id:"min_parts",level:3}];function m(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Removes messages (and batches) that do not fit within certain size boundaries."}),"\n",(0,r.jsxs)(a.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,r.jsx)(o.Z,{value:"common",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\nlabel: ""\nbounds_check:\n  max_part_size: 1073741824\n  min_part_size: 1\n'})})}),(0,r.jsx)(o.Z,{value:"advanced",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\nlabel: ""\nbounds_check:\n  max_part_size: 1073741824\n  min_part_size: 1\n  max_parts: 100\n  min_parts: 1\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(n.h3,{id:"max_part_size",children:(0,r.jsx)(n.code,{children:"max_part_size"})}),"\n",(0,r.jsx)(n.p,{children:"The maximum size of a message to allow (in bytes)"}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"int"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"1073741824"})]}),"\n",(0,r.jsx)(n.h3,{id:"min_part_size",children:(0,r.jsx)(n.code,{children:"min_part_size"})}),"\n",(0,r.jsx)(n.p,{children:"The minimum size of a message to allow (in bytes)"}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"int"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"1"})]}),"\n",(0,r.jsx)(n.h3,{id:"max_parts",children:(0,r.jsx)(n.code,{children:"max_parts"})}),"\n",(0,r.jsx)(n.p,{children:"The maximum size of message batches to allow (in message count)"}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"int"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"100"})]}),"\n",(0,r.jsx)(n.h3,{id:"min_parts",children:(0,r.jsx)(n.code,{children:"min_parts"})}),"\n",(0,r.jsx)(n.p,{children:"The minimum size of message batches to allow (in message count)"}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"int"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"1"})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},85162:function(e,n,t){t.d(n,{Z:function(){return o}});t(67294);var r=t(86010),s={tabItem:"tabItem_Ymn6"},a=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(67294),s=t(86010),a=t(12466),o=t(16550),l=t(20469),c=t(91980),i=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=m(e),[o,c]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const s=null!=(n=r.find((e=>e.default)))?n:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[i,d]=h({queryString:t,groupId:s}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[s,a]=(0,u.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),v=(()=>{const e=null!=i?i:b;return p({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{v&&c(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);c(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},x=t(85893);function _(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),s=l[t].value;s!==r&&(i(n),o(s))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const n=c.indexOf(e.currentTarget)+1;t=null!=(r=c[n])?r:c[0];break}case"ArrowLeft":{var s;const n=c.indexOf(e.currentTarget)-1;t=null!=(s=c[n])?s:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.Z)("tabs__item",v.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(_,{...e,...n}),(0,x.jsx)(g,{...e,...n})]})}function y(e){const n=(0,f.Z)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var r=t(67294);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);