// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.input');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('clojure.string');
goog.require('om.core');
om_bootstrap.input.Addons = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-after","addon-after",634985306)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component)], true, false);
/**
 * Helps render feedback icons.
 */
om_bootstrap.input.FeedbackIcons = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),schema.core.enum$.call(null,"success","warning","error"),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821)),schema.core.Bool], true, false);
/**
 * Input fields that match these bad dawgs:
 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Input.jsx
 */
om_bootstrap.input.Input = om_bootstrap.types.bootstrap.call(null,cljs.core.merge.call(null,om_bootstrap.input.Addons,om_bootstrap.input.FeedbackIcons,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"type","type",1174270348)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"label","label",1718410804)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261)),schema.core.named.call(null,schema.core.Bool,"DON'T render a wrapping form group?"),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"help","help",-439233446)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212)),schema.core.Str], true, false)));
om_bootstrap.input.Radio = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"checked?","checked?",2024809091)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"inline?","inline?",-1674483791)),schema.core.Bool], true, false));
var ufv___22530 = schema.utils.use_fn_validation;
var output_schema22521_22531 = schema.core.Str;
var input_schema22522_22532 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.Str,schema.core.Keyword),schema.core.Bool], true, false),new cljs.core.Symbol(null,"klasses","klasses",-380235757,null))], null);
var input_checker22523_22533 = schema.core.checker.call(null,input_schema22522_22532);
var output_checker22524_22534 = schema.core.checker.call(null,output_schema22521_22531);
/**
 * Inputs: [klasses :- {(s/either s/Str s/Keyword) s/Bool}]
 * Returns: s/Str
 * 
 * Mimics the class-set behavior from React. Pass in a map of
 * potential class to Boolean; you'll get back a class string that
 * represents the final class to apply.
 * 
 * TODO: Use class-set from om-tools.
 */
om_bootstrap.input.class_set = ((function (ufv___22530,output_schema22521_22531,input_schema22522_22532,input_checker22523_22533,output_checker22524_22534){
return (function om_bootstrap$input$class_set(G__22525){
var validate__9701__auto__ = ufv___22530.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22535 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22525], null);
var temp__4126__auto___22536 = input_checker22523_22533.call(null,args__9702__auto___22535);
if(cljs.core.truth_(temp__4126__auto___22536)){
var error__9703__auto___22537 = temp__4126__auto___22536;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.call(null,error__9703__auto___22537)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22537,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22535,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22522_22532,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var klasses = G__22525;
while(true){
return clojure.string.join.call(null," ",cljs.core.mapcat.call(null,((function (validate__9701__auto__,ufv___22530,output_schema22521_22531,input_schema22522_22532,input_checker22523_22533,output_checker22524_22534){
return (function (p__22528){
var vec__22529 = p__22528;
var k = cljs.core.nth.call(null,vec__22529,(0),null);
var keep_QMARK_ = cljs.core.nth.call(null,vec__22529,(1),null);
if(cljs.core.truth_(keep_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k)], null);
} else {
return null;
}
});})(validate__9701__auto__,ufv___22530,output_schema22521_22531,input_schema22522_22532,input_checker22523_22533,output_checker22524_22534))
,klasses));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22538 = output_checker22524_22534.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22538)){
var error__9703__auto___22539 = temp__4126__auto___22538;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.call(null,error__9703__auto___22539)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22539,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22521_22531,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22530,output_schema22521_22531,input_schema22522_22532,input_checker22523_22533,output_checker22524_22534))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.class_set),schema.core.make_fn_schema.call(null,output_schema22521_22531,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22522_22532], null)));
var ufv___22545 = schema.utils.use_fn_validation;
var output_schema22540_22546 = om_bootstrap.types.Component;
var input_schema22541_22547 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"glyph-name","glyph-name",350405338,null))], null);
var input_checker22542_22548 = schema.core.checker.call(null,input_schema22541_22547);
var output_checker22543_22549 = schema.core.checker.call(null,output_schema22540_22546);
/**
 * Inputs: [glyph-name :- s/Str]
 * Returns: t/Component
 * 
 * To be used with :addon-before or :addon-after.
 */
om_bootstrap.input.glyph = ((function (ufv___22545,output_schema22540_22546,input_schema22541_22547,input_checker22542_22548,output_checker22543_22549){
return (function om_bootstrap$input$glyph(G__22544){
var validate__9701__auto__ = ufv___22545.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22550 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22544], null);
var temp__4126__auto___22551 = input_checker22542_22548.call(null,args__9702__auto___22550);
if(cljs.core.truth_(temp__4126__auto___22551)){
var error__9703__auto___22552 = temp__4126__auto___22551;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.call(null,error__9703__auto___22552)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22552,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22550,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22541_22547,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var glyph_name = G__22544;
while(true){
return React.DOM.span({"className": om_tools.dom.format_opts.call(null,[cljs.core.str("glyphicon glyphicon-"),cljs.core.str(glyph_name)].join(''))});
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22553 = output_checker22543_22549.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22553)){
var error__9703__auto___22554 = temp__4126__auto___22553;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.call(null,error__9703__auto___22554)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22554,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22540_22546,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22545,output_schema22540_22546,input_schema22541_22547,input_checker22542_22548,output_checker22543_22549))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.glyph),schema.core.make_fn_schema.call(null,output_schema22540_22546,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22541_22547], null)));
var ufv___22568 = schema.utils.use_fn_validation;
var output_schema22555_22569 = om_bootstrap.types.Component;
var input_schema22556_22570 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.FeedbackIcons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker22557_22571 = schema.core.checker.call(null,input_schema22556_22570);
var output_checker22558_22572 = schema.core.checker.call(null,output_schema22555_22569);
/**
 * Inputs: [{:keys [feedback? bs-style]} :- FeedbackIcons]
 * Returns: t/Component
 */
