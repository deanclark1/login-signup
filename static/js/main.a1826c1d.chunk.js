(this["webpackJsonplogin-signup"]=this["webpackJsonplogin-signup"]||[]).push([[0],{15:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var s=t(0),c=t(1),n=t.n(c),l=t(17),r=t.n(l),i=(t(15),t(19)),o=t(6),j=t(8),b=t(2);var d=function(){var e=localStorage.getItem("users"),a=JSON.parse(e);return Object(s.jsx)("div",{className:"homePage",children:Object(s.jsx)("div",{className:"text-center pt-5",children:Object(s.jsxs)("h1",{className:"py-3",children:["Welcome, ",a.firstName," "]})})})};var m=function(){var e=Object(c.useState)(""),a=Object(o.a)(e,2),t=a[0],n=a[1],l=Object(c.useState)(""),r=Object(o.a)(l,2),i=r[0],d=r[1],m=Object(c.useState)(""),u=Object(o.a)(m,2),O=u[0],h=u[1],g=Object(b.f)();return Object(s.jsx)("div",{className:"loginPage",children:Object(s.jsx)("div",{className:"container-fluid",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col-12",children:[Object(s.jsx)("h2",{className:"text-center",children:"Log In"}),Object(s.jsxs)("form",{className:"pt-3",children:[Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsxs)("div",{className:"form-group col-12",children:[Object(s.jsx)("label",{children:"Email address:"}),Object(s.jsx)("input",{className:"form-control mb-2",type:"text",placeholder:"email",value:t,onChange:function(e){n(e.target.value)}})]}),Object(s.jsxs)("div",{className:"form-group col-12",children:[Object(s.jsx)("label",{children:"Password:"}),Object(s.jsx)("input",{className:"form-control mb-2",type:"password",placeholder:"password",value:i,onChange:function(e){d(e.target.value)}})]})]}),Object(s.jsx)("div",{className:"",children:Object(s.jsx)("button",{className:"btn btn-dark login-submit",type:"submit",onClick:function(e){e.preventDefault();var a=JSON.parse(localStorage.getItem("users"));i===a.password&&t===a.email?g.push("/"):h("Wrong email or password")},children:"Login"})}),Object(s.jsxs)("p",{className:"pt-1",children:["Don't have an account? ",Object(s.jsx)(j.b,{to:"/signup",children:"Sign Up"})]}),Object(s.jsx)("div",{className:"",children:Object(s.jsx)("span",{children:O})})]})]})})})})};var u=function(e){var a=e.isLogin;return Object(s.jsx)("div",{children:Object(s.jsxs)("nav",{className:"navbar navbar-expand-lg shadow",children:[Object(s.jsx)(j.b,{className:"navbar-brand",to:"/",children:"Internship Test"}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsx)("div",{className:"collapse navbar-collapse",children:Object(s.jsx)("ul",{className:"navbar-nav ml-auto",children:a?Object(s.jsx)("div",{children:Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(j.b,{className:"nav-link",to:"/login",children:"Logout"})})}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(j.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(j.b,{className:"nav-link",to:"/signup",children:"Signup"})})]})})})]})})};var O=function(){var e=Object(c.useState)(""),a=Object(o.a)(e,2),t=a[0],n=a[1],l=Object(c.useState)(""),r=Object(o.a)(l,2),i=r[0],d=r[1],m=Object(c.useState)(""),u=Object(o.a)(m,2),O=u[0],h=u[1],g=Object(c.useState)(""),p=Object(o.a)(g,2),x=p[0],v=p[1],N=Object(c.useState)(""),f=Object(o.a)(N,2),S=f[0],w=f[1],y=Object(b.f)();return Object(s.jsx)("div",{className:"SignUpPage",children:Object(s.jsx)("div",{className:"container-fluid",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col-12 ",children:[Object(s.jsx)("h2",{className:"text-center",children:"Sign Up"}),Object(s.jsxs)("form",{className:"pt-3",children:[Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsxs)("div",{className:"form-group col-md-6 pr-lg-2",children:[Object(s.jsx)("label",{children:"First Name:"}),Object(s.jsx)("input",{className:"form-control mb-2",type:"text",value:t,placeholder:"First Name",onChange:function(e){n(e.target.value)},required:!0})]}),Object(s.jsxs)("div",{className:"form-group col-md-6",children:[Object(s.jsx)("label",{children:"Last Name:"}),Object(s.jsx)("input",{className:"form-control mb-2",type:"text",value:i,placeholder:"Last Name",onChange:function(e){d(e.target.value)},required:!0})]})]}),Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsxs)("div",{className:"form-group col-md-6",children:[Object(s.jsx)("label",{children:"Email:"}),Object(s.jsx)("input",{className:"form-control mb-2",type:"email",value:O,placeholder:"Email",onChange:function(e){h(e.target.value)},required:!0})]}),Object(s.jsxs)("div",{className:"form-group col-md-6 pr-lg-2",children:[Object(s.jsx)("label",{children:"Password:"}),Object(s.jsx)("input",{className:"form-control mb-2",type:"password",value:x,placeholder:"Password",onChange:function(e){v(e.target.value)},required:!0})]})]}),Object(s.jsxs)("div",{className:"pt-1",children:[Object(s.jsx)("button",{className:"btn btn-dark signup-submit mb-2",onClick:function(e){if(e.preventDefault(),t&&i&&O&&x){var a={firstName:t,lastName:i,email:O,password:x},s=JSON.stringify(a);localStorage.setItem("users",s),console.log(localStorage.getItem("users")),w("Successfully Signed up..You will be redirected to login page"),setTimeout((function(){y.push("/login")}),3e3)}else w("Invalid input")},children:"Sign Up"}),S?Object(s.jsx)("span",{className:"",children:S}):null]}),Object(s.jsxs)("div",{className:"",children:["Already have an account? ",Object(s.jsx)(j.b,{to:"/login",children:"Login here"})]})]})]})})})})};t(30);var h=function(){var e=Object(c.useState)(!1),a=Object(o.a)(e,2),t=a[0],n=a[1],l=Object(c.useState)(""),r=Object(o.a)(l,2),h=r[0],g=r[1];function p(e,a){n(e),g(a)}return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(j.a,{children:[Object(s.jsx)(u,Object(i.a)({},{handleLoginstate:p,isLogin:t})),Object(s.jsxs)(b.c,{children:[Object(s.jsx)(b.a,{exact:!0,path:"/",component:function(){return Object(s.jsx)(d,{isLogin:t,username:"object"===typeof h?h.name:null})}}),Object(s.jsx)(b.a,{path:"/signup",component:O}),Object(s.jsx)(b.a,{path:"/login",component:function(){return Object(s.jsx)(m,{handleLoginstate:p})}})]})]})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(a){var t=a.getCLS,s=a.getFID,c=a.getFCP,n=a.getLCP,l=a.getTTFB;t(e),s(e),c(e),n(e),l(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),g()}},[[31,1,2]]]);
//# sourceMappingURL=main.a1826c1d.chunk.js.map