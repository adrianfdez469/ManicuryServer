(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[9],{348:function(e,t,n){"use strict";var a=n(16);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),c=(0,a(n(17)).default)(r.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=c},349:function(e,t,n){"use strict";var a=n(16);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),c=(0,a(n(17)).default)(r.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=c},350:function(e,t,n){"use strict";var a=n(16);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),c=(0,a(n(17)).default)(r.default.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");t.default=c},439:function(e,t,n){"use strict";var a=n(1),r=n(2),c=n(0),i=n.n(c),l=(n(6),n(3)),o=n(5),s=n(67),u=i.a.forwardRef((function(e,t){var n=e.action,c=e.avatar,o=e.classes,u=e.className,m=e.component,d=void 0===m?"div":m,p=e.disableTypography,g=void 0!==p&&p,f=e.subheader,b=e.subheaderTypographyProps,y=e.title,E=e.titleTypographyProps,h=Object(r.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),v=y;null==v||v.type===s.a||g||(v=i.a.createElement(s.a,Object(a.a)({variant:c?"body2":"h5",className:o.title,component:"span",display:"block"},E),v));var O=f;return null==O||O.type===s.a||g||(O=i.a.createElement(s.a,Object(a.a)({variant:c?"body2":"body1",className:o.subheader,color:"textSecondary",component:"span",display:"block"},b),O)),i.a.createElement(d,Object(a.a)({className:Object(l.a)(o.root,u),ref:t},h),c&&i.a.createElement("div",{className:o.avatar},c),i.a.createElement("div",{className:o.content},v,O),n&&i.a.createElement("div",{className:o.action},n))}));t.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(u)},440:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o}));var a=n(47),r=n(36);function c(){var e=Object(a.a)(["\nquery {\n    clients {\n        success\n        message\n        client{\n            id\n            name\n            phone\n            address\n        }\n    }\n}\n"]);return c=function(){return e},e}function i(){var e=Object(a.a)(["\nmutation($clientId: ID!){\n    removeClient(clientId: $clientId){\n        success\n        message\n    }\n}\n"]);return i=function(){return e},e}function l(){var e=Object(a.a)(["\nmutation ($clientId: ID, $nombre: String!, $telefono: String, $direccion: String) {\n    upsertClient(clientId:$clientId, name: $nombre, phone: $telefono, address: $direccion){            \n        success\n        message\n        client {\n            id\n            name\n            phone\n            address\n        }\n    }\n}\n"]);return l=function(){return e},e}var o=Object(r.b)(l()),s=Object(r.b)(i()),u=Object(r.b)(c())},859:function(e,t,n){"use strict";n.r(t);var a=n(15),r=n(0),c=n.n(r),i=n(216),l=n(117),o=n(224),s=n(232),u=n(248),m=n(95),d=n.n(m),p=n(96),g=n.n(p),f=n(93),b=n(137),y=n(245),E=n(237),h=n(236),v=n(182),O=n(246),j=n(439),$=n(177),k=n(67),I=n(247),w=n(350),S=n.n(w),C=n(349),x=n.n(C),T=n(348),N=n.n(T),_=Object(l.a)((function(e){return{card:{maxWidth:345,height:200,cursor:"pointer","&:hover":{boxShadow:"0px 5px 10px -1px rgba(0,0,0,0.3), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0 ,0,0,0.12)"}},cardHeader:{overflow:"auto"}}})),D=function(e){var t=e.ingress,n=e.remove,r=e.edit,i=_(),l=c.a.useState(null),s=Object(a.a)(l,2),u=s[0],m=s[1],d=!!u,p=function(){m(null)},g=c.a.createElement(b.a,{anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:p},c.a.createElement(y.a,{onClick:function(){p(),r()}},c.a.createElement(E.a,null,c.a.createElement(N.a,{fontSize:"small"})),c.a.createElement(h.a,{primary:"Modificar"})),c.a.createElement(y.a,{onClick:function(){p(),n()}},c.a.createElement(E.a,null,c.a.createElement(x.a,{fontSize:"small"})),c.a.createElement(h.a,{primary:"Eliminar"})));return c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{title:t.workType.category.name+": "+t.workType.name},c.a.createElement(O.a,{className:i.card},c.a.createElement(j.a,{action:c.a.createElement($.a,{"aria-label":"settings",onClick:function(e){m(e.target)}},c.a.createElement(S.a,{style:{color:t.workType.category.color}})),title:"".concat(t.workType.name.length>18?t.workType.name.substring(0,18)+"...":t.workType.name),subheader:c.a.createElement(k.a,{variant:"subtitle2",color:"textSecondary"},Object(f.c)(t.date))}),c.a.createElement(I.a,{className:i.cardContent},c.a.createElement(o.a,{container:!0,spacing:2},c.a.createElement(o.a,{item:!0,xs:6},c.a.createElement(k.a,{variant:"h6",color:"textPrimary",component:"p",style:{position:"static"}},"Ingreso: $".concat(t.ingressAmount))),c.a.createElement(o.a,{item:!0,xs:6},c.a.createElement(k.a,{variant:"h6",color:"textSecondary",component:"p",style:{position:"static"}},"Propina: $".concat(t.tip)))),c.a.createElement(k.a,{variant:"subtitle1",color:"textSecondary",component:"p",style:{position:"static"}},"Cliente: ".concat(t.client?t.client.name:""))))),g)},M=n(217),F=n(222),z=n(223),P=n(227),q=n(256),A=n(251),H=n(230),R=n(231),W=n(99),B=n(28),V=n(250),J=n(440),L=n(98),G=function(){return{useWorkTypeState:Object(r.useState)(null),useClientState:Object(r.useState)(null),useAmmountState:Object(r.useState)(0),useTipState:Object(r.useState)(0),useDateState:Object(r.useState)(new Date)}},K=Object(l.a)((function(e){return{formControl:{minWidth:120,width:"100%",marginTop:e.spacing(1),marginBottom:e.spacing(.5)},selectEmpty:{}}})),U=function(e){var t=e.handleOk,n=e.handleCancel,r=e.open,l=e.edit,s=K(),u=Object(i.c)(L.c).data,m=Object(i.c)(J.b).data,d=G(),p=d.useWorkTypeState,g=d.useClientState,b=d.useAmmountState,E=d.useTipState,h=d.useDateState,v=Object(a.a)(p,2),O=v[0],j=v[1],$=Object(a.a)(g,2),k=$[0],I=$[1],w=Object(a.a)(b,2),S=w[0],C=w[1],x=Object(a.a)(E,2),T=x[0],N=x[1],_=Object(a.a)(h,2),D=_[0],U=_[1];c.a.useEffect((function(){l?(j(l.workType.id),I(l.client&&l.client.id),C(l.ingressAmount),N(l.tip),U(l.date)):(j(null),I(null),C(0),N(0),U(new Date))}),[r,l,j,I,C,N,U]);return c.a.createElement(M.a,{open:r,onClose:n,"aria-labelledby":"form-dialog-title"},c.a.createElement(F.a,{id:"form-dialog-title"},"Adicionar ingreso"),c.a.createElement(z.a,null,c.a.createElement(P.a,{className:s.formControl},c.a.createElement(q.a,{shrink:!0,id:"work-type"},"Tipo de trabajo"),c.a.createElement(A.a,{labelId:"work-type",id:"work-type-placeholder",value:O,onChange:function(e){var t=e.target.value,n=u.worktypes.worktype.find((function(e){return e.id===t}));C(n.price),j(e.target.value)},displayEmpty:!0,className:s.selectEmpty},c.a.createElement(y.a,{value:""},c.a.createElement("em",null,"Ninguno")),u&&u.worktypes&&u.worktypes.worktype.map((function(e){return c.a.createElement(y.a,{value:e.id,key:e.id},c.a.createElement(o.a,{container:!0},c.a.createElement("div",{style:{backgroundColor:e.category.color,margin:"0 1rem",width:"1rem",height:"1rem",borderRadius:"50%"}}),e.name))})))),c.a.createElement(P.a,{className:s.formControl},c.a.createElement(q.a,{shrink:!0,id:"cliente"},"Cliente"),c.a.createElement(A.a,{labelId:"cliente",id:"cliente-placeholder",value:k,onChange:function(e){return I(e.target.value)},displayEmpty:!0,className:s.selectEmpty},c.a.createElement(y.a,{value:""},c.a.createElement("em",null,"Ninguno")),m&&m.clients&&m.clients.client.map((function(e){return c.a.createElement(y.a,{value:e.id,key:e.id},e.name)})))),c.a.createElement(f.a,{handleChange:function(e){return C(+e.target.value)},value:S,label:"Ingreso"}),c.a.createElement(f.a,{handleChange:function(e){return N(+e.target.value)},value:T,label:"Propina"}),c.a.createElement(B.a,{utils:W.a},c.a.createElement(o.a,{container:!0},c.a.createElement(V.a,{disableToolbar:!0,margin:"normal",variant:"dialog",format:"dd/MM/yyyy",label:"Fecha",value:D,onChange:U,KeyboardButtonProps:{"aria-label":"Fecha"}})))),c.a.createElement(H.a,null,c.a.createElement(R.a,{onClick:n,color:"primary"},"Cancelar"),c.a.createElement(R.a,{onClick:function(){return t(l&&l.id,O,k,S,T,D)},color:"primary"},"Guardar")))},Q=n(47),X=n(36);function Y(){var e=Object(Q.a)(["\nquery($worktype: String, $clientname: String, $ingress_gte: Float, $ingress_lte: Float, $ingress_eq: Float,\n        $tip_gte: Float, $tip_lte: Float, $tip_eq: Float, \n        $wtcategoryIds: [ID],$before: Date, $after: Date, $start: Int, $limit: Int\n    ) {\n    ingresses(\n        worktype: $worktype,\n        client: $clientname,\n        ingress: {gte: $ingress_gte, lte:$ingress_lte,eq:$ingress_eq},\n        tip: {gte: $tip_gte, lte:$tip_lte,eq:$tip_eq},\n        dateRange:{ before: $before, after: $after },\n        pagination:{start: $start, limit: $limit},\n        wtcategoryIds: $wtcategoryIds   \n    )\n    {\n      success\n      message\n      ingress {\n        id\n        workType{\n          id \n          name \n          price\n          category {\n            id\n            name\n            color\n          }\n        }\n        client {id name phone address imgUrl}\n        ingressAmount\n        tip\n        date      \n      }\n    }\n  }\n"]);return Y=function(){return e},e}function Z(){var e=Object(Q.a)(["\nmutation($ingressId: ID!) {\n    removeIngress(ingressId: $ingressId){\n      success\n      message\n    }\n  }\n"]);return Z=function(){return e},e}function ee(){var e=Object(Q.a)(["\nmutation ($ingressId: ID, $worktypeId: ID!, $clientId: ID,\n    $ammount: Float!, $tip: Float!, $date: Date\n  ) {\n    upsertIngress(\n      ingressId: $ingressId, \n      worktypeId: $worktypeId, \n      clientId: $clientId,\n      amount: $ammount,\n      tip: $tip,\n      date: $date\n    ){\n      success\n      message\n      ingress{\n        id\n      }\n    }\n  }\n"]);return ee=function(){return e},e}var te=Object(X.b)(ee()),ne=Object(X.b)(Z()),ae=Object(X.b)(Y()),re=Object(l.a)((function(e){return{container:{padding:e.spacing(1)}}})),ce=function(e){return c.a.createElement(o.a,{item:!0,xs:12,sm:6,md:6,lg:4},e.children)},ie=function(e){var t=re(),n=c.a.useState(!1),l=Object(a.a)(n,2),m=l[0],p=l[1],b=c.a.useState(null),y=Object(a.a)(b,2),E=y[0],h=y[1],v=Object(i.c)(ae,{variables:{start:0,limit:20}}),O=v.data,j=v.loading,$=v.refetch,k=v.error,I=Object(i.b)(te),w=Object(a.a)(I,1)[0],S=Object(i.b)(ne),C=Object(a.a)(S,1)[0],x=Object(f.d)(),T=Object(a.a)(x,2),N=T[0],_=T[1],M=Object(f.e)(),F=Object(a.a)(M,2),z=F[0],P=F[1];return Object(r.useEffect)((function(){P(!!j)}),[j,P]),Object(r.useEffect)((function(){k&&_("Ocurrio un error al intentar cargar los datos.","error")}),[k,_]),c.a.createElement(c.a.Fragment,null,z,c.a.createElement(s.a,null),c.a.createElement(u.a,{maxWidth:"md",className:t.container},c.a.createElement(o.a,{container:!0,spacing:2},O&&O.ingresses&&O.ingresses.ingress.map((function(e){return c.a.createElement(ce,{key:e.id},c.a.createElement(D,{ingress:e,remove:function(){return t=e.id,P(!0),void C({variables:{ingressId:t}}).then((function(e){if(!e.data.removeIngress.success)throw new Error;_("El ingreso ha sido eliminado.","success"),P(!1)})).then((function(){$()})).catch((function(e){_("Ocurrio un error eliminando el ingreso.","error"),P(!1)}));var t},edit:function(){p(!0),h(e)}}))}))),c.a.createElement(f.b,{actions:[{icon:c.a.createElement(d.a,null),name:"Adicionar cliente",onClick:function(){return p(!0)}},{icon:c.a.createElement(g.a,null),name:"Buscar cliente",onClick:function(){return alert("TODO: Buscar cliente")}}]})),c.a.createElement(U,{open:m,handleCancel:function(){p(!1),h(null)},handleOk:function(e,t,n,a,r,c){!function(e,t,n,a,r,c){p(!1),P(!0),w({variables:{ingressId:e,worktypeId:t,clientId:n,ammount:a,tip:r,date:c}}).then((function(e){if(!e.data.upsertIngress.success)throw new Error;_("El ingreso ha sido guardado.","success"),P(!1)})).then((function(){$()})).catch((function(e){_("Ha ocurreido un error. No se ha podido salvar el ingreso.","error"),P(!1)}))}(e,t,n,a,r,c),p(!1),h(null)},edit:E}),N)};t.default=ie}}]);
//# sourceMappingURL=9.dab2180c.chunk.js.map