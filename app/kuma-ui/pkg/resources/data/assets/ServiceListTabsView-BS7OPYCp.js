import{q as f,r as t,o as a,m as r,w as s,b as n,c as w,F as V,s as h,n as v,e as i,t as x}from"./index-4_tkunnb.js";const A={};function b(k,R){const l=t("XAction"),_=t("XActionGroup"),p=t("RouterView"),d=t("AppView"),m=t("RouteView");return a(),r(m,{name:"service-list-tabs-view",params:{mesh:""}},{default:s(({route:o,t:u})=>[n(d,null,{actions:s(()=>[n(_,{expanded:!0},{default:s(()=>[(a(!0),w(V,null,h(o.children,({name:e})=>{var c;return a(),r(l,{key:e,class:v({active:((c=o.child())==null?void 0:c.name)===e}),to:{name:e,params:{mesh:o.params.mesh}},"data-testid":`${e}-sub-tab`},{default:s(()=>[i(x(u(`services.routes.items.navigation.${e}`)),1)]),_:2},1032,["class","to","data-testid"])}),128))]),_:2},1024)]),default:s(()=>[i(),n(p)]),_:2},1024)]),_:1})}const g=f(A,[["render",b]]);export{g as default};