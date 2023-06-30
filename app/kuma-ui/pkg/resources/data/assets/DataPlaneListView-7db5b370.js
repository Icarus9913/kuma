import{d as V,u as h,q as r,c as A,o as I,a as S,w as y,h as u,b,g as G,P as k}from"./index-915d42a5.js";import{D as N}from"./DataPlaneList-0f5db00c.js";import{h as q,i as O,f as B,_ as R}from"./RouteView.vue_vue_type_script_setup_true_lang-ce7f15c9.js";import{_ as $}from"./RouteTitle.vue_vue_type_script_setup_true_lang-534dcac2.js";import{Q as c}from"./QueryParameter-70743f73.js";import"./kongponents.es-c3c87d30.js";import"./ContentWrapper-3f7f79c4.js";import"./DataOverview-34bb7afc.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-3707b324.js";import"./ErrorBlock-4e13de22.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-324eb686.js";import"./TagList-6f2d054a.js";import"./StatusBadge-0f4b6b93.js";import"./DefinitionListItem-f8be772b.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-daafe192.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-97797141.js";import"./TextWithCopyButton-ed532790.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-3238b898.js";const ie=V({__name:"DataPlaneListView",props:{selectedDppName:{type:String,required:!1,default:null},gatewayType:{type:String,required:!1,default:"true"},offset:{type:Number,required:!1,default:0},isGatewayView:{type:Boolean,required:!1,default:!1}},setup(w){const a=w,g=q(),{t:v}=O(),_={name:{description:"filter by name or parts of a name"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},zone:{description:"filter by “kuma.io/zone” value"}},D={protocol:{description:"filter by “kuma.io/protocol” value"}},E={},F=h(),l=r([]),o=r(!0),f=r(null),n=r(null),m=r(a.offset),L=A(()=>({..._,...a.isGatewayView?E:D}));function T(){const t=c.get("filterFields"),s=t!==null?JSON.parse(t):{};d(a.offset,{...s,gateway:a.gatewayType})}T();async function d(t,s={}){m.value=t,c.set("offset",t>0?t:null),c.set("gatewayType",s.gateway==="true"?"all":s.gateway),o.value=!0;const p=F.params.mesh,i=x(s,k,t,a.isGatewayView);try{const{items:e,next:P}=await g.getAllDataplaneOverviewsFromMesh({mesh:p},i);n.value=P,l.value=e??[]}catch(e){e instanceof Error?f.value=e:console.error(e),l.value=[],n.value=null}finally{o.value=!1}}function x(t,s,p,i){const e={...t,size:s,offset:p};return i&&(!("gateway"in e)||e.gateway==="false")?e.gateway="true":i||(e.gateway="false"),e}return(t,s)=>(I(),S(R,{module:a.isGatewayView?"gateways":"data-planes"},{default:y(()=>[u($,{title:b(v)(`${a.isGatewayView?"gateways":"data-planes"}.routes.items.title`)},null,8,["title"]),G(),u(B,null,{default:y(()=>[u(N,{"data-plane-overviews":l.value,"is-loading":o.value,error:f.value,"next-url":n.value,"page-offset":m.value,"selected-dpp-name":a.selectedDppName,"is-gateway-view":a.isGatewayView,"gateway-type":a.gatewayType,"dpp-filter-fields":L.value,onLoadData:d},null,8,["data-plane-overviews","is-loading","error","next-url","page-offset","selected-dpp-name","is-gateway-view","gateway-type","dpp-filter-fields"])]),_:1})]),_:1},8,["module"]))}});export{ie as default};