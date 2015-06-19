// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.table');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om.core');
om_bootstrap.table.Table = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"striped?","striped?",-797214979)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bordered?","bordered?",562358476)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"condensed?","condensed?",-109797520)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"hover?","hover?",-1201331489)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"responsive?","responsive?",-683696941)),schema.core.Bool], true, false);
var ufv___21157 = schema.utils.use_fn_validation;
var output_schema21148_21158 = schema.core.Any;
var input_schema21149_21159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.table.Table,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker21150_21160 = schema.core.checker.call(null,input_schema21149_21159);
var output_checker21151_21161 = schema.core.checker.call(null,output_schema21148_21158);
/**
 * Inputs: [opts :- Table & children]
 * 
 * Generates a Bootstrap table wrapper.
 */
om_bootstrap.table.table = ((function (ufv___21157,output_schema21148_21158,input_schema21149_21159,input_checker21150_21160,output_checker21151_21161){
return (function om_bootstrap$table$table(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___21157,output_schema21148_21158,input_schema21149_21159,input_checker21150_21160,output_checker21151_21161))
;

om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___21157,output_schema21148_21158,input_schema21149_21159,input_checker21150_21160,output_checker21151_21161){
return (function (G__21152,rest21153){
var validate__9701__auto__ = ufv___21157.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___21162 = cljs.core.list_STAR_.call(null,G__21152,rest21153);
var temp__4126__auto___21163 = input_checker21150_21160.call(null,args__9702__auto___21162);
if(cljs.core.truth_(temp__4126__auto___21163)){
var error__9703__auto___21164 = temp__4126__auto___21163;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"table","table",1075588491,null),cljs.core.pr_str.call(null,error__9703__auto___21164)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___21164,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___21162,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21149_21159,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__21152;
var children = rest21153;
while(true){
var vec__21156 = om_bootstrap.types.separate.call(null,om_bootstrap.table.Table,opts);
var bs = cljs.core.nth.call(null,vec__21156,(0),null);
var props = cljs.core.nth.call(null,vec__21156,(1),null);
var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"table","table",-564943036),true,new cljs.core.Keyword(null,"table-striped","table-striped",-120331850),new cljs.core.Keyword(null,"striped?","striped?",-797214979).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"table-bordered","table-bordered",382462305),new cljs.core.Keyword(null,"bordered?","bordered?",562358476).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"table-condensed","table-condensed",716299039),new cljs.core.Keyword(null,"condensed?","condensed?",-109797520).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"table-hover","table-hover",486607258),new cljs.core.Keyword(null,"hover?","hover?",-1201331489).cljs$core$IFn$_invoke$arity$1(opts)], null);
var props__$1 = om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,klasses)], null));
var table = om_tools.dom.element.call(null,React.DOM.table,props__$1,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"responsive?","responsive?",-683696941).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.apply.call(null,React.DOM.div,{"className": "table-responsive"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[table],null))));
} else {
return table;
}
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___21165 = output_checker21151_21161.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___21165)){
var error__9703__auto___21166 = temp__4126__auto___21165;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"table","table",1075588491,null),cljs.core.pr_str.call(null,error__9703__auto___21166)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___21166,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21148_21158,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___21157,output_schema21148_21158,input_schema21149_21159,input_checker21150_21160,output_checker21151_21161))
;

om_bootstrap.table.table.cljs$lang$maxFixedArity = (1);

om_bootstrap.table.table.cljs$lang$applyTo = ((function (ufv___21157,output_schema21148_21158,input_schema21149_21159,input_checker21150_21160,output_checker21151_21161){
return (function (seq21154){
var G__21155 = cljs.core.first.call(null,seq21154);
var seq21154__$1 = cljs.core.next.call(null,seq21154);
return om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic(G__21155,seq21154__$1);
});})(ufv___21157,output_schema21148_21158,input_schema21149_21159,input_checker21150_21160,output_checker21151_21161))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.table.table),schema.core.make_fn_schema.call(null,output_schema21148_21158,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21149_21159], null)));

//# sourceMappingURL=table.js.map