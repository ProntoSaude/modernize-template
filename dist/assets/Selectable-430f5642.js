import{_ as p}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-78f8c4ba.js";import{_ as l}from"./UiParentCard.vue_vue_type_script_setup_true_lang-e2e1aa45.js";import{B as d,S as b}from"./dataTable-4d671c94.js";import{V as f,a as _}from"./VRow-b74bf81b.js";import{c as v}from"./VCard-05d5c4ba.js";import{ax as g,aK as r,o as h,c as S,b as e,w as t,aA as o,a as V,ai as w,av as k,ak as y}from"./index-99c8948f.js";const T=g({setup(B){const n=r({title:"Data Tables Selection"}),i=r(),u=r([{text:"Dashboard",disabled:!1,href:"#"},{text:"Data Tables Selection",disabled:!0,href:"#"}]),a=r([{title:"Name",align:"start",key:"name"},{title:"Project Name",align:"start",key:"project"},{title:"Post",align:"start",key:"post"},{title:"Status",align:"start",key:"status"},{title:"Budget",align:"end",key:"budget"}]);return(x,m)=>{const s=y("v-data-table");return h(),S(k,null,[e(p,{title:n.value.title,breadcrumbs:u.value},null,8,["title","breadcrumbs"]),e(_,null,{default:t(()=>[e(f,{cols:"12"},{default:t(()=>[e(l,{title:"Basic Selection",class:""},{default:t(()=>[e(s,{"items-per-page":"5",headers:a.value,items:o(d),"item-value":"name","show-select":"",class:"border rounded-md"},null,8,["headers","items"])]),_:1}),e(l,{title:"Selected Values",class:"mt-6"},{default:t(()=>[e(s,{"items-per-page":"5",headers:a.value,items:o(d),"item-value":"name",modelValue:i.value,"onUpdate:modelValue":m[0]||(m[0]=c=>i.value=c),"return-object":"","show-select":"",class:"border rounded-md"},null,8,["headers","items","modelValue"]),e(v,{class:"elevation-0 border mt-3 pa-4"},{default:t(()=>[V("pre",null,w(i.value),1)]),_:1})]),_:1}),e(l,{title:"Selectable Rows",class:"mt-6"},{default:t(()=>[e(s,{"items-per-page":"5",headers:a.value,items:o(b),"item-value":"name","item-selectable":"selectable","show-select":"",class:"border rounded-md"},null,8,["headers","items"])]),_:1}),e(l,{title:"Select Strategies",class:"mt-6"},{default:t(()=>[e(s,{"items-per-page":"5",headers:a.value,items:o(d),"item-value":"name","select-strategy":"single","show-select":"",class:"border rounded-md"},null,8,["headers","items"])]),_:1})]),_:1})]),_:1})],64)}}});export{T as default};