// Compiled by ClojureScript 0.0-3211 {}
goog.provide('garden.selectors');
goog.require('cljs.core');
goog.require('clojure.string');

garden.selectors.ICSSSelector = (function (){var obj13264 = {};
return obj13264;
})();

garden.selectors.css_selector = (function garden$selectors$css_selector(this$){
if((function (){var and__3947__auto__ = this$;
if(and__3947__auto__){
return this$.garden$selectors$ICSSSelector$css_selector$arity$1;
} else {
return and__3947__auto__;
}
})()){
return this$.garden$selectors$ICSSSelector$css_selector$arity$1(this$);
} else {
var x__4595__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3959__auto__ = (garden.selectors.css_selector[goog.typeOf(x__4595__auto__)]);
if(or__3959__auto__){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = (garden.selectors.css_selector["_"]);
if(or__3959__auto____$1){
return or__3959__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICSSSelector.css-selector",this$);
}
}
})().call(null,this$);
}
});

garden.selectors.selector_QMARK_ = (function garden$selectors$selector_QMARK_(x){
var G__13266 = x;
if(G__13266){
var bit__4633__auto__ = null;
if(cljs.core.truth_((function (){var or__3959__auto__ = bit__4633__auto__;
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return G__13266.garden$selectors$ICSSSelector$;
}
})())){
return true;
} else {
if((!G__13266.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,garden.selectors.ICSSSelector,G__13266);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,garden.selectors.ICSSSelector,G__13266);
}
});
cljs.core.Symbol.prototype.garden$selectors$ICSSSelector$ = true;

cljs.core.Symbol.prototype.garden$selectors$ICSSSelector$css_selector$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

cljs.core.Keyword.prototype.garden$selectors$ICSSSelector$ = true;

cljs.core.Keyword.prototype.garden$selectors$ICSSSelector$css_selector$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

(garden.selectors.ICSSSelector["string"] = true);

(garden.selectors.css_selector["string"] = (function (this$){
return this$;
}));

