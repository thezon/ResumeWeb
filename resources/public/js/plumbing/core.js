// Compiled by ClojureScript 0.0-3211 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
 * Updates the value in map m at k with the function f.
 * 
 * Like update-in, but for updating a single top-level key.
 * Any additional args will be passed to f after the value.
 * 
 * WARNING As of Clojure 1.7 this function exists in clojure.core and
 * will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(){
var G__20633 = arguments.length;
switch (G__20633) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(5)),(0)));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5010__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq20626){
var G__20627 = cljs.core.first.call(null,seq20626);
var seq20626__$1 = cljs.core.next.call(null,seq20626);
var G__20628 = cljs.core.first.call(null,seq20626__$1);
var seq20626__$2 = cljs.core.next.call(null,seq20626__$1);
var G__20629 = cljs.core.first.call(null,seq20626__$2);
var seq20626__$3 = cljs.core.next.call(null,seq20626__$2);
var G__20630 = cljs.core.first.call(null,seq20626__$3);
var seq20626__$4 = cljs.core.next.call(null,seq20626__$3);
var G__20631 = cljs.core.first.call(null,seq20626__$4);
var seq20626__$5 = cljs.core.next.call(null,seq20626__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__20627,G__20628,G__20629,G__20630,G__20631,seq20626__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);
/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__11586__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__20643_20649 = cljs.core.seq.call(null,m);
var chunk__20644_20650 = null;
var count__20645_20651 = (0);
var i__20646_20652 = (0);
while(true){
if((i__20646_20652 < count__20645_20651)){
var vec__20647_20653 = cljs.core._nth.call(null,chunk__20644_20650,i__20646_20652);
var k_20654 = cljs.core.nth.call(null,vec__20647_20653,(0),null);
var v_20655 = cljs.core.nth.call(null,vec__20647_20653,(1),null);
var m20642_20656 = cljs.core.deref.call(null,m_atom__11586__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11586__auto__,cljs.core.assoc_BANG_.call(null,m20642_20656,k_20654,f.call(null,v_20655)));

var G__20657 = seq__20643_20649;
var G__20658 = chunk__20644_20650;
var G__20659 = count__20645_20651;
var G__20660 = (i__20646_20652 + (1));
seq__20643_20649 = G__20657;
chunk__20644_20650 = G__20658;
count__20645_20651 = G__20659;
i__20646_20652 = G__20660;
continue;
} else {
var temp__4126__auto___20661 = cljs.core.seq.call(null,seq__20643_20649);
if(temp__4126__auto___20661){
var seq__20643_20662__$1 = temp__4126__auto___20661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20643_20662__$1)){
var c__4744__auto___20663 = cljs.core.chunk_first.call(null,seq__20643_20662__$1);
var G__20664 = cljs.core.chunk_rest.call(null,seq__20643_20662__$1);
var G__20665 = c__4744__auto___20663;
var G__20666 = cljs.core.count.call(null,c__4744__auto___20663);
var G__20667 = (0);
seq__20643_20649 = G__20664;
chunk__20644_20650 = G__20665;
count__20645_20651 = G__20666;
i__20646_20652 = G__20667;
continue;
} else {
var vec__20648_20668 = cljs.core.first.call(null,seq__20643_20662__$1);
var k_20669 = cljs.core.nth.call(null,vec__20648_20668,(0),null);
var v_20670 = cljs.core.nth.call(null,vec__20648_20668,(1),null);
var m20642_20671 = cljs.core.deref.call(null,m_atom__11586__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11586__auto__,cljs.core.assoc_BANG_.call(null,m20642_20671,k_20669,f.call(null,v_20670)));

var G__20672 = cljs.core.next.call(null,seq__20643_20662__$1);
var G__20673 = null;
var G__20674 = (0);
var G__20675 = (0);
seq__20643_20649 = G__20672;
chunk__20644_20650 = G__20673;
count__20645_20651 = G__20674;
i__20646_20652 = G__20675;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__11586__auto__));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__11586__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__20684_20690 = cljs.core.seq.call(null,m);
var chunk__20685_20691 = null;
var count__20686_20692 = (0);
var i__20687_20693 = (0);
while(true){
if((i__20687_20693 < count__20686_20692)){
var vec__20688_20694 = cljs.core._nth.call(null,chunk__20685_20691,i__20687_20693);
var k_20695 = cljs.core.nth.call(null,vec__20688_20694,(0),null);
var v_20696 = cljs.core.nth.call(null,vec__20688_20694,(1),null);
var m20683_20697 = cljs.core.deref.call(null,m_atom__11586__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11586__auto__,cljs.core.assoc_BANG_.call(null,m20683_20697,f.call(null,k_20695),v_20696));

var G__20698 = seq__20684_20690;
var G__20699 = chunk__20685_20691;
var G__20700 = count__20686_20692;
var G__20701 = (i__20687_20693 + (1));
seq__20684_20690 = G__20698;
chunk__20685_20691 = G__20699;
count__20686_20692 = G__20700;
i__20687_20693 = G__20701;
continue;
} else {
var temp__4126__auto___20702 = cljs.core.seq.call(null,seq__20684_20690);
if(temp__4126__auto___20702){
var seq__20684_20703__$1 = temp__4126__auto___20702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20684_20703__$1)){
var c__4744__auto___20704 = cljs.core.chunk_first.call(null,seq__20684_20703__$1);
var G__20705 = cljs.core.chunk_rest.call(null,seq__20684_20703__$1);
var G__20706 = c__4744__auto___20704;
var G__20707 = cljs.core.count.call(null,c__4744__auto___20704);
var G__20708 = (0);
seq__20684_20690 = G__20705;
chunk__20685_20691 = G__20706;
count__20686_20692 = G__20707;
i__20687_20693 = G__20708;
continue;
} else {
var vec__20689_20709 = cljs.core.first.call(null,seq__20684_20703__$1);
var k_20710 = cljs.core.nth.call(null,vec__20689_20709,(0),null);
var v_20711 = cljs.core.nth.call(null,vec__20689_20709,(1),null);
var m20683_20712 = cljs.core.deref.call(null,m_atom__11586__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11586__auto__,cljs.core.assoc_BANG_.call(null,m20683_20712,f.call(null,k_20710),v_20711));

var G__20713 = cljs.core.next.call(null,seq__20684_20703__$1);
var G__20714 = null;
var G__20715 = (0);
var G__20716 = (0);
seq__20684_20690 = G__20713;
chunk__20685_20691 = G__20714;
count__20686_20692 = G__20715;
i__20687_20693 = G__20716;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__11586__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__11586__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__20723_20727 = cljs.core.seq.call(null,ks);
var chunk__20724_20728 = null;
var count__20725_20729 = (0);
var i__20726_20730 = (0);
while(true){
if((i__20726_20730 < count__20725_20729)){
var k_20731 = cljs.core._nth.call(null,chunk__20724_20728,i__20726_20730);
var m20722_20732 = cljs.core.deref.call(null,m_atom__11586__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11586__auto__,cljs.core.assoc_BANG_.call(null,m20722_20732,k_20731,f.call(null,k_20731)));

var G__20733 = seq__20723_20727;
var G__20734 = chunk__20724_20728;
var G__20735 = count__20725_20729;
var G__20736 = (i__20726_20730 + (1));
seq__20723_20727 = G__20733;
chunk__20724_20728 = G__20734;
count__20725_20729 = G__20735;
i__20726_20730 = G__20736;
continue;
} else {
var temp__4126__auto___20737 = cljs.core.seq.call(null,seq__20723_20727);
if(temp__4126__auto___20737){
var seq__20723_20738__$1 = temp__4126__auto___20737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20723_20738__$1)){
var c__4744__auto___20739 = cljs.core.chunk_first.call(null,seq__20723_20738__$1);
var G__20740 = cljs.core.chunk_rest.call(null,seq__20723_20738__$1);
var G__20741 = c__4744__auto___20739;
var G__20742 = cljs.core.count.call(null,c__4744__auto___20739);
var G__20743 = (0);
seq__20723_20727 = G__20740;
chunk__20724_20728 = G__20741;
count__20725_20729 = G__20742;
i__20726_20730 = G__20743;
continue;
} else {
var k_20744 = cljs.core.first.call(null,seq__20723_20738__$1);
var m20722_20745 = cljs.core.deref.call(null,m_atom__11586__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11586__auto__,cljs.core.assoc_BANG_.call(null,m20722_20745,k_20744,f.call(null,k_20744)));

var G__20746 = cljs.core.next.call(null,seq__20723_20738__$1);
var G__20747 = null;
var G__20748 = (0);
var G__20749 = (0);
seq__20723_20727 = G__20746;
chunk__20724_20728 = G__20747;
count__20725_20729 = G__20748;
i__20726_20730 = G__20749;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__11586__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__11586__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__20756_20760 = cljs.core.seq.call(null,vs);
var chunk__20757_20761 = null;
var count__20758_20762 = (0);
var i__20759_20763 = (0);
while(true){
if((i__20759_20763 < count__20758_20762)){
var v_20764 = cljs.core._nth.call(null,chunk__20757_20761,i__20759_20763);
var m20755_20765 = cljs.core.deref.call(null,m_atom__11586__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11586__auto__,cljs.core.assoc_BANG_.call(null,m20755_20765,f.call(null,v_20764),v_20764));

var G__20766 = seq__20756_20760;
var G__20767 = chunk__20757_20761;
var G__20768 = count__20758_20762;
var G__20769 = (i__20759_20763 + (1));
seq__20756_20760 = G__20766;
chunk__20757_20761 = G__20767;
count__20758_20762 = G__20768;
i__20759_20763 = G__20769;
continue;
} else {
var temp__4126__auto___20770 = cljs.core.seq.call(null,seq__20756_20760);
if(temp__4126__auto___20770){
var seq__20756_20771__$1 = temp__4126__auto___20770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20756_20771__$1)){
var c__4744__auto___20772 = cljs.core.chunk_first.call(null,seq__20756_20771__$1);
var G__20773 = cljs.core.chunk_rest.call(null,seq__20756_20771__$1);
var G__20774 = c__4744__auto___20772;
var G__20775 = cljs.core.count.call(null,c__4744__auto___20772);
var G__20776 = (0);
seq__20756_20760 = G__20773;
chunk__20757_20761 = G__20774;
count__20758_20762 = G__20775;
i__20759_20763 = G__20776;
continue;
} else {
var v_20777 = cljs.core.first.call(null,seq__20756_20771__$1);
var m20755_20778 = cljs.core.deref.call(null,m_atom__11586__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11586__auto__,cljs.core.assoc_BANG_.call(null,m20755_20778,f.call(null,v_20777),v_20777));

var G__20779 = cljs.core.next.call(null,seq__20756_20771__$1);
var G__20780 = null;
var G__20781 = (0);
var G__20782 = (0);
seq__20756_20760 = G__20779;
chunk__20757_20761 = G__20780;
count__20758_20762 = G__20781;
i__20759_20763 = G__20782;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__11586__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__20783){
var vec__20785 = p__20783;
var k = cljs.core.nth.call(null,vec__20785,(0),null);
var ks = cljs.core.nthnext.call(null,vec__20785,(1));
if(cljs.core.truth_(m)){
var temp__4124__auto__ = (function (){var and__3947__auto__ = ks;
if(cljs.core.truth_(and__3947__auto__)){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__3947__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var res = temp__4124__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__11586__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__20794_20800 = cljs.core.seq.call(null,x);
var chunk__20795_20801 = null;
var count__20796_20802 = (0);
var i__20797_20803 = (0);
while(true){
if((i__20797_20803 < count__20796_20802)){
var vec__20798_20804 = cljs.core._nth.call(null,chunk__20795_20801,i__20797_20803);
var k_20805 = cljs.core.nth.call(null,vec__20798_20804,(0),null);
var v_20806 = cljs.core.nth.call(null,vec__20798_20804,(1),null);
var m20793_20807 = cljs.core.deref.call(null,m_atom__11586__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11586__auto__,cljs.core.assoc_BANG_.call(null,m20793_20807,((typeof k_20805 === 'string')?cljs.core.keyword.call(null,k_20805):k_20805),plumbing$core$keywordize_map.call(null,v_20806)));

var G__20808 = seq__20794_20800;
var G__20809 = chunk__20795_20801;
var G__20810 = count__20796_20802;
var G__20811 = (i__20797_20803 + (1));
seq__20794_20800 = G__20808;
chunk__20795_20801 = G__20809;
count__20796_20802 = G__20810;
i__20797_20803 = G__20811;
continue;
} else {
var temp__4126__auto___20812 = cljs.core.seq.call(null,seq__20794_20800);
if(temp__4126__auto___20812){
var seq__20794_20813__$1 = temp__4126__auto___20812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20794_20813__$1)){
var c__4744__auto___20814 = cljs.core.chunk_first.call(null,seq__20794_20813__$1);
var G__20815 = cljs.core.chunk_rest.call(null,seq__20794_20813__$1);
var G__20816 = c__4744__auto___20814;
var G__20817 = cljs.core.count.call(null,c__4744__auto___20814);
var G__20818 = (0);
seq__20794_20800 = G__20815;
chunk__20795_20801 = G__20816;
count__20796_20802 = G__20817;
i__20797_20803 = G__20818;
continue;
} else {
var vec__20799_20819 = cljs.core.first.call(null,seq__20794_20813__$1);
var k_20820 = cljs.core.nth.call(null,vec__20799_20819,(0),null);
var v_20821 = cljs.core.nth.call(null,vec__20799_20819,(1),null);
var m20793_20822 = cljs.core.deref.call(null,m_atom__11586__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11586__auto__,cljs.core.assoc_BANG_.call(null,m20793_20822,((typeof k_20820 === 'string')?cljs.core.keyword.call(null,k_20820):k_20820),plumbing$core$keywordize_map.call(null,v_20821)));

var G__20823 = cljs.core.next.call(null,seq__20794_20813__$1);
var G__20824 = null;
var G__20825 = (0);
var G__20826 = (0);
seq__20794_20800 = G__20823;
chunk__20795_20801 = G__20824;
count__20796_20802 = G__20825;
i__20797_20803 = G__20826;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__11586__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4124__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4124__auto__)){
var pair__11667__auto__ = temp__4124__auto__;
return cljs.core.val.call(null,pair__11667__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__20827 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__20828 = cljs.core.next.call(null,ks);
m = G__20827;
ks = G__20828;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(){
var argseq__4999__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4999__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__3959__auto__ = m;
if(cljs.core.truth_(or__3959__auto__)){
return or__3959__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4713__auto__ = (function plumbing$core$iter__20831(s__20832){
return (new cljs.core.LazySeq(null,(function (){
var s__20832__$1 = s__20832;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20832__$1);
if(temp__4126__auto__){
var s__20832__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20832__$2)){
var c__4711__auto__ = cljs.core.chunk_first.call(null,s__20832__$2);
var size__4712__auto__ = cljs.core.count.call(null,c__4711__auto__);
var b__20834 = cljs.core.chunk_buffer.call(null,size__4712__auto__);
if((function (){var i__20833 = (0);
while(true){
if((i__20833 < size__4712__auto__)){
var vec__20837 = cljs.core._nth.call(null,c__4711__auto__,i__20833);
var k = cljs.core.nth.call(null,vec__20837,(0),null);
var v = cljs.core.nth.call(null,vec__20837,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__20834,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__20839 = (i__20833 + (1));
i__20833 = G__20839;
continue;
} else {
var G__20840 = (i__20833 + (1));
i__20833 = G__20840;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20834),plumbing$core$iter__20831.call(null,cljs.core.chunk_rest.call(null,s__20832__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20834),null);
}
} else {
var vec__20838 = cljs.core.first.call(null,s__20832__$2);
var k = cljs.core.nth.call(null,vec__20838,(0),null);
var v = cljs.core.nth.call(null,vec__20838,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__20831.call(null,cljs.core.rest.call(null,s__20832__$2)));
} else {
var G__20841 = cljs.core.rest.call(null,s__20832__$2);
s__20832__$1 = G__20841;
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
return iter__4713__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq20829){
var G__20830 = cljs.core.first.call(null,seq20829);
var seq20829__$1 = cljs.core.next.call(null,seq20829);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__20830,seq20829__$1);
});
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(){
var argseq__4999__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4999__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq20842){
var G__20843 = cljs.core.first.call(null,seq20842);
var seq20842__$1 = cljs.core.next.call(null,seq20842);
var G__20844 = cljs.core.first.call(null,seq20842__$1);
var seq20842__$2 = cljs.core.next.call(null,seq20842__$1);
var G__20845 = cljs.core.first.call(null,seq20842__$2);
var seq20842__$3 = cljs.core.next.call(null,seq20842__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__20843,G__20844,G__20845,seq20842__$3);
});
/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter)
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.next.call(null,s);
if(temp__4126__auto__){
var n = temp__4126__auto__;
return plumbing$core$aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 * Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(){
var G__20847 = arguments.length;
switch (G__20847) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;
/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4126__auto__ = cljs.core.seq.call(null,xs);
if(temp__4126__auto__){
var xs__$1 = temp__4126__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__4713__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__20853(s__20854){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__20854__$1 = s__20854;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20854__$1);
if(temp__4126__auto__){
var s__20854__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20854__$2)){
var c__4711__auto__ = cljs.core.chunk_first.call(null,s__20854__$2);
var size__4712__auto__ = cljs.core.count.call(null,c__4711__auto__);
var b__20856 = cljs.core.chunk_buffer.call(null,size__4712__auto__);
if((function (){var i__20855 = (0);
while(true){
if((i__20855 < size__4712__auto__)){
var x = cljs.core._nth.call(null,c__4711__auto__,i__20855);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__20856,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__20857 = (i__20855 + (1));
i__20855 = G__20857;
continue;
} else {
var G__20858 = (i__20855 + (1));
i__20855 = G__20858;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20856),plumbing$core$distinct_by_$_iter__20853.call(null,cljs.core.chunk_rest.call(null,s__20854__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20856),null);
}
} else {
var x = cljs.core.first.call(null,s__20854__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__20853.call(null,cljs.core.rest.call(null,s__20854__$2)));
} else {
var G__20859 = cljs.core.rest.call(null,s__20854__$2);
s__20854__$1 = G__20859;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__4713__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(){
var argseq__4999__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__4999__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq20860){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20860));
});
/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(){
var G__20865 = arguments.length;
switch (G__20865) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5010__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__20867 = plumbing.core.conj_when.call(null,coll,x);
var G__20868 = cljs.core.first.call(null,xs);
var G__20869 = cljs.core.next.call(null,xs);
coll = G__20867;
x = G__20868;
xs = G__20869;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq20861){
var G__20862 = cljs.core.first.call(null,seq20861);
var seq20861__$1 = cljs.core.next.call(null,seq20861);
var G__20863 = cljs.core.first.call(null,seq20861__$1);
var seq20861__$2 = cljs.core.next.call(null,seq20861__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__20862,G__20863,seq20861__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);
/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(){
var G__20875 = arguments.length;
switch (G__20875) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5010__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__20870_SHARP_){
return cljs.core.apply.call(null,f,p1__20870_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq20871){
var G__20872 = cljs.core.first.call(null,seq20871);
var seq20871__$1 = cljs.core.next.call(null,seq20871);
var G__20873 = cljs.core.first.call(null,seq20871__$1);
var seq20871__$2 = cljs.core.next.call(null,seq20871__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20872,G__20873,seq20871__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 * arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(){
var G__20881 = arguments.length;
switch (G__20881) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5010__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5010__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq20877){
var G__20878 = cljs.core.first.call(null,seq20877);
var seq20877__$1 = cljs.core.next.call(null,seq20877);
var G__20879 = cljs.core.first.call(null,seq20877__$1);
var seq20877__$2 = cljs.core.next.call(null,seq20877__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__20878,G__20879,seq20877__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=core.js.map