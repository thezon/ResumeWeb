// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.modal');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
/**
 * Options for the modal.
 */
om_bootstrap.modal.Modal = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"header","header",119441134),schema.core.Any,new cljs.core.Keyword(null,"footer","footer",1606445390),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"keyboard?","keyboard?",-2034212401)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible?","visible?",2129863715)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"animate?","animate?",-1559039739)),schema.core.Bool], true, false);

var component_fnk__11730__auto___22842 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22820 = schema.core.Any;
var input_schema22821 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map22819","map22819",2022886364,null))], null);
var input_checker22822 = schema.core.checker.call(null,input_schema22821);
var output_checker22823 = schema.core.checker.call(null,output_schema22820);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823){
return (function om_bootstrap$modal$constructor22817(G__22824){
var validate__8600__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__8600__auto__)){
var args__8601__auto___22843 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22824], null);
var temp__4126__auto___22844 = input_checker22822.call(null,args__8601__auto___22843);
if(cljs.core.truth_(temp__4126__auto___22844)){
var error__8602__auto___22845 = temp__4126__auto___22844;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor22817","constructor22817",644088846,null),cljs.core.pr_str.call(null,error__8602__auto___22845)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8602__auto___22845,new cljs.core.Keyword(null,"value","value",305978217),args__8601__auto___22843,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22821,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8603__auto__ = (function (){var map22819 = G__22824;
while(true){
if(cljs.core.map_QMARK_.call(null,map22819)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map22819)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map22819,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map22819,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.modal.t22830 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.modal.t22830 = (function (G__22824,output_checker22823,input_checker22822,owner,validate__8600__auto__,constructor22817,input_schema22821,output_schema22820,state,map22819,ufv__,meta22831){
this.G__22824 = G__22824;
this.output_checker22823 = output_checker22823;
this.input_checker22822 = input_checker22822;
this.owner = owner;
this.validate__8600__auto__ = validate__8600__auto__;
this.constructor22817 = constructor22817;
this.input_schema22821 = input_schema22821;
this.output_schema22820 = output_schema22820;
this.state = state;
this.map22819 = map22819;
this.ufv__ = ufv__;
this.meta22831 = meta22831;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.modal.t22830.prototype.om$core$IDisplayName$ = true;

om_bootstrap.modal.t22830.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__8600__auto__,ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823){
return (function (_){
var self__ = this;
var ___$1 = this;
return "modal*";
});})(state,owner,validate__8600__auto__,ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823))
;

om_bootstrap.modal.t22830.prototype.om$core$IRender$ = true;

om_bootstrap.modal.t22830.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__8600__auto__,ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__22833 = om.core.get_props.call(null,self__.owner);
var map__22833__$1 = ((cljs.core.seq_QMARK_.call(null,map__22833))?cljs.core.apply.call(null,cljs.core.hash_map,map__22833):map__22833);
var children = cljs.core.get.call(null,map__22833__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__22833__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var vec__22834 = om_bootstrap.types.separate.call(null,om_bootstrap.modal.Modal,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"modal"], null));
var bs = cljs.core.nth.call(null,vec__22834,(0),null);
var props = cljs.core.nth.call(null,vec__22834,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"modal","modal",-1031880850),true,new cljs.core.Keyword(null,"fade","fade",1167694157),true,new cljs.core.Keyword(null,"in","in",-1531184865),om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null))], null);
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "modal-dialog"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "modal-content"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "modal-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687).cljs$core$IFn$_invoke$arity$1(bs))?React.DOM.button({"onClick": om_tools.dom.format_opts.call(null,((function (map__22833,map__22833__$1,children,opts,vec__22834,bs,props,classes,___$1,state,owner,validate__8600__auto__,ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823){
return (function (___$2){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),false);
});})(map__22833,map__22833__$1,children,opts,vec__22834,bs,props,classes,___$1,state,owner,validate__8600__auto__,ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823))
), "aria-hidden": true, "className": "close", "type": "button"},"\u00D7"):null),om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-title"], null))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "modal-body"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "modal-footer"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"footer","footer",1606445390).cljs$core$IFn$_invoke$arity$1(bs)],null))))],null))))],null))))],null)));
});})(state,owner,validate__8600__auto__,ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823))
;

om_bootstrap.modal.t22830.prototype.om$core$IWillReceiveProps$ = true;

