import"./Logo-2ec8c82f.js";import{ax as u,aK as t,o as n,ah as V,w as o,b as s,dB as c,aJ as f,V as p,d as i}from"./index-99c8948f.js";import{V as _}from"./VForm-fe1824f5.js";const b=i("Email Address"),x=i("Forgot Password"),B=u({setup(v){const r=t(!0);t(!1);const d=t(""),m=t([e=>!!e||"E-mail is required",e=>/.+@.+\..+/.test(e)||"E-mail must be valid"]);return(e,a)=>(n(),V(_,{ref:"form",modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=l=>r.value=l),"lazy-validation":"",action:"/dashboards/analytical",class:"mt-sm-13 mt-8"},{default:o(()=>[s(c,{class:"text-subtitle-1 font-weight-semibold pb-2 text-lightText"},{default:o(()=>[b]),_:1}),s(f,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=l=>d.value=l),rules:m.value,required:""},null,8,["modelValue","rules"]),s(p,{size:"large",color:"primary",to:"/",block:"",submit:"",flat:""},{default:o(()=>[x]),_:1})]),_:1},8,["modelValue"]))}});export{B as _};