om_bootstrap.input.render_icon = ((function (ufv___22568,output_schema22555_22569,input_schema22556_22570,input_checker22557_22571,output_checker22558_22572){
return (function om_bootstrap$input$render_icon(G__22559){
var validate__9701__auto__ = ufv___22568.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22573 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22559], null);
var temp__4126__auto___22574 = input_checker22557_22571.call(null,args__9702__auto___22573);
if(cljs.core.truth_(temp__4126__auto___22574)){
var error__9703__auto___22575 = temp__4126__auto___22574;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.call(null,error__9703__auto___22575)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22575,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22573,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22556_22570,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var G__22565 = G__22559;
var map__22566 = G__22565;
var map__22566__$1 = ((cljs.core.seq_QMARK_.call(null,map__22566))?cljs.core.apply.call(null,cljs.core.hash_map,map__22566):map__22566);
var bs_style = cljs.core.get.call(null,map__22566__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var feedback_QMARK_ = cljs.core.get.call(null,map__22566__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));
var G__22565__$1 = G__22565;
while(true){
var map__22567 = G__22565__$1;
var map__22567__$1 = ((cljs.core.seq_QMARK_.call(null,map__22567))?cljs.core.apply.call(null,cljs.core.hash_map,map__22567):map__22567);
var bs_style__$1 = cljs.core.get.call(null,map__22567__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var feedback_QMARK___$1 = cljs.core.get.call(null,map__22567__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));
if(cljs.core.truth_(feedback_QMARK___$1)){
var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"form-control-feedback","form-control-feedback",-26248681),true,new cljs.core.Keyword(null,"glyphicon-ok","glyphicon-ok",-980475854),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-warning-sign","glyphicon-warning-sign",-715964093),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-remove","glyphicon-remove",16420020),cljs.core._EQ_.call(null,"error",bs_style__$1)], null);
return React.DOM.span({"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))});
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22576 = output_checker22558_22572.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22576)){
var error__9703__auto___22577 = temp__4126__auto___22576;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.call(null,error__9703__auto___22577)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22577,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22555_22569,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22568,output_schema22555_22569,input_schema22556_22570,input_checker22557_22571,output_checker22558_22572))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_icon),schema.core.make_fn_schema.call(null,output_schema22555_22569,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22556_22570], null)));
var ufv___22583 = schema.utils.use_fn_validation;
var output_schema22578_22584 = schema.core.Any;
var input_schema22579_22585 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.maybe.call(null,schema.core.Str),new cljs.core.Symbol(null,"help","help",1201298081,null))], null);
var input_checker22580_22586 = schema.core.checker.call(null,input_schema22579_22585);
var output_checker22581_22587 = schema.core.checker.call(null,output_schema22578_22584);
/**
 * Inputs: [help :- (s/maybe s/Str)]
 */
om_bootstrap.input.render_help = ((function (ufv___22583,output_schema22578_22584,input_schema22579_22585,input_checker22580_22586,output_checker22581_22587){
return (function om_bootstrap$input$render_help(G__22582){
var validate__9701__auto__ = ufv___22583.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22588 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22582], null);
var temp__4126__auto___22589 = input_checker22580_22586.call(null,args__9702__auto___22588);
if(cljs.core.truth_(temp__4126__auto___22589)){
var error__9703__auto___22590 = temp__4126__auto___22589;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.call(null,error__9703__auto___22590)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22590,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22588,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22579_22585,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var help = G__22582;
while(true){
if(cljs.core.truth_(help)){
return cljs.core.apply.call(null,React.DOM.span,{"className": "help-block"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[help],null))));
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22591 = output_checker22581_22587.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22591)){
var error__9703__auto___22592 = temp__4126__auto___22591;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.call(null,error__9703__auto___22592)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22592,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22578_22584,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22583,output_schema22578_22584,input_schema22579_22585,input_checker22580_22586,output_checker22581_22587))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_help),schema.core.make_fn_schema.call(null,output_schema22578_22584,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22579_22585], null)));
var ufv___22607 = schema.utils.use_fn_validation;
var output_schema22593_22608 = schema.core.Any;
var input_schema22594_22609 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Addons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"items","items",-1622480831,null))], null);
var input_checker22595_22610 = schema.core.checker.call(null,input_schema22594_22609);
var output_checker22596_22611 = schema.core.checker.call(null,output_schema22593_22608);
/**
 * Inputs: [{:keys [addon-before addon-after]} :- Addons items :- s/Any]
 * 
 * Items is a vector of render instances.
 */
