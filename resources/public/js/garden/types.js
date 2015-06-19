// Compiled by ClojureScript 0.0-3211 {}
goog.provide('garden.types');
goog.require('cljs.core');

/**
* @constructor
* @param {*} unit
* @param {*} magnitude
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4554__auto__,k__4555__auto__){
var self__ = this;
var this__4554__auto____$1 = this;
return cljs.core._lookup.call(null,this__4554__auto____$1,k__4555__auto__,null);
});

garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4556__auto__,k13359,else__4557__auto__){
var self__ = this;
var this__4556__auto____$1 = this;
var G__13361 = (((k13359 instanceof cljs.core.Keyword))?k13359.fqn:null);
switch (G__13361) {
case "magnitude":
return self__.magnitude;

break;
case "unit":
return self__.unit;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13359,else__4557__auto__);

}
});

garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4568__auto__,writer__4569__auto__,opts__4570__auto__){
var self__ = this;
var this__4568__auto____$1 = this;
var pr_pair__4571__auto__ = ((function (this__4568__auto____$1){
return (function (keyval__4572__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4569__auto__,cljs.core.pr_writer,""," ","",opts__4570__auto__,keyval__4572__auto__);
});})(this__4568__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4569__auto__,pr_pair__4571__auto__,"#garden.types.CSSUnit{",", ","}",opts__4570__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4552__auto__){
var self__ = this;
var this__4552__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4548__auto__){
var self__ = this;
var this__4548__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4558__auto__){
var self__ = this;
var this__4558__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4549__auto__){
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

garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4550__auto__,other__4551__auto__){
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

garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4563__auto__,k__4564__auto__){
var self__ = this;
var this__4563__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__4564__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4563__auto____$1),self__.__meta),k__4564__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4564__auto__)),null));
}
});

garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4561__auto__,k__4562__auto__,G__13358){
var self__ = this;
var this__4561__auto____$1 = this;
var pred__13362 = cljs.core.keyword_identical_QMARK_;
var expr__13363 = k__4562__auto__;
if(cljs.core.truth_(pred__13362.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__13363))){
return (new garden.types.CSSUnit(G__13358,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13362.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__13363))){
return (new garden.types.CSSUnit(self__.unit,G__13358,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4562__auto__,G__13358),null));
}
}
});

garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4566__auto__){
var self__ = this;
var this__4566__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4553__auto__,G__13358){
var self__ = this;
var this__4553__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__13358,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4559__auto__,entry__4560__auto__){
var self__ = this;
var this__4559__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4560__auto__)){
return cljs.core._assoc.call(null,this__4559__auto____$1,cljs.core._nth.call(null,entry__4560__auto__,(0)),cljs.core._nth.call(null,entry__4560__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4559__auto____$1,entry__4560__auto__);
}
});

garden.types.CSSUnit.cljs$lang$type = true;

garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__4588__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSUnit");
});

garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__4588__auto__,writer__4589__auto__){
return cljs.core._write.call(null,writer__4589__auto__,"garden.types/CSSUnit");
});

garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__13360){
return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__13360),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__13360),null,cljs.core.dissoc.call(null,G__13360,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)),null));
});


/**
* @constructor
* @param {*} function$
* @param {*} args
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
garden.types.CSSFunction = (function (function$,args,__meta,__extmap,__hash){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4554__auto__,k__4555__auto__){
var self__ = this;
var this__4554__auto____$1 = this;
return cljs.core._lookup.call(null,this__4554__auto____$1,k__4555__auto__,null);
});

garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4556__auto__,k13367,else__4557__auto__){
var self__ = this;
var this__4556__auto____$1 = this;
var G__13369 = (((k13367 instanceof cljs.core.Keyword))?k13367.fqn:null);
switch (G__13369) {
case "args":
return self__.args;

break;
case "function":
return self__.function$;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13367,else__4557__auto__);

}
});

garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4568__auto__,writer__4569__auto__,opts__4570__auto__){
var self__ = this;
var this__4568__auto____$1 = this;
var pr_pair__4571__auto__ = ((function (this__4568__auto____$1){
return (function (keyval__4572__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4569__auto__,cljs.core.pr_writer,""," ","",opts__4570__auto__,keyval__4572__auto__);
});})(this__4568__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4569__auto__,pr_pair__4571__auto__,"#garden.types.CSSFunction{",", ","}",opts__4570__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4552__auto__){
var self__ = this;
var this__4552__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4548__auto__){
var self__ = this;
var this__4548__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4558__auto__){
var self__ = this;
var this__4558__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4549__auto__){
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

garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4550__auto__,other__4551__auto__){
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

garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4563__auto__,k__4564__auto__){
var self__ = this;
var this__4563__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__4564__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4563__auto____$1),self__.__meta),k__4564__auto__);
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4564__auto__)),null));
}
});

garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4561__auto__,k__4562__auto__,G__13366){
var self__ = this;
var this__4561__auto____$1 = this;
var pred__13370 = cljs.core.keyword_identical_QMARK_;
var expr__13371 = k__4562__auto__;
if(cljs.core.truth_(pred__13370.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__13371))){
return (new garden.types.CSSFunction(G__13366,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13370.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__13371))){
return (new garden.types.CSSFunction(self__.function$,G__13366,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4562__auto__,G__13366),null));
}
}
});

garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4566__auto__){
var self__ = this;
var this__4566__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4553__auto__,G__13366){
var self__ = this;
var this__4553__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,G__13366,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4559__auto__,entry__4560__auto__){
var self__ = this;
var this__4559__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4560__auto__)){
return cljs.core._assoc.call(null,this__4559__auto____$1,cljs.core._nth.call(null,entry__4560__auto__,(0)),cljs.core._nth.call(null,entry__4560__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4559__auto____$1,entry__4560__auto__);
}
});

garden.types.CSSFunction.cljs$lang$type = true;

garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__4588__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSFunction");
});

garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__4588__auto__,writer__4589__auto__){
return cljs.core._write.call(null,writer__4589__auto__,"garden.types/CSSFunction");
});

garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(function$,args){
return (new garden.types.CSSFunction(function$,args,null,null,null));
});

garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__13368){
return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__13368),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__13368),null,cljs.core.dissoc.call(null,G__13368,new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
* @param {*} identifier
* @param {*} value
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4554__auto__,k__4555__auto__){
var self__ = this;
var this__4554__auto____$1 = this;
return cljs.core._lookup.call(null,this__4554__auto____$1,k__4555__auto__,null);
});

garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4556__auto__,k13375,else__4557__auto__){
var self__ = this;
var this__4556__auto____$1 = this;
var G__13377 = (((k13375 instanceof cljs.core.Keyword))?k13375.fqn:null);
switch (G__13377) {
case "value":
return self__.value;

break;
case "identifier":
return self__.identifier;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13375,else__4557__auto__);

}
});

garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4568__auto__,writer__4569__auto__,opts__4570__auto__){
var self__ = this;
var this__4568__auto____$1 = this;
var pr_pair__4571__auto__ = ((function (this__4568__auto____$1){
return (function (keyval__4572__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4569__auto__,cljs.core.pr_writer,""," ","",opts__4570__auto__,keyval__4572__auto__);
});})(this__4568__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4569__auto__,pr_pair__4571__auto__,"#garden.types.CSSAtRule{",", ","}",opts__4570__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4552__auto__){
var self__ = this;
var this__4552__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4548__auto__){
var self__ = this;
var this__4548__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4558__auto__){
var self__ = this;
var this__4558__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4549__auto__){
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

garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4550__auto__,other__4551__auto__){
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

garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4563__auto__,k__4564__auto__){
var self__ = this;
var this__4563__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__4564__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4563__auto____$1),self__.__meta),k__4564__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4564__auto__)),null));
}
});

garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4561__auto__,k__4562__auto__,G__13374){
var self__ = this;
var this__4561__auto____$1 = this;
var pred__13378 = cljs.core.keyword_identical_QMARK_;
var expr__13379 = k__4562__auto__;
if(cljs.core.truth_(pred__13378.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__13379))){
return (new garden.types.CSSAtRule(G__13374,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13378.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__13379))){
return (new garden.types.CSSAtRule(self__.identifier,G__13374,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4562__auto__,G__13374),null));
}
}
});

garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4566__auto__){
var self__ = this;
var this__4566__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4553__auto__,G__13374){
var self__ = this;
var this__4553__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__13374,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4559__auto__,entry__4560__auto__){
var self__ = this;
var this__4559__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4560__auto__)){
return cljs.core._assoc.call(null,this__4559__auto____$1,cljs.core._nth.call(null,entry__4560__auto__,(0)),cljs.core._nth.call(null,entry__4560__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4559__auto____$1,entry__4560__auto__);
}
});

garden.types.CSSAtRule.cljs$lang$type = true;

garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__4588__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSAtRule");
});

garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__4588__auto__,writer__4589__auto__){
return cljs.core._write.call(null,writer__4589__auto__,"garden.types/CSSAtRule");
});

garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__13376){
return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__13376),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__13376),null,cljs.core.dissoc.call(null,G__13376,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)),null));
});


//# sourceMappingURL=types.js.map