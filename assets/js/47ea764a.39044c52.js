"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[6408],{18419:function(e,n,s){s.r(n),s.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return h}});var t=s(85893),r=s(11151),i=s(74866),l=s(85162);const c={title:"redis_pubsub",slug:"redis_pubsub",type:"output",status:"stable",categories:["Services"],name:"redis_pubsub"},o=void 0,a={id:"components/outputs/redis_pubsub",title:"redis_pubsub",description:"\x3c!--",source:"@site/docs/components/outputs/redis_pubsub.md",sourceDirName:"components/outputs",slug:"/components/outputs/redis_pubsub",permalink:"/bento/docs/components/outputs/redis_pubsub",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/outputs/redis_pubsub.md",tags:[],version:"current",frontMatter:{title:"redis_pubsub",slug:"redis_pubsub",type:"output",status:"stable",categories:["Services"],name:"redis_pubsub"},sidebar:"docs",previous:{title:"redis_list",permalink:"/bento/docs/components/outputs/redis_list"},next:{title:"redis_streams",permalink:"/bento/docs/components/outputs/redis_streams"}},d={},h=[{value:"Performance",id:"performance",level:2},{value:"Fields",id:"fields",level:2},{value:"<code>url</code>",id:"url",level:3},{value:"<code>kind</code>",id:"kind",level:3},{value:"<code>master</code>",id:"master",level:3},{value:"<code>tls</code>",id:"tls",level:3},{value:"<code>tls.enabled</code>",id:"tlsenabled",level:3},{value:"<code>tls.skip_cert_verify</code>",id:"tlsskip_cert_verify",level:3},{value:"<code>tls.enable_renegotiation</code>",id:"tlsenable_renegotiation",level:3},{value:"<code>tls.root_cas</code>",id:"tlsroot_cas",level:3},{value:"<code>tls.root_cas_file</code>",id:"tlsroot_cas_file",level:3},{value:"<code>tls.client_certs</code>",id:"tlsclient_certs",level:3},{value:"<code>tls.client_certs[].cert</code>",id:"tlsclient_certscert",level:3},{value:"<code>tls.client_certs[].key</code>",id:"tlsclient_certskey",level:3},{value:"<code>tls.client_certs[].cert_file</code>",id:"tlsclient_certscert_file",level:3},{value:"<code>tls.client_certs[].key_file</code>",id:"tlsclient_certskey_file",level:3},{value:"<code>tls.client_certs[].password</code>",id:"tlsclient_certspassword",level:3},{value:"<code>channel</code>",id:"channel",level:3},{value:"<code>max_in_flight</code>",id:"max_in_flight",level:3},{value:"<code>batching</code>",id:"batching",level:3},{value:"<code>batching.count</code>",id:"batchingcount",level:3},{value:"<code>batching.byte_size</code>",id:"batchingbyte_size",level:3},{value:"<code>batching.period</code>",id:"batchingperiod",level:3},{value:"<code>batching.check</code>",id:"batchingcheck",level:3},{value:"<code>batching.processors</code>",id:"batchingprocessors",level:3}];function u(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Publishes messages through the Redis PubSub model. It is not possible to guarantee that messages have been received."}),"\n",(0,t.jsxs)(i.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,t.jsx)(l.Z,{value:"common",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\noutput:\n  label: ""\n  redis_pubsub:\n    url: redis://:6397 # No default (required)\n    channel: "" # No default (required)\n    max_in_flight: 64\n    batching:\n      count: 0\n      byte_size: 0\n      period: ""\n      check: ""\n'})})}),(0,t.jsx)(l.Z,{value:"advanced",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\noutput:\n  label: ""\n  redis_pubsub:\n    url: redis://:6397 # No default (required)\n    kind: simple\n    master: ""\n    tls:\n      enabled: false\n      skip_cert_verify: false\n      enable_renegotiation: false\n      root_cas: ""\n      root_cas_file: ""\n      client_certs: []\n    channel: "" # No default (required)\n    max_in_flight: 64\n    batching:\n      count: 0\n      byte_size: 0\n      period: ""\n      check: ""\n      processors: [] # No default (optional)\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["This output will interpolate functions within the channel field, you can find a list of functions ",(0,t.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"performance",children:"Performance"}),"\n",(0,t.jsxs)(n.p,{children:["This output benefits from sending multiple messages in flight in parallel for improved performance. You can tune the max number of in flight messages (or message batches) with the field ",(0,t.jsx)(n.code,{children:"max_in_flight"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This output benefits from sending messages as a batch for improved performance. Batches can be formed at both the input and output level. You can find out more ",(0,t.jsx)(n.a,{href:"/docs/configuration/batching",children:"in this doc"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsx)(n.h3,{id:"url",children:(0,t.jsx)(n.code,{children:"url"})}),"\n",(0,t.jsx)(n.p,{children:"The URL of the target Redis server. Database is optional and is supplied as the URL path."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nurl: redis://:6397\n\nurl: redis://localhost:6379\n\nurl: redis://foousername:foopassword@redisplace:6379\n\nurl: redis://:foopassword@redisplace:6379\n\nurl: redis://localhost:6379/1\n\nurl: redis://localhost:6379/1,redis://localhost:6380/1\n"})}),"\n",(0,t.jsx)(n.h3,{id:"kind",children:(0,t.jsx)(n.code,{children:"kind"})}),"\n",(0,t.jsx)(n.p,{children:"Specifies a simple, cluster-aware, or failover-aware redis client."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'"simple"'}),(0,t.jsx)(n.br,{}),"\n","Options: ",(0,t.jsx)(n.code,{children:"simple"}),", ",(0,t.jsx)(n.code,{children:"cluster"}),", ",(0,t.jsx)(n.code,{children:"failover"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"master",children:(0,t.jsx)(n.code,{children:"master"})}),"\n",(0,t.jsxs)(n.p,{children:["Name of the redis master when ",(0,t.jsx)(n.code,{children:"kind"})," is ",(0,t.jsx)(n.code,{children:"failover"})]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nmaster: mymaster\n"})}),"\n",(0,t.jsx)(n.h3,{id:"tls",children:(0,t.jsx)(n.code,{children:"tls"})}),"\n",(0,t.jsx)(n.p,{children:"Custom TLS settings can be used to override system defaults."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Troubleshooting"})}),"\n",(0,t.jsxs)(n.p,{children:['Some cloud hosted instances of Redis (such as Azure Cache) might need some hand holding in order to establish stable connections. Unfortunately, it is often the case that TLS issues will manifest as generic error messages such as "i/o timeout". If you\'re using TLS and are seeing connectivity problems consider setting ',(0,t.jsx)(n.code,{children:"enable_renegotiation"})," to ",(0,t.jsx)(n.code,{children:"true"}),", and ensuring that the server supports at least TLS version 1.2."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"object"})]}),"\n",(0,t.jsx)(n.h3,{id:"tlsenabled",children:(0,t.jsx)(n.code,{children:"tls.enabled"})}),"\n",(0,t.jsx)(n.p,{children:"Whether custom TLS settings are enabled."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"bool"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsx)(n.h3,{id:"tlsskip_cert_verify",children:(0,t.jsx)(n.code,{children:"tls.skip_cert_verify"})}),"\n",(0,t.jsx)(n.p,{children:"Whether to skip server side certificate verification."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"bool"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsx)(n.h3,{id:"tlsenable_renegotiation",children:(0,t.jsx)(n.code,{children:"tls.enable_renegotiation"})}),"\n",(0,t.jsxs)(n.p,{children:["Whether to allow the remote server to repeatedly request renegotiation. Enable this option if you're seeing the error message ",(0,t.jsx)(n.code,{children:"local error: tls: no renegotiation"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"bool"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"false"}),(0,t.jsx)(n.br,{}),"\n","Requires version 3.45.0 or newer"]}),"\n",(0,t.jsx)(n.h3,{id:"tlsroot_cas",children:(0,t.jsx)(n.code,{children:"tls.root_cas"})}),"\n",(0,t.jsx)(n.p,{children:"An optional root certificate authority to use. This is a string, representing a certificate chain from the parent trusted root certificate, to possible intermediate signing certificates, to the host certificate."}),"\n",(0,t.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,t.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,t.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nroot_cas: |-\n  -----BEGIN CERTIFICATE-----\n  ...\n  -----END CERTIFICATE-----\n"})}),"\n",(0,t.jsx)(n.h3,{id:"tlsroot_cas_file",children:(0,t.jsx)(n.code,{children:"tls.root_cas_file"})}),"\n",(0,t.jsx)(n.p,{children:"An optional path of a root certificate authority file to use. This is a file, often with a .pem extension, containing a certificate chain from the parent trusted root certificate, to possible intermediate signing certificates, to the host certificate."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nroot_cas_file: ./root_cas.pem\n"})}),"\n",(0,t.jsx)(n.h3,{id:"tlsclient_certs",children:(0,t.jsx)(n.code,{children:"tls.client_certs"})}),"\n",(0,t.jsxs)(n.p,{children:["A list of client certificates to use. For each certificate either the fields ",(0,t.jsx)(n.code,{children:"cert"})," and ",(0,t.jsx)(n.code,{children:"key"}),", or ",(0,t.jsx)(n.code,{children:"cert_file"})," and ",(0,t.jsx)(n.code,{children:"key_file"})," should be specified, but not both."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"array"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"[]"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nclient_certs:\n  - cert: foo\n    key: bar\n\nclient_certs:\n  - cert_file: ./example.pem\n    key_file: ./example.key\n"})}),"\n",(0,t.jsx)(n.h3,{id:"tlsclient_certscert",children:(0,t.jsx)(n.code,{children:"tls.client_certs[].cert"})}),"\n",(0,t.jsx)(n.p,{children:"A plain text certificate to use."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"tlsclient_certskey",children:(0,t.jsx)(n.code,{children:"tls.client_certs[].key"})}),"\n",(0,t.jsx)(n.p,{children:"A plain text certificate key to use."}),"\n",(0,t.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,t.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,t.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"tlsclient_certscert_file",children:(0,t.jsx)(n.code,{children:"tls.client_certs[].cert_file"})}),"\n",(0,t.jsx)(n.p,{children:"The path of a certificate to use."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"tlsclient_certskey_file",children:(0,t.jsx)(n.code,{children:"tls.client_certs[].key_file"})}),"\n",(0,t.jsx)(n.p,{children:"The path of a certificate key to use."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"tlsclient_certspassword",children:(0,t.jsx)(n.code,{children:"tls.client_certs[].password"})}),"\n",(0,t.jsxs)(n.p,{children:["A plain text password for when the private key is password encrypted in PKCS#1 or PKCS#8 format. The obsolete ",(0,t.jsx)(n.code,{children:"pbeWithMD5AndDES-CBC"})," algorithm is not supported for the PKCS#8 format. Warning: Since it does not authenticate the ciphertext, it is vulnerable to padding oracle attacks that can let an attacker recover the plaintext."]}),"\n",(0,t.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,t.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,t.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\npassword: foo\n\npassword: ${KEY_PASSWORD}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"channel",children:(0,t.jsx)(n.code,{children:"channel"})}),"\n",(0,t.jsxs)(n.p,{children:["The channel to publish messages to.\nThis field supports ",(0,t.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.h3,{id:"max_in_flight",children:(0,t.jsx)(n.code,{children:"max_in_flight"})}),"\n",(0,t.jsx)(n.p,{children:"The maximum number of messages to have in flight at a given time. Increase this to improve throughput."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"int"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"64"})]}),"\n",(0,t.jsx)(n.h3,{id:"batching",children:(0,t.jsx)(n.code,{children:"batching"})}),"\n",(0,t.jsxs)(n.p,{children:["Allows you to configure a ",(0,t.jsx)(n.a,{href:"/docs/configuration/batching",children:"batching policy"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"object"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# Examples\n\nbatching:\n  byte_size: 5000\n  count: 0\n  period: 1s\n\nbatching:\n  count: 10\n  period: 1s\n\nbatching:\n  check: this.contains("END BATCH")\n  count: 0\n  period: 1m\n'})}),"\n",(0,t.jsx)(n.h3,{id:"batchingcount",children:(0,t.jsx)(n.code,{children:"batching.count"})}),"\n",(0,t.jsxs)(n.p,{children:["A number of messages at which the batch should be flushed. If ",(0,t.jsx)(n.code,{children:"0"})," disables count based batching."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"int"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"0"})]}),"\n",(0,t.jsx)(n.h3,{id:"batchingbyte_size",children:(0,t.jsx)(n.code,{children:"batching.byte_size"})}),"\n",(0,t.jsxs)(n.p,{children:["An amount of bytes at which the batch should be flushed. If ",(0,t.jsx)(n.code,{children:"0"})," disables size based batching."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"int"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"0"})]}),"\n",(0,t.jsx)(n.h3,{id:"batchingperiod",children:(0,t.jsx)(n.code,{children:"batching.period"})}),"\n",(0,t.jsx)(n.p,{children:"A period in which an incomplete batch should be flushed regardless of its size."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nperiod: 1s\n\nperiod: 1m\n\nperiod: 500ms\n"})}),"\n",(0,t.jsx)(n.h3,{id:"batchingcheck",children:(0,t.jsx)(n.code,{children:"batching.check"})}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:"/docs/guides/bloblang/about/",children:"Bloblang query"})," that should return a boolean value indicating whether a message should end a batch."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# Examples\n\ncheck: this.type == "end_of_transaction"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"batchingprocessors",children:(0,t.jsx)(n.code,{children:"batching.processors"})}),"\n",(0,t.jsxs)(n.p,{children:["A list of ",(0,t.jsx)(n.a,{href:"/docs/components/processors/about",children:"processors"})," to apply to a batch as it is flushed. This allows you to aggregate and archive the batch however you see fit. Please note that all resulting messages are flushed as a single batch, therefore splitting the batch into smaller batches using these processors is a no-op."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"array"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nprocessors:\n  - archive:\n      format: concatenate\n\nprocessors:\n  - archive:\n      format: lines\n\nprocessors:\n  - archive:\n      format: json_array\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},85162:function(e,n,s){s.d(n,{Z:function(){return l}});s(67294);var t=s(86010),r={tabItem:"tabItem_Ymn6"},i=s(85893);function l(e){let{children:n,hidden:s,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,l),hidden:s,children:n})}},74866:function(e,n,s){s.d(n,{Z:function(){return y}});var t=s(67294),r=s(86010),i=s(12466),l=s(16550),c=s(20469),o=s(91980),a=s(67392),d=s(50012);function h(e){var n,s;return null!=(n=null==(s=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:s.filter(Boolean))?n:[]}function u(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,a.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:s}=e;const r=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:n,groupId:s});return[(0,o._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=u(e),[l,o]=(0,t.useState)((()=>function(e){var n;let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+s+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return s}const r=null!=(n=t.find((e=>e.default)))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[a,h]=f({queryString:s,groupId:r}),[x,b]=function(e){let{groupId:n}=e;const s=function(e){return e?"docusaurus.tab."+e:null}(n),[r,i]=(0,d.Nk)(s);return[r,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),j=(()=>{const e=null!=a?a:x;return p({value:e,tabValues:i})?e:null})();(0,c.Z)((()=>{j&&o(j)}),[j]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);o(e),h(e),b(e)}),[h,b,i]),tabValues:i}}var b=s(72389),j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},m=s(85893);function g(e){let{className:n,block:s,selectedValue:t,selectValue:l,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.o5)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),r=c[s].value;r!==t&&(a(n),l(r))},h=e=>{var n;let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var t;const n=o.indexOf(e.currentTarget)+1;s=null!=(t=o[n])?t:o[0];break}case"ArrowLeft":{var r;const n=o.indexOf(e.currentTarget)-1;s=null!=(r=o[n])?r:o[o.length-1];break}}null==(n=s)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:c.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...i,className:(0,r.Z)("tabs__item",j.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===n}),children:null!=s?s:n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function _(e){const n=x(e);return(0,m.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,m.jsx)(g,{...e,...n}),(0,m.jsx)(v,{...e,...n})]})}function y(e){const n=(0,b.Z)();return(0,m.jsx)(_,{...e,children:h(e.children)},String(n))}},11151:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var t=s(67294);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);