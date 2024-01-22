import{bl as T,bm as L,ax as D,bk as G,aS as p,aK as r,o as c,c as h,b as e,w as t,a as o,ao as N,d as y,ai as d,aA as x,aJ as R,av as b,au as j,ah as A,az as E,aG as P,V as n,ak as i,bR as U,bQ as $,bS as H}from"./index-99c8948f.js";import{_ as J}from"./ProfileBanner.vue_vue_type_style_index_0_lang-b51867b3.js";import{_ as K}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-78f8c4ba.js";import{V as v,a as g}from"./VRow-b74bf81b.js";import{V}from"./VSheet-80ab6853.js";import{c as M,b as Q}from"./VCard-05d5c4ba.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import"./VTabs-81ee764d.js";const O=T({id:"Frineds",state:()=>({friends:[]}),getters:{},actions:{async fetchFrineds(){try{const s=await L.get("/api/friends/list");this.friends=s.data.friends}catch(s){alert(s),console.log(s)}}}}),W={class:"d-sm-flex align-center mb-5"},X={class:"text-h3"},Y=y(" Friends "),Z=["src","alt"],ee={class:"text-h5 mt-3"},te={class:"text-truncate d-block gap-2 text-subtitle-1"},ae=D({setup(s){const m=O();G(()=>{m.fetchFrineds()});const I=p(()=>m.friends),l=r("");r([{title:"Favorite",icon:U},{title:"Edit Friend List",icon:$},{title:"Remove",icon:H}]);const F=r({title:"Social Profile"}),u=p(()=>I.value.filter(_=>_.name.toLowerCase().includes(l.value.toLowerCase()))),B=r([{text:"Dashboard",disabled:!1,href:"/"},{text:"Social Profile",disabled:!0,href:"#"}]);return(_,f)=>{const w=i("BrandFacebookIcon"),z=i("BrandInstagramIcon"),k=i("BrandGithubIcon"),C=i("BrandTwitterIcon");return c(),h(b,null,[e(K,{title:F.value.title,breadcrumbs:B.value},null,8,["title","breadcrumbs"]),e(J),e(g,{class:"justify-content-end mt-5"},{default:t(()=>[e(v,{cols:"12"},{default:t(()=>[o("div",W,[o("h3",X,[Y,e(N,{size:"small",class:"ml-2 elevation-0",variant:"elevated",color:"secondary"},{default:t(()=>[y(d(x(u).length),1)]),_:1})]),e(V,{width:"250",class:"ml-0 ml-sm-auto mt-3 mt-sm-0"},{default:t(()=>[e(R,{color:"primary","hide-details":"",variant:"outlined",placeholder:"Search Friends",density:"compact","prepend-inner-icon":"mdi-magnify",modelValue:l.value,"onUpdate:modelValue":f[0]||(f[0]=a=>l.value=a)},null,8,["modelValue"])]),_:1})]),e(g,null,{default:t(()=>[(c(!0),h(b,null,j(x(u),(a,S)=>(c(),A(v,{cols:"12",md:"4",sm:"6",key:S},{default:t(()=>[e(M,{elevation:"10",class:"card-hover"},{default:t(()=>[e(Q,{class:"text-center"},{default:t(()=>[e(E,{size:"80"},{default:t(()=>[o("img",{src:a.avatar,alt:a.avatar,width:"80"},null,8,Z)]),_:2},1024),o("h4",ee,d(a.name),1),o("span",te,d(a.role),1)]),_:2},1024),e(P),e(V,{class:"bg-grey100 px-4 py-2 d-flex align-center justify-center gap-2"},{default:t(()=>[e(n,{color:"primary",icon:"",variant:"text",class:"text-facebook",size:"x-small"},{default:t(()=>[e(w,{size:"16"})]),_:1}),e(n,{color:"primary",icon:"",variant:"text",class:"text-instagram",size:"x-small"},{default:t(()=>[e(z,{size:"16"})]),_:1}),e(n,{color:"primary",icon:"",variant:"text",class:"text-github",size:"x-small"},{default:t(()=>[e(k,{size:"16"})]),_:1}),e(n,{color:"primary",icon:"",variant:"text",class:"text-twitter",size:"x-small"},{default:t(()=>[e(C,{size:"16"})]),_:1})]),_:1})]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})],64)}}});const me=q(ae,[["__scopeId","data-v-84b18731"]]);export{me as default};
