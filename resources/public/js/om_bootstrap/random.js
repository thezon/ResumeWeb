// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.random');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
var ufv___21848 = schema.utils.use_fn_validation;
var output_schema21840_21849 = om_bootstrap.types.Component;
var input_schema21841_21850 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker21842_21851 = schema.core.checker.call(null,input_schema21841_21850);
var output_checker21843_21852 = schema.core.checker.call(null,output_schema21840_21849);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * A lightweight, flexible component that can optionally extend the
 * entire viewport to showcase key content on your site.
 */
om_bootstrap.random.jumbotron = ((function (ufv___21848,output_schema21840_21849,input_schema21841_21850,input_checker21842_21851,output_checker21843_21852){
return (function om_bootstrap$random$jumbotron(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___21848,output_schema21840_21849,input_schema21841_21850,input_checker21842_21851,output_checker21843_21852))
;

om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___21848,output_schema21840_21849,input_schema21841_21850,input_checker21842_21851,output_checker21843_21852){
return (function (G__21844,rest21845){
var validate__9701__auto__ = ufv___21848.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___21853 = cljs.core.list_STAR_.call(null,G__21844,rest21845);
var temp__4126__auto___21854 = input_checker21842_21851.call(null,args__9702__auto___21853);
if(cljs.core.truth_(temp__4126__auto___21854)){
var error__9703__auto___21855 = temp__4126__auto___21854;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.call(null,error__9703__auto___21855)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___21855,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___21853,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21841_21850,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__21844;
var children = rest21845;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___21856 = output_checker21843_21852.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___21856)){
var error__9703__auto___21857 = temp__4126__auto___21856;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.call(null,error__9703__auto___21857)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___21857,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21840_21849,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___21848,output_schema21840_21849,input_schema21841_21850,input_checker21842_21851,output_checker21843_21852))
;

om_bootstrap.random.jumbotron.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.jumbotron.cljs$lang$applyTo = ((function (ufv___21848,output_schema21840_21849,input_schema21841_21850,input_checker21842_21851,output_checker21843_21852){
return (function (seq21846){
var G__21847 = cljs.core.first.call(null,seq21846);
var seq21846__$1 = cljs.core.next.call(null,seq21846);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic(G__21847,seq21846__$1);
});})(ufv___21848,output_schema21840_21849,input_schema21841_21850,input_checker21842_21851,output_checker21843_21852))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.jumbotron),schema.core.make_fn_schema.call(null,output_schema21840_21849,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21841_21850], null)));
var ufv___21867 = schema.utils.use_fn_validation;
var output_schema21858_21868 = om_bootstrap.types.Component;
var input_schema21859_21869 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker21860_21870 = schema.core.checker.call(null,input_schema21859_21869);
var output_checker21861_21871 = schema.core.checker.call(null,output_schema21858_21868);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * Create a (label {} "label!") to show highlight information.
 */
