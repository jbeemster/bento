"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[7307],{4996:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return c}});var o=t(85893),r=t(11151);const s={slug:"joining-streams",title:"Joining Streams",description:"How to hydrate documents by joining multiple streams."},i=void 0,a={permalink:"/bento/cookbooks/joining-streams",source:"@site/cookbooks/joining_streams.md",title:"Joining Streams",description:"How to hydrate documents by joining multiple streams."},c=[{value:"Caching Articles",id:"caching-articles",level:2},{value:"Hydrating Comments",id:"hydrating-comments",level:2},{value:"Adding a Retry Queue",id:"adding-a-retry-queue",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["This cookbook demonstrates how to merge JSON events from parallel streams using content based rules and a ",(0,o.jsx)(n.a,{href:"/docs/components/caches/about",children:"cache"})," of your choice."]}),"\n",(0,o.jsxs)(n.p,{children:["The imaginary problem we are going to solve is hydrating a feed of article comments with information from their parent articles. We will be consuming and writing to Kafka, but the example works with any ",(0,o.jsx)(n.a,{href:"/docs/components/inputs/about",children:"input"})," and ",(0,o.jsx)(n.a,{href:"/docs/components/outputs/about",children:"output"})," combination."]}),"\n",(0,o.jsxs)(n.p,{children:["Articles are received over the topic ",(0,o.jsx)(n.code,{children:"articles"})," and look like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "type": "article",\n  "article": {\n    "id": "123foo",\n    "title": "Good article",\n    "content": "this is a totally good article"\n  },\n  "user": {\n    "id": "user1"\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Comments can either be posted on an article or a parent comment, are received over the topic ",(0,o.jsx)(n.code,{children:"comments"}),", and look like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "type": "comment",\n  "comment": {\n    "id": "456bar",\n    "parent_id": "123foo",\n    "content": "this article is bad"\n  },\n  "user": {\n    "id": "user2"\n  }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Our goal is to end up with a single stream of comments, where information about the root article of the comment is attached to the event. The above comment should exit our pipeline looking like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "type": "comment",\n  "comment": {\n    "id": "456bar",\n    "parent_id": "123foo",\n    "content": "this article is bad"\n  },\n  "article": {\n    "title": "Good article",\n    "content": "this is a totally good article"\n  },\n  "user": {\n    "id": "user2"\n  }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"In order to achieve this we will need to cache articles as they pass through our pipelines and then retrieve them for each comment passing through. Since the parent of a comment might be another comment we will also need to cache and retrieve comments in the same way."}),"\n",(0,o.jsx)(n.h2,{id:"caching-articles",children:"Caching Articles"}),"\n",(0,o.jsx)(n.p,{children:"Our first pipeline is very simple, we just consume articles, reduce them to only the fields we wish to cache, and then cache them. If we receive the same article multiple times we're going to assume it's okay to overwrite the old article in the cache."}),"\n",(0,o.jsxs)(n.p,{children:["In this example I'm targeting Redis, but you can choose any of the supported ",(0,o.jsx)(n.a,{href:"/docs/components/caches/about",children:"cache targets"}),". The TTL of cached articles is set to one week."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"input:\n  kafka:\n    addresses: [ TODO ]\n    topics: [ articles ]\n    consumer_group: bento_articles_group\n\npipeline:\n  processors:\n    # Reduce document into only fields we wish to cache.\n    - mapping: 'article = article'\n\n    # Store reduced articles into our cache.\n    - cache:\n        operator: set\n        resource: hydration_cache\n        key: '${!json(\"article.id\")}'\n        value: '${!content()}'\n\n# Drop all articles after they are cached.\noutput:\n  drop: {}\n\ncache_resources:\n  - label: hydration_cache\n    redis:\n      url: TODO\n      default_ttl: 168h\n"})}),"\n",(0,o.jsx)(n.h2,{id:"hydrating-comments",children:"Hydrating Comments"}),"\n",(0,o.jsxs)(n.p,{children:["Our second pipeline consumes comments, caches them in case a subsequent comment references them, obtains its parent (article or comment), and attaches the root article to the event before sending it to our output topic ",(0,o.jsx)(n.code,{children:"comments_hydrated"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In this config we make use of the ",(0,o.jsx)(n.a,{href:"/docs/components/processors/branch",children:(0,o.jsx)(n.code,{children:"branch"})})," processor as it allows us to reduce documents into smaller maps for caching and gives us greater control over how results are mapped back into the document."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"input:\n  kafka:\n    addresses: [ TODO ]\n    topics: [ comments ]\n    consumer_group: bento_comments_group\n\npipeline:\n  processors:\n    # Perform both hydration and caching within a for_each block as this ensures\n    # that a given message of a batch is cached before the next message is\n    # hydrated, ensuring that when a message of the batch has a parent within\n    # the same batch hydration can still work.\n    - for_each:\n      # Attempt to obtain parent event from cache (if the ID exists).\n      - branch:\n          request_map: 'root = this.comment.parent_id | deleted()'\n          processors:\n            - cache:\n                operator: get\n                resource: hydration_cache\n                key: '${!content()}'\n          # And if successful copy it into the field `article`.\n          result_map: 'root.article = this.article'\n      \n      # Reduce comment into only fields we wish to cache.\n      - branch:\n          request_map: |\n            root.comment.id = this.comment.id\n            root.article = this.article\n          processors:\n            # Store reduced comment into our cache.\n            - cache:\n                operator: set\n                resource: hydration_cache\n                key: '${!json(\"comment.id\")}'\n                value: '${!content()}'\n          # No `result_map` since we don't need to map into the original message.\n\n# Send resulting documents to our hydrated topic.\noutput:\n  kafka:\n    addresses: [ TODO ]\n    topic: comments_hydrated\n\ncache_resources:\n  - label: hydration_cache\n    redis:\n      url: TODO\n      default_ttl: 168h\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This pipeline satisfies our basic needs but errors aren't handled at all, meaning intermittent cache connectivity problems that span beyond our cache retries will result in failed documents entering our ",(0,o.jsx)(n.code,{children:"comments_hydrated"})," topic. This is also the case if a comment arrives in our pipeline before its parent."]}),"\n",(0,o.jsxs)(n.p,{children:["There are ",(0,o.jsx)(n.a,{href:"/docs/configuration/error_handling",children:"many patterns for error handling"})," to choose from in Bento. In this example we're going to introduce a delayed retry queue as it enables us to reprocess failed documents after a grace period, which is isolated from our main pipeline."]}),"\n",(0,o.jsx)(n.h2,{id:"adding-a-retry-queue",children:"Adding a Retry Queue"}),"\n",(0,o.jsxs)(n.p,{children:["Our retry queue is going to be another topic called ",(0,o.jsx)(n.code,{children:"comments_retried"}),". Since most errors are related to time we will delay retry attempts by storing the current timestamp after a failed request as a metadata field."]}),"\n",(0,o.jsxs)(n.p,{children:["We will use an input ",(0,o.jsx)(n.a,{href:"/docs/components/inputs/broker",children:(0,o.jsx)(n.code,{children:"broker"})})," so that we can consume both the ",(0,o.jsx)(n.code,{children:"comments"})," and ",(0,o.jsx)(n.code,{children:"comments_retry"})," topics in the same pipeline."]}),"\n",(0,o.jsx)(n.p,{children:"Our config (omitting the caching sections for brevity) now looks like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"input:\n  broker:\n    inputs:\n      - kafka:\n          addresses: [ TODO ]\n          topics: [ comments ]\n          consumer_group: bento_comments_group\n\n      - kafka:\n          addresses: [ TODO ]\n          topics: [ comments_retry ]\n          consumer_group: bento_comments_group\n\n        processors:\n          - for_each:\n            # Calculate time until next retry attempt and sleep for that duration.\n            # This sleep blocks the topic 'comments_retry' but NOT 'comments',\n            # because both topics are consumed independently and these processors\n            # only apply to the 'comments_retry' input.\n            - sleep:\n                duration: '${! 3600 - ( timestamp_unix() - meta(\"last_attempted\").number() ) }s'\n\npipeline:\n  processors:\n    - try:\n      - for_each:\n        # Attempt to obtain parent event from cache.\n        - branch:\n            {} # Omitted\n\n        # Reduce document into only fields we wish to cache.\n        - branch:\n            {} # Omitted\n\n      # If we've reached this point then both processors succeeded.\n      - mapping: 'meta output_topic = \"comments_hydrated\"'\n\n    - catch:\n        # If we reach here then a processing stage failed.\n        - mapping: |\n            meta output_topic = \"comments_retry\"\n            meta last_attempted = timestamp_unix()\n\n# Send resulting documents either to our hydrated topic or the retry topic.\noutput:\n  kafka:\n    addresses: [ TODO ]\n    topic: '${!meta(\"output_topic\")}'\n\ncache_resources:\n  - label: hydration_cache\n    redis:\n      url: TODO\n      default_ttl: 168h\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can find a full example ",(0,o.jsx)(n.a,{href:"https://github.com/warpstreamlabs/bento/blob/master/config/examples/joining_streams.yaml",children:"in the project repo"}),", and with this config we can deploy as many instances of Bento as we need as the partitions will be balanced across the consumers."]})]})}function h(e){void 0===e&&(e={});const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var o=t(67294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);