(this["webpackJsonpinfinite-scroll"]=this["webpackJsonpinfinite-scroll"]||[]).push([[0],{26:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(18),a=n.n(s),i=(n(26),n(8)),o=n.n(i),l=n(4),u=n(19),j=n(9),f=n(20),b=n.n(f),O=n(21),d=n.n(O)()((function(e){return{URL:"https://api.unsplash.com/search/photos?page=1&query=office&client_id=MrsptAEkuNtiOj9sakWFD9PmsE7roU5qo4Zub6CQgSk&client_secret=F19zKmUGoRQy1QY-FfEodfvh6jKPORIaDZLM7GHL_Nw",rawJSON:[],addJSON:function(t){return e((function(e){return{rawJSON:[].concat(Object(l.a)(e.rawJSON),[t.map((function(e){return e}))])}}))},setJSON:function(t){return e((function(e){return{rawJSON:t}}))}}})),h=n(0),p=function(e){var t=e.scrollUp;return Object(h.jsx)("div",{className:"arrow-btn",onClick:t,children:Object(h.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"arrow-up",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(h.jsx)("path",{fill:"currentColor",d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"})})})},m=function(e){var t=e.item,n=e.index,c=e.lastElementRef;return n+1===e.length?Object(h.jsxs)("div",{className:"image",ref:c,children:[Object(h.jsx)("h4",{children:t.alt_description}),Object(h.jsx)("img",{src:t.urls.small})]},n):Object(h.jsxs)("div",{className:"image",children:[Object(h.jsx)("h4",{children:t.alt_description}),Object(h.jsx)("img",{src:t.urls.small})]},n)},x=function(){var e=Object(c.useState)(1),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),a=Object(j.a)(s,2),i=a[0],f=a[1],O=d((function(e){return e.rawJSON})),x=d((function(e){return e.setJSON})),g=Object(c.useRef)(),v=Object(c.useRef)(),w=Object(c.useCallback)((function(e){i||(v.current&&v.current.disconnect(),v.current=new IntersectionObserver((function(e){e[0].isIntersecting&&(console.log("got new images boi \ud83d\ude01"),r((function(e){return e+1})))})),e&&v.current.observe(e))}));Object(c.useEffect)(Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.prev=1,e.next=4,b.a.get("https://api.unsplash.com/search/photos?page=".concat(n,"&query=office&client_id=MrsptAEkuNtiOj9sakWFD9PmsE7roU5qo4Zub6CQgSk&client_secret=F19zKmUGoRQy1QY-FfEodfvh6jKPORIaDZLM7GHL_Nw"));case 4:t=e.sent,console.log(t.data),x(O?[].concat(Object(l.a)(O),Object(l.a)(t.data.results)):t.data.results),f(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),[n]);return Object(h.jsxs)("div",{className:"content-box",children:[Object(h.jsx)(p,{scrollUp:function(){g.current.scroll(0,0)}}),Object(h.jsx)("div",{className:"content-list",ref:g,children:O.map((function(e,t){return Object(h.jsx)(m,{item:e,index:t,length:O.length,lastElementRef:w},t)}))})]})};var g=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Infinite Scroll"}),Object(h.jsx)(x,{}),Object(h.jsx)("h4",{children:"Infinite scroll example, by Dewansh. Images loaded via unsplash api"})]})};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.524a1ffa.chunk.js.map