import{d as B,r as p,o as t,m as c,w as a,b as i,P as x,ac as E,c as d,k as f,Y as C,e as n,t as r,S,U as I,F as y,ab as N,A as X,p as g,E as q,q as F}from"./index-4_tkunnb.js";import{F as T}from"./FilterBar-BDs3_pE7.js";import{S as L}from"./SummaryView-DH0w2y2j.js";const G={key:2,class:"stack"},K={class:"columns"},j={key:0},O={key:1},U=B({__name:"ServiceDetailView",setup(W){return(Y,Z)=>{const v=p("KCard"),h=p("XAction"),V=p("XIcon"),P=p("XActionGroup"),$=p("RouterView"),z=p("DataSource"),A=p("AppView"),R=p("RouteView");return t(),c(R,{name:"service-detail-view",params:{mesh:"",service:"",page:1,size:50,s:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({can:b,route:s,t:o,me:m})=>[i(A,null,{default:a(()=>[i(z,{src:`/meshes/${s.params.mesh}/service-insights/${s.params.service}`},{default:a(({data:_,error:w})=>[w?(t(),c(x,{key:0,error:w},null,8,["error"])):_===void 0?(t(),c(E,{key:1})):(t(),d("div",G,[i(v,null,{default:a(()=>{var l,u;return[f("div",K,[i(C,null,{title:a(()=>[n(r(o("http.api.property.status")),1)]),body:a(()=>[i(S,{status:_.status},null,8,["status"])]),_:2},1024),n(),i(C,null,{title:a(()=>[n(r(o("http.api.property.address")),1)]),body:a(()=>[_.addressPort?(t(),c(I,{key:0,text:_.addressPort},null,8,["text"])):(t(),d(y,{key:1},[n(r(o("common.detail.none")),1)],64))]),_:2},1024),n(),i(N,{online:((l=_.dataplanes)==null?void 0:l.online)??0,total:((u=_.dataplanes)==null?void 0:u.total)??0},{title:a(()=>[n(r(o("http.api.property.dataPlaneProxies")),1)]),_:2},1032,["online","total"])])]}),_:2},1024),n(),f("div",null,[f("h3",null,r(o("services.detail.data_plane_proxies")),1),n(),i(v,{class:"mt-4"},{default:a(()=>[i(z,{src:`/meshes/${s.params.mesh}/dataplanes/for/service-insight/${s.params.service}?page=${s.params.page}&size=${s.params.size}&search=${s.params.s}`},{default:a(({data:l,error:u})=>[u!==void 0?(t(),c(x,{key:0,error:u},null,8,["error"])):(t(),c(X,{key:1,class:"data-plane-collection","data-testid":"data-plane-collection","page-number":s.params.page,"page-size":s.params.size,headers:[{...m.get("headers.name"),label:"Name",key:"name"},{...m.get("headers.namespace"),label:"Namespace",key:"namespace"},...b("use zones")?[{...m.get("headers.zone"),label:"Zone",key:"zone"}]:[],{...m.get("headers.certificate"),label:"Certificate Info",key:"certificate"},{...m.get("headers.status"),label:"Status",key:"status"},{...m.get("headers.warnings"),label:"Warnings",key:"warnings",hideLabel:!0},{...m.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:l==null?void 0:l.items,total:l==null?void 0:l.total,error:u,"is-selected-row":e=>e.name===s.params.dataPlane,"summary-route-name":"service-data-plane-summary-view","empty-state-message":o("common.emptyState.message",{type:"Data Plane Proxies"}),"empty-state-cta-to":o("data-planes.href.docs.data_plane_proxy"),"empty-state-cta-text":o("common.documentation"),onChange:s.update,onResize:m.set},{toolbar:a(()=>[i(T,{class:"data-plane-proxy-filter",placeholder:"name:dataplane-name",query:s.params.s,fields:{name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},...b("use zones")&&{zone:{description:"filter by “kuma.io/zone” value"}}},onChange:e=>s.update({...Object.fromEntries(e.entries())})},null,8,["query","fields","onChange"])]),name:a(({row:e})=>[i(h,{"data-action":"",class:"name-link",to:{name:"service-data-plane-summary-view",params:{mesh:e.mesh,dataPlane:e.id},query:{page:s.params.page,size:s.params.size,s:s.params.s}}},{default:a(()=>[n(r(e.name),1)]),_:2},1032,["to"])]),namespace:a(({row:e})=>[n(r(e.namespace),1)]),zone:a(({row:e})=>[e.zone?(t(),c(h,{key:0,to:{name:"zone-cp-detail-view",params:{zone:e.zone}}},{default:a(()=>[n(r(e.zone),1)]),_:2},1032,["to"])):(t(),d(y,{key:1},[n(r(o("common.collection.none")),1)],64))]),certificate:a(({row:e})=>{var k;return[(k=e.dataplaneInsight.mTLS)!=null&&k.certificateExpirationTime?(t(),d(y,{key:0},[n(r(o("common.formats.datetime",{value:Date.parse(e.dataplaneInsight.mTLS.certificateExpirationTime)})),1)],64)):(t(),d(y,{key:1},[n(r(o("data-planes.components.data-plane-list.certificate.none")),1)],64))]}),status:a(({row:e})=>[i(S,{status:e.status},null,8,["status"])]),warnings:a(({row:e})=>[e.isCertExpired||e.warnings.length>0?(t(),c(V,{key:0,class:"mr-1",name:"warning"},{default:a(()=>[f("ul",null,[e.warnings.length>0?(t(),d("li",j,r(o("data-planes.components.data-plane-list.version_mismatch")),1)):g("",!0),n(),e.isCertExpired?(t(),d("li",O,r(o("data-planes.components.data-plane-list.cert_expired")),1)):g("",!0)])]),_:2},1024)):(t(),d(y,{key:1},[n(r(o("common.collection.none")),1)],64))]),actions:a(({row:e})=>[i(P,null,{default:a(()=>[i(h,{to:{name:"data-plane-detail-view",params:{dataPlane:e.id}}},{default:a(()=>[n(r(o("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["page-number","page-size","headers","items","total","error","is-selected-row","empty-state-message","empty-state-cta-to","empty-state-cta-text","onChange","onResize"])),n(),s.params.dataPlane?(t(),c($,{key:2},{default:a(e=>[i(L,{onClose:k=>s.replace({name:s.name,params:{mesh:s.params.mesh},query:{page:s.params.page,size:s.params.size,s:s.params.s}})},{default:a(()=>[typeof l<"u"?(t(),c(q(e.Component),{key:0,items:l.items},null,8,["items"])):g("",!0)]),_:2},1032,["onClose"])]),_:2},1024)):g("",!0)]),_:2},1032,["src"])]),_:2},1024)])]))]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}}),Q=F(U,[["__scopeId","data-v-bc3c1cb3"]]);export{Q as default};