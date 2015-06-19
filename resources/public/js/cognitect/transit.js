// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__16377_16381 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__16378_16382 = null;
var count__16379_16383 = (0);
var i__16380_16384 = (0);
while(true){
if((i__16380_16384 < count__16379_16383)){
var k_16385 = cljs.core._nth.call(null,chunk__16378_16382,i__16380_16384);
var v_16386 = (b[k_16385]);
(a[k_16385] = v_16386);

var G__16387 = seq__16377_16381;
var G__16388 = chunk__16378_16382;
var G__16389 = count__16379_16383;
var G__16390 = (i__16380_16384 + (1));
seq__16377_16381 = G__16387;
chunk__16378_16382 = G__16388;
count__16379_16383 = G__16389;
i__16380_16384 = G__16390;
continue;
} else {
var temp__4126__auto___16391 = cljs.core.seq.call(null,seq__16377_16381);
if(temp__4126__auto___16391){
var seq__16377_16392__$1 = temp__4126__auto___16391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16377_16392__$1)){
var c__4744__auto___16393 = cljs.core.chunk_first.call(null,seq__16377_16392__$1);
var G__16394 = cljs.core.chunk_rest.call(null,seq__16377_16392__$1);
var G__16395 = c__4744__auto___16393;
var G__16396 = cljs.core.count.call(null,c__4744__auto___16393);
var G__16397 = (0);
seq__16377_16381 = G__16394;
chunk__16378_16382 = G__16395;
count__16379_16383 = G__16396;
i__16380_16384 = G__16397;
continue;
} else {
var k_16398 = cljs.core.first.call(null,seq__16377_16392__$1);
var v_16399 = (b[k_16398]);
(a[k_16398] = v_16399);

var G__16400 = cljs.core.next.call(null,seq__16377_16392__$1);
var G__16401 = null;
var G__16402 = (0);
var G__16403 = (0);
seq__16377_16381 = G__16400;
chunk__16378_16382 = G__16401;
count__16379_16383 = G__16402;
i__16380_16384 = G__16403;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(){
var G__16405 = arguments.length;
switch (G__16405) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__16407 = (i + (2));
var G__16408 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__16407;
ret = G__16408;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__16409_16413 = cljs.core.seq.call(null,v);
var chunk__16410_16414 = null;
var count__16411_16415 = (0);
var i__16412_16416 = (0);
while(true){
if((i__16412_16416 < count__16411_16415)){
var x_16417 = cljs.core._nth.call(null,chunk__16410_16414,i__16412_16416);
ret.push(x_16417);

var G__16418 = seq__16409_16413;
var G__16419 = chunk__16410_16414;
var G__16420 = count__16411_16415;
var G__16421 = (i__16412_16416 + (1));
seq__16409_16413 = G__16418;
chunk__16410_16414 = G__16419;
count__16411_16415 = G__16420;
i__16412_16416 = G__16421;
continue;
} else {
var temp__4126__auto___16422 = cljs.core.seq.call(null,seq__16409_16413);
if(temp__4126__auto___16422){
var seq__16409_16423__$1 = temp__4126__auto___16422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16409_16423__$1)){
var c__4744__auto___16424 = cljs.core.chunk_first.call(null,seq__16409_16423__$1);
var G__16425 = cljs.core.chunk_rest.call(null,seq__16409_16423__$1);
var G__16426 = c__4744__auto___16424;
var G__16427 = cljs.core.count.call(null,c__4744__auto___16424);
var G__16428 = (0);
seq__16409_16413 = G__16425;
chunk__16410_16414 = G__16426;
count__16411_16415 = G__16427;
i__16412_16416 = G__16428;
continue;
} else {
var x_16429 = cljs.core.first.call(null,seq__16409_16423__$1);
ret.push(x_16429);

var G__16430 = cljs.core.next.call(null,seq__16409_16423__$1);
var G__16431 = null;
var G__16432 = (0);
var G__16433 = (0);
seq__16409_16413 = G__16430;
chunk__16410_16414 = G__16431;
count__16411_16415 = G__16432;
i__16412_16416 = G__16433;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__16434_16438 = cljs.core.seq.call(null,v);
var chunk__16435_16439 = null;
var count__16436_16440 = (0);
var i__16437_16441 = (0);
while(true){
if((i__16437_16441 < count__16436_16440)){
var x_16442 = cljs.core._nth.call(null,chunk__16435_16439,i__16437_16441);
ret.push(x_16442);

var G__16443 = seq__16434_16438;
var G__16444 = chunk__16435_16439;
var G__16445 = count__16436_16440;
var G__16446 = (i__16437_16441 + (1));
seq__16434_16438 = G__16443;
chunk__16435_16439 = G__16444;
count__16436_16440 = G__16445;
i__16437_16441 = G__16446;
continue;
} else {
var temp__4126__auto___16447 = cljs.core.seq.call(null,seq__16434_16438);
if(temp__4126__auto___16447){
var seq__16434_16448__$1 = temp__4126__auto___16447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16434_16448__$1)){
var c__4744__auto___16449 = cljs.core.chunk_first.call(null,seq__16434_16448__$1);
var G__16450 = cljs.core.chunk_rest.call(null,seq__16434_16448__$1);
var G__16451 = c__4744__auto___16449;
var G__16452 = cljs.core.count.call(null,c__4744__auto___16449);
var G__16453 = (0);
seq__16434_16438 = G__16450;
chunk__16435_16439 = G__16451;
count__16436_16440 = G__16452;
i__16437_16441 = G__16453;
continue;
} else {
var x_16454 = cljs.core.first.call(null,seq__16434_16448__$1);
ret.push(x_16454);

var G__16455 = cljs.core.next.call(null,seq__16434_16448__$1);
var G__16456 = null;
var G__16457 = (0);
var G__16458 = (0);
seq__16434_16438 = G__16455;
chunk__16435_16439 = G__16456;
count__16436_16440 = G__16457;
i__16437_16441 = G__16458;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__16459_16463 = cljs.core.seq.call(null,v);
var chunk__16460_16464 = null;
var count__16461_16465 = (0);
var i__16462_16466 = (0);
while(true){
if((i__16462_16466 < count__16461_16465)){
var x_16467 = cljs.core._nth.call(null,chunk__16460_16464,i__16462_16466);
ret.push(x_16467);

var G__16468 = seq__16459_16463;
var G__16469 = chunk__16460_16464;
var G__16470 = count__16461_16465;
var G__16471 = (i__16462_16466 + (1));
seq__16459_16463 = G__16468;
chunk__16460_16464 = G__16469;
count__16461_16465 = G__16470;
i__16462_16466 = G__16471;
continue;
} else {
var temp__4126__auto___16472 = cljs.core.seq.call(null,seq__16459_16463);
if(temp__4126__auto___16472){
var seq__16459_16473__$1 = temp__4126__auto___16472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16459_16473__$1)){
var c__4744__auto___16474 = cljs.core.chunk_first.call(null,seq__16459_16473__$1);
var G__16475 = cljs.core.chunk_rest.call(null,seq__16459_16473__$1);
var G__16476 = c__4744__auto___16474;
var G__16477 = cljs.core.count.call(null,c__4744__auto___16474);
var G__16478 = (0);
seq__16459_16463 = G__16475;
chunk__16460_16464 = G__16476;
count__16461_16465 = G__16477;
i__16462_16466 = G__16478;
continue;
} else {
var x_16479 = cljs.core.first.call(null,seq__16459_16473__$1);
ret.push(x_16479);

var G__16480 = cljs.core.next.call(null,seq__16459_16473__$1);
var G__16481 = null;
var G__16482 = (0);
var G__16483 = (0);
seq__16459_16463 = G__16480;
chunk__16460_16464 = G__16481;
count__16461_16465 = G__16482;
i__16462_16466 = G__16483;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(){
var G__16485 = arguments.length;
switch (G__16485) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x16487 = cljs.core.clone.call(null,handlers);
x16487.forEach = ((function (x16487,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__16488 = cljs.core.seq.call(null,coll);
var chunk__16489 = null;
var count__16490 = (0);
var i__16491 = (0);
while(true){
if((i__16491 < count__16490)){
var vec__16492 = cljs.core._nth.call(null,chunk__16489,i__16491);
var k = cljs.core.nth.call(null,vec__16492,(0),null);
var v = cljs.core.nth.call(null,vec__16492,(1),null);
f.call(null,v,k);

var G__16495 = seq__16488;
var G__16496 = chunk__16489;
var G__16497 = count__16490;
var G__16498 = (i__16491 + (1));
seq__16488 = G__16495;
chunk__16489 = G__16496;
count__16490 = G__16497;
i__16491 = G__16498;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__16488);
if(temp__4126__auto__){
var seq__16488__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16488__$1)){
var c__4744__auto__ = cljs.core.chunk_first.call(null,seq__16488__$1);
var G__16499 = cljs.core.chunk_rest.call(null,seq__16488__$1);
var G__16500 = c__4744__auto__;
var G__16501 = cljs.core.count.call(null,c__4744__auto__);
var G__16502 = (0);
seq__16488 = G__16499;
chunk__16489 = G__16500;
count__16490 = G__16501;
i__16491 = G__16502;
continue;
} else {
var vec__16493 = cljs.core.first.call(null,seq__16488__$1);
var k = cljs.core.nth.call(null,vec__16493,(0),null);
var v = cljs.core.nth.call(null,vec__16493,(1),null);
f.call(null,v,k);

var G__16503 = cljs.core.next.call(null,seq__16488__$1);
var G__16504 = null;
var G__16505 = (0);
var G__16506 = (0);
seq__16488 = G__16503;
chunk__16489 = G__16504;
count__16490 = G__16505;
i__16491 = G__16506;
continue;
}
} else {
return null;
}
}
break;
}
});})(x16487,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x16487;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__16486 = obj;
G__16486.push(kfn.call(null,k),vfn.call(null,v));

return G__16486;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(){
var G__16508 = arguments.length;
switch (G__16508) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t16509 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t16509 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,meta16510){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.meta16510 = meta16510;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t16509.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t16509.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t16509.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t16509.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t16509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16511){
var self__ = this;
var _16511__$1 = this;
return self__.meta16510;
});

cognitect.transit.t16509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16511,meta16510__$1){
var self__ = this;
var _16511__$1 = this;
return (new cognitect.transit.t16509(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,meta16510__$1));
});

cognitect.transit.t16509.cljs$lang$type = true;

cognitect.transit.t16509.cljs$lang$ctorStr = "cognitect.transit/t16509";

cognitect.transit.t16509.cljs$lang$ctorPrWriter = (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cognitect.transit/t16509");
});

cognitect.transit.__GT_t16509 = (function cognitect$transit$__GT_t16509(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,meta16510){
return (new cognitect.transit.t16509(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,meta16510));
});

}

return (new cognitect.transit.t16509(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map