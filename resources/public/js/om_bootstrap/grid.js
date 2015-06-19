// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.grid');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('om_tools.dom');
goog.require('om_bootstrap.util');
goog.require('om_bootstrap.types');
om_bootstrap.grid.Grid = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fluid?","fluid?",-742121890)),schema.core.Bool], true, false));
om_bootstrap.grid.col_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"md-pull","md-pull",979081250),null,new cljs.core.Keyword(null,"lg","lg",-80787836),null,new cljs.core.Keyword(null,"lg-push","lg-push",606284103),null,new cljs.core.Keyword(null,"sm","sm",-1402575065),null,new cljs.core.Keyword(null,"lg-pull","lg-pull",70082794),null,new cljs.core.Keyword(null,"xs-push","xs-push",-1878478835),null,new cljs.core.Keyword(null,"xs","xs",649443341),null,new cljs.core.Keyword(null,"sm-offset","sm-offset",229619439),null,new cljs.core.Keyword(null,"sm-pull","sm-pull",-368259600),null,new cljs.core.Keyword(null,"lg-offset","lg-offset",-429200045),null,new cljs.core.Keyword(null,"md-push","md-push",288470810),null,new cljs.core.Keyword(null,"sm-push","sm-push",1835708573),null,new cljs.core.Keyword(null,"md-offset","md-offset",1274386877),null,new cljs.core.Keyword(null,"xs-pull","xs-pull",-132686786),null,new cljs.core.Keyword(null,"md","md",707286655),null,new cljs.core.Keyword(null,"xs-offset","xs-offset",-1940326689),null], null), null);
om_bootstrap.grid.Col = om_bootstrap.types.bootstrap.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,schema.core.optional_key,om_bootstrap.grid.col_keys),cljs.core.repeat.call(null,schema.core.Int)));
var ufv___22100 = schema.utils.use_fn_validation;
var output_schema22091_22101 = om_bootstrap.types.Component;
var input_schema22092_22102 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Grid,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker22093_22103 = schema.core.checker.call(null,input_schema22092_22102);
var output_checker22094_22104 = schema.core.checker.call(null,output_schema22091_22101);
/**
 * Inputs: [opts :- Grid & children]
 * Returns: t/Component
 * 
 * Generates a wrapper for a bootstrap grid.
 */
om_bootstrap.grid.grid = ((function (ufv___22100,output_schema22091_22101,input_schema22092_22102,input_checker22093_22103,output_checker22094_22104){
return (function om_bootstrap$grid$grid(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___22100,output_schema22091_22101,input_schema22092_22102,input_checker22093_22103,output_checker22094_22104))
;

om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22100,output_schema22091_22101,input_schema22092_22102,input_checker22093_22103,output_checker22094_22104){
return (function (G__22095,rest22096){
var validate__9701__auto__ = ufv___22100.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22105 = cljs.core.list_STAR_.call(null,G__22095,rest22096);
var temp__4126__auto___22106 = input_checker22093_22103.call(null,args__9702__auto___22105);
if(cljs.core.truth_(temp__4126__auto___22106)){
var error__9703__auto___22107 = temp__4126__auto___22106;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.call(null,error__9703__auto___22107)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22107,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22105,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22092_22102,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__22095;
var children = rest22096;
while(true){
var vec__22099 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__22099,(0),null);
var props = cljs.core.nth.call(null,vec__22099,(1),null);
var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22108 = output_checker22094_22104.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22108)){
var error__9703__auto___22109 = temp__4126__auto___22108;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.call(null,error__9703__auto___22109)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22109,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22091_22101,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22100,output_schema22091_22101,input_schema22092_22102,input_checker22093_22103,output_checker22094_22104))
;

om_bootstrap.grid.grid.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.grid.cljs$lang$applyTo = ((function (ufv___22100,output_schema22091_22101,input_schema22092_22102,input_checker22093_22103,output_checker22094_22104){
return (function (seq22097){
var G__22098 = cljs.core.first.call(null,seq22097);
var seq22097__$1 = cljs.core.next.call(null,seq22097);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic(G__22098,seq22097__$1);
});})(ufv___22100,output_schema22091_22101,input_schema22092_22102,input_checker22093_22103,output_checker22094_22104))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.grid),schema.core.make_fn_schema.call(null,output_schema22091_22101,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22092_22102], null)));
var ufv___22118 = schema.utils.use_fn_validation;
var output_schema22110_22119 = om_bootstrap.types.Component;
var input_schema22111_22120 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker22112_22121 = schema.core.checker.call(null,input_schema22111_22120);
var output_checker22113_22122 = schema.core.checker.call(null,output_schema22110_22119);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * Generates a Bootstrap row element.
 */
