(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),i=n.n(c),o=(n(14),n(9)),s=n(2),u=n(3),l=n(5),b=n(4),h=(n(15),n(19)),m=n(8),d=n(0),j=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(m.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;a&&r?(e.props.onSubmit(e.state),e.reset()):alert("Some field is empty")},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsxs)("label",{children:["Name",Object(d.jsx)("input",{type:"text",name:"name",placeholder:"Enter Name",value:this.state.name,onChange:this.handleChange})]}),Object(d.jsxs)("label",{children:["Number",Object(d.jsx)("input",{type:"tel",name:"number",placeholder:"Enter Number",value:this.state.number,onChange:this.handleChange})]}),Object(d.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),f=function(e){var t=e.onChange,n=e.filter;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"Find contact by name"}),Object(d.jsx)("label",{children:Object(d.jsx)("input",{type:"text",value:n,onChange:t,placeholder:"Enter name to find"})})]})},p=function(e){var t=e.visibleContacts,n=e.deleteContact;return Object(d.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(d.jsxs)("li",{children:[a,": ",r,Object(d.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})},O=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.formSubmitHandler=function(t){var n=t.name,a=t.number;if(!!e.state.contacts.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})))alert("".concat(n," is alredy in contacts."));else{var r={id:Object(h.a)(),name:n,number:a};e.setState((function(e){var t=e.contacts;return{contacts:[].concat(Object(o.a)(t),[r])}}))}},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getvisibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(j,{onSubmit:this.formSubmitHandler}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(f,{onChange:this.changeFilter,filter:e}),Object(d.jsx)(p,{visibleContacts:this.getvisibleContacts(),deleteContact:this.deleteContact})]})}}]),n}(a.Component);i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4756b84e.chunk.js.map