// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.util');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('om.core');
goog.require('goog.object');
/**
 * Returns a map that consists of the rest of the maps conj-ed onto
 * the first.  If a key occurs in more than one map, the mapping(s)
 * from the latter (left-to-right) will be combined with the mapping in
 * the result by looking up the proper merge function and in the
 * supplied map of key -> merge-fn and using that for the big merge. If
 * a key doesn't have a merge function, the right value wins (as with
 * merge).
 */
om_bootstrap.util.merge_with_fns = (function om_bootstrap$util$merge_with_fns(k__GT_fn,maps){
var merge_entry = (function om_bootstrap$util$merge_with_fns_$_merge_entry(m,e){
var k = cljs.core.key.call(null,e);
var v = cljs.core.val.call(null,e);
var temp__4124__auto__ = (function (){var and__3947__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__3947__auto__){
return k__GT_fn.call(null,k);
} else {
return and__3947__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var f = temp__4124__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
var merge = (function om_bootstrap$util$merge_with_fns_$_merge(m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__3959__auto__ = m1;
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___17500 = schema.utils.use_fn_validation;
var output_schema17495_17501 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema17496_17502 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);
var input_checker17497_17503 = schema.core.checker.call(null,input_schema17496_17502);
var output_checker17498_17504 = schema.core.checker.call(null,output_schema17495_17501);
/**
 * Inputs: [x :- s/Any]
 * Returns: [s/Any]
 */
om_bootstrap.util.collectify = ((function (ufv___17500,output_schema17495_17501,input_schema17496_17502,input_checker17497_17503,output_checker17498_17504){
return (function om_bootstrap$util$collectify(G__17499){
var validate__9701__auto__ = ufv___17500.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17505 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17499], null);
var temp__4126__auto___17506 = input_checker17497_17503.call(null,args__9702__auto___17505);
if(cljs.core.truth_(temp__4126__auto___17506)){
var error__9703__auto___17507 = temp__4126__auto___17506;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__9703__auto___17507)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17507,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17505,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17496_17502,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var x = G__17499;
while(true){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17508 = output_checker17498_17504.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17508)){
var error__9703__auto___17509 = temp__4126__auto___17508;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__9703__auto___17509)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17509,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17495_17501,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___17500,output_schema17495_17501,input_schema17496_17502,input_checker17497_17503,output_checker17498_17504))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema17495_17501,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17496_17502], null)));
/**
 * This is the same as om.core/get-props. We added it to get around
 * the new precondition in Om 0.8.0.
 */
om_bootstrap.util.get_props = (function om_bootstrap$util$get_props(x){
return (x.props["__om_cursor"]);
});
var ufv___17515 = schema.utils.use_fn_validation;
var output_schema17510_17516 = schema.core.Bool;
var input_schema17511_17517 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);
var input_checker17512_17518 = schema.core.checker.call(null,input_schema17511_17517);
var output_checker17513_17519 = schema.core.checker.call(null,output_schema17510_17516);
/**
 * Inputs: [x]
 * Returns: s/Bool
 */
om_bootstrap.util.om_component_QMARK_ = ((function (ufv___17515,output_schema17510_17516,input_schema17511_17517,input_checker17512_17518,output_checker17513_17519){
return (function om_bootstrap$util$om_component_QMARK_(G__17514){
var validate__9701__auto__ = ufv___17515.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17520 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17514], null);
var temp__4126__auto___17521 = input_checker17512_17518.call(null,args__9702__auto___17520);
if(cljs.core.truth_(temp__4126__auto___17521)){
var error__9703__auto___17522 = temp__4126__auto___17521;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),cljs.core.pr_str.call(null,error__9703__auto___17522)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17522,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17520,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17511_17517,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var x = G__17514;
while(true){
return cljs.core.boolean$.call(null,om_bootstrap.util.get_props.call(null,x));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17523 = output_checker17513_17519.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17523)){
var error__9703__auto___17524 = temp__4126__auto___17523;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),cljs.core.pr_str.call(null,error__9703__auto___17524)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17524,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17510_17516,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___17515,output_schema17510_17516,input_schema17511_17517,input_checker17512_17518,output_checker17513_17519))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.om_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema17510_17516,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17511_17517], null)));
var ufv___17530 = schema.utils.use_fn_validation;
var output_schema17525_17531 = schema.core.Bool;
var input_schema17526_17532 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);
var input_checker17527_17533 = schema.core.checker.call(null,input_schema17526_17532);
var output_checker17528_17534 = schema.core.checker.call(null,output_schema17525_17531);
/**
 * Inputs: [child]
 * Returns: s/Bool
 * 
 * TODO: Once Om updates its externs to include this file, we can
 * remove the janky aget call.
 */
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___17530,output_schema17525_17531,input_schema17526_17532,input_checker17527_17533,output_checker17528_17534){
return (function om_bootstrap$util$strict_valid_component_QMARK_(G__17529){
var validate__9701__auto__ = ufv___17530.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17535 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17529], null);
var temp__4126__auto___17536 = input_checker17527_17533.call(null,args__9702__auto___17535);
if(cljs.core.truth_(temp__4126__auto___17536)){
var error__9703__auto___17537 = temp__4126__auto___17536;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__9703__auto___17537)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17537,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17535,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17526_17532,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var child = G__17529;
while(true){
return (React["isValidElement"]).call(null,child);
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17538 = output_checker17528_17534.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17538)){
var error__9703__auto___17539 = temp__4126__auto___17538;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__9703__auto___17539)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17539,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17525_17531,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___17530,output_schema17525_17531,input_schema17526_17532,input_checker17527_17533,output_checker17528_17534))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema17525_17531,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17526_17532], null)));
var ufv___17545 = schema.utils.use_fn_validation;
var output_schema17540_17546 = schema.core.Bool;
var input_schema17541_17547 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);
var input_checker17542_17548 = schema.core.checker.call(null,input_schema17541_17547);
var output_checker17543_17549 = schema.core.checker.call(null,output_schema17540_17546);
/**
 * Inputs: [child]
 * Returns: s/Bool
 * 
 * Returns true if the supplied argument is a valid React component,
 * false otherwise.
 */
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___17545,output_schema17540_17546,input_schema17541_17547,input_checker17542_17548,output_checker17543_17549){
return (function om_bootstrap$util$valid_component_QMARK_(G__17544){
var validate__9701__auto__ = ufv___17545.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17550 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17544], null);
var temp__4126__auto___17551 = input_checker17542_17548.call(null,args__9702__auto___17550);
if(cljs.core.truth_(temp__4126__auto___17551)){
var error__9703__auto___17552 = temp__4126__auto___17551;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__9703__auto___17552)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17552,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17550,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17541_17547,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var child = G__17544;
while(true){
var or__3959__auto__ = typeof child === 'string';
if(or__3959__auto__){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = typeof child === 'number';
if(or__3959__auto____$1){
return or__3959__auto____$1;
} else {
return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17553 = output_checker17543_17549.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17553)){
var error__9703__auto___17554 = temp__4126__auto___17553;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__9703__auto___17554)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17554,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17540_17546,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___17545,output_schema17540_17546,input_schema17541_17547,input_checker17542_17548,output_checker17543_17549))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema17540_17546,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17541_17547], null)));
var ufv___17560 = schema.utils.use_fn_validation;
var output_schema17555_17561 = schema.core.Bool;
var input_schema17556_17562 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker17557_17563 = schema.core.checker.call(null,input_schema17556_17562);
var output_checker17558_17564 = schema.core.checker.call(null,output_schema17555_17561);
/**
 * Inputs: [children]
 * Returns: s/Bool
 * 
 * Returns true if the supplied sequence contains some valid React component,
 * false otherwise.
 */
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___17560,output_schema17555_17561,input_schema17556_17562,input_checker17557_17563,output_checker17558_17564){
return (function om_bootstrap$util$some_valid_component_QMARK_(G__17559){
var validate__9701__auto__ = ufv___17560.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17565 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17559], null);
var temp__4126__auto___17566 = input_checker17557_17563.call(null,args__9702__auto___17565);
if(cljs.core.truth_(temp__4126__auto___17566)){
var error__9703__auto___17567 = temp__4126__auto___17566;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__9703__auto___17567)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17567,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17565,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17556_17562,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var children = G__17559;
while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17568 = output_checker17558_17564.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17568)){
var error__9703__auto___17569 = temp__4126__auto___17568;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__9703__auto___17569)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17569,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17555_17561,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___17560,output_schema17555_17561,input_schema17556_17562,input_checker17557_17563,output_checker17558_17564))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema17555_17561,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17556_17562], null)));
/**
 * Generates a new function that calls each supplied side-effecting
 * function.
 */
