(function(e){function t(t){for(var r,a,i=t[0],c=t[1],u=t[2],d=0,m=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&m.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(m.length)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},s={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0210":function(e,t,n){},"0309":function(e,t,n){"use strict";var r=n("e652"),s=n.n(r);s.a},"034f":function(e,t,n){"use strict";var r=n("85ec"),s=n.n(r);s.a},"21d1":function(e,t,n){"use strict";var r=n("0210"),s=n.n(r);s.a},"38be":function(e,t,n){},"468f":function(e,t,n){"use strict";var r=n("64eb"),s=n.n(r);s.a},"4f47":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"eventBus",(function(){return Ke}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{wonders:e.wonders,selectedWonder:e.selectedWonder,username:e.username,questions:e.questions}})],1)},o=[],a=(n("d3b7"),n("96cf"),n("a4d3"),n("4de4"),n("d81d"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),i=n("d4ec"),c=n("bee2"),u=n("bc3a"),l=n.n(u);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(){function e(){Object(i["a"])(this,e)}return Object(c["a"])(e,null,[{key:"getWonders",value:function(){return new Promise((function(e,t){var n,r;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,regeneratorRuntime.awrap(l.a.get(url));case 3:n=s.sent,r=n.data,e(r.map((function(e){return m({},e)}))),s.next=11;break;case 8:s.prev=8,s.t0=s["catch"](0),t(s.t0);case 11:case"end":return s.stop()}}),null,null,[[0,8]])}))}},{key:"getQuiz",value:function(){return new Promise((function(e,t){var n,r;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,regeneratorRuntime.awrap(l.a.get(url));case 3:n=s.sent,r=n.data,e(r.map((function(e){return m({},e)}))),s.next=11;break;case 8:s.prev=8,s.t0=s["catch"](0),t(s.t0);case 11:case"end":return s.stop()}}),null,null,[[0,8]])}))}}]),e}(),f=p,h={name:"app",data:function(){return{username:null,selectedWonder:null,wonders:[],questions:[],homepage:!1,quiz:!1,details:!1,map:!1}},mounted:function(){var e=this;Ke.$on("username",(function(t){return e.username=t})),Ke.$on("selected-wonder",(function(t){e.selectedWonder=t,e.$router.push({name:"wonder"})}))},created:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(f.getWonders());case 3:return this.wonders=e.sent,e.next=6,regeneratorRuntime.awrap(f.getQuiz());case 6:this.questions=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),this.error=e.t0.message;case 12:case"end":return e.stop()}}),null,this,[[0,9]])}},v=h,g=(n("034f"),n("2877")),b=Object(g["a"])(v,s,o,!1,null,null,null),w=b.exports,_=n("5f5b"),y=n("8c4f"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("world-map",{attrs:{wonders:e.wonders}}),e.username?e._e():n("user-form",{staticClass:"left-form"}),e.username?n("wonder-selection-form",{staticClass:"right-form",attrs:{wonders:e.wonders}}):e._e(),e.username?n("div",{staticClass:"quiz"},[n("router-link",{staticClass:"router-link",attrs:{to:"/quiz"}},[e._v("Test Your knowledge")])],1):e._e(),e.username?n("conversation-box",{attrs:{message:e.hostMessage,position:"left",speech:"right_speech_bubble",image:"conversation/host.png",username:e.username,id:"homepage-box"}}):e._e()],1)},C=[],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-form centered"},[n("p",[e._v("What is your name?")]),n("form",{staticClass:"user-name",on:{submit:function(t){return t.preventDefault(),e.userFormSubmit(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{id:"username",type:"text",name:"username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("input",{attrs:{id:"submit",type:"submit",name:"",value:"Submit"}})])])},O=[],j={name:"user-form",data:function(){return{username:""}},methods:{userFormSubmit:function(){Ke.$emit("username",this.username)}}},k=j,W=(n("a0a8"),Object(g["a"])(k,S,O,!1,null,"5a3771c1",null)),q=W.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.position},[n("p",{class:e.speech},[e._v(e._s(e.msg))]),n("img",{attrs:{src:e.image}})])},$=[],E=(n("5319"),{name:"conversation-box",props:{message:String,position:String,speech:String,image:String,username:String},computed:{msg:function(){return this.message.replace("$USERNAME",this.username)}}}),I=E,z=(n("e3e6"),Object(g["a"])(I,P,$,!1,null,"d40622e4",null)),Q=z.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"earth_div"}})},M=[],R=(n("99af"),n("b0c0"),{name:"world-map",head:{script:[{src:"https://www.webglearth.com/v2/api.js"}]},created:function(){this.$on("okHead",(function(){setTimeout(this.map,500)}))},props:{wonders:Array},methods:{map:function(){var e=this,t={sky:!0},n=new WE.map("earth_div",t);WE.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(n),this.wonders.forEach((function(t){var r=WE.marker([t.details.latitude,t.details.longitude]).addTo(n);r.bindPopup('<img src="'.concat(t.details.image,'" class="img-fluid"/>\n          <p class="popup-information-text"><strong>Name:</strong> ').concat(t.details.name,'</p>\n          <p class="popup-information-text"><strong>Location:</strong> ').concat(t.details.location,'</p>\n          <p class="popup-information-text"><strong>Year Built:</strong> ').concat(t.details.yearBuilt,"<p>"),{maxWidth:300,maxHeight:300,closeButton:!0}).closePopup(),n.setView([50,0],2),1===e.wonders.length&&(n.setView([t.details.latitude+10,t.details.longitude],2.5),r.openPopup())}))}}}),B=R,D=(n("21d1"),Object(g["a"])(B,A,M,!1,null,null,null)),H=D.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(" Select your wonder")]),n("router-link",{attrs:{to:"/wonder"}},[n("simple-button",{attrs:{message:"Get random wonder",eventChannel:"select-random-wonder"}})],1),n("simple-select",{attrs:{eventChannel:"select-wonder",data:e.wonders}})],1)},G=[],N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{on:{click:e.onButtonClick}},[e._v(e._s(e.message))])},Y=[],L={name:"simple-button",props:{message:String,eventChannel:String},methods:{onButtonClick:function(){Ke.$emit(this.eventChannel)}}},F=L,J=(n("7bb0"),Object(g["a"])(F,N,Y,!1,null,"0e96f430",null)),V=J.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{attrs:{for:"data-selection"}},[e._v(e._s(e.message))]),n("select",{attrs:{id:"data-selection",required:""},on:{change:e.onDataSelection}},[n("option",{attrs:{value:"0",disabled:"",selected:""}},[e._v("Choose")]),e._l(e.data,(function(t,r){return n("option",{key:r,domProps:{value:r}},[e._v(e._s(t.details.name))])}))],2)])},K=[],X={name:"simple-select",props:{message:String,eventChannel:String,data:Array},methods:{onDataSelection:function(e){Ke.$emit(this.eventChannel,e.target.value)}}},Z=X,ee=(n("d23d"),Object(g["a"])(Z,U,K,!1,null,"ff5f2eca",null)),te=ee.exports,ne={name:"wonder-selection-form",props:{wonders:Array},mounted:function(){var e=this;Ke.$on("select-random-wonder",(function(){return e.selectRandomWonder()})),Ke.$on("select-wonder",(function(t){return e.getWonder(t)}))},methods:{selectRandomWonder:function(){this.getWonder(this.getRandomInt(0,this.wonders.length))},getWonder:function(e){this.emitSelectedWonder(this.wonders[e])},emitSelectedWonder:function(e){Ke.$emit("selected-wonder",e)},getRandomInt:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}},components:{"simple-button":V,"simple-select":te}},re=ne,se=Object(g["a"])(re,T,G,!1,null,"6837fcf3",null),oe=se.exports,ae={name:"home",props:{wonders:Array,username:String},computed:{hostMessage:function(){return"Hello ".concat(this.username,"! Welcome to the 7 Wonders of the World, where would you like to go?")}},methods:{onPlayQuizClick:function(){this.enableSection("quiz")}},components:{"world-map":H,"wonder-selection-form":oe,"conversation-box":Q,"user-form":q}},ie=ae,ce=(n("c47e"),Object(g["a"])(ie,x,C,!1,null,"2b751b7d",null)),ue=ce.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main-container"}},[n("div",[n("world-map",{attrs:{wonders:[e.selectedWonder]}})],1),n("div",{attrs:{id:"overlay"}},[n("conversation",{attrs:{wonder:e.selectedWonder,username:e.username}})],1)])},de=[],me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"conversation"}},[e.conversation?n("div",{attrs:{id:"conversation-box"},on:{click:e.onConversationClick}},[n("conversation-box",{attrs:{message:e.conversation.host,position:"left",speech:"right_speech_bubble",image:e.conversation.hostImage,username:e.username}}),n("conversation-box",{attrs:{message:e.conversation.traveller,position:"right",speech:"left_speech_bubble",image:e.conversation.travellerImage}})],1):e._e(),n("router-link",{staticClass:"button",attrs:{id:"get_detail",to:"/details",tag:"button"}},[e._v("Get Details")]),n("router-link",{staticClass:"button",attrs:{id:"home",to:"/",tag:"button"}},[e._v("Home")])],1)},pe=[],fe={name:"conversation",props:{wonder:Object,username:String},data:function(){return{conversationIndex:0}},computed:{conversation:function(){return this.wonder.conversations[this.conversationIndex]}},methods:{onConversationClick:function(){this.conversationIndex++}},components:{"conversation-box":Q,"simple-button":V}},he=fe,ve=(n("468f"),Object(g["a"])(he,me,pe,!1,null,"26decd3c",null)),ge=ve.exports,be={name:"wonder-page",props:{selectedWonder:Object,username:String},components:{conversation:ge,"world-map":H}},we=be,_e=(n("d75f"),Object(g["a"])(we,le,de,!1,null,"1d3787f2",null)),ye=_e.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"background"},[n("router-link",{staticClass:"home-button",attrs:{to:"/",tag:"button"}},[e._v("Go Home")]),n("div",{staticClass:"container details"},[n("div",{staticClass:"row separation"},[n("div",{staticClass:"col"},[n("h1",{staticClass:"details-head"},[e._v(e._s(e.selectedWonder.details.name))])])]),n("div",{staticClass:"row separation center area"},[n("img",{staticClass:"img-fluid full-cover",attrs:{src:e.selectedWonder.details.image}})]),n("div",{staticClass:"row separation center area"},[n("div",{staticClass:"col-sm-3"},[n("strong",[e._v("Height:")]),e._v(" "+e._s(e.selectedWonder.details.height)+" ")]),n("div",{staticClass:"col-sm-3"},[n("strong",[e._v("Year Built:")]),e._v(" "+e._s(e.selectedWonder.details.yearBuilt)+" ")]),n("div",{staticClass:"col-sm-3"},[n("strong",[e._v("Location:")]),e._v(" "+e._s(e.selectedWonder.details.location)+" ")]),n("div",{staticClass:"col-sm-3"},[n("strong",[e._v("Purpose:")]),e._v(" "+e._s(e.selectedWonder.details.purpose)+" ")])]),n("div",{staticClass:"row separation center area"},[n("p",[e._v(e._s(e.selectedWonder.details.description))]),n("p",[e._v(e._s(e.selectedWonder.details.description2))]),n("p",[e._v(e._s(e.selectedWonder.details.description3))])]),n("div",{staticClass:"row separation center",attrs:{id:"last-image"}},e._l(e.selectedWonder.details.imageGallery,(function(e,t){return n("img",{key:t,staticClass:"gallery-image img-fluid full-cover",attrs:{src:e}})})),0)])],1)},Ce=[],Se={name:"more-detail",props:{selectedWonder:Object}},Oe=Se,je=(n("f789"),Object(g["a"])(Oe,xe,Ce,!1,null,"71b05b11",null)),ke=je.exports,We=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question-area"},[e.showScore?e._e():n("div",{staticClass:"question-box"},[e.showScore?e._e():n("graphic-quiz-question",{attrs:{question:e.currentQuestion.question}}),e.showAnswer?n("div",{staticClass:"answer-area"},e._l(e.currentQuestion.answers,(function(t,r){return n("graphic-quiz-answer",{key:r,attrs:{answer:t},on:{onSelectedImage:e.onSelectedImage}})})),1):e._e(),e.showSolution?n("div",{staticClass:"solution-area"},[n("img",{attrs:{src:e._f("resultImage")(e.solution.result)}}),n("p",[e._v(e._s(e._f("resultMessage")(e.solution.result)))]),n("button",{on:{click:e.onSelectedPlay}},[e._v(e._s(e.solution.button))])]):e._e()],1),e.showScore?n("div",{staticClass:"score-area"},[n("p",[e._v("Nice, you got "+e._s(e.correctQuestions)+" out of "+e._s(e.currentQuestionIndex)+"!")]),n("button",{on:{click:e.onSelectedPlayAgain}},[e._v("Play again")]),n("router-link",{staticClass:"top-left",attrs:{to:"/",tag:"button"}},[e._v("Go Home")])],1):e._e(),e.showScore?e._e():n("router-link",{staticClass:"top-left",attrs:{to:"/",tag:"button"}},[e._v("Go Home")])],1)},qe=[],Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"answer"},[n("img",{staticClass:"rounded",attrs:{src:e.answer.image,alt:""},on:{click:e.onImageClicked}})])},$e=[],Ee={name:"graphic-quiz-answer",props:{answer:Object},methods:{onImageClicked:function(){this.$emit("onSelectedImage",this.answer.correct)}}},Ie=Ee,ze=(n("8a72"),Object(g["a"])(Ie,Pe,$e,!1,null,"9d09f102",null)),Qe=ze.exports,Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question"},[n("h2",[n("router-link",{attrs:{to:{name:"home"}}},[n("img",{attrs:{id:"earth",src:"quiz/earth_spining.gif"}}),e._v(e._s(e.question)+" ")])],1)])},Me=[],Re={name:"graphic-quiz-question",props:{question:String}},Be=Re,De=(n("0309"),Object(g["a"])(Be,Ae,Me,!1,null,"14dee16b",null)),He=De.exports,Te={name:"quiz",props:{questions:Array},data:function(){return{currentQuestionIndex:0,showAnswer:!0,showSolution:!1,showScore:!1,solution:{button:"Next",result:!1},correctQuestions:0}},computed:{currentQuestion:function(){return this.questions[this.currentQuestionIndex]}},methods:{onSelectedImage:function(e){this.solution.result=e,e&&this.correctQuestions++,this.currentQuestionIndex++,this.questions[this.currentQuestionIndex]?(this.showAnswer=!1,this.showSolution=!0):(this.showAnswer=!1,this.showScore=!0)},onSelectedPlay:function(){this.showAnswer=!0,this.showSolution=!1},onSelectedPlayAgain:function(){this.currentQuestionIndex=0,this.showAnswer=!0,this.showSolution=!1,this.showScore=!1}},filters:{resultMessage:function(e){return e?"Nicely done! You are right":"Wrong answer!"},resultImage:function(e){return e?"quiz/clapping.gif":"quiz/crying_bear.gif"}},components:{"graphic-quiz-question":He,"graphic-quiz-answer":Qe,"simple-button":V}},Ge=Te,Ne=(n("e4ed"),Object(g["a"])(Ge,We,qe,!1,null,"6b691bc3",null)),Ye=Ne.exports;r["default"].use(y["a"]);var Le=[{path:"/",name:"home",component:ue},{path:"/wonder",name:"wonder",component:ye},{path:"/details",name:"details",component:ke},{path:"/quiz",name:"quiz",component:Ye}],Fe=new y["a"]({routes:Le}),Je=Fe,Ve=(n("f9e3"),n("2dd8"),n("342d")),Ue=n.n(Ve);r["default"].use(Ue.a),r["default"].use(_["a"]),r["default"].config.productionTip=!1;var Ke=new r["default"];new r["default"]({router:Je,render:function(e){return e(w)}}).$mount("#app")},"5e0a":function(e,t,n){},"64eb":function(e,t,n){},"7bb0":function(e,t,n){"use strict";var r=n("dc27"),s=n.n(r);s.a},"85ec":function(e,t,n){},"8a72":function(e,t,n){"use strict";var r=n("9ca2"),s=n.n(r);s.a},"91c4":function(e,t,n){},"9ca2":function(e,t,n){},a0a8:function(e,t,n){"use strict";var r=n("5e0a"),s=n.n(r);s.a},b37e:function(e,t,n){},c1ee:function(e,t,n){},c47e:function(e,t,n){"use strict";var r=n("b37e"),s=n.n(r);s.a},d23d:function(e,t,n){"use strict";var r=n("91c4"),s=n.n(r);s.a},d75f:function(e,t,n){"use strict";var r=n("c1ee"),s=n.n(r);s.a},dc27:function(e,t,n){},e3e6:function(e,t,n){"use strict";var r=n("e69f"),s=n.n(r);s.a},e4ed:function(e,t,n){"use strict";var r=n("38be"),s=n.n(r);s.a},e652:function(e,t,n){},e69f:function(e,t,n){},f789:function(e,t,n){"use strict";var r=n("4f47"),s=n.n(r);s.a}});
//# sourceMappingURL=app.b8863588.js.map