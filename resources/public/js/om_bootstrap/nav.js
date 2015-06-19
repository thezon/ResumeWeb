// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.nav');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('clojure.string');
om_bootstrap.nav.NavItem = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str], true, false));

var component_fnk__15633__auto___23159 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema23137 = schema.core.Any;
var input_schema23138 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map23136","map23136",-403720778,null))], null);
var input_checker23139 = schema.core.checker.call(null,input_schema23138);
var output_checker23140 = schema.core.checker.call(null,output_schema23137);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema23137,input_schema23138,input_checker23139,output_checker23140){
return (function om_bootstrap$nav$constructor23134(G__23141){
var validate__9701__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___23160 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23141], null);
var temp__4126__auto___23161 = input_checker23139.call(null,args__9702__auto___23160);
if(cljs.core.truth_(temp__4126__auto___23161)){
var error__9703__auto___23162 = temp__4126__auto___23161;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor23134","constructor23134",-1335641319,null),cljs.core.pr_str.call(null,error__9703__auto___23162)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___23162,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___23160,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23138,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var map23136 = G__23141;
while(true){
if(cljs.core.map_QMARK_.call(null,map23136)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map23136)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map23136,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.nav.t23147 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.nav.t23147 = (function (owner,output_checker23140,input_checker23139,G__23141,validate__9701__auto__,input_schema23138,map23136,constructor23134,ufv__,output_schema23137,meta23148){
this.owner = owner;
this.output_checker23140 = output_checker23140;
this.input_checker23139 = input_checker23139;
this.G__23141 = G__23141;
this.validate__9701__auto__ = validate__9701__auto__;
this.input_schema23138 = input_schema23138;
this.map23136 = map23136;
this.constructor23134 = constructor23134;
this.ufv__ = ufv__;
this.output_schema23137 = output_schema23137;
this.meta23148 = meta23148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t23147.prototype.om$core$IDisplayName$ = true;

om_bootstrap.nav.t23147.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__9701__auto__,ufv__,output_schema23137,input_schema23138,input_checker23139,output_checker23140){
return (function (_){
var self__ = this;
var ___$1 = this;
return "nav-item*";
});})(owner,validate__9701__auto__,ufv__,output_schema23137,input_schema23138,input_checker23139,output_checker23140))
;

om_bootstrap.nav.t23147.prototype.om$core$IRender$ = true;

om_bootstrap.nav.t23147.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__9701__auto__,ufv__,output_schema23137,input_schema23138,input_checker23139,output_checker23140){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__23150 = om.core.get_props.call(null,self__.owner);
var map__23150__$1 = ((cljs.core.seq_QMARK_.call(null,map__23150))?cljs.core.apply.call(null,cljs.core.hash_map,map__23150):map__23150);
var children = cljs.core.get.call(null,map__23150__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__23150__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var vec__23151 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__23151,(0),null);
var props = cljs.core.nth.call(null,vec__23151,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__23150,map__23150__$1,children,opts,vec__23151,bs,props,classes,___$1,owner,validate__9701__auto__,ufv__,output_schema23137,input_schema23138,input_checker23139,output_checker23140){
return (function (e){
var temp__4126__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
e.preventDefault();

if(cljs.core.truth_(new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs))){
return null;
} else {
return f.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs));
}
} else {
return null;
}
});})(map__23150,map__23150__$1,children,opts,vec__23151,bs,props,classes,___$1,owner,validate__9701__auto__,ufv__,output_schema23137,input_schema23138,input_checker23139,output_checker23140))
;
return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.a,{"onClick": om_tools.dom.format_opts.call(null,handle_click), "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "ref": "anchor", "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null)));
});})(owner,validate__9701__auto__,ufv__,output_schema23137,input_schema23138,input_checker23139,output_checker23140))
;

om_bootstrap.nav.t23147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__9701__auto__,ufv__,output_schema23137,input_schema23138,input_checker23139,output_checker23140){
return (function (_23149){
var self__ = this;
var _23149__$1 = this;
return self__.meta23148;
});})(owner,validate__9701__auto__,ufv__,output_schema23137,input_schema23138,input_checker23139,output_checker23140))
;

om_bootstrap.nav.t23147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__9701__auto__,ufv__,output_schema23137,input_schema23138,input_checker23139,output_checker23140){
return (function (_23149,meta23148__$1){
var self__ = this;
var _23149__$1 = this;
return (new om_bootstrap.nav.t23147(self__.owner,self__.output_checker23140,self__.input_checker23139,self__.G__23141,self__.validate__9701__auto__,self__.input_schema23138,self__.map23136,self__.constructor23134,self__.ufv__,self__.output_schema23137,meta23148__$1));
});})(owner,validate__9701__auto__,ufv__,output_schema23137,input_schema23138,input_checker23139,output_checker23140))
;

om_bootstrap.nav.t23147.cljs$lang$type = true;

om_bootstrap.nav.t23147.cljs$lang$ctorStr = "om-bootstrap.nav/t23147";

om_bootstrap.nav.t23147.cljs$lang$ctorPrWriter = ((function (owner,validate__9701__auto__,ufv__,output_schema23137,input_schema23138,input_checker23139,output_checker23140){
return (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"om-bootstrap.nav/t23147");
});})(owner,validate__9701__auto__,ufv__,output_schema23137,input_schema23138,input_checker23139,output_checker23140))
;