/**
* @constructor
* @param {*} selector
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
garden.selectors.CSSSelector = (function (selector,__meta,__extmap,__hash){
this.selector = selector;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
garden.selectors.CSSSelector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4554__auto__,k__4555__auto__){
var self__ = this;
var this__4554__auto____$1 = this;
return cljs.core._lookup.call(null,this__4554__auto____$1,k__4555__auto__,null);
});

garden.selectors.CSSSelector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4556__auto__,k13268,else__4557__auto__){
var self__ = this;
var this__4556__auto____$1 = this;
var G__13271 = (((k13268 instanceof cljs.core.Keyword))?k13268.fqn:null);
switch (G__13271) {
case "selector":
return self__.selector;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13268,else__4557__auto__);

}
});

garden.selectors.CSSSelector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4568__auto__,writer__4569__auto__,opts__4570__auto__){
var self__ = this;
var this__4568__auto____$1 = this;
var pr_pair__4571__auto__ = ((function (this__4568__auto____$1){
return (function (keyval__4572__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4569__auto__,cljs.core.pr_writer,""," ","",opts__4570__auto__,keyval__4572__auto__);
});})(this__4568__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4569__auto__,pr_pair__4571__auto__,"#garden.selectors.CSSSelector{",", ","}",opts__4570__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null))], null),self__.__extmap));
});

garden.selectors.CSSSelector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4552__auto__){
var self__ = this;
var this__4552__auto____$1 = this;
return self__.__meta;
});

garden.selectors.CSSSelector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4548__auto__){
var self__ = this;
var this__4548__auto____$1 = this;
return (new garden.selectors.CSSSelector(self__.selector,self__.__meta,self__.__extmap,self__.__hash));
});

garden.selectors.CSSSelector.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4558__auto__){
var self__ = this;
var this__4558__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

garden.selectors.CSSSelector.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4549__auto__){
var self__ = this;
var this__4549__auto____$1 = this;
var h__4375__auto__ = self__.__hash;
if(!((h__4375__auto__ == null))){
return h__4375__auto__;
} else {
var h__4375__auto____$1 = cljs.core.hash_imap.call(null,this__4549__auto____$1);
self__.__hash = h__4375__auto____$1;

return h__4375__auto____$1;
}
});

garden.selectors.CSSSelector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4550__auto__,other__4551__auto__){
var self__ = this;
var this__4550__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3947__auto__ = other__4551__auto__;
if(cljs.core.truth_(and__3947__auto__)){
var and__3947__auto____$1 = (this__4550__auto____$1.constructor === other__4551__auto__.constructor);
if(and__3947__auto____$1){
return cljs.core.equiv_map.call(null,this__4550__auto____$1,other__4551__auto__);
} else {
return and__3947__auto____$1;
}
} else {
return and__3947__auto__;
}
})())){
return true;
} else {
return false;
}
});

garden.selectors.CSSSelector.prototype.garden$selectors$ICSSSelector$ = true;

garden.selectors.CSSSelector.prototype.garden$selectors$ICSSSelector$css_selector$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return garden.selectors.css_selector.call(null,new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

garden.selectors.CSSSelector.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4563__auto__,k__4564__auto__){
var self__ = this;
var this__4563__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selector","selector",762528866),null], null), null),k__4564__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4563__auto____$1),self__.__meta),k__4564__auto__);
} else {
return (new garden.selectors.CSSSelector(self__.selector,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4564__auto__)),null));
}
});

garden.selectors.CSSSelector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4561__auto__,k__4562__auto__,G__13267){
var self__ = this;
var this__4561__auto____$1 = this;
var pred__13272 = cljs.core.keyword_identical_QMARK_;
var expr__13273 = k__4562__auto__;
if(cljs.core.truth_(pred__13272.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),expr__13273))){
return (new garden.selectors.CSSSelector(G__13267,self__.__meta,self__.__extmap,null));
} else {
return (new garden.selectors.CSSSelector(self__.selector,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4562__auto__,G__13267),null));
}
});

garden.selectors.CSSSelector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4566__auto__){
var self__ = this;
var this__4566__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null))], null),self__.__extmap));
});

garden.selectors.CSSSelector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4553__auto__,G__13267){
var self__ = this;
var this__4553__auto____$1 = this;
return (new garden.selectors.CSSSelector(self__.selector,G__13267,self__.__extmap,self__.__hash));
});

garden.selectors.CSSSelector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4559__auto__,entry__4560__auto__){
var self__ = this;
var this__4559__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4560__auto__)){
return cljs.core._assoc.call(null,this__4559__auto____$1,cljs.core._nth.call(null,entry__4560__auto__,(0)),cljs.core._nth.call(null,entry__4560__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4559__auto____$1,entry__4560__auto__);
}
});

garden.selectors.CSSSelector.prototype.call = (function() {
var G__13276 = null;
var G__13276__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$;
});
var G__13276__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a))].join(''),null,null,null));
});
var G__13276__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b))].join(''),null,null,null));
});
var G__13276__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c))].join(''),null,null,null));
});
var G__13276__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d))].join(''),null,null,null));
});
var G__13276__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e))].join(''),null,null,null));
});
var G__13276__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f))].join(''),null,null,null));
});
var G__13276__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g))].join(''),null,null,null));
});
var G__13276__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h))].join(''),null,null,null));
});
var G__13276__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i))].join(''),null,null,null));
});
var G__13276__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j))].join(''),null,null,null));
});
var G__13276__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k))].join(''),null,null,null));
});
var G__13276__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k)),cljs.core.str(garden.selectors.css_selector.call(null,l))].join(''),null,null,null));
});
var G__13276__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k)),cljs.core.str(garden.selectors.css_selector.call(null,l)),cljs.core.str(garden.selectors.css_selector.call(null,m))].join(''),null,null,null));
});
var G__13276__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k)),cljs.core.str(garden.selectors.css_selector.call(null,l)),cljs.core.str(garden.selectors.css_selector.call(null,m)),cljs.core.str(garden.selectors.css_selector.call(null,n))].join(''),null,null,null));
});
var G__13276__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k)),cljs.core.str(garden.selectors.css_selector.call(null,l)),cljs.core.str(garden.selectors.css_selector.call(null,m)),cljs.core.str(garden.selectors.css_selector.call(null,n)),cljs.core.str(garden.selectors.css_selector.call(null,o))].join(''),null,null,null));
});
var G__13276__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k)),cljs.core.str(garden.selectors.css_selector.call(null,l)),cljs.core.str(garden.selectors.css_selector.call(null,m)),cljs.core.str(garden.selectors.css_selector.call(null,n)),cljs.core.str(garden.selectors.css_selector.call(null,o)),cljs.core.str(garden.selectors.css_selector.call(null,p))].join(''),null,null,null));
});
var G__13276__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k)),cljs.core.str(garden.selectors.css_selector.call(null,l)),cljs.core.str(garden.selectors.css_selector.call(null,m)),cljs.core.str(garden.selectors.css_selector.call(null,n)),cljs.core.str(garden.selectors.css_selector.call(null,o)),cljs.core.str(garden.selectors.css_selector.call(null,p)),cljs.core.str(garden.selectors.css_selector.call(null,q))].join(''),null,null,null));
});
var G__13276__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k)),cljs.core.str(garden.selectors.css_selector.call(null,l)),cljs.core.str(garden.selectors.css_selector.call(null,m)),cljs.core.str(garden.selectors.css_selector.call(null,n)),cljs.core.str(garden.selectors.css_selector.call(null,o)),cljs.core.str(garden.selectors.css_selector.call(null,p)),cljs.core.str(garden.selectors.css_selector.call(null,q)),cljs.core.str(garden.selectors.css_selector.call(null,r))].join(''),null,null,null));
});
var G__13276__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k)),cljs.core.str(garden.selectors.css_selector.call(null,l)),cljs.core.str(garden.selectors.css_selector.call(null,m)),cljs.core.str(garden.selectors.css_selector.call(null,n)),cljs.core.str(garden.selectors.css_selector.call(null,o)),cljs.core.str(garden.selectors.css_selector.call(null,p)),cljs.core.str(garden.selectors.css_selector.call(null,q)),cljs.core.str(garden.selectors.css_selector.call(null,r)),cljs.core.str(garden.selectors.css_selector.call(null,s))].join(''),null,null,null));
});
var G__13276__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k)),cljs.core.str(garden.selectors.css_selector.call(null,l)),cljs.core.str(garden.selectors.css_selector.call(null,m)),cljs.core.str(garden.selectors.css_selector.call(null,n)),cljs.core.str(garden.selectors.css_selector.call(null,o)),cljs.core.str(garden.selectors.css_selector.call(null,p)),cljs.core.str(garden.selectors.css_selector.call(null,q)),cljs.core.str(garden.selectors.css_selector.call(null,r)),cljs.core.str(garden.selectors.css_selector.call(null,s)),cljs.core.str(garden.selectors.css_selector.call(null,t))].join(''),null,null,null));
});
G__13276 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
switch(arguments.length){
case 1:
return G__13276__1.call(this,self__);
case 2:
return G__13276__2.call(this,self__,a);
case 3:
return G__13276__3.call(this,self__,a,b);
case 4:
return G__13276__4.call(this,self__,a,b,c);
case 5:
return G__13276__5.call(this,self__,a,b,c,d);
case 6:
return G__13276__6.call(this,self__,a,b,c,d,e);
case 7:
return G__13276__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__13276__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__13276__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__13276__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__13276__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__13276__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__13276__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__13276__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__13276__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__13276__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__13276__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__13276__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__13276__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__13276__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__13276__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13276.cljs$core$IFn$_invoke$arity$1 = G__13276__1;
G__13276.cljs$core$IFn$_invoke$arity$2 = G__13276__2;
G__13276.cljs$core$IFn$_invoke$arity$3 = G__13276__3;
G__13276.cljs$core$IFn$_invoke$arity$4 = G__13276__4;
G__13276.cljs$core$IFn$_invoke$arity$5 = G__13276__5;
G__13276.cljs$core$IFn$_invoke$arity$6 = G__13276__6;
G__13276.cljs$core$IFn$_invoke$arity$7 = G__13276__7;
G__13276.cljs$core$IFn$_invoke$arity$8 = G__13276__8;
G__13276.cljs$core$IFn$_invoke$arity$9 = G__13276__9;
G__13276.cljs$core$IFn$_invoke$arity$10 = G__13276__10;
G__13276.cljs$core$IFn$_invoke$arity$11 = G__13276__11;
G__13276.cljs$core$IFn$_invoke$arity$12 = G__13276__12;
G__13276.cljs$core$IFn$_invoke$arity$13 = G__13276__13;
G__13276.cljs$core$IFn$_invoke$arity$14 = G__13276__14;
G__13276.cljs$core$IFn$_invoke$arity$15 = G__13276__15;
G__13276.cljs$core$IFn$_invoke$arity$16 = G__13276__16;
G__13276.cljs$core$IFn$_invoke$arity$17 = G__13276__17;
G__13276.cljs$core$IFn$_invoke$arity$18 = G__13276__18;
G__13276.cljs$core$IFn$_invoke$arity$19 = G__13276__19;
G__13276.cljs$core$IFn$_invoke$arity$20 = G__13276__20;
G__13276.cljs$core$IFn$_invoke$arity$21 = G__13276__21;
return G__13276;
})()
;

garden.selectors.CSSSelector.prototype.apply = (function (self__,args13270){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13270)));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return this$;
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k)),cljs.core.str(garden.selectors.css_selector.call(null,l))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k)),cljs.core.str(garden.selectors.css_selector.call(null,l)),cljs.core.str(garden.selectors.css_selector.call(null,m))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k)),cljs.core.str(garden.selectors.css_selector.call(null,l)),cljs.core.str(garden.selectors.css_selector.call(null,m)),cljs.core.str(garden.selectors.css_selector.call(null,n))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k)),cljs.core.str(garden.selectors.css_selector.call(null,l)),cljs.core.str(garden.selectors.css_selector.call(null,m)),cljs.core.str(garden.selectors.css_selector.call(null,n)),cljs.core.str(garden.selectors.css_selector.call(null,o))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k)),cljs.core.str(garden.selectors.css_selector.call(null,l)),cljs.core.str(garden.selectors.css_selector.call(null,m)),cljs.core.str(garden.selectors.css_selector.call(null,n)),cljs.core.str(garden.selectors.css_selector.call(null,o)),cljs.core.str(garden.selectors.css_selector.call(null,p))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k)),cljs.core.str(garden.selectors.css_selector.call(null,l)),cljs.core.str(garden.selectors.css_selector.call(null,m)),cljs.core.str(garden.selectors.css_selector.call(null,n)),cljs.core.str(garden.selectors.css_selector.call(null,o)),cljs.core.str(garden.selectors.css_selector.call(null,p)),cljs.core.str(garden.selectors.css_selector.call(null,q))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k)),cljs.core.str(garden.selectors.css_selector.call(null,l)),cljs.core.str(garden.selectors.css_selector.call(null,m)),cljs.core.str(garden.selectors.css_selector.call(null,n)),cljs.core.str(garden.selectors.css_selector.call(null,o)),cljs.core.str(garden.selectors.css_selector.call(null,p)),cljs.core.str(garden.selectors.css_selector.call(null,q)),cljs.core.str(garden.selectors.css_selector.call(null,r))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k)),cljs.core.str(garden.selectors.css_selector.call(null,l)),cljs.core.str(garden.selectors.css_selector.call(null,m)),cljs.core.str(garden.selectors.css_selector.call(null,n)),cljs.core.str(garden.selectors.css_selector.call(null,o)),cljs.core.str(garden.selectors.css_selector.call(null,p)),cljs.core.str(garden.selectors.css_selector.call(null,q)),cljs.core.str(garden.selectors.css_selector.call(null,r)),cljs.core.str(garden.selectors.css_selector.call(null,s))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(garden.selectors.css_selector.call(null,b)),cljs.core.str(garden.selectors.css_selector.call(null,c)),cljs.core.str(garden.selectors.css_selector.call(null,d)),cljs.core.str(garden.selectors.css_selector.call(null,e)),cljs.core.str(garden.selectors.css_selector.call(null,f)),cljs.core.str(garden.selectors.css_selector.call(null,g)),cljs.core.str(garden.selectors.css_selector.call(null,h)),cljs.core.str(garden.selectors.css_selector.call(null,i)),cljs.core.str(garden.selectors.css_selector.call(null,j)),cljs.core.str(garden.selectors.css_selector.call(null,k)),cljs.core.str(garden.selectors.css_selector.call(null,l)),cljs.core.str(garden.selectors.css_selector.call(null,m)),cljs.core.str(garden.selectors.css_selector.call(null,n)),cljs.core.str(garden.selectors.css_selector.call(null,o)),cljs.core.str(garden.selectors.css_selector.call(null,p)),cljs.core.str(garden.selectors.css_selector.call(null,q)),cljs.core.str(garden.selectors.css_selector.call(null,r)),cljs.core.str(garden.selectors.css_selector.call(null,s)),cljs.core.str(garden.selectors.css_selector.call(null,t))].join(''),null,null,null));
});

garden.selectors.CSSSelector.cljs$lang$type = true;

garden.selectors.CSSSelector.cljs$lang$ctorPrSeq = (function (this__4588__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.selectors/CSSSelector");
});

garden.selectors.CSSSelector.cljs$lang$ctorPrWriter = (function (this__4588__auto__,writer__4589__auto__){
return cljs.core._write.call(null,writer__4589__auto__,"garden.selectors/CSSSelector");
});

garden.selectors.__GT_CSSSelector = (function garden$selectors$__GT_CSSSelector(selector){
return (new garden.selectors.CSSSelector(selector,null,null,null));
});

garden.selectors.map__GT_CSSSelector = (function garden$selectors$map__GT_CSSSelector(G__13269){
return (new garden.selectors.CSSSelector(new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(G__13269),null,cljs.core.dissoc.call(null,G__13269,new cljs.core.Keyword(null,"selector","selector",762528866)),null));
});

garden.selectors.selector = (function garden$selectors$selector(x){
return (new garden.selectors.CSSSelector(x,null,null,null));
});
garden.selectors.html_tags = cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"abbr","abbr",-565843885,null),new cljs.core.Symbol(null,"address","address",-2094936343,null),new cljs.core.Symbol(null,"area","area",2112538783,null),new cljs.core.Symbol(null,"article","article",1618846482,null),new cljs.core.Symbol(null,"aside","aside",-1240038232,null),new cljs.core.Symbol(null,"audio","audio",-835308448,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"bdi","bdi",317505641,null),new cljs.core.Symbol(null,"bdo","bdo",-490616675,null),new cljs.core.Symbol(null,"blockquote","blockquote",2012795717,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"br","br",-1720330977,null),new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.Symbol(null,"canvas","canvas",-158285962,null),new cljs.core.Symbol(null,"caption","caption",785147625,null),new cljs.core.Symbol(null,"cite","cite",-744995773,null),new cljs.core.Symbol(null,"code","code",-1068142627,null),new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.Symbol(null,"colgroup","colgroup",-2003317124,null),new cljs.core.Symbol(null,"command","command",745990803,null),new cljs.core.Symbol(null,"datalist","datalist",405488053,null),new cljs.core.Symbol(null,"dd","dd",300093898,null),new cljs.core.Symbol(null,"del","del",-2079460185,null),new cljs.core.Symbol(null,"details","details",-697640358,null),new cljs.core.Symbol(null,"dfn","dfn",1882439694,null),new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.Symbol(null,"dl","dl",-499620186,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null),new cljs.core.Symbol(null,"em","em",-1946622734,null),new cljs.core.Symbol(null,"embed","embed",285618178,null),new cljs.core.Symbol(null,"fieldset","fieldset",-309239289,null),new cljs.core.Symbol(null,"figcaption","figcaption",-149590520,null),new cljs.core.Symbol(null,"figure","figure",1079137448,null),new cljs.core.Symbol(null,"footer","footer",-1047990379,null),new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"h1","h1",-256355935,null),new cljs.core.Symbol(null,"h2","h2",1267868799,null),new cljs.core.Symbol(null,"h3","h3",-586824606,null),new cljs.core.Symbol(null,"h4","h4",-649572776,null),new cljs.core.Symbol(null,"h5","h5",-188625098,null),new cljs.core.Symbol(null,"h6","h6",-2097141989,null),new cljs.core.Symbol(null,"head","head",869147608,null),new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.Symbol(null,"hgroup","hgroup",-1525585280,null),new cljs.core.Symbol(null,"hr","hr",-1276695702,null),new cljs.core.Symbol(null,"html","html",641734630,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"iframe","iframe",-1770013743,null),new cljs.core.Symbol(null,"img","img",-1211748411,null),new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.Symbol(null,"ins","ins",618547957,null),new cljs.core.Symbol(null,"kbd","kbd",1956688402,null),new cljs.core.Symbol(null,"keygen","keygen",1068838274,null),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Symbol(null,"legend","legend",613339282,null),new cljs.core.Symbol(null,"li","li",-1930876848,null),new cljs.core.Symbol(null,"link","link",-128631941,null),new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"mark","mark",1266715182,null),new cljs.core.Symbol(null,"math","math",-386381276,null),new cljs.core.Symbol(null,"menu","menu",1992786725,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"meter","meter",1452889916,null),new cljs.core.Symbol(null,"nav","nav",-1934895292,null),new cljs.core.Symbol(null,"noscript","noscript",935754238,null),new cljs.core.Symbol(null,"object","object",-1179821820,null),new cljs.core.Symbol(null,"ol","ol",-1721911718,null),new cljs.core.Symbol(null,"optgroup","optgroup",-916153551,null),new cljs.core.Symbol(null,"option","option",1705663799,null),new cljs.core.Symbol(null,"output","output",534662484,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"param","param",-640803946,null),new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.Symbol(null,"progress","progress",1884855074,null),new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.Symbol(null,"rp","rp",-647737686,null),new cljs.core.Symbol(null,"rt","rt",-2030955077,null),new cljs.core.Symbol(null,"ruby","ruby",-653698108,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"samp","samp",-1148294633,null),new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"select","select",-1506602266,null),new cljs.core.Symbol(null,"small","small",-520957065,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.Symbol(null,"strong","strong",1910060527,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"sub","sub",-453228498,null),new cljs.core.Symbol(null,"summary","summary",2021379479,null),new cljs.core.Symbol(null,"sup","sup",-398960819,null),new cljs.core.Symbol(null,"svg","svg",-1797646627,null),new cljs.core.Symbol(null,"table","table",1075588491,null),new cljs.core.Symbol(null,"tbody","tbody",1559853227,null),new cljs.core.Symbol(null,"td","td",-1174502416,null),new cljs.core.Symbol(null,"textarea","textarea",990155703,null),new cljs.core.Symbol(null,"tfoot","tfoot",938931637,null),new cljs.core.Symbol(null,"th","th",1094922961,null),new cljs.core.Symbol(null,"thead","thead",1348656231,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"tr","tr",215756881,null),new cljs.core.Symbol(null,"track","track",1836319014,null),new cljs.core.Symbol(null,"u","u",483896742,null),new cljs.core.Symbol(null,"ul","ul",291010124,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"video","video",1797419657,null),new cljs.core.Symbol(null,"wbr","wbr",1869193327,null)], true);
/**
 * CSS a type selector.
 */
