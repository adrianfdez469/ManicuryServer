(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[12],{838:function(e,t,n){},857:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(415),r=n(416),o=n(436),i=n(417),s=n(437),c=n(0),d=n.n(c),l=n(834),p=n(836),u=n(837),f=(n(838),function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={showMostWorkedDay:!1,showLessWorkedDay:!1},n.calendarComponentRef=d.a.createRef(),n.render=function(){return d.a.createElement("div",{style:{maxWidth:"90%",margin:"auto"}},d.a.createElement(l.a,{ref:n.calendarComponentRef,defaultView:"dayGridMonth",plugins:[p.a],height:500,header:{right:"prevYear,prev,next,nextYear"},locale:"es",eventLimit:!0,eventPositioned:n.handleEventPositioned,validRange:{start:n.props.start,end:n.props.end},displayEventTime:!1,events:n.props.data.map((function(e){return{id:e.id,title:"".concat(e.workType.name," $").concat(e.ingressAmount),start:e.date,color:e.workType.category.color,category:e.workType.category.name,ingress:e.ingressAmount}}))}),d.a.createElement(u.a,{type:"info",multiline:!0}))},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"handleEventPositioned",value:function(e){var t=e.event;e.el.setAttribute("data-tip","Trabajo: "+t.title+"<br>Ingresos: "+t.extendedProps.ingress+"<br>Categoria: "+t.extendedProps.category),u.a.rebuild()}}]),t}(d.a.PureComponent))}}]);
//# sourceMappingURL=12.c92bcb2b.chunk.js.map