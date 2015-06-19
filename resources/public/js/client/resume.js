// Compiled by ClojureScript 0.0-3211 {}
goog.provide('client.resume');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('om_bootstrap.modal');
goog.require('om_bootstrap.input');
goog.require('om_bootstrap.panel');
goog.require('om.dom');
goog.require('om_bootstrap.progress_bar');
goog.require('om_tools.dom');
goog.require('om_bootstrap.grid');
goog.require('om_bootstrap.random');
goog.require('cljs.reader');
goog.require('om_bootstrap.nav');
goog.require('om.core');
goog.require('om_bootstrap.button');
goog.require('om_bootstrap.table');
goog.require('garden.core');
cljs.core.enable_console_print_BANG_.call(null);
client.resume.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cols","cols",-1914801295),null,new cljs.core.Keyword(null,"res-style","res-style",-790889260),null,new cljs.core.Keyword(null,"resume-data","resume-data",569974275),null], null));
/**
 * Wrapper to simplify Ajax call
 */
client.resume.get_call = (function client$resume$get_call(state_key,service_path){
return ajax.core.GET.call(null,service_path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (r){
return cljs.core.swap_BANG_.call(null,client.resume.app_state,cljs.core.assoc,state_key,r);
})], null));
});
client.resume.get_call.call(null,new cljs.core.Keyword(null,"resume-types","resume-types",227979122),"/getresumetypes");
client.resume.get_resume_data = (function client$resume$get_resume_data(res_id){

return client.resume.get_call.call(null,new cljs.core.Keyword(null,"resume-data","resume-data",569974275),[cljs.core.str("/getresume?resumetype="),cljs.core.str(res_id)].join(''));
});
client.resume.res_style = (function client$resume$res_style(data,res_style__$1){
return cljs.core.swap_BANG_.call(null,client.resume.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"res-style","res-style",-790889260),res_style__$1);
});

/**
 * Page configuration -- Injection
 */
client.resume.load_comp = (function (){var obj20202 = {};
return obj20202;
})();

client.resume.gen_style = (function client$resume$gen_style(_){
if((function (){var and__3947__auto__ = _;
if(and__3947__auto__){
return _.client$resume$load_comp$gen_style$arity$1;
} else {
return and__3947__auto__;
}
})()){
return _.client$resume$load_comp$gen_style$arity$1(_);
} else {
var x__4595__auto__ = (((_ == null))?null:_);
return (function (){var or__3959__auto__ = (client.resume.gen_style[goog.typeOf(x__4595__auto__)]);
if(or__3959__auto__){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = (client.resume.gen_style["_"]);
if(or__3959__auto____$1){
return or__3959__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"load-comp.gen-style",_);
}
}
})().call(null,_);
}
});

client.resume.gen_header = (function client$resume$gen_header(_,main_header,body){
if((function (){var and__3947__auto__ = _;
if(and__3947__auto__){
return _.client$resume$load_comp$gen_header$arity$3;
} else {
return and__3947__auto__;
}
})()){
return _.client$resume$load_comp$gen_header$arity$3(_,main_header,body);
} else {
var x__4595__auto__ = (((_ == null))?null:_);
return (function (){var or__3959__auto__ = (client.resume.gen_header[goog.typeOf(x__4595__auto__)]);
if(or__3959__auto__){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = (client.resume.gen_header["_"]);
if(or__3959__auto____$1){
return or__3959__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"load-comp.gen-header",_);
}
}
})().call(null,_,main_header,body);
}
});

client.resume.gen_body = (function client$resume$gen_body(_,header,body){
if((function (){var and__3947__auto__ = _;
if(and__3947__auto__){
return _.client$resume$load_comp$gen_body$arity$3;
} else {
return and__3947__auto__;
}
})()){
return _.client$resume$load_comp$gen_body$arity$3(_,header,body);
} else {
var x__4595__auto__ = (((_ == null))?null:_);
return (function (){var or__3959__auto__ = (client.resume.gen_body[goog.typeOf(x__4595__auto__)]);
if(or__3959__auto__){
return or__3959__auto__;
} else {
var or__3959__auto____$1 = (client.resume.gen_body["_"]);
if(or__3959__auto____$1){
return or__3959__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"load-comp.gen-body",_);
}
}
})().call(null,_,header,body);
}
});

