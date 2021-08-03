!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";function t(t){return!t.nodeName||e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])!==-1}function o(t){return e.isFunction(t)||e.isPlainObject(t)?t:{top:t,left:t}}var n=e.scrollTo=function(t,o,n){return e(window).scrollTo(t,o,n)};return n.defaults={axis:"xy",duration:0,limit:!0},e.fn.scrollTo=function(r,i,s){"object"==typeof i&&(s=i,i=0),"function"==typeof s&&(s={onAfter:s}),"max"===r&&(r=9e9),s=e.extend({},n.defaults,s),i=i||s.duration;var a=s.queue&&s.axis.length>1;return a&&(i/=2),s.offset=o(s.offset),s.over=o(s.over),this.each(function(){function f(t){var o=e.extend({},s,{queue:!0,duration:i,complete:t&&function(){t.call(l,m,s)}});d.animate(p,o)}if(null!==r){var u,c=t(this),l=c?this.contentWindow||window:this,d=e(l),m=r,p={};switch(typeof m){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(m)){m=o(m);break}m=c?e(m):e(m,l);case"object":if(0===m.length)return;(m.is||m.style)&&(u=(m=e(m)).offset())}var h=e.isFunction(s.offset)&&s.offset(l,m)||s.offset;e.each(s.axis.split(""),function(e,t){var o="x"===t?"Left":"Top",r=o.toLowerCase(),i="scroll"+o,x=d[i](),v=n.max(l,t);if(u)p[i]=u[r]+(c?0:x-d.offset()[r]),s.margin&&(p[i]-=parseInt(m.css("margin"+o),10)||0,p[i]-=parseInt(m.css("border"+o+"Width"),10)||0),p[i]+=h[r]||0,s.over[r]&&(p[i]+=m["x"===t?"width":"height"]()*s.over[r]);else{var w=m[r];p[i]=w.slice&&"%"===w.slice(-1)?parseFloat(w)/100*v:w}s.limit&&/^\d+$/.test(p[i])&&(p[i]=p[i]<=0?0:Math.min(p[i],v)),!e&&s.axis.length>1&&(x===p[i]?p={}:a&&(f(s.onAfterFirst),p={}))}),f(s.onAfter)}})},n.max=function(o,n){var r="x"===n?"Width":"Height",i="scroll"+r;if(!t(o))return o[i]-e(o)[r.toLowerCase()]();var s="client"+r,a=o.ownerDocument||o.document,f=a.documentElement,u=a.body;return Math.max(f[i],u[i])-Math.min(f[s],u[s])},e.Tween.propHooks.scrollLeft=e.Tween.propHooks.scrollTop={get:function(t){return e(t.elem)[t.prop]()},set:function(t){var o=this.get(t);if(t.options.interrupt&&t._last&&t._last!==o)return e(t.elem).stop();var n=Math.round(t.now);o!==n&&(e(t.elem)[t.prop](n),t._last=this.get(t))}},n});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5zY3JvbGxUby5qcyJdLCJuYW1lcyI6WyJmYWN0b3J5IiwiZGVmaW5lIiwiYW1kIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJqUXVlcnkiLCIkIiwiaXNXaW4iLCJlbGVtIiwibm9kZU5hbWUiLCJpbkFycmF5IiwidG9Mb3dlckNhc2UiLCJib3RoIiwidmFsIiwiaXNGdW5jdGlvbiIsImlzUGxhaW5PYmplY3QiLCJ0b3AiLCJsZWZ0IiwiJHNjcm9sbFRvIiwic2Nyb2xsVG8iLCJ0YXJnZXQiLCJkdXJhdGlvbiIsInNldHRpbmdzIiwid2luZG93IiwiZGVmYXVsdHMiLCJheGlzIiwibGltaXQiLCJmbiIsIm9uQWZ0ZXIiLCJleHRlbmQiLCJxdWV1ZSIsImxlbmd0aCIsIm9mZnNldCIsIm92ZXIiLCJ0aGlzIiwiZWFjaCIsImFuaW1hdGUiLCJjYWxsYmFjayIsIm9wdHMiLCJjb21wbGV0ZSIsImNhbGwiLCJ0YXJnIiwiJGVsZW0iLCJhdHRyIiwidG9mZiIsIndpbiIsImNvbnRlbnRXaW5kb3ciLCJ0ZXN0IiwiaXMiLCJzdHlsZSIsInNwbGl0IiwiaSIsIlBvcyIsInBvcyIsImtleSIsInByZXYiLCJtYXgiLCJtYXJnaW4iLCJwYXJzZUludCIsImNzcyIsInNsaWNlIiwicGFyc2VGbG9hdCIsIk1hdGgiLCJtaW4iLCJvbkFmdGVyRmlyc3QiLCJEaW0iLCJzY3JvbGwiLCJzaXplIiwiZG9jIiwib3duZXJEb2N1bWVudCIsImRvY3VtZW50IiwiaHRtbCIsImRvY3VtZW50RWxlbWVudCIsImJvZHkiLCJUd2VlbiIsInByb3BIb29rcyIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJnZXQiLCJ0IiwicHJvcCIsInNldCIsImN1cnIiLCJvcHRpb25zIiwiaW50ZXJydXB0IiwiX2xhc3QiLCJzdG9wIiwibmV4dCIsInJvdW5kIiwibm93Il0sIm1hcHBpbmdzIjoiQ0FTQyxTQUFVQSxHQUNWLFlBQ3NCLG1CQUFYQyxTQUF5QkEsT0FBT0MsSUFF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RUFBRU0sT0FBU04sRUFBRU0sUUFBVUgsRUFDakQsTUFBTzVFLEdBQUV5RSxFQUFFdkUsTUFBTThFLE1BRWxCLElBQUlDLEdBQU96QixLQUFLMEIsTUFBTVQsRUFBRVUsSUFHcEJQLEtBQVNLLElBQ1pqRixFQUFFeUUsRUFBRXZFLE1BQU11RSxFQUFFQyxNQUFNTyxHQUNsQlIsRUFBRU0sTUFBUW5ELEtBQUs0QyxJQUFJQyxNQU1mN0QiLCJmaWxlIjoianF1ZXJ5LnNjcm9sbFRvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBqUXVlcnkuc2Nyb2xsVG9cbiAqIENvcHlyaWdodCAoYykgMjAwNy0yMDE1IEFyaWVsIEZsZXNsZXIgLSBhZmxlc2xlcjxhPmdtYWlsPGQ+Y29tIHwgaHR0cDovL2ZsZXNsZXIuYmxvZ3Nwb3QuY29tXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcbiAqIGh0dHA6Ly9mbGVzbGVyLmJsb2dzcG90LmNvbS8yMDA3LzEwL2pxdWVyeXNjcm9sbHRvLmh0bWxcbiAqIEBwcm9qZWN0RGVzY3JpcHRpb24gTGlnaHR3ZWlnaHQsIGNyb3NzLWJyb3dzZXIgYW5kIGhpZ2hseSBjdXN0b21pemFibGUgYW5pbWF0ZWQgc2Nyb2xsaW5nIHdpdGggalF1ZXJ5XG4gKiBAYXV0aG9yIEFyaWVsIEZsZXNsZXJcbiAqIEB2ZXJzaW9uIDIuMS4yXG4gKi9cbjsoZnVuY3Rpb24oZmFjdG9yeSkge1xuXHQndXNlIHN0cmljdCc7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gR2xvYmFsXG5cdFx0ZmFjdG9yeShqUXVlcnkpO1xuXHR9XG59KShmdW5jdGlvbigkKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgJHNjcm9sbFRvID0gJC5zY3JvbGxUbyA9IGZ1bmN0aW9uKHRhcmdldCwgZHVyYXRpb24sIHNldHRpbmdzKSB7XG5cdFx0cmV0dXJuICQod2luZG93KS5zY3JvbGxUbyh0YXJnZXQsIGR1cmF0aW9uLCBzZXR0aW5ncyk7XG5cdH07XG5cblx0JHNjcm9sbFRvLmRlZmF1bHRzID0ge1xuXHRcdGF4aXM6J3h5Jyxcblx0XHRkdXJhdGlvbjogMCxcblx0XHRsaW1pdDp0cnVlXG5cdH07XG5cblx0ZnVuY3Rpb24gaXNXaW4oZWxlbSkge1xuXHRcdHJldHVybiAhZWxlbS5ub2RlTmFtZSB8fFxuXHRcdFx0JC5pbkFycmF5KGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSwgWydpZnJhbWUnLCcjZG9jdW1lbnQnLCdodG1sJywnYm9keSddKSAhPT0gLTE7XG5cdH1cdFx0XG5cblx0JC5mbi5zY3JvbGxUbyA9IGZ1bmN0aW9uKHRhcmdldCwgZHVyYXRpb24sIHNldHRpbmdzKSB7XG5cdFx0aWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ29iamVjdCcpIHtcblx0XHRcdHNldHRpbmdzID0gZHVyYXRpb247XG5cdFx0XHRkdXJhdGlvbiA9IDA7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2Ygc2V0dGluZ3MgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHNldHRpbmdzID0geyBvbkFmdGVyOnNldHRpbmdzIH07XG5cdFx0fVxuXHRcdGlmICh0YXJnZXQgPT09ICdtYXgnKSB7XG5cdFx0XHR0YXJnZXQgPSA5ZTk7XG5cdFx0fVxuXG5cdFx0c2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgJHNjcm9sbFRvLmRlZmF1bHRzLCBzZXR0aW5ncyk7XG5cdFx0Ly8gU3BlZWQgaXMgc3RpbGwgcmVjb2duaXplZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0XHRkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IHNldHRpbmdzLmR1cmF0aW9uO1xuXHRcdC8vIE1ha2Ugc3VyZSB0aGUgc2V0dGluZ3MgYXJlIGdpdmVuIHJpZ2h0XG5cdFx0dmFyIHF1ZXVlID0gc2V0dGluZ3MucXVldWUgJiYgc2V0dGluZ3MuYXhpcy5sZW5ndGggPiAxO1xuXHRcdGlmIChxdWV1ZSkge1xuXHRcdFx0Ly8gTGV0J3Mga2VlcCB0aGUgb3ZlcmFsbCBkdXJhdGlvblxuXHRcdFx0ZHVyYXRpb24gLz0gMjtcblx0XHR9XG5cdFx0c2V0dGluZ3Mub2Zmc2V0ID0gYm90aChzZXR0aW5ncy5vZmZzZXQpO1xuXHRcdHNldHRpbmdzLm92ZXIgPSBib3RoKHNldHRpbmdzLm92ZXIpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdC8vIE51bGwgdGFyZ2V0IHlpZWxkcyBub3RoaW5nLCBqdXN0IGxpa2UgalF1ZXJ5IGRvZXNcblx0XHRcdGlmICh0YXJnZXQgPT09IG51bGwpIHJldHVybjtcblxuXHRcdFx0dmFyIHdpbiA9IGlzV2luKHRoaXMpLFxuXHRcdFx0XHRlbGVtID0gd2luID8gdGhpcy5jb250ZW50V2luZG93IHx8IHdpbmRvdyA6IHRoaXMsXG5cdFx0XHRcdCRlbGVtID0gJChlbGVtKSxcblx0XHRcdFx0dGFyZyA9IHRhcmdldCwgXG5cdFx0XHRcdGF0dHIgPSB7fSxcblx0XHRcdFx0dG9mZjtcblxuXHRcdFx0c3dpdGNoICh0eXBlb2YgdGFyZykge1xuXHRcdFx0XHQvLyBBIG51bWJlciB3aWxsIHBhc3MgdGhlIHJlZ2V4XG5cdFx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRcdGNhc2UgJ3N0cmluZyc6XG5cdFx0XHRcdFx0aWYgKC9eKFsrLV09Pyk/XFxkKyhcXC5cXGQrKT8ocHh8JSk/JC8udGVzdCh0YXJnKSkge1xuXHRcdFx0XHRcdFx0dGFyZyA9IGJvdGgodGFyZyk7XG5cdFx0XHRcdFx0XHQvLyBXZSBhcmUgZG9uZVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIFJlbGF0aXZlL0Fic29sdXRlIHNlbGVjdG9yXG5cdFx0XHRcdFx0dGFyZyA9IHdpbiA/ICQodGFyZykgOiAkKHRhcmcsIGVsZW0pO1xuXHRcdFx0XHRcdC8qIGZhbGxzIHRocm91Z2ggKi9cblx0XHRcdFx0Y2FzZSAnb2JqZWN0Jzpcblx0XHRcdFx0XHRpZiAodGFyZy5sZW5ndGggPT09IDApIHJldHVybjtcblx0XHRcdFx0XHQvLyBET01FbGVtZW50IC8galF1ZXJ5XG5cdFx0XHRcdFx0aWYgKHRhcmcuaXMgfHwgdGFyZy5zdHlsZSkge1xuXHRcdFx0XHRcdFx0Ly8gR2V0IHRoZSByZWFsIHBvc2l0aW9uIG9mIHRoZSB0YXJnZXRcblx0XHRcdFx0XHRcdHRvZmYgPSAodGFyZyA9ICQodGFyZykpLm9mZnNldCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dmFyIG9mZnNldCA9ICQuaXNGdW5jdGlvbihzZXR0aW5ncy5vZmZzZXQpICYmIHNldHRpbmdzLm9mZnNldChlbGVtLCB0YXJnKSB8fCBzZXR0aW5ncy5vZmZzZXQ7XG5cblx0XHRcdCQuZWFjaChzZXR0aW5ncy5heGlzLnNwbGl0KCcnKSwgZnVuY3Rpb24oaSwgYXhpcykge1xuXHRcdFx0XHR2YXIgUG9zXHQ9IGF4aXMgPT09ICd4JyA/ICdMZWZ0JyA6ICdUb3AnLFxuXHRcdFx0XHRcdHBvcyA9IFBvcy50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0XHRcdGtleSA9ICdzY3JvbGwnICsgUG9zLFxuXHRcdFx0XHRcdHByZXYgPSAkZWxlbVtrZXldKCksXG5cdFx0XHRcdFx0bWF4ID0gJHNjcm9sbFRvLm1heChlbGVtLCBheGlzKTtcblxuXHRcdFx0XHRpZiAodG9mZikgey8vIGpRdWVyeSAvIERPTUVsZW1lbnRcblx0XHRcdFx0XHRhdHRyW2tleV0gPSB0b2ZmW3Bvc10gKyAod2luID8gMCA6IHByZXYgLSAkZWxlbS5vZmZzZXQoKVtwb3NdKTtcblxuXHRcdFx0XHRcdC8vIElmIGl0J3MgYSBkb20gZWxlbWVudCwgcmVkdWNlIHRoZSBtYXJnaW5cblx0XHRcdFx0XHRpZiAoc2V0dGluZ3MubWFyZ2luKSB7XG5cdFx0XHRcdFx0XHRhdHRyW2tleV0gLT0gcGFyc2VJbnQodGFyZy5jc3MoJ21hcmdpbicrUG9zKSwgMTApIHx8IDA7XG5cdFx0XHRcdFx0XHRhdHRyW2tleV0gLT0gcGFyc2VJbnQodGFyZy5jc3MoJ2JvcmRlcicrUG9zKydXaWR0aCcpLCAxMCkgfHwgMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRhdHRyW2tleV0gKz0gb2Zmc2V0W3Bvc10gfHwgMDtcblxuXHRcdFx0XHRcdGlmIChzZXR0aW5ncy5vdmVyW3Bvc10pIHtcblx0XHRcdFx0XHRcdC8vIFNjcm9sbCB0byBhIGZyYWN0aW9uIG9mIGl0cyB3aWR0aC9oZWlnaHRcblx0XHRcdFx0XHRcdGF0dHJba2V5XSArPSB0YXJnW2F4aXMgPT09ICd4Jz8nd2lkdGgnOidoZWlnaHQnXSgpICogc2V0dGluZ3Mub3Zlcltwb3NdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgdmFsID0gdGFyZ1twb3NdO1xuXHRcdFx0XHRcdC8vIEhhbmRsZSBwZXJjZW50YWdlIHZhbHVlc1xuXHRcdFx0XHRcdGF0dHJba2V5XSA9IHZhbC5zbGljZSAmJiB2YWwuc2xpY2UoLTEpID09PSAnJScgP1xuXHRcdFx0XHRcdFx0cGFyc2VGbG9hdCh2YWwpIC8gMTAwICogbWF4XG5cdFx0XHRcdFx0XHQ6IHZhbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE51bWJlciBvciAnbnVtYmVyJ1xuXHRcdFx0XHRpZiAoc2V0dGluZ3MubGltaXQgJiYgL15cXGQrJC8udGVzdChhdHRyW2tleV0pKSB7XG5cdFx0XHRcdFx0Ly8gQ2hlY2sgdGhlIGxpbWl0c1xuXHRcdFx0XHRcdGF0dHJba2V5XSA9IGF0dHJba2V5XSA8PSAwID8gMCA6IE1hdGgubWluKGF0dHJba2V5XSwgbWF4KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIERvbid0IHdhc3RlIHRpbWUgYW5pbWF0aW5nLCBpZiB0aGVyZSdzIG5vIG5lZWQuXG5cdFx0XHRcdGlmICghaSAmJiBzZXR0aW5ncy5heGlzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRpZiAocHJldiA9PT0gYXR0cltrZXldKSB7XG5cdFx0XHRcdFx0XHQvLyBObyBhbmltYXRpb24gbmVlZGVkXG5cdFx0XHRcdFx0XHRhdHRyID0ge307XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChxdWV1ZSkge1xuXHRcdFx0XHRcdFx0Ly8gSW50ZXJtZWRpYXRlIGFuaW1hdGlvblxuXHRcdFx0XHRcdFx0YW5pbWF0ZShzZXR0aW5ncy5vbkFmdGVyRmlyc3QpO1xuXHRcdFx0XHRcdFx0Ly8gRG9uJ3QgYW5pbWF0ZSB0aGlzIGF4aXMgYWdhaW4gaW4gdGhlIG5leHQgaXRlcmF0aW9uLlxuXHRcdFx0XHRcdFx0YXR0ciA9IHt9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGFuaW1hdGUoc2V0dGluZ3Mub25BZnRlcik7XG5cblx0XHRcdGZ1bmN0aW9uIGFuaW1hdGUoY2FsbGJhY2spIHtcblx0XHRcdFx0dmFyIG9wdHMgPSAkLmV4dGVuZCh7fSwgc2V0dGluZ3MsIHtcblx0XHRcdFx0XHQvLyBUaGUgcXVldWUgc2V0dGluZyBjb25mbGljdHMgd2l0aCBhbmltYXRlKClcblx0XHRcdFx0XHQvLyBGb3JjZSBpdCB0byBhbHdheXMgYmUgdHJ1ZVxuXHRcdFx0XHRcdHF1ZXVlOiB0cnVlLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiBkdXJhdGlvbixcblx0XHRcdFx0XHRjb21wbGV0ZTogY2FsbGJhY2sgJiYgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKGVsZW0sIHRhcmcsIHNldHRpbmdzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkZWxlbS5hbmltYXRlKGF0dHIsIG9wdHMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdC8vIE1heCBzY3JvbGxpbmcgcG9zaXRpb24sIHdvcmtzIG9uIHF1aXJrcyBtb2RlXG5cdC8vIEl0IG9ubHkgZmFpbHMgKG5vdCB0b28gYmFkbHkpIG9uIElFLCBxdWlya3MgbW9kZS5cblx0JHNjcm9sbFRvLm1heCA9IGZ1bmN0aW9uKGVsZW0sIGF4aXMpIHtcblx0XHR2YXIgRGltID0gYXhpcyA9PT0gJ3gnID8gJ1dpZHRoJyA6ICdIZWlnaHQnLFxuXHRcdFx0c2Nyb2xsID0gJ3Njcm9sbCcrRGltO1xuXG5cdFx0aWYgKCFpc1dpbihlbGVtKSlcblx0XHRcdHJldHVybiBlbGVtW3Njcm9sbF0gLSAkKGVsZW0pW0RpbS50b0xvd2VyQ2FzZSgpXSgpO1xuXG5cdFx0dmFyIHNpemUgPSAnY2xpZW50JyArIERpbSxcblx0XHRcdGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtLmRvY3VtZW50LFxuXHRcdFx0aHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQsXG5cdFx0XHRib2R5ID0gZG9jLmJvZHk7XG5cblx0XHRyZXR1cm4gTWF0aC5tYXgoaHRtbFtzY3JvbGxdLCBib2R5W3Njcm9sbF0pIC0gTWF0aC5taW4oaHRtbFtzaXplXSwgYm9keVtzaXplXSk7XG5cdH07XG5cblx0ZnVuY3Rpb24gYm90aCh2YWwpIHtcblx0XHRyZXR1cm4gJC5pc0Z1bmN0aW9uKHZhbCkgfHwgJC5pc1BsYWluT2JqZWN0KHZhbCkgPyB2YWwgOiB7IHRvcDp2YWwsIGxlZnQ6dmFsIH07XG5cdH1cblxuXHQvLyBBZGQgc3BlY2lhbCBob29rcyBzbyB0aGF0IHdpbmRvdyBzY3JvbGwgcHJvcGVydGllcyBjYW4gYmUgYW5pbWF0ZWRcblx0JC5Ud2Vlbi5wcm9wSG9va3Muc2Nyb2xsTGVmdCA9IFxuXHQkLlR3ZWVuLnByb3BIb29rcy5zY3JvbGxUb3AgPSB7XG5cdFx0Z2V0OiBmdW5jdGlvbih0KSB7XG5cdFx0XHRyZXR1cm4gJCh0LmVsZW0pW3QucHJvcF0oKTtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24odCkge1xuXHRcdFx0dmFyIGN1cnIgPSB0aGlzLmdldCh0KTtcblx0XHRcdC8vIElmIGludGVycnVwdCBpcyB0cnVlIGFuZCB1c2VyIHNjcm9sbGVkLCBzdG9wIGFuaW1hdGluZ1xuXHRcdFx0aWYgKHQub3B0aW9ucy5pbnRlcnJ1cHQgJiYgdC5fbGFzdCAmJiB0Ll9sYXN0ICE9PSBjdXJyKSB7XG5cdFx0XHRcdHJldHVybiAkKHQuZWxlbSkuc3RvcCgpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIG5leHQgPSBNYXRoLnJvdW5kKHQubm93KTtcblx0XHRcdC8vIERvbid0IHdhc3RlIENQVVxuXHRcdFx0Ly8gQnJvd3NlcnMgZG9uJ3QgcmVuZGVyIGZsb2F0aW5nIHBvaW50IHNjcm9sbFxuXHRcdFx0aWYgKGN1cnIgIT09IG5leHQpIHtcblx0XHRcdFx0JCh0LmVsZW0pW3QucHJvcF0obmV4dCk7XG5cdFx0XHRcdHQuX2xhc3QgPSB0aGlzLmdldCh0KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Ly8gQU1EIHJlcXVpcmVtZW50XG5cdHJldHVybiAkc2Nyb2xsVG87XG59KTtcbiJdfQ==