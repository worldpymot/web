(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(41)},24:function(e,a,t){},38:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},39:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),s=t(16),c=t.n(s),o=(t(24),t(3)),i=t(4),l=t(6),u=t(5),m=t(7),b=function(e){function a(){return Object(o.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{className:"navbar-item",href:"http://bulma.io"},this.props.title)))}}]),a}(n.Component),d=function(e){function a(){return Object(o.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.message)}}]),a}(n.Component),p=t(12),h=t.n(p),v=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(l.a)(this,Object(u.a)(a).call(this,e))).state={messages:[]},t.props.db.database().ref("messages").on("value",function(e){t.getData(e.val())}),t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"getData",value:function(e){var a=e,t=h()(a).keys().map(function(e){var t=h.a.clone(a[e]);return t.key=e,t}).value();this.setState({messages:t})}},{key:"render",value:function(){var e=this.state.messages.map(function(e){return r.a.createElement(d,{key:e.message,message:e.message})});return r.a.createElement("div",null,e)}}]),a}(n.Component),g=t(8),f=t(13),j=t.n(f),O=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(l.a)(this,Object(u.a)(a).call(this,e))).onChange=t.onChange.bind(Object(g.a)(Object(g.a)(t))),t.onKeyup=t.onKeyup.bind(Object(g.a)(Object(g.a)(t))),t.state={message:""},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"onChange",value:function(e){this.setState({message:e.target.value})}},{key:"onKeyup",value:function(e){13===e.keyCode&&""!==j()(e.target.value)&&(e.preventDefault(),this.props.db.database().ref("/messages").push({message:j()(e.target.value)}),this.setState({message:""}))}},{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"comment"},"Message:"),r.a.createElement("textarea",{className:"form-control",rows:"5",placeholder:"Type a message",onChange:this.onChange,onKeyUp:this.onKeyup,value:this.state.message})))}}]),a}(n.Component),y=t(11),k=t.n(y),E=(t(38),t(39),function(e){function a(e){var t;Object(o.a)(this,a),t=Object(l.a)(this,Object(u.a)(a).call(this,e));return k.a.initializeApp({apiKey:"AIzaSyAhmXZ5kXMS4Y4jKdarwJrvvWXeoBHOZLQ",authDomain:"webapi-dcb33.firebaseapp.com",databaseURL:"https://webapi-dcb33.firebaseio.com",projectId:"webapi-dcb33",storageBucket:"",messagingSenderId:"880166406164"}),t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col",style:{backgroundColor:"lavender"}},r.a.createElement(b,{title:"Data App"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col",style:{backgroundColor:"yellow"}},r.a.createElement(v,{db:k.a})),r.a.createElement("div",{className:"col",style:{backgroundColor:"orange"}},r.a.createElement(O,{db:k.a}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.325fdf8e.chunk.js.map