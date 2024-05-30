"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[9170],{96423:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return h}});var o=t(85893),s=t(11151),r=t(74866),a=t(85162);const i={title:"azure_cosmosdb",slug:"azure_cosmosdb",type:"processor",status:"experimental",categories:["Azure"],name:"azure_cosmosdb"},l=void 0,c={id:"components/processors/azure_cosmosdb",title:"azure_cosmosdb",description:"\x3c!--",source:"@site/docs/components/processors/azure_cosmosdb.md",sourceDirName:"components/processors",slug:"/components/processors/azure_cosmosdb",permalink:"/bento/docs/components/processors/azure_cosmosdb",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/azure_cosmosdb.md",tags:[],version:"current",frontMatter:{title:"azure_cosmosdb",slug:"azure_cosmosdb",type:"processor",status:"experimental",categories:["Azure"],name:"azure_cosmosdb"},sidebar:"docs",previous:{title:"aws_lambda",permalink:"/bento/docs/components/processors/aws_lambda"},next:{title:"bloblang",permalink:"/bento/docs/components/processors/bloblang"}},d={},h=[{value:"Credentials",id:"credentials",level:2},{value:"Metadata",id:"metadata",level:2},{value:"Batching",id:"batching",level:2},{value:"Examples",id:"examples",level:2},{value:"Fields",id:"fields",level:2},{value:"<code>endpoint</code>",id:"endpoint",level:3},{value:"<code>account_key</code>",id:"account_key",level:3},{value:"<code>connection_string</code>",id:"connection_string",level:3},{value:"<code>database</code>",id:"database",level:3},{value:"<code>container</code>",id:"container",level:3},{value:"<code>partition_keys_map</code>",id:"partition_keys_map",level:3},{value:"<code>operation</code>",id:"operation",level:3},{value:"<code>patch_operations</code>",id:"patch_operations",level:3},{value:"<code>patch_operations[].operation</code>",id:"patch_operationsoperation",level:3},{value:"<code>patch_operations[].path</code>",id:"patch_operationspath",level:3},{value:"<code>patch_operations[].value_map</code>",id:"patch_operationsvalue_map",level:3},{value:"<code>patch_condition</code>",id:"patch_condition",level:3},{value:"<code>auto_id</code>",id:"auto_id",level:3},{value:"<code>item_id</code>",id:"item_id",level:3},{value:"<code>enable_content_response_on_write</code>",id:"enable_content_response_on_write",level:3},{value:"CosmosDB Emulator",id:"cosmosdb-emulator",level:2}];function u(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"EXPERIMENTAL",type:"caution",children:(0,o.jsx)(n.p,{children:"This component is experimental and therefore subject to change or removal outside of major version releases."})}),"\n",(0,o.jsxs)(n.p,{children:["Creates or updates messages as JSON documents in ",(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/cosmos-db/introduction",children:"Azure CosmosDB"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Introduced in version v4.25.0."}),"\n",(0,o.jsxs)(r.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,o.jsx)(a.Z,{value:"common",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\nlabel: ""\nazure_cosmosdb:\n  endpoint: https://localhost:8081 # No default (optional)\n  account_key: \'!!!SECRET_SCRUBBED!!!\' # No default (optional)\n  connection_string: \'!!!SECRET_SCRUBBED!!!\' # No default (optional)\n  database: testdb # No default (required)\n  container: testcontainer # No default (required)\n  partition_keys_map: root = "blobfish" # No default (required)\n  operation: Create\n  item_id: ${! json("id") } # No default (optional)\n'})})}),(0,o.jsx)(a.Z,{value:"advanced",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\nlabel: ""\nazure_cosmosdb:\n  endpoint: https://localhost:8081 # No default (optional)\n  account_key: \'!!!SECRET_SCRUBBED!!!\' # No default (optional)\n  connection_string: \'!!!SECRET_SCRUBBED!!!\' # No default (optional)\n  database: testdb # No default (required)\n  container: testcontainer # No default (required)\n  partition_keys_map: root = "blobfish" # No default (required)\n  operation: Create\n  patch_operations: [] # No default (optional)\n  patch_condition: from c where not is_defined(c.blobfish) # No default (optional)\n  auto_id: true\n  item_id: ${! json("id") } # No default (optional)\n  enable_content_response_on_write: true\n'})})})]}),"\n",(0,o.jsxs)(n.p,{children:["When creating documents, each message must have the ",(0,o.jsx)(n.code,{children:"id"})," property (case-sensitive) set (or use ",(0,o.jsx)(n.code,{children:"auto_id: true"}),"). It is the unique name that identifies the document, that is, no two documents share the same ",(0,o.jsx)(n.code,{children:"id"})," within a logical partition. The ",(0,o.jsx)(n.code,{children:"id"})," field must not exceed 255 characters. More details can be found ",(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/rest/api/cosmos-db/documents",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"partition_keys"})," field must resolve to the same value(s) across the entire message batch."]}),"\n",(0,o.jsx)(n.h2,{id:"credentials",children:"Credentials"}),"\n",(0,o.jsx)(n.p,{children:"You can use one of the following authentication mechanisms:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Set the ",(0,o.jsx)(n.code,{children:"endpoint"})," field and the ",(0,o.jsx)(n.code,{children:"account_key"})," field"]}),"\n",(0,o.jsxs)(n.li,{children:["Set only the ",(0,o.jsx)(n.code,{children:"endpoint"})," field to use ",(0,o.jsx)(n.a,{href:"https://pkg.go.dev/github.com/Azure/azure-sdk-for-go/sdk/azidentity#DefaultAzureCredential",children:"DefaultAzureCredential"})]}),"\n",(0,o.jsxs)(n.li,{children:["Set the ",(0,o.jsx)(n.code,{children:"connection_string"})," field"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"metadata",children:"Metadata"}),"\n",(0,o.jsx)(n.p,{children:"This component adds the following metadata fields to each message:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"- activity_id\n- request_charge\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can access these metadata fields using ",(0,o.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"function interpolation"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"batching",children:"Batching"}),"\n",(0,o.jsxs)(n.p,{children:["CosmosDB limits the maximum batch size to 100 messages and the payload must not exceed 2MB (details ",(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/cosmos-db/concepts-limits#per-request-limits",children:"here"}),")."]}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(r.Z,{defaultValue:"Patch documents",values:[{label:"Patch documents",value:"Patch documents"}],children:(0,o.jsxs)(a.Z,{value:"Patch documents",children:[(0,o.jsx)(n.p,{children:"Query documents from a container and patch them."}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'input:\n  azure_cosmosdb:\n    endpoint: http://localhost:8080\n    account_key: C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==\n    database: blobbase\n    container: blobfish\n    partition_keys_map: root = "AbyssalPlain"\n    query: SELECT * FROM blobfish\n\n  processors:\n    - mapping: |\n        root = ""\n        meta habitat = json("habitat")\n        meta id = this.id\n    - azure_cosmosdb:\n        endpoint: http://localhost:8080\n        account_key: C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==\n        database: testdb\n        container: blobfish\n        partition_keys_map: root = json("habitat")\n        item_id: ${! meta("id") }\n        operation: Patch\n        patch_operations:\n          # Add a new /diet field\n          - operation: Add\n            path: /diet\n            value_map: root = json("diet")\n          # Remove the first location from the /locations array field\n          - operation: Remove\n            path: /locations/0\n          # Add new location at the end of the /locations array field\n          - operation: Add\n            path: /locations/-\n            value_map: root = "Challenger Deep"\n        # Return the updated document\n        enable_content_response_on_write: true\n'})})]})}),"\n",(0,o.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,o.jsx)(n.h3,{id:"endpoint",children:(0,o.jsx)(n.code,{children:"endpoint"})}),"\n",(0,o.jsx)(n.p,{children:"CosmosDB endpoint."}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nendpoint: https://localhost:8081\n"})}),"\n",(0,o.jsx)(n.h3,{id:"account_key",children:(0,o.jsx)(n.code,{children:"account_key"})}),"\n",(0,o.jsx)(n.p,{children:"Account key."}),"\n",(0,o.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,o.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,o.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:"# Examples\n\naccount_key: C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==\n"})}),"\n",(0,o.jsx)(n.h3,{id:"connection_string",children:(0,o.jsx)(n.code,{children:"connection_string"})}),"\n",(0,o.jsx)(n.p,{children:"Connection string."}),"\n",(0,o.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,o.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,o.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nconnection_string: AccountEndpoint=https://localhost:8081/;AccountKey=C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"database",children:(0,o.jsx)(n.code,{children:"database"})}),"\n",(0,o.jsx)(n.p,{children:"Database."}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:"# Examples\n\ndatabase: testdb\n"})}),"\n",(0,o.jsx)(n.h3,{id:"container",children:(0,o.jsx)(n.code,{children:"container"})}),"\n",(0,o.jsx)(n.p,{children:"Container."}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:"# Examples\n\ncontainer: testcontainer\n"})}),"\n",(0,o.jsx)(n.h3,{id:"partition_keys_map",children:(0,o.jsx)(n.code,{children:"partition_keys_map"})}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.a,{href:"/docs/guides/bloblang/about",children:"Bloblang mapping"})," which should evaluate to a single partition key value or an array of partition key values of type string, integer or boolean. Currently, hierarchical partition keys are not supported so only one value may be provided."]}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:'# Examples\n\npartition_keys_map: root = "blobfish"\n\npartition_keys_map: root = 41\n\npartition_keys_map: root = true\n\npartition_keys_map: root = null\n\npartition_keys_map: root = json("blobfish").depth\n'})}),"\n",(0,o.jsx)(n.h3,{id:"operation",children:(0,o.jsx)(n.code,{children:"operation"})}),"\n",(0,o.jsx)(n.p,{children:"Operation."}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"string"}),(0,o.jsx)(n.br,{}),"\n","Default: ",(0,o.jsx)(n.code,{children:'"Create"'})]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Option"}),(0,o.jsx)(n.th,{children:"Summary"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Create"})}),(0,o.jsx)(n.td,{children:"Create operation."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Delete"})}),(0,o.jsx)(n.td,{children:"Delete operation."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Patch"})}),(0,o.jsx)(n.td,{children:"Patch operation."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Read"})}),(0,o.jsx)(n.td,{children:"Read operation."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Replace"})}),(0,o.jsx)(n.td,{children:"Replace operation."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Upsert"})}),(0,o.jsx)(n.td,{children:"Upsert operation."})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"patch_operations",children:(0,o.jsx)(n.code,{children:"patch_operations"})}),"\n",(0,o.jsxs)(n.p,{children:["Patch operations to be performed when ",(0,o.jsx)(n.code,{children:"operation: Patch"})," ."]}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"array"})]}),"\n",(0,o.jsx)(n.h3,{id:"patch_operationsoperation",children:(0,o.jsx)(n.code,{children:"patch_operations[].operation"})}),"\n",(0,o.jsx)(n.p,{children:"Operation."}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"string"}),(0,o.jsx)(n.br,{}),"\n","Default: ",(0,o.jsx)(n.code,{children:'"Add"'})]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Option"}),(0,o.jsx)(n.th,{children:"Summary"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Add"})}),(0,o.jsx)(n.td,{children:"Add patch operation."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Increment"})}),(0,o.jsx)(n.td,{children:"Increment patch operation."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Remove"})}),(0,o.jsx)(n.td,{children:"Remove patch operation."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Replace"})}),(0,o.jsx)(n.td,{children:"Replace patch operation."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Set"})}),(0,o.jsx)(n.td,{children:"Set patch operation."})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"patch_operationspath",children:(0,o.jsx)(n.code,{children:"patch_operations[].path"})}),"\n",(0,o.jsx)(n.p,{children:"Path."}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:"# Examples\n\npath: /foo/bar/baz\n"})}),"\n",(0,o.jsx)(n.h3,{id:"patch_operationsvalue_map",children:(0,o.jsx)(n.code,{children:"patch_operations[].value_map"})}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.a,{href:"/docs/guides/bloblang/about",children:"Bloblang mapping"})," which should evaluate to a value of any type that is supported by CosmosDB."]}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:'# Examples\n\nvalue_map: root = "blobfish"\n\nvalue_map: root = 41\n\nvalue_map: root = true\n\nvalue_map: root = json("blobfish").depth\n\nvalue_map: root = [1, 2, 3]\n'})}),"\n",(0,o.jsx)(n.h3,{id:"patch_condition",children:(0,o.jsx)(n.code,{children:"patch_condition"})}),"\n",(0,o.jsxs)(n.p,{children:["Patch operation condition.\nThis field supports ",(0,o.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:"# Examples\n\npatch_condition: from c where not is_defined(c.blobfish)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"auto_id",children:(0,o.jsx)(n.code,{children:"auto_id"})}),"\n",(0,o.jsxs)(n.p,{children:["Automatically set the item ",(0,o.jsx)(n.code,{children:"id"})," field to a random UUID v4. If the ",(0,o.jsx)(n.code,{children:"id"})," field is already set, then it will not be overwritten. Setting this to ",(0,o.jsx)(n.code,{children:"false"})," can improve performance, since the messages will not have to be parsed."]}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"bool"}),(0,o.jsx)(n.br,{}),"\n","Default: ",(0,o.jsx)(n.code,{children:"true"})]}),"\n",(0,o.jsx)(n.h3,{id:"item_id",children:(0,o.jsx)(n.code,{children:"item_id"})}),"\n",(0,o.jsxs)(n.p,{children:["ID of item to replace or delete. Only used by the Replace and Delete operations\nThis field supports ",(0,o.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:'# Examples\n\nitem_id: ${! json("id") }\n'})}),"\n",(0,o.jsx)(n.h3,{id:"enable_content_response_on_write",children:(0,o.jsx)(n.code,{children:"enable_content_response_on_write"})}),"\n",(0,o.jsx)(n.p,{children:"Enable content response on write operations. To save some bandwidth, set this to false if you don't need to receive the updated message(s) from the server, in which case the processor will not modify the content of the messages which are fed into it. Applies to every operation except Read."}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"bool"}),(0,o.jsx)(n.br,{}),"\n","Default: ",(0,o.jsx)(n.code,{children:"true"})]}),"\n",(0,o.jsx)(n.h2,{id:"cosmosdb-emulator",children:"CosmosDB Emulator"}),"\n",(0,o.jsxs)(n.p,{children:["If you wish to run the CosmosDB emulator that is referenced in the documentation ",(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/cosmos-db/linux-emulator",children:"here"}),", the following Docker command should do the trick:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"> docker run --rm -it -p 8081:8081 --name=cosmosdb -e AZURE_COSMOS_EMULATOR_PARTITION_COUNT=10 -e AZURE_COSMOS_EMULATOR_ENABLE_DATA_PERSISTENCE=false mcr.microsoft.com/cosmosdb/linux/azure-cosmos-emulator\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note: ",(0,o.jsx)(n.code,{children:"AZURE_COSMOS_EMULATOR_PARTITION_COUNT"})," controls the number of partitions that will be supported by the emulator. The bigger the value, the longer it takes for the container to start up."]}),"\n",(0,o.jsxs)(n.p,{children:["Additionally, instead of installing the container self-signed certificate which is exposed via ",(0,o.jsx)(n.code,{children:"https://localhost:8081/_explorer/emulator.pem"}),", you can run ",(0,o.jsx)(n.a,{href:"https://mitmproxy.org/",children:"mitmproxy"})," like so:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'> mitmproxy -k --mode "reverse:https://localhost:8081"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Then you can access the CosmosDB UI via ",(0,o.jsx)(n.code,{children:"http://localhost:8080/_explorer/index.html"})," and use ",(0,o.jsx)(n.code,{children:"http://localhost:8080"})," as the CosmosDB endpoint."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},85162:function(e,n,t){t.d(n,{Z:function(){return a}});t(67294);var o=t(86010),s={tabItem:"tabItem_Ymn6"},r=t(85893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(s.tabItem,a),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return y}});var o=t(67294),s=t(86010),r=t(12466),a=t(16550),i=t(20469),l=t(91980),c=t(67392),d=t(50012);function h(e){var n,t;return null!=(n=null==(t=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:s}}=e;return{value:n,label:t,attributes:o,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=u(e),[a,l]=(0,o.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+o.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const s=null!=(n=o.find((e=>e.default)))?n:o[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,h]=m({queryString:t,groupId:s}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[s,r]=(0,d.Nk)(t);return[s,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),b=(()=>{const e=null!=c?c:x;return p({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);l(e),h(e),j(e)}),[h,j,r]),tabValues:r}}var j=t(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},f=t(85893);function _(e){let{className:n,block:t,selectedValue:o,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==o&&(c(n),a(s))},h=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var o;const n=l.indexOf(e.currentTarget)+1;t=null!=(o=l[n])?o:l[0];break}case"ArrowLeft":{var s;const n=l.indexOf(e.currentTarget)-1;t=null!=(s=l[n])?s:l[l.length-1];break}}null==(n=t)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...r,className:(0,s.Z)("tabs__item",b.tabItem,null==r?void 0:r.className,{"tabs__item--active":o===n}),children:null!=t?t:n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function g(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(_,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function y(e){const n=(0,j.Z)();return(0,f.jsx)(g,{...e,children:h(e.children)},String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var o=t(67294);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);