(this["webpackJsonpsierra-macdonald-project-5"]=this["webpackJsonpsierra-macdonald-project-5"]||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},22:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),s=a.n(r),i=a(2),c=a(3),o=a(5),m=a(4),u=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleClick=function(){!1===e.state.checked?e.setState({checked:!0}):e.setState({checked:!1})},e.state={checked:!1},e}return Object(c.a)(a,[{key:"render",value:function(){var e;return e=this.state.checked?"fa fa-check-square-o":"fa fa-square-o",l.a.createElement("li",{onClick:this.handleClick},l.a.createElement("span",{className:e}),l.a.createElement("input",{type:"checkbox",id:this.props.id,checked:this.state.checked,className:"visuallyHidden"}),l.a.createElement("label",{for:this.props.id},this.props.listItemText))}}]),a}(n.Component),d=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({userInput:t.target.value})},e.handleClick=function(t){(t.preventDefault(),""===e.state.userInput)?alert("Please type something! We know there are plenty of tasks you have been avoiding \ud83d\udc40"):(e.state.list.push(e.state.userInput),e.setState({userInput:""}))},e.removeListItems=function(t){e.setState({list:[]})},e.state={list:[],userInput:""},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"toDoList ".concat(this.props.className)},l.a.createElement("h2",null,this.props.listHeader),l.a.createElement("form",{onSubmit:this.addItem},l.a.createElement("label",{for:this.props.inputId,className:"visuallyhidden"}),l.a.createElement("input",{id:this.props.inputId,type:"text",placeholder:this.props.placeHolder,"aria-label":this.props.placeHolder,value:this.state.userInput,onChange:this.handleChange,required:!0}),l.a.createElement("button",{className:"mainButton",onClick:this.handleClick},"Add Task!")),l.a.createElement("ul",null,this.state.list.map((function(e,t){return l.a.createElement(u,{id:t,key:t,listItemText:e})}))),l.a.createElement("div",null,l.a.createElement("button",{className:"clear",onClick:this.removeListItems},"clear list")))}}]),a}(n.Component),h=(a(22),a(16)),p=a.n(h),E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).getGiphyImage=function(){p()({method:"GET",url:"https://api.giphy.com/v1/gifs/random?api_key=KMdcSvJCsU4GSHGjdYnTVOfeQkyqAIJ9&tag=motivational&rating=pg",dataResponse:"json"}).then((function(t){console.log(t),e.setState({imageUrl:t.data.data.image_url,title:t.data.data.title})}))},e.state={giphy:[]},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",null,"Hashtag Adulting"),l.a.createElement("p",null,'Use this app to record all your tedius adult tasks. Click the "I need motivation" to get some motivation!'),l.a.createElement("p",null,l.a.createElement("span",{className:"remember"},"Remember: "),"The best time to do something you don't want to do is yesterday."))),l.a.createElement("main",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"topSection"},l.a.createElement(d,{className:"contactToDoList",listHeader:"People I need to contact, reluctantly:",placeHolder:"Type in someone",inputId:"contact"}),l.a.createElement("div",{className:"checkList"},l.a.createElement("h2",null,"Daily CheckList:"),l.a.createElement("ul",null,l.a.createElement(u,{listItemText:"Showered"}),l.a.createElement(u,{listItemText:"Took vitamins (gummies count)"}),l.a.createElement(u,{listItemText:"Ate a vegetable"}),l.a.createElement(u,{listItemText:"Didn't set anything on fire"}),l.a.createElement(u,{listItemText:"Didn't eat cereal for dinner"})))),l.a.createElement(d,{className:"errandToDoList",listHeader:"Errands I cannot ignore anymore:",placeHolder:"Type in an errand",inputId:"errand"}),l.a.createElement("section",{className:"motivation"},l.a.createElement("button",{onClick:this.getGiphyImage,className:"mainButton"},"I need some motivation!"),l.a.createElement("div",{className:"motivationImage"},l.a.createElement("img",{src:this.state.imageUrl,alt:this.state.title}))))),l.a.createElement("footer",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("p",null,"Copyright\xa9 Sierra MacDonald | Created at Juno College "))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.c907a2cc.chunk.js.map