garden.selectors.a = garden.selectors.selector.call(null,"a");

/**
 * CSS abbr type selector.
 */
garden.selectors.abbr = garden.selectors.selector.call(null,"abbr");

/**
 * CSS address type selector.
 */
garden.selectors.address = garden.selectors.selector.call(null,"address");

/**
 * CSS area type selector.
 */
garden.selectors.area = garden.selectors.selector.call(null,"area");

/**
 * CSS article type selector.
 */
garden.selectors.article = garden.selectors.selector.call(null,"article");

/**
 * CSS aside type selector.
 */
garden.selectors.aside = garden.selectors.selector.call(null,"aside");

/**
 * CSS audio type selector.
 */
garden.selectors.audio = garden.selectors.selector.call(null,"audio");

/**
 * CSS b type selector.
 */
garden.selectors.b = garden.selectors.selector.call(null,"b");

/**
 * CSS base type selector.
 */
garden.selectors.base = garden.selectors.selector.call(null,"base");

/**
 * CSS bdi type selector.
 */
garden.selectors.bdi = garden.selectors.selector.call(null,"bdi");

/**
 * CSS bdo type selector.
 */
garden.selectors.bdo = garden.selectors.selector.call(null,"bdo");

/**
 * CSS blockquote type selector.
 */
garden.selectors.blockquote = garden.selectors.selector.call(null,"blockquote");

