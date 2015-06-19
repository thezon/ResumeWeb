// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('om_tools.mixin');
goog.require('om.core');
goog.require('cljs.core.async');
var ufv___17622 = schema.utils.use_fn_validation;
var output_schema17615_17623 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema17616_17624 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"target","target",1893533248,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"event-type","event-type",1960254340,null)),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null))], null);
var input_checker17617_17625 = schema.core.checker.call(null,input_schema17616_17624);
var output_checker17618_17626 = schema.core.checker.call(null,output_schema17615_17623);
/**
 * Inputs: [target :- s/Any event-type :- s/Str callback :- (s/=> s/Any s/Any)]
 * Returns: (s/=> s/Any)
 * 
 * Registers the callback on the supplied target for events of type
 * `event-type`. Returns a function of no arguments that, when called,
 * unregisters the callback.
 */
om_bootstrap.mixins.event_listener = ((function (ufv___17622,output_schema17615_17623,input_schema17616_17624,input_checker17617_17625,output_checker17618_17626){
return (function om_bootstrap$mixins$event_listener(G__17619,G__17620,G__17621){
var validate__9701__auto__ = ufv___17622.get_cell();
if(cljs.core.truth_(validate__9701__auto__)){
var args__9702__auto___17627 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17619,G__17620,G__17621], null);
var temp__4126__auto___17628 = input_checker17617_17625.call(null,args__9702__auto___17627);
if(cljs.core.truth_(temp__4126__auto___17628)){
var error__9703__auto___17629 = temp__4126__auto___17628;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__9703__auto___17629)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17629,new cljs.core.Keyword(null,"value","value",305978217),args__9702__auto___17627,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17616_17624,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__9704__auto__ = (function (){var target = G__17619;
var event_type = G__17620;
var callback = G__17621;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__9701__auto__,ufv___17622,output_schema17615_17623,input_schema17616_17624,input_checker17617_17625,output_checker17618_17626){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__9701__auto__,ufv___17622,output_schema17615_17623,input_schema17616_17624,input_checker17617_17625,output_checker17618_17626))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__9701__auto__,ufv___17622,output_schema17615_17623,input_schema17616_17624,input_checker17617_17625,output_checker17618_17626){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__9701__auto__,ufv___17622,output_schema17615_17623,input_schema17616_17624,input_checker17617_17625,output_checker17618_17626))
} else {
return ((function (validate__9701__auto__,ufv___17622,output_schema17615_17623,input_schema17616_17624,input_checker17617_17625,output_checker17618_17626){
return (function (){
return null;
});
;})(validate__9701__auto__,ufv___17622,output_schema17615_17623,input_schema17616_17624,input_checker17617_17625,output_checker17618_17626))

}
}
break;
}
})();
if(cljs.core.truth_(validate__9701__auto__)){
var temp__4126__auto___17630 = output_checker17618_17626.call(null,o__9704__auto__);
if(cljs.core.truth_(temp__4126__auto___17630)){
var error__9703__auto___17631 = temp__4126__auto___17630;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__9703__auto___17631)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__9703__auto___17631,new cljs.core.Keyword(null,"value","value",305978217),o__9704__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17615_17623,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__9704__auto__;
});})(ufv___17622,output_schema17615_17623,input_schema17616_17624,input_checker17617_17625,output_checker17618_17626))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema17615_17623,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17616_17624], null)));
/**
 * Handles a sequence of listeners for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_listener_mixin = {"set_listener": (function (target17636,event_type17637,callback17638){
var this17635 = this;
return ((function (this17635){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this17635))
.call(null,this17635,target17636,event_type17637,callback17638);
}), "componentWillUnmount": (function (){
var this17634 = this;
return ((function (this17634){
return (function (owner){
return owner.listeners.map(((function (this17634){
return (function (p1__17632_SHARP_){
return p1__17632_SHARP_.call(null);
});})(this17634))
);
});})(this17634))
.call(null,this17634);
}), "componentWillMount": (function (){
var this17633 = this;
return ((function (this17633){
return (function (owner){
return owner.listeners = [];
});})(this17633))
.call(null,this17633);
})};
/**
 * Handles a sequence of timeouts for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_timeout_mixin = {"set_timeout": (function (f17643,timeout17644){
var this17642 = this;
return ((function (this17642){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this17642))
.call(null,this17642,f17643,timeout17644);
}), "componentWillUnmount": (function (){
var this17641 = this;
return ((function (this17641){
return (function (owner){
return owner.timeouts.map(((function (this17641){
return (function (p1__17639_SHARP_){
return clearTimeout(p1__17639_SHARP_);
});})(this17641))
);
});})(this17641))
.call(null,this17641);
}), "componentWillMount": (function (){
var this17640 = this;
return ((function (this17640){
return (function (owner){
return owner.timeouts = [];
});})(this17640))
.call(null,this17640);
})};
/**
 * Accepts two DOM elements; returns true if the supplied node is
 * nested inside the supplied root, false otherwise.
 */
