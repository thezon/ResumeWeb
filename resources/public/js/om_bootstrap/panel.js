// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.panel');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
om_bootstrap.panel.Panel = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header","header",119441134)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"footer","footer",1606445390)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"list-group","list-group",-304522729)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)),schema.core.Bool], true, false));
var ufv___22265 = schema.utils.use_fn_validation;
var output_schema22256_22266 = om_bootstrap.types.Component;
var input_schema22257_22267 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.panel.Panel,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker22258_22268 = schema.core.checker.call(null,input_schema22257_22267);
var output_checker22259_22269 = schema.core.checker.call(null,output_schema22256_22266);
/**
 * Inputs: [opts :- Panel & children]
 * Returns: t/Component
 */
om_bootstrap.panel.panel = ((function (ufv___22265,output_schema22256_22266,input_schema22257_22267,input_checker22258_22268,output_checker22259_22269){
return (function om_bootstrap$panel$panel(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___22265,output_schema22256_22266,input_schema22257_22267,input_checker22258_22268,output_checker22259_22269))
;

om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22265,output_schema22256_22266,input_schema22257_22267,input_checker22258_22268,output_checker22259_22269){
return (function (G__22260,rest22261){
var validate__9701__auto__ = ufv___22265.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22270 = cljs.core.list_STAR_.call(null,G__22260,rest22261);
var temp__4126__auto___22271 = input_checker22258_22268.call(null,args__9702__auto___22270);
if(cljs.core.truth_(temp__4126__auto___22271)){
var error__9703__auto___22272 = temp__4126__auto___22271;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"panel","panel",1081894071,null),cljs.core.pr_str.call(null,error__9703__auto___22272)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22272,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22270,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22257_22267,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var opts = G__22260;
var children = rest22261;
while(true){
var vec__22264 = om_bootstrap.types.separate.call(null,om_bootstrap.panel.Panel,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"panel",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__22264,(0),null);
var props = cljs.core.nth.call(null,vec__22264,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.Keyword(null,"panel","panel",-558637456),true);
if(cljs.core.truth_(new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs))){
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),new cljs.core.Keyword(null,"children","children",-940561982),children], null));
} else {
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var header = temp__4126__auto__;
return cljs.core.apply.call(null,React.DOM.div,{"className": "panel-heading"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.util.clone_with_props.call(null,header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-title"], null))],null))));
} else {
return null;
}
})(),((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.identity,children))))?null:cljs.core.apply.call(null,React.DOM.div,{"ref": "body", "className": om_tools.dom.format_opts.call(null,[cljs.core.str("panel-body"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674).cljs$core$IFn$_invoke$arity$1(bs))?" collapse":null))].join(''))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"list-group","list-group",-304522729).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var list_group = temp__4126__auto__;
return list_group;
} else {
return null;
}
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"footer","footer",1606445390).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var footer = temp__4126__auto__;
return cljs.core.apply.call(null,React.DOM.div,{"className": "panel-footer"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[footer],null))));
} else {
return null;
}
})()],null)));
}
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22273 = output_checker22259_22269.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22273)){
var error__9703__auto___22274 = temp__4126__auto___22273;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"panel","panel",1081894071,null),cljs.core.pr_str.call(null,error__9703__auto___22274)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22274,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22256_22266,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___22265,output_schema22256_22266,input_schema22257_22267,input_checker22258_22268,output_checker22259_22269))
;

om_bootstrap.panel.panel.cljs$lang$maxFixedArity = (1);

om_bootstrap.panel.panel.cljs$lang$applyTo = ((function (ufv___22265,output_schema22256_22266,input_schema22257_22267,input_checker22258_22268,output_checker22259_22269){
return (function (seq22262){
var G__22263 = cljs.core.first.call(null,seq22262);
var seq22262__$1 = cljs.core.next.call(null,seq22262);
return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(G__22263,seq22262__$1);
});})(ufv___22265,output_schema22256_22266,input_schema22257_22267,input_checker22258_22268,output_checker22259_22269))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.panel.panel),schema.core.make_fn_schema.call(null,output_schema22256_22266,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22257_22267], null)));
om_bootstrap.panel.collapsible_panel_STAR_$descriptor = (function (){var descriptor__15604__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__15604__auto__["mixins"] = [om_bootstrap.mixins.collapsible_mixin]);

return descriptor__15604__auto__;
})();