/**
 * CSS body type selector.
 */
garden.selectors.body = garden.selectors.selector.call(null,"body");

/**
 * CSS br type selector.
 */
garden.selectors.br = garden.selectors.selector.call(null,"br");

/**
 * CSS button type selector.
 */
garden.selectors.button = garden.selectors.selector.call(null,"button");

/**
 * CSS canvas type selector.
 */
garden.selectors.canvas = garden.selectors.selector.call(null,"canvas");

/**
 * CSS caption type selector.
 */
garden.selectors.caption = garden.selectors.selector.call(null,"caption");

/**
 * CSS cite type selector.
 */
garden.selectors.cite = garden.selectors.selector.call(null,"cite");

/**
 * CSS code type selector.
 */
garden.selectors.code = garden.selectors.selector.call(null,"code");

/**
 * CSS col type selector.
 */
garden.selectors.col = garden.selectors.selector.call(null,"col");

/**
 * CSS colgroup type selector.
 */
garden.selectors.colgroup = garden.selectors.selector.call(null,"colgroup");

/**
 * CSS command type selector.
 */
garden.selectors.command = garden.selectors.selector.call(null,"command");

/**
 * CSS datalist type selector.
 */
garden.selectors.datalist = garden.selectors.selector.call(null,"datalist");

/**
 * CSS dd type selector.
 */
garden.selectors.dd = garden.selectors.selector.call(null,"dd");

/**
 * CSS del type selector.
 */
garden.selectors.del = garden.selectors.selector.call(null,"del");

/**
 * CSS details type selector.
 */
garden.selectors.details = garden.selectors.selector.call(null,"details");

/**
 * CSS dfn type selector.
 */
garden.selectors.dfn = garden.selectors.selector.call(null,"dfn");

/**
 * CSS div type selector.
 */
garden.selectors.div = garden.selectors.selector.call(null,"div");

/**
 * CSS dl type selector.
 */
garden.selectors.dl = garden.selectors.selector.call(null,"dl");

/**
 * CSS dt type selector.
 */
garden.selectors.dt = garden.selectors.selector.call(null,"dt");

/**
 * CSS em type selector.
 */
garden.selectors.em = garden.selectors.selector.call(null,"em");

/**
 * CSS embed type selector.
 */
garden.selectors.embed = garden.selectors.selector.call(null,"embed");

/**
 * CSS fieldset type selector.
 */
garden.selectors.fieldset = garden.selectors.selector.call(null,"fieldset");

/**
 * CSS figcaption type selector.
 */
garden.selectors.figcaption = garden.selectors.selector.call(null,"figcaption");

/**
 * CSS figure type selector.
 */
garden.selectors.figure = garden.selectors.selector.call(null,"figure");

/**
 * CSS footer type selector.
 */
garden.selectors.footer = garden.selectors.selector.call(null,"footer");

/**
 * CSS form type selector.
 */
garden.selectors.form = garden.selectors.selector.call(null,"form");

/**
 * CSS h1 type selector.
 */
garden.selectors.h1 = garden.selectors.selector.call(null,"h1");

/**
 * CSS h2 type selector.
 */
garden.selectors.h2 = garden.selectors.selector.call(null,"h2");

/**
 * CSS h3 type selector.
 */
garden.selectors.h3 = garden.selectors.selector.call(null,"h3");

/**
 * CSS h4 type selector.
 */
garden.selectors.h4 = garden.selectors.selector.call(null,"h4");

/**
 * CSS h5 type selector.
 */
garden.selectors.h5 = garden.selectors.selector.call(null,"h5");

/**
 * CSS h6 type selector.
 */
garden.selectors.h6 = garden.selectors.selector.call(null,"h6");

/**
 * CSS head type selector.
 */
garden.selectors.head = garden.selectors.selector.call(null,"head");

/**
 * CSS header type selector.
 */
garden.selectors.header = garden.selectors.selector.call(null,"header");

/**
 * CSS hgroup type selector.
 */
garden.selectors.hgroup = garden.selectors.selector.call(null,"hgroup");

/**
 * CSS hr type selector.
 */
garden.selectors.hr = garden.selectors.selector.call(null,"hr");

/**
 * CSS html type selector.
 */
garden.selectors.html = garden.selectors.selector.call(null,"html");

/**
 * CSS i type selector.
 */
garden.selectors.i = garden.selectors.selector.call(null,"i");

/**
 * CSS iframe type selector.
 */
garden.selectors.iframe = garden.selectors.selector.call(null,"iframe");

/**
 * CSS img type selector.
 */
garden.selectors.img = garden.selectors.selector.call(null,"img");

/**
 * CSS input type selector.
 */
garden.selectors.input = garden.selectors.selector.call(null,"input");

/**
 * CSS ins type selector.
 */
garden.selectors.ins = garden.selectors.selector.call(null,"ins");

/**
 * CSS kbd type selector.
 */
garden.selectors.kbd = garden.selectors.selector.call(null,"kbd");

/**
 * CSS keygen type selector.
 */
garden.selectors.keygen = garden.selectors.selector.call(null,"keygen");

/**
 * CSS label type selector.
 */
garden.selectors.label = garden.selectors.selector.call(null,"label");

/**
 * CSS legend type selector.
 */
garden.selectors.legend = garden.selectors.selector.call(null,"legend");

/**
 * CSS li type selector.
 */
garden.selectors.li = garden.selectors.selector.call(null,"li");

/**
 * CSS link type selector.
 */
garden.selectors.link = garden.selectors.selector.call(null,"link");

/**
 * CSS map type selector.
 */
garden.selectors.map = garden.selectors.selector.call(null,"map");

/**
 * CSS mark type selector.
 */
garden.selectors.mark = garden.selectors.selector.call(null,"mark");

/**
 * CSS math type selector.
 */
garden.selectors.math = garden.selectors.selector.call(null,"math");

/**
 * CSS menu type selector.
 */
garden.selectors.menu = garden.selectors.selector.call(null,"menu");

/**
 * CSS meta type selector.
 */
garden.selectors.meta = garden.selectors.selector.call(null,"meta");

/**
 * CSS meter type selector.
 */
garden.selectors.meter = garden.selectors.selector.call(null,"meter");

/**
 * CSS nav type selector.
 */
garden.selectors.nav = garden.selectors.selector.call(null,"nav");

/**
 * CSS noscript type selector.
 */
garden.selectors.noscript = garden.selectors.selector.call(null,"noscript");

/**
 * CSS object type selector.
 */
garden.selectors.object = garden.selectors.selector.call(null,"object");

/**
 * CSS ol type selector.
 */
garden.selectors.ol = garden.selectors.selector.call(null,"ol");

/**
 * CSS optgroup type selector.
 */
garden.selectors.optgroup = garden.selectors.selector.call(null,"optgroup");

/**
 * CSS option type selector.
 */
garden.selectors.option = garden.selectors.selector.call(null,"option");

/**
 * CSS output type selector.
 */
garden.selectors.output = garden.selectors.selector.call(null,"output");

/**
 * CSS p type selector.
 */
garden.selectors.p = garden.selectors.selector.call(null,"p");

/**
 * CSS param type selector.
 */
garden.selectors.param = garden.selectors.selector.call(null,"param");

/**
 * CSS pre type selector.
 */
garden.selectors.pre = garden.selectors.selector.call(null,"pre");

