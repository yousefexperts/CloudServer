/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.4.0
build: nightly
*/
YUI.add("pluginhost-base",function(c){var a=c.Lang;function b(){this._plugins={};}b.prototype={plug:function(g,d){var e,h,f;if(a.isArray(g)){for(e=0,h=g.length;e<h;e++){this.plug(g[e]);}}else{if(g&&!a.isFunction(g)){d=g.cfg;g=g.fn;}if(g&&g.NS){f=g.NS;d=d||{};d.host=this;if(this.hasPlugin(f)){this[f].setAttrs(d);}else{this[f]=new g(d);this._plugins[f]=g;}}}return this;},unplug:function(f){var e=f,d=this._plugins;if(f){if(a.isFunction(f)){e=f.NS;if(e&&(!d[e]||d[e]!==f)){e=null;}}if(e){if(this[e]){this[e].destroy();delete this[e];}if(d[e]){delete d[e];}}}else{for(e in this._plugins){if(this._plugins.hasOwnProperty(e)){this.unplug(e);}}}return this;},hasPlugin:function(d){return(this._plugins[d]&&this[d]);},_initPlugins:function(d){this._plugins=this._plugins||{};if(this._initConfigPlugins){this._initConfigPlugins(d);}},_destroyPlugins:function(){this.unplug();}};c.namespace("Plugin").Host=b;},"3.4.0",{requires:["yui-base"]});