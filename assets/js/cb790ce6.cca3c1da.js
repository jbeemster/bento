"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[2219],{27021:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var r=n(85893),s=n(11151);n(74866),n(85162);const a={title:"insert_part",slug:"insert_part",type:"processor",status:"stable",categories:["Composition"],name:"insert_part"},o=void 0,i={id:"components/processors/insert_part",title:"insert_part",description:"\x3c!--",source:"@site/docs/components/processors/insert_part.md",sourceDirName:"components/processors",slug:"/components/processors/insert_part",permalink:"/bento/docs/components/processors/insert_part",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/insert_part.md",tags:[],version:"current",frontMatter:{title:"insert_part",slug:"insert_part",type:"processor",status:"stable",categories:["Composition"],name:"insert_part"},sidebar:"docs",previous:{title:"http",permalink:"/bento/docs/components/processors/http"},next:{title:"javascript",permalink:"/bento/docs/components/processors/javascript"}},l={},u=[{value:"Fields",id:"fields",level:2},{value:"<code>index</code>",id:"index",level:3},{value:"<code>content</code>",id:"content",level:3}];function c(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Insert a new message into a batch at an index. If the specified index is greater than the length of the existing batch it will be appended to the end."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yml",children:'# Config fields, showing default values\nlabel: ""\ninsert_part:\n  index: -1\n  content: ""\n'})}),"\n",(0,r.jsx)(t.p,{children:"The index can be negative, and if so the message will be inserted from the end counting backwards starting from -1. E.g. if index = -1 then the new message will become the last of the batch, if index = -2 then the new message will be inserted before the last message, and so on. If the negative index is greater than the length of the existing batch it will be inserted at the beginning."}),"\n",(0,r.jsx)(t.p,{children:"The new message will have metadata copied from the first pre-existing message of the batch."}),"\n",(0,r.jsxs)(t.p,{children:["This processor will interpolate functions within the 'content' field, you can find a list of functions ",(0,r.jsx)(t.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(t.h3,{id:"index",children:(0,r.jsx)(t.code,{children:"index"})}),"\n",(0,r.jsx)(t.p,{children:"The index within the batch to insert the message at."}),"\n",(0,r.jsxs)(t.p,{children:["Type: ",(0,r.jsx)(t.code,{children:"int"}),(0,r.jsx)(t.br,{}),"\n","Default: ",(0,r.jsx)(t.code,{children:"-1"})]}),"\n",(0,r.jsx)(t.h3,{id:"content",children:(0,r.jsx)(t.code,{children:"content"})}),"\n",(0,r.jsxs)(t.p,{children:["The content of the message being inserted.\nThis field supports ",(0,r.jsx)(t.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Type: ",(0,r.jsx)(t.code,{children:"string"}),(0,r.jsx)(t.br,{}),"\n","Default: ",(0,r.jsx)(t.code,{children:'""'})]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},85162:function(e,t,n){n.d(t,{Z:function(){return o}});n(67294);var r=n(86010),s={tabItem:"tabItem_Ymn6"},a=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n,children:t})}},74866:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(67294),s=n(86010),a=n(12466),o=n(16550),i=n(20469),l=n(91980),u=n(67392),c=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[o,l]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const s=null!=(t=r.find((e=>e.default)))?t:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[u,d]=f({queryString:n,groupId:s}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[s,a]=(0,c.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),g=(()=>{const e=null!=u?u:b;return p({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);l(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=n(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},v=n(85893);function x(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==r&&(u(t),o(s))},d=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var r;const t=l.indexOf(e.currentTarget)+1;n=null!=(r=l[t])?r:l[0];break}case"ArrowLeft":{var s;const t=l.indexOf(e.currentTarget)-1;n=null!=(s=l[t])?s:l[l.length-1];break}}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.Z)("tabs__item",g.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===t}),children:null!=n?n:t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function y(e){const t=(0,m.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},11151:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return o}});var r=n(67294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);