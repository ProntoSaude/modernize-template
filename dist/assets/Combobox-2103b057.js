import{_ as Ie}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-78f8c4ba.js";import{_ as Fe}from"./UiParentCard.vue_vue_type_script_setup_true_lang-e2e1aa45.js";import{_ as ue}from"./UiChildCard.vue_vue_type_script_setup_true_lang-0bcf515b.js";import{V as x,a as z}from"./VRow-b74bf81b.js";import{p as Pe,c0 as Se,c1 as Ae,by as Re,c2 as Me,c3 as Ue,h as Ee,c4 as Te,aK as _,aC as B,bA as ne,aS as g,c5 as Ne,c6 as $e,c7 as Le,c8 as K,aR as O,c9 as Be,ca as oe,n as Ke,bG as Oe,aJ as se,b as a,av as E,aE as ze,at as U,aD as Je,as as ie,cb as je,bc as re,ao as de,bJ as He,d as W,cc as Ge,cd as qe,ax as X,o as J,c as Y,w as r,ah as Qe,az as We,ai as ce}from"./index-99c8948f.js";import"./VCard-05d5c4ba.js";function Xe(l,s,b){if(s==null)return l;if(Array.isArray(s))throw new Error("Multiple matches is not implemented");return typeof s=="number"&&~s?a(E,null,[a("span",{class:"v-combobox__unmask"},[l.substr(0,s)]),a("span",{class:"v-combobox__mask"},[l.substr(s,b)]),a("span",{class:"v-combobox__unmask"},[l.substr(s+b)])]):l}const Ye=Pe({autoSelectFirst:{type:[Boolean,String]},delimiters:Array,...Se({filterKeys:["title"]}),...Ae({hideNoData:!0,returnObject:!0}),...Re(Me({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...Ue({transition:!1})},"VCombobox"),P=Ee()({name:"VCombobox",props:Ye(),emits:{"update:focused":l=>!0,"update:modelValue":l=>!0,"update:search":l=>!0,"update:menu":l=>!0},setup(l,s){var ae;let{emit:b,slots:t}=s;const{t:c}=Te(),u=_(),C=B(!1),w=B(!0),T=_(!1),Z=_(),j=ne(l,"menu"),m=g({get:()=>j.value,set:e=>{var n;j.value&&!e&&((n=Z.value)!=null&&n.ΨopenChildren)||(j.value=e)}}),i=B(-1);let H=!1;const ve=g(()=>{var e;return(e=u.value)==null?void 0:e.color}),{items:G,transformIn:me,transformOut:fe}=Ne(l),{textColorClasses:be,textColorStyles:pe}=$e(ve),p=ne(l,"modelValue",[],e=>me(qe(e)),e=>{const n=fe(e);return l.multiple?n:n[0]??null}),S=Le(),A=B(l.multiple?"":((ae=p.value[0])==null?void 0:ae.title)??""),v=g({get:()=>A.value,set:e=>{var n;if(A.value=e,l.multiple||(p.value=[K(l,e)]),e&&l.multiple&&((n=l.delimiters)!=null&&n.length)){const d=e.split(new RegExp(`(?:${l.delimiters.join("|")})+`));d.length>1&&(d.forEach(V=>{V=V.trim(),V&&I(K(l,V))}),A.value="")}e||(i.value=-1),w.value=!e}});O(A,e=>{H?oe(()=>H=!1):C.value&&!m.value&&(m.value=!0),b("update:search",e)}),O(p,e=>{var n;l.multiple||(A.value=((n=e[0])==null?void 0:n.title)??"")});const{filteredItems:M,getMatches:Ve}=Be(l,G,g(()=>w.value?void 0:v.value)),D=g(()=>p.value.map(e=>G.value.find(n=>l.valueComparator(n.value,e.value))||e)),F=g(()=>l.hideSelected?M.value.filter(e=>!D.value.some(n=>n.value===e.value)):M.value),q=g(()=>D.value.map(e=>e.props.value)),ee=g(()=>D.value[i.value]),N=g(()=>{var n;return(l.autoSelectFirst===!0||l.autoSelectFirst==="exact"&&v.value===((n=F.value[0])==null?void 0:n.title))&&F.value.length>0&&!w.value&&!T.value}),Q=g(()=>l.hideNoData&&!G.value.length||l.readonly||(S==null?void 0:S.isReadonly.value)),le=_();function he(e){H=!0,l.openOnClear&&(m.value=!0)}function ye(){Q.value||(m.value=!0)}function ge(e){Q.value||(C.value&&(e.preventDefault(),e.stopPropagation()),m.value=!m.value)}function xe(e){var V;if(l.readonly||S!=null&&S.isReadonly.value)return;const n=u.value.selectionStart,d=q.value.length;if((i.value>-1||["Enter","ArrowDown","ArrowUp"].includes(e.key))&&e.preventDefault(),["Enter","ArrowDown"].includes(e.key)&&(m.value=!0),["Escape"].includes(e.key)&&(m.value=!1),["Enter","Escape","Tab"].includes(e.key)&&(N.value&&["Enter","Tab"].includes(e.key)&&I(M.value[0]),w.value=!0),e.key==="ArrowDown"&&N.value&&((V=le.value)==null||V.focus("next")),!!l.multiple){if(["Backspace","Delete"].includes(e.key)){if(i.value<0){e.key==="Backspace"&&!v.value&&(i.value=d-1);return}const o=i.value;ee.value&&I(ee.value),i.value=o>=d-1?d-2:o}if(e.key==="ArrowLeft"){if(i.value<0&&n>0)return;const o=i.value>-1?i.value-1:d-1;D.value[o]?i.value=o:(i.value=-1,u.value.setSelectionRange(v.value.length,v.value.length))}if(e.key==="ArrowRight"){if(i.value<0)return;const o=i.value+1;D.value[o]?i.value=o:(i.value=-1,u.value.setSelectionRange(0,0))}e.key==="Enter"&&v.value&&(I(K(l,v.value)),v.value="")}}function _e(e){var n;e.key==="Tab"&&((n=u.value)==null||n.focus())}function Ce(){var e;C.value&&(w.value=!0,(e=u.value)==null||e.focus())}function I(e){if(l.multiple){const n=q.value.findIndex(d=>l.valueComparator(d,e.value));if(n===-1)p.value=[...p.value,e];else{const d=[...p.value];d.splice(n,1),p.value=d}v.value=""}else p.value=[e],A.value=e.title,oe(()=>{m.value=!1,w.value=!0})}function ke(e){C.value=!0,setTimeout(()=>{T.value=!0})}function we(e){T.value=!1}function De(e){(e==null||e===""&&!l.multiple)&&(p.value=[])}return O(M,e=>{!e.length&&l.hideNoData&&(m.value=!1)}),O(C,(e,n)=>{e||e===n||(i.value=-1,m.value=!1,N.value&&!T.value&&!D.value.some(d=>{let{value:V}=d;return V===F.value[0].value})?I(F.value[0]):l.multiple&&v.value&&(p.value=[...p.value,K(l,v.value)],v.value=""))}),Ke(()=>{const e=!!(l.chips||t.chip),n=!!(!l.hideNoData||F.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),d=p.value.length>0,[V]=se.filterProps(l);return a(se,U({ref:u},V,{modelValue:v.value,"onUpdate:modelValue":[o=>v.value=o,De],focused:C.value,"onUpdate:focused":o=>C.value=o,validationValue:p.externalValue,dirty:d,class:["v-combobox",{"v-combobox--active-menu":m.value,"v-combobox--chips":!!l.chips,"v-combobox--selection-slot":!!t.selection,"v-combobox--selecting-index":i.value>-1,[`v-combobox--${l.multiple?"multiple":"single"}`]:!0},l.class],style:l.style,readonly:l.readonly,placeholder:d?void 0:l.placeholder,"onClick:clear":he,"onMousedown:control":ye,onKeydown:xe}),{...t,default:()=>a(E,null,[a(ze,U({ref:Z,modelValue:m.value,"onUpdate:modelValue":o=>m.value=o,activator:"parent",contentClass:"v-combobox__content",disabled:Q.value,eager:l.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:l.transition,onAfterLeave:Ce},l.menuProps),{default:()=>[n&&a(Je,{ref:le,selected:q.value,selectStrategy:l.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onKeydown:_e,onFocusin:ke,onFocusout:we,tabindex:"-1"},{default:()=>{var o,h,k;return[(o=t["prepend-item"])==null?void 0:o.call(t),!F.value.length&&!l.hideNoData&&(((h=t["no-data"])==null?void 0:h.call(t))??a(ie,{title:c(l.noDataText)},null)),F.value.map((f,R)=>{var te;const y=U(f.props,{key:R,active:N.value&&R===0?!0:void 0,onClick:()=>I(f)});return((te=t.item)==null?void 0:te.call(t,{item:f,index:R,props:y}))??a(ie,y,{prepend:$=>{let{isSelected:L}=$;return a(E,null,[l.multiple&&!l.hideSelected?a(je,{key:f.value,modelValue:L,ripple:!1,tabindex:"-1"},null):void 0,f.props.prependIcon&&a(re,{icon:f.props.prependIcon},null)])},title:()=>{var $,L;return w.value?f.title:Xe(f.title,($=Ve(f))==null?void 0:$.title,((L=v.value)==null?void 0:L.length)??0)}})}),(k=t["append-item"])==null?void 0:k.call(t)]}})]}),D.value.map((o,h)=>{var R;function k(y){y.stopPropagation(),y.preventDefault(),I(o)}const f={"onClick:close":k,onMousedown(y){y.preventDefault(),y.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return a("div",{key:o.value,class:["v-combobox__selection",h===i.value&&["v-combobox__selection--selected",be.value]],style:h===i.value?pe.value:{}},[e?t.chip?a(He,{key:"chip-defaults",defaults:{VChip:{closable:l.closableChips,size:"small",text:o.title}}},{default:()=>{var y;return[(y=t.chip)==null?void 0:y.call(t,{item:o,index:h,props:f})]}}):a(de,U({key:"chip",closable:l.closableChips,size:"small",text:o.title},f),null):((R=t.selection)==null?void 0:R.call(t,{item:o,index:h}))??a("span",{class:"v-combobox__selection-text"},[o.title,l.multiple&&h<D.value.length-1&&a("span",{class:"v-combobox__selection-comma"},[W(",")])])])})]),"append-inner":function(){var f;for(var o=arguments.length,h=new Array(o),k=0;k<o;k++)h[k]=arguments[k];return a(E,null,[(f=t["append-inner"])==null?void 0:f.call(t,...h),(!l.hideNoData||l.items.length)&&l.menuIcon?a(re,{class:"v-combobox__menu-icon",icon:l.menuIcon,onMousedown:ge,onClick:Ge},null):void 0])}})}),Oe({isFocused:C,isPristine:w,menu:m,search:v,selectionIndex:i,filteredItems:M,select:I},u)}}),Ze=X({setup(l){const s=_("foo"),b=_(["Programming","Design","Vue","Vuetify"]);return(t,c)=>(J(),Y("div",null,[a(z,null,{default:r(()=>[a(x,{cols:"12"},{default:r(()=>[a(P,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),items:b.value,label:"Default","hide-details":""},null,8,["modelValue","items"])]),_:1}),a(x,{cols:"12"},{default:r(()=>[a(P,{modelValue:s.value,"onUpdate:modelValue":c[1]||(c[1]=u=>s.value=u),items:b.value,density:"comfortable",label:"Comfortable","hide-details":""},null,8,["modelValue","items"])]),_:1}),a(x,{cols:"12"},{default:r(()=>[a(P,{modelValue:s.value,"onUpdate:modelValue":c[2]||(c[2]=u=>s.value=u),items:b.value,density:"compact",label:"Compact","hide-details":""},null,8,["modelValue","items"])]),_:1})]),_:1})]))}}),el=X({setup(l){const s=_(["Vuetify","Programming"]),b=_(["Programming","Design","Vue","Vuetify"]);return(t,c)=>(J(),Y("div",null,[a(z,null,{default:r(()=>[a(x,{cols:"12"},{default:r(()=>[a(P,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),items:b.value,"hide-details":"",label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue","items"])]),_:1}),a(x,{cols:"12"},{default:r(()=>[a(P,{modelValue:s.value,"onUpdate:modelValue":c[1]||(c[1]=u=>s.value=u),items:b.value,"hide-details":"",label:"I use chips",multiple:"",chips:""},null,8,["modelValue","items"])]),_:1}),a(x,{cols:"12"},{default:r(()=>[a(P,{modelValue:s.value,"onUpdate:modelValue":c[2]||(c[2]=u=>s.value=u),items:b.value,"hide-details":"",label:"I use a scoped slot",multiple:""},{selection:r(u=>[(J(),Qe(de,U({key:JSON.stringify(u.item)},u.attrs,{"model-value":u.selected,disabled:u.disabled,size:"small","onClick:close":C=>u.parent.selectItem(u.item)}),{prepend:r(()=>[a(We,{class:"bg-primary text-uppercase",start:""},{default:r(()=>[W(ce(u.item.title.slice(0,1)),1)]),_:2},1024)]),default:r(()=>[W(" "+ce(u.item.title),1)]),_:2},1040,["model-value","disabled","onClick:close"]))]),_:1},8,["modelValue","items"])]),_:1}),a(x,{cols:"12"},{default:r(()=>[a(P,{modelValue:s.value,"onUpdate:modelValue":c[3]||(c[3]=u=>s.value=u),"hide-details":"",label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1})]),_:1})]))}}),sl=X({setup(l){const s=_({title:"Combobox"}),b=_([{text:"Dashboard",disabled:!1,href:"#"},{text:"Combobox",disabled:!0,href:"#"}]);return(t,c)=>(J(),Y(E,null,[a(Ie,{title:s.value.title,breadcrumbs:b.value},null,8,["title","breadcrumbs"]),a(z,null,{default:r(()=>[a(x,{cols:"12"},{default:r(()=>[a(Fe,{title:"Combobox"},{default:r(()=>[a(z,null,{default:r(()=>[a(x,{cols:"12",sm:"12"},{default:r(()=>[a(ue,{title:"Density"},{default:r(()=>[a(Ze)]),_:1})]),_:1}),a(x,{cols:"12",sm:"12"},{default:r(()=>[a(ue,{title:"Multiple"},{default:r(()=>[a(el)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64))}});export{sl as default};