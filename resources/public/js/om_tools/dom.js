// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('clojure.string');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__3959__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__3959__auto__){
return or__3959__auto__;
} else {
var G__16518 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__16518) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__16521 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__16521) {
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16525){
var vec__16526 = p__16525;
var k = cljs.core.nth.call(null,vec__16526,(0),null);
var v = cljs.core.nth.call(null,vec__16526,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__3959__auto__ = React.isValidElement;
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 * argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_.call(null,opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__16528 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__16528,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__16528,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(){
var G__16532 = arguments.length;
switch (G__16532) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq16529){
var G__16530 = cljs.core.first.call(null,seq16529);
var seq16529__$1 = cljs.core.next.call(null,seq16529);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__16530,seq16529__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);

om_tools.dom.abbr = (function om_tools$dom$abbr(){
var G__16536 = arguments.length;
switch (G__16536) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq16533){
var G__16534 = cljs.core.first.call(null,seq16533);
var seq16533__$1 = cljs.core.next.call(null,seq16533);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__16534,seq16533__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.address = (function om_tools$dom$address(){
var G__16540 = arguments.length;
switch (G__16540) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq16537){
var G__16538 = cljs.core.first.call(null,seq16537);
var seq16537__$1 = cljs.core.next.call(null,seq16537);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__16538,seq16537__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);

om_tools.dom.area = (function om_tools$dom$area(){
var G__16544 = arguments.length;
switch (G__16544) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq16541){
var G__16542 = cljs.core.first.call(null,seq16541);
var seq16541__$1 = cljs.core.next.call(null,seq16541);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__16542,seq16541__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);

om_tools.dom.article = (function om_tools$dom$article(){
var G__16548 = arguments.length;
switch (G__16548) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq16545){
var G__16546 = cljs.core.first.call(null,seq16545);
var seq16545__$1 = cljs.core.next.call(null,seq16545);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__16546,seq16545__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);

om_tools.dom.aside = (function om_tools$dom$aside(){
var G__16552 = arguments.length;
switch (G__16552) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq16549){
var G__16550 = cljs.core.first.call(null,seq16549);
var seq16549__$1 = cljs.core.next.call(null,seq16549);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__16550,seq16549__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);

om_tools.dom.audio = (function om_tools$dom$audio(){
var G__16556 = arguments.length;
switch (G__16556) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq16553){
var G__16554 = cljs.core.first.call(null,seq16553);
var seq16553__$1 = cljs.core.next.call(null,seq16553);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__16554,seq16553__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);

om_tools.dom.b = (function om_tools$dom$b(){
var G__16560 = arguments.length;
switch (G__16560) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq16557){
var G__16558 = cljs.core.first.call(null,seq16557);
var seq16557__$1 = cljs.core.next.call(null,seq16557);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__16558,seq16557__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);

om_tools.dom.base = (function om_tools$dom$base(){
var G__16564 = arguments.length;
switch (G__16564) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq16561){
var G__16562 = cljs.core.first.call(null,seq16561);
var seq16561__$1 = cljs.core.next.call(null,seq16561);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__16562,seq16561__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdi = (function om_tools$dom$bdi(){
var G__16568 = arguments.length;
switch (G__16568) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq16565){
var G__16566 = cljs.core.first.call(null,seq16565);
var seq16565__$1 = cljs.core.next.call(null,seq16565);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__16566,seq16565__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdo = (function om_tools$dom$bdo(){
var G__16572 = arguments.length;
switch (G__16572) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq16569){
var G__16570 = cljs.core.first.call(null,seq16569);
var seq16569__$1 = cljs.core.next.call(null,seq16569);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__16570,seq16569__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);

om_tools.dom.big = (function om_tools$dom$big(){
var G__16576 = arguments.length;
switch (G__16576) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq16573){
var G__16574 = cljs.core.first.call(null,seq16573);
var seq16573__$1 = cljs.core.next.call(null,seq16573);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__16574,seq16573__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);

om_tools.dom.blockquote = (function om_tools$dom$blockquote(){
var G__16580 = arguments.length;
switch (G__16580) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq16577){
var G__16578 = cljs.core.first.call(null,seq16577);
var seq16577__$1 = cljs.core.next.call(null,seq16577);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__16578,seq16577__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);

om_tools.dom.body = (function om_tools$dom$body(){
var G__16584 = arguments.length;
switch (G__16584) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq16581){
var G__16582 = cljs.core.first.call(null,seq16581);
var seq16581__$1 = cljs.core.next.call(null,seq16581);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__16582,seq16581__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);

om_tools.dom.br = (function om_tools$dom$br(){
var G__16588 = arguments.length;
switch (G__16588) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq16585){
var G__16586 = cljs.core.first.call(null,seq16585);
var seq16585__$1 = cljs.core.next.call(null,seq16585);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__16586,seq16585__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);

om_tools.dom.button = (function om_tools$dom$button(){
var G__16592 = arguments.length;
switch (G__16592) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq16589){
var G__16590 = cljs.core.first.call(null,seq16589);
var seq16589__$1 = cljs.core.next.call(null,seq16589);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__16590,seq16589__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);

om_tools.dom.canvas = (function om_tools$dom$canvas(){
var G__16596 = arguments.length;
switch (G__16596) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq16593){
var G__16594 = cljs.core.first.call(null,seq16593);
var seq16593__$1 = cljs.core.next.call(null,seq16593);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__16594,seq16593__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);

om_tools.dom.caption = (function om_tools$dom$caption(){
var G__16600 = arguments.length;
switch (G__16600) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq16597){
var G__16598 = cljs.core.first.call(null,seq16597);
var seq16597__$1 = cljs.core.next.call(null,seq16597);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__16598,seq16597__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);

om_tools.dom.cite = (function om_tools$dom$cite(){
var G__16604 = arguments.length;
switch (G__16604) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq16601){
var G__16602 = cljs.core.first.call(null,seq16601);
var seq16601__$1 = cljs.core.next.call(null,seq16601);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__16602,seq16601__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);

om_tools.dom.code = (function om_tools$dom$code(){
var G__16608 = arguments.length;
switch (G__16608) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq16605){
var G__16606 = cljs.core.first.call(null,seq16605);
var seq16605__$1 = cljs.core.next.call(null,seq16605);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__16606,seq16605__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);

om_tools.dom.col = (function om_tools$dom$col(){
var G__16612 = arguments.length;
switch (G__16612) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq16609){
var G__16610 = cljs.core.first.call(null,seq16609);
var seq16609__$1 = cljs.core.next.call(null,seq16609);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__16610,seq16609__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);

om_tools.dom.colgroup = (function om_tools$dom$colgroup(){
var G__16616 = arguments.length;
switch (G__16616) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq16613){
var G__16614 = cljs.core.first.call(null,seq16613);
var seq16613__$1 = cljs.core.next.call(null,seq16613);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__16614,seq16613__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.data = (function om_tools$dom$data(){
var G__16620 = arguments.length;
switch (G__16620) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq16617){
var G__16618 = cljs.core.first.call(null,seq16617);
var seq16617__$1 = cljs.core.next.call(null,seq16617);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__16618,seq16617__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);

om_tools.dom.datalist = (function om_tools$dom$datalist(){
var G__16624 = arguments.length;
switch (G__16624) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq16621){
var G__16622 = cljs.core.first.call(null,seq16621);
var seq16621__$1 = cljs.core.next.call(null,seq16621);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__16622,seq16621__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);

om_tools.dom.dd = (function om_tools$dom$dd(){
var G__16628 = arguments.length;
switch (G__16628) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq16625){
var G__16626 = cljs.core.first.call(null,seq16625);
var seq16625__$1 = cljs.core.next.call(null,seq16625);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__16626,seq16625__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);

om_tools.dom.del = (function om_tools$dom$del(){
var G__16632 = arguments.length;
switch (G__16632) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq16629){
var G__16630 = cljs.core.first.call(null,seq16629);
var seq16629__$1 = cljs.core.next.call(null,seq16629);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__16630,seq16629__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);

om_tools.dom.dfn = (function om_tools$dom$dfn(){
var G__16636 = arguments.length;
switch (G__16636) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq16633){
var G__16634 = cljs.core.first.call(null,seq16633);
var seq16633__$1 = cljs.core.next.call(null,seq16633);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__16634,seq16633__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);

om_tools.dom.div = (function om_tools$dom$div(){
var G__16640 = arguments.length;
switch (G__16640) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq16637){
var G__16638 = cljs.core.first.call(null,seq16637);
var seq16637__$1 = cljs.core.next.call(null,seq16637);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__16638,seq16637__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);

om_tools.dom.dl = (function om_tools$dom$dl(){
var G__16644 = arguments.length;
switch (G__16644) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq16641){
var G__16642 = cljs.core.first.call(null,seq16641);
var seq16641__$1 = cljs.core.next.call(null,seq16641);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__16642,seq16641__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);

om_tools.dom.dt = (function om_tools$dom$dt(){
var G__16648 = arguments.length;
switch (G__16648) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq16645){
var G__16646 = cljs.core.first.call(null,seq16645);
var seq16645__$1 = cljs.core.next.call(null,seq16645);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__16646,seq16645__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);

om_tools.dom.em = (function om_tools$dom$em(){
var G__16652 = arguments.length;
switch (G__16652) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq16649){
var G__16650 = cljs.core.first.call(null,seq16649);
var seq16649__$1 = cljs.core.next.call(null,seq16649);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__16650,seq16649__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);

om_tools.dom.embed = (function om_tools$dom$embed(){
var G__16656 = arguments.length;
switch (G__16656) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq16653){
var G__16654 = cljs.core.first.call(null,seq16653);
var seq16653__$1 = cljs.core.next.call(null,seq16653);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__16654,seq16653__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);

om_tools.dom.fieldset = (function om_tools$dom$fieldset(){
var G__16664 = arguments.length;
switch (G__16664) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq16661){
var G__16662 = cljs.core.first.call(null,seq16661);
var seq16661__$1 = cljs.core.next.call(null,seq16661);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__16662,seq16661__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);

om_tools.dom.figcaption = (function om_tools$dom$figcaption(){
var G__16668 = arguments.length;
switch (G__16668) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq16665){
var G__16666 = cljs.core.first.call(null,seq16665);
var seq16665__$1 = cljs.core.next.call(null,seq16665);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__16666,seq16665__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);

om_tools.dom.figure = (function om_tools$dom$figure(){
var G__16672 = arguments.length;
switch (G__16672) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq16669){
var G__16670 = cljs.core.first.call(null,seq16669);
var seq16669__$1 = cljs.core.next.call(null,seq16669);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__16670,seq16669__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);

om_tools.dom.footer = (function om_tools$dom$footer(){
var G__16676 = arguments.length;
switch (G__16676) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq16673){
var G__16674 = cljs.core.first.call(null,seq16673);
var seq16673__$1 = cljs.core.next.call(null,seq16673);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__16674,seq16673__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);

om_tools.dom.form = (function om_tools$dom$form(){
var G__16680 = arguments.length;
switch (G__16680) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq16677){
var G__16678 = cljs.core.first.call(null,seq16677);
var seq16677__$1 = cljs.core.next.call(null,seq16677);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__16678,seq16677__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);

om_tools.dom.h1 = (function om_tools$dom$h1(){
var G__16684 = arguments.length;
switch (G__16684) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq16681){
var G__16682 = cljs.core.first.call(null,seq16681);
var seq16681__$1 = cljs.core.next.call(null,seq16681);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__16682,seq16681__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);

om_tools.dom.h2 = (function om_tools$dom$h2(){
var G__16688 = arguments.length;
switch (G__16688) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq16685){
var G__16686 = cljs.core.first.call(null,seq16685);
var seq16685__$1 = cljs.core.next.call(null,seq16685);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__16686,seq16685__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);

om_tools.dom.h3 = (function om_tools$dom$h3(){
var G__16692 = arguments.length;
switch (G__16692) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq16689){
var G__16690 = cljs.core.first.call(null,seq16689);
var seq16689__$1 = cljs.core.next.call(null,seq16689);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__16690,seq16689__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);

om_tools.dom.h4 = (function om_tools$dom$h4(){
var G__16696 = arguments.length;
switch (G__16696) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq16693){
var G__16694 = cljs.core.first.call(null,seq16693);
var seq16693__$1 = cljs.core.next.call(null,seq16693);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__16694,seq16693__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);

om_tools.dom.h5 = (function om_tools$dom$h5(){
var G__16700 = arguments.length;
switch (G__16700) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq16697){
var G__16698 = cljs.core.first.call(null,seq16697);
var seq16697__$1 = cljs.core.next.call(null,seq16697);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__16698,seq16697__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);

om_tools.dom.h6 = (function om_tools$dom$h6(){
var G__16704 = arguments.length;
switch (G__16704) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq16701){
var G__16702 = cljs.core.first.call(null,seq16701);
var seq16701__$1 = cljs.core.next.call(null,seq16701);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__16702,seq16701__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);

om_tools.dom.head = (function om_tools$dom$head(){
var G__16708 = arguments.length;
switch (G__16708) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq16705){
var G__16706 = cljs.core.first.call(null,seq16705);
var seq16705__$1 = cljs.core.next.call(null,seq16705);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__16706,seq16705__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);

om_tools.dom.header = (function om_tools$dom$header(){
var G__16712 = arguments.length;
switch (G__16712) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq16709){
var G__16710 = cljs.core.first.call(null,seq16709);
var seq16709__$1 = cljs.core.next.call(null,seq16709);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__16710,seq16709__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);

om_tools.dom.hr = (function om_tools$dom$hr(){
var G__16716 = arguments.length;
switch (G__16716) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq16713){
var G__16714 = cljs.core.first.call(null,seq16713);
var seq16713__$1 = cljs.core.next.call(null,seq16713);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__16714,seq16713__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);

om_tools.dom.html = (function om_tools$dom$html(){
var G__16720 = arguments.length;
switch (G__16720) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq16717){
var G__16718 = cljs.core.first.call(null,seq16717);
var seq16717__$1 = cljs.core.next.call(null,seq16717);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__16718,seq16717__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);

om_tools.dom.i = (function om_tools$dom$i(){
var G__16724 = arguments.length;
switch (G__16724) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq16721){
var G__16722 = cljs.core.first.call(null,seq16721);
var seq16721__$1 = cljs.core.next.call(null,seq16721);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__16722,seq16721__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);

om_tools.dom.iframe = (function om_tools$dom$iframe(){
var G__16728 = arguments.length;
switch (G__16728) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq16725){
var G__16726 = cljs.core.first.call(null,seq16725);
var seq16725__$1 = cljs.core.next.call(null,seq16725);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__16726,seq16725__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);

om_tools.dom.img = (function om_tools$dom$img(){
var G__16732 = arguments.length;
switch (G__16732) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq16729){
var G__16730 = cljs.core.first.call(null,seq16729);
var seq16729__$1 = cljs.core.next.call(null,seq16729);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__16730,seq16729__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);

om_tools.dom.ins = (function om_tools$dom$ins(){
var G__16736 = arguments.length;
switch (G__16736) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq16733){
var G__16734 = cljs.core.first.call(null,seq16733);
var seq16733__$1 = cljs.core.next.call(null,seq16733);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__16734,seq16733__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);

om_tools.dom.kbd = (function om_tools$dom$kbd(){
var G__16740 = arguments.length;
switch (G__16740) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq16737){
var G__16738 = cljs.core.first.call(null,seq16737);
var seq16737__$1 = cljs.core.next.call(null,seq16737);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__16738,seq16737__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);

om_tools.dom.keygen = (function om_tools$dom$keygen(){
var G__16744 = arguments.length;
switch (G__16744) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq16741){
var G__16742 = cljs.core.first.call(null,seq16741);
var seq16741__$1 = cljs.core.next.call(null,seq16741);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__16742,seq16741__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);

om_tools.dom.label = (function om_tools$dom$label(){
var G__16748 = arguments.length;
switch (G__16748) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq16745){
var G__16746 = cljs.core.first.call(null,seq16745);
var seq16745__$1 = cljs.core.next.call(null,seq16745);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__16746,seq16745__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);

om_tools.dom.legend = (function om_tools$dom$legend(){
var G__16752 = arguments.length;
switch (G__16752) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq16749){
var G__16750 = cljs.core.first.call(null,seq16749);
var seq16749__$1 = cljs.core.next.call(null,seq16749);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__16750,seq16749__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);

om_tools.dom.li = (function om_tools$dom$li(){
var G__16756 = arguments.length;
switch (G__16756) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq16753){
var G__16754 = cljs.core.first.call(null,seq16753);
var seq16753__$1 = cljs.core.next.call(null,seq16753);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__16754,seq16753__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);

om_tools.dom.link = (function om_tools$dom$link(){
var G__16760 = arguments.length;
switch (G__16760) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq16757){
var G__16758 = cljs.core.first.call(null,seq16757);
var seq16757__$1 = cljs.core.next.call(null,seq16757);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__16758,seq16757__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);

om_tools.dom.main = (function om_tools$dom$main(){
var G__16764 = arguments.length;
switch (G__16764) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq16761){
var G__16762 = cljs.core.first.call(null,seq16761);
var seq16761__$1 = cljs.core.next.call(null,seq16761);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__16762,seq16761__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);

om_tools.dom.map = (function om_tools$dom$map(){
var G__16768 = arguments.length;
switch (G__16768) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq16765){
var G__16766 = cljs.core.first.call(null,seq16765);
var seq16765__$1 = cljs.core.next.call(null,seq16765);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__16766,seq16765__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);

om_tools.dom.mark = (function om_tools$dom$mark(){
var G__16772 = arguments.length;
switch (G__16772) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq16769){
var G__16770 = cljs.core.first.call(null,seq16769);
var seq16769__$1 = cljs.core.next.call(null,seq16769);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__16770,seq16769__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);

om_tools.dom.marquee = (function om_tools$dom$marquee(){
var G__16776 = arguments.length;
switch (G__16776) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq16773){
var G__16774 = cljs.core.first.call(null,seq16773);
var seq16773__$1 = cljs.core.next.call(null,seq16773);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__16774,seq16773__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);

om_tools.dom.menu = (function om_tools$dom$menu(){
var G__16780 = arguments.length;
switch (G__16780) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq16777){
var G__16778 = cljs.core.first.call(null,seq16777);
var seq16777__$1 = cljs.core.next.call(null,seq16777);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__16778,seq16777__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);

om_tools.dom.menuitem = (function om_tools$dom$menuitem(){
var G__16784 = arguments.length;
switch (G__16784) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq16781){
var G__16782 = cljs.core.first.call(null,seq16781);
var seq16781__$1 = cljs.core.next.call(null,seq16781);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__16782,seq16781__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);

om_tools.dom.meta = (function om_tools$dom$meta(){
var G__16788 = arguments.length;
switch (G__16788) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq16785){
var G__16786 = cljs.core.first.call(null,seq16785);
var seq16785__$1 = cljs.core.next.call(null,seq16785);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__16786,seq16785__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);

om_tools.dom.meter = (function om_tools$dom$meter(){
var G__16792 = arguments.length;
switch (G__16792) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq16789){
var G__16790 = cljs.core.first.call(null,seq16789);
var seq16789__$1 = cljs.core.next.call(null,seq16789);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__16790,seq16789__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);

om_tools.dom.nav = (function om_tools$dom$nav(){
var G__16796 = arguments.length;
switch (G__16796) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq16793){
var G__16794 = cljs.core.first.call(null,seq16793);
var seq16793__$1 = cljs.core.next.call(null,seq16793);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__16794,seq16793__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);

om_tools.dom.noscript = (function om_tools$dom$noscript(){
var G__16800 = arguments.length;
switch (G__16800) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq16797){
var G__16798 = cljs.core.first.call(null,seq16797);
var seq16797__$1 = cljs.core.next.call(null,seq16797);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__16798,seq16797__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);

om_tools.dom.object = (function om_tools$dom$object(){
var G__16804 = arguments.length;
switch (G__16804) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq16801){
var G__16802 = cljs.core.first.call(null,seq16801);
var seq16801__$1 = cljs.core.next.call(null,seq16801);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__16802,seq16801__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);

om_tools.dom.ol = (function om_tools$dom$ol(){
var G__16808 = arguments.length;
switch (G__16808) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq16805){
var G__16806 = cljs.core.first.call(null,seq16805);
var seq16805__$1 = cljs.core.next.call(null,seq16805);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__16806,seq16805__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);

om_tools.dom.optgroup = (function om_tools$dom$optgroup(){
var G__16812 = arguments.length;
switch (G__16812) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq16809){
var G__16810 = cljs.core.first.call(null,seq16809);
var seq16809__$1 = cljs.core.next.call(null,seq16809);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__16810,seq16809__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.output = (function om_tools$dom$output(){
var G__16816 = arguments.length;
switch (G__16816) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq16813){
var G__16814 = cljs.core.first.call(null,seq16813);
var seq16813__$1 = cljs.core.next.call(null,seq16813);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__16814,seq16813__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);

om_tools.dom.p = (function om_tools$dom$p(){
var G__16820 = arguments.length;
switch (G__16820) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq16817){
var G__16818 = cljs.core.first.call(null,seq16817);
var seq16817__$1 = cljs.core.next.call(null,seq16817);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__16818,seq16817__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);

om_tools.dom.param = (function om_tools$dom$param(){
var G__16824 = arguments.length;
switch (G__16824) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq16821){
var G__16822 = cljs.core.first.call(null,seq16821);
var seq16821__$1 = cljs.core.next.call(null,seq16821);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__16822,seq16821__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);

om_tools.dom.pre = (function om_tools$dom$pre(){
var G__16828 = arguments.length;
switch (G__16828) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq16825){
var G__16826 = cljs.core.first.call(null,seq16825);
var seq16825__$1 = cljs.core.next.call(null,seq16825);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__16826,seq16825__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);

om_tools.dom.progress = (function om_tools$dom$progress(){
var G__16832 = arguments.length;
switch (G__16832) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq16829){
var G__16830 = cljs.core.first.call(null,seq16829);
var seq16829__$1 = cljs.core.next.call(null,seq16829);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__16830,seq16829__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);

om_tools.dom.q = (function om_tools$dom$q(){
var G__16836 = arguments.length;
switch (G__16836) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq16833){
var G__16834 = cljs.core.first.call(null,seq16833);
var seq16833__$1 = cljs.core.next.call(null,seq16833);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__16834,seq16833__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);

om_tools.dom.rp = (function om_tools$dom$rp(){
var G__16840 = arguments.length;
switch (G__16840) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq16837){
var G__16838 = cljs.core.first.call(null,seq16837);
var seq16837__$1 = cljs.core.next.call(null,seq16837);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__16838,seq16837__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);

om_tools.dom.rt = (function om_tools$dom$rt(){
var G__16844 = arguments.length;
switch (G__16844) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq16841){
var G__16842 = cljs.core.first.call(null,seq16841);
var seq16841__$1 = cljs.core.next.call(null,seq16841);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__16842,seq16841__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);

om_tools.dom.ruby = (function om_tools$dom$ruby(){
var G__16848 = arguments.length;
switch (G__16848) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq16845){
var G__16846 = cljs.core.first.call(null,seq16845);
var seq16845__$1 = cljs.core.next.call(null,seq16845);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__16846,seq16845__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);

om_tools.dom.s = (function om_tools$dom$s(){
var G__16852 = arguments.length;
switch (G__16852) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq16849){
var G__16850 = cljs.core.first.call(null,seq16849);
var seq16849__$1 = cljs.core.next.call(null,seq16849);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__16850,seq16849__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);

om_tools.dom.samp = (function om_tools$dom$samp(){
var G__16856 = arguments.length;
switch (G__16856) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq16853){
var G__16854 = cljs.core.first.call(null,seq16853);
var seq16853__$1 = cljs.core.next.call(null,seq16853);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__16854,seq16853__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);

om_tools.dom.script = (function om_tools$dom$script(){
var G__16860 = arguments.length;
switch (G__16860) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq16857){
var G__16858 = cljs.core.first.call(null,seq16857);
var seq16857__$1 = cljs.core.next.call(null,seq16857);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__16858,seq16857__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);

om_tools.dom.section = (function om_tools$dom$section(){
var G__16864 = arguments.length;
switch (G__16864) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq16861){
var G__16862 = cljs.core.first.call(null,seq16861);
var seq16861__$1 = cljs.core.next.call(null,seq16861);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__16862,seq16861__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);

om_tools.dom.select = (function om_tools$dom$select(){
var G__16868 = arguments.length;
switch (G__16868) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq16865){
var G__16866 = cljs.core.first.call(null,seq16865);
var seq16865__$1 = cljs.core.next.call(null,seq16865);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__16866,seq16865__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);

om_tools.dom.small = (function om_tools$dom$small(){
var G__16872 = arguments.length;
switch (G__16872) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq16869){
var G__16870 = cljs.core.first.call(null,seq16869);
var seq16869__$1 = cljs.core.next.call(null,seq16869);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__16870,seq16869__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);

om_tools.dom.source = (function om_tools$dom$source(){
var G__16876 = arguments.length;
switch (G__16876) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq16873){
var G__16874 = cljs.core.first.call(null,seq16873);
var seq16873__$1 = cljs.core.next.call(null,seq16873);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__16874,seq16873__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);

om_tools.dom.span = (function om_tools$dom$span(){
var G__16880 = arguments.length;
switch (G__16880) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq16877){
var G__16878 = cljs.core.first.call(null,seq16877);
var seq16877__$1 = cljs.core.next.call(null,seq16877);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__16878,seq16877__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);

om_tools.dom.strong = (function om_tools$dom$strong(){
var G__16884 = arguments.length;
switch (G__16884) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq16881){
var G__16882 = cljs.core.first.call(null,seq16881);
var seq16881__$1 = cljs.core.next.call(null,seq16881);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__16882,seq16881__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);

om_tools.dom.style = (function om_tools$dom$style(){
var G__16888 = arguments.length;
switch (G__16888) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq16885){
var G__16886 = cljs.core.first.call(null,seq16885);
var seq16885__$1 = cljs.core.next.call(null,seq16885);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__16886,seq16885__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);

om_tools.dom.sub = (function om_tools$dom$sub(){
var G__16892 = arguments.length;
switch (G__16892) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq16889){
var G__16890 = cljs.core.first.call(null,seq16889);
var seq16889__$1 = cljs.core.next.call(null,seq16889);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__16890,seq16889__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);

om_tools.dom.summary = (function om_tools$dom$summary(){
var G__16896 = arguments.length;
switch (G__16896) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq16893){
var G__16894 = cljs.core.first.call(null,seq16893);
var seq16893__$1 = cljs.core.next.call(null,seq16893);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__16894,seq16893__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);

om_tools.dom.sup = (function om_tools$dom$sup(){
var G__16900 = arguments.length;
switch (G__16900) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq16897){
var G__16898 = cljs.core.first.call(null,seq16897);
var seq16897__$1 = cljs.core.next.call(null,seq16897);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__16898,seq16897__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);

om_tools.dom.table = (function om_tools$dom$table(){
var G__16904 = arguments.length;
switch (G__16904) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq16901){
var G__16902 = cljs.core.first.call(null,seq16901);
var seq16901__$1 = cljs.core.next.call(null,seq16901);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__16902,seq16901__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);

om_tools.dom.tbody = (function om_tools$dom$tbody(){
var G__16908 = arguments.length;
switch (G__16908) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq16905){
var G__16906 = cljs.core.first.call(null,seq16905);
var seq16905__$1 = cljs.core.next.call(null,seq16905);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__16906,seq16905__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);

om_tools.dom.td = (function om_tools$dom$td(){
var G__16912 = arguments.length;
switch (G__16912) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq16909){
var G__16910 = cljs.core.first.call(null,seq16909);
var seq16909__$1 = cljs.core.next.call(null,seq16909);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__16910,seq16909__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);

om_tools.dom.tfoot = (function om_tools$dom$tfoot(){
var G__16916 = arguments.length;
switch (G__16916) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq16913){
var G__16914 = cljs.core.first.call(null,seq16913);
var seq16913__$1 = cljs.core.next.call(null,seq16913);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__16914,seq16913__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);

om_tools.dom.th = (function om_tools$dom$th(){
var G__16920 = arguments.length;
switch (G__16920) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq16917){
var G__16918 = cljs.core.first.call(null,seq16917);
var seq16917__$1 = cljs.core.next.call(null,seq16917);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__16918,seq16917__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);

om_tools.dom.thead = (function om_tools$dom$thead(){
var G__16924 = arguments.length;
switch (G__16924) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq16921){
var G__16922 = cljs.core.first.call(null,seq16921);
var seq16921__$1 = cljs.core.next.call(null,seq16921);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__16922,seq16921__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);

om_tools.dom.time = (function om_tools$dom$time(){
var G__16928 = arguments.length;
switch (G__16928) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq16925){
var G__16926 = cljs.core.first.call(null,seq16925);
var seq16925__$1 = cljs.core.next.call(null,seq16925);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__16926,seq16925__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);

om_tools.dom.title = (function om_tools$dom$title(){
var G__16932 = arguments.length;
switch (G__16932) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq16929){
var G__16930 = cljs.core.first.call(null,seq16929);
var seq16929__$1 = cljs.core.next.call(null,seq16929);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__16930,seq16929__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);

om_tools.dom.tr = (function om_tools$dom$tr(){
var G__16936 = arguments.length;
switch (G__16936) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq16933){
var G__16934 = cljs.core.first.call(null,seq16933);
var seq16933__$1 = cljs.core.next.call(null,seq16933);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__16934,seq16933__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);

om_tools.dom.track = (function om_tools$dom$track(){
var G__16940 = arguments.length;
switch (G__16940) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq16937){
var G__16938 = cljs.core.first.call(null,seq16937);
var seq16937__$1 = cljs.core.next.call(null,seq16937);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__16938,seq16937__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);

om_tools.dom.u = (function om_tools$dom$u(){
var G__16944 = arguments.length;
switch (G__16944) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq16941){
var G__16942 = cljs.core.first.call(null,seq16941);
var seq16941__$1 = cljs.core.next.call(null,seq16941);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__16942,seq16941__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);

om_tools.dom.ul = (function om_tools$dom$ul(){
var G__16948 = arguments.length;
switch (G__16948) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq16945){
var G__16946 = cljs.core.first.call(null,seq16945);
var seq16945__$1 = cljs.core.next.call(null,seq16945);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__16946,seq16945__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);

om_tools.dom.var$ = (function om_tools$dom$var(){
var G__16952 = arguments.length;
switch (G__16952) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq16949){
var G__16950 = cljs.core.first.call(null,seq16949);
var seq16949__$1 = cljs.core.next.call(null,seq16949);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__16950,seq16949__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);

om_tools.dom.video = (function om_tools$dom$video(){
var G__16956 = arguments.length;
switch (G__16956) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq16953){
var G__16954 = cljs.core.first.call(null,seq16953);
var seq16953__$1 = cljs.core.next.call(null,seq16953);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__16954,seq16953__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);

om_tools.dom.wbr = (function om_tools$dom$wbr(){
var G__16960 = arguments.length;
switch (G__16960) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq16957){
var G__16958 = cljs.core.first.call(null,seq16957);
var seq16957__$1 = cljs.core.next.call(null,seq16957);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__16958,seq16957__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.circle = (function om_tools$dom$circle(){
var G__16964 = arguments.length;
switch (G__16964) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq16961){
var G__16962 = cljs.core.first.call(null,seq16961);
var seq16961__$1 = cljs.core.next.call(null,seq16961);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__16962,seq16961__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);

om_tools.dom.ellipse = (function om_tools$dom$ellipse(){
var G__16968 = arguments.length;
switch (G__16968) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq16965){
var G__16966 = cljs.core.first.call(null,seq16965);
var seq16965__$1 = cljs.core.next.call(null,seq16965);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__16966,seq16965__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);

om_tools.dom.g = (function om_tools$dom$g(){
var G__16972 = arguments.length;
switch (G__16972) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq16969){
var G__16970 = cljs.core.first.call(null,seq16969);
var seq16969__$1 = cljs.core.next.call(null,seq16969);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__16970,seq16969__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);

om_tools.dom.line = (function om_tools$dom$line(){
var G__16976 = arguments.length;
switch (G__16976) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq16973){
var G__16974 = cljs.core.first.call(null,seq16973);
var seq16973__$1 = cljs.core.next.call(null,seq16973);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__16974,seq16973__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);

om_tools.dom.path = (function om_tools$dom$path(){
var G__16980 = arguments.length;
switch (G__16980) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq16977){
var G__16978 = cljs.core.first.call(null,seq16977);
var seq16977__$1 = cljs.core.next.call(null,seq16977);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__16978,seq16977__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);

om_tools.dom.polyline = (function om_tools$dom$polyline(){
var G__16984 = arguments.length;
switch (G__16984) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq16981){
var G__16982 = cljs.core.first.call(null,seq16981);
var seq16981__$1 = cljs.core.next.call(null,seq16981);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__16982,seq16981__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);

om_tools.dom.rect = (function om_tools$dom$rect(){
var G__16988 = arguments.length;
switch (G__16988) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq16985){
var G__16986 = cljs.core.first.call(null,seq16985);
var seq16985__$1 = cljs.core.next.call(null,seq16985);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__16986,seq16985__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);

om_tools.dom.svg = (function om_tools$dom$svg(){
var G__16992 = arguments.length;
switch (G__16992) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq16989){
var G__16990 = cljs.core.first.call(null,seq16989);
var seq16989__$1 = cljs.core.next.call(null,seq16989);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__16990,seq16989__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);

om_tools.dom.text = (function om_tools$dom$text(){
var G__16996 = arguments.length;
switch (G__16996) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq16993){
var G__16994 = cljs.core.first.call(null,seq16993);
var seq16993__$1 = cljs.core.next.call(null,seq16993);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__16994,seq16993__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);

om_tools.dom.defs = (function om_tools$dom$defs(){
var G__17000 = arguments.length;
switch (G__17000) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq16997){
var G__16998 = cljs.core.first.call(null,seq16997);
var seq16997__$1 = cljs.core.next.call(null,seq16997);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__16998,seq16997__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);

om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(){
var G__17004 = arguments.length;
switch (G__17004) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq17001){
var G__17002 = cljs.core.first.call(null,seq17001);
var seq17001__$1 = cljs.core.next.call(null,seq17001);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__17002,seq17001__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.polygon = (function om_tools$dom$polygon(){
var G__17008 = arguments.length;
switch (G__17008) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq17005){
var G__17006 = cljs.core.first.call(null,seq17005);
var seq17005__$1 = cljs.core.next.call(null,seq17005);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__17006,seq17005__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);

om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(){
var G__17012 = arguments.length;
switch (G__17012) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq17009){
var G__17010 = cljs.core.first.call(null,seq17009);
var seq17009__$1 = cljs.core.next.call(null,seq17009);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__17010,seq17009__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.stop = (function om_tools$dom$stop(){
var G__17016 = arguments.length;
switch (G__17016) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq17013){
var G__17014 = cljs.core.first.call(null,seq17013);
var seq17013__$1 = cljs.core.next.call(null,seq17013);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__17014,seq17013__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);

om_tools.dom.tspan = (function om_tools$dom$tspan(){
var G__17020 = arguments.length;
switch (G__17020) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq17017){
var G__17018 = cljs.core.first.call(null,seq17017);
var seq17017__$1 = cljs.core.next.call(null,seq17017);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__17018,seq17017__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);

om_tools.dom.input = (function om_tools$dom$input(){
var G__17024 = arguments.length;
switch (G__17024) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq17021){
var G__17022 = cljs.core.first.call(null,seq17021);
var seq17021__$1 = cljs.core.next.call(null,seq17021);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__17022,seq17021__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);

om_tools.dom.textarea = (function om_tools$dom$textarea(){
var G__17028 = arguments.length;
switch (G__17028) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq17025){
var G__17026 = cljs.core.first.call(null,seq17025);
var seq17025__$1 = cljs.core.next.call(null,seq17025);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__17026,seq17025__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);

om_tools.dom.option = (function om_tools$dom$option(){
var G__16660 = arguments.length;
switch (G__16660) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5010__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__8612__auto__,children__8613__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__8612__auto__,children__8613__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq16657){
var G__16658 = cljs.core.first.call(null,seq16657);
var seq16657__$1 = cljs.core.next.call(null,seq16657);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__16658,seq16657__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);
om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4126__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4126__auto__){
var ks = temp__4126__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map