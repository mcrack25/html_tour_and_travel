!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){"use strict";function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var n=this._events=this._events||{},i=n[e]=n[e]||[];return i.indexOf(t)==-1&&i.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var n=this._onceEvents=this._onceEvents||{},i=n[e]=n[e]||{};return i[t]=!0,this}},t.off=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){var i=n.indexOf(t);return i!=-1&&n.splice(i,1),this}},t.emitEvent=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){n=n.slice(0),t=t||[];for(var i=this._onceEvents&&this._onceEvents[e],s=0;s<n.length;s++){var o=n[s],f=i&&i[o];f&&(this.off(e,o),delete i[o]),o.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2LWVtaXR0ZXIuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwiZmFjdG9yeSIsImRlZmluZSIsImFtZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJFdkVtaXR0ZXIiLCJ3aW5kb3ciLCJ0aGlzIiwicHJvdG8iLCJwcm90b3R5cGUiLCJvbiIsImV2ZW50TmFtZSIsImxpc3RlbmVyIiwiZXZlbnRzIiwiX2V2ZW50cyIsImxpc3RlbmVycyIsImluZGV4T2YiLCJwdXNoIiwib25jZSIsIm9uY2VFdmVudHMiLCJfb25jZUV2ZW50cyIsIm9uY2VMaXN0ZW5lcnMiLCJvZmYiLCJsZW5ndGgiLCJpbmRleCIsInNwbGljZSIsImVtaXRFdmVudCIsImFyZ3MiLCJzbGljZSIsImkiLCJpc09uY2UiLCJhcHBseSIsImFsbE9mZiJdLCJtYXBwaW5ncyI6IkNBUUUsU0FBVUEsRUFBUUMsR0FHSSxrQkFBVkMsU0FBd0JBLE9BQU9DLElBRXpDRCxPQUFRRCxHQUNtQixnQkFBVkcsU0FBc0JBLE9BQU9DLFFBRTlDRCxPQUFPQyxRQUFVSixJQUdqQkQsRUFBT00sVUFBWUwsS0FHSCxtQkFBVk0sUUFBd0JBLE9BQVNDLEtBQU0sV0FFakQsWUFFQSxTQUFTRixNQUVULEdBQUlHLEdBQVFILEVBQVVJLFNBaUZ0QixPQS9FQUQsR0FBTUUsR0FBSyxTQUFVQyxFQUFXQyxHQUM5QixHQUFNRCxHQUFjQyxFQUFwQixDQUlBLEdBQUlDLEdBQVNOLEtBQUtPLFFBQVVQLEtBQUtPLFlBRTdCQyxFQUFZRixFQUFRRixHQUFjRSxFQUFRRixNQU05QyxPQUpLSSxHQUFVQyxRQUFTSixRQUN0QkcsRUFBVUUsS0FBTUwsR0FHWEwsT0FHVEMsRUFBTVUsS0FBTyxTQUFVUCxFQUFXQyxHQUNoQyxHQUFNRCxHQUFjQyxFQUFwQixDQUlBTCxLQUFLRyxHQUFJQyxFQUFXQyxFQUdwQixJQUFJTyxHQUFhWixLQUFLYSxZQUFjYixLQUFLYSxnQkFFckNDLEVBQWdCRixFQUFZUixHQUFjUSxFQUFZUixNQUkxRCxPQUZBVSxHQUFlVCxJQUFhLEVBRXJCTCxPQUdUQyxFQUFNYyxJQUFNLFNBQVVYLEVBQVdDLEdBQy9CLEdBQUlHLEdBQVlSLEtBQUtPLFNBQVdQLEtBQUtPLFFBQVNILEVBQzlDLElBQU1JLEdBQWNBLEVBQVVRLE9BQTlCLENBR0EsR0FBSUMsR0FBUVQsRUFBVUMsUUFBU0osRUFLL0IsT0FKS1ksUUFDSFQsRUFBVVUsT0FBUUQsRUFBTyxHQUdwQmpCLE9BR1RDLEVBQU1rQixVQUFZLFNBQVVmLEVBQVdnQixHQUNyQyxHQUFJWixHQUFZUixLQUFLTyxTQUFXUCxLQUFLTyxRQUFTSCxFQUM5QyxJQUFNSSxHQUFjQSxFQUFVUSxPQUE5QixDQUlBUixFQUFZQSxFQUFVYSxNQUFNLEdBQzVCRCxFQUFPQSxLQUlQLEtBQU0sR0FGRk4sR0FBZ0JkLEtBQUthLGFBQWViLEtBQUthLFlBQWFULEdBRWhEa0IsRUFBRSxFQUFHQSxFQUFJZCxFQUFVUSxPQUFRTSxJQUFNLENBQ3pDLEdBQUlqQixHQUFXRyxFQUFVYyxHQUNyQkMsRUFBU1QsR0FBaUJBLEVBQWVULEVBQ3hDa0IsS0FHSHZCLEtBQUtlLElBQUtYLEVBQVdDLFNBRWRTLEdBQWVULElBR3hCQSxFQUFTbUIsTUFBT3hCLEtBQU1vQixHQUd4QixNQUFPcEIsUUFHVEMsRUFBTXdCLE9BQVMsaUJBQ056QixNQUFLTyxjQUNMUCxNQUFLYSxhQUdQZiIsImZpbGUiOiJldi1lbWl0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBFdkVtaXR0ZXIgdjEuMS4wXG4gKiBMaWwnIGV2ZW50IGVtaXR0ZXJcbiAqIE1JVCBMaWNlbnNlXG4gKi9cblxuLyoganNoaW50IHVudXNlZDogdHJ1ZSwgdW5kZWY6IHRydWUsIHN0cmljdDogdHJ1ZSAqL1xuXG4oIGZ1bmN0aW9uKCBnbG9iYWwsIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKiBnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCB3aW5kb3cgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTUQgLSBSZXF1aXJlSlNcbiAgICBkZWZpbmUoIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KUyAtIEJyb3dzZXJpZnksIFdlYnBhY2tcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICBnbG9iYWwuRXZFbWl0dGVyID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbigpIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIEV2RW1pdHRlcigpIHt9XG5cbnZhciBwcm90byA9IEV2RW1pdHRlci5wcm90b3R5cGU7XG5cbnByb3RvLm9uID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHNldCBldmVudHMgaGFzaFxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgbGlzdGVuZXJzIGFycmF5XG4gIHZhciBsaXN0ZW5lcnMgPSBldmVudHNbIGV2ZW50TmFtZSBdID0gZXZlbnRzWyBldmVudE5hbWUgXSB8fCBbXTtcbiAgLy8gb25seSBhZGQgb25jZVxuICBpZiAoIGxpc3RlbmVycy5pbmRleE9mKCBsaXN0ZW5lciApID09IC0xICkge1xuICAgIGxpc3RlbmVycy5wdXNoKCBsaXN0ZW5lciApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5vbmNlID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFkZCBldmVudFxuICB0aGlzLm9uKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gIC8vIHNldCBvbmNlIGZsYWdcbiAgLy8gc2V0IG9uY2VFdmVudHMgaGFzaFxuICB2YXIgb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgb25jZUxpc3RlbmVycyBvYmplY3RcbiAgdmFyIG9uY2VMaXN0ZW5lcnMgPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdIHx8IHt9O1xuICAvLyBzZXQgZmxhZ1xuICBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9mZiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YoIGxpc3RlbmVyICk7XG4gIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgbGlzdGVuZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uZW1pdEV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgYXJncyApIHtcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGNvcHkgb3ZlciB0byBhdm9pZCBpbnRlcmZlcmVuY2UgaWYgLm9mZigpIGluIGxpc3RlbmVyXG4gIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgwKTtcbiAgYXJncyA9IGFyZ3MgfHwgW107XG4gIC8vIG9uY2Ugc3R1ZmZcbiAgdmFyIG9uY2VMaXN0ZW5lcnMgPSB0aGlzLl9vbmNlRXZlbnRzICYmIHRoaXMuX29uY2VFdmVudHNbIGV2ZW50TmFtZSBdO1xuXG4gIGZvciAoIHZhciBpPTA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldXG4gICAgdmFyIGlzT25jZSA9IG9uY2VMaXN0ZW5lcnMgJiYgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICBpZiAoIGlzT25jZSApIHtcbiAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lclxuICAgICAgLy8gcmVtb3ZlIGJlZm9yZSB0cmlnZ2VyIHRvIHByZXZlbnQgcmVjdXJzaW9uXG4gICAgICB0aGlzLm9mZiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAgICAgLy8gdW5zZXQgb25jZSBmbGFnXG4gICAgICBkZWxldGUgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICB9XG4gICAgLy8gdHJpZ2dlciBsaXN0ZW5lclxuICAgIGxpc3RlbmVyLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmFsbE9mZiA9IGZ1bmN0aW9uKCkge1xuICBkZWxldGUgdGhpcy5fZXZlbnRzO1xuICBkZWxldGUgdGhpcy5fb25jZUV2ZW50cztcbn07XG5cbnJldHVybiBFdkVtaXR0ZXI7XG5cbn0pKTtcbiJdfQ==