client.resume.load_basic = (function (){
if(typeof client.resume.t20203 !== 'undefined'){
} else {

/**
* @constructor
*/
client.resume.t20203 = (function (meta20204){
this.meta20204 = meta20204;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
client.resume.t20203.prototype.client$resume$load_comp$ = true;

client.resume.t20203.prototype.client$resume$load_comp$gen_style$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element.call(null,React.DOM.style,garden.core.css.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".basic-head",".basic-head",-45686444),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid 1px;",new cljs.core.Keyword(null,"width","width",-384071477),"80%; padding: 5px;",new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"capitalize;",new cljs.core.Keyword(null,"text-shadow","text-shadow",116733623),"5px 5px 10px Gainsboro"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".basic-head-body",".basic-head-body",-1914053037),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid 2px WhiteSmoke;",new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"solid 1px WhiteSmoke;",new cljs.core.Keyword(null,"width","width",-384071477),"80%; padding: 5px;"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".basic-body",".basic-body",-927672997),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"80%; padding: 5px;",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null)], null)),cljs.core.PersistentVector.EMPTY);
});

client.resume.t20203.prototype.client$resume$load_comp$gen_header$arity$3 = (function (_,main_header,body){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element.call(null,React.DOM.div,(cljs.core.truth_(main_header)?cljs.core.apply.call(null,React.DOM.h1,{"className": "basic-head"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[main_header],null)))):""),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[body],null)));
});

client.resume.t20203.prototype.client$resume$load_comp$gen_body$arity$3 = (function (_,header,body){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "basic-head-body"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(header)?cljs.core.apply.call(null,React.DOM.h2,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))):""),cljs.core.apply.call(null,React.DOM.h3,{"className": "basic-body"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[body],null))))],null))));
});

client.resume.t20203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20205){
var self__ = this;
var _20205__$1 = this;
return self__.meta20204;
});

client.resume.t20203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20205,meta20204__$1){
var self__ = this;
var _20205__$1 = this;
return (new client.resume.t20203(meta20204__$1));
});

client.resume.t20203.cljs$lang$type = true;

client.resume.t20203.cljs$lang$ctorStr = "client.resume/t20203";

client.resume.t20203.cljs$lang$ctorPrWriter = (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"client.resume/t20203");
});

client.resume.__GT_t20203 = (function client$resume$__GT_t20203(meta20204){
return (new client.resume.t20203(meta20204));
});

}

return (new client.resume.t20203(cljs.core.PersistentArrayMap.EMPTY));
})()
;
client.resume.load_panels = (function (){
if(typeof client.resume.t20206 !== 'undefined'){
} else {

/**
* @constructor
*/
client.resume.t20206 = (function (meta20207){
this.meta20207 = meta20207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
client.resume.t20206.prototype.client$resume$load_comp$ = true;

client.resume.t20206.prototype.client$resume$load_comp$gen_style$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element.call(null,React.DOM.style,garden.core.css.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".basic-head",".basic-head",-45686444),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"capitalize;"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".basic-head-body",".basic-head-body",-1914053037),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".basic-body",".basic-body",-927672997),cljs.core.PersistentArrayMap.EMPTY], null)),cljs.core.PersistentVector.EMPTY);
});

client.resume.t20206.prototype.client$resume$load_comp$gen_header$arity$3 = (function (_,main_header,body){
var self__ = this;
var ___$1 = this;
return om_bootstrap.panel.panel.call(null,(cljs.core.truth_(main_header)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"basic-head",new cljs.core.Keyword(null,"header","header",119441134),main_header], null):cljs.core.PersistentArrayMap.EMPTY),body);
});

client.resume.t20206.prototype.client$resume$load_comp$gen_body$arity$3 = (function (_,header,body){
var self__ = this;
var ___$1 = this;
return om_bootstrap.panel.panel.call(null,(cljs.core.truth_(header)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"basic-head",new cljs.core.Keyword(null,"header","header",119441134),header], null):cljs.core.PersistentArrayMap.EMPTY),body);
});