om_bootstrap.nav.__GT_t23147 = ((function (owner,validate__9701__auto__,ufv__,output_schema23137,input_schema23138,input_checker23139,output_checker23140){
return (function om_bootstrap$nav$constructor23134_$___GT_t23147(owner__$1,output_checker23140__$1,input_checker23139__$1,G__23141__$1,validate__9701__auto____$1,input_schema23138__$1,map23136__$1,constructor23134__$1,ufv____$1,output_schema23137__$1,meta23148){
return (new om_bootstrap.nav.t23147(owner__$1,output_checker23140__$1,input_checker23139__$1,G__23141__$1,validate__9701__auto____$1,input_schema23138__$1,map23136__$1,constructor23134__$1,ufv____$1,output_schema23137__$1,meta23148));
});})(owner,validate__9701__auto__,ufv__,output_schema23137,input_schema23138,input_checker23139,output_checker23140))
;

}

return (new om_bootstrap.nav.t23147(owner,output_checker23140,input_checker23139,G__23141,validate__9701__auto__,input_schema23138,map23136,om_bootstrap$nav$constructor23134,ufv__,output_schema23137,null));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___23163 = output_checker23140.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___23163)){
var error__9703__auto___23164 = temp__4126__auto___23163;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor23134","constructor23134",-1335641319,null),cljs.core.pr_str.call(null,error__9703__auto___23164)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___23164,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23137,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv__,output_schema23137,input_schema23138,input_checker23139,output_checker23140))
,schema.core.make_fn_schema.call(null,output_schema23137,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23138], null)));
})();
/**
 * Generates a nav item for use inside of a nav element.
 */
om_bootstrap.nav.nav_item_STAR_ = ((function (component_fnk__15633__auto___23159){
return (function om_bootstrap$nav$nav_item_STAR_(){
var argseq__4999__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.nav.nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4999__auto__);
});})(component_fnk__15633__auto___23159))
;

om_bootstrap.nav.nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__15633__auto___23159){
return (function (data__15634__auto__,owner23133,p__23155){
var vec__23156 = p__23155;
var opts__15635__auto__ = cljs.core.nth.call(null,vec__23156,(0),null);
return component_fnk__15633__auto___23159.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15635__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner23133,new cljs.core.Keyword(null,"data","data",-232669377),data__15634__auto__], null));
});})(component_fnk__15633__auto___23159))
;

om_bootstrap.nav.nav_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.nav.nav_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__15633__auto___23159){
return (function (seq23152){
var G__23153 = cljs.core.first.call(null,seq23152);
var seq23152__$1 = cljs.core.next.call(null,seq23152);
var G__23154 = cljs.core.first.call(null,seq23152__$1);
var seq23152__$2 = cljs.core.next.call(null,seq23152__$1);
return om_bootstrap.nav.nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23153,G__23154,seq23152__$2);
});})(component_fnk__15633__auto___23159))
;

om_bootstrap.nav.__GT_nav_item_STAR_ = (function om_bootstrap$nav$__GT_nav_item_STAR_(){
var G__23158 = arguments.length;
switch (G__23158) {
case 1:
return om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__15602__auto__){
return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__15602__auto__);
});

om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__15602__auto__,m23135){
return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__15602__auto__,m23135);
});

om_bootstrap.nav.__GT_nav_item_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___23174 = schema.utils.use_fn_validation;
var output_schema23166_23175 = om_bootstrap.types.Component;
var input_schema23167_23176 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker23168_23177 = schema.core.checker.call(null,input_schema23167_23176);
var output_checker23169_23178 = schema.core.checker.call(null,output_schema23166_23175);
/**
 * Inputs: [opts :- NavItem & children]
 * Returns: t/Component
 */
om_bootstrap.nav.nav_item = ((function (ufv___23174,output_schema23166_23175,input_schema23167_23176,input_checker23168_23177,output_checker23169_23178){
return (function om_bootstrap$nav$nav_item(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.nav.nav_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___23174,output_schema23166_23175,input_schema23167_23176,input_checker23168_23177,output_checker23169_23178))
;

om_bootstrap.nav.nav_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___23174,output_schema23166_23175,input_schema23167_23176,input_checker23168_23177,output_checker23169_23178){
return (function (G__23170,rest23171){
var validate__9701__auto__ = ufv___23174.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___23179 = cljs.core.list_STAR_.call(null,G__23170,rest23171);
var temp__4126__auto___23180 = input_checker23168_23177.call(null,args__9702__auto___23179);
if(cljs.core.truth_(temp__4126__auto___23180)){
var error__9703__auto___23181 = temp__4126__auto___23180;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),cljs.core.pr_str.call(null,error__9703__auto___23181)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___23181,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___23179,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23167_23176,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__23170;
var children = rest23171;
while(true){
return om_bootstrap.nav.__GT_nav_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___23182 = output_checker23169_23178.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___23182)){
var error__9703__auto___23183 = temp__4126__auto___23182;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),cljs.core.pr_str.call(null,error__9703__auto___23183)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___23183,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23166_23175,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___23174,output_schema23166_23175,input_schema23167_23176,input_checker23168_23177,output_checker23169_23178))
;

om_bootstrap.nav.nav_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.nav.nav_item.cljs$lang$applyTo = ((function (ufv___23174,output_schema23166_23175,input_schema23167_23176,input_checker23168_23177,output_checker23169_23178){
return (function (seq23172){
var G__23173 = cljs.core.first.call(null,seq23172);
var seq23172__$1 = cljs.core.next.call(null,seq23172);
return om_bootstrap.nav.nav_item.cljs$core$IFn$_invoke$arity$variadic(G__23173,seq23172__$1);
});})(ufv___23174,output_schema23166_23175,input_schema23167_23176,input_checker23168_23177,output_checker23169_23178))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav_item),schema.core.make_fn_schema.call(null,output_schema23166_23175,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23167_23176], null)));
om_bootstrap.nav.Nav = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"stacked?","stacked?",784188446)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-key","active-key",-2039404654)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-href","active-href",-1458344709)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"navbar?","navbar?",2085313828)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)],[schema.core.Bool,schema.core.either.call(null,schema.core.Str,schema.core.Num),schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,schema.core.Bool,schema.core.enum$.call(null,"tabs","pills")]));
var ufv___23190 = schema.utils.use_fn_validation;
var output_schema23184_23191 = schema.core.Bool;
var input_schema23185_23192 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child-props","child-props",1099812184,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_checker23186_23193 = schema.core.checker.call(null,input_schema23185_23192);
var output_checker23187_23194 = schema.core.checker.call(null,output_schema23184_23191);
/**
 * Inputs: [child-props opts]
 * Returns: s/Bool
 * 
 * Accepts a NavItem's child props and the current options provided to
 * the Nav bar; returns true if the child component should be active,
 * false otherwise.
 */
