// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
var ufv___17412 = schema.utils.use_fn_validation;
var output_schema17407_17413 = schema.core.Any;
var input_schema17408_17414 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);
var input_checker17409_17415 = schema.core.checker.call(null,input_schema17408_17414);
var output_checker17410_17416 = schema.core.checker.call(null,output_schema17407_17413);
/**
 * Inputs: [schema :- {s/Any s/Any}]
 * 
 * Returns all keys from a schema.
 */
om_bootstrap.types.schema_keys = ((function (ufv___17412,output_schema17407_17413,input_schema17408_17414,input_checker17409_17415,output_checker17410_17416){
return (function om_bootstrap$types$schema_keys(G__17411){
var validate__9701__auto__ = ufv___17412.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17417 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17411], null);
var temp__4126__auto___17418 = input_checker17409_17415.call(null,args__9702__auto___17417);
if(cljs.core.truth_(temp__4126__auto___17418)){
var error__9703__auto___17419 = temp__4126__auto___17418;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__9703__auto___17419)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17419,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17417,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17408_17414,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var schema__$1 = G__17411;
while(true){
return cljs.core.map.call(null,((function (validate__9701__auto__,ufv___17412,output_schema17407_17413,input_schema17408_17414,input_checker17409_17415,output_checker17410_17416){
return (function (k){
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k))){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else {
return k;
}
});})(validate__9701__auto__,ufv___17412,output_schema17407_17413,input_schema17408_17414,input_checker17409_17415,output_checker17410_17416))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17420 = output_checker17410_17416.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17420)){
var error__9703__auto___17421 = temp__4126__auto___17420;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__9703__auto___17421)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17421,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17407_17413,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___17412,output_schema17407_17413,input_schema17408_17414,input_checker17409_17415,output_checker17410_17416))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema17407_17413,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17408_17414], null)));
var ufv___17427 = schema.utils.use_fn_validation;
var output_schema17422_17428 = schema.core.Any;
var input_schema17423_17429 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);
var input_checker17424_17430 = schema.core.checker.call(null,input_schema17423_17429);
var output_checker17425_17431 = schema.core.checker.call(null,output_schema17422_17428);
/**
 * Inputs: [schema]
 * 
 * Returns a map schema that accepts the supplied map schema, plus any
 * other optional keys that show up in the map. Such a schema can only
 * enforce that required keys are missing.
 */
om_bootstrap.types.at_least = ((function (ufv___17427,output_schema17422_17428,input_schema17423_17429,input_checker17424_17430,output_checker17425_17431){
return (function om_bootstrap$types$at_least(G__17426){
var validate__9701__auto__ = ufv___17427.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17432 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17426], null);
var temp__4126__auto___17433 = input_checker17424_17430.call(null,args__9702__auto___17432);
if(cljs.core.truth_(temp__4126__auto___17433)){
var error__9703__auto___17434 = temp__4126__auto___17433;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__9703__auto___17434)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17434,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17432,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17423_17429,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var schema__$1 = G__17426;
while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17435 = output_checker17425_17431.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17435)){
var error__9703__auto___17436 = temp__4126__auto___17435;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__9703__auto___17436)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17436,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17422_17428,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___17427,output_schema17422_17428,input_schema17423_17429,input_checker17424_17430,output_checker17425_17431))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema17422_17428,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17423_17429], null)));
om_bootstrap.types.Component = schema.core.named.call(null,schema.core.Any,"Alias for an om component, since I don't know what type to put here.");
om_bootstrap.types.Renderable = schema.core.named.call(null,schema.core.Any,"Anything that can get rendered.");
/**
 * Map of keyword to the proper bootstrap class name.
 */
om_bootstrap.types.class_map = cljs.core.PersistentHashMap.fromArrays(["alert","label","form","progress-bar","modal","navbar","button-toolbar","panel-group","nav","column","row","input-group","panel","well","button-group","button","glyphicon"],["alert","label","form","progress-bar","modal","navbar","btn-toolbar","panel-group","nav","col","row","input-group","panel","well","btn-group","btn","glyphicon"]);
/**
 * Map of style keywords -> styles.
 */