client.resume.t20206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20208){
var self__ = this;
var _20208__$1 = this;
return self__.meta20207;
});

client.resume.t20206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20208,meta20207__$1){
var self__ = this;
var _20208__$1 = this;
return (new client.resume.t20206(meta20207__$1));
});

client.resume.t20206.cljs$lang$type = true;

client.resume.t20206.cljs$lang$ctorStr = "client.resume/t20206";

client.resume.t20206.cljs$lang$ctorPrWriter = (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"client.resume/t20206");
});

client.resume.__GT_t20206 = (function client$resume$__GT_t20206(meta20207){
return (new client.resume.t20206(meta20207));
});

}

return (new client.resume.t20206(cljs.core.PersistentArrayMap.EMPTY));
})()
;
client.resume.load_jumbo = (function (){
if(typeof client.resume.t20209 !== 'undefined'){
} else {

/**
* @constructor
*/
client.resume.t20209 = (function (meta20210){
this.meta20210 = meta20210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
client.resume.t20209.prototype.client$resume$load_comp$ = true;

client.resume.t20209.prototype.client$resume$load_comp$gen_style$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element.call(null,React.DOM.style,garden.core.css.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Background-color","Background-color",-1154648848),"#eee"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".basic-head",".basic-head",-45686444),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"capitalize;",new cljs.core.Keyword(null,"Background-color","Background-color",-1154648848),"#eee"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".basic-head-body",".basic-head-body",-1914053037),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".basic-body",".basic-body",-927672997),cljs.core.PersistentArrayMap.EMPTY], null)),cljs.core.PersistentVector.EMPTY);
});

client.resume.t20209.prototype.client$resume$load_comp$gen_header$arity$3 = (function (_,main_header,body){
var self__ = this;
var ___$1 = this;
return om_bootstrap.random.jumbotron.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(main_header)?cljs.core.apply.call(null,React.DOM.h1,{"className": "basic-head"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[main_header],null)))):""),body);
});

client.resume.t20209.prototype.client$resume$load_comp$gen_body$arity$3 = (function (_,header,body){
var self__ = this;
var ___$1 = this;
return om_bootstrap.panel.panel.call(null,(cljs.core.truth_(header)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"basic-head",new cljs.core.Keyword(null,"header","header",119441134),header], null):cljs.core.PersistentArrayMap.EMPTY),body);
});

client.resume.t20209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20211){
var self__ = this;
var _20211__$1 = this;
return self__.meta20210;
});

client.resume.t20209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20211,meta20210__$1){
var self__ = this;
var _20211__$1 = this;
return (new client.resume.t20209(meta20210__$1));
});

client.resume.t20209.cljs$lang$type = true;

client.resume.t20209.cljs$lang$ctorStr = "client.resume/t20209";

client.resume.t20209.cljs$lang$ctorPrWriter = (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"client.resume/t20209");
});

client.resume.__GT_t20209 = (function client$resume$__GT_t20209(meta20210){
return (new client.resume.t20209(meta20210));
});

}

