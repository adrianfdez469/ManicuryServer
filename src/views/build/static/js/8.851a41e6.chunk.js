(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[8],{348:function(e,t,a){"use strict";var n=a(16);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(17)).default)(r.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=c},349:function(e,t,a){"use strict";var n=a(16);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(17)).default)(r.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=c},350:function(e,t,a){"use strict";var n=a(16);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(17)).default)(r.default.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");t.default=c},439:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(0),l=a.n(c),i=(a(6),a(3)),o=a(5),u=a(67),s=l.a.forwardRef((function(e,t){var a=e.action,c=e.avatar,o=e.classes,s=e.className,d=e.component,m=void 0===d?"div":d,f=e.disableTypography,p=void 0!==f&&f,b=e.subheader,h=e.subheaderTypographyProps,v=e.title,E=e.titleTypographyProps,g=Object(r.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),O=v;null==O||O.type===u.a||p||(O=l.a.createElement(u.a,Object(n.a)({variant:c?"body2":"h5",className:o.title,component:"span",display:"block"},E),O));var j=b;return null==j||j.type===u.a||p||(j=l.a.createElement(u.a,Object(n.a)({variant:c?"body2":"body1",className:o.subheader,color:"textSecondary",component:"span",display:"block"},h),j)),l.a.createElement(m,Object(n.a)({className:Object(i.a)(o.root,s),ref:t},g),c&&l.a.createElement("div",{className:o.avatar},c),l.a.createElement("div",{className:o.content},O,j),a&&l.a.createElement("div",{className:o.action},a))}));t.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(s)},440:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return o}));var n=a(47),r=a(36);function c(){var e=Object(n.a)(["\nquery {\n    clients {\n        success\n        message\n        client{\n            id\n            name\n            phone\n            address\n        }\n    }\n}\n"]);return c=function(){return e},e}function l(){var e=Object(n.a)(["\nmutation($clientId: ID!){\n    removeClient(clientId: $clientId){\n        success\n        message\n    }\n}\n"]);return l=function(){return e},e}function i(){var e=Object(n.a)(["\nmutation ($clientId: ID, $nombre: String!, $telefono: String, $direccion: String) {\n    upsertClient(clientId:$clientId, name: $nombre, phone: $telefono, address: $direccion){            \n        success\n        message\n        client {\n            id\n            name\n            phone\n            address\n        }\n    }\n}\n"]);return i=function(){return e},e}var o=Object(r.b)(i()),u=Object(r.b)(l()),s=Object(r.b)(c())},860:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(0),c=a.n(r),l=a(216),i=a(117),o=a(224),u=a(232),s=a(248),d=a(95),m=a.n(d),f=a(96),p=a.n(f),b=a(93),h=a(137),v=a(245),E=a(237),g=a(236),O=a(182),j=a(246),y=a(439),x=a(257),C=a(177),S=a(247),k=a(67),N=a(350),M=a.n(N),z=a(349),I=a.n(z),$=a(348),w=a.n($),P=a(84),T=Object(i.a)((function(e){return{card:{maxWidth:345,height:150,cursor:"pointer","&:hover":{boxShadow:"0px 5px 10px -1px rgba(0,0,0,0.3), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0 ,0,0,0.12)"}},cardHeader:{overflow:"auto"},avatar:{backgroundColor:P.a[500]}}})),_=function(e){var t=e.client,a=e.remove,r=e.edit,l=T(),i=c.a.useState(null),o=Object(n.a)(i,2),u=o[0],s=o[1],d=!!u,m=function(){s(null)},f=c.a.createElement(h.a,{anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:m},c.a.createElement(v.a,{onClick:function(){m(),r()}},c.a.createElement(E.a,null,c.a.createElement(w.a,{fontSize:"small"})),c.a.createElement(g.a,{primary:"Modificar"})),c.a.createElement(v.a,{onClick:function(){m(),a()}},c.a.createElement(E.a,null,c.a.createElement(I.a,{fontSize:"small"})),c.a.createElement(g.a,{primary:"Eliminar"})));return c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,{title:t.name},c.a.createElement(j.a,{className:l.card},c.a.createElement(y.a,{avatar:c.a.createElement(x.a,{"aria-label":"recipe",className:l.avatar},t.name[0]),action:c.a.createElement(C.a,{"aria-label":"settings",onClick:function(e){s(e.target)}},c.a.createElement(M.a,null)),title:t.name,subheader:t.phone}),c.a.createElement(S.a,null,c.a.createElement(k.a,{variant:"body2",color:"textSecondary",component:"p"},t.address)))),f)},D=a(217),H=a(222),W=a(223),A=a(254),V=a(230),F=a(231),R=function(){return{useNameState:Object(r.useState)(""),usePhoneState:Object(r.useState)(""),useAddressState:Object(r.useState)("")}},B=function(e){var t=e.handleOk,a=e.handleCancel,r=e.open,l=e.edit,i=R(),o=i.useAddressState,u=i.useNameState,s=i.usePhoneState,d=Object(n.a)(o,2),m=d[0],f=d[1],p=Object(n.a)(u,2),b=p[0],h=p[1],v=Object(n.a)(s,2),E=v[0],g=v[1];return c.a.useEffect((function(){l?(f(l.address),h(l.name),g(l.phone)):(f(""),h(""),g(""))}),[r,l,h,g,f]),c.a.createElement(D.a,{open:r,onClose:a,"aria-labelledby":"form-dialog-title"},c.a.createElement(H.a,{id:"form-dialog-title"},"Adicionar cliente"),c.a.createElement(W.a,null,c.a.createElement(A.a,{autoFocus:!0,margin:"dense",label:"Nombre",type:"text",fullWidth:!0,value:b,onChange:function(e){return h(e.target.value)}}),c.a.createElement(A.a,{margin:"dense",label:"Tel\xe9fono",type:"text",fullWidth:!0,value:E,onChange:function(e){return g(e.target.value)}}),c.a.createElement(A.a,{margin:"dense",label:"Direcci\xf3n",type:"text",fullWidth:!0,value:m,onChange:function(e){return f(e.target.value)}})),c.a.createElement(V.a,null,c.a.createElement(F.a,{onClick:a,color:"primary"},"Cancelar"),c.a.createElement(F.a,{onClick:function(){return t(l&&l.id,b,E,m)},color:"primary"},"Guardar")))},J=a(440),L=Object(i.a)((function(e){return{container:{padding:e.spacing(1)}}})),q=function(e){return c.a.createElement(o.a,{item:!0,xs:12,sm:6,md:6,lg:4},e.children)},G=function(e){var t=L(),a=c.a.useState(!1),i=Object(n.a)(a,2),d=i[0],f=i[1],h=c.a.useState(null),v=Object(n.a)(h,2),E=v[0],g=v[1],O=Object(l.c)(J.b),j=O.data,y=O.loading,x=O.refetch,C=O.error,S=Object(l.b)(J.a),k=Object(n.a)(S,1)[0],N=Object(l.b)(J.c),M=Object(n.a)(N,1)[0],z=Object(b.d)(),I=Object(n.a)(z,2),$=I[0],w=I[1],P=Object(b.e)(),T=Object(n.a)(P,2),D=T[0],H=T[1];return Object(r.useEffect)((function(){H(!!y)}),[y,H]),Object(r.useEffect)((function(){C&&w("Ocurrio un error al intentar cargar los datos.","error")}),[C,w]),c.a.createElement(c.a.Fragment,null,D,c.a.createElement(u.a,null),c.a.createElement(s.a,{maxWidth:"md",className:t.container},c.a.createElement(o.a,{container:!0,spacing:2},j&&j.clients&&j.clients.client.map((function(e){return c.a.createElement(q,{key:e.id},c.a.createElement(_,{client:e,remove:function(){return t=e.id,H(!0),void M({variables:{clientId:t}}).then((function(e){if(!e.data.removeClient.success)throw new Error;w("El cliente ha sido eliminado.","success"),H(!1)})).then((function(){x()})).catch((function(e){w("Ocurrio un error eliminando el cliente.","error"),H(!1)}));var t},edit:function(){f(!0),g(e)}}))}))),c.a.createElement(b.b,{actions:[{icon:c.a.createElement(m.a,null),name:"Adicionar cliente",onClick:function(){return f(!0)}},{icon:c.a.createElement(p.a,null),name:"Buscar cliente",onClick:function(){return alert("TODO: Buscar cliente")}}]})),c.a.createElement(B,{open:d,handleCancel:function(){f(!1),g(null)},handleOk:function(e,t,a,n){!function(e,t,a,n){f(!1),H(!0),k({variables:{clientId:e,nombre:t,telefono:a,direccion:n}}).then((function(e){if(!e.data.upsertClient.success)throw new Error;w("El cliente ha sido guardado.","success"),H(!1)})).then((function(){x()})).catch((function(e){w("Ha ocurreido un error. No se ha podido salvar el cliente.","error"),H(!1)}))}(e,t,a,n),f(!1),g(null)},edit:E}),$)};t.default=G}}]);
//# sourceMappingURL=8.851a41e6.chunk.js.map