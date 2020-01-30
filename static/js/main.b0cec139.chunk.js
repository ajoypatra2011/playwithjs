(this.webpackJsonpplaywithjs=this.webpackJsonpplaywithjs||[]).push([[0],{203:function(e,t,a){e.exports=a(430)},208:function(e,t,a){},209:function(e,t,a){},430:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(91),c=a.n(l),o=(a(208),a(55)),s=a(56),i=a(60),m=a(57),d=a(59),u=(a(209),a(93)),p=a.n(u),E=a(432),v=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{align:"center"},r.a.createElement(E.a,{bg:"dark",variant:"dark"},r.a.createElement(E.a.Brand,{onClick:function(){return window.location.reload()}},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("div",{style:{width:"15rem"}},r.a.createElement("img",{src:"./logo.svg"})),r.a.createElement("div",{align:"center"},r.a.createElement("div",{style:{fontSize:"2em",fontFamily:"cursive"}},r.a.createElement("span",{style:{color:"#0f90fe"}},"Javascript "),r.a.createElement("span",{style:{color:"#0ffe90"}},"Tricks")))))))}}]),t}(r.a.Component),h=a(433),b=function(e){function t(e){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header"},this.props.data.Problem),r.a.createElement("div",{className:"desc",style:{height:"100%"}},this.props.data.Desc),this.props.data.Solution.map((function(e,t){return r.a.createElement("div",{key:t,style:{margin:"1rem"}},r.a.createElement("div",{style:{fontWeight:"bold"}},r.a.createElement("i",null,e.Header)),r.a.createElement("code",{style:{marginLeft:"1rem"}},e.code))})),r.a.createElement("div",{style:{margin:"1rem"}},r.a.createElement("span",{style:{fontWeight:"bold"}},r.a.createElement("i",null,"Input: \xa0")),r.a.createElement("span",null,r.a.createElement("code",null,this.props.data.Input))),r.a.createElement("div",{style:{margin:"1rem"}},r.a.createElement("span",{style:{fontWeight:"bold"}},r.a.createElement("i",null,"Output: \xa0")),r.a.createElement("span",null,r.a.createElement("code",null,this.props.data.Output))),r.a.createElement("br",null),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(h.a,{variant:"outline-dark",onClick:this.props.reset},"Back")),r.a.createElement("br",null))}}]),t}(r.a.Component),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).displayInnerComponent=function(e){a.setState({IsRenderInnerComponent:!0,InnerComponentData:e})},a.resetInnerComponent=function(){a.setState({IsRenderInnerComponent:!1,InnerComponentData:null})},a.state={ESProblem:[],AngularProblem:[],ReactProblem:[],IsRenderInnerComponent:!1,InnerComponentData:null},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=this;p.a.get("ESProblem.json").then((function(t){e.setState({ESProblem:t.data.ESProblem})})),p.a.get("AngularProblem.json").then((function(t){e.setState({AngularProblem:t.data.AngularProblem})})),p.a.get("ReactProblem.json").then((function(t){e.setState({ReactProblem:t.data.ReactProblem})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(v,null),this.state.IsRenderInnerComponent?r.a.createElement(b,{data:this.state.InnerComponentData,reset:this.resetInnerComponent}):r.a.createElement("div",null,r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"header"},"Javascript - ES 5/6"),this.state.ESProblem.map((function(t,a){return r.a.createElement("div",{key:a,className:"card-item"},r.a.createElement("div",{className:"problem"},t.Problem),r.a.createElement("div",{className:"desc"},t.Desc),r.a.createElement("div",{className:"read-more",onClick:function(){return e.displayInnerComponent(t)}},"Read More"))}))),r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"header"},"Angular - 5/6"),this.state.AngularProblem.map((function(t,a){return r.a.createElement("div",{key:a,className:"card-item"},r.a.createElement("div",{className:"problem"},t.Problem),r.a.createElement("div",{className:"desc"},t.Desc),r.a.createElement("div",{className:"read-more",onClick:function(){return e.displayInnerComponent(t)}},"Read More"))}))),r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"header"},"React.js"),this.state.ReactProblem.map((function(t,a){return r.a.createElement("div",{key:a,className:"card-item"},r.a.createElement("div",{className:"problem"},t.Problem),r.a.createElement("div",{className:"desc"},t.Desc),r.a.createElement("div",{className:"read-more",onClick:function(){return e.displayInnerComponent(t)}},"Read More"))}))))))}}]),t}(r.a.Component);a(230),a(231),a(240),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[203,1,2]]]);
//# sourceMappingURL=main.b0cec139.chunk.js.map