return (new client.resume.t20209(cljs.core.PersistentArrayMap.EMPTY));
})()
;
client.resume.generate_comp = (function client$resume$generate_comp(data,sec_key,header,format_func){

return om_tools.dom.element.call(null,React.DOM.div,client.resume.gen_style.call(null,format_func),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[client.resume.gen_header.call(null,format_func,header,(function (){var iter__4713__auto__ = (function client$resume$generate_comp_$_iter__20216(s__20217){
return (new cljs.core.LazySeq(null,(function (){
var s__20217__$1 = s__20217;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20217__$1);
if(temp__4126__auto__){
var s__20217__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20217__$2)){
var c__4711__auto__ = cljs.core.chunk_first.call(null,s__20217__$2);
var size__4712__auto__ = cljs.core.count.call(null,c__4711__auto__);
var b__20219 = cljs.core.chunk_buffer.call(null,size__4712__auto__);
if((function (){var i__20218 = (0);
while(true){
if((i__20218 < size__4712__auto__)){
var value = cljs.core._nth.call(null,c__4711__auto__,i__20218);
cljs.core.chunk_append.call(null,b__20219,(function (){var has_header = (cljs.core.count.call(null,value) > (1));
var header_val = ((has_header)?[cljs.core.str(cljs.core.first.call(null,value))].join(''):null);
var val = ((has_header)?cljs.core.second.call(null,value):cljs.core.first.call(null,value));
var body_val = ((has_header)?om_tools.dom.element.call(null,React.DOM.ul,cljs.core.map.call(null,((function (i__20218,has_header,header_val,val,value,c__4711__auto__,size__4712__auto__,b__20219,s__20217__$2,temp__4126__auto__){
return (function (x){
return om_tools.dom.element.call(null,React.DOM.li,x,cljs.core.PersistentVector.EMPTY);
});})(i__20218,has_header,header_val,val,value,c__4711__auto__,size__4712__auto__,b__20219,s__20217__$2,temp__4126__auto__))
,val),cljs.core.PersistentVector.EMPTY):value);
return client.resume.gen_body.call(null,format_func,header_val,body_val);
})());

var G__20220 = (i__20218 + (1));
i__20218 = G__20220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20219),client$resume$generate_comp_$_iter__20216.call(null,cljs.core.chunk_rest.call(null,s__20217__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20219),null);
}
} else {
var value = cljs.core.first.call(null,s__20217__$2);
return cljs.core.cons.call(null,(function (){var has_header = (cljs.core.count.call(null,value) > (1));
var header_val = ((has_header)?[cljs.core.str(cljs.core.first.call(null,value))].join(''):null);
var val = ((has_header)?cljs.core.second.call(null,value):cljs.core.first.call(null,value));
var body_val = ((has_header)?om_tools.dom.element.call(null,React.DOM.ul,cljs.core.map.call(null,((function (has_header,header_val,val,value,s__20217__$2,temp__4126__auto__){
return (function (x){
return om_tools.dom.element.call(null,React.DOM.li,x,cljs.core.PersistentVector.EMPTY);
});})(has_header,header_val,val,value,s__20217__$2,temp__4126__auto__))
,val),cljs.core.PersistentVector.EMPTY):value);
return client.resume.gen_body.call(null,format_func,header_val,body_val);
})(),client$resume$generate_comp_$_iter__20216.call(null,cljs.core.rest.call(null,s__20217__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4713__auto__.call(null,sec_key.call(null,cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"resume-data","resume-data",569974275).cljs$core$IFn$_invoke$arity$1(data))));
})())],null)));
});
client.resume.get_full_resume = (function client$resume$get_full_resume(data){

if(!((new cljs.core.Keyword(null,"resume-data","resume-data",569974275).cljs$core$IFn$_invoke$arity$1(data) == null))){
var resume_sections = (cljs.core.truth_(new cljs.core.Keyword(null,"resume-data","resume-data",569974275).cljs$core$IFn$_invoke$arity$1(data))?cljs.core.keys.call(null,cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"resume-data","resume-data",569974275).cljs$core$IFn$_invoke$arity$1(data))):null);
var cols = (cljs.core.truth_(new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(data))?new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(data):(1));
var build_funct = (cljs.core.truth_(new cljs.core.Keyword(null,"res-style","res-style",-790889260).cljs$core$IFn$_invoke$arity$1(data))?new cljs.core.Keyword(null,"res-style","res-style",-790889260).cljs$core$IFn$_invoke$arity$1(data):client.resume.load_basic);
var pic = React.DOM.img({"width": "150", "height": "150", "src": "/pages/img/me.png", "id": "imageme"});
var gen_sec = cljs.core.map.call(null,((function (resume_sections,cols,build_funct,pic){
return (function (key){
return client.resume.generate_comp.call(null,data,key,cljs.core.name.call(null,key),build_funct);
});})(resume_sections,cols,build_funct,pic))
,resume_sections);
var vec_secs = cljs.core.partition.call(null,cols,cols,"",cljs.core.rest.call(null,gen_sec));
return om_tools.dom.element.call(null,React.DOM.div,om_tools.dom.element.call(null,React.DOM.table,om_tools.dom.element.call(null,React.DOM.tr,om_tools.dom.element.call(null,React.DOM.td,pic,cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,cljs.core.first.call(null,gen_sec),cljs.core.PersistentVector.EMPTY)],null))),cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.table,om_tools.dom.element.call(null,React.DOM.tbody,cljs.core.map.call(null,((function (resume_sections,cols,build_funct,pic,gen_sec,vec_secs){
return (function (v){
return om_tools.dom.element.call(null,React.DOM.tr,cljs.core.map.call(null,((function (resume_sections,cols,build_funct,pic,gen_sec,vec_secs){
return (function (sv){
return cljs.core.apply.call(null,React.DOM.td,{"className": "panelgrid"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[sv],null))));
});})(resume_sections,cols,build_funct,pic,gen_sec,vec_secs))
,v),cljs.core.PersistentVector.EMPTY);
});})(resume_sections,cols,build_funct,pic,gen_sec,vec_secs))
,vec_secs),cljs.core.PersistentVector.EMPTY),cljs.core.PersistentVector.EMPTY)],null)));
} else {
return null;
}
});
client.resume.menu_comp = (function client$resume$menu_comp(data){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.button.toolbar.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.button.dropdown.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"warning",new cljs.core.Keyword(null,"title","title",636505583),"Select Resume"], null),(function (){var iter__4713__auto__ = (function client$resume$menu_comp_$_iter__20229(s__20230){
return (new cljs.core.LazySeq(null,(function (){
var s__20230__$1 = s__20230;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20230__$1);
if(temp__4126__auto__){
var s__20230__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20230__$2)){
var c__4711__auto__ = cljs.core.chunk_first.call(null,s__20230__$2);
var size__4712__auto__ = cljs.core.count.call(null,c__4711__auto__);
var b__20232 = cljs.core.chunk_buffer.call(null,size__4712__auto__);
if((function (){var i__20231 = (0);
while(true){
if((i__20231 < size__4712__auto__)){
var resume_type = cljs.core._nth.call(null,c__4711__auto__,i__20231);
cljs.core.chunk_append.call(null,b__20232,om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,resume_type),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__20231,resume_type,c__4711__auto__,size__4712__auto__,b__20232,s__20230__$2,temp__4126__auto__){
return (function (){
return client.resume.get_resume_data.call(null,cljs.core.first.call(null,resume_type));
});})(i__20231,resume_type,c__4711__auto__,size__4712__auto__,b__20232,s__20230__$2,temp__4126__auto__))
], null),cljs.core.second.call(null,resume_type)));

var G__20237 = (i__20231 + (1));
i__20231 = G__20237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20232),client$resume$menu_comp_$_iter__20229.call(null,cljs.core.chunk_rest.call(null,s__20230__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20232),null);
}
} else {
var resume_type = cljs.core.first.call(null,s__20230__$2);
return cljs.core.cons.call(null,om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,resume_type),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (resume_type,s__20230__$2,temp__4126__auto__){
return (function (){
return client.resume.get_resume_data.call(null,cljs.core.first.call(null,resume_type));
});})(resume_type,s__20230__$2,temp__4126__auto__))
], null),cljs.core.second.call(null,resume_type)),client$resume$menu_comp_$_iter__20229.call(null,cljs.core.rest.call(null,s__20230__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4713__auto__.call(null,cljs.reader.read_string.call(null,(((new cljs.core.Keyword(null,"resume-types","resume-types",227979122).cljs$core$IFn$_invoke$arity$1(data) == null))?"":new cljs.core.Keyword(null,"resume-types","resume-types",227979122).cljs$core$IFn$_invoke$arity$1(data))));
})()),om_bootstrap.button.button_group.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return client.resume.res_style.call(null,data,client.resume.load_panels);
})], null),"Panel"),om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return client.resume.res_style.call(null,data,client.resume.load_jumbo);
})], null),"Jumbo"),om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return client.resume.res_style.call(null,data,client.resume.load_basic);
})], null),"Basic")),om_bootstrap.button.button_group.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4713__auto__ = (function client$resume$menu_comp_$_iter__20233(s__20234){
return (new cljs.core.LazySeq(null,(function (){
var s__20234__$1 = s__20234;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20234__$1);
if(temp__4126__auto__){
var s__20234__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20234__$2)){
var c__4711__auto__ = cljs.core.chunk_first.call(null,s__20234__$2);
var size__4712__auto__ = cljs.core.count.call(null,c__4711__auto__);
var b__20236 = cljs.core.chunk_buffer.call(null,size__4712__auto__);
if((function (){var i__20235 = (0);
while(true){
if((i__20235 < size__4712__auto__)){
var value = cljs.core._nth.call(null,c__4711__auto__,i__20235);
cljs.core.chunk_append.call(null,b__20236,om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__20235,value,c__4711__auto__,size__4712__auto__,b__20236,s__20234__$2,temp__4126__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,client.resume.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"cols","cols",-1914801295),value);
});})(i__20235,value,c__4711__auto__,size__4712__auto__,b__20236,s__20234__$2,temp__4126__auto__))
], null),value));

