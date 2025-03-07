"use strict";(self.webpackChunkpack_it_perfect=self.webpackChunkpack_it_perfect||[]).push([[735],{735:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E});var i=r(43),n=r(464),a=r(960),o=r(929),s=r(579);const d=n.Ay.div`
  padding: 4rem 0;
  background-color: #fff;
`,c=n.Ay.div`
  text-align: center;
  margin-bottom: 3rem;
`,l=n.Ay.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`,g=n.Ay.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`,h=n.Ay.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
`,m=n.Ay.div`
  display: flex;
  overflow: hidden;
`,f=n.Ay.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${e=>e.translateValue}px);
  width: 100%;
`,x=n.Ay.div`
  flex: 0 0 calc(100% / ${e=>e.slidesPerView});
  min-width: 0;
  padding: 0 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex: 0 0 calc(100% / ${e=>Math.min(2,e.slidesPerView)});
  }

  @media (max-width: 576px) {
    flex: 0 0 100%;
  }
`,u=n.Ay.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`,p=n.Ay.div`
  color: #ddd;
  font-size: 2rem;
  margin-bottom: 1rem;

  svg {
    transform: rotate(180deg);
  }
`,y=n.Ay.p`
  color: #333;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`,v=n.Ay.div`
  margin-bottom: 1rem;
  display: flex;

  svg {
    color: #ffd700;
    margin-right: 0.2rem;
  }
`,w=n.Ay.div`
  display: flex;
  align-items: center;
`,b=n.Ay.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;

  svg {
    font-size: 1.6rem;
    color: #555;
  }
`,j=n.Ay.div`
  flex-grow: 1;
`,k=n.Ay.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.25rem;
`,A=n.Ay.p`
  font-size: 0.85rem;
  color: #777;
  margin: 0;
`,z=n.Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`,C=n.Ay.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${e=>e.active?"rgb(0, 0, 90)":"#f0f0f0"};
  color: ${e=>e.active?"white":"#333"};
  border: none;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${e=>e.active?"rgb(0, 0, 90)":"#e0e0e0"};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,E=(n.Ay.div`
  text-align: center;
  margin-top: 2rem;

  a {
    color: #333;
    font-size: 0.9rem;
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center;

    &:hover {
      color: rgb(0, 0, 90);
      text-decoration: underline;
    }

    &::after {
      content: "→";
      margin-left: 0.5rem;
    }
  }
`,()=>{const[e,t]=(0,i.useState)(0),[r,n]=(0,i.useState)(3),[E,S]=(0,i.useState)(0),[O,$]=(0,i.useState)(0),P=(0,i.useRef)(null),V=[{id:1,text:"Customer service, designs, excellent product quality, and short turnaround time.",rating:5,author:"Sarah P.",title:"CEO of Glow Cosmetics",avatar:o.X46},{id:2,text:"Our order managers will get you the best looking designed products.",rating:5,author:"James C.",title:"Manager at Fresh Foods",avatar:o.BzA},{id:3,text:"The product perfectly captured our brand's key packaging characteristics.",rating:5,author:"Emily R.",title:"Owner of Pure Skincare",avatar:o.OL2},{id:4,text:"Outstanding service in custom packaging printed exactly to our specifications.",rating:5,author:"Robert T.",title:"Head of Marketing at NutraLife",avatar:o._Up}];(0,i.useEffect)((()=>{const e=()=>{window.innerWidth<576?n(1):window.innerWidth<768?n(2):n(3),P.current&&$(P.current.offsetWidth)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,i.useEffect)((()=>{if(O>0){S(-e*(O/r))}}),[e,r,O]);const _=e=>{const t=[];for(let r=0;r<5;r++)t.push((0,s.jsx)(a.g,{icon:o.yy},r));return t};return(0,s.jsx)(d,{children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)(c,{children:[(0,s.jsx)(l,{children:"See what our customers say"}),(0,s.jsx)(g,{children:"Our service support at any point of your packaging journey to guarantee best packaging success."})]}),(0,s.jsxs)(h,{ref:P,children:[(0,s.jsx)(m,{children:(0,s.jsx)(f,{translateValue:E,children:V.map((e=>(0,s.jsx)(x,{slidesPerView:r,children:(0,s.jsxs)(u,{children:[(0,s.jsx)(p,{children:(0,s.jsx)(a.g,{icon:o.oE6})}),(0,s.jsxs)(y,{children:['"',e.text,'"']}),(0,s.jsx)(v,{children:_(e.rating)}),(0,s.jsxs)(w,{children:[(0,s.jsx)(b,{children:(0,s.jsx)(a.g,{icon:e.avatar})}),(0,s.jsxs)(j,{children:[(0,s.jsx)(k,{children:e.author}),(0,s.jsx)(A,{children:e.title})]})]})]})},e.id)))})}),(0,s.jsxs)(z,{children:[(0,s.jsx)(C,{onClick:()=>{e>0&&t(e-1)},disabled:0===e,children:(0,s.jsx)(a.g,{icon:o.Wzs})}),(0,s.jsx)(C,{onClick:()=>{e<V.length-r&&t(e+1)},disabled:e>=V.length-r,children:(0,s.jsx)(a.g,{icon:o.XkK})})]})]})]})})})}}]);
//# sourceMappingURL=735.600cd608.chunk.js.map