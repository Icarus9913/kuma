import{P as N}from"./kongponents.es-bba755ec.js";import{k as T,f as V,A as x,i as B}from"./RouteView.vue_vue_type_script_setup_true_lang-108544bb.js";import{_ as D}from"./CodeBlock.vue_vue_type_style_index_0_lang-6ae11014.js";import{a as L,D as Z}from"./DefinitionListItem-65d46c98.js";import{_ as E,S as P}from"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-92a9edf2.js";import{T as $}from"./TabsWidget-5a5519cc.js";import{T as b}from"./TextWithCopyButton-851c19a9.js";import{_ as F}from"./WarningsWidget.vue_vue_type_script_setup_true_lang-6d103a5a.js";import{d as R,c as l,O as W,a2 as j,a3 as q,r as G,o as i,a as u,b as e,l as J,h as p,i as c,t as f,f as g,k as w,e as k,F as d,g as H}from"./index-4a228570.js";const M={class:"entity-heading"},oe=R({__name:"ZoneDetails",props:{zoneOverview:{type:Object,required:!0}},setup(O){const r=O,{t:z}=T(),y=V(),v=[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Insights"},{hash:"#config",title:"Config"},{hash:"#warnings",title:"Warnings"}],C=l(()=>({name:"zone-cp-detail-view",params:{zone:r.zoneOverview.name}})),m=l(()=>{const{type:t,name:n}=r.zoneOverview,o=W(r.zoneOverview.zoneInsight);return{type:t,name:n,status:o,"Authentication Type":j(r.zoneOverview)}}),S=l(()=>{var n;const t=((n=r.zoneOverview.zoneInsight)==null?void 0:n.subscriptions)??[];return Array.from(t).reverse()}),h=l(()=>{var o;const t=[],n=((o=r.zoneOverview.zoneInsight)==null?void 0:o.subscriptions)??[];if(n.length>0){const s=n[n.length-1],a=s.version.kumaCp.version||"-",{kumaCpGlobalCompatible:A=!0}=s.version.kumaCp;A||t.push({kind:q,payload:{zoneCpVersion:a,globalCpVersion:y.getters["config/getVersion"]}})}return t}),_=l(()=>{var o;const t=((o=r.zoneOverview.zoneInsight)==null?void 0:o.subscriptions)??[],n=t[t.length-1];return n.config?JSON.stringify(JSON.parse(n.config),null,2):null}),I=l(()=>h.value.length===0?v.filter(t=>t.hash!=="#warnings"):v);return(t,n)=>{const o=G("router-link");return i(),u($,{tabs:I.value},{tabHeader:e(()=>[J("h1",M,[p(`
        Zone:

        `),c(b,{text:m.value.name},{default:e(()=>[c(o,{to:C.value},{default:e(()=>[p(f(m.value.name),1)]),_:1},8,["to"])]),_:1},8,["text"])])]),overview:e(()=>[c(Z,null,{default:e(()=>[(i(!0),g(d,null,w(m.value,(s,a)=>(i(),u(L,{key:a,term:k(z)(`http.api.property.${a}`)},{default:e(()=>[a==="status"?(i(),u(k(N),{key:0,appearance:s==="offline"?"danger":"success"},{default:e(()=>[p(f(s),1)]),_:2},1032,["appearance"])):a==="name"?(i(),u(b,{key:1,text:s},null,8,["text"])):(i(),g(d,{key:2},[p(f(s),1)],64))]),_:2},1032,["term"]))),128))]),_:1})]),insights:e(()=>[c(B,{"initially-open":0},{default:e(()=>[(i(!0),g(d,null,w(S.value,(s,a)=>(i(),u(x,{key:a},{"accordion-header":e(()=>[c(E,{details:s},null,8,["details"])]),"accordion-content":e(()=>[c(P,{details:s},null,8,["details"])]),_:2},1024))),128))]),_:1})]),config:e(()=>[_.value!==null?(i(),u(D,{key:0,id:"code-block-zone-config",language:"json",code:_.value,"is-searchable":"","query-key":"zone-config"},null,8,["code"])):H("",!0)]),warnings:e(()=>[c(F,{warnings:h.value},null,8,["warnings"])]),_:1},8,["tabs"])}}});export{oe as _};