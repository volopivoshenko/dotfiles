"use strict";
var marketplace = (() => {
  var f = Object.create,
    i = Object.defineProperty,
    r = Object.defineProperties,
    u = Object.getOwnPropertyDescriptor,
    n = Object.getOwnPropertyDescriptors,
    l = Object.getOwnPropertyNames,
    a = Object.getOwnPropertySymbols,
    s = Object.getPrototypeOf,
    h = Object.prototype.hasOwnProperty,
    o = Object.prototype.propertyIsEnumerable,
    c = (e, t, r) => (t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
    d = (e, t) => {
      for (var r in (t = t || {})) h.call(t, r) && c(e, r, t[r]);
      if (a) for (var r of a(t)) o.call(t, r) && c(e, r, t[r]);
      return e;
    },
    p = (e, t) => r(e, n(t));
  e = {
    "node_modules/chroma-js/chroma.js"(e, t) {
      var r;
      (r = function () {
        for (
          var e = function (e, t, r) {
              return void 0 === r && (r = 1), e < (t = void 0 === t ? 0 : t) ? t : r < e ? r : e;
            },
            I = e,
            q = {},
            t = 0,
            U = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"];
          t < U.length;
          t += 1
        ) {
          var F = U[t];
          q["[object " + F + "]"] = F.toLowerCase();
        }
        function r(e) {
          return q[Object.prototype.toString.call(e)] || "object";
        }
        function D() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          if ("object" === V(e[0]) && e[0].constructor && e[0].constructor === this.constructor) return e[0];
          var r = !1;
          if (!(o = J(e))) {
            (r = !0),
              f.sorted ||
                ((f.autodetect = f.autodetect.sort(function (e, t) {
                  return t.p - e.p;
                })),
                (f.sorted = !0));
            for (var n = 0, a = f.autodetect; n < a.length; n += 1) {
              var o,
                c = a[n];
              if ((o = c.test.apply(c, e))) break;
            }
          }
          if (!f.format[o]) throw new Error("unknown format: " + e);
          (r = f.format[o].apply(null, r ? e : e.slice(0, -1))),
            (this._rgb = X(r)),
            3 === this._rgb.length && this._rgb.push(1);
        }
        function n() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(n.Color, [null].concat(e)))();
        }
        function G() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var r = (e = Q(e, "cmyk"))[0],
            n = e[1],
            a = e[2],
            o = e[3],
            c = 4 < e.length ? e[4] : 1;
          return 1 === o
            ? [0, 0, 0, c]
            : [
                1 <= r ? 0 : 255 * (1 - r) * (1 - o),
                1 <= n ? 0 : 255 * (1 - n) * (1 - o),
                1 <= a ? 0 : 255 * (1 - a) * (1 - o),
                c,
              ];
        }
        function a(e) {
          return Math.round(100 * e) / 100;
        }
        function W() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var r,
            n,
            a = (e = ce(e, "rgba"))[0],
            o = e[1],
            c = e[2],
            f = ((a /= 255), (o /= 255), (c /= 255), Math.min(a, o, c)),
            i = Math.max(a, o, c),
            u = (i + f) / 2;
          return (
            i === f ? ((r = 0), (n = Number.NaN)) : (r = u < 0.5 ? (i - f) / (i + f) : (i - f) / (2 - i - f)),
            a == i
              ? (n = (o - c) / (i - f))
              : o == i
              ? (n = 2 + (c - a) / (i - f))
              : c == i && (n = 4 + (a - o) / (i - f)),
            (n *= 60) < 0 && (n += 360),
            3 < e.length && void 0 !== e[3] ? [n, r, u, e[3]] : [n, r, u]
          );
        }
        function B() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var r = fe(e, "rgba"),
            n = ie(e) || "rgb";
          return "hsl" == n.substr(0, 3)
            ? ue(le(r), n)
            : ((r[0] = se(r[0])),
              (r[1] = se(r[1])),
              (r[2] = se(r[2])),
              ("rgba" === n || (3 < r.length && r[3] < 1)) && ((r[3] = 3 < r.length ? r[3] : 1), (n = "rgba")),
              n + "(" + r.slice(0, "rgb" === n ? 3 : 4).join(",") + ")");
        }
        function T() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var r,
            n,
            a,
            o = (e = he(e, "hsl"))[0],
            c = e[1],
            f = e[2];
          if (0 === c) r = n = a = 255 * f;
          else {
            var i = [0, 0, 0],
              u = [0, 0, 0],
              l = f < 0.5 ? f * (1 + c) : f + c - f * c,
              s = 2 * f - l,
              c = o / 360;
            (i[0] = c + 1 / 3), (i[1] = c), (i[2] = c - 1 / 3);
            for (var h = 0; h < 3; h++)
              i[h] < 0 && (i[h] += 1),
                1 < i[h] && --i[h],
                6 * i[h] < 1
                  ? (u[h] = s + 6 * (l - s) * i[h])
                  : 2 * i[h] < 1
                  ? (u[h] = l)
                  : 3 * i[h] < 2
                  ? (u[h] = s + (l - s) * (2 / 3 - i[h]) * 6)
                  : (u[h] = s);
            (r = (f = [de(255 * u[0]), de(255 * u[1]), de(255 * u[2])])[0]), (n = f[1]), (a = f[2]);
          }
          return 3 < e.length ? [r, n, a, e[3]] : [r, n, a, 1];
        }
        function z(e) {
          var t, r;
          if (((e = e.toLowerCase().trim()), be.format.named))
            try {
              return be.format.named(e);
            } catch (e) {}
          if ((t = e.match(ge))) {
            for (var n = t.slice(1, 4), a = 0; a < 3; a++) n[a] = +n[a];
            return (n[3] = 1), n;
          }
          if ((t = e.match(me))) {
            for (var o = t.slice(1, 5), c = 0; c < 4; c++) o[c] = +o[c];
            return o;
          }
          if ((t = e.match(ve))) {
            for (var f = t.slice(1, 4), i = 0; i < 3; i++) f[i] = Me(2.55 * f[i]);
            return (f[3] = 1), f;
          }
          if ((t = e.match(ye))) {
            for (var u = t.slice(1, 5), l = 0; l < 3; l++) u[l] = Me(2.55 * u[l]);
            return (u[3] = +u[3]), u;
          }
          return (t = e.match(we))
            ? (((r = t.slice(1, 4))[1] *= 0.01), (r[2] *= 0.01), ((r = pe(r))[3] = 1), r)
            : (t = e.match(ke))
            ? (((r = t.slice(1, 4))[1] *= 0.01), (r[2] *= 0.01), ((e = pe(r))[3] = +t[4]), e)
            : void 0;
        }
        var Y = r,
          H = r,
          o = Math.PI,
          e = {
            clip_rgb: function (e) {
              (e._clipped = !1), (e._unclipped = e.slice(0));
              for (var t = 0; t <= 3; t++)
                t < 3
                  ? ((e[t] < 0 || 255 < e[t]) && (e._clipped = !0), (e[t] = I(e[t], 0, 255)))
                  : 3 === t && (e[t] = I(e[t], 0, 1));
              return e;
            },
            limit: e,
            type: r,
            unpack: function (t, e) {
              return (
                void 0 === e && (e = null),
                3 <= t.length
                  ? Array.prototype.slice.call(t)
                  : "object" == Y(t[0]) && e
                  ? e
                      .split("")
                      .filter(function (e) {
                        return void 0 !== t[0][e];
                      })
                      .map(function (e) {
                        return t[0][e];
                      })
                  : t[0]
              );
            },
            last: function (e) {
              var t;
              return !(e.length < 2) && ((t = e.length - 1), "string" == H(e[t])) ? e[t].toLowerCase() : null;
            },
            PI: o,
            TWOPI: 2 * o,
            PITHIRD: o / 3,
            DEG2RAD: o / 180,
            RAD2DEG: 180 / o,
          },
          o = { format: {}, autodetect: [] },
          J = e.last,
          X = e.clip_rgb,
          V = e.type,
          f = o,
          c =
            ((D.prototype.toString = function () {
              return "function" == V(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]";
            }),
            D),
          i = ((n.Color = c), (n.version = "2.4.2"), n),
          Z = e.unpack,
          K = Math.max,
          Q = e.unpack,
          u = i,
          ee = c,
          l = o,
          te = e.unpack,
          re = e.type,
          ne = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = Z(e, "rgb"),
              n = r[0],
              a = r[1],
              r = r[2],
              o = 1 - K((n /= 255), K((a /= 255), (r /= 255))),
              c = o < 1 ? 1 / (1 - o) : 0;
            return [(1 - n - o) * c, (1 - a - o) * c, (1 - r - o) * c, o];
          },
          ae =
            ((ee.prototype.cmyk = function () {
              return ne(this._rgb);
            }),
            (u.cmyk = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return new (Function.prototype.bind.apply(ee, [null].concat(e, ["cmyk"])))();
            }),
            (l.format.cmyk = G),
            l.autodetect.push({
              p: 2,
              test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (((e = te(e, "cmyk")), "array" === re(e) && 4 === e.length)) return "cmyk";
              },
            }),
            e.unpack),
          oe = e.last,
          ce = e.unpack,
          fe = e.unpack,
          ie = e.last,
          ue = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = ae(e, "hsla"),
              n = oe(e) || "lsa";
            return (
              (r[0] = a(r[0] || 0)),
              (r[1] = a(100 * r[1]) + "%"),
              (r[2] = a(100 * r[2]) + "%"),
              "hsla" === n || (3 < r.length && r[3] < 1)
                ? ((r[3] = 3 < r.length ? r[3] : 1), (n = "hsla"))
                : (r.length = 3),
              n + "(" + r.join(",") + ")"
            );
          },
          le = W,
          se = Math.round,
          he = e.unpack,
          de = Math.round,
          pe = T,
          be = o,
          ge = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
          me = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
          ve = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
          ye = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
          we = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
          ke = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
          Me = Math.round;
        z.test = function (e) {
          return ge.test(e) || me.test(e) || ve.test(e) || ye.test(e) || we.test(e) || ke.test(e);
        };
        function Se() {
          for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
          var n,
            a,
            o,
            c = (t = Ye(t, "hcg"))[0],
            f = t[1],
            i = t[2],
            u = ((i *= 255), 255 * f);
          if (0 === f) n = a = o = i;
          else {
            360 < (c = 360 === c ? 0 : c) && (c -= 360), c < 0 && (c += 360);
            var l = He((c /= 60)),
              c = c - l,
              s = i * (1 - f),
              h = s + u * (1 - c),
              d = s + u * c,
              p = s + u;
            switch (l) {
              case 0:
                (n = (e = [p, d, s])[0]), (a = e[1]), (o = e[2]);
                break;
              case 1:
                (n = (e = [h, p, s])[0]), (a = e[1]), (o = e[2]);
                break;
              case 2:
                (n = (e = [s, p, d])[0]), (a = e[1]), (o = e[2]);
                break;
              case 3:
                (n = (e = [s, h, p])[0]), (a = e[1]), (o = e[2]);
                break;
              case 4:
                (n = (e = [d, s, p])[0]), (a = e[1]), (o = e[2]);
                break;
              case 5:
                (n = (e = [p, s, h])[0]), (a = e[1]), (o = e[2]);
            }
          }
          return [n, a, o, 3 < t.length ? t[3] : 1];
        }
        function _e() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var r = (o = Ke(e, "rgba"))[0],
            n = o[1],
            a = o[2],
            o = o[3],
            c = Qe(e) || "auto",
            f =
              (void 0 === o && (o = 1),
              "auto" === c && (c = o < 1 ? "rgba" : "rgb"),
              (f = "000000" + ((s(r) << 16) | (s(n) << 8) | s(a)).toString(16)).substr(f.length - 6)),
            i = (i = "0" + s(255 * o).toString(16)).substr(i.length - 2);
          switch (c.toLowerCase()) {
            case "rgba":
              return "#" + f + i;
            case "argb":
              return "#" + i + f;
            default:
              return "#" + f;
          }
        }
        function Ne(e) {
          var t;
          if (e.match(et))
            return (
              3 === (e = 4 !== e.length && 7 !== e.length ? e : e.substr(1)).length &&
                (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
              [(t = parseInt(e, 16)) >> 16, (t >> 8) & 255, 255 & t, 1]
            );
          if (e.match(tt))
            return (
              4 === (e = 5 !== e.length && 9 !== e.length ? e : e.substr(1)).length &&
                (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]),
              [
                ((t = parseInt(e, 16)) >> 24) & 255,
                (t >> 16) & 255,
                (t >> 8) & 255,
                Math.round(((255 & t) / 255) * 100) / 100,
              ]
            );
          throw new Error("unknown hex color: " + e);
        }
        function xe() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var r,
            n,
            a,
            o = (e = lt(e, "hsi"))[0],
            c = e[1],
            f = e[2];
          return (
            isNaN(o) && (o = 0),
            isNaN(c) && (c = 0),
            360 < o && (o -= 360),
            o < 0 && (o += 360),
            (o /= 360) < 1 / 3
              ? (n = 1 - ((a = (1 - c) / 3) + (r = (1 + (c * d(h * o)) / d(ht - h * o)) / 3)))
              : o < 2 / 3
              ? (a = 1 - ((r = (1 - c) / 3) + (n = (1 + (c * d(h * (o -= 1 / 3))) / d(ht - h * o)) / 3)))
              : (r = 1 - ((n = (1 - c) / 3) + (a = (1 + (c * d(h * (o -= 2 / 3))) / d(ht - h * o)) / 3))),
            [255 * (r = st(f * r * 3)), 255 * (n = st(f * n * 3)), 255 * (a = st(f * a * 3)), 3 < e.length ? e[3] : 1]
          );
        }
        function $e() {
          for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
          var n,
            a,
            o,
            c = (t = _t(t, "hsv"))[0],
            f = t[1],
            i = t[2];
          if (((i *= 255), 0 === f)) n = a = o = i;
          else {
            360 < (c = 360 === c ? 0 : c) && (c -= 360), c < 0 && (c += 360);
            var u = Nt((c /= 60)),
              c = c - u,
              l = i * (1 - f),
              s = i * (1 - f * c),
              h = i * (1 - f * (1 - c));
            switch (u) {
              case 0:
                (n = (e = [i, h, l])[0]), (a = e[1]), (o = e[2]);
                break;
              case 1:
                (n = (e = [s, i, l])[0]), (a = e[1]), (o = e[2]);
                break;
              case 2:
                (n = (e = [l, i, h])[0]), (a = e[1]), (o = e[2]);
                break;
              case 3:
                (n = (e = [l, s, i])[0]), (a = e[1]), (o = e[2]);
                break;
              case 4:
                (n = (e = [h, l, i])[0]), (a = e[1]), (o = e[2]);
                break;
              case 5:
                (n = (e = [i, l, s])[0]), (a = e[1]), (o = e[2]);
            }
          }
          return [n, a, o, 3 < t.length ? t[3] : 1];
        }
        function Oe() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var r = (a = Ct(e, "rgb"))[0],
            n = a[1],
            a = a[2];
          return (
            (n = n),
            (a = a),
            (r = Et((r = r))),
            (n = Et(n)),
            (a = Et(a)),
            [
              (a =
                116 *
                  (n = (r = [
                    Pt((0.4124564 * r + 0.3575761 * n + 0.1804375 * a) / p.Xn),
                    Pt((0.2126729 * r + 0.7151522 * n + 0.072175 * a) / p.Yn),
                    Pt((0.0193339 * r + 0.119192 * n + 0.9503041 * a) / p.Zn),
                  ])[1]) -
                16) < 0
                ? 0
                : a,
              500 * (r[0] - n),
              200 * (n - r[2]),
            ]
          );
        }
        function je(e) {
          return 255 * (e <= 0.00304 ? 12.92 * e : 1.055 * At(e, 1 / 2.4) - 0.055);
        }
        function Ce(e) {
          return e > b.t1 ? e * e * e : b.t2 * (e - b.t0);
        }
        function Le() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var r = (e = Rt(e, "lab"))[0],
            n = e[1],
            a = e[2],
            r = (r + 16) / 116,
            n = isNaN(n) ? r : r + n / 500,
            a = isNaN(a) ? r : r - a / 200;
          return (
            (r = b.Yn * Ce(r)),
            (n = b.Xn * Ce(n)),
            (a = b.Zn * Ce(a)),
            [
              je(3.2404542 * n - 1.5371385 * r - 0.4985314 * a),
              je(-0.969266 * n + 1.8760108 * r + 0.041556 * a),
              je(0.0556434 * n - 0.2040259 * r + 1.0572252 * a),
              3 < e.length ? e[3] : 1,
            ]
          );
        }
        function Ee() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var r = (a = Dt(e, "lab"))[0],
            n = a[1],
            a = a[2],
            o = Wt(n * n + a * a),
            a = (Bt(a, n) * Gt + 360) % 360;
          return [r, o, (a = 0 === Tt(1e4 * o) ? Number.NaN : a)];
        }
        function Pe() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var r = (a = Jt(e, "lch"))[0],
            n = a[1],
            a = a[2];
          return isNaN(a) && (a = 0), [r, Zt((a *= Xt)) * n, Vt(a) * n];
        }
        function Re() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var r = (e = Kt(e, "lch"))[0],
            n = e[1],
            a = e[2],
            n = (r = Qt(r, n, a))[0],
            a = r[1],
            r = r[2];
          return [(n = er(n, a, r))[0], n[1], n[2], 3 < e.length ? e[3] : 1];
        }
        function Ae() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var r = tr(e, "hcl").reverse();
          return rr.apply(void 0, r);
        }
        function Ie(e) {
          if ("number" == sr(e) && 0 <= e && e <= 16777215) return [e >> 16, (e >> 8) & 255, 255 & e, 1];
          throw new Error("unknown num color: " + e);
        }
        function qe(e) {
          var t,
            r,
            n =
              (e = e / 100) < 66
                ? ((t = 255),
                  (r = e < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (r = e - 2) + 104.49216199393888 * w(r)),
                  e < 20 ? 0 : 0.8274096064007395 * (n = e - 10) - 254.76935184120902 + 115.67994401066147 * w(n))
                : ((t = 351.97690566805693 + 0.114206453784165 * (t = e - 55) - 40.25366309332127 * w(t)),
                  (r = 325.4494125711974 + 0.07943456536662342 * (r = e - 50) - 28.0852963507957 * w(r)),
                  255);
          return [t, r, n, 1];
        }
        function Ue() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var r = (a = Sr(e, "rgb"))[0],
            n = a[1],
            a = a[2],
            r = [$r(r / 255), $r(n / 255), $r(a / 255)],
            o = _r(0.4122214708 * (n = r[0]) + 0.5363325363 * (a = r[1]) + 0.0514459929 * (r = r[2])),
            c = _r(0.2119034982 * n + 0.6806995451 * a + 0.1073969566 * r),
            n = _r(0.0883024619 * n + 0.2817188376 * a + 0.6299787005 * r);
          return [
            0.2104542553 * o + 0.793617785 * c - 0.0040720468 * n,
            1.9779984951 * o - 2.428592205 * c + 0.4505937099 * n,
            0.0259040371 * o + 0.7827717662 * c - 0.808675766 * n,
          ];
        }
        var u = i,
          Fe = c,
          l = o,
          De = e.type,
          Ge = B,
          We = z,
          Be =
            ((Fe.prototype.css = function (e) {
              return Ge(this._rgb, e);
            }),
            (u.css = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return new (Function.prototype.bind.apply(Fe, [null].concat(e, ["css"])))();
            }),
            (l.format.css = We),
            l.autodetect.push({
              p: 5,
              test: function (e) {
                for (var t = [], r = arguments.length - 1; 0 < r--; ) t[r] = arguments[r + 1];
                if (!t.length && "string" === De(e) && We.test(e)) return "css";
              },
            }),
            c),
          u = i,
          l = o,
          Te = e.unpack,
          ze =
            ((l.format.gl = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              var r = Te(e, "rgba");
              return (r[0] *= 255), (r[1] *= 255), (r[2] *= 255), r;
            }),
            (u.gl = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return new (Function.prototype.bind.apply(Be, [null].concat(e, ["gl"])))();
            }),
            (Be.prototype.gl = function () {
              var e = this._rgb;
              return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
            }),
            e.unpack),
          Ye = e.unpack,
          He = Math.floor,
          Je = e.unpack,
          Xe = e.type,
          l = i,
          Ve = c,
          u = o,
          Ze = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r,
              n = ze(e, "rgb"),
              a = n[0],
              o = n[1],
              n = n[2],
              c = Math.min(a, o, n),
              f = Math.max(a, o, n),
              i = f - c;
            return (
              0 == i
                ? (r = Number.NaN)
                : (a === f && (r = (o - n) / i),
                  o === f && (r = 2 + (n - a) / i),
                  n === f && (r = 4 + (a - o) / i),
                  (r *= 60) < 0 && (r += 360)),
              [r, (100 * i) / 255, (c / (255 - i)) * 100]
            );
          },
          Ke =
            ((Ve.prototype.hcg = function () {
              return Ze(this._rgb);
            }),
            (l.hcg = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return new (Function.prototype.bind.apply(Ve, [null].concat(e, ["hcg"])))();
            }),
            (u.format.hcg = Se),
            u.autodetect.push({
              p: 1,
              test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (((e = Je(e, "hcg")), "array" === Xe(e) && 3 === e.length)) return "hcg";
              },
            }),
            e.unpack),
          Qe = e.last,
          s = Math.round,
          et = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
          tt = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
          l = i,
          rt = c,
          nt = e.type,
          u = o,
          at = _e,
          ot =
            ((rt.prototype.hex = function (e) {
              return at(this._rgb, e);
            }),
            (l.hex = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return new (Function.prototype.bind.apply(rt, [null].concat(e, ["hex"])))();
            }),
            (u.format.hex = Ne),
            u.autodetect.push({
              p: 4,
              test: function (e) {
                for (var t = [], r = arguments.length - 1; 0 < r--; ) t[r] = arguments[r + 1];
                if (!t.length && "string" === nt(e) && 0 <= [3, 4, 5, 6, 7, 8, 9].indexOf(e.length)) return "hex";
              },
            }),
            e.unpack),
          ct = e.TWOPI,
          ft = Math.min,
          it = Math.sqrt,
          ut = Math.acos,
          lt = e.unpack,
          st = e.limit,
          h = e.TWOPI,
          ht = e.PITHIRD,
          d = Math.cos,
          dt = e.unpack,
          pt = e.type,
          l = i,
          bt = c,
          u = o,
          gt = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r,
              n = ot(e, "rgb"),
              a = n[0],
              o = n[1],
              n = n[2],
              c = ft((a /= 255), (o /= 255), (n /= 255)),
              f = (a + o + n) / 3,
              c = 0 < f ? 1 - c / f : 0;
            return (
              0 == c
                ? (r = NaN)
                : ((r = (a - o + (a - n)) / 2),
                  (r /= it((a - o) * (a - o) + (a - n) * (o - n))),
                  (r = ut(r)),
                  o < n && (r = ct - r),
                  (r /= ct)),
              [360 * r, c, f]
            );
          },
          mt =
            ((bt.prototype.hsi = function () {
              return gt(this._rgb);
            }),
            (l.hsi = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return new (Function.prototype.bind.apply(bt, [null].concat(e, ["hsi"])))();
            }),
            (u.format.hsi = xe),
            u.autodetect.push({
              p: 2,
              test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (((e = dt(e, "hsi")), "array" === pt(e) && 3 === e.length)) return "hsi";
              },
            }),
            e.unpack),
          vt = e.type,
          l = i,
          yt = c,
          u = o,
          wt = W,
          kt =
            ((yt.prototype.hsl = function () {
              return wt(this._rgb);
            }),
            (l.hsl = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return new (Function.prototype.bind.apply(yt, [null].concat(e, ["hsl"])))();
            }),
            (u.format.hsl = T),
            u.autodetect.push({
              p: 2,
              test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (((e = mt(e, "hsl")), "array" === vt(e) && 3 === e.length)) return "hsl";
              },
            }),
            e.unpack),
          Mt = Math.min,
          St = Math.max,
          _t = e.unpack,
          Nt = Math.floor,
          xt = e.unpack,
          $t = e.type,
          l = i,
          Ot = c,
          u = o,
          jt = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r,
              n,
              a = (e = kt(e, "rgb"))[0],
              o = e[1],
              c = e[2],
              f = Mt(a, o, c),
              i = St(a, o, c),
              f = i - f;
            return (
              0 === i
                ? ((r = Number.NaN), (n = 0))
                : ((n = f / i),
                  a === i && (r = (o - c) / f),
                  o === i && (r = 2 + (c - a) / f),
                  c === i && (r = 4 + (a - o) / f),
                  (r *= 60) < 0 && (r += 360)),
              [r, n, i / 255]
            );
          },
          l =
            ((Ot.prototype.hsv = function () {
              return jt(this._rgb);
            }),
            (l.hsv = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return new (Function.prototype.bind.apply(Ot, [null].concat(e, ["hsv"])))();
            }),
            (u.format.hsv = $e),
            u.autodetect.push({
              p: 2,
              test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (((e = xt(e, "hsv")), "array" === $t(e) && 3 === e.length)) return "hsv";
              },
            }),
            {
              Kn: 18,
              Xn: 0.95047,
              Yn: 1,
              Zn: 1.08883,
              t0: 0.137931034,
              t1: 0.206896552,
              t2: 0.12841855,
              t3: 0.008856452,
            }),
          p = l,
          Ct = e.unpack,
          Lt = Math.pow,
          Et = function (e) {
            return (e /= 255) <= 0.04045 ? e / 12.92 : Lt((e + 0.055) / 1.055, 2.4);
          },
          Pt = function (e) {
            return e > p.t3 ? Lt(e, 1 / 3) : e / p.t2 + p.t0;
          },
          b = l,
          Rt = e.unpack,
          At = Math.pow,
          It = e.unpack,
          qt = e.type,
          u = i,
          Ut = c,
          g = o,
          Ft = Oe,
          Dt =
            ((Ut.prototype.lab = function () {
              return Ft(this._rgb);
            }),
            (u.lab = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return new (Function.prototype.bind.apply(Ut, [null].concat(e, ["lab"])))();
            }),
            (g.format.lab = Le),
            g.autodetect.push({
              p: 2,
              test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (((e = It(e, "lab")), "array" === qt(e) && 3 === e.length)) return "lab";
              },
            }),
            e.unpack),
          Gt = e.RAD2DEG,
          Wt = Math.sqrt,
          Bt = Math.atan2,
          Tt = Math.round,
          zt = e.unpack,
          Yt = Oe,
          Ht = Ee,
          Jt = e.unpack,
          Xt = e.DEG2RAD,
          Vt = Math.sin,
          Zt = Math.cos,
          Kt = e.unpack,
          Qt = Pe,
          er = Le,
          tr = e.unpack,
          rr = Re,
          nr = e.unpack,
          ar = e.type,
          u = i,
          m = c,
          or = o,
          cr = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = zt(e, "rgb"),
              n = r[0],
              a = r[1],
              r = r[2],
              n = Yt(n, a, r),
              a = n[0],
              r = n[1],
              n = n[2];
            return Ht(a, r, n);
          },
          g =
            ((m.prototype.lch = function () {
              return cr(this._rgb);
            }),
            (m.prototype.hcl = function () {
              return cr(this._rgb).reverse();
            }),
            (u.lch = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return new (Function.prototype.bind.apply(m, [null].concat(e, ["lch"])))();
            }),
            (u.hcl = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return new (Function.prototype.bind.apply(m, [null].concat(e, ["hcl"])))();
            }),
            (or.format.lch = Re),
            (or.format.hcl = Ae),
            ["lch", "hcl"].forEach(function (r) {
              return or.autodetect.push({
                p: 2,
                test: function () {
                  for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                  if (((e = nr(e, r)), "array" === ar(e) && 3 === e.length)) return r;
                },
              });
            }),
            {
              aliceblue: "#f0f8ff",
              antiquewhite: "#faebd7",
              aqua: "#00ffff",
              aquamarine: "#7fffd4",
              azure: "#f0ffff",
              beige: "#f5f5dc",
              bisque: "#ffe4c4",
              black: "#000000",
              blanchedalmond: "#ffebcd",
              blue: "#0000ff",
              blueviolet: "#8a2be2",
              brown: "#a52a2a",
              burlywood: "#deb887",
              cadetblue: "#5f9ea0",
              chartreuse: "#7fff00",
              chocolate: "#d2691e",
              coral: "#ff7f50",
              cornflower: "#6495ed",
              cornflowerblue: "#6495ed",
              cornsilk: "#fff8dc",
              crimson: "#dc143c",
              cyan: "#00ffff",
              darkblue: "#00008b",
              darkcyan: "#008b8b",
              darkgoldenrod: "#b8860b",
              darkgray: "#a9a9a9",
              darkgreen: "#006400",
              darkgrey: "#a9a9a9",
              darkkhaki: "#bdb76b",
              darkmagenta: "#8b008b",
              darkolivegreen: "#556b2f",
              darkorange: "#ff8c00",
              darkorchid: "#9932cc",
              darkred: "#8b0000",
              darksalmon: "#e9967a",
              darkseagreen: "#8fbc8f",
              darkslateblue: "#483d8b",
              darkslategray: "#2f4f4f",
              darkslategrey: "#2f4f4f",
              darkturquoise: "#00ced1",
              darkviolet: "#9400d3",
              deeppink: "#ff1493",
              deepskyblue: "#00bfff",
              dimgray: "#696969",
              dimgrey: "#696969",
              dodgerblue: "#1e90ff",
              firebrick: "#b22222",
              floralwhite: "#fffaf0",
              forestgreen: "#228b22",
              fuchsia: "#ff00ff",
              gainsboro: "#dcdcdc",
              ghostwhite: "#f8f8ff",
              gold: "#ffd700",
              goldenrod: "#daa520",
              gray: "#808080",
              green: "#008000",
              greenyellow: "#adff2f",
              grey: "#808080",
              honeydew: "#f0fff0",
              hotpink: "#ff69b4",
              indianred: "#cd5c5c",
              indigo: "#4b0082",
              ivory: "#fffff0",
              khaki: "#f0e68c",
              laserlemon: "#ffff54",
              lavender: "#e6e6fa",
              lavenderblush: "#fff0f5",
              lawngreen: "#7cfc00",
              lemonchiffon: "#fffacd",
              lightblue: "#add8e6",
              lightcoral: "#f08080",
              lightcyan: "#e0ffff",
              lightgoldenrod: "#fafad2",
              lightgoldenrodyellow: "#fafad2",
              lightgray: "#d3d3d3",
              lightgreen: "#90ee90",
              lightgrey: "#d3d3d3",
              lightpink: "#ffb6c1",
              lightsalmon: "#ffa07a",
              lightseagreen: "#20b2aa",
              lightskyblue: "#87cefa",
              lightslategray: "#778899",
              lightslategrey: "#778899",
              lightsteelblue: "#b0c4de",
              lightyellow: "#ffffe0",
              lime: "#00ff00",
              limegreen: "#32cd32",
              linen: "#faf0e6",
              magenta: "#ff00ff",
              maroon: "#800000",
              maroon2: "#7f0000",
              maroon3: "#b03060",
              mediumaquamarine: "#66cdaa",
              mediumblue: "#0000cd",
              mediumorchid: "#ba55d3",
              mediumpurple: "#9370db",
              mediumseagreen: "#3cb371",
              mediumslateblue: "#7b68ee",
              mediumspringgreen: "#00fa9a",
              mediumturquoise: "#48d1cc",
              mediumvioletred: "#c71585",
              midnightblue: "#191970",
              mintcream: "#f5fffa",
              mistyrose: "#ffe4e1",
              moccasin: "#ffe4b5",
              navajowhite: "#ffdead",
              navy: "#000080",
              oldlace: "#fdf5e6",
              olive: "#808000",
              olivedrab: "#6b8e23",
              orange: "#ffa500",
              orangered: "#ff4500",
              orchid: "#da70d6",
              palegoldenrod: "#eee8aa",
              palegreen: "#98fb98",
              paleturquoise: "#afeeee",
              palevioletred: "#db7093",
              papayawhip: "#ffefd5",
              peachpuff: "#ffdab9",
              peru: "#cd853f",
              pink: "#ffc0cb",
              plum: "#dda0dd",
              powderblue: "#b0e0e6",
              purple: "#800080",
              purple2: "#7f007f",
              purple3: "#a020f0",
              rebeccapurple: "#663399",
              red: "#ff0000",
              rosybrown: "#bc8f8f",
              royalblue: "#4169e1",
              saddlebrown: "#8b4513",
              salmon: "#fa8072",
              sandybrown: "#f4a460",
              seagreen: "#2e8b57",
              seashell: "#fff5ee",
              sienna: "#a0522d",
              silver: "#c0c0c0",
              skyblue: "#87ceeb",
              slateblue: "#6a5acd",
              slategray: "#708090",
              slategrey: "#708090",
              snow: "#fffafa",
              springgreen: "#00ff7f",
              steelblue: "#4682b4",
              tan: "#d2b48c",
              teal: "#008080",
              thistle: "#d8bfd8",
              tomato: "#ff6347",
              turquoise: "#40e0d0",
              violet: "#ee82ee",
              wheat: "#f5deb3",
              white: "#ffffff",
              whitesmoke: "#f5f5f5",
              yellow: "#ffff00",
              yellowgreen: "#9acd32",
            }),
          u = c,
          v = o,
          fr = e.type,
          y = g,
          ir = Ne,
          ur = _e,
          lr =
            ((u.prototype.name = function () {
              for (var e = ur(this._rgb, "rgb"), t = 0, r = Object.keys(y); t < r.length; t += 1) {
                var n = r[t];
                if (y[n] === e) return n.toLowerCase();
              }
              return e;
            }),
            (v.format.named = function (e) {
              if (((e = e.toLowerCase()), y[e])) return ir(y[e]);
              throw new Error("unknown color name: " + e);
            }),
            v.autodetect.push({
              p: 5,
              test: function (e) {
                for (var t = [], r = arguments.length - 1; 0 < r--; ) t[r] = arguments[r + 1];
                if (!t.length && "string" === fr(e) && y[e.toLowerCase()]) return "named";
              },
            }),
            e.unpack),
          sr = e.type,
          u = i,
          hr = c,
          v = o,
          dr = e.type,
          pr = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = lr(e, "rgb");
            return (r[0] << 16) + (r[1] << 8) + r[2];
          },
          u =
            ((hr.prototype.num = function () {
              return pr(this._rgb);
            }),
            (u.num = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return new (Function.prototype.bind.apply(hr, [null].concat(e, ["num"])))();
            }),
            (v.format.num = Ie),
            v.autodetect.push({
              p: 5,
              test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (1 === e.length && "number" === dr(e[0]) && 0 <= e[0] && e[0] <= 16777215) return "num";
              },
            }),
            i),
          br = c,
          v = o,
          gr = e.unpack,
          mr = e.type,
          vr = Math.round,
          w =
            ((br.prototype.rgb = function (e) {
              return !1 === (e = void 0 === e ? !0 : e) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(vr);
            }),
            (br.prototype.rgba = function (r) {
              return (
                void 0 === r && (r = !0),
                this._rgb.slice(0, 4).map(function (e, t) {
                  return !(t < 3) || !1 === r ? e : vr(e);
                })
              );
            }),
            (u.rgb = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return new (Function.prototype.bind.apply(br, [null].concat(e, ["rgb"])))();
            }),
            (v.format.rgb = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              var r = gr(e, "rgba");
              return void 0 === r[3] && (r[3] = 1), r;
            }),
            v.autodetect.push({
              p: 3,
              test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (
                  ((e = gr(e, "rgba")),
                  "array" === mr(e) &&
                    (3 === e.length || (4 === e.length && "number" == mr(e[3]) && 0 <= e[3] && e[3] <= 1)))
                )
                  return "rgb";
              },
            }),
            Math.log),
          yr = qe,
          wr = e.unpack,
          kr = Math.round,
          u = i,
          k = c,
          v = o,
          Mr = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            for (var r = wr(e, "rgb"), n = r[0], a = r[2], o = 1e3, c = 4e4; 0.4 < c - o; ) {
              var f,
                i = yr((f = 0.5 * (c + o)));
              i[2] / i[0] >= a / n ? (c = f) : (o = f);
            }
            return kr(f);
          },
          Sr =
            ((k.prototype.temp =
              k.prototype.kelvin =
              k.prototype.temperature =
                function () {
                  return Mr(this._rgb);
                }),
            (u.temp =
              u.kelvin =
              u.temperature =
                function () {
                  for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                  return new (Function.prototype.bind.apply(k, [null].concat(e, ["temp"])))();
                }),
            (v.format.temp = v.format.kelvin = v.format.temperature = qe),
            e.unpack),
          _r = Math.cbrt,
          Nr = Math.pow,
          xr = Math.sign;
        function $r(e) {
          var t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (xr(e) || 1) * Nr((t + 0.055) / 1.055, 2.4);
        }
        function Or() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var r = (e = jr(e, "lab"))[0],
            n = e[1],
            a = e[2],
            o = M(r + 0.3963377774 * n + 0.2158037573 * a, 3),
            c = M(r - 0.1055613458 * n - 0.0638541728 * a, 3),
            r = M(r - 0.0894841775 * n - 1.291485548 * a, 3);
          return [
            255 * Lr(4.0767416621 * o - 3.3077115913 * c + 0.2309699292 * r),
            255 * Lr(-1.2684380046 * o + 2.6097574011 * c - 0.3413193965 * r),
            255 * Lr(-0.0041960863 * o - 0.7034186147 * c + 1.707614701 * r),
            3 < e.length ? e[3] : 1,
          ];
        }
        var jr = e.unpack,
          M = Math.pow,
          Cr = Math.sign;
        function Lr(e) {
          var t = Math.abs(e);
          return 0.0031308 < t ? (Cr(e) || 1) * (1.055 * M(t, 1 / 2.4) - 0.055) : 12.92 * e;
        }
        function Er() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var r = (e = Dr(e, "lch"))[0],
            n = e[1],
            a = e[2],
            n = (r = Gr(r, n, a))[0],
            a = r[1],
            r = r[2];
          return [(n = Wr(n, a, r))[0], n[1], n[2], 3 < e.length ? e[3] : 1];
        }
        var Pr = e.unpack,
          Rr = e.type,
          u = i,
          Ar = c,
          v = o,
          Ir = Ue,
          qr =
            ((Ar.prototype.oklab = function () {
              return Ir(this._rgb);
            }),
            (u.oklab = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return new (Function.prototype.bind.apply(Ar, [null].concat(e, ["oklab"])))();
            }),
            (v.format.oklab = Or),
            v.autodetect.push({
              p: 3,
              test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (((e = Pr(e, "oklab")), "array" === Rr(e) && 3 === e.length)) return "oklab";
              },
            }),
            e.unpack),
          Ur = Ue,
          Fr = Ee,
          Dr = e.unpack,
          Gr = Pe,
          Wr = Or,
          Br = e.unpack,
          Tr = e.type,
          u = i,
          zr = c,
          v = o,
          Yr = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = qr(e, "rgb"),
              n = r[0],
              a = r[1],
              r = r[2],
              n = Ur(n, a, r),
              a = n[0],
              r = n[1],
              n = n[2];
            return Fr(a, r, n);
          },
          Hr =
            ((zr.prototype.oklch = function () {
              return Yr(this._rgb);
            }),
            (u.oklch = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return new (Function.prototype.bind.apply(zr, [null].concat(e, ["oklch"])))();
            }),
            (v.format.oklch = Er),
            v.autodetect.push({
              p: 3,
              test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (((e = Br(e, "oklch")), "array" === Tr(e) && 3 === e.length)) return "oklch";
              },
            }),
            c),
          Jr = e.type;
        Hr.prototype.alpha = function (e, t) {
          return (
            void 0 === t && (t = !1),
            void 0 !== e && "number" === Jr(e)
              ? t
                ? ((this._rgb[3] = e), this)
                : new Hr([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb")
              : this._rgb[3]
          );
        };
        c.prototype.clipped = function () {
          return this._rgb._clipped || !1;
        };
        var S = c,
          Xr = l;
        (S.prototype.darken = function (e) {
          void 0 === e && (e = 1);
          var t = this.lab();
          return (t[0] -= Xr.Kn * e), new S(t, "lab").alpha(this.alpha(), !0);
        }),
          (S.prototype.brighten = function (e) {
            return this.darken(-(e = void 0 === e ? 1 : e));
          }),
          (S.prototype.darker = S.prototype.darken),
          (S.prototype.brighter = S.prototype.brighten);
        function Vr(e, t, r) {
          void 0 === r && (r = 0.5);
          for (var n = [], a = arguments.length - 3; 0 < a--; ) n[a] = arguments[a + 3];
          var o = n[0] || "lrgb";
          if ((x[o] || n.length || (o = Object.keys(x)[0]), x[o]))
            return (
              "object" !== an(e) && (e = new nn(e)),
              "object" !== an(t) && (t = new nn(t)),
              x[o](e, t, r).alpha(e.alpha() + r * (t.alpha() - e.alpha()))
            );
          throw new Error("interpolation mode " + o + " is not defined");
        }
        function _(e, t, r, n) {
          var a, o, c, f, i, u, l, s, h, d;
          return (
            "hsl" === n
              ? ((d = e.hsl()), (a = t.hsl()))
              : "hsv" === n
              ? ((d = e.hsv()), (a = t.hsv()))
              : "hcg" === n
              ? ((d = e.hcg()), (a = t.hcg()))
              : "hsi" === n
              ? ((d = e.hsi()), (a = t.hsi()))
              : "lch" === n || "hcl" === n
              ? ((n = "hcl"), (d = e.hcl()), (a = t.hcl()))
              : "oklch" === n && ((d = e.oklch().reverse()), (a = t.oklch().reverse())),
            ("h" !== n.substr(0, 1) && "oklch" !== n) ||
              ((o = (e = d)[0]), (f = e[1]), (u = e[2]), (c = (t = a)[0]), (i = t[1]), (l = t[2])),
            isNaN(o) || isNaN(c)
              ? isNaN(o)
                ? isNaN(c)
                  ? (h = Number.NaN)
                  : ((h = c), (1 != u && 0 != u) || "hsv" == n || (s = i))
                : ((h = o), (1 != l && 0 != l) || "hsv" == n || (s = f))
              : (h = o + r * (o < c && 180 < c - o ? c - (o + 360) : c < o && 180 < o - c ? c + 360 - o : c - o)),
            void 0 === s && (s = f + r * (i - f)),
            (d = u + r * (l - u)),
            new gn("oklch" === n ? [d, s, h] : [h, s, d], n)
          );
        }
        function Zr(e, t, r) {
          return mn(e, t, r, "lch");
        }
        function Kr(u) {
          function r(e) {
            if (
              ((e = e || ["#fff", "#000"]) &&
                "string" === j(e) &&
                O.brewer &&
                O.brewer[e.toLowerCase()] &&
                (e = O.brewer[e.toLowerCase()]),
              "array" === j(e))
            ) {
              e = (e = 1 === e.length ? [e[0], e[0]] : e).slice(0);
              for (var t = 0; t < e.length; t++) e[t] = O(e[t]);
              for (var r = (i.length = 0); r < e.length; r++) i.push(r / (e.length - 1));
            }
            n(), (b = e);
          }
          function l(e, t) {
            var r, n;
            if ((null == t && (t = !1), isNaN(e) || null === e)) return f;
            if (
              ((n = t ? e : p && 2 < p.length ? k(e) / (p.length - 2) : m !== g ? (e - g) / (m - g) : 1),
              (n = S(n)),
              t || (n = M(n)),
              1 !== w && (n = Pn(n, w)),
              (n = d[0] + n * (1 - d[0] - d[1])),
              (n = Math.min(1, Math.max(0, n))),
              (e = Math.floor(1e4 * n)),
              y && v[e])
            )
              r = v[e];
            else {
              if ("array" === j(b))
                for (var a = 0; a < i.length; a++) {
                  var o = i[a];
                  if (n <= o) {
                    r = b[a];
                    break;
                  }
                  if (o <= n && a === i.length - 1) {
                    r = b[a];
                    break;
                  }
                  if (o < n && n < i[a + 1]) {
                    (n = (n - o) / (i[a + 1] - o)), (r = O.interpolate(b[a], b[a + 1], n, c));
                    break;
                  }
                }
              else "function" === j(b) && (r = b(n));
              y && (v[e] = r);
            }
            return r;
          }
          function n() {
            v = {};
          }
          function s(e) {
            return (e = O(l(e))), a && e[a] ? e[a]() : e;
          }
          var c = "rgb",
            f = O("#ccc"),
            t = 0,
            h = [0, 1],
            i = [],
            d = [0, 0],
            p = !1,
            b = [],
            a = !1,
            g = 0,
            m = 1,
            v = {},
            y = !0,
            w = 1,
            k = function (e) {
              if (null == p) return 0;
              for (var t = p.length - 1, r = 0; r < t && e >= p[r]; ) r++;
              return r - 1;
            },
            M = function (e) {
              return e;
            },
            S = function (e) {
              return e;
            };
          return (
            r(u),
            (s.classes = function (e) {
              var t;
              return null != e
                ? ("array" === j(e)
                    ? (h = [(p = e)[0], e[e.length - 1]])
                    : ((t = O.analyze(h)), (p = 0 === e ? [t.min, t.max] : O.limits(t, "e", e))),
                  s)
                : p;
            }),
            (s.domain = function (r) {
              if (!arguments.length) return h;
              (g = r[0]), (m = r[r.length - 1]), (i = []);
              var e = b.length;
              if (r.length === e && g !== m)
                for (var t = 0, n = Array.from(r); t < n.length; t += 1) {
                  var a = n[t];
                  i.push((a - g) / (m - g));
                }
              else {
                for (var o, c, f = 0; f < e; f++) i.push(f / (e - 1));
                2 < r.length &&
                  ((o = r.map(function (e, t) {
                    return t / (r.length - 1);
                  })),
                  (c = r.map(function (e) {
                    return (e - g) / (m - g);
                  })).every(function (e, t) {
                    return o[t] === e;
                  }) ||
                    (S = function (e) {
                      if (e <= 0 || 1 <= e) return e;
                      for (var t = 0; e >= c[t + 1]; ) t++;
                      var r = (e - c[t]) / (c[t + 1] - c[t]);
                      return o[t] + r * (o[t + 1] - o[t]);
                    }));
              }
              return (h = [g, m]), s;
            }),
            (s.mode = function (e) {
              return arguments.length ? ((c = e), n(), s) : c;
            }),
            (s.range = function (e, t) {
              return r(e), s;
            }),
            (s.out = function (e) {
              return (a = e), s;
            }),
            (s.spread = function (e) {
              return arguments.length ? ((t = e), s) : t;
            }),
            (s.correctLightness = function (e) {
              return (
                n(),
                (M = (e = null == e ? !0 : e)
                  ? function (e) {
                      for (
                        var t = l(0, !0).lab()[0],
                          r = l(1, !0).lab()[0],
                          n = r < t,
                          a = l(e, !0).lab()[0],
                          o = t + (r - t) * e,
                          c = a - o,
                          f = 0,
                          i = 1,
                          u = 20;
                        0.01 < Math.abs(c) && 0 < u--;

                      )
                        n && (c *= -1),
                          (e += c < 0 ? 0.5 * (i - (f = e)) : 0.5 * (f - (i = e))),
                          (a = l(e, !0).lab()[0]),
                          (c = a - o);
                      return e;
                    }
                  : function (e) {
                      return e;
                    }),
                s
              );
            }),
            (s.padding = function (e) {
              return null != e ? ("number" === j(e) && (e = [e, e]), (d = e), s) : d;
            }),
            (s.colors = function (t, r) {
              arguments.length < 2 && (r = "hex");
              var e = [];
              if (0 === arguments.length) e = b.slice(0);
              else if (1 === t) e = [s(0.5)];
              else if (1 < t)
                var n = h[0],
                  a = h[1] - n,
                  e = (function (e, t, r) {
                    for (
                      var n = [], a = e < t, o = r ? (a ? t + 1 : t - 1) : t, c = e;
                      a ? c < o : o < c;
                      a ? c++ : c--
                    )
                      n.push(c);
                    return n;
                  })(0, t, !1).map(function (e) {
                    return s(n + (e / (t - 1)) * a);
                  });
              else {
                u = [];
                var o = [];
                if (p && 2 < p.length)
                  for (var c = 1, f = p.length, i = 1 <= f; i ? c < f : f < c; i ? c++ : c--)
                    o.push(0.5 * (p[c - 1] + p[c]));
                else o = h;
                e = o.map(s);
              }
              return (e = O[r]
                ? e.map(function (e) {
                    return e[r]();
                  })
                : e);
            }),
            (s.cache = function (e) {
              return null != e ? ((y = e), s) : y;
            }),
            (s.gamma = function (e) {
              return null != e ? ((w = e), s) : w;
            }),
            (s.nodata = function (e) {
              return null != e ? ((f = O(e)), s) : f;
            }),
            s
          );
        }
        c.prototype.get = function (e) {
          var e = e.split("."),
            t = e[0],
            e = e[1],
            r = this[t]();
          if (e) {
            var n = t.indexOf(e) - ("ok" === t.substr(0, 2) ? 2 : 0);
            if (-1 < n) return r[n];
            throw new Error("unknown channel " + e + " in mode " + t);
          }
          return r;
        };
        var N = c,
          Qr = e.type,
          en = Math.pow,
          tn =
            ((N.prototype.luminance = function (a) {
              var o, c, f, e;
              return void 0 !== a && "number" === Qr(a)
                ? 0 === a
                  ? new N([0, 0, 0, this._rgb[3]], "rgb")
                  : 1 === a
                  ? new N([255, 255, 255, this._rgb[3]], "rgb")
                  : ((e = this.luminance()),
                    (o = "rgb"),
                    (c = 20),
                    (f = function (e, t) {
                      var r = e.interpolate(t, 0.5, o),
                        n = r.luminance();
                      return Math.abs(a - n) < 1e-7 || !c-- ? r : a < n ? f(e, r) : f(r, t);
                    }),
                    (e = (a < e ? f(new N([0, 0, 0]), this) : f(this, new N([255, 255, 255]))).rgb()),
                    new N(e.concat([this._rgb[3]])))
                : tn.apply(void 0, this._rgb.slice(0, 3));
            }),
            function (e, t, r) {
              return 0.2126 * (e = rn(e)) + 0.7152 * (t = rn(t)) + 0.0722 * (r = rn(r));
            }),
          rn = function (e) {
            return (e /= 255) <= 0.03928 ? e / 12.92 : en((e + 0.055) / 1.055, 2.4);
          },
          o = {},
          nn = c,
          an = e.type,
          x = o,
          u = c,
          on = Vr,
          cn =
            ((u.prototype.mix = u.prototype.interpolate =
              function (e, t) {
                void 0 === t && (t = 0.5);
                for (var r = [], n = arguments.length - 2; 0 < n--; ) r[n] = arguments[n + 2];
                return on.apply(void 0, [this, e, t].concat(r));
              }),
            c),
          fn =
            ((cn.prototype.premultiply = function (e) {
              var t = this._rgb,
                r = t[3];
              return (e = void 0 === e ? !1 : e)
                ? ((this._rgb = [t[0] * r, t[1] * r, t[2] * r, r]), this)
                : new cn([t[0] * r, t[1] * r, t[2] * r, r], "rgb");
            }),
            c),
          un = l,
          ln =
            ((fn.prototype.saturate = function (e) {
              void 0 === e && (e = 1);
              var t = this.lch();
              return (t[1] += un.Kn * e), t[1] < 0 && (t[1] = 0), new fn(t, "lch").alpha(this.alpha(), !0);
            }),
            (fn.prototype.desaturate = function (e) {
              return this.saturate(-(e = void 0 === e ? 1 : e));
            }),
            c),
          sn = e.type,
          hn =
            ((ln.prototype.set = function (e, t, r) {
              void 0 === r && (r = !1);
              var e = e.split("."),
                n = e[0],
                e = e[1],
                a = this[n]();
              if (e) {
                var o = n.indexOf(e) - ("ok" === n.substr(0, 2) ? 2 : 0);
                if (-1 < o) {
                  if ("string" == sn(t))
                    switch (t.charAt(0)) {
                      case "+":
                      case "-":
                        a[o] += +t;
                        break;
                      case "*":
                        a[o] *= +t.substr(1);
                        break;
                      case "/":
                        a[o] /= +t.substr(1);
                        break;
                      default:
                        a[o] = +t;
                    }
                  else {
                    if ("number" !== sn(t)) throw new Error("unsupported value for Color.set");
                    a[o] = t;
                  }
                  var c = new ln(a, n);
                  return r ? ((this._rgb = c._rgb), this) : c;
                }
                throw new Error("unknown channel " + e + " in mode " + n);
              }
              return a;
            }),
            c),
          dn =
            ((o.rgb = function (e, t, r) {
              (e = e._rgb), (t = t._rgb);
              return new hn(e[0] + r * (t[0] - e[0]), e[1] + r * (t[1] - e[1]), e[2] + r * (t[2] - e[2]), "rgb");
            }),
            c),
          pn = Math.sqrt,
          $ = Math.pow,
          bn =
            ((o.lrgb = function (e, t, r) {
              var e = e._rgb,
                n = e[0],
                a = e[1],
                e = e[2],
                t = t._rgb,
                o = t[0],
                c = t[1],
                t = t[2];
              return new dn(
                pn($(n, 2) * (1 - r) + $(o, 2) * r),
                pn($(a, 2) * (1 - r) + $(c, 2) * r),
                pn($(e, 2) * (1 - r) + $(t, 2) * r),
                "rgb"
              );
            }),
            c),
          gn =
            ((o.lab = function (e, t, r) {
              (e = e.lab()), (t = t.lab());
              return new bn(e[0] + r * (t[0] - e[0]), e[1] + r * (t[1] - e[1]), e[2] + r * (t[2] - e[2]), "lab");
            }),
            c),
          mn = _,
          vn = ((o.lch = Zr), (o.hcl = Zr), c),
          yn =
            ((o.num = function (e, t, r) {
              (e = e.num()), (t = t.num());
              return new vn(e + r * (t - e), "num");
            }),
            _),
          wn =
            ((o.hcg = function (e, t, r) {
              return yn(e, t, r, "hcg");
            }),
            _),
          kn =
            ((o.hsi = function (e, t, r) {
              return wn(e, t, r, "hsi");
            }),
            _),
          Mn =
            ((o.hsl = function (e, t, r) {
              return kn(e, t, r, "hsl");
            }),
            _),
          Sn =
            ((o.hsv = function (e, t, r) {
              return Mn(e, t, r, "hsv");
            }),
            c),
          _n =
            ((o.oklab = function (e, t, r) {
              (e = e.oklab()), (t = t.oklab());
              return new Sn(e[0] + r * (t[0] - e[0]), e[1] + r * (t[1] - e[1]), e[2] + r * (t[2] - e[2]), "oklab");
            }),
            _),
          Nn =
            ((o.oklch = function (e, t, r) {
              return _n(e, t, r, "oklch");
            }),
            c),
          xn = e.clip_rgb,
          $n = Math.pow,
          On = Math.sqrt,
          jn = Math.PI,
          Cn = Math.cos,
          Ln = Math.sin,
          En = Math.atan2,
          O = i,
          j = e.type,
          Pn = Math.pow;
        for (
          var C = c,
            Rn = Kr,
            An = function (e) {
              for (var t = [1, 1], r = 1; r < e; r++) {
                for (var n = [1], a = 1; a <= t.length; a++) n[a] = (t[a] || 0) + t[a - 1];
                t = n;
              }
              return t;
            },
            In = i,
            L = function (e, t, r) {
              if (L[r]) return L[r](e, t);
              throw new Error("unknown blend mode " + r);
            },
            v = function (r) {
              return function (e, t) {
                (t = In(t).rgb()), (e = In(e).rgb());
                return In.rgb(r(t, e));
              };
            },
            u = function (n) {
              return function (e, t) {
                var r = [];
                return (r[0] = n(e[0], t[0])), (r[1] = n(e[1], t[1])), (r[2] = n(e[2], t[2])), r;
              };
            },
            l =
              ((L.normal = v(
                u(function (e) {
                  return e;
                })
              )),
              (L.multiply = v(
                u(function (e, t) {
                  return (e * t) / 255;
                })
              )),
              (L.screen = v(
                u(function (e, t) {
                  return 255 * (1 - (1 - e / 255) * (1 - t / 255));
                })
              )),
              (L.overlay = v(
                u(function (e, t) {
                  return t < 128 ? (2 * e * t) / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255));
                })
              )),
              (L.darken = v(
                u(function (e, t) {
                  return t < e ? t : e;
                })
              )),
              (L.lighten = v(
                u(function (e, t) {
                  return t < e ? e : t;
                })
              )),
              (L.dodge = v(
                u(function (e, t) {
                  return 255 === e || 255 < (e = ((t / 255) * 255) / (1 - e / 255)) ? 255 : e;
                })
              )),
              (L.burn = v(
                u(function (e, t) {
                  return 255 * (1 - (1 - t / 255) / (e / 255));
                })
              )),
              L),
            qn = e.type,
            Un = e.clip_rgb,
            Fn = e.TWOPI,
            Dn = Math.pow,
            Gn = Math.sin,
            Wn = Math.cos,
            Bn = i,
            Tn = c,
            zn = Math.floor,
            Yn = Math.random,
            Hn = r,
            Jn = Math.log,
            Xn = Math.pow,
            Vn = Math.floor,
            Zn = Math.abs,
            Kn = function (e, t) {
              void 0 === t && (t = null);
              var r = { min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0 };
              return (
                (e = "object" === Hn(e) ? Object.values(e) : e).forEach(function (e) {
                  null == (e = t && "object" === Hn(e) ? e[t] : e) ||
                    isNaN(e) ||
                    (r.values.push(e),
                    (r.sum += e),
                    e < r.min && (r.min = e),
                    e > r.max && (r.max = e),
                    (r.count += 1));
                }),
                (r.domain = [r.min, r.max]),
                (r.limits = function (e, t) {
                  return Qn(r, e, t);
                }),
                r
              );
            },
            Qn = function (e, t, r) {
              void 0 === t && (t = "equal"), void 0 === r && (r = 7);
              var n = (e = "array" == Hn(e) ? Kn(e) : e).min,
                a = e.max,
                o = e.values.sort(function (e, t) {
                  return e - t;
                });
              if (1 === r) return [n, a];
              var c = [];
              if (("c" === t.substr(0, 1) && (c.push(n), c.push(a)), "e" === t.substr(0, 1))) {
                c.push(n);
                for (var f = 1; f < r; f++) c.push(n + (f / r) * (a - n));
                c.push(a);
              } else if ("l" === t.substr(0, 1)) {
                if (n <= 0) throw new Error("Logarithmic scales are only possible for values > 0");
                var i = Math.LOG10E * Jn(n),
                  I = Math.LOG10E * Jn(a);
                c.push(n);
                for (var u = 1; u < r; u++) c.push(Xn(10, i + (u / r) * (I - i)));
                c.push(a);
              } else if ("q" === t.substr(0, 1)) {
                c.push(n);
                for (var l = 1; l < r; l++) {
                  var s = ((o.length - 1) * l) / r,
                    h = Vn(s);
                  h === s ? c.push(o[h]) : c.push(o[h] * (1 - (s = s - h)) + o[h + 1] * s);
                }
                c.push(a);
              } else if ("k" === t.substr(0, 1)) {
                var d,
                  p = o.length,
                  b = new Array(p),
                  g = new Array(r),
                  m = !0,
                  q = 0,
                  v = null;
                (v = []).push(n);
                for (var y = 1; y < r; y++) v.push(n + (y / r) * (a - n));
                for (v.push(a); m; ) {
                  for (var w = 0; w < r; w++) g[w] = 0;
                  for (var k = 0; k < p; k++)
                    for (var U = o[k], F = Number.MAX_VALUE, M = void 0, S = 0; S < r; S++) {
                      var D = Zn(v[S] - U);
                      D < F && ((F = D), (M = S)), g[M]++, (b[k] = M);
                    }
                  for (var _ = new Array(r), N = 0; N < r; N++) _[N] = null;
                  for (var x = 0; x < p; x++) null === _[(d = b[x])] ? (_[d] = o[x]) : (_[d] += o[x]);
                  for (var $ = 0; $ < r; $++) _[$] *= 1 / g[$];
                  for (var m = !1, O = 0; O < r; O++)
                    if (_[O] !== v[O]) {
                      m = !0;
                      break;
                    }
                  (v = _), 200 < ++q && (m = !1);
                }
                for (var j = {}, C = 0; C < r; C++) j[C] = [];
                for (var L = 0; L < p; L++) j[(d = b[L])].push(o[L]);
                for (var E = [], P = 0; P < r; P++) E.push(j[P][0]), E.push(j[P][j[P].length - 1]);
                (E = E.sort(function (e, t) {
                  return e - t;
                })),
                  c.push(E[0]);
                for (var R = 1; R < E.length; R += 2) {
                  var A = E[R];
                  isNaN(A) || -1 !== c.indexOf(A) || c.push(A);
                }
              }
              return c;
            },
            o = Kn,
            v = Qn,
            ea = c,
            ta = c,
            E = Math.sqrt,
            P = Math.pow,
            ra = Math.min,
            na = Math.max,
            aa = Math.atan2,
            oa = Math.abs,
            R = Math.cos,
            ca = Math.sin,
            fa = Math.exp,
            ia = Math.PI,
            ua = c,
            la = c,
            sa = i,
            ha = Kr,
            u = {
              cool: function () {
                return ha([sa.hsl(180, 1, 0.9), sa.hsl(250, 0.7, 0.4)]);
              },
              hot: function () {
                return ha(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
              },
            },
            A = {
              OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
              PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
              BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
              Oranges: [
                "#fff5eb",
                "#fee6ce",
                "#fdd0a2",
                "#fdae6b",
                "#fd8d3c",
                "#f16913",
                "#d94801",
                "#a63603",
                "#7f2704",
              ],
              BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
              YlOrBr: [
                "#ffffe5",
                "#fff7bc",
                "#fee391",
                "#fec44f",
                "#fe9929",
                "#ec7014",
                "#cc4c02",
                "#993404",
                "#662506",
              ],
              YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
              Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
              RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
              Greens: [
                "#f7fcf5",
                "#e5f5e0",
                "#c7e9c0",
                "#a1d99b",
                "#74c476",
                "#41ab5d",
                "#238b45",
                "#006d2c",
                "#00441b",
              ],
              YlGnBu: [
                "#ffffd9",
                "#edf8b1",
                "#c7e9b4",
                "#7fcdbb",
                "#41b6c4",
                "#1d91c0",
                "#225ea8",
                "#253494",
                "#081d58",
              ],
              Purples: [
                "#fcfbfd",
                "#efedf5",
                "#dadaeb",
                "#bcbddc",
                "#9e9ac8",
                "#807dba",
                "#6a51a3",
                "#54278f",
                "#3f007d",
              ],
              GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
              Greys: [
                "#ffffff",
                "#f0f0f0",
                "#d9d9d9",
                "#bdbdbd",
                "#969696",
                "#737373",
                "#525252",
                "#252525",
                "#000000",
              ],
              YlOrRd: [
                "#ffffcc",
                "#ffeda0",
                "#fed976",
                "#feb24c",
                "#fd8d3c",
                "#fc4e2a",
                "#e31a1c",
                "#bd0026",
                "#800026",
              ],
              PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
              Blues: [
                "#f7fbff",
                "#deebf7",
                "#c6dbef",
                "#9ecae1",
                "#6baed6",
                "#4292c6",
                "#2171b5",
                "#08519c",
                "#08306b",
              ],
              PuBuGn: [
                "#fff7fb",
                "#ece2f0",
                "#d0d1e6",
                "#a6bddb",
                "#67a9cf",
                "#3690c0",
                "#02818a",
                "#016c59",
                "#014636",
              ],
              Viridis: [
                "#440154",
                "#482777",
                "#3f4a8a",
                "#31678e",
                "#26838f",
                "#1f9d8a",
                "#6cce5a",
                "#b6de2b",
                "#fee825",
              ],
              Spectral: [
                "#9e0142",
                "#d53e4f",
                "#f46d43",
                "#fdae61",
                "#fee08b",
                "#ffffbf",
                "#e6f598",
                "#abdda4",
                "#66c2a5",
                "#3288bd",
                "#5e4fa2",
              ],
              RdYlGn: [
                "#a50026",
                "#d73027",
                "#f46d43",
                "#fdae61",
                "#fee08b",
                "#ffffbf",
                "#d9ef8b",
                "#a6d96a",
                "#66bd63",
                "#1a9850",
                "#006837",
              ],
              RdBu: [
                "#67001f",
                "#b2182b",
                "#d6604d",
                "#f4a582",
                "#fddbc7",
                "#f7f7f7",
                "#d1e5f0",
                "#92c5de",
                "#4393c3",
                "#2166ac",
                "#053061",
              ],
              PiYG: [
                "#8e0152",
                "#c51b7d",
                "#de77ae",
                "#f1b6da",
                "#fde0ef",
                "#f7f7f7",
                "#e6f5d0",
                "#b8e186",
                "#7fbc41",
                "#4d9221",
                "#276419",
              ],
              PRGn: [
                "#40004b",
                "#762a83",
                "#9970ab",
                "#c2a5cf",
                "#e7d4e8",
                "#f7f7f7",
                "#d9f0d3",
                "#a6dba0",
                "#5aae61",
                "#1b7837",
                "#00441b",
              ],
              RdYlBu: [
                "#a50026",
                "#d73027",
                "#f46d43",
                "#fdae61",
                "#fee090",
                "#ffffbf",
                "#e0f3f8",
                "#abd9e9",
                "#74add1",
                "#4575b4",
                "#313695",
              ],
              BrBG: [
                "#543005",
                "#8c510a",
                "#bf812d",
                "#dfc27d",
                "#f6e8c3",
                "#f5f5f5",
                "#c7eae5",
                "#80cdc1",
                "#35978f",
                "#01665e",
                "#003c30",
              ],
              RdGy: [
                "#67001f",
                "#b2182b",
                "#d6604d",
                "#f4a582",
                "#fddbc7",
                "#ffffff",
                "#e0e0e0",
                "#bababa",
                "#878787",
                "#4d4d4d",
                "#1a1a1a",
              ],
              PuOr: [
                "#7f3b08",
                "#b35806",
                "#e08214",
                "#fdb863",
                "#fee0b6",
                "#f7f7f7",
                "#d8daeb",
                "#b2abd2",
                "#8073ac",
                "#542788",
                "#2d004b",
              ],
              Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
              Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
              Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
              Set3: [
                "#8dd3c7",
                "#ffffb3",
                "#bebada",
                "#fb8072",
                "#80b1d3",
                "#fdb462",
                "#b3de69",
                "#fccde5",
                "#d9d9d9",
                "#bc80bd",
                "#ccebc5",
                "#ffed6f",
              ],
              Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
              Paired: [
                "#a6cee3",
                "#1f78b4",
                "#b2df8a",
                "#33a02c",
                "#fb9a99",
                "#e31a1c",
                "#fdbf6f",
                "#ff7f00",
                "#cab2d6",
                "#6a3d9a",
                "#ffff99",
                "#b15928",
              ],
              Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
              Pastel1: [
                "#fbb4ae",
                "#b3cde3",
                "#ccebc5",
                "#decbe4",
                "#fed9a6",
                "#ffffcc",
                "#e5d8bd",
                "#fddaec",
                "#f2f2f2",
              ],
            },
            da = 0,
            pa = Object.keys(A);
          da < pa.length;
          da += 1
        ) {
          var ba = pa[da];
          A[ba.toLowerCase()] = A[ba];
        }
        (e = A), (c = i);
        return (
          (c.average = function (e, o, c) {
            void 0 === o && (o = "lrgb"), void 0 === c && (c = null);
            var t = e.length,
              r =
                t /
                (c =
                  c ||
                  Array.from(new Array(t)).map(function () {
                    return 1;
                  })).reduce(function (e, t) {
                  return e + t;
                });
            if (
              (c.forEach(function (e, t) {
                c[t] *= r;
              }),
              (e = e.map(function (e) {
                return new Nn(e);
              })),
              "lrgb" === o)
            ) {
              for (var n = e, a = c, f = n.length, i = [0, 0, 0, 0], u = 0; u < n.length; u++) {
                var l = n[u];
                var s = a[u] / f;
                l = l._rgb;
                i[0] += $n(l[0], 2) * s;
                i[1] += $n(l[1], 2) * s;
                i[2] += $n(l[2], 2) * s;
                i[3] += l[3] * s;
              }
              if (((i[0] = On(i[0])), (i[1] = On(i[1])), (i[2] = On(i[2])), i[3] > 0.9999999)) i[3] = 1;
              return new Nn(xn(i));
            }
            for (var h, d = e.shift(), p = d.get(o), b = [], g = 0, m = 0, v = 0; v < p.length; v++)
              (p[v] = (p[v] || 0) * c[0]),
                b.push(isNaN(p[v]) ? 0 : c[0]),
                "h" !== o.charAt(v) ||
                  isNaN(p[v]) ||
                  ((h = (p[v] / 180) * jn), (g += Cn(h) * c[0]), (m += Ln(h) * c[0]));
            var y = d.alpha() * c[0];
            e.forEach(function (e, t) {
              var r = e.get(o);
              y += e.alpha() * c[t + 1];
              for (var n, a = 0; a < p.length; a++)
                isNaN(r[a]) ||
                  ((b[a] += c[t + 1]),
                  "h" === o.charAt(a)
                    ? ((n = (r[a] / 180) * jn), (g += Cn(n) * c[t + 1]), (m += Ln(n) * c[t + 1]))
                    : (p[a] += r[a] * c[t + 1]));
            });
            for (var w = 0; w < p.length; w++)
              if ("h" === o.charAt(w)) {
                for (var k = (En(m / b[w], g / b[w]) / jn) * 180; k < 0; ) k += 360;
                for (; 360 <= k; ) k -= 360;
                p[w] = k;
              } else p[w] = p[w] / b[w];
            return (y /= t), new Nn(p, o).alpha(0.99999 < y ? 1 : y, !0);
          }),
          (c.bezier = function (e) {
            var t = (function (e) {
              if (
                2 ===
                (e = e.map(function (e) {
                  return new C(e);
                })).length
              )
                (c = e.map(function (e) {
                  return e.lab();
                })),
                  (r = c[0]),
                  (n = c[1]),
                  (c = function (t) {
                    var e = [0, 1, 2].map(function (e) {
                      return r[e] + t * (n[e] - r[e]);
                    });
                    return new C(e, "lab");
                  });
              else if (3 === e.length)
                (t = e.map(function (e) {
                  return e.lab();
                })),
                  (r = t[0]),
                  (n = t[1]),
                  (a = t[2]),
                  (c = function (t) {
                    var e = [0, 1, 2].map(function (e) {
                      return (1 - t) * (1 - t) * r[e] + 2 * (1 - t) * t * n[e] + t * t * a[e];
                    });
                    return new C(e, "lab");
                  });
              else if (4 === e.length)
                var t,
                  r = (t = e.map(function (e) {
                    return e.lab();
                  }))[0],
                  n = t[1],
                  a = t[2],
                  o = t[3],
                  c = function (t) {
                    var e = [0, 1, 2].map(function (e) {
                      return (
                        (1 - t) * (1 - t) * (1 - t) * r[e] +
                        3 * (1 - t) * (1 - t) * t * n[e] +
                        3 * (1 - t) * t * t * a[e] +
                        t * t * t * o[e]
                      );
                    });
                    return new C(e, "lab");
                  };
              else {
                if (!(5 <= e.length)) throw new RangeError("No point in running bezier with only one color.");
                var f = e.map(function (e) {
                    return e.lab();
                  }),
                  i = e.length - 1,
                  u = An(i);
                c = function (a) {
                  var o = 1 - a,
                    e = [0, 1, 2].map(function (n) {
                      return f.reduce(function (e, t, r) {
                        return e + u[r] * Math.pow(o, i - r) * Math.pow(a, r) * t[n];
                      }, 0);
                    });
                  return new C(e, "lab");
                };
              }
              return c;
            })(e);
            return (
              (t.scale = function () {
                return Rn(t);
              }),
              t
            );
          }),
          (c.blend = l),
          (c.cubehelix = function (a, o, c, f, i) {
            void 0 === a && (a = 300), void 0 === o && (o = -1.5), void 0 === c && (c = 1), void 0 === f && (f = 1);
            function t(e) {
              var t = Fn * ((a + 120) / 360 + o * e),
                r = Dn(i[0] + u * e, f),
                e = ((0 !== l ? c[0] + e * l : c) * r * (1 - r)) / 2,
                n = Wn(t),
                t = Gn(t);
              return Bn(
                Un([
                  255 * (r + e * (-0.14861 * n + 1.78277 * t)),
                  255 * (r + e * (-0.29227 * n - 0.90649 * t)),
                  255 * (r + 1.97294 * n * e),
                  1,
                ])
              );
            }
            var u,
              l = 0;
            "array" === qn((i = void 0 === i ? [0, 1] : i)) ? (u = i[1] - i[0]) : ((u = 0), (i = [i, i]));
            return (
              (t.start = function (e) {
                return null == e ? a : ((a = e), t);
              }),
              (t.rotations = function (e) {
                return null == e ? o : ((o = e), t);
              }),
              (t.gamma = function (e) {
                return null == e ? f : ((f = e), t);
              }),
              (t.hue = function (e) {
                return null == e ? c : ("array" === qn((c = e)) ? 0 === (l = c[1] - c[0]) && (c = c[1]) : (l = 0), t);
              }),
              (t.lightness = function (e) {
                return null == e ? i : ((u = "array" === qn(e) ? (i = e)[1] - e[0] : ((i = [e, e]), 0)), t);
              }),
              (t.scale = function () {
                return Bn.scale(t);
              }),
              t.hue(c),
              t
            );
          }),
          (c.mix = c.interpolate = Vr),
          (c.random = function () {
            for (var e = "#", t = 0; t < 6; t++) e += "0123456789abcdef".charAt(zn(16 * Yn()));
            return new Tn(e, "hex");
          }),
          (c.scale = Kr),
          (c.analyze = o),
          (c.contrast = function (e, t) {
            (e = new ea(e)), (t = new ea(t));
            (e = e.luminance()), (t = t.luminance());
            return t < e ? (e + 0.05) / (t + 0.05) : (t + 0.05) / (e + 0.05);
          }),
          (c.deltaE = function (e, t, r, n, a) {
            void 0 === r && (r = 1), void 0 === n && (n = 1), void 0 === a && (a = 1);
            function o(e) {
              return (360 * e) / (2 * ia);
            }
            function c(e) {
              return (2 * ia * e) / 360;
            }
            (e = new ta(e)), (t = new ta(t));
            var e = Array.from(e.lab()),
              f = e[0],
              i = e[1],
              e = e[2],
              t = Array.from(t.lab()),
              u = t[0],
              l = t[1],
              t = t[2],
              s = (f + u) / 2,
              h = (E(P(i, 2) + P(e, 2)) + E(P(l, 2) + P(t, 2))) / 2,
              h = 0.5 * (1 - E(P(h, 7) / (P(h, 7) + P(25, 7)))),
              i = i * (1 + h),
              l = l * (1 + h),
              h = E(P(i, 2) + P(e, 2)),
              d = E(P(l, 2) + P(t, 2)),
              p = (h + d) / 2,
              e = o(aa(e, i)),
              i = o(aa(t, l)),
              t = 0 <= e ? e : e + 360,
              l = 0 <= i ? i : i + 360,
              e = 180 < oa(t - l) ? (t + l + 360) / 2 : (t + l) / 2,
              i = 1 - 0.17 * R(c(e - 30)) + 0.24 * R(c(2 * e)) + 0.32 * R(c(3 * e + 6)) - 0.2 * R(c(4 * e - 63)),
              b = oa((b = l - t)) <= 180 ? b : l <= t ? b + 360 : b - 360,
              l = ((b = 2 * E(h * d) * ca(c(b) / 2)), u - f),
              t = d - h,
              u = 1 + (0.015 * P(s - 50, 2)) / E(20 + P(s - 50, 2)),
              f = 1 + 0.045 * p,
              d = 1 + 0.015 * p * i,
              h = 30 * fa(-P((e - 275) / 25, 2)),
              s = -(2 * E(P(p, 7) / (P(p, 7) + P(25, 7)))) * ca(2 * c(h)),
              i = E(P(l / (r * u), 2) + P(t / (n * f), 2) + P(b / (a * d), 2) + (t / (n * f)) * s * (b / (a * d)));
            return na(0, ra(100, i));
          }),
          (c.distance = function (e, t, r) {
            void 0 === r && (r = "lab"), (e = new ua(e)), (t = new ua(t));
            var n,
              a = e.get(r),
              o = t.get(r),
              c = 0;
            for (n in a) {
              var f = (a[n] || 0) - (o[n] || 0);
              c += f * f;
            }
            return Math.sqrt(c);
          }),
          (c.limits = v),
          (c.valid = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            try {
              return new (Function.prototype.bind.apply(la, [null].concat(e)))(), !0;
            } catch (e) {
              return !1;
            }
          }),
          (c.scales = u),
          (c.colors = g),
          (c.brewer = e),
          c
        );
      }),
        "object" == typeof (e = e) && void 0 !== t
          ? (t.exports = r())
          : "function" == typeof define && define.amd
          ? define(r)
          : ((e = "undefined" != typeof globalThis ? globalThis : e || self).chroma = r());
    },
  };
  var e,
    t,
    b = "0.8.5",
    g = "marketplace:installed-extensions",
    m = "marketplace:installed-snippets",
    v = "marketplace:theme-installed",
    y = "marketplace:albumArtBasedColors",
    w = "marketplace:albumArtBasedColorsMode",
    k = "marketplace:albumArtBasedColorsVibrancy",
    M = "marketplace:colorShift",
    S = 100,
    _ = ((e, t, r) => {
      r = null != e ? f(s(e)) : {};
      var n = !t && e && e.__esModule ? r : i(r, "default", { value: e, enumerable: !0 }),
        a = e,
        o = void 0,
        c = void 0;
      if ((a && "object" == typeof a) || "function" == typeof a)
        for (let e of l(a))
          h.call(n, e) || e === o || i(n, e, { get: () => a[e], enumerable: !(c = u(a, e)) || c.enumerable });
      return n;
    })(
      (function () {
        return t || (0, e[l(e)[0]])((t = { exports: {} }).exports, t), t.exports;
      })()
    ),
    N = (t, e) => {
      t = localStorage.getItem(t);
      if (!t) return e;
      try {
        return JSON.parse(t);
      } catch (e) {
        return t;
      }
    },
    x = (e) => {
      if (3 === e.length)
        e = e
          .split("")
          .map((e) => e + e)
          .join("");
      else {
        if (6 != e.length) throw "Only 3- or 6-digit hex colours are allowed.";
        if (e.match(/[^0-9a-f]/i)) throw "Only hex colours are allowed.";
      }
      e = e.match(/.{1,2}/g);
      if (e && 3 === e.length) return [parseInt(e[0], 16), parseInt(e[1], 16), parseInt(e[2], 16)];
      throw "Could not parse hex colour.";
    },
    $ = (e, t) => {
      let r = [];
      return (
        e && 0 < e.length
          ? (r = e.map((e) => ({ name: e.name, url: G(e.url) })))
          : r.push({ name: t, url: "https://github.com/" + t }),
        r
      );
    },
    I = () => {
      console.debug("Resetting Marketplace"),
        Object.keys(localStorage).forEach((e) => {
          e.startsWith("marketplace:") && (localStorage.removeItem(e), console.debug("Removed " + e));
        }),
        console.debug("Marketplace has been reset"),
        location.reload();
    },
    q = () => {
      const t = {};
      return (
        Object.keys(localStorage).forEach((e) => {
          e.startsWith("marketplace:") && (t[e] = localStorage.getItem(e));
        }),
        t
      );
    },
    O = (r) => {
      const e = document.querySelector("style.marketplaceCSS.marketplaceScheme");
      if ((e && e.remove(), r)) {
        const n = document.createElement("style");
        n.classList.add("marketplaceCSS"), n.classList.add("marketplaceScheme");
        let t = ":root {";
        const a = Object.keys(r);
        a.forEach((e) => {
          t = (t += `--spice-${e}: #${r[e]};`) + `--spice-rgb-${e}: ${x(r[e])};`;
        }),
          (t += "}"),
          (n.innerHTML = t),
          document.body.appendChild(n);
      }
    },
    U = async (e) => {
      let t = N(k);
      t = t.replace(/([A-Z])/g, "_$1").toUpperCase();
      const r = (await Spicetify.colorExtractor(e))[t];
      return r.substring(1);
    },
    F = async (e, t) => {
      const r = N(w);
      var n = r.replace(/([A-Z])/g, "-$1").toLowerCase();
      const a = await fetch(`https://www.thecolorapi.com/scheme?hex=${e}&mode=${n}&count=` + t).then((e) => e.json());
      return a.colors.map((e) => e.hex.value.substring(1));
    };
  var D = (s) => {
      Spicetify.Player.addEventListener("songchange", async () => {
        await E(1e3);
        let t =
          null == (a = null == (a = null == (a = Spicetify.Player.data) ? void 0 : a.track) ? void 0 : a.metadata)
            ? void 0
            : a.image_xlarge_url;
        if (
          (t =
            null == t
              ? await new Promise((t) => {
                  setInterval(() => {
                    var e =
                      null ==
                      (e = null == (e = null == (e = Spicetify.Player.data) ? void 0 : e.track) ? void 0 : e.metadata)
                        ? void 0
                        : e.image_xlarge_url;
                    e && t(e);
                  }, 50);
                })
              : t)
        ) {
          var r,
            n,
            a = new Set(Object.values(s)).size,
            o = await U(t);
          const i = await F(o, a);
          let e = new Map();
          for ([r, n] of Object.entries(s)) e.has(n) ? e.get(n).push(r) : e.set(n, [r]);
          var c,
            o = new Map(
              [...e.entries()].sort((e, t) => {
                const r = (0, _.default)(e[0]),
                  n = (0, _.default)(t[0]);
                return r.get("lab.l") - n.get("lab.l");
              })
            );
          const u = {};
          for ([, c] of (e = o).entries()) {
            var f = i.shift();
            if (f) for (const l of c) u[l] = f;
          }
          O(u);
        }
      });
    },
    j = (e) => {
      e = new URL(e);
      return e.host, "raw.githubusercontent.com" === e.host;
    },
    C = (e) => {
      var t,
        e = e.match(
          new RegExp(
            "https:\\/\\/raw\\.githubusercontent\\.com\\/(?<user>[^/]+)\\/(?<repo>[^/]+)\\/(?<branch>[^/]+)\\/(?<filePath>.+$)"
          )
        );
      return {
        user: e ? (null == (t = e.groups) ? void 0 : t.user) : null,
        repo: e ? (null == (t = e.groups) ? void 0 : t.repo) : null,
        branch: e ? (null == (t = e.groups) ? void 0 : t.branch) : null,
        filePath: e ? (null == (t = e.groups) ? void 0 : t.filePath) : null,
      };
    };
  function L(n, a) {
    n &&
      n.forEach((e) => {
        a = a || n.user + "-" + n.repo;
        var t = window.sessionStorage.getItem(a);
        const r = t ? JSON.parse(t) : [];
        r.push(e), window.sessionStorage.setItem(a, JSON.stringify(r));
      });
  }
  function E(t) {
    return new Promise((e) => setTimeout(e, t));
  }
  var G = (e) => {
      const t = decodeURI(e).trim().toLowerCase();
      return t.startsWith("javascript:") || t.startsWith("data:") || t.startsWith("vbscript:") ? "about:blank" : e;
    },
    P = (e) => {
      !e ||
        ((e = e.split("/").pop()) &&
          -1 === Spicetify.Config.extensions.indexOf(e) &&
          Spicetify.Config.extensions.push(e));
    };
  async function R(e, t, r) {
    var n = window.sessionStorage.getItem(e + "-" + t);
    const a = window.sessionStorage.getItem("noManifests");
    if (n) return JSON.parse(n);
    const o = `https://raw.githubusercontent.com/${e}/${t}/${r}/manifest.json`;
    return null != a && a.includes(o)
      ? null
      : ((n = await fetch(o)
          .then((e) => e.json())
          .catch(() => L([o], "noManifests"))) && window.sessionStorage.setItem(e + "-" + t, JSON.stringify(n)),
        n);
  }
  async function A(e, t) {
    var r = await (async function (e, t = 1) {
        const r = window.sessionStorage.getItem("marketplace:blacklist");
        let n = "https://api.github.com/search/repositories?per_page=" + S;
        "extension" === e
          ? (n += "&q=" + encodeURIComponent("topic:spicetify-extensions"))
          : "theme" === e && (n += "&q=" + encodeURIComponent("topic:spicetify-themes")),
          t && (n += "&page=" + t);
        const a = await fetch(n)
          .then((e) => e.json())
          .catch(() => []);
        return (
          a.items || Spicetify.showNotification("Too Many Requests, Cool Down.", !0),
          p(d({}, a), {
            page_count: a.items.length,
            items: a.items.filter((e) => !(null != r && r.includes(e.html_url))),
          })
        );
      })(e, t),
      n =
        (!(async function (e, t) {
          for (const n of e.items) {
            var r =
              "theme" === t
                ? await (async function (t, n, a) {
                    try {
                      let e;
                      var r = t.match(
                        new RegExp("https:\\/\\/api\\.github\\.com\\/repos\\/(?<user>.+)\\/(?<repo>.+)\\/contents")
                      );
                      if (!r || !r.groups) return null;
                      const { user: o, repo: c } = r.groups;
                      return (
                        (e = await R(o, c, n)),
                        (e = Array.isArray(e) ? e : [e]).reduce((e, t) => {
                          var r = t.branch || n,
                            r = {
                              manifest: t,
                              title: t.name,
                              subtitle: t.description,
                              authors: $(t.authors, o),
                              user: o,
                              repo: c,
                              branch: r,
                              imageURL:
                                t.preview && t.preview.startsWith("http")
                                  ? t.preview
                                  : `https://raw.githubusercontent.com/${o}/${c}/${r}/` + t.preview,
                              readmeURL:
                                t.readme && t.readme.startsWith("http")
                                  ? t.readme
                                  : `https://raw.githubusercontent.com/${o}/${c}/${r}/` + t.readme,
                              stars: a,
                              tags: t.tags,
                              cssURL: t.usercss.startsWith("http")
                                ? t.usercss
                                : `https://raw.githubusercontent.com/${o}/${c}/${r}/` + t.usercss,
                              schemesURL: t.schemes
                                ? t.schemes.startsWith("http")
                                  ? t.schemes
                                  : `https://raw.githubusercontent.com/${o}/${c}/${r}/` + t.schemes
                                : null,
                              include: t.include,
                            };
                          return (
                            null != t && t.name && null != t && t.usercss && null != t && t.description && e.push(r), e
                          );
                        }, [])
                      );
                    } catch (e) {
                      return null;
                    }
                  })(n.contents_url, n.default_branch, n.stargazers_count)
                : await (async function (t, n, a, o = !1) {
                    try {
                      let e;
                      var r = t.match(
                        new RegExp("https:\\/\\/api\\.github\\.com\\/repos\\/(?<user>.+)\\/(?<repo>.+)\\/contents")
                      );
                      if (!r || !r.groups) return null;
                      const { user: c, repo: f } = r.groups;
                      return (
                        (e = await R(c, f, n)),
                        (e = Array.isArray(e) ? e : [e]).reduce((e, t) => {
                          var r = t.branch || n,
                            r = {
                              manifest: t,
                              title: t.name,
                              subtitle: t.description,
                              authors: $(t.authors, c),
                              user: c,
                              repo: f,
                              branch: r,
                              imageURL:
                                t.preview && t.preview.startsWith("http")
                                  ? t.preview
                                  : `https://raw.githubusercontent.com/${c}/${f}/${r}/` + t.preview,
                              extensionURL: t.main.startsWith("http")
                                ? t.main
                                : `https://raw.githubusercontent.com/${c}/${f}/${r}/` + t.main,
                              readmeURL:
                                t.readme && t.readme.startsWith("http")
                                  ? t.readme
                                  : `https://raw.githubusercontent.com/${c}/${f}/${r}/` + t.readme,
                              stars: a,
                              tags: t.tags,
                            };
                          return (
                            t &&
                              t.name &&
                              t.description &&
                              t.main &&
                              ((o && localStorage.getItem(`marketplace:installed:${c}/${f}/` + t.main)) || e.push(r)),
                            e
                          );
                        }, [])
                      );
                    } catch (e) {
                      return null;
                    }
                  })(n.contents_url, n.default_branch, n.stargazers_count);
            r && (L(r), await E(5e3));
          }
        })(r, e),
        S * (t - 1) + r.page_count),
      a = (console.debug({ pageOfRepos: r }), r.total_count - n);
    if ((console.debug(`Parsed ${n}/${r.total_count} ${e}s`), 0 < a)) return A(e, t + 1);
    console.debug(`No more ${e} results`);
  }
  (async () => {
    for (; null == Spicetify || !Spicetify.LocalStorage || null == Spicetify || !Spicetify.showNotification; )
      await new Promise((e) => setTimeout(e, 100));
    const e = document.createElement("script");
    (e.innerHTML = "const global = globalThis;"),
      document.body.appendChild(e),
      console.log("Initializing Spicetify Marketplace v" + b),
      (window.Marketplace = { reset: I, export: q, version: b });
    var t = async (e) => {
        const t = N(e);
        if (t) {
          if ((console.debug("Initializing theme: ", t), t.schemes)) {
            var e = t.schemes[t.activeScheme];
            if ((O(e), (Spicetify.Config.color_scheme = t.activeScheme), "true" === localStorage.getItem(y))) D(e);
            else if ("true" === localStorage.getItem(M)) {
              var r = t.schemes;
              let e = 0;
              const a = Object.keys(r).length;
              setInterval(() => {
                (e %= a), O(Object.values(r)[e]), e++;
              }, 6e4);
            }
          } else console.warn("No schemes found for theme");
          const n = document.querySelector("link.marketplaceCSS");
          n && n.remove();
          e = await (async (e) => {
            if (!e.cssURL) throw new Error("No CSS URL provided");
            const t = j(e.cssURL)
              ? `https://cdn.jsdelivr.net/gh/${e.user}/${e.repo}@${e.branch}/` + e.manifest.usercss
              : e.cssURL;
            var r,
              n = t.replace("/user.css", "/assets/");
            console.debug("Parsing CSS: ", t);
            let a = await fetch(t + "?time=" + Date.now()).then((e) => e.text());
            for (const o of a.matchAll(new RegExp(`url\\(['|"](?<path>.+?)['|"]\\)`, "gm")) || []) {
              const c = null == (r = null == o ? void 0 : o.groups) ? void 0 : r.path;
              !c ||
                c.startsWith("http") ||
                c.startsWith("data") ||
                ((r = n + c.replace(/\.\//g, "")), (a = a.replace(c, r)));
            }
            return a;
          })(t);
          try {
            const o = document.querySelector("link[href='user.css']"),
              c = (o && o.remove(), document.querySelector("style.marketplaceCSS.marketplaceUserCSS"));
            if ((c && c.remove(), e)) {
              const f = document.createElement("style");
              f.classList.add("marketplaceCSS"),
                f.classList.add("marketplaceUserCSS"),
                (f.innerHTML = e),
                document.body.appendChild(f);
            } else {
              const i = document.createElement("link");
              i.setAttribute("rel", "stylesheet"),
                i.setAttribute("href", "user.css"),
                i.classList.add("userCSS"),
                document.body.appendChild(i);
            }
          } catch (e) {
            console.warn(e);
          }
          (Spicetify.Config.current_theme = null == (e = t.manifest) ? void 0 : e.name),
            t.include &&
              t.include.length &&
              t.include.forEach((e) => {
                const t = document.createElement("script");
                let r = e;
                var n, a, o, c;
                j(e) &&
                  (({ user: n, repo: a, branch: o, filePath: c } = C(e)),
                  (r = `https://cdn.jsdelivr.net/gh/${n}/${a}@${o}/` + c)),
                  (t.src = r + "?time=" + Date.now()),
                  t.classList.add("marketplaceScript"),
                  document.body.appendChild(t),
                  P(e);
              });
        } else console.debug("No theme manifest found");
      },
      r =
        (console.log("Loaded Marketplace extension"),
        (Spicetify.Config.local_theme = Spicetify.Config.current_theme),
        (Spicetify.Config.local_color_scheme = Spicetify.Config.color_scheme),
        localStorage.getItem(v));
    r && t(r);
    const n = N(m, []);
    t = n.map((e) => N(e));
    {
      r = t;
      const o = document.querySelector("style.marketplaceSnippets"),
        c = (o && o.remove(), document.createElement("style"));
      (r = r.reduce(
        (e, t) =>
          (e =
            (e += `/* ${t.title} - ${t.description} */
`) +
            t.code +
            `
`),
        ""
      )),
        (c.innerHTML = r),
        c.classList.add("marketplaceSnippets"),
        document.body.appendChild(c);
    }
    const a = N(g, []);
    a.forEach((e) => {
      if ((e = N(e)) && e.extensionURL) {
        console.debug("Initializing extension: ", e);
        const o = document.createElement("script");
        if (((o.defer = !0), (o.src = e.extensionURL), j(o.src))) {
          var { user: t, repo: r, branch: n, filePath: a } = C(e.extensionURL);
          if (!(t && r && n && a)) return;
          o.src = `https://cdn.jsdelivr.net/gh/${t}/${r}@${n}/` + a;
        }
        (o.src = o.src + "?time=" + Date.now()),
          document.body.appendChild(o),
          P(null == (t = e.manifest) ? void 0 : t.main);
      }
    });
  })(),
    (async function () {
      console.debug("Preloading extensions and themes..."), window.sessionStorage.clear();
      var e = await (
        await fetch("https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/blacklist.json")
          .then((e) => e.json())
          .catch(() => ({}))
      ).repos;
      window.sessionStorage.setItem("marketplace:blacklist", JSON.stringify(e)),
        await Promise.all([A("extension", 1), A("theme", 1)]);
    })();
})();
