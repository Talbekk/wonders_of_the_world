(function(e){function t(t){for(var s,a,i=t[0],c=t[1],u=t[2],d=0,m=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(s=!1)}s&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},o={app:0},r=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0210":function(e,t,n){},"0309":function(e,t,n){"use strict";var s=n("e652"),o=n.n(s);o.a},"034f":function(e,t,n){"use strict";var s=n("85ec"),o=n.n(s);o.a},"21d1":function(e,t,n){"use strict";var s=n("0210"),o=n.n(s);o.a},"38be":function(e,t,n){},"468f":function(e,t,n){"use strict";var s=n("64eb"),o=n.n(s);o.a},"4f47":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"eventBus",(function(){return Ye}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{wonders:e.wonders,selectedWonder:e.selectedWonder,username:e.username,questions:e.questions}})],1)},r=[],a=(n("d3b7"),"/api/wonders/"),i="/api/quiz/",c={getWonders:function(){return fetch(a).then((function(e){return e.text()})).then((function(e){return console.log("wonders",e)}))},getQuiz:function(){return fetch(i).then((function(e){return e.text()})).then((function(e){return console.log("quiz",e)}))}},u={name:"app",data:function(){return{username:null,selectedWonder:null,wonders:[],questions:[],homepage:!1,quiz:!1,details:!1,map:!1}},mounted:function(){var e=this;Ye.$on("username",(function(t){return e.username=t})),Ye.$on("selected-wonder",(function(t){e.selectedWonder=t,e.$router.push({name:"wonder"})})),c.getWonders().then((function(t){e.wonders=t,console.log("result",t)})),c.getQuiz().then((function(t){return e.questions=t}))}},l=u,d=(n("034f"),n("2877")),m=Object(d["a"])(l,o,r,!1,null,null,null),f=m.exports,p=n("5f5b"),h=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("world-map",{attrs:{wonders:e.wonders}}),e.username?e._e():n("user-form",{staticClass:"left-form"}),e.username?n("wonder-selection-form",{staticClass:"right-form",attrs:{wonders:e.wonders}}):e._e(),e.username?n("div",{staticClass:"quiz"},[n("router-link",{staticClass:"router-link",attrs:{to:"/quiz"}},[e._v("Test Your knowledge")])],1):e._e(),e.username?n("conversation-box",{attrs:{message:e.hostMessage,position:"left",speech:"right_speech_bubble",image:"conversation/host.png",username:e.username,id:"homepage-box"}}):e._e()],1)},g=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-form centered"},[n("p",[e._v("What is your name?")]),n("form",{staticClass:"user-name",on:{submit:function(t){return t.preventDefault(),e.userFormSubmit(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{id:"username",type:"text",name:"username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("input",{attrs:{id:"submit",type:"submit",name:"",value:"Submit"}})])])},_=[],b={name:"user-form",data:function(){return{username:""}},methods:{userFormSubmit:function(){Ye.$emit("username",this.username)}}},C=b,x=(n("a0a8"),Object(d["a"])(C,w,_,!1,null,"5a3771c1",null)),S=x.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.position},[n("p",{class:e.speech},[e._v(e._s(e.msg))]),n("img",{attrs:{src:e.image}})])},q=[],W=(n("5319"),{name:"conversation-box",props:{message:String,position:String,speech:String,image:String,username:String},computed:{msg:function(){return this.message.replace("$USERNAME",this.username)}}}),k=W,O=(n("e3e6"),Object(d["a"])(k,y,q,!1,null,"d40622e4",null)),j=O.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"earth_div"}})},z=[],I=(n("99af"),n("d81d"),n("b0c0"),n("159b"),{name:"world-map",head:{script:[{src:"https://www.webglearth.com/v2/api.js"}]},created:function(){this.$on("okHead",(function(){setTimeout(this.map,500)}))},props:{wonders:Array},methods:{map:function(){var e=this,t={sky:!0},n=new WE.map("earth_div",t);WE.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(n),this.wonders.forEach((function(t){var s=WE.marker([t.details.latitude,t.details.longitude]).addTo(n);s.bindPopup('<img src="'.concat(t.details.image,'" class="img-fluid"/>\n          <p class="popup-information-text"><strong>Name:</strong> ').concat(t.details.name,'</p>\n          <p class="popup-information-text"><strong>Location:</strong> ').concat(t.details.location,'</p>\n          <p class="popup-information-text"><strong>Year Built:</strong> ').concat(t.details.yearBuilt,"<p>"),{maxWidth:300,maxHeight:300,closeButton:!0}).closePopup(),n.setView([50,0],2),1===e.wonders.length&&(n.setView([t.details.latitude+10,t.details.longitude],2.5),s.openPopup())}))}}}),E=I,P=(n("21d1"),Object(d["a"])(E,$,z,!1,null,null,null)),Q=P.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(" Select your wonder")]),n("router-link",{attrs:{to:"/wonder"}},[n("simple-button",{attrs:{message:"Get random wonder",eventChannel:"select-random-wonder"}})],1),n("simple-select",{attrs:{eventChannel:"select-wonder",data:e.wonders}})],1)},M=[],B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{on:{click:e.onButtonClick}},[e._v(e._s(e.message))])},H=[],T={name:"simple-button",props:{message:String,eventChannel:String},methods:{onButtonClick:function(){Ye.$emit(this.eventChannel)}}},G=T,N=(n("7bb0"),Object(d["a"])(G,B,H,!1,null,"0e96f430",null)),R=N.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{attrs:{for:"data-selection"}},[e._v(e._s(e.message))]),n("select",{attrs:{id:"data-selection",required:""},on:{change:e.onDataSelection}},[n("option",{attrs:{value:"0",disabled:"",selected:""}},[e._v("Choose")]),e._l(e.data,(function(t,s){return n("option",{key:s,domProps:{value:s}},[e._v(e._s(t.details.name))])}))],2)])},Y=[],L={name:"simple-select",props:{message:String,eventChannel:String,data:Array},methods:{onDataSelection:function(e){Ye.$emit(this.eventChannel,e.target.value)}}},F=L,J=(n("d23d"),Object(d["a"])(F,D,Y,!1,null,"ff5f2eca",null)),V=J.exports,U={name:"wonder-selection-form",props:{wonders:Array},mounted:function(){var e=this;Ye.$on("select-random-wonder",(function(){return e.selectRandomWonder()})),Ye.$on("select-wonder",(function(t){return e.getWonder(t)}))},methods:{selectRandomWonder:function(){this.getWonder(this.getRandomInt(0,this.wonders.length))},getWonder:function(e){this.emitSelectedWonder(this.wonders[e])},emitSelectedWonder:function(e){Ye.$emit("selected-wonder",e)},getRandomInt:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}},components:{"simple-button":R,"simple-select":V}},K=U,X=Object(d["a"])(K,A,M,!1,null,"6837fcf3",null),Z=X.exports,ee={name:"home",props:{wonders:Array,username:String},computed:{hostMessage:function(){return"Hello ".concat(this.username,"! Welcome to the 7 Wonders of the World, where would you like to go?")}},methods:{onPlayQuizClick:function(){this.enableSection("quiz")}},components:{"world-map":Q,"wonder-selection-form":Z,"conversation-box":j,"user-form":S}},te=ee,ne=(n("c47e"),Object(d["a"])(te,v,g,!1,null,"2b751b7d",null)),se=ne.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main-container"}},[n("div",[n("world-map",{attrs:{wonders:[e.selectedWonder]}})],1),n("div",{attrs:{id:"overlay"}},[n("conversation",{attrs:{wonder:e.selectedWonder,username:e.username}})],1)])},re=[],ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"conversation"}},[e.conversation?n("div",{attrs:{id:"conversation-box"},on:{click:e.onConversationClick}},[n("conversation-box",{attrs:{message:e.conversation.host,position:"left",speech:"right_speech_bubble",image:e.conversation.hostImage,username:e.username}}),n("conversation-box",{attrs:{message:e.conversation.traveller,position:"right",speech:"left_speech_bubble",image:e.conversation.travellerImage}})],1):e._e(),n("router-link",{staticClass:"button",attrs:{id:"get_detail",to:"/details",tag:"button"}},[e._v("Get Details")]),n("router-link",{staticClass:"button",attrs:{id:"home",to:"/",tag:"button"}},[e._v("Home")])],1)},ie=[],ce={name:"conversation",props:{wonder:Object,username:String},data:function(){return{conversationIndex:0}},computed:{conversation:function(){return this.wonder.conversations[this.conversationIndex]}},methods:{onConversationClick:function(){this.conversationIndex++}},components:{"conversation-box":j,"simple-button":R}},ue=ce,le=(n("468f"),Object(d["a"])(ue,ae,ie,!1,null,"26decd3c",null)),de=le.exports,me={name:"wonder-page",props:{selectedWonder:Object,username:String},components:{conversation:de,"world-map":Q}},fe=me,pe=(n("d75f"),Object(d["a"])(fe,oe,re,!1,null,"1d3787f2",null)),he=pe.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"background"},[n("router-link",{staticClass:"home-button",attrs:{to:"/",tag:"button"}},[e._v("Go Home")]),n("div",{staticClass:"container details"},[n("div",{staticClass:"row separation"},[n("div",{staticClass:"col"},[n("h1",{staticClass:"details-head"},[e._v(e._s(e.selectedWonder.details.name))])])]),n("div",{staticClass:"row separation center area"},[n("img",{staticClass:"img-fluid full-cover",attrs:{src:e.selectedWonder.details.image}})]),n("div",{staticClass:"row separation center area"},[n("div",{staticClass:"col-sm-3"},[n("strong",[e._v("Height:")]),e._v(" "+e._s(e.selectedWonder.details.height)+" ")]),n("div",{staticClass:"col-sm-3"},[n("strong",[e._v("Year Built:")]),e._v(" "+e._s(e.selectedWonder.details.yearBuilt)+" ")]),n("div",{staticClass:"col-sm-3"},[n("strong",[e._v("Location:")]),e._v(" "+e._s(e.selectedWonder.details.location)+" ")]),n("div",{staticClass:"col-sm-3"},[n("strong",[e._v("Purpose:")]),e._v(" "+e._s(e.selectedWonder.details.purpose)+" ")])]),n("div",{staticClass:"row separation center area"},[n("p",[e._v(e._s(e.selectedWonder.details.description))]),n("p",[e._v(e._s(e.selectedWonder.details.description2))]),n("p",[e._v(e._s(e.selectedWonder.details.description3))])]),n("div",{staticClass:"row separation center",attrs:{id:"last-image"}},e._l(e.selectedWonder.details.imageGallery,(function(e,t){return n("img",{key:t,staticClass:"gallery-image img-fluid full-cover",attrs:{src:e}})})),0)])],1)},ge=[],we={name:"more-detail",props:{selectedWonder:Object}},_e=we,be=(n("f789"),Object(d["a"])(_e,ve,ge,!1,null,"71b05b11",null)),Ce=be.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question-area"},[e.showScore?e._e():n("div",{staticClass:"question-box"},[e.showScore?e._e():n("graphic-quiz-question",{attrs:{question:e.currentQuestion.question}}),e.showAnswer?n("div",{staticClass:"answer-area"},e._l(e.currentQuestion.answers,(function(t,s){return n("graphic-quiz-answer",{key:s,attrs:{answer:t},on:{onSelectedImage:e.onSelectedImage}})})),1):e._e(),e.showSolution?n("div",{staticClass:"solution-area"},[n("img",{attrs:{src:e._f("resultImage")(e.solution.result)}}),n("p",[e._v(e._s(e._f("resultMessage")(e.solution.result)))]),n("button",{on:{click:e.onSelectedPlay}},[e._v(e._s(e.solution.button))])]):e._e()],1),e.showScore?n("div",{staticClass:"score-area"},[n("p",[e._v("Nice, you got "+e._s(e.correctQuestions)+" out of "+e._s(e.currentQuestionIndex)+"!")]),n("button",{on:{click:e.onSelectedPlayAgain}},[e._v("Play again")]),n("router-link",{staticClass:"top-left",attrs:{to:"/",tag:"button"}},[e._v("Go Home")])],1):e._e(),e.showScore?e._e():n("router-link",{staticClass:"top-left",attrs:{to:"/",tag:"button"}},[e._v("Go Home")])],1)},Se=[],ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"answer"},[n("img",{staticClass:"rounded",attrs:{src:e.answer.image,alt:""},on:{click:e.onImageClicked}})])},qe=[],We={name:"graphic-quiz-answer",props:{answer:Object},methods:{onImageClicked:function(){this.$emit("onSelectedImage",this.answer.correct)}}},ke=We,Oe=(n("8a72"),Object(d["a"])(ke,ye,qe,!1,null,"9d09f102",null)),je=Oe.exports,$e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question"},[n("h2",[n("router-link",{attrs:{to:{name:"home"}}},[n("img",{attrs:{id:"earth",src:"quiz/earth_spining.gif"}}),e._v(e._s(e.question)+" ")])],1)])},ze=[],Ie={name:"graphic-quiz-question",props:{question:String}},Ee=Ie,Pe=(n("0309"),Object(d["a"])(Ee,$e,ze,!1,null,"14dee16b",null)),Qe=Pe.exports,Ae={name:"quiz",props:{questions:Array},data:function(){return{currentQuestionIndex:0,showAnswer:!0,showSolution:!1,showScore:!1,solution:{button:"Next",result:!1},correctQuestions:0}},computed:{currentQuestion:function(){return this.questions[this.currentQuestionIndex]}},methods:{onSelectedImage:function(e){this.solution.result=e,e&&this.correctQuestions++,this.currentQuestionIndex++,this.questions[this.currentQuestionIndex]?(this.showAnswer=!1,this.showSolution=!0):(this.showAnswer=!1,this.showScore=!0)},onSelectedPlay:function(){this.showAnswer=!0,this.showSolution=!1},onSelectedPlayAgain:function(){this.currentQuestionIndex=0,this.showAnswer=!0,this.showSolution=!1,this.showScore=!1}},filters:{resultMessage:function(e){return e?"Nicely done! You are right":"Wrong answer!"},resultImage:function(e){return e?"quiz/clapping.gif":"quiz/crying_bear.gif"}},components:{"graphic-quiz-question":Qe,"graphic-quiz-answer":je,"simple-button":R}},Me=Ae,Be=(n("e4ed"),Object(d["a"])(Me,xe,Se,!1,null,"6b691bc3",null)),He=Be.exports;s["default"].use(h["a"]);var Te=[{path:"/",name:"home",component:se},{path:"/wonder",name:"wonder",component:he},{path:"/details",name:"details",component:Ce},{path:"/quiz",name:"quiz",component:He}],Ge=new h["a"]({routes:Te}),Ne=Ge,Re=(n("f9e3"),n("2dd8"),n("342d")),De=n.n(Re);s["default"].use(De.a),s["default"].use(p["a"]),s["default"].config.productionTip=!1;var Ye=new s["default"];new s["default"]({router:Ne,render:function(e){return e(f)}}).$mount("#app")},"5e0a":function(e,t,n){},"64eb":function(e,t,n){},"7bb0":function(e,t,n){"use strict";var s=n("dc27"),o=n.n(s);o.a},"85ec":function(e,t,n){},"8a72":function(e,t,n){"use strict";var s=n("9ca2"),o=n.n(s);o.a},"91c4":function(e,t,n){},"9ca2":function(e,t,n){},a0a8:function(e,t,n){"use strict";var s=n("5e0a"),o=n.n(s);o.a},b37e:function(e,t,n){},c1ee:function(e,t,n){},c47e:function(e,t,n){"use strict";var s=n("b37e"),o=n.n(s);o.a},d23d:function(e,t,n){"use strict";var s=n("91c4"),o=n.n(s);o.a},d75f:function(e,t,n){"use strict";var s=n("c1ee"),o=n.n(s);o.a},dc27:function(e,t,n){},e3e6:function(e,t,n){"use strict";var s=n("e69f"),o=n.n(s);o.a},e4ed:function(e,t,n){"use strict";var s=n("38be"),o=n.n(s);o.a},e652:function(e,t,n){},e69f:function(e,t,n){},f789:function(e,t,n){"use strict";var s=n("4f47"),o=n.n(s);o.a}});
//# sourceMappingURL=app.8062aa1f.js.map