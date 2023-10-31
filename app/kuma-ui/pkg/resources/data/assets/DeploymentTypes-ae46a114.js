import{O as f,a as V,b as h}from"./OnboardingPage-8895637f.js";import{d as z,J as w,L as x,f as C,y as G,h as R,r as s,o as u,i as r,w as e,j as o,n,p as d,H as T,q as D,t as S}from"./index-8bdef5fd.js";const M={class:"graph-list mb-6"},N={class:"radio-button-group"},O=z({__name:"DeploymentTypes",setup(B){const m=w(),c={standalone:x(),"multi-zone":m},_=C(),t=G(_("use zones")?"multi-zone":"standalone"),y=R(()=>c[t.value]);return(A,a)=>{const g=s("RouteTitle"),i=s("KRadio"),b=s("AppView"),v=s("RouteView");return u(),r(v,{name:"onboarding-deployment-types"},{default:e(({t:p})=>[o(g,{title:p("onboarding.routes.deployment-types.title")},null,8,["title"]),n(),o(b,null,{default:e(()=>[o(f,{"with-image":""},{header:e(()=>[o(V,null,{title:e(()=>[n(`
              Learn about deployments
            `)]),description:e(()=>[d("p",null,T(p("common.product.name"))+" can be deployed in standalone or multi-zone mode.",1)]),_:2},1024)]),content:e(()=>[d("div",M,[(u(),r(D(y.value)))]),n(),d("div",N,[o(i,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),name:"mode","selected-value":"standalone","data-testid":"onboarding-standalone-radio-button"},{default:e(()=>[n(`
              Standalone deployment
            `)]),_:1},8,["modelValue"]),n(),o(i,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=l=>t.value=l),name:"mode","selected-value":"multi-zone","data-testid":"onboarding-multi-zone-radio-button"},{default:e(()=>[n(`
              Multi-zone deployment
            `)]),_:1},8,["modelValue"])])]),navigation:e(()=>[o(h,{"next-step":"onboarding-configuration-types","previous-step":"onboarding-welcome"})]),_:2},1024)]),_:2},1024)]),_:1})}}});const L=S(O,[["__scopeId","data-v-540febfd"]]);export{L as default};