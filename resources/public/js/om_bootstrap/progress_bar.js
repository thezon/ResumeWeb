// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.progress_bar');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_bootstrap.types');
om_bootstrap.progress_bar.ProgressBar = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"now","now",-1650525531),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"min","min",444991522)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"max","max",61366548)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"label","label",1718410804)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sr-only?","sr-only?",-1143674250)),schema.core.named.call(null,schema.core.Bool,"Screenreader-only? Hide the label?"),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"striped?","striped?",-797214979)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nested?","nested?",1182745618)),schema.core.named.call(null,schema.core.Bool,"Specify this for a nested ProgressBar inside a stacked ProgressBar.")], true, false));
om_bootstrap.progress_bar.defaults = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"progress-bar",new cljs.core.Keyword(null,"striped?","striped?",-797214979),false,new cljs.core.Keyword(null,"active?","active?",459499776),false,new cljs.core.Keyword(null,"nested?","nested?",1182745618),false], null);
var ufv___16071 = schema.utils.use_fn_validation;
var output_schema16064_16072 = schema.core.Num;
var input_schema16065_16073 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Int,new cljs.core.Symbol(null,"min","min",2085523049,null)),schema.core.one.call(null,schema.core.Int,new cljs.core.Symbol(null,"now","now",-9994004,null)),schema.core.one.call(null,schema.core.Int,new cljs.core.Symbol(null,"max","max",1701898075,null))], null);
var input_checker16066_16074 = schema.core.checker.call(null,input_schema16065_16073);
var output_checker16067_16075 = schema.core.checker.call(null,output_schema16064_16072);
/**
 * Inputs: [min :- s/Int now :- s/Int max :- s/Int]
 * Returns: s/Num
 */
om_bootstrap.progress_bar.percentage = ((function (ufv___16071,output_schema16064_16072,input_schema16065_16073,input_checker16066_16074,output_checker16067_16075){
return (function om_bootstrap$progress_bar$percentage(G__16068,G__16069,G__16070){
var validate__6163__auto__ = ufv___16071.get_cell();
if(cljs.core.truth_(validate__6163__auto__)){
var args__6164__auto___16076 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16068,G__16069,G__16070], null);
var temp__4126__auto___16077 = input_checker16066_16074.call(null,args__6164__auto___16076);
if(cljs.core.truth_(temp__4126__auto___16077)){
var error__6165__auto___16078 = temp__4126__auto___16077;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"percentage","percentage",30317877,null),cljs.core.pr_str.call(null,error__6165__auto___16078)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6165__auto___16078,new cljs.core.Keyword(null,"value","value",305978217),args__6164__auto___16076,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16065_16073,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6166__auto__ = (function (){var min = G__16068;
var now = G__16069;
var max = G__16070;
while(true){
return Math.ceil.call(null,(((now - min) / (max - min)) * (100)));
break;
}
})();
if(cljs.core.truth_(validate__6163__auto__)){
var temp__4126__auto___16079 = output_checker16067_16075.call(null,o__6166__auto__);
if(cljs.core.truth_(temp__4126__auto___16079)){
var error__6165__auto___16080 = temp__4126__auto___16079;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"percentage","percentage",30317877,null),cljs.core.pr_str.call(null,error__6165__auto___16080)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6165__auto___16080,new cljs.core.Keyword(null,"value","value",305978217),o__6166__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16064_16072,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6166__auto__;
});})(ufv___16071,output_schema16064_16072,input_schema16065_16073,input_checker16066_16074,output_checker16067_16075))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.progress_bar.percentage),schema.core.make_fn_schema.call(null,output_schema16064_16072,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16065_16073], null)));
var ufv___16090 = schema.utils.use_fn_validation;
var output_schema16081_16091 = om_bootstrap.types.Component;
var input_schema16082_16092 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.progress_bar.ProgressBar,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker16083_16093 = schema.core.checker.call(null,input_schema16082_16092);
var output_checker16084_16094 = schema.core.checker.call(null,output_schema16081_16091);
/**
 * Inputs: [opts :- ProgressBar & children]
 * Returns: t/Component
 * 
 * Generates a progress bar child.
 */
