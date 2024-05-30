"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[1630],{37519:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return r},metadata:function(){return a},toc:function(){return c}});var s=t(85893),i=t(11151);const r={title:"Streams Mode",sidebar_label:"About",description:"Find out about Bento Streams mode"},o=void 0,a={id:"guides/streams_mode/about",title:"Streams Mode",description:"Find out about Bento Streams mode",source:"@site/docs/guides/streams_mode/about.md",sourceDirName:"guides/streams_mode",slug:"/guides/streams_mode/about",permalink:"/bento/docs/guides/streams_mode/about",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/guides/streams_mode/about.md",tags:[],version:"current",frontMatter:{title:"Streams Mode",sidebar_label:"About",description:"Find out about Bento Streams mode"},sidebar:"docs",previous:{title:"Lambda",permalink:"/bento/docs/guides/serverless/lambda"},next:{title:"Streams Via Config Files",permalink:"/bento/docs/guides/streams_mode/using_config_files"}},d={},c=[{value:"HTTP Endpoints",id:"http-endpoints",level:2},{value:"Resources",id:"resources",level:2},{value:"Metrics",id:"metrics",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"A Bento stream consists of four components; an input, an optional buffer, processor pipelines and an output. Under normal use a Bento instance is a single stream, and these components are configured within the service config file."}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, Bento can be run in ",(0,s.jsx)(n.code,{children:"streams"})," mode, where a single running Bento instance is able to run multiple entirely isolated streams. Adding streams in this mode can be done in two ways:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/guides/streams_mode/using_config_files",children:"Static configuration files"})," allows you to maintain a directory of static stream configuration files that will be traversed by Bento."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.a,{href:"/docs/guides/streams_mode/using_rest_api",children:"HTTP REST API"})," allows you to dynamically create, read the status of, update, and delete streams at runtime."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These two methods can be used in combination, i.e. it's possible to update and delete streams that were created with static files."}),"\n",(0,s.jsxs)(n.p,{children:["When running Bento in streams mode it is still necessary to provide a general service wide configuration with the ",(0,s.jsx)(n.code,{children:"-c"}),"/",(0,s.jsx)(n.code,{children:"--config"})," flag that specifies observability configuration such as the ",(0,s.jsx)(n.code,{children:"metrics"}),", ",(0,s.jsx)(n.code,{children:"logger"})," and ",(0,s.jsx)(n.code,{children:"tracing"})," sections, as well the ",(0,s.jsx)(n.code,{children:"http"})," section for configuring how the HTTP server should behave."]}),"\n",(0,s.jsxs)(n.p,{children:["You can import resources either in the general configuration, or using the ",(0,s.jsx)(n.code,{children:"-r"}),"/",(0,s.jsx)(n.code,{children:"--resources"})," flag, the same as when running Bento in regular mode."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'bento -r "./prod/*.yaml" -c ./config.yaml streams\n'})}),"\n",(0,s.jsx)(n.h2,{id:"http-endpoints",children:"HTTP Endpoints"}),"\n",(0,s.jsxs)(n.p,{children:["A Bento config can contain components such as an ",(0,s.jsx)(n.code,{children:"http_server"})," input that register endpoints to the service-wide HTTP server. When these components are created from within a named stream in streams mode the endpoint will be prefixed with the streams identifier by default. For example, a stream with the identifier ",(0,s.jsx)(n.code,{children:"foo"})," and the config:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"input:\n  http_server:\n    path: /meow\npipeline:\n  processors:\n    - mapping: 'root = \"meow \" + content()'\noutput:\n  sync_response: {}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Will register an endpoint ",(0,s.jsx)(n.code,{children:"/meow"}),", which will be prefixed with the name ",(0,s.jsx)(n.code,{children:"foo"})," to become ",(0,s.jsx)(n.code,{children:"/foo/meow"}),". This behaviour is intended to make a clearer distinction between endpoints registered by different streams, and prevent collisions of those endpoints. However, you can disable this behaviour by setting the flag ",(0,s.jsx)(n.code,{children:"--prefix-stream-endpoints"})," to ",(0,s.jsx)(n.code,{children:"false"})," (",(0,s.jsx)(n.code,{children:"bento streams --prefix-stream-endpoints=false ./streams/*.yaml"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(n.p,{children:["When running Bento in streams mode ",(0,s.jsx)(n.a,{href:"/docs/configuration/resources",children:"resource components"})," are shared across all streams. The streams mode HTTP API also provides an endpoint for modifying and adding resource configurations dynamically."]}),"\n",(0,s.jsx)(n.h2,{id:"metrics",children:"Metrics"}),"\n",(0,s.jsxs)(n.p,{children:["Metrics from all streams are aggregated and exposed via the method specified in ",(0,s.jsx)(n.a,{href:"/docs/components/metrics/about",children:"the config"})," of the Bento instance running in ",(0,s.jsx)(n.code,{children:"streams"})," mode, with their metrics enriched with the tag ",(0,s.jsx)(n.code,{children:"stream"})," containing the stream name."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, a Bento instance running in streams mode running a stream named ",(0,s.jsx)(n.code,{children:"foo"})," would have metrics from ",(0,s.jsx)(n.code,{children:"foo"})," registered with the label ",(0,s.jsx)(n.code,{children:"stream"})," with the value of ",(0,s.jsx)(n.code,{children:"foo"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This can cause problems if your streams are short lived and uniquely named as the number of metrics registered will continue to climb indefinitely. In order to avoid this you can use the ",(0,s.jsx)(n.code,{children:"mapping"})," field to filter metric names."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# Only register metrics for the stream `foo`. Others will be ignored.\nmetrics:\n  mapping: if meta("stream") != "foo" { deleted() }\n  prometheus: {}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var s=t(67294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);