var component_fnk__15633__auto___22299 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22279 = schema.core.Any;
var input_schema22280 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map22278","map22278",369627393,null))], null);
var input_checker22281 = schema.core.checker.call(null,input_schema22280);
var output_checker22282 = schema.core.checker.call(null,output_schema22279);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema22279,input_schema22280,input_checker22281,output_checker22282){
return (function om_bootstrap$panel$constructor22276(G__22283){
var validate__9701__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___22300 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22283], null);
var temp__4126__auto___22301 = input_checker22281.call(null,args__9702__auto___22300);
if(cljs.core.truth_(temp__4126__auto___22301)){
var error__9703__auto___22302 = temp__4126__auto___22301;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor22276","constructor22276",612831286,null),cljs.core.pr_str.call(null,error__9703__auto___22302)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22302,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___22300,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22280,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var map22278 = G__22283;
while(true){
if(cljs.core.map_QMARK_.call(null,map22278)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map22278)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map22278,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map22278,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.panel.t22288 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.panel.t22288 = (function (map22278,G__22283,input_schema22280,owner,output_schema22279,validate__9701__auto__,output_checker22282,input_checker22281,state,constructor22276,ufv__,meta22289){
this.map22278 = map22278;
this.G__22283 = G__22283;
this.input_schema22280 = input_schema22280;
this.owner = owner;
this.output_schema22279 = output_schema22279;
this.validate__9701__auto__ = validate__9701__auto__;
this.output_checker22282 = output_checker22282;
this.input_checker22281 = input_checker22281;
this.state = state;
this.constructor22276 = constructor22276;
this.ufv__ = ufv__;
this.meta22289 = meta22289;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.panel.t22288.prototype.om$core$IDisplayName$ = true;

om_bootstrap.panel.t22288.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__9701__auto__,ufv__,output_schema22279,input_schema22280,input_checker22281,output_checker22282){
return (function (_){
var self__ = this;
var ___$1 = this;
return "collapsible-panel*";
});})(state,owner,validate__9701__auto__,ufv__,output_schema22279,input_schema22280,input_checker22281,output_checker22282))
;

om_bootstrap.panel.t22288.prototype.om$core$IRender$ = true;

om_bootstrap.panel.t22288.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__9701__auto__,ufv__,output_schema22279,input_schema22280,input_checker22281,output_checker22282){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__22291 = om.core.get_props.call(null,self__.owner);
var map__22291__$1 = ((cljs.core.seq_QMARK_.call(null,map__22291))?cljs.core.apply.call(null,cljs.core.hash_map,map__22291):map__22291);
var children = cljs.core.get.call(null,map__22291__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__22291__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var is_collapsed_QMARK_ = (self__.owner["isPanelCollapsed"]).call(null,self__.owner);
var toggle_BANG_ = ((function (map__22291,map__22291__$1,children,opts,is_collapsed_QMARK_,___$1,state,owner,validate__9701__auto__,ufv__,output_schema22279,input_schema22280,input_checker22281,output_checker22282){
return (function (___$2){
(self__.owner["toggleCollapsed"]).call(null,self__.owner);

return false;
});})(map__22291,map__22291__$1,children,opts,is_collapsed_QMARK_,___$1,state,owner,validate__9701__auto__,ufv__,output_schema22279,input_schema22280,input_checker22281,output_checker22282))
;
var collapsible_header = om_tools.dom.element.call(null,React.DOM.h4,cljs.core.apply.call(null,React.DOM.a,{"onClick": om_tools.dom.format_opts.call(null,toggle_BANG_), "href": "#"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(opts)],null)))),cljs.core.PersistentVector.EMPTY);
return om_bootstrap.panel.panel.call(null,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),collapsible_header,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),is_collapsed_QMARK_], null)),children);
});})(state,owner,validate__9701__auto__,ufv__,output_schema22279,input_schema22280,input_checker22281,output_checker22282))
;

om_bootstrap.panel.t22288.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__9701__auto__,ufv__,output_schema22279,input_schema22280,input_checker22281,output_checker22282){
return (function (_22290){
var self__ = this;
var _22290__$1 = this;
return self__.meta22289;
});})(state,owner,validate__9701__auto__,ufv__,output_schema22279,input_schema22280,input_checker22281,output_checker22282))
;

om_bootstrap.panel.t22288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__9701__auto__,ufv__,output_schema22279,input_schema22280,input_checker22281,output_checker22282){
return (function (_22290,meta22289__$1){
var self__ = this;
var _22290__$1 = this;
return (new om_bootstrap.panel.t22288(self__.map22278,self__.G__22283,self__.input_schema22280,self__.owner,self__.output_schema22279,self__.validate__9701__auto__,self__.output_checker22282,self__.input_checker22281,self__.state,self__.constructor22276,self__.ufv__,meta22289__$1));
});})(state,owner,validate__9701__auto__,ufv__,output_schema22279,input_schema22280,input_checker22281,output_checker22282))
;