om_bootstrap.nav.child_active_QMARK_ = ((function (ufv___23190,output_schema23184_23191,input_schema23185_23192,input_checker23186_23193,output_checker23187_23194){
return (function om_bootstrap$nav$child_active_QMARK_(G__23188,G__23189){
var validate__9701__auto__ = ufv___23190.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___23195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23188,G__23189], null);
var temp__4126__auto___23196 = input_checker23186_23193.call(null,args__9702__auto___23195);
if(cljs.core.truth_(temp__4126__auto___23196)){
var error__9703__auto___23197 = temp__4126__auto___23196;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),cljs.core.pr_str.call(null,error__9703__auto___23197)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___23197,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___23195,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23185_23192,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var child_props = G__23188;
var opts = G__23189;
while(true){
return cljs.core.boolean$.call(null,(function (){var or__3959__auto__ = new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(child_props);
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"active-key","active-key",-2039404654).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4126__auto__)){
var ak = temp__4126__auto__;
return cljs.core._EQ_.call(null,ak,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(child_props));
} else {
return null;
}
})();
if(cljs.core.truth_(or__3959__auto____$1)){
return or__3959__auto____$1;
} else {
var temp__4126__auto__ = new cljs.core.Keyword(null,"active-href","active-href",-1458344709).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4126__auto__)){
var ak = temp__4126__auto__;
return cljs.core._EQ_.call(null,ak,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(child_props));
} else {
return null;
}
}
}
})());
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___23198 = output_checker23187_23194.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___23198)){
var error__9703__auto___23199 = temp__4126__auto___23198;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),cljs.core.pr_str.call(null,error__9703__auto___23199)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___23199,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23184_23191,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___23190,output_schema23184_23191,input_schema23185_23192,input_checker23186_23193,output_checker23187_23194))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.child_active_QMARK_),schema.core.make_fn_schema.call(null,output_schema23184_23191,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23185_23192], null)));
var ufv___23205 = schema.utils.use_fn_validation;
var output_schema23200_23206 = schema.core.Any;
var input_schema23201_23207 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_checker23202_23208 = schema.core.checker.call(null,input_schema23201_23207);
var output_checker23203_23209 = schema.core.checker.call(null,output_schema23200_23206);
/**
 * Inputs: [opts]
 * 
 * Takes the options supplied to the top level nav and returns a
 * function that will CLONE the inner nav items, transferring all
 * relevant props from the outer code to the inner code.
 */
om_bootstrap.nav.clone_nav_item = ((function (ufv___23205,output_schema23200_23206,input_schema23201_23207,input_checker23202_23208,output_checker23203_23209){
return (function om_bootstrap$nav$clone_nav_item(G__23204){
var validate__9701__auto__ = ufv___23205.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___23210 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23204], null);
var temp__4126__auto___23211 = input_checker23202_23208.call(null,args__9702__auto___23210);
if(cljs.core.truth_(temp__4126__auto___23211)){
var error__9703__auto___23212 = temp__4126__auto___23211;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__9703__auto___23212)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___23212,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___23210,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23201_23207,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__23204;
while(true){
var prop_fn = ((function (validate__9701__auto__,ufv___23205,output_schema23200_23206,input_schema23201_23207,input_checker23202_23208,output_checker23203_23209){
return (function om_bootstrap$nav$clone_nav_item_$_prop_fn(props){
var base = cljs.core.assoc.call(null,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"active-key","active-key",-2039404654),new cljs.core.Keyword(null,"active-href","active-href",-1458344709)], null)),new cljs.core.Keyword(null,"active?","active?",459499776),om_bootstrap.nav.child_active_QMARK_.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props),opts),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),true);
return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});})(validate__9701__auto__,ufv___23205,output_schema23200_23206,input_schema23201_23207,input_checker23202_23208,output_checker23203_23209))
;
return ((function (validate__9701__auto__,ufv___23205,output_schema23200_23206,input_schema23201_23207,input_checker23202_23208,output_checker23203_23209){
return (function (child){
return om_bootstrap.util.clone_with_props.call(null,child,prop_fn);
});
;})(validate__9701__auto__,ufv___23205,output_schema23200_23206,input_schema23201_23207,input_checker23202_23208,output_checker23203_23209))
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___23213 = output_checker23203_23209.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___23213)){
var error__9703__auto___23214 = temp__4126__auto___23213;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__9703__auto___23214)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___23214,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23200_23206,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___23205,output_schema23200_23206,input_schema23201_23207,input_checker23202_23208,output_checker23203_23209))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.clone_nav_item),schema.core.make_fn_schema.call(null,output_schema23200_23206,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23201_23207], null)));

