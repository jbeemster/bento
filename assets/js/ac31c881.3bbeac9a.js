"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[9174],{99726:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return c}});var s=t(85893),i=t(11151);const o={title:"Migrating to Version 4"},r=void 0,a={id:"guides/migration/v4",title:"Migrating to Version 4",description:"Bento has been at major version 3 for more than two years, during which time it has gained a huge amount of functionality without introducing any breaking changes. However, the number of components, APIs and features that have been deprecated in favour of better solutions has grown steadily and the time has finally come to purge them. There are also some areas of functionality that have been improved with breaking changes.",source:"@site/docs/guides/migration/v4.md",sourceDirName:"guides/migration",slug:"/guides/migration/v4",permalink:"/bento/docs/guides/migration/v4",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/guides/migration/v4.md",tags:[],version:"current",frontMatter:{title:"Migrating to Version 4"},sidebar:"docs",previous:{title:"Streams API",permalink:"/bento/docs/guides/streams_mode/streams_api"},next:{title:"Migrating to Version 3",permalink:"/bento/docs/guides/migration/v3"}},d={},c=[{value:"Deprecated Components Removed",id:"deprecated-components-removed",level:2},{value:"Unit test directories",id:"unit-test-directories",level:3},{value:"New Go Module Name",id:"new-go-module-name",level:2},{value:"Pulsar Components Disabled (for now)",id:"pulsar-components-disabled-for-now",level:2},{value:"Pipeline Threads Behaviour Change",id:"pipeline-threads-behaviour-change",level:2},{value:"Old Style Interpolation Functions Removed",id:"old-style-interpolation-functions-removed",level:2},{value:"Bloblang Changes",id:"bloblang-changes",level:2},{value:"Root referencing",id:"root-referencing",level:3},{value:"Env Var Docker Configuration",id:"env-var-docker-configuration",level:2},{value:"Old Plugin APIs Removed",id:"old-plugin-apis-removed",level:2},{value:"Caches",id:"caches",level:2},{value:"TTL changes",id:"ttl-changes",level:3},{value:"Field Default Changes",id:"field-default-changes",level:2},{value:"The <code>http</code> processor and <code>http_client</code> output no longer create multipart requests by default",id:"the-http-processor-and-http_client-output-no-longer-create-multipart-requests-by-default",level:3},{value:"Output <code>lines</code> codec no longer adds extra batch newlines",id:"output-lines-codec-no-longer-adds-extra-batch-newlines",level:3},{value:"The <code>switch</code> output <code>retry_until_success</code>",id:"the-switch-output-retry_until_success",level:3},{value:"AWS <code>region</code> fields",id:"aws-region-fields",level:3},{value:"Clickhouse Driver Changes",id:"clickhouse-driver-changes",level:2},{value:"Serverless Default Output",id:"serverless-default-output",level:2},{value:"Metrics Changes",id:"metrics-changes",level:2},{value:"Field <code>prefix</code> is gone",id:"field-prefix-is-gone",level:3},{value:"The <code>http_server</code> type renamed to <code>json_api</code>",id:"the-http_server-type-renamed-to-json_api",level:3},{value:"The <code>stdout</code> type renamed to <code>logger</code>",id:"the-stdout-type-renamed-to-logger",level:3},{value:"No more dots",id:"no-more-dots",level:3},{value:"Tracing Changes",id:"tracing-changes",level:2},{value:"Logging Changes",id:"logging-changes",level:2},{value:"Automatic Max In Flight",id:"automatic-max-in-flight",level:2},{value:"Processor Batch Behaviour Changes",id:"processor-batch-behaviour-changes",level:2},{value:"Processor <code>parts</code> field removed",id:"processor-parts-field-removed",level:3},{value:"<code>dedupe</code>",id:"dedupe",level:3},{value:"<code>log</code>",id:"log",level:3},{value:"<code>sleep</code>",id:"sleep",level:3},{value:"Broker Ditto Macro Gone",id:"broker-ditto-macro-gone",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Bento has been at major version 3 ",(0,s.jsx)(n.a,{href:"/blog/2021/01/04/v4-roadmap",children:"for more than two years"}),", during which time it has gained a huge amount of functionality without introducing any breaking changes. However, the number of components, APIs and features that have been deprecated in favour of better solutions has grown steadily and the time has finally come to purge them. There are also some areas of functionality that have been improved with breaking changes."]}),"\n",(0,s.jsx)(n.p,{children:"This document outlines the changes made to Bento since V3 and tips for how to migrate to V4 in places where those changes are significant."}),"\n",(0,s.jsx)(n.h2,{id:"deprecated-components-removed",children:"Deprecated Components Removed"}),"\n",(0,s.jsxs)(n.p,{children:["All components, features and configuration fields that were marked as deprecated in the latest release of V3 have been removed in V4. In order to detect deprecated components or fields within your existing configuration files you can run the linter from a later release of V3 Bento with the ",(0,s.jsx)(n.code,{children:"--deprecated"})," flag:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"bento lint --deprecated ./configs/*.yaml\n"})}),"\n",(0,s.jsx)(n.p,{children:"This should report all remaining deprecated components. All deprecated components have favoured alternative solutions in V3, so it should be possible to slowly eliminate deprecated aspects of your config using V3 before upgrading."}),"\n",(0,s.jsx)(n.h3,{id:"unit-test-directories",children:"Unit test directories"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"bento test"})," subcommand no longer walks paths when they are directories. Instead use explicit triple-dot syntax (",(0,s.jsx)(n.code,{children:"./dir/..."}),") or wildcard patterns."]}),"\n",(0,s.jsx)(n.h2,{id:"new-go-module-name",children:"New Go Module Name"}),"\n",(0,s.jsxs)(n.p,{children:["For users of the Go plugin APIs the import path of this module needs to be updated to ",(0,s.jsx)(n.code,{children:"github.com/warpstreamlabs/bento/v4"}),", like so:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/warpstreamlabs/bento/v4/public/service"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"pulsar-components-disabled-for-now",children:"Pulsar Components Disabled (for now)"}),"\n",(0,s.jsxs)(n.p,{children:["There have been multiple issues with the Go Pulsar client libraries. Since some are still outstanding and causing problems with unrelated components the decision has been made to remove the ",(0,s.jsx)(n.code,{children:"pulsar"})," input and output from standard builds. However, it is still possible to build custom versions of Bento with them included by importing the package ",(0,s.jsx)(n.code,{children:"./public/components/pulsar"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"context"\n\n\t"github.com/warpstreamlabs/bento/v3/public/service"\n\n\t// Import all plugins defined within the repo.\n\t_ "github.com/warpstreamlabs/bento/v4/public/components/all"\n\t_ "github.com/warpstreamlabs/bento/v4/public/components/pulsar"\n)\n\nfunc main() {\n\tservice.RunCLI(context.Background())\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"pipeline-threads-behaviour-change",children:"Pipeline Threads Behaviour Change"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/warpstreamlabs/bento/issues/399",children:"https://github.com/warpstreamlabs/bento/issues/399"})}),"\n",(0,s.jsxs)(n.p,{children:["In V3 the ",(0,s.jsx)(n.code,{children:"pipeline.threads"})," field defaults to 1. If this field is explicitly set to ",(0,s.jsx)(n.code,{children:"0"})," it will automatically match the number of CPUs on the host machine. In V4 this will change so that the default value of ",(0,s.jsx)(n.code,{children:"pipeline.threads"})," is ",(0,s.jsx)(n.code,{children:"-1"}),", where this value indicates we should match the number of host CPUs. An explicit value of ",(0,s.jsx)(n.code,{children:"0"})," is still considered valid and functionally equivalent to ",(0,s.jsx)(n.code,{children:"-1"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"old-style-interpolation-functions-removed",children:"Old Style Interpolation Functions Removed"}),"\n",(0,s.jsxs)(n.p,{children:["The original style of interpolation functions, where you specify a function name followed by a colon and then any arguments (",(0,s.jsx)(n.code,{children:"${!json:foo,1}"}),") has been deprecated (and undocumented) for a while now. What we've had instead is a subset of Bloblang allowing you to use functions directly (",(0,s.jsx)(n.code,{children:'${! json("foo").from(1) }'}),"), but with the old style still supported for backwards compatibility."]}),"\n",(0,s.jsx)(n.p,{children:"However, supporting the old style means our parsing capabilities are weakened and so it is now removed in order to allow more powerful interpolations in the future."}),"\n",(0,s.jsx)(n.h2,{id:"bloblang-changes",children:"Bloblang Changes"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/warpstreamlabs/bento/issues/571",children:"https://github.com/warpstreamlabs/bento/issues/571"})}),"\n",(0,s.jsxs)(n.p,{children:["The functions ",(0,s.jsx)(n.code,{children:"meta"}),", ",(0,s.jsx)(n.code,{children:"root_meta"}),", ",(0,s.jsx)(n.code,{children:"error"})," and ",(0,s.jsx)(n.code,{children:"env"})," now return ",(0,s.jsx)(n.code,{children:"null"})," when the target value does not exist. This is in order to improve consistency across different functions and query types. In cases where a default empty string is preferred you can add ",(0,s.jsx)(n.code,{children:'.or("")'})," onto the function. In cases where you want to throw an error when the value does not exist you can add ",(0,s.jsx)(n.code,{children:".not_null()"})," onto the function."]}),"\n",(0,s.jsx)(n.h3,{id:"root-referencing",children:"Root referencing"}),"\n",(0,s.jsxs)(n.p,{children:["It is now possible to reference the ",(0,s.jsx)(n.code,{children:"root"})," of the document being created within a mapping query, i.e. ",(0,s.jsx)(n.code,{children:'root.hash = root.string().hash("xxhash64")'}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"env-var-docker-configuration",children:"Env Var Docker Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Docker builds will no longer come with a default config that contains generated environment variables. This system doesn't scale at all for complex configuration files and was becoming a challenge to maintain (and also huge). Instead, the new ",(0,s.jsx)(n.code,{children:"-s"})," flag has been the preferred way to configure Bento through arguments and will need to be used exclusively in V4."]}),"\n",(0,s.jsx)(n.p,{children:"It's worth noting that this does not prevent you from defining your own env var based configuration and adding that to your docker image. It's entirely possible to copy the config from V3 and have that work, it just won't be present by default any more."}),"\n",(0,s.jsxs)(n.p,{children:["In order to migrate to the ",(0,s.jsx)(n.code,{children:"-s"})," flag use the path of the fields you're setting instead of the generated environment variables, so:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'docker run --rm -p 4195:4195 warpstreamlabs/bento \\\n\t-e "INPUT_TYPE=http_server" \\\n\t-e "OUTPUT_TYPE=kafka" \\\n\t-e "OUTPUT_KAFKA_ADDRESSES=kafka-server:9092" \\\n\t-e "OUTPUT_KAFKA_TOPIC=bento_topic"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Becomes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'docker run --rm -p 4195:4195 warpstreamlabs/bento \\\n  -s "input.type=http_server" \\\n  -s "output.type=kafka" \\\n  -s "output.kafka.addresses=kafka-server:9092" \\\n  -s "output.kafka.topic=bento_topic"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"old-plugin-apis-removed",children:"Old Plugin APIs Removed"}),"\n",(0,s.jsxs)(n.p,{children:["Any packages from within the ",(0,s.jsx)(n.code,{children:"lib"})," directory have been removed. Please use only the APIs within the ",(0,s.jsx)(n.code,{children:"public"})," directory, the API docs count be found on ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/warpstreamlabs/bento/v4/public",children:"pkg.go.dev"}),", and examples can be found in the ",(0,s.jsxs)(n.a,{href:"https://github.com/warpstreamlabs/bento-plugin-example",children:[(0,s.jsx)(n.code,{children:"benthos-plugin-example"})," repository"]}),". These new APIs can be found in V3 so if you have many components you can migrate them incrementally by sticking with V3 until completion."]}),"\n",(0,s.jsxs)(n.p,{children:["Many of the old packages within ",(0,s.jsx)(n.code,{children:"lib"})," can also still be found within ",(0,s.jsx)(n.code,{children:"internal"}),", if you're in a pickle you can find some of those APIs and copy/paste them into your own repository."]}),"\n",(0,s.jsx)(n.h2,{id:"caches",children:"Caches"}),"\n",(0,s.jsx)(n.p,{children:"All caches that support retries have had their retry/backoff configuration fields modified in order to be more consistent. The new common format is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"retries:\n  initial_interval: 1s\n  max_interval: 5s\n  max_elapsed_time: 30s\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In cases where it might be desirable to disable retries altogether (the ",(0,s.jsx)(n.code,{children:"ristretto"})," cache) there is also an ",(0,s.jsx)(n.code,{children:"enabled"})," field."]}),"\n",(0,s.jsx)(n.h3,{id:"ttl-changes",children:"TTL changes"}),"\n",(0,s.jsxs)(n.p,{children:["Caches that support TTLs have had their ",(0,s.jsx)(n.code,{children:"ttl"})," fields renamed to ",(0,s.jsx)(n.code,{children:"default_ttl"})," in order to make it clearer that their purpose is to provide a fallback. All of these values are now duration string types, i.e. a cache with an integer seconds based field with a previous value of ",(0,s.jsx)(n.code,{children:"60"})," should now be defined as ",(0,s.jsx)(n.code,{children:"60s"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"field-default-changes",children:"Field Default Changes"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/warpstreamlabs/bento/issues/392",children:"https://github.com/warpstreamlabs/bento/issues/392"})}),"\n",(0,s.jsxs)(n.p,{children:["Lots of fields have had default values removed in cases where they were deemed unlikely to be useful and likely to cause frustration. This specifically applies to any ",(0,s.jsx)(n.code,{children:"url"}),", ",(0,s.jsx)(n.code,{children:"urls"}),", ",(0,s.jsx)(n.code,{children:"address"})," or ",(0,s.jsx)(n.code,{children:"addresses"})," fields that may have once had a default value containing a common example for the particular service. In most cases this should cause minimal disruption as the field is non-optional and therefore not specifying it explicitly will result in config errors."]}),"\n",(0,s.jsx)(n.p,{children:"However, there are the following exceptions that are worth noting:"}),"\n",(0,s.jsxs)(n.h3,{id:"the-http-processor-and-http_client-output-no-longer-create-multipart-requests-by-default",children:["The ",(0,s.jsx)(n.code,{children:"http"})," processor and ",(0,s.jsx)(n.code,{children:"http_client"})," output no longer create multipart requests by default"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"http"})," processor and ",(0,s.jsx)(n.code,{children:"http_client"})," output now execute message batch requests as individual requests by default. This behaviour can be disabled by explicitly setting ",(0,s.jsx)(n.code,{children:"batch_as_multipart"})," to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"output-lines-codec-no-longer-adds-extra-batch-newlines",children:["Output ",(0,s.jsx)(n.code,{children:"lines"})," codec no longer adds extra batch newlines"]}),"\n",(0,s.jsxs)(n.p,{children:["All outputs that traditionally wrote empty newlines at the end of batches with >1 message when using the ",(0,s.jsx)(n.code,{children:"lines"})," codec (",(0,s.jsx)(n.code,{children:"socket"}),", ",(0,s.jsx)(n.code,{children:"stdout"}),", ",(0,s.jsx)(n.code,{children:"file"}),", ",(0,s.jsx)(n.code,{children:"sftp"}),") no longer do this by default. This was originally kept for backwards compatibility but was often seen as an unexpected and annoying behaviour."]}),"\n",(0,s.jsx)(n.p,{children:"It is still possible to add these end-of-batch newlines in a more consistent way by either adding an empty message to the end of batches, or by adding a newline to the last message of the batch."}),"\n",(0,s.jsxs)(n.h3,{id:"the-switch-output-retry_until_success",children:["The ",(0,s.jsx)(n.code,{children:"switch"})," output ",(0,s.jsx)(n.code,{children:"retry_until_success"})]}),"\n",(0,s.jsxs)(n.p,{children:["By default the ",(0,s.jsx)(n.code,{children:"switch"})," output continues retrying switch case outputs until success. This default was sensible at the time as we didn't have a concept of intentionally nacking messages, and therefore a nacked message was likely a recoverable problem and retrying internally means that messages matching multiple cases wouldn't produce duplicates."]}),"\n",(0,s.jsxs)(n.p,{children:["However, since then Bento has evolved and a very common pattern with the ",(0,s.jsx)(n.code,{children:"switch"})," output is to reject messages that failed during processing using the ",(0,s.jsx)(n.code,{children:"reject"})," output. But because of the default value of ",(0,s.jsx)(n.code,{children:"retry_until_success"})," many users end up in a confusing situation where using a ",(0,s.jsx)(n.code,{children:"reject"})," output results in the pipeline blocking indefinitely until they discover this field."]}),"\n",(0,s.jsxs)(n.p,{children:["Therefore the default value of ",(0,s.jsx)(n.code,{children:"retry_until_success"})," will now be ",(0,s.jsx)(n.code,{children:"false"}),", which means users that aren't using a ",(0,s.jsx)(n.code,{children:"reject"})," flow in one of their switch cases, and have a configuration where messages could match multiple cases, should explicitly set this field to ",(0,s.jsx)(n.code,{children:"true"})," in order to avoid potential duplicates during downstream outages."]}),"\n",(0,s.jsxs)(n.h3,{id:"aws-region-fields",children:["AWS ",(0,s.jsx)(n.code,{children:"region"})," fields"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/warpstreamlabs/bento/issues/696",children:"https://github.com/warpstreamlabs/bento/issues/696"})}),"\n",(0,s.jsxs)(n.p,{children:["Any configuration sections containing AWS fields no longer have a default ",(0,s.jsx)(n.code,{children:"region"})," of ",(0,s.jsx)(n.code,{children:"eu-west-1"}),". Instead, the field will be empty by default, where unless explicitly set the environment variable ",(0,s.jsx)(n.code,{children:"AWS_REGION"})," will be used. This will cause problems for users where they expect the region ",(0,s.jsx)(n.code,{children:"eu-west-1"})," to be targeted when neither the field nor the environment variable ",(0,s.jsx)(n.code,{children:"AWS_REGION"})," are set."]}),"\n",(0,s.jsx)(n.h2,{id:"clickhouse-driver-changes",children:"Clickhouse Driver Changes"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"clickhouse"})," SQL driver Data Source Name format parameters have been changed due to a client library update (details can be found at ",(0,s.jsx)(n.a,{href:"https://github.com/ClickHouse/clickhouse-go",children:"https://github.com/ClickHouse/clickhouse-go"}),"). A compatibility layer has been added that makes a best attempt to translate the old DSN format to the new one, but some parameters may not carry over exactly."]}),"\n",(0,s.jsxs)(n.p,{children:["This update also means placeholders in ",(0,s.jsx)(n.code,{children:"sql_raw"})," queries should be in dollar syntax."]}),"\n",(0,s.jsx)(n.h2,{id:"serverless-default-output",children:"Serverless Default Output"}),"\n",(0,s.jsx)(n.p,{children:"The default output of the serverless distribution of Bento is now the following config:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'output:\n  switch:\n    retry_until_success: false\n    cases:\n      - check: errored()\n        output:\n          reject: "processing failed due to: ${! error() }"\n      - output:\n          sync_response: {}\n'})}),"\n",(0,s.jsx)(n.p,{children:"This change was made in order to return processing errors directly to the invoker by default."}),"\n",(0,s.jsx)(n.h2,{id:"metrics-changes",children:"Metrics Changes"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/warpstreamlabs/bento/issues/1066",children:"https://github.com/warpstreamlabs/bento/issues/1066"})}),"\n",(0,s.jsxs)(n.p,{children:["The metrics produced by a Bento stream have been greatly simplified and now make better use of labels/tags in order to provide component-specific insights. The configuration and behaviour of metrics types has also been made more consistent, with metric names being the same throughout and ",(0,s.jsx)(n.code,{children:"mapping"})," now being a general top-level field."]}),"\n",(0,s.jsxs)(n.p,{children:["For a full overview of the new system check out the ",(0,s.jsx)(n.a,{href:"/docs/components/metrics/about",children:"metrics about page"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"field-prefix-is-gone",children:["Field ",(0,s.jsx)(n.code,{children:"prefix"})," is gone"]}),"\n",(0,s.jsxs)(n.p,{children:["Some metrics components such as ",(0,s.jsx)(n.code,{children:"prometheus"})," had a ",(0,s.jsx)(n.code,{children:"prefix"})," field for setting a prefix to all metric names. These fields are now gone, if you want to reintroduce these prefixes you can use the general purpose ",(0,s.jsx)(n.code,{children:"mapping"})," field. For example, if we previously had a config:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"metrics:\n  prometheus:\n    prefix: ${METRICS_PREFIX:bento}\n"})}),"\n",(0,s.jsx)(n.p,{children:"We need to delete that prefix and add a mapping that renames metric names:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'metrics:\n  mapping: \'root = env("METRICS_PREFIX").or("bento") + "_" + this\'\n  prometheus: {}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"the-http_server-type-renamed-to-json_api",children:["The ",(0,s.jsx)(n.code,{children:"http_server"})," type renamed to ",(0,s.jsx)(n.code,{children:"json_api"})]}),"\n",(0,s.jsxs)(n.p,{children:["The name given to the generic JSON API metrics type was ",(0,s.jsx)(n.code,{children:"http_server"}),", which was confusing as it isn't the only metrics output type that presents as an HTTP server endpoint. This type was also only originally intended for local debugging, which the ",(0,s.jsx)(n.code,{children:"prometheus"})," type is also good for."]}),"\n",(0,s.jsxs)(n.p,{children:["In order to distinguish this metrics type by its unique feature, which is that it exposes metrics as a JSON object, it has been renamed to ",(0,s.jsx)(n.code,{children:"json_api"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"the-stdout-type-renamed-to-logger",children:["The ",(0,s.jsx)(n.code,{children:"stdout"})," type renamed to ",(0,s.jsx)(n.code,{children:"logger"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"stdout"})," metrics type now emits metrics using the Bento logger, and therefore also matches the logger format. As such, it has been renamed to ",(0,s.jsx)(n.code,{children:"logger"})," in order to reflect that."]}),"\n",(0,s.jsx)(n.h3,{id:"no-more-dots",children:"No more dots"}),"\n",(0,s.jsxs)(n.p,{children:["In V3 metrics names contained dots in order to represent pseudo-paths of the source component. In V4 all metric names produced by Bento have been changed to contain only alpha-numeric characters and underscores. It is recommended that any custom metric names produced by your ",(0,s.jsx)(n.code,{children:"metric"})," processors and custom plugins should match this new format for consistency."]}),"\n",(0,s.jsxs)(n.p,{children:["Since dots were invalid characters in Prometheus metric names, in V3 the ",(0,s.jsx)(n.code,{children:"prometheus"})," metrics type made some automatic modifications to all names before registering them. This rewrite first replaced all ",(0,s.jsx)(n.code,{children:"-"})," and ",(0,s.jsx)(n.code,{children:"_"})," characters to a double underscore (",(0,s.jsx)(n.code,{children:"__"}),"), and then replaced all ",(0,s.jsx)(n.code,{children:"."})," characters with ",(0,s.jsx)(n.code,{children:"_"}),". This was an ugly work around and has been removed in V4, but means in previous cases where custom metrics containing dots were automatically converted you will instead see error logs reporting that the names were invalid and therefore ignored."]}),"\n",(0,s.jsxs)(n.p,{children:["If you wish to retain the old rewrite behaviour you can reproduce it with the new ",(0,s.jsx)(n.code,{children:"mapping"})," field:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'metrics:\n  mapping: \'root = this.replace("_", "__").replace("-", "__").replace(".", "_")\'\n  prometheus: {}\n'})}),"\n",(0,s.jsx)(n.p,{children:"However, it's recommended to change your metric names instead."}),"\n",(0,s.jsx)(n.h2,{id:"tracing-changes",children:"Tracing Changes"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/warpstreamlabs/bento/issues/872",children:"https://github.com/warpstreamlabs/bento/issues/872"})}),"\n",(0,s.jsxs)(n.p,{children:["Distributed tracing within Bento is now done via the Open Telemetry client library. Unfortunately, this client library does not support the full breadth of options as we had before. As such, the ",(0,s.jsx)(n.code,{children:"jaeger"})," tracing type now only supports the ",(0,s.jsx)(n.code,{children:"const"})," sampling type, and the field ",(0,s.jsx)(n.code,{children:"service_name"})," has been removed."]}),"\n",(0,s.jsx)(n.p,{children:"This will likely mean tracing output will appear different in this release, and if you were relying on code that extracts and interacts with spans from messages in your custom plugins then it will need to be converted to use the official Open Telemetry APIs."}),"\n",(0,s.jsx)(n.h2,{id:"logging-changes",children:"Logging Changes"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/warpstreamlabs/bento/issues/589",children:"https://github.com/warpstreamlabs/bento/issues/589"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"logger"})," config section has been simplified, the new default set to ",(0,s.jsx)(n.code,{children:"logfmt"}),", and the ",(0,s.jsx)(n.code,{children:"classic"})," format removed. The default value of ",(0,s.jsx)(n.code,{children:"add_timestamp"})," has also been changed to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"automatic-max-in-flight",children:"Automatic Max In Flight"}),"\n",(0,s.jsxs)(n.p,{children:["Outputs that compose other outputs (",(0,s.jsx)(n.code,{children:"broker"}),", ",(0,s.jsx)(n.code,{children:"switch"}),", etc) no longer require their own ",(0,s.jsx)(n.code,{children:"max_in_flight"})," settings as they will automatically saturate their composed outputs. This includes outputs that compose resources."]}),"\n",(0,s.jsx)(n.h2,{id:"processor-batch-behaviour-changes",children:"Processor Batch Behaviour Changes"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/warpstreamlabs/bento/issues/408",children:"https://github.com/warpstreamlabs/bento/issues/408"})}),"\n",(0,s.jsxs)(n.p,{children:["Some processors that once executed only once per batch have been updated to execute upon each message individually by default. This change has been made because it was felt the individual message case was considerably more common (and intuitive) and that it is possible to satisfy the batch-wide behaviour in other ways that are opt-in, such as by placing the processors within a ",(0,s.jsx)(n.code,{children:"branch"})," and having your ",(0,s.jsx)(n.code,{children:"request_map"})," explicit for a single ",(0,s.jsx)(n.code,{children:"batch_index"})," (i.e. ",(0,s.jsx)(n.code,{children:"request_map: root = if batch_index() != 0 { deleted() }"}),")."]}),"\n",(0,s.jsxs)(n.h3,{id:"processor-parts-field-removed",children:["Processor ",(0,s.jsx)(n.code,{children:"parts"})," field removed"]}),"\n",(0,s.jsxs)(n.p,{children:["Many processors previously had a ",(0,s.jsx)(n.code,{children:"parts"})," field, which allowed you to explicitly list the indexes of a batch to apply the processor to. This field had confusing naming and was rarely used (or even known about). Since that same behaviour can be reproduced by placing the processor within a ",(0,s.jsx)(n.code,{children:"branch"})," (or ",(0,s.jsx)(n.code,{children:"switch"}),") all ",(0,s.jsx)(n.code,{children:"parts"})," fields have been removed."]}),"\n",(0,s.jsx)(n.h3,{id:"dedupe",children:(0,s.jsx)(n.code,{children:"dedupe"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"dedupe"})," processor has been reworked so that it now acts upon individual messages by default. It's now mandatory to specify a ",(0,s.jsx)(n.code,{children:"key"}),", and the ",(0,s.jsx)(n.code,{children:"parts"})," and ",(0,s.jsx)(n.code,{children:"hash"})," fields have been removed. Instead, specify full-content hashing with interpolation functions in the ",(0,s.jsx)(n.code,{children:"key"})," field, e.g. ",(0,s.jsx)(n.code,{children:'${! content().hash("xxhash64") }'}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In order to deduplicate an entire batch it is likely easier to use a ",(0,s.jsx)(n.code,{children:"cache"})," processor with the ",(0,s.jsx)(n.code,{children:"add"})," operator:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"pipeline:\n  processors:\n    # Try and add one message to a cache that identifies the whole batch\n    - branch:\n        request_map: |\n          root = if batch_index() == 0 {\n            this.id\n          } else { deleted() }\n        processors:\n          - cache:\n              operator: add\n              key: ${! content() }\n              value: t\n    # Delete all messages if we failed\n    - mapping: |\n        root = if errored().from(0) {\n          deleted()\n        }\n"})}),"\n",(0,s.jsx)(n.h3,{id:"log",children:(0,s.jsx)(n.code,{children:"log"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"log"})," processor now executes for every message of batches by default."]}),"\n",(0,s.jsx)(n.h3,{id:"sleep",children:(0,s.jsx)(n.code,{children:"sleep"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"sleep"})," processor now executes for every message of batches by default."]}),"\n",(0,s.jsx)(n.h2,{id:"broker-ditto-macro-gone",children:"Broker Ditto Macro Gone"}),"\n",(0,s.jsxs)(n.p,{children:["The hidden macro ",(0,s.jsx)(n.code,{children:"ditto"})," for broker configs is now removed. Use the ",(0,s.jsx)(n.code,{children:"copies"})," field instead. For some edge cases where ",(0,s.jsx)(n.code,{children:"copies"})," does not satisfy your requirements you may be better served using ",(0,s.jsx)(n.a,{href:"/docs/configuration/templating",children:"configuration templates"}),". If all else fails then please ",(0,s.jsx)(n.a,{href:"/community",children:"reach out"})," and we can look into other solutions."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var s=t(67294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);