(function(){"use strict";var t={6913:function(t,e,i){var a=i(144),n=i(998),s=i(6232),o=i(4291),r=i(3059),c=i(3687),l=i(7953),d=function(){var t=this,e=t._self._c;return e(n.Z,{attrs:{light:""}},[e(s.Z,{attrs:{"clipped-left":t.clipped,fixed:"",app:"",dark:""}},[e(l.qW,{staticClass:"pl-0 pl-sm-2"},[e("MainLogo",{attrs:{alt:"Fume"}})],1),e(c.Z),t.$vuetify.breakpoint.mdAndUp?e(l.lj,{staticClass:"ml-8"},t._l(t.menuItems,(function(i){return e(o.Z,{key:i.title,attrs:{text:""},on:{click:function(e){return t.$vuetify.goTo(`#section${i.to}`,{duration:300,offset:0,easing:"easeInOutCubic"})}}},[e("div",{attrs:{color:"#fff"}},[t._v(t._s(i.title))])])})),1):t._e()],1),e(r.Z,{attrs:{light:""}},[e("router-view")],1)],1)},m=[],u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mainLogo",on:{click:function(e){return t.$vuetify.goTo("#section0",{duration:300,offset:0,easing:"easeInOutCubic"})}}},[e("img",{staticClass:"mr-2",attrs:{src:i(9574)}}),t._m(0)])},f=[function(){var t=this,e=t._self._c;return e("div",{staticStyle:{color:"#fff","font-size":"2rem"}},[e("span",{staticStyle:{color:"#e54617","font-weight":"bold"}},[t._v("F")]),t._v("ume ")])}],p={name:"MainLogo",props:{},data:()=>({})},g=p,v=i(1001),w=(0,v.Z)(g,u,f,!1,null,"0345c7c8",null),A=w.exports,h={name:"App",data:()=>({clipped:!1,fixed:!1,menuItems:[{title:"Aroma & business",to:"1"},{title:"Why Fume",to:"2"},{title:"Team",to:"3"}]}),components:{MainLogo:A},methods:{},mounted(){}},y=h,x=(0,v.Z)(y,d,m,!1,null,null,null),b=x.exports,k=i(8345),D=i(1998),P=i(4886),I=i(266),L=i(2118),F=i(5495),C=i(1713),G=i(8893),U=i(3950),Z=i(6750),B=i(6746),H=function(){var t=this,e=t._self._c;return e(L.Z,{directives:[{def:B.Z,name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],staticClass:"pa-0",staticStyle:{height:"100%"},attrs:{column:"","justify-center":"","align-center":"",fluid:""}},[e("div",{style:`height: ${t.windowSize.y}px; position: relative`,attrs:{id:"section0"}},[e("div",{staticClass:"introT my-auto",staticStyle:{height:"100%",width:"100vw"}},[e("div",{staticClass:"videoPly",staticStyle:{width:"100vw"}},[t.$vuetify.breakpoint.xsOnly?e(F.Z,{attrs:{position:"center left",src:i(2498),height:t.windowSize.y,gradient:"to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"}}):e("video",{staticClass:"videoMedia",staticStyle:{width:"100vw"},attrs:{src:i(462),autoplay:"",muted:"",loop:"",playsinline:"",poster:i(2498)},domProps:{muted:!0}})],1),e("div",{staticClass:"introT__content py-auto",staticStyle:{height:"100%"}},[e("div",{staticStyle:{width:"100%",height:"100%",display:"flex","flex-direction":"column","justify-content":"space-around"}},[e(C.Z,{staticClass:"ma-0"},[e(I.Z,{staticStyle:{display:"flex","align-items":"center"},attrs:{cols:"12"}},[e("div",{staticClass:"introT__container mx-auto"},[e("h1",{staticClass:"intro__title mb-0 noBreak",staticStyle:{"line-height":"120%","text-shadow":"0px 0px 5px rgba(0, 0, 0, 0.55)"},style:t.$vuetify.breakpoint.mdAndUp?"font-size: 10rem":t.$vuetify.breakpoint.smOnly?"font-size: 8rem":"font-size: 5rem"},[e("span",{staticStyle:{color:"#e54617"}},[t._v("F")]),t._v("ume ")]),e("p",{staticClass:"intro__text noBreak mb-0 mt-6",staticStyle:{"line-height":"120%","text-shadow":"0px 0px 5px rgba(0, 0, 0, 0.35)"},style:t.$vuetify.breakpoint.mdAndUp?"font-size: 1.5rem":t.$vuetify.breakpoint.smOnly?"font-size: 1.3rem":"font-size: 1rem"},[t._v(" Elevate Every Moment with Custom Fragrances! ")])])])],1)],1)])])]),e("div",{staticClass:"section d-flex",staticStyle:{background:"#f6e0d3"},style:`min-height: ${t.windowSize.y}px; position: relative`,attrs:{id:"section1"}},[e("div",{staticClass:"section_content",class:t.$vuetify.breakpoint.mdAndUp?"px-6":t.$vuetify.breakpoint.smOnly?"px-4":"px-2"},[e("div",{staticClass:"mx-2"},[e("h2",{staticClass:"py-8",style:t.$vuetify.breakpoint.mdAndUp?"font-size: 2rem":t.$vuetify.breakpoint.smOnly?"font-size: 1.6rem":"font-size: 1.4rem"},[t._v(" Elevate your business with fragrant odors! ")]),e(C.Z,{staticClass:"ma-0"},[t._l(t.marketingCards,(function(t){return e(I.Z,{key:t.id,staticClass:"col-12 col-sm-6 col-md-3"},[e("CommonCard",{attrs:{item:t}})],1)})),e("ul",{staticClass:"mb-14 pr-3 pl-12"},t._l(t.marketingList,(function(i){return e("li",{directives:[{def:Z.Z,name:"intersect",rawName:"v-intersect.once",value:t.onIntersect,expression:"onIntersect",modifiers:{once:!0}}],key:i,staticClass:"pa-4",staticStyle:{color:"#e54617"}},[e("span",{staticStyle:{color:"rgba(0, 0, 0, 0.87)","font-size":"1.3rem"}},[t._v(t._s(i))])])})),0)],2)],1)])]),e("div",{staticClass:"section d-flex",staticStyle:{background:"#272c36"},style:`min-height: ${t.windowSize.y}px; position: relative`,attrs:{id:"section2"}},[e("div",{staticClass:"section_content",class:t.$vuetify.breakpoint.mdAndUp?"px-6":t.$vuetify.breakpoint.smOnly?"px-4":"px-2"},[e("div",{staticClass:"mx-2"},[e("h2",{staticClass:"py-8",staticStyle:{color:"#fff"},style:t.$vuetify.breakpoint.mdAndUp?"font-size: 2rem":t.$vuetify.breakpoint.smOnly?"font-size: 1.6rem":"font-size: 1.4rem"},[t._v(" Why us ")])]),e(G.Z,{directives:[{def:Z.Z,name:"intersect",rawName:"v-intersect.once",value:t.onIntersectTimeLineDot,expression:"onIntersectTimeLineDot",modifiers:{once:!0}}],staticClass:"mt-3 mx-6 my-8",attrs:{dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.timelineList,(function(i){return e(U.Z,{key:i.id,attrs:{itemId:i.id,color:"#e54617",large:""},scopedSlots:t._u([{key:"opposite",fn:function(){return[e("span",{staticStyle:{color:"#fff"}},[t._v(t._s(i.info))])]},proxy:!0}],null,!0)},[e(D.Z,{directives:[{def:Z.Z,name:"intersect",rawName:"v-intersect.once",value:t.onIntersectTimeLine,expression:"onIntersectTimeLine",modifiers:{once:!0}}],staticClass:"elevation-2",staticStyle:{background:"#4f5980","border-radius":"16px"},attrs:{itemId:i.id}},[e(P.EB,{staticClass:"text-h5",staticStyle:{background:"#4f5980",color:"#fff","border-radius":"16px 16px 0 0"}},[t._v(" "+t._s(i.title)+" ")]),e(P.ZB,{staticClass:"pt-4",staticStyle:{background:"#fff","min-height":"76px"}},[t._v(" "+t._s(i.text)+" ")])],1)],1)})),1)],1)]),e("div",{staticClass:"section d-flex",staticStyle:{background:"#f6e0d3"},style:`min-height: calc(${t.windowSize.y}px - 112px); position: relative`,attrs:{id:"section3"}},[e("div",{staticClass:"section_content",class:t.$vuetify.breakpoint.mdAndUp?"px-6":t.$vuetify.breakpoint.smOnly?"px-4":"px-2"},[e("div",{staticClass:"mx-2"},[e("h2",{staticClass:"py-8",style:t.$vuetify.breakpoint.mdAndUp?"font-size: 2rem":t.$vuetify.breakpoint.smOnly?"font-size: 1.6rem":"font-size: 1.4rem"},[t._v(" Team ")]),e("div",{staticStyle:{position:"relative"},attrs:{id:"team"}},[e("div",{staticStyle:{position:"absolute",top:"0",left:"300px","border-radius":"16px",overflow:"auto","z-index":"1"}},[e(D.Z,{directives:[{def:Z.Z,name:"intersect",rawName:"v-intersect.once",value:t.onIntersect1,expression:"onIntersect1",modifiers:{once:!0}}],staticClass:"mx-auto",staticStyle:{overflow:"hidden"},attrs:{elevation:"10","max-width":"400",id:"queue1"}},[e(F.Z,{staticStyle:{overflow:"hidden"},attrs:{src:i(9265),height:"300px"}})],1)],1),e("div",{staticStyle:{position:"absolute",top:"280px",left:"250px","border-radius":"16px",overflow:"auto","z-index":"3"}},[e(D.Z,{directives:[{def:Z.Z,name:"intersect",rawName:"v-intersect.once",value:t.onIntersect2,expression:"onIntersect2",modifiers:{once:!0}}],staticClass:"mx-auto",staticStyle:{overflow:"hidden"},attrs:{elevation:"10","max-width":"300",id:"queue2"}},[e(F.Z,{staticStyle:{overflow:"hidden"},attrs:{src:i(9963),height:"200px"}})],1)],1),e("div",{staticStyle:{position:"absolute",top:"50px",left:"0","border-radius":"16px",overflow:"auto","z-index":"2"}},[e(D.Z,{directives:[{def:Z.Z,name:"intersect",rawName:"v-intersect.once",value:t.onIntersect3,expression:"onIntersect3",modifiers:{once:!0}}],staticClass:"mx-auto",staticStyle:{overflow:"hidden"},attrs:{elevation:"10","max-width":"350",id:"queue3"}},[e(F.Z,{staticStyle:{overflow:"hidden"},attrs:{src:i(6421),height:"300px"}})],1)],1),e("div",{staticStyle:{position:"absolute",top:"80px",right:"0","border-radius":"16px",overflow:"auto","z-index":"5"}},[e(D.Z,{directives:[{def:Z.Z,name:"intersect",rawName:"v-intersect.once",value:t.onIntersect4,expression:"onIntersect4",modifiers:{once:!0}}],staticClass:"mx-auto",staticStyle:{overflow:"hidden"},attrs:{elevation:"10","max-width":"600",id:"queue4"}},[e(F.Z,{staticStyle:{overflow:"hidden"},attrs:{src:i(8),"min-height":"300px"}})],1)],1)])])])]),e("FooterComponent")],1)},S=[],T=function(){var t=this,e=t._self._c;return e(D.Z,{directives:[{def:Z.Z,name:"intersect",rawName:"v-intersect.once",value:t.onIntersect,expression:"onIntersect",modifiers:{once:!0}}],class:[t.isHover?"elevation-10 on-hover":"elevation-1","common-card"],on:{mouseover:function(e){t.isHover=!0},focusin:function(e){t.isHover=!0},mouseleave:function(e){t.isHover=!1},focusout:function(e){t.isHover=!1}}},[e(F.Z,{attrs:{src:t.item.img,height:"225px",gradient:"to top left, rgba(181,65,240,.2), rgba(25,32,72,.7)"}},[e(P.ZB,{staticClass:"text-h6 white--text"},[e(C.Z,{staticClass:"fill-height flex-column",attrs:{justify:"space-between"}},[e("p",{staticClass:"ma-4 mt-10 subheading"},[t._v(" "+t._s(t.item.text)+" ")])])],1)],1)],1)},z=[],j={name:"CommonCard",props:{item:{type:Object,default(){return{}}}},data:()=>({isHover:!1}),methods:{onIntersect(t){const e=t[0].target;e.classList.add("animate__animated","animate__backInUp","animate__slow"),e.addEventListener("animationend",(()=>{e.classList.remove("animate__animated","animate__backInUp","animate__slow")}))}}},M=j,W=(0,v.Z)(M,T,z,!1,null,"13b331ea",null),R=W.exports,K=i(8271),Q=function(){var t=this,e=t._self._c;return e(K.Z,{attrs:{dark:"",padless:""}},[e(D.Z,{staticClass:"flex flex-column-reverse flex-sm-row align-center",staticStyle:{display:"flex",margin:"0 auto"},attrs:{color:"#272727",flat:"",tile:"","max-width":"1920px"}},[e("div",{staticClass:"mx-4 my-4",staticStyle:{display:"inline-flex",color:"#adadad"}},[t._v(" ©"+t._s((new Date).getFullYear())+" Fume ")]),e(c.Z),e("div",{staticStyle:{display:"inline-flex"}},[e(o.Z,{attrs:{plain:"",target:"_blank",href:"https://startupweekend.uz/"}},[e(F.Z,{attrs:{alt:"startupweekend","max-height":"150","max-width":"100",src:"data:image/png;base64,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"}})],1)],1)],1)],1)},N=[],O={name:"FooterComponent",props:{},data:()=>({})},E=O,Y=(0,v.Z)(E,Q,N,!1,null,null,null),q=Y.exports,X={name:"IndexView",components:{CommonCard:R,FooterComponent:q},data:()=>({loading:!1,windowSize:{x:0,y:0},marketingCards:[{id:0,text:"Increase awareness of your brand",img:"https://img.freepik.com/premium-photo/abstract-blue-outer-space-science-background-vibrant-colors-galaxy-sky-ocean-sea-mystical-liquid-chemicals-smoke-chemistry-and-biology-creative-backdrop-paper_154092-14077.jpg?w=826"},{id:1,text:"Reduce stress and anxiety in your workplace",img:"https://img.freepik.com/free-photo/closeup-shot-of-a-beautiful-small-river-running-through-rocks-and-debris-in-a-forest_181624-3744.jpg?w=360&t=st=1684650315~exp=1684650915~hmac=0e9a8ff8b11085a4f3e7782483ad0cad5fc8b099b8334fd227f3f8ef431f25f0"},{id:2,text:"Escalate your sales",img:"https://img.freepik.com/premium-photo/boiling-water-splash-with-steam-on-black-background_213438-1170.jpg?w=740"},{id:3,text:"Enhance customer service",img:"https://img.freepik.com/free-photo/abstract-heavy-blue-haze-in-dark-liquid_23-2148102012.jpg"}],marketingList:["Scents affect on a subconscious level. They directly influence the part of brain which is responsible for emotions, desires and mood","A person can remember more than 10 000 odors. And they are stored in a memory for 40 times more than sounds and visual images","Fragrances express various feelings. With the help of aromas, you can remind about  your business and attract clients"],timelineList:[{id:1,title:"We are among pioneers",text:"Business is expanding in Uzbekistan, but aroma businesses remain a few"},{id:2,title:"Aroma branding",text:"We will select the fragrance, which will become a hallmark of your brand!"},{id:3,title:"Aroma marketing",text:"Using pleasant and familiar odors with the intention of positive interaction with clients"},{id:4,title:"Aroma products",text:"We create premium aroma products for presenting them to you clients or partners"}]}),mounted(){this.onResize()},methods:{onResize(){this.windowSize={x:window.innerWidth,y:window.innerHeight}},onIntersect(t){const e=t[0].target;e.classList.add("animate__animated","animate__backInUp","animate__slow"),e.addEventListener("animationend",(()=>{e.classList.remove("animate__animated","animate__backInUp","animate__slow")}))},onIntersectTimeLine(t){const e=t[0].target;let i=e.getAttribute("itemId");+i%2==0?(e.classList.add("animate__backInLeft"),e.addEventListener("animationend",(()=>{e.classList.remove("animate__backInLeft")}))):(e.classList.add("animate__backInRight"),e.addEventListener("animationend",(()=>{e.classList.remove("animate__backInRight")}))),e.classList.add("animate__animated","animate__slow"),e.addEventListener("animationend",(()=>{e.classList.remove("animate__animated","animate__slow")}))},onIntersectTimeLineDot(t){const e=t[0].target;e.classList.add("animate__animated","animate__zoomIn","animate__slow"),e.addEventListener("animationend",(()=>{e.classList.remove("animate__animated","animate__zoomIn","animate__slow")}))},onIntersect1(t){const e=t[0].target;e.classList.add("animate__animated","animate__backInDown","animate__slow"),e.addEventListener("animationend",(()=>{e.classList.remove("animate__animated","animate__backInDown","animate__slow")}))},onIntersect2(t){const e=t[0].target;e.classList.add("animate__animated","animate__backInDown","animate__slow"),e.addEventListener("animationend",(()=>{e.classList.remove("animate__animated","animate__backInUp","animate__slow")}))},onIntersect3(t){const e=t[0].target;e.classList.add("animate__animated","animate__backInUp","animate__slow"),e.addEventListener("animationend",(()=>{e.classList.remove("animate__animated","animate__backInDown","animate__slow")}))},onIntersect4(t){const e=t[0].target;e.classList.add("animate__animated","animate__backInRight","animate__slow"),e.addEventListener("animationend",(()=>{e.classList.remove("animate__animated","animate__backInRight","animate__slow")}))}}},V=X,J=(0,v.Z)(V,H,S,!1,null,"7a683b4b",null),_=J.exports;a.ZP.use(k.ZP);const $=[{path:"/",name:"index",component:_},{path:"*",redirect:"/"}],tt=new k.ZP({mode:"history",base:"/Fume/",routes:$});var et=tt,it=i(629);a.ZP.use(it.ZP);var at=new it.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),nt=i(8864);a.ZP.use(nt.Z);var st=new nt.Z({theme:{light:!0},icons:{iconfont:"mdi"}});a.ZP.config.productionTip=!1,new a.ZP({router:et,store:at,vuetify:st,render:t=>t(b)}).$mount("#app")},9574:function(t,e,i){t.exports=i.p+"img/logo.45ccc8dd.svg"},2498:function(t,e,i){t.exports=i.p+"img/video.d42b579b.png"},9265:function(t,e,i){t.exports=i.p+"img/1.001a8691.jpg"},8:function(t,e,i){t.exports=i.p+"img/11.17b29cd6.jpg"},9963:function(t,e,i){t.exports=i.p+"img/6.722512b2.jpg"},6421:function(t,e,i){t.exports=i.p+"img/9.87845920.jpg"},462:function(t,e,i){t.exports=i.p+"media/first2.beb95607.mp4"}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,a,n,s){if(!a){var o=1/0;for(d=0;d<t.length;d++){a=t[d][0],n=t[d][1],s=t[d][2];for(var r=!0,c=0;c<a.length;c++)(!1&s||o>=s)&&Object.keys(i.O).every((function(t){return i.O[t](a[c])}))?a.splice(c--,1):(r=!1,s<o&&(o=s));if(r){t.splice(d--,1);var l=n();void 0!==l&&(e=l)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[a,n,s]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/Fume/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,s,o=a[0],r=a[1],c=a[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(n in r)i.o(r,n)&&(i.m[n]=r[n]);if(c)var d=c(i)}for(e&&e(a);l<o.length;l++)s=o[l],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(d)},a=self["webpackChunkFume"]=self["webpackChunkFume"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(6913)}));a=i.O(a)})();
//# sourceMappingURL=app.979bf394.js.map