om_bootstrap.progress_bar.child_bar = ((function (ufv___16090,output_schema16081_16091,input_schema16082_16092,input_checker16083_16093,output_checker16084_16094){
return (function om_bootstrap$progress_bar$child_bar(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.progress_bar.child_bar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___16090,output_schema16081_16091,input_schema16082_16092,input_checker16083_16093,output_checker16084_16094))
;

om_bootstrap.progress_bar.child_bar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___16090,output_schema16081_16091,input_schema16082_16092,input_checker16083_16093,output_checker16084_16094){
return (function (G__16085,rest16086){
var validate__6163__auto__ = ufv___16090.get_cell();
if(cljs.core.truth_(validate__6163__auto__)){
var args__6164__auto___16095 = cljs.core.list_STAR_.call(null,G__16085,rest16086);
var temp__4126__auto___16096 = input_checker16083_16093.call(null,args__6164__auto___16095);
if(cljs.core.truth_(temp__4126__auto___16096)){
var error__6165__auto___16097 = temp__4126__auto___16096;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"child-bar","child-bar",1409828482,null),cljs.core.pr_str.call(null,error__6165__auto___16097)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6165__auto___16097,new cljs.core.Keyword(null,"value","value",305978217),args__6164__auto___16095,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16082_16092,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6166__auto__ = (function (){var opts = G__16085;
var children = rest16086;
while(true){
var vec__16089 = om_bootstrap.types.separate.call(null,om_bootstrap.progress_bar.ProgressBar,opts,om_bootstrap.progress_bar.defaults);
var bs = cljs.core.nth.call(null,vec__16089,(0),null);
var props = cljs.core.nth.call(null,vec__16089,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"progress-bar","progress-bar",-123877022),true], null),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"progress-bar-striped","progress-bar-striped",-229446458),true,new cljs.core.Keyword(null,"active","active",1895962068),true], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"striped?","striped?",-797214979).cljs$core$IFn$_invoke$arity$1(bs))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"progress-bar-striped","progress-bar-striped",-229446458),true], null):null));
var values = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-value-min","aria-value-min",-1211910577),new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"aria-value-max","aria-value-max",493213452),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"aria-value-now","aria-value-now",-1780367019),new cljs.core.Keyword(null,"now","now",-1650525531).cljs$core$IFn$_invoke$arity$1(bs)], null);
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(om_bootstrap.progress_bar.percentage.call(null,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"now","now",-1650525531).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(bs))),cljs.core.str("%")].join('')], null);
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null),values,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var label = temp__4126__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"sr-only?","sr-only?",-1143674250).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null))));
} else {
return label;
}
} else {
return null;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__6163__auto__)){
var temp__4126__auto___16098 = output_checker16084_16094.call(null,o__6166__auto__);
if(cljs.core.truth_(temp__4126__auto___16098)){
var error__6165__auto___16099 = temp__4126__auto___16098;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"child-bar","child-bar",1409828482,null),cljs.core.pr_str.call(null,error__6165__auto___16099)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6165__auto___16099,new cljs.core.Keyword(null,"value","value",305978217),o__6166__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16081_16091,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6166__auto__;
});})(ufv___16090,output_schema16081_16091,input_schema16082_16092,input_checker16083_16093,output_checker16084_16094))
;

om_bootstrap.progress_bar.child_bar.cljs$lang$maxFixedArity = (1);

