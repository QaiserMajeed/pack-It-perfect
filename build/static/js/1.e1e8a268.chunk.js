"use strict";(self.webpackChunkpack_it_perfect=self.webpackChunkpack_it_perfect||[]).push([[1],[,(e,i,n)=>{n.r(i),n.d(i,{default:()=>M});var o=n(43),r=n(464),s=n(960),t=n(929),l=n(818),a=n(579);const d=r.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`,c=r.Ay.h1`
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
  font-weight: 600;
  color: #333;
`,h=r.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,x=r.Ay.div`
  display: flex;
  flex-direction: column;
`,u=r.Ay.div`
  margin-bottom: 20px;
`,g=r.Ay.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
  font-weight: 500;
`,p=r.Ay.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #f8f8f8;

  &:focus {
    outline: none;
    border-color: #ccc;
  }
`,m=r.Ay.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #f8f8f8;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #ccc;
  }
`,j=r.Ay.select`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #f8f8f8;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 15px top 50%;
  background-size: 10px auto;

  &:focus {
    outline: none;
    border-color: #ccc;
  }
`,f=r.Ay.button`
  background-color: #000;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #a03a39;
  }
`,b=r.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`,v=r.Ay.div`
  background-color: #333;
  color: white;
  padding: 25px;
  border-radius: 8px;
  height: 100%;
`,y=r.Ay.div`
  font-size: 24px;
  color: #000;
  margin-bottom: 15px;
`,S=r.Ay.h3`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 500;
`,k=r.Ay.p`
  font-size: 14px;
  line-height: 1.5;
  color: #ccc;
`,w=r.Ay.div`
  background-color: #d4edda;
  color: #155724;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
`,C=r.Ay.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
`,A=r.Ay.div`
  margin-bottom: 20px;
`,z=r.Ay.div`
  background-color: #f5f5f5;
  padding: 60px 20px;
  text-align: center;
  margin-top: 60px;
`,F=r.Ay.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
`,N=r.Ay.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,T=r.Ay.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: inline-flex;
  align-items: center;

  &:hover {
    background-color: #444;
  }

  svg {
    margin-left: 10px;
  }
`,M=()=>{const[e,i]=(0,o.useState)({fullName:"",phoneNumber:"",email:"",size:"",materialType:"",materialThickness:"",coating:"None",foiling:"None",color:"",quantity:"",printingSides:"Single Side",additionalMessage:""}),[n,r]=(0,o.useState)({submitting:!1,success:!1,error:!1,message:""}),M=n=>{const{name:o,value:r}=n.target;i({...e,[o]:r})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d,{children:[(0,a.jsx)(c,{children:"Get a Free Quote"}),(0,a.jsxs)(h,{children:[(0,a.jsxs)(x,{children:[n.success||n.error?(0,a.jsxs)(A,{children:[n.success&&(0,a.jsx)(w,{children:n.message}),n.error&&(0,a.jsx)(C,{children:n.message})]}):null,(0,a.jsxs)("form",{onSubmit:async n=>{n.preventDefault(),r({submitting:!0,success:!1,error:!1,message:""});try{(await fetch("https://formspree.io/f/xdkewqqb",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok?(l.A,r({submitting:!1,success:!0,error:!1,message:"Thank you! Your quote request has been submitted successfully. We'll get back to you soon."}),i({fullName:"",phoneNumber:"",email:"",size:"",materialType:"",materialThickness:"",coating:"None",foiling:"None",color:"",quantity:"",printingSides:"Single Side",additionalMessage:""})):r({submitting:!1,success:!1,error:!0,message:"Oops! Something went wrong. Please try again later."})}catch(o){r({submitting:!1,success:!1,error:!0,message:"Oops! Something went wrong. Please try again later."}),console.error("Form submission error:",o)}},children:[(0,a.jsxs)(u,{children:[(0,a.jsx)(g,{htmlFor:"fullName",children:"Full Name"}),(0,a.jsx)(p,{type:"text",id:"fullName",name:"fullName",value:e.fullName,onChange:M})]}),(0,a.jsxs)(u,{children:[(0,a.jsx)(g,{htmlFor:"phoneNumber",children:"Phone Number"}),(0,a.jsx)(p,{type:"tel",id:"phoneNumber",name:"phoneNumber",value:e.phoneNumber,onChange:M})]}),(0,a.jsxs)(u,{children:[(0,a.jsx)(g,{htmlFor:"email",children:"Email"}),(0,a.jsx)(p,{type:"email",id:"email",name:"email",value:e.email,onChange:M})]}),(0,a.jsxs)(u,{children:[(0,a.jsx)(g,{htmlFor:"size",children:"Size"}),(0,a.jsxs)(j,{id:"size",name:"size",value:e.size,onChange:M,children:[(0,a.jsx)("option",{value:"",children:"I need suggestion"}),(0,a.jsx)("option",{value:"small",children:"Small (under 15cm)"}),(0,a.jsx)("option",{value:"medium",children:"Medium (15-30cm)"}),(0,a.jsx)("option",{value:"large",children:"Large (over 30cm)"}),(0,a.jsx)("option",{value:"custom",children:"Custom Size"})]})]}),(0,a.jsxs)(u,{children:[(0,a.jsx)(g,{htmlFor:"materialType",children:"Material Type"}),(0,a.jsxs)(j,{id:"materialType",name:"materialType",value:e.materialType,onChange:M,children:[(0,a.jsx)("option",{value:"",children:"Not Sure! I need advice"}),(0,a.jsx)("option",{value:"cardboard",children:"Cardboard"}),(0,a.jsx)("option",{value:"corrugated",children:"Corrugated"}),(0,a.jsx)("option",{value:"kraft",children:"Kraft"}),(0,a.jsx)("option",{value:"rigid",children:"Rigid"})]})]}),(0,a.jsxs)(u,{children:[(0,a.jsx)(g,{htmlFor:"materialThickness",children:"Material Thickness"}),(0,a.jsxs)(j,{id:"materialThickness",name:"materialThickness",value:e.materialThickness,onChange:M,children:[(0,a.jsx)("option",{value:"",children:"Not Sure! I need advice"}),(0,a.jsx)("option",{value:"300gsm",children:"300 GSM"}),(0,a.jsx)("option",{value:"350gsm",children:"350 GSM"}),(0,a.jsx)("option",{value:"400gsm",children:"400 GSM"}),(0,a.jsx)("option",{value:"450gsm",children:"450 GSM"})]})]}),(0,a.jsxs)(u,{children:[(0,a.jsx)(g,{htmlFor:"coating",children:"Coating"}),(0,a.jsxs)(j,{id:"coating",name:"coating",value:e.coating,onChange:M,children:[(0,a.jsx)("option",{value:"None",children:"None"}),(0,a.jsx)("option",{value:"Matte",children:"Matte"}),(0,a.jsx)("option",{value:"Gloss",children:"Gloss"}),(0,a.jsx)("option",{value:"Soft Touch",children:"Soft Touch"})]})]}),(0,a.jsxs)(u,{children:[(0,a.jsx)(g,{htmlFor:"foiling",children:"Foiling"}),(0,a.jsxs)(j,{id:"foiling",name:"foiling",value:e.foiling,onChange:M,children:[(0,a.jsx)("option",{value:"None",children:"None"}),(0,a.jsx)("option",{value:"Gold",children:"Gold"}),(0,a.jsx)("option",{value:"Silver",children:"Silver"}),(0,a.jsx)("option",{value:"Rose Gold",children:"Rose Gold"})]})]}),(0,a.jsxs)(u,{children:[(0,a.jsx)(g,{htmlFor:"color",children:"Color"}),(0,a.jsx)(p,{type:"text",id:"color",name:"color",value:e.color,onChange:M,placeholder:"Pantone or CMYK values"})]}),(0,a.jsxs)(u,{children:[(0,a.jsx)(g,{htmlFor:"quantity",children:"Quantity"}),(0,a.jsx)(p,{type:"number",id:"quantity",name:"quantity",value:e.quantity,onChange:M,min:"1"})]}),(0,a.jsxs)(u,{children:[(0,a.jsx)(g,{htmlFor:"printingSides",children:"Printing Sides"}),(0,a.jsxs)(j,{id:"printingSides",name:"printingSides",value:e.printingSides,onChange:M,children:[(0,a.jsx)("option",{value:"Single Side",children:"Single Side"}),(0,a.jsx)("option",{value:"Double Side",children:"Double Side"})]})]}),(0,a.jsxs)(u,{children:[(0,a.jsx)(g,{htmlFor:"additionalMessage",children:"Additional Message (Optional)"}),(0,a.jsx)(m,{id:"additionalMessage",name:"additionalMessage",value:e.additionalMessage,onChange:M,placeholder:"Tell us more about your project..."})]}),(0,a.jsx)(f,{type:"submit",disabled:n.submitting,children:n.submitting?"Submitting...":"Submit"})]})]}),(0,a.jsx)(x,{children:(0,a.jsxs)(b,{children:[(0,a.jsxs)(v,{children:[(0,a.jsx)(y,{children:(0,a.jsx)(s.g,{icon:t.Dfk})}),(0,a.jsx)(S,{children:"NO Die & plate charges"}),(0,a.jsx)(k,{children:"Get free setup costs on every order!"})]}),(0,a.jsxs)(v,{children:[(0,a.jsx)(y,{children:(0,a.jsx)(s.g,{icon:t.JxU})}),(0,a.jsx)(S,{children:"High quality offset printing"}),(0,a.jsx)(k,{children:"High-quality, modern printing customized to fit your brand."})]}),(0,a.jsxs)(v,{children:[(0,a.jsx)(y,{children:(0,a.jsx)(s.g,{icon:t.W2$})}),(0,a.jsx)(S,{children:"Custom size & style"}),(0,a.jsx)(k,{children:"Customized precisely to meet your unique specifications, ensuring a flawless fit every time."})]}),(0,a.jsxs)(v,{children:[(0,a.jsx)(y,{children:(0,a.jsx)(s.g,{icon:t.jTw})}),(0,a.jsx)(S,{children:"Free Design Assistance"}),(0,a.jsx)(k,{children:"Complimentary design assistance to bring your vision to life!"})]}),(0,a.jsxs)(v,{children:[(0,a.jsx)(y,{children:(0,a.jsx)(s.g,{icon:t.THi})}),(0,a.jsx)(S,{children:"Low minimum order quantity"}),(0,a.jsx)(k,{children:"Customizable order quantities from 100 up to 500,000 boxes to fit your needs."})]}),(0,a.jsxs)(v,{children:[(0,a.jsx)(y,{children:(0,a.jsx)(s.g,{icon:t.raf})}),(0,a.jsx)(S,{children:"Fast & Free Delivery"}),(0,a.jsx)(k,{children:"Receive your custom boxes within 5-10 days across the UK on orders over \xa3300."})]})]})})]})]}),(0,a.jsxs)(z,{children:[(0,a.jsx)(F,{children:"Bring your ideas to life in minutes!"}),(0,a.jsx)(N,{children:"Delivering groundbreaking excellence in packaging"}),(0,a.jsxs)(T,{children:["Get Started Today",(0,a.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z",fill:"white"})})]})]})]})}}]]);
//# sourceMappingURL=1.e1e8a268.chunk.js.map