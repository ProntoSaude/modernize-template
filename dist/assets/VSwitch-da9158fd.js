import{p as U,ce as $,dy as j,h as K,bA as r,dn as M,cg as N,aS as v,cZ as Z,n as q,ci as E,cj as f,dz as m,aK as G,b as t,at as h,dr as H,dS as J}from"./index-99c8948f.js";const O=U({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...$(),...j()},"VSwitch"),X=K()({name:"VSwitch",inheritAttrs:!1,props:O(),emits:{"update:focused":e=>!0,"update:modelValue":()=>!0,"update:indeterminate":e=>!0},setup(e,V){let{attrs:g,slots:a}=V;const l=r(e,"indeterminate"),u=r(e,"modelValue"),{loaderClasses:w}=M(e),{isFocused:y,focus:C,blur:S}=N(e),b=v(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),k=Z(),P=v(()=>e.id||`switch-${k}`);function x(){l.value&&(l.value=!1)}return q(()=>{const[A,_]=E(g),[p,Q]=f.filterProps(e),[B,T]=m.filterProps(e),d=G();function F(s){var o,n;s.stopPropagation(),s.preventDefault(),(n=(o=d.value)==null?void 0:o.input)==null||n.click()}return t(f,h({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":l.value},w.value,e.class],style:e.style},A,p,{id:P.value,focused:y.value}),{...a,default:s=>{let{id:o,messagesId:n,isDisabled:I,isReadonly:z,isValid:D}=s;return t(m,h({ref:d},B,{modelValue:u.value,"onUpdate:modelValue":[i=>u.value=i,x],id:o.value,"aria-describedby":n.value,type:"checkbox","aria-checked":l.value?"mixed":void 0,disabled:I.value,readonly:z.value,onFocus:C,onBlur:S},_),{...a,default:()=>t("div",{class:"v-switch__track",onClick:F},null),input:i=>{let{textColorClasses:L,textColorStyles:R}=i;return t("div",{class:["v-switch__thumb",L.value],style:R.value},[e.loading&&t(H,{name:"v-switch",active:!0,color:D.value===!1?void 0:b.value},{default:c=>a.loader?a.loader(c):t(J,{active:c.isActive,color:c.color,indeterminate:!0,size:"16",width:"2"},null)})])}})}})}),{}}});export{X as V};