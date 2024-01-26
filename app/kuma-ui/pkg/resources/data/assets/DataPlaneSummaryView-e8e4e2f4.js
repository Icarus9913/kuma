import{d as S,k as D,a as m,o as l,c as p,m as i,e as s,w as e,f as t,t as n,l as a,F as h,C as f,b as y,Z as T,p as k,Y as u,_ as P,y as V,O as C,s as R,v as z,a2 as B}from"./index-9325d193.js";import{a as $,K}from"./index-fce48c05.js";import{S as N}from"./StatusBadge-90b090a9.js";import{T as O}from"./TagList-f540ed23.js";import{T as x}from"./TextWithCopyButton-ea0e7729.js";import"./CopyButton-62822857.js";const L={class:"stack"},A={class:"stack-with-borders"},U={class:"status-with-reason"},E={key:0},F={class:"mt-4"},Z={class:"stack-with-borders"},G={key:1},W={class:"mt-4"},Y={class:"stack"},j={class:"mt-2 stack-with-borders"},q=S({__name:"DataPlaneSummary",props:{dataplaneOverview:{}},setup(c){const{t:o,formatIsoDate:w}=D(),r=c;return(b,I)=>{const g=m("KTooltip"),v=m("KBadge");return l(),p("div",L,[i("div",A,[s(u,{layout:"horizontal"},{title:e(()=>[t(n(a(o)("http.api.property.status")),1)]),body:e(()=>[i("div",U,[s(N,{status:r.dataplaneOverview.status},null,8,["status"]),t(),(l(!0),p(h,null,f([r.dataplaneOverview.dataplane.networking.inbounds.filter(d=>!d.health.ready)],d=>(l(),p(h,{key:d},[d.length>0?(l(),y(g,{key:0,class:"reason-tooltip","position-fixed":""},{content:e(()=>[i("ul",null,[(l(!0),p(h,null,f(d,_=>(l(),p("li",{key:`${_.service}:${_.port}`},n(a(o)("data-planes.routes.item.unhealthy_inbound",{service:_.service,port:_.port})),1))),128))])]),default:e(()=>[s(a(T),{color:a($),size:a(K),"hide-title":""},null,8,["color","size"]),t()]),_:2},1024)):k("",!0)],64))),128))])]),_:1}),t(),s(u,{layout:"horizontal"},{title:e(()=>[t(n(a(o)("data-planes.routes.item.last_updated")),1)]),body:e(()=>[t(n(a(w)(r.dataplaneOverview.modificationTime)),1)]),_:1})]),t(),r.dataplaneOverview.dataplane.networking.gateway?(l(),p("div",E,[i("h3",null,n(a(o)("data-planes.routes.item.gateway")),1),t(),i("div",F,[i("div",Z,[s(u,{layout:"horizontal"},{title:e(()=>[t(n(a(o)("http.api.property.tags")),1)]),body:e(()=>[s(O,{alignment:"right",tags:r.dataplaneOverview.dataplane.networking.gateway.tags},null,8,["tags"])]),_:1}),t(),s(u,{layout:"horizontal"},{title:e(()=>[t(n(a(o)("http.api.property.address")),1)]),body:e(()=>[s(x,{text:`${r.dataplaneOverview.dataplane.networking.address}`},null,8,["text"])]),_:1})])])])):k("",!0),t(),r.dataplaneOverview.dataplane.networking.inbounds.length>0?(l(),p("div",G,[i("h3",null,n(a(o)("data-planes.routes.item.inbounds")),1),t(),i("div",W,[i("div",Y,[(l(!0),p(h,null,f(r.dataplaneOverview.dataplane.networking.inbounds,(d,_)=>(l(),p("div",{key:_,class:"inbound"},[i("h4",null,[s(x,{text:d.tags["kuma.io/service"]},{default:e(()=>[t(n(a(o)("data-planes.routes.item.inbound_name",{service:d.tags["kuma.io/service"]})),1)]),_:2},1032,["text"])]),t(),i("div",j,[s(u,{layout:"horizontal"},{title:e(()=>[t(n(a(o)("http.api.property.status")),1)]),body:e(()=>[d.health.ready?(l(),y(v,{key:0,appearance:"success"},{default:e(()=>[t(n(a(o)("data-planes.routes.item.health.ready")),1)]),_:1})):(l(),y(v,{key:1,appearance:"danger"},{default:e(()=>[t(n(a(o)("data-planes.routes.item.health.not_ready")),1)]),_:1}))]),_:2},1024),t(),s(u,{layout:"horizontal"},{title:e(()=>[t(n(a(o)("http.api.property.tags")),1)]),body:e(()=>[s(O,{alignment:"right",tags:d.tags},null,8,["tags"])]),_:2},1024),t(),s(u,{layout:"horizontal"},{title:e(()=>[t(n(a(o)("http.api.property.address")),1)]),body:e(()=>[s(x,{text:d.addressPort},null,8,["text"])]),_:2},1024)])]))),128))])])])):k("",!0)])}}});const H=P(q,[["__scopeId","data-v-53b633ce"]]),J=c=>(R("data-v-21ad478f"),c=c(),z(),c),M={class:"summary-title-wrapper"},Q=J(()=>i("img",{"aria-hidden":"true",src:B},null,-1)),X={class:"summary-title"},tt={key:1,class:"stack"},et=S({__name:"DataPlaneSummaryView",props:{name:{},dataplaneOverview:{default:void 0}},setup(c){const{t:o}=D(),w=V(),r=c;return(b,I)=>{const g=m("RouteTitle"),v=m("RouterLink"),d=m("AppView"),_=m("RouteView");return l(),y(_,{name:a(w).name},{default:e(()=>[s(d,null,{title:e(()=>[i("div",M,[Q,t(),i("h2",X,[s(v,{to:{name:"data-plane-detail-view",params:{dataPlane:r.name}}},{default:e(()=>[s(g,{title:a(o)("data-planes.routes.item.title",{name:r.name})},null,8,["title"])]),_:1},8,["to"])])])]),default:e(()=>[t(),r.dataplaneOverview===void 0?(l(),y(C,{key:0},{message:e(()=>[i("p",null,n(a(o)("common.collection.summary.empty_message",{type:"Data Plane Proxy"})),1)]),default:e(()=>[t(n(a(o)("common.collection.summary.empty_title",{type:"Data Plane Proxy"}))+" ",1)]),_:1})):(l(),p("div",tt,[s(H,{class:"mt-4","dataplane-overview":r.dataplaneOverview},null,8,["dataplane-overview"])]))]),_:1})]),_:1},8,["name"])}}});const rt=P(et,[["__scopeId","data-v-21ad478f"]]);export{rt as default};