var component_fnk__15633__auto___23241 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema23219 = schema.core.Any;
var input_schema23220 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map23218","map23218",2067506504,null))], null);
var input_checker23221 = schema.core.checker.call(null,input_schema23220);
var output_checker23222 = schema.core.checker.call(null,output_schema23219);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema23219,input_schema23220,input_checker23221,output_checker23222){
return (function om_bootstrap$nav$constructor23216(G__23223){
var validate__9701__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___23242 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23223], null);
var temp__4126__auto___23243 = input_checker23221.call(null,args__9702__auto___23242);
if(cljs.core.truth_(temp__4126__auto___23243)){
var error__9703__auto___23244 = temp__4126__auto___23243;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor23216","constructor23216",-2064888440,null),cljs.core.pr_str.call(null,error__9703__auto___23244)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___23244,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___23242,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23220,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var map23218 = G__23223;
while(true){
if(cljs.core.map_QMARK_.call(null,map23218)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map23218)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map23218,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.nav.t23229 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.nav.t23229 = (function (owner,map23218,constructor23216,validate__9701__auto__,G__23223,output_checker23222,input_checker23221,input_schema23220,output_schema23219,ufv__,meta23230){
this.owner = owner;
this.map23218 = map23218;
this.constructor23216 = constructor23216;
this.validate__9701__auto__ = validate__9701__auto__;
this.G__23223 = G__23223;
this.output_checker23222 = output_checker23222;
this.input_checker23221 = input_checker23221;
this.input_schema23220 = input_schema23220;
this.output_schema23219 = output_schema23219;
this.ufv__ = ufv__;
this.meta23230 = meta23230;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t23229.prototype.om$core$IDisplayName$ = true;

om_bootstrap.nav.t23229.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__9701__auto__,ufv__,output_schema23219,input_schema23220,input_checker23221,output_checker23222){
return (function (_){
var self__ = this;
var ___$1 = this;
return "nav*";
});})(owner,validate__9701__auto__,ufv__,output_schema23219,input_schema23220,input_checker23221,output_checker23222))
;

om_bootstrap.nav.t23229.prototype.om$core$IRender$ = true;

om_bootstrap.nav.t23229.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__9701__auto__,ufv__,output_schema23219,input_schema23220,input_checker23221,output_checker23222){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__23232 = om.core.get_props.call(null,self__.owner);
var map__23232__$1 = ((cljs.core.seq_QMARK_.call(null,map__23232))?cljs.core.apply.call(null,cljs.core.hash_map,map__23232):map__23232);
var children = cljs.core.get.call(null,map__23232__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__23232__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var vec__23233 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.Nav,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),true,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"nav"], null));
var bs = cljs.core.nth.call(null,vec__23233,(0),null);
var props = cljs.core.nth.call(null,vec__23233,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navbar-collapse","navbar-collapse",-2134296568),new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"collapse","collapse",-1218136136),cljs.core.not.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"ul",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nav-stacked","nav-stacked",529598925),new cljs.core.Keyword(null,"stacked?","stacked?",784188446).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"nav-justified","nav-justified",-1119443678),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-nav","navbar-nav",1173290557),new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null)))], null);
var children__$1 = cljs.core.map.call(null,om_bootstrap.nav.clone_nav_item.call(null,opts),children);
if(cljs.core.truth_((function (){var and__3947__auto__ = new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(and__3947__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return and__3947__auto__;
}
})())){
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_props),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
} else {
return om_tools.dom.element.call(null,React.DOM.nav,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.ul,ul_props,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)))],null)));
}
});})(owner,validate__9701__auto__,ufv__,output_schema23219,input_schema23220,input_checker23221,output_checker23222))
;

om_bootstrap.nav.t23229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__9701__auto__,ufv__,output_schema23219,input_schema23220,input_checker23221,output_checker23222){
return (function (_23231){
var self__ = this;
var _23231__$1 = this;
return self__.meta23230;
});})(owner,validate__9701__auto__,ufv__,output_schema23219,input_schema23220,input_checker23221,output_checker23222))
;

om_bootstrap.nav.t23229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__9701__auto__,ufv__,output_schema23219,input_schema23220,input_checker23221,output_checker23222){
return (function (_23231,meta23230__$1){
var self__ = this;
var _23231__$1 = this;
return (new om_bootstrap.nav.t23229(self__.owner,self__.map23218,self__.constructor23216,self__.validate__9701__auto__,self__.G__23223,self__.output_checker23222,self__.input_checker23221,self__.input_schema23220,self__.output_schema23219,self__.ufv__,meta23230__$1));
});})(owner,validate__9701__auto__,ufv__,output_schema23219,input_schema23220,input_checker23221,output_checker23222))
;

om_bootstrap.nav.t23229.cljs$lang$type = true;

om_bootstrap.nav.t23229.cljs$lang$ctorStr = "om-bootstrap.nav/t23229";

om_bootstrap.nav.t23229.cljs$lang$ctorPrWriter = ((function (owner,validate__9701__auto__,ufv__,output_schema23219,input_schema23220,input_checker23221,output_checker23222){
return (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"om-bootstrap.nav/t23229");
});})(owner,validate__9701__auto__,ufv__,output_schema23219,input_schema23220,input_checker23221,output_checker23222))
;