om_bootstrap.grid.row = ((function (ufv___22118,output_schema22110_22119,input_schema22111_22120,input_checker22112_22121,output_checker22113_22122){
return (function om_bootstrap$grid$row(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___22118,output_schema22110_22119,input_schema22111_22120,input_checker22112_22121,output_checker22113_22122))
;

om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22118,output_schema22110_22119,input_schema22111_22120,input_checker22112_22121,output_checker22113_22122){
return (function (G__22114,rest22115){
var validate__9701__auto__ = ufv___22118.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22123 = cljs.core.list_STAR_.call(null,G__22114,rest22115);
var temp__4126__auto___22124 = input_checker22112_22121.call(null,args__9702__auto___22123);
if(cljs.core.truth_(temp__4126__auto___22124)){
var error__9703__auto___22125 = temp__4126__auto___22124;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.call(null,error__9703__auto___22125)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22125,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22123,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22111_22120,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__22114;
var children = rest22115;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22126 = output_checker22113_22122.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22126)){
var error__9703__auto___22127 = temp__4126__auto___22126;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.call(null,error__9703__auto___22127)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22127,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22110_22119,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22118,output_schema22110_22119,input_schema22111_22120,input_checker22112_22121,output_checker22113_22122))
;

om_bootstrap.grid.row.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.row.cljs$lang$applyTo = ((function (ufv___22118,output_schema22110_22119,input_schema22111_22120,input_checker22112_22121,output_checker22113_22122){
return (function (seq22116){
var G__22117 = cljs.core.first.call(null,seq22116);
var seq22116__$1 = cljs.core.next.call(null,seq22116);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(G__22117,seq22116__$1);
});})(ufv___22118,output_schema22110_22119,input_schema22111_22120,input_checker22112_22121,output_checker22113_22122))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.row),schema.core.make_fn_schema.call(null,output_schema22110_22119,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22111_22120], null)));
var ufv___22139 = schema.utils.use_fn_validation;
var output_schema22128_22140 = om_bootstrap.types.Component;
var input_schema22129_22141 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Col,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker22130_22142 = schema.core.checker.call(null,input_schema22129_22141);
var output_checker22131_22143 = schema.core.checker.call(null,output_schema22128_22140);
/**
 * Inputs: [opts :- Col & children]
 * Returns: t/Component
 * 
 * Generates a Bootstrap column element.
 */
om_bootstrap.grid.col = ((function (ufv___22139,output_schema22128_22140,input_schema22129_22141,input_checker22130_22142,output_checker22131_22143){
return (function om_bootstrap$grid$col(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___22139,output_schema22128_22140,input_schema22129_22141,input_checker22130_22142,output_checker22131_22143))
;

om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22139,output_schema22128_22140,input_schema22129_22141,input_checker22130_22142,output_checker22131_22143){
return (function (G__22132,rest22133){
var validate__9701__auto__ = ufv___22139.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22144 = cljs.core.list_STAR_.call(null,G__22132,rest22133);
var temp__4126__auto___22145 = input_checker22130_22142.call(null,args__9702__auto___22144);
if(cljs.core.truth_(temp__4126__auto___22145)){
var error__9703__auto___22146 = temp__4126__auto___22145;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.call(null,error__9703__auto___22146)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22146,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22144,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22129_22141,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__22132;
var children = rest22133;
while(true){
var vec__22136 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__22136,(0),null);
var props = cljs.core.nth.call(null,vec__22136,(1),null);
var class$ = om_tools.dom.class_set.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (vec__22136,bs,props,validate__9701__auto__,ufv___22139,output_schema22128_22140,input_schema22129_22141,input_checker22130_22142,output_checker22131_22143){
return (function (p__22137){
var vec__22138 = p__22137;
var k = cljs.core.nth.call(null,vec__22138,(0),null);
var v = cljs.core.nth.call(null,vec__22138,(1),null);
return [cljs.core.str("col-"),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-"),cljs.core.str(v)].join('');
});})(vec__22136,bs,props,validate__9701__auto__,ufv___22139,output_schema22128_22140,input_schema22129_22141,input_checker22130_22142,output_checker22131_22143))
,cljs.core.select_keys.call(null,bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.call(null,true)));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22147 = output_checker22131_22143.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22147)){
var error__9703__auto___22148 = temp__4126__auto___22147;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.call(null,error__9703__auto___22148)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22148,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22128_22140,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22139,output_schema22128_22140,input_schema22129_22141,input_checker22130_22142,output_checker22131_22143))
;

om_bootstrap.grid.col.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.col.cljs$lang$applyTo = ((function (ufv___22139,output_schema22128_22140,input_schema22129_22141,input_checker22130_22142,output_checker22131_22143){
return (function (seq22134){
var G__22135 = cljs.core.first.call(null,seq22134);
var seq22134__$1 = cljs.core.next.call(null,seq22134);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(G__22135,seq22134__$1);
});})(ufv___22139,output_schema22128_22140,input_schema22129_22141,input_checker22130_22142,output_checker22131_22143))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.col),schema.core.make_fn_schema.call(null,output_schema22128_22140,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22129_22141], null)));

//# sourceMappingURL=grid.js.map