om_bootstrap.util.chain_fns = (function om_bootstrap$util$chain_fns(l,r){
if(cljs.core.truth_((function (){var and__3947__auto__ = l;
if(cljs.core.truth_(and__3947__auto__)){
return r;
} else {
return and__3947__auto__;
}
})())){
return (function() { 
var G__17570__delegate = function (args){
cljs.core.apply.call(null,l,args);

return cljs.core.apply.call(null,r,args);
};
var G__17570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17571__i = 0, G__17571__a = new Array(arguments.length -  0);
while (G__17571__i < G__17571__a.length) {G__17571__a[G__17571__i] = arguments[G__17571__i + 0]; ++G__17571__i;}
  args = new cljs.core.IndexedSeq(G__17571__a,0);
} 
return G__17570__delegate.call(this,args);};
G__17570.cljs$lang$maxFixedArity = 0;
G__17570.cljs$lang$applyTo = (function (arglist__17572){
var args = cljs.core.seq(arglist__17572);
return G__17570__delegate(args);
});
G__17570.cljs$core$IFn$_invoke$arity$variadic = G__17570__delegate;
return G__17570;
})()
;
} else {
var or__3959__auto__ = l;
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return r;
}
}
});
/**
 * Map of React keyword to a custom function for its merge. Tries to
 * do a decent job with event handlers as well; currently only
 * handles :on-select :on-click, :on-blur, kebab-cased as om-tools
 * prefers.
 */
