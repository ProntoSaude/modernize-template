import{p as P,bz as D,dN as y,h,bA as S,bD as x,aK as F,dF as R,aR as v,aS as w,at as f,n as B,bG as I,ca as T,bH as m,b as g,bJ as A,dH as N}from"./index-99c8948f.js";const O=P({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...D({origin:"center center",scrollStrategy:"block",transition:{component:y},zIndex:2400})},"VDialog"),C=h()({name:"VDialog",props:O(),emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:c}=p;const r=S(a,"modelValue"),{scopeId:V}=x(),t=F();function i(l){var n,s;const e=l.relatedTarget,o=l.target;if(e!==o&&((n=t.value)!=null&&n.contentEl)&&((s=t.value)!=null&&s.globalTop)&&![document,t.value.contentEl].includes(o)&&!t.value.contentEl.contains(o)){const u=N(t.value.contentEl);if(!u.length)return;const d=u[0],E=u[u.length-1];e===d?E.focus():d.focus()}}R&&v(()=>r.value&&a.retainFocus,l=>{l?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),v(r,async l=>{var e,o;await T(),l?(e=t.value.contentEl)==null||e.focus({preventScroll:!0}):(o=t.value.activatorEl)==null||o.focus({preventScroll:!0})});const b=w(()=>f({"aria-haspopup":"dialog","aria-expanded":String(r.value)},a.activatorProps));return B(()=>{const[l]=m.filterProps(a);return g(m,f({ref:t,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},l,{modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,"aria-modal":"true",activatorProps:b.value,role:"dialog"},V),{activator:c.activator,default:function(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return g(A,{root:"VDialog"},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...o)]}})}})}),I({},t)}});export{C as V};