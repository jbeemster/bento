"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[146],{7914:function(e,n,s){s.r(n),s.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var t=s(85893),r=s(11151),i=s(74866),a=s(85162);const o={title:"prometheus",slug:"prometheus",type:"metrics",status:"stable",name:"prometheus"},l=void 0,c={id:"components/metrics/prometheus",title:"prometheus",description:"\x3c!--",source:"@site/docs/components/metrics/prometheus.md",sourceDirName:"components/metrics",slug:"/components/metrics/prometheus",permalink:"/bento/docs/components/metrics/prometheus",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/metrics/prometheus.md",tags:[],version:"current",frontMatter:{title:"prometheus",slug:"prometheus",type:"metrics",status:"stable",name:"prometheus"},sidebar:"docs",previous:{title:"none",permalink:"/bento/docs/components/metrics/none"},next:{title:"statsd",permalink:"/bento/docs/components/metrics/statsd"}},u={},d=[{value:"Fields",id:"fields",level:2},{value:"<code>use_histogram_timing</code>",id:"use_histogram_timing",level:3},{value:"<code>histogram_buckets</code>",id:"histogram_buckets",level:3},{value:"<code>summary_quantiles_objectives</code>",id:"summary_quantiles_objectives",level:3},{value:"<code>summary_quantiles_objectives[].quantile</code>",id:"summary_quantiles_objectivesquantile",level:3},{value:"<code>summary_quantiles_objectives[].error</code>",id:"summary_quantiles_objectiveserror",level:3},{value:"<code>add_process_metrics</code>",id:"add_process_metrics",level:3},{value:"<code>add_go_metrics</code>",id:"add_go_metrics",level:3},{value:"<code>push_url</code>",id:"push_url",level:3},{value:"<code>push_interval</code>",id:"push_interval",level:3},{value:"<code>push_job_name</code>",id:"push_job_name",level:3},{value:"<code>push_basic_auth</code>",id:"push_basic_auth",level:3},{value:"<code>push_basic_auth.username</code>",id:"push_basic_authusername",level:3},{value:"<code>push_basic_auth.password</code>",id:"push_basic_authpassword",level:3},{value:"<code>file_output_path</code>",id:"file_output_path",level:3},{value:"Push Gateway",id:"push-gateway",level:2}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Host endpoints (",(0,t.jsx)(n.code,{children:"/metrics"})," and ",(0,t.jsx)(n.code,{children:"/stats"}),") for Prometheus scraping."]}),"\n",(0,t.jsxs)(i.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,t.jsx)(a.Z,{value:"common",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\nmetrics:\n  prometheus: {}\n  mapping: ""\n'})})}),(0,t.jsx)(a.Z,{value:"advanced",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\nmetrics:\n  prometheus:\n    use_histogram_timing: false\n    histogram_buckets: []\n    summary_quantiles_objectives:\n      - quantile: 0.5\n        error: 0.05\n      - quantile: 0.9\n        error: 0.01\n      - quantile: 0.99\n        error: 0.001\n    add_process_metrics: false\n    add_go_metrics: false\n    push_url: "" # No default (optional)\n    push_interval: "" # No default (optional)\n    push_job_name: bento_push\n    push_basic_auth:\n      username: ""\n      password: ""\n    file_output_path: ""\n  mapping: ""\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsx)(n.h3,{id:"use_histogram_timing",children:(0,t.jsx)(n.code,{children:"use_histogram_timing"})}),"\n",(0,t.jsxs)(n.p,{children:["Whether to export timing metrics as a histogram, if ",(0,t.jsx)(n.code,{children:"false"})," a summary is used instead. When exporting histogram timings the delta values are converted from nanoseconds into seconds in order to better fit within bucket definitions. For more information on histograms and summaries refer to: ",(0,t.jsx)(n.a,{href:"https://prometheus.io/docs/practices/histograms/",children:"https://prometheus.io/docs/practices/histograms/"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"bool"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"false"}),(0,t.jsx)(n.br,{}),"\n","Requires version 3.63.0 or newer"]}),"\n",(0,t.jsx)(n.h3,{id:"histogram_buckets",children:(0,t.jsx)(n.code,{children:"histogram_buckets"})}),"\n",(0,t.jsxs)(n.p,{children:["Timing metrics histogram buckets (in seconds). If left empty defaults to DefBuckets (",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/prometheus/client_golang/prometheus#pkg-variables",children:"https://pkg.go.dev/github.com/prometheus/client_golang/prometheus#pkg-variables"}),"). Applicable when ",(0,t.jsx)(n.code,{children:"use_histogram_timing"})," is set to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"array"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"[]"}),(0,t.jsx)(n.br,{}),"\n","Requires version 3.63.0 or newer"]}),"\n",(0,t.jsx)(n.h3,{id:"summary_quantiles_objectives",children:(0,t.jsx)(n.code,{children:"summary_quantiles_objectives"})}),"\n",(0,t.jsxs)(n.p,{children:["A list of timing metrics summary buckets (as quantiles). Applicable when ",(0,t.jsx)(n.code,{children:"use_histogram_timing"})," is set to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"array"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'[{"error":0.05,"quantile":0.5},{"error":0.01,"quantile":0.9},{"error":0.001,"quantile":0.99}]'}),(0,t.jsx)(n.br,{}),"\n","Requires version 4.23.0 or newer"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nsummary_quantiles_objectives:\n  - error: 0.05\n    quantile: 0.5\n  - error: 0.01\n    quantile: 0.9\n  - error: 0.001\n    quantile: 0.99\n"})}),"\n",(0,t.jsx)(n.h3,{id:"summary_quantiles_objectivesquantile",children:(0,t.jsx)(n.code,{children:"summary_quantiles_objectives[].quantile"})}),"\n",(0,t.jsx)(n.p,{children:"Quantile value."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"float"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"0"})]}),"\n",(0,t.jsx)(n.h3,{id:"summary_quantiles_objectiveserror",children:(0,t.jsx)(n.code,{children:"summary_quantiles_objectives[].error"})}),"\n",(0,t.jsxs)(n.p,{children:["Permissible margin of error for quantile calculations. Precise calculations in a streaming context (without prior knowledge of the full dataset) can be resource-intensive. To balance accuracy with computational efficiency, an error margin is introduced. For instance, if the 90th quantile (",(0,t.jsx)(n.code,{children:"0.9"}),") is determined to be ",(0,t.jsx)(n.code,{children:"100ms"})," with a 1% error margin (",(0,t.jsx)(n.code,{children:"0.01"}),"), the true value will fall within the ",(0,t.jsx)(n.code,{children:"[99ms, 101ms]"})," range.)"]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"float"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"0"})]}),"\n",(0,t.jsx)(n.h3,{id:"add_process_metrics",children:(0,t.jsx)(n.code,{children:"add_process_metrics"})}),"\n",(0,t.jsx)(n.p,{children:"Whether to export process metrics such as CPU and memory usage in addition to Bento metrics."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"bool"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsx)(n.h3,{id:"add_go_metrics",children:(0,t.jsx)(n.code,{children:"add_go_metrics"})}),"\n",(0,t.jsx)(n.p,{children:"Whether to export Go runtime metrics such as GC pauses in addition to Bento metrics."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"bool"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsx)(n.h3,{id:"push_url",children:(0,t.jsx)(n.code,{children:"push_url"})}),"\n",(0,t.jsxs)(n.p,{children:["An optional ",(0,t.jsx)(n.a,{href:"#push-gateway",children:"Push Gateway URL"})," to push metrics to."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.h3,{id:"push_interval",children:(0,t.jsx)(n.code,{children:"push_interval"})}),"\n",(0,t.jsx)(n.p,{children:"The period of time between each push when sending metrics to a Push Gateway."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.h3,{id:"push_job_name",children:(0,t.jsx)(n.code,{children:"push_job_name"})}),"\n",(0,t.jsx)(n.p,{children:"An identifier for push jobs."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'"bento_push"'})]}),"\n",(0,t.jsx)(n.h3,{id:"push_basic_auth",children:(0,t.jsx)(n.code,{children:"push_basic_auth"})}),"\n",(0,t.jsx)(n.p,{children:"The Basic Authentication credentials."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"object"})]}),"\n",(0,t.jsx)(n.h3,{id:"push_basic_authusername",children:(0,t.jsx)(n.code,{children:"push_basic_auth.username"})}),"\n",(0,t.jsx)(n.p,{children:"The Basic Authentication username."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"push_basic_authpassword",children:(0,t.jsx)(n.code,{children:"push_basic_auth.password"})}),"\n",(0,t.jsx)(n.p,{children:"The Basic Authentication password."}),"\n",(0,t.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,t.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,t.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"file_output_path",children:(0,t.jsx)(n.code,{children:"file_output_path"})}),"\n",(0,t.jsx)(n.p,{children:"An optional file path to write all prometheus metrics on service shutdown."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h2,{id:"push-gateway",children:"Push Gateway"}),"\n",(0,t.jsxs)(n.p,{children:["The field ",(0,t.jsx)(n.code,{children:"push_url"})," is optional and when set will trigger a push of metrics to a ",(0,t.jsx)(n.a,{href:"https://prometheus.io/docs/instrumenting/pushing/",children:"Prometheus Push Gateway"})," once Bento shuts down. It is also possible to specify a ",(0,t.jsx)(n.code,{children:"push_interval"})," which results in periodic pushes."]}),"\n",(0,t.jsx)(n.p,{children:'The Push Gateway is useful for when Bento instances are short lived. Do not include the "/metrics/jobs/..." path in the push URL.'}),"\n",(0,t.jsxs)(n.p,{children:["If the Push Gateway requires HTTP Basic Authentication it can be configured with ",(0,t.jsx)(n.code,{children:"push_basic_auth"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:function(e,n,s){s.d(n,{Z:function(){return a}});s(67294);var t=s(86010),r={tabItem:"tabItem_Ymn6"},i=s(85893);function a(e){let{children:n,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,a),hidden:s,children:n})}},74866:function(e,n,s){s.d(n,{Z:function(){return y}});var t=s(67294),r=s(86010),i=s(12466),a=s(16550),o=s(20469),l=s(91980),c=s(67392),u=s(50012);function d(e){var n,s;return null!=(n=null==(s=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:s.filter(Boolean))?n:[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const r=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:n,groupId:s});return[(0,l._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=h(e),[a,l]=(0,t.useState)((()=>function(e){var n;let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+s+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return s}const r=null!=(n=t.find((e=>e.default)))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=m({queryString:s,groupId:r}),[j,f]=function(e){let{groupId:n}=e;const s=function(e){return e?"docusaurus.tab."+e:null}(n),[r,i]=(0,u.Nk)(s);return[r,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),x=(()=>{const e=null!=c?c:j;return p({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=s(72389),x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},b=s(85893);function _(e){let{className:n,block:s,selectedValue:t,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const n=e.currentTarget,s=l.indexOf(n),r=o[s].value;r!==t&&(c(n),a(r))},d=e=>{var n;let s=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var t;const n=l.indexOf(e.currentTarget)+1;s=null!=(t=l[n])?t:l[0];break}case"ArrowLeft":{var r;const n=l.indexOf(e.currentTarget)-1;s=null!=(r=l[n])?r:l[l.length-1];break}}null==(n=s)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.Z)("tabs__item",x.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===n}),children:null!=s?s:n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function g(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(_,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function y(e){const n=(0,f.Z)();return(0,b.jsx)(g,{...e,children:d(e.children)},String(n))}},11151:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return a}});var t=s(67294);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);