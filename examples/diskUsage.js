/*** Generated by streamline --lines-mark 0.1.6 - DO NOT EDIT ***/

var __global = typeof global !== 'undefined' ? global : window;
function __cb(_, fn){ var ctx = __global.__context; return function(err, result){ __global.__context = ctx; if (err) return _(err); return fn(null, result); } }
function __nt(_, fn){ var i = 0; var cb = __cb(_, fn); var safeCb = function(){ try { cb(); } catch (ex) { __propagate(cb, ex); } }; if (typeof process != "undefined" && typeof process.nextTick == "function") return function(){ if (++i % 20 == 0) process.nextTick(safeCb); else cb(); }; else return function(){ if (++i % 20 == 0) setTimeout(safeCb); else cb(); }; }
function __propagate(_, err){ try { _(err); } catch (ex) { __trap(ex); } }
function __trap(err){ if (err) { if (__global.__context && __global.__context.errorHandler) __global.__context.errorHandler(err); else console.error("UNCAUGHT EXCEPTION: " + ex.message + "\n" + ex.stack); } }
            (function(_) {
              var __ = (_ = (_ || __trap));
              {
                var __ = (_ = (_ || __trap));
/*    11 */     var fs = require("fs");
/*    13 */     function du(_, path) {
                  var __ = (_ = (_ || __trap));
/*    14 */       var total = 0;
/*    15 */       return fs.stat(path, __cb(_, function(__0, stat) {
                    return function(__) {
/*    16 */           if (stat.isFile()) {
/*    17 */             return fs.readFile(path, __cb(_, function(__0, __2) {
/*    17 */               total += __2.length;
                          return __();
                        }.bind(this)));
                      }
                       else {
/*    19 */             if (stat.isDirectory()) {
/*    20 */               return fs.readdir(path, __cb(_, function(__0, files) {
/*    21 */                 var i = 0;
                            var __5 = false;
                            return function(__break) {
                              var __loop = __nt(_, function() {
                                var __ = __loop;
                                if (__5) {
/*    21 */                       i++;
                                }
                                 else {
                                  __5 = true;
                                }
                              ;
/*    21 */                     if ((i < files.length)) {
/*    22 */                       return du(__cb(_, function(__0, __4) {
/*    22 */                         total += __4;
                                    return __();
/*    22 */                       }.bind(this)), ((path + "/") + files[i]));
                                }
                                 else {
                                  return __break();
                                }
                              ;
                              }.bind(this));
                              return __loop();
                            }.call(this, function() {
/*    24 */                   console.log(((path + ": ") + total));
                              return __();
                            }.bind(this));
                          }.bind(this)));
                        }
/*    26 */              else {
/*    27 */               console.log((path + ": odd file"));
                        }
                      ;
                        return __();
                      }
                    ;
                    }.call(this, function() {
/*    29 */           return _(null, total);
                    }.bind(this));
                  }.bind(this)));
                };
/*    32 */     var p = ((process.argv.length > 2) ? process.argv[2] : ".");
/*    34 */     var t0 = Date.now();
/*    35 */     return du(__cb(_, function() {
/*    36 */       console.log((("completed in " + ((Date.now() - t0))) + " ms"));
                  return __();
/*    35 */     }.bind(this)), p);
              };
            }).call(this);