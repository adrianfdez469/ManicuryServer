(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[11],{348:function(e,a,t){"use strict";var r=t(16);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),c=(0,r(t(17)).default)(n.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");a.default=c},349:function(e,a,t){"use strict";var r=t(16);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),c=(0,r(t(17)).default)(n.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");a.default=c},350:function(e,a,t){"use strict";var r=t(16);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),c=(0,r(t(17)).default)(n.default.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");a.default=c},439:function(e,a,t){"use strict";var r=t(1),n=t(2),c=t(0),o=t.n(c),l=(t(6),t(3)),i=t(5),u=t(67),s=o.a.forwardRef((function(e,a){var t=e.action,c=e.avatar,i=e.classes,s=e.className,d=e.component,m=void 0===d?"div":d,p=e.disableTypography,f=void 0!==p&&p,b=e.subheader,h=e.subheaderTypographyProps,g=e.title,E=e.titleTypographyProps,y=Object(n.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),v=g;null==v||v.type===u.a||f||(v=o.a.createElement(u.a,Object(r.a)({variant:c?"body2":"h5",className:i.title,component:"span",display:"block"},E),v));var O=b;return null==O||O.type===u.a||f||(O=o.a.createElement(u.a,Object(r.a)({variant:c?"body2":"body1",className:i.subheader,color:"textSecondary",component:"span",display:"block"},h),O)),o.a.createElement(m,Object(r.a)({className:Object(l.a)(i.root,s),ref:a},y),c&&o.a.createElement("div",{className:i.avatar},c),o.a.createElement("div",{className:i.content},v,O),t&&o.a.createElement("div",{className:i.action},t))}));a.a=Object(i.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(s)},861:function(e,a,t){"use strict";t.r(a);var r=t(15),n=t(0),c=t.n(n),o=t(216),l=t(117),i=t(224),u=t(232),s=t(248),d=t(95),m=t.n(d),p=t(96),f=t.n(p),b=t(93),h=t(137),g=t(245),E=t(237),y=t(236),v=t(182),O=t(246),j=t(439),k=t(257),x=t(177),C=t(350),w=t.n(C),S=t(349),N=t.n(S),T=t(348),M=t.n(T),z=Object(l.a)((function(e){return{card:{maxWidth:345,height:70,cursor:"pointer","&:hover":{boxShadow:"0px 5px 10px -1px rgba(0,0,0,0.3), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0 ,0,0,0.12)"}},cardHeader:{overflow:"auto"}}})),P=function(e){var a=e.worktype,t=e.remove,n=e.edit,o=z(),l=c.a.useState(null),i=Object(r.a)(l,2),u=i[0],s=i[1],d=!!u,m=function(){s(null)},p=c.a.createElement(h.a,{anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:m},c.a.createElement(g.a,{onClick:function(){m(),n()}},c.a.createElement(E.a,null,c.a.createElement(M.a,{fontSize:"small"})),c.a.createElement(y.a,{primary:"Modificar"})),c.a.createElement(g.a,{onClick:function(){m(),t()}},c.a.createElement(E.a,null,c.a.createElement(N.a,{fontSize:"small"})),c.a.createElement(y.a,{primary:"Eliminar"})));return c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{title:a.name},c.a.createElement(O.a,{className:o.card},c.a.createElement(j.a,{avatar:c.a.createElement(k.a,{"aria-label":"recipe",style:{backgroundColor:a.category.color}},a.category.name[0]),action:c.a.createElement(x.a,{"aria-label":"settings",onClick:function(e){s(e.target)}},c.a.createElement(w.a,null)),title:a.name,subheader:"$".concat(a.price)}))),p)},W=t(217),_=t(222),H=t(223),I=t(227),R=t(256),V=t(251),B=t(254),F=t(230),A=t(231),D=function(){return{useCategoryState:Object(n.useState)(null),useNameState:Object(n.useState)(""),usePriceState:Object(n.useState)(0)}},J=t(98),L=Object(l.a)((function(e){return{formControl:{minWidth:120,width:"100%",marginTop:e.spacing(1),marginBottom:e.spacing(.5)},selectEmpty:{}}})),G=function(e){var a=L(),t=e.handleOk,n=e.handleCancel,l=e.open,u=e.edit,s=Object(o.c)(J.b).data,d=D(),m=d.useCategoryState,p=d.useNameState,f=d.usePriceState,h=Object(r.a)(m,2),E=h[0],y=h[1],v=Object(r.a)(p,2),O=v[0],j=v[1],k=Object(r.a)(f,2),x=k[0],C=k[1];return c.a.useEffect((function(){u?(y(u.category.id),j(u.name),C(u.price)):(y(null),j(""),C(0))}),[l,u,j,C,y,s]),c.a.createElement(W.a,{open:l,onClose:n,"aria-labelledby":"form-dialog-title"},c.a.createElement(_.a,{id:"form-dialog-title"},"Adicionar tipo de trabajo"),c.a.createElement(H.a,null,c.a.createElement(I.a,{className:a.formControl},c.a.createElement(R.a,{shrink:!0,id:"categoria"},"Categoria"),c.a.createElement(V.a,{autoFocus:!0,labelId:"categoria",id:"categoria-placeholder",value:E,onChange:function(e){return y(e.target.value)},displayEmpty:!0,className:a.selectEmpty},s&&s.worktypecategory&&s.worktypecategory.worktypecategory.map((function(e){return c.a.createElement(g.a,{value:e.id,key:e.id},c.a.createElement(i.a,{container:!0},c.a.createElement("div",{style:{backgroundColor:e.color,margin:"0 1rem",width:"1rem",height:"1rem",borderRadius:"50%"}}),e.name))})))),c.a.createElement(B.a,{margin:"dense",label:"Nombre",type:"text",fullWidth:!0,value:O,onChange:function(e){return j(e.target.value)}}),c.a.createElement(b.a,{handleChange:function(e){return C(+e.target.value)},value:x,label:"Precio"})),c.a.createElement(F.a,null,c.a.createElement(A.a,{onClick:n,color:"primary"},"Cancelar"),c.a.createElement(A.a,{onClick:function(){return t(u&&u.id,E,O,x)},color:"primary"},"Guardar")))},$=Object(l.a)((function(e){return{container:{padding:e.spacing(1)}}})),q=function(e){return c.a.createElement(i.a,{item:!0,xs:12,sm:6,md:6,lg:4},e.children)},K=function(e){var a=$(),t=c.a.useState(!1),l=Object(r.a)(t,2),d=l[0],p=l[1],h=c.a.useState(null),g=Object(r.a)(h,2),E=g[0],y=g[1],v=Object(o.c)(J.c),O=v.data,j=v.loading,k=v.refetch,x=v.error,C=Object(o.b)(J.a),w=Object(r.a)(C,1)[0],S=Object(o.b)(J.d),N=Object(r.a)(S,1)[0],T=Object(b.d)(),M=Object(r.a)(T,2),z=M[0],W=M[1],_=Object(b.e)(),H=Object(r.a)(_,2),I=H[0],R=H[1];return Object(n.useEffect)((function(){R(!!j)}),[j,R]),Object(n.useEffect)((function(){x&&W("Ocurrio un error al intentar cargar los datos.","error")}),[x,W]),c.a.createElement(c.a.Fragment,null,I,c.a.createElement(u.a,null),c.a.createElement(s.a,{maxWidth:"md",className:a.container},c.a.createElement(i.a,{container:!0,spacing:2},O&&O.worktypes&&O.worktypes.worktype.map((function(e){return c.a.createElement(q,{key:e.id},c.a.createElement(P,{worktype:e,remove:function(){return a=e.id,R(!0),void N({variables:{workTypeId:a}}).then((function(e){if(!e.data.removeWorkType.success)throw new Error;W("El tipo de trabajo ha sido eliminado.","success"),R(!1)})).then((function(){k()})).catch((function(e){W("Ocurrio un error eliminando el tipo de trabajo.","error"),R(!1)}));var a},edit:function(){p(!0),y(e)}}))}))),c.a.createElement(b.b,{actions:[{icon:c.a.createElement(m.a,null),name:"Adicionar cliente",onClick:function(){return p(!0)}},{icon:c.a.createElement(f.a,null),name:"Buscar cliente",onClick:function(){return alert("TODO: Buscar tipo de trabajo")}}]})),c.a.createElement(G,{open:d,handleCancel:function(){p(!1),y(null)},handleOk:function(e,a,t,r){!function(e,a,t,r){p(!1),R(!0),w({variables:{workTypeId:e,wtcategoryId:a,name:t,price:r}}).then((function(e){if(!e.data.upsertWorkType.success)throw new Error;W("El tipo de trabajo ha sido guardado.","success"),R(!1)})).then((function(){k()})).catch((function(e){W("Ha ocurreido un error. No se ha podido guardar el tipo de trabajo.","error"),R(!1)}))}(e,a,t,r),p(!1),y(null)},edit:E}),z)};a.default=K}}]);
//# sourceMappingURL=11.fba47b47.chunk.js.map