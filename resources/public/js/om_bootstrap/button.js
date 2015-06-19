// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.button');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.mixin');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
om_bootstrap.button.Button = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"block?","block?",1102479923)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004)),schema.core.Bool], true, false));
om_bootstrap.button.ButtonGroup = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.Bool], true, false));
var ufv___17162 = schema.utils.use_fn_validation;
var output_schema17156_17163 = schema.core.Any;
var input_schema17157_17164 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker17158_17165 = schema.core.checker.call(null,input_schema17157_17164);
var output_checker17159_17166 = schema.core.checker.call(null,output_schema17156_17163);
/**
 * Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
 */
om_bootstrap.button.render_anchor = ((function (ufv___17162,output_schema17156_17163,input_schema17157_17164,input_checker17158_17165,output_checker17159_17166){
return (function om_bootstrap$button$render_anchor(G__17160,G__17161){
var validate__9701__auto__ = ufv___17162.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17167 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17160,G__17161], null);
var temp__4126__auto___17168 = input_checker17158_17165.call(null,args__9702__auto___17167);
if(cljs.core.truth_(temp__4126__auto___17168)){
var error__9703__auto___17169 = temp__4126__auto___17168;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__9703__auto___17169)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17169,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17167,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17157_17164,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__17160;
var children = G__17161;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17170 = output_checker17159_17166.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17170)){
var error__9703__auto___17171 = temp__4126__auto___17170;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__9703__auto___17171)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17171,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17156_17163,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___17162,output_schema17156_17163,input_schema17157_17164,input_checker17158_17165,output_checker17159_17166))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema17156_17163,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17157_17164], null)));
var ufv___17181 = schema.utils.use_fn_validation;
var output_schema17172_17182 = om_bootstrap.types.Component;
var input_schema17173_17183 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,new cljs.core.Symbol(null,"props","props",2093813254,null)),schema.core.Any], null);
var input_checker17174_17184 = schema.core.checker.call(null,input_schema17173_17183);
var output_checker17175_17185 = schema.core.checker.call(null,output_schema17172_17182);
/**
 * Inputs: [props :- Button & children]
 * Returns: t/Component
 * 
 * Renders a button.
 */
om_bootstrap.button.button = ((function (ufv___17181,output_schema17172_17182,input_schema17173_17183,input_checker17174_17184,output_checker17175_17185){
return (function om_bootstrap$button$button(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___17181,output_schema17172_17182,input_schema17173_17183,input_checker17174_17184,output_checker17175_17185))
;

om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___17181,output_schema17172_17182,input_schema17173_17183,input_checker17174_17184,output_checker17175_17185){
return (function (G__17176,rest17177){
var validate__9701__auto__ = ufv___17181.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17186 = cljs.core.list_STAR_.call(null,G__17176,rest17177);
var temp__4126__auto___17187 = input_checker17174_17184.call(null,args__9702__auto___17186);
if(cljs.core.truth_(temp__4126__auto___17187)){
var error__9703__auto___17188 = temp__4126__auto___17187;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__9703__auto___17188)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17188,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17186,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17173_17183,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var props = G__17176;
var children = rest17177;
while(true){
var vec__17180 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__17180,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__17180,(1),null);
var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));
var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else {
if(cljs.core.truth_((function (){var or__3959__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs);
}
})())){
return om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children);
} else {
return om_tools.dom.element.call(null,React.DOM.button,om_bootstrap.util.merge_props.call(null,props__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,klasses__$1),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17189 = output_checker17175_17185.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17189)){
var error__9703__auto___17190 = temp__4126__auto___17189;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__9703__auto___17190)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17190,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17172_17182,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___17181,output_schema17172_17182,input_schema17173_17183,input_checker17174_17184,output_checker17175_17185))
;

om_bootstrap.button.button.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button.cljs$lang$applyTo = ((function (ufv___17181,output_schema17172_17182,input_schema17173_17183,input_checker17174_17184,output_checker17175_17185){
return (function (seq17178){
var G__17179 = cljs.core.first.call(null,seq17178);
var seq17178__$1 = cljs.core.next.call(null,seq17178);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(G__17179,seq17178__$1);
});})(ufv___17181,output_schema17172_17182,input_schema17173_17183,input_checker17174_17184,output_checker17175_17185))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema17172_17182,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17173_17183], null)));
var ufv___17200 = schema.utils.use_fn_validation;
var output_schema17191_17201 = om_bootstrap.types.Component;
var input_schema17192_17202 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker17193_17203 = schema.core.checker.call(null,input_schema17192_17202);
var output_checker17194_17204 = schema.core.checker.call(null,output_schema17191_17201);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * Renders a button toolbar.
 */
