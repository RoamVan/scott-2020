import{S as s,i as t,s as e,e as n,t as a,a as l,b as i,f as r,g as c,d as o,c as h,h as p,j as f,k as u,u as g,v as d,w as m,x as k,y as $,z as v,A as w}from"./client.dd72808c.js";import{u as x}from"./clientUtilities.858e543b.js";function E(s,t,e){const n=s.slice();return n[3]=t[e],n}function H(s){let t,e,d,m,k=s[3].title+"",$=s[3].html+"";return{c(){t=n("h1"),e=a(k),d=l(),m=n("div"),this.h()},l(s){t=i(s,"H1",{});var n=r(t);e=c(n,k),n.forEach(o),d=h(s),m=i(s,"DIV",{class:!0}),r(m).forEach(o),this.h()},h(){p(m,"class","content")},m(s,n){f(s,t,n),u(t,e),f(s,d,n),f(s,m,n),m.innerHTML=$},p(s,t){1&t&&k!==(k=s[3].title+"")&&g(e,k),1&t&&$!==($=s[3].html+"")&&(m.innerHTML=$)},d(s){s&&o(t),s&&o(d),s&&o(m)}}}function j(s){let t,e,g,x,j,A,S=s[0],b=[];for(let t=0;t<S.length;t+=1)b[t]=H(E(s,S,t));const y=s[2].default,D=d(y,s,s[1],null);return{c(){t=n("h1"),e=a("Speaking & Appearances"),g=l(),x=n("div");for(let s=0;s<b.length;s+=1)b[s].c();j=l(),D&&D.c(),this.h()},l(s){t=i(s,"H1",{});var n=r(t);e=c(n,"Speaking & Appearances"),n.forEach(o),g=h(s),x=i(s,"DIV",{class:!0});var a=r(x);for(let s=0;s<b.length;s+=1)b[s].l(a);j=h(a),D&&D.l(a),a.forEach(o),this.h()},h(){p(x,"class","wrapper svelte-4wodr")},m(s,n){f(s,t,n),u(t,e),f(s,g,n),f(s,x,n);for(let s=0;s<b.length;s+=1)b[s].m(x,null);u(x,j),D&&D.m(x,null),A=!0},p(s,[t]){if(1&t){let e;for(S=s[0],e=0;e<S.length;e+=1){const n=E(s,S,e);b[e]?b[e].p(n,t):(b[e]=H(n),b[e].c(),b[e].m(x,j))}for(;e<b.length;e+=1)b[e].d(1);b.length=S.length}D&&D.p&&2&t&&D.p(m(y,s,s[1],null),k(y,s[1],t,null))},i(s){A||($(D,s),A=!0)},o(s){v(D,s),A=!1},d(s){s&&o(t),s&&o(g),s&&o(x),w(b,s),D&&D.d(s)}}}async function A(){return{speaking:await x(this,"speaking")}}function S(s,t,e){let{speaking:n}=t,{$$slots:a={},$$scope:l}=t;return s.$set=(s=>{"speaking"in s&&e(0,n=s.speaking),"$$scope"in s&&e(1,l=s.$$scope)}),[n,l,a]}export default class extends s{constructor(s){super(),t(this,s,S,j,e,{speaking:0})}}export{A as preload};