om_bootstrap.input.render_input_group = ((function (ufv___22607,output_schema22593_22608,input_schema22594_22609,input_checker22595_22610,output_checker22596_22611){
return (function om_bootstrap$input$render_input_group(G__22597,G__22598){
var validate__9701__auto__ = ufv___22607.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22612 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22597,G__22598], null);
var temp__4126__auto___22613 = input_checker22595_22610.call(null,args__9702__auto___22612);
if(cljs.core.truth_(temp__4126__auto___22613)){
var error__9703__auto___22614 = temp__4126__auto___22613;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.call(null,error__9703__auto___22614)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22614,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22612,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22594_22609,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var G__22604 = G__22597;
var map__22605 = G__22604;
var map__22605__$1 = ((cljs.core.seq_QMARK_.call(null,map__22605))?cljs.core.apply.call(null,cljs.core.hash_map,map__22605):map__22605);
var addon_after = cljs.core.get.call(null,map__22605__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));
var addon_before = cljs.core.get.call(null,map__22605__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));
var items = G__22598;
var G__22604__$1 = G__22604;
var items__$1 = items;
while(true){
var map__22606 = G__22604__$1;
var map__22606__$1 = ((cljs.core.seq_QMARK_.call(null,map__22606))?cljs.core.apply.call(null,cljs.core.hash_map,map__22606):map__22606);
var addon_after__$1 = cljs.core.get.call(null,map__22606__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));
var addon_before__$1 = cljs.core.get.call(null,map__22606__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));
var items__$2 = items__$1;
if(cljs.core.truth_((function (){var or__3959__auto__ = addon_before__$1;
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return addon_after__$1;
}
})())){
return cljs.core.apply.call(null,React.DOM.div,{"className": "input-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(addon_before__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-addon"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_before__$1],null)))):null),items__$2,(cljs.core.truth_(addon_after__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-addon"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_after__$1],null)))):null)],null))));
} else {
return items__$2;
}
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22615 = output_checker22596_22611.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22615)){
var error__9703__auto___22616 = temp__4126__auto___22615;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.call(null,error__9703__auto___22616)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22616,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22593_22608,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22607,output_schema22593_22608,input_schema22594_22609,input_checker22595_22610,output_checker22596_22611))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input_group),schema.core.make_fn_schema.call(null,output_schema22593_22608,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22594_22609], null)));
var ufv___22630 = schema.utils.use_fn_validation;
var output_schema22617_22631 = schema.core.Bool;
var input_schema22618_22632 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker22619_22633 = schema.core.checker.call(null,input_schema22618_22632);
var output_checker22620_22634 = schema.core.checker.call(null,output_schema22617_22631);
/**
 * Inputs: [{type :type} :- Input]
 * Returns: s/Bool
 * 
 * Returns true if the supplied input is of type checkbox or radio,
 * false otherwise.
 */
om_bootstrap.input.checkbox_or_radio_QMARK_ = ((function (ufv___22630,output_schema22617_22631,input_schema22618_22632,input_checker22619_22633,output_checker22620_22634){
return (function om_bootstrap$input$checkbox_or_radio_QMARK_(G__22621){
var validate__9701__auto__ = ufv___22630.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22635 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22621], null);
var temp__4126__auto___22636 = input_checker22619_22633.call(null,args__9702__auto___22635);
if(cljs.core.truth_(temp__4126__auto___22636)){
var error__9703__auto___22637 = temp__4126__auto___22636;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.call(null,error__9703__auto___22637)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22637,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22635,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22618_22632,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var G__22627 = G__22621;
var map__22628 = G__22627;
var map__22628__$1 = ((cljs.core.seq_QMARK_.call(null,map__22628))?cljs.core.apply.call(null,cljs.core.hash_map,map__22628):map__22628);
var type = cljs.core.get.call(null,map__22628__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__22627__$1 = G__22627;
while(true){
var map__22629 = G__22627__$1;
var map__22629__$1 = ((cljs.core.seq_QMARK_.call(null,map__22629))?cljs.core.apply.call(null,cljs.core.hash_map,map__22629):map__22629);
var type__$1 = cljs.core.get.call(null,map__22629__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return (cljs.core._EQ_.call(null,type__$1,"checkbox")) || (cljs.core._EQ_.call(null,type__$1,"radio"));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22638 = output_checker22620_22634.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22638)){
var error__9703__auto___22639 = temp__4126__auto___22638;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.call(null,error__9703__auto___22639)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22639,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22617_22631,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22630,output_schema22617_22631,input_schema22618_22632,input_checker22619_22633,output_checker22620_22634))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_QMARK_),schema.core.make_fn_schema.call(null,output_schema22617_22631,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22618_22632], null)));
var ufv___22654 = schema.utils.use_fn_validation;
var output_schema22640_22655 = om_bootstrap.types.Component;
var input_schema22641_22656 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker22642_22657 = schema.core.checker.call(null,input_schema22641_22656);
var output_checker22643_22658 = schema.core.checker.call(null,output_schema22640_22655);
/**
 * Inputs: [{type :type} :- Input children]
 * Returns: t/Component
 * 
 * Wraps this business in a div.
 */
