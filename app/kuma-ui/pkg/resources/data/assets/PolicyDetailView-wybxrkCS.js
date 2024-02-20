import{_ as b}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-OEoGObq1.js";import{d as V,a as p,o as t,b as l,w as o,e as i,m as _,f as r,t as f,X as P,F,c as d,E as B,p as S}from"./index-e2FNXItg.js";import{E as g}from"./ErrorBlock-cBZXW5S9.js";import{_ as x}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-GQelcApR.js";import{T as L}from"./TextWithCopyButton-JgAIWMhc.js";import"./CodeBlock-0gFI7jud.js";import"./CopyButton-6vfZQ3ay.js";import"./index-CMzbRF1u.js";import"./toYaml-sPaYOD3i.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-w7LMxCbn.js";const T={key:2,class:"stack","data-testid":"detail-view-details"},I={class:"mt-4"},K={key:3,"data-testid":"affected-data-plane-proxies"},O=V({__name:"PolicyDetailView",setup(M){return(N,q)=>{const C=p("RouteTitle"),k=p("KInput"),w=p("RouterLink"),h=p("DataSource"),v=p("KCard"),$=p("AppView"),R=p("RouteView");return t(),l(R,{name:"policy-detail-view",params:{mesh:"",policy:"",policyPath:"",codeSearch:"",codeFilter:!1,codeRegExp:!1,dataplane:""}},{default:o(({route:e,t:n})=>[i($,{breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:e.params.mesh}},text:e.params.mesh},{to:{name:"policy-list-view",params:{mesh:e.params.mesh,policyPath:e.params.policyPath}},text:n("policies.routes.item.breadcrumbs")}]},{title:o(()=>[_("h1",null,[i(L,{text:e.params.policy},{default:o(()=>[i(C,{title:n("policies.routes.item.title",{name:e.params.policy})},null,8,["title"])]),_:2},1032,["text"])])]),default:o(()=>[r(),i(h,{src:`/meshes/${e.params.mesh}/policy-path/${e.params.policyPath}/policy/${e.params.policy}`},{default:o(({data:u,error:y})=>[y?(t(),l(g,{key:0,error:y},null,8,["error"])):u===void 0?(t(),l(x,{key:1})):(t(),d("div",T,[i(v,null,{default:o(()=>[_("h2",null,f(n("policies.detail.affected_dpps")),1),r(),_("div",I,[i(k,{"model-value":e.params.dataplane,type:"text",placeholder:n("policies.detail.dataplane_input_placeholder"),required:"","data-testid":"dataplane-search-input",onInput:a=>e.update({dataplane:a})},null,8,["model-value","placeholder","onInput"]),r(),i(h,{src:`/meshes/${e.params.mesh}/policy-path/${e.params.policyPath}/policy/${e.params.policy}/dataplanes`},{default:o(({data:a,error:m})=>[m?(t(),l(g,{key:0,error:m},null,8,["error"])):a===void 0?(t(),l(x,{key:1})):a.items.length===0?(t(),l(P,{key:2})):(t(),d("ul",K,[(t(!0),d(F,null,B(a.items.filter(s=>s.name.toLowerCase().includes(e.params.dataplane.toLowerCase())),(s,c)=>(t(),d("li",{key:c,"data-testid":"dataplane-name"},[i(w,{to:{name:"data-plane-detail-view",params:{mesh:s.mesh,dataPlane:s.name}}},{default:o(()=>[r(f(s.name),1)]),_:2},1032,["to"])]))),128))]))]),_:2},1032,["src"])])]),_:2},1024),r(),i(b,{resource:u.config,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},{default:o(({copy:a,copying:m})=>[m?(t(),l(h,{key:0,src:`/meshes/${e.params.mesh}/policy-path/${e.params.policyPath}/policy/${e.params.policy}/as/kubernetes?no-store`,onChange:s=>{a(c=>c(s))},onError:s=>{a((c,E)=>E(s))}},null,8,["src","onChange","onError"])):S("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"])]),_:1})}}});export{O as default};