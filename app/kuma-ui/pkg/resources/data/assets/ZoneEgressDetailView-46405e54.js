import{d as h,c as b,o as a,a as i,w as e,h as s,b as r,H as u,q as f,g as n,t as p,e as x,F as k,s as $}from"./index-e343f513.js";import{a as O,A as B,S,b as A}from"./SubscriptionHeader-726ac4e0.js";import{g as w,D as g,S as D,T as I,A as q,o as V,s as C,E as T,t as F,_ as N}from"./RouteView.vue_vue_type_script_setup_true_lang-c604b281.js";import{E as v}from"./EnvoyData-424f8b64.js";import{_ as H}from"./TabsWidget.vue_vue_type_style_index_0_lang-216949fe.js";import{g as L}from"./dataplane-30467516.js";import{_ as Z}from"./RouteTitle.vue_vue_type_script_setup_true_lang-69869a1a.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-e9d2af77.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-0f5b13ab.js";const j={class:"columns",style:{"--columns":"3"}},R=h({__name:"ZoneEgressDetails",props:{zoneEgressOverview:{type:Object,required:!0}},setup(_){const t=_,{t:o}=w(),y=[{hash:"#overview",title:o("zone-egresses.routes.item.tabs.overview")},{hash:"#insights",title:o("zone-egresses.routes.item.tabs.insights")},{hash:"#xds-configuration",title:o("zone-egresses.routes.item.tabs.xds_configuration")},{hash:"#envoy-stats",title:o("zone-egresses.routes.item.tabs.stats")},{hash:"#envoy-clusters",title:o("zone-egresses.routes.item.tabs.clusters")}],c=b(()=>L(t.zoneEgressOverview.zoneEgressInsight)),d=b(()=>{var l;const m=((l=t.zoneEgressOverview.zoneEgressInsight)==null?void 0:l.subscriptions)??[];return Array.from(m).reverse()});return(m,l)=>(a(),i(H,{tabs:y},{overview:e(()=>[s(r(u),null,{body:e(()=>[f("div",j,[s(g,null,{title:e(()=>[n(p(r(o)("http.api.property.status")),1)]),body:e(()=>[s(D,{status:c.value},null,8,["status"])]),_:1}),n(),s(g,null,{title:e(()=>[n(p(r(o)("http.api.property.name")),1)]),body:e(()=>[s(I,{text:t.zoneEgressOverview.name},null,8,["text"])]),_:1}),n(),s(g,null,{title:e(()=>[n(p(r(o)("http.api.property.type")),1)]),body:e(()=>[n(p(t.zoneEgressOverview.type),1)]),_:1})])]),_:1})]),insights:e(()=>[s(r(u),null,{body:e(()=>[s(O,{"initially-open":0},{default:e(()=>[(a(!0),x(k,null,$(d.value,(z,E)=>(a(),i(B,{key:E},{"accordion-header":e(()=>[s(S,{subscription:z},null,8,["subscription"])]),"accordion-content":e(()=>[s(A,{subscription:z,"is-discovery-subscription":""},null,8,["subscription"])]),_:2},1024))),128))]),_:1})]),_:1})]),"xds-configuration":e(()=>[s(r(u),null,{body:e(()=>[s(v,{src:`/zone-egresses/${t.zoneEgressOverview.name}/data-path/xds`,"query-key":"envoy-data-xds-zone-egress"},null,8,["src"])]),_:1})]),"envoy-stats":e(()=>[s(r(u),null,{body:e(()=>[s(v,{src:`/zone-egresses/${t.zoneEgressOverview.name}/data-path/stats`,"query-key":"envoy-data-stats-zone-egress"},null,8,["src"])]),_:1})]),"envoy-clusters":e(()=>[s(r(u),null,{body:e(()=>[s(v,{src:`/zone-egresses/${t.zoneEgressOverview.name}/data-path/clusters`,"query-key":"envoy-data-clusters-zone-egress"},null,8,["src"])]),_:1})]),_:1}))}}),Y=h({__name:"ZoneEgressDetailView",setup(_){const{t}=w();return(o,y)=>(a(),i(N,{name:"zone-egress-detail-view","data-testid":"zone-egress-detail-view"},{default:e(({route:c})=>[s(q,{breadcrumbs:[{to:{name:"zone-egress-list-view"},text:r(t)("zone-egresses.routes.item.breadcrumbs")}]},{title:e(()=>[f("h1",null,[s(Z,{title:r(t)("zone-egresses.routes.item.title",{name:c.params.zoneEgress}),render:!0},null,8,["title"])])]),default:e(()=>[n(),s(V,{src:`/zone-egresses/${c.params.zoneEgress}`},{default:e(({data:d,isLoading:m,error:l})=>[m?(a(),i(C,{key:0})):l!==void 0?(a(),i(T,{key:1,error:l},null,8,["error"])):d===void 0?(a(),i(F,{key:2})):(a(),i(R,{key:3,"zone-egress-overview":d,"data-testid":"detail-view-details"},null,8,["zone-egress-overview"]))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"])]),_:1}))}});export{Y as default};