(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"5Oyn":function(e,a,t){"use strict";var l=t("HaE+"),n=t("o0o1"),r=t.n(n),s=t("q1tI"),c=t.n(s),m=t("vDqi"),i=t.n(m),o=t("w4X8"),u=t("NKCw"),d=t("2BYM"),E=t.n(d),g=t("PSD3"),v=t.n(g),p=E()(v.a),b={name:"",email:"",number:"",subject:"",text:""};a.a=function(){var e=Object(s.useState)(b),a=e[0],t=e[1],n=Object(u.a)(),m=n.register,d=n.handleSubmit,E=n.errors,g=function(e){var a=e.target,l=a.name,n=a.value;t((function(e){var a;return Object.assign({},e,((a={})[l]=n,a))}))},v=function(){var e=Object(l.a)(r.a.mark((function e(l){var n,s,c,m,u,d,E;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=o.a+"/api/contact",s=a.name,c=a.email,m=a.number,u=a.subject,d=a.text,E={name:s,email:c,number:m,subject:u,text:d},e.next=6,i.a.post(n,E);case 6:t(b),p.fire({title:"Congratulations!",text:"Your message was successfully send and will back to you soon",icon:"success",timer:2e3,timerProgressBar:!0,showConfirmButton:!1}),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}();return c.a.createElement("form",{id:"contactForm",onSubmit:d(v)},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"Name",value:a.name,onChange:g,ref:m({required:!0})}),c.a.createElement("div",{className:"invalid-feedback",style:{display:"block"}},E.name&&"Name is required."))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",name:"email",className:"form-control",placeholder:"Email",value:a.email,onChange:g,ref:m({required:!0,pattern:/^\S+@\S+$/i})}),c.a.createElement("div",{className:"invalid-feedback",style:{display:"block"}},E.email&&"Email is required."))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",name:"subject",className:"form-control",placeholder:"Subject",value:a.subject,onChange:g,ref:m({required:!0})}),c.a.createElement("div",{className:"invalid-feedback",style:{display:"block"}},E.subject&&"Subject is required."))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",name:"number",className:"form-control",placeholder:"Phone",value:a.number,onChange:g,ref:m({required:!0})}),c.a.createElement("div",{className:"invalid-feedback",style:{display:"block"}},E.number&&"Number is required."))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{name:"text",className:"form-control",cols:"30",rows:"6",placeholder:"Write message",value:a.text,onChange:g,ref:m({required:!0})}),c.a.createElement("div",{className:"invalid-feedback",style:{display:"block"}},E.text&&"Text body is required.")))),c.a.createElement("button",{type:"submit",className:"btn common-btn"},"Send Message ",c.a.createElement("span",null)))}},"Bg/d":function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),r=t("GZMc"),s=t("s8IH"),c=t("Hr5K"),m=t("Wbzz"),i=t("5Oyn"),o=t("qQpL"),u=t.n(o);a.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(r.a,null),n.a.createElement(s.a,{bgText:"Saas Website",pageTitle:"Saas Website",homePageUrl:"/",homePageText:"Home",activePageText:"Saas Website"}),n.a.createElement("div",{id:"case-study",className:"case-study-details-area pt-100"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"details-img"},n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-lg-8"},n.a.createElement("div",{className:"img"},n.a.createElement("img",{src:u.a,alt:"Details"}))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",{className:"details-img-right"},n.a.createElement("div",{className:"details-img-inner"},n.a.createElement("h3",null,"Client"),n.a.createElement("ul",null,n.a.createElement("li",null,"Furnish Furniture Co."),n.a.createElement("li",null,"152 san Francisco, USA"))),n.a.createElement("div",{className:"details-img-inner"},n.a.createElement("h3",null,"Date"),n.a.createElement("ul",null,n.a.createElement("li",null,"15th, September 2020"),n.a.createElement("li",null,"6th, October 2020"))),n.a.createElement("div",{className:"details-img-inner"},n.a.createElement("h3",null,"Categories"),n.a.createElement("ul",null,n.a.createElement("li",null,"Website Design"),n.a.createElement("li",null,"Website Development"))),n.a.createElement("div",{className:"details-img-inner"},n.a.createElement("h3",null,"Working Role"),n.a.createElement("ul",null,n.a.createElement("li",null,"User Interface & UX Design"),n.a.createElement("li",null,"User Interface & UI Design"))))))),n.a.createElement("div",{className:"details-about"},n.a.createElement("h3",null,"About The Project"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ips um dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore mag na aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est")),n.a.createElement("div",{className:"details-goal"},n.a.createElement("h3",null,"Project Goal"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("i",{className:"bx bxs-chevrons-right"}),"Lorem Ipsum is simply dummy text of the printing and typesetting industry"),n.a.createElement("li",null,n.a.createElement("i",{className:"bx bxs-chevrons-right"}),"It is a long established fact that a reader will be distracted by the readable"),n.a.createElement("li",null,n.a.createElement("i",{className:"bx bxs-chevrons-right"}),"Contrary to popular belief, Lorem Ipsum is not simply random text"),n.a.createElement("li",null,n.a.createElement("i",{className:"bx bxs-chevrons-right"}),"There are many variations of passages of Lorem Ipsum available"),n.a.createElement("li",null,n.a.createElement("i",{className:"bx bxs-chevrons-right"}),"All the Lorem Ipsum generators on the Internet tend to repeat predefined"))),n.a.createElement("div",{className:"details-problem"},n.a.createElement("h3",null,"How We Overcome The Problem"),n.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6 col-lg-6"},n.a.createElement("div",{className:"img"},n.a.createElement("img",{src:u.a,alt:"Details"}))),n.a.createElement("div",{className:"col-sm-6 col-lg-6"},n.a.createElement("div",{className:"img"},n.a.createElement("img",{src:u.a,alt:"Details"})))),n.a.createElement("p",null,"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined")),n.a.createElement("div",{className:"details-pages"},n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-sm-4 col-lg-4"},n.a.createElement("div",{className:"pages-item"},n.a.createElement("a",{className:"pre-project",href:"#"},n.a.createElement("i",{className:"flaticon-right-arrow"})," Previous Project"))),n.a.createElement("div",{className:"col-sm-4 col-lg-4"},n.a.createElement("div",{className:"pages-item two"},n.a.createElement(m.Link,{to:"/case-study",className:"common-btn"},"Go Back To Work"))),n.a.createElement("div",{className:"col-sm-4 col-lg-4"},n.a.createElement("div",{className:"pages-item three"},n.a.createElement("a",{className:"next-project",href:"#"},"Next Project ",n.a.createElement("i",{className:"flaticon-right-arrow"})))))),n.a.createElement("div",{className:"contact-area pb-70"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section-title"},n.a.createElement("h2",null,"Have Any Project? Just ",n.a.createElement("span",null,"Drop A Line"),". We Always Love To Hear From You")),n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-lg-7"},n.a.createElement(i.a,null)),n.a.createElement("div",{className:"col-lg-5"},n.a.createElement("div",{className:"col-lg-5"},n.a.createElement("div",{className:"contact-content"},n.a.createElement("div",{className:"top"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("span",null,"Email:"),n.a.createElement("a",{href:"mailto:hello@engage.com"},"hello@engage.com")),n.a.createElement("li",null,n.a.createElement("span",null,"Website:"),n.a.createElement("a",{href:"#",target:"_blank"},"www.engage.com")),n.a.createElement("li",null,n.a.createElement("span",null,"Skype:"),n.a.createElement("a",{href:"#",target:"_blank"},"hello@engage.com")))),n.a.createElement("div",{className:"bottom"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"bx bxl-linkedin"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"bx bxl-github"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"bx bxl-upwork"}))))))))))))),n.a.createElement(c.a,null))}},GZMc:function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l),r=t("Wbzz"),s=t("hd9/"),c=t.n(s);a.a=function(){return n.a.createElement("div",{className:"top-header"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"logo"},n.a.createElement(r.Link,{to:"/"},n.a.createElement("img",{src:c.a,alt:"Logo"})))))))}},Hr5K:function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l);a.a=function(){var e=(new Date).getFullYear();return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"copyright-area seven"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"copyright-item"},n.a.createElement("p",null,"©",e," Design & Developed by ",n.a.createElement("a",{href:"#",target:"_blank",rel:"noreferrer"},"Engage"))))))}},"hd9/":function(e,a,t){e.exports=t.p+"static/engage-small-logo-d21c8bde197bd48f1c215a32dc585ff7.svg"},qQpL:function(e,a,t){e.exports=t.p+"static/case-study-details1-84410363afad0c9bd3cf3e79675fc593.jpg"},s8IH:function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l),r=t("Wbzz");a.a=function(e){var a=e.bgText,t=e.pageTitle,l=e.homePageUrl,s=e.homePageText,c=e.activePageText;return n.a.createElement("div",{className:"page-title-area"},n.a.createElement("div",{className:"d-table"},n.a.createElement("div",{className:"d-table-cell"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"title-content"},n.a.createElement("span",null,a),n.a.createElement("h1",null,t),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(r.Link,{to:l},s)),n.a.createElement("li",null,c)))))),n.a.createElement("div",{className:"lines"},n.a.createElement("div",{className:"line"}),n.a.createElement("div",{className:"line"}),n.a.createElement("div",{className:"line"}),n.a.createElement("div",{className:"line"}),n.a.createElement("div",{className:"line"})))}}}]);
//# sourceMappingURL=component---src-pages-projects-case-study-details-js-79d882a56d6b1db98054.js.map