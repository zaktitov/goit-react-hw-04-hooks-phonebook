(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{12:function(t,e,a){t.exports={App:"App_App__4V6ah"}},13:function(t,e,a){t.exports={filterLabel:"Filter_filterLabel__zS7-H",filterInput:"Filter_filterInput__3sSlI"}},16:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Nastay Rachinskaay","number":"103-103-103"}]')},2:function(t,e,a){t.exports={input:"Contact_form_input__10eiy",labelName:"Contact_form_labelName__18rFP",labelNumber:"Contact_form_labelNumber__3XZSh",btnSubmit:"Contact_form_btnSubmit__3EmkM",form:"Contact_form_form__3bAYb"}},21:function(t,e,a){},3:function(t,e,a){t.exports={contactsTitle:"Contacts_contactsTitle__2l2Uy",contactsList:"Contacts_contactsList__2oIrB",contactsItem:"Contacts_contactsItem__10bwh",contactsParagraph:"Contacts_contactsParagraph__1LXvq",contactsNumber:"Contacts_contactsNumber__1kcXj",contactsBtn:"Contacts_contactsBtn__31HZF"}},31:function(t,e,a){"use strict";a.r(e);var n=a(6),c=a.n(n),s=a(14),r=a.n(s),o=(a(21),a(17)),i=a(7),l=a(8),u=a(10),m=a(9),b=a(1),d=a(12),h=a.n(d),p=a(15),f=a(2),j=a.n(f),_=a(4),O=a.n(_),C=a(0),g=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameId=O.a.generate(),t.numberId=O.a.generate(),t.handleChange=function(e){var a=e.target,n=a.name,c=a.value;t.setState(Object(p.a)({},n,c))},t.handleSubmit=function(e){var a=t.props.submit;alert("Contact has been saved:"+t.state.name),e.preventDefault(),a(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(a,[{key:"render",value:function(){return Object(C.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(C.jsx)("label",{className:j.a.labelName,htmlFor:this.nameId,children:"Name"}),Object(C.jsx)("input",{className:j.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:this.state.name,onChange:this.handleChange,id:this.nameId}),Object(C.jsx)("label",{className:j.a.labelNumber,htmlFor:this.numberId,children:"Number"}),Object(C.jsx)("input",{className:j.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:this.state.number,onChange:this.handleChange,id:this.numberId}),Object(C.jsx)("button",{type:"submit",className:j.a.btnSubmit,children:"Add contact"})]})}}]),a}(b.Component),N=a(16),v=a(13),x=a.n(v),y=function(t){var e=t.filter,a=t.onChangeFilter;return Object(C.jsxs)(b.Fragment,{children:[Object(C.jsx)("label",{className:x.a.filterLabel,children:"Find contacts by name"}),Object(C.jsx)("input",{className:x.a.filterInput,value:e,onChange:a})]})},S=a(3),I=a.n(S),F=function(t){var e=t.contacts,a=t.deleteContact;return Object(C.jsx)("div",{children:Object(C.jsx)("ul",{className:I.a.contactsList,children:e.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(C.jsxs)("li",{className:I.a.contactsItem,children:[Object(C.jsxs)("p",{className:I.a.contactsParagraph,children:[n,":"]}),Object(C.jsx)("p",{className:I.a.contactsNumber,children:c}),Object(C.jsx)("button",{type:"button",onClick:function(){a(e)},className:I.a.contactsBtn,children:"Delete contact"})]},e)}))})})},k=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:N,filter:""},t.addContact=function(e){var a=e.name,n=e.number;t.state.contacts.some((function(t){return a===t.name}))?alert("".concat(a," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(o.a)(e),[{name:a,number:n,id:O()()}])}}))},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.getFiltredElem=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(C.jsxs)("div",{className:h.a.App,children:[Object(C.jsx)("h1",{children:"PhoonebooK"}),Object(C.jsx)(g,{submit:this.addContact}),Object(C.jsx)("h2",{className:h.a.contactsTitle,children:"Contacts \ud83d\udcde"}),Object(C.jsx)(y,{filter:this.state.filter,onChangeFilter:this.changeFilter}),Object(C.jsx)(F,{contacts:this.getFiltredElem(),deleteContact:this.deleteContact})]})}}]),a}(b.Component),A=k;r.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(A,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.2fe5cc95.chunk.js.map