om_bootstrap.util.react_merges = (function (){var merge_class = (function (l,r){
return [cljs.core.str(l),cljs.core.str(" "),cljs.core.str(r)].join('');
});
var orig_fn = ((function (merge_class){
return (function (l,r){
var or__3959__auto__ = l;
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return r;
}
});})(merge_class))
;
var empty_fn = ((function (merge_class,orig_fn){
return (function (_,___$1){
return null;
});})(merge_class,orig_fn))
;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"class","class",-2030961996)],[empty_fn,empty_fn,orig_fn,om_bootstrap.util.chain_fns,om_bootstrap.util.chain_fns,merge_class,cljs.core.merge,om_bootstrap.util.chain_fns,merge_class]);
})();
/**
 * Merges two maps that represent React properties. Merges occur
 * according to the functions defined in `react-merges`.
 */
om_bootstrap.util.merge_props = (function om_bootstrap$util$merge_props(){
var argseq__4999__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(argseq__4999__auto__);
});

om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (prop_maps){
var react_merge = (function om_bootstrap$util$react_merge(xs){
return om_bootstrap.util.merge_with_fns.call(null,om_bootstrap.util.react_merges,xs);
});
var normalize_class = (function om_bootstrap$util$normalize_class(m){
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996))){
return react_merge.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(m)], null)], null));
} else {
return m;
}
});
var ret = react_merge.call(null,cljs.core.map.call(null,normalize_class,prop_maps));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ret))){
return cljs.core.dissoc.call(null,ret,new cljs.core.Keyword(null,"key","key",-1516042587));
} else {
return ret;
}
});

om_bootstrap.util.merge_props.cljs$lang$maxFixedArity = (0);

om_bootstrap.util.merge_props.cljs$lang$applyTo = (function (seq17573){
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17573));
});
/**
 * Returns a basic, shallow copy of the supplied JS object.
 */
