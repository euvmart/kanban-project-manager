import{j as t}from"./index-fff0fbec.js";function c({name:e,isChecked:n,label:u}){return t.jsxs("div",{className:"container-checkbox",children:[t.jsx("input",{hidden:!0,name:e,defaultValue:"false"}),t.jsx("input",{id:e,className:"checkbox",type:"checkbox",defaultValue:!0,defaultChecked:n,name:e}),t.jsx("label",{htmlFor:e,children:u})]})}function d({name:e,optionValues:n,defaultValue:u=null,id:l}){return t.jsx("select",{name:e,className:"select",defaultValue:u,id:l,children:n.map((a,i)=>t.jsx("option",{value:a.value,children:a},i))})}function r({name:e,defaultValue:n=null,isRequired:u,placeholder:l,id:a,type:i="text"}){return t.jsx("input",{required:u,className:"input-text",name:e,defaultValue:n,id:a,placeholder:l,type:i})}function x({name:e,defaultValue:n=null,isRequired:u,placeholder:l}){return t.jsx("textarea",{required:u,className:"textarea",name:e,defaultValue:n,id:e,placeholder:l})}function o(e){return t.jsxs("div",{className:"wrapper-input-with-button",id:e.id,children:[t.jsx(r,{isRequired:!0,name:e.nameInput,placeholder:e.placeholder,defaultValue:e.defaultValue}),t.jsx("button",{type:"button",onClick:e.handlerClick,className:"wrapper-input-with-button_button",children:"×"})]})}export{c as C,r as I,d as S,x as T,o as a};