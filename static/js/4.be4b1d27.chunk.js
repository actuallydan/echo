(this["webpackJsonpgun-smith"]=this["webpackJsonpgun-smith"]||[]).push([[4],{79:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(9);function r(e,a){if(null==e)return{};var t,r,l=Object(n.a)(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}},80:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(11),r=t(79),l=t(1),c=t.n(l);function o(e){var a=e.label,t=void 0===a?"Button":a,o=e.onClick,i=e.color,u=Object(r.a)(e,["label","onClick","color"]),s=Object(l.useGlobal)("theme"),m=Object(n.a)(s,1)[0],d=i||m||"#00DFFE",b={border:"2px solid "+d,color:d,boxShadow:"inset 0px 0px 0.1em "+d,filter:"drop-shadow(0px 0px 0.5em ".concat(d,")")};return c.a.createElement("div",Object.assign({},u,{onClick:o,className:"button",style:b}),t)}},81:function(e,a,t){"use strict";t.d(a,"b",(function(){return u})),t.d(a,"a",(function(){return s}));var n=t(11),r=t(25),l=[{type:"pistol",damage:"2d6",range:40},{type:"assault_rifle",damage:"2d10",range:60},{type:"sniper_rifle",damage:"1d12",range:200},{type:"shotgun",damage:"4d4",range:20},{type:"rocket_launcher",damage:"2d20",range:60},{type:"submachine_gun",damage:"3d4",range:40}],c=["Dahl","Hyperion","Jakobs","Maliwan","Tediore","Torgue","Vladof"],o=["fire","lightning","cold","force","necrotic"],i=function(e){return Math.random()*(e+1)+(e-1)|0};function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]?arguments[3]:null),u=Object(r.a)({},l.find((function(e){return e.type===a}))||l[Math.floor(6*Math.random())],{id:m(),rarity:parseInt(e,10),brand:c[Math.floor(7*Math.random())],range:40+10*i(e-1),bonusDamage:null,element:null}),s=u.damage.split("d"),d=Object(n.a)(s,2),b=d[0],g=d[1];return b=parseInt(b,10)+e-1,u.damage=b+"d"+g,u.range=u.range+10*i(e-1),u.bonusDamage="Jakobs"===u.brand?null:Math.random()>.8||"Maliwan"===u.brand?"d6":null,u.bonusDamage&&(u.bonusDamage=i(e+1)+u.bonusDamage,u.element=t||("Torgue"!==u.element?o[Math.floor(7*Math.random())]:"force")),u}function s(e){for(var a=function(e){return Math.floor(Math.random()*e)+1},t=0,r=e.damage.split("d"),l=Object(n.a)(r,2),c=l[0],o=l[1],i=0;i<c;i++)t+=a(o);if(e.bonusDamage)for(var u=e.bonusDamage.split("d"),s=Object(n.a)(u,2),m=s[0],d=s[1],b=0;b<m;b++)t+=a(d);return t}function m(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}},82:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(11),r=t(1),l=t.n(r);function c(e){var a=e.hideDamage,t=void 0!==a&&a,c=Object(r.useGlobal)("theme"),o=Object(n.a)(c,1)[0],i={color:o},u={borderBottom:"1px solid ".concat(o)};return l.a.createElement("div",{className:"row gunRow gunTableLabel",style:u},l.a.createElement("div",{className:"column"},l.a.createElement("div",{style:i},"Name")),l.a.createElement("div",{className:"column"},l.a.createElement("div",{style:i},"Range")),l.a.createElement("div",{className:"column"},l.a.createElement("div",{style:i},"Damage")),!t&&l.a.createElement("div",{className:"column"},l.a.createElement("div",{style:i},"Last Roll")))}},83:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(25),r=t(11),l=t(0),c=t.n(l),o=t(80),i=t(81);function u(e){var a=e.gun,t=a.type,u=a.brand,s=a.range,m=a.damage,d=a.rarity,b=a.element,g=a.bonusDamage,f=e.hideDamage,v=void 0!==f&&f,p=Object(l.useState)(null),h=Object(r.a)(p,2),O=h[0],j=h[1],E=Object(l.useState)(0),y=Object(r.a)(E,2),F=y[0],w=y[1],x=["#FFFFFF","#00FF00","#00DFFE","#ffc107"][d-1],N={color:x},k={color:b?{fire:"#FF5050",lightning:"#0030FF",cold:"#00dffe",force:"yellow",necrotic:"green"}[b]:null,marginLeft:"0.5em"};return c.a.createElement("div",{className:"row gunRow"},c.a.createElement("div",{className:"column"},c.a.createElement("div",{style:N},t.replace("_"," ").toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")),c.a.createElement("div",{style:Object(n.a)({},N,{fontSize:"0.7em"})},u)),c.a.createElement("div",{className:"column"},c.a.createElement("div",{style:N},s," ft")),c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"row"},c.a.createElement(o.a,{label:m,onClick:function(){var e=Object(i.a)({type:t,brand:u,range:s,damage:m,rarity:d,element:b,bonusDamage:g});j(e),w(F+1)},color:x,style:{margin:0}}),b&&c.a.createElement("div",{style:k},"+",g))),!v&&c.a.createElement("div",{className:"column"},O&&c.a.createElement("div",{key:F,className:"popOff",style:N},O)))}},84:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(25),r=t(11),l=t(79),c=t(1),o=t.n(c);function i(e){var a=e.value,t=void 0===a?0:a,i=e.color,u=e.onChange,s=e.style,m=void 0===s?{}:s,d=Object(l.a)(e,["value","color","onChange","style"]),b=Object(c.useGlobal)("theme"),g=Object(r.a)(b,1)[0],f=i||g||"#00DFFE",v=Object(n.a)({border:"2px solid "+f,color:f,boxShadow:"inset 0px 0px 1em "+f,filter:"drop-shadow(0px 0px 0.2em ".concat(f,"20)")},m);return o.a.createElement("input",Object.assign({className:"input",type:"number",onChange:u,style:v,value:t},d))}},85:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(11),r=t(1),l=t.n(r);function c(e){var a=e.children,t=e.label,c=Object(r.useGlobal)("theme"),o=Object(n.a)(c,1)[0],i={border:"2px solid ".concat(o),padding:"1em",marginBottom:"2em"},u={color:o};return l.a.createElement("fieldset",{className:"fieldsetSection",style:i},l.a.createElement("legend",{style:u},t),a)}},89:function(e,a,t){"use strict";t.r(a);var n=t(11),r=t(1),l=t.n(r),c=t(79),o=t(0),i=t.n(o);function u(e){var a=e.blue,t=void 0!==a&&a,n=e.total,r=void 0===n?10:n,l=e.remaining,o=void 0===l?10:l,u=Object(c.a)(e,["blue","total","remaining"]),s=t?"#00dffc":"#F44336",m={width:(o/r*100).toFixed(2)+"%",background:s},d={borderColor:t?"#00dffc":"#F44336",boxShadow:"inset 0px 0px 1em "+s,filter:"drop-shadow(0px 0px ".concat(o/r*.5+"em"," ").concat(s,")")};return i.a.createElement("div",null,i.a.createElement("fieldset",{className:"statusBarFieldSet",onClick:function(){u.regen(t)},style:d},i.a.createElement("legend",{className:"legend textBorder"},o),i.a.createElement("div",{className:"statusBarInner",style:m})))}var s=t(80),m=t(84);function d(e){var a=Object(r.useGlobal)("shieldRemaining"),t=Object(n.a)(a,2),c=t[0],o=t[1],i=Object(r.useGlobal)("sp"),u=Object(n.a)(i,1)[0],d=Object(r.useGlobal)("hp"),b=Object(n.a)(d,1)[0],g=Object(r.useGlobal)("healthRemaining"),f=Object(n.a)(g,2),v=f[0],p=f[1],h=Object(r.useState)(0),O=Object(n.a)(h,2),j=O[0],E=O[1];Object(r.useEffect)((function(){E(0)}),[v,c]);return l.a.createElement("div",{className:"row center"},l.a.createElement(s.a,{onClick:function(){var e=parseInt(j,10);e>2*u&&(e-=2*u,o(0),p(e>=v?0:v-e),e=0),e<=0||(c>0?o(e>=c?0:c-e):p(e>=v?0:v-e))},label:"-",color:"#F44336"}),l.a.createElement(m.a,{value:j,onChange:function(e){E(e.currentTarget.value)},style:{marginLeft:"1em",marginRight:"1em"}}),l.a.createElement(s.a,{onClick:function(){var e=parseInt(j,10);p(v+e>=b?b:v+e)},label:"+",color:"#09ff9b"}))}var b=t(82),g=t(83),f=t(85);function v(){var e=Object(r.useGlobal)("sp"),a=Object(n.a)(e,1)[0],t=Object(r.useGlobal)("hp"),c=Object(n.a)(t,1)[0],o=Object(r.useGlobal)("guns"),i=Object(n.a)(o,1)[0],s=Object(r.useGlobal)("shieldRemaining"),m=Object(n.a)(s,2),v=m[0],p=m[1],h=Object(r.useGlobal)("healthRemaining"),O=Object(n.a)(h,2),j=O[0],E=O[1],y=Object(r.useGlobal)(),F=Object(n.a)(y,1)[0],w=function(e){e?p(a):E(c)};return Object(r.useEffect)((function(){var e=JSON.stringify(F);localStorage.setItem("BL_Backup",e)}),[v,j]),l.a.createElement("div",{id:"dashboard"},l.a.createElement(f.a,{label:"Health & Shields"},l.a.createElement(u,{blue:!0,total:a,remaining:v,regen:w}),l.a.createElement(u,{total:c,remaining:j,regen:w}),l.a.createElement(d,null)),l.a.createElement(f.a,{label:"Guns"},l.a.createElement(b.a,null),i&&i.map((function(e){return l.a.createElement(g.a,{key:e.id,gun:e})}))))}t.d(a,"default",(function(){return v}))}}]);
//# sourceMappingURL=4.be4b1d27.chunk.js.map