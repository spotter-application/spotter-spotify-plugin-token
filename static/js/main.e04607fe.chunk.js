(this["webpackJsonpspotter-spotify-plugin-token"]=this["webpackJsonpspotter-spotify-plugin-token"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(3),i=n.n(a),s=(n(9),n(4)),r=(n(10),n(0));var d=function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){var e=window.location.search,t=new URLSearchParams(e),n=t.get("code"),c=t.get("state");n&&(window.location.href="spotter://x-callback-url/command?type=patchStorage&plugin=".concat(c,'&value={"token":"').concat(n,'"}'),o(n))}),[]),Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("header",{className:"App-header",children:[n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:"Awesome \ud83d\udc4f"}),Object(r.jsx)("div",{children:"Now we have to pass your token to Spotter \ud83d\ude80"})]}):Object(r.jsx)("div",{children:"Something went wrong \ud83e\uddd0"}),Object(r.jsx)("div",{})]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(d,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.e04607fe.chunk.js.map