om_bootstrap.random.label = ((function (ufv___21867,output_schema21858_21868,input_schema21859_21869,input_checker21860_21870,output_checker21861_21871){
return (function om_bootstrap$random$label(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___21867,output_schema21858_21868,input_schema21859_21869,input_checker21860_21870,output_checker21861_21871))
;

om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___21867,output_schema21858_21868,input_schema21859_21869,input_checker21860_21870,output_checker21861_21871){
return (function (G__21862,rest21863){
var validate__9701__auto__ = ufv___21867.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___21872 = cljs.core.list_STAR_.call(null,G__21862,rest21863);
var temp__4126__auto___21873 = input_checker21860_21870.call(null,args__9702__auto___21872);
if(cljs.core.truth_(temp__4126__auto___21873)){
var error__9703__auto___21874 = temp__4126__auto___21873;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.call(null,error__9703__auto___21874)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___21874,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___21872,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21859_21869,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__21862;
var children = rest21863;
while(true){
var vec__21866 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__21866,(0),null);
var props = cljs.core.nth.call(null,vec__21866,(1),null);
var classes = om_bootstrap.types.bs_class_set.call(null,bs);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___21875 = output_checker21861_21871.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___21875)){
var error__9703__auto___21876 = temp__4126__auto___21875;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.call(null,error__9703__auto___21876)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___21876,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21858_21868,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___21867,output_schema21858_21868,input_schema21859_21869,input_checker21860_21870,output_checker21861_21871))
;

om_bootstrap.random.label.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.label.cljs$lang$applyTo = ((function (ufv___21867,output_schema21858_21868,input_schema21859_21869,input_checker21860_21870,output_checker21861_21871){
return (function (seq21864){
var G__21865 = cljs.core.first.call(null,seq21864);
var seq21864__$1 = cljs.core.next.call(null,seq21864);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(G__21865,seq21864__$1);
});})(ufv___21867,output_schema21858_21868,input_schema21859_21869,input_checker21860_21870,output_checker21861_21871))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.label),schema.core.make_fn_schema.call(null,output_schema21858_21868,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21859_21869], null)));
var ufv___21886 = schema.utils.use_fn_validation;
var output_schema21877_21887 = om_bootstrap.types.Component;
var input_schema21878_21888 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker21879_21889 = schema.core.checker.call(null,input_schema21878_21888);
var output_checker21880_21890 = schema.core.checker.call(null,output_schema21877_21887);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * Use the well as a simple effect on an element to give it an inset effect.
 */
om_bootstrap.random.well = ((function (ufv___21886,output_schema21877_21887,input_schema21878_21888,input_checker21879_21889,output_checker21880_21890){
return (function om_bootstrap$random$well(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___21886,output_schema21877_21887,input_schema21878_21888,input_checker21879_21889,output_checker21880_21890))
;

om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___21886,output_schema21877_21887,input_schema21878_21888,input_checker21879_21889,output_checker21880_21890){
return (function (G__21881,rest21882){
var validate__9701__auto__ = ufv___21886.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___21891 = cljs.core.list_STAR_.call(null,G__21881,rest21882);
var temp__4126__auto___21892 = input_checker21879_21889.call(null,args__9702__auto___21891);
if(cljs.core.truth_(temp__4126__auto___21892)){
var error__9703__auto___21893 = temp__4126__auto___21892;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.call(null,error__9703__auto___21893)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___21893,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___21891,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21878_21888,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__21881;
var children = rest21882;
while(true){
var vec__21885 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));
var bs = cljs.core.nth.call(null,vec__21885,(0),null);
var props = cljs.core.nth.call(null,vec__21885,(1),null);
var class$ = om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___21894 = output_checker21880_21890.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___21894)){
var error__9703__auto___21895 = temp__4126__auto___21894;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.call(null,error__9703__auto___21895)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___21895,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21877_21887,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___21886,output_schema21877_21887,input_schema21878_21888,input_checker21879_21889,output_checker21880_21890))
;

om_bootstrap.random.well.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.well.cljs$lang$applyTo = ((function (ufv___21886,output_schema21877_21887,input_schema21878_21888,input_checker21879_21889,output_checker21880_21890){
return (function (seq21883){
var G__21884 = cljs.core.first.call(null,seq21883);
var seq21883__$1 = cljs.core.next.call(null,seq21883);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic(G__21884,seq21883__$1);
});})(ufv___21886,output_schema21877_21887,input_schema21878_21888,input_checker21879_21889,output_checker21880_21890))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.well),schema.core.make_fn_schema.call(null,output_schema21877_21887,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21878_21888], null)));
var ufv___21904 = schema.utils.use_fn_validation;
var output_schema21896_21905 = om_bootstrap.types.Component;
var input_schema21897_21906 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker21898_21907 = schema.core.checker.call(null,input_schema21897_21906);
var output_checker21899_21908 = schema.core.checker.call(null,output_schema21896_21905);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * A simple shell for an h1 to appropriately space out and segment
 * sections of content on a page. It can utilize the h1’s default small
 * element, as well as most other components (with additional styles).
 */