/**
 * CSS progress type selector.
 */
garden.selectors.progress = garden.selectors.selector.call(null,"progress");

/**
 * CSS q type selector.
 */
garden.selectors.q = garden.selectors.selector.call(null,"q");

/**
 * CSS rp type selector.
 */
garden.selectors.rp = garden.selectors.selector.call(null,"rp");

/**
 * CSS rt type selector.
 */
garden.selectors.rt = garden.selectors.selector.call(null,"rt");

/**
 * CSS ruby type selector.
 */
garden.selectors.ruby = garden.selectors.selector.call(null,"ruby");

/**
 * CSS s type selector.
 */
garden.selectors.s = garden.selectors.selector.call(null,"s");

/**
 * CSS samp type selector.
 */
garden.selectors.samp = garden.selectors.selector.call(null,"samp");

/**
 * CSS script type selector.
 */
garden.selectors.script = garden.selectors.selector.call(null,"script");

/**
 * CSS section type selector.
 */
garden.selectors.section = garden.selectors.selector.call(null,"section");

/**
 * CSS select type selector.
 */
garden.selectors.select = garden.selectors.selector.call(null,"select");

/**
 * CSS small type selector.
 */
garden.selectors.small = garden.selectors.selector.call(null,"small");

/**
 * CSS source type selector.
 */
garden.selectors.source = garden.selectors.selector.call(null,"source");

/**
 * CSS span type selector.
 */
garden.selectors.span = garden.selectors.selector.call(null,"span");

/**
 * CSS strong type selector.
 */
garden.selectors.strong = garden.selectors.selector.call(null,"strong");

/**
 * CSS style type selector.
 */
garden.selectors.style = garden.selectors.selector.call(null,"style");

/**
 * CSS sub type selector.
 */
garden.selectors.sub = garden.selectors.selector.call(null,"sub");

/**
 * CSS summary type selector.
 */
garden.selectors.summary = garden.selectors.selector.call(null,"summary");

/**
 * CSS sup type selector.
 */
garden.selectors.sup = garden.selectors.selector.call(null,"sup");

/**
 * CSS svg type selector.
 */
garden.selectors.svg = garden.selectors.selector.call(null,"svg");

/**
 * CSS table type selector.
 */
garden.selectors.table = garden.selectors.selector.call(null,"table");

/**
 * CSS tbody type selector.
 */
garden.selectors.tbody = garden.selectors.selector.call(null,"tbody");

/**
 * CSS td type selector.
 */
garden.selectors.td = garden.selectors.selector.call(null,"td");

/**
 * CSS textarea type selector.
 */
garden.selectors.textarea = garden.selectors.selector.call(null,"textarea");

/**
 * CSS tfoot type selector.
 */
garden.selectors.tfoot = garden.selectors.selector.call(null,"tfoot");

/**
 * CSS th type selector.
 */
garden.selectors.th = garden.selectors.selector.call(null,"th");

/**
 * CSS thead type selector.
 */
garden.selectors.thead = garden.selectors.selector.call(null,"thead");

/**
 * CSS time type selector.
 */
garden.selectors.time = garden.selectors.selector.call(null,"time");

/**
 * CSS title type selector.
 */
garden.selectors.title = garden.selectors.selector.call(null,"title");

/**
 * CSS tr type selector.
 */
garden.selectors.tr = garden.selectors.selector.call(null,"tr");

/**
 * CSS track type selector.
 */
garden.selectors.track = garden.selectors.selector.call(null,"track");

/**
 * CSS u type selector.
 */
garden.selectors.u = garden.selectors.selector.call(null,"u");

/**
 * CSS ul type selector.
 */
garden.selectors.ul = garden.selectors.selector.call(null,"ul");

/**
 * CSS var type selector.
 */
garden.selectors.var$ = garden.selectors.selector.call(null,"var");

/**
 * CSS video type selector.
 */
garden.selectors.video = garden.selectors.selector.call(null,"video");

/**
 * CSS wbr type selector.
 */
garden.selectors.wbr = garden.selectors.selector.call(null,"wbr");
garden.selectors.pseudo_classes = cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"active","active",-758473701,null),new cljs.core.Symbol(null,"checked","checked",1589575708,null),new cljs.core.Symbol(null,"default","default",-347290801,null),new cljs.core.Symbol(null,"disabled","disabled",110747309,null),new cljs.core.Symbol(null,"empty","empty",-1886564811,null),new cljs.core.Symbol(null,"enabled","enabled",-1458526013,null),new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"first-child","first-child",-540335927,null),new cljs.core.Symbol(null,"first-of-type","first-of-type",900311874,null),new cljs.core.Symbol(null,"fullscreen","fullscreen",1636160473,null),new cljs.core.Symbol(null,"focus","focus",1875209438,null),new cljs.core.Symbol(null,"hover","hover",1299389816,null),new cljs.core.Symbol(null,"indeterminate","indeterminate",1127490551,null),new cljs.core.Symbol(null,"in-range","in-range",-1297863944,null),new cljs.core.Symbol(null,"invalid","invalid",2053401043,null),new cljs.core.Symbol(null,"last-child","last-child",-1323765444,null),new cljs.core.Symbol(null,"last-of-type","last-of-type",986453331,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"link","link",-128631941,null),new cljs.core.Symbol(null,"only-child","only-child",220029032,null),new cljs.core.Symbol(null,"only-of-type","only-of-type",-1960460626,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null),new cljs.core.Symbol(null,"out-of-range","out-of-range",-1962117180,null),new cljs.core.Symbol(null,"read-only","read-only",1448824641,null),new cljs.core.Symbol(null,"read-write","read-write",1818554410,null),new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"scope","scope",1201173109,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"valid","valid",1796145767,null),new cljs.core.Symbol(null,"visited","visited",29677652,null)], true);
/**
 * CSS :active pseudo-class selector.
 */
garden.selectors.active = garden.selectors.selector.call(null,":active");

/**
 * CSS :checked pseudo-class selector.
 */
garden.selectors.checked = garden.selectors.selector.call(null,":checked");

/**
 * CSS :default pseudo-class selector.
 */
garden.selectors.default$ = garden.selectors.selector.call(null,":default");

/**
 * CSS :disabled pseudo-class selector.
 */
garden.selectors.disabled = garden.selectors.selector.call(null,":disabled");

/**
 * CSS :empty pseudo-class selector.
 */
garden.selectors.empty = garden.selectors.selector.call(null,":empty");

/**
 * CSS :enabled pseudo-class selector.
 */
garden.selectors.enabled = garden.selectors.selector.call(null,":enabled");

/**
 * CSS :first pseudo-class selector.
 */
garden.selectors.first = garden.selectors.selector.call(null,":first");

/**
 * CSS :first-child pseudo-class selector.
 */
garden.selectors.first_child = garden.selectors.selector.call(null,":first-child");

/**
 * CSS :first-of-type pseudo-class selector.
 */
garden.selectors.first_of_type = garden.selectors.selector.call(null,":first-of-type");

/**
 * CSS :fullscreen pseudo-class selector.
 */
garden.selectors.fullscreen = garden.selectors.selector.call(null,":fullscreen");

/**
 * CSS :focus pseudo-class selector.
 */
garden.selectors.focus = garden.selectors.selector.call(null,":focus");

/**
 * CSS :hover pseudo-class selector.
 */
garden.selectors.hover = garden.selectors.selector.call(null,":hover");

/**
 * CSS :indeterminate pseudo-class selector.
 */
garden.selectors.indeterminate = garden.selectors.selector.call(null,":indeterminate");

/**
 * CSS :in-range pseudo-class selector.
 */
garden.selectors.in_range = garden.selectors.selector.call(null,":in-range");

/**
 * CSS :invalid pseudo-class selector.
 */
garden.selectors.invalid = garden.selectors.selector.call(null,":invalid");

/**
 * CSS :last-child pseudo-class selector.
 */
garden.selectors.last_child = garden.selectors.selector.call(null,":last-child");

/**
 * CSS :last-of-type pseudo-class selector.
 */
