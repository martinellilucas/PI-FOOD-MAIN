(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,a){e.exports={detailView:"Detail_detailView__1NP3e",detailTitle:"Detail_detailTitle__1J8Ci",loading:"Detail_loading__nY1fD",container:"Detail_container__55QEa",title:"Detail_title__1IOho",subTitle:"Detail_subTitle__-wgSp",image:"Detail_image__2Hq_u",text:"Detail_text__2xbwL",diets:"Detail_diets__gJ35U",separator:"Detail_separator__1F9n2"}},18:function(e,t,a){e.exports={home:"Home_home__3flRi",title:"Home_title__3htcj",loading:"Home_loading__2_TiU",buttonsContainer:"Home_buttonsContainer__15Mnc",menu:"Home_menu__19E2s"}},20:function(e,t,a){e.exports={navBar:"NavBar_navBar__3tnPa",logo:"NavBar_logo__3sQtp",menuContainer:"NavBar_menuContainer__1FEAT",menuText:"NavBar_menuText__2YaHz",active:"NavBar_active__2QHMr",searchContainer:"NavBar_searchContainer__1RZlK"}},24:function(e,t,a){e.exports={view:"About_view__3XmZZ",container:"About_container__1Lahu",image:"About_image__1B_6Z",title:"About_title__erOIF",link:"About_link__3JQeP",linkContainer:"About_linkContainer__2aDpm"}},25:function(e,t,a){e.exports={card:"Card_card__3yruc",title:"Card_title__1iawp",subTitle:"Card_subTitle__3zI48",image:"Card_image__a_Lv3",list:"Card_list__2-ZEC"}},26:function(e,t,a){e.exports={carrousel:"Carrousel_carrousel__13VZz",image:"Carrousel_image__1gkJg"}},28:function(e,t,a){e.exports={container:"Landing_container__331I5",textContainer:"Landing_textContainer__2FvFA",title:"Landing_title__2sS_q",text:"Landing_text__3Rrp2",link:"Landing_link__e1SIR"}},42:function(e,t,a){e.exports={container:"Footer_container__kJKbi",link:"Footer_link__1cUUz",text:"Footer_text__168Ye"}},45:function(e,t,a){e.exports={input:"SearchBar_input__3KfyW"}},47:function(e,t,a){e.exports={button:"Button_button__uEUvP",noButton:"Button_noButton__ESFr4"}},48:function(e,t,a){e.exports={view:"Error_view__2E1-1",title:"Error_title__1AAHw"}},51:function(e,t,a){e.exports={container:"Cards_container__BxIu2"}},57:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(34),s=a.n(n),i=(a(57),a(4)),r=a(14),l=a(20),o=a.n(l),j=a(8),u=a(45),b=a.n(u),m=a(17),d=a(6),h=a(12),p=a(69),O="GET_RECIPES",x="ADD_RECIPE_DETAIL",_="CLEAN_DETAIL",f="SEARCH_RECIPE",g="GET_DIETS",v="ORDER",N="FILTER",y="http://localhost:3001/recipes",w=function(){return function(){var e=Object(h.a)(Object(d.a)().mark((function e(t){var a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3001/diets");case 2:a=e.sent,t({type:g,payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){return function(){var e=Object(h.a)(Object(d.a)().mark((function e(t){var a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(y));case 2:a=e.sent,t({type:O,payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=a(1),E=function(){var e=Object(m.b)(),t=Object(c.useState)(""),a=Object(j.a)(t,2),n=a[0],s=a[1];return Object(S.jsx)("div",{className:b.a.container,children:Object(S.jsx)("input",{onChange:function(e){var t=e.target.value;s(t)},onKeyPress:function(t){var a,c=t.key;n.length&&"Enter"===c?e((a=n,function(){var e=Object(h.a)(Object(d.a)().mark((function e(t){var c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(y,"/?name=").concat(a));case 2:c=e.sent,t({type:f,payload:c.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):e(C())},className:b.a.input,value:n,type:"search",placeholder:"Search"})})},k=function(){return Object(S.jsxs)("div",{className:o.a.navBar,children:[Object(S.jsx)("div",{className:o.a.searchContainer,children:Object(S.jsx)(E,{})}),Object(S.jsxs)("div",{className:o.a.menuContainer,children:[Object(S.jsx)(r.c,{to:"/home",className:function(e){return e.isActive?o.a.active:o.a.menuText},children:"Home"}),Object(S.jsx)(r.c,{to:"/form",className:function(e){return e.isActive?o.a.active:o.a.menuText},children:"Form"}),Object(S.jsx)(r.c,{to:"/about",className:function(e){return e.isActive?o.a.active:o.a.menuText},children:"About"})]})]})},F=a(47),A=a.n(F),D=function(e){return Object(S.jsx)("button",{className:e.display?A.a.button:A.a.noButton,onClick:e.onClick,children:e.text})},I=a(28),L=a.n(I),T=function(){return Object(S.jsxs)("div",{className:L.a.container,children:[Object(S.jsxs)("div",{className:L.a.textContainer,children:[Object(S.jsx)("h1",{className:L.a.title,children:"Welcome to Healthy Food"}),Object(S.jsxs)("p",{className:L.a.text,children:["This is a web application for healthy food recipes in which we can search for recipes through requests to a server developed by me, which in turn brings the information from"," ",Object(S.jsx)(r.b,{className:L.a.link,to:"https://spoonacular.com/food-api",children:"the spoonacular API"}),". At the same time we can fill out a form with our own recipes that will be saved in a database. You can also search for both API and database recipes by name. After showing the recipes brought, we can enter their detail by clicking on the cards shown on the home page. This application was developed by Lucas Martinelli during Henry's individual project instance. Click on the button below to enter the page..."]})]}),Object(S.jsx)(r.b,{to:"/home",children:Object(S.jsx)(D,{display:!0,text:"Enter"})})]})},H=a(24),R=a.n(H),B=a.p+"static/media/foto.35dfeadc.jpg",P=function(){return Object(S.jsxs)("div",{className:R.a.view,children:[Object(S.jsx)("h1",{className:R.a.title,children:"About"}),Object(S.jsxs)("div",{className:R.a.container,children:[Object(S.jsx)("img",{src:B,alt:"foto",className:R.a.image}),"  ","Hi! My name is Lucas Martinelli, i'm a full-stack developer. This proyect has been developed during the Henry's individual proyect instance. I present myself as a flexible and resilient person. I have the capacity for teamwork, problem solving, decision making, adaptation to change and continuous learning. Also, I am tolerant of pressure situations. I am looking for a new job challenge where I can apply my knowledge in the Systems area, having the opportunity to develop myself personally and professionally, fulfilling my tasks satisfactorily and expanding my qualities as a developer.",Object(S.jsxs)("div",{className:R.a.linkContainer,children:[Object(S.jsx)(r.b,{className:R.a.link,to:"https://github.com/martinellilucas",children:"GitHub"}),Object(S.jsx)(r.b,{className:R.a.link,to:"https://www.linkedin.com/in/martinellilucas8/",children:"LinkedIn"})]})]})]})},U=a(11),J=a(10),Z=a(5),M=a(9),q=a.n(M),Q=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.diets}));Object(c.useEffect)((function(){e(w())}),[e]);var a=Object(c.useState)({title:"",summary:"",healthScore:0,instructions:"",image:"",diets:[]}),n=Object(j.a)(a,2),s=n[0],i=n[1],r=Object(c.useState)({title:"",summary:"",healthScore:"",instructions:"",image:"",diets:""}),l=Object(j.a)(r,2),o=l[0],u=l[1],b=function(e){var t=e.target.value,a=e.target.name;/^([0-9])*$/.test(a)?s.diets.includes(parseInt(a))?i(Object(Z.a)(Object(Z.a)({},s),{},{diets:Object(J.a)(s.diets.filter((function(e){return e!==parseInt(a)})))})):i(Object(Z.a)(Object(Z.a)({},s),{},{diets:[].concat(Object(J.a)(s.diets),[parseInt(a)])})):(i(Object(Z.a)(Object(Z.a)({},s),{},Object(U.a)({},a,t))),function(e,t,a,c){"title"===c&&(e.title?a(Object(Z.a)(Object(Z.a)({},t),{},{title:""})):a(Object(Z.a)(Object(Z.a)({},t),{},{title:"Empty title is invalid"}))),"summary"===c&&(e.summary||a(Object(Z.a)(Object(Z.a)({},t),{},{summary:"Empty summary is invalid"})),e.summary.length>200?a(Object(Z.a)(Object(Z.a)({},t),{},{summary:"Summary can't contain more than 200 characters"})):a(Object(Z.a)(Object(Z.a)({},t),{},{summary:""}))),"instructions"===c&&(e.instructions?a(Object(Z.a)(Object(Z.a)({},t),{},{instructions:""})):a(Object(Z.a)(Object(Z.a)({},t),{},{instructions:"Empty instructions are invalid"}))),"healthScore"===c&&(e.healthScore>100?a(Object(Z.a)(Object(Z.a)({},t),{},{healthScore:"Health score limit is 100"})):a(Object(Z.a)(Object(Z.a)({},t),{},{healthScore:""}))),"image"===c&&(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(e.image)?a(Object(Z.a)(Object(Z.a)({},t),{},{image:""})):a(Object(Z.a)(Object(Z.a)({},t),{},{image:"Invalid URL, try an ULR like: https://github.com/martinellilucas"})))}(Object(Z.a)(Object(Z.a)({},s),{},Object(U.a)({},a,t)),o,u,a))};return Object(S.jsxs)("div",{className:q.a.container,children:[Object(S.jsx)("h2",{className:q.a.title,children:"Add your own recipe !"}),Object(S.jsxs)("form",{onSubmit:function(t){var a;t.preventDefault(),alert("Recipe created successfully"),e((a=s,Object(h.a)(Object(d.a)().mark((function e(){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post(y,a).then((function(e){return e.data}));case 2:case"end":return e.stop()}}),e)}))))),i({title:"",summary:"",healthScore:0,instructions:"",image:"",diets:[]})},className:q.a.form,children:[Object(S.jsxs)("div",{className:q.a.section,children:[Object(S.jsx)("label",{htmlFor:"title",className:q.a.label,children:"Title"}),Object(S.jsx)("input",{onChange:b,placeholder:"Enter the title",type:"text",name:"title",value:s.title,className:o.title?q.a.error:q.a.input}),o.title?Object(S.jsx)("span",{className:q.a.msgError,children:o.title}):Object(S.jsx)(S.Fragment,{}),Object(S.jsx)("label",{htmlFor:"summary",className:q.a.label,children:"Summary"}),Object(S.jsx)("textarea",{onChange:b,placeholder:"Enter the summary of the recipe",type:"text",name:"summary",value:s.summary,className:o.summary?q.a.error:q.a.input}),o.summary?Object(S.jsx)("span",{className:q.a.msgError,children:o.summary}):Object(S.jsx)(S.Fragment,{}),Object(S.jsx)("label",{htmlFor:"healthscore",className:q.a.label,children:"Health Score"}),Object(S.jsx)("input",{onChange:b,placeholder:"Enter the health score of the recipe",type:"number",name:"healthScore",value:s.healthScore,className:o.healthScore?q.a.error:q.a.input}),o.healthScore?Object(S.jsx)("span",{className:q.a.msgError,children:o.healthScore}):Object(S.jsx)(S.Fragment,{}),Object(S.jsx)("label",{htmlFor:"instructions",className:q.a.label,children:"Instructions"}),Object(S.jsx)("textarea",{onChange:b,placeholder:"Enter the step by step of the recipe",type:"text",name:"instructions",value:s.instructions,className:o.instructions?q.a.error:q.a.input}),o.instructions?Object(S.jsx)("span",{className:q.a.msgError,children:o.instructions}):Object(S.jsx)(S.Fragment,{}),Object(S.jsx)("label",{htmlFor:"image",className:q.a.label,children:"Image"}),Object(S.jsx)("input",{onChange:b,placeholder:"Enter the url of the image",type:"text",name:"image",value:s.image,className:o.image?q.a.error:q.a.input}),o.image?Object(S.jsx)("span",{className:q.a.msgError,children:o.image}):Object(S.jsx)(S.Fragment,{})]}),Object(S.jsxs)("div",{className:q.a.sectionDiets,children:[Object(S.jsx)("h2",{className:q.a.label,children:"Select the diets which your recipe belongs to:"}),o.diets?Object(S.jsx)("span",{className:q.a.msgError,children:o.diets}):Object(S.jsx)(S.Fragment,{}),t.map((function(e){return Object(S.jsxs)("div",{children:[Object(S.jsx)("label",{htmlFor:e.id,className:q.a.label,children:e.name.toUpperCase()}),Object(S.jsx)("input",{className:q.a.checkbox,type:"checkbox",name:e.id,id:e.id,checked:s.diets.includes(e.id),onChange:b})]},e.id)})),Object(S.jsx)(D,{text:"Submit",display:s.title&&!o.title&&!o.summary&&!o.instructions&&!o.image&&!o.diets,className:q.a.button})]})]})]})},V=a(25),Y=a.n(V),z=function(e){var t=e.title,a=e.image,c=e.id,n=e.healthScore,s=e.diets;return Object(S.jsxs)(r.b,{className:Y.a.card,to:"/detail/".concat(c),children:[Object(S.jsx)("h1",{className:Y.a.title,children:t}),Object(S.jsxs)("h2",{className:Y.a.subTitle,children:["Health Score: ",n]}),Object(S.jsx)("img",{src:a,alt:t,className:Y.a.image}),Object(S.jsx)("h2",{className:Y.a.subTitle,children:"Diets:"}),Object(S.jsx)("ul",{className:Y.a.list,children:s.map((function(e){return Object(S.jsx)("li",{children:e.name.toUpperCase()},e.id)}))})]})},G=a(51),K=a.n(G),X=function(e){var t=e.recipes;return Object(S.jsx)("div",{className:K.a.container,children:t.map((function(e){var t=e.title,a=e.image,c=e.id,n=e.diets,s=e.healthScore;return Object(S.jsx)(z,{id:c,title:t,image:a,diets:n,healthScore:s},c)}))})},W=a(26),$=a.n(W),ee=a.p+"static/media/carr1.81f248bc.jpg",te=a.p+"static/media/carr2.b62ce97c.jpg",ae=a.p+"static/media/carr3.c7e433d0.jpg",ce=a.p+"static/media/carr4.b1e93eef.jpg",ne=a.p+"static/media/carr5.c99b43ab.jpg",se=function(){return Object(S.jsxs)("section",{className:$.a.carrousel,children:[Object(S.jsx)("img",{className:$.a.image,src:ee,alt:"carrousel"}),Object(S.jsx)("img",{className:$.a.image,src:te,alt:"carrousel"}),Object(S.jsx)("img",{className:$.a.image,src:ae,alt:"carrousel"}),Object(S.jsx)("img",{className:$.a.image,src:ce,alt:"carrousel"}),Object(S.jsx)("img",{className:$.a.image,src:ne,alt:"carrousel"})]})},ie=a(18),re=a.n(ie),le=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e})),a=t.recipes,n=t.diets,s=Object(c.useState)(0),i=Object(j.a)(s,2),r=i[0],l=i[1];return Object(c.useEffect)((function(){e(w()),e(C())}),[e]),Object(S.jsxs)("div",{className:re.a.home,children:[Object(S.jsx)(se,{}),Object(S.jsx)("h1",{className:re.a.title,children:"Recipes"}),Object(S.jsxs)("div",{className:re.a.buttonsContainer,children:[Object(S.jsxs)("select",{className:re.a.menu,name:"order",onChange:function(t){var a=t.target.value;e(function(e){return{type:v,payload:e}}(a))},children:[Object(S.jsx)("option",{className:re.a.menuOption,children:"Order"}),Object(S.jsx)("option",{className:re.a.menuOption,value:"ascendenteAlf",children:"A-Z \u2b06"}),Object(S.jsx)("option",{className:re.a.menuOption,value:"descendenteAlf",children:"Z-A \u2b07"}),Object(S.jsx)("option",{className:re.a.menuOption,value:"ascendenteHS",children:"Health score \u2b06"}),Object(S.jsx)("option",{className:re.a.menuOption,value:"descendenteHS",children:"Health score \u2b07"})]}),Object(S.jsxs)("select",{className:re.a.menu,name:"filter",onChange:function(t){var a=t.target.value;e(function(e){return{type:N,payload:e}}(a))},children:[Object(S.jsx)("option",{children:"All"}),n.length?n.map((function(e){return Object(S.jsx)("option",{children:e.name},e.id)})):Object(S.jsx)(S.Fragment,{}),Object(S.jsx)("option",{value:"db",children:"Data Base"}),Object(S.jsx)("option",{value:"api",children:"Spoon API"})]}),Object(S.jsx)(D,{display:!0,text:"Previus",onClick:function(){r>0&&l(r-9)}}),Object(S.jsx)(D,{display:!0,text:"Next",onClick:function(){r<a.length-9&&l(r+9)}})]}),a.length?Object(S.jsx)(X,{recipes:a.slice(r,r+9)}):Object(S.jsx)("h1",{className:re.a.loading,children:"Loading..."})]})},oe=a(42),je=a.n(oe),ue=function(){return Object(S.jsx)("div",{className:je.a.container,children:Object(S.jsxs)("p",{className:je.a.text,children:["Developed by"," ",Object(S.jsx)("a",{className:je.a.link,href:"https://www.linkedin.com/in/martinellilucas8/",children:"Lucas Martinelli"})]})})},be=a(13),me=a.n(be),de=function(){var e=Object(m.c)((function(e){return e})).recipeDetail,t=Object(i.o)().id,a=Object(m.b)();return Object(c.useEffect)((function(){return a(function(e){return function(){var t=Object(h.a)(Object(d.a)().mark((function t(a){var c;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("".concat(y,"/").concat(e));case 2:c=t.sent,a({type:x,payload:c.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t)),function(){a((function(e){e({type:_})}))}}),[t,a]),Object(S.jsxs)("div",{className:me.a.detailView,children:[Object(S.jsx)("h1",{className:me.a.detailTitle,children:"Recipe Detail: "}),e.title?Object(S.jsxs)("div",{className:me.a.container,children:[Object(S.jsx)("h1",{className:me.a.title,children:e.title}),Object(S.jsx)("hr",{className:me.a.separator}),Object(S.jsx)("h2",{className:me.a.subTitle,children:"Summary"}),Object(S.jsx)("hr",{className:me.a.separator}),Object(S.jsx)("p",{className:me.a.text,children:e.summary.replace(/<[^>]*>/g,"")}),Object(S.jsx)("hr",{className:me.a.separator}),Object(S.jsxs)("p",{className:me.a.text,children:["Health Score: ",e.healthScore]}),Object(S.jsx)("hr",{className:me.a.separator}),Object(S.jsx)("h2",{className:me.a.subTitle,children:"Instructions"}),Object(S.jsx)("hr",{className:me.a.separator}),Object(S.jsx)("p",{className:me.a.text,children:e.instructions.replace(/<[^>]*>/g,"")}),Object(S.jsx)("img",{className:me.a.image,src:e.image,alt:e.title}),Object(S.jsxs)("ul",{className:me.a.diets,children:["Diets",Object(S.jsx)("hr",{className:me.a.separator}),e.diets.map((function(e){return Object(S.jsx)("li",{className:me.a.itemList,children:e.name.toUpperCase()},e.id)}))]})]}):Object(S.jsx)("h1",{className:me.a.loading,children:"Loading..."})]})},he=a(48),pe=a.n(he),Oe=function(){return Object(S.jsx)("div",{className:pe.a.view,children:Object(S.jsx)("h1",{className:pe.a.title,children:"404 Page not found"})})};var xe=function(){var e=Object(i.k)().pathname;return Object(S.jsxs)("div",{children:["/"!==e&&Object(S.jsx)(k,{}),Object(S.jsxs)(i.c,{children:[Object(S.jsx)(i.a,{path:"/",element:Object(S.jsx)(T,{})}),Object(S.jsx)(i.a,{path:"/home",element:Object(S.jsx)(le,{})}),Object(S.jsx)(i.a,{path:"/about",element:Object(S.jsx)(P,{})}),Object(S.jsx)(i.a,{path:"/detail/:id",element:Object(S.jsx)(de,{})}),Object(S.jsx)(i.a,{path:"/form",element:Object(S.jsx)(Q,{})}),Object(S.jsx)(i.a,{path:"*",element:Object(S.jsx)(Oe,{})})]}),Object(S.jsx)(ue,{})]})},_e=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))},fe=a(43),ge={diets:[],recipes:[],recipeDetail:{},allRecipes:[]},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return"ascendenteAlf"===t.payload?Object(Z.a)(Object(Z.a)({},e),{},{recipes:Object(J.a)(e.recipes.sort((function(e,t){return function(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}(e.title,t.title)})))}):"descendenteAlf"===t.payload?Object(Z.a)(Object(Z.a)({},e),{},{recipes:Object(J.a)(e.recipes.sort((function(e,t){return function(e,t){return e.toLowerCase()<t.toLowerCase()?1:e.toLowerCase()>t.toLowerCase()?-1:0}(e.title,t.title)})))}):"ascendenteHS"===t.payload?Object(Z.a)(Object(Z.a)({},e),{},{recipes:Object(J.a)(e.recipes.sort((function(e,t){return e.healthScore-t.healthScore})))}):"descendenteHS"===t.payload?Object(Z.a)(Object(Z.a)({},e),{},{recipes:Object(J.a)(e.recipes.sort((function(e,t){return t.healthScore-e.healthScore})))}):Object(Z.a)({},e);case N:var a=/[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/;return"All"===t.payload?Object(Z.a)(Object(Z.a)({},e),{},{recipes:Object(J.a)(e.allRecipes)}):"db"===t.payload?Object(Z.a)(Object(Z.a)({},e),{},{recipes:Object(J.a)(e.allRecipes.filter((function(e){return a.test(e.id)})))}):"api"===t.payload?Object(Z.a)(Object(Z.a)({},e),{},{recipes:Object(J.a)(e.allRecipes.filter((function(e){return!a.test(e.id)})))}):Object(Z.a)(Object(Z.a)({},e),{},{recipes:Object(J.a)(e.allRecipes.filter((function(e){return e.diets.find((function(e){return e.name===t.payload}))})))});case O:return Object(Z.a)(Object(Z.a)({},e),{},{allRecipes:Object(J.a)(t.payload),recipes:Object(J.a)(t.payload)});case g:return Object(Z.a)(Object(Z.a)({},e),{},{diets:Object(J.a)(t.payload)});case f:return Object(Z.a)(Object(Z.a)({},e),{},{allRecipes:Object(J.a)(e.recipes),recipes:Object(J.a)(t.payload)});case x:var c=t.payload,n=c.id,s=c.title,i=c.summary,r=c.healthScore,l=c.instructions,o=c.image,j=c.diets;return Object(Z.a)(Object(Z.a)({},e),{},{recipeDetail:{id:n,title:s,summary:i,healthScore:r,instructions:l,image:o,diets:j}});case _:return Object(Z.a)(Object(Z.a)({},e),{},{recipeDetail:{}});default:return Object(Z.a)({},e)}},Ne=a(52),ye=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||fe.b,we=Object(fe.c)(ve,ye(Object(fe.a)(Ne.a)));s.a.render(Object(S.jsx)(m.a,{store:we,children:Object(S.jsx)(r.a,{children:Object(S.jsx)(xe,{})})}),document.getElementById("root")),_e()},9:function(e,t,a){e.exports={container:"Form_container__RYP8j",title:"Form_title__QchCv",form:"Form_form__3t6t7",section:"Form_section__hd6bA",sectionDiets:"Form_sectionDiets__3wUOU",input:"Form_input__2ho8s",label:"Form_label__2Jfhs",button:"Form_button__1UJOx",error:"Form_error__1Ncc-",msgError:"Form_msgError__1qnIj",checkbox:"Form_checkbox__3Gmh8"}}},[[66,1,2]]]);
//# sourceMappingURL=main.1bc0dd92.chunk.js.map