om_bootstrap.button.toolbar = ((function (ufv___17200,output_schema17191_17201,input_schema17192_17202,input_checker17193_17203,output_checker17194_17204){
return (function om_bootstrap$button$toolbar(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___17200,output_schema17191_17201,input_schema17192_17202,input_checker17193_17203,output_checker17194_17204))
;

om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___17200,output_schema17191_17201,input_schema17192_17202,input_checker17193_17203,output_checker17194_17204){
return (function (G__17195,rest17196){
var validate__9701__auto__ = ufv___17200.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17205 = cljs.core.list_STAR_.call(null,G__17195,rest17196);
var temp__4126__auto___17206 = input_checker17193_17203.call(null,args__9702__auto___17205);
if(cljs.core.truth_(temp__4126__auto___17206)){
var error__9703__auto___17207 = temp__4126__auto___17206;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__9703__auto___17207)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17207,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17205,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17192_17202,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__17195;
var children = rest17196;
while(true){
var vec__17199 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__17199,(0),null);
var props = cljs.core.nth.call(null,vec__17199,(1),null);
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs))), "role": "toolbar"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17208 = output_checker17194_17204.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17208)){
var error__9703__auto___17209 = temp__4126__auto___17208;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__9703__auto___17209)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17209,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17191_17201,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___17200,output_schema17191_17201,input_schema17192_17202,input_checker17193_17203,output_checker17194_17204))
;

om_bootstrap.button.toolbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.toolbar.cljs$lang$applyTo = ((function (ufv___17200,output_schema17191_17201,input_schema17192_17202,input_checker17193_17203,output_checker17194_17204){
return (function (seq17197){
var G__17198 = cljs.core.first.call(null,seq17197);
var seq17197__$1 = cljs.core.next.call(null,seq17197);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(G__17198,seq17197__$1);
});})(ufv___17200,output_schema17191_17201,input_schema17192_17202,input_checker17193_17203,output_checker17194_17204))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema17191_17201,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17192_17202], null)));
var ufv___17219 = schema.utils.use_fn_validation;
var output_schema17210_17220 = om_bootstrap.types.Component;
var input_schema17211_17221 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker17212_17222 = schema.core.checker.call(null,input_schema17211_17221);
var output_checker17213_17223 = schema.core.checker.call(null,output_schema17210_17220);
/**
 * Inputs: [opts :- ButtonGroup & children]
 * Returns: t/Component
 * 
 * Renders the supplied children in a wrapping button-group div.
 */
om_bootstrap.button.button_group = ((function (ufv___17219,output_schema17210_17220,input_schema17211_17221,input_checker17212_17222,output_checker17213_17223){
return (function om_bootstrap$button$button_group(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___17219,output_schema17210_17220,input_schema17211_17221,input_checker17212_17222,output_checker17213_17223))
;

om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___17219,output_schema17210_17220,input_schema17211_17221,input_checker17212_17222,output_checker17213_17223){
return (function (G__17214,rest17215){
var validate__9701__auto__ = ufv___17219.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17224 = cljs.core.list_STAR_.call(null,G__17214,rest17215);
var temp__4126__auto___17225 = input_checker17212_17222.call(null,args__9702__auto___17224);
if(cljs.core.truth_(temp__4126__auto___17225)){
var error__9703__auto___17226 = temp__4126__auto___17225;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__9703__auto___17226)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17226,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17224,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17211_17221,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__17214;
var children = rest17215;
while(true){
var vec__17218 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__17218,(0),null);
var props = cljs.core.nth.call(null,vec__17218,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17227 = output_checker17213_17223.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17227)){
var error__9703__auto___17228 = temp__4126__auto___17227;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__9703__auto___17228)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17228,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17210_17220,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___17219,output_schema17210_17220,input_schema17211_17221,input_checker17212_17222,output_checker17213_17223))
;

om_bootstrap.button.button_group.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button_group.cljs$lang$applyTo = ((function (ufv___17219,output_schema17210_17220,input_schema17211_17221,input_checker17212_17222,output_checker17213_17223){
return (function (seq17216){
var G__17217 = cljs.core.first.call(null,seq17216);
var seq17216__$1 = cljs.core.next.call(null,seq17216);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(G__17217,seq17216__$1);
});})(ufv___17219,output_schema17210_17220,input_schema17211_17221,input_checker17212_17222,output_checker17213_17223))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema17210_17220,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17211_17221], null)));
om_bootstrap.button.DropdownButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool], true, false));
om_bootstrap.button.render_nav_item = (function om_bootstrap$button$render_nav_item(props,open_QMARK_,children){
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),true,new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
});
om_bootstrap.button.render_button_group = (function om_bootstrap$button$render_button_group(props,open_QMARK_,children){
var group_classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,group_classes)], null),children);
});
om_bootstrap.button.MenuItem = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",-1516042587),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header?","header?",-106649173)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"divider?","divider?",1882560157)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));