om_bootstrap.input.checkbox_or_radio_wrapper = ((function (ufv___22654,output_schema22640_22655,input_schema22641_22656,input_checker22642_22657,output_checker22643_22658){
return (function om_bootstrap$input$checkbox_or_radio_wrapper(G__22644,G__22645){
var validate__9701__auto__ = ufv___22654.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22659 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22644,G__22645], null);
var temp__4126__auto___22660 = input_checker22642_22657.call(null,args__9702__auto___22659);
if(cljs.core.truth_(temp__4126__auto___22660)){
var error__9703__auto___22661 = temp__4126__auto___22660;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.call(null,error__9703__auto___22661)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22661,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22659,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22641_22656,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var G__22651 = G__22644;
var map__22652 = G__22651;
var map__22652__$1 = ((cljs.core.seq_QMARK_.call(null,map__22652))?cljs.core.apply.call(null,cljs.core.hash_map,map__22652):map__22652);
var type = cljs.core.get.call(null,map__22652__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children = G__22645;
var G__22651__$1 = G__22651;
var children__$1 = children;
while(true){
var map__22653 = G__22651__$1;
var map__22653__$1 = ((cljs.core.seq_QMARK_.call(null,map__22653))?cljs.core.apply.call(null,cljs.core.hash_map,map__22653):map__22653);
var type__$1 = cljs.core.get.call(null,map__22653__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children__$2 = children__$1;
var klasses = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cljs.core._EQ_.call(null,"checkbox",type__$1),new cljs.core.Keyword(null,"radio","radio",1323726374),cljs.core._EQ_.call(null,"radio",type__$1)], null);
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22662 = output_checker22643_22658.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22662)){
var error__9703__auto___22663 = temp__4126__auto___22662;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.call(null,error__9703__auto___22663)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22663,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22640_22655,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22654,output_schema22640_22655,input_schema22641_22656,input_checker22642_22657,output_checker22643_22658))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_wrapper),schema.core.make_fn_schema.call(null,output_schema22640_22655,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22641_22656], null)));
var ufv___22680 = schema.utils.use_fn_validation;
var output_schema22664_22681 = schema.core.Any;
var input_schema22665_22682 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null))], null);
var input_schema22669_22683 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);
var input_checker22666_22684 = schema.core.checker.call(null,input_schema22665_22682);
var output_checker22667_22685 = schema.core.checker.call(null,output_schema22664_22681);
var input_checker22670_22686 = schema.core.checker.call(null,input_schema22669_22683);
var output_checker22671_22687 = schema.core.checker.call(null,output_schema22664_22681);
/**
 * Inputs: ([input :- Input] [{lc :label-classname, label :label, :as input} :- Input child])
 * 
 * This doesn't handle any control group stuff.
 */
om_bootstrap.input.render_label = ((function (ufv___22680,output_schema22664_22681,input_schema22665_22682,input_schema22669_22683,input_checker22666_22684,output_checker22667_22685,input_checker22670_22686,output_checker22671_22687){
return (function om_bootstrap$input$render_label(){
var G__22675 = arguments.length;
switch (G__22675) {
case 1:
return om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});})(ufv___22680,output_schema22664_22681,input_schema22665_22682,input_schema22669_22683,input_checker22666_22684,output_checker22667_22685,input_checker22670_22686,output_checker22671_22687))
;

om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1 = ((function (ufv___22680,output_schema22664_22681,input_schema22665_22682,input_schema22669_22683,input_checker22666_22684,output_checker22667_22685,input_checker22670_22686,output_checker22671_22687){
return (function (G__22668){
var validate__9701__auto__ = ufv___22680.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22689 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22668], null);
var temp__4126__auto___22690 = input_checker22666_22684.call(null,args__9702__auto___22689);
if(cljs.core.truth_(temp__4126__auto___22690)){
var error__9703__auto___22691 = temp__4126__auto___22690;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__9703__auto___22691)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22691,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22689,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22665_22682,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var input = G__22668;
while(true){
return om_bootstrap.input.render_label.call(null,input,null);
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22692 = output_checker22667_22685.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22692)){
var error__9703__auto___22693 = temp__4126__auto___22692;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__9703__auto___22693)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22693,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22664_22681,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22680,output_schema22664_22681,input_schema22665_22682,input_schema22669_22683,input_checker22666_22684,output_checker22667_22685,input_checker22670_22686,output_checker22671_22687))
;

om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___22680,output_schema22664_22681,input_schema22665_22682,input_schema22669_22683,input_checker22666_22684,output_checker22667_22685,input_checker22670_22686,output_checker22671_22687){
return (function (G__22672,G__22673){
var validate__9701__auto__ = ufv___22680.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22694 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22672,G__22673], null);
var temp__4126__auto___22695 = input_checker22670_22686.call(null,args__9702__auto___22694);
if(cljs.core.truth_(temp__4126__auto___22695)){
var error__9703__auto___22696 = temp__4126__auto___22695;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__9703__auto___22696)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22696,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22694,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22669_22683,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var G__22677 = G__22672;
var map__22678 = G__22677;
var map__22678__$1 = ((cljs.core.seq_QMARK_.call(null,map__22678))?cljs.core.apply.call(null,cljs.core.hash_map,map__22678):map__22678);
var input = map__22678__$1;
var lc = cljs.core.get.call(null,map__22678__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));
var label = cljs.core.get.call(null,map__22678__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var child = G__22673;
var G__22677__$1 = G__22677;
var child__$1 = child;
while(true){
var map__22679 = G__22677__$1;
var map__22679__$1 = ((cljs.core.seq_QMARK_.call(null,map__22679))?cljs.core.apply.call(null,cljs.core.hash_map,map__22679):map__22679);
var input__$1 = map__22679__$1;
var lc__$1 = cljs.core.get.call(null,map__22679__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));
var label__$1 = cljs.core.get.call(null,map__22679__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var child__$2 = child__$1;
var classes = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-label","control-label",1226436372),cljs.core.not.call(null,om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input__$1))], null),(cljs.core.truth_(lc__$1)?new cljs.core.PersistentArrayMap.fromArray([lc__$1,cljs.core.boolean$.call(null,lc__$1)], true, false):null));
if(cljs.core.truth_(label__$1)){
return cljs.core.apply.call(null,React.DOM.label,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2,label__$1],null))));
} else {
return child__$2;
}
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22697 = output_checker22671_22687.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22697)){
var error__9703__auto___22698 = temp__4126__auto___22697;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__9703__auto___22698)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22698,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22664_22681,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22680,output_schema22664_22681,input_schema22665_22682,input_schema22669_22683,input_checker22666_22684,output_checker22667_22685,input_checker22670_22686,output_checker22671_22687))
;

