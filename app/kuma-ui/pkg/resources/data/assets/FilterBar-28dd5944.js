var ie=Object.defineProperty;var oe=(s,i,t)=>i in s?ie(s,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[i]=t;var R=(s,i,t)=>(oe(s,typeof i!="symbol"?i+"":i,t),t);import{K as B}from"./index-52545d1d.js";import{d as ee,l as le,a as W,o as f,b as Z,a0 as re,w as S,r as te,e as w,f as m,t as _,c as g,F as z,q as p,p as k,B as se,s as U,V as ue,_ as ae,m as A,N as Q,aa as Y,as as ce,at as de,au as pe,n as G,av as fe,aw as me,H as ge,T as he,z as ve,A as ye}from"./index-c2f88a6f.js";import{A as be}from"./AppCollection-fc44f913.js";import{S as ke}from"./StatusBadge-4ecc75dc.js";import{T as _e}from"./TagList-60c8b15c.js";import{_ as Se}from"./WarningIcon.vue_vue_type_script_setup_true_lang-5a42a90e.js";import{d as Te,a as Ce,c as we,C as xe}from"./dataplane-dcd0858b.js";const Ie={key:0},Le=ee({__name:"DataPlaneList",props:{total:{default:0},pageNumber:{},pageSize:{},items:{},error:{},isSelectedRow:{type:[Function,null],default:null},summaryRouteName:{},canUseZones:{type:Boolean}},emits:["change"],setup(s,{emit:i}){const{t,formatIsoDate:T}=le(),r=s,a=i;function o(h){return h.map(l=>{var q,F,$,M,N,j,P;const{mesh:c,name:v}=l,n=(q=l.dataplane.networking.gateway)!=null&&q.type?t(`data-planes.type.${l.dataplane.networking.gateway.type.toLowerCase()}`):t("data-planes.type.standard"),y=Te(l.dataplane),x=y.filter(b=>b.label==="kuma.io/service"),{status:H}=Ce(l.dataplane,l.dataplaneInsight),O=((F=l.dataplaneInsight)==null?void 0:F.subscriptions)??[],J={dpVersion:null,version:null},I=O.reduce((b,C)=>{var K;return{dpVersion:((K=C.version)==null?void 0:K.kumaDp.version)||b.dpVersion,version:C.version||b.version}},J);let D;(M=($=l.dataplaneInsight)==null?void 0:$.mTLS)!=null&&M.certificateExpirationTime?D=T(l.dataplaneInsight.mTLS.certificateExpirationTime):D=t("data-planes.components.data-plane-list.certificate.none");const L={name:v,type:n,mesh:c,services:x,status:H,warnings:{version_mismatch:!1,cert_expired:!1},certificate:D};if(I.version){const{kind:b}=we(I.version);b!==xe&&(L.warnings.version_mismatch=!0)}r.canUseZones&&I.dpVersion&&y.find(C=>C.label==="kuma.io/zone")&&typeof((N=I.version)==null?void 0:N.kumaDp.kumaCpCompatible)=="boolean"&&!I.version.kumaDp.kumaCpCompatible&&(L.warnings.version_mismatch=!0);const E=(P=(j=l.dataplaneInsight)==null?void 0:j.mTLS)==null?void 0:P.certificateExpirationTime;return E&&Date.now()>new Date(E).getTime()&&(L.warnings.cert_expired=!0),L})}return(h,l)=>{const c=W("RouterLink"),v=W("KTooltip");return f(),Z(be,{"empty-state-message":p(t)("common.emptyState.message",{type:"Data Plane Proxies"}),"empty-state-cta-to":p(t)("data-planes.href.docs.data_plane_proxy"),"empty-state-cta-text":p(t)("common.documentation"),headers:[{label:"Name",key:"name"},{label:"Type",key:"type"},{label:"Services",key:"services"},{label:"Certificate Info",key:"certificate"},{label:"Status",key:"status"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Details",key:"details",hideLabel:!0}],"page-number":r.pageNumber,"page-size":r.pageSize,total:r.total,items:r.items?o(r.items):void 0,error:r.error,"is-selected-row":r.isSelectedRow,onChange:l[0]||(l[0]=n=>a("change",n))},re({name:S(({row:n})=>[w(c,{to:{name:r.summaryRouteName,params:{mesh:n.mesh,dataPlane:n.name},query:{page:r.pageNumber,size:r.pageSize}}},{default:S(()=>[m(_(n.name),1)]),_:2},1032,["to"])]),services:S(({row:n})=>[n.services.length>0?(f(),Z(_e,{key:0,tags:n.services,"should-truncate":"","hide-label-key":""},null,8,["tags"])):(f(),g(z,{key:1},[m(_(p(t)("common.collection.none")),1)],64))]),status:S(({row:n})=>[w(ke,{status:n.status},null,8,["status"])]),warnings:S(({row:n})=>[Object.values(n.warnings).some(y=>y)?(f(),Z(v,{key:0},{content:S(()=>[k("ul",null,[(f(!0),g(z,null,se(n.warnings,(y,x)=>(f(),g(z,{key:x},[y?(f(),g("li",Ie,_(p(t)(`data-planes.components.data-plane-list.${x}`)),1)):U("",!0)],64))),128))])]),default:S(()=>[m(),w(Se,{class:"mr-1",size:p(B),"hide-title":""},null,8,["size"])]),_:2},1024)):(f(),g(z,{key:1},[m(_(p(t)("common.collection.none")),1)],64))]),details:S(({row:n})=>[w(c,{class:"details-link","data-testid":"details-link",to:{name:"data-plane-detail-view",params:{dataPlane:n.name}}},{default:S(()=>[m(_(p(t)("common.collection.details_link"))+" ",1),w(p(ue),{display:"inline-block",decorative:"",size:p(B)},null,8,["size"])]),_:2},1032,["to"])]),_:2},[h.$slots.toolbar?{name:"toolbar",fn:S(()=>[te(h.$slots,"toolbar",{},void 0,!0)]),key:"0"}:void 0]),1032,["empty-state-message","empty-state-cta-to","empty-state-cta-text","page-number","page-size","total","items","error","is-selected-row"])}}});const at=ae(Le,[["__scopeId","data-v-f6ba552d"]]);function Ae(s,i,t){return Math.max(i,Math.min(s,t))}const De=["ControlLeft","ControlRight","ShiftLeft","ShiftRight","AltLeft"];class Fe{constructor(i,t){R(this,"commands");R(this,"keyMap");R(this,"boundTriggerShortcuts");this.commands=t,this.keyMap=Object.fromEntries(Object.entries(i).map(([T,r])=>[T.toLowerCase(),r])),this.boundTriggerShortcuts=this.triggerShortcuts.bind(this)}registerListener(){document.addEventListener("keydown",this.boundTriggerShortcuts)}unRegisterListener(){document.removeEventListener("keydown",this.boundTriggerShortcuts)}triggerShortcuts(i){Ne(i,this.keyMap,this.commands)}}function Ne(s,i,t){const T=ze(s.code),r=[s.ctrlKey?"ctrl":"",s.shiftKey?"shift":"",s.altKey?"alt":"",T].filter(h=>h!=="").join("+"),a=i[r];if(!a)return;const o=t[a];o.isAllowedContext&&!o.isAllowedContext(s)||(o.shouldPreventDefaultAction&&s.preventDefault(),!(o.isDisabled&&o.isDisabled())&&o.trigger(s))}function ze(s){return De.includes(s)?"":s.replace(/^Key/,"").toLowerCase()}function Be(s,i){const t=" "+s,T=t.matchAll(/ ([-\s\w]+):\s*/g),r=[];for(const a of Array.from(T)){if(a.index===void 0)continue;const o=Ee(a[1]);if(i.length>0&&!i.includes(o))throw new Error(`Unknown field “${o}”. Known fields: ${i.join(", ")}`);const h=a.index+a[0].length,l=t.substring(h);let c;if(/^\s*["']/.test(l)){const n=l.match(/['"](.*?)['"]/);if(n!==null)c=n[1];else throw new Error(`Quote mismatch for field “${o}”.`)}else{const n=l.indexOf(" "),y=n===-1?l.length:n;c=l.substring(0,y)}c!==""&&r.push([o,c])}return r}function Ee(s){return s.trim().replace(/\s+/g,"-").replace(/-[a-z]/g,(i,t)=>t===0?i:i.substring(1).toUpperCase())}let X=0;const qe=(s="unique")=>(X++,`${s}-${X}`),ne=s=>(ve("data-v-349996e3"),s=s(),ye(),s),$e=ne(()=>k("span",{class:"visually-hidden"},"Focus filter",-1)),Me={class:"k-filter-icon"},je=["for"],Pe=["id","placeholder"],Ke={key:0,class:"k-suggestion-box","data-testid":"k-filter-bar-suggestion-box"},Ve={class:"k-suggestion-list"},Re={key:0,class:"k-filter-bar-error"},Qe={key:0},Ue=["title","data-filter-field"],He={class:"visually-hidden"},Oe=ne(()=>k("span",{class:"visually-hidden"},"Clear query",-1)),Je=ee({__name:"FilterBar",props:{id:{type:String,required:!1,default:()=>qe("k-filter-bar")},fields:{type:Object,required:!0},placeholder:{type:String,required:!1,default:null},query:{type:String,required:!1,default:""}},emits:["fields-change"],setup(s,{emit:i}){const t=s,T=i,r=A(null),a=A(null),o=A(t.query),h=A([]),l=A(null),c=A(!1),v=A(-1),n=Q(()=>Object.keys(t.fields)),y=Q(()=>Object.entries(t.fields).slice(0,5).map(([e,u])=>({fieldName:e,...u}))),x=Q(()=>n.value.length>0?`Filter by ${n.value.join(", ")}`:"Filter"),H=Q(()=>t.placeholder??x.value);Y(()=>h.value,function(e,u){K(e,u)||(l.value=null,T("fields-change",{fields:e,query:o.value}))}),Y(()=>o.value,function(){o.value===""&&(l.value=null),c.value=!0});const O={Enter:"submitQuery",Escape:"closeSuggestionBox",ArrowDown:"jumpToNextSuggestion",ArrowUp:"jumpToPreviousSuggestion"},J={submitQuery:{trigger:L,isAllowedContext(e){return a.value!==null&&e.composedPath().includes(a.value)},shouldPreventDefaultAction:!0},jumpToNextSuggestion:{trigger:E,isAllowedContext(e){return a.value!==null&&e.composedPath().includes(a.value)},shouldPreventDefaultAction:!0},jumpToPreviousSuggestion:{trigger:q,isAllowedContext(e){return a.value!==null&&e.composedPath().includes(a.value)},shouldPreventDefaultAction:!0},closeSuggestionBox:{trigger:b,isAllowedContext(e){return r.value!==null&&e.composedPath().includes(r.value)}}};function I(){const e=new Fe(O,J);ge(function(){e.registerListener()}),he(function(){e.unRegisterListener()}),C(o.value)}I();function D(e){const u=e.target;C(u.value)}function L(){if(a.value instanceof HTMLInputElement)if(v.value===-1)C(a.value.value),c.value=!1;else{const e=y.value[v.value].fieldName;e&&N(a.value,e)}}function E(){F(1)}function q(){F(-1)}function F(e){v.value=Ae(v.value+e,-1,y.value.length-1)}function $(){a.value instanceof HTMLInputElement&&a.value.focus()}function M(e){const d=e.currentTarget.getAttribute("data-filter-field");d&&a.value instanceof HTMLInputElement&&N(a.value,d)}function N(e,u){const d=o.value===""||o.value.endsWith(" ")?"":" ";o.value+=d+u+":",e.focus(),v.value=-1}function j(){o.value="",a.value instanceof HTMLInputElement&&(a.value.value="",a.value.focus(),C(""))}function P(e){e.relatedTarget===null&&b(),r.value instanceof HTMLElement&&e.relatedTarget instanceof Node&&!r.value.contains(e.relatedTarget)&&b()}function b(){c.value=!1}function C(e){l.value=null;try{const u=Be(e,n.value);u.sort((d,V)=>d[0].localeCompare(V[0])),h.value=u}catch(u){if(u instanceof Error)l.value=u,c.value=!0;else throw u}}function K(e,u){return JSON.stringify(e)===JSON.stringify(u)}return(e,u)=>(f(),g("div",{ref_key:"filterBar",ref:r,class:"k-filter-bar","data-testid":"k-filter-bar"},[k("button",{class:"k-focus-filter-input-button",title:"Focus filter",type:"button","data-testid":"k-filter-bar-focus-filter-input-button",onClick:$},[$e,m(),k("span",Me,[w(p(ce),{decorative:"","data-testid":"k-filter-bar-filter-icon","hide-title":"",size:p(B)},null,8,["size"])])]),m(),k("label",{for:`${t.id}-filter-bar-input`,class:"visually-hidden"},[te(e.$slots,"default",{},()=>[m(_(x.value),1)],!0)],8,je),m(),de(k("input",{id:`${t.id}-filter-bar-input`,ref_key:"filterInput",ref:a,"onUpdate:modelValue":u[0]||(u[0]=d=>o.value=d),class:"k-filter-bar-input",type:"text",placeholder:H.value,"data-testid":"k-filter-bar-filter-input",onFocus:u[1]||(u[1]=d=>c.value=!0),onBlur:P,onChange:D},null,40,Pe),[[pe,o.value]]),m(),c.value?(f(),g("div",Ke,[k("div",Ve,[l.value!==null?(f(),g("p",Re,_(l.value.message),1)):(f(),g("button",{key:1,class:G(["k-submit-query-button",{"k-submit-query-button-is-selected":v.value===-1}]),title:"Submit query",type:"button","data-testid":"k-filter-bar-submit-query-button",onClick:L},`
          Submit `+_(o.value),3)),m(),(f(!0),g(z,null,se(y.value,(d,V)=>(f(),g("div",{key:`${t.id}-${V}`,class:G(["k-suggestion-list-item",{"k-suggestion-list-item-is-selected":v.value===V}])},[k("b",null,_(d.fieldName),1),d.description!==""?(f(),g("span",Qe,": "+_(d.description),1)):U("",!0),m(),k("button",{class:"k-apply-suggestion-button",title:`Add ${d.fieldName}:`,type:"button","data-filter-field":d.fieldName,"data-testid":"k-filter-bar-apply-suggestion-button",onClick:M},[k("span",He,"Add "+_(d.fieldName)+":",1),m(),w(p(fe),{decorative:"","hide-title":"",size:p(B)},null,8,["size"])],8,Ue)],2))),128))])])):U("",!0),m(),o.value!==""?(f(),g("button",{key:1,class:"k-clear-query-button",title:"Clear query",type:"button","data-testid":"k-filter-bar-clear-query-button",onClick:j},[Oe,m(),w(p(me),{decorative:"","hide-title":"",size:p(B)},null,8,["size"])])):U("",!0)],512))}});const nt=ae(Je,[["__scopeId","data-v-349996e3"]]);export{at as D,nt as F};