om_bootstrap.util.copy_js = (function om_bootstrap$util$copy_js(arr){
var ret = (function (){var obj17581 = {};
return obj17581;
})();
var seq__17582_17586 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));
var chunk__17583_17587 = null;
var count__17584_17588 = (0);
var i__17585_17589 = (0);
while(true){
if((i__17585_17589 < count__17584_17588)){
var k_17590 = cljs.core._nth.call(null,chunk__17583_17587,i__17585_17589);
if(cljs.core.truth_(arr.hasOwnProperty(k_17590))){
(ret[k_17590] = (arr[k_17590]));
} else {
}

var G__17591 = seq__17582_17586;
var G__17592 = chunk__17583_17587;
var G__17593 = count__17584_17588;
var G__17594 = (i__17585_17589 + (1));
seq__17582_17586 = G__17591;
chunk__17583_17587 = G__17592;
count__17584_17588 = G__17593;
i__17585_17589 = G__17594;
continue;
} else {
var temp__4126__auto___17595 = cljs.core.seq.call(null,seq__17582_17586);
if(temp__4126__auto___17595){
var seq__17582_17596__$1 = temp__4126__auto___17595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17582_17596__$1)){
var c__4744__auto___17597 = cljs.core.chunk_first.call(null,seq__17582_17596__$1);
var G__17598 = cljs.core.chunk_rest.call(null,seq__17582_17596__$1);
var G__17599 = c__4744__auto___17597;
var G__17600 = cljs.core.count.call(null,c__4744__auto___17597);
var G__17601 = (0);
seq__17582_17586 = G__17598;
chunk__17583_17587 = G__17599;
count__17584_17588 = G__17600;
i__17585_17589 = G__17601;
continue;
} else {
var k_17602 = cljs.core.first.call(null,seq__17582_17596__$1);
if(cljs.core.truth_(arr.hasOwnProperty(k_17602))){
(ret[k_17602] = (arr[k_17602]));
} else {
}

var G__17603 = cljs.core.next.call(null,seq__17582_17596__$1);
var G__17604 = null;
var G__17605 = (0);
var G__17606 = (0);
seq__17582_17586 = G__17603;
chunk__17583_17587 = G__17604;
count__17584_17588 = G__17605;
i__17585_17589 = G__17606;
continue;
}
} else {
}
}
break;
}

return ret;
});
om_bootstrap.util.create_element = (function om_bootstrap$util$create_element(){
var G__17608 = arguments.length;
switch (G__17608) {
case 1:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.create_element.call(null,child,null);
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2 = (function (child,props){
return React.createElement(child.type,props);
});

om_bootstrap.util.create_element.cljs$lang$maxFixedArity = 2;
/**
 * Merges the supplied extra properties into the underlying Om cursor
 * and calls the constructor to clone the React component.
 * 
 * Requires that the supplied child has an Om cursor attached to it!
 */
om_bootstrap.util.clone_om = (function om_bootstrap$util$clone_om(child,extra_props){
var om_props = om_bootstrap.util.get_props.call(null,child);
var props = {};
var cloned_child = goog.object.clone(child);
goog.object.extend(props,child.props,{"__om_cursor": ((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,om_props):om_bootstrap.util.merge_props.call(null,om_props,extra_props))});

goog.object.extend(cloned_child,{"props": props});

return cloned_child;
});
/**
 * This function is called if the React component child was NOT
 * generated by Om. Merges the supplied properties into the -props
 * field of the supplied React component and creates a shallow copy.
 */
om_bootstrap.util.clone_basic_react = (function om_bootstrap$util$clone_basic_react(child,extra_props){
var props = cljs.core.js__GT_clj.call(null,child.props,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var new_props = cljs.core.merge.call(null,((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,props):om_bootstrap.util.merge_props.call(null,props,extra_props)),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4126__auto__)){
var children = temp__4126__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else {
return null;
}
})());
return om_bootstrap.util.create_element.call(null,child,cljs.core.clj__GT_js.call(null,new_props));
});
/**
 * Returns a shallow copy of the supplied component (child); the copy
 * will have any props provided by extra-props merged in. Props are
 * merged in the same manner as merge-props, so props like :class will
 * be merged intelligently.
 * 
 * extra-props can be a function of the old props that returns new
 * props, OR it can be a map of props.
 * 
 * If the supplied child is an Om component, any supplied extra
 * properties will be merged into the underlying cursor and accessible
 * in the Om constructor.
 */
om_bootstrap.util.clone_with_props = (function om_bootstrap$util$clone_with_props(){
var G__17611 = arguments.length;
switch (G__17611) {
case 1:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.clone_with_props.call(null,child,cljs.core.PersistentArrayMap.EMPTY);
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2 = (function (child,extra_props){
if(cljs.core.not.call(null,om_bootstrap.util.strict_valid_component_QMARK_.call(null,child))){
return child;
} else {
if(cljs.core.truth_(om_bootstrap.util.om_component_QMARK_.call(null,child))){
return om_bootstrap.util.clone_om.call(null,child,extra_props);
} else {
if((cljs.core.map_QMARK_.call(null,extra_props)) && (cljs.core.empty_QMARK_.call(null,extra_props))){
return om_bootstrap.util.create_element.call(null,child,child.props);
} else {
return om_bootstrap.util.clone_basic_react.call(null,child,extra_props);

}
}
}
});

om_bootstrap.util.clone_with_props.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=util.js.map