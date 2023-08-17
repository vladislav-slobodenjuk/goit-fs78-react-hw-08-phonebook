"use strict";(self.webpackChunkgoit_fs78_react_hw_08_phonebook=self.webpackChunkgoit_fs78_react_hw_08_phonebook||[]).push([[538],{8538:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,a,i,o=t(2791),s=t(9434),c=t(5705),l=t(6727),x=t(168),u=t(361),p=(0,u.ZP)(c.l0)(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: center;\n  align-items: flex-end;\n\n  padding: 20px;\n\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,\n    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;\n\n  label {\n    margin-bottom: 20px;\n  }\n\n  input {\n    margin-left: 10px;\n  }\n\n  button {\n    align-self: center;\n  }\n"]))),d=t(6916),m=function(n){return n.contacts},f=function(n){return n.filter},h=(0,d.P1)([m,f],(function(n,e){var t=n.items,r=e.toLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(r)}))})),b=t(4402),g=t(3329),j={name:"",number:""},v=l.Ry().shape({name:l.Z_().min(2,"Too short").required("Requered"),number:l.Rx().required()}),w=function(){var n=(0,s.v9)(m).items,e=(0,s.I0)();return(0,g.jsx)(c.J9,{initialValues:j,validationSchema:v,onSubmit:function(t,r){var a=t.name,i=t.number,o=r.resetForm;if(n.find((function(n){return n.name.toLowerCase()===a.toLowerCase()||n.number===i})))return alert("".concat(a," or ").concat(i," is already in contacts."));e((0,b.uK)({name:a.trim(),number:i})),o()},children:(0,g.jsxs)(p,{children:[(0,g.jsxs)("label",{children:["Name:",(0,g.jsx)(c.gN,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]}),(0,g.jsx)(c.Bc,{name:"name"}),(0,g.jsxs)("label",{children:["Number:",(0,g.jsx)(c.gN,{type:"tel",name:"number",title:"phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})]}),(0,g.jsx)(c.Bc,{name:"number"}),(0,g.jsx)("button",{type:"submit",children:"Add contact"})]})})},y=u.ZP.div(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: center;\n  /* align-items: center; */\n\n  padding: 20px;\n\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,\n    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;\n\n  input {\n    margin-top: 10px;\n  }\n"]))),k=t(4808),C=function(){var n=(0,s.v9)(f),e=(0,s.I0)();return(0,g.jsxs)(y,{children:[(0,g.jsx)("label",{htmlFor:"filter",children:"Find contacts by name"}),(0,g.jsx)("input",{id:"filter",type:"text",name:"filter",value:n,onChange:function(n){var t=n.target.value;e((0,k.p)(t))}})]})},_=function(n){var e=n.contact,t=e.id,r=e.name,a=e.number,i=(0,s.I0)();return(0,g.jsxs)("li",{children:[(0,g.jsxs)("p",{children:[r,": ",(0,g.jsx)("span",{children:a})]}),(0,g.jsx)("button",{type:"button",onClick:function(){return function(n){i((0,b.GK)(n))}(t)},children:"Delete"})]})},L=u.ZP.ul(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  padding: 20px;\n\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,\n    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;\n\n  li {\n    display: flex;\n    justify-content: space-between;\n\n    &:not(:last-child) {\n      margin-bottom: 15px;\n    }\n\n    p {\n      display: flex;\n      justify-content: space-between;\n      flex-grow: 1;\n\n      &.emptyList {\n        justify-content: center;\n      }\n    }\n\n    span {\n      align-self: flex-end;\n    }\n  }\n\n  button {\n    margin-left: 15px;\n  }\n"]))),N=function(n){var e=n.text;return(0,g.jsx)("li",{children:(0,g.jsx)("p",{className:"emptyList",children:e})})},Z=function(){var n=(0,s.v9)(m),e=n.items,t=n.isLoading,r=n.error,a=(0,s.v9)(h),i=0===a.length&&0!==e.length&&!t&&!r,o=0===e.length&&!t&&!r;return(0,g.jsxs)(L,{children:[a.map((function(n){return(0,g.jsx)(_,{contact:n},n.id)})),i&&(0,g.jsx)(N,{text:"Nothing found"}),o&&(0,g.jsx)(N,{text:"No saved contacts"}),r&&(0,g.jsx)(N,{text:"An Error acquired"})]})},I=t(5145),P=t(4217),q=function(){var n=(0,s.v9)(m).isLoading,e=(0,s.v9)(P.H).isLoggedIn,t=(0,s.I0)();return(0,o.useEffect)((function(){e&&t((0,b.mk)())}),[t,e]),(0,g.jsxs)("div",{children:[(0,g.jsx)("h1",{children:"Phonebook"}),(0,g.jsx)(w,{}),(0,g.jsx)("h2",{children:"Contacts"}),(0,g.jsx)(C,{}),(0,g.jsx)(Z,{}),n&&(0,g.jsx)(I.a,{})]})}}}]);
//# sourceMappingURL=538.9ce6ee04.chunk.js.map