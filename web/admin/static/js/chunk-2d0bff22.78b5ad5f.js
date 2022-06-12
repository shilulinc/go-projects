(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2d0bff22"],
  {
    "404d": function (r, e, o) {
      "use strict";
      o.r(e);
      var s = function () {
          var r = this,
            e = r.$createElement,
            o = r._self._c || e;
          return o(
            "el-main",
            [
              o(
                "el-card",
                { staticStyle: { width: "350px" } },
                [
                  o(
                    "el-form",
                    {
                      ref: "form",
                      attrs: {
                        model: r.form,
                        size: "mini",
                        rules: r.rules,
                        "status-icon": "",
                      },
                    },
                    [
                      o(
                        "el-form-item",
                        { attrs: { label: "原密码", prop: "password" } },
                        [
                          o("el-input", {
                            attrs: { type: "password", autocomplete: "off" },
                            model: {
                              value: r.form.password,
                              callback: function (e) {
                                r.$set(r.form, "password", e);
                              },
                              expression: "form.password",
                            },
                          }),
                        ],
                        1
                      ),
                      r._v(" "),
                      o(
                        "el-form-item",
                        { attrs: { label: "新密码", prop: "newPassword" } },
                        [
                          o("el-input", {
                            attrs: { type: "password", autocomplete: "off" },
                            model: {
                              value: r.form.newPassword,
                              callback: function (e) {
                                r.$set(r.form, "newPassword", e);
                              },
                              expression: "form.newPassword",
                            },
                          }),
                        ],
                        1
                      ),
                      r._v(" "),
                      o(
                        "el-form-item",
                        {
                          attrs: {
                            label: "确认新密码",
                            prop: "checkNewPassword",
                          },
                        },
                        [
                          o("el-input", {
                            attrs: { type: "password", autocomplete: "off" },
                            model: {
                              value: r.form.checkNewPassword,
                              callback: function (e) {
                                r.$set(r.form, "checkNewPassword", e);
                              },
                              expression: "form.checkNewPassword",
                            },
                          }),
                        ],
                        1
                      ),
                      r._v(" "),
                      o(
                        "el-form-item",
                        [
                          o(
                            "el-button",
                            {
                              attrs: { size: "mini", type: "primary" },
                              on: {
                                click: function (e) {
                                  return r.submit();
                                },
                              },
                            },
                            [r._v("修改")]
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
        t = [],
        a = o("c24f"),
        n = {
          name: "ChangePassword",
          data: function () {
            var r = this,
              e = function (e, o, s) {
                "" === o
                  ? s(new Error("请输入新密码"))
                  : (o === r.form.password &&
                      s(new Error("新密码不能与原密码相同")),
                    "" !== r.form.checkNewPassword &&
                      r.$refs.form.validateField("checkNewPassword"),
                    s());
              },
              o = function (e, o, s) {
                "" === o
                  ? s(new Error("请再次输入密码"))
                  : o !== r.form.newPassword
                  ? s(new Error("两次输入密码不一致"))
                  : s();
              };
            return {
              form: { password: "", newPassword: "", checkNewPassword: "" },
              rules: {
                password: [
                  { required: !0, message: "请输入原密码", trigger: "blur" },
                ],
                newPassword: [
                  {
                    min: 5,
                    max: 20,
                    message: "长度在 5 到 20 个字符",
                    trigger: "blur",
                  },
                  { required: !0, validator: e, trigger: "blur" },
                ],
                checkNewPassword: [
                  { required: !0, validator: o, trigger: "blur" },
                ],
              },
            };
          },
          methods: {
            submit: function () {
              var r = this;
              this.$refs["form"].validate(function (e) {
                if (!e) return !1;
                Object(a["a"])(r.form).then(function (e) {
                  var o = r.$loading({
                    lock: !0,
                    text: "成功修改密码，你将需要重新登入...",
                    spinner: "el-icon-loading",
                    background: "rgba(0, 0, 0, 0.8)",
                  });
                  r.$store.dispatch("user/logout"),
                    setTimeout(function () {
                      o.close(), r.$router.push("/login");
                    }, 1500);
                });
              });
            },
          },
        },
        i = n,
        l = o("2877"),
        c = Object(l["a"])(i, s, t, !1, null, "1a8b8e93", null);
      e["default"] = c.exports;
    },
  },
]);
