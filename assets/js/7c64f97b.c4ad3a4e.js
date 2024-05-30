"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[3216],{45008:function(e,r,n){n.r(r),n.d(r,{assets:function(){return d},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var s=n(85893),t=n(11151),l=n(74866),o=n(85162);const c={title:"parse_log",slug:"parse_log",type:"processor",status:"stable",categories:["Parsing"],name:"parse_log"},a=void 0,i={id:"components/processors/parse_log",title:"parse_log",description:"\x3c!--",source:"@site/docs/components/processors/parse_log.md",sourceDirName:"components/processors",slug:"/components/processors/parse_log",permalink:"/bento/docs/components/processors/parse_log",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/parse_log.md",tags:[],version:"current",frontMatter:{title:"parse_log",slug:"parse_log",type:"processor",status:"stable",categories:["Parsing"],name:"parse_log"},sidebar:"docs",previous:{title:"parquet_encode",permalink:"/bento/docs/components/processors/parquet_encode"},next:{title:"processors",permalink:"/bento/docs/components/processors/processors"}},d={},u=[{value:"Fields",id:"fields",level:2},{value:"<code>format</code>",id:"format",level:3},{value:"<code>best_effort</code>",id:"best_effort",level:3},{value:"<code>allow_rfc3339</code>",id:"allow_rfc3339",level:3},{value:"<code>default_year</code>",id:"default_year",level:3},{value:"<code>default_timezone</code>",id:"default_timezone",level:3},{value:"Codecs",id:"codecs",level:2},{value:"Formats",id:"formats",level:2},{value:"<code>syslog_rfc5424</code>",id:"syslog_rfc5424",level:3},{value:"<code>syslog_rfc3164</code>",id:"syslog_rfc3164",level:3}];function h(e){const r={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Parses common log ",(0,s.jsx)(r.a,{href:"#formats",children:"formats"})," into ",(0,s.jsx)(r.a,{href:"#codecs",children:"structured data"}),". This is easier and often much faster than ",(0,s.jsx)(r.a,{href:"/docs/components/processors/grok",children:(0,s.jsx)(r.code,{children:"grok"})}),"."]}),"\n",(0,s.jsxs)(l.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,s.jsx)(o.Z,{value:"common",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yml",children:'# Common config fields, showing default values\nlabel: ""\nparse_log:\n  format: "" # No default (required)\n'})})}),(0,s.jsx)(o.Z,{value:"advanced",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yml",children:'# All config fields, showing default values\nlabel: ""\nparse_log:\n  format: "" # No default (required)\n  best_effort: true\n  allow_rfc3339: true\n  default_year: current\n  default_timezone: UTC\n'})})})]}),"\n",(0,s.jsx)(r.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsx)(r.h3,{id:"format",children:(0,s.jsx)(r.code,{children:"format"})}),"\n",(0,s.jsxs)(r.p,{children:["A common log ",(0,s.jsx)(r.a,{href:"#formats",children:"format"})," to parse."]}),"\n",(0,s.jsxs)(r.p,{children:["Type: ",(0,s.jsx)(r.code,{children:"string"}),(0,s.jsx)(r.br,{}),"\n","Options: ",(0,s.jsx)(r.code,{children:"syslog_rfc5424"}),", ",(0,s.jsx)(r.code,{children:"syslog_rfc3164"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"best_effort",children:(0,s.jsx)(r.code,{children:"best_effort"})}),"\n",(0,s.jsx)(r.p,{children:"Still returns partially parsed messages even if an error occurs."}),"\n",(0,s.jsxs)(r.p,{children:["Type: ",(0,s.jsx)(r.code,{children:"bool"}),(0,s.jsx)(r.br,{}),"\n","Default: ",(0,s.jsx)(r.code,{children:"true"})]}),"\n",(0,s.jsx)(r.h3,{id:"allow_rfc3339",children:(0,s.jsx)(r.code,{children:"allow_rfc3339"})}),"\n",(0,s.jsxs)(r.p,{children:["Also accept timestamps in rfc3339 format while parsing. Applicable to format ",(0,s.jsx)(r.code,{children:"syslog_rfc3164"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Type: ",(0,s.jsx)(r.code,{children:"bool"}),(0,s.jsx)(r.br,{}),"\n","Default: ",(0,s.jsx)(r.code,{children:"true"})]}),"\n",(0,s.jsx)(r.h3,{id:"default_year",children:(0,s.jsx)(r.code,{children:"default_year"})}),"\n",(0,s.jsxs)(r.p,{children:["Sets the strategy used to set the year for rfc3164 timestamps. Applicable to format ",(0,s.jsx)(r.code,{children:"syslog_rfc3164"}),". When set to ",(0,s.jsx)(r.code,{children:"current"})," the current year will be set, when set to an integer that value will be used. Leave this field empty to not set a default year at all."]}),"\n",(0,s.jsxs)(r.p,{children:["Type: ",(0,s.jsx)(r.code,{children:"string"}),(0,s.jsx)(r.br,{}),"\n","Default: ",(0,s.jsx)(r.code,{children:'"current"'})]}),"\n",(0,s.jsx)(r.h3,{id:"default_timezone",children:(0,s.jsx)(r.code,{children:"default_timezone"})}),"\n",(0,s.jsxs)(r.p,{children:["Sets the strategy to decide the timezone for rfc3164 timestamps. Applicable to format ",(0,s.jsx)(r.code,{children:"syslog_rfc3164"}),". This value should follow the ",(0,s.jsx)(r.a,{href:"https://golang.org/pkg/time/#LoadLocation",children:"time.LoadLocation"})," format."]}),"\n",(0,s.jsxs)(r.p,{children:["Type: ",(0,s.jsx)(r.code,{children:"string"}),(0,s.jsx)(r.br,{}),"\n","Default: ",(0,s.jsx)(r.code,{children:'"UTC"'})]}),"\n",(0,s.jsx)(r.h2,{id:"codecs",children:"Codecs"}),"\n",(0,s.jsxs)(r.p,{children:["Currently the only supported structured data codec is ",(0,s.jsx)(r.code,{children:"json"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"formats",children:"Formats"}),"\n",(0,s.jsx)(r.h3,{id:"syslog_rfc5424",children:(0,s.jsx)(r.code,{children:"syslog_rfc5424"})}),"\n",(0,s.jsxs)(r.p,{children:["Attempts to parse a log following the ",(0,s.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc5424",children:"Syslog rfc5424"})," spec. The resulting structured document may contain any of the following fields:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"message"})," (string)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"timestamp"})," (string, RFC3339)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"facility"})," (int)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"severity"})," (int)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"priority"})," (int)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"version"})," (int)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"hostname"})," (string)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"procid"})," (string)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"appname"})," (string)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"msgid"})," (string)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"structureddata"})," (object)"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"syslog_rfc3164",children:(0,s.jsx)(r.code,{children:"syslog_rfc3164"})}),"\n",(0,s.jsxs)(r.p,{children:["Attempts to parse a log following the ",(0,s.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc3164",children:"Syslog rfc3164"})," spec. The resulting structured document may contain any of the following fields:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"message"})," (string)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"timestamp"})," (string, RFC3339)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"facility"})," (int)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"severity"})," (int)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"priority"})," (int)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"hostname"})," (string)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"procid"})," (string)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"appname"})," (string)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"msgid"})," (string)"]}),"\n"]})]})}function f(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},85162:function(e,r,n){n.d(r,{Z:function(){return o}});n(67294);var s=n(86010),t={tabItem:"tabItem_Ymn6"},l=n(85893);function o(e){let{children:r,hidden:n,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t.tabItem,o),hidden:n,children:r})}},74866:function(e,r,n){n.d(r,{Z:function(){return _}});var s=n(67294),t=n(86010),l=n(12466),o=n(16550),c=n(20469),a=n(91980),i=n(67392),d=n(50012);function u(e){var r,n;return null!=(r=null==(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function h(e){const{values:r,children:n}=e;return(0,s.useMemo)((()=>{const e=null!=r?r:function(e){return u(e).map((e=>{let{props:{value:r,label:n,attributes:s,default:t}}=e;return{value:r,label:n,attributes:s,default:t}}))}(n);return function(e){const r=(0,i.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function f(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:n}=e;const t=(0,o.k6)(),l=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,a._X)(l),(0,s.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(t.location.search);r.set(l,e),t.replace({...t.location,search:r.toString()})}),[l,t])]}function m(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,l=h(e),[o,a]=(0,s.useState)((()=>function(e){var r;let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const t=null!=(r=s.find((e=>e.default)))?r:s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:l}))),[i,u]=p({queryString:n,groupId:t}),[m,x]=function(e){let{groupId:r}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(r),[t,l]=(0,d.Nk)(n);return[t,(0,s.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:t}),j=(()=>{const e=null!=i?i:m;return f({value:e,tabValues:l})?e:null})();(0,c.Z)((()=>{j&&a(j)}),[j]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);a(e),u(e),x(e)}),[u,x,l]),tabValues:l}}var x=n(72389),j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},g=n(85893);function b(e){let{className:r,block:n,selectedValue:s,selectValue:o,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.o5)(),d=e=>{const r=e.currentTarget,n=a.indexOf(r),t=c[n].value;t!==s&&(i(r),o(t))},u=e=>{var r;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var s;const r=a.indexOf(e.currentTarget)+1;n=null!=(s=a[r])?s:a[0];break}case"ArrowLeft":{var t;const r=a.indexOf(e.currentTarget)-1;n=null!=(t=a[r])?t:a[a.length-1];break}}null==(r=n)||r.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":n},r),children:c.map((e=>{let{value:r,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>a.push(e),onKeyDown:u,onClick:d,...l,className:(0,t.Z)("tabs__item",j.tabItem,null==l?void 0:l.className,{"tabs__item--active":s===r}),children:null!=n?n:r},r)}))})}function v(e){let{lazy:r,children:n,selectedValue:t}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function y(e){const r=m(e);return(0,g.jsxs)("div",{className:(0,t.Z)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...e,...r}),(0,g.jsx)(v,{...e,...r})]})}function _(e){const r=(0,x.Z)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(r))}},11151:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return o}});var s=n(67294);const t={},l=s.createContext(t);function o(e){const r=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(l.Provider,{value:r},e.children)}}}]);