var G__20238 = (i__20235 + (1));
i__20235 = G__20238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20236),client$resume$menu_comp_$_iter__20233.call(null,cljs.core.chunk_rest.call(null,s__20234__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20236),null);
}
} else {
var value = cljs.core.first.call(null,s__20234__$2);
return cljs.core.cons.call(null,om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (value,s__20234__$2,temp__4126__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,client.resume.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"cols","cols",-1914801295),value);
});})(value,s__20234__$2,temp__4126__auto__))
], null),value),client$resume$menu_comp_$_iter__20233.call(null,cljs.core.rest.call(null,s__20234__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4713__auto__.call(null,cljs.core.range.call(null,(1),(6)));
})())),cljs.core.PersistentVector.EMPTY);
});
client.resume.test_comp_gen = (function client$resume$test_comp_gen(data,owner){
return om_tools.dom.element.call(null,React.DOM.div,om_tools.dom.element.call(null,React.DOM.div,om_tools.dom.element.call(null,React.DOM.style,garden.core.css.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".panelgrid",".panelgrid",596736044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top",new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(((100) / new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(data))),cljs.core.str("%")].join('')], null)], null)),cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[client.resume.menu_comp.call(null,data)],null))),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.br(null),client.resume.get_full_resume.call(null,data)],null)));
});
om.core.root.call(null,(function (data,owner){
if(typeof client.resume.t20239 !== 'undefined'){
} else {

/**
* @constructor
*/
client.resume.t20239 = (function (owner,data,meta20240){
this.owner = owner;
this.data = data;
this.meta20240 = meta20240;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
client.resume.t20239.prototype.om$core$IRender$ = true;

client.resume.t20239.prototype.om$core$IRender$render$arity$1 = (function (this__10325__auto__){
var self__ = this;
var this__10325__auto____$1 = this;
return client.resume.test_comp_gen.call(null,self__.data,self__.owner);
});

client.resume.t20239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20241){
var self__ = this;
var _20241__$1 = this;
return self__.meta20240;
});

client.resume.t20239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20241,meta20240__$1){
var self__ = this;
var _20241__$1 = this;
return (new client.resume.t20239(self__.owner,self__.data,meta20240__$1));
});

client.resume.t20239.cljs$lang$type = true;

client.resume.t20239.cljs$lang$ctorStr = "client.resume/t20239";

client.resume.t20239.cljs$lang$ctorPrWriter = (function (this__4538__auto__,writer__4539__auto__,opt__4540__auto__){
return cljs.core._write.call(null,writer__4539__auto__,"client.resume/t20239");
});

client.resume.__GT_t20239 = (function client$resume$__GT_t20239(owner__$1,data__$1,meta20240){
return (new client.resume.t20239(owner__$1,data__$1,meta20240));
});

}

return (new client.resume.t20239(owner,data,null));
}),client.resume.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=resume.js.map