om_bootstrap.random.page_header = ((function (ufv___21904,output_schema21896_21905,input_schema21897_21906,input_checker21898_21907,output_checker21899_21908){
return (function om_bootstrap$random$page_header(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___21904,output_schema21896_21905,input_schema21897_21906,input_checker21898_21907,output_checker21899_21908))
;

om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___21904,output_schema21896_21905,input_schema21897_21906,input_checker21898_21907,output_checker21899_21908){
return (function (G__21900,rest21901){
var validate__9701__auto__ = ufv___21904.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___21909 = cljs.core.list_STAR_.call(null,G__21900,rest21901);
var temp__4126__auto___21910 = input_checker21898_21907.call(null,args__9702__auto___21909);
if(cljs.core.truth_(temp__4126__auto___21910)){
var error__9703__auto___21911 = temp__4126__auto___21910;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.call(null,error__9703__auto___21911)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___21911,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___21909,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21897_21906,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__21900;
var children = rest21901;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___21912 = output_checker21899_21908.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___21912)){
var error__9703__auto___21913 = temp__4126__auto___21912;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.call(null,error__9703__auto___21913)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___21913,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21896_21905,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___21904,output_schema21896_21905,input_schema21897_21906,input_checker21898_21907,output_checker21899_21908))
;

om_bootstrap.random.page_header.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.page_header.cljs$lang$applyTo = ((function (ufv___21904,output_schema21896_21905,input_schema21897_21906,input_checker21898_21907,output_checker21899_21908){
return (function (seq21902){
var G__21903 = cljs.core.first.call(null,seq21902);
var seq21902__$1 = cljs.core.next.call(null,seq21902);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic(G__21903,seq21902__$1);
});})(ufv___21904,output_schema21896_21905,input_schema21897_21906,input_checker21898_21907,output_checker21899_21908))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.page_header),schema.core.make_fn_schema.call(null,output_schema21896_21905,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21897_21906], null)));
om_bootstrap.random.Placement = schema.core.enum$.call(null,"top","right","bottom","left");
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___21923 = schema.utils.use_fn_validation;
var output_schema21914_21924 = om_bootstrap.types.Component;
var input_schema21915_21925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.ToolTip,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker21916_21926 = schema.core.checker.call(null,input_schema21915_21925);
var output_checker21917_21927 = schema.core.checker.call(null,output_schema21914_21924);
/**
 * Inputs: [opts :- ToolTip & children]
 * Returns: t/Component
 */
