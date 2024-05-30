"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[6664],{92508:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return l}});var o=t(85893),r=t(11151);const s={title:"Resources"},i=void 0,a={id:"configuration/resources",title:"Resources",description:"Resources are components within Bento that are declared with a unique label and can be referenced any number of times within a configuration. Only one instance of each named resource is created, but it is safe to use it in multiple places as they can be shared without consequence.",source:"@site/docs/configuration/resources.md",sourceDirName:"configuration",slug:"/configuration/resources",permalink:"/bento/docs/configuration/resources",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/configuration/resources.md",tags:[],version:"current",frontMatter:{title:"Resources"},sidebar:"docs",previous:{title:"About",permalink:"/bento/docs/configuration/about"},next:{title:"Message Batching",permalink:"/bento/docs/configuration/batching"}},c={},l=[{value:"Reusability",id:"reusability",level:2},{value:"Feature Toggling",id:"feature-toggling",level:2},{value:"With Environment Variables",id:"with-environment-variables",level:3},{value:"With Imports",id:"with-imports",level:3}];function u(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Resources are components within Bento that are declared with a unique label and can be referenced any number of times within a configuration. Only one instance of each named resource is created, but it is safe to use it in multiple places as they can be shared without consequence."}),"\n",(0,o.jsxs)(n.p,{children:["Some components such as caches and rate limits can ",(0,o.jsx)(n.em,{children:"only"})," be created as a resource. However, for components where it's optional there are a few reasons why it might be advantageous to do so."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"input:\n  resource: foo\n\npipeline:\n  processors:\n    - resource: bar\n    - cache:\n        operator: set\n        resource: baz\n        key: ${! json(\"id\") }\n        value: ${! content() }\n\noutput:\n  resource: buz\n\ninput_resources:\n  - label: foo\n    file:\n      paths: [ ./in.txt ]\n\nprocessor_resources:\n  - label: bar\n    mapping: 'root = content.lowercase()'\n\ncache_resources:\n  - label: baz\n    memory:\n      default_ttl: 300s\n\noutput_resources:\n  - label: buz\n    file:\n      path: ./out.txt\n"})}),"\n",(0,o.jsx)(n.h2,{id:"reusability",children:"Reusability"}),"\n",(0,o.jsx)(n.p,{children:"Sometimes it's necessary to use a rather large component multiple times. Instead of copy/pasting the configuration or using YAML anchors you can define your component as a resource."}),"\n",(0,o.jsxs)(n.p,{children:['In the following example we want to make an HTTP request with our payloads. Occasionally the payload might get rejected due to garbage within its contents, and so we catch these rejected requests, attempt to "cleanse" the contents and try to make the same HTTP request again. Since the HTTP request component is quite large (and likely to change over time) we make sure to avoid duplicating it by defining it as a resource ',(0,o.jsx)(n.code,{children:"get_foo"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'pipeline:\n  processors:\n    - resource: get_foo\n    - catch:\n      - mapping: |\n          root = this\n          root.content = this.content.strip_html()\n      - resource: get_foo\n\nprocessor_resources:\n  - label: get_foo\n    http:\n      url: http://example.com/foo\n      verb: POST\n      headers:\n        SomeThing: "set-to-this"\n        SomeThingElse: "set-to-something-else"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"feature-toggling",children:"Feature Toggling"}),"\n",(0,o.jsx)(n.h3,{id:"with-environment-variables",children:"With Environment Variables"}),"\n",(0,o.jsx)(n.p,{children:"There are two ways of using resources for feature toggling, the first is to define your feature components with unique names and then apply the old switcheroo with environment variables to select the one you wish to execute:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'pipeline:\n  processors:\n    - resource: ${FEATURE_REQUEST}\n\nprocessor_resources:\n  - label: get_foo\n    http:\n      url: http://example.com/foo\n      verb: POST\n      headers:\n        SomeThing: "set-to-this"\n        SomeThingElse: "set-to-something-else"\n\n  - label: get_bar\n    http:\n      url: http://example.com/bar\n      verb: PUT\n      headers:\n        Desires: "are-empty"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Then when you execute Bento use the environment variable to choose your resource: ",(0,o.jsx)(n.code,{children:"FEATURE_REQUEST=get_foo bento -c ./your_config.yaml"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"with-imports",children:"With Imports"}),"\n",(0,o.jsxs)(n.p,{children:["However, Bento allows you to import resources from separate files with the cli flag ",(0,o.jsx)(n.code,{children:"-r"})," or ",(0,o.jsx)(n.code,{children:"-resources"}),", which can be a useful way to switch out resources with common names based on your chosen environment. For example, with a main configuration file ",(0,o.jsx)(n.code,{children:"config.yaml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - resource: get_foo\n"})}),"\n",(0,o.jsxs)(n.p,{children:["And then two resource files, one stored at the path ",(0,o.jsx)(n.code,{children:"./staging/request.yaml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'processor_resources:\n  - label: get_foo\n    http:\n      url: http://example.com/foo\n      verb: POST\n      headers:\n        SomeThing: "set-to-this"\n        SomeThingElse: "set-to-something-else"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["And another stored at the path ",(0,o.jsx)(n.code,{children:"./production/request.yaml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'processor_resources:\n  - label: get_foo\n    http:\n      url: http://example.com/bar\n      verb: PUT\n      headers:\n        Desires: "are-empty"\n'})}),"\n",(0,o.jsx)(n.p,{children:"We can select our chosen resource by changing which file we import, either running:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"bento -r ./staging/request.yaml -c ./config.yaml\n"})}),"\n",(0,o.jsx)(n.p,{children:"Or:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"bento -r ./production/request.yaml -c ./config.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["These flags also support wildcards, which allows you to import an entire directory of resource files like ",(0,o.jsx)(n.code,{children:'bento -r "./staging/*.yaml" -c ./config.yaml'}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var o=t(67294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);