garden.selectors.last_of_type = garden.selectors.selector.call(null,":last-of-type");

/**
 * CSS :left pseudo-class selector.
 */
garden.selectors.left = garden.selectors.selector.call(null,":left");

/**
 * CSS :link pseudo-class selector.
 */
garden.selectors.link = garden.selectors.selector.call(null,":link");

/**
 * CSS :only-child pseudo-class selector.
 */
garden.selectors.only_child = garden.selectors.selector.call(null,":only-child");

/**
 * CSS :only-of-type pseudo-class selector.
 */
garden.selectors.only_of_type = garden.selectors.selector.call(null,":only-of-type");

/**
 * CSS :optional pseudo-class selector.
 */
garden.selectors.optional = garden.selectors.selector.call(null,":optional");

/**
 * CSS :out-of-range pseudo-class selector.
 */
garden.selectors.out_of_range = garden.selectors.selector.call(null,":out-of-range");

/**
 * CSS :read-only pseudo-class selector.
 */
garden.selectors.read_only = garden.selectors.selector.call(null,":read-only");

/**
 * CSS :read-write pseudo-class selector.
 */
garden.selectors.read_write = garden.selectors.selector.call(null,":read-write");

/**
 * CSS :required pseudo-class selector.
 */
garden.selectors.required = garden.selectors.selector.call(null,":required");

/**
 * CSS :right pseudo-class selector.
 */
garden.selectors.right = garden.selectors.selector.call(null,":right");

/**
 * CSS :root pseudo-class selector.
 */
garden.selectors.root = garden.selectors.selector.call(null,":root");

/**
 * CSS :scope pseudo-class selector.
 */
garden.selectors.scope = garden.selectors.selector.call(null,":scope");

/**
 * CSS :target pseudo-class selector.
 */
garden.selectors.target = garden.selectors.selector.call(null,":target");

/**
 * CSS :valid pseudo-class selector.
 */
garden.selectors.valid = garden.selectors.selector.call(null,":valid");

/**
 * CSS :visited pseudo-class selector.
 */
garden.selectors.visited = garden.selectors.selector.call(null,":visited");
/**
 * @param {...*} var_args
 */
garden.selectors.lang = (function() { 
var garden$selectors$lang__delegate = function (args__12161__auto__){
var v__12162__auto__ = cljs.core.apply.call(null,(function (language){
return cljs.core.name.call(null,language);
}),args__12161__auto__);
var v__12162__auto____$1 = (cljs.core.truth_(garden.selectors.selector_QMARK_.call(null,v__12162__auto__))?garden.selectors.css_selector.call(null,v__12162__auto__):v__12162__auto__);
return garden.selectors.selector.call(null,[cljs.core.str(":"),cljs.core.str("lang"),cljs.core.str("("),cljs.core.str(v__12162__auto____$1),cljs.core.str(")")].join(''));
};
var garden$selectors$lang = function (var_args){
var args__12161__auto__ = null;
if (arguments.length > 0) {
var G__13277__i = 0, G__13277__a = new Array(arguments.length -  0);
while (G__13277__i < G__13277__a.length) {G__13277__a[G__13277__i] = arguments[G__13277__i + 0]; ++G__13277__i;}
  args__12161__auto__ = new cljs.core.IndexedSeq(G__13277__a,0);
} 
return garden$selectors$lang__delegate.call(this,args__12161__auto__);};
garden$selectors$lang.cljs$lang$maxFixedArity = 0;
garden$selectors$lang.cljs$lang$applyTo = (function (arglist__13278){
var args__12161__auto__ = cljs.core.seq(arglist__13278);
return garden$selectors$lang__delegate(args__12161__auto__);
});
garden$selectors$lang.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$lang__delegate;
return garden$selectors$lang;
})()
;
/**
 * @param {...*} var_args
 */
garden.selectors.not = (function() { 
var garden$selectors$not__delegate = function (args__12161__auto__){
var v__12162__auto__ = cljs.core.apply.call(null,(function (selector){
return garden.selectors.css_selector.call(null,selector);
}),args__12161__auto__);
var v__12162__auto____$1 = (cljs.core.truth_(garden.selectors.selector_QMARK_.call(null,v__12162__auto__))?garden.selectors.css_selector.call(null,v__12162__auto__):v__12162__auto__);
return garden.selectors.selector.call(null,[cljs.core.str(":"),cljs.core.str("not"),cljs.core.str("("),cljs.core.str(v__12162__auto____$1),cljs.core.str(")")].join(''));
};
var garden$selectors$not = function (var_args){
var args__12161__auto__ = null;
if (arguments.length > 0) {
var G__13279__i = 0, G__13279__a = new Array(arguments.length -  0);
while (G__13279__i < G__13279__a.length) {G__13279__a[G__13279__i] = arguments[G__13279__i + 0]; ++G__13279__i;}
  args__12161__auto__ = new cljs.core.IndexedSeq(G__13279__a,0);
} 
return garden$selectors$not__delegate.call(this,args__12161__auto__);};
garden$selectors$not.cljs$lang$maxFixedArity = 0;
garden$selectors$not.cljs$lang$applyTo = (function (arglist__13280){
var args__12161__auto__ = cljs.core.seq(arglist__13280);
return garden$selectors$not__delegate(args__12161__auto__);
});
garden$selectors$not.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$not__delegate;
return garden$selectors$not;
})()
;
garden.selectors.nth_child_re = (new RegExp("\\s*(?:[-+]?\\d+n\\s*(?:[-+]\\s*\\d+)?|[-+]?\\d+|odd|even)\\s*","i"));
/**
 * nth-child helper.
 */
garden.selectors.nth_x = (function garden$selectors$nth_x(x){
if((typeof x === 'string') || ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Agument must be a string, keyword, or symbol"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}

var s = cljs.core.name.call(null,x);
var temp__4124__auto__ = cljs.core.re_matches.call(null,garden.selectors.nth_child_re,s);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
return m;
} else {
throw (new Error([cljs.core.str("Invalid value "),cljs.core.str(cljs.core.pr_str.call(null,s))].join('')));
}
});
/**
 * CSS :nth-child pseudo class selector.
 * @param {...*} var_args
 */
garden.selectors.nth_child = (function() { 
var garden$selectors$nth_child__delegate = function (args__12161__auto__){
var v__12162__auto__ = cljs.core.apply.call(null,(function (x){
if(typeof x === 'number'){
return garden.selectors.nth_x.call(null,[cljs.core.str(x),cljs.core.str("n")].join(''));
} else {
return garden.selectors.nth_x.call(null,x);
}
}),args__12161__auto__);
var v__12162__auto____$1 = (cljs.core.truth_(garden.selectors.selector_QMARK_.call(null,v__12162__auto__))?garden.selectors.css_selector.call(null,v__12162__auto__):v__12162__auto__);
return garden.selectors.selector.call(null,[cljs.core.str(":"),cljs.core.str("nth-child"),cljs.core.str("("),cljs.core.str(v__12162__auto____$1),cljs.core.str(")")].join(''));
};
var garden$selectors$nth_child = function (var_args){
var args__12161__auto__ = null;
if (arguments.length > 0) {
var G__13281__i = 0, G__13281__a = new Array(arguments.length -  0);
while (G__13281__i < G__13281__a.length) {G__13281__a[G__13281__i] = arguments[G__13281__i + 0]; ++G__13281__i;}
  args__12161__auto__ = new cljs.core.IndexedSeq(G__13281__a,0);
} 
return garden$selectors$nth_child__delegate.call(this,args__12161__auto__);};
garden$selectors$nth_child.cljs$lang$maxFixedArity = 0;
garden$selectors$nth_child.cljs$lang$applyTo = (function (arglist__13282){
var args__12161__auto__ = cljs.core.seq(arglist__13282);
return garden$selectors$nth_child__delegate(args__12161__auto__);
});
garden$selectors$nth_child.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$nth_child__delegate;
return garden$selectors$nth_child;
})()
;
/**
 * CSS :nth-last-child pseudo class selector.
 * @param {...*} var_args
 */
