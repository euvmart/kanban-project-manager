import{u as d,j as e,F as n,L as i,T as m}from"./index-fff0fbec.js";import{I as c,S as u}from"./index-7a65a9d2.js";import{B as f}from"./index-6691dbaf.js";/* empty css              */function N({Title:l,isEditOption:a,isFirstColumn:t,column:o}){const r=d("board").columns.map(s=>s.name);return e.jsxs(n,{className:"form-base form-add-column form-bkg-md",method:"post",children:[e.jsxs("div",{className:"form-add-column_option",children:[e.jsx("input",{style:{position:"absolute",zIndex:-1,opacity:0},type:"checkbox",name:"isFirst",value:t,defaultChecked:!0,"aria-labelledby":"control-first-column"}),e.jsx("h2",{className:"title",children:l}),a&&e.jsx(i,{to:o.toDelete,children:e.jsx(m,{})})]}),e.jsxs("div",{className:"form-add-item-data",children:[e.jsx("label",{htmlFor:"name-column",children:"Name"}),e.jsx(c,{name:"name",isRequired:!0,id:"name-column",placeholder:"e.g. pending",defaultValue:a?o.name:null})]}),e.jsxs("div",{hidden:t,children:[e.jsxs("div",{className:"form-add-item-data",children:[e.jsx("label",{children:"Set position"}),e.jsxs("div",{className:"radio-buttons",children:[e.jsxs("div",{className:"option-radio-button",children:[e.jsx("input",{type:"radio",value:"before",id:"option-before",name:"position",className:"radio-button",defaultChecked:o.position==="before"}),e.jsx("label",{htmlFor:"option-before",children:"Before"})]}),e.jsxs("div",{className:"option-radio-button",children:[e.jsx("input",{type:"radio",value:"after",id:"option-after",name:"position",className:"radio-button",defaultChecked:o.position==="after"}),e.jsx("label",{htmlFor:"option-after",children:"After"})]})]})]}),e.jsxs("div",{className:"form-add-item-data",children:[e.jsx("label",{htmlFor:"reference-column",children:"To column"}),e.jsx(u,{id:"reference-column",optionValues:a?r.filter(s=>s!=o.name):r,name:"column",defaultValue:a&&o.column})]})]}),e.jsx(f,{isPrimary:!0,type:"submit",name:"option",value:a?"edit":"add",children:a?"Edit":"Add column"})]})}export{N as F};