var component_fnk__15633__auto___17255 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema17233 = schema.core.Any;
var input_schema17234 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map17232","map17232",373602986,null))], null);
var input_checker17235 = schema.core.checker.call(null,input_schema17234);
var output_checker17236 = schema.core.checker.call(null,output_schema17233);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema17233,input_schema17234,input_checker17235,output_checker17236){
return (function om_bootstrap$button$constructor17230(G__17237){
var validate__9701__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17256 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17237], null);
var temp__4126__auto___17257 = input_checker17235.call(null,args__9702__auto___17256);
if(cljs.core.truth_(temp__4126__auto___17257)){
var error__9703__auto___17258 = temp__4126__auto___17257;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17230","constructor17230",-204631885,null),cljs.core.pr_str.call(null,error__9703__auto___17258)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17258,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17256,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17234,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var map17232 = G__17237;
while(true){
if(cljs.core.map_QMARK_.call(null,map17232)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map17232)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map17232,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t17243 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t17243 = (function (input_checker17235,input_schema17234,owner,output_schema17233,map17232,validate__9701__auto__,constructor17230,G__17237,ufv__,output_checker17236,meta17244){
this.input_checker17235 = input_checker17235;
this.input_schema17234 = input_schema17234;
this.owner = owner;
this.output_schema17233 = output_schema17233;
this.map17232 = map17232;
this.validate__9701__auto__ = validate__9701__auto__;
this.constructor17230 = constructor17230;
this.G__17237 = G__17237;
this.ufv__ = ufv__;
this.output_checker17236 = output_checker17236;
this.meta17244 = meta17244;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t17243.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t17243.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__9701__auto__,ufv__,output_schema17233,input_schema17234,input_checker17235,output_checker17236){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__9701__auto__,ufv__,output_schema17233,input_schema17234,input_checker17235,output_checker17236))
;

om_bootstrap.button.t17243.prototype.om$core$IRender$ = true;

om_bootstrap.button.t17243.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__9701__auto__,ufv__,output_schema17233,input_schema17234,input_checker17235,output_checker17236){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__17246 = om.core.get_props.call(null,self__.owner);
var map__17246__$1 = ((cljs.core.seq_QMARK_.call(null,map__17246))?cljs.core.apply.call(null,cljs.core.hash_map,map__17246):map__17246);
var children = cljs.core.get.call(null,map__17246__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__17246__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var vec__17247 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__17247,(0),null);
var props = cljs.core.nth.call(null,vec__17247,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__17246,map__17246__$1,children,opts,vec__17247,bs,props,classes,___$1,owner,validate__9701__auto__,ufv__,output_schema17233,input_schema17234,input_checker17235,output_checker17236){
return (function (e){
var temp__4126__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var on_select = temp__4126__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__17246,map__17246__$1,children,opts,vec__17247,bs,props,classes,___$1,owner,validate__9701__auto__,ufv__,output_schema17233,input_schema17234,input_checker17235,output_checker17236))
;
var children__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs))?children:cljs.core.apply.call(null,React.DOM.a,{"tabIndex": "-1", "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "onClick": om_tools.dom.format_opts.call(null,handle_click)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))));
var li_attrs = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var k = temp__4126__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
} else {
return null;
}
})());
return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,li_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
});})(owner,validate__9701__auto__,ufv__,output_schema17233,input_schema17234,input_checker17235,output_checker17236))
;

om_bootstrap.button.t17243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__9701__auto__,ufv__,output_schema17233,input_schema17234,input_checker17235,output_checker17236){
return (function (_17245){
var self__ = this;
var _17245__$1 = this;
return self__.meta17244;
});})(owner,validate__9701__auto__,ufv__,output_schema17233,input_schema17234,input_checker17235,output_checker17236))
;

om_bootstrap.button.t17243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__9701__auto__,ufv__,output_schema17233,input_schema17234,input_checker17235,output_checker17236){
return (function (_17245,meta17244__$1){
var self__ = this;
var _17245__$1 = this;
return (new om_bootstrap.button.t17243(self__.input_checker17235,self__.input_schema17234,self__.owner,self__.output_schema17233,self__.map17232,self__.validate__9701__auto__,self__.constructor17230,self__.G__17237,self__.ufv__,self__.output_checker17236,meta17244__$1));
});})(owner,validate__9701__auto__,ufv__,output_schema17233,input_schema17234,input_checker17235,output_checker17236))
;

om_bootstrap.button.t17243.cljs$lang$type = true;

om_bootstrap.button.t17243.cljs$lang$ctorStr = "om-bootstrap.button/t17243";

om_bootstrap.button.t17243.cljs$lang$ctorPrWriter = ((function (owner,validate__9701__auto__,ufv__,output_schema17233,input_schema17234,input_checker17235,output_checker17236){
return (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"om-bootstrap.button/t17243");
});})(owner,validate__9701__auto__,ufv__,output_schema17233,input_schema17234,input_checker17235,output_checker17236))
;

om_bootstrap.button.__GT_t17243 = ((function (owner,validate__9701__auto__,ufv__,output_schema17233,input_schema17234,input_checker17235,output_checker17236){
return (function om_bootstrap$button$constructor17230_$___GT_t17243(input_checker17235__$1,input_schema17234__$1,owner__$1,output_schema17233__$1,map17232__$1,validate__9701__auto____$1,constructor17230__$1,G__17237__$1,ufv____$1,output_checker17236__$1,meta17244){
return (new om_bootstrap.button.t17243(input_checker17235__$1,input_schema17234__$1,owner__$1,output_schema17233__$1,map17232__$1,validate__9701__auto____$1,constructor17230__$1,G__17237__$1,ufv____$1,output_checker17236__$1,meta17244));
});})(owner,validate__9701__auto__,ufv__,output_schema17233,input_schema17234,input_checker17235,output_checker17236))
;

}