om_bootstrap.modal.t22830.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (state,owner,validate__8600__auto__,ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823){
return (function (this$,next_props){
var self__ = this;
var this$__$1 = this;
var last_props = om.core.get_props.call(null,self__.owner);
var last_visible_QMARK_ = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null));
var next_visible_QMARK_ = cljs.core.get_in.call(null,next_props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null));
if(cljs.core.not_EQ_.call(null,last_visible_QMARK_,next_visible_QMARK_)){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),next_visible_QMARK_);
} else {
return null;
}
});})(state,owner,validate__8600__auto__,ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823))
;

om_bootstrap.modal.t22830.prototype.om$core$IInitState$ = true;

om_bootstrap.modal.t22830.prototype.om$core$IInitState$init_state$arity$1 = ((function (state,owner,validate__8600__auto__,ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),cljs.core.get_in.call(null,om.core.get_props.call(null,self__.owner),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null))], null);
});})(state,owner,validate__8600__auto__,ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823))
;

om_bootstrap.modal.t22830.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__8600__auto__,ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823){
return (function (_22832){
var self__ = this;
var _22832__$1 = this;
return self__.meta22831;
});})(state,owner,validate__8600__auto__,ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823))
;

om_bootstrap.modal.t22830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__8600__auto__,ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823){
return (function (_22832,meta22831__$1){
var self__ = this;
var _22832__$1 = this;
return (new om_bootstrap.modal.t22830(self__.G__22824,self__.output_checker22823,self__.input_checker22822,self__.owner,self__.validate__8600__auto__,self__.constructor22817,self__.input_schema22821,self__.output_schema22820,self__.state,self__.map22819,self__.ufv__,meta22831__$1));
});})(state,owner,validate__8600__auto__,ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823))
;

om_bootstrap.modal.t22830.cljs$lang$type = true;

om_bootstrap.modal.t22830.cljs$lang$ctorStr = "om-bootstrap.modal/t22830";

om_bootstrap.modal.t22830.cljs$lang$ctorPrWriter = ((function (state,owner,validate__8600__auto__,ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823){
return (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"om-bootstrap.modal/t22830");
});})(state,owner,validate__8600__auto__,ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823))
;

om_bootstrap.modal.__GT_t22830 = ((function (state,owner,validate__8600__auto__,ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823){
return (function om_bootstrap$modal$constructor22817_$___GT_t22830(G__22824__$1,output_checker22823__$1,input_checker22822__$1,owner__$1,validate__8600__auto____$1,constructor22817__$1,input_schema22821__$1,output_schema22820__$1,state__$1,map22819__$1,ufv____$1,meta22831){
return (new om_bootstrap.modal.t22830(G__22824__$1,output_checker22823__$1,input_checker22822__$1,owner__$1,validate__8600__auto____$1,constructor22817__$1,input_schema22821__$1,output_schema22820__$1,state__$1,map22819__$1,ufv____$1,meta22831));
});})(state,owner,validate__8600__auto__,ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823))
;

}

return (new om_bootstrap.modal.t22830(G__22824,output_checker22823,input_checker22822,owner,validate__8600__auto__,om_bootstrap$modal$constructor22817,input_schema22821,output_schema22820,state,map22819,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__8600__auto__)){
var temp__4126__auto___22846 = output_checker22823.call(null,o__8603__auto__);
if(cljs.core.truth_(temp__4126__auto___22846)){
var error__8602__auto___22847 = temp__4126__auto___22846;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor22817","constructor22817",644088846,null),cljs.core.pr_str.call(null,error__8602__auto___22847)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8602__auto___22847,new cljs.core.Keyword(null,"value","value",305978217),o__8603__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22820,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8603__auto__;
});})(ufv__,output_schema22820,input_schema22821,input_checker22822,output_checker22823))
,schema.core.make_fn_schema.call(null,output_schema22820,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22821], null)));
})();
/**
 * Component that renders a Modal. Manages it's own toggle state
 */
om_bootstrap.modal.modal_STAR_ = ((function (component_fnk__11730__auto___22842){
return (function om_bootstrap$modal$modal_STAR_(){
var argseq__4999__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.modal.modal_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4999__auto__);
});})(component_fnk__11730__auto___22842))
;

om_bootstrap.modal.modal_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__11730__auto___22842){
return (function (data__11731__auto__,owner22816,p__22838){
var vec__22839 = p__22838;
var opts__11732__auto__ = cljs.core.nth.call(null,vec__22839,(0),null);
return component_fnk__11730__auto___22842.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner22816),new cljs.core.Keyword(null,"opts","opts",155075701),opts__11732__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner22816,new cljs.core.Keyword(null,"data","data",-232669377),data__11731__auto__], null));
});})(component_fnk__11730__auto___22842))
;

