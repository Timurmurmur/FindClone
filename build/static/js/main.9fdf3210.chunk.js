(this.webpackJsonppalletegame=this.webpackJsonppalletegame||[]).push([[0],{218:function(e,t,a){e.exports=a(523)},223:function(e,t,a){},224:function(e,t,a){},515:function(e,t,a){},521:function(e,t,a){},522:function(e,t,a){},523:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(96),i=a.n(c),r=(a(223),a(224),a(225),a(148),a(329),a(515),a(526)),p=a(58),l=a(215),m=a(97),d=a(98),s={items:function(e){var t,a=((t=e).sort((function(){return Math.random()-.5})),console.log("asd"),t);return a.forEach((function(e,t){e.index=t})),a}([{image:"https://www.tapeten.com.ua/assets/product/__thumb_m_9627.jpg",complete:!1,id:0,opened:!1},{image:"https://www.tourismofgoa.org/wp-content/uploads/2019/09/blissfull-img.jpg",complete:!1,id:1,opened:!1},{image:"https://i1.rozetka.ua/goods/14095782/123526021_images_14095782711.jpg",complete:!1,id:2,opened:!1},{image:"https://ae01.alicdn.com/kf/HTB1X991RVXXXXcyaXXXq6xXFXXXy/5D-Diamond-Embroidery-Pictures-DIY-Needlework-diy-Diamond-Painting-Lavender-flowers-with-natural-scenery-Mosaic-crystal.jpg",complete:!1,id:3,opened:!1},{image:"https://www.only-modeli.ru/img/products/22985-10x10ft-selale-vinil-fotograf-arka-plannda-stuedyo-sahne-fotografclk-arka-plan-pbq100.jpg",complete:!1,id:4,opened:!1},{image:"https://www.ednist.info/media/images/63102/big/79c0397b381d9d29806487c81bb4b066.jpg",complete:!1,id:5,opened:!1},{image:"https://www.tapeten.com.ua/assets/product/__thumb_m_0843.jpg",complete:!1,id:6,opened:!1},{image:"http://iranfarsh.net/wp-content/uploads/2018/06/%D8%A8%D8%A7%D8%BA-%D8%B5%D9%88%D8%B1%D8%AA%DB%8C-2.jpg",complete:!1,id:7,opened:!1},{image:"https://www.tapeten.com.ua/assets/product/__thumb_m_9627.jpg",complete:!1,id:0,opened:!1},{image:"https://www.tourismofgoa.org/wp-content/uploads/2019/09/blissfull-img.jpg",complete:!1,id:1,opened:!1},{image:"https://i1.rozetka.ua/goods/14095782/123526021_images_14095782711.jpg",complete:!1,id:2,opened:!1},{image:"https://ae01.alicdn.com/kf/HTB1X991RVXXXXcyaXXXq6xXFXXXy/5D-Diamond-Embroidery-Pictures-DIY-Needlework-diy-Diamond-Painting-Lavender-flowers-with-natural-scenery-Mosaic-crystal.jpg",complete:!1,id:3,opened:!1},{image:"https://www.only-modeli.ru/img/products/22985-10x10ft-selale-vinil-fotograf-arka-plannda-stuedyo-sahne-fotografclk-arka-plan-pbq100.jpg",complete:!1,id:4,opened:!1},{image:"https://www.ednist.info/media/images/63102/big/79c0397b381d9d29806487c81bb4b066.jpg",complete:!1,id:5,opened:!1},{image:"https://www.tapeten.com.ua/assets/product/__thumb_m_0843.jpg",complete:!1,id:6,opened:!1},{image:"http://iranfarsh.net/wp-content/uploads/2018/06/%D8%A8%D8%A7%D8%BA-%D8%B5%D9%88%D8%B1%D8%AA%DB%8C-2.jpg",complete:!1,id:7,opened:!1}]),compare:[],complete:0},u=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,a=arguments.length>1?arguments[1]:void 0,n=t;switch(a.type){case"OPEN_CARD":var o=a.payload,c=t.items[o].opened;return n.items[o].opened=!c,Object(d.a)({},n);case"ADD_TO_COMPARE":if(a.card.index===(null===(e=n.compare[0])||void 0===e?void 0:e.index)&&0!==n.compare.length?(n.compare.map((function(e){n.items[e.index].opened=!1})),n.compare=[]):n.compare.push(a.card),2!==n.compare.length)return Object(d.a)({},n);n.compare[0].id===n.compare[1].id&&(n.compare.map((function(e){n.items[e.index].complete=!0})),n.complete+=1),setTimeout((function(){return n.compare.map((function(e){n.items[e.index].opened=!1})),n.compare=[],Object(d.a)({},n)}),100);default:return t}},g=(a(521),a(522),function(e){var t=e.card,a=e.openCard,c=e.addToCompare,i=Object(n.useCallback)((function(e){a(t.index),c(t)}),[]);return t.complete?o.a.createElement("div",{className:"pallete_wrapper"},o.a.createElement("div",{className:"pallete_front",style:{backgroundColor:"#34C678"}},o.a.createElement("span",null,o.a.createElement("svg",{"aria-hidden":"true",width:50,height:50,focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o.a.createElement("path",{fill:"white",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}))))):o.a.createElement("div",{className:"pallete_wrapper ".concat(t.opened?"pallete_opened":""),onClick:i},o.a.createElement("div",{className:"pallete_front"}),o.a.createElement("div",{className:"pallete_back",style:{background:"url(".concat(t.image,")"),backgroundSize:"cover"}}))}),w=Object(m.b)((function(e){return{game:e.game}}),(function(e){return{openCard:function(t){return e({type:"OPEN_CARD",payload:t})},addToCompare:function(t){return e(function(e){return{type:"ADD_TO_COMPARE",card:e}}(t))}}}))((function(e){var t=e.game,a=e.openCard,n=e.addToCompare;return 8===t.complete?o.a.createElement("div",{className:"main_container"},o.a.createElement("div",{className:"win_wrapper"},o.a.createElement("h1",null,"\u0412\u042b \u0412\u042b\u0419\u0413\u0420\u0410\u041b\u0418 !!!"),o.a.createElement("div",{className:"reload_wrapper"},o.a.createElement("button",{className:"reload_button",onClick:function(e){return window.location.reload()}},"\u0421\u044b\u0433\u0440\u0430\u0442\u044c \u0435\u0449\u0435")))):o.a.createElement("div",{className:"main_container"},o.a.createElement("div",{className:"main_wrapper"},t.items.map((function(e,t){return o.a.createElement(g,{addToCompare:n,openCard:a,card:e,key:t})}))))})),f=function(e){var t=Object(l.composeWithDevTools)({serialize:!0}),a=Object(r.a)({dependencies:{}}),n=Object(p.createStore)(Object(p.combineReducers)({game:u}),t(function(e){return Object(p.applyMiddleware)(e)}(a)));return o.a.createElement(m.a,{store:n},o.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[218,1,2]]]);
//# sourceMappingURL=main.9fdf3210.chunk.js.map