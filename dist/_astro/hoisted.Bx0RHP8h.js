import{l as I}from"./constants.CbTSZZC9.js";import{a as N,n as q,g as $,b as B,c as K,i as j,d as k,t as E,s as O}from"./index.es.B26ups-i.js";import{o as U,d as L}from"./solid.D58eqi3c.js";function P(e,t){return t?e*(1e3/t):0}const W=5;function C(e,t,n){const o=Math.max(t-W,0);return P(n-e(o),t-o)}const M={stiffness:100,damping:10,mass:1},Z=(e=M.stiffness,t=M.damping,n=M.mass)=>t/(2*Math.sqrt(e*n));function z(e,t,n){return e<t&&n>=t||e>t&&n<=t}const H=({stiffness:e=M.stiffness,damping:t=M.damping,mass:n=M.mass,from:o=0,to:a=1,velocity:i=0,restSpeed:r,restDistance:d}={})=>{i=i?N.s(i):0;const c={done:!1,hasReachedTarget:!1,current:o,target:a},u=a-o,s=Math.sqrt(e/n)/1e3,f=Z(e,t,n),m=Math.abs(u)<5;r||(r=m?.01:2),d||(d=m?.005:.5);let g;if(f<1){const l=s*Math.sqrt(1-f*f);g=h=>a-Math.exp(-f*s*h)*((-i+f*s*u)/l*Math.sin(l*h)+u*Math.cos(l*h))}else g=l=>a-Math.exp(-s*l)*(u+(-i+s*u)*l);return l=>{c.current=g(l);const h=l===0?i:C(g,l,c.current),v=Math.abs(h)<=r,p=Math.abs(a-c.current)<=d;return c.done=v&&p,c.hasReachedTarget=z(o,a,c.current),c}},b=10,J=1e4;function Q(e,t=q){let n,o=b,a=e(0);const i=[t(a.current)];for(;!a.done&&o<J;)a=e(o),i.push(t(a.done?a.target:a.current)),n===void 0&&a.hasReachedTarget&&(n=o),o+=b;const r=o-b;return i.length===1&&i.push(a.current),{keyframes:i,duration:r/1e3,overshootDuration:(n??r)/1e3}}function S(e){return j(e)&&!isNaN(e)}function w(e){return k(e)?parseFloat(e):e}function X(e){const t=new WeakMap;return(n={})=>{const o=new Map,a=(r=0,d=100,c=0,u=!1)=>{const s=`${r}-${d}-${c}-${u}`;return o.has(s)||o.set(s,e(Object.assign({from:r,to:d,velocity:c},n))),o.get(s)},i=(r,d)=>(t.has(r)||t.set(r,Q(r,d)),t.get(r));return{createAnimation:(r,d=!0,c,u,s)=>{let f,m,g,l=0,h=q;const v=r.length;if(d){h=$(r,u?B.get(K(u)):void 0);const p=r[v-1];if(g=w(p),v>1&&r[0]!==null)m=w(r[0]);else{const y=s?.generator;if(y){const{animation:T,generatorStartTime:A}=s,x=T?.startTime||A||0,D=T?.currentTime||performance.now()-x,G=y(D).current;m=G,l=C(F=>y(F).current,D,G)}else c&&(m=w(c()))}}if(S(m)&&S(g)){const p=a(m,g,l,u?.includes("scale"));f=Object.assign(Object.assign({},i(p,h)),{easing:"linear"}),s&&(s.generator=p,s.generatorStartTime=performance.now())}return f||(f={easing:"ease",duration:i(a(0,100)).overshootDuration}),f}}}}const Y=X(H),_=document.querySelectorAll(".card"),V=[I,[_,{y:["40%","0%"],opacity:[0,1]},{at:"-0.1",duration:.4,delay:O(.3),easing:Y({velocity:100,stiffness:50,damping:10})}]];E(V);function ee(e){const t={hour:"numeric",minute:"2-digit",second:"2-digit",timeZone:"Europe/London"};let n=new Intl.DateTimeFormat("en-GB",t).format(e);return n+=" GMT",n}let R;function te(){const e=document.getElementById("timeDisplay"),t=new Date;e&&(e.textContent=ee(t),e.setAttribute("datetime",t.toISOString()))}U(()=>{R=setInterval(te,1e3)});L(()=>{clearInterval(R)});