om_bootstrap.modal.modal_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.modal.modal_STAR_.cljs$lang$applyTo = ((function (component_fnk__11730__auto___22842){
return (function (seq22835){
var G__22836 = cljs.core.first.call(null,seq22835);
var seq22835__$1 = cljs.core.next.call(null,seq22835);
var G__22837 = cljs.core.first.call(null,seq22835__$1);
var seq22835__$2 = cljs.core.next.call(null,seq22835__$1);
return om_bootstrap.modal.modal_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__22836,G__22837,seq22835__$2);
});})(component_fnk__11730__auto___22842))
;

om_bootstrap.modal.__GT_modal_STAR_ = (function om_bootstrap$modal$__GT_modal_STAR_(){
var G__22841 = arguments.length;
switch (G__22841) {
case 1:
return om_bootstrap.modal.__GT_modal_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.modal.__GT_modal_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.modal.__GT_modal_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__11699__auto__){
return om.core.build.call(null,om_bootstrap.modal.modal_STAR_,cursor__11699__auto__);
});

om_bootstrap.modal.__GT_modal_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__11699__auto__,m22818){
return om.core.build.call(null,om_bootstrap.modal.modal_STAR_,cursor__11699__auto__,m22818);
});

om_bootstrap.modal.__GT_modal_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___22857 = schema.utils.use_fn_validation;
var output_schema22849_22858 = schema.core.Any;
var input_schema22850_22859 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.modal.Modal,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker22851_22860 = schema.core.checker.call(null,input_schema22850_22859);
var output_checker22852_22861 = schema.core.checker.call(null,output_schema22849_22858);
/**
 * Inputs: [opts :- Modal & children]
 */
om_bootstrap.modal.modal = ((function (ufv___22857,output_schema22849_22858,input_schema22850_22859,input_checker22851_22860,output_checker22852_22861){
return (function om_bootstrap$modal$modal(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.modal.modal.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});})(ufv___22857,output_schema22849_22858,input_schema22850_22859,input_checker22851_22860,output_checker22852_22861))
;

om_bootstrap.modal.modal.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22857,output_schema22849_22858,input_schema22850_22859,input_checker22851_22860,output_checker22852_22861){
return (function (G__22853,rest22854){
var validate__8600__auto__ = ufv___22857.get_cell();
if(cljs.core.truth_(validate__8600__auto__)){
var args__8601__auto___22862 = cljs.core.list_STAR_.call(null,G__22853,rest22854);
var temp__4126__auto___22863 = input_checker22851_22860.call(null,args__8601__auto___22862);
if(cljs.core.truth_(temp__4126__auto___22863)){
var error__8602__auto___22864 = temp__4126__auto___22863;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"modal","modal",608650677,null),cljs.core.pr_str.call(null,error__8602__auto___22864)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8602__auto___22864,new cljs.core.Keyword(null,"value","value",305978217),args__8601__auto___22862,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22850_22859,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8603__auto__ = (function (){var opts = G__22853;
var children = rest22854;
while(true){
return om_bootstrap.modal.__GT_modal_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__8600__auto__)){
var temp__4126__auto___22865 = output_checker22852_22861.call(null,o__8603__auto__);
if(cljs.core.truth_(temp__4126__auto___22865)){
var error__8602__auto___22866 = temp__4126__auto___22865;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"modal","modal",608650677,null),cljs.core.pr_str.call(null,error__8602__auto___22866)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8602__auto___22866,new cljs.core.Keyword(null,"value","value",305978217),o__8603__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22849_22858,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8603__auto__;
});})(ufv___22857,output_schema22849_22858,input_schema22850_22859,input_checker22851_22860,output_checker22852_22861))
;

om_bootstrap.modal.modal.cljs$lang$maxFixedArity = (1);

om_bootstrap.modal.modal.cljs$lang$applyTo = ((function (ufv___22857,output_schema22849_22858,input_schema22850_22859,input_checker22851_22860,output_checker22852_22861){
return (function (seq22855){
var G__22856 = cljs.core.first.call(null,seq22855);
var seq22855__$1 = cljs.core.next.call(null,seq22855);
return om_bootstrap.modal.modal.cljs$core$IFn$_invoke$arity$variadic(G__22856,seq22855__$1);
});})(ufv___22857,output_schema22849_22858,input_schema22850_22859,input_checker22851_22860,output_checker22852_22861))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.modal.modal),schema.core.make_fn_schema.call(null,output_schema22849_22858,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22850_22859], null)));

//# sourceMappingURL=modal.js.map