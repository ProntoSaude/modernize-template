import{p as c,m as n,g as V,h as p,i as f,cv as L,n as i,b as l,cF as P}from"./index-99c8948f.js";import{b as g,c as h}from"./layout-19b98f61.js";const k=c({...n(),...g({fullHeight:!0}),...V()},"VApp"),R=p()({name:"VApp",props:k(),setup(e,o){let{slots:a}=o;const s=f(e),{layoutClasses:t,layoutStyles:u,getLayoutItem:m,items:v,layoutRef:d}=h(e),{rtlClasses:y}=L();return i(()=>{var r;return l("div",{ref:d,class:["v-application",s.themeClasses.value,t.value,y.value,e.class],style:[u.value,e.style]},[l("div",{class:"v-application__wrap"},[(r=a.default)==null?void 0:r.call(a)])])}),{getLayoutItem:m,items:v,theme:s}}});const C=c({locale:String,fallbackLocale:String,messages:Object,rtl:{type:Boolean,default:void 0},...n()},"VLocaleProvider"),S=p()({name:"VLocaleProvider",props:C(),setup(e,o){let{slots:a}=o;const{rtlClasses:s}=P(e);return i(()=>{var t;return l("div",{class:["v-locale-provider",s.value,e.class],style:e.style},[(t=a.default)==null?void 0:t.call(a)])}),{}}});export{S as V,R as a};