import{_ as h}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-e8c0123c.js";import{E as v}from"./ErrorBlock-81d576c6.js";import{_ as C}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-bef0b446.js";import{_ as x}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-7a4649a4.js";import{d as k,u as w,a as t,o as s,b as i,w as a,e as n,p as c,f as y,t as R,q as V}from"./index-e5aa0c15.js";import"./index-fce48c05.js";import"./TextWithCopyButton-a30e2023.js";import"./CopyButton-f402d0b6.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-1f206a29.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-e467052f.js";import"./toYaml-4e00099e.js";import"./uniqueId-90cc9b93.js";const z=k({__name:"ServiceConfigView",setup(E){const l=w();return(F,$)=>{const d=t("RouteTitle"),_=t("DataSource"),u=t("KCard"),f=t("AppView"),g=t("RouteView");return s(),i(g,{name:"service-config-view",params:{mesh:"",service:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:m})=>[n(f,null,{title:a(()=>[c("h2",null,[n(d,{title:m("services.routes.item.navigation.service-config-view")},null,8,["title"])])]),default:a(()=>[y(),n(u,null,{default:a(()=>[c("div",null,[n(_,{src:`/meshes/${e.params.mesh}/external-services/for/${e.params.service}`},{default:a(({data:r,error:p})=>[p?(s(),i(v,{key:0,error:p},null,8,["error"])):r===void 0?(s(),i(C,{key:1})):r===null?(s(),i(h,{key:2,"data-testid":"no-matching-external-service"},{title:a(()=>[c("p",null,R(m("services.detail.no_matching_external_service",{name:e.params.service})),1)]),_:2},1024)):(s(),i(x,{key:3,id:"code-block-service",resource:r.config,"resource-fetcher":o=>V(l).getExternalService({mesh:r.mesh,name:r.name},o),"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter==="true","is-reg-exp-mode":e.params.codeRegExp==="true",onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["resource","resource-fetcher","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"]))]),_:2},1032,["src"])])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{z as default};