om_bootstrap.panel.t22288.cljs$lang$type = true;

om_bootstrap.panel.t22288.cljs$lang$ctorStr = "om-bootstrap.panel/t22288";

om_bootstrap.panel.t22288.cljs$lang$ctorPrWriter = ((function (state,owner,validate__9701__auto__,ufv__,output_schema22279,input_schema22280,input_checker22281,output_checker22282){
return (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"om-bootstrap.panel/t22288");
});})(state,owner,validate__9701__auto__,ufv__,output_schema22279,input_schema22280,input_checker22281,output_checker22282))
;

om_bootstrap.panel.__GT_t22288 = ((function (state,owner,validate__9701__auto__,ufv__,output_schema22279,input_schema22280,input_checker22281,output_checker22282){
return (function om_bootstrap$panel$constructor22276_$___GT_t22288(map22278__$1,G__22283__$1,input_schema22280__$1,owner__$1,output_schema22279__$1,validate__9701__auto____$1,output_checker22282__$1,input_checker22281__$1,state__$1,constructor22276__$1,ufv____$1,meta22289){
return (new om_bootstrap.panel.t22288(map22278__$1,G__22283__$1,input_schema22280__$1,owner__$1,output_schema22279__$1,validate__9701__auto____$1,output_checker22282__$1,input_checker22281__$1,state__$1,constructor22276__$1,ufv____$1,meta22289));
});})(state,owner,validate__9701__auto__,ufv__,output_schema22279,input_schema22280,input_checker22281,output_checker22282))
;

}

return (new om_bootstrap.panel.t22288(map22278,G__22283,input_schema22280,owner,output_schema22279,validate__9701__auto__,output_checker22282,input_checker22281,state,om_bootstrap$panel$constructor22276,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___22303 = output_checker22282.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___22303)){
var error__9703__auto___22304 = temp__4126__auto___22303;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor22276","constructor22276",612831286,null),cljs.core.pr_str.call(null,error__9703__auto___22304)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___22304,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22279,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv__,output_schema22279,input_schema22280,input_checker22281,output_checker22282))
,schema.core.make_fn_schema.call(null,output_schema22279,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22280], null)));
})();
/**
 * Generates a collapsible panel component resposible for its own toggled state.
 * The :collapsed? state is handled through a collapsible mixin.
 */
om_bootstrap.panel.collapsible_panel_STAR_ = ((function (component_fnk__15633__auto___22299){
return (function om_bootstrap$panel$collapsible_panel_STAR_(){
var argseq__4999__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4999__auto__);
});})(component_fnk__15633__auto___22299))
;

om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__15633__auto___22299){
return (function (data__15634__auto__,owner22275,p__22295){
var vec__22296 = p__22295;
var opts__15635__auto__ = cljs.core.nth.call(null,vec__22296,(0),null);
return component_fnk__15633__auto___22299.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner22275),new cljs.core.Keyword(null,"opts","opts",155075701),opts__15635__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner22275,new cljs.core.Keyword(null,"data","data",-232669377),data__15634__auto__], null));
});})(component_fnk__15633__auto___22299))
;

om_bootstrap.panel.collapsible_panel_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.panel.collapsible_panel_STAR_.cljs$lang$applyTo = ((function (component_fnk__15633__auto___22299){
return (function (seq22292){
var G__22293 = cljs.core.first.call(null,seq22292);
var seq22292__$1 = cljs.core.next.call(null,seq22292);
var G__22294 = cljs.core.first.call(null,seq22292__$1);
var seq22292__$2 = cljs.core.next.call(null,seq22292__$1);
return om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__22293,G__22294,seq22292__$2);
});})(component_fnk__15633__auto___22299))
;

om_bootstrap.panel.__GT_collapsible_panel_STAR_ = (function om_bootstrap$panel$__GT_collapsible_panel_STAR_(){
var G__22298 = arguments.length;
switch (G__22298) {
case 1:
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__15602__auto__){
return om.core.build.call(null,om_bootstrap.panel.collapsible_panel_STAR_,cursor__15602__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.panel.collapsible_panel_STAR_$descriptor], null));
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__15602__auto__,m22277){
return om.core.build.call(null,om_bootstrap.panel.collapsible_panel_STAR_,cursor__15602__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.panel.collapsible_panel_STAR_$descriptor], null),m22277));
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=panel.js.map