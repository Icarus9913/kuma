import{t as r,S as l,d as u,g as p,r as i,o as f,i as g,a4 as m,w as s,n,H as c,k as o,j as b,q as v,a7 as B}from"./index-9f06f70e.js";const S={};function y(e,t){return l(e.$slots,"default")}const x=r(S,[["render",y]]),C=u({__name:"StatusBadge",props:{status:{}},setup(e){const{t}=p(),_={online:"success",offline:"danger",partially_degraded:"warning",not_available:"neutral",disabled:"neutral"},a=e;return(A,h)=>{const d=i("KBadge");return f(),g(v(a.status==="not_available"?o(B):x),null,m({default:s(()=>[b(d,{class:"status-badge",appearance:_[a.status],"data-testid":"status-badge"},{default:s(()=>[n(c(o(t)(`http.api.value.${a.status}`)),1)]),_:1},8,["appearance"]),n()]),_:2},[a.status==="not_available"?{name:"content",fn:s(()=>[n(c(o(t)("components.status-badge.tooltip.not_available")),1)]),key:"0"}:void 0]),1024)}}});const D=r(C,[["__scopeId","data-v-b7d5eecb"]]);export{D as S};