return (new om_bootstrap.button.t17243(input_checker17235,input_schema17234,owner,output_schema17233,map17232,validate__9701__auto__,om_bootstrap$button$constructor17230,G__17237,ufv__,output_checker17236,null));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17259 = output_checker17236.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17259)){
var error__9703__auto___17260 = temp__4126__auto___17259;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17230","constructor17230",-204631885,null),cljs.core.pr_str.call(null,error__9703__auto___17260)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17260,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17233,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv__,output_schema17233,input_schema17234,input_checker17235,output_checker17236))
,schema.core.make_fn_schema.call(null,output_schema17233,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17234], null)));
})();
/**
 * Generates an Om component of a menu item. Done this way so that
 * wrapping dropdowns will have access to the Om state.
 */
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__15633__auto___17255){
return (function om_bootstrap$button$menu_item_STAR_(){
var argseq__4999__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4999__auto__);
});})(component_fnk__15633__auto___17255))
;

om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__15633__auto___17255){
return (function (data__15634__auto__,owner17229,p__17251){
var vec__17252 = p__17251;
var opts__15635__auto__ = cljs.core.nth.call(null,vec__17252,(0),null);
return component_fnk__15633__auto___17255.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15635__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner17229,new cljs.core.Keyword(null,"data","data",-232669377),data__15634__auto__], null));
});})(component_fnk__15633__auto___17255))
;

om_bootstrap.button.menu_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.menu_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__15633__auto___17255){
return (function (seq17248){
var G__17249 = cljs.core.first.call(null,seq17248);
var seq17248__$1 = cljs.core.next.call(null,seq17248);
var G__17250 = cljs.core.first.call(null,seq17248__$1);
var seq17248__$2 = cljs.core.next.call(null,seq17248__$1);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__17249,G__17250,seq17248__$2);
});})(component_fnk__15633__auto___17255))
;

om_bootstrap.button.__GT_menu_item_STAR_ = (function om_bootstrap$button$__GT_menu_item_STAR_(){
var G__17254 = arguments.length;
switch (G__17254) {
case 1:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__15602__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__15602__auto__);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__15602__auto__,m17231){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__15602__auto__,m17231);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___17270 = schema.utils.use_fn_validation;
var output_schema17262_17271 = om_bootstrap.types.Component;
var input_schema17263_17272 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker17264_17273 = schema.core.checker.call(null,input_schema17263_17272);
var output_checker17265_17274 = schema.core.checker.call(null,output_schema17262_17271);
/**
 * Inputs: [opts :- MenuItem & children]
 * Returns: t/Component
 */
om_bootstrap.button.menu_item = ((function (ufv___17270,output_schema17262_17271,input_schema17263_17272,input_checker17264_17273,output_checker17265_17274){
return (function om_bootstrap$button$menu_item(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___17270,output_schema17262_17271,input_schema17263_17272,input_checker17264_17273,output_checker17265_17274))
;

om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___17270,output_schema17262_17271,input_schema17263_17272,input_checker17264_17273,output_checker17265_17274){
return (function (G__17266,rest17267){
var validate__9701__auto__ = ufv___17270.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17275 = cljs.core.list_STAR_.call(null,G__17266,rest17267);
var temp__4126__auto___17276 = input_checker17264_17273.call(null,args__9702__auto___17275);
if(cljs.core.truth_(temp__4126__auto___17276)){
var error__9703__auto___17277 = temp__4126__auto___17276;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__9703__auto___17277)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17277,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17275,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17263_17272,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__17266;
var children = rest17267;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17278 = output_checker17265_17274.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17278)){
var error__9703__auto___17279 = temp__4126__auto___17278;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__9703__auto___17279)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17279,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17262_17271,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___17270,output_schema17262_17271,input_schema17263_17272,input_checker17264_17273,output_checker17265_17274))
;

om_bootstrap.button.menu_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.menu_item.cljs$lang$applyTo = ((function (ufv___17270,output_schema17262_17271,input_schema17263_17272,input_checker17264_17273,output_checker17265_17274){
return (function (seq17268){
var G__17269 = cljs.core.first.call(null,seq17268);
var seq17268__$1 = cljs.core.next.call(null,seq17268);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic(G__17269,seq17268__$1);
});})(ufv___17270,output_schema17262_17271,input_schema17263_17272,input_checker17264_17273,output_checker17265_17274))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema17262_17271,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17263_17272], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___17290 = schema.utils.use_fn_validation;
var output_schema17281_17291 = om_bootstrap.types.Component;
var input_schema17282_17292 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker17283_17293 = schema.core.checker.call(null,input_schema17282_17292);
var output_checker17284_17294 = schema.core.checker.call(null,output_schema17281_17291);
/**
 * Inputs: [opts :- DropdownMenu & children]
 * Returns: t/Component
 */
om_bootstrap.button.dropdown_menu = ((function (ufv___17290,output_schema17281_17291,input_schema17282_17292,input_checker17283_17293,output_checker17284_17294){
return (function om_bootstrap$button$dropdown_menu(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___17290,output_schema17281_17291,input_schema17282_17292,input_checker17283_17293,output_checker17284_17294))
;

om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___17290,output_schema17281_17291,input_schema17282_17292,input_checker17283_17293,output_checker17284_17294){
return (function (G__17285,rest17286){
var validate__9701__auto__ = ufv___17290.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17295 = cljs.core.list_STAR_.call(null,G__17285,rest17286);
var temp__4126__auto___17296 = input_checker17283_17293.call(null,args__9702__auto___17295);
if(cljs.core.truth_(temp__4126__auto___17296)){
var error__9703__auto___17297 = temp__4126__auto___17296;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__9703__auto___17297)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17297,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17295,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17282_17292,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__17285;
var children = rest17286;
while(true){
var vec__17289 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__17289,(0),null);
var props = cljs.core.nth.call(null,vec__17289,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4124__auto__)){
var on_select = temp__4124__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4124__auto__,vec__17289,bs,props,classes,ul_attrs,validate__9701__auto__,ufv___17290,output_schema17281_17291,input_schema17282_17292,input_checker17283_17293,output_checker17284_17294){
return (function (p1__17280_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__17280_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4124__auto__,vec__17289,bs,props,classes,ul_attrs,validate__9701__auto__,ufv___17290,output_schema17281_17291,input_schema17282_17292,input_checker17283_17293,output_checker17284_17294))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17298 = output_checker17284_17294.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17298)){
var error__9703__auto___17299 = temp__4126__auto___17298;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__9703__auto___17299)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17299,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17281_17291,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___17290,output_schema17281_17291,input_schema17282_17292,input_checker17283_17293,output_checker17284_17294))
;

om_bootstrap.button.dropdown_menu.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown_menu.cljs$lang$applyTo = ((function (ufv___17290,output_schema17281_17291,input_schema17282_17292,input_checker17283_17293,output_checker17284_17294){
return (function (seq17287){
var G__17288 = cljs.core.first.call(null,seq17287);
var seq17287__$1 = cljs.core.next.call(null,seq17287);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic(G__17288,seq17287__$1);
});})(ufv___17290,output_schema17281_17291,input_schema17282_17292,input_checker17283_17293,output_checker17284_17294))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema17281_17291,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17282_17292], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__15604__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__15604__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__15604__auto__;
})();

