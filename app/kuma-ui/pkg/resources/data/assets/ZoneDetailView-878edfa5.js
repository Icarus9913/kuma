import{d as _,u as d,r as i,v as u,o,j as c,b as l,g as k}from"./index-a4fb3e6d.js";import{_ as w}from"./ZoneDetails.vue_vue_type_script_setup_true_lang-7a6b8f4e.js";import{_ as z}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-ea440da3.js";import{E as h}from"./ErrorBlock-984fd14e.js";import{_ as y}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-aae7801c.js";import{u as g}from"./store-a62ac939.js";import{u as B}from"./index-7848fac5.js";import"./kongponents.es-af129dfe.js";import"./AccordionList-afe49a57.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-ef11f61a.js";import"./DefinitionListItem-cc432e9e.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-1cc853a4.js";import"./TabsWidget-d501eaef.js";import"./datadogLogEvents-302eea7b.js";import"./QueryParameter-70743f73.js";import"./TextWithCopyButton-f986f099.js";import"./WarningsWidget.vue_vue_type_script_setup_true_lang-449091f8.js";const E={class:"zone-details"},$={key:3,class:"kcard-border"},H=_({__name:"ZoneDetailView",setup(b){const p=B(),e=d(),f=g(),r=i(null),n=i(!0),a=i(null);u(()=>e.params.mesh,function(){e.name==="zone-detail-view"&&s()}),u(()=>e.params.name,function(){e.name==="zone-detail-view"&&s()}),v();function v(){f.dispatch("updatePageTitle",e.params.zone),s()}async function s(){n.value=!0,a.value=null;const m=e.params.zone;try{r.value=await p.getZoneOverview({name:m})}catch(t){r.value=null,t instanceof Error?a.value=t:console.error(t)}finally{n.value=!1}}return(m,t)=>(o(),c("div",E,[n.value?(o(),l(y,{key:0})):a.value!==null?(o(),l(h,{key:1,error:a.value},null,8,["error"])):r.value===null?(o(),l(z,{key:2})):(o(),c("div",$,[k(w,{"zone-overview":r.value},null,8,["zone-overview"])]))]))}});export{H as default};