(this["webpackJsonpdemo-task-app"]=this["webpackJsonpdemo-task-app"]||[]).push([[0],{20:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(1),l=c.n(a),n=c(14),s=c.n(n),o=(c(20),c(0));const r=e=>{let{text:t,color:c,onClick:a}=e;return Object(o.jsx)("button",{style:{backgroundColor:c},className:"btn",onClick:a,children:t})};r.defaltProps={color:"steelblue"};var d=r;const i=e=>{let{title:t,onAdd:c}=e;return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:t}),Object(o.jsx)("h3",{children:"Product list"})]}),Object(o.jsx)(d,{text:"Add",color:"#14693D",onClick:c})]})};i.defaultProps={title:"Default"};var j=i,b=c(15);var u=e=>{let{product:t,onDelete:c,onToggle:a}=e;return Object(o.jsxs)("div",{className:"product",onDoubleClick:()=>a(t._id),children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:t.imageuri,alt:"",className:"product-image"})}),Object(o.jsxs)("div",{className:"product-info",children:[Object(o.jsxs)("h3",{children:[t.productname,Object(o.jsx)(b.a,{style:{color:"red",cursor:"pointer"},onClick:()=>c(t._id)})]}),Object(o.jsx)("p",{children:t.description}),Object(o.jsx)("p",{children:t.availablein})]})]})};var p=e=>{let{products:t,onDelete:c,onToggle:a}=e;return Object(o.jsx)(o.Fragment,{children:t.map((e=>Object(o.jsx)(u,{product:e,onDelete:c,onToggle:a},e._id)))})},h=c(3),O=c.n(h);var m=e=>{let{onAdd:t}=e;const c="https://master--meek-kashata-56d554.netlify.app",[l,n]=Object(a.useState)(""),[s,r]=Object(a.useState)(""),[d,i]=Object(a.useState)(""),[j,b]=Object(a.useState)(""),[u,p]=Object(a.useState)(""),[h,m]=Object(a.useState)(null),x=e=>{if(e.preventDefault(),!l||!s||!d||!j)return void alert("Please fill all field");const a={productname:l,categories:s,description:d,availablein:j,imageuri:u};t(a),(()=>{const e=new FormData;e.append("file",h),O.a.post(c+"/product/upload",e).then((e=>{}))})(),console.log(a)};return Object(o.jsxs)("form",{className:"add-form",onSubmit:e=>{x(e)},children:[Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{children:"Productname"}),Object(o.jsx)("input",{type:"text",placeholder:"Add Productname",value:l,onChange:e=>n(e.target.value)})]}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{children:"Categories"}),Object(o.jsx)("input",{type:"text",placeholder:"Add Categories",value:s,onChange:e=>r(e.target.value)})]}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{children:"Description"}),Object(o.jsx)("input",{type:"text",placeholder:"Add Description",value:d,onChange:e=>i(e.target.value)})]}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{children:"Availablein"}),Object(o.jsx)("input",{type:"text",placeholder:"Availablein",value:j,onChange:e=>b(e.target.value)})]}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{children:"Image"}),Object(o.jsx)("input",{type:"file",onChange:e=>{(e=>{p(c+"/"+e.target.files[0].name),m(e.target.files[0])})(e)}})]}),Object(o.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})};var x=function(){const[e,t]=Object(a.useState)(!1),[c,l]=Object(a.useState)([]),n="https://master--meek-kashata-56d554.netlify.app";Object(a.useEffect)((()=>{O.a.get(n+"/product").then((e=>{console.log(e.data),l(e.data)}))}),[l]);const s=()=>{O.a.get(n+"/product").then((e=>{console.log(e.data),l(e.data)}))};return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(j,{title:"Admin Panel",onAdd:()=>t(!e)}),e&&Object(o.jsx)(m,{onAdd:e=>{O.a.post(n+"/product/add",e).then((e=>{console.log(e.data),s()})).catch((e=>{console.log(e)}))}}),Object(o.jsx)("div",{className:"card",children:c.length>0?Object(o.jsx)(p,{products:c,onDelete:e=>{O.a.delete(n+"/product/"+e).then((e=>{s(),console.log(e.data)})).catch((e=>{console.log(e)}))},onToggle:e=>{l(c.map((t=>t.id===e?{...t,reminder:!t.reminder}:t)))}}):"No task available"})]})};var g=e=>{e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((t=>{let{getCLS:c,getFID:a,getFCP:l,getLCP:n,getTTFB:s}=t;c(e),a(e),l(e),n(e),s(e)}))};s.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),g()}},[[41,1,2]]]);
//# sourceMappingURL=main.c8a8c6f5.chunk.js.map