var component_fnk__15633__auto___17327 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema17305 = schema.core.Any;
var input_schema17306 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map17304","map17304",1426028998,null))], null);
var input_checker17307 = schema.core.checker.call(null,input_schema17306);
var output_checker17308 = schema.core.checker.call(null,output_schema17305);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308){
return (function om_bootstrap$button$constructor17302(G__17309){
var validate__9701__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17328 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17309], null);
var temp__4126__auto___17329 = input_checker17307.call(null,args__9702__auto___17328);
if(cljs.core.truth_(temp__4126__auto___17329)){
var error__9703__auto___17330 = temp__4126__auto___17329;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17302","constructor17302",1843190590,null),cljs.core.pr_str.call(null,error__9703__auto___17330)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17330,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17328,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17306,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var map17304 = G__17309;
while(true){
if(cljs.core.map_QMARK_.call(null,map17304)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map17304)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map17304,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map17304,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t17315 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t17315 = (function (output_schema17305,owner,input_checker17307,map17304,input_schema17306,validate__9701__auto__,state,G__17309,output_checker17308,ufv__,constructor17302,meta17316){
this.output_schema17305 = output_schema17305;
this.owner = owner;
this.input_checker17307 = input_checker17307;
this.map17304 = map17304;
this.input_schema17306 = input_schema17306;
this.validate__9701__auto__ = validate__9701__auto__;
this.state = state;
this.G__17309 = G__17309;
this.output_checker17308 = output_checker17308;
this.ufv__ = ufv__;
this.constructor17302 = constructor17302;
this.meta17316 = meta17316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t17315.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t17315.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308))
;

om_bootstrap.button.t17315.prototype.om$core$IRender$ = true;

om_bootstrap.button.t17315.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__17318 = om.core.get_props.call(null,self__.owner);
var map__17318__$1 = ((cljs.core.seq_QMARK_.call(null,map__17318))?cljs.core.apply.call(null,cljs.core.hash_map,map__17318):map__17318);
var children = cljs.core.get.call(null,map__17318__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__17318__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var vec__17319 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__17319,(0),null);
var props = cljs.core.nth.call(null,vec__17319,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__17318,map__17318__$1,children,opts,vec__17319,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__17318,map__17318__$1,children,opts,vec__17319,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308))
], null);
var update_child_props = ((function (open_QMARK_,map__17318,map__17318__$1,children,opts,vec__17319,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__3959__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__17318,map__17318__$1,children,opts,vec__17319,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308){
return (function (key){
var temp__4124__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4124__auto__)){
var os = temp__4124__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__17318,map__17318__$1,children,opts,vec__17319,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__17318,map__17318__$1,children,opts,vec__17319,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__17318,map__17318__$1,children,opts,vec__17319,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308){
return (function (p1__17300_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__17300_SHARP_,update_child_props);
});})(open_QMARK_,map__17318,map__17318__$1,children,opts,vec__17319,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308))
,children))], null));
});})(state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308))
;

om_bootstrap.button.t17315.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308){
return (function (_17317){
var self__ = this;
var _17317__$1 = this;
return self__.meta17316;
});})(state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308))
;

