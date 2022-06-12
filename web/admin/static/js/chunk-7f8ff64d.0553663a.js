(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-7f8ff64d"],
  {
    "14c9": function (t, n, e) {
      "use strict";
      var o = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n;
          return e("div", {
            class: t.className,
            style: { height: t.height, width: t.width },
          });
        },
        i = [],
        r = e("313e"),
        a = e.n(r);
      e("817d");
      var s = {
          props: {
            className: { type: String, default: "chart" },
            width: { type: String, default: "100%" },
            height: { type: String, default: "350px" },
            autoResize: { type: Boolean, default: !0 },
            chartData: { type: Object, required: !0 },
            title: { type: Object, default: {} },
          },
          data: function () {
            return { chart: null };
          },
          watch: {
            chartData: {
              deep: !0,
              handler: function (t) {
                this.setOptions(t);
              },
            },
          },
          mounted: function () {
            var t = this;
            this.$nextTick(function () {
              t.initChart();
            });
          },
          beforeDestroy: function () {
            this.chart && (this.chart.dispose(), (this.chart = null));
          },
          methods: {
            initChart: function () {
              (this.chart = a.a.init(this.$el, "macarons")),
                this.setOptions(this.chartData);
            },
            setOptions: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = t.pv,
                e = t.uv,
                o = t.dates;
              this.chart &&
                this.chart.setOption({
                  title: this.title,
                  xAxis: { data: o, boundaryGap: !1, axisTick: { show: !1 } },
                  grid: {
                    left: 50,
                    right: 50,
                    bottom: 20,
                    top: 30,
                    containLabel: !0,
                  },
                  tooltip: {
                    trigger: "axis",
                    axisPointer: { type: "cross" },
                    padding: [5, 10],
                  },
                  yAxis: { axisTick: { show: !1 } },
                  legend: { data: ["PV", "UV"] },
                  series: [
                    {
                      name: "PV",
                      itemStyle: {
                        normal: {
                          color: "#FF005A",
                          lineStyle: { color: "#FF005A", width: 2 },
                        },
                      },
                      smooth: !0,
                      type: "line",
                      data: n,
                      animationDuration: 2800,
                      animationEasing: "cubicInOut",
                    },
                    {
                      name: "UV",
                      smooth: !0,
                      type: "line",
                      itemStyle: {
                        normal: {
                          color: "#3888fa",
                          lineStyle: { color: "#3888fa", width: 2 },
                          areaStyle: { color: "#f3f8ff" },
                        },
                      },
                      data: e,
                      animationDuration: 2800,
                      animationEasing: "quadraticOut",
                    },
                  ],
                });
            },
          },
        },
        l = s,
        c = e("2877"),
        u = Object(c["a"])(l, o, i, !1, null, null, null);
      n["a"] = u.exports;
    },
    "1af6": function (t, n, e) {
      var o = e("63b6");
      o(o.S, "Array", { isArray: e("9003") });
    },
    "549b": function (t, n, e) {
      "use strict";
      var o = e("d864"),
        i = e("63b6"),
        r = e("241e"),
        a = e("b0dc"),
        s = e("3702"),
        l = e("b447"),
        c = e("20fd"),
        u = e("7cd6");
      i(
        i.S +
          i.F *
            !e("4ee1")(function (t) {
              Array.from(t);
            }),
        "Array",
        {
          from: function (t) {
            var n,
              e,
              i,
              d,
              f = r(t),
              h = "function" == typeof this ? this : Array,
              m = arguments.length,
              v = m > 1 ? arguments[1] : void 0,
              g = void 0 !== v,
              p = 0,
              b = u(f);
            if (
              (g && (v = o(v, m > 2 ? arguments[2] : void 0, 2)),
              void 0 == b || (h == Array && s(b)))
            )
              for (n = l(f.length), e = new h(n); n > p; p++)
                c(e, p, g ? v(f[p], p) : f[p]);
            else
              for (d = b.call(f), e = new h(); !(i = d.next()).done; p++)
                c(e, p, g ? a(d, v, [i.value, p], !0) : i.value);
            return (e.length = p), e;
          },
        }
      );
    },
    "54a1": function (t, n, e) {
      e("6c1c"), e("1654"), (t.exports = e("95d5"));
    },
    "774e": function (t, n, e) {
      t.exports = e("d2d5");
    },
    9406: function (t, n, e) {
      "use strict";
      e.r(n);
      var o = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n;
          return e(
            "el-main",
            [
              e(
                "el-row",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.pinned.length > 0,
                      expression: "pinned.length > 0",
                    },
                  ],
                  attrs: { gutter: 5 },
                },
                [
                  e("h3", { staticStyle: { color: "#555" } }, [t._v("Pin")]),
                  t._v(" "),
                  t._l(t.pinned, function (n, o) {
                    return e(
                      "el-col",
                      { attrs: { span: 8 } },
                      [
                        e("line-chart", {
                          attrs: {
                            title: { text: n, align: "right" },
                            "chart-data": {
                              pv: t.pinnedLinksData.perDayPvUv[n].pv,
                              uv: t.pinnedLinksData.perDayPvUv[n].uv,
                              dates: t.pinnedLinksData.dates,
                            },
                            height: "200px",
                          },
                        }),
                      ],
                      1
                    );
                  }),
                ],
                2
              ),
              t._v(" "),
              t.pinned.length > 0 ? e("el-divider") : t._e(),
              t._v(" "),
              e(
                "el-row",
                { attrs: { gutter: 20 } },
                [
                  e("h3", { staticStyle: { color: "#555" } }, [
                    t._v("系统设置"),
                  ]),
                  t._v(" "),
                  e(
                    "el-col",
                    { attrs: { span: 7 } },
                    [
                      e(
                        "el-card",
                        [
                          e(
                            "div",
                            {
                              staticClass: "clearfix",
                              attrs: { slot: "header" },
                              slot: "header",
                            },
                            [
                              e(
                                "span",
                                [
                                  t._v("短链接域名\n          "),
                                  e(
                                    "el-popover",
                                    {
                                      attrs: {
                                        placement: "bottom",
                                        width: "300",
                                        trigger: "hover",
                                      },
                                    },
                                    [
                                      e("p", [
                                        t._v(
                                          "\n                配置短链接域名后，可以在短链接列表快速拷贝完整的短链接。"
                                        ),
                                        e("br"),
                                        t._v(
                                          "\n                示例：http://t.anmuji.com/"
                                        ),
                                        e("br"),
                                        t._v(" "),
                                        e("strong", [
                                          t._v('注意：以 "/" 结尾。'),
                                        ]),
                                      ]),
                                      t._v(" "),
                                      e("i", {
                                        staticClass: "el-icon-question",
                                        attrs: { slot: "reference" },
                                        slot: "reference",
                                      }),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              e(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: 2 === t.role,
                                      expression: "role === 2",
                                    },
                                  ],
                                  staticStyle: { float: "right" },
                                },
                                [
                                  e("el-button", {
                                    attrs: {
                                      icon: "el-icon-refresh",
                                      size: "mini",
                                      circle: "",
                                    },
                                    on: {
                                      click: function (n) {
                                        return t.getConfig("landingHostsForm");
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  e("el-button", {
                                    attrs: {
                                      icon: "el-icon-plus",
                                      size: "mini",
                                      circle: "",
                                    },
                                    on: {
                                      click: function (n) {
                                        return t.addLandingHost();
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  e("el-button", {
                                    attrs: {
                                      icon: "el-icon-check",
                                      size: "mini",
                                      circle: "",
                                    },
                                    on: {
                                      click: function (n) {
                                        return t.updateLadingHosts();
                                      },
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                          t._v(" "),
                          e(
                            "el-form",
                            {
                              ref: "landingHostsForm",
                              attrs: {
                                model: t.landingHostsForm,
                                "label-position": "left",
                                "label-width": "0px",
                                size: "mini",
                              },
                            },
                            t._l(t.landingHostsForm.hosts, function (n, o) {
                              return e(
                                "el-form-item",
                                {
                                  key: n.key,
                                  attrs: {
                                    prop: "hosts." + o + ".value",
                                    rules: t.landingHostRules,
                                  },
                                },
                                [
                                  e("el-input", {
                                    staticStyle: { width: "90%" },
                                    attrs: {
                                      readonly: 2 !== t.role,
                                      placeholder:
                                        "示例：http://anmuji.com/t/ 以 / 结尾",
                                    },
                                    model: {
                                      value: n.value,
                                      callback: function (e) {
                                        t.$set(n, "value", e);
                                      },
                                      expression: "host.value",
                                    },
                                  }),
                                  t._v(" "),
                                  e("el-button", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value:
                                          t.landingHostsForm.hosts.length > 1 &&
                                          2 === t.role,
                                        expression:
                                          "landingHostsForm.hosts.length > 1 && role === 2",
                                      },
                                    ],
                                    staticStyle: { padding: "1px" },
                                    attrs: {
                                      icon: "el-icon-minus",
                                      size: "mini",
                                      type: "danger",
                                      circle: "",
                                    },
                                    on: {
                                      click: function (n) {
                                        return t.removeLandingHost(o);
                                      },
                                    },
                                  }),
                                ],
                                1
                              );
                            }),
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  t._v(" "),
                  e(
                    "el-col",
                    { attrs: { span: 10 } },
                    [
                      e(
                        "el-card",
                        [
                          e(
                            "div",
                            {
                              staticClass: "clearfix",
                              attrs: { slot: "header" },
                              slot: "header",
                            },
                            [
                              e(
                                "span",
                                [
                                  t._v("随机 ID 长度设置\n            "),
                                  e(
                                    "el-popover",
                                    {
                                      attrs: {
                                        placement: "bottom",
                                        width: "300",
                                        trigger: "hover",
                                      },
                                    },
                                    [
                                      e("p", [
                                        t._v("默认长度即随机生成 ID 的长度，"),
                                        e("br"),
                                        t._v(
                                          "最小长度 <= 默认长度 <= 最大长度"
                                        ),
                                      ]),
                                      t._v(" "),
                                      e("i", {
                                        staticClass: "el-icon-question",
                                        attrs: { slot: "reference" },
                                        slot: "reference",
                                      }),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              e(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: 2 === t.role,
                                      expression: "role === 2",
                                    },
                                  ],
                                  staticStyle: { float: "right" },
                                },
                                [
                                  e("el-button", {
                                    attrs: {
                                      icon: "el-icon-refresh",
                                      size: "mini",
                                      circle: "",
                                    },
                                    on: {
                                      click: function (n) {
                                        return t.getConfig("idConfigForm");
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  e("el-button", {
                                    attrs: {
                                      icon: "el-icon-check",
                                      size: "mini",
                                      circle: "",
                                    },
                                    on: {
                                      click: function (n) {
                                        return t.updateIdLengthConfig();
                                      },
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                          t._v(" "),
                          e(
                            "el-form",
                            {
                              ref: "idConfigForm",
                              attrs: {
                                model: t.idConfigForm,
                                size: "mini",
                                "label-position": "top",
                                inline: !0,
                              },
                            },
                            [
                              e(
                                "el-form-item",
                                {
                                  attrs: {
                                    prop: "idMinimumLength",
                                    label: "最小长度",
                                  },
                                },
                                [
                                  e("el-input-number", {
                                    attrs: {
                                      size: "mini",
                                      disabled: 2 !== t.role,
                                    },
                                    model: {
                                      value: t.idConfigForm.idMinimumLength,
                                      callback: function (n) {
                                        t.$set(
                                          t.idConfigForm,
                                          "idMinimumLength",
                                          n
                                        );
                                      },
                                      expression:
                                        "idConfigForm.idMinimumLength",
                                    },
                                  }),
                                ],
                                1
                              ),
                              t._v(" "),
                              e(
                                "el-form-item",
                                {
                                  attrs: {
                                    prop: "idLength",
                                    label: "默认长度",
                                  },
                                },
                                [
                                  e("el-input-number", {
                                    attrs: {
                                      size: "mini",
                                      disabled: 2 !== t.role,
                                    },
                                    model: {
                                      value: t.idConfigForm.idLength,
                                      callback: function (n) {
                                        t.$set(t.idConfigForm, "idLength", n);
                                      },
                                      expression: "idConfigForm.idLength",
                                    },
                                  }),
                                ],
                                1
                              ),
                              t._v(" "),
                              e(
                                "el-form-item",
                                {
                                  attrs: {
                                    prop: "idMaximumLength",
                                    label: "最大长度",
                                  },
                                },
                                [
                                  e("el-input-number", {
                                    attrs: {
                                      size: "mini",
                                      disabled: 2 !== t.role,
                                    },
                                    model: {
                                      value: t.idConfigForm.idMaximumLength,
                                      callback: function (n) {
                                        t.$set(
                                          t.idConfigForm,
                                          "idMaximumLength",
                                          n
                                        );
                                      },
                                      expression:
                                        "idConfigForm.idMaximumLength",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  t._v(" "),
                  e(
                    "el-col",
                    { attrs: { span: 7 } },
                    [
                      e(
                        "el-card",
                        [
                          e(
                            "div",
                            {
                              staticClass: "clearfix",
                              attrs: { slot: "header" },
                              slot: "header",
                            },
                            [
                              e(
                                "span",
                                [
                                  t._v("短链接 404 处理\n            "),
                                  e(
                                    "el-popover",
                                    {
                                      attrs: {
                                        placement: "bottom",
                                        width: "320",
                                        trigger: "hover",
                                      },
                                    },
                                    [
                                      e("p", [
                                        t._v(
                                          "展示文案：当访问的短链接找不到时，展示设定的文案"
                                        ),
                                      ]),
                                      t._v(" "),
                                      e("p", [
                                        t._v(
                                          "URL跳转：当访问的短链接找不到时，跳转到设定的URL"
                                        ),
                                      ]),
                                      t._v(" "),
                                      e("i", {
                                        staticClass: "el-icon-question",
                                        attrs: { slot: "reference" },
                                        slot: "reference",
                                      }),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              e(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: 2 === t.role,
                                      expression: "role === 2",
                                    },
                                  ],
                                  staticStyle: { float: "right" },
                                },
                                [
                                  e("el-button", {
                                    attrs: {
                                      icon: "el-icon-refresh",
                                      size: "mini",
                                      circle: "",
                                    },
                                    on: {
                                      click: function (n) {
                                        return t.getConfig(
                                          "shortLinkNotFoundConfigForm"
                                        );
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  e("el-button", {
                                    attrs: {
                                      icon: "el-icon-check",
                                      size: "mini",
                                      circle: "",
                                    },
                                    on: {
                                      click: function (n) {
                                        return t.updateShortLinkNotFoundConfig();
                                      },
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                          t._v(" "),
                          e(
                            "el-form",
                            {
                              ref: "shortLinkNotFoundConfigForm",
                              attrs: {
                                model: t.shortLinkNotFoundConfigForm,
                                size: "mini",
                                "label-position": "top",
                              },
                            },
                            [
                              e(
                                "el-form-item",
                                { attrs: { prop: "mode", label: "模式" } },
                                [
                                  e(
                                    "el-select",
                                    {
                                      attrs: {
                                        placeholder: "请选择",
                                        disabled: 2 !== t.role,
                                      },
                                      model: {
                                        value:
                                          t.shortLinkNotFoundConfigForm.mode,
                                        callback: function (n) {
                                          t.$set(
                                            t.shortLinkNotFoundConfigForm,
                                            "mode",
                                            n
                                          );
                                        },
                                        expression:
                                          "shortLinkNotFoundConfigForm.mode",
                                      },
                                    },
                                    t._l(
                                      t.shortLinkNotFoundModeOptions,
                                      function (t) {
                                        return e("el-option", {
                                          key: t.value,
                                          attrs: {
                                            label: t.label,
                                            value: t.value,
                                          },
                                        });
                                      }
                                    ),
                                    1
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              e(
                                "el-form-item",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value:
                                        "content" ===
                                        t.shortLinkNotFoundConfigForm.mode,
                                      expression:
                                        "shortLinkNotFoundConfigForm.mode === 'content'",
                                    },
                                  ],
                                  attrs: {
                                    prop: "value",
                                    label: "文案",
                                    rules: t.shortLinkNotFoundConfigRules,
                                  },
                                },
                                [
                                  e("el-input", {
                                    attrs: {
                                      type: "textarea",
                                      placeholder: "你访问的页面不存在哦",
                                      readonly: 2 !== t.role,
                                    },
                                    model: {
                                      value:
                                        t.shortLinkNotFoundConfigForm.value,
                                      callback: function (n) {
                                        t.$set(
                                          t.shortLinkNotFoundConfigForm,
                                          "value",
                                          n
                                        );
                                      },
                                      expression:
                                        "shortLinkNotFoundConfigForm.value",
                                    },
                                  }),
                                ],
                                1
                              ),
                              t._v(" "),
                              e(
                                "el-form-item",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value:
                                        "redirect" ===
                                        t.shortLinkNotFoundConfigForm.mode,
                                      expression:
                                        "shortLinkNotFoundConfigForm.mode === 'redirect'",
                                    },
                                  ],
                                  attrs: {
                                    prop: "value",
                                    label: "URL",
                                    rules: t.shortLinkNotFoundConfigRules,
                                  },
                                },
                                [
                                  e("el-input", {
                                    attrs: {
                                      placeholder:
                                        "示例：https://github.com/jwma/jump-jump",
                                    },
                                    model: {
                                      value:
                                        t.shortLinkNotFoundConfigForm.value,
                                      callback: function (n) {
                                        t.$set(
                                          t.shortLinkNotFoundConfigForm,
                                          "value",
                                          n
                                        );
                                      },
                                      expression:
                                        "shortLinkNotFoundConfigForm.value",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        i = [],
        r = e("a745"),
        a = e.n(r);
      function s(t) {
        if (a()(t)) {
          for (var n = 0, e = new Array(t.length); n < t.length; n++)
            e[n] = t[n];
          return e;
        }
      }
      var l = e("774e"),
        c = e.n(l),
        u = e("c8bb"),
        d = e.n(u);
      function f(t) {
        if (
          d()(Object(t)) ||
          "[object Arguments]" === Object.prototype.toString.call(t)
        )
          return c()(t);
      }
      function h() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function m(t) {
        return s(t) || f(t) || h();
      }
      e("ac6a");
      var v = e("db72"),
        g = e("da71"),
        p = e("61f7"),
        b = e("2f62"),
        F = e("14c9"),
        L = e("c3cc"),
        k = e("bfad"),
        C = {
          name: "Dashboard",
          components: { LineChart: F["a"] },
          data: function () {
            var t = this,
              n = function (t, n, e) {
                if ("" === n) e(new Error("请输入域名/IP地址"));
                else {
                  if (!Object(p["b"])(n))
                    return void e(new Error("这不是一个合法的域名/IP地址"));
                  e();
                }
              },
              e = function (n, e, o) {
                if ("" === e)
                  "content" === t.shortLinkNotFoundConfigForm.mode
                    ? o(new Error("请输入展示文案"))
                    : o(new Error("请输入URL"));
                else {
                  if (
                    "redirect" === t.shortLinkNotFoundConfigForm.mode &&
                    !Object(p["b"])(e)
                  )
                    return void o(new Error("这不是一个合法的URL"));
                  o();
                }
              };
            return {
              landingHostsForm: { hosts: [] },
              landingHostRules: { required: !0, validator: n, trigger: "blur" },
              idConfigForm: {
                idMinimumLength: 0,
                idLength: 0,
                idMaximumLength: 0,
              },
              shortLinkNotFoundModeOptions: [
                { label: "展示文案", value: "content" },
                { label: "URL 跳转", value: "redirect" },
              ],
              shortLinkNotFoundConfigForm: { mode: null, value: null },
              shortLinkNotFoundConfigRules: {
                required: !0,
                validator: e,
                trigger: "blur",
              },
              pinnedLinksData: { dates: [], perDayPvUv: {} },
            };
          },
          computed: Object(v["a"])({}, Object(b["b"])(["role", "pinned"])),
          created: function () {
            var t = this;
            if ((this.getConfig("all"), this.pinned.length > 0)) {
              var n = Object(L["b"])(7);
              (this.pinnedLinksData.dates = n.dates),
                this.pinned.forEach(function (e, o) {
                  t.$set(t.pinnedLinksData.perDayPvUv, e, { pv: [], uv: [] }),
                    t.getRequestHistoriesByDateRange(
                      e,
                      n.startDate.format("YYYY-MM-DD"),
                      n.endDate.format("YYYY-MM-DD")
                    );
                });
            }
          },
          methods: {
            getConfig: function (t) {
              var n = this;
              Object(g["a"])().then(function (e) {
                ("landingHostsForm" !== t && "all" !== t) ||
                  ((n.landingHostsForm.hosts = []),
                  e.data.config.landingHosts.forEach(function (t, e) {
                    n.landingHostsForm.hosts.push({
                      value: t,
                      key: Date.now() + e,
                    });
                  }),
                  0 === e.data.config.landingHosts.length &&
                    n.addLandingHost()),
                  ("idConfigForm" !== t && "all" !== t) ||
                    ((n.idConfigForm.idMinimumLength =
                      e.data.config.idConfig.idMinimumLength),
                    (n.idConfigForm.idLength = e.data.config.idConfig.idLength),
                    (n.idConfigForm.idMaximumLength =
                      e.data.config.idConfig.idMaximumLength)),
                  ("shortLinkNotFoundConfigForm" !== t && "all" !== t) ||
                    ((n.shortLinkNotFoundConfigForm.mode =
                      e.data.config.shortLinkNotFoundConfig.mode),
                    (n.shortLinkNotFoundConfigForm.value =
                      e.data.config.shortLinkNotFoundConfig.value));
              });
            },
            addLandingHost: function () {
              this.landingHostsForm.hosts.push({ value: "", key: Date.now() });
            },
            removeLandingHost: function (t) {
              this.landingHostsForm.hosts.splice(t, 1);
            },
            updateLadingHosts: function () {
              var t = this;
              this.$refs["landingHostsForm"].validate(function (n) {
                if (!n) return !1;
                var e = [];
                t.landingHostsForm.hosts.forEach(function (t) {
                  e.push(t.value);
                }),
                  Object(g["c"])({ hosts: e }).then(function (n) {
                    t.$notify({
                      title: "更新成功",
                      message: "成功更新短链接域名",
                      type: "success",
                    });
                  });
              });
            },
            updateIdLengthConfig: function () {
              var t = this;
              Object(g["b"])(this.idConfigForm).then(function (n) {
                t.$notify({
                  title: "更新成功",
                  message: "成功更新随机 ID 长度",
                  type: "success",
                });
              });
            },
            updateShortLinkNotFoundConfig: function () {
              var t = this;
              this.$refs["shortLinkNotFoundConfigForm"].validate(function (n) {
                if (!n) return !1;
                Object(g["d"])(t.shortLinkNotFoundConfigForm).then(function (
                  n
                ) {
                  t.$notify({
                    title: "更新成功",
                    message: "短链接 404 处理配置",
                    type: "success",
                  });
                });
              });
            },
            getRequestHistoriesByDateRange: function (t, n, e) {
              var o = this;
              Object(k["d"])(t, n, e).then(function (n) {
                var e, i;
                o.list = n.data.histories;
                var r = Object(L["a"])(
                  o.pinnedLinksData.dates,
                  n.data.histories
                );
                (e = o.pinnedLinksData.perDayPvUv[t].pv).push.apply(e, m(r.pv)),
                  (i = o.pinnedLinksData.perDayPvUv[t].uv).push.apply(
                    i,
                    m(r.uv)
                  );
              });
            },
          },
        },
        y = C,
        w = (e("f8a7"), e("2877")),
        x = Object(w["a"])(y, o, i, !1, null, null, null);
      n["default"] = x.exports;
    },
    "95d5": function (t, n, e) {
      var o = e("40c3"),
        i = e("5168")("iterator"),
        r = e("481b");
      t.exports = e("584a").isIterable = function (t) {
        var n = Object(t);
        return void 0 !== n[i] || "@@iterator" in n || r.hasOwnProperty(o(n));
      };
    },
    a745: function (t, n, e) {
      t.exports = e("f410");
    },
    acf4: function (t, n, e) {},
    bfad: function (t, n, e) {
      "use strict";
      e.d(n, "c", function () {
        return i;
      }),
        e.d(n, "b", function () {
          return r;
        }),
        e.d(n, "a", function () {
          return a;
        }),
        e.d(n, "e", function () {
          return s;
        }),
        e.d(n, "f", function () {
          return l;
        }),
        e.d(n, "d", function () {
          return c;
        });
      var o = e("b775");
      function i(t) {
        return Object(o["a"])({
          url: "/v1/short-link/".concat(t),
          method: "get",
        });
      }
      function r(t, n) {
        return Object(o["a"])({
          url: "/v1/short-link/?page=".concat(t, "&pageSize=").concat(n),
          method: "get",
        });
      }
      function a(t) {
        return Object(o["a"])({
          url: "/v1/short-link/",
          method: "post",
          data: t,
        });
      }
      function s(t) {
        return Object(o["a"])({
          url: "/v1/short-link/".concat(t),
          method: "delete",
        });
      }
      function l(t, n) {
        return Object(o["a"])({
          url: "/v1/short-link/".concat(t),
          method: "patch",
          data: n,
        });
      }
      function c(t, n, e) {
        return Object(o["a"])({
          url: "/v1/short-link/"
            .concat(t, "/data?startDate=")
            .concat(n, "&endDate=")
            .concat(e),
          method: "get",
        });
      }
    },
    c3cc: function (t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return r;
      }),
        e.d(n, "a", function () {
          return a;
        });
      e("ac6a");
      var o = e("c1df"),
        i = e.n(o);
      function r(t) {
        var n = i()(),
          e = n.clone().add(-(t - 1), "d"),
          o = n.clone(),
          r = e.clone(),
          a = [];
        while (r.isSameOrBefore(o))
          a.push(r.format("YYYY-MM-DD")), r.add(1, "d");
        return { startDate: e, endDate: o, dates: a };
      }
      function a(t, n) {
        var e = {};
        t.forEach(function (t) {
          e[t] = { pv: 0, ips: [] };
        }),
          n.forEach(function (t, n) {
            var o = i()(t.time).format("YYYY-MM-DD");
            (e[o].pv += 1),
              -1 === e[o].ips.indexOf(t.ip) && e[o].ips.push(t.ip);
          });
        var o = [],
          r = [];
        return (
          t.forEach(function (t) {
            o.push(e[t].pv), r.push(e[t].ips.length);
          }),
          { pv: o, uv: r }
        );
      }
    },
    c8bb: function (t, n, e) {
      t.exports = e("54a1");
    },
    d2d5: function (t, n, e) {
      e("1654"), e("549b"), (t.exports = e("584a").Array.from);
    },
    da71: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return i;
      }),
        e.d(n, "c", function () {
          return r;
        }),
        e.d(n, "b", function () {
          return a;
        }),
        e.d(n, "d", function () {
          return s;
        });
      var o = e("b775");
      function i() {
        return Object(o["a"])({ url: "/v1/config", method: "get" });
      }
      function r(t) {
        return Object(o["a"])({
          url: "/v1/config/landing-hosts",
          method: "patch",
          data: t,
        });
      }
      function a(t) {
        return Object(o["a"])({
          url: "/v1/config/id-length",
          method: "patch",
          data: t,
        });
      }
      function s(t) {
        return Object(o["a"])({
          url: "/v1/config/short-link-404-handling",
          method: "patch",
          data: t,
        });
      }
    },
    f410: function (t, n, e) {
      e("1af6"), (t.exports = e("584a").Array.isArray);
    },
    f8a7: function (t, n, e) {
      "use strict";
      var o = e("acf4"),
        i = e.n(o);
      i.a;
    },
  },
]);
