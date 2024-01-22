import{p as U,bw as he,cu as ke,aS as r,dZ as ee,cv as se,cy as z,aC as te,aK as X,du as ye,c$ as Se,cH as ne,m as ie,h as Z,dl as pe,cY as oe,c6 as ge,n as H,cq as q,cz as Ve,b as o,bZ as le,dq as we,d_ as Ce,cU as _e,d$ as Te,bF as xe,cx as ae,e0 as Fe,ce as ze,bA as Pe,cg as Me,cj as re,av as Le,dB as Re,at as Ne}from"./index-99c8948f.js";const W=Symbol.for("vuetify:v-slider");function Ee(e,t,a){const u=a==="vertical",c=t.getBoundingClientRect(),V="touches"in e?e.touches[0]:e;return u?V.clientY-(c.top+c.height/2):V.clientX-(c.left+c.width/2)}function Be(e,t){return"touches"in e&&e.touches.length?e.touches[0][t]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][t]:e[t]}const De=U({disabled:{type:Boolean,default:null},error:Boolean,readonly:{type:Boolean,default:null},max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...he(),...ke({elevation:2})},"Slider"),qe=e=>{const t=r(()=>parseFloat(e.min)),a=r(()=>parseFloat(e.max)),u=r(()=>+e.step>0?parseFloat(e.step):0),c=r(()=>Math.max(ee(u.value),ee(t.value)));function V(b){if(u.value<=0)return b;const f=ne(b,t.value,a.value),S=t.value%u.value,T=Math.round((f-S)/u.value)*u.value+S;return parseFloat(Math.min(T,a.value).toFixed(c.value))}return{min:t,max:a,step:u,decimals:c,roundValue:V}},$e=e=>{let{props:t,steps:a,onSliderStart:u,onSliderMove:c,onSliderEnd:V,getActiveThumb:b}=e;const{isRtl:f}=se(),S=z(t,"reverse"),T=r(()=>{let l=f.value?"rtl":"ltr";return t.reverse&&(l=l==="rtl"?"ltr":"rtl"),l}),{min:k,max:w,step:x,decimals:_,roundValue:P}=a,L=r(()=>parseInt(t.thumbSize,10)),B=r(()=>parseInt(t.tickSize,10)),R=r(()=>parseInt(t.trackSize,10)),C=r(()=>(w.value-k.value)/x.value),N=z(t,"disabled"),D=r(()=>t.direction==="vertical"),F=r(()=>t.error||t.disabled?void 0:t.thumbColor??t.color),s=r(()=>t.error||t.disabled?void 0:t.trackColor??t.color),p=r(()=>t.error||t.disabled?void 0:t.trackFillColor??t.color),y=te(!1),v=te(0),g=X(),m=X();function n(l){var Q;const d=t.direction==="vertical",ce=d?"top":"left",de=d?"height":"width",ve=d?"clientY":"clientX",{[ce]:me,[de]:be}=(Q=g.value)==null?void 0:Q.$el.getBoundingClientRect(),fe=Be(l,ve);let Y=Math.min(Math.max((fe-me-v.value)/be,0),1)||0;return(d||T.value==="rtl")&&(Y=1-Y),P(k.value+Y*(w.value-k.value))}const $=l=>{V({value:n(l)}),y.value=!1,v.value=0},I=l=>{m.value=b(l),m.value&&(m.value.focus(),y.value=!0,m.value.contains(l.target)?v.value=Ee(l,m.value,t.direction):(v.value=0,c({value:n(l)})),u({value:n(l)}))},E={passive:!0,capture:!0};function i(l){c({value:n(l)})}function h(l){l.stopPropagation(),l.preventDefault(),$(l),window.removeEventListener("mousemove",i,E),window.removeEventListener("mouseup",h)}function M(l){var d;$(l),window.removeEventListener("touchmove",i,E),(d=l.target)==null||d.removeEventListener("touchend",M)}function O(l){var d;I(l),window.addEventListener("touchmove",i,E),(d=l.target)==null||d.addEventListener("touchend",M,{passive:!1})}function A(l){l.preventDefault(),I(l),window.addEventListener("mousemove",i,E),window.addEventListener("mouseup",h,{passive:!1})}const K=l=>{const d=(l-k.value)/(w.value-k.value)*100;return ne(isNaN(d)?0:d,0,100)},j=z(t,"showTicks"),G=r(()=>j.value?t.ticks?Array.isArray(t.ticks)?t.ticks.map(l=>({value:l,position:K(l),label:l.toString()})):Object.keys(t.ticks).map(l=>({value:parseFloat(l),position:K(parseFloat(l)),label:t.ticks[l]})):C.value!==1/0?ye(C.value+1).map(l=>{const d=k.value+l*x.value;return{value:d,position:K(d)}}):[]:[]),ue=r(()=>G.value.some(l=>{let{label:d}=l;return!!d})),J={activeThumbRef:m,color:z(t,"color"),decimals:_,disabled:N,direction:z(t,"direction"),elevation:z(t,"elevation"),hasLabels:ue,horizontalDirection:T,isReversed:S,min:k,max:w,mousePressed:y,numTicks:C,onSliderMousedown:A,onSliderTouchstart:O,parsedTicks:G,parseMouseMove:n,position:K,readonly:z(t,"readonly"),rounded:z(t,"rounded"),roundValue:P,showTicks:j,startOffset:v,step:x,thumbSize:L,thumbColor:F,thumbLabel:z(t,"thumbLabel"),ticks:z(t,"ticks"),tickSize:B,trackColor:s,trackContainerRef:g,trackFillColor:p,trackSize:R,vertical:D};return Se(W,J),J},Ie=U({focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:[Boolean,Object],default:!0},...ie()},"VSliderThumb"),Ke=Z()({name:"VSliderThumb",directives:{Ripple:pe},props:Ie(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a,emit:u}=t;const c=oe(W);if(!c)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:V,step:b,vertical:f,disabled:S,thumbSize:T,thumbLabel:k,direction:w,readonly:x,elevation:_,isReversed:P,horizontalDirection:L,mousePressed:B,decimals:R}=c,{textColorClasses:C,textColorStyles:N}=ge(V),{pageup:D,pagedown:F,end:s,home:p,left:y,right:v,down:g,up:m}=Te,n=[D,F,s,p,y,v,g,m],$=r(()=>b.value?[1,2,3]:[1,5,10]);function I(i,h){if(!n.includes(i.key))return;i.preventDefault();const M=b.value||.1,O=(e.max-e.min)/M;if([y,v,g,m].includes(i.key)){const K=(L.value==="rtl"?[y,m]:[v,m]).includes(i.key)?1:-1,j=i.shiftKey?2:i.ctrlKey?1:0;h=h+K*M*$.value[j]}else if(i.key===p)h=e.min;else if(i.key===s)h=e.max;else{const A=i.key===F?1:-1;h=h-A*M*(O>100?O/10:10)}return Math.max(e.min,Math.min(e.max,h))}function E(i){const h=I(i,e.modelValue);h!=null&&u("update:modelValue",h)}return H(()=>{const i=q(f.value||P.value?100-e.position:e.position,"%"),{elevationClasses:h}=Ve(r(()=>S.value?void 0:_.value));return o("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&B.value},e.class],style:[{"--v-slider-thumb-position":i,"--v-slider-thumb-size":q(T.value)},e.style],role:"slider",tabindex:S.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":!!x.value,"aria-orientation":w.value,onKeydown:x.value?void 0:E},[o("div",{class:["v-slider-thumb__surface",C.value,h.value],style:{...N.value}},null),le(o("div",{class:["v-slider-thumb__ripple",C.value],style:N.value},null),[[we("ripple"),e.ripple,null,{circle:!0,center:!0}]]),o(Ce,{origin:"bottom center"},{default:()=>{var M;return[le(o("div",{class:"v-slider-thumb__label-container"},[o("div",{class:["v-slider-thumb__label"]},[o("div",null,[((M=a["thumb-label"])==null?void 0:M.call(a,{modelValue:e.modelValue}))??e.modelValue.toFixed(b.value?R.value:1)])])]),[[_e,k.value&&e.focused||k.value==="always"]])]}})])}),{}}});const Oe=U({start:{type:Number,required:!0},stop:{type:Number,required:!0},...ie()},"VSliderTrack"),Ae=Z()({name:"VSliderTrack",props:Oe(),emits:{},setup(e,t){let{slots:a}=t;const u=oe(W);if(!u)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:c,horizontalDirection:V,parsedTicks:b,rounded:f,showTicks:S,tickSize:T,trackColor:k,trackFillColor:w,trackSize:x,vertical:_,min:P,max:L}=u,{roundedClasses:B}=xe(f),{backgroundColorClasses:R,backgroundColorStyles:C}=ae(w),{backgroundColorClasses:N,backgroundColorStyles:D}=ae(k),F=r(()=>`inset-${_.value?"block-end":"inline-start"}`),s=r(()=>_.value?"height":"width"),p=r(()=>({[F.value]:"0%",[s.value]:"100%"})),y=r(()=>e.stop-e.start),v=r(()=>({[F.value]:q(e.start,"%"),[s.value]:q(y.value,"%")})),g=r(()=>S.value?(_.value?b.value.slice().reverse():b.value).map((n,$)=>{var i;const I=_.value?"bottom":"margin-inline-start",E=n.value!==P.value&&n.value!==L.value?q(n.position,"%"):void 0;return o("div",{key:n.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":n.position>=e.start&&n.position<=e.stop,"v-slider-track__tick--first":n.value===P.value,"v-slider-track__tick--last":n.value===L.value}],style:{[I]:E}},[(n.label||a["tick-label"])&&o("div",{class:"v-slider-track__tick-label"},[((i=a["tick-label"])==null?void 0:i.call(a,{tick:n,index:$}))??n.label])])}):[]);return H(()=>o("div",{class:["v-slider-track",B.value,e.class],style:[{"--v-slider-track-size":q(x.value),"--v-slider-tick-size":q(T.value),direction:_.value?void 0:V.value},e.style]},[o("div",{class:["v-slider-track__background",N.value,{"v-slider-track__background--opacity":!!c.value||!w.value}],style:{...p.value,...D.value}},null),o("div",{class:["v-slider-track__fill",R.value],style:{...v.value,...C.value}},null),S.value&&o("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":S.value==="always"}]},[g.value])])),{}}}),je=U({...Fe(),...De(),...ze(),modelValue:{type:[Number,String],default:0}},"VSlider"),Ye=Z()({name:"VSlider",props:je(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,start:e=>!0,end:e=>!0},setup(e,t){let{slots:a,emit:u}=t;const c=X(),{rtlClasses:V}=se(),b=qe(e),f=Pe(e,"modelValue",void 0,s=>{const p=typeof s=="string"?parseFloat(s):s??b.min.value;return b.roundValue(p)}),{min:S,max:T,mousePressed:k,roundValue:w,onSliderMousedown:x,onSliderTouchstart:_,trackContainerRef:P,position:L,hasLabels:B,readonly:R}=$e({props:e,steps:b,onSliderStart:()=>{u("start",f.value)},onSliderEnd:s=>{let{value:p}=s;const y=w(p);f.value=y,u("end",y)},onSliderMove:s=>{let{value:p}=s;return f.value=w(p)},getActiveThumb:()=>{var s;return(s=c.value)==null?void 0:s.$el}}),{isFocused:C,focus:N,blur:D}=Me(e),F=r(()=>L(f.value));return H(()=>{const[s,p]=re.filterProps(e),y=!!(e.label||a.label||a.prepend);return o(re,Ne({class:["v-slider",{"v-slider--has-labels":!!a["tick-label"]||B.value,"v-slider--focused":C.value,"v-slider--pressed":k.value,"v-slider--disabled":e.disabled},V.value,e.class],style:e.style},s,{focused:C.value}),{...a,prepend:y?v=>{var g,m;return o(Le,null,[((g=a.label)==null?void 0:g.call(a,v))??e.label?o(Re,{id:v.id.value,class:"v-slider__label",text:e.label},null):void 0,(m=a.prepend)==null?void 0:m.call(a,v)])}:void 0,default:v=>{let{id:g,messagesId:m}=v;return o("div",{class:"v-slider__container",onMousedown:R.value?void 0:x,onTouchstartPassive:R.value?void 0:_},[o("input",{id:g.value,name:e.name||g.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:f.value},null),o(Ae,{ref:P,start:0,stop:F.value},{"tick-label":a["tick-label"]}),o(Ke,{ref:c,"aria-describedby":m.value,focused:C.value,min:S.value,max:T.value,modelValue:f.value,"onUpdate:modelValue":n=>f.value=n,position:F.value,elevation:e.elevation,onFocus:N,onBlur:D},{"thumb-label":a["thumb-label"]})])}})}),{}}});export{Ye as V,$e as a,Ae as b,Ke as c,Ee as g,De as m,qe as u};