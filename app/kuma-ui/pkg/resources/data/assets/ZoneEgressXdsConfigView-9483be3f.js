import{E as m}from"./EnvoyData-91a6edce.js";import{d as l,a as e,o as d,b as u,w as o,e as t,p as _,f as g}from"./index-fd2e4828.js";import"./index-52545d1d.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-ac46e899.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-5f10a138.js";import"./ErrorBlock-9f5a5ce4.js";import"./TextWithCopyButton-28771915.js";import"./CopyButton-8619cafb.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-6a7f9494.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-53d7167c.js";const S=l({__name:"ZoneEgressXdsConfigView",setup(f){return(h,w)=>{const s=e("RouteTitle"),r=e("KCard"),a=e("AppView"),i=e("RouteView");return d(),u(i,{name:"zone-egress-xds-config-view",params:{zoneEgress:"",codeSearch:""}},{default:o(({route:n,t:p})=>[t(a,null,{title:o(()=>[_("h2",null,[t(s,{title:p("zone-egresses.routes.item.navigation.zone-egress-xds-config-view")},null,8,["title"])])]),default:o(()=>[g(),t(r,null,{body:o(()=>[t(m,{resource:"Zone",src:`/zone-egresses/${n.params.zoneEgress}/data-path/xds`,query:n.params.codeSearch,onQueryChange:c=>n.update({codeSearch:c})},null,8,["src","query","onQueryChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{S as default};