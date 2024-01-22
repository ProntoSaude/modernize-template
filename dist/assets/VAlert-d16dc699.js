import{cQ as $,p as z,cR as D,m as L,di as F,cO as R,cu as w,bu as E,bv as O,bw as j,f as J,g as M,bx as N,h as Q,bA as p,aS as o,i as q,bE as G,dm as H,cP as K,cz as U,bB as W,bC as X,bF as Y,c6 as Z,cy as ee,c4 as te,b as a,bI as ae,bc as le,bJ as d,V as ne,at as se}from"./index-99c8948f.js";const oe=$("v-alert-title"),ie=["success","info","warning","error"],re=z({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:D,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>ie.includes(e)},...L(),...F(),...R(),...w(),...E(),...O(),...j(),...J(),...M(),...N({variant:"flat"})},"VAlert"),ue=Q()({name:"VAlert",props:re(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:m,slots:t}=v;const i=p(e,"modelValue"),n=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),y=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:b}=q(e),{colorClasses:f,colorStyles:k,variantClasses:P}=G(y),{densityClasses:V}=H(e),{dimensionStyles:C}=K(e),{elevationClasses:g}=U(e),{locationStyles:x}=W(e),{positionClasses:S}=X(e),{roundedClasses:_}=Y(e),{textColorClasses:A,textColorStyles:B}=Z(ee(e,"borderColor")),{t:h}=te(),r=o(()=>({"aria-label":h(e.closeLabel),onClick(s){i.value=!1,m("click:close",s)}}));return()=>{const s=!!(t.prepend||n.value),I=!!(t.title||e.title),T=!!(t.close||e.closable);return i.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},b.value,f.value,V.value,g.value,S.value,_.value,P.value,e.class],style:[k.value,C.value,x.value,e.style],role:"alert"},{default:()=>{var c,u;return[ae(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",A.value],style:B.value},null),s&&a("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?a(d,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},t.prepend):a(le,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),a("div",{class:"v-alert__content"},[I&&a(oe,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),((c=t.text)==null?void 0:c.call(t))??e.text,(u=t.default)==null?void 0:u.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),T&&a("div",{key:"close",class:"v-alert__close"},[t.close?a(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=t.close)==null?void 0:l.call(t,{props:r.value})]}}):a(ne,se({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},r.value),null)])]}})}}});export{ue as V};
