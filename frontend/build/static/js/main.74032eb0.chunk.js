(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{64:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);c(59);var n=c(0),a=c.n(n),r=c(22),s=c.n(r),i=(c(64),c(3)),o=c(15),j=c(8),l=c(4),b=c(9),d=c(54),u=Object(d.createAuthProvider)({getAccessToken:"access_token",onUpdateToken:function(e){return fetch("".concat("https://db-crud-tool123.herokuapp.com/","/refresh"),{method:"POST",body:e.refresh_token}).then((function(e){return e.json()}))}}),O=u.useAuth,h=(u.authFetch,u.login),p=u.logout,x=c(80),m=c(1),f="https://db-crud-tool123.herokuapp.com/",g=function(e){var t=e.showIt,c=e.columns,a=O(),r=Object(i.a)(a,1)[0],s=Object(n.useState)(""),j=Object(i.a)(s,2),d=j[0],u=j[1],h=localStorage.getItem("REACT_TOKEN_AUTH_KEY");Object(n.useEffect)((function(){if(r){var e=localStorage.getItem("REACT_TOKEN_AUTH_KEY");fetch("".concat(f,"/getUser"),{method:"GET",headers:{"content-type":"application/json",Authorization:"Bearer ".concat(JSON.parse(e))}}).then(function(){var e=Object(b.a)(Object(l.a)().mark((function e(t){var c,n;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:c=e.sent,t.ok?u(c.uname):(n=c.hasOwnProperty("message")?c.message:c.msg,alert("ERROR ".concat(t.status,":  ").concat(n)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}}),[r]);var g=function(){var e=Object(b.a)(Object(l.a)().mark((function e(){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/out"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(JSON.parse(h))}});case 2:e.sent,p();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(m.jsxs)(o.b,{className:"navbar-brand",to:"/",children:[Object(m.jsx)(x.a,{}),"  DB CRUD Tool"]}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(m.jsxs)("ul",{className:"navbar-nav",children:[t&&Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(o.b,{className:"nav-link",to:"/it",state:{columns:c},children:"Table"})}),r?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(o.b,{className:"nav-link",to:"/opslog",children:"Operations Log"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(o.b,{className:"nav-link",to:"/perms",children:"Permissions"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsxs)("a",{className:"nav-link",children:["Hi, ",d,"!"]})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link active",href:"#",onClick:function(){return g()},children:"Log Out"})})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(o.b,{className:"nav-link",to:"/login",children:"Log In"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(o.b,{className:"nav-link",to:"/signup",children:"Sign Up"})})]})]})})]})},v=c(2),y=c(24),k="https://db-crud-tool123.herokuapp.com/",N=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(i.a)(r,2),o=s[0],j=s[1],d=Object(n.useState)(!1),u=Object(i.a)(d,2),O=u[0],h=u[1],p=Object(n.useState)(""),x=Object(i.a)(p,2),f=x[0],g=x[1],N=localStorage.getItem("REACT_TOKEN_AUTH_KEY"),S=function(){var e=Object(b.a)(Object(l.a)().mark((function e(){var t,c;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(k,"/users"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(JSON.parse(N))}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,t.ok?(c.forEach((function(e){e.editing=0})),a(c)):(j(!1),g("ERROR ".concat(t.status,":  ").concat(c.message)),h(!0));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){S()}),[]);var w=function(e,t){return function(){a(c.map((function(c){return c.id===e&&1===c.editing?Object(v.a)(Object(v.a)({},c),{},{permission:c.permission^t}):c})))}},C=function(){var e=Object(b.a)(Object(l.a)().mark((function e(t){var n,r,s;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==c.find((function(e){return e.id===t})).editing){e.next=5;break}a(c.map((function(e){return e.id===t?Object(v.a)(Object(v.a)({},e),{},{editing:1}):e}))),e.next=13;break;case 5:return n=c.find((function(e){return e.id===t})).permission,e.next=8,fetch("".concat(k,"/perms/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(JSON.parse(N))},body:JSON.stringify({permission:n})});case 8:return r=e.sent,e.next=11,r.json();case 11:s=e.sent,r.ok?(a(c.map((function(e){return e.id===t?Object(v.a)(Object(v.a)({},e),{},{editing:0}):e}))),j(!0)):(j(!1),g("ERROR ".concat(r.status,":  ").concat(s.message)),h(!0));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[o&&Object(m.jsx)(y.a,{variant:"info",onClose:function(){return j(!1)},dismissible:!0,children:Object(m.jsx)("p",{children:"Successfully Updated!"})}),O&&Object(m.jsx)(y.a,{variant:"danger",onClose:function(){return h(!1)},dismissible:!0,children:Object(m.jsx)("p",{children:f})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("table",{className:"table table-striped",children:[Object(m.jsxs)("thead",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{rowspan:"2",style:{verticalAlign:"middle",fontWeight:"bold"},children:"User Name"}),Object(m.jsx)("td",{rowspan:"2",style:{verticalAlign:"middle",fontWeight:"bold"},children:"Email"}),Object(m.jsx)("th",{colspan:"5",style:{textAlign:"center",fontWeight:"bold"},children:"Permissions"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Read"}),Object(m.jsx)("th",{children:"Create"}),Object(m.jsx)("th",{children:"Update"}),Object(m.jsx)("th",{children:"Delete"}),Object(m.jsx)("th",{children:"Admin"})]})]}),Object(m.jsx)("tbody",{children:c.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.username}),Object(m.jsx)("td",{children:e.email}),Object(m.jsx)("td",{children:Object(m.jsx)("input",{className:"form-check-input",checked:1&e.permission,onChange:w(e.id,1),type:"checkbox"})}),Object(m.jsx)("td",{children:Object(m.jsx)("input",{className:"form-check-input",checked:2&e.permission,onChange:w(e.id,2),type:"checkbox"})}),Object(m.jsx)("td",{children:Object(m.jsx)("input",{className:"form-check-input",checked:4&e.permission,onChange:w(e.id,4),type:"checkbox"})}),Object(m.jsx)("td",{children:Object(m.jsx)("input",{className:"form-check-input",checked:8&e.permission,onChange:w(e.id,8),type:"checkbox"})}),Object(m.jsx)("td",{children:Object(m.jsx)("input",{className:"form-check-input",checked:128&e.permission,onChange:w(e.id,128),type:"checkbox"})}),Object(m.jsx)("td",{children:Object(m.jsx)("button",{className:1===e.editing?"btn btn-danger btn-sm btn-block":"btn btn-secondary btn-sm btn-block",onClick:function(t){return C(e.id)},children:1===e.editing?"Update":"Edit"})})]},e.id)}))})]})})})]})},S=c(12),w=c(82),C=c(56),T="https://db-crud-tool123.herokuapp.com/",E=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(i.a)(r,2),o=s[0],d=s[1],u=Object(n.useState)(""),O=Object(i.a)(u,2),h=O[0],p=O[1],x=Object(n.useState)(""),f=Object(i.a)(x,2),g=f[0],k=f[1],N=Object(n.useState)(!1),E=Object(i.a)(N,2),R=E[0],_=E[1],A=Object(j.e)(),P=Object(n.useState)([]),L=Object(i.a)(P,2),U=L[0],J=L[1],G=Object(n.useState)([]),B=Object(i.a)(G,2),I=B[0],q=B[1],K=localStorage.getItem("REACT_TOKEN_AUTH_KEY"),z=Object(n.useState)({}),D=Object(i.a)(z,2),Y=D[0],F=D[1],H=function(){var e=Object(b.a)(Object(l.a)().mark((function e(t){var n,r,s,i,o,j;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),R){e.next=11;break}return e.next=4,fetch("".concat(T,"/items"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(JSON.parse(K))},body:JSON.stringify(Y)});case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,n.ok?(d(!1),p("Successfully Added!"),k("info"),d(!0)):(d(!1),p("ERROR ".concat(n.status,":  ").concat(r.message)),k("danger"),d(!0)),e.next=18;break;case 11:return e.next=13,fetch("".concat(T,"/items/").concat(c),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(JSON.parse(K))},body:JSON.stringify(Y)});case 13:return s=e.sent,e.next=16,s.json();case 16:i=e.sent,s.ok?(_(!1),a(""),d(!1),p("Successfully Updated!"),k("info"),d(!0)):(d(!1),p("ERROR ".concat(s.status,":  ").concat(i.message)),k("danger"),d(!0));case 18:return e.next=20,M();case 20:for(j in o=Object(v.a)({},Y))o[j]="";F(o);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(b.a)(Object(l.a)().mark((function e(){var t,c;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(T,"/items"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(JSON.parse(K))}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,J(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(b.a)(Object(l.a)().mark((function e(t){var c,n;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this record?")){e.next=21;break}return e.next=4,fetch("".concat(T,"/items/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(JSON.parse(K))}});case 4:return c=e.sent,e.next=7,c.json();case 7:if(n=e.sent,!c.ok){e.next=17;break}return e.next=11,M();case 11:d(!1),p("Successfully Deleted!"),k("info"),d(!0),e.next=21;break;case 17:d(!1),p("ERROR ".concat(c.status,":  ").concat(n.message)),k("danger"),d(!0);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(b.a)(Object(l.a)().mark((function e(t){var c,n,r;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(T,"/items/").concat(t),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(JSON.parse(K))}});case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,c.ok?(_(!0),a(t),r={},I.forEach((function(e){return r[e.c_name]=n[e.c_name]})),F(r)):(d(!1),p("ERROR ".concat(c.status,":  ").concat(n.message)),k("danger"),d(!0));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){A.state.hasOwnProperty("columns")&&q(A.state.columns),M()}),[]),Object(m.jsxs)(m.Fragment,{children:[o&&Object(m.jsx)(y.a,{variant:g,onClose:function(){return d(!1)},dismissible:!0,children:Object(m.jsx)("p",{children:h})}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsxs)("form",{className:"card card-body",children:[I.map((function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(w.a.Group,{children:Object(m.jsx)(w.a.Control,{type:"text",onChange:function(t){return F(Object(v.a)(Object(v.a)({},Y),{},Object(S.a)({},e.c_name,t.target.value)))},value:Y[e.c_name],placeholder:e.c_name})}),Object(m.jsx)("br",{})]})})),Object(m.jsx)(C.a,{variant:"primary",onClick:H,children:R?"Update":"Add"})]})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("table",{className:"table table-striped",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[I.map((function(e){return Object(m.jsx)("th",{children:e.c_name})})),Object(m.jsx)("th",{children:"Operations"})]})}),Object(m.jsx)("tbody",{children:U.map((function(e){return Object(m.jsxs)("tr",{children:[I.map((function(t){return Object(m.jsx)("td",{children:e[t.c_name]})})),Object(m.jsxs)("td",{children:[Object(m.jsx)("button",{className:"btn btn-secondary btn-sm btn-block",onClick:function(t){return $(e.id)},children:"Edit"}),Object(m.jsx)("button",{className:"btn btn-danger btn-sm btn-block",onClick:function(t){return W(e.id)},children:"Delete"})]})]},e.id)}))})]})})]})]})},R=c(41),_=function(){var e,t,c=Object(R.a)(),a=c.register,r=c.handleSubmit,s=c.reset,d=c.formState.errors,u=Object(j.f)(),O=Object(n.useState)(!1),p=Object(i.a)(O,2),x=p[0],f=p[1],g=Object(n.useState)(""),k=Object(i.a)(g,2),N=k[0],S=k[1],T=function(){var e=Object(b.a)(Object(l.a)().mark((function e(t){var c,n,a;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)},e.next=3,fetch("".concat("https://db-crud-tool123.herokuapp.com/","/login"),c);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,n.ok?(h(a.access_token),s(),u("/",{state:{uname:t.username}})):(S("ERROR ".concat(n.status,":  ").concat(a.message)),f(!0));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"form",children:[x&&Object(m.jsx)(y.a,{variant:"danger",onClose:function(){return f(!1)},dismissible:!0,children:Object(m.jsx)("p",{children:N})}),Object(m.jsx)("h1",{children:"Login Page"}),Object(m.jsxs)("form",{children:[Object(m.jsxs)(w.a.Group,{children:[Object(m.jsx)(w.a.Label,{children:"Username"}),Object(m.jsx)(w.a.Control,Object(v.a)({type:"text",placeholder:"Your username"},a("username",{required:!0,maxLength:25})))]}),d.username&&Object(m.jsx)("p",{style:{color:"red"},children:Object(m.jsx)("small",{children:"Username is required"})}),"maxLength"===(null===(e=d.username)||void 0===e?void 0:e.type)&&Object(m.jsx)("p",{style:{color:"red"},children:Object(m.jsx)("small",{children:"Max characters should be 25"})}),Object(m.jsx)("br",{}),Object(m.jsxs)(w.a.Group,{children:[Object(m.jsx)(w.a.Label,{children:"Password"}),Object(m.jsx)(w.a.Control,Object(v.a)({type:"password",placeholder:"Your password"},a("password",{required:!0,minLength:8}))),d.username&&Object(m.jsx)("p",{style:{color:"red"},children:Object(m.jsx)("small",{children:"Password is required"})}),"minLength"===(null===(t=d.password)||void 0===t?void 0:t.type)&&Object(m.jsx)("p",{style:{color:"red"},children:Object(m.jsx)("small",{children:"Password should be more than 8 characters"})})]}),Object(m.jsx)("br",{}),Object(m.jsx)(w.a.Group,{children:Object(m.jsx)(C.a,{as:"sub",variant:"primary",onClick:r(T),children:"Login"})}),Object(m.jsx)("br",{}),Object(m.jsx)(w.a.Group,{children:Object(m.jsxs)("small",{children:["Do not have an account? ",Object(m.jsx)(o.b,{to:"/signup",children:"Create One"})]})})]})]})})},A=function(){var e,t,c,a,r=Object(R.a)(),s=r.register,j=r.handleSubmit,d=r.reset,u=r.formState.errors,O=Object(n.useState)(!1),h=Object(i.a)(O,2),p=h[0],x=h[1],f=Object(n.useState)(""),g=Object(i.a)(f,2),k=g[0],N=g[1],S=Object(n.useState)(!1),T=Object(i.a)(S,2),E=T[0],_=T[1],A=Object(n.useState)(""),P=Object(i.a)(A,2),L=P[0],U=P[1],J=function(){var e=Object(b.a)(Object(l.a)().mark((function e(t){var c,n,a;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.password!==t.confirmPassword){e.next=11;break}return c={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t.username,email:t.email,password:t.password})},e.next=4,fetch("".concat("https://db-crud-tool123.herokuapp.com/","/signup"),c);case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,n.ok?(N(a.message),x(!0),d()):(x(!1),U("ERROR ".concat(n.status,":  ").concat(a.message)),_(!0)),e.next=14;break;case 11:x(!1),U("Passwords do not match"),_(!0);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"form",children:[p&&Object(m.jsx)(y.a,{variant:"success",onClose:function(){x(!1)},dismissible:!0,children:Object(m.jsx)("p",{children:k})}),E&&Object(m.jsx)(y.a,{variant:"danger",onClose:function(){return _(!1)},dismissible:!0,children:Object(m.jsx)("p",{children:L})}),Object(m.jsx)("h1",{children:"Sign Up Page"}),Object(m.jsxs)("form",{onSubmit:j(J),children:[Object(m.jsxs)(w.a.Group,{children:[Object(m.jsx)(w.a.Label,{children:"Username"}),Object(m.jsx)(w.a.Control,Object(v.a)({type:"text",placeholder:"Your username"},s("username",{required:!0,maxLength:25}))),u.username&&Object(m.jsx)("small",{style:{color:"red"},children:"Username is required"}),"maxLength"===(null===(e=u.username)||void 0===e?void 0:e.type)&&Object(m.jsx)("p",{style:{color:"red"},children:Object(m.jsx)("small",{children:"Max characters should be 25 "})})]}),Object(m.jsx)("br",{}),Object(m.jsxs)(w.a.Group,{children:[Object(m.jsx)(w.a.Label,{children:"Email"}),Object(m.jsx)(w.a.Control,Object(v.a)({type:"email",placeholder:"Your email"},s("email",{required:!0,maxLength:80}))),u.email&&Object(m.jsx)("p",{style:{color:"red"},children:Object(m.jsx)("small",{children:"Email is required"})}),"maxLength"===(null===(t=u.email)||void 0===t?void 0:t.type)&&Object(m.jsx)("p",{style:{color:"red"},children:Object(m.jsx)("small",{children:"Max characters should be 80"})})]}),Object(m.jsx)("br",{}),Object(m.jsxs)(w.a.Group,{children:[Object(m.jsx)(w.a.Label,{children:"Password"}),Object(m.jsx)(w.a.Control,Object(v.a)({type:"password",placeholder:"Your password"},s("password",{required:!0,minLength:8}))),u.password&&Object(m.jsx)("p",{style:{color:"red"},children:Object(m.jsx)("small",{children:"Password is required"})}),"minLength"===(null===(c=u.password)||void 0===c?void 0:c.type)&&Object(m.jsx)("p",{style:{color:"red"},children:Object(m.jsx)("small",{children:"Min characters should be 8"})})]}),Object(m.jsx)("br",{}),Object(m.jsxs)(w.a.Group,{children:[Object(m.jsx)(w.a.Label,{children:"Confirm Password"}),Object(m.jsx)(w.a.Control,Object(v.a)({type:"password",placeholder:"Your password"},s("confirmPassword",{required:!0,minLength:8}))),u.confirmPassword&&Object(m.jsx)("p",{style:{color:"red"},children:Object(m.jsx)("small",{children:"Confirm Password is required"})}),"minLength"===(null===(a=u.confirmPassword)||void 0===a?void 0:a.type)&&Object(m.jsx)("p",{style:{color:"red"},children:Object(m.jsx)("small",{children:"Min characters should be 8"})})]}),Object(m.jsx)("br",{}),Object(m.jsx)(w.a.Group,{children:Object(m.jsx)(C.a,{type:"submit",variant:"primary",children:"SignUp"})}),Object(m.jsx)("br",{}),Object(m.jsx)(w.a.Group,{children:Object(m.jsxs)("small",{children:["Already have an account, ",Object(m.jsx)(o.b,{to:"/login",children:"Log In"})]})}),Object(m.jsx)("br",{})]})]})})},P=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(i.a)(r,2),o=s[0],j=s[1],d=Object(n.useState)(""),u=Object(i.a)(d,2),O=u[0],h=u[1],p=localStorage.getItem("REACT_TOKEN_AUTH_KEY"),x=function(){var e=Object(b.a)(Object(l.a)().mark((function e(){var t,c;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://db-crud-tool123.herokuapp.com/","/logs"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(JSON.parse(p))}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,t.ok?a(c):(h("ERROR ".concat(t.status,":  ").concat(c.message)),j(!0));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){x()}),[]),Object(m.jsxs)(m.Fragment,{children:[o&&Object(m.jsx)(y.a,{variant:"danger",onClose:function(){return j(!1)},dismissible:!0,children:Object(m.jsx)("p",{children:O})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("table",{className:"table table-striped",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{style:{fontWeight:"bold"},children:[Object(m.jsx)("th",{children:"User Name"}),Object(m.jsx)("th",{children:"Timestamp"}),Object(m.jsx)("th",{children:"Database"}),Object(m.jsx)("th",{children:"Table Name"}),Object(m.jsx)("th",{children:"Operation"}),Object(m.jsx)("th",{children:"Operation Object ID"}),Object(m.jsx)("th",{children:"Request Body"})]})}),Object(m.jsx)("tbody",{children:c.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.username}),Object(m.jsx)("td",{children:e.timestamp}),Object(m.jsx)("td",{children:e.db_uri}),Object(m.jsx)("td",{children:e.tb_name}),Object(m.jsx)("td",{children:e.operation}),Object(m.jsx)("td",{children:e.ops_obj_id}),Object(m.jsx)("td",{children:e.request_body})]},e.id)}))})]})})})]})},L=c(81),U=c(57),J=c(29),G="https://db-crud-tool123.herokuapp.com/",B=function(e){var t=e.showItChange,c=e.columnsChange,a=Object(n.useState)(""),r=Object(i.a)(a,2),s=r[0],o=r[1],d=Object(n.useState)([]),u=Object(i.a)(d,2),O=u[0],h=u[1],p=Object(n.useState)([]),x=Object(i.a)(p,2),f=x[0],g=x[1],k=Object(n.useState)({}),N=Object(i.a)(k,2),T=N[0],E=N[1],R=Object(n.useState)(!1),_=Object(i.a)(R,2),A=_[0],P=_[1],B=Object(n.useState)(!1),I=Object(i.a)(B,2),q=I[0],K=I[1],z=Object(n.useState)("Table Name"),D=Object(i.a)(z,2),Y=D[0],F=D[1],H=Object(n.useState)(!1),M=Object(i.a)(H,2),W=M[0],$=M[1],Q=Object(n.useState)(""),V=Object(i.a)(Q,2),X=V[0],Z=V[1],ee=Object(j.f)(),te=localStorage.getItem("REACT_TOKEN_AUTH_KEY"),ce=function(){var e=Object(b.a)(Object(l.a)().mark((function e(t){var c,n;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat(G,"/dbset"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(JSON.parse(te))},body:JSON.stringify({uri:s})});case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,c.ok?(h(n),P(!0)):(Z("ERROR ".concat(c.status,":  ").concat(n.message)),$(!0));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(b.a)(Object(l.a)().mark((function e(t){var c,n;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(t),e.next=3,fetch("".concat(G,"/tbset"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(JSON.parse(te))},body:JSON.stringify({table_name:t})});case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,c.ok?(g(n),K(!0)):(Z("ERROR ".concat(c.status,":  ").concat(n.message)),$(!0));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(e,t){return function(){E(Object(v.a)(Object(v.a)({},T),{},Object(S.a)({},t,T[t]?null:e)))}};return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{children:[W&&Object(m.jsx)(y.a,{variant:"danger",onClose:function(){return $(!1)},dismissible:!0,children:Object(m.jsx)("p",{children:X})}),Object(m.jsx)("h1",{children:"Database Setting"}),Object(m.jsx)("br",{}),Object(m.jsxs)(w.a,{children:[Object(m.jsxs)(U.a,{className:"align-items-center",children:[Object(m.jsx)(J.a,{xs:"auto",children:Object(m.jsx)(w.a.Label,{children:"URI:"})}),Object(m.jsx)(J.a,{xs:"auto",children:Object(m.jsx)(w.a.Control,{type:"text",placeholder:"sqlite:///myweb.db",onChange:function(e){return o(e.target.value)},value:s})}),Object(m.jsx)(J.a,{xs:"auto",children:Object(m.jsx)(C.a,{variant:"primary",onClick:ce,children:"Connect"})})]}),Object(m.jsx)("br",{}),A&&Object(m.jsx)(w.a.Group,{children:Object(m.jsxs)(L.a,{onSelect:ne,children:[Object(m.jsx)(L.a.Toggle,{variant:"secondary",id:"dropdown-basic",children:Y}),Object(m.jsx)(L.a.Menu,{children:O.map((function(e){return Object(m.jsx)(L.a.Item,{eventKey:e,children:e})}))})]})}),q&&Object(m.jsxs)(w.a.Group,{children:[f.map((function(e,t){return Object(m.jsxs)("tr",{style:{display:"flex",width:"150px"},children:[Object(m.jsx)("input",{onChange:ae(e,t),checked:T[t],style:{margin:"20px"},type:"checkbox"}),Object(m.jsx)("td",{style:{margin:"20px"},children:e.c_name}),Object(m.jsx)("td",{style:{margin:"20px"},children:e.c_type})]},t)})),Object(m.jsx)("br",{}),Object(m.jsx)(C.a,{variant:"primary",onClick:function(e){var n=Object.values(T).filter((function(e){return null!==e}));t(!0),c(n),ee("/it",{state:{columns:n}})},children:"Next"})]})]})]})})};var I=function(){var e=a.a.useState(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],r=a.a.useState([]),s=Object(i.a)(r,2),l=s[0],b=s[1];return Object(m.jsxs)(o.a,{children:[Object(m.jsx)(g,{showIt:c,columns:l}),Object(m.jsx)("div",{className:"container p-4",children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{path:"/perms",element:Object(m.jsx)(N,{})}),Object(m.jsx)(j.a,{path:"/login",element:Object(m.jsx)(_,{})}),Object(m.jsx)(j.a,{path:"/signup",element:Object(m.jsx)(A,{})}),Object(m.jsx)(j.a,{path:"/it",element:Object(m.jsx)(E,{})}),Object(m.jsx)(j.a,{path:"/",element:Object(m.jsx)(B,{showItChange:n,columnsChange:b})}),Object(m.jsx)(j.a,{path:"/opslog",element:Object(m.jsx)(P,{})})]})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.74032eb0.chunk.js.map