om_bootstrap.nav.__GT_t23229 = ((function (owner,validate__9701__auto__,ufv__,output_schema23219,input_schema23220,input_checker23221,output_checker23222){
return (function om_bootstrap$nav$constructor23216_$___GT_t23229(owner__$1,map23218__$1,constructor23216__$1,validate__9701__auto____$1,G__23223__$1,output_checker23222__$1,input_checker23221__$1,input_schema23220__$1,output_schema23219__$1,ufv____$1,meta23230){
return (new om_bootstrap.nav.t23229(owner__$1,map23218__$1,constructor23216__$1,validate__9701__auto____$1,G__23223__$1,output_checker23222__$1,input_checker23221__$1,input_schema23220__$1,output_schema23219__$1,ufv____$1,meta23230));
});})(owner,validate__9701__auto__,ufv__,output_schema23219,input_schema23220,input_checker23221,output_checker23222))
;

}

return (new om_bootstrap.nav.t23229(owner,map23218,om_bootstrap$nav$constructor23216,validate__9701__auto__,G__23223,output_checker23222,input_checker23221,input_schema23220,output_schema23219,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___23245 = output_checker23222.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___23245)){
var error__9703__auto___23246 = temp__4126__auto___23245;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor23216","constructor23216",-2064888440,null),cljs.core.pr_str.call(null,error__9703__auto___23246)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___23246,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23219,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv__,output_schema23219,input_schema23220,input_checker23221,output_checker23222))
,schema.core.make_fn_schema.call(null,output_schema23219,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23220], null)));
})();
om_bootstrap.nav.nav_STAR_ = ((function (component_fnk__15633__auto___23241){
return (function om_bootstrap$nav$nav_STAR_(){
var argseq__4999__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.nav.nav_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4999__auto__);
});})(component_fnk__15633__auto___23241))
;

om_bootstrap.nav.nav_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__15633__auto___23241){
return (function (data__15634__auto__,owner23215,p__23237){
var vec__23238 = p__23237;
var opts__15635__auto__ = cljs.core.nth.call(null,vec__23238,(0),null);
return component_fnk__15633__auto___23241.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15635__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner23215,new cljs.core.Keyword(null,"data","data",-232669377),data__15634__auto__], null));
});})(component_fnk__15633__auto___23241))
;

om_bootstrap.nav.nav_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.nav.nav_STAR_.cljs$lang$applyTo = ((function (component_fnk__15633__auto___23241){
return (function (seq23234){
var G__23235 = cljs.core.first.call(null,seq23234);
var seq23234__$1 = cljs.core.next.call(null,seq23234);
var G__23236 = cljs.core.first.call(null,seq23234__$1);
var seq23234__$2 = cljs.core.next.call(null,seq23234__$1);
return om_bootstrap.nav.nav_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23235,G__23236,seq23234__$2);
});})(component_fnk__15633__auto___23241))
;

om_bootstrap.nav.__GT_nav_STAR_ = (function om_bootstrap$nav$__GT_nav_STAR_(){
var G__23240 = arguments.length;
switch (G__23240) {
case 1:
return om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__15602__auto__){
return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__15602__auto__);
});

om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__15602__auto__,m23217){
return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__15602__auto__,m23217);
});

om_bootstrap.nav.__GT_nav_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___23256 = schema.utils.use_fn_validation;
var output_schema23248_23257 = om_bootstrap.types.Component;
var input_schema23249_23258 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.Nav,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker23250_23259 = schema.core.checker.call(null,input_schema23249_23258);
var output_checker23251_23260 = schema.core.checker.call(null,output_schema23248_23257);
/**
 * Inputs: [opts :- Nav & children]
 * Returns: t/Component
 */
om_bootstrap.nav.nav = ((function (ufv___23256,output_schema23248_23257,input_schema23249_23258,input_checker23250_23259,output_checker23251_23260){
return (function om_bootstrap$nav$nav(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.nav.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___23256,output_schema23248_23257,input_schema23249_23258,input_checker23250_23259,output_checker23251_23260))
;

om_bootstrap.nav.nav.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___23256,output_schema23248_23257,input_schema23249_23258,input_checker23250_23259,output_checker23251_23260){
return (function (G__23252,rest23253){
var validate__9701__auto__ = ufv___23256.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___23261 = cljs.core.list_STAR_.call(null,G__23252,rest23253);
var temp__4126__auto___23262 = input_checker23250_23259.call(null,args__9702__auto___23261);
if(cljs.core.truth_(temp__4126__auto___23262)){
var error__9703__auto___23263 = temp__4126__auto___23262;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"nav","nav",-1934895292,null),cljs.core.pr_str.call(null,error__9703__auto___23263)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___23263,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___23261,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23249_23258,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__23252;
var children = rest23253;
while(true){
return om_bootstrap.nav.__GT_nav_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___23264 = output_checker23251_23260.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___23264)){
var error__9703__auto___23265 = temp__4126__auto___23264;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"nav","nav",-1934895292,null),cljs.core.pr_str.call(null,error__9703__auto___23265)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___23265,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23248_23257,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___23256,output_schema23248_23257,input_schema23249_23258,input_checker23250_23259,output_checker23251_23260))
;

om_bootstrap.nav.nav.cljs$lang$maxFixedArity = (1);

om_bootstrap.nav.nav.cljs$lang$applyTo = ((function (ufv___23256,output_schema23248_23257,input_schema23249_23258,input_checker23250_23259,output_checker23251_23260){
return (function (seq23254){
var G__23255 = cljs.core.first.call(null,seq23254);
var seq23254__$1 = cljs.core.next.call(null,seq23254);
return om_bootstrap.nav.nav.cljs$core$IFn$_invoke$arity$variadic(G__23255,seq23254__$1);
});})(ufv___23256,output_schema23248_23257,input_schema23249_23258,input_checker23250_23259,output_checker23251_23260))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav),schema.core.make_fn_schema.call(null,output_schema23248_23257,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23249_23258], null)));
om_bootstrap.nav.NavBar = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"static-top?","static-top?",558714465)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"role","role",-736691072)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"brand","brand",557863343)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037))],[schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,om_bootstrap.types.Renderable,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.Bool,schema.core.Str,schema.core.Bool]));
om_bootstrap.nav.render_toggle_button = (function om_bootstrap$nav$render_toggle_button(owner,bs){
var handle_toggle = (function (){
var temp__4126__auto___23266 = new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto___23266)){
var f_23267 = temp__4126__auto___23266;
om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),true);

f_23267.call(null);

om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),false);
} else {
}

