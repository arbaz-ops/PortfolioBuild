(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[2,6,8],{150:function(e,t,a){"use strict";var c=a(3),r=a(2),n=a(4),s=a(5),o=a.n(s),i=a(0),l=a(8),d=a(1),b=["as","bsPrefix","className"],j=["className"];var u=i.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,c=e.className,s=Object(n.a)(e,b);a=Object(l.c)(a,"col");var i=Object(l.a)(),d=Object(l.b)(),j=[],u=[];return i.forEach((function(e){var t,c,r,n=s[e];delete s[e],"object"===typeof n&&null!=n?(t=n.span,c=n.offset,r=n.order):t=n;var o=e!==d?"-".concat(e):"";t&&j.push(!0===t?"".concat(a).concat(o):"".concat(a).concat(o,"-").concat(t)),null!=r&&u.push("order".concat(o,"-").concat(r)),null!=c&&u.push("offset".concat(o,"-").concat(c))})),[Object(r.a)(Object(r.a)({},s),{},{className:o.a.apply(void 0,[c].concat(j,u))}),{as:t,bsPrefix:a,spans:j}]}(e),s=Object(c.a)(a,2),i=s[0],u=i.className,f=Object(n.a)(i,j),O=s[1],v=O.as,x=void 0===v?"div":v,m=O.bsPrefix,p=O.spans;return Object(d.jsx)(x,Object(r.a)(Object(r.a)({},f),{},{ref:t,className:o()(u,!p.length&&m)}))}));u.displayName="Col",t.a=u},161:function(e,t,a){"use strict";var c=a(2),r=a(4),n=a(5),s=a.n(n),o=a(0),i=a(8),l=a(1),d=["bsPrefix","className","as"],b=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.as,b=void 0===o?"div":o,j=Object(r.a)(e,d),u=Object(i.c)(a,"row"),f=Object(i.a)(),O=Object(i.b)(),v="".concat(u,"-cols"),x=[];return f.forEach((function(e){var t,a=j[e];delete j[e],t=null!=a&&"object"===typeof a?a.cols:a;var c=e!==O?"-".concat(e):"";null!=t&&x.push("".concat(v).concat(c,"-").concat(t))})),Object(l.jsx)(b,Object(c.a)(Object(c.a)({ref:t},j),{},{className:s.a.apply(void 0,[n,u].concat(x))}))}));b.displayName="Row",t.a=b},171:function(e,t,a){"use strict";var c=a(2),r=a(3),n=a(4),s=a(5),o=a.n(s),i=a(0),l=a(41),d=a(8),b=a(1),j=["as","bsPrefix","variant","size","active","disabled","className"],u=i.forwardRef((function(e,t){var a=e.as,s=e.bsPrefix,i=e.variant,u=void 0===i?"primary":i,f=e.size,O=e.active,v=void 0!==O&&O,x=e.disabled,m=void 0!==x&&x,p=e.className,h=Object(n.a)(e,j),y=Object(d.c)(s,"btn"),g=Object(l.b)(Object(c.a)({tagName:a,disabled:m},h)),N=Object(r.a)(g,2),S=N[0],P=N[1].tagName;return Object(b.jsx)(P,Object(c.a)(Object(c.a)(Object(c.a)({},S),h),{},{ref:t,disabled:m,className:o()(p,y,v&&"active",u&&"".concat(y,"-").concat(u),f&&"".concat(y,"-").concat(f),h.href&&m&&"disabled")}))}));u.displayName="Button",t.a=u},88:function(e,t,a){"use strict";a.r(t);a(0),a(90);var c=a(1);t.default=function(e){var t=e.title;return Object(c.jsx)("div",{className:"header",children:t})}},91:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a(0),n=a(150),s=a(4),o=a(5),i=a.n(o),l=a(8),d=a(25),b=a(67),j=a(1),u=["bsPrefix","className","variant","as"],f=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.variant,o=e.as,d=void 0===o?"img":o,b=Object(s.a)(e,u),f=Object(l.c)(a,"card-img");return Object(j.jsx)(d,Object(c.a)({ref:t,className:i()(n?"".concat(f,"-").concat(n):f,r)},b))}));f.displayName="CardImg";var O=f,v=a(68),x=["bsPrefix","className","as"],m=r.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.as,d=void 0===o?"div":o,b=Object(s.a)(e,x),u=Object(l.c)(a,"card-header"),f=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:u}}),[u]);return Object(j.jsx)(v.a.Provider,{value:f,children:Object(j.jsx)(d,Object(c.a)(Object(c.a)({ref:t},b),{},{className:i()(n,u)}))})}));m.displayName="CardHeader";var p=m,h=["bsPrefix","className","bg","text","border","body","children","as"],y=Object(b.a)("h5"),g=Object(b.a)("h6"),N=Object(d.a)("card-body"),S=Object(d.a)("card-title",{Component:y}),P=Object(d.a)("card-subtitle",{Component:g}),w=Object(d.a)("card-link",{Component:"a"}),C=Object(d.a)("card-text",{Component:"p"}),k=Object(d.a)("card-footer"),B=Object(d.a)("card-img-overlay"),T=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.bg,o=e.text,d=e.border,b=e.body,u=void 0!==b&&b,f=e.children,O=e.as,v=void 0===O?"div":O,x=Object(s.a)(e,h),m=Object(l.c)(a,"card");return Object(j.jsx)(v,Object(c.a)(Object(c.a)({ref:t},x),{},{className:i()(r,m,n&&"bg-".concat(n),o&&"text-".concat(o),d&&"border-".concat(d)),children:u?Object(j.jsx)(N,{children:f}):f}))}));T.displayName="Card";var R=Object.assign(T,{Img:O,Title:S,Subtitle:P,Body:N,Link:w,Text:C,Header:p,Footer:k,ImgOverlay:B}),V=a(171),E=["bsPrefix","bg","pill","text","className","as"],F=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.bg,n=void 0===r?"primary":r,o=e.pill,d=void 0!==o&&o,b=e.text,u=e.className,f=e.as,O=void 0===f?"span":f,v=Object(s.a)(e,E),x=Object(l.c)(a,"badge");return Object(j.jsx)(O,Object(c.a)(Object(c.a)({ref:t},v),{},{className:i()(u,x,d&&"rounded-pill",b&&"text-".concat(b),n&&"bg-".concat(n))}))}));F.displayName="Badge";var I=F,z=a(20),H=a(182),M={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}};t.default=function(e){var t,a,s=Object(r.useContext)(z.a),o=e.project;return Object(j.jsx)(n.a,{children:Object(j.jsxs)(R,{style:Object(c.a)(Object(c.a)({},M.cardStyle),{},{backgroundColor:s.cardBackground,borderColor:s.cardBorderColor}),text:s.bsSecondaryVariant,children:[Object(j.jsx)(R.Img,{variant:"top",src:null===o||void 0===o?void 0:o.image}),Object(j.jsxs)(R.Body,{children:[Object(j.jsx)(R.Title,{style:M.cardTitleStyle,children:o.title}),Object(j.jsx)(R.Text,{style:M.cardTextStyle,children:(a=o.bodyText,Object(j.jsx)(H.a,{children:a}))})]}),Object(j.jsx)(R.Body,{children:null===o||void 0===o||null===(t=o.links)||void 0===t?void 0:t.map((function(e){return Object(j.jsx)(V.a,{style:M.buttonStyle,variant:"outline-"+s.bsSecondaryVariant,onClick:function(){return window.open(e.href,"_blank")},children:e.text},e.href)}))}),o.tags&&Object(j.jsx)(R.Footer,{style:{backgroundColor:s.cardFooterBackground},children:o.tags.map((function(e){return Object(j.jsx)(I,{pill:!0,bg:s.bsSecondaryVariant,text:s.bsPrimaryVariant,style:M.badgeStyle,children:e},e)}))})]})})}},95:function(e,t,a){"use strict";a.r(t);var c=a(3),r=a(0),n=a(143),s=a(161),o=a(171),i=a(20),l=a(69),d=a.n(l),b=a(88),j=a(24),u=a(91),f=a(32),O=a(1),v={containerStyle:{marginBottom:25},showMoreStyle:{margin:25}};t.default=function(e){var t,a=Object(r.useContext)(i.a),l=e.header,x=Object(r.useState)(null),m=Object(c.a)(x,2),p=m[0],h=m[1],y=Object(r.useState)(!1),g=Object(c.a)(y,2),N=g[0],S=g[1];Object(r.useEffect)((function(){fetch(j.a.projects,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return h(e)})).catch((function(e){return e}))}),[]);var P=N&&p?p.length:6;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(b.default,{title:l}),p?Object(O.jsx)("div",{className:"section-content-container",children:Object(O.jsxs)(n.a,{style:v.containerStyle,children:[Object(O.jsx)(s.a,{xs:1,sm:1,md:2,lg:3,className:"g-4",children:null===(t=p.projects)||void 0===t?void 0:t.slice(0,P).map((function(e){return Object(O.jsx)(d.a,{children:Object(O.jsx)(u.default,{project:e})},e.title)}))}),!N&&Object(O.jsx)(o.a,{style:v.showMoreStyle,variant:a.bsSecondaryVariant,onClick:function(){return S(!0)},children:"show more"})]})}):Object(O.jsx)(f.default,{})]})}}}]);
//# sourceMappingURL=2.76fcd664.chunk.js.map