om_bootstrap.random.tooltip = ((function (ufv___21923,output_schema21914_21924,input_schema21915_21925,input_checker21916_21926,output_checker21917_21927){
return (function om_bootstrap$random$tooltip(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___21923,output_schema21914_21924,input_schema21915_21925,input_checker21916_21926,output_checker21917_21927))
;

om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___21923,output_schema21914_21924,input_schema21915_21925,input_checker21916_21926,output_checker21917_21927){
return (function (G__21918,rest21919){
var validate__9701__auto__ = ufv___21923.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___21928 = cljs.core.list_STAR_.call(null,G__21918,rest21919);
var temp__4126__auto___21929 = input_checker21916_21926.call(null,args__9702__auto___21928);
if(cljs.core.truth_(temp__4126__auto___21929)){
var error__9703__auto___21930 = temp__4126__auto___21929;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.call(null,error__9703__auto___21930)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___21930,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___21928,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21915_21925,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__21918;
var children = rest21919;
while(true){
var vec__21922 = om_bootstrap.types.separate.call(null,om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__21922,(0),null);
var _ = cljs.core.nth.call(null,vec__21922,(1),null);
var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__3959__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);
return cljs.core.apply.call(null,React.DOM.div,{"style": {"top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"style": {"top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "tooltip-arrow"}),cljs.core.apply.call(null,React.DOM.div,{"className": "tooltip-inner"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___21931 = output_checker21917_21927.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___21931)){
var error__9703__auto___21932 = temp__4126__auto___21931;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.call(null,error__9703__auto___21932)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___21932,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21914_21924,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___21923,output_schema21914_21924,input_schema21915_21925,input_checker21916_21926,output_checker21917_21927))
;

om_bootstrap.random.tooltip.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.tooltip.cljs$lang$applyTo = ((function (ufv___21923,output_schema21914_21924,input_schema21915_21925,input_checker21916_21926,output_checker21917_21927){
return (function (seq21920){
var G__21921 = cljs.core.first.call(null,seq21920);
var seq21920__$1 = cljs.core.next.call(null,seq21920);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic(G__21921,seq21920__$1);
});})(ufv___21923,output_schema21914_21924,input_schema21915_21925,input_checker21916_21926,output_checker21917_21927))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.tooltip),schema.core.make_fn_schema.call(null,output_schema21914_21924,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21915_21925], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__15604__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__15604__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);

return descriptor__15604__auto__;
})();

var component_fnk__15633__auto___21958 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema21938 = schema.core.Any;
var input_schema21939 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map21936","map21936",1121164246,null))], null);
var input_checker21940 = schema.core.checker.call(null,input_schema21939);
var output_checker21941 = schema.core.checker.call(null,output_schema21938);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema21938,input_schema21939,input_checker21940,output_checker21941){
return (function om_bootstrap$random$constructor21934(G__21942){
var validate__9701__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___21959 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21942], null);
var temp__4126__auto___21960 = input_checker21940.call(null,args__9702__auto___21959);
if(cljs.core.truth_(temp__4126__auto___21960)){
var error__9703__auto___21961 = temp__4126__auto___21960;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor21934","constructor21934",-370901674,null),cljs.core.pr_str.call(null,error__9703__auto___21961)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___21961,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___21959,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21939,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var map21936 = G__21942;
while(true){
if(cljs.core.map_QMARK_.call(null,map21936)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map21936)));
}

var map21937 = plumbing.fnk.schema.safe_get.call(null,map21936,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var bs = plumbing.fnk.schema.safe_get.call(null,map21937,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var props = plumbing.fnk.schema.safe_get.call(null,map21937,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var children = plumbing.fnk.schema.safe_get.call(null,map21937,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var owner = plumbing.fnk.schema.safe_get.call(null,map21936,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.random.t21947 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.random.t21947 = (function (output_schema21938,input_schema21939,owner,output_checker21941,props,children,validate__9701__auto__,input_checker21940,G__21942,constructor21934,map21936,map21937,ufv__,bs,meta21948){
this.output_schema21938 = output_schema21938;
this.input_schema21939 = input_schema21939;
this.owner = owner;
this.output_checker21941 = output_checker21941;
this.props = props;
this.children = children;
this.validate__9701__auto__ = validate__9701__auto__;
this.input_checker21940 = input_checker21940;
this.G__21942 = G__21942;
this.constructor21934 = constructor21934;
this.map21936 = map21936;
this.map21937 = map21937;
this.ufv__ = ufv__;
this.bs = bs;
this.meta21948 = meta21948;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.random.t21947.prototype.om$core$IDisplayName$ = true;

om_bootstrap.random.t21947.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map21937,validate__9701__auto__,ufv__,output_schema21938,input_schema21939,input_checker21940,output_checker21941){
return (function (_){
var self__ = this;
var ___$1 = this;
return "alert*";
});})(owner,children,props,bs,map21937,validate__9701__auto__,ufv__,output_schema21938,input_schema21939,input_checker21940,output_checker21941))
;

om_bootstrap.random.t21947.prototype.om$core$IRender$ = true;

om_bootstrap.random.t21947.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map21937,validate__9701__auto__,ufv__,output_schema21938,input_schema21939,input_checker21940,output_checker21941){
return (function (_){
var self__ = this;
var ___$1 = this;
var classes = om_bootstrap.types.bs_class_set.call(null,self__.bs);
var dismiss_button = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);
if(cljs.core.truth_(temp__4126__auto__)){
var od = temp__4126__auto__;
return React.DOM.button({"aria-hidden": true, "onClick": om_tools.dom.format_opts.call(null,od), "className": "close", "type": "button"},"&times;");
} else {
return null;
}
})();
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,self__.props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[dismiss_button,self__.children],null)));
});})(owner,children,props,bs,map21937,validate__9701__auto__,ufv__,output_schema21938,input_schema21939,input_checker21940,output_checker21941))
;

