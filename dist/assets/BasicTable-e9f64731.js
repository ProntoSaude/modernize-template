import{_ as v}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-78f8c4ba.js";import{_ as l}from"./UiParentCard.vue_vue_type_script_setup_true_lang-e2e1aa45.js";import{B as r}from"./dataTable-4d671c94.js";import{V as x,a as k}from"./VRow-b74bf81b.js";import{ax as y,aK as n,o as B,c as w,b as e,w as t,aA as o,ao as C,d as D,ai as c,a as p,av as F,ak as N}from"./index-99c8948f.js";import"./VCard-05d5c4ba.js";const V=["colspan"],$=y({setup(E){const f=n({title:"Basic Data Tables"}),b=n([{text:"Dashboard",disabled:!1,href:"#"},{text:"Basic Data Tables",disabled:!0,href:"#"}]),d=n([{title:"Name",align:"start",key:"name"},{title:"Project Name",align:"start",key:"project"},{title:"Post",align:"start",key:"post"},{title:"Status",align:"start",key:"status"},{title:"Budget",align:"end",key:"budget"}]),m=n(),_=n([{title:"Name",align:"start",key:"name",sortable:!1},{title:"Project Name",align:"start",key:"project"},{title:"Post",align:"start",key:"post"},{title:"Status",align:"start",key:"status"},{title:"Budget",align:"end",key:"budget"},{title:"",key:"data-table-expand"}]);function g(i){return i=="Active"?"#13DEB9":i=="Cancel"?"#FA896B":i=="Completed"?"#5D87FF":"#FFAE1F"}return(i,u)=>{const s=N("v-data-table");return B(),w(F,null,[e(v,{title:f.value.title,breadcrumbs:b.value},null,8,["title","breadcrumbs"]),e(k,null,{default:t(()=>[e(x,{cols:"12"},{default:t(()=>[e(l,{title:"Basic Table"},{default:t(()=>[e(s,{"items-per-page":"5",headers:d.value,items:o(r),"item-value":"name",class:"border rounded-md"},null,8,["headers","items"])]),_:1}),e(l,{title:"Selection",class:"mt-6 pb-0"},{default:t(()=>[e(s,{"items-per-page":"5",headers:d.value,items:o(r),"item-value":"name","show-select":"",class:"border rounded-md"},null,8,["headers","items"])]),_:1}),e(l,{title:"Density",class:"mt-6"},{default:t(()=>[e(s,{"items-per-page":"5",headers:d.value,items:o(r),"item-value":"name",density:"compact",class:"border rounded-md"},null,8,["headers","items"])]),_:1}),e(l,{title:"Item",class:"mt-6"},{default:t(()=>[e(s,{"items-per-page":"5",headers:d.value,items:o(r),"item-value":"name",class:"border rounded-md"},{"item.status":t(({item:a})=>[e(C,{color:g(a.columns.status)},{default:t(()=>[D(c(a.columns.status),1)]),_:2},1032,["color"])]),_:1},8,["headers","items"])]),_:1}),e(l,{title:"Expandable Rows",class:"mt-6"},{default:t(()=>[e(s,{expanded:m.value,"onUpdate:expanded":u[0]||(u[0]=a=>m.value=a),headers:_.value,items:o(r),"item-value":"name","show-expand":"",class:"border rounded-md"},{"expanded-row":t(({columns:a,item:h})=>[p("tr",null,[p("td",{colspan:a.length}," More info about "+c(h.raw.name),9,V)])]),_:1},8,["expanded","headers","items"])]),_:1})]),_:1})]),_:1})],64)}}});export{$ as default};