garden.selectors.nth_last_child = (function() { 
var garden$selectors$nth_last_child__delegate = function (args__12161__auto__){
var v__12162__auto__ = cljs.core.apply.call(null,(function (x){
return garden.selectors.nth_x.call(null,x);
}),args__12161__auto__);
var v__12162__auto____$1 = (cljs.core.truth_(garden.selectors.selector_QMARK_.call(null,v__12162__auto__))?garden.selectors.css_selector.call(null,v__12162__auto__):v__12162__auto__);
return garden.selectors.selector.call(null,[cljs.core.str(":"),cljs.core.str("nth-last-child"),cljs.core.str("("),cljs.core.str(v__12162__auto____$1),cljs.core.str(")")].join(''));
};
var garden$selectors$nth_last_child = function (var_args){
var args__12161__auto__ = null;
if (arguments.length > 0) {
var G__13283__i = 0, G__13283__a = new Array(arguments.length -  0);
while (G__13283__i < G__13283__a.length) {G__13283__a[G__13283__i] = arguments[G__13283__i + 0]; ++G__13283__i;}
  args__12161__auto__ = new cljs.core.IndexedSeq(G__13283__a,0);
} 
return garden$selectors$nth_last_child__delegate.call(this,args__12161__auto__);};
garden$selectors$nth_last_child.cljs$lang$maxFixedArity = 0;
garden$selectors$nth_last_child.cljs$lang$applyTo = (function (arglist__13284){
var args__12161__auto__ = cljs.core.seq(arglist__13284);
return garden$selectors$nth_last_child__delegate(args__12161__auto__);
});
garden$selectors$nth_last_child.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$nth_last_child__delegate;
return garden$selectors$nth_last_child;
})()
;
/**
 * CSS :nth-of-type pseudo class selector.
 * @param {...*} var_args
 */
garden.selectors.nth_of_type = (function() { 
var garden$selectors$nth_of_type__delegate = function (args__12161__auto__){
var v__12162__auto__ = cljs.core.apply.call(null,(function (x){
return garden.selectors.nth_x.call(null,x);
}),args__12161__auto__);
var v__12162__auto____$1 = (cljs.core.truth_(garden.selectors.selector_QMARK_.call(null,v__12162__auto__))?garden.selectors.css_selector.call(null,v__12162__auto__):v__12162__auto__);
return garden.selectors.selector.call(null,[cljs.core.str(":"),cljs.core.str("nth-of-type"),cljs.core.str("("),cljs.core.str(v__12162__auto____$1),cljs.core.str(")")].join(''));
};
var garden$selectors$nth_of_type = function (var_args){
var args__12161__auto__ = null;
if (arguments.length > 0) {
var G__13285__i = 0, G__13285__a = new Array(arguments.length -  0);
while (G__13285__i < G__13285__a.length) {G__13285__a[G__13285__i] = arguments[G__13285__i + 0]; ++G__13285__i;}
  args__12161__auto__ = new cljs.core.IndexedSeq(G__13285__a,0);
} 
return garden$selectors$nth_of_type__delegate.call(this,args__12161__auto__);};
garden$selectors$nth_of_type.cljs$lang$maxFixedArity = 0;
garden$selectors$nth_of_type.cljs$lang$applyTo = (function (arglist__13286){
var args__12161__auto__ = cljs.core.seq(arglist__13286);
return garden$selectors$nth_of_type__delegate(args__12161__auto__);
});
garden$selectors$nth_of_type.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$nth_of_type__delegate;
return garden$selectors$nth_of_type;
})()
;
/**
 * CSS :nth-last-of-type pseudo class selector.
 * @param {...*} var_args
 */
garden.selectors.nth_last_of_type = (function() { 
var garden$selectors$nth_last_of_type__delegate = function (args__12161__auto__){
var v__12162__auto__ = cljs.core.apply.call(null,(function (x){
return garden.selectors.nth_x.call(null,x);
}),args__12161__auto__);
var v__12162__auto____$1 = (cljs.core.truth_(garden.selectors.selector_QMARK_.call(null,v__12162__auto__))?garden.selectors.css_selector.call(null,v__12162__auto__):v__12162__auto__);
return garden.selectors.selector.call(null,[cljs.core.str(":"),cljs.core.str("nth-last-of-type"),cljs.core.str("("),cljs.core.str(v__12162__auto____$1),cljs.core.str(")")].join(''));
};
var garden$selectors$nth_last_of_type = function (var_args){
var args__12161__auto__ = null;
if (arguments.length > 0) {
var G__13287__i = 0, G__13287__a = new Array(arguments.length -  0);
while (G__13287__i < G__13287__a.length) {G__13287__a[G__13287__i] = arguments[G__13287__i + 0]; ++G__13287__i;}
  args__12161__auto__ = new cljs.core.IndexedSeq(G__13287__a,0);
} 
return garden$selectors$nth_last_of_type__delegate.call(this,args__12161__auto__);};
garden$selectors$nth_last_of_type.cljs$lang$maxFixedArity = 0;
garden$selectors$nth_last_of_type.cljs$lang$applyTo = (function (arglist__13288){
var args__12161__auto__ = cljs.core.seq(arglist__13288);
return garden$selectors$nth_last_of_type__delegate(args__12161__auto__);
});
garden$selectors$nth_last_of_type.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$nth_last_of_type__delegate;
return garden$selectors$nth_last_of_type;
})()
;
/**
 * CSS ::after pseudo element selector.
 */
garden.selectors.after = garden.selectors.selector.call(null,"::after");
/**
 * CSS ::before pseudo element selector.
 */
garden.selectors.before = garden.selectors.selector.call(null,"::before");
/**
 * CSS ::first-letter pseudo element selector.
 */
garden.selectors.first_letter = garden.selectors.selector.call(null,"::first-letter");
/**
 * CSS ::first-line pseudo element selector.
 */
garden.selectors.first_line = garden.selectors.selector.call(null,"::first-line");
garden.selectors.attr = (function garden$selectors$attr(){
var G__13290 = arguments.length;
switch (G__13290) {
case 1:
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

garden.selectors.attr.cljs$core$IFn$_invoke$arity$1 = (function (attr_name){
return garden.selectors.selector.call(null,[cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,attr_name)),cljs.core.str("]")].join(''));
});

garden.selectors.attr.cljs$core$IFn$_invoke$arity$3 = (function (attr_name,op,attr_value){
var v = cljs.core.name.call(null,attr_value);
var v__$1 = (cljs.core.truth_(cljs.core.re_matches.call(null,/\"(\\|[^\"])*\"|'(\\|[^\'])*'/,v))?v:cljs.core.pr_str.call(null,v));
return garden.selectors.selector.call(null,[cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,attr_name)),cljs.core.str(cljs.core.name.call(null,op)),cljs.core.str(v__$1),cljs.core.str("]")].join(''));
});

garden.selectors.attr.cljs$lang$maxFixedArity = 3;
garden.selectors.attr_EQ_ = (function garden$selectors$attr_EQ_(attr_name,attr_value){
return garden.selectors.attr.call(null,attr_name,"=",attr_value);
});
garden.selectors.attr_contains = (function garden$selectors$attr_contains(attr_name,attr_value){
return garden.selectors.attr.call(null,attr_name,"~=",attr_value);
});
garden.selectors.attr_starts_with = (function garden$selectors$attr_starts_with(attr_name,attr_value){
return garden.selectors.attr.call(null,attr_name,"^=",attr_value);
});
garden.selectors.attr_starts_with_STAR_ = (function garden$selectors$attr_starts_with_STAR_(attr_name,attr_value){
return garden.selectors.attr.call(null,attr_name,"|=",attr_value);
});
garden.selectors.attr_ends_with = (function garden$selectors$attr_ends_with(attr_name,attr_value){
return garden.selectors.attr.call(null,attr_name,"$=",attr_value);
});
garden.selectors.attr_matches = (function garden$selectors$attr_matches(attr_name,attr_value){
return garden.selectors.attr.call(null,attr_name,"*=",attr_value);
});
/**
 * Descendant combinator.
 */
garden.selectors.descendant = (function garden$selectors$descendant(){
var G__13296 = arguments.length;
switch (G__13296) {
case 2:
return garden.selectors.descendant.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return garden.selectors.descendant.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5010__auto__);

}
});

garden.selectors.descendant.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return garden.selectors.selector.call(null,[cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(" "),cljs.core.str(garden.selectors.css_selector.call(null,b))].join(''));
});