om_bootstrap.random.t21947.prototype.om$core$IDidMount$ = true;

om_bootstrap.random.t21947.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map21937,validate__9701__auto__,ufv__,output_schema21938,input_schema21939,input_checker21940,output_checker21941){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__3947__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);
if(cljs.core.truth_(and__3947__auto__)){
return new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs);
} else {
return and__3947__auto__;
}
})())){
var G__21950 = self__.owner;
G__21950.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));

return G__21950;
} else {
return null;
}
});})(owner,children,props,bs,map21937,validate__9701__auto__,ufv__,output_schema21938,input_schema21939,input_checker21940,output_checker21941))
;

om_bootstrap.random.t21947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map21937,validate__9701__auto__,ufv__,output_schema21938,input_schema21939,input_checker21940,output_checker21941){
return (function (_21949){
var self__ = this;
var _21949__$1 = this;
return self__.meta21948;
});})(owner,children,props,bs,map21937,validate__9701__auto__,ufv__,output_schema21938,input_schema21939,input_checker21940,output_checker21941))
;

om_bootstrap.random.t21947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map21937,validate__9701__auto__,ufv__,output_schema21938,input_schema21939,input_checker21940,output_checker21941){
return (function (_21949,meta21948__$1){
var self__ = this;
var _21949__$1 = this;
return (new om_bootstrap.random.t21947(self__.output_schema21938,self__.input_schema21939,self__.owner,self__.output_checker21941,self__.props,self__.children,self__.validate__9701__auto__,self__.input_checker21940,self__.G__21942,self__.constructor21934,self__.map21936,self__.map21937,self__.ufv__,self__.bs,meta21948__$1));
});})(owner,children,props,bs,map21937,validate__9701__auto__,ufv__,output_schema21938,input_schema21939,input_checker21940,output_checker21941))
;

om_bootstrap.random.t21947.cljs$lang$type = true;

om_bootstrap.random.t21947.cljs$lang$ctorStr = "om-bootstrap.random/t21947";

om_bootstrap.random.t21947.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map21937,validate__9701__auto__,ufv__,output_schema21938,input_schema21939,input_checker21940,output_checker21941){
return (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"om-bootstrap.random/t21947");
});})(owner,children,props,bs,map21937,validate__9701__auto__,ufv__,output_schema21938,input_schema21939,input_checker21940,output_checker21941))
;

om_bootstrap.random.__GT_t21947 = ((function (owner,children,props,bs,map21937,validate__9701__auto__,ufv__,output_schema21938,input_schema21939,input_checker21940,output_checker21941){
return (function om_bootstrap$random$constructor21934_$___GT_t21947(output_schema21938__$1,input_schema21939__$1,owner__$1,output_checker21941__$1,props__$1,children__$1,validate__9701__auto____$1,input_checker21940__$1,G__21942__$1,constructor21934__$1,map21936__$1,map21937__$1,ufv____$1,bs__$1,meta21948){
return (new om_bootstrap.random.t21947(output_schema21938__$1,input_schema21939__$1,owner__$1,output_checker21941__$1,props__$1,children__$1,validate__9701__auto____$1,input_checker21940__$1,G__21942__$1,constructor21934__$1,map21936__$1,map21937__$1,ufv____$1,bs__$1,meta21948));
});})(owner,children,props,bs,map21937,validate__9701__auto__,ufv__,output_schema21938,input_schema21939,input_checker21940,output_checker21941))
;

}

return (new om_bootstrap.random.t21947(output_schema21938,input_schema21939,owner,output_checker21941,props,children,validate__9701__auto__,input_checker21940,G__21942,om_bootstrap$random$constructor21934,map21936,map21937,ufv__,bs,null));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___21962 = output_checker21941.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___21962)){
var error__9703__auto___21963 = temp__4126__auto___21962;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor21934","constructor21934",-370901674,null),cljs.core.pr_str.call(null,error__9703__auto___21963)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___21963,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21938,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv__,output_schema21938,input_schema21939,input_checker21940,output_checker21941))
,schema.core.make_fn_schema.call(null,output_schema21938,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21939], null)));
})();
/**
 * Renders the alert component with timeout mixed in. TODO: This
 * should probably use the component macro and be defined inline under
 * the alert function. No need for a separate name.
 */
