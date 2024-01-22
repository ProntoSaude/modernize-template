import{_ as B}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-78f8c4ba.js";import{b6 as i,e8 as m,ax as C,aK as p,o as t,c as o,b as l,w as e,a as r,dB as h,av as f,au as y,ah as c,ai as u,ao as M,ar as z,aD as P,as as S,ap as x,al as b,an as g,d as n,V as D,aA as L}from"./index-99c8948f.js";import{_ as N}from"./gold-cb3da06c.js";import{V as k,a as w}from"./VRow-b74bf81b.js";import{V as j}from"./VSwitch-da9158fd.js";import{c as F}from"./VCard-05d5c4ba.js";const G="/assets/silver-9ec10c43.png",I="/assets/bronze-91006918.png",T=[{tagtext:!1,caption:"Silver",image:G,free:!0,price:10.99,yearlyprice:10.99*12,buttontext:"Choose Silver",list:[{icon:i,iconcolor:"primary",listtitle:"3 Members",status:!1},{icon:i,iconcolor:"primary",listtitle:"Single Device",status:!1},{icon:m,iconcolor:"inputBorder",listtitle:"50GB Storage",status:!0},{icon:m,iconcolor:"inputBorder",listtitle:"Monthly Backups",status:!0},{icon:m,iconcolor:"inputBorder",listtitle:"Permissions & workflows",status:!0}]},{tagtext:!0,caption:"bronze",image:I,free:!1,price:10.99,yearlyprice:10.99*12,buttontext:"Choose Bronze",list:[{icon:i,iconcolor:"primary",listtitle:"5 Members",status:!1},{icon:i,iconcolor:"primary",listtitle:"Multiple Device",status:!1},{icon:i,iconcolor:"primary",listtitle:"80GB Storage",status:!1},{icon:m,iconcolor:"inputBorder",listtitle:"Monthly Backups",status:!0},{icon:m,iconcolor:"inputBorder",listtitle:"Permissions & workflows",status:!0}]},{tagtext:!1,caption:"gold",image:N,free:!1,price:22.99,yearlyprice:22.99*12,buttontext:"Choose Gold",list:[{icon:i,iconcolor:"primary",listtitle:"15 Members",status:!1},{icon:i,iconcolor:"primary",listtitle:"Multiple Device",status:!1},{icon:i,iconcolor:"primary",listtitle:"150GB Storage",status:!1},{icon:i,iconcolor:"primary",listtitle:"Monthly Backups",status:!1},{icon:i,iconcolor:"primary",listtitle:"Permissions & workflows",status:!1}]}],U=r("h2",{class:"text-h2 text-center pt-10"},[n(" Flexible Plans Tailored to Fit Your Community's "),r("br"),n(" Unique Needs! ")],-1),A={class:"d-flex justify-center"},R=n("Monthly"),Y=n("Yearly"),$={class:"d-flex justify-space-between"},q=["textContent"],E=n("POPULAR"),K=["src"],O={key:0,class:"d-flex align-center mt-4"},X=r("h2",{class:"display-1"},"Free",-1),H=[X],J={key:1,class:"d-flex align-center mt-4"},Q=r("sup",{class:"text-h6 mt-n3 pr-2"},"$",-1),W={key:0,class:"display-1"},Z={key:1,class:"display-1"},tt={key:2,class:"text-medium-emphasis font-weight-medium mt-4 ml-2"},et={key:3,class:"text-medium-emphasis font-weight-medium mt-4 ml-2"},ut=C({setup(st){const V=p({title:"Pricing"}),v=p([{text:"Dashboard",disabled:!1,href:"#"},{text:"Pricing",disabled:!0,href:"#"}]),d=p(!1);return(it,_)=>(t(),o(f,null,[l(B,{title:V.value.title,breadcrumbs:v.value},null,8,["title","breadcrumbs"]),U,l(w,{class:"justify-center mt-1 mb-sm-10 mb-5"},{default:e(()=>[l(k,{cols:"auto"},{default:e(()=>[r("div",A,[l(h,{class:"text-subtitle-1"},{default:e(()=>[R]),_:1}),l(j,{color:"primary","hide-details":"",modelValue:d.value,"onUpdate:modelValue":_[0]||(_[0]=s=>d.value=s),class:"mx-4"},null,8,["modelValue"]),l(h,{class:"text-subtitle-1"},{default:e(()=>[Y]),_:1})])]),_:1})]),_:1}),l(w,{class:"d-flex justify-center"},{default:e(()=>[(t(!0),o(f,null,y(L(T),s=>(t(),c(k,{cols:"12",md:"4",sm:"6",key:s.caption},{default:e(()=>[l(F,{elevation:"10",class:"rounded-md pa-sm-8 pa-4"},{default:e(()=>[r("div",$,[r("h4",{class:"text-body-2 text-medium-emphasis text-uppercase mb-6",textContent:u(s.caption)},null,8,q),s.tagtext?(t(),c(M,{key:0,size:"small",class:"mt-sm-n4 font-weight-bold",color:"warning"},{default:e(()=>[E]),_:1})):z("",!0)]),r("img",{src:s.image,width:"90",alt:"icon"},null,8,K),s.free?(t(),o("div",O,H)):(t(),o("div",J,[Q,d.value?(t(),o("h2",W,u(s.yearlyprice),1)):(t(),o("h2",Z,u(s.price),1)),d.value?(t(),o("span",tt,"/yr")):(t(),o("span",et,"/mo"))])),l(P,{class:"mb-0 pl-0 bg-transparent pt-5"},{default:e(()=>[(t(!0),o(f,null,y(s.list,a=>(t(),c(S,{class:"px-0",key:a.listtitle},{default:e(()=>[a.status?(t(),c(x,{key:0,class:"text-body-1 d-flex align-center font-weight-medium text-medium-emphasis"},{default:e(()=>[(t(),c(b(a.icon),{class:g(["text-"+a.iconcolor,"mr-4"]),"stroke-width":"2",size:"18"},null,8,["class"])),n(" "+u(a.listtitle),1)]),_:2},1024)):(t(),c(x,{key:1,class:"text-body-1 d-flex align-center font-weight-medium"},{default:e(()=>[(t(),c(b(a.icon),{class:g(["text-"+a.iconcolor,"mr-4"]),"stroke-width":"2",size:"18"},null,8,["class"])),n(" "+u(a.listtitle),1)]),_:2},1024))]),_:2},1024))),128))]),_:2},1024),l(D,{color:"primary",size:"large",class:"mt-6",flat:"",block:""},{default:e(()=>[n(u(s.buttontext),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})],64))}});export{ut as default};
