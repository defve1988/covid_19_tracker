(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-724d071f"],{8237:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",[i("span",{staticClass:"subtitle-2 text-right error--text"},[t._v(" Chuanlong Zhou © 2020 "),i("span",{staticStyle:{color:"grey"}},[t._v(" | Data Source: "),i("a",{staticStyle:{color:"grey"},attrs:{href:"https://github.com/CSSEGISandData/COVID-19",target:"_blank"}},[t._v(" Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE) ")])])])])},o=[],n={name:"footer_"},a=n,r=i("2877"),c=i("6544"),h=i.n(c),u=(i("a9e3"),i("c7cd"),i("5530")),l=(i("b5b6"),i("8dd9")),p=i("3a66"),f=i("d10f"),d=i("58df"),b=i("80d2"),g=Object(d["a"])(l["a"],Object(p["a"])("footer",["height","inset"]),f["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(u["a"])(Object(u["a"])({},l["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(u["a"])(Object(u["a"])({},l["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(b["f"])(t),left:Object(b["f"])(this.computedLeft),right:Object(b["f"])(this.computedRight),bottom:Object(b["f"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),m=Object(r["a"])(a,s,o,!1,null,null,null);e["default"]=m.exports;h()(m,{VFooter:g})},b5b6:function(t,e,i){}}]);
//# sourceMappingURL=chunk-724d071f.575a1dac.js.map