import{p as d,d as m}from"./DIDzDSBz.js";import{a as u,k as p,u as c,o,c as i,F as g,d as f,n as v,g as t,l,t as k,m as y,i as w}from"./DoqiT5Lj.js";const N=d("/svg/shopping-cart.svg"),x=d("/svg/heart.svg"),b={class:"row"},B={class:"col-4"},C={class:"onmalika-notification-img"},E=["src"],H={key:1,src:"https://placehold.co/250x250",class:"w-100",alt:""},S={class:"col-8"},V={class:"onmalika-notification-body"},z={key:0},A=t("img",{src:N,alt:""},null,-1),D={key:1},F=t("img",{src:x,alt:""},null,-1),R={__name:"Notification",setup(L){const e=m(),n=u(0),_=()=>{const r=e.notifications.filter(s=>s.show).length*130;n.value=r},h=a=>{setTimeout(()=>{a.hide=!0},2700)};return p(()=>{_(),e.notifications.forEach(a=>{a.show&&h(a)})}),(a,r)=>c(e)&&c(e).notifications&&c(e).notifications.length?(o(),i("div",{key:0,class:"onmalika-notification",style:y({height:c(n)+"px"})},[(o(!0),i(g,null,f(c(e).notifications,s=>(o(),i("div",{key:s.product.id,class:v(["onmalika-notification-item",{show:s.show,"hide-notification":s.hide}])},[t("div",b,[t("div",B,[t("div",C,[s&&s.product&&s.product.image&&s.product.image.mini?(o(),i("img",{key:0,src:s.product.image.mini},null,8,E)):(o(),i("img",H))])]),t("div",S,[t("div",V,[c(e).addedInCard===!0?(o(),i("p",z,[A,l(" Добавлен в корзину")])):(o(),i("p",D,[F,l("Добавлен в избранное")])),t("span",null,k(s.product.name),1)])])])],2))),128))],4)):w("",!0)}};export{R as default};
