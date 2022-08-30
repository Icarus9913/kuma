(self["webpackChunkkuma_gui"]=self["webpackChunkkuma_gui"]||[]).push([[684],{73570:function(e,t,n){var a=n(49237),i="  ";function s(e){var t=typeof e;return e instanceof Array?"array":"string"==t?"string":"boolean"==t?"boolean":"number"==t?"number":"undefined"==t||null===e?"null":"hash"}function o(e,t){var n=s(e);switch(n){case"array":r(e,t);break;case"hash":l(e,t);break;case"string":u(e,t);break;case"null":t.push("null");break;case"number":t.push(e.toString());break;case"boolean":t.push(e?"true":"false");break}}function r(e,t){for(var n=0;n<e.length;n++){var a=e[n],s=[];o(a,s);for(var r=0;r<s.length;r++)t.push((0==r?"- ":i)+s[r])}}function l(e,t){for(var n in e){var a=[];if(e.hasOwnProperty(n)){var r=e[n];o(r,a);var l=s(r);if("string"==l||"null"==l||"number"==l||"boolean"==l)t.push(c(n)+": "+a[0]);else{t.push(c(n)+": ");for(var u=0;u<a.length;u++)t.push(i+a[u])}}}}function c(e){return e.match(/^[\w]+$/)?e:a.requiresDoubleQuoting(e)?a.escapeWithDoubleQuotes(e):a.requiresSingleQuoting(e)?a.escapeWithSingleQuotes(e):e}function u(e,t){t.push(c(e))}var p=function(e){"string"==typeof e&&(e=JSON.parse(e));var t=[];return o(e,t),t.join("\n")};e.exports=p},99997:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var a=n(70821);const i=e=>((0,a.dD)("data-v-487d5c0d"),e=e(),(0,a.Cn)(),e),s={class:"yaml-view"},o={key:0,class:"yaml-view-content"},r=(0,a.Uk)(" Copy Universal YAML "),l=i((()=>(0,a._)("div",null,[(0,a._)("p",null,"Entity copied to clipboard!")],-1))),c=(0,a.Uk)(" Copy Kubernetes YAML "),u=i((()=>(0,a._)("div",null,[(0,a._)("p",null,"Entity copied to clipboard!")],-1))),p={key:1},h={class:"card-icon mb-3"},d=(0,a.Uk)(" Data Loading... "),y={class:"card-icon mb-3"},m=(0,a.Uk)(" There is no data to display. "),g={class:"card-icon mb-3"},f=(0,a.Uk)(" An error has occurred while trying to load this data. ");function w(e,t,n,i,w,b){const E=(0,a.up)("KButton"),v=(0,a.up)("KPop"),k=(0,a.up)("KClipboardProvider"),_=(0,a.up)("CodeBlock"),x=(0,a.up)("KTabs"),S=(0,a.up)("KCard"),C=(0,a.up)("KIcon"),L=(0,a.up)("KEmptyState");return(0,a.wg)(),(0,a.iD)("div",s,[b.isReady?((0,a.wg)(),(0,a.iD)("div",o,[n.isLoading||n.isEmpty?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(S,{key:0,title:b.yamlTitle,"border-variant":"noBorder"},{body:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)(x,{key:e.environment,modelValue:b.activeTab.hash,"onUpdate:modelValue":t[0]||(t[0]=e=>b.activeTab.hash=e),tabs:w.tabs},{universal:(0,a.w5)((()=>[(0,a.Wm)(k,null,{default:(0,a.w5)((({copyToClipboard:e})=>[(0,a.Wm)(v,{placement:"bottom"},{content:(0,a.w5)((()=>[l])),default:(0,a.w5)((()=>[(0,a.Wm)(E,{class:"copy-button",appearance:"primary",size:"small",onClick:()=>{e(b.yamlContent.universal)}},{default:(0,a.w5)((()=>[r])),_:2},1032,["onClick"])])),_:2},1024)])),_:1}),(0,a.Wm)(_,{language:"yaml",code:b.yamlContent.universal},null,8,["code"])])),kubernetes:(0,a.w5)((()=>[(0,a.Wm)(k,null,{default:(0,a.w5)((({copyToClipboard:e})=>[(0,a.Wm)(v,{placement:"bottom"},{content:(0,a.w5)((()=>[u])),default:(0,a.w5)((()=>[(0,a.Wm)(E,{class:"copy-button",appearance:"primary",size:"small",onClick:()=>{e(b.yamlContent.kubernetes)}},{default:(0,a.w5)((()=>[c])),_:2},1032,["onClick"])])),_:2},1024)])),_:1}),(0,a.Wm)(_,{language:"yaml",code:b.yamlContent.kubernetes},null,8,["code"])])),_:1},8,["modelValue","tabs"]))])),_:1},8,["title"]))])):(0,a.kq)("",!0),!0===n.loaders?((0,a.wg)(),(0,a.iD)("div",p,[n.isLoading?((0,a.wg)(),(0,a.j4)(L,{key:0,"cta-is-hidden":""},{title:(0,a.w5)((()=>[(0,a._)("div",h,[(0,a.Wm)(C,{icon:"spinner",color:"rgba(0, 0, 0, 0.1)",size:"42"})]),d])),_:1})):(0,a.kq)("",!0),n.isEmpty&&!n.isLoading?((0,a.wg)(),(0,a.j4)(L,{key:1,"cta-is-hidden":""},{title:(0,a.w5)((()=>[(0,a._)("div",y,[(0,a.Wm)(C,{class:"kong-icon--centered",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"42"})]),m])),_:1})):(0,a.kq)("",!0),n.hasError?((0,a.wg)(),(0,a.j4)(L,{key:2,"cta-is-hidden":""},{title:(0,a.w5)((()=>[(0,a._)("div",g,[(0,a.Wm)(C,{class:"kong-icon--centered",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"42"})]),f])),_:1})):(0,a.kq)("",!0)])):(0,a.kq)("",!0)])}var b=n(33907),E=n(73570),v=n.n(E),k=n(21743),_={name:"YamlView",components:{CodeBlock:k.Z},props:{title:{type:String,default:null},content:{type:Object,default:null},loaders:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1}},data(){return{tabs:[{hash:"#universal",title:"Universal"},{hash:"#kubernetes",title:"Kubernetes"}]}},computed:{...(0,b.Se)({environment:"config/getEnvironment"}),isReady(){return!this.isEmpty&&!this.hasError&&!this.isLoading},activeTab:{get(){const e=this.environment;return{hash:`#${e}`,nohash:e}},set(e){return{hash:`#${e}`,nohash:e}}},yamlTitle(){return this.title?this.title:this.content?.name?`Entity Overview for ${this.content.name}`:"Entity Overview"},yamlContent(){const e=this.content,t=()=>{const e={},t=Object.assign({},this.content),{name:n,mesh:a,type:i}=t,s=()=>{const e=Object.assign({},this.content);return delete e.type,delete e.mesh,delete e.name,!!(e&&Object.entries(e).length>0)&&e};if(e.apiVersion="kuma.io/v1alpha1",e.kind=i,void 0!==a&&(e.mesh=t.mesh),n?.includes(".")){const t=n.split("."),a=t.pop(),i=t.join(".");e.metadata={name:i,namespace:a}}else e.metadata={name:n};return s()&&(e.spec=s()),e},n={universal:v()(e),kubernetes:v()(t())};return n}}},x=n(83744);const S=(0,x.Z)(_,[["render",w],["__scopeId","data-v-487d5c0d"]]);var C=S},93480:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(70821);const i={"data-testid":"entity-url-control"};function s(e,t,n,s,o,r){const l=(0,a.up)("KIcon"),c=(0,a.up)("KButton"),u=(0,a.up)("KPop"),p=(0,a.up)("KClipboardProvider");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(p,null,{default:(0,a.w5)((({copyToClipboard:e})=>[(0,a.Wm)(u,{placement:"bottom"},{content:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a._)("p",null,(0,a.zw)(n.confirmationText),1)])])),default:(0,a.w5)((()=>[(0,a.Wm)(c,{appearance:"outline",size:"small",onClick:()=>{e(r.shareUrl)}},{icon:(0,a.w5)((()=>[(0,a.Wm)(l,{icon:"externalLink"})])),default:(0,a.w5)((()=>[(0,a.Uk)(" "+(0,a.zw)(n.copyButtonText),1)])),_:2},1032,["onClick"])])),_:2},1024)])),_:1})])}var o={name:"EntityURLControl",props:{name:{type:String,default:""},copyButtonText:{type:String,default:"Copy URL"},confirmationText:{type:String,default:"URL copied to clipboard!"},mesh:{type:String,default:""}},computed:{shareUrl(){const e=`${window.location.href.replace(window.location.hash,"")}#`,{fullPath:t}=this.$router.resolve({name:this.$route.name,params:{mesh:this.mesh},query:{ns:this.name}});return`${e}${t}`}}},r=n(83744);const l=(0,r.Z)(o,[["render",s]]);var c=l},45111:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var a=n(70821);const i={key:0,class:"mb-4"},s=(0,a._)("p",null,[(0,a._)("strong",null,"Warning"),(0,a.Uk)(" This policy is experimental. If you encountered any problem please open an "),(0,a._)("a",{href:"https://github.com/kumahq/kuma/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},"issue")],-1),o=(0,a.Uk)(" > "),r=(0,a._)("span",{class:"custom-control-icon"}," ← ",-1),l=(0,a.Uk)(" View All "),c={"data-testid":"policy-single-entity"},u={"data-testid":"policy-overview-tab"};function p(e,t,n,p,h,d){const y=(0,a.up)("DocumentationLink"),m=(0,a.up)("KAlert"),g=(0,a.up)("KButton"),f=(0,a.up)("DataOverview"),w=(0,a.up)("EntityURLControl"),b=(0,a.up)("LabelList"),E=(0,a.up)("PolicyConnections"),v=(0,a.up)("YamlView"),k=(0,a.up)("TabsWidget"),_=(0,a.up)("FrameSkeleton");return d.policy?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,a.C_)(["relative",d.policy.path])},[(0,a.Wm)(y,{href:d.docsURL,"data-testid":"policy-documentation-link"},null,8,["href"]),d.policy.isExperimental?((0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(m,{appearance:"warning"},{alertMessage:(0,a.w5)((()=>[s])),_:1})])):(0,a.kq)("",!0),(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,{"page-size":h.pageSize,"has-error":h.hasError,"is-loading":h.isLoading,"empty-state":{title:"No Data",message:`There are no ${d.policy.pluralDisplayName} present.`},"table-data":h.tableData,"table-data-is-empty":h.tableDataIsEmpty,next:h.next,onTableAction:d.getEntity,onLoadData:t[0]||(t[0]=e=>d.loadData(e))},{additionalControls:(0,a.w5)((()=>[e.$route.query.ns?((0,a.wg)(),(0,a.j4)(g,{key:0,class:"back-button",appearance:"primary",size:"small",to:{name:d.policy.path}},{default:(0,a.w5)((()=>[r,l])),_:1},8,["to"])):(0,a.kq)("",!0)])),default:(0,a.w5)((()=>[o])),_:1},8,["page-size","has-error","is-loading","empty-state","table-data","table-data-is-empty","next","onTableAction"]),!1===h.isEmpty?((0,a.wg)(),(0,a.j4)(k,{key:0,"has-error":h.hasError,"is-loading":h.isLoading,tabs:h.tabs,"initial-tab-override":"overview"},{tabHeader:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a._)("h3",c,(0,a.zw)(d.policy.singularDisplayName)+": "+(0,a.zw)(h.entity.name),1)]),(0,a._)("div",null,[(0,a.Wm)(w,{name:h.entity.name,mesh:h.entity.mesh},null,8,["name","mesh"])])])),overview:(0,a.w5)((()=>[(0,a.Wm)(b,{"has-error":h.entityHasError,"is-loading":h.entityIsLoading,"is-empty":h.entityIsEmpty},{default:(0,a.w5)((()=>[(0,a._)("div",u,[(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(h.entity,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t},[(0,a._)("h4",null,(0,a.zw)(t),1),(0,a._)("p",null,(0,a.zw)(e),1)])))),128))])])])),_:1},8,["has-error","is-loading","is-empty"])])),"affected-dpps":(0,a.w5)((()=>[(0,a.Wm)(E,{mesh:h.rawEntity.mesh,"policy-name":h.rawEntity.name,"policy-type":d.policy.path},null,8,["mesh","policy-name","policy-type"])])),yaml:(0,a.w5)((()=>[(0,a.Wm)(v,{lang:"yaml","has-error":h.entityHasError,"is-loading":h.entityIsLoading,"is-empty":h.entityIsEmpty,content:h.rawEntity},null,8,["has-error","is-loading","is-empty","content"])])),_:1},8,["has-error","is-loading","tabs"])):(0,a.kq)("",!0)])),_:1})],2)):(0,a.kq)("",!0)}var h=n(33907),d=n(53419),y=n(70172),m=n(45689),g=n(78141);const f=(0,a.Uk)(" Documentation ");function w(e,t,n,i,s,o){const r=(0,a.up)("KIcon"),l=(0,a.up)("KButton");return(0,a.wg)(),(0,a.j4)(l,{class:"docs-link",appearance:"outline",size:"small",target:"_blank",to:n.href},{icon:(0,a.w5)((()=>[(0,a.Wm)(r,{icon:"externalLink"})])),default:(0,a.w5)((()=>[f])),_:1},8,["to"])}var b={name:"DocumentationLink",props:{href:{type:String,required:!0}}},E=n(83744);const v=(0,E.Z)(b,[["render",w],["__scopeId","data-v-268b8d1e"]]);var k=v,_=n(93480),x=n(82318),S=n(21180),C=n(52681);const L=(0,a._)("h4",null,"Dataplanes",-1);function P(e,t,n,i,s,o){const r=(0,a.up)("router-link"),l=(0,a.up)("LabelList");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(l,{"has-error":s.hasError,"is-loading":s.isLoading,"is-empty":!s.hasDataplanes},{default:(0,a.w5)((()=>[(0,a._)("ul",null,[(0,a._)("li",null,[L,(0,a.wy)((0,a._)("input",{id:"dataplane-search","onUpdate:modelValue":t[0]||(t[0]=e=>s.searchInput=e),type:"text",class:"k-input mb-4",placeholder:"Filter by name",required:""},null,512),[[a.nr,s.searchInput]]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.filteredDataplanes,((e,t)=>((0,a.wg)(),(0,a.iD)("p",{key:t,class:"my-1","data-testid":"dataplane-name"},[(0,a.Wm)(r,{to:{name:"dataplanes",query:{ns:e.dataplane.name},params:{mesh:e.dataplane.mesh}}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,a.zw)(e.dataplane.name),1)])),_:2},1032,["to"])])))),128))])])])),_:1},8,["has-error","is-loading","is-empty"])])}var D={name:"PolicyConnections",components:{LabelList:C.Z},props:{mesh:{type:String,required:!0},policyType:{type:String,required:!0},policyName:{type:String,required:!0}},data(){return{hasDataplanes:!1,isLoading:!0,hasError:!1,dataplanes:[],searchInput:""}},computed:{filteredDataplanes(){const e=this.searchInput.toLowerCase();return this.dataplanes.filter((({dataplane:{name:t}})=>t.toLowerCase().includes(e)))}},watch:{policyName(){this.fetchPolicyConntections()}},mounted(){this.fetchPolicyConntections()},methods:{async fetchPolicyConntections(){this.hasError=!1,this.isLoading=!0;try{const{items:e,total:t}=await S["default"].getPolicyConnections({mesh:this.mesh,policyType:this.policyType,policyName:this.policyName});this.hasDataplanes=t>0,this.dataplanes=e}catch(e){this.hasError=!0}finally{this.isLoading=!1}}}};const T=(0,E.Z)(D,[["render",P]]);var I=T,A=n(34707),W=n(99997),R={name:"PolicyView",components:{DataOverview:g.Z,DocumentationLink:k,EntityURLControl:_.Z,FrameSkeleton:x.Z,LabelList:C.Z,PolicyConnections:I,TabsWidget:A.Z,YamlView:W.Z},props:{policyPath:{type:String,required:!0}},data(){return{isLoading:!0,isEmpty:!1,hasError:!1,entityIsLoading:!0,entityIsEmpty:!1,entityHasError:!1,tableDataIsEmpty:!1,tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Name",key:"name"},{label:"Mesh",key:"mesh"},{label:"Type",key:"type"}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#affected-dpps",title:"Affected DPPs"},{hash:"#yaml",title:"YAML"}],entity:{},rawEntity:{},pageSize:m.NR,next:null}},computed:{...(0,h.rn)({policiesByPath:e=>e.policiesByPath}),...(0,h.Se)({kumaDocsVersion:"config/getKumaDocsVersion"}),policy(){return this.policiesByPath[this.policyPath]},docsURL(){return`https://kuma.io/docs/${this.kumaDocsVersion}/policies/${this.policy.path}/`}},watch:{$route(){this.loadData()}},beforeMount(){this.loadData()},methods:{async loadData(e="0"){this.isLoading=!0;const t=this.$route.query.ns||null,n=this.$route.params.mesh||null,a=this.policy.path;try{const{data:i,next:s}=await(0,y.W)({getSingleEntity:S["default"].getSinglePolicyEntity.bind(S["default"]),getAllEntitiesFromPath:S["default"].getAllPolicyEntities.bind(S["default"]),getAllEntitiesFromMesh:S["default"].getAllPolicyEntitiesFromMesh.bind(S["default"]),path:a,mesh:n,query:t,size:this.pageSize,offset:e});if(this.next=s,i.length){this.tableData.data=i,this.tableDataIsEmpty=!1,this.isEmpty=!1;const e=["type","name","mesh"],t=i[0];this.entity=(0,d.wy)(t,e),this.rawEntity=(0,d.RV)(t)}else this.tableData.data=[],this.tableDataIsEmpty=!0,this.isEmpty=!0,this.entityIsEmpty=!0}catch(i){this.hasError=!0,this.isEmpty=!0,console.error(i)}finally{this.isLoading=!1,this.entityIsLoading=!1}},getEntity(e){if(this.entityIsLoading=!0,this.entityIsEmpty=!1,this.entityHasError=!1,e)return S["default"].getSinglePolicyEntity({mesh:e.mesh,path:this.policy.path,name:e.name}).then((e=>{if(e){const t=["type","name","mesh"];this.entity=(0,d.wy)(e,t),this.rawEntity=(0,d.RV)(e)}else this.entity={},this.entityIsEmpty=!0})).catch((e=>{this.entityHasError=!0,console.error(e)})).finally((()=>{setTimeout((()=>{this.entityIsLoading=!1}),"500")}));setTimeout((()=>{this.entityIsEmpty=!0,this.entityIsLoading=!1}),"500")}}};const q=(0,E.Z)(R,[["render",p]]);var U=q},49237:function(e,t,n){var a,i;i=n(11665),a=function(){var e;function t(){}return t.LIST_ESCAPEES=["\\","\\\\",'\\"','"',"\0","","","","","","","","\b","\t","\n","\v","\f","\r","","","","","","","","","","","","","","","","","","",(e=String.fromCharCode)(133),e(160),e(8232),e(8233)],t.LIST_ESCAPED=["\\\\",'\\"','\\"','\\"',"\\0","\\x01","\\x02","\\x03","\\x04","\\x05","\\x06","\\a","\\b","\\t","\\n","\\v","\\f","\\r","\\x0e","\\x0f","\\x10","\\x11","\\x12","\\x13","\\x14","\\x15","\\x16","\\x17","\\x18","\\x19","\\x1a","\\e","\\x1c","\\x1d","\\x1e","\\x1f","\\N","\\_","\\L","\\P"],t.MAPPING_ESCAPEES_TO_ESCAPED=function(){var e,n,a,i;for(a={},e=n=0,i=t.LIST_ESCAPEES.length;0<=i?n<i:n>i;e=0<=i?++n:--n)a[t.LIST_ESCAPEES[e]]=t.LIST_ESCAPED[e];return a}(),t.PATTERN_CHARACTERS_TO_ESCAPE=new i("[\\x00-\\x1f]|Â|Â |â¨|â©"),t.PATTERN_MAPPING_ESCAPEES=new i(t.LIST_ESCAPEES.join("|").split("\\").join("\\\\")),t.PATTERN_SINGLE_QUOTING=new i("[\\s'\":{}[\\],&*#?]|^[-?|<>=!%@`]"),t.requiresDoubleQuoting=function(e){return this.PATTERN_CHARACTERS_TO_ESCAPE.test(e)},t.escapeWithDoubleQuotes=function(e){var t;return t=this.PATTERN_MAPPING_ESCAPEES.replace(e,function(e){return function(t){return e.MAPPING_ESCAPEES_TO_ESCAPED[t]}}(this)),'"'+t+'"'},t.requiresSingleQuoting=function(e){return this.PATTERN_SINGLE_QUOTING.test(e)},t.escapeWithSingleQuotes=function(e){return"'"+e.replace(/'/g,"''")+"'"},t}(),e.exports=a},11665:function(e){var t;t=function(){function e(e,t){var n,a,i,s,o,r,l,c,u;null==t&&(t=""),i="",o=e.length,r=null,a=0,s=0;while(s<o){if(n=e.charAt(s),"\\"===n)i+=e.slice(s,+(s+1)+1||9e9),s++;else if("("===n)if(s<o-2)if(c=e.slice(s,+(s+2)+1||9e9),"(?:"===c)s+=2,i+=c;else if("(?<"===c){a++,s+=2,l="";while(s+1<o){if(u=e.charAt(s+1),">"===u){i+="(",s++,l.length>0&&(null==r&&(r={}),r[l]=a);break}l+=u,s++}}else i+=n,a++;else i+=n;else i+=n;s++}this.rawRegex=e,this.cleanedRegex=i,this.regex=new RegExp(this.cleanedRegex,"g"+t.replace("g","")),this.mapping=r}return e.prototype.regex=null,e.prototype.rawRegex=null,e.prototype.cleanedRegex=null,e.prototype.mapping=null,e.prototype.exec=function(e){var t,n,a,i;if(this.regex.lastIndex=0,n=this.regex.exec(e),null==n)return null;if(null!=this.mapping)for(a in i=this.mapping,i)t=i[a],n[a]=n[t];return n},e.prototype.test=function(e){return this.regex.lastIndex=0,this.regex.test(e)},e.prototype.replace=function(e,t){return this.regex.lastIndex=0,e.replace(this.regex,t)},e.prototype.replaceAll=function(e,t,n){var a;null==n&&(n=0),this.regex.lastIndex=0,a=0;while(this.regex.test(e)&&(0===n||a<n))this.regex.lastIndex=0,e=e.replace(this.regex,t),a++;return[e,a]},e}(),e.exports=t}}]);