om_bootstrap.types.style_map = cljs.core.PersistentHashMap.fromArrays(["success","warning","inline","pills","info","tabs","primary","danger","link","default"],["success","warning","inline","pills","info","tabs","primary","danger","link","default"]);
om_bootstrap.types.size_map = new cljs.core.PersistentArrayMap(null, 4, ["large","lg","medium","md","small","sm","xsmall","xs"], null);
om_bootstrap.types.BSClass = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.class_map));
om_bootstrap.types.BSStyle = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.style_map));
om_bootstrap.types.BSSize = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.size_map));
om_bootstrap.types.BootstrapClass = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590)),om_bootstrap.types.BSClass,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),om_bootstrap.types.BSStyle,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)),om_bootstrap.types.BSSize], true, false);
/**
 * Applies all default bootstrap options to the supplied schema. If
 * the incoming schema has one of the the keys from BootstrapClass,
 * that wins (even if it's required).
 */
om_bootstrap.types.bootstrap = (function om_bootstrap$types$bootstrap(schema__$1){
var bootstrap_schema = cljs.core.apply.call(null,cljs.core.dissoc,om_bootstrap.types.BootstrapClass,cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,cljs.core.select_keys.call(null,schema__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)], null)))));
return om_bootstrap.types.at_least.call(null,cljs.core.merge.call(null,bootstrap_schema,schema__$1));
});
var ufv___17451 = schema.utils.use_fn_validation;
var output_schema17437_17452 = schema.core.pair.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");
var input_schema17438_17453 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_schema17443_17454 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);
var input_checker17439_17455 = schema.core.checker.call(null,input_schema17438_17453);
var output_checker17440_17456 = schema.core.checker.call(null,output_schema17437_17452);
var input_checker17444_17457 = schema.core.checker.call(null,input_schema17443_17454);
var output_checker17445_17458 = schema.core.checker.call(null,output_schema17437_17452);
/**
 * Inputs: ([schema opts] [schema opts defaults])
 * Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
 * 
 * Returns two maps; the first is all of the schema options, the
 * second is the REST of the options.
 */
om_bootstrap.types.separate = ((function (ufv___17451,output_schema17437_17452,input_schema17438_17453,input_schema17443_17454,input_checker17439_17455,output_checker17440_17456,input_checker17444_17457,output_checker17445_17458){
return (function om_bootstrap$types$separate(){
var G__17450 = arguments.length;
switch (G__17450) {
case 2:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});})(ufv___17451,output_schema17437_17452,input_schema17438_17453,input_schema17443_17454,input_checker17439_17455,output_checker17440_17456,input_checker17444_17457,output_checker17445_17458))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___17451,output_schema17437_17452,input_schema17438_17453,input_schema17443_17454,input_checker17439_17455,output_checker17440_17456,input_checker17444_17457,output_checker17445_17458){
return (function (G__17441,G__17442){
var validate__9701__auto__ = ufv___17451.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17460 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17441,G__17442], null);
var temp__4126__auto___17461 = input_checker17439_17455.call(null,args__9702__auto___17460);
if(cljs.core.truth_(temp__4126__auto___17461)){
var error__9703__auto___17462 = temp__4126__auto___17461;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__9703__auto___17462)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17462,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17460,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17438_17453,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var schema__$1 = G__17441;
var opts = G__17442;
while(true){
return om_bootstrap.types.separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17463 = output_checker17440_17456.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17463)){
var error__9703__auto___17464 = temp__4126__auto___17463;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__9703__auto___17464)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17464,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17437_17452,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___17451,output_schema17437_17452,input_schema17438_17453,input_schema17443_17454,input_checker17439_17455,output_checker17440_17456,input_checker17444_17457,output_checker17445_17458))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___17451,output_schema17437_17452,input_schema17438_17453,input_schema17443_17454,input_checker17439_17455,output_checker17440_17456,input_checker17444_17457,output_checker17445_17458){
return (function (G__17446,G__17447,G__17448){
var validate__9701__auto__ = ufv___17451.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17465 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17446,G__17447,G__17448], null);
var temp__4126__auto___17466 = input_checker17444_17457.call(null,args__9702__auto___17465);
if(cljs.core.truth_(temp__4126__auto___17466)){
var error__9703__auto___17467 = temp__4126__auto___17466;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__9703__auto___17467)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17467,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17465,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17443_17454,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var schema__$1 = G__17446;
var opts = G__17447;
var defaults = G__17448;
while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));
var opts__$1 = cljs.core.merge.call(null,defaults,opts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17468 = output_checker17445_17458.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17468)){
var error__9703__auto___17469 = temp__4126__auto___17468;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__9703__auto___17469)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17469,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17437_17452,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___17451,output_schema17437_17452,input_schema17438_17453,input_schema17443_17454,input_checker17439_17455,output_checker17440_17456,input_checker17444_17457,output_checker17445_17458))
;

