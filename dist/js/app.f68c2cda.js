(function(t){function e(e){for(var a,r,o=e[0],u=e[1],s=e[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},i={app:0},c=[];function o(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-53e8ccb6":"387cf4d4","chunk-2ace366d":"0aa8c4b3","chunk-565f06d6":"f3908c0d","chunk-bcbb7150":"d20f6b25","chunk-f3b240fa":"d3240983","chunk-f96a506c":"32f7bb66","chunk-fa6fa006":"5dcf72bb","chunk-724d071f":"243b135c","chunk-53a26067":"bb5025de"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-53e8ccb6":1,"chunk-565f06d6":1,"chunk-bcbb7150":1,"chunk-f3b240fa":1,"chunk-f96a506c":1,"chunk-fa6fa006":1,"chunk-724d071f":1,"chunk-53a26067":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-53e8ccb6":"55c011d2","chunk-2ace366d":"31d6cfe0","chunk-565f06d6":"7c8b6a71","chunk-bcbb7150":"b490d9b1","chunk-f3b240fa":"9bfcd596","chunk-f96a506c":"87daad8b","chunk-fa6fa006":"8aa44c6c","chunk-724d071f":"a3ebaf9b","chunk-53a26067":"7ad5734c"}[t]+".css",i=u.p+a,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var s=c[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){s=d[o],l=s.getAttribute("data-href");if(l===a||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[t],f.parentNode.removeChild(f),n(c)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(t);var d=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},1:function(t,e){},2:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{dense:"",dark:""}},[n("v-icon",[t._v(" $covid_icon ")]),n("v-toolbar-title",{staticClass:"mx-4 title font-weight-light"},[t._v("COVID-19 Global Situation Tracker")]),n("v-spacer"),n("v-btn",{staticClass:"mx-2",attrs:{icon:"",color:"error"},on:{click:function(e){t.show_infor_dialog.show=!t.show_infor_dialog.show}}},[n("v-icon",[t._v(" mdi-information-outline ")])],1)],1),n("v-main",[n("v-container",{staticClass:"mt-0 pt-1 mb-0 pb-1 px-6",attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"pa-0",attrs:{cols:"2"}},[n("v-row",[n("v-col",[n("StatusCard",{attrs:{card_height:655}})],1)],1),n("v-row",[n("v-col",{staticClass:"py-0"},[n("DateSlider",{attrs:{card_height:150}})],1)],1)],1),n("v-col",{staticClass:"pa-3",attrs:{cols:"6"}},[n("MapCard",{attrs:{card_height:820}})],1),n("v-col",{staticClass:"pa-0",attrs:{cols:"4"}},[n("v-row",[n("v-col",[n("BarRace",{attrs:{card_height:450}})],1)],1),n("v-row",[n("v-col",{staticClass:"py-0"},[n("Daily",{attrs:{card_height:335}})],1)],1)],1)],1)],1)],1),n("Footer"),n("InforDialog")],1)},i=[],c=(n("d3b7"),n("96cf"),n("1da1")),o=n("5530"),u=n("2f62"),s={name:"App",components:{DateSlider:function(){return Promise.all([n.e("chunk-53e8ccb6"),n.e("chunk-bcbb7150")]).then(n.bind(null,"7438"))},StatusCard:function(){return Promise.all([n.e("chunk-53e8ccb6"),n.e("chunk-2ace366d")]).then(n.bind(null,"07a7"))},MapCard:function(){return Promise.all([n.e("chunk-53e8ccb6"),n.e("chunk-f3b240fa")]).then(n.bind(null,"fa7f"))},Daily:function(){return Promise.all([n.e("chunk-53e8ccb6"),n.e("chunk-fa6fa006")]).then(n.bind(null,"f871"))},BarRace:function(){return Promise.all([n.e("chunk-53e8ccb6"),n.e("chunk-f96a506c")]).then(n.bind(null,"1741"))},InforDialog:function(){return Promise.all([n.e("chunk-53e8ccb6"),n.e("chunk-565f06d6")]).then(n.bind(null,"2ec8"))},Footer:function(){return n.e("chunk-724d071f").then(n.bind(null,"8237"))}},computed:Object(o["a"])({},Object(u["c"])({show_infor_dialog:"show_infor_dialog"})),data:function(){return{picker:(new Date).toISOString().substr(0,10)}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.LOAD_FILE();case 1:case"end":return e.stop()}}),e)})))()},methods:Object(o["a"])({},Object(u["b"])(["LOAD_FILE"]))},l=s,d=(n("034f"),n("2877")),f=n("6544"),h=n.n(f),v=n("7496"),p=n("40dc"),y=n("8336"),_=n("62ad"),m=n("a523"),b=n("132d"),g=n("f6c4"),k=n("0fd9"),x=n("2fa4"),w=n("2a7f"),O=Object(d["a"])(l,r,i,!1,null,null,null),j=O.exports;h()(O,{VApp:v["a"],VAppBar:p["a"],VBtn:y["a"],VCol:_["a"],VContainer:m["a"],VIcon:b["a"],VMain:g["a"],VRow:k["a"],VSpacer:x["a"],VToolbarTitle:w["a"]});n("4160"),n("caad"),n("c975"),n("d81d"),n("b0c0"),n("a9e3"),n("4fad"),n("2532"),n("159b");var E=n("3835"),D=(n("4de4"),n("90d7"),n("d4ec")),C=n("bee2"),S=n("262e"),R=n("2caf"),F=(n("13d5"),n("ac1f"),n("1276"),n("498a"),n("5698")),A=function(){function t(){Object(D["a"])(this,t),this.df=[]}return Object(C["a"])(t,[{key:"fetch_json",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n,a,r=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=!(r.length>1&&void 0!==r[1])||r[1],t.next=3,F["h"](e);case 3:if(a=t.sent,!n){t.next=8;break}this.df=a,t.next=9;break;case 8:return t.abrupt("return",a);case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"fetch_csv",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n,a,r=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=!(r.length>1&&void 0!==r[1])||r[1],t.next=3,F["b"](e);case 3:if(a=t.sent,!n){t.next=8;break}this.df=a,t.next=9;break;case 8:return t.abrupt("return",a);case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"load_json",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n,a,r=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=!(r.length>1&&void 0!==r[1])||r[1],t.next=3,this.readFileAsync(e);case 3:if(a=t.sent,!n){t.next=8;break}this.df=JSON.parse(a),t.next=9;break;case 8:return t.abrupt("return",a);case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"load_csv",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n,a,r,i=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=!(i.length>1&&void 0!==i[1])||i[1],t.next=3,this.readFileAsync(e);case 3:return a=t.sent,t.next=6,this.convert_csv(a);case 6:if(r=t.sent,!n){t.next=11;break}this.df=r,t.next=12;break;case 11:return t.abrupt("return",a);case 12:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"readFileAsync",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var a=new FileReader;a.onload=function(){t(a.result)},a.onerror=n,a.readAsText(e)})));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"convert_csv",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n,a,r,i,c,o,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n=e.split("\n"),a=[],r=n[0].trim().split(",").filter((function(t){return t.length>0})),r=r.map((function(t){return t.toLowerCase().trim()})),i=1;i<n.length;i++)if(c=n[i].split(",").filter((function(t){return t.length>0})),c.length==r.length){for(u in o={},r)o[r[u]]=c[u].trim();a.push(o)}return t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),P=function(t){Object(S["a"])(n,t);var e=Object(R["a"])(n);function n(){return Object(D["a"])(this,n),e.call(this)}return Object(C["a"])(n,[{key:"merge",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e,n){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.forEach((function(t){var r=[],i=a.df.filter((function(t,a){var i=!0;return n.forEach((function(n){i=i&&t[n]==e[n]})),i&&r.push(a),i}));0==i.length?a.df.push(t):i.forEach((function(e){for(var n=0,r=Object.entries(t);n<r.length;n++){var i=Object(E["a"])(r[n],2),c=i[0],o=i[1];null!=o&&(a.df[e][c]=o)}}))}));case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},{key:"replace",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.df=this.df.map((function(t){for(var a=t,r=0,i=Object.entries(t);r<i.length;r++){var c=Object(E["a"])(i[r],2),o=c[0],u=c[1];u==e&&(t[o]=n)}return a}));case 1:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}()},{key:"replace_missing",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.df=this.df.map((function(t){for(var n=t,a=0,r=Object.entries(t);a<r.length;a++){var i=Object(E["a"])(r[a],2),c=i[0],o=i[1];o==e&&(t[c]=null)}return n}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"table2list",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e,n,a){var r,i,c=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=c.length>3&&void 0!==c[3]?c[3]:this.df,i=[],r.forEach((function(t){for(var r=0,c=Object.entries(t);r<c.length;r++){var o=Object(E["a"])(c[r],2),u=o[0],s=o[1];if(!e.includes(u)){var l={};e.forEach((function(e){return l[e]=t[e]})),l[n]=u,l[a]=s,i.push(l)}}})),t.abrupt("return",i);case 4:case"end":return t.stop()}}),t,this)})));function e(e,n,a){return t.apply(this,arguments)}return e}()}]),n}(A),L=n("b9b9"),z=n.n(L),I=function(){function t(){Object(D["a"])(this,t)}return Object(C["a"])(t,[{key:"getDaysArray",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"mm/dd/yyyy";t=new Date(t),e=new Date(e);for(var a=[],r=t;r<=e;r.setDate(r.getDate()+1))a.push(z()(new Date(r),n));return a}}]),t}(),T=n("7909"),V=function(t){Object(S["a"])(n,t);var e=Object(R["a"])(n);function n(){var t;return Object(D["a"])(this,n),t=e.call(this),t.df_filter=[],t.date_format=new I,t}return Object(C["a"])(n,[{key:"add_new_col",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.df=this.df.map((function(t){var a=0;return n.forEach((function(e){isNaN(t[e])||(a+=Number(t[e]))})),t[e]=a,t}));case 1:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}()},{key:"set_col",value:function(t,e){this.df=this.df.map((function(n){switch(e){case"num":n[t]=Number(n[t]);break;case"date":n[t]=new Date(n[t]);break;case"int":n[t]=parseInt(n[t]);break;case"float":n[t]=parseFloat(n[t]);break}return n}))}},{key:"get_col",value:function(t){return this.df.map((function(e){return e[t]}))}},{key:"filter_col",value:function(t,e){return this.df_filter=this.df.filter((function(n){return e.includes(n[t])})),this.df_filter}},{key:"unique_col",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.df_filter,n=e.reduce((function(e,n){return""==n[t]||e.includes(n[t])||e.push(n[t]),e}),[]);return n}},{key:"stats_col",value:function(t,e){var n,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.df_filter,r=a.filter((function(e){return null!=e[t]})).map((function(e){return e[t]}));if(0==r.length)return null;switch(e){case"min":n=Object(T["d"])(r);break;case"max":n=Object(T["a"])(r);break;case"mean":n=Object(T["b"])(r);break;case"std":n=Object(T["e"])(r);break;case"median":n=Object(T["c"])(r);break;case"sum":n=Object(T["f"])(r);break;case"count":n=r.length;break}return Math.round(100*n)/100}},{key:"group_by_col",value:function(t,e,n){var a=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.df_filter,i=this.unique_col(t,r),c=[];return i.forEach((function(i){var o={};o[t]=i;var u=r.filter((function(e){return e[t]==i}));u.length>0?o[e]=a.stats_col(e,n,u):o[e]=null,c.push(o)})),c}}]),n}(P),N=function(t){Object(S["a"])(n,t);var e=Object(R["a"])(n);function n(){return Object(D["a"])(this,n),e.apply(this,arguments)}return n}(V),B=n("030a"),M=n.n(B),G=function(){function t(e){Object(D["a"])(this,t),this.plot_config=e,this.div=this.plot_config.div,this.layout=this.plot_config.layout,this.config=this.plot_config.config}return Object(C["a"])(t,[{key:"plot_new",value:function(t){M.a.newPlot(this.div,t,this.layout,this.config)}},{key:"set_layout",value:function(t){Object.assign(this.layout,t)}},{key:"update_layout",value:function(t){M.a.relayout(this.div,t)}},{key:"add_trace",value:function(t){M.a.addTraces(this.div,t)}},{key:"update_map",value:function(t){M.a.addTraces(this.div,t),M.a.deleteTraces(this.div,0)}}]),t}(),U=(n("fb6a"),n("5319"),function(){function t(e){Object(D["a"])(this,t),this.plot_config=e,this.div=this.plot_config.div,this.layout=this.plot_config.layout,this.svg=null,this.ticker=null}return Object(C["a"])(t,[{key:"gen_dataSlice",value:function(t){var e=this.race_data.filter((function(e){return e.date==t&&!isNaN(e.value)})).sort((function(t,e){return e.value-t.value})).slice(0,this.top_n);return e.forEach((function(t,e){return t.rank=e})),e}},{key:"gene_race_data",value:function(t,e,n){var a=[],r={};return t.forEach((function(t){r[t.country]=F["e"](360*Math.random(),.75,.75)})),t.forEach((function(t){t.location.forEach((function(i){var c=i.name;e.forEach((function(i,o){if(n in t.data[c]){var u,s=0==o?i:e[o-1];u="tot"==c?t.country:"US"!=t.country?c+", "+t.country:c,a.push({value:t.data[c][n][i],lastValue:t.data[c][n][s],date:i,name:u,colour:r[t.country]})}}))}))})),a}},{key:"restart_race",value:function(){this.update_ticker()}},{key:"stop_race",value:function(){this.ticker.stop()}},{key:"init_race",value:function(t,e,n){var a=this;this.date_list=e,this.col=n,this.top_n=this.layout.top_n,this.width=this.layout.width,this.height=this.layout.height,this.margin=this.layout.margin,this.tickDuration=this.layout.tickDuration,this.barPadding=(this.height-(this.margin.bottom+this.margin.top))/(5*this.top_n),this.ticker=null,null!=this.svg?(console.log(this.svg),this.svg.selectAll("*").remove()):this.svg=F["k"](this.div).append("svg").attr("width",this.width).attr("height",this.height),this.race_data=this.gene_race_data(t,e,n),this.date_index=0,this.date=e[this.date_index];var r=this.gen_dataSlice(this.date);this.x=F["j"]().domain([0,F["i"](r,(function(t){return t.value}))]).range([this.margin.left,this.width-this.margin.right-65]),this.y=F["j"]().domain([this.top_n,0]).range([this.height-this.margin.bottom,this.margin.top]),this.xAxis=F["a"]().scale(this.x).ticks(this.width>500?5:2).tickSize(-(this.height-this.margin.top-this.margin.bottom)).tickFormat((function(t){return F["d"](",")(t)})),this.svg.append("g").attr("class","axis xAxis").attr("transform","translate(0, ".concat(this.margin.top,")")).call(this.xAxis).selectAll(".tick line").classed("origin",(function(t){return 0==t})),this.svg.selectAll("rect.bar").data(r,(function(t){return t.name})).enter().append("rect").attr("class","bar").attr("x",this.x(0)+1).attr("width",(function(t){return a.x(t.value)-a.x(0)})).attr("y",(function(t){return a.y(t.rank)+5})).attr("height",this.y(1)-this.y(0)-this.barPadding).style("fill",(function(t){return t.colour})),this.svg.selectAll("text.label").data(r,(function(t){return t.name})).enter().append("text").attr("class","label").attr("x",(function(t){return a.x(t.value)+5})).attr("y",(function(t){return a.y(t.rank)+(a.y(1)-a.y(0))/2+9})).style("text-anchor","start").html((function(t){return t.name})).style("fill",(function(t){return t.colour})),this.svg.selectAll("text.valueLabel").data(r,(function(t){return t.name})).enter().append("text").attr("class","valueLabel").attr("x",(function(){return a.x(0)+5})).attr("y",(function(t){return a.y(t.rank)+(a.y(1)-a.y(0))/2+9})).style("text-anchor","end").text((function(t){return F["d"](",.0f")(t.lastValue)})).style("fill","grey"),this.svg.append("rect").attr("x",this.width-this.margin.right-195).attr("y",this.height-50).attr("width",150).attr("height",35).style("fill","#424242"),this.dateText=this.svg.append("text").attr("x",this.width-this.margin.right-50).attr("y",this.height-25).style("text-anchor","end").style("font-size","25px").attr("font-weight",800).style("fill","white").text(z()(new Date(this.date),"yyyy-mm-dd")),this.update_ticker()}},{key:"update_ticker",value:function(){function t(){var t=e.gen_dataSlice(e.date);e.x.domain([0,F["i"](t,(function(t){return t.value}))]),e.svg.select(".xAxis").transition().duration(e.tickDuration).ease(F["c"]).call(e.xAxis);var n=e.svg.selectAll(".bar").data(t,(function(t){return t.name}));n.enter().append("rect").attr("class",(function(t){return"bar ".concat(t.name.replace(/\s/g,"_"))})).attr("x",e.x(0)+1).attr("width",(function(t){return e.x(t.value)-e.x(0)})).attr("y",(function(){return e.y(e.top_n+1)+5})).attr("height",e.y(1)-e.y(0)-e.barPadding).style("fill",(function(t){return t.colour})).transition().duration(e.tickDuration).ease(F["c"]).attr("y",(function(t){return e.y(t.rank)+5})),n.transition().duration(e.tickDuration).ease(F["c"]).attr("width",(function(t){return e.x(t.value)-e.x(0)})).attr("y",(function(t){return e.y(t.rank)+5})),n.exit().transition().duration(e.tickDuration).ease(F["c"]).attr("width",(function(t){return e.x(t.value)-e.x(0)})).attr("y",(function(){return e.y(e.top_n+1)+5})).remove();var a=e.svg.selectAll(".label").data(t,(function(t){return t.name}));a.enter().append("text").attr("class","label").attr("x",(function(t){return e.x(t.value)+12})).attr("y",(function(){return e.y(e.top_n+1)+(e.y(1)-e.y(0))/2+9})).style("text-anchor","start").html((function(t){return t.name})).style("fill",(function(t){return t.colour})).transition().duration(e.tickDuration).ease(F["c"]).attr("y",(function(t){return e.y(t.rank)+(e.y(1)-e.y(0))/2+9})),a.transition().duration(e.tickDuration).ease(F["c"]).attr("x",(function(t){return e.x(t.value)+12})).attr("y",(function(t){return e.y(t.rank)+(e.y(1)-e.y(0))/2+9})),a.exit().transition().duration(e.tickDuration).ease(F["c"]).attr("x",(function(t){return e.x(t.value)+12})).attr("y",(function(){return e.y(e.top_n+1)+9})).remove();var r=e.svg.selectAll(".valueLabel").data(t,(function(t){return t.name}));r.enter().append("text").attr("class","valueLabel").attr("x",(function(){return e.x(0)-5})).attr("y",(function(){return e.y(e.top_n+1)+9})).text((function(t){return F["d"](",.0f")(t.lastValue)})).style("text-anchor","end").style("fill","grey").transition().duration(e.tickDuration).ease(F["c"]).attr("y",(function(t){return e.y(t.rank)+(e.y(1)-e.y(0))/2+9})),r.transition().duration(e.tickDuration).ease(F["c"]).attr("x",(function(){return e.x(0)-5})).attr("y",(function(t){return e.y(t.rank)+(e.y(1)-e.y(0))/2+9})).tween("text",(function(t){var e=F["f"](t.lastValue,t.value);return function(t){this.textContent=F["d"](",")(e(t))}})),r.exit().transition().duration(e.tickDuration).ease(F["c"]).attr("x",(function(){return e.x(0)-5})).attr("y",(function(){return e.y(e.top_n+2)+9})).remove(),e.dateText.text(z()(new Date(e.date),"yyyy-mm-dd")),e.date_index==e.date_list.length-1&&e.ticker.stop(),e.date_index++,e.date=e.date_list[e.date_index]}var e=this;null==this.ticker?this.ticker=F["g"](t,this.tickDuration):this.ticker.restart(t,this.tickDuration)}}]),t}()),q=function(){function t(e){Object(D["a"])(this,t),this.plot_config=e,"plotly"==e.viz_type?this.plot_obj=new G(e):"bar_race"==e.viz_type&&(this.plot_obj=new U(e))}return Object(C["a"])(t,[{key:"plot_new",value:function(t){this.plot_obj.plot_new(t)}},{key:"update_layout",value:function(t){this.plot_obj.update_layout(t)}},{key:"add_trace",value:function(t){this.plot_obj.add_trace(t)}},{key:"update_map",value:function(t){this.plot_obj.update_map(t)}}]),t}(),K=function(t){Object(S["a"])(n,t);var e=Object(R["a"])(n);function n(){var t;return Object(D["a"])(this,n),t=e.call(this),t.plots={},t}return Object(C["a"])(n,[{key:"init_plots",value:function(t){var e=this;t.forEach((function(t){var n=new q(t);e.plots[t["id"]]=n}))}},{key:"plot_map",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e,n){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=this.gene_map_data(e,n),r=[],r=[{type:"scattermapbox",name:a.map((function(t){return t.name})),text:a.map((function(t){return t.text})),lon:a.map((function(t){return t.lon})),lat:a.map((function(t){return t.lat})),marker:{color:a.map((function(t){return t.color})),size:a.map((function(t){return t.size})),opacity:a.map((function(t){return t.op}))},showlegend:!1}],this.plots["g_map"].update_map(r);case 4:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}()},{key:"gene_map_data",value:function(t,e){e="all"==e?["case","recover","death"]:[e];var n=[],a=this.df,r={case:"#E65100",recover:"#4CAF50",death:"#4d0000",active:"#FF8F00"},i={case:.5,recover:.7,active:.7,death:.8};return e.forEach((function(e){a.forEach((function(a){a.location.forEach((function(c){if(e in a.data[c.name]){var o="tot"==c.name?a.country:c.name,u={lat:Math.floor(100*Number(c.lat))/100,lon:Math.floor(100*Number(c.lon))/100,text:o+": "+e+", "+a.data[c.name][e][t],color:r[e],size:Math.log2(a.data[c.name][e][t])+2,op:i[e]};n.push(u)}}))}))})),n}},{key:"gene_daily_data",value:function(t,e,n){var a=this.df,r=[],i=[],c=[],o=0,u={name:"Case",x:r,y:[],marker:{color:"#E65100",opacity:.8},type:e?"bar":"scatter"},s={name:"Recover",x:r,y:[],marker:{color:"#4CAF50",opacity:.8},type:e?"bar":"scatter"},l={name:"Recover",x:r,y:[],marker:{color:"#FF8F00",opacity:.8},type:e?"bar":"scatter"},d={name:"Death",x:r,y:[],marker:{color:"#FF1744",opacity:.8},type:e?"bar":"scatter"};if("Worldwide"==t){r=[],i=[],c=[];for(var f=0,h=Object.entries(a[177]["data"]["tot"]["case"]);f<h.length;f++){var v=Object(E["a"])(h[f],1),p=v[0];r.push({key:p,axis:z()(new Date(p),"yyyy-mm-dd")}),i.push(0),c.push(0)}a.forEach((function(t){o=0,r.forEach((function(e,n){var a=c[n]+t["data"]["tot"]["case"][e.key]-o;i[n]+=t["data"]["tot"]["case"][e.key],c[n]=a>=0?a:0,o=t["data"]["tot"]["case"][e.key]}))})),u.y=e?c:i,u.x=r.map((function(t){return t.axis})),r=[],i=[],c=[];for(var y=0,_=Object.entries(a[177]["data"]["tot"]["death"]);y<_.length;y++){var m=Object(E["a"])(_[y],1),b=m[0];r.push({key:b,axis:z()(new Date(b),"yyyy-mm-dd")}),i.push(0),c.push(0)}a.forEach((function(t){o=0,r.forEach((function(e,n){var a=c[n]+t["data"]["tot"]["death"][e.key]-o;i[n]+=t["data"]["tot"]["death"][e.key],c[n]=a>=0?a:0,o=t["data"]["tot"]["death"][e.key]}))})),d.y=e?c:i,d.x=r.map((function(t){return t.axis})),r=[],i=[],c=[];for(var g=0,k=Object.entries(a[177]["data"]["tot"]["recover"]);g<k.length;g++){var x=Object(E["a"])(k[g],1),w=x[0];r.push({key:w,axis:z()(new Date(w),"yyyy-mm-dd")}),i.push(0),c.push(0)}a.forEach((function(t){o=0,r.forEach((function(e,n){var a=c[n]+t["data"]["tot"]["recover"][e.key]-o;i[n]+=t["data"]["tot"]["recover"][e.key],c[n]=a>=0?a:0,o=t["data"]["tot"]["recover"][e.key]}))})),s.y=e?c:i,s.x=r.map((function(t){return t.axis})),r=[],i=[],c=[];for(var O=0,j=Object.entries(a[177]["data"]["tot"]["active"]);O<j.length;O++){var D=Object(E["a"])(j[O],1),C=D[0];r.push({key:C,axis:z()(new Date(C),"yyyy-mm-dd")}),i.push(0),c.push(0)}a.forEach((function(t){o=0,r.forEach((function(e,n){var a=c[n]+t["data"]["tot"]["active"][e.key]-o;i[n]+=t["data"]["tot"]["active"][e.key],c[n]=a>=0?a:0,o=t["data"]["tot"]["active"][e.key]}))})),l.y=e?c:i,l.x=r.map((function(t){return t.axis}))}else{var S=a.filter((function(e){return e.country==t}));S=S[0],i=[],r=[],c=[],o=0;for(var R=0,F=Object.entries(S["data"]["tot"]["case"]);R<F.length;R++){var A=Object(E["a"])(F[R],2),P=A[0],L=A[1];r.push(z()(new Date(P),"yyyy-mm-dd")),i.push(L),L-o>=0?(c.push(L-o),o=L):(c.push(null),o=0)}u.y=e?c:i,u.x=r,i=[],r=[],c=[],o=0;for(var I=0,T=Object.entries(S["data"]["tot"]["death"]);I<T.length;I++){var V=Object(E["a"])(T[I],2),N=V[0],B=V[1];r.push(z()(new Date(N),"yyyy-mm-dd")),i.push(B),B-o>=0?(c.push(B-o),o=B):(c.push(null),o=0)}d.y=e?c:i,d.x=r,i=[],r=[],c=[],o=0;for(var M=0,G=Object.entries(S["data"]["tot"]["recover"]);M<G.length;M++){var U=Object(E["a"])(G[M],2),q=U[0],K=U[1];r.push(z()(new Date(q),"yyyy-mm-dd")),i.push(K),K-o>=0?(c.push(K-o),o=K):(c.push(null),o=0)}s.y=e?c:i,s.x=r,i=[],r=[],c=[],o=0;for(var $=0,J=Object.entries(S["data"]["tot"]["active"]);$<J.length;$++){var H=Object(E["a"])(J[$],2),W=H[0],Q=H[1];r.push(z()(new Date(W),"yyyy-mm-dd")),i.push(Q),c.push(Q-o),o=Q}l.y=e?c:i,l.x=r}switch(n){case"all":return[u,s,d];case"case":return[u];case"recover":return[s];case"death":return[d];case"active":return[l]}}}]),n}(N);function $(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],i=["Country/Region","Lat","Long","Province/State","UID","iso2","iso3","code3","FIPS","Admin2","Province_State","Country_Region","Lat","Long_","Combined_Key","Population"];t.forEach((function(t){for(var c={},o=0,u=Object.entries(t);o<u.length;o++){var s=Object(E["a"])(u[o],2),l=s[0],d=s[1];i.includes(l)||(c[l]=Number(d),r.includes(l)||r.push(l))}if(a.includes(t["Country/Region"])){var f=n.map((function(t){return t.country})).indexOf(t["Country/Region"]),h=""==t["Province/State"]?"tot":t["Province/State"],v=n[f].location.map((function(t){return t.name})).indexOf(h);-1==v&&n[f].location.push({name:h,lat:t["Lat"],lon:t["Long"]}),void 0==n[f].data[h]&&(n[f].data[h]={}),n[f].data[h][e]=c}else{a.push(t["Country/Region"]);var p=""==t["Province/State"]?"tot":t["Province/State"],y={country:t["Country/Region"],location:[{name:p,lat:t["Lat"],lon:t["Long"]}],data:{}};y.data[p]={},y.data[p][e]=c,n.push(y)}}));var c=[{country:"Australia",lat:-25.19128230324078,lon:134.73664513062488},{country:"Canada",lat:56.1304,lon:-106.3468},{country:"China",lat:33.61781734587152,lon:103.56916987244851}];return c.forEach((function(t){var a=n.map((function(t){return t.country})).indexOf(t.country),i=n[a].location.map((function(t){return t.name})).indexOf("tot");-1==i&&n[a].location.push({name:"tot",lat:t.lat,lon:t.lon}),void 0==n[a].data["tot"]&&(n[a].data["tot"]={}),n[a].data["tot"][e]={},r.forEach((function(t){var r=0;n[a].location.forEach((function(i){if(e in n[a].data[i["name"]]){var c=n[a].data[i["name"]][e][t];void 0!=c&&(r+=c)}})),n[a].data["tot"][e][t]=r}))})),{res_df:n,date_list:r,country_list:a}}function J(t,e){return t.forEach((function(n,a){for(var r=function(){var t=Object(E["a"])(c[i],2),a=t[0],r=t[1];n.data[a]["active"]={},e.forEach((function(t){n.data[a]["active"][t]="recover"in r?r["case"][t]-r["death"][t]-r["recover"][t]:null}))},i=0,c=Object.entries(n.data);i<c.length;i++)r();t[a]=n})),t}a["a"].use(u["a"]);var H=new u["a"].Store({state:{show_infor_dialog:{show:!1},case_file:"https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",death_file:"https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv",recover_file:"https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv",case_file_us:"https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv",death_file_us:"https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_US.csv",my_viz:new K,date:{date_range:[],curr_date:null,loaded:0,curr_index:null},status:{total_case:null,total_death:null,total_activate:null,total_recover:null,increased_case:null,increased_death:null},list_data:{type:"all",data:[],loaded:!1}},mutations:{LOAD_FILE:function(t){var e=arguments;return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,r,i,c,o,u,s,l,d,f;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.length>1&&void 0!==e[1]&&e[1],n.next=3,t.my_viz.fetch_csv(t.case_file,!1);case 3:return r=n.sent,i=$(r,"case"),n.next=7,t.my_viz.fetch_csv(t.death_file,!1);case 7:return c=n.sent,i=$(c,"death",i.res_df,i.country_list,i.date_list),n.next=11,t.my_viz.fetch_csv(t.recover_file,!1);case 11:if(o=n.sent,i=$(o,"recover",i.res_df,i.country_list,i.date_list),!a){n.next=24;break}return n.next=16,t.my_viz.fetch_csv(t.case_file_us,!1);case 16:return u=n.sent,u=u.map((function(t){return t["Country/Region"]=t["Country_Region"],t["Province/State"]=t["Combined_Key"],t["Long"]=t["Long_"],t})),i=$(u,"case",i.res_df,i.country_list,i.date_list),n.next=21,t.my_viz.fetch_csv(t.death_file_us,!1);case 21:s=n.sent,s=s.map((function(t){return t["Country/Region"]=t["Country_Region"],t["Province/State"]=t["Combined_Key"],t["Long"]=t["Long_"],t})),i=$(s,"death",i.res_df,i.country_list,i.date_list);case 24:return l=i.date_list,d=J(i.res_df,l),console.log(d),t.my_viz.df=d,t.date.date_range=l,t.date.curr_index=t.date.date_range.length-1,f=t.date.date_range[t.date.curr_index],t.date.curr_date=z()(new Date(f),"yyyy-mm-dd"),t.date.loaded+=1,n.abrupt("return",Promise.resolved(1));case 34:case"end":return n.stop()}}),n)})))()},CHANGE_CURR_DATE:function(t,e){t.date.curr_index=e,t.date.curr_date=z()(new Date(t.date.date_range[e]),"yyyy - mm - dd")},CAL_STATUS:function(t){var e;t.status.increased_case=0,t.status.increased_death=0,e=t.my_viz.df.map((function(e){return e.data["tot"]["case"][t.date.date_range[t.date.curr_index]]})),t.status.total_case=Object(T["f"])(e),e=t.my_viz.df.map((function(e){return e.data["tot"]["death"][t.date.date_range[t.date.curr_index]]})),t.status.total_death=Object(T["f"])(e),e=t.my_viz.df.map((function(e){return e.data["tot"]["active"][t.date.date_range[t.date.curr_index]]})),t.status.total_activate=Object(T["f"])(e),e=t.my_viz.df.map((function(e){return e.data["tot"]["recover"][t.date.date_range[t.date.curr_index]]})),t.status.total_recover=Object(T["f"])(e),t.date.curr_index>0&&(e=t.my_viz.df.map((function(e){return e.data["tot"]["case"][t.date.date_range[t.date.curr_index-1]]})),t.status.increased_case=t.status.total_case-Object(T["f"])(e),e=t.my_viz.df.map((function(e){return e.data["tot"]["death"][t.date.date_range[t.date.curr_index-1]]})),t.status.increased_death=t.status.total_death-Object(T["f"])(e))},GENE_LIST:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n="all"==t.list_data.type?"case":t.list_data.type,t.list_data.data=[],a=t.date.date_range[t.date.curr_index],t.my_viz.df.forEach((function(e){e.location.forEach((function(r){var i;if(i="US"==e.country?"tot"==r.name?e.country:r.name:"tot"==r.name?e.country:r.name+", "+e.country,n in e.data[r.name]){var c=e.data[r.name][n][a];isNaN(c)||null==c||t.list_data.data.push({region:i,num:c})}}))})),t.list_data.data=t.list_data.data.sort((function(t,e){return t.num>e.num?-1:1})),t.list_data.loaded=!0;case 6:case"end":return e.stop()}}),e)})))()}},actions:{},modules:{}}),W=n("f309"),Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{viewBox:"0 0 512.000000 512.000000"}},[n("g",{attrs:{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"#EF5350",stroke:"none"}},[n("path",{attrs:{d:"M2384 5110 c-719 -48 -1378 -398 -1836 -975 -217 -274 -405 -669\n-482 -1015 -80 -360 -80 -760 0 -1120 126 -564 442 -1068 899 -1435 289 -232\n677 -419 1035 -499 360 -80 760 -80 1120 0 564 126 1068 442 1435 899 232 289\n419 677 499 1035 80 360 80 760 0 1120 -126 564 -442 1068 -899 1435 -289 232\n-677 419 -1035 499 -227 50 -505 71 -736 56z m480 -1141 c35 -41 34 -83 -3\n-120 -27 -27 -35 -29 -102 -29 -107 0 -109 -3 -109 -166 0 -152 3 -158 76\n-169 110 -16 264 -80 374 -154 25 -17 49 -31 55 -31 20 0 205 194 205 215 0\n12 -19 39 -41 60 -69 66 -82 121 -40 169 25 28 60 38 95 26 20 -6 99 -77 214\n-193 171 -172 182 -185 182 -221 0 -49 -15 -75 -52 -91 -45 -18 -81 -4 -144\n55 -29 27 -57 50 -61 50 -13 0 -213 -204 -213 -217 0 -6 16 -35 36 -64 70\n-105 130 -251 149 -367 11 -68 19 -72 161 -72 69 0 134 5 145 10 15 9 19 22\n19 68 0 84 16 129 50 147 44 23 78 19 111 -14 l29 -29 0 -275 0 -275 -31 -26\nc-41 -35 -83 -34 -120 3 -27 27 -29 35 -29 105 0 103 -5 106 -171 106 -148 0\n-150 -1 -169 -100 -23 -123 -65 -218 -170 -386 -15 -23 -12 -26 90 -129 57\n-58 109 -105 114 -105 5 0 35 25 67 55 54 52 73 60 124 55 48 -5 82 -64 65\n-114 -12 -37 -352 -380 -391 -395 -48 -18 -93 3 -114 53 -18 43 -3 82 55 141\n27 28 50 55 50 60 0 13 -202 215 -215 215 -6 0 -30 -14 -55 -31 -109 -74 -264\n-138 -373 -154 -70 -11 -77 -26 -77 -170 0 -160 3 -165 110 -165 75 0 79 -1\n104 -31 28 -33 33 -67 14 -102 -24 -46 -29 -46 -320 -47 l-276 0 -26 31 c-35\n41 -34 83 3 120 27 27 35 29 102 29 107 0 109 3 109 166 0 152 -3 158 -76 169\n-110 16 -264 80 -374 154 -25 17 -49 31 -55 31 -20 0 -205 -194 -205 -215 0\n-12 19 -39 41 -60 69 -66 82 -121 40 -169 -25 -28 -60 -38 -95 -26 -20 6 -99\n77 -214 193 -179 180 -182 184 -182 226 0 57 33 91 90 91 35 0 48 -7 100 -55\n33 -30 63 -55 67 -55 13 0 213 204 213 216 0 7 -16 36 -36 65 -70 105 -130\n251 -149 367 -11 68 -19 72 -163 72 -168 0 -172 -3 -172 -110 0 -75 -1 -79\n-31 -104 -33 -28 -67 -33 -102 -14 -46 24 -46 29 -47 320 l0 276 31 26 c41 35\n83 34 120 -3 27 -27 29 -35 29 -102 0 -107 3 -109 164 -109 72 0 137 4 144 9\n7 4 22 47 32 94 25 114 69 220 130 316 27 43 50 82 50 88 0 10 -203 213 -214\n213 -4 0 -31 -22 -59 -49 -78 -74 -122 -85 -171 -42 -28 25 -38 60 -26 95 12\n37 352 380 391 395 62 23 119 -21 119 -91 0 -34 -7 -47 -55 -97 -30 -32 -55\n-62 -55 -67 0 -14 203 -214 218 -214 6 0 34 16 61 35 76 55 208 112 321 140\n57 13 107 30 112 37 4 7 8 69 8 138 0 165 -3 170 -110 170 -75 0 -79 1 -104\n31 -28 33 -33 67 -14 102 24 46 29 46 320 47 l276 0 26 -31z"}})])])},X=[],Y={},Z=Object(d["a"])(Y,Q,X,!1,null,null,null),tt=Z.exports;a["a"].use(W["a"]);var et=new W["a"]({theme:{dark:!0,themes:{dark:{primary:"#161B1E",secondary:"#EBEEF1",success:"#A3E77C",error:"#EF5350",info:"#045D56",warning:"#FFB16C",accent:"#B15DFF",background:"#273136"},light:{primary:"#005EFF",secondary:"#EBEEF1",success:"#009688",error:"#FF0F50",info:"#37C948",warning:"#FF5722",accent:"#1BCFF3",background:"#F5F5F5"}}},icons:{values:{covid_icon:{component:tt}}}});a["a"].config.productionTip=!1,new a["a"]({store:H,vuetify:et,render:function(t){return t(j)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.f68c2cda.js.map