return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582)], null),cljs.core.not);
});
var tb = om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_toggle], null));
return cljs.core.apply.call(null,React.DOM.button,{"onClick": om_tools.dom.format_opts.call(null,handle_toggle), "type": "button", "className": "navbar-toggle"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var or__3959__auto__ = tb;
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span({"key": (0), "className": "sr-only"},"Toggle navigation"),React.DOM.span({"key": (1), "className": "icon-bar"}),React.DOM.span({"key": (2), "className": "icon-bar"}),React.DOM.span({"key": (3), "className": "icon-bar"})], null);
}
})()],null))));
});
var ufv___23273 = schema.utils.use_fn_validation;
var output_schema23268_23274 = schema.core.Bool;
var input_schema23269_23275 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"bs","bs",-906042210,null))], null);
var input_checker23270_23276 = schema.core.checker.call(null,input_schema23269_23275);
var output_checker23271_23277 = schema.core.checker.call(null,output_schema23268_23274);
/**
 * Inputs: [bs]
 * Returns: s/Bool
 * 
 * Returns true if any of the necessary properties are in place to
 * render the navbar-header and toggle button.
 */
om_bootstrap.nav.render_header_and_toggle_btn_QMARK_ = ((function (ufv___23273,output_schema23268_23274,input_schema23269_23275,input_checker23270_23276,output_checker23271_23277){
return (function om_bootstrap$nav$render_header_and_toggle_btn_QMARK_(G__23272){
var validate__9701__auto__ = ufv___23273.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___23278 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23272], null);
var temp__4126__auto___23279 = input_checker23270_23276.call(null,args__9702__auto___23278);
if(cljs.core.truth_(temp__4126__auto___23279)){
var error__9703__auto___23280 = temp__4126__auto___23279;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-header-and-toggle-btn?","render-header-and-toggle-btn?",2136521113,null),cljs.core.pr_str.call(null,error__9703__auto___23280)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___23280,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___23278,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23269_23275,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var bs = G__23272;
while(true){
return cljs.core.boolean$.call(null,(function (){var or__3959__auto__ = new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__3959__auto____$1)){
return or__3959__auto____$1;
} else {
return new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs);
}
}
})());
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___23281 = output_checker23271_23277.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___23281)){
var error__9703__auto___23282 = temp__4126__auto___23281;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-header-and-toggle-btn?","render-header-and-toggle-btn?",2136521113,null),cljs.core.pr_str.call(null,error__9703__auto___23282)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___23282,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23268_23274,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___23273,output_schema23268_23274,input_schema23269_23275,input_checker23270_23276,output_checker23271_23277))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.render_header_and_toggle_btn_QMARK_),schema.core.make_fn_schema.call(null,output_schema23268_23274,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23269_23275], null)));
om_bootstrap.nav.render_header = (function om_bootstrap$nav$render_header(owner,bs){
return cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(om_bootstrap.util.strict_valid_component_QMARK_.call(null,new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs)))?om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-brand"], null)):cljs.core.apply.call(null,React.DOM.span,{"className": "navbar-brand"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs)],null))))),(cljs.core.truth_(om_bootstrap.nav.render_header_and_toggle_btn_QMARK_.call(null,bs))?om_bootstrap.nav.render_toggle_button.call(null,owner,bs):null)],null))));
});
om_bootstrap.nav.render_navbar_child = (function om_bootstrap$nav$render_navbar_child(owner,child,bs){
var f = (function (props){
var opts = new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props);
var collapsible_QMARK_ = (function (){var or__3959__auto__ = new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
}
})();
var base = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navbar?","navbar?",2085313828),true,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779),collapsible_QMARK_,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),(function (){var and__3947__auto__ = collapsible_QMARK_;
if(cljs.core.truth_(and__3947__auto__)){
var or__3959__auto__ = new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582));
}
} else {
return and__3947__auto__;
}
})()], null);
return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});
return om_bootstrap.util.clone_with_props.call(null,child,f);
});

var component_fnk__15633__auto___23309 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema23289 = schema.core.Any;
var input_schema23290 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map23287","map23287",-438271494,null))], null);
var input_checker23291 = schema.core.checker.call(null,input_schema23290);
var output_checker23292 = schema.core.checker.call(null,output_schema23289);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292){
return (function om_bootstrap$nav$constructor23285(G__23293){
var validate__9701__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___23310 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23293], null);
var temp__4126__auto___23311 = input_checker23291.call(null,args__9702__auto___23310);
if(cljs.core.truth_(temp__4126__auto___23311)){
var error__9703__auto___23312 = temp__4126__auto___23311;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor23285","constructor23285",1349201335,null),cljs.core.pr_str.call(null,error__9703__auto___23312)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___23312,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___23310,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23290,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var map23287 = G__23293;
while(true){
if(cljs.core.map_QMARK_.call(null,map23287)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map23287)));
}

