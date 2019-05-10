!function (n) {
    var r = {};

    function t(u) {
        if (r[u]) return r[u].exports;
        var e = r[u] = {i: u, l: !1, exports: {}};
        return n[u].call(e.exports, e, e.exports, t), e.l = !0, e.exports
    }

    t.m = n, t.c = r, t.d = function (n, r, u) {
        t.o(n, r) || Object.defineProperty(n, r, {enumerable: !0, get: u})
    }, t.r = function (n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(n, "__esModule", {value: !0})
    }, t.t = function (n, r) {
        if (1 & r && (n = t(n)), 8 & r) return n;
        if (4 & r && "object" == typeof n && n && n.__esModule) return n;
        var u = Object.create(null);
        if (t.r(u), Object.defineProperty(u, "default", {
            enumerable: !0,
            value: n
        }), 2 & r && "string" != typeof n) for (var e in n) t.d(u, e, function (r) {
            return n[r]
        }.bind(null, e));
        return u
    }, t.n = function (n) {
        var r = n && n.__esModule ? function () {
            return n.default
        } : function () {
            return n
        };
        return t.d(r, "a", r), r
    }, t.o = function (n, r) {
        return Object.prototype.hasOwnProperty.call(n, r)
    }, t.p = "", t(t.s = 0)
}([function (n, r, t) {
    n.exports = t(1)
}, function (n, r, t) {
    const u = t(2).createInterface(process.stdin, {}), {Elm: e} = t(3), o = e.Worker.init();
    o.ports.cout.subscribe(n => {
        console.log(n)
    }), u.on("line", n => {
        o.ports.cin.send(n)
    })
}, function (n, r) {
    n.exports = require("readline")
}, function (n, r) {
    !function (n) {
        "use strict";

        function r(n, r, t) {
            return t.a = n, t.f = r, t
        }

        function t(n) {
            return r(2, n, function (r) {
                return function (t) {
                    return n(r, t)
                }
            })
        }

        function u(n) {
            return r(3, n, function (r) {
                return function (t) {
                    return function (u) {
                        return n(r, t, u)
                    }
                }
            })
        }

        function e(n) {
            return r(4, n, function (r) {
                return function (t) {
                    return function (u) {
                        return function (e) {
                            return n(r, t, u, e)
                        }
                    }
                }
            })
        }

        function o(n) {
            return r(5, n, function (r) {
                return function (t) {
                    return function (u) {
                        return function (e) {
                            return function (o) {
                                return n(r, t, u, e, o)
                            }
                        }
                    }
                }
            })
        }

        function f(n) {
            return r(6, n, function (r) {
                return function (t) {
                    return function (u) {
                        return function (e) {
                            return function (o) {
                                return function (f) {
                                    return n(r, t, u, e, o, f)
                                }
                            }
                        }
                    }
                }
            })
        }

        function i(n, r, t) {
            return 2 === n.a ? n.f(r, t) : n(r)(t)
        }

        function c(n, r, t, u) {
            return 3 === n.a ? n.f(r, t, u) : n(r)(t)(u)
        }

        function a(n, r, t, u, e) {
            return 4 === n.a ? n.f(r, t, u, e) : n(r)(t)(u)(e)
        }

        function b(n, r, t, u, e, o) {
            return 5 === n.a ? n.f(r, t, u, e, o) : n(r)(t)(u)(e)(o)
        }

        var v = {$: 0};

        function l(n, r) {
            return {$: 1, a: n, b: r}
        }

        var s = t(l);

        function h(n) {
            for (var r = v, t = n.length; t--;) r = l(n[t], r);
            return r
        }

        function d(n) {
            for (var r = []; n.b; n = n.b) r.push(n.a);
            return r
        }

        var g = u(function (n, r, t) {
            for (var u = []; r.b && t.b; r = r.b, t = t.b) u.push(i(n, r.a, t.a));
            return h(u)
        });
        e(function (n, r, t, u) {
            for (var e = []; r.b && t.b && u.b; r = r.b, t = t.b, u = u.b) e.push(c(n, r.a, t.a, u.a));
            return h(e)
        }), o(function (n, r, t, u, e) {
            for (var o = []; r.b && t.b && u.b && e.b; r = r.b, t = t.b, u = u.b, e = e.b) o.push(a(n, r.a, t.a, u.a, e.a));
            return h(o)
        }), f(function (n, r, t, u, e, o) {
            for (var f = []; r.b && t.b && u.b && e.b && o.b; r = r.b, t = t.b, u = u.b, e = e.b, o = o.b) f.push(b(n, r.a, t.a, u.a, e.a, o.a));
            return h(f)
        }), t(function (n, r) {
            return h(d(r).sort(function (r, t) {
                return y(n(r), n(t))
            }))
        }), t(function (n, r) {
            return h(d(r).sort(function (r, t) {
                var u = i(n, r, t);
                return u === yn ? 0 : u === On ? -1 : 1
            }))
        });

        function p(n, r) {
            for (var t, u = [], e = $(n, r, 0, u); e && (t = u.pop()); e = $(t.a, t.b, 0, u)) ;
            return e
        }

        function $(n, r, t, u) {
            if (t > 100) return u.push(O(n, r)), !0;
            if (n === r) return !0;
            if ("object" != typeof n || null === n || null === r) return "function" == typeof n && x(5), !1;
            for (var e in n.$ < 0 && (n = wn(n), r = wn(r)), n) if (!$(n[e], r[e], t + 1, u)) return !1;
            return !0
        }

        t(p), t(function (n, r) {
            return !p(n, r)
        });

        function y(n, r, t) {
            if ("object" != typeof n) return n === r ? 0 : n < r ? -1 : 1;
            if (void 0 === n.$) return (t = y(n.a, r.a)) ? t : (t = y(n.b, r.b)) ? t : y(n.c, r.c);
            for (; n.b && r.b && !(t = y(n.a, r.a)); n = n.b, r = r.b) ;
            return t || (n.b ? 1 : r.b ? -1 : 0)
        }

        t(function (n, r) {
            return y(n, r) < 0
        }), t(function (n, r) {
            return y(n, r) < 1
        }), t(function (n, r) {
            return y(n, r) > 0
        }), t(function (n, r) {
            return y(n, r) >= 0
        }), t(function (n, r) {
            var t = y(n, r);
            return t < 0 ? On : t ? An : yn
        });
        var A = 0;

        function O(n, r) {
            return {a: n, b: r}
        }

        function j(n) {
            return n
        }

        t(function (n, r) {
            if ("string" == typeof n) return n + r;
            if (!n.b) return r;
            var t = l(n.a, r);
            n = n.b;
            for (var u = t; n.b; n = n.b) u = u.b = l(n.a, r);
            return t
        });
        var m = u(function (n, r, t) {
            for (var u = new Array(n), e = 0; e < n; e++) u[e] = t(r + e);
            return u
        }), w = t(function (n, r) {
            for (var t = new Array(n), u = 0; u < n && r.b; u++) t[u] = r.a, r = r.b;
            return t.length = u, O(t, r)
        }), M = (t(function (n, r) {
            return r[n]
        }), u(function (n, r, t) {
            for (var u = t.length, e = new Array(u), o = 0; o < u; o++) e[o] = t[o];
            return e[n] = r, e
        }), t(function (n, r) {
            for (var t = r.length, u = new Array(t + 1), e = 0; e < t; e++) u[e] = r[e];
            return u[t] = n, u
        }), u(function (n, r, t) {
            for (var u = t.length, e = 0; e < u; e++) r = i(n, t[e], r);
            return r
        }), u(function (n, r, t) {
            for (var u = t.length - 1; u >= 0; u--) r = i(n, t[u], r);
            return r
        }));
        t(function (n, r) {
            for (var t = r.length, u = new Array(t), e = 0; e < t; e++) u[e] = n(r[e]);
            return u
        }), u(function (n, r, t) {
            for (var u = t.length, e = new Array(u), o = 0; o < u; o++) e[o] = i(n, r + o, t[o]);
            return e
        }), u(function (n, r, t) {
            return t.slice(n, r)
        }), u(function (n, r, t) {
            var u = r.length, e = n - u;
            e > t.length && (e = t.length);
            for (var o = new Array(u + e), f = 0; f < u; f++) o[f] = r[f];
            for (f = 0; f < e; f++) o[f + u] = t[f];
            return o
        }), t(function (n, r) {
            return r
        }), t(function (n, r) {
            return console.log(n + ": <internals>"), r
        });

        function x(n) {
            throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + n + ".md")
        }

        t(function (n, r) {
            return n + r
        }), t(function (n, r) {
            return n - r
        }), t(function (n, r) {
            return n * r
        }), t(function (n, r) {
            return n / r
        }), t(function (n, r) {
            return n / r | 0
        }), t(Math.pow), t(function (n, r) {
            return r % n
        }), t(function (n, r) {
            var t = r % n;
            return 0 === n ? x(11) : t > 0 && n < 0 || t < 0 && n > 0 ? t + n : t
        }), Math.PI, Math.E, Math.cos, Math.sin, Math.tan, Math.acos, Math.asin, Math.atan, t(Math.atan2);
        var C = Math.ceil, E = Math.floor, T = (Math.round, Math.sqrt, Math.log);
        isNaN;
        t(function (n, r) {
            return n && r
        }), t(function (n, r) {
            return n || r
        }), t(function (n, r) {
            return n !== r
        });
        t(function (n, r) {
            return n + r
        });
        t(function (n, r) {
            return n + r
        });
        t(function (n, r) {
            for (var t = r.length, u = new Array(t), e = 0; e < t;) {
                var o = r.charCodeAt(e);
                55296 <= o && o <= 56319 ? (u[e] = n(j(r[e] + r[e + 1])), e += 2) : (u[e] = n(j(r[e])), e++)
            }
            return u.join("")
        }), t(function (n, r) {
            for (var t = [], u = r.length, e = 0; e < u;) {
                var o = r[e], f = r.charCodeAt(e);
                e++, 55296 <= f && f <= 56319 && (o += r[e], e++), n(j(o)) && t.push(o)
            }
            return t.join("")
        });
        u(function (n, r, t) {
            for (var u = t.length, e = 0; e < u;) {
                var o = t[e], f = t.charCodeAt(e);
                e++, 55296 <= f && f <= 56319 && (o += t[e], e++), r = i(n, j(o), r)
            }
            return r
        }), u(function (n, r, t) {
            for (var u = t.length; u--;) {
                var e = t[u], o = t.charCodeAt(u);
                56320 <= o && o <= 57343 && (e = t[--u] + e), r = i(n, j(e), r)
            }
            return r
        });
        var N = t(function (n, r) {
            return r.split(n)
        }), S = t(function (n, r) {
            return r.join(n)
        });
        u(function (n, r, t) {
            return t.slice(n, r)
        });
        t(function (n, r) {
            for (var t = r.length; t--;) {
                var u = r[t], e = r.charCodeAt(t);
                if (56320 <= e && e <= 57343 && (u = r[--t] + u), n(j(u))) return !0
            }
            return !1
        });
        var P = t(function (n, r) {
            for (var t = r.length; t--;) {
                var u = r[t], e = r.charCodeAt(t);
                if (56320 <= e && e <= 57343 && (u = r[--t] + u), !n(j(u))) return !1
            }
            return !0
        });
        t(function (n, r) {
            return r.indexOf(n) > -1
        }), t(function (n, r) {
            return 0 === r.indexOf(n)
        }), t(function (n, r) {
            return r.length >= n.length && r.lastIndexOf(n) === r.length - n.length
        }), t(function (n, r) {
            var t = n.length;
            if (t < 1) return v;
            for (var u = 0, e = []; (u = r.indexOf(n, u)) > -1;) e.push(u), u += t;
            return h(e)
        });

        function J(n) {
            return {$: 2, b: n}
        }

        J(function (n) {
            return "number" != typeof n ? D("an INT", n) : -2147483647 < n && n < 2147483647 && (0 | n) === n ? Hn(n) : !isFinite(n) || n % 1 ? D("an INT", n) : Hn(n)
        }), J(function (n) {
            return "boolean" == typeof n ? Hn(n) : D("a BOOL", n)
        }), J(function (n) {
            return "number" == typeof n ? Hn(n) : D("a FLOAT", n)
        }), J(function (n) {
            return Hn(G(n))
        });
        var I = J(function (n) {
            return "string" == typeof n ? Hn(n) : n instanceof String ? Hn(n + "") : D("a STRING", n)
        });
        t(function (n, r) {
            return {$: 6, d: n, b: r}
        }), t(function (n, r) {
            return {$: 7, e: n, b: r}
        });

        function R(n, r) {
            return {$: 9, f: n, g: r}
        }

        t(function (n, r) {
            return {$: 10, b: r, h: n}
        });
        t(function (n, r) {
            return R(n, [r])
        }), u(function (n, r, t) {
            return R(n, [r, t])
        }), e(function (n, r, t, u) {
            return R(n, [r, t, u])
        }), o(function (n, r, t, u, e) {
            return R(n, [r, t, u, e])
        }), f(function (n, r, t, u, e, o) {
            return R(n, [r, t, u, e, o])
        }), r(7, L = function (n, r, t, u, e, o, f) {
            return R(n, [r, t, u, e, o, f])
        }, function (n) {
            return function (r) {
                return function (t) {
                    return function (u) {
                        return function (e) {
                            return function (o) {
                                return function (f) {
                                    return L(n, r, t, u, e, o, f)
                                }
                            }
                        }
                    }
                }
            }
        }), function (n) {
            r(8, n, function (r) {
                return function (t) {
                    return function (u) {
                        return function (e) {
                            return function (o) {
                                return function (f) {
                                    return function (i) {
                                        return function (c) {
                                            return n(r, t, u, e, o, f, i, c)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            })
        }(function (n, r, t, u, e, o, f, i) {
            return R(n, [r, t, u, e, o, f, i])
        }), function (n) {
            r(9, n, function (r) {
                return function (t) {
                    return function (u) {
                        return function (e) {
                            return function (o) {
                                return function (f) {
                                    return function (i) {
                                        return function (c) {
                                            return function (a) {
                                                return n(r, t, u, e, o, f, i, c, a)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            })
        }(function (n, r, t, u, e, o, f, i, c) {
            return R(n, [r, t, u, e, o, f, i, c])
        }), t(function (n, r) {
            try {
                return B(n, JSON.parse(r))
            } catch (n) {
                return Yn(i(Kn, "This is not valid JSON! " + n.message, G(r)))
            }
        });
        var L, _ = t(function (n, r) {
            return B(n, W(r))
        });

        function B(n, r) {
            switch (n.$) {
                case 2:
                    return n.b(r);
                case 5:
                    return null === r ? Hn(n.c) : D("null", r);
                case 3:
                    return q(r) ? k(n.b, r, h) : D("a LIST", r);
                case 4:
                    return q(r) ? k(n.b, r, F) : D("an ARRAY", r);
                case 6:
                    var t = n.d;
                    if ("object" != typeof r || null === r || !(t in r)) return D("an OBJECT with a field named `" + t + "`", r);
                    var u = B(n.b, r[t]);
                    return $n(u) ? u : Yn(i(Qn, t, u.a));
                case 7:
                    var e = n.e;
                    if (!q(r)) return D("an ARRAY", r);
                    if (e >= r.length) return D("a LONGER array. Need index " + e + " but only see " + r.length + " entries", r);
                    u = B(n.b, r[e]);
                    return $n(u) ? u : Yn(i(Un, e, u.a));
                case 8:
                    if ("object" != typeof r || null === r || q(r)) return D("an OBJECT", r);
                    var o = v;
                    for (var f in r) if (r.hasOwnProperty(f)) {
                        u = B(n.b, r[f]);
                        if (!$n(u)) return Yn(i(Qn, f, u.a));
                        o = l(O(f, u.a), o)
                    }
                    return Hn(In(o));
                case 9:
                    for (var c = n.f, a = n.g, b = 0; b < a.length; b++) {
                        u = B(a[b], r);
                        if (!$n(u)) return u;
                        c = c(u.a)
                    }
                    return Hn(c);
                case 10:
                    u = B(n.b, r);
                    return $n(u) ? B(n.h(u.a), r) : u;
                case 11:
                    for (var s = v, d = n.g; d.b; d = d.b) {
                        u = B(d.a, r);
                        if ($n(u)) return u;
                        s = l(u.a, s)
                    }
                    return Yn(Vn(In(s)));
                case 1:
                    return Yn(i(Kn, n.a, G(r)));
                case 0:
                    return Hn(n.a)
            }
        }

        function k(n, r, t) {
            for (var u = r.length, e = new Array(u), o = 0; o < u; o++) {
                var f = B(n, r[o]);
                if (!$n(f)) return Yn(i(Un, o, f.a));
                e[o] = f.a
            }
            return Hn(t(e))
        }

        function q(n) {
            return Array.isArray(n) || "undefined" != typeof FileList && n instanceof FileList
        }

        function F(n) {
            return i(zn, n.length, function (r) {
                return n[r]
            })
        }

        function D(n, r) {
            return Yn(i(Kn, "Expecting " + n, G(r)))
        }

        var z = t(function (n, r) {
            return JSON.stringify(W(r), null, n) + ""
        });

        function G(n) {
            return n
        }

        function W(n) {
            return n
        }

        u(function (n, r, t) {
            return t[n] = W(r), t
        });
        G(null);

        function Y(n) {
            return {$: 0, a: n}
        }

        function H(n) {
            return {$: 2, b: n, c: null}
        }

        var K = t(function (n, r) {
            return {$: 3, b: n, d: r}
        });
        t(function (n, r) {
            return {$: 4, b: n, d: r}
        });
        var Q = 0;

        function U(n) {
            var r = {$: 0, e: Q++, f: n, g: null, h: []};
            return rn(r), r
        }

        function V(n, r) {
            n.h.push(r), rn(n)
        }

        var X = t(function (n, r) {
            return H(function (t) {
                V(n, r), t(Y(A))
            })
        });
        var Z = !1, nn = [];

        function rn(n) {
            if (nn.push(n), !Z) {
                for (Z = !0; n = nn.shift();) tn(n);
                Z = !1
            }
        }

        function tn(n) {
            for (; n.f;) {
                var r = n.f.$;
                if (0 === r || 1 === r) {
                    for (; n.g && n.g.$ !== r;) n.g = n.g.i;
                    if (!n.g) return;
                    n.f = n.g.b(n.f.a), n.g = n.g.i
                } else {
                    if (2 === r) return void (n.f.c = n.f.b(function (r) {
                        n.f = r, rn(n)
                    }));
                    if (5 === r) {
                        if (0 === n.h.length) return;
                        n.f = n.f.b(n.h.shift())
                    } else n.g = {$: 3 === r ? 0 : 1, b: n.f.b, i: n.g}, n.f = n.f.d
                }
            }
        }

        var un = e(function (n, r, t, u) {
            return function (n, r, t, u, e, o) {
                var f = i(_, n, G(r ? r.flags : void 0));
                $n(f) || x(2);
                var c = {}, a = (f = t(f.a)).a, b = o(l, a), v = function (n, r) {
                    var t;
                    for (var u in en) {
                        var e = en[u];
                        e.a && ((t = t || {})[u] = e.a(u, r)), n[u] = on(e, r)
                    }
                    return t
                }(c, l);

                function l(n, r) {
                    f = i(u, n, a), b(a = f.a, r), cn(c, f.b, e(a))
                }

                return cn(c, f.b, e(a)), v ? {ports: v} : {}
            }(r, u, n.at, n.aB, n.az, function () {
                return function () {
                }
            })
        });
        var en = {};

        function on(n, r) {
            var t = {g: r, h: void 0}, u = n.c, e = n.d, o = n.e, f = n.f;
            return t.h = U(i(K, function n(r) {
                return i(K, n, {
                    $: 5, b: function (n) {
                        var i = n.a;
                        return 0 === n.$ ? c(e, t, i, r) : o && f ? a(u, t, i.i, i.j, r) : c(u, t, o ? i.i : i.j, r)
                    }
                })
            }, n.b))
        }

        t(function (n, r) {
            return H(function (t) {
                n.g(r), t(Y(A))
            })
        }), t(function (n, r) {
            return i(X, n.h, {$: 0, a: r})
        });

        function fn(n) {
            return function (r) {
                return {$: 1, k: n, l: r}
            }
        }

        t(function (n, r) {
            return {$: 3, n: n, o: r}
        });

        function cn(n, r, t) {
            var u = {};
            for (var e in an(!0, r, u, null), an(!1, t, u, null), n) V(n[e], {$: "fx", a: u[e] || {i: v, j: v}})
        }

        function an(n, r, t, u) {
            switch (r.$) {
                case 1:
                    var e = r.k, o = function (n, r, t, u) {
                        return i(n ? en[r].e : en[r].f, function (n) {
                            for (var r = t; r; r = r.q) n = r.p(n);
                            return n
                        }, u)
                    }(n, e, u, r.l);
                    return void (t[e] = function (n, r, t) {
                        return t = t || {i: v, j: v}, n ? t.i = l(r, t.i) : t.j = l(r, t.j), t
                    }(n, o, t[e]));
                case 2:
                    for (var f = r.m; f.b; f = f.b) an(n, f.a, t, u);
                    return;
                case 3:
                    return void an(n, r.o, t, {p: r.n, q: u})
            }
        }

        function bn(n) {
            en[n] && x(3)
        }

        var vn = t(function (n, r) {
            return r
        });

        function ln(n) {
            var r, t = [], e = en[n].r, o = (r = 0, H(function (n) {
                var t = setTimeout(function () {
                    n(Y(A))
                }, r);
                return function () {
                    clearTimeout(t)
                }
            }));
            return en[n].b = o, en[n].c = u(function (n, r, u) {
                for (; r.b; r = r.b) for (var f = t, i = W(e(r.a)), c = 0; c < f.length; c++) f[c](i);
                return o
            }), {
                subscribe: function (n) {
                    t.push(n)
                }, unsubscribe: function (n) {
                    var r = (t = t.slice()).indexOf(n);
                    r >= 0 && t.splice(r, 1)
                }
            }
        }

        var sn = t(function (n, r) {
            return function (t) {
                return n(r(t))
            }
        });

        function hn(n, r) {
            var t = v, e = en[n].r, o = Y(null);
            return en[n].b = o, en[n].c = u(function (n, r, u) {
                return t = r, o
            }), {
                send: function (n) {
                    var u = i(_, e, G(n));
                    $n(u) || x(4, u.a);
                    for (var o = u.a, f = t; f.b; f = f.b) r(f.a(o))
                }
            }
        }

        var dn, gn, pn, $n = function (n) {
            return !n.$
        }, yn = 1, An = 2, On = 0, jn = u(function (n, r, t) {
            for (; ;) {
                if (-2 === t.$) return r;
                var u = t.b, e = t.c, o = t.d, f = t.e, i = n, a = c(n, u, e, c(jn, n, r, f));
                n = i, r = a, t = o
            }
        }), mn = s, wn = function (n) {
            return c(jn, u(function (n, r, t) {
                return i(mn, O(n, r), t)
            }), v, n)
        }, Mn = M, xn = (u(function (n, r, u) {
            var e = u.c, o = u.d, f = t(function (r, t) {
                if (r.$) {
                    var u = r.a;
                    return c(Mn, n, t, u)
                }
                var e = r.a;
                return c(Mn, f, t, e)
            });
            return c(Mn, f, c(Mn, n, r, o), e)
        }), e(function (n, r, t, u) {
            return {$: 0, a: n, b: r, c: t, d: u}
        })), Cn = C, En = t(function (n, r) {
            return T(r) / T(n)
        }), Tn = Cn(i(En, 2, 32)), Nn = [], Sn = a(xn, 0, Tn, Nn, Nn), Pn = w, Jn = u(function (n, r, t) {
            for (; ;) {
                if (!t.b) return r;
                var u = t.a, e = t.b, o = n, f = i(n, u, r);
                n = o, r = f, t = e
            }
        }), In = function (n) {
            return c(Jn, mn, v, n)
        }, Rn = t(function (n, r) {
            for (; ;) {
                var t = i(Pn, 32, n), u = t.a, e = t.b, o = i(mn, {$: 0, a: u}, r);
                if (!e.b) return In(o);
                n = e, r = o
            }
        }), Ln = (t(function (n, r) {
            return r(n)
        }), t(function (n, r) {
            for (; ;) {
                var t = Cn(r / 32);
                if (1 === t) return i(Pn, 32, n).a;
                n = i(Rn, n, v), r = t
            }
        })), _n = (t(function (n, r) {
            return n(r)
        }), E), Bn = t(function (n, r) {
            return y(n, r) > 0 ? n : r
        }), kn = function (n) {
            return n.length
        }, qn = t(function (n, r) {
            if (r.a) {
                var t = 32 * r.a, u = _n(i(En, 32, t - 1)), e = n ? In(r.d) : r.d, o = i(Ln, e, r.a);
                return a(xn, kn(r.c) + t, i(Bn, 5, u * Tn), o, r.c)
            }
            return a(xn, kn(r.c), Tn, Nn, r.c)
        }), Fn = m, Dn = o(function (n, r, t, u, e) {
            for (; ;) {
                if (r < 0) return i(qn, !1, {d: u, a: t / 32 | 0, c: e});
                var o = {$: 1, a: c(Fn, 32, r, n)};
                n = n, r = r - 32, t = t, u = i(mn, o, u), e = e
            }
        }), zn = t(function (n, r) {
            if (n <= 0) return Sn;
            var t = n % 32, u = c(Fn, t, n - t, r);
            return b(Dn, r, n - t - 32, n, v, u)
        }), Gn = function (n) {
            return {$: 0, a: n}
        }, Wn = {$: 1}, Yn = function (n) {
            return {$: 1, a: n}
        }, Hn = function (n) {
            return {$: 0, a: n}
        }, Kn = t(function (n, r) {
            return {$: 3, a: n, b: r}
        }), Qn = t(function (n, r) {
            return {$: 0, a: n, b: r}
        }), Un = t(function (n, r) {
            return {$: 1, a: n, b: r}
        }), Vn = function (n) {
            return {$: 2, a: n}
        }, Xn = function (n) {
            var r = n.charCodeAt(0);
            return 55296 <= r && r <= 56319 ? 1024 * (r - 55296) + n.charCodeAt(1) - 56320 + 65536 : r
        }, Zn = function (n) {
            var r = Xn(n);
            return 97 <= r && r <= 122
        }, nr = function (n) {
            var r = Xn(n);
            return r <= 90 && 65 <= r
        }, rr = function (n) {
            return Zn(n) || nr(n)
        }, tr = function (n) {
            return Zn(n) || nr(n) || function (n) {
                var r = Xn(n);
                return r <= 57 && 48 <= r
            }(n)
        }, ur = function (n) {
            return c(Jn, t(function (n, r) {
                return r + 1
            }), 0, n)
        }, er = g, or = u(function (n, r, t) {
            for (; ;) {
                if (!(y(n, r) < 1)) return t;
                var u = n, e = r - 1, o = i(mn, r, t);
                n = u, r = e, t = o
            }
        }), fr = t(function (n, r) {
            return c(or, n, r, v)
        }), ir = t(function (n, r) {
            return c(er, n, i(fr, 0, ur(r) - 1), r)
        }), cr = P, ar = function (n) {
            return n + ""
        }, br = t(function (n, r) {
            return i(S, n, d(r))
        }), vr = function (n) {
            var r = n.charCodeAt(0);
            return r ? Gn(55296 <= r && r <= 56319 ? O(j(n[0] + n[1]), n.slice(2)) : O(j(n[0]), n.slice(1))) : Wn
        }, lr = t(function (n, r) {
            return h(i(N, n, r))
        }), sr = function (n) {
            return i(br, "\n    ", i(lr, "\n", n))
        }, hr = z, dr = t(function (n, r) {
            return "\n\n(" + ar(n + 1) + ") " + sr(gr(r))
        }), gr = function (n) {
            return i(pr, n, v)
        }, pr = t(function (n, r) {
            n:for (; ;) switch (n.$) {
                case 0:
                    var t = n.a, u = n.b, e = function () {
                        var n = vr(t);
                        if (1 === n.$) return !1;
                        var r = n.a, u = r.a, e = r.b;
                        return rr(u) && i(cr, tr, e)
                    }(), o = u, f = i(mn, e ? "." + t : "['" + t + "']", r);
                    n = o, r = f;
                    continue n;
                case 1:
                    var c = n.a, a = (u = n.b, "[" + ar(c) + "]");
                    o = u, f = i(mn, a, r);
                    n = o, r = f;
                    continue n;
                case 2:
                    var b = n.a;
                    if (b.b) {
                        if (b.b.b) {
                            var v = (r.b ? "The Json.Decode.oneOf at json" + i(br, "", In(r)) : "Json.Decode.oneOf") + " failed in the following " + ar(ur(b)) + " ways:";
                            return i(br, "\n\n", i(mn, v, i(ir, dr, b)))
                        }
                        n = o = u = b.a, r = f = r;
                        continue n
                    }
                    return "Ran into a Json.Decode.oneOf with no possibilities" + (r.b ? " at json" + i(br, "", In(r)) : "!");
                default:
                    var l = n.a, s = n.b;
                    return (v = r.b ? "Problem with the value at json" + i(br, "", In(r)) + ":\n\n    " : "Problem with the given value:\n\n") + (sr(i(hr, 4, s)) + "\n\n") + l
            }
        }), $r = O({N: "", E: 0}, function (n) {
            return {$: 2, m: n}
        }(v)), yr = t(function (n, r) {
            return {$: 0, a: n, b: r}
        }), Ar = (gn = I, bn(dn = "cin"), en[dn] = {f: sn, r: gn, a: hn}, fn(dn)), Or = function (n, r) {
            return bn(n), en[n] = {e: vn, r: r, a: ln}, fn(n)
        }("cout", G), jr = function (n) {
            return n < 0 ? -n : n
        }, mr = u(function (n, r, t) {
            return n(r(t))
        }), wr = function (n) {
            return !n
        }, Mr = t(function (n, r) {
            for (; ;) {
                if (!r.b) return !1;
                var t = r.a, u = r.b;
                if (n(t)) return !0;
                n = n, r = u
            }
        }), xr = t(function (n, r) {
            return !i(Mr, i(mr, wr, n), r)
        }), Cr = e(function (n, r, t, u) {
            if (u.b) {
                var e = u.a, o = u.b;
                if (o.b) {
                    var f = o.a, b = o.b;
                    if (b.b) {
                        var v = b.a, l = b.b;
                        if (l.b) {
                            var s = l.a, h = l.b;
                            return i(n, e, i(n, f, i(n, v, i(n, s, t > 500 ? c(Jn, n, r, In(h)) : a(Cr, n, r, t + 1, h)))))
                        }
                        return i(n, e, i(n, f, i(n, v, r)))
                    }
                    return i(n, e, i(n, f, r))
                }
                return i(n, e, r)
            }
            return r
        }), Er = u(function (n, r, t) {
            return a(Cr, n, r, 0, t)
        }), Tr = t(function (n, r) {
            return r.b ? c(Er, mn, r, n) : n
        }), Nr = function (n) {
            return c(Er, Tr, v, n)
        }, Sr = t(function (n, r) {
            return c(Er, t(function (r, t) {
                return n(r) ? i(mn, r, t) : t
            }), v, r)
        }), Pr = t(function (n, r) {
            return c(Er, t(function (r, t) {
                return i(mn, n(r), t)
            }), v, r)
        }), Jr = u(function (n, r, t) {
            for (; ;) {
                if (r <= 0) return n;
                n = i(mn, t, n), r = r - 1, t = t
            }
        }), Ir = t(function (n, r) {
            return c(Jr, v, n, r)
        }), Rr = t(function (n, r) {
            return r.$ ? n : r.a
        }), Lr = t(function (n, r) {
            if (p(ur(r), n)) return h([r]);
            var u = i(Rr, O(0, 0), function (n) {
                if (n.b) {
                    var r = n.a;
                    return n.b, Gn(r)
                }
                return Wn
            }(r)), e = i(ir, t(function (n, r) {
                return O(n, 1 + u.b)
            }), i(Ir, n, 0)), o = i(Sr, function (n) {
                return i(xr, function (r) {
                    var t = r.b, u = r.a, e = n.b, o = n.a;
                    return !p(o, u) && !p(e, t) && !p(jr(o - u), jr(e - t))
                }, r)
            }, e);
            return Nr(i(Pr, function (r) {
                return i(Lr, n, r)
            }, i(Pr, function (n) {
                return i(mn, n, r)
            }, o)))
        }), _r = function (n) {
            var r = function (n) {
                return Nr(i(Pr, Lr(n), i(ir, t(function (n, r) {
                    return h([O(n, 0)])
                }), i(Ir, n, 0))))
            }(n);
            return ar(ur(r))
        }, Br = function (n) {
            for (var r = 0, t = n.charCodeAt(0), u = 43 == t || 45 == t ? 1 : 0, e = u; e < n.length; ++e) {
                var o = n.charCodeAt(e);
                if (o < 48 || 57 < o) return Wn;
                r = 10 * r + o - 48
            }
            return e == u ? Wn : Gn(45 == t ? -r : r)
        }, kr = function (n) {
            return {$: 0, a: n}
        }, qr = un({
            at: function (n) {
                return $r
            }, az: function (n) {
                return Ar(yr(n.E))
            }, aB: t(function (n, r) {
                var t = n.a, u = n.b, e = Br(u), o = function () {
                    if (e.$) return "正しい数字を入れてください";
                    var n = e.a;
                    return _r(n)
                }();
                return O(function (n, r) {
                    var t = {};
                    for (var u in n) t[u] = n[u];
                    for (var u in r) t[u] = r[u];
                    return t
                }(r, {E: t + 1}), Or(o))
            })
        });
        pn = {Worker: {init: qr(kr(0))(0)}}, n.Elm ? function n(r, t) {
            for (var u in t) u in r ? "init" == u ? x(6) : n(r[u], t[u]) : r[u] = t[u]
        }(n.Elm, pn) : n.Elm = pn
    }(this)
}]);