om_bootstrap.input.render_label.cljs$lang$maxFixedArity = 2;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_label),schema.core.make_fn_schema.call(null,output_schema22664_22681,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22665_22682,input_schema22669_22683], null)));
var ufv___22713 = schema.utils.use_fn_validation;
var output_schema22699_22714 = schema.core.Any;
var input_schema22700_22715 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);
var input_checker22701_22716 = schema.core.checker.call(null,input_schema22700_22715);
var output_checker22702_22717 = schema.core.checker.call(null,output_schema22699_22714);
/**
 * Inputs: [{wc :wrapper-classname} :- Input child]
 */
om_bootstrap.input.render_wrapper = ((function (ufv___22713,output_schema22699_22714,input_schema22700_22715,input_checker22701_22716,output_checker22702_22717){
return (function om_bootstrap$input$render_wrapper(G__22703,G__22704){
var validate__9701__auto__ = ufv___22713.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22718 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22703,G__22704], null);
var temp__4126__auto___22719 = input_checker22701_22716.call(null,args__9702__auto___22718);
if(cljs.core.truth_(temp__4126__auto___22719)){
var error__9703__auto___22720 = temp__4126__auto___22719;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.call(null,error__9703__auto___22720)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22720,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22718,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22700_22715,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var G__22710 = G__22703;
var map__22711 = G__22710;
var map__22711__$1 = ((cljs.core.seq_QMARK_.call(null,map__22711))?cljs.core.apply.call(null,cljs.core.hash_map,map__22711):map__22711);
var wc = cljs.core.get.call(null,map__22711__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));
var child = G__22704;
var G__22710__$1 = G__22710;
var child__$1 = child;
while(true){
var map__22712 = G__22710__$1;
var map__22712__$1 = ((cljs.core.seq_QMARK_.call(null,map__22712))?cljs.core.apply.call(null,cljs.core.hash_map,map__22712):map__22712);
var wc__$1 = cljs.core.get.call(null,map__22712__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));
var child__$2 = child__$1;
if(cljs.core.truth_(wc__$1)){
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,wc__$1)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2],null))));
} else {
return child__$2;
}
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22721 = output_checker22702_22717.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22721)){
var error__9703__auto___22722 = temp__4126__auto___22721;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.call(null,error__9703__auto___22722)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22722,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22699_22714,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22713,output_schema22699_22714,input_schema22700_22715,input_checker22701_22716,output_checker22702_22717))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_wrapper),schema.core.make_fn_schema.call(null,output_schema22699_22714,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22700_22715], null)));
var ufv___22737 = schema.utils.use_fn_validation;
var output_schema22723_22738 = om_bootstrap.types.Component;
var input_schema22724_22739 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker22725_22740 = schema.core.checker.call(null,input_schema22724_22739);
var output_checker22726_22741 = schema.core.checker.call(null,output_schema22723_22738);
/**
 * Inputs: [{bs-style :bs-style, cn :group-classname, :as input} :- Input children]
 * Returns: t/Component
 * 
 * Wraps the entire form group.
 */
