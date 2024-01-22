import{m as I,V as x}from"./VToolbar-ca677ed9.js";import{m as K,a as $}from"./layout-19b98f61.js";import{p as w,aK as P,aC as h,aS as n,cH as z,aR as p,bk as G,cI as J,cr as q,h as F,bA as O,cJ as Y,l as Q,cy as R,n as W,b as k,at as j,aB as C,cK as X,cL as Z,cM as ee,cN as te,ax as N,o as S,c as D,w as M,a as U,aA as _,cG as V,ah as B}from"./index-99c8948f.js";import{u as ae}from"./customizer-7d253d8e.js";const se=w({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function oe(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:r}=l;let u=0;const s=P(null),t=h(0),v=h(0),c=h(0),m=h(!1),g=h(!1),i=n(()=>Number(e.scrollThreshold)),y=n(()=>z((i.value-t.value)/i.value||0)),d=()=>{const o=s.value;!o||r&&!r.value||(u=t.value,t.value="window"in o?o.pageYOffset:o.scrollTop,g.value=t.value<u,c.value=Math.abs(t.value-i.value))};return p(g,()=>{v.value=v.value||t.value}),p(m,()=>{v.value=0}),G(()=>{p(()=>e.scrollTarget,o=>{var b;const f=o?document.querySelector(o):window;if(!f){J(`Unable to locate element with identifier ${o}`);return}f!==s.value&&((b=s.value)==null||b.removeEventListener("scroll",d),s.value=f,s.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),q(()=>{var o;(o=s.value)==null||o.removeEventListener("scroll",d)}),r&&p(r,d,{immediate:!0}),{scrollThreshold:i,currentScroll:t,currentThreshold:c,isScrollActive:m,scrollRatio:y,isScrollingUp:g,savedScroll:v}}const le=w({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...I(),...K(),...se(),height:{type:[Number,String],default:64}},"VAppBar"),Me=F()({name:"VAppBar",props:le(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:r}=l;const u=P(),s=O(e,"modelValue"),t=n(()=>{var A;const a=new Set(((A=e.scrollBehavior)==null?void 0:A.split(" "))??[]);return{hide:a.has("hide"),inverted:a.has("inverted"),collapse:a.has("collapse"),elevate:a.has("elevate"),fadeImage:a.has("fade-image")}}),v=n(()=>{const a=t.value;return a.hide||a.inverted||a.collapse||a.elevate||a.fadeImage||!s.value}),{currentScroll:c,scrollThreshold:m,isScrollingUp:g,scrollRatio:i}=oe(e,{canScroll:v}),y=n(()=>e.collapse||t.value.collapse&&(t.value.inverted?i.value>0:i.value===0)),d=n(()=>e.flat||t.value.elevate&&(t.value.inverted?c.value>0:c.value===0)),o=n(()=>t.value.fadeImage?t.value.inverted?1-i.value:i.value:void 0),f=n(()=>{var T,E;if(t.value.hide&&t.value.inverted)return 0;const a=((T=u.value)==null?void 0:T.contentHeight)??0,A=((E=u.value)==null?void 0:E.extensionHeight)??0;return a+A});function b(){t.value.hide?t.value.inverted?s.value=c.value>m.value:s.value=g.value||c.value<m.value:s.value=!0}Y(()=>!!e.scrollBehavior,()=>{p(c,b,{immediate:!0}),p(t,b)});const{ssrBootStyles:L}=Q(),{layoutItemStyles:H}=$({id:e.name,order:n(()=>parseInt(e.order,10)),position:R(e,"location"),layoutSize:f,elementSize:h(void 0),active:s,absolute:R(e,"absolute")});return W(()=>{const[a]=x.filterProps(e);return k(x,j({ref:u,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...H.value,"--v-toolbar-image-opacity":o.value,height:void 0,...L.value},e.style]},a,{collapse:y.value,flat:d.value}),r)}),{}}}),re="/assets/icon-account-22f9dba9.svg",ne="/assets/icon-inbox-55d19511.svg",ie="/assets/icon-tasks-5924e277.svg",ce="/assets/icon-flag-en-20a62c34.svg",ue="/assets/icon-flag-fr-bc7ae873.svg",ve="/assets/icon-flag-ro-3687c8bf.svg",de="/assets/icon-flag-zh-5847577f.svg",he="/assets/icon-dd-chat-9f6a11ee.svg",pe="/assets/icon-dd-cart-9e6cd343.svg",me="/assets/icon-dd-invoice-29d63e5b.svg",ge="/assets/icon-dd-date-27cb0e7f.svg",fe="/assets/icon-dd-mobile-ea67da87.svg",be="/assets/icon-dd-lifebuoy-97fa2ed9.svg",_e="/assets/icon-dd-message-box-55a9c2fb.svg",Ae="/assets/icon-dd-application-731db9dc.svg",Ue=[{avatar:C,title:"Roman Joined the Team!",subtitle:"Congratulate him"},{avatar:X,title:"New message received",subtitle:"Salma sent you new message"},{avatar:Z,title:"New Payment received",subtitle:"Check your earnings"},{avatar:ee,title:"Jolly completed tasks",subtitle:"Assign her new tasks"},{avatar:te,title:"New Payment received",subtitle:"Check your earnings"},{avatar:C,title:"Roman Joined the Team!",subtitle:"Congratulate him"}],Ve=[{avatar:re,title:"My Profile",subtitle:"Account settings",href:"/apps/user/profile"},{avatar:ne,title:"My Inbox",subtitle:"Messages & Emails",href:"/"},{avatar:ie,title:"My Tasks",subtitle:"To-do and Daily tasks",href:"/"}],Le=[{title:"English",subtext:"UK",value:"en",avatar:ce},{title:"français",subtext:"French",value:"fr",avatar:ue},{title:"عربي",subtext:"Arbic",value:"ro",avatar:ve},{title:"中国人",subtext:"Chinese",value:"zh",avatar:de}],He=[{avatar:he,title:"Chat Application",subtext:"New messages arrived",href:"/apps/chats"},{avatar:pe,title:"eCommerce App",subtext:"learn more information",href:"/ecommerce/products"},{avatar:me,title:"User Profile App",subtext:"Get profile details",href:"/apps/user/profile"},{avatar:ge,title:"Calendar App",subtext:"Get dates",href:"/apps/calendar"},{avatar:fe,title:"Contact Application",subtext:"2 Unsaved Contacts",href:"/apps/contacts"},{avatar:be,title:"Account Setting App",subtext:"Account settings",href:"/pages/account-settings"},{avatar:_e,title:"Email App",subtext:"Get new emails",href:"/"},{avatar:Ae,title:"Notes Application",subtext:"To-do and Daily tasks",href:"/apps/notes"}],Ie=[{title:"Pricing Page",href:"/pages/pricing"},{title:"Authentication Design",href:"/auth/login"},{title:"Register Now",href:"/auth/register"},{title:"404 Error Page",href:"/auth/404"},{title:"Notes App",href:"/apps/notes"},{title:"User Application",href:"/apps/user/profile"},{title:"Blog Design",href:"/apps/blog/posts"},{title:"Shopping Cart",href:"/ecommerce/checkout"}],Ke=[{title:"Modern",href:"/dashboards/modern"},{title:"eCommerce",href:"/dashboards/ecommerce"},{title:"Contacts",href:"/apps/contacts"},{title:"Shop",href:"/ecommerce/products"},{title:"Checkout",href:"/ecommerce/checkout"},{title:"Chats",href:"/apps/chats"},{title:"Notes",href:"/apps/notes"},{title:"Pricing",href:"/pages/pricing"},{title:"Account Setting",href:"/pages/account-settings"}],Se="/assets/dark-rtl-logo-4f413703.svg",ye={class:"logo"},ke=["src"],Te=N({setup(e){return(l,r)=>(S(),D("div",ye,[k(_(V),{to:"/"},{default:M(()=>[U("img",{src:_(Se),alt:"home"},null,8,ke)]),_:1})]))}}),Ee="/assets/light-logo-rtl-3c5742a3.svg",xe={class:"logo"},Re=["src"],Ce=N({setup(e){return(l,r)=>(S(),D("div",xe,[k(_(V),{to:"/"},{default:M(()=>[U("img",{src:_(Ee),alt:"home"},null,8,Re)]),_:1})]))}}),Be={setup(e){const l=ae(),r=n(()=>l.actTheme==="DARK_BLUE_THEME"||l.actTheme==="DARK_AQUA_THEME"||l.actTheme==="DARK_ORANGE_THEME"||l.actTheme==="DARK_PURPLE_THEME"||l.actTheme==="DARK_GREEN_THEME"||l.actTheme==="DARK_CYAN_THEME");return(u,s)=>_(r)?(S(),B(Te,{key:0})):(S(),B(Ce,{key:1}))}},$e=Be;export{$e as R,Me as V,ue as a,ve as b,de as c,He as d,ce as f,Le as l,Ue as n,Ve as p,Ie as q,Ke as s};