var map23288 = plumbing.fnk.schema.safe_get.call(null,map23287,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map23288,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var children = plumbing.fnk.schema.safe_get.call(null,map23288,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var owner = plumbing.fnk.schema.safe_get.call(null,map23287,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.nav.t23298 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.nav.t23298 = (function (owner,output_checker23292,map23288,children,validate__9701__auto__,input_checker23291,constructor23285,map23287,input_schema23290,output_schema23289,opts,ufv__,G__23293,meta23299){
this.owner = owner;
this.output_checker23292 = output_checker23292;
this.map23288 = map23288;
this.children = children;
this.validate__9701__auto__ = validate__9701__auto__;
this.input_checker23291 = input_checker23291;
this.constructor23285 = constructor23285;
this.map23287 = map23287;
this.input_schema23290 = input_schema23290;
this.output_schema23289 = output_schema23289;
this.opts = opts;
this.ufv__ = ufv__;
this.G__23293 = G__23293;
this.meta23299 = meta23299;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t23298.prototype.om$core$IDisplayName$ = true;

om_bootstrap.nav.t23298.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292){
return (function (_){
var self__ = this;
var ___$1 = this;
return "navbar*";
});})(owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292))
;

om_bootstrap.nav.t23298.prototype.om$core$IRender$ = true;

om_bootstrap.nav.t23298.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292){
return (function (_){
var self__ = this;
var ___$1 = this;
var vec__23301 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavBar,self__.opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"navbar",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"role","role",-736691072),"navigation",new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),((function (___$1,owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292){
return (function() { 
var G__23313__delegate = function (opts__$1,c){
return om_tools.dom.element.call(null,React.DOM.nav,opts__$1,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)));
};
var G__23313 = function (opts__$1,var_args){
var c = null;
if (arguments.length > 1) {
var G__23314__i = 0, G__23314__a = new Array(arguments.length -  1);
while (G__23314__i < G__23314__a.length) {G__23314__a[G__23314__i] = arguments[G__23314__i + 1]; ++G__23314__i;}
  c = new cljs.core.IndexedSeq(G__23314__a,0);
} 
return G__23313__delegate.call(this,opts__$1,c);};
G__23313.cljs$lang$maxFixedArity = 1;
G__23313.cljs$lang$applyTo = (function (arglist__23315){
var opts__$1 = cljs.core.first(arglist__23315);
var c = cljs.core.rest(arglist__23315);
return G__23313__delegate(opts__$1,c);
});
G__23313.cljs$core$IFn$_invoke$arity$variadic = G__23313__delegate;
return G__23313;
})()
;})(___$1,owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292))
], null));
var bs = cljs.core.nth.call(null,vec__23301,(0),null);
var props = cljs.core.nth.call(null,vec__23301,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.Keyword(null,"navbar-fixed-top","navbar-fixed-top",-1597835234),new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-fixed-bottom","navbar-fixed-bottom",202995425),new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-static-top","navbar-static-top",-1901902571),new cljs.core.Keyword(null,"static-top?","static-top?",558714465).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-inverse","navbar-inverse",1370996983),new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987).cljs$core$IFn$_invoke$arity$1(bs));
return new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(bs).call(null,om_bootstrap.util.merge_props.call(null,cljs.core.merge.call(null,bs,props),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"fluid","fluid",-1823657759).cljs$core$IFn$_invoke$arity$1(props))?"container-fluid":"container"))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(om_bootstrap.nav.render_header_and_toggle_btn_QMARK_.call(null,bs))?om_bootstrap.nav.render_header.call(null,self__.owner,bs):null),cljs.core.map.call(null,((function (vec__23301,bs,props,classes,___$1,owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292){
return (function (p1__23283_SHARP_){
return om_bootstrap.nav.render_navbar_child.call(null,self__.owner,p1__23283_SHARP_,bs);
});})(vec__23301,bs,props,classes,___$1,owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292))
,self__.children)],null)))));
});})(owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292))
;

om_bootstrap.nav.t23298.prototype.om$core$IShouldUpdate$ = true;

om_bootstrap.nav.t23298.prototype.om$core$IShouldUpdate$should_update$arity$3 = ((function (owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292){
return (function (_,___$1,next_state){
var self__ = this;
var ___$2 = this;
return cljs.core.not.call(null,new cljs.core.Keyword(null,"changing?","changing?",1855217746).cljs$core$IFn$_invoke$arity$1(next_state));
});})(owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292))
;

om_bootstrap.nav.t23298.prototype.om$core$IInitState$ = true;

om_bootstrap.nav.t23298.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582),new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"changing?","changing?",1855217746),false], null);
});})(owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292))
;

om_bootstrap.nav.t23298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292){
return (function (_23300){
var self__ = this;
var _23300__$1 = this;
return self__.meta23299;
});})(owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292))
;

om_bootstrap.nav.t23298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292){
return (function (_23300,meta23299__$1){
var self__ = this;
var _23300__$1 = this;
return (new om_bootstrap.nav.t23298(self__.owner,self__.output_checker23292,self__.map23288,self__.children,self__.validate__9701__auto__,self__.input_checker23291,self__.constructor23285,self__.map23287,self__.input_schema23290,self__.output_schema23289,self__.opts,self__.ufv__,self__.G__23293,meta23299__$1));
});})(owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292))
;

om_bootstrap.nav.t23298.cljs$lang$type = true;

om_bootstrap.nav.t23298.cljs$lang$ctorStr = "om-bootstrap.nav/t23298";

om_bootstrap.nav.t23298.cljs$lang$ctorPrWriter = ((function (owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292){
return (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"om-bootstrap.nav/t23298");
});})(owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292))
;

