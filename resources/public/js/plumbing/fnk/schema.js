// Compiled by ClojureScript 0.0-3211 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__10316__10317__auto__){
var G__20300 = p1__10316__10317__auto__;
if(G__20300){
var bit__4633__auto__ = null;
if(cljs.core.truth_((function (){var or__3959__auto__ = bit__4633__auto__;
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return G__20300.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__20300.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20300);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20300);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__20301_SHARP_){
return (cljs.core.val.call(null,p1__20301_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__20303 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__20303,(0),null);
var v = cljs.core.nth.call(null,vec__20303,(1),null);
var p = vec__20303;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___20309 = schema.utils.use_fn_validation;
var output_schema20304_20310 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema20305_20311 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker20306_20312 = schema.core.checker.call(null,input_schema20305_20311);
var output_checker20307_20313 = schema.core.checker.call(null,output_schema20304_20310);
/**
 * Inputs: [k]
 * Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 * Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___20309,output_schema20304_20310,input_schema20305_20311,input_checker20306_20312,output_checker20307_20313){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__20308){
var validate__9701__auto__ = ufv___20309.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___20314 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20308], null);
var temp__4126__auto___20315 = input_checker20306_20312.call(null,args__9702__auto___20314);
if(cljs.core.truth_(temp__4126__auto___20315)){
var error__9703__auto___20316 = temp__4126__auto___20315;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__9703__auto___20316)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___20316,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___20314,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20305_20311,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var k = G__20308;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___20317 = output_checker20307_20313.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___20317)){
var error__9703__auto___20318 = temp__4126__auto___20317;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__9703__auto___20318)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___20318,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20304_20310,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___20309,output_schema20304_20310,input_schema20305_20311,input_checker20306_20312,output_checker20307_20313))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema20304_20310,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20305_20311], null)));
var ufv___20324 = schema.utils.use_fn_validation;
var output_schema20319_20325 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema20320_20326 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker20321_20327 = schema.core.checker.call(null,input_schema20320_20326);
var output_checker20322_20328 = schema.core.checker.call(null,output_schema20319_20325);
/**
 * Inputs: [s]
 * Returns: {s/Keyword s/Bool}
 * 
 * Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___20324,output_schema20319_20325,input_schema20320_20326,input_checker20321_20327,output_checker20322_20328){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__20323){
var validate__9701__auto__ = ufv___20324.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___20329 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20323], null);
var temp__4126__auto___20330 = input_checker20321_20327.call(null,args__9702__auto___20329);
if(cljs.core.truth_(temp__4126__auto___20330)){
var error__9703__auto___20331 = temp__4126__auto___20330;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__9703__auto___20331)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___20331,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___20329,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20320_20326,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var s = G__20323;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___20332 = output_checker20322_20328.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___20332)){
var error__9703__auto___20333 = temp__4126__auto___20332;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__9703__auto___20333)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___20333,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20319_20325,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___20324,output_schema20319_20325,input_schema20320_20326,input_checker20321_20327,output_checker20322_20328))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema20319_20325,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20320_20326], null)));
var ufv___20339 = schema.utils.use_fn_validation;
var output_schema20334_20340 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema20335_20341 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker20336_20342 = schema.core.checker.call(null,input_schema20335_20341);
var output_checker20337_20343 = schema.core.checker.call(null,output_schema20334_20340);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 * Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 * Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___20339,output_schema20334_20340,input_schema20335_20341,input_checker20336_20342,output_checker20337_20343){
return (function plumbing$fnk$schema$split_schema_keys(G__20338){
var validate__9701__auto__ = ufv___20339.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___20344 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20338], null);
var temp__4126__auto___20345 = input_checker20336_20342.call(null,args__9702__auto___20344);
if(cljs.core.truth_(temp__4126__auto___20345)){
var error__9703__auto___20346 = temp__4126__auto___20345;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__9703__auto___20346)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___20346,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___20344,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20335_20341,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var s = G__20338;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___20347 = output_checker20337_20343.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___20347)){
var error__9703__auto___20348 = temp__4126__auto___20347;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__9703__auto___20348)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___20348,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20334_20340,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___20339,output_schema20334_20340,input_schema20335_20341,input_checker20336_20342,output_checker20337_20343))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema20334_20340,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20335_20341], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(){
var argseq__4999__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4999__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__20353){
var vec__20354 = p__20353;
var k = cljs.core.nth.call(null,vec__20354,(0),null);
var v = cljs.core.nth.call(null,vec__20354,(1),null);
var pk = key_project.call(null,k);
var temp__4124__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__20355 = temp__4124__auto__;
var ok = cljs.core.nth.call(null,vec__20355,(0),null);
var ov = cljs.core.nth.call(null,vec__20355,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq20349){
var G__20350 = cljs.core.first.call(null,seq20349);
var seq20349__$1 = cljs.core.next.call(null,seq20349);
var G__20351 = cljs.core.first.call(null,seq20349__$1);
var seq20349__$2 = cljs.core.next.call(null,seq20349__$1);
var G__20352 = cljs.core.first.call(null,seq20349__$2);
var seq20349__$3 = cljs.core.next.call(null,seq20349__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__20350,G__20351,G__20352,seq20349__$3);
});
var ufv___20363 = schema.utils.use_fn_validation;
var output_schema20357_20364 = plumbing.fnk.schema.InputSchema;
var input_schema20358_20365 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker20359_20366 = schema.core.checker.call(null,input_schema20358_20365);
var output_checker20360_20367 = schema.core.checker.call(null,output_schema20357_20364);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 * Returns: InputSchema
 * 
 * Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___20363,output_schema20357_20364,input_schema20358_20365,input_checker20359_20366,output_checker20360_20367){
return (function plumbing$fnk$schema$union_input_schemata(G__20361,G__20362){
var validate__9701__auto__ = ufv___20363.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___20368 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20361,G__20362], null);
var temp__4126__auto___20369 = input_checker20359_20366.call(null,args__9702__auto___20368);
if(cljs.core.truth_(temp__4126__auto___20369)){
var error__9703__auto___20370 = temp__4126__auto___20369;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__9703__auto___20370)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___20370,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___20368,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20358_20365,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var i1 = G__20361;
var i2 = G__20362;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__9701__auto__,ufv___20363,output_schema20357_20364,input_schema20358_20365,input_checker20359_20366,output_checker20360_20367){
return (function (p1__20356_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__20356_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__20356_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__9701__auto__,ufv___20363,output_schema20357_20364,input_schema20358_20365,input_checker20359_20366,output_checker20360_20367))
,((function (validate__9701__auto__,ufv___20363,output_schema20357_20364,input_schema20358_20365,input_checker20359_20366,output_checker20360_20367){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k1))){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__9701__auto__,ufv___20363,output_schema20357_20364,input_schema20358_20365,input_checker20359_20366,output_checker20360_20367))
,((function (validate__9701__auto__,ufv___20363,output_schema20357_20364,input_schema20358_20365,input_checker20359_20366,output_checker20360_20367){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__3947__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__3947__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__3947__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__9701__auto__,ufv___20363,output_schema20357_20364,input_schema20358_20365,input_checker20359_20366,output_checker20360_20367))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___20371 = output_checker20360_20367.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___20371)){
var error__9703__auto___20372 = temp__4126__auto___20371;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__9703__auto___20372)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___20372,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20357_20364,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___20363,output_schema20357_20364,input_schema20358_20365,input_checker20359_20366,output_checker20360_20367))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema20357_20364,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20358_20365], null)));
var ufv___20378 = schema.utils.use_fn_validation;
var output_schema20373_20379 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema20374_20380 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker20375_20381 = schema.core.checker.call(null,input_schema20374_20380);
var output_checker20376_20382 = schema.core.checker.call(null,output_schema20373_20379);
/**
 * Inputs: [input-schema :- InputSchema]
 * Returns: [s/Keyword]
 * 
 * Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___20378,output_schema20373_20379,input_schema20374_20380,input_checker20375_20381,output_checker20376_20382){
return (function plumbing$fnk$schema$required_toplevel_keys(G__20377){
var validate__9701__auto__ = ufv___20378.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___20383 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20377], null);
var temp__4126__auto___20384 = input_checker20375_20381.call(null,args__9702__auto___20383);
if(cljs.core.truth_(temp__4126__auto___20384)){
var error__9703__auto___20385 = temp__4126__auto___20384;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__9703__auto___20385)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___20385,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___20383,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20374_20380,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var input_schema = G__20377;
while(true){
return cljs.core.keep.call(null,((function (validate__9701__auto__,ufv___20378,output_schema20373_20379,input_schema20374_20380,input_checker20375_20381,output_checker20376_20382){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__9701__auto__,ufv___20378,output_schema20373_20379,input_schema20374_20380,input_checker20375_20381,output_checker20376_20382))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___20386 = output_checker20376_20382.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___20386)){
var error__9703__auto___20387 = temp__4126__auto___20386;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__9703__auto___20387)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___20387,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20373_20379,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___20378,output_schema20373_20379,input_schema20374_20380,input_checker20375_20381,output_checker20376_20382))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema20373_20379,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20374_20380], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4713__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__20396(s__20397){
return (new cljs.core.LazySeq(null,(function (){
var s__20397__$1 = s__20397;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20397__$1);
if(temp__4126__auto__){
var s__20397__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20397__$2)){
var c__4711__auto__ = cljs.core.chunk_first.call(null,s__20397__$2);
var size__4712__auto__ = cljs.core.count.call(null,c__4711__auto__);
var b__20399 = cljs.core.chunk_buffer.call(null,size__4712__auto__);
if((function (){var i__20398 = (0);
while(true){
if((i__20398 < size__4712__auto__)){
var vec__20402 = cljs.core._nth.call(null,c__4711__auto__,i__20398);
var k = cljs.core.nth.call(null,vec__20402,(0),null);
var v = cljs.core.nth.call(null,vec__20402,(1),null);
cljs.core.chunk_append.call(null,b__20399,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__20404 = (i__20398 + (1));
i__20398 = G__20404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20399),plumbing$fnk$schema$guess_expr_output_schema_$_iter__20396.call(null,cljs.core.chunk_rest.call(null,s__20397__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20399),null);
}
} else {
var vec__20403 = cljs.core.first.call(null,s__20397__$2);
var k = cljs.core.nth.call(null,vec__20403,(0),null);
var v = cljs.core.nth.call(null,vec__20403,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__20396.call(null,cljs.core.rest.call(null,s__20397__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4713__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4713__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__20413(s__20414){
return (new cljs.core.LazySeq(null,(function (){
var s__20414__$1 = s__20414;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20414__$1);
if(temp__4126__auto__){
var s__20414__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20414__$2)){
var c__4711__auto__ = cljs.core.chunk_first.call(null,s__20414__$2);
var size__4712__auto__ = cljs.core.count.call(null,c__4711__auto__);
var b__20416 = cljs.core.chunk_buffer.call(null,size__4712__auto__);
if((function (){var i__20415 = (0);
while(true){
if((i__20415 < size__4712__auto__)){
var vec__20419 = cljs.core._nth.call(null,c__4711__auto__,i__20415);
var k = cljs.core.nth.call(null,vec__20419,(0),null);
var v = cljs.core.nth.call(null,vec__20419,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__3959__auto__ = required_QMARK_;
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__20416,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__20421 = (i__20415 + (1));
i__20415 = G__20421;
continue;
} else {
var G__20422 = (i__20415 + (1));
i__20415 = G__20422;
continue;
}
} else {
var G__20423 = (i__20415 + (1));
i__20415 = G__20423;
continue;
}
} else {
var G__20424 = (i__20415 + (1));
i__20415 = G__20424;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20416),plumbing$fnk$schema$schema_diff_$_iter__20413.call(null,cljs.core.chunk_rest.call(null,s__20414__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20416),null);
}
} else {
var vec__20420 = cljs.core.first.call(null,s__20414__$2);
var k = cljs.core.nth.call(null,vec__20420,(0),null);
var v = cljs.core.nth.call(null,vec__20420,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__3959__auto__ = required_QMARK_;
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__20413.call(null,cljs.core.rest.call(null,s__20414__$2)));
} else {
var G__20425 = cljs.core.rest.call(null,s__20414__$2);
s__20414__$1 = G__20425;
continue;
}
} else {
var G__20426 = cljs.core.rest.call(null,s__20414__$2);
s__20414__$1 = G__20426;
continue;
}
} else {
var G__20427 = cljs.core.rest.call(null,s__20414__$2);
s__20414__$1 = G__20427;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4713__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___20450 = schema.utils.use_fn_validation;
var output_schema20428_20451 = schema.core.Any;
var input_schema20429_20452 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker20430_20453 = schema.core.checker.call(null,input_schema20429_20452);
var output_checker20431_20454 = schema.core.checker.call(null,output_schema20428_20451);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 * Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___20450,output_schema20428_20451,input_schema20429_20452,input_checker20430_20453,output_checker20431_20454){
return (function plumbing$fnk$schema$compose_schemata(G__20432,G__20433){
var validate__9701__auto__ = true;
if(validate__9701__auto__){
var args__9702__auto___20455 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20432,G__20433], null);
var temp__4126__auto___20456 = input_checker20430_20453.call(null,args__9702__auto___20455);
if(cljs.core.truth_(temp__4126__auto___20456)){
var error__9703__auto___20457 = temp__4126__auto___20456;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__9703__auto___20457)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___20457,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___20455,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20429_20452,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var G__20444 = G__20432;
var vec__20446 = G__20444;
var i2 = cljs.core.nth.call(null,vec__20446,(0),null);
var o2 = cljs.core.nth.call(null,vec__20446,(1),null);
var G__20445 = G__20433;
var vec__20447 = G__20445;
var i1 = cljs.core.nth.call(null,vec__20447,(0),null);
var o1 = cljs.core.nth.call(null,vec__20447,(1),null);
var G__20444__$1 = G__20444;
var G__20445__$1 = G__20445;
while(true){
var vec__20448 = G__20444__$1;
var i2__$1 = cljs.core.nth.call(null,vec__20448,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__20448,(1),null);
var vec__20449 = G__20445__$1;
var i1__$1 = cljs.core.nth.call(null,vec__20449,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__20449,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__9701__auto__){
var temp__4126__auto___20458 = output_checker20431_20454.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___20458)){
var error__9703__auto___20459 = temp__4126__auto___20458;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__9703__auto___20459)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___20459,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20428_20451,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___20450,output_schema20428_20451,input_schema20429_20452,input_checker20430_20453,output_checker20431_20454))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema20428_20451,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20429_20452], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___20538 = schema.utils.use_fn_validation;
var output_schema20460_20539 = schema.core.Any;
var input_schema20461_20540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker20462_20541 = schema.core.checker.call(null,input_schema20461_20540);
var output_checker20463_20542 = schema.core.checker.call(null,output_schema20460_20539);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 * Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___20538,output_schema20460_20539,input_schema20461_20540,input_checker20462_20541,output_checker20463_20542){
return (function plumbing$fnk$schema$split_schema(G__20464,G__20465){
var validate__9701__auto__ = ufv___20538.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___20543 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20464,G__20465], null);
var temp__4126__auto___20544 = input_checker20462_20541.call(null,args__9702__auto___20543);
if(cljs.core.truth_(temp__4126__auto___20544)){
var error__9703__auto___20545 = temp__4126__auto___20544;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__9703__auto___20545)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___20545,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___20543,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20461_20540,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var s = G__20464;
var ks = G__20465;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__4713__auto__ = ((function (ks__$1,validate__9701__auto__,ufv___20538,output_schema20460_20539,input_schema20461_20540,input_checker20462_20541,output_checker20463_20542){
return (function plumbing$fnk$schema$split_schema_$_iter__20502(s__20503){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__9701__auto__,ufv___20538,output_schema20460_20539,input_schema20461_20540,input_checker20462_20541,output_checker20463_20542){
return (function (){
var s__20503__$1 = s__20503;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20503__$1);
if(temp__4126__auto__){
var s__20503__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20503__$2)){
var c__4711__auto__ = cljs.core.chunk_first.call(null,s__20503__$2);
var size__4712__auto__ = cljs.core.count.call(null,c__4711__auto__);
var b__20505 = cljs.core.chunk_buffer.call(null,size__4712__auto__);
if((function (){var i__20504 = (0);
while(true){
if((i__20504 < size__4712__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__4711__auto__,i__20504);
cljs.core.chunk_append.call(null,b__20505,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4713__auto__ = ((function (i__20504,in_QMARK_,c__4711__auto__,size__4712__auto__,b__20505,s__20503__$2,temp__4126__auto__,ks__$1,validate__9701__auto__,ufv___20538,output_schema20460_20539,input_schema20461_20540,input_checker20462_20541,output_checker20463_20542){
return (function plumbing$fnk$schema$split_schema_$_iter__20502_$_iter__20522(s__20523){
return (new cljs.core.LazySeq(null,((function (i__20504,in_QMARK_,c__4711__auto__,size__4712__auto__,b__20505,s__20503__$2,temp__4126__auto__,ks__$1,validate__9701__auto__,ufv___20538,output_schema20460_20539,input_schema20461_20540,input_checker20462_20541,output_checker20463_20542){
return (function (){
var s__20523__$1 = s__20523;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20523__$1);
if(temp__4126__auto____$1){
var s__20523__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20523__$2)){
var c__4711__auto____$1 = cljs.core.chunk_first.call(null,s__20523__$2);
var size__4712__auto____$1 = cljs.core.count.call(null,c__4711__auto____$1);
var b__20525 = cljs.core.chunk_buffer.call(null,size__4712__auto____$1);
if((function (){var i__20524 = (0);
while(true){
if((i__20524 < size__4712__auto____$1)){
var vec__20528 = cljs.core._nth.call(null,c__4711__auto____$1,i__20524);
var k = cljs.core.nth.call(null,vec__20528,(0),null);
var v = cljs.core.nth.call(null,vec__20528,(1),null);
if(cljs.core.truth_((function (){var and__3947__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__3947__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__3947__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__20525,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__20546 = (i__20524 + (1));
i__20524 = G__20546;
continue;
} else {
var G__20547 = (i__20524 + (1));
i__20524 = G__20547;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20525),plumbing$fnk$schema$split_schema_$_iter__20502_$_iter__20522.call(null,cljs.core.chunk_rest.call(null,s__20523__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20525),null);
}
} else {
var vec__20529 = cljs.core.first.call(null,s__20523__$2);
var k = cljs.core.nth.call(null,vec__20529,(0),null);
var v = cljs.core.nth.call(null,vec__20529,(1),null);
if(cljs.core.truth_((function (){var and__3947__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__3947__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__3947__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__20502_$_iter__20522.call(null,cljs.core.rest.call(null,s__20523__$2)));
} else {
var G__20548 = cljs.core.rest.call(null,s__20523__$2);
s__20523__$1 = G__20548;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__20504,in_QMARK_,c__4711__auto__,size__4712__auto__,b__20505,s__20503__$2,temp__4126__auto__,ks__$1,validate__9701__auto__,ufv___20538,output_schema20460_20539,input_schema20461_20540,input_checker20462_20541,output_checker20463_20542))
,null,null));
});})(i__20504,in_QMARK_,c__4711__auto__,size__4712__auto__,b__20505,s__20503__$2,temp__4126__auto__,ks__$1,validate__9701__auto__,ufv___20538,output_schema20460_20539,input_schema20461_20540,input_checker20462_20541,output_checker20463_20542))
;
return iter__4713__auto__.call(null,s);
})()));

var G__20549 = (i__20504 + (1));
i__20504 = G__20549;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20505),plumbing$fnk$schema$split_schema_$_iter__20502.call(null,cljs.core.chunk_rest.call(null,s__20503__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20505),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__20503__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4713__auto__ = ((function (in_QMARK_,s__20503__$2,temp__4126__auto__,ks__$1,validate__9701__auto__,ufv___20538,output_schema20460_20539,input_schema20461_20540,input_checker20462_20541,output_checker20463_20542){
return (function plumbing$fnk$schema$split_schema_$_iter__20502_$_iter__20530(s__20531){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__20503__$2,temp__4126__auto__,ks__$1,validate__9701__auto__,ufv___20538,output_schema20460_20539,input_schema20461_20540,input_checker20462_20541,output_checker20463_20542){
return (function (){
var s__20531__$1 = s__20531;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20531__$1);
if(temp__4126__auto____$1){
var s__20531__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20531__$2)){
var c__4711__auto__ = cljs.core.chunk_first.call(null,s__20531__$2);
var size__4712__auto__ = cljs.core.count.call(null,c__4711__auto__);
var b__20533 = cljs.core.chunk_buffer.call(null,size__4712__auto__);
if((function (){var i__20532 = (0);
while(true){
if((i__20532 < size__4712__auto__)){
var vec__20536 = cljs.core._nth.call(null,c__4711__auto__,i__20532);
var k = cljs.core.nth.call(null,vec__20536,(0),null);
var v = cljs.core.nth.call(null,vec__20536,(1),null);
if(cljs.core.truth_((function (){var and__3947__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__3947__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__3947__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__20533,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__20550 = (i__20532 + (1));
i__20532 = G__20550;
continue;
} else {
var G__20551 = (i__20532 + (1));
i__20532 = G__20551;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20533),plumbing$fnk$schema$split_schema_$_iter__20502_$_iter__20530.call(null,cljs.core.chunk_rest.call(null,s__20531__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20533),null);
}
} else {
var vec__20537 = cljs.core.first.call(null,s__20531__$2);
var k = cljs.core.nth.call(null,vec__20537,(0),null);
var v = cljs.core.nth.call(null,vec__20537,(1),null);
if(cljs.core.truth_((function (){var and__3947__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__3947__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__3947__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__20502_$_iter__20530.call(null,cljs.core.rest.call(null,s__20531__$2)));
} else {
var G__20552 = cljs.core.rest.call(null,s__20531__$2);
s__20531__$1 = G__20552;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__20503__$2,temp__4126__auto__,ks__$1,validate__9701__auto__,ufv___20538,output_schema20460_20539,input_schema20461_20540,input_checker20462_20541,output_checker20463_20542))
,null,null));
});})(in_QMARK_,s__20503__$2,temp__4126__auto__,ks__$1,validate__9701__auto__,ufv___20538,output_schema20460_20539,input_schema20461_20540,input_checker20462_20541,output_checker20463_20542))
;
return iter__4713__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__20502.call(null,cljs.core.rest.call(null,s__20503__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__9701__auto__,ufv___20538,output_schema20460_20539,input_schema20461_20540,input_checker20462_20541,output_checker20463_20542))
,null,null));
});})(ks__$1,validate__9701__auto__,ufv___20538,output_schema20460_20539,input_schema20461_20540,input_checker20462_20541,output_checker20463_20542))
;
return iter__4713__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___20553 = output_checker20463_20542.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___20553)){
var error__9703__auto___20554 = temp__4126__auto___20553;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__9703__auto___20554)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___20554,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20460_20539,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___20538,output_schema20460_20539,input_schema20461_20540,input_checker20462_20541,output_checker20463_20542))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema20460_20539,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20461_20540], null)));
var ufv___20585 = schema.utils.use_fn_validation;
var output_schema20555_20586 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema20556_20587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker20557_20588 = schema.core.checker.call(null,input_schema20556_20587);
var output_checker20558_20589 = schema.core.checker.call(null,output_schema20555_20586);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 * Returns: GraphIOSchemata
 * 
 * Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___20585,output_schema20555_20586,input_schema20556_20587,input_checker20557_20588,output_checker20558_20589){
return (function plumbing$fnk$schema$sequence_schemata(G__20559,G__20560){
var validate__9701__auto__ = ufv___20585.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___20590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20559,G__20560], null);
var temp__4126__auto___20591 = input_checker20557_20588.call(null,args__9702__auto___20590);
if(cljs.core.truth_(temp__4126__auto___20591)){
var error__9703__auto___20592 = temp__4126__auto___20591;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__9703__auto___20592)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___20592,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___20590,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20556_20587,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var G__20576 = G__20559;
var vec__20578 = G__20576;
var i1 = cljs.core.nth.call(null,vec__20578,(0),null);
var o1 = cljs.core.nth.call(null,vec__20578,(1),null);
var G__20577 = G__20560;
var vec__20579 = G__20577;
var k = cljs.core.nth.call(null,vec__20579,(0),null);
var vec__20580 = cljs.core.nth.call(null,vec__20579,(1),null);
var i2 = cljs.core.nth.call(null,vec__20580,(0),null);
var o2 = cljs.core.nth.call(null,vec__20580,(1),null);
var G__20576__$1 = G__20576;
var G__20577__$1 = G__20577;
while(true){
var vec__20581 = G__20576__$1;
var i1__$1 = cljs.core.nth.call(null,vec__20581,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__20581,(1),null);
var vec__20582 = G__20577__$1;
var k__$1 = cljs.core.nth.call(null,vec__20582,(0),null);
var vec__20583 = cljs.core.nth.call(null,vec__20582,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__20583,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__20583,(1),null);
if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__20584 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__20584,(0),null);
var unused = cljs.core.nth.call(null,vec__20584,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___20593 = output_checker20558_20589.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___20593)){
var error__9703__auto___20594 = temp__4126__auto___20593;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__9703__auto___20594)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___20594,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20555_20586,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___20585,output_schema20555_20586,input_schema20556_20587,input_checker20557_20588,output_checker20558_20589))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema20555_20586,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20556_20587], null)));

//# sourceMappingURL=schema.js.map