// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t17660 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17660 = (function (f,fn_handler,meta17661){
this.f = f;
this.fn_handler = fn_handler;
this.meta17661 = meta17661;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17660.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t17660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t17660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17662){
var self__ = this;
var _17662__$1 = this;
return self__.meta17661;
});

cljs.core.async.t17660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17662,meta17661__$1){
var self__ = this;
var _17662__$1 = this;
return (new cljs.core.async.t17660(self__.f,self__.fn_handler,meta17661__$1));
});

cljs.core.async.t17660.cljs$lang$type = true;

cljs.core.async.t17660.cljs$lang$ctorStr = "cljs.core.async/t17660";

cljs.core.async.t17660.cljs$lang$ctorPrWriter = (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cljs.core.async/t17660");
});

cljs.core.async.__GT_t17660 = (function cljs$core$async$fn_handler_$___GT_t17660(f__$1,fn_handler__$1,meta17661){
return (new cljs.core.async.t17660(f__$1,fn_handler__$1,meta17661));
});

}

return (new cljs.core.async.t17660(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__17664 = buff;
if(G__17664){
var bit__4633__auto__ = null;
if(cljs.core.truth_((function (){var or__3959__auto__ = bit__4633__auto__;
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return G__17664.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__17664.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17664);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17664);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__17666 = arguments.length;
switch (G__17666) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__17669 = arguments.length;
switch (G__17669) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17671 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17671);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17671,ret){
return (function (){
return fn1.call(null,val_17671);
});})(val_17671,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__17673 = arguments.length;
switch (G__17673) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4844__auto___17675 = n;
var x_17676 = (0);
while(true){
if((x_17676 < n__4844__auto___17675)){
(a[x_17676] = (0));

var G__17677 = (x_17676 + (1));
x_17676 = G__17677;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__17678 = (i + (1));
i = G__17678;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t17682 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17682 = (function (flag,alt_flag,meta17683){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17683 = meta17683;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17682.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17682.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t17682.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t17682.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17684){
var self__ = this;
var _17684__$1 = this;
return self__.meta17683;
});})(flag))
;

cljs.core.async.t17682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17684,meta17683__$1){
var self__ = this;
var _17684__$1 = this;
return (new cljs.core.async.t17682(self__.flag,self__.alt_flag,meta17683__$1));
});})(flag))
;

cljs.core.async.t17682.cljs$lang$type = true;

cljs.core.async.t17682.cljs$lang$ctorStr = "cljs.core.async/t17682";

cljs.core.async.t17682.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cljs.core.async/t17682");
});})(flag))
;

cljs.core.async.__GT_t17682 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t17682(flag__$1,alt_flag__$1,meta17683){
return (new cljs.core.async.t17682(flag__$1,alt_flag__$1,meta17683));
});})(flag))
;

}

return (new cljs.core.async.t17682(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t17688 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17688 = (function (cb,flag,alt_handler,meta17689){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17689 = meta17689;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17688.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17688.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t17688.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t17688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17690){
var self__ = this;
var _17690__$1 = this;
return self__.meta17689;
});

cljs.core.async.t17688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17690,meta17689__$1){
var self__ = this;
var _17690__$1 = this;
return (new cljs.core.async.t17688(self__.cb,self__.flag,self__.alt_handler,meta17689__$1));
});

cljs.core.async.t17688.cljs$lang$type = true;

cljs.core.async.t17688.cljs$lang$ctorStr = "cljs.core.async/t17688";

cljs.core.async.t17688.cljs$lang$ctorPrWriter = (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cljs.core.async/t17688");
});

cljs.core.async.__GT_t17688 = (function cljs$core$async$alt_handler_$___GT_t17688(cb__$1,flag__$1,alt_handler__$1,meta17689){
return (new cljs.core.async.t17688(cb__$1,flag__$1,alt_handler__$1,meta17689));
});

}

