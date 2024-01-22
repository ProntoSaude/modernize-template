import{p as S,bu as B,bv as T,bw as N,bx as I,g as A,by as R,bz as $,h as z,bA as L,bB as O,bC as j,bD as D,i as U,bE as F,bF as G,aK as k,aR as g,bk as M,n as E,bG as H,bH as h,b as a,bI as J,bJ as K,at as V,ax as q,o as Q,ah as W,w as r,a as l,V as X,ai as f,d as Y,ak as y}from"./index-99c8948f.js";import{V as Z}from"./VTooltip-806c5753.js";import{V as ee}from"./VRating-c31cde4b.js";import{b as ae,c as te}from"./VCard-05d5c4ba.js";const se=S({multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...B({location:"bottom"}),...T(),...N(),...I(),...A(),...R($({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),oe=z()({name:"VSnackbar",props:se(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:s}=u;const t=L(e,"modelValue"),{locationStyles:d}=O(e),{positionClasses:o}=j(e),{scopeId:m}=D(),{themeClasses:v}=U(e),{colorClasses:n,colorStyles:_,variantClasses:P}=F(e),{roundedClasses:x}=G(e),p=k();g(t,c),g(()=>e.timeout,c),M(()=>{t.value&&c()});let b=-1;function c(){window.clearTimeout(b);const i=Number(e.timeout);!t.value||i===-1||(b=window.setTimeout(()=>{t.value=!1},i))}function w(){window.clearTimeout(b)}return E(()=>{const[i]=h.filterProps(e);return a(h,V({ref:p,class:["v-snackbar",{"v-snackbar--active":t.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--vertical":e.vertical},o.value,e.class],style:e.style},i,{modelValue:t.value,"onUpdate:modelValue":C=>t.value=C,contentProps:V({class:["v-snackbar__wrapper",v.value,n.value,x.value,P.value],style:[d.value,_.value],onPointerenter:w,onPointerleave:c},i.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},m),{default:()=>[J(!1,"v-snackbar"),s.default&&a("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[s.default()]),s.actions&&a(K,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[a("div",{class:"v-snackbar__actions"},[s.actions()])]})],activator:s.activator})}),H({},p)}}),ne=["src"],le={class:"d-flex justify-end mr-3 mt-n6"},re={class:"text-h6"},ie={class:"d-flex align-center justify-space-between mt-1"},ce={class:"d-flex align-center gap-2"},ue={class:"text-h6"},de={class:"text-decoration-line-through text-medium-emphasis"},me=Y(" Item Added to The Cart "),Ve=q({props:{name:String,image:String,desc:String,rating:Number,salePrice:Number,offerPrice:Number,goto:Number||String||Object||Array},setup(e){const u=e,s=k(!1),t=k(u.rating);return(d,o)=>{const m=y("router-link"),v=y("BasketIcon");return Q(),W(te,{variant:"outlined",class:"rounded card-hover overflow-hidden"},{default:r(()=>[a(m,{to:`/ecommerce/product/detail/${e.goto}`},{default:r(()=>[l("img",{alt:"product",src:e.image,class:"w-100"},null,8,ne)]),_:1},8,["to"]),l("div",le,[a(Z,{text:"Add to Cart",location:"bottom"},{activator:r(({props:n})=>[a(X,V({icon:""},n,{color:"primary",class:"ml-auto",size:"x-small",onClick:o[0]||(o[0]=_=>d.$emit("handlecart",s.value=!0))}),{default:r(()=>[a(v,{size:"18"})]),_:2},1040)]),_:1})]),a(ae,{class:"pt-1"},{default:r(()=>[l("h6",re,f(e.name),1),l("div",ie,[l("div",ce,[l("h6",ue,"$"+f(e.salePrice),1),l("p",de,"$"+f(e.offerPrice),1)]),a(ee,{color:"warning","half-increments":"",size:"small",modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=n=>t.value=n),density:"compact"},null,8,["modelValue"])])]),_:1}),a(oe,{variant:"flat",location:"bottom right",color:"success",rounded:"md",class:"text-white",modelValue:s.value,"onUpdate:modelValue":o[2]||(o[2]=n=>s.value=n)},{default:r(()=>[me]),_:1},8,["modelValue"])]),_:1})}}});export{Ve as _};