om_bootstrap.button.t17315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308){
return (function (_17317,meta17316__$1){
var self__ = this;
var _17317__$1 = this;
return (new om_bootstrap.button.t17315(self__.output_schema17305,self__.owner,self__.input_checker17307,self__.map17304,self__.input_schema17306,self__.validate__9701__auto__,self__.state,self__.G__17309,self__.output_checker17308,self__.ufv__,self__.constructor17302,meta17316__$1));
});})(state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308))
;

om_bootstrap.button.t17315.cljs$lang$type = true;

om_bootstrap.button.t17315.cljs$lang$ctorStr = "om-bootstrap.button/t17315";

om_bootstrap.button.t17315.cljs$lang$ctorPrWriter = ((function (state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308){
return (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"om-bootstrap.button/t17315");
});})(state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308))
;

om_bootstrap.button.__GT_t17315 = ((function (state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308){
return (function om_bootstrap$button$constructor17302_$___GT_t17315(output_schema17305__$1,owner__$1,input_checker17307__$1,map17304__$1,input_schema17306__$1,validate__9701__auto____$1,state__$1,G__17309__$1,output_checker17308__$1,ufv____$1,constructor17302__$1,meta17316){
return (new om_bootstrap.button.t17315(output_schema17305__$1,owner__$1,input_checker17307__$1,map17304__$1,input_schema17306__$1,validate__9701__auto____$1,state__$1,G__17309__$1,output_checker17308__$1,ufv____$1,constructor17302__$1,meta17316));
});})(state,owner,validate__9701__auto__,ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308))
;

}

return (new om_bootstrap.button.t17315(output_schema17305,owner,input_checker17307,map17304,input_schema17306,validate__9701__auto__,state,G__17309,output_checker17308,ufv__,om_bootstrap$button$constructor17302,null));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17331 = output_checker17308.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17331)){
var error__9703__auto___17332 = temp__4126__auto___17331;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17302","constructor17302",1843190590,null),cljs.core.pr_str.call(null,error__9703__auto___17332)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17332,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17305,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv__,output_schema17305,input_schema17306,input_checker17307,output_checker17308))
,schema.core.make_fn_schema.call(null,output_schema17305,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17306], null)));
})();
/**
 * Generates a dropdown button component responsible for its own
 * toggled state. The open? toggling is handled through a dropdown
 * mixin.
 */
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__15633__auto___17327){
return (function om_bootstrap$button$dropdown_STAR_(){
var argseq__4999__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4999__auto__);
});})(component_fnk__15633__auto___17327))
;

om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__15633__auto___17327){
return (function (data__15634__auto__,owner17301,p__17323){
var vec__17324 = p__17323;
var opts__15635__auto__ = cljs.core.nth.call(null,vec__17324,(0),null);
return component_fnk__15633__auto___17327.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner17301),new cljs.core.Keyword(null,"opts","opts",155075701),opts__15635__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner17301,new cljs.core.Keyword(null,"data","data",-232669377),data__15634__auto__], null));
});})(component_fnk__15633__auto___17327))
;

om_bootstrap.button.dropdown_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.dropdown_STAR_.cljs$lang$applyTo = ((function (component_fnk__15633__auto___17327){
return (function (seq17320){
var G__17321 = cljs.core.first.call(null,seq17320);
var seq17320__$1 = cljs.core.next.call(null,seq17320);
var G__17322 = cljs.core.first.call(null,seq17320__$1);
var seq17320__$2 = cljs.core.next.call(null,seq17320__$1);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__17321,G__17322,seq17320__$2);
});})(component_fnk__15633__auto___17327))
;

om_bootstrap.button.__GT_dropdown_STAR_ = (function om_bootstrap$button$__GT_dropdown_STAR_(){
var G__17326 = arguments.length;
switch (G__17326) {
case 1:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__15602__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__15602__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__15602__auto__,m17303){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__15602__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m17303));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___17342 = schema.utils.use_fn_validation;
var output_schema17334_17343 = om_bootstrap.types.Component;
var input_schema17335_17344 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker17336_17345 = schema.core.checker.call(null,input_schema17335_17344);
var output_checker17337_17346 = schema.core.checker.call(null,output_schema17334_17343);
/**
 * Inputs: [opts :- DropdownButton & children]
 * Returns: t/Component
 * 
 * Returns a dropdown button component. The component manages its own
 * dropdown state.
 */
om_bootstrap.button.dropdown = ((function (ufv___17342,output_schema17334_17343,input_schema17335_17344,input_checker17336_17345,output_checker17337_17346){
return (function om_bootstrap$button$dropdown(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___17342,output_schema17334_17343,input_schema17335_17344,input_checker17336_17345,output_checker17337_17346))
;

om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___17342,output_schema17334_17343,input_schema17335_17344,input_checker17336_17345,output_checker17337_17346){
return (function (G__17338,rest17339){
var validate__9701__auto__ = ufv___17342.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17347 = cljs.core.list_STAR_.call(null,G__17338,rest17339);
var temp__4126__auto___17348 = input_checker17336_17345.call(null,args__9702__auto___17347);
if(cljs.core.truth_(temp__4126__auto___17348)){
var error__9703__auto___17349 = temp__4126__auto___17348;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__9703__auto___17349)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17349,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17347,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17335_17344,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__17338;
var children = rest17339;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17350 = output_checker17337_17346.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17350)){
var error__9703__auto___17351 = temp__4126__auto___17350;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__9703__auto___17351)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17351,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17334_17343,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___17342,output_schema17334_17343,input_schema17335_17344,input_checker17336_17345,output_checker17337_17346))
;

om_bootstrap.button.dropdown.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown.cljs$lang$applyTo = ((function (ufv___17342,output_schema17334_17343,input_schema17335_17344,input_checker17336_17345,output_checker17337_17346){
return (function (seq17340){
var G__17341 = cljs.core.first.call(null,seq17340);
var seq17340__$1 = cljs.core.next.call(null,seq17340);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic(G__17341,seq17340__$1);
});})(ufv___17342,output_schema17334_17343,input_schema17335_17344,input_checker17336_17345,output_checker17337_17346))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema17334_17343,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17335_17344], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__15604__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__15604__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__15604__auto__;
})();

