"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[7901],{97970:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return r}});var s=n(85893),o=n(11151);const i={title:"Unit Testing"},a=void 0,c={id:"configuration/unit_testing",title:"Unit Testing",description:"\x3c!--",source:"@site/docs/configuration/unit_testing.md",sourceDirName:"configuration",slug:"/configuration/unit_testing",permalink:"/bento/docs/configuration/unit_testing",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/configuration/unit_testing.md",tags:[],version:"current",frontMatter:{title:"Unit Testing"},sidebar:"docs",previous:{title:"Processing Pipelines",permalink:"/bento/docs/configuration/processing_pipelines"},next:{title:"Templating",permalink:"/bento/docs/configuration/templating"}},l={},r=[{value:"Contents",id:"contents",level:2},{value:"Writing a Test",id:"writing-a-test",level:2},{value:"Inline Tests",id:"inline-tests",level:3},{value:"Bloblang Tests",id:"bloblang-tests",level:3},{value:"Fragmented Tests",id:"fragmented-tests",level:3},{value:"Input Definitions",id:"input-definitions",level:2},{value:"<code>content</code>",id:"content",level:3},{value:"<code>json_content</code>",id:"json_content",level:3},{value:"<code>file_content</code>",id:"file_content",level:3},{value:"<code>metadata</code>",id:"metadata",level:3},{value:"Output Conditions",id:"output-conditions",level:2},{value:"<code>bloblang</code>",id:"bloblang",level:3},{value:"<code>content_equals</code>",id:"content_equals",level:3},{value:"<code>content_matches</code>",id:"content_matches",level:3},{value:"<code>metadata_equals</code>",id:"metadata_equals",level:3},{value:"<code>file_equals</code>",id:"file_equals",level:3},{value:"<code>file_json_equals</code>",id:"file_json_equals",level:3},{value:"<code>json_equals</code>",id:"json_equals",level:3},{value:"<code>json_contains</code>",id:"json_contains",level:3},{value:"Running Tests",id:"running-tests",level:2},{value:"Mocking Processors",id:"mocking-processors",level:2},{value:"More granular mocking",id:"more-granular-mocking",level:3},{value:"Fields",id:"fields",level:2},{value:"<code>tests</code>",id:"tests",level:3},{value:"<code>tests[].name</code>",id:"testsname",level:3},{value:"<code>tests[].environment</code>",id:"testsenvironment",level:3},{value:"<code>tests[].target_processors</code>",id:"teststarget_processors",level:3},{value:"<code>tests[].target_mapping</code>",id:"teststarget_mapping",level:3},{value:"<code>tests[].mocks</code>",id:"testsmocks",level:3},{value:"<code>tests[].input_batch</code>",id:"testsinput_batch",level:3},{value:"<code>tests[].input_batch[].content</code>",id:"testsinput_batchcontent",level:3},{value:"<code>tests[].input_batch[].json_content</code>",id:"testsinput_batchjson_content",level:3},{value:"<code>tests[].input_batch[].file_content</code>",id:"testsinput_batchfile_content",level:3},{value:"<code>tests[].input_batch[].metadata</code>",id:"testsinput_batchmetadata",level:3},{value:"<code>tests[].input_batches</code>",id:"testsinput_batches",level:3},{value:"<code>tests[].input_batches[][].content</code>",id:"testsinput_batchescontent",level:3},{value:"<code>tests[].input_batches[][].json_content</code>",id:"testsinput_batchesjson_content",level:3},{value:"<code>tests[].input_batches[][].file_content</code>",id:"testsinput_batchesfile_content",level:3},{value:"<code>tests[].input_batches[][].metadata</code>",id:"testsinput_batchesmetadata",level:3},{value:"<code>tests[].output_batches</code>",id:"testsoutput_batches",level:3},{value:"<code>tests[].output_batches[][].bloblang</code>",id:"testsoutput_batchesbloblang",level:3},{value:"<code>tests[].output_batches[][].content_equals</code>",id:"testsoutput_batchescontent_equals",level:3},{value:"<code>tests[].output_batches[][].content_matches</code>",id:"testsoutput_batchescontent_matches",level:3},{value:"<code>tests[].output_batches[][].metadata_equals</code>",id:"testsoutput_batchesmetadata_equals",level:3},{value:"<code>tests[].output_batches[][].file_equals</code>",id:"testsoutput_batchesfile_equals",level:3},{value:"<code>tests[].output_batches[][].file_json_equals</code>",id:"testsoutput_batchesfile_json_equals",level:3},{value:"<code>tests[].output_batches[][].json_equals</code>",id:"testsoutput_batchesjson_equals",level:3},{value:"<code>tests[].output_batches[][].json_contains</code>",id:"testsoutput_batchesjson_contains",level:3},{value:"<code>tests[].output_batches[][].file_json_contains</code>",id:"testsoutput_batchesfile_json_contains",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The Bento service offers a command ",(0,s.jsx)(t.code,{children:"bento test"})," for running unit tests on sections of a configuration file. This makes it easy to protect your config files from regressions over time."]}),"\n",(0,s.jsx)(t.h2,{id:"contents",children:"Contents"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#writing-a-test",children:"Writing a Test"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#output-conditions",children:"Output Conditions"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#running-tests",children:"Running Tests"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#mocking-processors",children:"Mocking Processors"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#fields",children:"Config Field Spec"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"writing-a-test",children:"Writing a Test"}),"\n",(0,s.jsxs)(t.p,{children:["Let's imagine we have a configuration file ",(0,s.jsx)(t.code,{children:"foo.yaml"})," containing some processors:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'input:\n  kafka:\n    addresses: [ TODO ]\n    topics: [ foo, bar ]\n    consumer_group: foogroup\n\npipeline:\n  processors:\n  - mapping: \'"%vend".format(content().uppercase().string())\'\n\noutput:\n  aws_s3:\n    bucket: TODO\n    path: \'${! meta("kafka_topic") }/${! json("message.id") }.json\'\n'})}),"\n",(0,s.jsxs)(t.p,{children:["One way to write our unit tests for this config is to accompany it with a file of the same name and extension but suffixed with ",(0,s.jsx)(t.code,{children:"_bento_test"}),", which in this case would be ",(0,s.jsx)(t.code,{children:"foo_bento_test.yaml"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"tests:\n  - name: example test\n    target_processors: '/pipeline/processors'\n    environment: {}\n    input_batch:\n      - content: 'example content'\n        metadata:\n          example_key: example metadata value\n    output_batches:\n      -\n        - content_equals: EXAMPLE CONTENTend\n          metadata_equals:\n            example_key: example metadata value\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Under ",(0,s.jsx)(t.code,{children:"tests"})," we have a list of any number of unit tests to execute for the config file. Each test is run in complete isolation, including any resources defined by the config file. Tests should be allocated a unique ",(0,s.jsx)(t.code,{children:"name"})," that identifies the feature being tested."]}),"\n",(0,s.jsxs)(t.p,{children:["The field ",(0,s.jsx)(t.code,{children:"target_processors"})," is either the label of a processor to test, or a ",(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc6901",children:"JSON Pointer"})," that identifies the position of a processor, or list of processors, within the file which should be executed by the test. For example a value of ",(0,s.jsx)(t.code,{children:"foo"})," would target a processor with the label ",(0,s.jsx)(t.code,{children:"foo"}),", and a value of ",(0,s.jsx)(t.code,{children:"/input/processors"})," would target all processors within the input section of the config."]}),"\n",(0,s.jsxs)(t.p,{children:["The field ",(0,s.jsx)(t.code,{children:"environment"})," allows you to define an object of key/value pairs that set environment variables to be evaluated during the parsing of the target config file. These are unique to each test, allowing you to test different environment variable interpolation combinations."]}),"\n",(0,s.jsxs)(t.p,{children:["The field ",(0,s.jsx)(t.code,{children:"input_batch"})," lists one or more messages to be fed into the targeted processors as a batch. Each message of the batch may have its raw content defined as well as metadata key/value pairs."]}),"\n",(0,s.jsxs)(t.p,{children:["For the common case where the messages are in JSON format, you can use ",(0,s.jsx)(t.code,{children:"json_content"})," instead of ",(0,s.jsx)(t.code,{children:"content"})," to specify the message structurally rather than verbatim."]}),"\n",(0,s.jsxs)(t.p,{children:["The field ",(0,s.jsx)(t.code,{children:"output_batches"})," lists any number of batches of messages which are expected to result from the target processors. Each batch lists any number of messages, each one defining ",(0,s.jsx)(t.a,{href:"#output-conditions",children:(0,s.jsx)(t.code,{children:"conditions"})})," to describe the expected contents of the message."]}),"\n",(0,s.jsx)(t.p,{children:"If the number of batches defined does not match the resulting number of batches the test will fail. If the number of messages defined in each batch does not match the number in the resulting batches the test will fail. If any condition of a message fails then the test fails."}),"\n",(0,s.jsx)(t.h3,{id:"inline-tests",children:"Inline Tests"}),"\n",(0,s.jsxs)(t.p,{children:["Sometimes it's more convenient to define your tests within the config being tested. This is fine, simply add the ",(0,s.jsx)(t.code,{children:"tests"})," field to the end of the config being tested."]}),"\n",(0,s.jsx)(t.h3,{id:"bloblang-tests",children:"Bloblang Tests"}),"\n",(0,s.jsxs)(t.p,{children:["Sometimes when working with large ",(0,s.jsx)(t.a,{href:"/docs/guides/bloblang/about",children:"Bloblang mappings"})," it's preferred to have the full mapping in a separate file to your Bento configuration. In this case it's possible to write unit tests that target and execute the mapping directly with the field ",(0,s.jsx)(t.code,{children:"target_mapping"}),", which when specified is interpreted as either an absolute path or a path relative to the test definition file that points to a file containing only a Bloblang mapping."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, if we were to have a file ",(0,s.jsx)(t.code,{children:"cities.blobl"})," containing a mapping:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-coffee",children:'root.Cities = this.locations.\n                filter(loc -> loc.state == "WA").\n                map_each(loc -> loc.name).\n                sort().join(", ")\n'})}),"\n",(0,s.jsxs)(t.p,{children:["We can accompany it with a test file ",(0,s.jsx)(t.code,{children:"cities_test.yaml"})," containing a regular test definition:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:'tests:\n  - name: test cities mapping\n    target_mapping: \'./cities.blobl\'\n    environment: {}\n    input_batch:\n      - content: |\n          {\n            "locations": [\n              {"name": "Seattle", "state": "WA"},\n              {"name": "New York", "state": "NY"},\n              {"name": "Bellevue", "state": "WA"},\n              {"name": "Olympia", "state": "WA"}\n            ]\n          }\n    output_batches:\n      -\n        - json_equals: {"Cities": "Bellevue, Olympia, Seattle"}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["And execute this test the same way we execute other Bento tests (",(0,s.jsx)(t.code,{children:"bento test ./dir/cities_test.yaml"}),", ",(0,s.jsx)(t.code,{children:"bento test ./dir/..."}),", etc)."]}),"\n",(0,s.jsx)(t.h3,{id:"fragmented-tests",children:"Fragmented Tests"}),"\n",(0,s.jsxs)(t.p,{children:["Sometimes the number of tests you need to define in order to cover a config file is so vast that it's necessary to split them across multiple test definition files. This is possible but Bento still requires a way to detect the configuration file being targeted by these fragmented test definition files. In order to do this we must prefix our ",(0,s.jsx)(t.code,{children:"target_processors"})," field with the path of the target relative to the definition file."]}),"\n",(0,s.jsxs)(t.p,{children:["The syntax of ",(0,s.jsx)(t.code,{children:"target_processors"})," in this case is a full ",(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc6901",children:"JSON Pointer"})," that should look something like ",(0,s.jsx)(t.code,{children:"target.yaml#/pipeline/processors"}),". For example, if we saved our test definition above in an arbitrary location like ",(0,s.jsx)(t.code,{children:"./tests/first.yaml"})," and wanted to target our original ",(0,s.jsx)(t.code,{children:"foo.yaml"})," config file, we could do that with the following:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"tests:\n  - name: example test\n    target_processors: '../foo.yaml#/pipeline/processors'\n    environment: {}\n    input_batch:\n      - content: 'example content'\n        metadata:\n          example_key: example metadata value\n    output_batches:\n      -\n        - content_equals: EXAMPLE CONTENTend\n          metadata_equals:\n            example_key: example metadata value\n"})}),"\n",(0,s.jsx)(t.h2,{id:"input-definitions",children:"Input Definitions"}),"\n",(0,s.jsx)(t.h3,{id:"content",children:(0,s.jsx)(t.code,{children:"content"})}),"\n",(0,s.jsx)(t.p,{children:"Sets the raw content of the message."}),"\n",(0,s.jsx)(t.h3,{id:"json_content",children:(0,s.jsx)(t.code,{children:"json_content"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"json_content:\n  foo: foo value\n  bar: [ element1, 10 ]\n"})}),"\n",(0,s.jsx)(t.p,{children:"Sets the raw content of the message to a JSON document matching the structure of the value."}),"\n",(0,s.jsx)(t.h3,{id:"file_content",children:(0,s.jsx)(t.code,{children:"file_content"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"file_content: ./foo/bar.txt\n"})}),"\n",(0,s.jsx)(t.p,{children:"Sets the raw content of the message by reading a file. The path of the file should be relative to the path of the test file."}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:(0,s.jsx)(t.code,{children:"metadata"})}),"\n",(0,s.jsx)(t.p,{children:"A map of key/value pairs that sets the metadata values of the message."}),"\n",(0,s.jsx)(t.h2,{id:"output-conditions",children:"Output Conditions"}),"\n",(0,s.jsx)(t.h3,{id:"bloblang",children:(0,s.jsx)(t.code,{children:"bloblang"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"bloblang: 'this.age > 10 && @foo.length() > 0'\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Executes a ",(0,s.jsx)(t.a,{href:"/docs/guides/bloblang/about",children:"Bloblang expression"})," on a message, if the result is anything other than a boolean equalling ",(0,s.jsx)(t.code,{children:"true"})," the test fails."]}),"\n",(0,s.jsx)(t.h3,{id:"content_equals",children:(0,s.jsx)(t.code,{children:"content_equals"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"content_equals: example content\n"})}),"\n",(0,s.jsx)(t.p,{children:"Checks the full raw contents of a message against a value."}),"\n",(0,s.jsx)(t.h3,{id:"content_matches",children:(0,s.jsx)(t.code,{children:"content_matches"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:'content_matches: "^foo [a-z]+ bar$"\n'})}),"\n",(0,s.jsx)(t.p,{children:"Checks whether the full raw contents of a message matches a regular expression (re2)."}),"\n",(0,s.jsx)(t.h3,{id:"metadata_equals",children:(0,s.jsx)(t.code,{children:"metadata_equals"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"metadata_equals:\n  example_key: example metadata value\n"})}),"\n",(0,s.jsx)(t.p,{children:"Checks a map of metadata keys to values against the metadata stored in the message. If there is a value mismatch between a key of the condition versus the message metadata this condition will fail."}),"\n",(0,s.jsx)(t.h3,{id:"file_equals",children:(0,s.jsx)(t.code,{children:"file_equals"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"file_equals: ./foo/bar.txt\n"})}),"\n",(0,s.jsx)(t.p,{children:"Checks that the contents of a message matches the contents of a file. The path of the file should be relative to the path of the test file."}),"\n",(0,s.jsx)(t.h3,{id:"file_json_equals",children:(0,s.jsx)(t.code,{children:"file_json_equals"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"file_json_equals: ./foo/bar.json\n"})}),"\n",(0,s.jsx)(t.p,{children:"Checks that both the message and the file contents are valid JSON documents, and that they are structurally equivalent. Will ignore formatting and ordering differences. The path of the file should be relative to the path of the test file."}),"\n",(0,s.jsx)(t.h3,{id:"json_equals",children:(0,s.jsx)(t.code,{children:"json_equals"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:'json_equals: { "key": "value" }\n'})}),"\n",(0,s.jsx)(t.p,{children:"Checks that both the message and the condition are valid JSON documents, and that they are structurally equivalent. Will ignore formatting and ordering differences."}),"\n",(0,s.jsx)(t.p,{children:"You can also structure the condition content as YAML and it will be converted to the equivalent JSON document for testing:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"json_equals:\n  key: value\n"})}),"\n",(0,s.jsx)(t.h3,{id:"json_contains",children:(0,s.jsx)(t.code,{children:"json_contains"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:'json_contains: { "key": "value" }\n'})}),"\n",(0,s.jsx)(t.p,{children:"Checks that both the message and the condition are valid JSON documents, and that the message is a superset of the condition."}),"\n",(0,s.jsx)(t.h2,{id:"running-tests",children:"Running Tests"}),"\n",(0,s.jsxs)(t.p,{children:["Executing tests for a specific config can be done by pointing the subcommand ",(0,s.jsx)(t.code,{children:"test"})," at either the config to be tested or its test definition, e.g. ",(0,s.jsx)(t.code,{children:"bento test ./config.yaml"})," and ",(0,s.jsx)(t.code,{children:"bento test ./config_bento_test.yaml"})," are equivalent."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"test"})," subcommand also supports wildcard patterns e.g. ",(0,s.jsx)(t.code,{children:"bento test ./foo/*.yaml"})," will execute all tests within matching files. In order to walk a directory tree and execute all tests found you can use the shortcut ",(0,s.jsx)(t.code,{children:"./..."}),", e.g. ",(0,s.jsx)(t.code,{children:"bento test ./..."})," will execute all tests found in the current directory, any child directories, and so on."]}),"\n",(0,s.jsxs)(t.p,{children:["If you want to allow components to write logs at a provided level to stdout when running the tests, you can use\n",(0,s.jsx)(t.code,{children:"bento test --log <level>"}),". Please consult the ",(0,s.jsx)(t.a,{href:"/docs/components/logger/about",children:"logger docs"})," for further details."]}),"\n",(0,s.jsx)(t.h2,{id:"mocking-processors",children:"Mocking Processors"}),"\n",(0,s.jsx)(t.p,{children:"BETA: This feature is currently in a BETA phase, which means breaking changes could be made if a fundamental issue with the feature is found."}),"\n",(0,s.jsx)(t.p,{children:"Sometimes you'll want to write tests for a series of processors, where one or more of them are networked (or otherwise stateful). Rather than creating and managing mocked services you can define mock versions of those processors in the test definition. For example, if we have a config with the following processors:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - mapping: 'root = \"simon says: \" + content()'\n    - label: get_foobar_api\n      http:\n        url: http://example.com/foobar\n        verb: GET\n    - mapping: 'root = content().uppercase()'\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Rather than create a fake service for the ",(0,s.jsx)(t.code,{children:"http"})," processor to interact with we can define a mock in our test definition that replaces it with a ",(0,s.jsxs)(t.a,{href:"/docs/components/processors/mapping",children:[(0,s.jsx)(t.code,{children:"mapping"})," processor"]}),". Mocks are configured as a map of labels that identify a processor to replace and the config to replace it with:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'tests:\n  - name: mocks the http proc\n    target_processors: \'/pipeline/processors\'\n    mocks:\n      get_foobar_api:\n        mapping: \'root = content().string() + " this is some mock content"\'\n    input_batch:\n      - content: "hello world"\n    output_batches:\n      - - content_equals: "SIMON SAYS: HELLO WORLD THIS IS SOME MOCK CONTENT"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["With the above test definition the ",(0,s.jsx)(t.code,{children:"http"})," processor will be swapped out for ",(0,s.jsx)(t.code,{children:"mapping: 'root = content().string() + \" this is some mock content\"'"}),". For the purposes of mocking it is recommended that you use a ",(0,s.jsxs)(t.a,{href:"/docs/components/processors/mapping",children:[(0,s.jsx)(t.code,{children:"mapping"})," processor"]})," that simply mutates the message in a way that you would expect the mocked processor to."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Note: It's not currently possible to mock components that are imported as separate resource files (using ",(0,s.jsx)(t.code,{children:"--resource"}),"/",(0,s.jsx)(t.code,{children:"-r"}),"). It is recommended that you mock these by maintaining separate definitions for test purposes (",(0,s.jsx)(t.code,{children:'-r "./test/*.yaml"'}),")."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"more-granular-mocking",children:"More granular mocking"}),"\n",(0,s.jsxs)(t.p,{children:["It is also possible to target specific fields within the test config by ",(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc6901",children:"JSON pointers"})," as an alternative to labels. The following test definition would create the same mock as the previous:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'tests:\n  - name: mocks the http proc\n    target_processors: \'/pipeline/processors\'\n    mocks:\n      /pipeline/processors/1:\n        mapping: \'root = content().string() + " this is some mock content"\'\n    input_batch:\n      - content: "hello world"\n    output_batches:\n      - - content_equals: "SIMON SAYS: HELLO WORLD THIS IS SOME MOCK CONTENT"\n'})}),"\n",(0,s.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsx)(t.p,{children:"The schema of a template file is as follows:"}),"\n",(0,s.jsx)(t.h3,{id:"tests",children:(0,s.jsx)(t.code,{children:"tests"})}),"\n",(0,s.jsx)(t.p,{children:"A list of one or more unit tests to execute."}),"\n",(0,s.jsxs)(t.p,{children:["Type: list of ",(0,s.jsx)(t.code,{children:"object"})]}),"\n",(0,s.jsx)(t.h3,{id:"testsname",children:(0,s.jsx)(t.code,{children:"tests[].name"})}),"\n",(0,s.jsx)(t.p,{children:"The name of the test, this should be unique and give a rough indication of what behaviour is being tested."}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"string"})]}),"\n",(0,s.jsx)(t.h3,{id:"testsenvironment",children:(0,s.jsx)(t.code,{children:"tests[].environment"})}),"\n",(0,s.jsx)(t.p,{children:"An optional map of environment variables to set for the duration of the test."}),"\n",(0,s.jsxs)(t.p,{children:["Type: map of ",(0,s.jsx)(t.code,{children:"string"})]}),"\n",(0,s.jsx)(t.h3,{id:"teststarget_processors",children:(0,s.jsx)(t.code,{children:"tests[].target_processors"})}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc6901",children:"JSON Pointer"})," that identifies the specific processors which should be executed by the test. The target can either be a single processor or an array of processors. Alternatively a resource label can be used to identify a processor."]}),"\n",(0,s.jsx)(t.p,{children:"It is also possible to target processors in a separate file by prefixing the target with a path relative to the test file followed by a # symbol."}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"string"}),(0,s.jsx)(t.br,{}),"\n","Default: ",(0,s.jsx)(t.code,{children:'"/pipeline/processors"'})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"# Examples\n\ntarget_processors: foo_processor\n\ntarget_processors: /pipeline/processors/0\n\ntarget_processors: target.yaml#/pipeline/processors\n\ntarget_processors: target.yaml#/pipeline/processors\n"})}),"\n",(0,s.jsx)(t.h3,{id:"teststarget_mapping",children:(0,s.jsx)(t.code,{children:"tests[].target_mapping"})}),"\n",(0,s.jsxs)(t.p,{children:["A file path relative to the test definition path of a Bloblang file to execute as an alternative to testing processors with the ",(0,s.jsx)(t.code,{children:"target_processors"})," field. This allows you to define unit tests for Bloblang mappings directly."]}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"string"}),(0,s.jsx)(t.br,{}),"\n","Default: ",(0,s.jsx)(t.code,{children:'""'})]}),"\n",(0,s.jsx)(t.h3,{id:"testsmocks",children:(0,s.jsx)(t.code,{children:"tests[].mocks"})}),"\n",(0,s.jsxs)(t.p,{children:["An optional map of processors to mock. Keys should contain either a label or a JSON pointer of a processor that should be mocked. Values should contain a processor definition, which will replace the mocked processor. Most of the time you'll want to use a ",(0,s.jsxs)(t.a,{href:"/docs/components/processors/mapping",children:[(0,s.jsx)(t.code,{children:"mapping"})," processor"]})," here, and use it to create a result that emulates the target processor."]}),"\n",(0,s.jsxs)(t.p,{children:["Type: map of ",(0,s.jsx)(t.code,{children:"unknown"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:'# Examples\n\nmocks:\n  get_foobar_api:\n    mapping: root = content().string() + " this is some mock content"\n\nmocks:\n  /pipeline/processors/1:\n    mapping: root = content().string() + " this is some mock content"\n'})}),"\n",(0,s.jsx)(t.h3,{id:"testsinput_batch",children:(0,s.jsx)(t.code,{children:"tests[].input_batch"})}),"\n",(0,s.jsxs)(t.p,{children:["Define a batch of messages to feed into your test, specify either an ",(0,s.jsx)(t.code,{children:"input_batch"})," or a series of ",(0,s.jsx)(t.code,{children:"input_batches"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Type: list of ",(0,s.jsx)(t.code,{children:"object"})]}),"\n",(0,s.jsx)(t.h3,{id:"testsinput_batchcontent",children:(0,s.jsx)(t.code,{children:"tests[].input_batch[].content"})}),"\n",(0,s.jsx)(t.p,{children:"The raw content of the input message."}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"string"})]}),"\n",(0,s.jsx)(t.h3,{id:"testsinput_batchjson_content",children:(0,s.jsx)(t.code,{children:"tests[].input_batch[].json_content"})}),"\n",(0,s.jsx)(t.p,{children:"Sets the raw content of the message to a JSON document matching the structure of the value."}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"unknown"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"# Examples\n\njson_content:\n  bar:\n    - element1\n    - 10\n  foo: foo value\n"})}),"\n",(0,s.jsx)(t.h3,{id:"testsinput_batchfile_content",children:(0,s.jsx)(t.code,{children:"tests[].input_batch[].file_content"})}),"\n",(0,s.jsx)(t.p,{children:"Sets the raw content of the message by reading a file. The path of the file should be relative to the path of the test file."}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"string"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"# Examples\n\nfile_content: ./foo/bar.txt\n"})}),"\n",(0,s.jsx)(t.h3,{id:"testsinput_batchmetadata",children:(0,s.jsx)(t.code,{children:"tests[].input_batch[].metadata"})}),"\n",(0,s.jsx)(t.p,{children:"A map of metadata key/values to add to the input message."}),"\n",(0,s.jsxs)(t.p,{children:["Type: map of ",(0,s.jsx)(t.code,{children:"unknown"})]}),"\n",(0,s.jsx)(t.h3,{id:"testsinput_batches",children:(0,s.jsx)(t.code,{children:"tests[].input_batches"})}),"\n",(0,s.jsxs)(t.p,{children:["Define a series of batches of messages to feed into your test, specify either an ",(0,s.jsx)(t.code,{children:"input_batch"})," or a series of ",(0,s.jsx)(t.code,{children:"input_batches"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"object"})]}),"\n",(0,s.jsx)(t.h3,{id:"testsinput_batchescontent",children:(0,s.jsx)(t.code,{children:"tests[].input_batches[][].content"})}),"\n",(0,s.jsx)(t.p,{children:"The raw content of the input message."}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"string"})]}),"\n",(0,s.jsx)(t.h3,{id:"testsinput_batchesjson_content",children:(0,s.jsx)(t.code,{children:"tests[].input_batches[][].json_content"})}),"\n",(0,s.jsx)(t.p,{children:"Sets the raw content of the message to a JSON document matching the structure of the value."}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"unknown"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"# Examples\n\njson_content:\n  bar:\n    - element1\n    - 10\n  foo: foo value\n"})}),"\n",(0,s.jsx)(t.h3,{id:"testsinput_batchesfile_content",children:(0,s.jsx)(t.code,{children:"tests[].input_batches[][].file_content"})}),"\n",(0,s.jsx)(t.p,{children:"Sets the raw content of the message by reading a file. The path of the file should be relative to the path of the test file."}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"string"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"# Examples\n\nfile_content: ./foo/bar.txt\n"})}),"\n",(0,s.jsx)(t.h3,{id:"testsinput_batchesmetadata",children:(0,s.jsx)(t.code,{children:"tests[].input_batches[][].metadata"})}),"\n",(0,s.jsx)(t.p,{children:"A map of metadata key/values to add to the input message."}),"\n",(0,s.jsxs)(t.p,{children:["Type: map of ",(0,s.jsx)(t.code,{children:"unknown"})]}),"\n",(0,s.jsx)(t.h3,{id:"testsoutput_batches",children:(0,s.jsx)(t.code,{children:"tests[].output_batches"})}),"\n",(0,s.jsx)(t.p,{children:"List of output batches."}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"object"})]}),"\n",(0,s.jsx)(t.h3,{id:"testsoutput_batchesbloblang",children:(0,s.jsx)(t.code,{children:"tests[].output_batches[][].bloblang"})}),"\n",(0,s.jsxs)(t.p,{children:["Executes a Bloblang mapping on the output message, if the result is anything other than a boolean equalling ",(0,s.jsx)(t.code,{children:"true"})," the test fails."]}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"string"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"# Examples\n\nbloblang: this.age > 10 && @foo.length() > 0\n"})}),"\n",(0,s.jsx)(t.h3,{id:"testsoutput_batchescontent_equals",children:(0,s.jsx)(t.code,{children:"tests[].output_batches[][].content_equals"})}),"\n",(0,s.jsx)(t.p,{children:"Checks the full raw contents of a message against a value."}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"string"})]}),"\n",(0,s.jsx)(t.h3,{id:"testsoutput_batchescontent_matches",children:(0,s.jsx)(t.code,{children:"tests[].output_batches[][].content_matches"})}),"\n",(0,s.jsx)(t.p,{children:"Checks whether the full raw contents of a message matches a regular expression (re2)."}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"string"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"# Examples\n\ncontent_matches: ^foo [a-z]+ bar$\n"})}),"\n",(0,s.jsx)(t.h3,{id:"testsoutput_batchesmetadata_equals",children:(0,s.jsx)(t.code,{children:"tests[].output_batches[][].metadata_equals"})}),"\n",(0,s.jsx)(t.p,{children:"Checks a map of metadata keys to values against the metadata stored in the message. If there is a value mismatch between a key of the condition versus the message metadata this condition will fail."}),"\n",(0,s.jsxs)(t.p,{children:["Type: map of ",(0,s.jsx)(t.code,{children:"unknown"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"# Examples\n\nmetadata_equals:\n  example_key: example metadata value\n"})}),"\n",(0,s.jsx)(t.h3,{id:"testsoutput_batchesfile_equals",children:(0,s.jsx)(t.code,{children:"tests[].output_batches[][].file_equals"})}),"\n",(0,s.jsx)(t.p,{children:"Checks that the contents of a message matches the contents of a file. The path of the file should be relative to the path of the test file."}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"string"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"# Examples\n\nfile_equals: ./foo/bar.txt\n"})}),"\n",(0,s.jsx)(t.h3,{id:"testsoutput_batchesfile_json_equals",children:(0,s.jsx)(t.code,{children:"tests[].output_batches[][].file_json_equals"})}),"\n",(0,s.jsx)(t.p,{children:"Checks that both the message and the file contents are valid JSON documents, and that they are structurally equivalent. Will ignore formatting and ordering differences. The path of the file should be relative to the path of the test file."}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"string"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"# Examples\n\nfile_json_equals: ./foo/bar.json\n"})}),"\n",(0,s.jsx)(t.h3,{id:"testsoutput_batchesjson_equals",children:(0,s.jsx)(t.code,{children:"tests[].output_batches[][].json_equals"})}),"\n",(0,s.jsx)(t.p,{children:"Checks that both the message and the condition are valid JSON documents, and that they are structurally equivalent. Will ignore formatting and ordering differences."}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"unknown"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"# Examples\n\njson_equals:\n  key: value\n"})}),"\n",(0,s.jsx)(t.h3,{id:"testsoutput_batchesjson_contains",children:(0,s.jsx)(t.code,{children:"tests[].output_batches[][].json_contains"})}),"\n",(0,s.jsx)(t.p,{children:"Checks that both the message and the condition are valid JSON documents, and that the message is a superset of the condition."}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"unknown"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"# Examples\n\njson_contains:\n  key: value\n"})}),"\n",(0,s.jsx)(t.h3,{id:"testsoutput_batchesfile_json_contains",children:(0,s.jsx)(t.code,{children:"tests[].output_batches[][].file_json_contains"})}),"\n",(0,s.jsx)(t.p,{children:"Checks that both the message and the file contents are valid JSON documents, and that the message is a superset of the condition. Will ignore formatting and ordering differences. The path of the file should be relative to the path of the test file."}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"string"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"# Examples\n\nfile_json_contains: ./foo/bar.json\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return a}});var s=n(67294);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);