om_bootstrap.input.render_form_group = ((function (ufv___22737,output_schema22723_22738,input_schema22724_22739,input_checker22725_22740,output_checker22726_22741){
return (function om_bootstrap$input$render_form_group(G__22727,G__22728){
var validate__9701__auto__ = ufv___22737.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22742 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22727,G__22728], null);
var temp__4126__auto___22743 = input_checker22725_22740.call(null,args__9702__auto___22742);
if(cljs.core.truth_(temp__4126__auto___22743)){
var error__9703__auto___22744 = temp__4126__auto___22743;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.call(null,error__9703__auto___22744)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22744,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22742,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22724_22739,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var G__22734 = G__22727;
var map__22735 = G__22734;
var map__22735__$1 = ((cljs.core.seq_QMARK_.call(null,map__22735))?cljs.core.apply.call(null,cljs.core.hash_map,map__22735):map__22735);
var input = map__22735__$1;
var bs_style = cljs.core.get.call(null,map__22735__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var cn = cljs.core.get.call(null,map__22735__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));
var children = G__22728;
var G__22734__$1 = G__22734;
var children__$1 = children;
while(true){
var map__22736 = G__22734__$1;
var map__22736__$1 = ((cljs.core.seq_QMARK_.call(null,map__22736))?cljs.core.apply.call(null,cljs.core.hash_map,map__22736):map__22736);
var input__$1 = map__22736__$1;
var bs_style__$1 = cljs.core.get.call(null,map__22736__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var cn__$1 = cljs.core.get.call(null,map__22736__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));
var children__$2 = children__$1;
var classes = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-group","form-group",-267875328),cljs.core.not.call(null,new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-feedback","has-feedback",1328001802),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-success","has-success",685004255),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"has-warning","has-warning",1993894136),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"has-error","has-error",-786302929),cljs.core._EQ_.call(null,"error",bs_style__$1)], null),(cljs.core.truth_(cn__$1)?new cljs.core.PersistentArrayMap.fromArray([cn__$1,cljs.core.boolean$.call(null,cn__$1)], true, false):null));
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22745 = output_checker22726_22741.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22745)){
var error__9703__auto___22746 = temp__4126__auto___22745;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.call(null,error__9703__auto___22746)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22746,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22723_22738,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22737,output_schema22723_22738,input_schema22724_22739,input_checker22725_22740,output_checker22726_22741))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_form_group),schema.core.make_fn_schema.call(null,output_schema22723_22738,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22724_22739], null)));
var ufv___22756 = schema.utils.use_fn_validation;
var output_schema22747_22757 = om_bootstrap.types.Component;
var input_schema22748_22758 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker22749_22759 = schema.core.checker.call(null,input_schema22748_22758);
var output_checker22750_22760 = schema.core.checker.call(null,output_schema22747_22757);
/**
 * Inputs: [input :- Input attrs children]
 * Returns: t/Component
 */
om_bootstrap.input.render_input = ((function (ufv___22756,output_schema22747_22757,input_schema22748_22758,input_checker22749_22759,output_checker22750_22760){
return (function om_bootstrap$input$render_input(G__22751,G__22752,G__22753){
var validate__9701__auto__ = ufv___22756.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22761 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22751,G__22752,G__22753], null);
var temp__4126__auto___22762 = input_checker22749_22759.call(null,args__9702__auto___22761);
if(cljs.core.truth_(temp__4126__auto___22762)){
var error__9703__auto___22763 = temp__4126__auto___22762;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.call(null,error__9703__auto___22763)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22763,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22761,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22748_22758,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var input = G__22751;
var attrs = G__22752;
var children = G__22753;
while(true){
var props = ((function (validate__9701__auto__,ufv___22756,output_schema22747_22757,input_schema22748_22758,input_checker22749_22759,output_checker22750_22760){
return (function (klass){
return om_bootstrap.util.merge_props.call(null,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),klass,new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input"], null));
});})(validate__9701__auto__,ufv___22756,output_schema22747_22757,input_schema22748_22758,input_checker22749_22759,output_checker22750_22760))
;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input))){
return children;
} else {
var G__22755 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input);
switch (G__22755) {
case "select":
return om_tools.dom.element.call(null,React.DOM.select,props.call(null,"form-control"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

break;
case "textarea":
return om_tools.dom.element.call(null,om.dom.textarea,props.call(null,"form-control"),cljs.core.PersistentVector.EMPTY);

break;
case "static":
return om_tools.dom.element.call(null,React.DOM.p,props.call(null,"form-control-static"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(attrs)],null)));

break;
default:
return om_tools.dom.element.call(null,om.dom.input,cljs.core.assoc.call(null,props.call(null,(cljs.core.truth_(om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input))?"":"form-control")),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22765 = output_checker22750_22760.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22765)){
var error__9703__auto___22766 = temp__4126__auto___22765;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.call(null,error__9703__auto___22766)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22766,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22747_22757,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22756,output_schema22747_22757,input_schema22748_22758,input_checker22749_22759,output_checker22750_22760))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input),schema.core.make_fn_schema.call(null,output_schema22747_22757,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22748_22758], null)));
var ufv___22776 = schema.utils.use_fn_validation;
var output_schema22767_22777 = om_bootstrap.types.Component;
var input_schema22768_22778 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker22769_22779 = schema.core.checker.call(null,input_schema22768_22778);
var output_checker22770_22780 = schema.core.checker.call(null,output_schema22767_22777);
/**
 * Inputs: [opts :- Input & children]
 * Returns: t/Component
 * 
 * Returns an input component. This currently does NOT handle any of
 * the default values or validation messages that we'll need to make
 * this work, though.
 */
