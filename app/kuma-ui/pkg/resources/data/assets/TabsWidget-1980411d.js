import{d as v,r as B,j as k,o as t,c as l,k as f,F as T,R as p,x as E,e as _,g as c,a as d,Q as S,z as q,w as i,u as o,M as w,b as x,ak as V,af as N,ag as $,N as C,O as L,H as I}from"./index-0be248c4.js";import{E as O}from"./ErrorBlock-f4ceb6b7.js";import{_ as W}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-e65555f3.js";import{Q as b}from"./QueryParameter-70743f73.js";const H=a=>(C("data-v-a4e17a4a"),a=a(),L(),a),M={class:"tab-container","data-testid":"tab-container"},Q={key:0,class:"tab__header"},z={class:"tab__content-container"},A={class:"flex items-center with-warnings"},F=H(()=>c("span",null,"Warnings",-1)),j=v({__name:"TabsWidget",props:{tabs:{type:Array,required:!0},isLoading:{type:Boolean,required:!1,default:!1},isEmpty:{type:Boolean,required:!1,default:!1},hasError:{type:Boolean,required:!1,default:!1},error:{type:[Error,null],required:!1,default:null},hasBorder:{type:Boolean,required:!1,default:!1},initialTabOverride:{type:String,required:!1,default:null}},emits:["on-tab-change"],setup(a,{emit:m}){const n=a,s=B(""),g=k(()=>n.tabs.map(e=>e.hash.replace("#","")));function y(){const e=b.get("tab");e!==null?s.value=`#${e}`:n.initialTabOverride!==null&&(s.value=`#${n.initialTabOverride}`)}y();function h(e){b.set("tab",e.substring(1)),N.logger.info($.TABS_TAB_CHANGE,{data:{newActiveTabHash:e}}),m("on-tab-change",e)}return(e,u)=>(t(),l("div",M,[a.isLoading?(t(),f(W,{key:0})):a.error!==null?(t(),f(O,{key:1,error:a.error},null,8,["error"])):(t(),l(T,{key:2},[e.$slots.tabHeader?(t(),l("header",Q,[p(e.$slots,"tabHeader",{},void 0,!0)])):E("",!0),_(),c("div",z,[d(o(V),{modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=r=>s.value=r),tabs:a.tabs,onChanged:h},S({"warnings-anchor":i(()=>[c("span",A,[d(o(x),{class:"mr-1",icon:"warning",color:"var(--black-500)","secondary-color":"var(--yellow-300)",size:"16"}),_(),F])]),_:2},[q(o(g),(r,G)=>({name:r,fn:i(()=>[d(o(w),{"border-variant":"noBorder"},{body:i(()=>[p(e.$slots,r,{},void 0,!0)]),_:2},1024)])}))]),1032,["modelValue","tabs"])])],64))]))}});const J=I(j,[["__scopeId","data-v-a4e17a4a"]]);export{J as T};