return (new cljs.core.async.t17688(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17691_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17691_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17692_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17692_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3959__auto__ = wport;
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17693 = (i + (1));
i = G__17693;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3959__auto__ = ret;
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3947__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3947__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3947__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17696){
var map__17697 = p__17696;
var map__17697__$1 = ((cljs.core.seq_QMARK_.call(null,map__17697))?cljs.core.apply.call(null,cljs.core.hash_map,map__17697):map__17697);
var opts = map__17697__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17694){
var G__17695 = cljs.core.first.call(null,seq17694);
var seq17694__$1 = cljs.core.next.call(null,seq17694);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17695,seq17694__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__17699 = arguments.length;
switch (G__17699) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13254__auto___17748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13254__auto___17748){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (c__13254__auto___17748){
return (function (state_17723){
var state_val_17724 = (state_17723[(1)]);
if((state_val_17724 === (7))){
var inst_17719 = (state_17723[(2)]);
var state_17723__$1 = state_17723;
var statearr_17725_17749 = state_17723__$1;
(statearr_17725_17749[(2)] = inst_17719);

(statearr_17725_17749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17724 === (1))){
var state_17723__$1 = state_17723;
var statearr_17726_17750 = state_17723__$1;
(statearr_17726_17750[(2)] = null);

(statearr_17726_17750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17724 === (4))){
var inst_17702 = (state_17723[(7)]);
var inst_17702__$1 = (state_17723[(2)]);
var inst_17703 = (inst_17702__$1 == null);
var state_17723__$1 = (function (){var statearr_17727 = state_17723;
(statearr_17727[(7)] = inst_17702__$1);

return statearr_17727;
})();
if(cljs.core.truth_(inst_17703)){
var statearr_17728_17751 = state_17723__$1;
(statearr_17728_17751[(1)] = (5));

} else {
var statearr_17729_17752 = state_17723__$1;
(statearr_17729_17752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17724 === (13))){
var state_17723__$1 = state_17723;
var statearr_17730_17753 = state_17723__$1;
(statearr_17730_17753[(2)] = null);

(statearr_17730_17753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17724 === (6))){
var inst_17702 = (state_17723[(7)]);
var state_17723__$1 = state_17723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17723__$1,(11),to,inst_17702);
} else {
if((state_val_17724 === (3))){
var inst_17721 = (state_17723[(2)]);
var state_17723__$1 = state_17723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17723__$1,inst_17721);
} else {
if((state_val_17724 === (12))){
var state_17723__$1 = state_17723;
var statearr_17731_17754 = state_17723__$1;
(statearr_17731_17754[(2)] = null);

(statearr_17731_17754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17724 === (2))){
var state_17723__$1 = state_17723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17723__$1,(4),from);
} else {
if((state_val_17724 === (11))){
var inst_17712 = (state_17723[(2)]);
var state_17723__$1 = state_17723;
if(cljs.core.truth_(inst_17712)){
var statearr_17732_17755 = state_17723__$1;
(statearr_17732_17755[(1)] = (12));

} else {
var statearr_17733_17756 = state_17723__$1;
(statearr_17733_17756[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17724 === (9))){
var state_17723__$1 = state_17723;
var statearr_17734_17757 = state_17723__$1;
(statearr_17734_17757[(2)] = null);

(statearr_17734_17757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17724 === (5))){
var state_17723__$1 = state_17723;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17735_17758 = state_17723__$1;
(statearr_17735_17758[(1)] = (8));

} else {
var statearr_17736_17759 = state_17723__$1;
(statearr_17736_17759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17724 === (14))){
var inst_17717 = (state_17723[(2)]);
var state_17723__$1 = state_17723;
var statearr_17737_17760 = state_17723__$1;
(statearr_17737_17760[(2)] = inst_17717);

(statearr_17737_17760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17724 === (10))){
var inst_17709 = (state_17723[(2)]);
var state_17723__$1 = state_17723;
var statearr_17738_17761 = state_17723__$1;
(statearr_17738_17761[(2)] = inst_17709);

(statearr_17738_17761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17724 === (8))){
var inst_17706 = cljs.core.async.close_BANG_.call(null,to);
var state_17723__$1 = state_17723;
var statearr_17739_17762 = state_17723__$1;
(statearr_17739_17762[(2)] = inst_17706);

(statearr_17739_17762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13254__auto___17748))
;
return ((function (switch__13192__auto__,c__13254__auto___17748){
return (function() {
var cljs$core$async$state_machine__13193__auto__ = null;
var cljs$core$async$state_machine__13193__auto____0 = (function (){
var statearr_17743 = [null,null,null,null,null,null,null,null];
(statearr_17743[(0)] = cljs$core$async$state_machine__13193__auto__);

(statearr_17743[(1)] = (1));

return statearr_17743;
});
var cljs$core$async$state_machine__13193__auto____1 = (function (state_17723){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_17723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e17744){if((e17744 instanceof Object)){
var ex__13196__auto__ = e17744;
var statearr_17745_17763 = state_17723;
(statearr_17745_17763[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17764 = state_17723;
state_17723 = G__17764;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$state_machine__13193__auto__ = function(state_17723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13193__auto____1.call(this,state_17723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13193__auto____0;
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13193__auto____1;
return cljs$core$async$state_machine__13193__auto__;
})()
;})(switch__13192__auto__,c__13254__auto___17748))
})();
var state__13256__auto__ = (function (){var statearr_17746 = f__13255__auto__.call(null);
(statearr_17746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto___17748);

return statearr_17746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(c__13254__auto___17748))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__17948){
var vec__17949 = p__17948;
var v = cljs.core.nth.call(null,vec__17949,(0),null);
var p = cljs.core.nth.call(null,vec__17949,(1),null);
var job = vec__17949;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13254__auto___18131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13254__auto___18131,res,vec__17949,v,p,job,jobs,results){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (c__13254__auto___18131,res,vec__17949,v,p,job,jobs,results){
return (function (state_17954){
var state_val_17955 = (state_17954[(1)]);
if((state_val_17955 === (2))){
var inst_17951 = (state_17954[(2)]);
var inst_17952 = cljs.core.async.close_BANG_.call(null,res);
var state_17954__$1 = (function (){var statearr_17956 = state_17954;
(statearr_17956[(7)] = inst_17951);

return statearr_17956;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17954__$1,inst_17952);
} else {
if((state_val_17955 === (1))){
var state_17954__$1 = state_17954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17954__$1,(2),res,v);
} else {
return null;
}
}
});})(c__13254__auto___18131,res,vec__17949,v,p,job,jobs,results))
;
return ((function (switch__13192__auto__,c__13254__auto___18131,res,vec__17949,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____0 = (function (){
var statearr_17960 = [null,null,null,null,null,null,null,null];
(statearr_17960[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__);

(statearr_17960[(1)] = (1));

return statearr_17960;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____1 = (function (state_17954){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_17954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e17961){if((e17961 instanceof Object)){
var ex__13196__auto__ = e17961;
var statearr_17962_18132 = state_17954;
(statearr_17962_18132[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18133 = state_17954;
state_17954 = G__18133;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__ = function(state_17954){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____1.call(this,state_17954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__;
})()
;})(switch__13192__auto__,c__13254__auto___18131,res,vec__17949,v,p,job,jobs,results))
})();
var state__13256__auto__ = (function (){var statearr_17963 = f__13255__auto__.call(null);
(statearr_17963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto___18131);

return statearr_17963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(c__13254__auto___18131,res,vec__17949,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17964){
var vec__17965 = p__17964;
var v = cljs.core.nth.call(null,vec__17965,(0),null);
var p = cljs.core.nth.call(null,vec__17965,(1),null);
var job = vec__17965;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4844__auto___18134 = n;
var __18135 = (0);
while(true){
if((__18135 < n__4844__auto___18134)){
var G__17966_18136 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17966_18136) {
case "async":
var c__13254__auto___18138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18135,c__13254__auto___18138,G__17966_18136,n__4844__auto___18134,jobs,results,process,async){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (__18135,c__13254__auto___18138,G__17966_18136,n__4844__auto___18134,jobs,results,process,async){
return (function (state_17979){
var state_val_17980 = (state_17979[(1)]);
if((state_val_17980 === (7))){
var inst_17975 = (state_17979[(2)]);
var state_17979__$1 = state_17979;
var statearr_17981_18139 = state_17979__$1;
(statearr_17981_18139[(2)] = inst_17975);

(statearr_17981_18139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17980 === (6))){
var state_17979__$1 = state_17979;
var statearr_17982_18140 = state_17979__$1;
(statearr_17982_18140[(2)] = null);

(statearr_17982_18140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17980 === (5))){
var state_17979__$1 = state_17979;
var statearr_17983_18141 = state_17979__$1;
(statearr_17983_18141[(2)] = null);

(statearr_17983_18141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17980 === (4))){
var inst_17969 = (state_17979[(2)]);
var inst_17970 = async.call(null,inst_17969);
var state_17979__$1 = state_17979;
if(cljs.core.truth_(inst_17970)){
var statearr_17984_18142 = state_17979__$1;
(statearr_17984_18142[(1)] = (5));

} else {
var statearr_17985_18143 = state_17979__$1;
(statearr_17985_18143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17980 === (3))){
var inst_17977 = (state_17979[(2)]);
var state_17979__$1 = state_17979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17979__$1,inst_17977);
} else {
if((state_val_17980 === (2))){
var state_17979__$1 = state_17979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17979__$1,(4),jobs);
} else {
if((state_val_17980 === (1))){
var state_17979__$1 = state_17979;
var statearr_17986_18144 = state_17979__$1;
(statearr_17986_18144[(2)] = null);

(statearr_17986_18144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18135,c__13254__auto___18138,G__17966_18136,n__4844__auto___18134,jobs,results,process,async))
;
return ((function (__18135,switch__13192__auto__,c__13254__auto___18138,G__17966_18136,n__4844__auto___18134,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____0 = (function (){
var statearr_17990 = [null,null,null,null,null,null,null];
(statearr_17990[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__);

(statearr_17990[(1)] = (1));

return statearr_17990;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____1 = (function (state_17979){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_17979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e17991){if((e17991 instanceof Object)){
var ex__13196__auto__ = e17991;
var statearr_17992_18145 = state_17979;
(statearr_17992_18145[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18146 = state_17979;
state_17979 = G__18146;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__ = function(state_17979){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____1.call(this,state_17979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__;
})()
;})(__18135,switch__13192__auto__,c__13254__auto___18138,G__17966_18136,n__4844__auto___18134,jobs,results,process,async))
})();
var state__13256__auto__ = (function (){var statearr_17993 = f__13255__auto__.call(null);
(statearr_17993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto___18138);

return statearr_17993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(__18135,c__13254__auto___18138,G__17966_18136,n__4844__auto___18134,jobs,results,process,async))
);


break;
case "compute":
var c__13254__auto___18147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18135,c__13254__auto___18147,G__17966_18136,n__4844__auto___18134,jobs,results,process,async){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (__18135,c__13254__auto___18147,G__17966_18136,n__4844__auto___18134,jobs,results,process,async){
return (function (state_18006){
var state_val_18007 = (state_18006[(1)]);
if((state_val_18007 === (7))){
var inst_18002 = (state_18006[(2)]);
var state_18006__$1 = state_18006;
var statearr_18008_18148 = state_18006__$1;
(statearr_18008_18148[(2)] = inst_18002);

(statearr_18008_18148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (6))){
var state_18006__$1 = state_18006;
var statearr_18009_18149 = state_18006__$1;
(statearr_18009_18149[(2)] = null);

(statearr_18009_18149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (5))){
var state_18006__$1 = state_18006;
var statearr_18010_18150 = state_18006__$1;
(statearr_18010_18150[(2)] = null);

(statearr_18010_18150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (4))){
var inst_17996 = (state_18006[(2)]);
var inst_17997 = process.call(null,inst_17996);
var state_18006__$1 = state_18006;
if(cljs.core.truth_(inst_17997)){
var statearr_18011_18151 = state_18006__$1;
(statearr_18011_18151[(1)] = (5));

} else {
var statearr_18012_18152 = state_18006__$1;
(statearr_18012_18152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (3))){
var inst_18004 = (state_18006[(2)]);
var state_18006__$1 = state_18006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18006__$1,inst_18004);
} else {
if((state_val_18007 === (2))){
var state_18006__$1 = state_18006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18006__$1,(4),jobs);
} else {
if((state_val_18007 === (1))){
var state_18006__$1 = state_18006;
var statearr_18013_18153 = state_18006__$1;
(statearr_18013_18153[(2)] = null);

(statearr_18013_18153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18135,c__13254__auto___18147,G__17966_18136,n__4844__auto___18134,jobs,results,process,async))
;
return ((function (__18135,switch__13192__auto__,c__13254__auto___18147,G__17966_18136,n__4844__auto___18134,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____0 = (function (){
var statearr_18017 = [null,null,null,null,null,null,null];
(statearr_18017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__);

(statearr_18017[(1)] = (1));

return statearr_18017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____1 = (function (state_18006){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_18006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e18018){if((e18018 instanceof Object)){
var ex__13196__auto__ = e18018;
var statearr_18019_18154 = state_18006;
(statearr_18019_18154[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18155 = state_18006;
state_18006 = G__18155;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__ = function(state_18006){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____1.call(this,state_18006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__;
})()
;})(__18135,switch__13192__auto__,c__13254__auto___18147,G__17966_18136,n__4844__auto___18134,jobs,results,process,async))
})();
var state__13256__auto__ = (function (){var statearr_18020 = f__13255__auto__.call(null);
(statearr_18020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto___18147);

return statearr_18020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(__18135,c__13254__auto___18147,G__17966_18136,n__4844__auto___18134,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18156 = (__18135 + (1));
__18135 = G__18156;
continue;
} else {
}
break;
}

var c__13254__auto___18157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13254__auto___18157,jobs,results,process,async){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (c__13254__auto___18157,jobs,results,process,async){
return (function (state_18042){
var state_val_18043 = (state_18042[(1)]);
if((state_val_18043 === (9))){
var inst_18035 = (state_18042[(2)]);
var state_18042__$1 = (function (){var statearr_18044 = state_18042;
(statearr_18044[(7)] = inst_18035);

return statearr_18044;
})();
var statearr_18045_18158 = state_18042__$1;
(statearr_18045_18158[(2)] = null);

(statearr_18045_18158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (8))){
var inst_18028 = (state_18042[(8)]);
var inst_18033 = (state_18042[(2)]);
var state_18042__$1 = (function (){var statearr_18046 = state_18042;
(statearr_18046[(9)] = inst_18033);

return statearr_18046;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18042__$1,(9),results,inst_18028);
} else {
if((state_val_18043 === (7))){
var inst_18038 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18047_18159 = state_18042__$1;
(statearr_18047_18159[(2)] = inst_18038);

(statearr_18047_18159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (6))){
var inst_18023 = (state_18042[(10)]);
var inst_18028 = (state_18042[(8)]);
var inst_18028__$1 = cljs.core.async.chan.call(null,(1));
var inst_18029 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18030 = [inst_18023,inst_18028__$1];
var inst_18031 = (new cljs.core.PersistentVector(null,2,(5),inst_18029,inst_18030,null));
var state_18042__$1 = (function (){var statearr_18048 = state_18042;
(statearr_18048[(8)] = inst_18028__$1);

return statearr_18048;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18042__$1,(8),jobs,inst_18031);
} else {
if((state_val_18043 === (5))){
var inst_18026 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18042__$1 = state_18042;
var statearr_18049_18160 = state_18042__$1;
(statearr_18049_18160[(2)] = inst_18026);

(statearr_18049_18160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (4))){
var inst_18023 = (state_18042[(10)]);
var inst_18023__$1 = (state_18042[(2)]);
var inst_18024 = (inst_18023__$1 == null);
var state_18042__$1 = (function (){var statearr_18050 = state_18042;
(statearr_18050[(10)] = inst_18023__$1);

return statearr_18050;
})();
if(cljs.core.truth_(inst_18024)){
var statearr_18051_18161 = state_18042__$1;
(statearr_18051_18161[(1)] = (5));

} else {
var statearr_18052_18162 = state_18042__$1;
(statearr_18052_18162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (3))){
var inst_18040 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18042__$1,inst_18040);
} else {
if((state_val_18043 === (2))){
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18042__$1,(4),from);
} else {
if((state_val_18043 === (1))){
var state_18042__$1 = state_18042;
var statearr_18053_18163 = state_18042__$1;
(statearr_18053_18163[(2)] = null);

(statearr_18053_18163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__13254__auto___18157,jobs,results,process,async))
;
return ((function (switch__13192__auto__,c__13254__auto___18157,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____0 = (function (){
var statearr_18057 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18057[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__);

(statearr_18057[(1)] = (1));

return statearr_18057;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____1 = (function (state_18042){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_18042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e18058){if((e18058 instanceof Object)){
var ex__13196__auto__ = e18058;
var statearr_18059_18164 = state_18042;
(statearr_18059_18164[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18165 = state_18042;
state_18042 = G__18165;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__ = function(state_18042){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____1.call(this,state_18042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__;
})()
;})(switch__13192__auto__,c__13254__auto___18157,jobs,results,process,async))
})();
var state__13256__auto__ = (function (){var statearr_18060 = f__13255__auto__.call(null);
(statearr_18060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto___18157);

return statearr_18060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(c__13254__auto___18157,jobs,results,process,async))
);


var c__13254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13254__auto__,jobs,results,process,async){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (c__13254__auto__,jobs,results,process,async){
return (function (state_18098){
var state_val_18099 = (state_18098[(1)]);
if((state_val_18099 === (7))){
var inst_18094 = (state_18098[(2)]);
var state_18098__$1 = state_18098;
var statearr_18100_18166 = state_18098__$1;
(statearr_18100_18166[(2)] = inst_18094);

(statearr_18100_18166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (20))){
var state_18098__$1 = state_18098;
var statearr_18101_18167 = state_18098__$1;
(statearr_18101_18167[(2)] = null);

(statearr_18101_18167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (1))){
var state_18098__$1 = state_18098;
var statearr_18102_18168 = state_18098__$1;
(statearr_18102_18168[(2)] = null);

(statearr_18102_18168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (4))){
var inst_18063 = (state_18098[(7)]);
var inst_18063__$1 = (state_18098[(2)]);
var inst_18064 = (inst_18063__$1 == null);
var state_18098__$1 = (function (){var statearr_18103 = state_18098;
(statearr_18103[(7)] = inst_18063__$1);

return statearr_18103;
})();
if(cljs.core.truth_(inst_18064)){
var statearr_18104_18169 = state_18098__$1;
(statearr_18104_18169[(1)] = (5));

} else {
var statearr_18105_18170 = state_18098__$1;
(statearr_18105_18170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (15))){
var inst_18076 = (state_18098[(8)]);
var state_18098__$1 = state_18098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18098__$1,(18),to,inst_18076);
} else {
if((state_val_18099 === (21))){
var inst_18089 = (state_18098[(2)]);
var state_18098__$1 = state_18098;
var statearr_18106_18171 = state_18098__$1;
(statearr_18106_18171[(2)] = inst_18089);

(statearr_18106_18171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (13))){
var inst_18091 = (state_18098[(2)]);
var state_18098__$1 = (function (){var statearr_18107 = state_18098;
(statearr_18107[(9)] = inst_18091);

return statearr_18107;
})();
var statearr_18108_18172 = state_18098__$1;
(statearr_18108_18172[(2)] = null);

(statearr_18108_18172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (6))){
var inst_18063 = (state_18098[(7)]);
var state_18098__$1 = state_18098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18098__$1,(11),inst_18063);
} else {
if((state_val_18099 === (17))){
var inst_18084 = (state_18098[(2)]);
var state_18098__$1 = state_18098;
if(cljs.core.truth_(inst_18084)){
var statearr_18109_18173 = state_18098__$1;
(statearr_18109_18173[(1)] = (19));

} else {
var statearr_18110_18174 = state_18098__$1;
(statearr_18110_18174[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (3))){
var inst_18096 = (state_18098[(2)]);
var state_18098__$1 = state_18098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18098__$1,inst_18096);
} else {
if((state_val_18099 === (12))){
var inst_18073 = (state_18098[(10)]);
var state_18098__$1 = state_18098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18098__$1,(14),inst_18073);
} else {
if((state_val_18099 === (2))){
var state_18098__$1 = state_18098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18098__$1,(4),results);
} else {
if((state_val_18099 === (19))){
var state_18098__$1 = state_18098;
var statearr_18111_18175 = state_18098__$1;
(statearr_18111_18175[(2)] = null);

(statearr_18111_18175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (11))){
var inst_18073 = (state_18098[(2)]);
var state_18098__$1 = (function (){var statearr_18112 = state_18098;
(statearr_18112[(10)] = inst_18073);

return statearr_18112;
})();
var statearr_18113_18176 = state_18098__$1;
(statearr_18113_18176[(2)] = null);

(statearr_18113_18176[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (9))){
var state_18098__$1 = state_18098;
var statearr_18114_18177 = state_18098__$1;
(statearr_18114_18177[(2)] = null);

(statearr_18114_18177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (5))){
var state_18098__$1 = state_18098;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18115_18178 = state_18098__$1;
(statearr_18115_18178[(1)] = (8));

} else {
var statearr_18116_18179 = state_18098__$1;
(statearr_18116_18179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (14))){
var inst_18076 = (state_18098[(8)]);
var inst_18078 = (state_18098[(11)]);
var inst_18076__$1 = (state_18098[(2)]);
var inst_18077 = (inst_18076__$1 == null);
var inst_18078__$1 = cljs.core.not.call(null,inst_18077);
var state_18098__$1 = (function (){var statearr_18117 = state_18098;
(statearr_18117[(8)] = inst_18076__$1);

(statearr_18117[(11)] = inst_18078__$1);

return statearr_18117;
})();
if(inst_18078__$1){
var statearr_18118_18180 = state_18098__$1;
(statearr_18118_18180[(1)] = (15));

} else {
var statearr_18119_18181 = state_18098__$1;
(statearr_18119_18181[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (16))){
var inst_18078 = (state_18098[(11)]);
var state_18098__$1 = state_18098;
var statearr_18120_18182 = state_18098__$1;
(statearr_18120_18182[(2)] = inst_18078);

(statearr_18120_18182[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (10))){
var inst_18070 = (state_18098[(2)]);
var state_18098__$1 = state_18098;
var statearr_18121_18183 = state_18098__$1;
(statearr_18121_18183[(2)] = inst_18070);

(statearr_18121_18183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (18))){
var inst_18081 = (state_18098[(2)]);
var state_18098__$1 = state_18098;
var statearr_18122_18184 = state_18098__$1;
(statearr_18122_18184[(2)] = inst_18081);

(statearr_18122_18184[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (8))){
var inst_18067 = cljs.core.async.close_BANG_.call(null,to);
var state_18098__$1 = state_18098;
var statearr_18123_18185 = state_18098__$1;
(statearr_18123_18185[(2)] = inst_18067);

(statearr_18123_18185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13254__auto__,jobs,results,process,async))
;
return ((function (switch__13192__auto__,c__13254__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____0 = (function (){
var statearr_18127 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18127[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__);

(statearr_18127[(1)] = (1));

return statearr_18127;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____1 = (function (state_18098){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_18098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e18128){if((e18128 instanceof Object)){
var ex__13196__auto__ = e18128;
var statearr_18129_18186 = state_18098;
(statearr_18129_18186[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18187 = state_18098;
state_18098 = G__18187;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__ = function(state_18098){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____1.call(this,state_18098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13193__auto__;
})()
;})(switch__13192__auto__,c__13254__auto__,jobs,results,process,async))
})();
var state__13256__auto__ = (function (){var statearr_18130 = f__13255__auto__.call(null);
(statearr_18130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto__);

return statearr_18130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(c__13254__auto__,jobs,results,process,async))
);

return c__13254__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__18189 = arguments.length;
switch (G__18189) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__18192 = arguments.length;
switch (G__18192) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__18195 = arguments.length;
switch (G__18195) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__13254__auto___18247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13254__auto___18247,tc,fc){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (c__13254__auto___18247,tc,fc){
return (function (state_18221){
var state_val_18222 = (state_18221[(1)]);
if((state_val_18222 === (7))){
var inst_18217 = (state_18221[(2)]);
var state_18221__$1 = state_18221;
var statearr_18223_18248 = state_18221__$1;
(statearr_18223_18248[(2)] = inst_18217);

(statearr_18223_18248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (1))){
var state_18221__$1 = state_18221;
var statearr_18224_18249 = state_18221__$1;
(statearr_18224_18249[(2)] = null);

(statearr_18224_18249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (4))){
var inst_18198 = (state_18221[(7)]);
var inst_18198__$1 = (state_18221[(2)]);
var inst_18199 = (inst_18198__$1 == null);
var state_18221__$1 = (function (){var statearr_18225 = state_18221;
(statearr_18225[(7)] = inst_18198__$1);

return statearr_18225;
})();
if(cljs.core.truth_(inst_18199)){
var statearr_18226_18250 = state_18221__$1;
(statearr_18226_18250[(1)] = (5));

} else {
var statearr_18227_18251 = state_18221__$1;
(statearr_18227_18251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (13))){
var state_18221__$1 = state_18221;
var statearr_18228_18252 = state_18221__$1;
(statearr_18228_18252[(2)] = null);

(statearr_18228_18252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (6))){
var inst_18198 = (state_18221[(7)]);
var inst_18204 = p.call(null,inst_18198);
var state_18221__$1 = state_18221;
if(cljs.core.truth_(inst_18204)){
var statearr_18229_18253 = state_18221__$1;
(statearr_18229_18253[(1)] = (9));

} else {
var statearr_18230_18254 = state_18221__$1;
(statearr_18230_18254[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (3))){
var inst_18219 = (state_18221[(2)]);
var state_18221__$1 = state_18221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18221__$1,inst_18219);
} else {
if((state_val_18222 === (12))){
var state_18221__$1 = state_18221;
var statearr_18231_18255 = state_18221__$1;
(statearr_18231_18255[(2)] = null);

(statearr_18231_18255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (2))){
var state_18221__$1 = state_18221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18221__$1,(4),ch);
} else {
if((state_val_18222 === (11))){
var inst_18198 = (state_18221[(7)]);
var inst_18208 = (state_18221[(2)]);
var state_18221__$1 = state_18221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18221__$1,(8),inst_18208,inst_18198);
} else {
if((state_val_18222 === (9))){
var state_18221__$1 = state_18221;
var statearr_18232_18256 = state_18221__$1;
(statearr_18232_18256[(2)] = tc);

(statearr_18232_18256[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (5))){
var inst_18201 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18202 = cljs.core.async.close_BANG_.call(null,fc);
var state_18221__$1 = (function (){var statearr_18233 = state_18221;
(statearr_18233[(8)] = inst_18201);

return statearr_18233;
})();
var statearr_18234_18257 = state_18221__$1;
(statearr_18234_18257[(2)] = inst_18202);

(statearr_18234_18257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (14))){
var inst_18215 = (state_18221[(2)]);
var state_18221__$1 = state_18221;
var statearr_18235_18258 = state_18221__$1;
(statearr_18235_18258[(2)] = inst_18215);

(statearr_18235_18258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (10))){
var state_18221__$1 = state_18221;
var statearr_18236_18259 = state_18221__$1;
(statearr_18236_18259[(2)] = fc);

(statearr_18236_18259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (8))){
var inst_18210 = (state_18221[(2)]);
var state_18221__$1 = state_18221;
if(cljs.core.truth_(inst_18210)){
var statearr_18237_18260 = state_18221__$1;
(statearr_18237_18260[(1)] = (12));

} else {
var statearr_18238_18261 = state_18221__$1;
(statearr_18238_18261[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13254__auto___18247,tc,fc))
;
return ((function (switch__13192__auto__,c__13254__auto___18247,tc,fc){
return (function() {
var cljs$core$async$state_machine__13193__auto__ = null;
var cljs$core$async$state_machine__13193__auto____0 = (function (){
var statearr_18242 = [null,null,null,null,null,null,null,null,null];
(statearr_18242[(0)] = cljs$core$async$state_machine__13193__auto__);

(statearr_18242[(1)] = (1));

return statearr_18242;
});
var cljs$core$async$state_machine__13193__auto____1 = (function (state_18221){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_18221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e18243){if((e18243 instanceof Object)){
var ex__13196__auto__ = e18243;
var statearr_18244_18262 = state_18221;
(statearr_18244_18262[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18263 = state_18221;
state_18221 = G__18263;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$state_machine__13193__auto__ = function(state_18221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13193__auto____1.call(this,state_18221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13193__auto____0;
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13193__auto____1;
return cljs$core$async$state_machine__13193__auto__;
})()
;})(switch__13192__auto__,c__13254__auto___18247,tc,fc))
})();
var state__13256__auto__ = (function (){var statearr_18245 = f__13255__auto__.call(null);
(statearr_18245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto___18247);

return statearr_18245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(c__13254__auto___18247,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13254__auto__){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (c__13254__auto__){
return (function (state_18310){
var state_val_18311 = (state_18310[(1)]);
if((state_val_18311 === (7))){
var inst_18306 = (state_18310[(2)]);
var state_18310__$1 = state_18310;
var statearr_18312_18328 = state_18310__$1;
(statearr_18312_18328[(2)] = inst_18306);

(statearr_18312_18328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18311 === (6))){
var inst_18296 = (state_18310[(7)]);
var inst_18299 = (state_18310[(8)]);
var inst_18303 = f.call(null,inst_18296,inst_18299);
var inst_18296__$1 = inst_18303;
var state_18310__$1 = (function (){var statearr_18313 = state_18310;
(statearr_18313[(7)] = inst_18296__$1);

return statearr_18313;
})();
var statearr_18314_18329 = state_18310__$1;
(statearr_18314_18329[(2)] = null);

(statearr_18314_18329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18311 === (5))){
var inst_18296 = (state_18310[(7)]);
var state_18310__$1 = state_18310;
var statearr_18315_18330 = state_18310__$1;
(statearr_18315_18330[(2)] = inst_18296);

(statearr_18315_18330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18311 === (4))){
var inst_18299 = (state_18310[(8)]);
var inst_18299__$1 = (state_18310[(2)]);
var inst_18300 = (inst_18299__$1 == null);
var state_18310__$1 = (function (){var statearr_18316 = state_18310;
(statearr_18316[(8)] = inst_18299__$1);

return statearr_18316;
})();
if(cljs.core.truth_(inst_18300)){
var statearr_18317_18331 = state_18310__$1;
(statearr_18317_18331[(1)] = (5));

} else {
var statearr_18318_18332 = state_18310__$1;
(statearr_18318_18332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18311 === (3))){
var inst_18308 = (state_18310[(2)]);
var state_18310__$1 = state_18310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18310__$1,inst_18308);
} else {
if((state_val_18311 === (2))){
var state_18310__$1 = state_18310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18310__$1,(4),ch);
} else {
if((state_val_18311 === (1))){
var inst_18296 = init;
var state_18310__$1 = (function (){var statearr_18319 = state_18310;
(statearr_18319[(7)] = inst_18296);

return statearr_18319;
})();
var statearr_18320_18333 = state_18310__$1;
(statearr_18320_18333[(2)] = null);

(statearr_18320_18333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__13254__auto__))
;
return ((function (switch__13192__auto__,c__13254__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13193__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13193__auto____0 = (function (){
var statearr_18324 = [null,null,null,null,null,null,null,null,null];
(statearr_18324[(0)] = cljs$core$async$reduce_$_state_machine__13193__auto__);

(statearr_18324[(1)] = (1));

return statearr_18324;
});
var cljs$core$async$reduce_$_state_machine__13193__auto____1 = (function (state_18310){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_18310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e18325){if((e18325 instanceof Object)){
var ex__13196__auto__ = e18325;
var statearr_18326_18334 = state_18310;
(statearr_18326_18334[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18335 = state_18310;
state_18310 = G__18335;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13193__auto__ = function(state_18310){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13193__auto____1.call(this,state_18310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13193__auto____0;
cljs$core$async$reduce_$_state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13193__auto____1;
return cljs$core$async$reduce_$_state_machine__13193__auto__;
})()
;})(switch__13192__auto__,c__13254__auto__))
})();
var state__13256__auto__ = (function (){var statearr_18327 = f__13255__auto__.call(null);
(statearr_18327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto__);

return statearr_18327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(c__13254__auto__))
);

return c__13254__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__18337 = arguments.length;
switch (G__18337) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13254__auto__){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (c__13254__auto__){
return (function (state_18362){
var state_val_18363 = (state_18362[(1)]);
if((state_val_18363 === (7))){
var inst_18344 = (state_18362[(2)]);
var state_18362__$1 = state_18362;
var statearr_18364_18388 = state_18362__$1;
(statearr_18364_18388[(2)] = inst_18344);

(statearr_18364_18388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18363 === (1))){
var inst_18338 = cljs.core.seq.call(null,coll);
var inst_18339 = inst_18338;
var state_18362__$1 = (function (){var statearr_18365 = state_18362;
(statearr_18365[(7)] = inst_18339);

return statearr_18365;
})();
var statearr_18366_18389 = state_18362__$1;
(statearr_18366_18389[(2)] = null);

(statearr_18366_18389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18363 === (4))){
var inst_18339 = (state_18362[(7)]);
var inst_18342 = cljs.core.first.call(null,inst_18339);
var state_18362__$1 = state_18362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18362__$1,(7),ch,inst_18342);
} else {
if((state_val_18363 === (13))){
var inst_18356 = (state_18362[(2)]);
var state_18362__$1 = state_18362;
var statearr_18367_18390 = state_18362__$1;
(statearr_18367_18390[(2)] = inst_18356);

(statearr_18367_18390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18363 === (6))){
var inst_18347 = (state_18362[(2)]);
var state_18362__$1 = state_18362;
if(cljs.core.truth_(inst_18347)){
var statearr_18368_18391 = state_18362__$1;
(statearr_18368_18391[(1)] = (8));

} else {
var statearr_18369_18392 = state_18362__$1;
(statearr_18369_18392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18363 === (3))){
var inst_18360 = (state_18362[(2)]);
var state_18362__$1 = state_18362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18362__$1,inst_18360);
} else {
if((state_val_18363 === (12))){
var state_18362__$1 = state_18362;
var statearr_18370_18393 = state_18362__$1;
(statearr_18370_18393[(2)] = null);

(statearr_18370_18393[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18363 === (2))){
var inst_18339 = (state_18362[(7)]);
var state_18362__$1 = state_18362;
if(cljs.core.truth_(inst_18339)){
var statearr_18371_18394 = state_18362__$1;
(statearr_18371_18394[(1)] = (4));

} else {
var statearr_18372_18395 = state_18362__$1;
(statearr_18372_18395[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18363 === (11))){
var inst_18353 = cljs.core.async.close_BANG_.call(null,ch);
var state_18362__$1 = state_18362;
var statearr_18373_18396 = state_18362__$1;
(statearr_18373_18396[(2)] = inst_18353);

(statearr_18373_18396[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18363 === (9))){
var state_18362__$1 = state_18362;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18374_18397 = state_18362__$1;
(statearr_18374_18397[(1)] = (11));

} else {
var statearr_18375_18398 = state_18362__$1;
(statearr_18375_18398[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18363 === (5))){
var inst_18339 = (state_18362[(7)]);
var state_18362__$1 = state_18362;
var statearr_18376_18399 = state_18362__$1;
(statearr_18376_18399[(2)] = inst_18339);

(statearr_18376_18399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18363 === (10))){
var inst_18358 = (state_18362[(2)]);
var state_18362__$1 = state_18362;
var statearr_18377_18400 = state_18362__$1;
(statearr_18377_18400[(2)] = inst_18358);

(statearr_18377_18400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18363 === (8))){
var inst_18339 = (state_18362[(7)]);
var inst_18349 = cljs.core.next.call(null,inst_18339);
var inst_18339__$1 = inst_18349;
var state_18362__$1 = (function (){var statearr_18378 = state_18362;
(statearr_18378[(7)] = inst_18339__$1);

return statearr_18378;
})();
var statearr_18379_18401 = state_18362__$1;
(statearr_18379_18401[(2)] = null);

(statearr_18379_18401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13254__auto__))
;
return ((function (switch__13192__auto__,c__13254__auto__){
return (function() {
var cljs$core$async$state_machine__13193__auto__ = null;
var cljs$core$async$state_machine__13193__auto____0 = (function (){
var statearr_18383 = [null,null,null,null,null,null,null,null];
(statearr_18383[(0)] = cljs$core$async$state_machine__13193__auto__);

(statearr_18383[(1)] = (1));

return statearr_18383;
});
var cljs$core$async$state_machine__13193__auto____1 = (function (state_18362){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_18362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e18384){if((e18384 instanceof Object)){
var ex__13196__auto__ = e18384;
var statearr_18385_18402 = state_18362;
(statearr_18385_18402[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18403 = state_18362;
state_18362 = G__18403;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$state_machine__13193__auto__ = function(state_18362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13193__auto____1.call(this,state_18362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13193__auto____0;
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13193__auto____1;
return cljs$core$async$state_machine__13193__auto__;
})()
;})(switch__13192__auto__,c__13254__auto__))
})();
var state__13256__auto__ = (function (){var statearr_18386 = f__13255__auto__.call(null);
(statearr_18386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto__);

return statearr_18386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(c__13254__auto__))
);

return c__13254__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj18405 = {};
return obj18405;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__3947__auto__ = _;
if(and__3947__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3947__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4595__auto__ = (((_ == null))?null:_);
return (function (){var or__3959__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4595__auto__)]);
if(or__3959__auto__){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3959__auto____$1){
return or__3959__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj18407 = {};
return obj18407;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3947__auto__ = m;
if(and__3947__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3947__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4595__auto__ = (((m == null))?null:m);
return (function (){var or__3959__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4595__auto__)]);
if(or__3959__auto__){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3959__auto____$1){
return or__3959__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__3947__auto__ = m;
if(and__3947__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3947__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4595__auto__ = (((m == null))?null:m);
return (function (){var or__3959__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4595__auto__)]);
if(or__3959__auto__){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3959__auto____$1){
return or__3959__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__3947__auto__ = m;
if(and__3947__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3947__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4595__auto__ = (((m == null))?null:m);
return (function (){var or__3959__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4595__auto__)]);
if(or__3959__auto__){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3959__auto____$1){
return or__3959__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t18629 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18629 = (function (cs,ch,mult,meta18630){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18630 = meta18630;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18629.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t18629.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t18629.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t18629.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t18629.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18629.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t18629.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18631){
var self__ = this;
var _18631__$1 = this;
return self__.meta18630;
});})(cs))
;

cljs.core.async.t18629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18631,meta18630__$1){
var self__ = this;
var _18631__$1 = this;
return (new cljs.core.async.t18629(self__.cs,self__.ch,self__.mult,meta18630__$1));
});})(cs))
;

cljs.core.async.t18629.cljs$lang$type = true;

cljs.core.async.t18629.cljs$lang$ctorStr = "cljs.core.async/t18629";

cljs.core.async.t18629.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cljs.core.async/t18629");
});})(cs))
;

cljs.core.async.__GT_t18629 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t18629(cs__$1,ch__$1,mult__$1,meta18630){
return (new cljs.core.async.t18629(cs__$1,ch__$1,mult__$1,meta18630));
});})(cs))
;

}

return (new cljs.core.async.t18629(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__13254__auto___18850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13254__auto___18850,cs,m,dchan,dctr,done){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (c__13254__auto___18850,cs,m,dchan,dctr,done){
return (function (state_18762){
var state_val_18763 = (state_18762[(1)]);
if((state_val_18763 === (7))){
var inst_18758 = (state_18762[(2)]);
var state_18762__$1 = state_18762;
var statearr_18764_18851 = state_18762__$1;
(statearr_18764_18851[(2)] = inst_18758);

(statearr_18764_18851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (20))){
var inst_18663 = (state_18762[(7)]);
var inst_18673 = cljs.core.first.call(null,inst_18663);
var inst_18674 = cljs.core.nth.call(null,inst_18673,(0),null);
var inst_18675 = cljs.core.nth.call(null,inst_18673,(1),null);
var state_18762__$1 = (function (){var statearr_18765 = state_18762;
(statearr_18765[(8)] = inst_18674);

return statearr_18765;
})();
if(cljs.core.truth_(inst_18675)){
var statearr_18766_18852 = state_18762__$1;
(statearr_18766_18852[(1)] = (22));

} else {
var statearr_18767_18853 = state_18762__$1;
(statearr_18767_18853[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (27))){
var inst_18703 = (state_18762[(9)]);
var inst_18710 = (state_18762[(10)]);
var inst_18634 = (state_18762[(11)]);
var inst_18705 = (state_18762[(12)]);
var inst_18710__$1 = cljs.core._nth.call(null,inst_18703,inst_18705);
var inst_18711 = cljs.core.async.put_BANG_.call(null,inst_18710__$1,inst_18634,done);
var state_18762__$1 = (function (){var statearr_18768 = state_18762;
(statearr_18768[(10)] = inst_18710__$1);

return statearr_18768;
})();
if(cljs.core.truth_(inst_18711)){
var statearr_18769_18854 = state_18762__$1;
(statearr_18769_18854[(1)] = (30));

} else {
var statearr_18770_18855 = state_18762__$1;
(statearr_18770_18855[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (1))){
var state_18762__$1 = state_18762;
var statearr_18771_18856 = state_18762__$1;
(statearr_18771_18856[(2)] = null);

(statearr_18771_18856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (24))){
var inst_18663 = (state_18762[(7)]);
var inst_18680 = (state_18762[(2)]);
var inst_18681 = cljs.core.next.call(null,inst_18663);
var inst_18643 = inst_18681;
var inst_18644 = null;
var inst_18645 = (0);
var inst_18646 = (0);
var state_18762__$1 = (function (){var statearr_18772 = state_18762;
(statearr_18772[(13)] = inst_18644);

(statearr_18772[(14)] = inst_18646);

(statearr_18772[(15)] = inst_18643);

(statearr_18772[(16)] = inst_18680);

(statearr_18772[(17)] = inst_18645);

return statearr_18772;
})();
var statearr_18773_18857 = state_18762__$1;
(statearr_18773_18857[(2)] = null);

(statearr_18773_18857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (39))){
var state_18762__$1 = state_18762;
var statearr_18777_18858 = state_18762__$1;
(statearr_18777_18858[(2)] = null);

(statearr_18777_18858[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (4))){
var inst_18634 = (state_18762[(11)]);
var inst_18634__$1 = (state_18762[(2)]);
var inst_18635 = (inst_18634__$1 == null);
var state_18762__$1 = (function (){var statearr_18778 = state_18762;
(statearr_18778[(11)] = inst_18634__$1);

return statearr_18778;
})();
if(cljs.core.truth_(inst_18635)){
var statearr_18779_18859 = state_18762__$1;
(statearr_18779_18859[(1)] = (5));

} else {
var statearr_18780_18860 = state_18762__$1;
(statearr_18780_18860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (15))){
var inst_18644 = (state_18762[(13)]);
var inst_18646 = (state_18762[(14)]);
var inst_18643 = (state_18762[(15)]);
var inst_18645 = (state_18762[(17)]);
var inst_18659 = (state_18762[(2)]);
var inst_18660 = (inst_18646 + (1));
var tmp18774 = inst_18644;
var tmp18775 = inst_18643;
var tmp18776 = inst_18645;
var inst_18643__$1 = tmp18775;
var inst_18644__$1 = tmp18774;
var inst_18645__$1 = tmp18776;
var inst_18646__$1 = inst_18660;
var state_18762__$1 = (function (){var statearr_18781 = state_18762;
(statearr_18781[(13)] = inst_18644__$1);

(statearr_18781[(14)] = inst_18646__$1);

(statearr_18781[(15)] = inst_18643__$1);

(statearr_18781[(18)] = inst_18659);

(statearr_18781[(17)] = inst_18645__$1);

return statearr_18781;
})();
var statearr_18782_18861 = state_18762__$1;
(statearr_18782_18861[(2)] = null);

(statearr_18782_18861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (21))){
var inst_18684 = (state_18762[(2)]);
var state_18762__$1 = state_18762;
var statearr_18786_18862 = state_18762__$1;
(statearr_18786_18862[(2)] = inst_18684);

(statearr_18786_18862[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (31))){
var inst_18710 = (state_18762[(10)]);
var inst_18714 = done.call(null,null);
var inst_18715 = cljs.core.async.untap_STAR_.call(null,m,inst_18710);
var state_18762__$1 = (function (){var statearr_18787 = state_18762;
(statearr_18787[(19)] = inst_18714);

return statearr_18787;
})();
var statearr_18788_18863 = state_18762__$1;
(statearr_18788_18863[(2)] = inst_18715);

(statearr_18788_18863[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (32))){
var inst_18702 = (state_18762[(20)]);
var inst_18704 = (state_18762[(21)]);
var inst_18703 = (state_18762[(9)]);
var inst_18705 = (state_18762[(12)]);
var inst_18717 = (state_18762[(2)]);
var inst_18718 = (inst_18705 + (1));
var tmp18783 = inst_18702;
var tmp18784 = inst_18704;
var tmp18785 = inst_18703;
var inst_18702__$1 = tmp18783;
var inst_18703__$1 = tmp18785;
var inst_18704__$1 = tmp18784;
var inst_18705__$1 = inst_18718;
var state_18762__$1 = (function (){var statearr_18789 = state_18762;
(statearr_18789[(20)] = inst_18702__$1);

(statearr_18789[(21)] = inst_18704__$1);

(statearr_18789[(9)] = inst_18703__$1);

(statearr_18789[(22)] = inst_18717);

(statearr_18789[(12)] = inst_18705__$1);

return statearr_18789;
})();
var statearr_18790_18864 = state_18762__$1;
(statearr_18790_18864[(2)] = null);

(statearr_18790_18864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (40))){
var inst_18730 = (state_18762[(23)]);
var inst_18734 = done.call(null,null);
var inst_18735 = cljs.core.async.untap_STAR_.call(null,m,inst_18730);
var state_18762__$1 = (function (){var statearr_18791 = state_18762;
(statearr_18791[(24)] = inst_18734);

return statearr_18791;
})();
var statearr_18792_18865 = state_18762__$1;
(statearr_18792_18865[(2)] = inst_18735);

(statearr_18792_18865[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (33))){
var inst_18721 = (state_18762[(25)]);
var inst_18723 = cljs.core.chunked_seq_QMARK_.call(null,inst_18721);
var state_18762__$1 = state_18762;
if(inst_18723){
var statearr_18793_18866 = state_18762__$1;
(statearr_18793_18866[(1)] = (36));

} else {
var statearr_18794_18867 = state_18762__$1;
(statearr_18794_18867[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (13))){
var inst_18653 = (state_18762[(26)]);
var inst_18656 = cljs.core.async.close_BANG_.call(null,inst_18653);
var state_18762__$1 = state_18762;
var statearr_18795_18868 = state_18762__$1;
(statearr_18795_18868[(2)] = inst_18656);

(statearr_18795_18868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (22))){
var inst_18674 = (state_18762[(8)]);
var inst_18677 = cljs.core.async.close_BANG_.call(null,inst_18674);
var state_18762__$1 = state_18762;
var statearr_18796_18869 = state_18762__$1;
(statearr_18796_18869[(2)] = inst_18677);

(statearr_18796_18869[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (36))){
var inst_18721 = (state_18762[(25)]);
var inst_18725 = cljs.core.chunk_first.call(null,inst_18721);
var inst_18726 = cljs.core.chunk_rest.call(null,inst_18721);
var inst_18727 = cljs.core.count.call(null,inst_18725);
var inst_18702 = inst_18726;
var inst_18703 = inst_18725;
var inst_18704 = inst_18727;
var inst_18705 = (0);
var state_18762__$1 = (function (){var statearr_18797 = state_18762;
(statearr_18797[(20)] = inst_18702);

(statearr_18797[(21)] = inst_18704);

(statearr_18797[(9)] = inst_18703);

(statearr_18797[(12)] = inst_18705);

return statearr_18797;
})();
var statearr_18798_18870 = state_18762__$1;
(statearr_18798_18870[(2)] = null);

(statearr_18798_18870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (41))){
var inst_18721 = (state_18762[(25)]);
var inst_18737 = (state_18762[(2)]);
var inst_18738 = cljs.core.next.call(null,inst_18721);
var inst_18702 = inst_18738;
var inst_18703 = null;
var inst_18704 = (0);
var inst_18705 = (0);
var state_18762__$1 = (function (){var statearr_18799 = state_18762;
(statearr_18799[(20)] = inst_18702);

(statearr_18799[(21)] = inst_18704);

(statearr_18799[(9)] = inst_18703);

(statearr_18799[(27)] = inst_18737);

(statearr_18799[(12)] = inst_18705);

return statearr_18799;
})();
var statearr_18800_18871 = state_18762__$1;
(statearr_18800_18871[(2)] = null);

(statearr_18800_18871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (43))){
var state_18762__$1 = state_18762;
var statearr_18801_18872 = state_18762__$1;
(statearr_18801_18872[(2)] = null);

(statearr_18801_18872[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (29))){
var inst_18746 = (state_18762[(2)]);
var state_18762__$1 = state_18762;
var statearr_18802_18873 = state_18762__$1;
(statearr_18802_18873[(2)] = inst_18746);

(statearr_18802_18873[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (44))){
var inst_18755 = (state_18762[(2)]);
var state_18762__$1 = (function (){var statearr_18803 = state_18762;
(statearr_18803[(28)] = inst_18755);

return statearr_18803;
})();
var statearr_18804_18874 = state_18762__$1;
(statearr_18804_18874[(2)] = null);

(statearr_18804_18874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (6))){
var inst_18694 = (state_18762[(29)]);
var inst_18693 = cljs.core.deref.call(null,cs);
var inst_18694__$1 = cljs.core.keys.call(null,inst_18693);
var inst_18695 = cljs.core.count.call(null,inst_18694__$1);
var inst_18696 = cljs.core.reset_BANG_.call(null,dctr,inst_18695);
var inst_18701 = cljs.core.seq.call(null,inst_18694__$1);
var inst_18702 = inst_18701;
var inst_18703 = null;
var inst_18704 = (0);
var inst_18705 = (0);
var state_18762__$1 = (function (){var statearr_18805 = state_18762;
(statearr_18805[(20)] = inst_18702);

(statearr_18805[(30)] = inst_18696);

(statearr_18805[(21)] = inst_18704);

(statearr_18805[(29)] = inst_18694__$1);

(statearr_18805[(9)] = inst_18703);

(statearr_18805[(12)] = inst_18705);

return statearr_18805;
})();
var statearr_18806_18875 = state_18762__$1;
(statearr_18806_18875[(2)] = null);

(statearr_18806_18875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (28))){
var inst_18702 = (state_18762[(20)]);
var inst_18721 = (state_18762[(25)]);
var inst_18721__$1 = cljs.core.seq.call(null,inst_18702);
var state_18762__$1 = (function (){var statearr_18807 = state_18762;
(statearr_18807[(25)] = inst_18721__$1);

return statearr_18807;
})();
if(inst_18721__$1){
var statearr_18808_18876 = state_18762__$1;
(statearr_18808_18876[(1)] = (33));

} else {
var statearr_18809_18877 = state_18762__$1;
(statearr_18809_18877[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (25))){
var inst_18704 = (state_18762[(21)]);
var inst_18705 = (state_18762[(12)]);
var inst_18707 = (inst_18705 < inst_18704);
var inst_18708 = inst_18707;
var state_18762__$1 = state_18762;
if(cljs.core.truth_(inst_18708)){
var statearr_18810_18878 = state_18762__$1;
(statearr_18810_18878[(1)] = (27));

} else {
var statearr_18811_18879 = state_18762__$1;
(statearr_18811_18879[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (34))){
var state_18762__$1 = state_18762;
var statearr_18812_18880 = state_18762__$1;
(statearr_18812_18880[(2)] = null);

(statearr_18812_18880[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (17))){
var state_18762__$1 = state_18762;
var statearr_18813_18881 = state_18762__$1;
(statearr_18813_18881[(2)] = null);

(statearr_18813_18881[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (3))){
var inst_18760 = (state_18762[(2)]);
var state_18762__$1 = state_18762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18762__$1,inst_18760);
} else {
if((state_val_18763 === (12))){
var inst_18689 = (state_18762[(2)]);
var state_18762__$1 = state_18762;
var statearr_18814_18882 = state_18762__$1;
(statearr_18814_18882[(2)] = inst_18689);

(statearr_18814_18882[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (2))){
var state_18762__$1 = state_18762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18762__$1,(4),ch);
} else {
if((state_val_18763 === (23))){
var state_18762__$1 = state_18762;
var statearr_18815_18883 = state_18762__$1;
(statearr_18815_18883[(2)] = null);

(statearr_18815_18883[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (35))){
var inst_18744 = (state_18762[(2)]);
var state_18762__$1 = state_18762;
var statearr_18816_18884 = state_18762__$1;
(statearr_18816_18884[(2)] = inst_18744);

(statearr_18816_18884[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (19))){
var inst_18663 = (state_18762[(7)]);
var inst_18667 = cljs.core.chunk_first.call(null,inst_18663);
var inst_18668 = cljs.core.chunk_rest.call(null,inst_18663);
var inst_18669 = cljs.core.count.call(null,inst_18667);
var inst_18643 = inst_18668;
var inst_18644 = inst_18667;
var inst_18645 = inst_18669;
var inst_18646 = (0);
var state_18762__$1 = (function (){var statearr_18817 = state_18762;
(statearr_18817[(13)] = inst_18644);

(statearr_18817[(14)] = inst_18646);

(statearr_18817[(15)] = inst_18643);

(statearr_18817[(17)] = inst_18645);

return statearr_18817;
})();
var statearr_18818_18885 = state_18762__$1;
(statearr_18818_18885[(2)] = null);

(statearr_18818_18885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (11))){
var inst_18643 = (state_18762[(15)]);
var inst_18663 = (state_18762[(7)]);
var inst_18663__$1 = cljs.core.seq.call(null,inst_18643);
var state_18762__$1 = (function (){var statearr_18819 = state_18762;
(statearr_18819[(7)] = inst_18663__$1);

return statearr_18819;
})();
if(inst_18663__$1){
var statearr_18820_18886 = state_18762__$1;
(statearr_18820_18886[(1)] = (16));

} else {
var statearr_18821_18887 = state_18762__$1;
(statearr_18821_18887[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (9))){
var inst_18691 = (state_18762[(2)]);
var state_18762__$1 = state_18762;
var statearr_18822_18888 = state_18762__$1;
(statearr_18822_18888[(2)] = inst_18691);

(statearr_18822_18888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (5))){
var inst_18641 = cljs.core.deref.call(null,cs);
var inst_18642 = cljs.core.seq.call(null,inst_18641);
var inst_18643 = inst_18642;
var inst_18644 = null;
var inst_18645 = (0);
var inst_18646 = (0);
var state_18762__$1 = (function (){var statearr_18823 = state_18762;
(statearr_18823[(13)] = inst_18644);

(statearr_18823[(14)] = inst_18646);

(statearr_18823[(15)] = inst_18643);

(statearr_18823[(17)] = inst_18645);

return statearr_18823;
})();
var statearr_18824_18889 = state_18762__$1;
(statearr_18824_18889[(2)] = null);

(statearr_18824_18889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (14))){
var state_18762__$1 = state_18762;
var statearr_18825_18890 = state_18762__$1;
(statearr_18825_18890[(2)] = null);

(statearr_18825_18890[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (45))){
var inst_18752 = (state_18762[(2)]);
var state_18762__$1 = state_18762;
var statearr_18826_18891 = state_18762__$1;
(statearr_18826_18891[(2)] = inst_18752);

(statearr_18826_18891[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (26))){
var inst_18694 = (state_18762[(29)]);
var inst_18748 = (state_18762[(2)]);
var inst_18749 = cljs.core.seq.call(null,inst_18694);
var state_18762__$1 = (function (){var statearr_18827 = state_18762;
(statearr_18827[(31)] = inst_18748);

return statearr_18827;
})();
if(inst_18749){
var statearr_18828_18892 = state_18762__$1;
(statearr_18828_18892[(1)] = (42));

} else {
var statearr_18829_18893 = state_18762__$1;
(statearr_18829_18893[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (16))){
var inst_18663 = (state_18762[(7)]);
var inst_18665 = cljs.core.chunked_seq_QMARK_.call(null,inst_18663);
var state_18762__$1 = state_18762;
if(inst_18665){
var statearr_18830_18894 = state_18762__$1;
(statearr_18830_18894[(1)] = (19));

} else {
var statearr_18831_18895 = state_18762__$1;
(statearr_18831_18895[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (38))){
var inst_18741 = (state_18762[(2)]);
var state_18762__$1 = state_18762;
var statearr_18832_18896 = state_18762__$1;
(statearr_18832_18896[(2)] = inst_18741);

(statearr_18832_18896[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (30))){
var state_18762__$1 = state_18762;
var statearr_18833_18897 = state_18762__$1;
(statearr_18833_18897[(2)] = null);

(statearr_18833_18897[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (10))){
var inst_18644 = (state_18762[(13)]);
var inst_18646 = (state_18762[(14)]);
var inst_18652 = cljs.core._nth.call(null,inst_18644,inst_18646);
var inst_18653 = cljs.core.nth.call(null,inst_18652,(0),null);
var inst_18654 = cljs.core.nth.call(null,inst_18652,(1),null);
var state_18762__$1 = (function (){var statearr_18834 = state_18762;
(statearr_18834[(26)] = inst_18653);

return statearr_18834;
})();
if(cljs.core.truth_(inst_18654)){
var statearr_18835_18898 = state_18762__$1;
(statearr_18835_18898[(1)] = (13));

} else {
var statearr_18836_18899 = state_18762__$1;
(statearr_18836_18899[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (18))){
var inst_18687 = (state_18762[(2)]);
var state_18762__$1 = state_18762;
var statearr_18837_18900 = state_18762__$1;
(statearr_18837_18900[(2)] = inst_18687);

(statearr_18837_18900[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (42))){
var state_18762__$1 = state_18762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18762__$1,(45),dchan);
} else {
if((state_val_18763 === (37))){
var inst_18721 = (state_18762[(25)]);
var inst_18730 = (state_18762[(23)]);
var inst_18634 = (state_18762[(11)]);
var inst_18730__$1 = cljs.core.first.call(null,inst_18721);
var inst_18731 = cljs.core.async.put_BANG_.call(null,inst_18730__$1,inst_18634,done);
var state_18762__$1 = (function (){var statearr_18838 = state_18762;
(statearr_18838[(23)] = inst_18730__$1);

return statearr_18838;
})();
if(cljs.core.truth_(inst_18731)){
var statearr_18839_18901 = state_18762__$1;
(statearr_18839_18901[(1)] = (39));

} else {
var statearr_18840_18902 = state_18762__$1;
(statearr_18840_18902[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (8))){
var inst_18646 = (state_18762[(14)]);
var inst_18645 = (state_18762[(17)]);
var inst_18648 = (inst_18646 < inst_18645);
var inst_18649 = inst_18648;
var state_18762__$1 = state_18762;
if(cljs.core.truth_(inst_18649)){
var statearr_18841_18903 = state_18762__$1;
(statearr_18841_18903[(1)] = (10));

} else {
var statearr_18842_18904 = state_18762__$1;
(statearr_18842_18904[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13254__auto___18850,cs,m,dchan,dctr,done))
;
return ((function (switch__13192__auto__,c__13254__auto___18850,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13193__auto__ = null;
var cljs$core$async$mult_$_state_machine__13193__auto____0 = (function (){
var statearr_18846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18846[(0)] = cljs$core$async$mult_$_state_machine__13193__auto__);

(statearr_18846[(1)] = (1));

return statearr_18846;
});
var cljs$core$async$mult_$_state_machine__13193__auto____1 = (function (state_18762){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_18762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e18847){if((e18847 instanceof Object)){
var ex__13196__auto__ = e18847;
var statearr_18848_18905 = state_18762;
(statearr_18848_18905[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18906 = state_18762;
state_18762 = G__18906;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13193__auto__ = function(state_18762){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13193__auto____1.call(this,state_18762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13193__auto____0;
cljs$core$async$mult_$_state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13193__auto____1;
return cljs$core$async$mult_$_state_machine__13193__auto__;
})()
;})(switch__13192__auto__,c__13254__auto___18850,cs,m,dchan,dctr,done))
})();
var state__13256__auto__ = (function (){var statearr_18849 = f__13255__auto__.call(null);
(statearr_18849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto___18850);

return statearr_18849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(c__13254__auto___18850,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__18908 = arguments.length;
switch (G__18908) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj18911 = {};
return obj18911;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__3947__auto__ = m;
if(and__3947__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3947__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4595__auto__ = (((m == null))?null:m);
return (function (){var or__3959__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4595__auto__)]);
if(or__3959__auto__){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3959__auto____$1){
return or__3959__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__3947__auto__ = m;
if(and__3947__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3947__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4595__auto__ = (((m == null))?null:m);
return (function (){var or__3959__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4595__auto__)]);
if(or__3959__auto__){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3959__auto____$1){
return or__3959__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__3947__auto__ = m;
if(and__3947__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3947__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4595__auto__ = (((m == null))?null:m);
return (function (){var or__3959__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4595__auto__)]);
if(or__3959__auto__){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3959__auto____$1){
return or__3959__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__3947__auto__ = m;
if(and__3947__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3947__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4595__auto__ = (((m == null))?null:m);
return (function (){var or__3959__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4595__auto__)]);
if(or__3959__auto__){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3959__auto____$1){
return or__3959__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__3947__auto__ = m;
if(and__3947__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3947__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4595__auto__ = (((m == null))?null:m);
return (function (){var or__3959__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4595__auto__)]);
if(or__3959__auto__){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3959__auto____$1){
return or__3959__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__4999__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4999__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18916){
var map__18917 = p__18916;
var map__18917__$1 = ((cljs.core.seq_QMARK_.call(null,map__18917))?cljs.core.apply.call(null,cljs.core.hash_map,map__18917):map__18917);
var opts = map__18917__$1;
var statearr_18918_18921 = state;
(statearr_18918_18921[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__18917,map__18917__$1,opts){
return (function (val){
var statearr_18919_18922 = state;
(statearr_18919_18922[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18917,map__18917__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_18920_18923 = state;
(statearr_18920_18923[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18912){
var G__18913 = cljs.core.first.call(null,seq18912);
var seq18912__$1 = cljs.core.next.call(null,seq18912);
var G__18914 = cljs.core.first.call(null,seq18912__$1);
var seq18912__$2 = cljs.core.next.call(null,seq18912__$1);
var G__18915 = cljs.core.first.call(null,seq18912__$2);
var seq18912__$3 = cljs.core.next.call(null,seq18912__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18913,G__18914,G__18915,seq18912__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t19043 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19043 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19044){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19044 = meta19044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19043.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t19043.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19043.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19043.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19043.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19043.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19043.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19043.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19045){
var self__ = this;
var _19045__$1 = this;
return self__.meta19044;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19045,meta19044__$1){
var self__ = this;
var _19045__$1 = this;
return (new cljs.core.async.t19043(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19044__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19043.cljs$lang$type = true;

cljs.core.async.t19043.cljs$lang$ctorStr = "cljs.core.async/t19043";

cljs.core.async.t19043.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cljs.core.async/t19043");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t19043 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t19043(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19044){
return (new cljs.core.async.t19043(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19044));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t19043(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13254__auto___19162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13254__auto___19162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (c__13254__auto___19162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19115){
var state_val_19116 = (state_19115[(1)]);
if((state_val_19116 === (7))){
var inst_19059 = (state_19115[(7)]);
var inst_19064 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19059);
var state_19115__$1 = state_19115;
var statearr_19117_19163 = state_19115__$1;
(statearr_19117_19163[(2)] = inst_19064);

(statearr_19117_19163[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (20))){
var inst_19074 = (state_19115[(8)]);
var state_19115__$1 = state_19115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19115__$1,(23),out,inst_19074);
} else {
if((state_val_19116 === (1))){
var inst_19049 = (state_19115[(9)]);
var inst_19049__$1 = calc_state.call(null);
var inst_19050 = cljs.core.seq_QMARK_.call(null,inst_19049__$1);
var state_19115__$1 = (function (){var statearr_19118 = state_19115;
(statearr_19118[(9)] = inst_19049__$1);

return statearr_19118;
})();
if(inst_19050){
var statearr_19119_19164 = state_19115__$1;
(statearr_19119_19164[(1)] = (2));

} else {
var statearr_19120_19165 = state_19115__$1;
(statearr_19120_19165[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (24))){
var inst_19067 = (state_19115[(10)]);
var inst_19059 = inst_19067;
var state_19115__$1 = (function (){var statearr_19121 = state_19115;
(statearr_19121[(7)] = inst_19059);

return statearr_19121;
})();
var statearr_19122_19166 = state_19115__$1;
(statearr_19122_19166[(2)] = null);

(statearr_19122_19166[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (4))){
var inst_19049 = (state_19115[(9)]);
var inst_19055 = (state_19115[(2)]);
var inst_19056 = cljs.core.get.call(null,inst_19055,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19057 = cljs.core.get.call(null,inst_19055,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19058 = cljs.core.get.call(null,inst_19055,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19059 = inst_19049;
var state_19115__$1 = (function (){var statearr_19123 = state_19115;
(statearr_19123[(11)] = inst_19057);

(statearr_19123[(12)] = inst_19056);

(statearr_19123[(13)] = inst_19058);

(statearr_19123[(7)] = inst_19059);

return statearr_19123;
})();
var statearr_19124_19167 = state_19115__$1;
(statearr_19124_19167[(2)] = null);

(statearr_19124_19167[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (15))){
var state_19115__$1 = state_19115;
var statearr_19125_19168 = state_19115__$1;
(statearr_19125_19168[(2)] = null);

(statearr_19125_19168[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (21))){
var inst_19067 = (state_19115[(10)]);
var inst_19059 = inst_19067;
var state_19115__$1 = (function (){var statearr_19126 = state_19115;
(statearr_19126[(7)] = inst_19059);

return statearr_19126;
})();
var statearr_19127_19169 = state_19115__$1;
(statearr_19127_19169[(2)] = null);

(statearr_19127_19169[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (13))){
var inst_19111 = (state_19115[(2)]);
var state_19115__$1 = state_19115;
var statearr_19128_19170 = state_19115__$1;
(statearr_19128_19170[(2)] = inst_19111);

(statearr_19128_19170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (22))){
var inst_19109 = (state_19115[(2)]);
var state_19115__$1 = state_19115;
var statearr_19129_19171 = state_19115__$1;
(statearr_19129_19171[(2)] = inst_19109);

(statearr_19129_19171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (6))){
var inst_19113 = (state_19115[(2)]);
var state_19115__$1 = state_19115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19115__$1,inst_19113);
} else {
if((state_val_19116 === (25))){
var state_19115__$1 = state_19115;
var statearr_19130_19172 = state_19115__$1;
(statearr_19130_19172[(2)] = null);

(statearr_19130_19172[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (17))){
var inst_19089 = (state_19115[(14)]);
var state_19115__$1 = state_19115;
var statearr_19131_19173 = state_19115__$1;
(statearr_19131_19173[(2)] = inst_19089);

(statearr_19131_19173[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (3))){
var inst_19049 = (state_19115[(9)]);
var state_19115__$1 = state_19115;
var statearr_19132_19174 = state_19115__$1;
(statearr_19132_19174[(2)] = inst_19049);

(statearr_19132_19174[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (12))){
var inst_19075 = (state_19115[(15)]);
var inst_19070 = (state_19115[(16)]);
var inst_19089 = (state_19115[(14)]);
var inst_19089__$1 = inst_19070.call(null,inst_19075);
var state_19115__$1 = (function (){var statearr_19133 = state_19115;
(statearr_19133[(14)] = inst_19089__$1);

return statearr_19133;
})();
if(cljs.core.truth_(inst_19089__$1)){
var statearr_19134_19175 = state_19115__$1;
(statearr_19134_19175[(1)] = (17));

} else {
var statearr_19135_19176 = state_19115__$1;
(statearr_19135_19176[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (2))){
var inst_19049 = (state_19115[(9)]);
var inst_19052 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19049);
var state_19115__$1 = state_19115;
var statearr_19136_19177 = state_19115__$1;
(statearr_19136_19177[(2)] = inst_19052);

(statearr_19136_19177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (23))){
var inst_19100 = (state_19115[(2)]);
var state_19115__$1 = state_19115;
if(cljs.core.truth_(inst_19100)){
var statearr_19137_19178 = state_19115__$1;
(statearr_19137_19178[(1)] = (24));

} else {
var statearr_19138_19179 = state_19115__$1;
(statearr_19138_19179[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (19))){
var inst_19097 = (state_19115[(2)]);
var state_19115__$1 = state_19115;
if(cljs.core.truth_(inst_19097)){
var statearr_19139_19180 = state_19115__$1;
(statearr_19139_19180[(1)] = (20));

} else {
var statearr_19140_19181 = state_19115__$1;
(statearr_19140_19181[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (11))){
var inst_19074 = (state_19115[(8)]);
var inst_19080 = (inst_19074 == null);
var state_19115__$1 = state_19115;
if(cljs.core.truth_(inst_19080)){
var statearr_19141_19182 = state_19115__$1;
(statearr_19141_19182[(1)] = (14));

} else {
var statearr_19142_19183 = state_19115__$1;
(statearr_19142_19183[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (9))){
var inst_19067 = (state_19115[(10)]);
var inst_19067__$1 = (state_19115[(2)]);
var inst_19068 = cljs.core.get.call(null,inst_19067__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19069 = cljs.core.get.call(null,inst_19067__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19070 = cljs.core.get.call(null,inst_19067__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_19115__$1 = (function (){var statearr_19143 = state_19115;
(statearr_19143[(17)] = inst_19069);

(statearr_19143[(16)] = inst_19070);

(statearr_19143[(10)] = inst_19067__$1);

return statearr_19143;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19115__$1,(10),inst_19068);
} else {
if((state_val_19116 === (5))){
var inst_19059 = (state_19115[(7)]);
var inst_19062 = cljs.core.seq_QMARK_.call(null,inst_19059);
var state_19115__$1 = state_19115;
if(inst_19062){
var statearr_19144_19184 = state_19115__$1;
(statearr_19144_19184[(1)] = (7));

} else {
var statearr_19145_19185 = state_19115__$1;
(statearr_19145_19185[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (14))){
var inst_19075 = (state_19115[(15)]);
var inst_19082 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19075);
var state_19115__$1 = state_19115;
var statearr_19146_19186 = state_19115__$1;
(statearr_19146_19186[(2)] = inst_19082);

(statearr_19146_19186[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (26))){
var inst_19105 = (state_19115[(2)]);
var state_19115__$1 = state_19115;
var statearr_19147_19187 = state_19115__$1;
(statearr_19147_19187[(2)] = inst_19105);

(statearr_19147_19187[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (16))){
var inst_19085 = (state_19115[(2)]);
var inst_19086 = calc_state.call(null);
var inst_19059 = inst_19086;
var state_19115__$1 = (function (){var statearr_19148 = state_19115;
(statearr_19148[(7)] = inst_19059);

(statearr_19148[(18)] = inst_19085);

return statearr_19148;
})();
var statearr_19149_19188 = state_19115__$1;
(statearr_19149_19188[(2)] = null);

(statearr_19149_19188[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (10))){
var inst_19075 = (state_19115[(15)]);
var inst_19074 = (state_19115[(8)]);
var inst_19073 = (state_19115[(2)]);
var inst_19074__$1 = cljs.core.nth.call(null,inst_19073,(0),null);
var inst_19075__$1 = cljs.core.nth.call(null,inst_19073,(1),null);
var inst_19076 = (inst_19074__$1 == null);
var inst_19077 = cljs.core._EQ_.call(null,inst_19075__$1,change);
var inst_19078 = (inst_19076) || (inst_19077);
var state_19115__$1 = (function (){var statearr_19150 = state_19115;
(statearr_19150[(15)] = inst_19075__$1);

(statearr_19150[(8)] = inst_19074__$1);

return statearr_19150;
})();
if(cljs.core.truth_(inst_19078)){
var statearr_19151_19189 = state_19115__$1;
(statearr_19151_19189[(1)] = (11));

} else {
var statearr_19152_19190 = state_19115__$1;
(statearr_19152_19190[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (18))){
var inst_19075 = (state_19115[(15)]);
var inst_19069 = (state_19115[(17)]);
var inst_19070 = (state_19115[(16)]);
var inst_19092 = cljs.core.empty_QMARK_.call(null,inst_19070);
var inst_19093 = inst_19069.call(null,inst_19075);
var inst_19094 = cljs.core.not.call(null,inst_19093);
var inst_19095 = (inst_19092) && (inst_19094);
var state_19115__$1 = state_19115;
var statearr_19153_19191 = state_19115__$1;
(statearr_19153_19191[(2)] = inst_19095);

(statearr_19153_19191[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19116 === (8))){
var inst_19059 = (state_19115[(7)]);
var state_19115__$1 = state_19115;
var statearr_19154_19192 = state_19115__$1;
(statearr_19154_19192[(2)] = inst_19059);

(statearr_19154_19192[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13254__auto___19162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13192__auto__,c__13254__auto___19162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13193__auto__ = null;
var cljs$core$async$mix_$_state_machine__13193__auto____0 = (function (){
var statearr_19158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19158[(0)] = cljs$core$async$mix_$_state_machine__13193__auto__);

(statearr_19158[(1)] = (1));

return statearr_19158;
});
var cljs$core$async$mix_$_state_machine__13193__auto____1 = (function (state_19115){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_19115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e19159){if((e19159 instanceof Object)){
var ex__13196__auto__ = e19159;
var statearr_19160_19193 = state_19115;
(statearr_19160_19193[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19194 = state_19115;
state_19115 = G__19194;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13193__auto__ = function(state_19115){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13193__auto____1.call(this,state_19115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13193__auto____0;
cljs$core$async$mix_$_state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13193__auto____1;
return cljs$core$async$mix_$_state_machine__13193__auto__;
})()
;})(switch__13192__auto__,c__13254__auto___19162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13256__auto__ = (function (){var statearr_19161 = f__13255__auto__.call(null);
(statearr_19161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto___19162);

return statearr_19161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(c__13254__auto___19162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj19196 = {};
return obj19196;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3947__auto__ = p;
if(and__3947__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3947__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4595__auto__ = (((p == null))?null:p);
return (function (){var or__3959__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4595__auto__)]);
if(or__3959__auto__){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3959__auto____$1){
return or__3959__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__3947__auto__ = p;
if(and__3947__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3947__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4595__auto__ = (((p == null))?null:p);
return (function (){var or__3959__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4595__auto__)]);
if(or__3959__auto__){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3959__auto____$1){
return or__3959__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__19198 = arguments.length;
switch (G__19198) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__3947__auto__ = p;
if(and__3947__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3947__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4595__auto__ = (((p == null))?null:p);
return (function (){var or__3959__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4595__auto__)]);
if(or__3959__auto__){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3959__auto____$1){
return or__3959__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__3947__auto__ = p;
if(and__3947__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3947__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4595__auto__ = (((p == null))?null:p);
return (function (){var or__3959__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4595__auto__)]);
if(or__3959__auto__){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3959__auto____$1){
return or__3959__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__19202 = arguments.length;
switch (G__19202) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3959__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3959__auto__,mults){
return (function (p1__19200_SHARP_){
if(cljs.core.truth_(p1__19200_SHARP_.call(null,topic))){
return p1__19200_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19200_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3959__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t19203 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19203 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta19204){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta19204 = meta19204;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19203.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t19203.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t19203.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t19203.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t19203.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t19203.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19203.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t19203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19205){
var self__ = this;
var _19205__$1 = this;
return self__.meta19204;
});})(mults,ensure_mult))
;

cljs.core.async.t19203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19205,meta19204__$1){
var self__ = this;
var _19205__$1 = this;
return (new cljs.core.async.t19203(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta19204__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t19203.cljs$lang$type = true;

cljs.core.async.t19203.cljs$lang$ctorStr = "cljs.core.async/t19203";

cljs.core.async.t19203.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cljs.core.async/t19203");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t19203 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t19203(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta19204){
return (new cljs.core.async.t19203(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta19204));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t19203(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13254__auto___19326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13254__auto___19326,mults,ensure_mult,p){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (c__13254__auto___19326,mults,ensure_mult,p){
return (function (state_19277){
var state_val_19278 = (state_19277[(1)]);
if((state_val_19278 === (7))){
var inst_19273 = (state_19277[(2)]);
var state_19277__$1 = state_19277;
var statearr_19279_19327 = state_19277__$1;
(statearr_19279_19327[(2)] = inst_19273);

(statearr_19279_19327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (20))){
var state_19277__$1 = state_19277;
var statearr_19280_19328 = state_19277__$1;
(statearr_19280_19328[(2)] = null);

(statearr_19280_19328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (1))){
var state_19277__$1 = state_19277;
var statearr_19281_19329 = state_19277__$1;
(statearr_19281_19329[(2)] = null);

(statearr_19281_19329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (24))){
var inst_19256 = (state_19277[(7)]);
var inst_19265 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19256);
var state_19277__$1 = state_19277;
var statearr_19282_19330 = state_19277__$1;
(statearr_19282_19330[(2)] = inst_19265);

(statearr_19282_19330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (4))){
var inst_19208 = (state_19277[(8)]);
var inst_19208__$1 = (state_19277[(2)]);
var inst_19209 = (inst_19208__$1 == null);
var state_19277__$1 = (function (){var statearr_19283 = state_19277;
(statearr_19283[(8)] = inst_19208__$1);

return statearr_19283;
})();
if(cljs.core.truth_(inst_19209)){
var statearr_19284_19331 = state_19277__$1;
(statearr_19284_19331[(1)] = (5));

} else {
var statearr_19285_19332 = state_19277__$1;
(statearr_19285_19332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (15))){
var inst_19250 = (state_19277[(2)]);
var state_19277__$1 = state_19277;
var statearr_19286_19333 = state_19277__$1;
(statearr_19286_19333[(2)] = inst_19250);

(statearr_19286_19333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (21))){
var inst_19270 = (state_19277[(2)]);
var state_19277__$1 = (function (){var statearr_19287 = state_19277;
(statearr_19287[(9)] = inst_19270);

return statearr_19287;
})();
var statearr_19288_19334 = state_19277__$1;
(statearr_19288_19334[(2)] = null);

(statearr_19288_19334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (13))){
var inst_19232 = (state_19277[(10)]);
var inst_19234 = cljs.core.chunked_seq_QMARK_.call(null,inst_19232);
var state_19277__$1 = state_19277;
if(inst_19234){
var statearr_19289_19335 = state_19277__$1;
(statearr_19289_19335[(1)] = (16));

} else {
var statearr_19290_19336 = state_19277__$1;
(statearr_19290_19336[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (22))){
var inst_19262 = (state_19277[(2)]);
var state_19277__$1 = state_19277;
if(cljs.core.truth_(inst_19262)){
var statearr_19291_19337 = state_19277__$1;
(statearr_19291_19337[(1)] = (23));

} else {
var statearr_19292_19338 = state_19277__$1;
(statearr_19292_19338[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (6))){
var inst_19256 = (state_19277[(7)]);
var inst_19258 = (state_19277[(11)]);
var inst_19208 = (state_19277[(8)]);
var inst_19256__$1 = topic_fn.call(null,inst_19208);
var inst_19257 = cljs.core.deref.call(null,mults);
var inst_19258__$1 = cljs.core.get.call(null,inst_19257,inst_19256__$1);
var state_19277__$1 = (function (){var statearr_19293 = state_19277;
(statearr_19293[(7)] = inst_19256__$1);

(statearr_19293[(11)] = inst_19258__$1);

return statearr_19293;
})();
if(cljs.core.truth_(inst_19258__$1)){
var statearr_19294_19339 = state_19277__$1;
(statearr_19294_19339[(1)] = (19));

} else {
var statearr_19295_19340 = state_19277__$1;
(statearr_19295_19340[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (25))){
var inst_19267 = (state_19277[(2)]);
var state_19277__$1 = state_19277;
var statearr_19296_19341 = state_19277__$1;
(statearr_19296_19341[(2)] = inst_19267);

(statearr_19296_19341[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (17))){
var inst_19232 = (state_19277[(10)]);
var inst_19241 = cljs.core.first.call(null,inst_19232);
var inst_19242 = cljs.core.async.muxch_STAR_.call(null,inst_19241);
var inst_19243 = cljs.core.async.close_BANG_.call(null,inst_19242);
var inst_19244 = cljs.core.next.call(null,inst_19232);
var inst_19218 = inst_19244;
var inst_19219 = null;
var inst_19220 = (0);
var inst_19221 = (0);
var state_19277__$1 = (function (){var statearr_19297 = state_19277;
(statearr_19297[(12)] = inst_19221);

(statearr_19297[(13)] = inst_19243);

(statearr_19297[(14)] = inst_19219);

(statearr_19297[(15)] = inst_19218);

(statearr_19297[(16)] = inst_19220);

return statearr_19297;
})();
var statearr_19298_19342 = state_19277__$1;
(statearr_19298_19342[(2)] = null);

(statearr_19298_19342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (3))){
var inst_19275 = (state_19277[(2)]);
var state_19277__$1 = state_19277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19277__$1,inst_19275);
} else {
if((state_val_19278 === (12))){
var inst_19252 = (state_19277[(2)]);
var state_19277__$1 = state_19277;
var statearr_19299_19343 = state_19277__$1;
(statearr_19299_19343[(2)] = inst_19252);

(statearr_19299_19343[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (2))){
var state_19277__$1 = state_19277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19277__$1,(4),ch);
} else {
if((state_val_19278 === (23))){
var state_19277__$1 = state_19277;
var statearr_19300_19344 = state_19277__$1;
(statearr_19300_19344[(2)] = null);

(statearr_19300_19344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (19))){
var inst_19258 = (state_19277[(11)]);
var inst_19208 = (state_19277[(8)]);
var inst_19260 = cljs.core.async.muxch_STAR_.call(null,inst_19258);
var state_19277__$1 = state_19277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19277__$1,(22),inst_19260,inst_19208);
} else {
if((state_val_19278 === (11))){
var inst_19232 = (state_19277[(10)]);
var inst_19218 = (state_19277[(15)]);
var inst_19232__$1 = cljs.core.seq.call(null,inst_19218);
var state_19277__$1 = (function (){var statearr_19301 = state_19277;
(statearr_19301[(10)] = inst_19232__$1);

return statearr_19301;
})();
if(inst_19232__$1){
var statearr_19302_19345 = state_19277__$1;
(statearr_19302_19345[(1)] = (13));

} else {
var statearr_19303_19346 = state_19277__$1;
(statearr_19303_19346[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (9))){
var inst_19254 = (state_19277[(2)]);
var state_19277__$1 = state_19277;
var statearr_19304_19347 = state_19277__$1;
(statearr_19304_19347[(2)] = inst_19254);

(statearr_19304_19347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (5))){
var inst_19215 = cljs.core.deref.call(null,mults);
var inst_19216 = cljs.core.vals.call(null,inst_19215);
var inst_19217 = cljs.core.seq.call(null,inst_19216);
var inst_19218 = inst_19217;
var inst_19219 = null;
var inst_19220 = (0);
var inst_19221 = (0);
var state_19277__$1 = (function (){var statearr_19305 = state_19277;
(statearr_19305[(12)] = inst_19221);

(statearr_19305[(14)] = inst_19219);

(statearr_19305[(15)] = inst_19218);

(statearr_19305[(16)] = inst_19220);

return statearr_19305;
})();
var statearr_19306_19348 = state_19277__$1;
(statearr_19306_19348[(2)] = null);

(statearr_19306_19348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (14))){
var state_19277__$1 = state_19277;
var statearr_19310_19349 = state_19277__$1;
(statearr_19310_19349[(2)] = null);

(statearr_19310_19349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (16))){
var inst_19232 = (state_19277[(10)]);
var inst_19236 = cljs.core.chunk_first.call(null,inst_19232);
var inst_19237 = cljs.core.chunk_rest.call(null,inst_19232);
var inst_19238 = cljs.core.count.call(null,inst_19236);
var inst_19218 = inst_19237;
var inst_19219 = inst_19236;
var inst_19220 = inst_19238;
var inst_19221 = (0);
var state_19277__$1 = (function (){var statearr_19311 = state_19277;
(statearr_19311[(12)] = inst_19221);

(statearr_19311[(14)] = inst_19219);

(statearr_19311[(15)] = inst_19218);

(statearr_19311[(16)] = inst_19220);

return statearr_19311;
})();
var statearr_19312_19350 = state_19277__$1;
(statearr_19312_19350[(2)] = null);

(statearr_19312_19350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (10))){
var inst_19221 = (state_19277[(12)]);
var inst_19219 = (state_19277[(14)]);
var inst_19218 = (state_19277[(15)]);
var inst_19220 = (state_19277[(16)]);
var inst_19226 = cljs.core._nth.call(null,inst_19219,inst_19221);
var inst_19227 = cljs.core.async.muxch_STAR_.call(null,inst_19226);
var inst_19228 = cljs.core.async.close_BANG_.call(null,inst_19227);
var inst_19229 = (inst_19221 + (1));
var tmp19307 = inst_19219;
var tmp19308 = inst_19218;
var tmp19309 = inst_19220;
var inst_19218__$1 = tmp19308;
var inst_19219__$1 = tmp19307;
var inst_19220__$1 = tmp19309;
var inst_19221__$1 = inst_19229;
var state_19277__$1 = (function (){var statearr_19313 = state_19277;
(statearr_19313[(12)] = inst_19221__$1);

(statearr_19313[(17)] = inst_19228);

(statearr_19313[(14)] = inst_19219__$1);

(statearr_19313[(15)] = inst_19218__$1);

(statearr_19313[(16)] = inst_19220__$1);

return statearr_19313;
})();
var statearr_19314_19351 = state_19277__$1;
(statearr_19314_19351[(2)] = null);

(statearr_19314_19351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (18))){
var inst_19247 = (state_19277[(2)]);
var state_19277__$1 = state_19277;
var statearr_19315_19352 = state_19277__$1;
(statearr_19315_19352[(2)] = inst_19247);

(statearr_19315_19352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (8))){
var inst_19221 = (state_19277[(12)]);
var inst_19220 = (state_19277[(16)]);
var inst_19223 = (inst_19221 < inst_19220);
var inst_19224 = inst_19223;
var state_19277__$1 = state_19277;
if(cljs.core.truth_(inst_19224)){
var statearr_19316_19353 = state_19277__$1;
(statearr_19316_19353[(1)] = (10));

} else {
var statearr_19317_19354 = state_19277__$1;
(statearr_19317_19354[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13254__auto___19326,mults,ensure_mult,p))
;
return ((function (switch__13192__auto__,c__13254__auto___19326,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13193__auto__ = null;
var cljs$core$async$state_machine__13193__auto____0 = (function (){
var statearr_19321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19321[(0)] = cljs$core$async$state_machine__13193__auto__);

(statearr_19321[(1)] = (1));

return statearr_19321;
});
var cljs$core$async$state_machine__13193__auto____1 = (function (state_19277){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_19277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e19322){if((e19322 instanceof Object)){
var ex__13196__auto__ = e19322;
var statearr_19323_19355 = state_19277;
(statearr_19323_19355[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19356 = state_19277;
state_19277 = G__19356;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$state_machine__13193__auto__ = function(state_19277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13193__auto____1.call(this,state_19277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13193__auto____0;
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13193__auto____1;
return cljs$core$async$state_machine__13193__auto__;
})()
;})(switch__13192__auto__,c__13254__auto___19326,mults,ensure_mult,p))
})();
var state__13256__auto__ = (function (){var statearr_19324 = f__13255__auto__.call(null);
(statearr_19324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto___19326);

return statearr_19324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(c__13254__auto___19326,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__19358 = arguments.length;
switch (G__19358) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__19361 = arguments.length;
switch (G__19361) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__19364 = arguments.length;
switch (G__19364) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__13254__auto___19434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13254__auto___19434,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (c__13254__auto___19434,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19403){
var state_val_19404 = (state_19403[(1)]);
if((state_val_19404 === (7))){
var state_19403__$1 = state_19403;
var statearr_19405_19435 = state_19403__$1;
(statearr_19405_19435[(2)] = null);

(statearr_19405_19435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (1))){
var state_19403__$1 = state_19403;
var statearr_19406_19436 = state_19403__$1;
(statearr_19406_19436[(2)] = null);

(statearr_19406_19436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (4))){
var inst_19367 = (state_19403[(7)]);
var inst_19369 = (inst_19367 < cnt);
var state_19403__$1 = state_19403;
if(cljs.core.truth_(inst_19369)){
var statearr_19407_19437 = state_19403__$1;
(statearr_19407_19437[(1)] = (6));

} else {
var statearr_19408_19438 = state_19403__$1;
(statearr_19408_19438[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (15))){
var inst_19399 = (state_19403[(2)]);
var state_19403__$1 = state_19403;
var statearr_19409_19439 = state_19403__$1;
(statearr_19409_19439[(2)] = inst_19399);

(statearr_19409_19439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (13))){
var inst_19392 = cljs.core.async.close_BANG_.call(null,out);
var state_19403__$1 = state_19403;
var statearr_19410_19440 = state_19403__$1;
(statearr_19410_19440[(2)] = inst_19392);

(statearr_19410_19440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (6))){
var state_19403__$1 = state_19403;
var statearr_19411_19441 = state_19403__$1;
(statearr_19411_19441[(2)] = null);

(statearr_19411_19441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (3))){
var inst_19401 = (state_19403[(2)]);
var state_19403__$1 = state_19403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19403__$1,inst_19401);
} else {
if((state_val_19404 === (12))){
var inst_19389 = (state_19403[(8)]);
var inst_19389__$1 = (state_19403[(2)]);
var inst_19390 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19389__$1);
var state_19403__$1 = (function (){var statearr_19412 = state_19403;
(statearr_19412[(8)] = inst_19389__$1);

return statearr_19412;
})();
if(cljs.core.truth_(inst_19390)){
var statearr_19413_19442 = state_19403__$1;
(statearr_19413_19442[(1)] = (13));

} else {
var statearr_19414_19443 = state_19403__$1;
(statearr_19414_19443[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (2))){
var inst_19366 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19367 = (0);
var state_19403__$1 = (function (){var statearr_19415 = state_19403;
(statearr_19415[(9)] = inst_19366);

(statearr_19415[(7)] = inst_19367);

return statearr_19415;
})();
var statearr_19416_19444 = state_19403__$1;
(statearr_19416_19444[(2)] = null);

(statearr_19416_19444[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (11))){
var inst_19367 = (state_19403[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19403,(10),Object,null,(9));
var inst_19376 = chs__$1.call(null,inst_19367);
var inst_19377 = done.call(null,inst_19367);
var inst_19378 = cljs.core.async.take_BANG_.call(null,inst_19376,inst_19377);
var state_19403__$1 = state_19403;
var statearr_19417_19445 = state_19403__$1;
(statearr_19417_19445[(2)] = inst_19378);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19403__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (9))){
var inst_19367 = (state_19403[(7)]);
var inst_19380 = (state_19403[(2)]);
var inst_19381 = (inst_19367 + (1));
var inst_19367__$1 = inst_19381;
var state_19403__$1 = (function (){var statearr_19418 = state_19403;
(statearr_19418[(10)] = inst_19380);

(statearr_19418[(7)] = inst_19367__$1);

return statearr_19418;
})();
var statearr_19419_19446 = state_19403__$1;
(statearr_19419_19446[(2)] = null);

(statearr_19419_19446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (5))){
var inst_19387 = (state_19403[(2)]);
var state_19403__$1 = (function (){var statearr_19420 = state_19403;
(statearr_19420[(11)] = inst_19387);

return statearr_19420;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19403__$1,(12),dchan);
} else {
if((state_val_19404 === (14))){
var inst_19389 = (state_19403[(8)]);
var inst_19394 = cljs.core.apply.call(null,f,inst_19389);
var state_19403__$1 = state_19403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19403__$1,(16),out,inst_19394);
} else {
if((state_val_19404 === (16))){
var inst_19396 = (state_19403[(2)]);
var state_19403__$1 = (function (){var statearr_19421 = state_19403;
(statearr_19421[(12)] = inst_19396);

return statearr_19421;
})();
var statearr_19422_19447 = state_19403__$1;
(statearr_19422_19447[(2)] = null);

(statearr_19422_19447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (10))){
var inst_19371 = (state_19403[(2)]);
var inst_19372 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19403__$1 = (function (){var statearr_19423 = state_19403;
(statearr_19423[(13)] = inst_19371);

return statearr_19423;
})();
var statearr_19424_19448 = state_19403__$1;
(statearr_19424_19448[(2)] = inst_19372);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19403__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (8))){
var inst_19385 = (state_19403[(2)]);
var state_19403__$1 = state_19403;
var statearr_19425_19449 = state_19403__$1;
(statearr_19425_19449[(2)] = inst_19385);

(statearr_19425_19449[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13254__auto___19434,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13192__auto__,c__13254__auto___19434,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13193__auto__ = null;
var cljs$core$async$state_machine__13193__auto____0 = (function (){
var statearr_19429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19429[(0)] = cljs$core$async$state_machine__13193__auto__);

(statearr_19429[(1)] = (1));

return statearr_19429;
});
var cljs$core$async$state_machine__13193__auto____1 = (function (state_19403){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_19403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e19430){if((e19430 instanceof Object)){
var ex__13196__auto__ = e19430;
var statearr_19431_19450 = state_19403;
(statearr_19431_19450[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19451 = state_19403;
state_19403 = G__19451;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$state_machine__13193__auto__ = function(state_19403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13193__auto____1.call(this,state_19403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13193__auto____0;
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13193__auto____1;
return cljs$core$async$state_machine__13193__auto__;
})()
;})(switch__13192__auto__,c__13254__auto___19434,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13256__auto__ = (function (){var statearr_19432 = f__13255__auto__.call(null);
(statearr_19432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto___19434);

return statearr_19432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(c__13254__auto___19434,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__19454 = arguments.length;
switch (G__19454) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13254__auto___19509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13254__auto___19509,out){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (c__13254__auto___19509,out){
return (function (state_19484){
var state_val_19485 = (state_19484[(1)]);
if((state_val_19485 === (7))){
var inst_19463 = (state_19484[(7)]);
var inst_19464 = (state_19484[(8)]);
var inst_19463__$1 = (state_19484[(2)]);
var inst_19464__$1 = cljs.core.nth.call(null,inst_19463__$1,(0),null);
var inst_19465 = cljs.core.nth.call(null,inst_19463__$1,(1),null);
var inst_19466 = (inst_19464__$1 == null);
var state_19484__$1 = (function (){var statearr_19486 = state_19484;
(statearr_19486[(9)] = inst_19465);

(statearr_19486[(7)] = inst_19463__$1);

(statearr_19486[(8)] = inst_19464__$1);

return statearr_19486;
})();
if(cljs.core.truth_(inst_19466)){
var statearr_19487_19510 = state_19484__$1;
(statearr_19487_19510[(1)] = (8));

} else {
var statearr_19488_19511 = state_19484__$1;
(statearr_19488_19511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (1))){
var inst_19455 = cljs.core.vec.call(null,chs);
var inst_19456 = inst_19455;
var state_19484__$1 = (function (){var statearr_19489 = state_19484;
(statearr_19489[(10)] = inst_19456);

return statearr_19489;
})();
var statearr_19490_19512 = state_19484__$1;
(statearr_19490_19512[(2)] = null);

(statearr_19490_19512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (4))){
var inst_19456 = (state_19484[(10)]);
var state_19484__$1 = state_19484;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19484__$1,(7),inst_19456);
} else {
if((state_val_19485 === (6))){
var inst_19480 = (state_19484[(2)]);
var state_19484__$1 = state_19484;
var statearr_19491_19513 = state_19484__$1;
(statearr_19491_19513[(2)] = inst_19480);

(statearr_19491_19513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (3))){
var inst_19482 = (state_19484[(2)]);
var state_19484__$1 = state_19484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19484__$1,inst_19482);
} else {
if((state_val_19485 === (2))){
var inst_19456 = (state_19484[(10)]);
var inst_19458 = cljs.core.count.call(null,inst_19456);
var inst_19459 = (inst_19458 > (0));
var state_19484__$1 = state_19484;
if(cljs.core.truth_(inst_19459)){
var statearr_19493_19514 = state_19484__$1;
(statearr_19493_19514[(1)] = (4));

} else {
var statearr_19494_19515 = state_19484__$1;
(statearr_19494_19515[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (11))){
var inst_19456 = (state_19484[(10)]);
var inst_19473 = (state_19484[(2)]);
var tmp19492 = inst_19456;
var inst_19456__$1 = tmp19492;
var state_19484__$1 = (function (){var statearr_19495 = state_19484;
(statearr_19495[(11)] = inst_19473);

(statearr_19495[(10)] = inst_19456__$1);

return statearr_19495;
})();
var statearr_19496_19516 = state_19484__$1;
(statearr_19496_19516[(2)] = null);

(statearr_19496_19516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (9))){
var inst_19464 = (state_19484[(8)]);
var state_19484__$1 = state_19484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19484__$1,(11),out,inst_19464);
} else {
if((state_val_19485 === (5))){
var inst_19478 = cljs.core.async.close_BANG_.call(null,out);
var state_19484__$1 = state_19484;
var statearr_19497_19517 = state_19484__$1;
(statearr_19497_19517[(2)] = inst_19478);

(statearr_19497_19517[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (10))){
var inst_19476 = (state_19484[(2)]);
var state_19484__$1 = state_19484;
var statearr_19498_19518 = state_19484__$1;
(statearr_19498_19518[(2)] = inst_19476);

(statearr_19498_19518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (8))){
var inst_19465 = (state_19484[(9)]);
var inst_19463 = (state_19484[(7)]);
var inst_19456 = (state_19484[(10)]);
var inst_19464 = (state_19484[(8)]);
var inst_19468 = (function (){var c = inst_19465;
var v = inst_19464;
var vec__19461 = inst_19463;
var cs = inst_19456;
return ((function (c,v,vec__19461,cs,inst_19465,inst_19463,inst_19456,inst_19464,state_val_19485,c__13254__auto___19509,out){
return (function (p1__19452_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19452_SHARP_);
});
;})(c,v,vec__19461,cs,inst_19465,inst_19463,inst_19456,inst_19464,state_val_19485,c__13254__auto___19509,out))
})();
var inst_19469 = cljs.core.filterv.call(null,inst_19468,inst_19456);
var inst_19456__$1 = inst_19469;
var state_19484__$1 = (function (){var statearr_19499 = state_19484;
(statearr_19499[(10)] = inst_19456__$1);

return statearr_19499;
})();
var statearr_19500_19519 = state_19484__$1;
(statearr_19500_19519[(2)] = null);

(statearr_19500_19519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13254__auto___19509,out))
;
return ((function (switch__13192__auto__,c__13254__auto___19509,out){
return (function() {
var cljs$core$async$state_machine__13193__auto__ = null;
var cljs$core$async$state_machine__13193__auto____0 = (function (){
var statearr_19504 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19504[(0)] = cljs$core$async$state_machine__13193__auto__);

(statearr_19504[(1)] = (1));

return statearr_19504;
});
var cljs$core$async$state_machine__13193__auto____1 = (function (state_19484){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_19484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e19505){if((e19505 instanceof Object)){
var ex__13196__auto__ = e19505;
var statearr_19506_19520 = state_19484;
(statearr_19506_19520[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19521 = state_19484;
state_19484 = G__19521;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$state_machine__13193__auto__ = function(state_19484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13193__auto____1.call(this,state_19484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13193__auto____0;
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13193__auto____1;
return cljs$core$async$state_machine__13193__auto__;
})()
;})(switch__13192__auto__,c__13254__auto___19509,out))
})();
var state__13256__auto__ = (function (){var statearr_19507 = f__13255__auto__.call(null);
(statearr_19507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto___19509);

return statearr_19507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(c__13254__auto___19509,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__19523 = arguments.length;
switch (G__19523) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13254__auto___19571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13254__auto___19571,out){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (c__13254__auto___19571,out){
return (function (state_19547){
var state_val_19548 = (state_19547[(1)]);
if((state_val_19548 === (7))){
var inst_19529 = (state_19547[(7)]);
var inst_19529__$1 = (state_19547[(2)]);
var inst_19530 = (inst_19529__$1 == null);
var inst_19531 = cljs.core.not.call(null,inst_19530);
var state_19547__$1 = (function (){var statearr_19549 = state_19547;
(statearr_19549[(7)] = inst_19529__$1);

return statearr_19549;
})();
if(inst_19531){
var statearr_19550_19572 = state_19547__$1;
(statearr_19550_19572[(1)] = (8));

} else {
var statearr_19551_19573 = state_19547__$1;
(statearr_19551_19573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (1))){
var inst_19524 = (0);
var state_19547__$1 = (function (){var statearr_19552 = state_19547;
(statearr_19552[(8)] = inst_19524);

return statearr_19552;
})();
var statearr_19553_19574 = state_19547__$1;
(statearr_19553_19574[(2)] = null);

(statearr_19553_19574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (4))){
var state_19547__$1 = state_19547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19547__$1,(7),ch);
} else {
if((state_val_19548 === (6))){
var inst_19542 = (state_19547[(2)]);
var state_19547__$1 = state_19547;
var statearr_19554_19575 = state_19547__$1;
(statearr_19554_19575[(2)] = inst_19542);

(statearr_19554_19575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (3))){
var inst_19544 = (state_19547[(2)]);
var inst_19545 = cljs.core.async.close_BANG_.call(null,out);
var state_19547__$1 = (function (){var statearr_19555 = state_19547;
(statearr_19555[(9)] = inst_19544);

return statearr_19555;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19547__$1,inst_19545);
} else {
if((state_val_19548 === (2))){
var inst_19524 = (state_19547[(8)]);
var inst_19526 = (inst_19524 < n);
var state_19547__$1 = state_19547;
if(cljs.core.truth_(inst_19526)){
var statearr_19556_19576 = state_19547__$1;
(statearr_19556_19576[(1)] = (4));

} else {
var statearr_19557_19577 = state_19547__$1;
(statearr_19557_19577[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (11))){
var inst_19524 = (state_19547[(8)]);
var inst_19534 = (state_19547[(2)]);
var inst_19535 = (inst_19524 + (1));
var inst_19524__$1 = inst_19535;
var state_19547__$1 = (function (){var statearr_19558 = state_19547;
(statearr_19558[(10)] = inst_19534);

(statearr_19558[(8)] = inst_19524__$1);

return statearr_19558;
})();
var statearr_19559_19578 = state_19547__$1;
(statearr_19559_19578[(2)] = null);

(statearr_19559_19578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (9))){
var state_19547__$1 = state_19547;
var statearr_19560_19579 = state_19547__$1;
(statearr_19560_19579[(2)] = null);

(statearr_19560_19579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (5))){
var state_19547__$1 = state_19547;
var statearr_19561_19580 = state_19547__$1;
(statearr_19561_19580[(2)] = null);

(statearr_19561_19580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (10))){
var inst_19539 = (state_19547[(2)]);
var state_19547__$1 = state_19547;
var statearr_19562_19581 = state_19547__$1;
(statearr_19562_19581[(2)] = inst_19539);

(statearr_19562_19581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (8))){
var inst_19529 = (state_19547[(7)]);
var state_19547__$1 = state_19547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19547__$1,(11),out,inst_19529);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13254__auto___19571,out))
;
return ((function (switch__13192__auto__,c__13254__auto___19571,out){
return (function() {
var cljs$core$async$state_machine__13193__auto__ = null;
var cljs$core$async$state_machine__13193__auto____0 = (function (){
var statearr_19566 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19566[(0)] = cljs$core$async$state_machine__13193__auto__);

(statearr_19566[(1)] = (1));

return statearr_19566;
});
var cljs$core$async$state_machine__13193__auto____1 = (function (state_19547){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_19547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e19567){if((e19567 instanceof Object)){
var ex__13196__auto__ = e19567;
var statearr_19568_19582 = state_19547;
(statearr_19568_19582[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19583 = state_19547;
state_19547 = G__19583;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$state_machine__13193__auto__ = function(state_19547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13193__auto____1.call(this,state_19547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13193__auto____0;
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13193__auto____1;
return cljs$core$async$state_machine__13193__auto__;
})()
;})(switch__13192__auto__,c__13254__auto___19571,out))
})();
var state__13256__auto__ = (function (){var statearr_19569 = f__13255__auto__.call(null);
(statearr_19569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto___19571);

return statearr_19569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(c__13254__auto___19571,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t19591 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19591 = (function (ch,f,map_LT_,meta19592){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19592 = meta19592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19591.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19591.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t19591.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19591.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t19594 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19594 = (function (fn1,_,meta19592,map_LT_,f,ch,meta19595){
this.fn1 = fn1;
this._ = _;
this.meta19592 = meta19592;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19595 = meta19595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19594.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19594.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t19594.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19584_SHARP_){
return f1.call(null,(((p1__19584_SHARP_ == null))?null:self__.f.call(null,p1__19584_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19596){
var self__ = this;
var _19596__$1 = this;
return self__.meta19595;
});})(___$1))
;

cljs.core.async.t19594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19596,meta19595__$1){
var self__ = this;
var _19596__$1 = this;
return (new cljs.core.async.t19594(self__.fn1,self__._,self__.meta19592,self__.map_LT_,self__.f,self__.ch,meta19595__$1));
});})(___$1))
;

cljs.core.async.t19594.cljs$lang$type = true;

cljs.core.async.t19594.cljs$lang$ctorStr = "cljs.core.async/t19594";

cljs.core.async.t19594.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cljs.core.async/t19594");
});})(___$1))
;

cljs.core.async.__GT_t19594 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t19594(fn1__$1,___$2,meta19592__$1,map_LT___$1,f__$1,ch__$1,meta19595){
return (new cljs.core.async.t19594(fn1__$1,___$2,meta19592__$1,map_LT___$1,f__$1,ch__$1,meta19595));
});})(___$1))
;

}

return (new cljs.core.async.t19594(fn1,___$1,self__.meta19592,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3947__auto__ = ret;
if(cljs.core.truth_(and__3947__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3947__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t19591.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19591.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19591.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19593){
var self__ = this;
var _19593__$1 = this;
return self__.meta19592;
});

cljs.core.async.t19591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19593,meta19592__$1){
var self__ = this;
var _19593__$1 = this;
return (new cljs.core.async.t19591(self__.ch,self__.f,self__.map_LT_,meta19592__$1));
});

cljs.core.async.t19591.cljs$lang$type = true;

cljs.core.async.t19591.cljs$lang$ctorStr = "cljs.core.async/t19591";

cljs.core.async.t19591.cljs$lang$ctorPrWriter = (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cljs.core.async/t19591");
});

cljs.core.async.__GT_t19591 = (function cljs$core$async$map_LT__$___GT_t19591(ch__$1,f__$1,map_LT___$1,meta19592){
return (new cljs.core.async.t19591(ch__$1,f__$1,map_LT___$1,meta19592));
});

}

return (new cljs.core.async.t19591(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t19600 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19600 = (function (ch,f,map_GT_,meta19601){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19601 = meta19601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19600.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19600.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t19600.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19600.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19600.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19600.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19602){
var self__ = this;
var _19602__$1 = this;
return self__.meta19601;
});

cljs.core.async.t19600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19602,meta19601__$1){
var self__ = this;
var _19602__$1 = this;
return (new cljs.core.async.t19600(self__.ch,self__.f,self__.map_GT_,meta19601__$1));
});

cljs.core.async.t19600.cljs$lang$type = true;

cljs.core.async.t19600.cljs$lang$ctorStr = "cljs.core.async/t19600";

cljs.core.async.t19600.cljs$lang$ctorPrWriter = (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cljs.core.async/t19600");
});

cljs.core.async.__GT_t19600 = (function cljs$core$async$map_GT__$___GT_t19600(ch__$1,f__$1,map_GT___$1,meta19601){
return (new cljs.core.async.t19600(ch__$1,f__$1,map_GT___$1,meta19601));
});

}

return (new cljs.core.async.t19600(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t19606 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19606 = (function (ch,p,filter_GT_,meta19607){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19607 = meta19607;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19606.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19606.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t19606.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19606.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19606.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19606.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19606.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19608){
var self__ = this;
var _19608__$1 = this;
return self__.meta19607;
});

cljs.core.async.t19606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19608,meta19607__$1){
var self__ = this;
var _19608__$1 = this;
return (new cljs.core.async.t19606(self__.ch,self__.p,self__.filter_GT_,meta19607__$1));
});

cljs.core.async.t19606.cljs$lang$type = true;

cljs.core.async.t19606.cljs$lang$ctorStr = "cljs.core.async/t19606";

cljs.core.async.t19606.cljs$lang$ctorPrWriter = (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"cljs.core.async/t19606");
});

cljs.core.async.__GT_t19606 = (function cljs$core$async$filter_GT__$___GT_t19606(ch__$1,p__$1,filter_GT___$1,meta19607){
return (new cljs.core.async.t19606(ch__$1,p__$1,filter_GT___$1,meta19607));
});

}

return (new cljs.core.async.t19606(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__19610 = arguments.length;
switch (G__19610) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13254__auto___19653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13254__auto___19653,out){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (c__13254__auto___19653,out){
return (function (state_19631){
var state_val_19632 = (state_19631[(1)]);
if((state_val_19632 === (7))){
var inst_19627 = (state_19631[(2)]);
var state_19631__$1 = state_19631;
var statearr_19633_19654 = state_19631__$1;
(statearr_19633_19654[(2)] = inst_19627);

(statearr_19633_19654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (1))){
var state_19631__$1 = state_19631;
var statearr_19634_19655 = state_19631__$1;
(statearr_19634_19655[(2)] = null);

(statearr_19634_19655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (4))){
var inst_19613 = (state_19631[(7)]);
var inst_19613__$1 = (state_19631[(2)]);
var inst_19614 = (inst_19613__$1 == null);
var state_19631__$1 = (function (){var statearr_19635 = state_19631;
(statearr_19635[(7)] = inst_19613__$1);

return statearr_19635;
})();
if(cljs.core.truth_(inst_19614)){
var statearr_19636_19656 = state_19631__$1;
(statearr_19636_19656[(1)] = (5));

} else {
var statearr_19637_19657 = state_19631__$1;
(statearr_19637_19657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (6))){
var inst_19613 = (state_19631[(7)]);
var inst_19618 = p.call(null,inst_19613);
var state_19631__$1 = state_19631;
if(cljs.core.truth_(inst_19618)){
var statearr_19638_19658 = state_19631__$1;
(statearr_19638_19658[(1)] = (8));

} else {
var statearr_19639_19659 = state_19631__$1;
(statearr_19639_19659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (3))){
var inst_19629 = (state_19631[(2)]);
var state_19631__$1 = state_19631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19631__$1,inst_19629);
} else {
if((state_val_19632 === (2))){
var state_19631__$1 = state_19631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19631__$1,(4),ch);
} else {
if((state_val_19632 === (11))){
var inst_19621 = (state_19631[(2)]);
var state_19631__$1 = state_19631;
var statearr_19640_19660 = state_19631__$1;
(statearr_19640_19660[(2)] = inst_19621);

(statearr_19640_19660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (9))){
var state_19631__$1 = state_19631;
var statearr_19641_19661 = state_19631__$1;
(statearr_19641_19661[(2)] = null);

(statearr_19641_19661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (5))){
var inst_19616 = cljs.core.async.close_BANG_.call(null,out);
var state_19631__$1 = state_19631;
var statearr_19642_19662 = state_19631__$1;
(statearr_19642_19662[(2)] = inst_19616);

(statearr_19642_19662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (10))){
var inst_19624 = (state_19631[(2)]);
var state_19631__$1 = (function (){var statearr_19643 = state_19631;
(statearr_19643[(8)] = inst_19624);

return statearr_19643;
})();
var statearr_19644_19663 = state_19631__$1;
(statearr_19644_19663[(2)] = null);

(statearr_19644_19663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (8))){
var inst_19613 = (state_19631[(7)]);
var state_19631__$1 = state_19631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19631__$1,(11),out,inst_19613);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13254__auto___19653,out))
;
return ((function (switch__13192__auto__,c__13254__auto___19653,out){
return (function() {
var cljs$core$async$state_machine__13193__auto__ = null;
var cljs$core$async$state_machine__13193__auto____0 = (function (){
var statearr_19648 = [null,null,null,null,null,null,null,null,null];
(statearr_19648[(0)] = cljs$core$async$state_machine__13193__auto__);

(statearr_19648[(1)] = (1));

return statearr_19648;
});
var cljs$core$async$state_machine__13193__auto____1 = (function (state_19631){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_19631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e19649){if((e19649 instanceof Object)){
var ex__13196__auto__ = e19649;
var statearr_19650_19664 = state_19631;
(statearr_19650_19664[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19665 = state_19631;
state_19631 = G__19665;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$state_machine__13193__auto__ = function(state_19631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13193__auto____1.call(this,state_19631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13193__auto____0;
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13193__auto____1;
return cljs$core$async$state_machine__13193__auto__;
})()
;})(switch__13192__auto__,c__13254__auto___19653,out))
})();
var state__13256__auto__ = (function (){var statearr_19651 = f__13255__auto__.call(null);
(statearr_19651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto___19653);

return statearr_19651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(c__13254__auto___19653,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__19667 = arguments.length;
switch (G__19667) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13254__auto__){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (c__13254__auto__){
return (function (state_19834){
var state_val_19835 = (state_19834[(1)]);
if((state_val_19835 === (7))){
var inst_19830 = (state_19834[(2)]);
var state_19834__$1 = state_19834;
var statearr_19836_19877 = state_19834__$1;
(statearr_19836_19877[(2)] = inst_19830);

(statearr_19836_19877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19835 === (20))){
var inst_19800 = (state_19834[(7)]);
var inst_19811 = (state_19834[(2)]);
var inst_19812 = cljs.core.next.call(null,inst_19800);
var inst_19786 = inst_19812;
var inst_19787 = null;
var inst_19788 = (0);
var inst_19789 = (0);
var state_19834__$1 = (function (){var statearr_19837 = state_19834;
(statearr_19837[(8)] = inst_19788);

(statearr_19837[(9)] = inst_19787);

(statearr_19837[(10)] = inst_19786);

(statearr_19837[(11)] = inst_19789);

(statearr_19837[(12)] = inst_19811);

return statearr_19837;
})();
var statearr_19838_19878 = state_19834__$1;
(statearr_19838_19878[(2)] = null);

(statearr_19838_19878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19835 === (1))){
var state_19834__$1 = state_19834;
var statearr_19839_19879 = state_19834__$1;
(statearr_19839_19879[(2)] = null);

(statearr_19839_19879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19835 === (4))){
var inst_19775 = (state_19834[(13)]);
var inst_19775__$1 = (state_19834[(2)]);
var inst_19776 = (inst_19775__$1 == null);
var state_19834__$1 = (function (){var statearr_19840 = state_19834;
(statearr_19840[(13)] = inst_19775__$1);

return statearr_19840;
})();
if(cljs.core.truth_(inst_19776)){
var statearr_19841_19880 = state_19834__$1;
(statearr_19841_19880[(1)] = (5));

} else {
var statearr_19842_19881 = state_19834__$1;
(statearr_19842_19881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19835 === (15))){
var state_19834__$1 = state_19834;
var statearr_19846_19882 = state_19834__$1;
(statearr_19846_19882[(2)] = null);

(statearr_19846_19882[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19835 === (21))){
var state_19834__$1 = state_19834;
var statearr_19847_19883 = state_19834__$1;
(statearr_19847_19883[(2)] = null);

(statearr_19847_19883[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19835 === (13))){
var inst_19788 = (state_19834[(8)]);
var inst_19787 = (state_19834[(9)]);
var inst_19786 = (state_19834[(10)]);
var inst_19789 = (state_19834[(11)]);
var inst_19796 = (state_19834[(2)]);
var inst_19797 = (inst_19789 + (1));
var tmp19843 = inst_19788;
var tmp19844 = inst_19787;
var tmp19845 = inst_19786;
var inst_19786__$1 = tmp19845;
var inst_19787__$1 = tmp19844;
var inst_19788__$1 = tmp19843;
var inst_19789__$1 = inst_19797;
var state_19834__$1 = (function (){var statearr_19848 = state_19834;
(statearr_19848[(8)] = inst_19788__$1);

(statearr_19848[(9)] = inst_19787__$1);

(statearr_19848[(14)] = inst_19796);

(statearr_19848[(10)] = inst_19786__$1);

(statearr_19848[(11)] = inst_19789__$1);

return statearr_19848;
})();
var statearr_19849_19884 = state_19834__$1;
(statearr_19849_19884[(2)] = null);

(statearr_19849_19884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19835 === (22))){
var state_19834__$1 = state_19834;
var statearr_19850_19885 = state_19834__$1;
(statearr_19850_19885[(2)] = null);

(statearr_19850_19885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19835 === (6))){
var inst_19775 = (state_19834[(13)]);
var inst_19784 = f.call(null,inst_19775);
var inst_19785 = cljs.core.seq.call(null,inst_19784);
var inst_19786 = inst_19785;
var inst_19787 = null;
var inst_19788 = (0);
var inst_19789 = (0);
var state_19834__$1 = (function (){var statearr_19851 = state_19834;
(statearr_19851[(8)] = inst_19788);

(statearr_19851[(9)] = inst_19787);

(statearr_19851[(10)] = inst_19786);

(statearr_19851[(11)] = inst_19789);

return statearr_19851;
})();
var statearr_19852_19886 = state_19834__$1;
(statearr_19852_19886[(2)] = null);

(statearr_19852_19886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19835 === (17))){
var inst_19800 = (state_19834[(7)]);
var inst_19804 = cljs.core.chunk_first.call(null,inst_19800);
var inst_19805 = cljs.core.chunk_rest.call(null,inst_19800);
var inst_19806 = cljs.core.count.call(null,inst_19804);
var inst_19786 = inst_19805;
var inst_19787 = inst_19804;
var inst_19788 = inst_19806;
var inst_19789 = (0);
var state_19834__$1 = (function (){var statearr_19853 = state_19834;
(statearr_19853[(8)] = inst_19788);

(statearr_19853[(9)] = inst_19787);

(statearr_19853[(10)] = inst_19786);

(statearr_19853[(11)] = inst_19789);

return statearr_19853;
})();
var statearr_19854_19887 = state_19834__$1;
(statearr_19854_19887[(2)] = null);

(statearr_19854_19887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19835 === (3))){
var inst_19832 = (state_19834[(2)]);
var state_19834__$1 = state_19834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19834__$1,inst_19832);
} else {
if((state_val_19835 === (12))){
var inst_19820 = (state_19834[(2)]);
var state_19834__$1 = state_19834;
var statearr_19855_19888 = state_19834__$1;
(statearr_19855_19888[(2)] = inst_19820);

(statearr_19855_19888[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19835 === (2))){
var state_19834__$1 = state_19834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19834__$1,(4),in$);
} else {
if((state_val_19835 === (23))){
var inst_19828 = (state_19834[(2)]);
var state_19834__$1 = state_19834;
var statearr_19856_19889 = state_19834__$1;
(statearr_19856_19889[(2)] = inst_19828);

(statearr_19856_19889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19835 === (19))){
var inst_19815 = (state_19834[(2)]);
var state_19834__$1 = state_19834;
var statearr_19857_19890 = state_19834__$1;
(statearr_19857_19890[(2)] = inst_19815);

(statearr_19857_19890[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19835 === (11))){
var inst_19800 = (state_19834[(7)]);
var inst_19786 = (state_19834[(10)]);
var inst_19800__$1 = cljs.core.seq.call(null,inst_19786);
var state_19834__$1 = (function (){var statearr_19858 = state_19834;
(statearr_19858[(7)] = inst_19800__$1);

return statearr_19858;
})();
if(inst_19800__$1){
var statearr_19859_19891 = state_19834__$1;
(statearr_19859_19891[(1)] = (14));

} else {
var statearr_19860_19892 = state_19834__$1;
(statearr_19860_19892[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19835 === (9))){
var inst_19822 = (state_19834[(2)]);
var inst_19823 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19834__$1 = (function (){var statearr_19861 = state_19834;
(statearr_19861[(15)] = inst_19822);

return statearr_19861;
})();
if(cljs.core.truth_(inst_19823)){
var statearr_19862_19893 = state_19834__$1;
(statearr_19862_19893[(1)] = (21));

} else {
var statearr_19863_19894 = state_19834__$1;
(statearr_19863_19894[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19835 === (5))){
var inst_19778 = cljs.core.async.close_BANG_.call(null,out);
var state_19834__$1 = state_19834;
var statearr_19864_19895 = state_19834__$1;
(statearr_19864_19895[(2)] = inst_19778);

(statearr_19864_19895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19835 === (14))){
var inst_19800 = (state_19834[(7)]);
var inst_19802 = cljs.core.chunked_seq_QMARK_.call(null,inst_19800);
var state_19834__$1 = state_19834;
if(inst_19802){
var statearr_19865_19896 = state_19834__$1;
(statearr_19865_19896[(1)] = (17));

} else {
var statearr_19866_19897 = state_19834__$1;
(statearr_19866_19897[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19835 === (16))){
var inst_19818 = (state_19834[(2)]);
var state_19834__$1 = state_19834;
var statearr_19867_19898 = state_19834__$1;
(statearr_19867_19898[(2)] = inst_19818);

(statearr_19867_19898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19835 === (10))){
var inst_19787 = (state_19834[(9)]);
var inst_19789 = (state_19834[(11)]);
var inst_19794 = cljs.core._nth.call(null,inst_19787,inst_19789);
var state_19834__$1 = state_19834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19834__$1,(13),out,inst_19794);
} else {
if((state_val_19835 === (18))){
var inst_19800 = (state_19834[(7)]);
var inst_19809 = cljs.core.first.call(null,inst_19800);
var state_19834__$1 = state_19834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19834__$1,(20),out,inst_19809);
} else {
if((state_val_19835 === (8))){
var inst_19788 = (state_19834[(8)]);
var inst_19789 = (state_19834[(11)]);
var inst_19791 = (inst_19789 < inst_19788);
var inst_19792 = inst_19791;
var state_19834__$1 = state_19834;
if(cljs.core.truth_(inst_19792)){
var statearr_19868_19899 = state_19834__$1;
(statearr_19868_19899[(1)] = (10));

} else {
var statearr_19869_19900 = state_19834__$1;
(statearr_19869_19900[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13254__auto__))
;
return ((function (switch__13192__auto__,c__13254__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13193__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13193__auto____0 = (function (){
var statearr_19873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19873[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13193__auto__);

(statearr_19873[(1)] = (1));

return statearr_19873;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13193__auto____1 = (function (state_19834){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_19834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e19874){if((e19874 instanceof Object)){
var ex__13196__auto__ = e19874;
var statearr_19875_19901 = state_19834;
(statearr_19875_19901[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19902 = state_19834;
state_19834 = G__19902;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13193__auto__ = function(state_19834){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13193__auto____1.call(this,state_19834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13193__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13193__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13193__auto__;
})()
;})(switch__13192__auto__,c__13254__auto__))
})();
var state__13256__auto__ = (function (){var statearr_19876 = f__13255__auto__.call(null);
(statearr_19876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto__);

return statearr_19876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(c__13254__auto__))
);

return c__13254__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__19904 = arguments.length;
switch (G__19904) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__19907 = arguments.length;
switch (G__19907) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__19910 = arguments.length;
switch (G__19910) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13254__auto___19960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13254__auto___19960,out){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (c__13254__auto___19960,out){
return (function (state_19934){
var state_val_19935 = (state_19934[(1)]);
if((state_val_19935 === (7))){
var inst_19929 = (state_19934[(2)]);
var state_19934__$1 = state_19934;
var statearr_19936_19961 = state_19934__$1;
(statearr_19936_19961[(2)] = inst_19929);

(statearr_19936_19961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (1))){
var inst_19911 = null;
var state_19934__$1 = (function (){var statearr_19937 = state_19934;
(statearr_19937[(7)] = inst_19911);

return statearr_19937;
})();
var statearr_19938_19962 = state_19934__$1;
(statearr_19938_19962[(2)] = null);

(statearr_19938_19962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (4))){
var inst_19914 = (state_19934[(8)]);
var inst_19914__$1 = (state_19934[(2)]);
var inst_19915 = (inst_19914__$1 == null);
var inst_19916 = cljs.core.not.call(null,inst_19915);
var state_19934__$1 = (function (){var statearr_19939 = state_19934;
(statearr_19939[(8)] = inst_19914__$1);

return statearr_19939;
})();
if(inst_19916){
var statearr_19940_19963 = state_19934__$1;
(statearr_19940_19963[(1)] = (5));

} else {
var statearr_19941_19964 = state_19934__$1;
(statearr_19941_19964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (6))){
var state_19934__$1 = state_19934;
var statearr_19942_19965 = state_19934__$1;
(statearr_19942_19965[(2)] = null);

(statearr_19942_19965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (3))){
var inst_19931 = (state_19934[(2)]);
var inst_19932 = cljs.core.async.close_BANG_.call(null,out);
var state_19934__$1 = (function (){var statearr_19943 = state_19934;
(statearr_19943[(9)] = inst_19931);

return statearr_19943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19934__$1,inst_19932);
} else {
if((state_val_19935 === (2))){
var state_19934__$1 = state_19934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19934__$1,(4),ch);
} else {
if((state_val_19935 === (11))){
var inst_19914 = (state_19934[(8)]);
var inst_19923 = (state_19934[(2)]);
var inst_19911 = inst_19914;
var state_19934__$1 = (function (){var statearr_19944 = state_19934;
(statearr_19944[(10)] = inst_19923);

(statearr_19944[(7)] = inst_19911);

return statearr_19944;
})();
var statearr_19945_19966 = state_19934__$1;
(statearr_19945_19966[(2)] = null);

(statearr_19945_19966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (9))){
var inst_19914 = (state_19934[(8)]);
var state_19934__$1 = state_19934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19934__$1,(11),out,inst_19914);
} else {
if((state_val_19935 === (5))){
var inst_19911 = (state_19934[(7)]);
var inst_19914 = (state_19934[(8)]);
var inst_19918 = cljs.core._EQ_.call(null,inst_19914,inst_19911);
var state_19934__$1 = state_19934;
if(inst_19918){
var statearr_19947_19967 = state_19934__$1;
(statearr_19947_19967[(1)] = (8));

} else {
var statearr_19948_19968 = state_19934__$1;
(statearr_19948_19968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (10))){
var inst_19926 = (state_19934[(2)]);
var state_19934__$1 = state_19934;
var statearr_19949_19969 = state_19934__$1;
(statearr_19949_19969[(2)] = inst_19926);

(statearr_19949_19969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (8))){
var inst_19911 = (state_19934[(7)]);
var tmp19946 = inst_19911;
var inst_19911__$1 = tmp19946;
var state_19934__$1 = (function (){var statearr_19950 = state_19934;
(statearr_19950[(7)] = inst_19911__$1);

return statearr_19950;
})();
var statearr_19951_19970 = state_19934__$1;
(statearr_19951_19970[(2)] = null);

(statearr_19951_19970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13254__auto___19960,out))
;
return ((function (switch__13192__auto__,c__13254__auto___19960,out){
return (function() {
var cljs$core$async$state_machine__13193__auto__ = null;
var cljs$core$async$state_machine__13193__auto____0 = (function (){
var statearr_19955 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19955[(0)] = cljs$core$async$state_machine__13193__auto__);

(statearr_19955[(1)] = (1));

return statearr_19955;
});
var cljs$core$async$state_machine__13193__auto____1 = (function (state_19934){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_19934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e19956){if((e19956 instanceof Object)){
var ex__13196__auto__ = e19956;
var statearr_19957_19971 = state_19934;
(statearr_19957_19971[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19972 = state_19934;
state_19934 = G__19972;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$state_machine__13193__auto__ = function(state_19934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13193__auto____1.call(this,state_19934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13193__auto____0;
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13193__auto____1;
return cljs$core$async$state_machine__13193__auto__;
})()
;})(switch__13192__auto__,c__13254__auto___19960,out))
})();
var state__13256__auto__ = (function (){var statearr_19958 = f__13255__auto__.call(null);
(statearr_19958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto___19960);

return statearr_19958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(c__13254__auto___19960,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__19974 = arguments.length;
switch (G__19974) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13254__auto___20043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13254__auto___20043,out){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (c__13254__auto___20043,out){
return (function (state_20012){
var state_val_20013 = (state_20012[(1)]);
if((state_val_20013 === (7))){
var inst_20008 = (state_20012[(2)]);
var state_20012__$1 = state_20012;
var statearr_20014_20044 = state_20012__$1;
(statearr_20014_20044[(2)] = inst_20008);

(statearr_20014_20044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (1))){
var inst_19975 = (new Array(n));
var inst_19976 = inst_19975;
var inst_19977 = (0);
var state_20012__$1 = (function (){var statearr_20015 = state_20012;
(statearr_20015[(7)] = inst_19976);

(statearr_20015[(8)] = inst_19977);

return statearr_20015;
})();
var statearr_20016_20045 = state_20012__$1;
(statearr_20016_20045[(2)] = null);

(statearr_20016_20045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (4))){
var inst_19980 = (state_20012[(9)]);
var inst_19980__$1 = (state_20012[(2)]);
var inst_19981 = (inst_19980__$1 == null);
var inst_19982 = cljs.core.not.call(null,inst_19981);
var state_20012__$1 = (function (){var statearr_20017 = state_20012;
(statearr_20017[(9)] = inst_19980__$1);

return statearr_20017;
})();
if(inst_19982){
var statearr_20018_20046 = state_20012__$1;
(statearr_20018_20046[(1)] = (5));

} else {
var statearr_20019_20047 = state_20012__$1;
(statearr_20019_20047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (15))){
var inst_20002 = (state_20012[(2)]);
var state_20012__$1 = state_20012;
var statearr_20020_20048 = state_20012__$1;
(statearr_20020_20048[(2)] = inst_20002);

(statearr_20020_20048[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (13))){
var state_20012__$1 = state_20012;
var statearr_20021_20049 = state_20012__$1;
(statearr_20021_20049[(2)] = null);

(statearr_20021_20049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (6))){
var inst_19977 = (state_20012[(8)]);
var inst_19998 = (inst_19977 > (0));
var state_20012__$1 = state_20012;
if(cljs.core.truth_(inst_19998)){
var statearr_20022_20050 = state_20012__$1;
(statearr_20022_20050[(1)] = (12));

} else {
var statearr_20023_20051 = state_20012__$1;
(statearr_20023_20051[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (3))){
var inst_20010 = (state_20012[(2)]);
var state_20012__$1 = state_20012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20012__$1,inst_20010);
} else {
if((state_val_20013 === (12))){
var inst_19976 = (state_20012[(7)]);
var inst_20000 = cljs.core.vec.call(null,inst_19976);
var state_20012__$1 = state_20012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20012__$1,(15),out,inst_20000);
} else {
if((state_val_20013 === (2))){
var state_20012__$1 = state_20012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20012__$1,(4),ch);
} else {
if((state_val_20013 === (11))){
var inst_19992 = (state_20012[(2)]);
var inst_19993 = (new Array(n));
var inst_19976 = inst_19993;
var inst_19977 = (0);
var state_20012__$1 = (function (){var statearr_20024 = state_20012;
(statearr_20024[(10)] = inst_19992);

(statearr_20024[(7)] = inst_19976);

(statearr_20024[(8)] = inst_19977);

return statearr_20024;
})();
var statearr_20025_20052 = state_20012__$1;
(statearr_20025_20052[(2)] = null);

(statearr_20025_20052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (9))){
var inst_19976 = (state_20012[(7)]);
var inst_19990 = cljs.core.vec.call(null,inst_19976);
var state_20012__$1 = state_20012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20012__$1,(11),out,inst_19990);
} else {
if((state_val_20013 === (5))){
var inst_19985 = (state_20012[(11)]);
var inst_19980 = (state_20012[(9)]);
var inst_19976 = (state_20012[(7)]);
var inst_19977 = (state_20012[(8)]);
var inst_19984 = (inst_19976[inst_19977] = inst_19980);
var inst_19985__$1 = (inst_19977 + (1));
var inst_19986 = (inst_19985__$1 < n);
var state_20012__$1 = (function (){var statearr_20026 = state_20012;
(statearr_20026[(11)] = inst_19985__$1);

(statearr_20026[(12)] = inst_19984);

return statearr_20026;
})();
if(cljs.core.truth_(inst_19986)){
var statearr_20027_20053 = state_20012__$1;
(statearr_20027_20053[(1)] = (8));

} else {
var statearr_20028_20054 = state_20012__$1;
(statearr_20028_20054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (14))){
var inst_20005 = (state_20012[(2)]);
var inst_20006 = cljs.core.async.close_BANG_.call(null,out);
var state_20012__$1 = (function (){var statearr_20030 = state_20012;
(statearr_20030[(13)] = inst_20005);

return statearr_20030;
})();
var statearr_20031_20055 = state_20012__$1;
(statearr_20031_20055[(2)] = inst_20006);

(statearr_20031_20055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (10))){
var inst_19996 = (state_20012[(2)]);
var state_20012__$1 = state_20012;
var statearr_20032_20056 = state_20012__$1;
(statearr_20032_20056[(2)] = inst_19996);

(statearr_20032_20056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (8))){
var inst_19985 = (state_20012[(11)]);
var inst_19976 = (state_20012[(7)]);
var tmp20029 = inst_19976;
var inst_19976__$1 = tmp20029;
var inst_19977 = inst_19985;
var state_20012__$1 = (function (){var statearr_20033 = state_20012;
(statearr_20033[(7)] = inst_19976__$1);

(statearr_20033[(8)] = inst_19977);

return statearr_20033;
})();
var statearr_20034_20057 = state_20012__$1;
(statearr_20034_20057[(2)] = null);

(statearr_20034_20057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13254__auto___20043,out))
;
return ((function (switch__13192__auto__,c__13254__auto___20043,out){
return (function() {
var cljs$core$async$state_machine__13193__auto__ = null;
var cljs$core$async$state_machine__13193__auto____0 = (function (){
var statearr_20038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20038[(0)] = cljs$core$async$state_machine__13193__auto__);

(statearr_20038[(1)] = (1));

return statearr_20038;
});
var cljs$core$async$state_machine__13193__auto____1 = (function (state_20012){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_20012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e20039){if((e20039 instanceof Object)){
var ex__13196__auto__ = e20039;
var statearr_20040_20058 = state_20012;
(statearr_20040_20058[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20059 = state_20012;
state_20012 = G__20059;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$state_machine__13193__auto__ = function(state_20012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13193__auto____1.call(this,state_20012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13193__auto____0;
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13193__auto____1;
return cljs$core$async$state_machine__13193__auto__;
})()
;})(switch__13192__auto__,c__13254__auto___20043,out))
})();
var state__13256__auto__ = (function (){var statearr_20041 = f__13255__auto__.call(null);
(statearr_20041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto___20043);

return statearr_20041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(c__13254__auto___20043,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__20061 = arguments.length;
switch (G__20061) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13254__auto___20134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13254__auto___20134,out){
return (function (){
var f__13255__auto__ = (function (){var switch__13192__auto__ = ((function (c__13254__auto___20134,out){
return (function (state_20103){
var state_val_20104 = (state_20103[(1)]);
if((state_val_20104 === (7))){
var inst_20099 = (state_20103[(2)]);
var state_20103__$1 = state_20103;
var statearr_20105_20135 = state_20103__$1;
(statearr_20105_20135[(2)] = inst_20099);

(statearr_20105_20135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (1))){
var inst_20062 = [];
var inst_20063 = inst_20062;
var inst_20064 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20103__$1 = (function (){var statearr_20106 = state_20103;
(statearr_20106[(7)] = inst_20063);

(statearr_20106[(8)] = inst_20064);

return statearr_20106;
})();
var statearr_20107_20136 = state_20103__$1;
(statearr_20107_20136[(2)] = null);

(statearr_20107_20136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (4))){
var inst_20067 = (state_20103[(9)]);
var inst_20067__$1 = (state_20103[(2)]);
var inst_20068 = (inst_20067__$1 == null);
var inst_20069 = cljs.core.not.call(null,inst_20068);
var state_20103__$1 = (function (){var statearr_20108 = state_20103;
(statearr_20108[(9)] = inst_20067__$1);

return statearr_20108;
})();
if(inst_20069){
var statearr_20109_20137 = state_20103__$1;
(statearr_20109_20137[(1)] = (5));

} else {
var statearr_20110_20138 = state_20103__$1;
(statearr_20110_20138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (15))){
var inst_20093 = (state_20103[(2)]);
var state_20103__$1 = state_20103;
var statearr_20111_20139 = state_20103__$1;
(statearr_20111_20139[(2)] = inst_20093);

(statearr_20111_20139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (13))){
var state_20103__$1 = state_20103;
var statearr_20112_20140 = state_20103__$1;
(statearr_20112_20140[(2)] = null);

(statearr_20112_20140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (6))){
var inst_20063 = (state_20103[(7)]);
var inst_20088 = inst_20063.length;
var inst_20089 = (inst_20088 > (0));
var state_20103__$1 = state_20103;
if(cljs.core.truth_(inst_20089)){
var statearr_20113_20141 = state_20103__$1;
(statearr_20113_20141[(1)] = (12));

} else {
var statearr_20114_20142 = state_20103__$1;
(statearr_20114_20142[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (3))){
var inst_20101 = (state_20103[(2)]);
var state_20103__$1 = state_20103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20103__$1,inst_20101);
} else {
if((state_val_20104 === (12))){
var inst_20063 = (state_20103[(7)]);
var inst_20091 = cljs.core.vec.call(null,inst_20063);
var state_20103__$1 = state_20103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20103__$1,(15),out,inst_20091);
} else {
if((state_val_20104 === (2))){
var state_20103__$1 = state_20103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20103__$1,(4),ch);
} else {
if((state_val_20104 === (11))){
var inst_20067 = (state_20103[(9)]);
var inst_20071 = (state_20103[(10)]);
var inst_20081 = (state_20103[(2)]);
var inst_20082 = [];
var inst_20083 = inst_20082.push(inst_20067);
var inst_20063 = inst_20082;
var inst_20064 = inst_20071;
var state_20103__$1 = (function (){var statearr_20115 = state_20103;
(statearr_20115[(11)] = inst_20083);

(statearr_20115[(7)] = inst_20063);

(statearr_20115[(12)] = inst_20081);

(statearr_20115[(8)] = inst_20064);

return statearr_20115;
})();
var statearr_20116_20143 = state_20103__$1;
(statearr_20116_20143[(2)] = null);

(statearr_20116_20143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (9))){
var inst_20063 = (state_20103[(7)]);
var inst_20079 = cljs.core.vec.call(null,inst_20063);
var state_20103__$1 = state_20103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20103__$1,(11),out,inst_20079);
} else {
if((state_val_20104 === (5))){
var inst_20067 = (state_20103[(9)]);
var inst_20071 = (state_20103[(10)]);
var inst_20064 = (state_20103[(8)]);
var inst_20071__$1 = f.call(null,inst_20067);
var inst_20072 = cljs.core._EQ_.call(null,inst_20071__$1,inst_20064);
var inst_20073 = cljs.core.keyword_identical_QMARK_.call(null,inst_20064,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20074 = (inst_20072) || (inst_20073);
var state_20103__$1 = (function (){var statearr_20117 = state_20103;
(statearr_20117[(10)] = inst_20071__$1);

return statearr_20117;
})();
if(cljs.core.truth_(inst_20074)){
var statearr_20118_20144 = state_20103__$1;
(statearr_20118_20144[(1)] = (8));

} else {
var statearr_20119_20145 = state_20103__$1;
(statearr_20119_20145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (14))){
var inst_20096 = (state_20103[(2)]);
var inst_20097 = cljs.core.async.close_BANG_.call(null,out);
var state_20103__$1 = (function (){var statearr_20121 = state_20103;
(statearr_20121[(13)] = inst_20096);

return statearr_20121;
})();
var statearr_20122_20146 = state_20103__$1;
(statearr_20122_20146[(2)] = inst_20097);

(statearr_20122_20146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (10))){
var inst_20086 = (state_20103[(2)]);
var state_20103__$1 = state_20103;
var statearr_20123_20147 = state_20103__$1;
(statearr_20123_20147[(2)] = inst_20086);

(statearr_20123_20147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (8))){
var inst_20063 = (state_20103[(7)]);
var inst_20067 = (state_20103[(9)]);
var inst_20071 = (state_20103[(10)]);
var inst_20076 = inst_20063.push(inst_20067);
var tmp20120 = inst_20063;
var inst_20063__$1 = tmp20120;
var inst_20064 = inst_20071;
var state_20103__$1 = (function (){var statearr_20124 = state_20103;
(statearr_20124[(7)] = inst_20063__$1);

(statearr_20124[(14)] = inst_20076);

(statearr_20124[(8)] = inst_20064);

return statearr_20124;
})();
var statearr_20125_20148 = state_20103__$1;
(statearr_20125_20148[(2)] = null);

(statearr_20125_20148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13254__auto___20134,out))
;
return ((function (switch__13192__auto__,c__13254__auto___20134,out){
return (function() {
var cljs$core$async$state_machine__13193__auto__ = null;
var cljs$core$async$state_machine__13193__auto____0 = (function (){
var statearr_20129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20129[(0)] = cljs$core$async$state_machine__13193__auto__);

(statearr_20129[(1)] = (1));

return statearr_20129;
});
var cljs$core$async$state_machine__13193__auto____1 = (function (state_20103){
while(true){
var ret_value__13194__auto__ = (function (){try{while(true){
var result__13195__auto__ = switch__13192__auto__.call(null,state_20103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13195__auto__;
}
break;
}
}catch (e20130){if((e20130 instanceof Object)){
var ex__13196__auto__ = e20130;
var statearr_20131_20149 = state_20103;
(statearr_20131_20149[(5)] = ex__13196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20150 = state_20103;
state_20103 = G__20150;
continue;
} else {
return ret_value__13194__auto__;
}
break;
}
});
cljs$core$async$state_machine__13193__auto__ = function(state_20103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13193__auto____1.call(this,state_20103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13193__auto____0;
cljs$core$async$state_machine__13193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13193__auto____1;
return cljs$core$async$state_machine__13193__auto__;
})()
;})(switch__13192__auto__,c__13254__auto___20134,out))
})();
var state__13256__auto__ = (function (){var statearr_20132 = f__13255__auto__.call(null);
(statearr_20132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13254__auto___20134);

return statearr_20132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13256__auto__);
});})(c__13254__auto___20134,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map