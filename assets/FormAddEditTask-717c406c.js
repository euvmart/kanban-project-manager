import{j as e,F as l}from"./index-fff0fbec.js";import{I as o,T as m,S as n}from"./index-7a65a9d2.js";import{W as c}from"./index-4f34c0cc.js";import{B as i}from"./index-6691dbaf.js";/* empty css              */function j(d){const{isAddForm:t,optionValues:r,refSubstask:s,task:a}=d;return e.jsx(e.Fragment,{children:e.jsxs(l,{className:"form-base form-bkg-md",method:"post",children:[e.jsx("h2",{className:"title",children:t?"Add New Task":"Edit Task"}),e.jsxs("div",{className:"form-add-item-data",children:[e.jsx("label",{htmlFor:"title",children:"Title"}),e.jsx(o,{id:"title",name:"title",placeholder:"e.g Take a coffee break",isRequired:!0,defaultValue:a?.title})]}),e.jsxs("div",{className:"form-add-item-data",children:[e.jsx("label",{htmlFor:"description",children:"Description"}),e.jsx(m,{name:"description",placeholder:"e.g It's always good to take a break. This 15 minutes break will recharge the batteries a little.",defaultValue:a?.description})]}),e.jsxs("div",{className:"form-add-item-data",children:[e.jsx("p",{children:"Subtasks"}),e.jsx("div",{className:"subtasks-add-input-container",children:e.jsx(c,{ref:s,name:"subtask",placeholder:"e.g Make coffee",initialValue:a?.subtasks||[]})}),e.jsx(i,{handlerClick:()=>s.current.addInput(),type:"button",children:"+Add New Subtask"})]}),e.jsxs("div",{className:"form-add-item-data",children:[e.jsx("label",{htmlFor:"status",children:"Status"}),e.jsx(n,{id:"status",name:"status",optionValues:r,defaultValue:a?.status})]}),e.jsx(i,{isPrimary:!0,type:"submit",name:"option",value:t?"add":"edit",children:t?"Create Task":"Update Task"})]})})}export{j as F};