om_bootstrap.input.input = ((function (ufv___22776,output_schema22767_22777,input_schema22768_22778,input_checker22769_22779,output_checker22770_22780){
return (function om_bootstrap$input$input(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.input.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___22776,output_schema22767_22777,input_schema22768_22778,input_checker22769_22779,output_checker22770_22780))
;

om_bootstrap.input.input.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22776,output_schema22767_22777,input_schema22768_22778,input_checker22769_22779,output_checker22770_22780){
return (function (G__22771,rest22772){
var validate__9701__auto__ = ufv___22776.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22781 = cljs.core.list_STAR_.call(null,G__22771,rest22772);
var temp__4126__auto___22782 = input_checker22769_22779.call(null,args__9702__auto___22781);
if(cljs.core.truth_(temp__4126__auto___22782)){
var error__9703__auto___22783 = temp__4126__auto___22782;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.call(null,error__9703__auto___22783)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22783,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22781,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22768_22778,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__22771;
var children = rest22772;
while(true){
var vec__22775 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Input,opts);
var input = cljs.core.nth.call(null,vec__22775,(0),null);
var attrs = cljs.core.nth.call(null,vec__22775,(1),null);
if(cljs.core.truth_(om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input))){
return om_bootstrap.input.render_form_group.call(null,input,om_bootstrap.input.render_wrapper.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.checkbox_or_radio_wrapper.call(null,input,om_bootstrap.input.render_label.call(null,input,om_bootstrap.input.render_input.call(null,input,attrs,children))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input))], null)));
} else {
return om_bootstrap.input.render_form_group.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_label.call(null,input),om_bootstrap.input.render_wrapper.call(null,input,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_input_group.call(null,cljs.core.select_keys.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),new cljs.core.Keyword(null,"addon-after","addon-after",634985306)], null)),om_bootstrap.input.render_input.call(null,input,attrs,children)),om_bootstrap.input.render_icon.call(null,cljs.core.select_keys.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)], null))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input))], null))], null));
}
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22784 = output_checker22770_22780.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22784)){
var error__9703__auto___22785 = temp__4126__auto___22784;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.call(null,error__9703__auto___22785)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22785,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22767_22777,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22776,output_schema22767_22777,input_schema22768_22778,input_checker22769_22779,output_checker22770_22780))
;

om_bootstrap.input.input.cljs$lang$maxFixedArity = (1);

om_bootstrap.input.input.cljs$lang$applyTo = ((function (ufv___22776,output_schema22767_22777,input_schema22768_22778,input_checker22769_22779,output_checker22770_22780){
return (function (seq22773){
var G__22774 = cljs.core.first.call(null,seq22773);
var seq22773__$1 = cljs.core.next.call(null,seq22773);
return om_bootstrap.input.input.cljs$core$IFn$_invoke$arity$variadic(G__22774,seq22773__$1);
});})(ufv___22776,output_schema22767_22777,input_schema22768_22778,input_checker22769_22779,output_checker22770_22780))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.input),schema.core.make_fn_schema.call(null,output_schema22767_22777,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22768_22778], null)));
var ufv___22795 = schema.utils.use_fn_validation;
var output_schema22786_22796 = om_bootstrap.types.Component;
var input_schema22787_22797 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Radio,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_checker22788_22798 = schema.core.checker.call(null,input_schema22787_22797);
var output_checker22789_22799 = schema.core.checker.call(null,output_schema22786_22796);
/**
 * Inputs: [opts :- Radio]
 * Returns: t/Component
 * 
 * Generates a radio button entry, to place into a radio button
 * grouping.
 */
