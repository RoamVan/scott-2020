import{S as s,i as t,s as e,e as a,b as i,f as n,d as r,h as c,j as o,l as u,p as f,r as l}from"./client.09e75f82.js";import"./index.0c90c855.js";import{f as d,a as h}from"./Fade.bd4bc0f7.js";import{u as p}from"./clientUtilities.858e543b.js";function m(s){let t,e,p,m;return{c(){t=a("div"),this.h()},l(s){t=i(s,"DIV",{class:!0}),n(t).forEach(r),this.h()},h(){c(t,"class","content")},m(e,a){o(e,t,a),t.innerHTML=s[0],m=!0},p(s,[e]){(!m||1&e)&&(t.innerHTML=s[0])},i(s){m||(f(()=>{p&&p.end(1),e||(e=l(t,h,{})),e.start()}),m=!0)},o(s){e&&e.invalidate(),p=u(t,d,{}),m=!1},d(s){s&&r(t),s&&p&&p.end()}}}async function j(){return{uses:await p(this,"uses")}}function b(s,t,e){let{uses:a}=t;return s.$set=(s=>{"uses"in s&&e(0,a=s.uses)}),[a]}export default class extends s{constructor(s){super(),t(this,s,b,m,e,{uses:0})}}export{j as preload};