garden.selectors.descendant.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return garden.selectors.selector.call(null,clojure.string.join.call(null," ",cljs.core.map.call(null,garden.selectors.css_selector,cljs.core.cons.call(null,garden.selectors.descendant.call(null,a,b),more))));
});

garden.selectors.descendant.cljs$lang$applyTo = (function (seq13292){
var G__13293 = cljs.core.first.call(null,seq13292);
var seq13292__$1 = cljs.core.next.call(null,seq13292);
var G__13294 = cljs.core.first.call(null,seq13292__$1);
var seq13292__$2 = cljs.core.next.call(null,seq13292__$1);
return garden.selectors.descendant.cljs$core$IFn$_invoke$arity$variadic(G__13293,G__13294,seq13292__$2);
});

garden.selectors.descendant.cljs$lang$maxFixedArity = (2);
/**
 * Adjacent sibling combinator.
 */
garden.selectors._PLUS_ = (function garden$selectors$_PLUS_(a,b){
return garden.selectors.selector.call(null,[cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(" + "),cljs.core.str(garden.selectors.css_selector.call(null,b))].join(''));
});
/**
 * General sibling combinator.
 */
garden.selectors._ = (function garden$selectors$_(a,b){
return garden.selectors.selector.call(null,[cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(" ~ "),cljs.core.str(garden.selectors.css_selector.call(null,b))].join(''));
});
/**
 * Child combinator.
 */
garden.selectors._GT_ = (function garden$selectors$_GT_(){
var G__13302 = arguments.length;
switch (G__13302) {
case 1:
return garden.selectors._GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return garden.selectors._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5010__auto__);

}
});

garden.selectors._GT_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return garden.selectors.selector.call(null,a);
});

garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return garden.selectors.selector.call(null,[cljs.core.str(garden.selectors.css_selector.call(null,a)),cljs.core.str(" > "),cljs.core.str(garden.selectors.css_selector.call(null,b))].join(''));
});

garden.selectors._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return garden.selectors.selector.call(null,clojure.string.join.call(null," > ",cljs.core.map.call(null,garden.selectors.css_selector,cljs.core.cons.call(null,garden.selectors._GT_.call(null,a,b),more))));
});

garden.selectors._GT_.cljs$lang$applyTo = (function (seq13298){
var G__13299 = cljs.core.first.call(null,seq13298);
var seq13298__$1 = cljs.core.next.call(null,seq13298);
var G__13300 = cljs.core.first.call(null,seq13298__$1);
var seq13298__$2 = cljs.core.next.call(null,seq13298__$1);
return garden.selectors._GT_.cljs$core$IFn$_invoke$arity$variadic(G__13299,G__13300,seq13298__$2);
});

garden.selectors._GT_.cljs$lang$maxFixedArity = (2);
/**
 * Parent selector.
 */
garden.selectors._AMPERSAND_ = garden.selectors.selector.call(null,"&");
garden.selectors.lex_specificity = (function garden$selectors$lex_specificity(s){
var id_selector_re = /^\#[a-zA-Z][\w-]*/;
var class_selector_re = /^\.[a-zA-Z][\w-]*/;
var attribute_selector_re = /^\[[^\]]*\]/;
var type_selector_re = /^[a-zA-Z][\w-]/;
var pseudo_class_re = /^:[a-zA-Z][\w-]*(?:\([^\)]+\))?/;
var pseudo_element_re = /^::[a-zA-Z][\w-]*/;
return cljs.core.some.call(null,((function (id_selector_re,class_selector_re,attribute_selector_re,type_selector_re,pseudo_class_re,pseudo_element_re){
return (function (p__13306){
var vec__13307 = p__13306;
var re = cljs.core.nth.call(null,vec__13307,(0),null);
var k = cljs.core.nth.call(null,vec__13307,(1),null);
var temp__4124__auto__ = cljs.core.re_find.call(null,re,s);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,k], null);
} else {
return null;
}
});})(id_selector_re,class_selector_re,attribute_selector_re,type_selector_re,pseudo_class_re,pseudo_element_re))
,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_selector_re,new cljs.core.Keyword(null,"a","a",-2123407586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_selector_re,new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attribute_selector_re,new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pseudo_class_re,new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_selector_re,new cljs.core.Keyword(null,"c","c",-1763192079)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pseudo_element_re,new cljs.core.Keyword(null,"c","c",-1763192079)], null)], null));
});
garden.selectors.specificity_STAR_ = (function garden$selectors$specificity_STAR_(selector){
var s = garden.selectors.css_selector.call(null,selector);
var score = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),(0),new cljs.core.Keyword(null,"b","b",1482224470),(0),new cljs.core.Keyword(null,"c","c",-1763192079),(0)], null);
var s__$1 = s;
var score__$1 = score;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return score__$1;
} else {
var temp__4124__auto__ = garden.selectors.lex_specificity.call(null,s__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__13310 = temp__4124__auto__;
var m = cljs.core.nth.call(null,vec__13310,(0),null);
var k = cljs.core.nth.call(null,vec__13310,(1),null);
var temp__4124__auto____$1 = cljs.core.re_find.call(null,/^:not\(([^\)]*)\)/,m);
if(cljs.core.truth_(temp__4124__auto____$1)){
var vec__13311 = temp__4124__auto____$1;
var _ = cljs.core.nth.call(null,vec__13311,(0),null);
var inner = cljs.core.nth.call(null,vec__13311,(1),null);
var G__13312 = cljs.core.subs.call(null,s__$1,cljs.core.count.call(null,m));
var G__13313 = cljs.core.merge_with.call(null,cljs.core._PLUS_,score__$1,garden$selectors$specificity_STAR_.call(null,inner));
s__$1 = G__13312;
score__$1 = G__13313;
continue;
} else {
var G__13314 = cljs.core.subs.call(null,s__$1,cljs.core.count.call(null,m));
var G__13315 = cljs.core.update_in.call(null,score__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.inc);
s__$1 = G__13314;
score__$1 = G__13315;
continue;
}
} else {
var G__13316 = cljs.core.subs.call(null,s__$1,(1));
var G__13317 = score__$1;
s__$1 = G__13316;
score__$1 = G__13317;
continue;
}
}
break;
}
});
/**
 * Calculate a CSS3 selector's specificity.
 * 
 * Example:
 * 
 * (specificity "#s12:not(FOO)")
 * ;; => 101
 * (specificity (a hover))
 * ;; => 10
 * 
 */
garden.selectors.specificity = (function garden$selectors$specificity(selector){
if((function (){var G__13320 = selector;
if(G__13320){
var bit__4633__auto__ = null;
if(cljs.core.truth_((function (){var or__3959__auto__ = bit__4633__auto__;
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return G__13320.garden$selectors$ICSSSelector$;
}
})())){
return true;
} else {
if((!G__13320.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,garden.selectors.ICSSSelector,G__13320);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,garden.selectors.ICSSSelector,G__13320);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"ICSSSelector","ICSSSelector",922306162,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null))))].join('')));
}

var map__13321 = garden.selectors.specificity_STAR_.call(null,selector);
var map__13321__$1 = ((cljs.core.seq_QMARK_.call(null,map__13321))?cljs.core.apply.call(null,cljs.core.hash_map,map__13321):map__13321);
var c = cljs.core.get.call(null,map__13321__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var b = cljs.core.get.call(null,map__13321__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var a = cljs.core.get.call(null,map__13321__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var sv = clojure.string.replace.call(null,[cljs.core.str(a),cljs.core.str(b),cljs.core.str(c)].join(''),/^0*/,"");
if(cljs.core.empty_QMARK_.call(null,sv)){
return (0);
} else {
return parseInt(sv);
}
});

//# sourceMappingURL=selectors.js.map