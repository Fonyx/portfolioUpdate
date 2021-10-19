(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(e,t,a){},26:function(e,t,a){},482:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(55),o=a.n(l),s=(a(100),a(22)),r=(a(26),a(101),a(10)),i=(a(145),function(e){e.bgColor;var t=e.textColor,a=e.currentPage,n=e.updatePage;return c.a.createElement("header",null,c.a.createElement(r.Navbar,{className:"transparentBG",alignLinks:"right",id:"header",brand:c.a.createElement("img",{className:"navbarIcon",src:"./assets/icons/min_fox_orange.svg",alt:"fonyx logo"}),sidenav:c.a.createElement("ul",null,c.a.createElement("li",{className:"sidenav_link"},c.a.createElement("a",{href:"#about",onClick:function(){return n("About")},className:"About"===a?"active ".concat(t):"inactive ".concat(t)},"About")),c.a.createElement("li",{className:"sidenav_link"},c.a.createElement("a",{href:"#portfolio",onClick:function(){return n("Portfolio")},className:"Portfolio"===a?"active ".concat(t):"inactive ".concat(t)},"Portfolio")),c.a.createElement("li",{className:"sidenav_link"},c.a.createElement("a",{href:"#contact",onClick:function(){return n("Contact")},className:"Contact"===a?"active ".concat(t):"inactive ".concat(t)},"Contact")),c.a.createElement("li",{className:"sidenav_link"},c.a.createElement("a",{href:"#resume",onClick:function(){return n("Resume")},className:"Resume"===a?"active ".concat(t):"inactive ".concat(t)},"Resume")))},c.a.createElement(r.NavItem,{className:"About"===a?"active ".concat(t):"inactive ".concat(t),onClick:function(){return n("About")}},"About"),c.a.createElement(r.NavItem,{className:"Portfolio"===a?"active ".concat(t):"inactive ".concat(t),onClick:function(){return n("Portfolio")}},"Portfolio"),c.a.createElement(r.NavItem,{className:"Contact"===a?"active ".concat(t):"inactive ".concat(t),onClick:function(){return n("Contact")}},"Contact"),c.a.createElement(r.NavItem,{className:"Resume"===a?"active ".concat(t):"inactive ".concat(t),onClick:function(){return n("Resume")}},"Resume")))}),m=function(e){var t=e.textColor;return c.a.createElement("div",{className:"about_section"},c.a.createElement("h2",{className:"".concat(t)},"ABOUT"),c.a.createElement(r.Row,null,c.a.createElement("img",{className:"displayPicture",src:"./assets/images/circle-dp.png",alt:"nicks profile"}),c.a.createElement("h5",{className:"".concat(t)},"Hi, my name is"),c.a.createElement("h2",{className:"".concat(t)},"Nicholas Ritchie"),c.a.createElement("h3",{className:"".concat(t)},"And I build things....internet things"),c.a.createElement("p",{className:"about-text ".concat(t)},"Full stack developer with a background in engineering. Certificate in full stack development from the University of Sydney, with skills in nodeJs, react, css frame works and data persistence tools. An enterprising professional with diverse professional history and a warm interpersonal tone. Made the change from engineering to pursue an idea of visualizing career pathways as an interactive map. Built using Django, d3 and BeautifulSoup. From this project I discovered a dormant attraction to compelling visual products and software development. With a hard science background and broad experience in hardware, I will join you with a light-hearted charm and comprehensive understanding of technical group work.")))},u=function(e){var t=e.props,a=[c.a.createElement("a",{className:"card-github-icon",key:"1",href:t.repo,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-3x fa-github bump_up"})),c.a.createElement("a",{key:"2",href:t.deploy,target:"_blank",rel:"noopener noreferrer"},c.a.createElement(r.Icon,{medium:!0},"language"))];return t.deploy||a.pop(),c.a.createElement("div",{className:"col s12","data-tile":!0},c.a.createElement(r.Card,{actions:a,className:"card transparentBG",title:t.title,header:c.a.createElement(r.CardTitle,{image:t.img}),horizontal:!0},c.a.createElement("div",{className:"card-details"},c.a.createElement("p",{className:"card-text"},t.description)),c.a.createElement("div",{className:"card-tags"},c.a.createElement("p",{className:"card-text"},t.tags.split(",")))))};var p=function(e){var t=e.bgColor,a=e.textColor,n=[];return[{title:"Budgie",img:"https://github.com/Fonyx/budgie/blob/main/assets/images/show.gif?raw=true",bg_color:t,text_color:a,repo:"https://github.com/Fonyx/budgie",deploy:"https://fonyx-budgie.herokuapp.com/",description:"A budgeting app built allowing users to make multiple accounts and track their recurring payments",tags:"node, chartjs, materialize"},{title:"Tech Blog",img:"https://github.com/Fonyx/tech-blog/blob/main/assets/images/show.gif?raw=true",bg_color:t,text_color:a,repo:"https://github.com/Fonyx/tech-blog",deploy:"https://fonyx-tech-stack.herokuapp.com/",description:"A blogging website for tech related discussions",tags:"node, sequelize, mysql, jest"},{title:"Actor Lookup",img:"https://github.com/Fonyx/actorLookup/blob/main/screencap.gif?raw=true",bg_color:t,text_color:a,repo:"https://github.com/Fonyx/actorLookup",deploy:"https://fonyx.github.io/actorLookup/",description:"An IMDB wrapper application that allows users to search for movies shared by two actors",tags:"node, chartjs, materialize"},{title:"Weather Dashboard",img:"https://github.com/Fonyx/weatherDashboard/blob/main/screencap.gif?raw=true",bg_color:t,text_color:a,repo:"https://github.com/Fonyx/weatherDashboard",deploy:"https://fonyx.github.io/weatherDashboard/",description:"An Open Weather Api wrapper application that shows current weather and forecast by city",tags:"node, vanillaJs, materialize"},{title:"Employee Tracker CMS",img:"https://github.com/Fonyx/employeeTracker/blob/main/assets/show.gif?raw=true",bg_color:t,text_color:a,repo:"https://github.com/Fonyx/employeeTracker",description:"A command line application manages company department budgets and employee salaries",tags:"node, mysql, jest, inquirer"},{title:"E-commerce ORM",img:"https://github.com/Fonyx/eCommerceOrm/blob/main/Assets/images/show.gif?raw=true",bg_color:t,text_color:a,repo:"https://github.com/Fonyx/eCommerceOrm",description:"An ORM for a fake E commerce company selling different categories of products",tags:"node, mysql, jest, sequelize"}].forEach((function(e,t){n.push(c.a.createElement(u,{key:t,props:e}))})),c.a.createElement("div",{className:"portfolio_section"},c.a.createElement("h2",{className:"".concat(a)},"PORTFOLIO"),c.a.createElement("div",{className:"row"},n))},d=function(e){e.bgColor;var t=e.textColor;return c.a.createElement("footer",{className:"transparentBG"},c.a.createElement("div",null,c.a.createElement("div",{className:"col l4 offset-l2 s12"},c.a.createElement("div",{className:"footer-icons"},c.a.createElement("a",{className:"footer-icon ".concat(t),target:"_blank",rel:"noopener noreferrer",href:"https://stackoverflow.com/users/1660198/user1660198"},c.a.createElement("i",{id:"profile-stackoverflow-icon",class:"fab fa-3x fa-stack-overflow"})),c.a.createElement("a",{className:"footer-icon ".concat(t),target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/nicholas-ritchie-55147878/"},c.a.createElement("i",{id:"profile-linkedIn-icon",class:"fab fa-3x fa-linkedin"})),c.a.createElement("a",{className:"footer-icon ".concat(t),target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Fonyx"},c.a.createElement("i",{id:"profile-github-icon",class:"fab fa-3x fa-github"}))))))};function g(e){return!(!e||""===e)}var h=function(e){var t=e.textColor,a=Object(n.useState)(""),l=Object(s.a)(a,2),o=l[0],i=l[1],m=Object(n.useState)(""),u=Object(s.a)(m,2),p=u[0],d=u[1],h=Object(n.useState)(""),b=Object(s.a)(h,2),f=b[0],E=b[1],k=Object(n.useState)(""),N=Object(s.a)(k,2),v=N[0],y=N[1],w=Object(n.useState)(!1),x=Object(s.a)(w,2),_=x[0],C=x[1],j=function(e){e.preventDefault();var t=e.target,a=t.id,n=t.value;"email"===a?d(n):"name"===a?i(n):E(n)};return c.a.createElement("div",{className:"center-align ".concat(t)},c.a.createElement("h2",{className:"".concat(t)},"CONTACT"),c.a.createElement("h4",null,"Let me know what you would like to discuss"),c.a.createElement("form",{className:"form center-align"},c.a.createElement(r.TextInput,{icon:c.a.createElement(r.Icon,null,"person"),id:"name",label:"Name",onChange:j}),c.a.createElement(r.TextInput,{icon:c.a.createElement(r.Icon,null,"email"),id:"email",label:"Email",type:"email",onChange:j,validate:!0}),c.a.createElement(r.TextInput,{icon:c.a.createElement(r.Icon,null,"message"),id:"message",label:"Let's chat, discuss or even....gab",onChange:j}),c.a.createElement("button",{className:"btn waves-effect waves-orange quaternary_bg quinary_text",type:"button",onClick:function(e){e.preventDefault(),function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(p)?g(o)?g(f)?(C(!0),y(""),setTimeout((function(){y(""),C(!1),i(""),E(""),d("")}),2e3)):y("But what do you want to know?"):y("But I don't know who you are"):y("That email address looks fishy")}},"Submit")),v&&c.a.createElement("div",null,c.a.createElement("p",{className:"error-text"},v)),_&&c.a.createElement("div",null,c.a.createElement("p",{className:"complete-text"},"Thanks, I'll get back to you shortly")),c.a.createElement("h4",null,"Or If Time Is Of The Essence"),c.a.createElement("a",{href:"mailto:nick.alex.ritchie@gmail.com"},c.a.createElement(r.Button,{className:"quaternary_bg quinary_text",waves:"orange"},"nick.alex.ritchie@gmail.com")))},b=a(93),f=a.n(b);function E(e){var t=e.textColor;return c.a.createElement("div",{className:"resume_section ".concat(t)},c.a.createElement("h2",{className:"".concat(t)},"RESUME"),c.a.createElement("a",{className:"resume-buttons",href:"https://fonyx.github.io/resume/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(r.Button,{className:"quaternary_bg quinary_text resume-button",waves:"orange"},"Online")),c.a.createElement("a",{href:f.a,download:"resume.pdf",target:"_blank"},c.a.createElement(r.Button,{className:"quaternary_bg quinary_text resume-button",waves:"orange"},"Download")),c.a.createElement("section",{className:"row"},c.a.createElement("h3",null,"Frontend Tools"),c.a.createElement("ul",{className:"skill-list"},c.a.createElement("li",{className:"skill"},c.a.createElement("img",{className:"skill-icon",src:"https://raw.githubusercontent.com/d3/d3-logo/master/d3.png"})),c.a.createElement("li",{className:"skill"},c.a.createElement("img",{className:"skill-icon",src:"https://colinstodd.com/images/posts/matcss-min.png"})),c.a.createElement("li",{className:"skill"},c.a.createElement("img",{className:"skill-icon",src:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"})),c.a.createElement("li",{className:"skill"},c.a.createElement("img",{className:"skill-icon",src:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"})),c.a.createElement("li",{className:"skill"},c.a.createElement("img",{className:"skill-icon",src:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"})),c.a.createElement("li",{className:"skill"},c.a.createElement("img",{className:"skill-icon",src:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png"})))),c.a.createElement("section",{className:"row"},c.a.createElement("h3",null,"Backend Tools"),c.a.createElement("ul",{className:"skill-list"},c.a.createElement("li",{className:"skill"},c.a.createElement("img",{className:"skill-icon-big",src:"https://www.ovhcloud.com/sites/default/files/styles/text_media_horizontal/public/2021-05/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png"})),c.a.createElement("li",{className:"skill"},c.a.createElement("img",{className:"skill-icon-big",src:"https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png"})),c.a.createElement("li",{className:"skill"},c.a.createElement("img",{className:"skill-icon",src:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"})))),c.a.createElement("section",{className:"row"},c.a.createElement("h3",null,"Framework Tools"),c.a.createElement("ul",{className:"skill-list"},c.a.createElement("li",{className:"skill"},c.a.createElement("img",{className:"skill-icon-big",src:"https://buttercms.com/static/images/tech_banners/ExpressJS.png"})),c.a.createElement("li",{className:"skill"},c.a.createElement("img",{className:"skill-icon",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"})),c.a.createElement("li",{className:"skill"},c.a.createElement("img",{className:"skill-icon",src:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/django/django.png"})))),c.a.createElement("section",{className:"row"},c.a.createElement("h3",null,"Analytic Tools"),c.a.createElement("ul",{className:"skill-list"},c.a.createElement("li",{className:"skill"},c.a.createElement("img",{className:"skill-icon",src:"https://org-4f6d5299-dbf7-42d8-aa05-456b914c12f6.salsalabs.org/586c91a6-666e-40a7-a52d-84ac53ef8078/53c3aecd-2a80-4115-85fe-d56fea2a4649.png"})),c.a.createElement("li",{className:"skill"},c.a.createElement("img",{className:"skill-icon",src:"https://www.bconcepts.pt/wp-content/uploads/2019/04/PowerBI-Logo.png"})),c.a.createElement("li",{className:"skill"},c.a.createElement("img",{className:"skill-icon",src:"https://numfocus.org/wp-content/uploads/2016/07/pandas-logo-300.png"})))),c.a.createElement("section",{className:"row"},c.a.createElement("h3",null,"Languages and Tools"),c.a.createElement("ul",{className:"skill-list"},c.a.createElement("li",{className:"skill"},c.a.createElement("img",{className:"skill-icon",src:"https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"})),c.a.createElement("li",{className:"skill"},c.a.createElement("img",{className:"skill-icon",src:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"})),c.a.createElement("li",{className:"skill"},c.a.createElement("img",{className:"skill-icon",src:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"})))))}var k=a(94),N=a.n(k);var v=function(){var e=Object(n.useState)("Resume"),t=Object(s.a)(e,2),a=t[0],l=t[1];return c.a.createElement("div",{className:"App"},c.a.createElement(i,{bgColor:"tertiary_bg",textColor:"senary_text",currentPage:a,updatePage:function(e){l(e)}}),c.a.createElement("main",null,c.a.createElement(N.a,{params:{particles:{number:{value:150,density:{enable:!0,value_area:800}},color:{value:"#ae4d75"},shape:{type:"polygon",stroke:{width:0,color:"#ae4d75"},polygon:{nb_sides:6},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.3,random:!0,anim:{enable:!1,speed:.07991497047141839,opacity_min:.19978742617854597,sync:!1}},size:{value:13,random:!0,anim:{enable:!1,speed:23.974491141425517,size_min:3.99574852357092,sync:!1}},line_linked:{enable:!0,distance:142.0488174435947,color:"#ae4d75",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:266.04729729729706,size:12.668918918918909,duration:.9290540540540533,opacity:.6249999999999996,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}}),c.a.createElement(r.Container,null,"About"===a?c.a.createElement(m,{textColor:"senary_text"}):"Portfolio"===a?c.a.createElement(p,{textColor:"senary_text"}):"Contact"===a?c.a.createElement(h,{textColor:"senary_text"}):c.a.createElement(E,{textColor:"senary_text"}))),c.a.createElement(d,{bgColor:"transparentBG",textColor:"senary_text"}))},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,483)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),l(e),o(e)}))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),y()},93:function(e,t,a){e.exports=a.p+"static/media/resume.3b2db4fb.pdf"},95:function(e,t,a){e.exports=a(482)}},[[95,1,2]]]);
//# sourceMappingURL=main.ca85ce64.chunk.js.map