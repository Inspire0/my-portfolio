(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{31:function(e,a,t){e.exports=t.p+"static/media/myProfile.48ad761c.jpg"},34:function(e,a,t){},35:function(e,a,t){},40:function(e,a,t){e.exports=t.p+"static/media/p1.65cec716.png"},41:function(e,a,t){e.exports=t.p+"static/media/p2.6ed06583.png"},42:function(e,a,t){e.exports=t.p+"static/media/p3.4b5f8868.png"},43:function(e,a,t){e.exports=t(61)},48:function(e,a,t){},49:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(14),c=t.n(l),s=(t(48),t(6)),r=t(7),o=t(9),m=t(8),d=(t(49),t(18)),p=t(25),u=t(27),h=t.n(u),f=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).titles=[],e.state={checked:!1},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(d.a)(e)),e.basic_info={name:"Imisioluwa Emmanuel Akinboye",titles:["Front-end Developer","Backend Developer"]},e}return Object(r.a)(t,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e=document.body,a="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",a)}},{key:"render",value:function(){var e=this,a=this.basic_info.name;this.titles=this.basic_info.titles.map((function(e){return[e.toUpperCase(),1500]})).flat();var t=i.a.memo((function(){return i.a.createElement(p.a,{className:"title-styles",steps:e.titles,loop:50})}),(function(e,a){return!0}));return i.a.createElement("header",{id:"home",style:{height:window.innerHeight-140,display:"block"}},i.a.createElement("div",{className:"row aligner",style:{height:"100%"}},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",null,i.a.createElement("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),i.a.createElement("br",null),i.a.createElement("h1",{className:"mb-0"},i.a.createElement(p.a,{steps:[a],wrapper:"p"})),i.a.createElement("div",{className:"title-container"},i.a.createElement(t,null)),i.a.createElement(h.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#baaa80",onColor:"#353535",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:i.a.createElement("span",{className:"iconify","data-icon":"twemoji:owl","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:i.a.createElement("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"})))))}}]),t}(n.Component),v=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).socials=[{name:"github",url:"https://github.com/inspire01",class:"fab fa-github"}],e.name="Inspire",e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.socials.map((function(e){return i.a.createElement("span",{key:e.name,className:"m-4"},i.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:e.class})))}));return i.a.createElement("footer",null,i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"social-links"},e),i.a.createElement("div",{className:"copyright py-4 text-center"},i.a.createElement("div",{className:"container"},i.a.createElement("small",null,"Copyright \xa9 ",this.name)))))}}]),t}(n.Component),g=t(22),E=t(28),y=t.n(E),b=t(29),N=t.n(b),w=t(30),k=t.n(w),x=t(31),j=t.n(x),S=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).resumeBasicInfo={description_header:"Hi",description:"I'm a software engineer with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines. Eager to obtain a challenging position at a prestigious company like Dream Version that will expand my learning and build upon my developer skills."},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.resumeBasicInfo.description_header,a=this.resumeBasicInfo.description;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{style:{color:"black"}},i.a.createElement("span",null,"About me")),i.a.createElement("div",{className:"row center mx-auto mb-5"},i.a.createElement("div",{className:"col-md-4 mb-5 center"},i.a.createElement("div",{className:"polaroid"},i.a.createElement("span",{style:{cursor:"auto"}},i.a.createElement("img",{height:"250px",src:j.a,alt:"Avatar placeholder"}),i.a.createElement(g.Icon,{icon:y.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),i.a.createElement(g.Icon,{icon:N.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),i.a.createElement(g.Icon,{icon:k.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}})))),i.a.createElement("div",{className:"col-md-8 center"},i.a.createElement("div",{className:"col-md-10"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),i.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"}},i.a.createElement("br",null),i.a.createElement("span",{className:"wave"},e," :) "),i.a.createElement("br",null),i.a.createElement("br",null),a)))))))}}]),t}(n.Component),O=t(23),C=(t(57),t(32)),A=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).experience=[{company:"A.T Global Technologies Limited",title:"Web Developer - Intern",years:"10.2022 - 03.2023",technologies:["HTML5","CSS3","Bootstrap","Javascript"]}],e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.experience.map((function(e,a){var t=e.technologies.map((function(e,a){return i.a.createElement(C.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:a},e)}));return i.a.createElement(O.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:i.a.createElement("i",{className:"fab fa-html5 experience-icon"}),key:a},i.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.title),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},e.company),i.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},t))}));return i.a.createElement("section",{id:"resume",className:"pb-5"},i.a.createElement("div",{className:"col-md-12 mx-auto"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title",style:{color:"black"}},i.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},"Experience")))),i.a.createElement("div",{className:"col-md-8 mx-auto"},i.a.createElement(O.VerticalTimeline,null,e,i.a.createElement(O.VerticalTimelineElement,{iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:i.a.createElement("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})}))))}}]),t}(n.Component),I=t(64),T=t(33),L=t.n(T),z=t(34),B=t.n(z),H=t(35),D=t.n(H),M=(t(58),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.technologies,a=this.props.data.images,t=this.props.data.title,n=this.props.data.description,l=this.props.data.url;if(this.props.data.technologies){var c=e.map((function(e,a){return i.a.createElement("li",{className:"list-inline-item mx-3",key:a},i.a.createElement("span",null,i.a.createElement("div",{className:"text-center"},i.a.createElement("i",{className:e.class,style:{fontSize:"300%"}},i.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},e.name)))))}));if(this.props.data.images)a.map((function(e,a){return i.a.createElement("div",{key:a,"data-src":e})}))}}return i.a.createElement(I.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),i.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},i.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"}},i.a.createElement("div",{className:"slider-tab"},i.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"emojione:red-circle","data-inline":"false",style:{marginLeft:"5px"}})," ","\xa0"," ",i.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:green-circle","data-inline":"false"})),i.a.createElement(L.a,{bullets:!1,organicArrows:!1,cssModule:[B.a,D.a],animation:"scaleOutAnimation",className:"slider-image"},i.a.createElement("div",{"data-src":this.props.data.image}))),i.a.createElement("div",{className:"col-md-10 mx-auto"},i.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},t,l?i.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"link-href"},i.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})):null),i.a.createElement("p",{className:"modal-description"},n),i.a.createElement("div",{className:"col-md-12 text-center"},i.a.createElement("ul",{className:"list-inline mx-auto"},c)))))}}]),t}(n.Component)),W=t(40),J=t.n(W),_=t(41),P=t.n(_),V=t(42),$=t.n(V),F=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).projects=[{title:"A Simple Form",startDate:"2022",description:"This is my first hands-on CSS project and the first project I could showcase happily. I had to put to use all of my knowledge from background positioning, creating overlays to CSS positioning and more.",image:J.a,url:"http://ui-challenge-form.surge.sh/",technologies:[{class:"devicon-html5-plain",name:"HTML 5"},{class:"devicon-css3-plain",name:"CSS 3"}]},{title:"Yabatech Hostels",startDate:"2022",description:"This is a responsive website for a fictional estate agency that showcases their properties and services. I made sure the website is user-friendly, visually appealing, and optimized for search engines. Some of the key features are: Property listings, advanced search filters, contact form, and social media integration.",image:P.a,url:"http://yabatech-hostels.surge.sh/",technologies:[{class:"devicon-html5-plain",name:"HTML5"},{class:"devicon-css3-plain",name:"CSS3"},{class:"devicon-bootstrap-plain",name:"Bootstrap"},{class:"devicon-javascript-plain",name:"Javascript"}]},{title:"Video Player",startDate:"2022",description:"",image:$.a,url:"https://imaginary-lunchroom.surge.sh",technologies:[{class:"devicon-html5-plain",name:"HTML5"},{class:"devicon-css3-plain",name:"CSS3"},{class:"devicon-javascript-plain",name:"Javascript"}]}],n.state={deps:{},detailsModalShow:!1},n}return Object(r.a)(t,[{key:"render",value:function(){var e=this,a=this.projects.map((function(a,t){return i.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:t,style:{cursor:"pointer"}},i.a.createElement("span",{className:"portfolio-item d-block"},i.a.createElement("div",{className:"foto",onClick:function(){return t=a,void e.setState({detailsModalShow:!0,deps:t});var t}},i.a.createElement("div",null,i.a.createElement("img",{src:a.image,alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),i.a.createElement("span",{className:"project-date"},a.startDate),i.a.createElement("br",null),i.a.createElement("p",{className:"project-title-settings mt-3"},a.title)))))}));return i.a.createElement("section",{id:"portfolio"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title",style:{color:"black"}},i.a.createElement("span",null,"PROJECTS")),i.a.createElement("div",{className:"col-md-12 mx-auto"},i.a.createElement("div",{className:"row mx-auto"},a)),i.a.createElement(M,{show:this.state.detailsModalShow,onHide:function(){return e.setState({detailsModalShow:!1})},data:this.state.deps})))}}]),t}(n.Component),R=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).skills=[{name:"HTML 5",class:"devicon-html5-plain"},{name:"CSS 3",class:"devicon-css3-plain"},{name:"JavaScript",class:"devicon-javascript-plain"},{name:"Sass",class:"devicon-sass-original"},{name:"Bootstrap",class:"devicon-bootstrap-plain"},{name:"NodeJs",class:"devicon-nodejs-plain"}],e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.skills.map((function(e,a){return i.a.createElement("li",{className:"list-inline-item mx-3",key:a},i.a.createElement("span",null,i.a.createElement("div",{className:"text-center skills-tile"},i.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},i.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},e.name)))))}));return i.a.createElement("section",{id:"skills"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title"},i.a.createElement("span",{className:"text-white"},"Skills"))),i.a.createElement("div",{className:"col-md-12 text-center"},i.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},e))))}}]),t}(n.Component),U=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this)).state={foo:"bar",resumeData:{},sharedData:{}},n}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(f,null),i.a.createElement(S,null),i.a.createElement(F,null),i.a.createElement(R,null),i.a.createElement(A,null),i.a.createElement(v,null))}}]),t}(n.Component),q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(60);window.$primaryLanguage="en",window.$secondaryLanguage="pl",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",c.a.render(i.a.createElement(U,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Inspire0/my-portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/Inspire0/my-portfolio","/service-worker.js");q?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):G(a,e)}))}}()}},[[43,1,2]]]);
//# sourceMappingURL=main.9898c9c5.chunk.js.map