om_bootstrap.nav.__GT_t23298 = ((function (owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292){
return (function om_bootstrap$nav$constructor23285_$___GT_t23298(owner__$1,output_checker23292__$1,map23288__$1,children__$1,validate__9701__auto____$1,input_checker23291__$1,constructor23285__$1,map23287__$1,input_schema23290__$1,output_schema23289__$1,opts__$1,ufv____$1,G__23293__$1,meta23299){
return (new om_bootstrap.nav.t23298(owner__$1,output_checker23292__$1,map23288__$1,children__$1,validate__9701__auto____$1,input_checker23291__$1,constructor23285__$1,map23287__$1,input_schema23290__$1,output_schema23289__$1,opts__$1,ufv____$1,G__23293__$1,meta23299));
});})(owner,children,opts,map23288,validate__9701__auto__,ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292))
;

}

return (new om_bootstrap.nav.t23298(owner,output_checker23292,map23288,children,validate__9701__auto__,input_checker23291,om_bootstrap$nav$constructor23285,map23287,input_schema23290,output_schema23289,opts,ufv__,G__23293,null));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___23316 = output_checker23292.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___23316)){
var error__9703__auto___23317 = temp__4126__auto___23316;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor23285","constructor23285",1349201335,null),cljs.core.pr_str.call(null,error__9703__auto___23317)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___23317,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23289,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv__,output_schema23289,input_schema23290,input_checker23291,output_checker23292))
,schema.core.make_fn_schema.call(null,output_schema23289,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23290], null)));
})();
om_bootstrap.nav.navbar_STAR_ = ((function (component_fnk__15633__auto___23309){
return (function om_bootstrap$nav$navbar_STAR_(){
var argseq__4999__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.nav.navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4999__auto__);
});})(component_fnk__15633__auto___23309))
;

om_bootstrap.nav.navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__15633__auto___23309){
return (function (data__15634__auto__,owner23284,p__23305){
var vec__23306 = p__23305;
var opts__15635__auto__ = cljs.core.nth.call(null,vec__23306,(0),null);
return component_fnk__15633__auto___23309.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15635__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner23284,new cljs.core.Keyword(null,"data","data",-232669377),data__15634__auto__], null));
});})(component_fnk__15633__auto___23309))
;

om_bootstrap.nav.navbar_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.nav.navbar_STAR_.cljs$lang$applyTo = ((function (component_fnk__15633__auto___23309){
return (function (seq23302){
var G__23303 = cljs.core.first.call(null,seq23302);
var seq23302__$1 = cljs.core.next.call(null,seq23302);
var G__23304 = cljs.core.first.call(null,seq23302__$1);
var seq23302__$2 = cljs.core.next.call(null,seq23302__$1);
return om_bootstrap.nav.navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23303,G__23304,seq23302__$2);
});})(component_fnk__15633__auto___23309))
;

om_bootstrap.nav.__GT_navbar_STAR_ = (function om_bootstrap$nav$__GT_navbar_STAR_(){
var G__23308 = arguments.length;
switch (G__23308) {
case 1:
return om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__15602__auto__){
return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__15602__auto__);
});

om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__15602__auto__,m23286){
return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__15602__auto__,m23286);
});

om_bootstrap.nav.__GT_navbar_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___23327 = schema.utils.use_fn_validation;
var output_schema23319_23328 = schema.core.Any;
var input_schema23320_23329 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavBar,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker23321_23330 = schema.core.checker.call(null,input_schema23320_23329);
var output_checker23322_23331 = schema.core.checker.call(null,output_schema23319_23328);
/**
 * Inputs: [opts :- NavBar & children]
 */
om_bootstrap.nav.navbar = ((function (ufv___23327,output_schema23319_23328,input_schema23320_23329,input_checker23321_23330,output_checker23322_23331){
return (function om_bootstrap$nav$navbar(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.nav.navbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___23327,output_schema23319_23328,input_schema23320_23329,input_checker23321_23330,output_checker23322_23331))
;

om_bootstrap.nav.navbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___23327,output_schema23319_23328,input_schema23320_23329,input_checker23321_23330,output_checker23322_23331){
return (function (G__23323,rest23324){
var validate__9701__auto__ = ufv___23327.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___23332 = cljs.core.list_STAR_.call(null,G__23323,rest23324);
var temp__4126__auto___23333 = input_checker23321_23330.call(null,args__9702__auto___23332);
if(cljs.core.truth_(temp__4126__auto___23333)){
var error__9703__auto___23334 = temp__4126__auto___23333;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),cljs.core.pr_str.call(null,error__9703__auto___23334)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___23334,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___23332,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23320_23329,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__23323;
var children = rest23324;
while(true){
return om_bootstrap.nav.__GT_navbar_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___23335 = output_checker23322_23331.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___23335)){
var error__9703__auto___23336 = temp__4126__auto___23335;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),cljs.core.pr_str.call(null,error__9703__auto___23336)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___23336,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23319_23328,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___23327,output_schema23319_23328,input_schema23320_23329,input_checker23321_23330,output_checker23322_23331))
;

om_bootstrap.nav.navbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.nav.navbar.cljs$lang$applyTo = ((function (ufv___23327,output_schema23319_23328,input_schema23320_23329,input_checker23321_23330,output_checker23322_23331){
return (function (seq23325){
var G__23326 = cljs.core.first.call(null,seq23325);
var seq23325__$1 = cljs.core.next.call(null,seq23325);
return om_bootstrap.nav.navbar.cljs$core$IFn$_invoke$arity$variadic(G__23326,seq23325__$1);
});})(ufv___23327,output_schema23319_23328,input_schema23320_23329,input_checker23321_23330,output_checker23322_23331))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.navbar),schema.core.make_fn_schema.call(null,output_schema23319_23328,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23320_23329], null)));

//# sourceMappingURL=nav.js.map