om_bootstrap.progress_bar.child_bar.cljs$lang$applyTo = ((function (ufv___16090,output_schema16081_16091,input_schema16082_16092,input_checker16083_16093,output_checker16084_16094){
return (function (seq16087){
var G__16088 = cljs.core.first.call(null,seq16087);
var seq16087__$1 = cljs.core.next.call(null,seq16087);
return om_bootstrap.progress_bar.child_bar.cljs$core$IFn$_invoke$arity$variadic(G__16088,seq16087__$1);
});})(ufv___16090,output_schema16081_16091,input_schema16082_16092,input_checker16083_16093,output_checker16084_16094))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.progress_bar.child_bar),schema.core.make_fn_schema.call(null,output_schema16081_16091,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16082_16092], null)));
var ufv___16108 = schema.utils.use_fn_validation;
var output_schema16100_16109 = schema.core.Any;
var input_schema16101_16110 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.progress_bar.ProgressBar,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker16102_16111 = schema.core.checker.call(null,input_schema16101_16110);
var output_checker16103_16112 = schema.core.checker.call(null,output_schema16100_16109);
/**
 * Inputs: [opts :- ProgressBar & children]
 * 
 * Generates a progress bar component.
 */
om_bootstrap.progress_bar.progress_bar = ((function (ufv___16108,output_schema16100_16109,input_schema16101_16110,input_checker16102_16111,output_checker16103_16112){
return (function om_bootstrap$progress_bar$progress_bar(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.progress_bar.progress_bar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___16108,output_schema16100_16109,input_schema16101_16110,input_checker16102_16111,output_checker16103_16112))
;

om_bootstrap.progress_bar.progress_bar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___16108,output_schema16100_16109,input_schema16101_16110,input_checker16102_16111,output_checker16103_16112){
return (function (G__16104,rest16105){
var validate__6163__auto__ = ufv___16108.get_cell();
if(cljs.core.truth_(validate__6163__auto__)){
var args__6164__auto___16113 = cljs.core.list_STAR_.call(null,G__16104,rest16105);
var temp__4126__auto___16114 = input_checker16102_16111.call(null,args__6164__auto___16113);
if(cljs.core.truth_(temp__4126__auto___16114)){
var error__6165__auto___16115 = temp__4126__auto___16114;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"progress-bar","progress-bar",1516654505,null),cljs.core.pr_str.call(null,error__6165__auto___16115)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6165__auto___16115,new cljs.core.Keyword(null,"value","value",305978217),args__6164__auto___16113,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16101_16110,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6166__auto__ = (function (){var opts = G__16104;
var children = rest16105;
while(true){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested?","nested?",1182745618).cljs$core$IFn$_invoke$arity$1(opts))){
return om_bootstrap.progress_bar.child_bar.call(null,opts,children);
} else {
return cljs.core.apply.call(null,React.DOM.div,{"className": "progress"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.progress_bar.child_bar.call(null,opts,children),children],null))));
}
break;
}
})();
if(cljs.core.truth_(validate__6163__auto__)){
var temp__4126__auto___16116 = output_checker16103_16112.call(null,o__6166__auto__);
if(cljs.core.truth_(temp__4126__auto___16116)){
var error__6165__auto___16117 = temp__4126__auto___16116;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"progress-bar","progress-bar",1516654505,null),cljs.core.pr_str.call(null,error__6165__auto___16117)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6165__auto___16117,new cljs.core.Keyword(null,"value","value",305978217),o__6166__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16100_16109,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6166__auto__;
});})(ufv___16108,output_schema16100_16109,input_schema16101_16110,input_checker16102_16111,output_checker16103_16112))
;

om_bootstrap.progress_bar.progress_bar.cljs$lang$maxFixedArity = (1);

om_bootstrap.progress_bar.progress_bar.cljs$lang$applyTo = ((function (ufv___16108,output_schema16100_16109,input_schema16101_16110,input_checker16102_16111,output_checker16103_16112){
return (function (seq16106){
var G__16107 = cljs.core.first.call(null,seq16106);
var seq16106__$1 = cljs.core.next.call(null,seq16106);
return om_bootstrap.progress_bar.progress_bar.cljs$core$IFn$_invoke$arity$variadic(G__16107,seq16106__$1);
});})(ufv___16108,output_schema16100_16109,input_schema16101_16110,input_checker16102_16111,output_checker16103_16112))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.progress_bar.progress_bar),schema.core.make_fn_schema.call(null,output_schema16100_16109,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16101_16110], null)));

//# sourceMappingURL=progress_bar.js.map