om_bootstrap.mixins.in_root_QMARK_ = (function om_bootstrap$mixins$in_root_QMARK_(node,root){
var node__$1 = node;
while(true){
if((node__$1 == null)){
return false;
} else {
if(cljs.core._EQ_.call(null,root,node__$1)){
return true;
} else {
var G__17645 = node__$1.parentNode;
node__$1 = G__17645;
continue;

}
}
break;
}
});
om_bootstrap.mixins.ESCAPE_KEY = (27);
/**
 * For dropdowns, binds a handler for that sets the dropdown-mixin's
 * `:open?` state to false if the user clicks outside the owning
 * component OR hits the escape key.
 */
om_bootstrap.mixins.bind_root_close_handlers_BANG_ = (function om_bootstrap$mixins$bind_root_close_handlers_BANG_(owner){
var set_state = (owner["setDropdownState"]);
return owner.dropdownListeners = [om_bootstrap.mixins.event_listener.call(null,document,"click",((function (set_state){
return (function (e){
if(cljs.core.truth_(om_bootstrap.mixins.in_root_QMARK_.call(null,e.target,om.core.get_node.call(null,owner)))){
return null;
} else {
return set_state.call(null,false);
}
});})(set_state))
),om_bootstrap.mixins.event_listener.call(null,document,"keyup",((function (set_state){
return (function (e){
if(cljs.core._EQ_.call(null,om_bootstrap.mixins.ESCAPE_KEY,e.keyCode)){
return set_state.call(null,false);
} else {
return null;
}
});})(set_state))
)];
});
/**
 * If they're present on the owning object, removes the listeners
 * registered by the dropdown mixin.
 */
om_bootstrap.mixins.unbind_root_close_handlers_BANG_ = (function om_bootstrap$mixins$unbind_root_close_handlers_BANG_(owner){
var temp__4126__auto__ = owner.dropdownListeners;
if(cljs.core.truth_(temp__4126__auto__)){
var listeners = temp__4126__auto__;
cljs.core.map.call(null,((function (listeners,temp__4126__auto__){
return (function (p1__17646_SHARP_){
return p1__17646_SHARP_.call(null);
});})(listeners,temp__4126__auto__))
,listeners);

return owner.dropdownListeners = null;
} else {
return null;
}
});
/**
 * Mixin that manages a single piece of state - :open?. If a user
 * clicks outside the component's owning dom element OR hits the escape
 * key, the state will jump back to false.
 * 
 * Down the road this may need to register a callback when the state
 * changes.
 */
om_bootstrap.mixins.dropdown_mixin = {"setDropdownState": (function (open_QMARK_17651){
var this17650 = this;
return ((function (this17650){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this17650))
.call(null,this17650,open_QMARK_17651);
}), "isDropdownOpen": (function (){
var this17649 = this;
return ((function (this17649){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this17649))
.call(null,this17649);
}), "componentWillUnmount": (function (){
var this17648 = this;
return ((function (this17648){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this17648))
.call(null,this17648);
}), "getInitialState": (function (){
var this17647 = this;
return ((function (this17647){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this17647))
.call(null,this17647);
})};
/**
 * Mixin that enables collapsible Panels. Similar to the Dropdown
 * Mixin it only manages a single piece of state - :collapsed?. The Panel
 * is opened and closen by clicking on the header.
 */
om_bootstrap.mixins.collapsible_mixin = {"toggleCollapsed": (function (){
var this17654 = this;
return ((function (this17654){
return (function (owner){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not);
});})(this17654))
.call(null,this17654);
}), "isPanelCollapsed": (function (){
var this17653 = this;
return ((function (this17653){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
});})(this17653))
.call(null,this17653);
}), "getInitialState": (function (){
var this17652 = this;
return ((function (this17652){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),false], null);
});})(this17652))
.call(null,this17652);
})};

//# sourceMappingURL=mixins.js.map