var component_fnk__15633__auto___17378 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema17356 = schema.core.Any;
var input_schema17357 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map17355","map17355",-353174614,null))], null);
var input_checker17358 = schema.core.checker.call(null,input_schema17357);
var output_checker17359 = schema.core.checker.call(null,output_schema17356);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359){
return (function om_bootstrap$button$constructor17353(G__17360){
var validate__9701__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17379 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17360], null);
var temp__4126__auto___17380 = input_checker17358.call(null,args__9702__auto___17379);
if(cljs.core.truth_(temp__4126__auto___17380)){
var error__9703__auto___17381 = temp__4126__auto___17380;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17353","constructor17353",1843437537,null),cljs.core.pr_str.call(null,error__9703__auto___17381)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17381,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17379,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17357,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var map17355 = G__17360;
while(true){
if(cljs.core.map_QMARK_.call(null,map17355)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map17355)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map17355,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map17355,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t17366 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t17366 = (function (constructor17353,input_checker17358,owner,map17355,validate__9701__auto__,G__17360,output_checker17359,output_schema17356,state,ufv__,input_schema17357,meta17367){
this.constructor17353 = constructor17353;
this.input_checker17358 = input_checker17358;
this.owner = owner;
this.map17355 = map17355;
this.validate__9701__auto__ = validate__9701__auto__;
this.G__17360 = G__17360;
this.output_checker17359 = output_checker17359;
this.output_schema17356 = output_schema17356;
this.state = state;
this.ufv__ = ufv__;
this.input_schema17357 = input_schema17357;
this.meta17367 = meta17367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t17366.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t17366.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__9701__auto__,ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__9701__auto__,ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359))
;

om_bootstrap.button.t17366.prototype.om$core$IRender$ = true;

om_bootstrap.button.t17366.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__9701__auto__,ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__17369 = om.core.get_props.call(null,self__.owner);
var map__17369__$1 = ((cljs.core.seq_QMARK_.call(null,map__17369))?cljs.core.apply.call(null,cljs.core.hash_map,map__17369):map__17369);
var children = cljs.core.get.call(null,map__17369__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__17369__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var vec__17370 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__17370,(0),null);
var props = cljs.core.nth.call(null,vec__17370,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__17369,map__17369__$1,children,opts,vec__17370,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__9701__auto__,ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359){
return (function (e){
if(cljs.core.truth_(open_QMARK_)){
set_dropdown.call(null,false);
} else {
}

var temp__4126__auto__ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return f.call(null,e);
} else {
return null;
}
});})(open_QMARK_,map__17369,map__17369__$1,children,opts,vec__17370,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__9701__auto__,ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__17369,map__17369__$1,children,opts,vec__17370,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__9701__auto__,ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__17369,map__17369__$1,children,opts,vec__17370,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__9701__auto__,ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__17369,map__17369__$1,children,opts,vec__17370,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__9701__auto__,ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359){
return (function (k){
var temp__4126__auto___17382 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto___17382)){
var f_17383 = temp__4126__auto___17382;
f_17383.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__17369,map__17369__$1,children,opts,vec__17370,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__9701__auto__,ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__9701__auto__,ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359))
;

om_bootstrap.button.t17366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__9701__auto__,ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359){
return (function (_17368){
var self__ = this;
var _17368__$1 = this;
return self__.meta17367;
});})(state,owner,validate__9701__auto__,ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359))
;

om_bootstrap.button.t17366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__9701__auto__,ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359){
return (function (_17368,meta17367__$1){
var self__ = this;
var _17368__$1 = this;
return (new om_bootstrap.button.t17366(self__.constructor17353,self__.input_checker17358,self__.owner,self__.map17355,self__.validate__9701__auto__,self__.G__17360,self__.output_checker17359,self__.output_schema17356,self__.state,self__.ufv__,self__.input_schema17357,meta17367__$1));
});})(state,owner,validate__9701__auto__,ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359))
;

om_bootstrap.button.t17366.cljs$lang$type = true;

om_bootstrap.button.t17366.cljs$lang$ctorStr = "om-bootstrap.button/t17366";

om_bootstrap.button.t17366.cljs$lang$ctorPrWriter = ((function (state,owner,validate__9701__auto__,ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359){
return (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"om-bootstrap.button/t17366");
});})(state,owner,validate__9701__auto__,ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359))
;

