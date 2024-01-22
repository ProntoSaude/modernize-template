import{_ as J}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-78f8c4ba.js";import{bl as H,bm as Q,bj as L,bn as W,ax as U,aK as f,ak as h,o as c,ah as _,w as l,a as d,ai as T,b as t,aE as X,aD as Y,as as B,ap as N,aA as $,aJ as K,bb as D,V as M,aF as Z,ar as F,c as w,an as R,d as V,az as ee,b$ as te,au as O,av as j,aT as ae,bk as se,aS as le}from"./index-99c8948f.js";import{c as I,d as P}from"./VCard-05d5c4ba.js";import{V as q}from"./VTextarea-b8c8e14a.js";import{V as G}from"./VDialog-43109040.js";import{f as oe}from"./index-f8ad1ec0.js";import{V as ne}from"./VTooltip-806c5753.js";import{V as ie,a as ue}from"./VRow-b74bf81b.js";import"./index-18289fd3.js";const E=H({id:"tasks",state:()=>({tasks:[],taskContent:"1"}),actions:{async fetchTasks(){try{const e=await Q.get("/api/data/task/TaskData");this.tasks=e.data}catch(e){alert(e),console.log(e)}},SelectTask(e){this.taskContent=e},deleteTask(e){const n=this.tasks.map(u=>{var i;const m=(i=u.tasks)==null?void 0:i.filter(r=>r.id!==e);return{...u,tasks:m}});this.tasks=n},addTask(e,n,u,m,i){const r={id:L.uniqueId("#task_"),title:n,subtitle:u,category:m,date:W(new Date,{seconds:1}),categorybg:i};this.tasks=L.map(this.tasks,s=>s.id===e?{...s,...s.tasks.push(r)}:s)}}}),de={class:"d-flex align-center justify-space-between px-4 py-2 pr-3"},re={class:"text-subtitle-2 font-weight-semibold pr-4 cursor-move"},ce=V("Edit"),me=V("Delete"),fe=d("h4",{class:"text-h6 mb-5"},"Edit Task ",-1),be=V("Save"),ke=V("Cancel"),ve={key:1,class:"text-subtitle-2 px-4 text-medium-emphasis"},Ve={class:"d-flex align-center justify-space-between px-4 py-3"},pe={class:"d-flex align-center"},ge={class:"body-text-1 text-dark pl-2"},xe=U({props:{task:null},setup(e){const n=f(!1),u=E();function m(){return n.value=!1}function i(){return n.value=!1}return(r,s)=>{const b=h("DotsVerticalIcon"),k=h("RouterLink"),A=h("CalendarIcon");return c(),_(I,{elevation:"10",class:"mb-5"},{default:l(()=>{var p,z,o,C,S,g,x,y;return[d("div",de,[d("h5",re,T((p=e.task)==null?void 0:p.title),1),t(k,{to:"",class:"px-0"},{default:l(()=>[t(b,{size:"15"}),t(X,{activator:"parent"},{default:l(()=>[t(Y,{density:"compact"},{default:l(()=>[t(B,{value:"Edit"},{default:l(()=>[t(N,{onClick:s[0]||(s[0]=a=>n.value=!0)},{default:l(()=>[ce]),_:1})]),_:1}),t(B,{value:"Delete"},{default:l(()=>[t(N,{onClick:s[1]||(s[1]=a=>{var v;return $(u).deleteTask((v=e.task)==null?void 0:v.id)})},{default:l(()=>[me]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(G,{modelValue:n.value,"onUpdate:modelValue":s[6]||(s[6]=a=>n.value=a),"max-width":"500"},{default:l(()=>[t(I,null,{default:l(()=>[t(P,{class:"mb-4"},{default:l(()=>[fe,t(K,{outlined:"",name:"Task",modelValue:e.task.title,"onUpdate:modelValue":s[2]||(s[2]=a=>e.task.title=a),label:"Title"},null,8,["modelValue"]),t(q,{outlined:"",name:"Task-subtitle",modelValue:e.task.subtitle,"onUpdate:modelValue":s[3]||(s[3]=a=>e.task.subtitle=a),label:"Subtitle"},null,8,["modelValue"]),t(D,{label:"Select",modelValue:e.task.category,"onUpdate:modelValue":s[4]||(s[4]=a=>e.task.category=a),variant:"outlined",items:["Mobile","Design","Development"]},null,8,["modelValue"]),t(D,{label:"Select",modelValue:e.task.categorybg,"onUpdate:modelValue":s[5]||(s[5]=a=>e.task.categorybg=a),variant:"outlined",items:["primary","warning","success","error"]},null,8,["modelValue"]),t(M,{color:"primary",variant:"flat",onClick:m},{default:l(()=>[be]),_:1}),t(M,{variant:"flat",onClick:i},{default:l(()=>[ke]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),(z=e.task)!=null&&z.taskimg?(c(),_(Z,{key:0,src:(o=e.task)==null?void 0:o.taskimg,height:"110px",cover:"",class:"w-100 mb-3"},null,8,["src"])):F("",!0),(C=e.task)!=null&&C.subtitle?(c(),w("p",ve,T((S=e.task)==null?void 0:S.subtitle),1)):F("",!0),d("div",Ve,[d("div",pe,[t(A,{size:"16"}),d("div",ge,T($(oe)(new Date((g=e.task)==null?void 0:g.date),{addSuffix:!1}))+" ago",1)]),d("div",{class:R("rounded-sm body-text-1 px-1 py-0 bg-"+((x=e.task)==null?void 0:x.categorybg)),size:"small"},T((y=e.task)==null?void 0:y.category),3)])]}),_:1})}}}),ye={class:"pa-5"},Te={class:"d-flex align-center justify-space-between"},he={class:"text-h6 font-weight-semibold"},_e=V("Add Task "),we=["task"],Ce=d("h4",{class:"text-h6 mb-5"},"Add Task ",-1),Se=V("Save"),$e=U({props:{column:Object},setup(e){var p;const n=e,u=f(!1),m=E(),i=f(""),r=f(""),s=f("Mobile"),b=f("primary"),k=f((p=n.column)==null?void 0:p.id);function A(){i.value="",r.value="",s.value="Mobile",b.value="primary"}return(z,o)=>{var g;const C=h("PlusIcon"),S=h("draggable");return c(),_(I,{elevation:"10",class:R("bg-"+((g=e.column)==null?void 0:g.cardbg))},{default:l(()=>{var x,y;return[d("div",ye,[d("div",Te,[d("h6",he,T((x=e.column)==null?void 0:x.title),1),t(ee,{size:"22",elevation:"10",class:"bg-surface d-flex align-center cursor-pointer",onClick:o[0]||(o[0]=a=>u.value=!0)},{default:l(()=>[t(ne,{activator:"parent",location:"top"},{default:l(()=>[_e]),_:1}),t(C,{size:"13","stroke-width":"2"})]),_:1})]),t(S,{class:"dragArea list-group mt-6",list:(y=e.column)==null?void 0:y.tasks,animation:200,"ghost-class":"ghost-card",group:"tasks"},{default:l(()=>[t(te,null,{default:l(()=>{var a;return[(c(!0),w(j,null,O((a=e.column)==null?void 0:a.tasks,v=>(c(),w("div",{key:v.id,task:v,class:"mt-3 cursor-move"},[t(xe,{task:v},null,8,["task"])],8,we))),128))]}),_:1})]),_:1},8,["list"])]),t(G,{modelValue:u.value,"onUpdate:modelValue":o[7]||(o[7]=a=>u.value=a),"max-width":"500"},{default:l(()=>[t(I,null,{default:l(()=>[t(P,{class:"mb-4"},{default:l(()=>[Ce,d("form",{onSubmit:o[6]||(o[6]=ae(a=>($(m).addTask(k.value,i.value,r.value,s.value,b.value),A()),["prevent"]))},[t(K,{outlined:"",name:"Task",modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=a=>i.value=a),label:"Title"},null,8,["modelValue"]),t(q,{outlined:"",name:"Task-subtitle",modelValue:r.value,"onUpdate:modelValue":o[2]||(o[2]=a=>r.value=a),label:"Subtitle"},null,8,["modelValue"]),t(D,{label:"Select",modelValue:s.value,"onUpdate:modelValue":o[3]||(o[3]=a=>s.value=a),variant:"outlined",items:["Mobile","Design","Development"]},null,8,["modelValue"]),t(D,{label:"Select",modelValue:b.value,"onUpdate:modelValue":o[4]||(o[4]=a=>b.value=a),variant:"outlined",items:["primary","warning","success","error"]},null,8,["modelValue"]),t(M,{color:"primary",variant:"flat",type:"submit",disabled:i.value=="",onClick:o[5]||(o[5]=a=>u.value=!1)},{default:l(()=>[Se]),_:1},8,["disabled"])],32)]),_:1})]),_:1})]),_:1},8,["modelValue"])]}),_:1},8,["class"])}}}),De=U({setup(e){const n=E();se(()=>{n.fetchTasks()});const m=le(()=>n.tasks),i=f({title:"Kanban Application"}),r=f([{text:"Dashboard",disabled:!1,href:"#"},{text:"Kanban Application",disabled:!0,href:"#"}]);return(s,b)=>(c(),w(j,null,[t(J,{title:i.value.title,breadcrumbs:r.value},null,8,["title","breadcrumbs"]),t(ue,null,{default:l(()=>[(c(!0),w(j,null,O($(m),k=>(c(),_(ie,{cols:"12",md:"3",sm:"6",class:"d-flex",key:k.id},{default:l(()=>[t($e,{column:k},null,8,["column"])]),_:2},1024))),128))]),_:1})],64))}}),Ne=U({setup(e){return(n,u)=>(c(),_(De))}});export{Ne as default};