om_bootstrap.types.separate.cljs$lang$maxFixedArity = 3;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema17437_17452,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17438_17453,input_schema17443_17454], null)));
var ufv___17483 = schema.utils.use_fn_validation;
var output_schema17470_17484 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);
var input_schema17471_17485 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker17472_17486 = schema.core.checker.call(null,input_schema17471_17485);
var output_checker17473_17487 = schema.core.checker.call(null,output_schema17470_17484);
/**
 * Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
 * Returns: {s/Str s/Bool}
 * 
 * Returns input for class-set.
 */
om_bootstrap.types.bs_class_set = ((function (ufv___17483,output_schema17470_17484,input_schema17471_17485,input_checker17472_17486,output_checker17473_17487){
return (function om_bootstrap$types$bs_class_set(G__17474){
var validate__9701__auto__ = ufv___17483.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17488 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17474], null);
var temp__4126__auto___17489 = input_checker17472_17486.call(null,args__9702__auto___17488);
if(cljs.core.truth_(temp__4126__auto___17489)){
var error__9703__auto___17490 = temp__4126__auto___17489;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__9703__auto___17490)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17490,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17488,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17471_17485,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var G__17480 = G__17474;
var map__17481 = G__17480;
var map__17481__$1 = ((cljs.core.seq_QMARK_.call(null,map__17481))?cljs.core.apply.call(null,cljs.core.hash_map,map__17481):map__17481);
var bs_size = cljs.core.get.call(null,map__17481__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var bs_style = cljs.core.get.call(null,map__17481__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_class = cljs.core.get.call(null,map__17481__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var G__17480__$1 = G__17480;
while(true){
var map__17482 = G__17480__$1;
var map__17482__$1 = ((cljs.core.seq_QMARK_.call(null,map__17482))?cljs.core.apply.call(null,cljs.core.hash_map,map__17482):map__17482);
var bs_size__$1 = cljs.core.get.call(null,map__17482__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var bs_style__$1 = cljs.core.get.call(null,map__17482__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_class__$1 = cljs.core.get.call(null,map__17482__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var temp__4124__auto__ = om_bootstrap.types.class_map.call(null,bs_class__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var klass = temp__4124__auto__;
var prefix = [cljs.core.str(cljs.core.name.call(null,klass)),cljs.core.str("-")].join('');
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4126__auto__ = om_bootstrap.types.size_map.call(null,bs_size__$1);
if(cljs.core.truth_(temp__4126__auto__)){
var size = temp__4126__auto__;
return new cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,size))].join(''),true], true, false);
} else {
return null;
}
})(),(function (){var temp__4126__auto__ = om_bootstrap.types.style_map.call(null,bs_style__$1);
if(cljs.core.truth_(temp__4126__auto__)){
var style = temp__4126__auto__;
return new cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,style))].join(''),true], true, false);
} else {
return null;
}
})());
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17491 = output_checker17473_17487.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17491)){
var error__9703__auto___17492 = temp__4126__auto___17491;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__9703__auto___17492)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17492,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17470_17484,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___17483,output_schema17470_17484,input_schema17471_17485,input_checker17472_17486,output_checker17473_17487))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema17470_17484,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17471_17485], null)));

//# sourceMappingURL=types.js.map