om_bootstrap.button.__GT_t17366 = ((function (state,owner,validate__9701__auto__,ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359){
return (function om_bootstrap$button$constructor17353_$___GT_t17366(constructor17353__$1,input_checker17358__$1,owner__$1,map17355__$1,validate__9701__auto____$1,G__17360__$1,output_checker17359__$1,output_schema17356__$1,state__$1,ufv____$1,input_schema17357__$1,meta17367){
return (new om_bootstrap.button.t17366(constructor17353__$1,input_checker17358__$1,owner__$1,map17355__$1,validate__9701__auto____$1,G__17360__$1,output_checker17359__$1,output_schema17356__$1,state__$1,ufv____$1,input_schema17357__$1,meta17367));
});})(state,owner,validate__9701__auto__,ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359))
;

}

return (new om_bootstrap.button.t17366(om_bootstrap$button$constructor17353,input_checker17358,owner,map17355,validate__9701__auto__,G__17360,output_checker17359,output_schema17356,state,ufv__,input_schema17357,null));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17384 = output_checker17359.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17384)){
var error__9703__auto___17385 = temp__4126__auto___17384;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17353","constructor17353",1843437537,null),cljs.core.pr_str.call(null,error__9703__auto___17385)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17385,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17356,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv__,output_schema17356,input_schema17357,input_checker17358,output_checker17359))
,schema.core.make_fn_schema.call(null,output_schema17356,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17357], null)));
})();
/**
 * Generates a split button component responsible for its own
 * toggled state. The open? toggling is handled through a dropdown
 * mixin.
 */
om_bootstrap.button.split_STAR_ = ((function (component_fnk__15633__auto___17378){
return (function om_bootstrap$button$split_STAR_(){
var argseq__4999__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4999__auto__);
});})(component_fnk__15633__auto___17378))
;

om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__15633__auto___17378){
return (function (data__15634__auto__,owner17352,p__17374){
var vec__17375 = p__17374;
var opts__15635__auto__ = cljs.core.nth.call(null,vec__17375,(0),null);
return component_fnk__15633__auto___17378.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner17352),new cljs.core.Keyword(null,"opts","opts",155075701),opts__15635__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner17352,new cljs.core.Keyword(null,"data","data",-232669377),data__15634__auto__], null));
});})(component_fnk__15633__auto___17378))
;

om_bootstrap.button.split_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.split_STAR_.cljs$lang$applyTo = ((function (component_fnk__15633__auto___17378){
return (function (seq17371){
var G__17372 = cljs.core.first.call(null,seq17371);
var seq17371__$1 = cljs.core.next.call(null,seq17371);
var G__17373 = cljs.core.first.call(null,seq17371__$1);
var seq17371__$2 = cljs.core.next.call(null,seq17371__$1);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__17372,G__17373,seq17371__$2);
});})(component_fnk__15633__auto___17378))
;

om_bootstrap.button.__GT_split_STAR_ = (function om_bootstrap$button$__GT_split_STAR_(){
var G__17377 = arguments.length;
switch (G__17377) {
case 1:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__15602__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__15602__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__15602__auto__,m17354){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__15602__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m17354));
});

om_bootstrap.button.__GT_split_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___17395 = schema.utils.use_fn_validation;
var output_schema17387_17396 = schema.core.Any;
var input_schema17388_17397 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker17389_17398 = schema.core.checker.call(null,input_schema17388_17397);
var output_checker17390_17399 = schema.core.checker.call(null,output_schema17387_17396);
/**
 * Inputs: [opts :- SplitButton & children]
 */
om_bootstrap.button.split = ((function (ufv___17395,output_schema17387_17396,input_schema17388_17397,input_checker17389_17398,output_checker17390_17399){
return (function om_bootstrap$button$split(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___17395,output_schema17387_17396,input_schema17388_17397,input_checker17389_17398,output_checker17390_17399))
;

om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___17395,output_schema17387_17396,input_schema17388_17397,input_checker17389_17398,output_checker17390_17399){
return (function (G__17391,rest17392){
var validate__9701__auto__ = ufv___17395.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17400 = cljs.core.list_STAR_.call(null,G__17391,rest17392);
var temp__4126__auto___17401 = input_checker17389_17398.call(null,args__9702__auto___17400);
if(cljs.core.truth_(temp__4126__auto___17401)){
var error__9703__auto___17402 = temp__4126__auto___17401;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__9703__auto___17402)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17402,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17400,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17388_17397,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__17391;
var children = rest17392;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17403 = output_checker17390_17399.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17403)){
var error__9703__auto___17404 = temp__4126__auto___17403;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__9703__auto___17404)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17404,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17387_17396,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___17395,output_schema17387_17396,input_schema17388_17397,input_checker17389_17398,output_checker17390_17399))
;

om_bootstrap.button.split.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.split.cljs$lang$applyTo = ((function (ufv___17395,output_schema17387_17396,input_schema17388_17397,input_checker17389_17398,output_checker17390_17399){
return (function (seq17393){
var G__17394 = cljs.core.first.call(null,seq17393);
var seq17393__$1 = cljs.core.next.call(null,seq17393);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic(G__17394,seq17393__$1);
});})(ufv___17395,output_schema17387_17396,input_schema17388_17397,input_checker17389_17398,output_checker17390_17399))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema17387_17396,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17388_17397], null)));

//# sourceMappingURL=button.js.map