(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{11:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(5),i=n.n(r),c=(n(11),n(2)),s=n(0),u=function(t){var e=t.setCategories,n=Object(a.useState)(""),r=Object(c.a)(n,2),i=r[0],u=r[1];return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>0?(e((function(t){return[i]})),u("")):alert("debes escribir un texto")},children:Object(s.jsx)("input",{type:"text",value:i,onChange:function(t){u(t.target.value)}})})},o=n(4),d=n.n(o),j=n(6),l=function(){var t=Object(j.a)(d.a.mark((function t(e){var n,a,r,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"O0m99USle0v2nQ80ci2tOObUxvzWI19m","https://api.giphy.com/v1/gifs/search",t.next=4,fetch("https://api.giphy.com/v1/gifs/search?limit=10&q="+e+"&api_key=O0m99USle0v2nQ80ci2tOObUxvzWI19m");case 4:return n=t.sent,t.next=7,n.json();case 7:return a=t.sent,r=a.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){var e=t.img;return Object(s.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(s.jsx)("img",{src:e.url,alt:e.title}),Object(s.jsx)("p",{children:e.title})]})},p=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(c.a)(e,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){l(t).then((function(t){setTimeout((function(){i({data:t,loading:!1})}),2e3)}))}),[t]),r}(e),r=n.data,i=n.loading;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("h3",{className:"card animate__animated animate__fadeIn",children:[" ",e," "]}),i&&Object(s.jsx)("p",{className:"card animate__animated animate__flash",children:"Loading ..."}),Object(s.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(s.jsx)(m,{img:t},t.id)}))})]})},f=function(){var t=Object(a.useState)([]),e=Object(c.a)(t,2),n=e[0],r=e[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"GifExpertApp"}),Object(s.jsx)(u,{setCategories:r}),Object(s.jsx)("hr",{}),Object(s.jsx)("ol",{children:n.map((function(t){return Object(s.jsx)(p,{category:t},t)}))})]})};i.a.render(Object(s.jsx)(f,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f20fb50b.chunk.js.map