om_bootstrap.random.alert_STAR_ = ((function (component_fnk__15633__auto___21958){
return (function om_bootstrap$random$alert_STAR_(){
var argseq__4999__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4999__auto__);
});})(component_fnk__15633__auto___21958))
;

om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__15633__auto___21958){
return (function (data__15634__auto__,owner21933,p__21954){
var vec__21955 = p__21954;
var opts__15635__auto__ = cljs.core.nth.call(null,vec__21955,(0),null);
return component_fnk__15633__auto___21958.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15635__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner21933,new cljs.core.Keyword(null,"data","data",-232669377),data__15634__auto__], null));
});})(component_fnk__15633__auto___21958))
;

om_bootstrap.random.alert_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.random.alert_STAR_.cljs$lang$applyTo = ((function (component_fnk__15633__auto___21958){
return (function (seq21951){
var G__21952 = cljs.core.first.call(null,seq21951);
var seq21951__$1 = cljs.core.next.call(null,seq21951);
var G__21953 = cljs.core.first.call(null,seq21951__$1);
var seq21951__$2 = cljs.core.next.call(null,seq21951__$1);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__21952,G__21953,seq21951__$2);
});})(component_fnk__15633__auto___21958))
;

om_bootstrap.random.__GT_alert_STAR_ = (function om_bootstrap$random$__GT_alert_STAR_(){
var G__21957 = arguments.length;
switch (G__21957) {
case 1:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__15602__auto__){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__15602__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__15602__auto__,m21935){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__15602__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m21935));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___21974 = schema.utils.use_fn_validation;
var output_schema21965_21975 = om_bootstrap.types.Component;
var input_schema21966_21976 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Alert,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker21967_21977 = schema.core.checker.call(null,input_schema21966_21976);
var output_checker21968_21978 = schema.core.checker.call(null,output_schema21965_21975);
/**
 * Inputs: [opts :- Alert & children]
 * Returns: t/Component
 * 
 * Wrapper for the alert component to allow a better user interface.
 */
om_bootstrap.random.alert = ((function (ufv___21974,output_schema21965_21975,input_schema21966_21976,input_checker21967_21977,output_checker21968_21978){
return (function om_bootstrap$random$alert(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___21974,output_schema21965_21975,input_schema21966_21976,input_checker21967_21977,output_checker21968_21978))
;

om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___21974,output_schema21965_21975,input_schema21966_21976,input_checker21967_21977,output_checker21968_21978){
return (function (G__21969,rest21970){
var validate__9701__auto__ = ufv___21974.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___21979 = cljs.core.list_STAR_.call(null,G__21969,rest21970);
var temp__4126__auto___21980 = input_checker21967_21977.call(null,args__9702__auto___21979);
if(cljs.core.truth_(temp__4126__auto___21980)){
var error__9703__auto___21981 = temp__4126__auto___21980;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.call(null,error__9703__auto___21981)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___21981,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___21979,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21966_21976,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__21969;
var children = rest21970;
while(true){
var vec__21973 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);
var bs = cljs.core.nth.call(null,vec__21973,(0),null);
var props = cljs.core.nth.call(null,vec__21973,(1),null);
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___21982 = output_checker21968_21978.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___21982)){
var error__9703__auto___21983 = temp__4126__auto___21982;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.call(null,error__9703__auto___21983)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___21983,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21965_21975,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___21974,output_schema21965_21975,input_schema21966_21976,input_checker21967_21977,output_checker21968_21978))
;

om_bootstrap.random.alert.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.alert.cljs$lang$applyTo = ((function (ufv___21974,output_schema21965_21975,input_schema21966_21976,input_checker21967_21977,output_checker21968_21978){
return (function (seq21971){
var G__21972 = cljs.core.first.call(null,seq21971);
var seq21971__$1 = cljs.core.next.call(null,seq21971);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic(G__21972,seq21971__$1);
});})(ufv___21974,output_schema21965_21975,input_schema21966_21976,input_checker21967_21977,output_checker21968_21978))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.alert),schema.core.make_fn_schema.call(null,output_schema21965_21975,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21966_21976], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___21993 = schema.utils.use_fn_validation;
var output_schema21984_21994 = om_bootstrap.types.Component;
var input_schema21985_21995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Popover,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker21986_21996 = schema.core.checker.call(null,input_schema21985_21995);
var output_checker21987_21997 = schema.core.checker.call(null,output_schema21984_21994);
/**
 * Inputs: [opts :- Popover & children]
 * Returns: t/Component
 */
om_bootstrap.random.popover = ((function (ufv___21993,output_schema21984_21994,input_schema21985_21995,input_checker21986_21996,output_checker21987_21997){
return (function om_bootstrap$random$popover(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___21993,output_schema21984_21994,input_schema21985_21995,input_checker21986_21996,output_checker21987_21997))
;

om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___21993,output_schema21984_21994,input_schema21985_21995,input_checker21986_21996,output_checker21987_21997){
return (function (G__21988,rest21989){
var validate__9701__auto__ = ufv___21993.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___21998 = cljs.core.list_STAR_.call(null,G__21988,rest21989);
var temp__4126__auto___21999 = input_checker21986_21996.call(null,args__9702__auto___21998);
if(cljs.core.truth_(temp__4126__auto___21999)){
var error__9703__auto___22000 = temp__4126__auto___21999;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.call(null,error__9703__auto___22000)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22000,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___21998,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21985_21995,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__21988;
var children = rest21989;
while(true){
var vec__21992 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__21992,(0),null);
var _ = cljs.core.nth.call(null,vec__21992,(1),null);
var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__3959__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);
return cljs.core.apply.call(null,React.DOM.div,{"style": {"display": "block", "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"style": {"top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "arrow"}),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var title = temp__4126__auto__;
return cljs.core.apply.call(null,React.DOM.h3,{"className": "popover-title"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[title],null))));
} else {
return null;
}
})(),cljs.core.apply.call(null,React.DOM.div,{"className": "popover-content"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22001 = output_checker21987_21997.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22001)){
var error__9703__auto___22002 = temp__4126__auto___22001;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.call(null,error__9703__auto___22002)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22002,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21984_21994,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___21993,output_schema21984_21994,input_schema21985_21995,input_checker21986_21996,output_checker21987_21997))
;

om_bootstrap.random.popover.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.popover.cljs$lang$applyTo = ((function (ufv___21993,output_schema21984_21994,input_schema21985_21995,input_checker21986_21996,output_checker21987_21997){
return (function (seq21990){
var G__21991 = cljs.core.first.call(null,seq21990);
var seq21990__$1 = cljs.core.next.call(null,seq21990);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic(G__21991,seq21990__$1);
});})(ufv___21993,output_schema21984_21994,input_schema21985_21995,input_checker21986_21996,output_checker21987_21997))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.popover),schema.core.make_fn_schema.call(null,output_schema21984_21994,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21985_21995], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___22012 = schema.utils.use_fn_validation;
var output_schema22003_22013 = om_bootstrap.types.Component;
var input_schema22004_22014 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Badge,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker22005_22015 = schema.core.checker.call(null,input_schema22004_22014);
var output_checker22006_22016 = schema.core.checker.call(null,output_schema22003_22013);
/**
 * Inputs: [opts :- Badge & children]
 * Returns: t/Component
 */
om_bootstrap.random.badge = ((function (ufv___22012,output_schema22003_22013,input_schema22004_22014,input_checker22005_22015,output_checker22006_22016){
return (function om_bootstrap$random$badge(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___22012,output_schema22003_22013,input_schema22004_22014,input_checker22005_22015,output_checker22006_22016))
;

om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22012,output_schema22003_22013,input_schema22004_22014,input_checker22005_22015,output_checker22006_22016){
return (function (G__22007,rest22008){
var validate__9701__auto__ = ufv___22012.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22017 = cljs.core.list_STAR_.call(null,G__22007,rest22008);
var temp__4126__auto___22018 = input_checker22005_22015.call(null,args__9702__auto___22017);
if(cljs.core.truth_(temp__4126__auto___22018)){
var error__9703__auto___22019 = temp__4126__auto___22018;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.call(null,error__9703__auto___22019)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22019,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22017,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22004_22014,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__22007;
var children = rest22008;
while(true){
var vec__22011 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Badge,opts);
var bs = cljs.core.nth.call(null,vec__22011,(0),null);
var props = cljs.core.nth.call(null,vec__22011,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_.call(null,children)], null);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22020 = output_checker22006_22016.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22020)){
var error__9703__auto___22021 = temp__4126__auto___22020;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.call(null,error__9703__auto___22021)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22021,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22003_22013,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22012,output_schema22003_22013,input_schema22004_22014,input_checker22005_22015,output_checker22006_22016))
;

om_bootstrap.random.badge.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.badge.cljs$lang$applyTo = ((function (ufv___22012,output_schema22003_22013,input_schema22004_22014,input_checker22005_22015,output_checker22006_22016){
return (function (seq22009){
var G__22010 = cljs.core.first.call(null,seq22009);
var seq22009__$1 = cljs.core.next.call(null,seq22009);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic(G__22010,seq22009__$1);
});})(ufv___22012,output_schema22003_22013,input_schema22004_22014,input_checker22005_22015,output_checker22006_22016))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.badge),schema.core.make_fn_schema.call(null,output_schema22003_22013,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22004_22014], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___22031 = schema.utils.use_fn_validation;
var output_schema22022_22032 = om_bootstrap.types.Component;
var input_schema22023_22033 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Glyphicon,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker22024_22034 = schema.core.checker.call(null,input_schema22023_22033);
var output_checker22025_22035 = schema.core.checker.call(null,output_schema22022_22032);
/**
 * Inputs: [opts :- Glyphicon & children]
 * Returns: t/Component
 */
om_bootstrap.random.glyphicon = ((function (ufv___22031,output_schema22022_22032,input_schema22023_22033,input_checker22024_22034,output_checker22025_22035){
return (function om_bootstrap$random$glyphicon(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___22031,output_schema22022_22032,input_schema22023_22033,input_checker22024_22034,output_checker22025_22035))
;

om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22031,output_schema22022_22032,input_schema22023_22033,input_checker22024_22034,output_checker22025_22035){
return (function (G__22026,rest22027){
var validate__9701__auto__ = ufv___22031.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22036 = cljs.core.list_STAR_.call(null,G__22026,rest22027);
var temp__4126__auto___22037 = input_checker22024_22034.call(null,args__9702__auto___22036);
if(cljs.core.truth_(temp__4126__auto___22037)){
var error__9703__auto___22038 = temp__4126__auto___22037;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.call(null,error__9703__auto___22038)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22038,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22036,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22023_22033,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__22026;
var children = rest22027;
while(true){
var vec__22030 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));
var bs = cljs.core.nth.call(null,vec__22030,(0),null);
var props = cljs.core.nth.call(null,vec__22030,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),[cljs.core.str("glyphicon-"),cljs.core.str(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))].join(''),true);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22039 = output_checker22025_22035.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22039)){
var error__9703__auto___22040 = temp__4126__auto___22039;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.call(null,error__9703__auto___22040)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22040,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22022_22032,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22031,output_schema22022_22032,input_schema22023_22033,input_checker22024_22034,output_checker22025_22035))
;

om_bootstrap.random.glyphicon.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.glyphicon.cljs$lang$applyTo = ((function (ufv___22031,output_schema22022_22032,input_schema22023_22033,input_checker22024_22034,output_checker22025_22035){
return (function (seq22028){
var G__22029 = cljs.core.first.call(null,seq22028);
var seq22028__$1 = cljs.core.next.call(null,seq22028);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic(G__22029,seq22028__$1);
});})(ufv___22031,output_schema22022_22032,input_schema22023_22033,input_checker22024_22034,output_checker22025_22035))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.glyphicon),schema.core.make_fn_schema.call(null,output_schema22022_22032,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22023_22033], null)));

//# sourceMappingURL=random.js.map