"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[5266],{22134:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=t(85893),s=t(11151),o=t(74866),a=t(85162);const i={title:"metric",slug:"metric",type:"processor",status:"stable",categories:["Utility"],name:"metric"},l=void 0,c={id:"components/processors/metric",title:"metric",description:"\x3c!--",source:"@site/docs/components/processors/metric.md",sourceDirName:"components/processors",slug:"/components/processors/metric",permalink:"/bento/docs/components/processors/metric",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/metric.md",tags:[],version:"current",frontMatter:{title:"metric",slug:"metric",type:"processor",status:"stable",categories:["Utility"],name:"metric"},sidebar:"docs",previous:{title:"mapping",permalink:"/bento/docs/components/processors/mapping"},next:{title:"mongodb",permalink:"/bento/docs/components/processors/mongodb"}},u={},d=[{value:"Fields",id:"fields",level:2},{value:"<code>type</code>",id:"type",level:3},{value:"<code>name</code>",id:"name",level:3},{value:"<code>labels</code>",id:"labels",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"Examples",id:"examples",level:2},{value:"Types",id:"types",level:2},{value:"<code>counter</code>",id:"counter",level:3},{value:"<code>counter_by</code>",id:"counter_by",level:3},{value:"<code>gauge</code>",id:"gauge",level:3},{value:"<code>timing</code>",id:"timing",level:3}];function h(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Emit custom metrics by extracting values from messages."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Config fields, showing default values\nlabel: ""\nmetric:\n  type: "" # No default (required)\n  name: "" # No default (required)\n  labels: {} # No default (optional)\n  value: ""\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This processor works by evaluating an ",(0,r.jsxs)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:["interpolated field ",(0,r.jsx)(n.code,{children:"value"})]})," for each message and updating a emitted metric according to the ",(0,r.jsx)(n.a,{href:"#types",children:"type"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Custom metrics such as these are emitted along with Bento internal metrics, where you can customize where metrics are sent, which metric names are emitted and rename them as/when appropriate. For more information check out the ",(0,r.jsx)(n.a,{href:"/docs/components/metrics/about",children:"metrics docs here"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(n.h3,{id:"type",children:(0,r.jsx)(n.code,{children:"type"})}),"\n",(0,r.jsxs)(n.p,{children:["The metric ",(0,r.jsx)(n.a,{href:"#types",children:"type"})," to create."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Options: ",(0,r.jsx)(n.code,{children:"counter"}),", ",(0,r.jsx)(n.code,{children:"counter_by"}),", ",(0,r.jsx)(n.code,{children:"gauge"}),", ",(0,r.jsx)(n.code,{children:"timing"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"name",children:(0,r.jsx)(n.code,{children:"name"})}),"\n",(0,r.jsx)(n.p,{children:"The name of the metric to create, this must be unique across all Bento components otherwise it will overwrite those other metrics."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.h3,{id:"labels",children:(0,r.jsx)(n.code,{children:"labels"})}),"\n",(0,r.jsxs)(n.p,{children:["A map of label names and values that can be used to enrich metrics. Labels are not supported by some metric destinations, in which case the metrics series are combined.\nThis field supports ",(0,r.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"object"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Examples\n\nlabels:\n  topic: ${! meta("kafka_topic") }\n  type: ${! json("doc.type") }\n'})}),"\n",(0,r.jsx)(n.h3,{id:"value",children:(0,r.jsx)(n.code,{children:"value"})}),"\n",(0,r.jsxs)(n.p,{children:["For some metric types specifies a value to set, increment. Certain metrics exporters such as Prometheus support floating point values, but those that do not will cast a floating point value into an integer.\nThis field supports ",(0,r.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(o.Z,{defaultValue:"Counter",values:[{label:"Counter",value:"Counter"},{label:"Gauge",value:"Gauge"}],children:[(0,r.jsxs)(a.Z,{value:"Counter",children:[(0,r.jsxs)(n.p,{children:["In this example we emit a counter metric called ",(0,r.jsx)(n.code,{children:"Foos"}),", which increments for every message processed, and we label the metric with some metadata about where the message came from and a field from the document that states what type it is. We also configure our metrics to emit to CloudWatch, and explicitly only allow our custom metric and some internal Bento metrics to emit."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'pipeline:\n  processors:\n    - metric:\n        name: Foos\n        type: counter\n        labels:\n          topic: ${! meta("kafka_topic") }\n          partition: ${! meta("kafka_partition") }\n          type: ${! json("document.type").or("unknown") }\n\nmetrics:\n  mapping: |\n    root = if ![\n      "Foos",\n      "input_received",\n      "output_sent"\n    ].contains(this) { deleted() }\n  aws_cloudwatch:\n    namespace: ProdConsumer\n'})})]}),(0,r.jsxs)(a.Z,{value:"Gauge",children:[(0,r.jsxs)(n.p,{children:["In this example we emit a gauge metric called ",(0,r.jsx)(n.code,{children:"FooSize"}),", which is given a value extracted from JSON messages at the path ",(0,r.jsx)(n.code,{children:"foo.size"}),". We then also configure our Prometheus metric exporter to only emit this custom metric and nothing else. We also label the metric with some metadata."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'pipeline:\n  processors:\n    - metric:\n        name: FooSize\n        type: gauge\n        labels:\n          topic: ${! meta("kafka_topic") }\n        value: ${! json("foo.size") }\n\nmetrics:\n  mapping: \'if this != "FooSize" { deleted() }\'\n  prometheus: {}\n'})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,r.jsx)(n.h3,{id:"counter",children:(0,r.jsx)(n.code,{children:"counter"})}),"\n",(0,r.jsxs)(n.p,{children:["Increments a counter by exactly 1, the contents of ",(0,r.jsx)(n.code,{children:"value"})," are ignored\nby this type."]}),"\n",(0,r.jsx)(n.h3,{id:"counter_by",children:(0,r.jsx)(n.code,{children:"counter_by"})}),"\n",(0,r.jsxs)(n.p,{children:["If the contents of ",(0,r.jsx)(n.code,{children:"value"})," can be parsed as a positive integer value\nthen the counter is incremented by this value."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, the following configuration will increment the value of the\n",(0,r.jsx)(n.code,{children:"count.custom.field"})," metric by the contents of ",(0,r.jsx)(n.code,{children:"field.some.value"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'pipeline:\n  processors:\n    - metric:\n        type: counter_by\n        name: CountCustomField\n        value: ${!json("field.some.value")}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"gauge",children:(0,r.jsx)(n.code,{children:"gauge"})}),"\n",(0,r.jsxs)(n.p,{children:["If the contents of ",(0,r.jsx)(n.code,{children:"value"})," can be parsed as a positive integer value\nthen the gauge is set to this value."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, the following configuration will set the value of the\n",(0,r.jsx)(n.code,{children:"gauge.custom.field"})," metric to the contents of ",(0,r.jsx)(n.code,{children:"field.some.value"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'pipeline:\n  processors:\n    - metric:\n        type: gauge\n        name: GaugeCustomField\n        value: ${!json("field.some.value")}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"timing",children:(0,r.jsx)(n.code,{children:"timing"})}),"\n",(0,r.jsxs)(n.p,{children:["Equivalent to ",(0,r.jsx)(n.code,{children:"gauge"})," where instead the metric is a timing. It is recommended that timing values are recorded in nanoseconds in order to be consistent with standard Bento timing metrics, as in some cases these values are automatically converted into other units such as when exporting timings as histograms with Prometheus metrics."]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:function(e,n,t){t.d(n,{Z:function(){return a}});t(67294);var r=t(86010),s={tabItem:"tabItem_Ymn6"},o=t(85893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(67294),s=t(86010),o=t(12466),a=t(16550),i=t(20469),l=t(91980),c=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=h(e),[a,l]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const s=null!=(n=r.find((e=>e.default)))?n:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[c,d]=p({queryString:t,groupId:s}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[s,o]=(0,u.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),b=(()=>{const e=null!=c?c:f;return m({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);l(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=t(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},x=t(85893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==r&&(c(n),a(s))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const n=l.indexOf(e.currentTarget)+1;t=null!=(r=l[n])?r:l[0];break}case"ArrowLeft":{var s;const n=l.indexOf(e.currentTarget)-1;t=null!=(s=l[n])?s:l[l.length-1];break}}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,s.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function w(e){const n=(0,g.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var r=t(67294);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);