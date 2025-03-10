"use strict";(self.webpackChunkpack_it_perfect=self.webpackChunkpack_it_perfect||[]).push([[1],[,(e,i,n)=>{n.r(i),n.d(i,{default:()=>F});var o=n(43),r=n(464),l=n(960),s=n(929),t=n(579);const a=r.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`,d=r.Ay.h1`
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
  font-weight: 600;
  color: #333;
`,c=r.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,h=r.Ay.div`
  display: flex;
  flex-direction: column;
`,x=r.Ay.div`
  margin-bottom: 20px;
`,u=r.Ay.label`
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
`,g=r.Ay.textarea`
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
`,m=r.Ay.select`
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
`,j=r.Ay.button`
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
`,f=r.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`,v=r.Ay.div`
  background-color: #333;
  color: white;
  padding: 25px;
  border-radius: 8px;
  height: 100%;
`,b=r.Ay.div`
  font-size: 24px;
  color: #000;
  margin-bottom: 15px;
`,y=r.Ay.h3`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 500;
`,w=r.Ay.p`
  font-size: 14px;
  line-height: 1.5;
  color: #ccc;
`,S=r.Ay.div`
  background-color: #f5f5f5;
  padding: 60px 20px;
  text-align: center;
  margin-top: 60px;
`,k=r.Ay.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
`,C=r.Ay.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,z=r.Ay.button`
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
`,F=()=>{const[e,i]=(0,o.useState)({fullName:"",phoneNumber:"",email:"",size:"",materialType:"",materialThickness:"",coating:"None",foiling:"None",color:"",quantity:"",printingSides:"Single Side",additionalMessage:""}),n=n=>{const{name:o,value:r}=n.target;i({...e,[o]:r})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)(d,{children:"Get a Free Quote"}),(0,t.jsxs)(c,{children:[(0,t.jsx)(h,{children:(0,t.jsxs)("form",{onSubmit:i=>{i.preventDefault(),console.log("Form submitted:",e)},children:[(0,t.jsxs)(x,{children:[(0,t.jsx)(u,{htmlFor:"fullName",children:"Full Name"}),(0,t.jsx)(p,{type:"text",id:"fullName",name:"fullName",value:e.fullName,onChange:n,required:!0})]}),(0,t.jsxs)(x,{children:[(0,t.jsx)(u,{htmlFor:"phoneNumber",children:"Phone Number"}),(0,t.jsx)(p,{type:"tel",id:"phoneNumber",name:"phoneNumber",value:e.phoneNumber,onChange:n,required:!0})]}),(0,t.jsxs)(x,{children:[(0,t.jsx)(u,{htmlFor:"email",children:"Email"}),(0,t.jsx)(p,{type:"email",id:"email",name:"email",value:e.email,onChange:n,required:!0})]}),(0,t.jsxs)(x,{children:[(0,t.jsx)(u,{htmlFor:"size",children:"Size"}),(0,t.jsxs)(m,{id:"size",name:"size",value:e.size,onChange:n,required:!0,children:[(0,t.jsx)("option",{value:"",children:"I need suggestion"}),(0,t.jsx)("option",{value:"small",children:"Small (under 15cm)"}),(0,t.jsx)("option",{value:"medium",children:"Medium (15-30cm)"}),(0,t.jsx)("option",{value:"large",children:"Large (over 30cm)"}),(0,t.jsx)("option",{value:"custom",children:"Custom Size"})]})]}),(0,t.jsxs)(x,{children:[(0,t.jsx)(u,{htmlFor:"materialType",children:"Material Type"}),(0,t.jsxs)(m,{id:"materialType",name:"materialType",value:e.materialType,onChange:n,required:!0,children:[(0,t.jsx)("option",{value:"",children:"Not Sure! I need advice"}),(0,t.jsx)("option",{value:"cardboard",children:"Cardboard"}),(0,t.jsx)("option",{value:"corrugated",children:"Corrugated"}),(0,t.jsx)("option",{value:"kraft",children:"Kraft"}),(0,t.jsx)("option",{value:"rigid",children:"Rigid"})]})]}),(0,t.jsxs)(x,{children:[(0,t.jsx)(u,{htmlFor:"materialThickness",children:"Material Thickness"}),(0,t.jsxs)(m,{id:"materialThickness",name:"materialThickness",value:e.materialThickness,onChange:n,required:!0,children:[(0,t.jsx)("option",{value:"",children:"Not Sure! I need advice"}),(0,t.jsx)("option",{value:"300gsm",children:"300 GSM"}),(0,t.jsx)("option",{value:"350gsm",children:"350 GSM"}),(0,t.jsx)("option",{value:"400gsm",children:"400 GSM"}),(0,t.jsx)("option",{value:"450gsm",children:"450 GSM"})]})]}),(0,t.jsxs)(x,{children:[(0,t.jsx)(u,{htmlFor:"coating",children:"Coating"}),(0,t.jsxs)(m,{id:"coating",name:"coating",value:e.coating,onChange:n,children:[(0,t.jsx)("option",{value:"None",children:"None"}),(0,t.jsx)("option",{value:"Matte",children:"Matte"}),(0,t.jsx)("option",{value:"Gloss",children:"Gloss"}),(0,t.jsx)("option",{value:"Soft Touch",children:"Soft Touch"})]})]}),(0,t.jsxs)(x,{children:[(0,t.jsx)(u,{htmlFor:"foiling",children:"Foiling"}),(0,t.jsxs)(m,{id:"foiling",name:"foiling",value:e.foiling,onChange:n,children:[(0,t.jsx)("option",{value:"None",children:"None"}),(0,t.jsx)("option",{value:"Gold",children:"Gold"}),(0,t.jsx)("option",{value:"Silver",children:"Silver"}),(0,t.jsx)("option",{value:"Rose Gold",children:"Rose Gold"})]})]}),(0,t.jsxs)(x,{children:[(0,t.jsx)(u,{htmlFor:"color",children:"Color"}),(0,t.jsx)(p,{type:"text",id:"color",name:"color",value:e.color,onChange:n,placeholder:"Pantone or CMYK values"})]}),(0,t.jsxs)(x,{children:[(0,t.jsx)(u,{htmlFor:"quantity",children:"Quantity"}),(0,t.jsx)(p,{type:"number",id:"quantity",name:"quantity",value:e.quantity,onChange:n,min:"1",required:!0})]}),(0,t.jsxs)(x,{children:[(0,t.jsx)(u,{htmlFor:"printingSides",children:"Printing Sides"}),(0,t.jsxs)(m,{id:"printingSides",name:"printingSides",value:e.printingSides,onChange:n,children:[(0,t.jsx)("option",{value:"Single Side",children:"Single Side"}),(0,t.jsx)("option",{value:"Double Side",children:"Double Side"})]})]}),(0,t.jsxs)(x,{children:[(0,t.jsx)(u,{htmlFor:"additionalMessage",children:"Additional Message (Optional)"}),(0,t.jsx)(g,{id:"additionalMessage",name:"additionalMessage",value:e.additionalMessage,onChange:n,placeholder:"Tell us more about your project..."})]}),(0,t.jsx)(j,{type:"submit",children:"Submit"})]})}),(0,t.jsx)(h,{children:(0,t.jsxs)(f,{children:[(0,t.jsxs)(v,{children:[(0,t.jsx)(b,{children:(0,t.jsx)(l.g,{icon:s.Dfk})}),(0,t.jsx)(y,{children:"NO Die & plate charges"}),(0,t.jsx)(w,{children:"Get free setup costs on every order!"})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(b,{children:(0,t.jsx)(l.g,{icon:s.JxU})}),(0,t.jsx)(y,{children:"High quality offset printing"}),(0,t.jsx)(w,{children:"High-quality, modern printing customized to fit your brand."})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(b,{children:(0,t.jsx)(l.g,{icon:s.W2$})}),(0,t.jsx)(y,{children:"Custom size & style"}),(0,t.jsx)(w,{children:"Customized precisely to meet your unique specifications, ensuring a flawless fit every time."})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(b,{children:(0,t.jsx)(l.g,{icon:s.jTw})}),(0,t.jsx)(y,{children:"Free Design Assistance"}),(0,t.jsx)(w,{children:"Complimentary design assistance to bring your vision to life!"})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(b,{children:(0,t.jsx)(l.g,{icon:s.THi})}),(0,t.jsx)(y,{children:"Low minimum order quantity"}),(0,t.jsx)(w,{children:"Customizable order quantities from 100 up to 500,000 boxes to fit your needs."})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(b,{children:(0,t.jsx)(l.g,{icon:s.raf})}),(0,t.jsx)(y,{children:"Fast & Free Delivery"}),(0,t.jsx)(w,{children:"Receive your custom boxes within 5-10 days across the UK on orders over \xa3300."})]})]})})]})]}),(0,t.jsxs)(S,{children:[(0,t.jsx)(k,{children:"Bring your ideas to life in minutes!"}),(0,t.jsx)(C,{children:"Delivering groundbreaking excellence in packaging"}),(0,t.jsxs)(z,{children:["Get Started Today",(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z",fill:"white"})})]})]})]})}}]]);
//# sourceMappingURL=1.25a2118c.chunk.js.map