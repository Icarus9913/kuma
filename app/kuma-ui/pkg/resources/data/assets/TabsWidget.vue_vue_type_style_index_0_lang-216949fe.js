import{d as f,j as p,c as g,o as m,a as h,C as b,s as _,w,A as y,b as S,W as v,a9 as C}from"./index-e343f513.js";import{H as P}from"./RouteView.vue_vue_type_script_setup_true_lang-c604b281.js";const l={get(a){const e=new URL(window.location.href).searchParams.get(a);return e!==null?e.replaceAll("+"," "):null},set(a,s){const e=new URL(window.location.href);s!=null?e.searchParams.set(a,String(s).replace(/\s/g,"+")):e.searchParams.has(a)&&e.searchParams.delete(a),window.history.replaceState({path:e.href},"",e.href)}},L=f({__name:"TabsWidget",props:{tabs:{type:Array,required:!0}},emits:["on-tab-change"],setup(a,{emit:s}){const e=a,c=P(),n=p(""),u=g(()=>e.tabs.map(t=>t.hash.replace("#","")));function i(){const t=l.get("tab");t!==null&&(n.value=`#${t}`)}i();function d(t){l.set("tab",t.substring(1)),c.info(C.TABS_TAB_CHANGE,{data:{newActiveTabHash:t}}),s("on-tab-change",t)}return(t,o)=>(m(),h(S(v),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=r=>n.value=r),tabs:a.tabs,onChanged:d},b({_:2},[_(u.value,(r,x)=>({name:r,fn:w(()=>[y(t.$slots,r)])}))]),1032,["modelValue","tabs"]))}});export{L as _};