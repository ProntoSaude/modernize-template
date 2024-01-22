import{_ as T}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-78f8c4ba.js";import{_ as j}from"./AppBaseCard.vue_vue_type_style_index_0_lang-1fb75028.js";import{u as H,C as z,a as P}from"./ChatProfile-6b33f27d.js";import{ax as D,aK as C,o as s,c as o,b as t,w as a,V as v,aJ as F,aT as L,ak as h,aS as S,bj as V,a as e,ai as m,aA as l,av as b,au as w,ar as _,ah as y,az as A,d as q,a$ as E,bk as R,aG as M}from"./index-99c8948f.js";import{V as x}from"./VSheet-80ab6853.js";import{V as U}from"./VAlert-d16dc699.js";import{V as G}from"./VBadge-1128c67d.js";import{f as B}from"./index-f8ad1ec0.js";import{c as J}from"./VCard-05d5c4ba.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import"./VNavigationDrawer-1c78d727.js";import"./layout-19b98f61.js";import"./index-18289fd3.js";const O=D({setup(f){const d=C(""),u=H();function n(i){console.log(i),i.length!==0&&(u.sendMsg(u.chatContent,d.value),d.value="")}return(i,c)=>{const p=h("MoodSmileIcon"),g=h("SendIcon"),I=h("PhotoIcon"),$=h("PaperclipIcon");return s(),o("form",{class:"d-flex align-center pa-4",onSubmit:c[1]||(c[1]=L(k=>n(d.value),["prevent"]))},[t(v,{icon:"",variant:"text",class:"text-medium-emphasis"},{default:a(()=>[t(p,{size:"24"})]),_:1}),t(F,{variant:"solo","hide-details":"",modelValue:d.value,"onUpdate:modelValue":c[0]||(c[0]=k=>d.value=k),color:"primary",class:"shadow-none",density:"compact",placeholder:"Type a Message"},null,8,["modelValue"]),t(v,{icon:"",variant:"text",type:"submit",class:"text-medium-emphasis",disabled:!d.value},{default:a(()=>[t(g,{size:"20"})]),_:1},8,["disabled"]),t(v,{icon:"",variant:"text",class:"text-medium-emphasis"},{default:a(()=>[t(I,{size:"20"})]),_:1}),t(v,{icon:"",variant:"text",class:"text-medium-emphasis"},{default:a(()=>[t($,{size:"20"})]),_:1})],32)}}}),Q={key:0,class:"pa-6"},W={class:"text-h6 mb-3"},X={key:0},Y=["src"],Z={class:"text-h6 mb-3 mt-7"},tt=["src"],et={class:"pl-4"},st={class:"text-subtitle-1 font-weight-semibold"},at={class:"text-subtitle-2 mt-1"},ot=q(" No Attachments Found! "),nt=D({props:{chatDetail:Object},setup(f){const d=f,u=S(()=>{var i;return V.uniq(V.flatten((i=d.chatDetail)==null?void 0:i.chatHistory.map(c=>c.attachment))).length}),n=S(()=>{var i;return V.uniq(V.flatten((i=d.chatDetail)==null?void 0:i.chatHistory.map(c=>(c==null?void 0:c.type)==="img"?c.msg:null))).length-1});return(i,c)=>f.chatDetail?(s(),o("div",Q,[e("h6",W,"Media ("+m(l(n))+")",1),(s(!0),o(b,null,w(f.chatDetail.chatHistory,p=>(s(),o("div",{key:p.id},[p.type=="img"?(s(),o("div",X,[e("img",{src:p.msg,alt:"img",width:"100"},null,8,Y)])):_("",!0)]))),128)),e("h6",Z,"Attachments ("+m(l(u))+")",1),l(u)!=0?(s(),y(x,{key:0},{default:a(()=>[(s(!0),o(b,null,w(f.chatDetail.chatHistory,p=>(s(),o("div",{key:p.id},[(s(!0),o(b,null,w(p.attachment,g=>(s(),o("div",{class:"d-flex align-center mt-7",key:g.file},[t(A,{class:"rounded-md bg-grey100",size:"48"},{default:a(()=>[e("img",{width:"24",alt:"file",src:g.icon},null,8,tt)]),_:2},1024),e("div",et,[e("h6",st,m(g.file),1),e("h5",at,m(g.fileSize),1)])]))),128))]))),128))]),_:1})):(s(),y(x,{key:1},{default:a(()=>[t(U,{color:"error",type:"warning",density:"compact",variant:"tonal",class:"text-subtitle-1"},{default:a(()=>[ot]),_:1})]),_:1}))])):_("",!0)}}),lt={key:0,class:"customHeight"},it={class:"d-flex align-center gap-3 pa-4"},ct={class:"d-flex gap-2 align-center"},rt=["src"],dt={class:"text-h5 mb-n1"},ut={class:"textPrimary"},mt={class:"ml-auto d-flex"},_t={class:"d-flex"},pt={class:"w-100"},ht={key:0,class:"justify-end d-flex text-end mb-1"},ft={key:0,class:"text-medium-emphasis text-subtitle-2"},gt={class:"text-body-1"},xt=["src"],vt={key:1,class:"d-flex align-items-start gap-3 mb-1"},yt=["src"],bt={key:0,class:"text-medium-emphasis text-subtitle-2"},kt={class:"text-body-1"},Vt=["src"],wt={key:0,class:"right-sidebar"},Ct=D({setup(f){const{lgAndUp:d}=E(),u=H();R(()=>{u.fetchChats()});const n=S(()=>u.chats[u.chatContent-1]),i=C(!!d);function c(){i.value=!i.value}return(p,g)=>{const I=h("PhoneIcon"),$=h("VideoPlusIcon"),k=h("DotsVerticalIcon"),N=h("perfect-scrollbar");return l(n)?(s(),o("div",lt,[e("div",null,[e("div",it,[e("div",ct,[t(A,null,{default:a(()=>[e("img",{src:l(n).thumb,alt:"pro",width:"50"},null,8,rt)]),_:1}),t(G,{class:"badg-dotDetail",dot:"",color:l(n).status==="away"?"warning":l(n).status==="busy"?"error":l(n).status==="online"?"success":"containerBg"},null,8,["color"]),e("div",null,[e("h5",dt,m(l(n).name),1),e("small",ut,m(l(n).status),1)])]),e("div",mt,[t(v,{icon:"",variant:"text",class:"text-medium-emphasis"},{default:a(()=>[t(I,{size:"24"})]),_:1}),t(v,{icon:"",variant:"text",class:"text-medium-emphasis"},{default:a(()=>[t($,{size:"24"})]),_:1}),t(v,{icon:"",variant:"text",class:"text-medium-emphasis",onClick:c},{default:a(()=>[t(k,{size:"24"})]),_:1})])]),t(M),t(N,{class:"rightpartHeight"},{default:a(()=>[e("div",_t,[e("div",pt,[(s(!0),o(b,null,w(l(n).chatHistory,r=>(s(),o("div",{key:r.id,class:"pa-5"},[l(n).id===r.senderId?(s(),o("div",ht,[e("div",null,[r.createdAt?(s(),o("small",ft,m(l(B)(new Date(r.createdAt),{addSuffix:!1}))+" ago",1)):_("",!0),r.type=="text"?(s(),y(x,{key:1,class:"bg-grey100 rounded-md px-3 py-2 mb-1"},{default:a(()=>[e("p",gt,m(r.msg),1)]),_:2},1024)):_("",!0),r.type=="img"?(s(),y(x,{key:2,class:"mb-1"},{default:a(()=>[e("img",{src:r.msg,class:"rounded-md",alt:"pro",width:"250"},null,8,xt)]),_:2},1024)):_("",!0)])])):(s(),o("div",vt,[t(A,null,{default:a(()=>[e("img",{src:l(n).thumb,alt:"pro",width:"40"},null,8,yt)]),_:1}),e("div",null,[r.createdAt?(s(),o("small",bt,m(l(n).name)+", "+m(l(B)(new Date(r.createdAt),{addSuffix:!1}))+" ago ",1)):_("",!0),r.type=="text"?(s(),y(x,{key:1,class:"bg-grey100 rounded-md px-3 py-2 mb-1"},{default:a(()=>[e("p",kt,m(r.msg),1)]),_:2},1024)):_("",!0),r.type=="img"?(s(),y(x,{key:2,class:"mb-1"},{default:a(()=>[e("img",{src:r.msg,class:"rounded-md",alt:"pro",width:"250"},null,8,Vt)]),_:2},1024)):_("",!0)])]))]))),128))]),i.value?(s(),o("div",wt,[t(x,null,{default:a(()=>[t(nt,{chatDetail:l(n)},null,8,["chatDetail"])]),_:1})])):_("",!0)])]),_:1})]),t(M),t(O)])):_("",!0)}}}),Dt=D({setup(f){const d=C({title:"Chat app"}),u=C([{text:"Messenger",disabled:!0,href:"#"}]);return(n,i)=>(s(),o(b,null,[t(T,{title:d.value.title,breadcrumbs:u.value},null,8,["title","breadcrumbs"]),t(J,{elevation:"10"},{default:a(()=>[t(j,null,{leftpart:a(()=>[t(z),t(P)]),rightpart:a(()=>[t(Ct)]),mobileLeftContent:a(()=>[t(z),t(P)]),_:1})]),_:1})],64))}});const Lt=K(Dt,[["__scopeId","data-v-982ac120"]]);export{Lt as default};