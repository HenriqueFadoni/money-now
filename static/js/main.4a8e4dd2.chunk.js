(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(62)},6:function(e,t,n){e.exports=n.p+"static/media/New-jumbo.3d3d387b.mp4"},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(23),o=n.n(c),u=n(24),s=n(25),l=n(30),i=n(26),m=n(29),p=n(3),f=n(2),E=n(8),d=n.n(E),h=n(14),b=n(15),y=n.n(b),g=function(e){return{type:"UPDATE_SUCCESS",currencyExchange:e}},v=function(){return a.a.createElement("h1",{className:"h1-white"},"money ",a.a.createElement("span",{className:"text-green"},"now"))},_=n(6),w=n.n(_),T=function(){return a.a.createElement("div",{className:"bg-video"},a.a.createElement("video",{className:"bg-video__content",autoPlay:!0,muted:!0,loop:!0},a.a.createElement("source",{src:w.a,type:"video/mp4"}),a.a.createElement("source",{src:w.a,type:"video/ogv"}),a.a.createElement("source",{src:w.a,type:"video/webm"}),"Your browser is not supported!"))},A=function(e){return a.a.createElement("select",{id:"base-currency-selector",className:"form__selector",onChange:function(t){return e.selectHandler(t)},required:!0},a.a.createElement("option",{value:"EUR-D",hidden:!0},"Default Value(EURO)"),e.rates)},x=function(e){return a.a.createElement("select",{id:"to-currency-selector",className:"form__selector",onChange:function(t){return e.selectHandler(t)},required:!0},a.a.createElement("option",{value:"Default"},"Select a Currency"),e.rates)},S=function(e){return a.a.createElement(a.a.Fragment,null,e.show?a.a.createElement("button",{type:"submit",className:"btn form__button"},a.a.createElement("span",{className:"form__button-visible"},"Find Currency"),a.a.createElement("span",{className:"form__button-invisible"},"Find it Now")):a.a.createElement("button",{className:"btn form__button",disabled:!0},"Select a Currency"))},C=Object(p.b)(function(e){return{currencyExchange:e.findRate}})(function(e){return a.a.createElement("h2",{className:"h2-white form__result"},e.currencyExchange.baseValue)}),D=Object(p.b)(function(e){return{currencyExchange:e.findRate}})(function(e){return a.a.createElement("h2",{className:"h2-green form__result"},e.currencyExchange.currencyValue)}),R=function(e){var t=a.a.createElement(a.a.Fragment,null,a.a.createElement(C,null),a.a.createElement(D,null));return a.a.createElement("form",{onSubmit:function(t){return e.findRate(t)}},e.showInputs?t:null,a.a.createElement(S,{show:e.showBtn}))},j=(n(61),function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(a)))).state={showInput:!1},n.selectBaseHandler=function(e){n.props.onUpdate(e.target.value,n.props.baseExchange)},n.selectToHandler=function(e){n.props.onFindRateSelect(e.target.value)},n.findRate=function(e){e.preventDefault(),e.currentTarget.reset(),n.props.onFindRateCalc(n.props.baseExchange.rates[n.props.currencyExchange.toCurrency]),n.setState({showInput:!0})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onGetData()}},{key:"render",value:function(){var e=this.props.baseExchange.rates,t=[],n=!1;for(var r in e)t.push(a.a.createElement("option",{value:"".concat(r),key:"".concat(r)},r));return this.props.currencyExchange.toCurrency&&(n=!0),a.a.createElement(a.a.Fragment,null,a.a.createElement(T,null),a.a.createElement("div",{className:"home"},a.a.createElement(v,null),a.a.createElement("section",{className:"form"},a.a.createElement(A,{rates:t,selectHandler:this.selectBaseHandler}),a.a.createElement(x,{rates:t,selectHandler:this.selectToHandler}),a.a.createElement("div",{className:"form__display"},a.a.createElement(R,{findRate:this.findRate,showInputs:this.state.showInput,showBtn:n})))))}}]),t}(r.Component)),O=Object(p.b)(function(e){return{baseExchange:e.getData,currencyExchange:e.findRate,error:e.getData.error}},function(e){return{onGetData:function(){return e(function(){var e=Object(h.a)(d.a.mark(function e(t){var n,r,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_DATA_START"}),e.prev=1,e.next=4,y.a.get("https://api.exchangeratesapi.io/latest");case 4:n=e.sent,r=n.data,a={base:"EUR",date:"",rates:r.rates},t({type:"GET_DATA_SUCCESS",currencyExchange:a}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),t({type:"GET_DATA_FAIL",error:"Something Went Wrong. Try again later"});case 14:case 15:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}())},onUpdate:function(t,n){return e(function(e,t){return function(){var n=Object(h.a)(d.a.mark(function n(r){var a,c,o;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.a.get("https://api.exchangeratesapi.io/latest?base=".concat(e));case 3:a=n.sent,c=a.data,o=Object(f.a)({},t,{base:c.base,date:c.date,rates:c.rates}),r(g(o)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),r({type:"UPDATE_FAIL",error:"Something Went Wrong"});case 13:case 14:case"end":return n.stop()}},n,null,[[0,9]])}));return function(e){return n.apply(this,arguments)}}()}(t,n))},onFindRateSelect:function(t){return e(function(e){return{type:"FIND_RATE_SELECT",toCurrency:e}}(t))},onFindRateCalc:function(t){return e((n=t,function(e){e(function(e){return{type:"FIND_RATE_RESULT",baseValue:1,currencyValue:e}}(Math.round(100*n)/100))}));var n}}})(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=n(4),F=n(28),U={base:"",date:"",rates:{}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DATA_START":return function(e){return Object(f.a)({},e)}(e);case"GET_DATA_SUCCESS":return function(e,t){return Object(f.a)({},e,t.currencyExchange)}(e,t);case"GET_DATA_FAIL":return function(e,t){return Object(f.a)({},e,{error:t.error})}(e,t);case"UPDATE_SUCCESS":return function(e,t){return Object(f.a)({},e,t.currencyExchange)}(e,t);case"UPDATE_FAIL":return function(e,t){return Object(f.a)({},e,{error:t.error})}(e,t);default:return e}},k={toCurrency:null,baseValue:0,currencyValue:0},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FIND_RATE_SELECT":return function(e,t){return Object(f.a)({},e,{toCurrency:t.toCurrency})}(e,t);case"FIND_RATE_RESULT":return function(e,t){return Object(f.a)({},e,{baseValue:t.baseValue,currencyValue:t.currencyValue})}(e,t);default:return e}},G=Object(N.c)({getData:I,findRate:V}),H=N.d,L=Object(N.e)(G,H(Object(N.a)(F.a))),B=a.a.createElement(p.a,{store:L},a.a.createElement(O,null));o.a.render(B,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.4a8e4dd2.chunk.js.map