import{c as d,r,j as a,a as o,I as N,B as i}from"./index-BVSbXgZS.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=d("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=d("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=d("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=d("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]),m=r.forwardRef(({className:t,...e},s)=>a.jsx("div",{ref:s,className:o("rounded-base shadow-light dark:shadow-dark border-2 border-border dark:border-darkBorder bg-main text-black",t),...e}));m.displayName="Card";const x=r.forwardRef(({className:t,...e},s)=>a.jsx("div",{ref:s,className:o("flex flex-col space-y-1.5 p-6",t),...e}));x.displayName="CardHeader";const p=r.forwardRef(({className:t,...e},s)=>a.jsx("h3",{ref:s,className:o("text-xl leading-none font-heading tracking-tight",t),...e}));p.displayName="CardTitle";const h=r.forwardRef(({className:t,...e},s)=>a.jsx("p",{ref:s,className:o("text-sm text-black font-base !mt-3",t),...e}));h.displayName="CardDescription";const j=r.forwardRef(({className:t,...e},s)=>a.jsx("div",{ref:s,className:o("p-6 pt-0",t),...e}));j.displayName="CardContent";const M=r.forwardRef(({className:t,...e},s)=>a.jsx("div",{ref:s,className:o("flex items-center p-6 pt-0",t),...e}));M.displayName="CardFooter";const I=()=>{const[t,e]=r.useState(!1),[s,f]=r.useState(""),[c,l]=r.useState(""),k="kusuma.nayr@gmail.com",u="+62895320987471",b="Ajakan Kerjasama",C=()=>{c==="wa"?e(n=>!n):(l("wa"),e(!0))},g=()=>{c==="email"?e(n=>!n):(l("email"),e(!0))},y=()=>{const n=`https://wa.me/${u}?text=${encodeURIComponent(s)}`;window.open(n,"_blank")},w=()=>{const n=`mailto:${k}?subject=${encodeURIComponent(b)}&body=${encodeURIComponent(s)}`;window.open(n,"_blank")};return a.jsxs(m,{children:[a.jsxs(x,{children:[a.jsx(p,{children:"Sosial Media"}),a.jsx(h,{children:"Hubungi saya di kontak di bawah ini"})]}),a.jsxs(j,{children:[a.jsxs("div",{className:t?"flex flex-col justify-end items-end mb-3 gap-2":"hidden",children:[a.jsx(N,{placeholder:"kirimi saya pesan",onChange:n=>{f(n.target.value)}}),a.jsxs(i,{variant:"default",className:"bg-mainAccent text-white",onClick:c==="wa"?y:w,children:["Kirim ",a.jsx(A,{size:12})]})]}),a.jsxs("div",{className:"flex flex-col gap-3 text-base",children:[a.jsxs(i,{variant:"neutral",children:[a.jsx(v,{size:12}),a.jsx("a",{href:"https://www.instagram.com/yankuniku",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})]}),a.jsxs(i,{variant:"neutral",onClick:C,className:c==="wa"?"bg-secAccent":"bg-bg",children:[a.jsx(z,{size:12}),"Whatsapp"]}),a.jsxs(i,{variant:"neutral",onClick:g,className:c==="email"?"bg-secAccent":"bg-bg",children:[a.jsx(R,{size:12})," Email"]})]})]})]})},S=()=>a.jsx("div",{children:a.jsx(I,{})});export{S as default};