om_bootstrap.input.radio_option = ((function (ufv___22795,output_schema22786_22796,input_schema22787_22797,input_checker22788_22798,output_checker22789_22799){
return (function om_bootstrap$input$radio_option(G__22790){
var validate__9701__auto__ = ufv___22795.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22800 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22790], null);
var temp__4126__auto___22801 = input_checker22788_22798.call(null,args__9702__auto___22800);
if(cljs.core.truth_(temp__4126__auto___22801)){
var error__9703__auto___22802 = temp__4126__auto___22801;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.call(null,error__9703__auto___22802)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22802,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22800,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22787_22797,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__22790;
while(true){
var vec__22793 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Radio,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"type","type",1174270348),"radio"], null));
var bs = cljs.core.nth.call(null,vec__22793,(0),null);
var props = cljs.core.nth.call(null,vec__22793,(1),null);
var map__22794 = bs;
var map__22794__$1 = ((cljs.core.seq_QMARK_.call(null,map__22794))?cljs.core.apply.call(null,cljs.core.hash_map,map__22794):map__22794);
var inline_QMARK_ = cljs.core.get.call(null,map__22794__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));
var checked_QMARK_ = cljs.core.get.call(null,map__22794__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var label = cljs.core.get.call(null,map__22794__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var core = om_tools.dom.element.call(null,om.dom.input,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(inline_QMARK_)){
return cljs.core.apply.call(null,React.DOM.label,{"className": "radio-inline"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))));
} else {
return cljs.core.apply.call(null,React.DOM.div,{"className": "radio"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.label,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))))],null))));
}
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22803 = output_checker22789_22799.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22803)){
var error__9703__auto___22804 = temp__4126__auto___22803;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.call(null,error__9703__auto___22804)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22804,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22786_22796,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22795,output_schema22786_22796,input_schema22787_22797,input_checker22788_22798,output_checker22789_22799))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.radio_option),schema.core.make_fn_schema.call(null,output_schema22786_22796,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22787_22797], null)));
var ufv___22827 = schema.utils.use_fn_validation;
var output_schema22805_22828 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.types.Component], null);
var input_schema22806_22829 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"header","header",1759972661,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair.call(null,schema.core.Str,"option value",schema.core.Str,"option label")], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_checker22807_22830 = schema.core.checker.call(null,input_schema22806_22829);
var output_checker22808_22831 = schema.core.checker.call(null,output_schema22805_22828);
/**
 * Inputs: [header :- s/Str opts :- [(s/pair s/Str "option value" s/Str "option label")]]
 * Returns: [t/Component]
 * 
 * Returns a sequence of options for use as the children of a select
 * input.
 */
om_bootstrap.input.options = ((function (ufv___22827,output_schema22805_22828,input_schema22806_22829,input_checker22807_22830,output_checker22808_22831){
return (function om_bootstrap$input$options(G__22809,G__22810){
var validate__9701__auto__ = ufv___22827.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22809,G__22810], null);
var temp__4126__auto___22833 = input_checker22807_22830.call(null,args__9702__auto___22832);
if(cljs.core.truth_(temp__4126__auto___22833)){
var error__9703__auto___22834 = temp__4126__auto___22833;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.call(null,error__9703__auto___22834)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22834,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22832,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22806_22829,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var header = G__22809;
var opts = G__22810;
while(true){
return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": ""},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))),(function (){var iter__4713__auto__ = ((function (validate__9701__auto__,ufv___22827,output_schema22805_22828,input_schema22806_22829,input_checker22807_22830,output_checker22808_22831){
return (function om_bootstrap$input$options_$_iter__22819(s__22820){
return (new cljs.core.LazySeq(null,((function (validate__9701__auto__,ufv___22827,output_schema22805_22828,input_schema22806_22829,input_checker22807_22830,output_checker22808_22831){
return (function (){
var s__22820__$1 = s__22820;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22820__$1);
if(temp__4126__auto__){
var s__22820__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22820__$2)){
var c__4711__auto__ = cljs.core.chunk_first.call(null,s__22820__$2);
var size__4712__auto__ = cljs.core.count.call(null,c__4711__auto__);
var b__22822 = cljs.core.chunk_buffer.call(null,size__4712__auto__);
if((function (){var i__22821 = (0);
while(true){
if((i__22821 < size__4712__auto__)){
var vec__22825 = cljs.core._nth.call(null,c__4711__auto__,i__22821);
var v = cljs.core.nth.call(null,vec__22825,(0),null);
var label = cljs.core.nth.call(null,vec__22825,(1),null);
cljs.core.chunk_append.call(null,b__22822,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))));

var G__22835 = (i__22821 + (1));
i__22821 = G__22835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22822),om_bootstrap$input$options_$_iter__22819.call(null,cljs.core.chunk_rest.call(null,s__22820__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22822),null);
}
} else {
var vec__22826 = cljs.core.first.call(null,s__22820__$2);
var v = cljs.core.nth.call(null,vec__22826,(0),null);
var label = cljs.core.nth.call(null,vec__22826,(1),null);
return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),om_bootstrap$input$options_$_iter__22819.call(null,cljs.core.rest.call(null,s__22820__$2)));
}
} else {
return null;
}
break;
}
});})(validate__9701__auto__,ufv___22827,output_schema22805_22828,input_schema22806_22829,input_checker22807_22830,output_checker22808_22831))
,null,null));
});})(validate__9701__auto__,ufv___22827,output_schema22805_22828,input_schema22806_22829,input_checker22807_22830,output_checker22808_22831))
;
return iter__4713__auto__.call(null,opts);
})());
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22836 = output_checker22808_22831.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22836)){
var error__9703__auto___22837 = temp__4126__auto___22836;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.call(null,error__9703__auto___22837)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22837,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22805_22828,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22827,output_schema22805_22828,input_schema22806_22829,input_checker22807_22830,output_checker22808_22831))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.options),schema.core.make_fn_schema.call(null,output_schema22805_22828,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22806_22829], null)));

//# sourceMappingURL=input.js.map