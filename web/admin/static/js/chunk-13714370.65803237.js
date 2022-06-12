// import abc = require("./abc");

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-13714370"],
    {
        "80f1": function(e, t, r) {},
        9472: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r(
                        "el-main", [
                            r(
                                "el-drawer", {
                                    ref: "createFormDrawer",
                                    attrs: {
                                        visible: e.createFormDrawer,
                                        direction: "rtl",
                                        "before-close": e.handleCreateFormDrawerClose,
                                    },
                                    on: {
                                        "update:visible": function(t) {
                                            e.createFormDrawer = t;
                                        },
                                    },
                                }, [
                                    r(
                                        "div", { staticStyle: { width: "90%", "margin-left": "15px" } }, [
                                            r(
                                                "h2", {
                                                    staticStyle: { "margin-top": "0", color: "#606266" },
                                                }, [e._v("添加短链接")]
                                            ),
                                            e._v(" "),
                                            r(
                                                "el-form", {
                                                    ref: "createForm",
                                                    attrs: {
                                                        model: e.createForm,
                                                        rules: e.createFormRules,
                                                    },
                                                }, [
                                                    r(
                                                        "el-form-item", {
                                                            directives: [{
                                                                name: "show",
                                                                rawName: "v-show",
                                                                value: 2 === e.role,
                                                                expression: "role === 2",
                                                            }, ],
                                                            attrs: { label: "指定 ID", prop: "id" },
                                                        }, [
                                                            r("el-switch", {
                                                                on: {
                                                                    change: function(t) {
                                                                        return e.specifyIdChange(t);
                                                                    },
                                                                },
                                                                model: {
                                                                    value: e.createForm.specifyId,
                                                                    callback: function(t) {
                                                                        e.$set(e.createForm, "specifyId", t);
                                                                    },
                                                                    expression: "createForm.specifyId",
                                                                },
                                                            }),
                                                            e._v(" "),
                                                            r(
                                                                "el-popover", {
                                                                    attrs: {
                                                                        placement: "bottom",
                                                                        width: "320",
                                                                        trigger: "hover",
                                                                    },
                                                                }, [
                                                                    r("p", [
                                                                        e._v(
                                                                            "设置你期望的ID，设置后随机ID将不起作用。"
                                                                        ),
                                                                    ]),
                                                                    e._v(" "),
                                                                    r("i", {
                                                                        staticClass: "el-icon-question",
                                                                        attrs: { slot: "reference" },
                                                                        slot: "reference",
                                                                    }),
                                                                ]
                                                            ),
                                                            e._v(" "),
                                                            r("el-input", {
                                                                directives: [{
                                                                    name: "show",
                                                                    rawName: "v-show",
                                                                    value: e.createForm.specifyId,
                                                                    expression: "createForm.specifyId",
                                                                }, ],
                                                                attrs: {
                                                                    disabled: e.createForm.setIdLength,
                                                                    placeholder: "示例：home",
                                                                },
                                                                model: {
                                                                    value: e.createForm.id,
                                                                    callback: function(t) {
                                                                        e.$set(e.createForm, "id", t);
                                                                    },
                                                                    expression: "createForm.id",
                                                                },
                                                            }),
                                                        ],
                                                        1
                                                    ),
                                                    e._v(" "),
                                                    r(
                                                        "el-form-item", {
                                                            directives: [{
                                                                name: "show",
                                                                rawName: "v-show",
                                                                value: 2 === e.role,
                                                                expression: "role === 2",
                                                            }, ],
                                                            attrs: {
                                                                label: "指定随机 ID 长度",
                                                                prop: "idLength",
                                                            },
                                                        }, [
                                                            r("el-switch", {
                                                                on: {
                                                                    change: function(t) {
                                                                        return e.setIdLengthChange(t);
                                                                    },
                                                                },
                                                                model: {
                                                                    value: e.createForm.setIdLength,
                                                                    callback: function(t) {
                                                                        e.$set(e.createForm, "setIdLength", t);
                                                                    },
                                                                    expression: "createForm.setIdLength",
                                                                },
                                                            }),
                                                            e._v(" "),
                                                            r(
                                                                "el-popover", {
                                                                    attrs: {
                                                                        placement: "bottom",
                                                                        width: "320",
                                                                        trigger: "hover",
                                                                    },
                                                                }, [
                                                                    r("p", [
                                                                        e._v(
                                                                            "在允许的范围内指定随机ID的长度，不指定时会使用系统默认设置。"
                                                                        ),
                                                                    ]),
                                                                    e._v(" "),
                                                                    r("i", {
                                                                        staticClass: "el-icon-question",
                                                                        attrs: { slot: "reference" },
                                                                        slot: "reference",
                                                                    }),
                                                                ]
                                                            ),
                                                            e._v(" "),
                                                            r("el-slider", {
                                                                directives: [{
                                                                    name: "show",
                                                                    rawName: "v-show",
                                                                    value: e.createForm.setIdLength,
                                                                    expression: "createForm.setIdLength",
                                                                }, ],
                                                                attrs: {
                                                                    "show-input": "",
                                                                    disabled: e.createForm.specifyId,
                                                                    min: e.idConfig.idMinimumLength,
                                                                    max: e.idConfig.idMaximumLength,
                                                                },
                                                                model: {
                                                                    value: e.createForm.idLength,
                                                                    callback: function(t) {
                                                                        e.$set(e.createForm, "idLength", t);
                                                                    },
                                                                    expression: "createForm.idLength",
                                                                },
                                                            }),
                                                        ],
                                                        1
                                                    ),
                                                    e._v(" "),
                                                    r(
                                                        "el-form-item", { attrs: { label: "目标链接", prop: "url" } }, [
                                                            r("el-input", {
                                                                attrs: {
                                                                    placeholder: "示例：https://github.com/jwma/jump-jump",
                                                                },
                                                                model: {
                                                                    value: e.createForm.url,
                                                                    callback: function(t) {
                                                                        e.$set(e.createForm, "url", t);
                                                                    },
                                                                    expression: "createForm.url",
                                                                },
                                                            }),
                                                        ],
                                                        1
                                                    ),
                                                    e._v(" "),
                                                    r(
                                                        "el-form-item", { attrs: { label: "描述", prop: "description" } }, [
                                                            r("el-input", {
                                                                attrs: {
                                                                    type: "textarea",
                                                                    placeholder: "示例：某某帖子使用",
                                                                },
                                                                model: {
                                                                    value: e.createForm.description,
                                                                    callback: function(t) {
                                                                        e.$set(e.createForm, "description", t);
                                                                    },
                                                                    expression: "createForm.description",
                                                                },
                                                            }),
                                                        ],
                                                        1
                                                    ),
                                                    e._v(" "),
                                                    r(
                                                        "el-form-item", { attrs: { label: "启用？", prop: "isEnable" } }, [
                                                            r("el-switch", {
                                                                model: {
                                                                    value: e.createForm.isEnable,
                                                                    callback: function(t) {
                                                                        e.$set(e.createForm, "isEnable", t);
                                                                    },
                                                                    expression: "createForm.isEnable",
                                                                },
                                                            }),
                                                            e._v(" "),
                                                            r(
                                                                "el-popover", {
                                                                    attrs: {
                                                                        placement: "bottom",
                                                                        width: "320",
                                                                        trigger: "hover",
                                                                    },
                                                                }, [
                                                                    r("p", [
                                                                        e._v(
                                                                            "开启后短链接可以正常被访问，关闭后短链接被访问时会告知用户访问的页面不存在。"
                                                                        ),
                                                                        r("br"),
                                                                        e._v(" "),
                                                                        r("strong", [
                                                                            e._v(
                                                                                "注意：关闭后不会统计短链接访问的数据。"
                                                                            ),
                                                                        ]),
                                                                    ]),
                                                                    e._v(" "),
                                                                    r("i", {
                                                                        staticClass: "el-icon-question",
                                                                        attrs: { slot: "reference" },
                                                                        slot: "reference",
                                                                    }),
                                                                ]
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                    e._v(" "),
                                                    r(
                                                        "el-form-item", [
                                                            r(
                                                                "el-button", {
                                                                    attrs: { size: "mini", type: "primary" },
                                                                    on: { click: e.onCreateFormSubmit },
                                                                }, [e._v("添加")]
                                                            ),
                                                            e._v(" "),
                                                            r(
                                                                "el-button", {
                                                                    attrs: { size: "mini" },
                                                                    on: { click: e.onCreateFormCancel },
                                                                }, [e._v("取消")]
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
                                ]
                            ),
                            e._v(" "),
                            r(
                                "el-drawer", {
                                    ref: "editFormDrawer",
                                    attrs: {
                                        visible: e.editFormDrawer,
                                        direction: "rtl",
                                        "before-close": e.handleEditFormDrawerClose,
                                    },
                                    on: {
                                        "update:visible": function(t) {
                                            e.editFormDrawer = t;
                                        },
                                    },
                                }, [
                                    r(
                                        "div", { staticStyle: { width: "90%", "margin-left": "15px" } }, [
                                            r(
                                                "h2", {
                                                    staticStyle: { "margin-top": "0", color: "#606266" },
                                                }, [e._v("更新：" + e._s(e.editForm.id))]
                                            ),
                                            e._v(" "),
                                            r(
                                                "el-form", {
                                                    ref: "editForm",
                                                    attrs: { model: e.editForm, rules: e.editFormRules },
                                                }, [
                                                    r(
                                                        "el-form-item", { attrs: { label: "目标链接", prop: "url" } }, [
                                                            r("el-input", {
                                                                attrs: {
                                                                    placeholder: "示例：https://github.com/jwma/jump-jump",
                                                                },
                                                                model: {
                                                                    value: e.editForm.url,
                                                                    callback: function(t) {
                                                                        e.$set(e.editForm, "url", t);
                                                                    },
                                                                    expression: "editForm.url",
                                                                },
                                                            }),
                                                        ],
                                                        1
                                                    ),
                                                    e._v(" "),
                                                    r(
                                                        "el-form-item", { attrs: { label: "描述", prop: "description" } }, [
                                                            r("el-input", {
                                                                attrs: {
                                                                    type: "textarea",
                                                                    placeholder: "示例：某某帖子使用",
                                                                },
                                                                model: {
                                                                    value: e.editForm.description,
                                                                    callback: function(t) {
                                                                        e.$set(e.editForm, "description", t);
                                                                    },
                                                                    expression: "editForm.description",
                                                                },
                                                            }),
                                                        ],
                                                        1
                                                    ),
                                                    e._v(" "),
                                                    r(
                                                        "el-form-item", { attrs: { label: "启用？", prop: "isEnable" } }, [
                                                            r("el-switch", {
                                                                model: {
                                                                    value: e.editForm.isEnable,
                                                                    callback: function(t) {
                                                                        e.$set(e.editForm, "isEnable", t);
                                                                    },
                                                                    expression: "editForm.isEnable",
                                                                },
                                                            }),
                                                            e._v(" "),
                                                            r(
                                                                "el-popover", {
                                                                    attrs: {
                                                                        placement: "bottom",
                                                                        width: "320",
                                                                        trigger: "hover",
                                                                    },
                                                                }, [
                                                                    r("p", [
                                                                        e._v(
                                                                            "开启后短链接可以正常被访问，关闭后短链接被访问时会告知用户访问的页面不存在。"
                                                                        ),
                                                                        r("br"),
                                                                        e._v(" "),
                                                                        r("strong", [
                                                                            e._v(
                                                                                "注意：关闭后不会统计短链接访问的数据。"
                                                                            ),
                                                                        ]),
                                                                    ]),
                                                                    e._v(" "),
                                                                    r("i", {
                                                                        staticClass: "el-icon-question",
                                                                        attrs: { slot: "reference" },
                                                                        slot: "reference",
                                                                    }),
                                                                ]
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                    e._v(" "),
                                                    r("el-form-item", { attrs: { label: "创建人" } }, [
                                                        r("span", { staticStyle: { color: "#909399" } }, [
                                                            e._v(e._s(e.editForm.createdBy)),
                                                        ]),
                                                    ]),
                                                    e._v(" "),
                                                    r("el-form-item", { attrs: { label: "添加时间" } }, [
                                                        r("span", { staticStyle: { color: "#909399" } }, [
                                                            e._v(
                                                                e._s(e._f("dateformat")(e.editForm.createTime))
                                                            ),
                                                        ]),
                                                    ]),
                                                    e._v(" "),
                                                    r("el-form-item", { attrs: { label: "更新时间" } }, [
                                                        r("span", { staticStyle: { color: "#909399" } }, [
                                                            e._v(
                                                                e._s(e._f("dateformat")(e.editForm.updateTime))
                                                            ),
                                                        ]),
                                                    ]),
                                                    e._v(" "),
                                                    r(
                                                        "el-form-item", [
                                                            r(
                                                                "el-button", {
                                                                    attrs: { size: "mini", type: "primary" },
                                                                    on: { click: e.onEditFormSubmit },
                                                                }, [e._v("更新")]
                                                            ),
                                                            e._v(" "),
                                                            r(
                                                                "el-button", {
                                                                    attrs: { size: "mini" },
                                                                    on: { click: e.onEditFormCancel },
                                                                }, [e._v("取消")]
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
                                ]
                            ),
                            e._v(" "),
                            r(
                                "el-button", {
                                    attrs: { icon: "el-icon-refresh", size: "mini" },
                                    on: {
                                        click: function(t) {
                                            return e.getList(e.currentPage);
                                        },
                                    },
                                }, [e._v("刷新")]
                            ),
                            e._v(" "),
                            r(
                                "el-button", {
                                    attrs: {
                                        icon: "el-icon-plus",
                                        size: "mini",
                                        type: "primary",
                                    },
                                    on: {
                                        click: function(t) {
                                            return e.toCreate();
                                        },
                                    },
                                }, [e._v("添加\n  ")]
                            ),
                            e._v(" "),
                            r(
                                "el-table", {
                                    staticStyle: { width: "100%" },
                                    attrs: { data: e.list, "max-height": "800", fit: "" },
                                }, [
                                    r("el-table-column", {
                                        attrs: { label: "短链接", width: "250" },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                return [
                                                    r("i", {
                                                        class: {
                                                            "el-icon-star-off":
                                                            -1 == e.pinned.indexOf(t.row.id),
                                                                "el-icon-star-on":
                                                                -1 != e.pinned.indexOf(t.row.id),
                                                        },
                                                        staticStyle: { cursor: "pointer" },
                                                        on: {
                                                            click: function(r) {
                                                                return e.pin(t.row.id);
                                                            },
                                                        },
                                                    }),
                                                    e._v(" "),
                                                    r(
                                                        "el-dropdown", { attrs: { size: "small" } }, [
                                                            r(
                                                                "span", {
                                                                    staticClass: "el-dropdown-link",
                                                                    staticStyle: { cursor: "pointer" },
                                                                }, [
                                                                    e._v("\n            " + e._s(t.row.id)),
                                                                    r("i", {
                                                                        staticClass: "el-icon-arrow-down el-icon--right",
                                                                    }),
                                                                ]
                                                            ),
                                                            e._v(" "),
                                                            r(
                                                                "el-dropdown-menu", {
                                                                    attrs: { slot: "dropdown" },
                                                                    slot: "dropdown",
                                                                },
                                                                e._l(e.landingHosts, function(n) {
                                                                    return r("el-dropdown-item", [
                                                                        r(
                                                                            "span", {
                                                                                on: {
                                                                                    click: function(r) {
                                                                                        return e.copyShortLink(
                                                                                            n + t.row.id,
                                                                                            r
                                                                                        );
                                                                                    },
                                                                                },
                                                                            }, [e._v(e._s(n + t.row.id))]
                                                                        ),
                                                                    ]);
                                                                }),
                                                                1
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                ];
                                            },
                                        }, ]),
                                    }),
                                    e._v(" "),
                                    r("el-table-column", {
                                        attrs: { prop: "url", label: "目标链接", width: "250" },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                return [
                                                    r(
                                                        "el-dropdown", { attrs: { size: "small" } }, [
                                                            r(
                                                                "span", {
                                                                    staticClass: "el-dropdown-link",
                                                                    staticStyle: { cursor: "pointer" },
                                                                }, [
                                                                    r(
                                                                        "span", {
                                                                            staticStyle: {
                                                                                width: "200px",
                                                                                overflow: "hidden",
                                                                                "text-overflow": "ellipsis",
                                                                                "white-space": "nowrap",
                                                                                display: "inline-block",
                                                                            },
                                                                        }, [e._v(e._s(t.row.url))]
                                                                    ),
                                                                ]
                                                            ),
                                                            e._v(" "),
                                                            r(
                                                                "el-dropdown-menu", {
                                                                    attrs: { slot: "dropdown" },
                                                                    slot: "dropdown",
                                                                }, [
                                                                    r(
                                                                        "el-dropdown-item", {
                                                                            staticStyle: { "line-height": "18px" },
                                                                        }, [
                                                                            r(
                                                                                "span", {
                                                                                    on: {
                                                                                        click: function(r) {
                                                                                            return e.copyShortLink(
                                                                                                t.row.url,
                                                                                                r
                                                                                            );
                                                                                        },
                                                                                    },
                                                                                }, [e._v(e._s(t.row.url))]
                                                                            ),
                                                                        ]
                                                                    ),
                                                                ],
                                                                1
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                ];
                                            },
                                        }, ]),
                                    }),
                                    e._v(" "),
                                    r("el-table-column", {
                                        attrs: { label: "描述", width: "300" },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                return [
                                                    e._v(
                                                        "\n        " +
                                                        e._s(
                                                            t.row.description ? t.row.description : "-"
                                                        ) +
                                                        "\n      "
                                                    ),
                                                ];
                                            },
                                        }, ]),
                                    }),
                                    e._v(" "),
                                    r("el-table-column", {
                                        attrs: { label: "启用？", width: "70", align: "center" },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(e) {
                                                return [
                                                    r("i", {
                                                        class: {
                                                            "el-icon-check": e.row.isEnable,
                                                                "el-icon-close": !e.row.isEnable,
                                                        },
                                                    }),
                                                ];
                                            },
                                        }, ]),
                                    }),
                                    e._v(" "),
                                    r("el-table-column", {
                                        attrs: { label: "创建人", width: "150", align: "center" },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                return [
                                                    e._v(
                                                        "\n        " + e._s(t.row.createdBy) + "\n      "
                                                    ),
                                                ];
                                            },
                                        }, ]),
                                    }),
                                    e._v(" "),
                                    r("el-table-column", {
                                        attrs: { label: "添加时间", width: "100" },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                return [
                                                    e._v(
                                                        "\n        " +
                                                        e._s(
                                                            e._f("dateformat")(
                                                                t.row.createTime,
                                                                "DD/MM/YY"
                                                            )
                                                        ) +
                                                        "\n      "
                                                    ),
                                                ];
                                            },
                                        }, ]),
                                    }),
                                    e._v(" "),
                                    r("el-table-column", {
                                        attrs: { label: "更新时间", width: "100" },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                return [
                                                    e._v(
                                                        "\n        " +
                                                        e._s(
                                                            e._f("dateformat")(
                                                                t.row.updateTime,
                                                                "DD/MM/YY"
                                                            )
                                                        ) +
                                                        "\n      "
                                                    ),
                                                ];
                                            },
                                        }, ]),
                                    }),
                                    e._v(" "),
                                    r("el-table-column", {
                                        attrs: { label: "操作" },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                return [
                                                    r("el-button", {
                                                        attrs: {
                                                            size: "mini",
                                                            circle: "",
                                                            icon: "el-icon-s-data",
                                                        },
                                                        on: {
                                                            click: function(r) {
                                                                return e.goto({
                                                                    name: "ShortLinkData",
                                                                    params: { id: t.row.id },
                                                                });
                                                            },
                                                        },
                                                    }),
                                                    e._v(" "),
                                                    r("el-button", {
                                                        attrs: {
                                                            size: "mini",
                                                            circle: "",
                                                            icon: "el-icon-edit-outline",
                                                        },
                                                        on: {
                                                            click: function(r) {
                                                                return e.toEdit(t.row.id);
                                                            },
                                                        },
                                                    }),
                                                    e._v(" "),
                                                    r("el-button", {
                                                        attrs: {
                                                            type: "danger",
                                                            size: "mini",
                                                            icon: "el-icon-delete-solid",
                                                            circle: "",
                                                        },
                                                        on: {
                                                            click: function(r) {
                                                                return e.deleteShortLink(t.row.id);
                                                            },
                                                        },
                                                    }),
                                                ];
                                            },
                                        }, ]),
                                    }),
                                    // 添加二维码
                                    e._v(" "),
                                    r("el-table-column", {
                                        attrs: { label: "二维码" },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                return [
                                                    r("el-button", {
                                                        attrs: {
                                                            size: "mini",
                                                            circle: "",
                                                            icon: "el-icon-picture",
                                                        },
                                                        on: {
                                                            click: function(r) {
                                                                // window.location.href = `http://10.16.104.122:8081/jumpEwm.html?id=${t.row.id}&baseurl=www.abc.com`;
                                                                // window.location.href = `https://res-erp.gaosiedu.com/erp/apptest/jumpEwm.html?id=${t.row.id}&baseurl=gsa.ink`;
                                                                window.open(
                                                                    `http://short-link.dev.aixuexi.com/jumpEwm.html?id=${t.row.id}&baseurl=gsa.ink`
                                                                );
                                                                // console.log("www.baidu.com/" + t.row.id);
                                                                // $("#testimg").attr(
                                                                //     "src",
                                                                //     "http://www.baidu.com/" + t.row.id
                                                                // );
                                                                // layer.open({
                                                                //     type: 1,
                                                                //     skin: "", //样式类名
                                                                //     title: false,
                                                                //     offset: "auto",
                                                                //     area: ["300px", "300px"], //宽高
                                                                //     closeBtn: 0, //不显示关闭按钮
                                                                //     shade: 0,
                                                                //     anim: 2,
                                                                //     shadeClose: true, //开启遮罩关闭
                                                                //     content: $("#shareDiv"),
                                                                // });
                                                                // return e.generateQrcode(t.row.id);
                                                            },
                                                        },
                                                    }),
                                                ];
                                            },
                                        }, ]),
                                    }),
                                ],
                                1
                            ),
                            e._v(" "),
                            r(
                                "div", { staticClass: "paginator-container" }, [
                                    r("el-pagination", {
                                        attrs: {
                                            "current-page": e.currentPage,
                                            "page-sizes": [10, 20, 30],
                                            "page-size": e.pageSize,
                                            layout: "total, sizes, prev, pager, next, jumper",
                                            total: e.total,
                                        },
                                        on: {
                                            "size-change": e.handlePageSizeChange,
                                            "current-change": e.handleCurrentPageChange,
                                        },
                                    }),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                },
                i = [],
                o = r("db72"),
                a = r("bfad"),
                c = r("da71"),
                s = r("61f7"),
                l = r("2b0e"),
                u = r("b311"),
                d = r.n(u);

            function f() {
                l["default"].prototype.$message({
                    message: "复制成功",
                    type: "success",
                    duration: 1500,
                });
            }

            function m() {
                l["default"].prototype.$message({ message: "复制失败", type: "error" });
            }

            function h(e, t) {
                var r = new d.a(t.target, {
                    text: function() {
                        return e;
                    },
                });
                r.on("success", function() {
                        f(), r.off("error"), r.off("success"), r.destroy();
                    }),
                    r.on("error", function() {
                        m(), r.off("error"), r.off("success"), r.destroy();
                    }),
                    r.onClick(t);
            }
            var p = r("2f62"),
                g = {
                    name: "ShortLinkList",
                    data: function() {
                        var e = function(e, t, r) {
                            "" !== t ? r() : r(new Error("请输入目标链接"));
                        };
                        return {
                            landingHosts: [],
                            list: [],
                            total: 0,
                            currentPage: 1,
                            pageSize: 20,
                            createFormDrawer: !1,
                            idConfig: { idMinimumLength: 0, idLength: 0, idMaximumLength: 0 },
                            createForm: {
                                specifyId: !1,
                                setIdLength: !1,
                                id: "",
                                url: "",
                                description: "",
                                isEnable: !1,
                                idLength: 0,
                            },
                            createFormRules: {
                                url: [{ required: !0, validator: e, trigger: "blur" }],
                            },
                            editFormDrawer: !1,
                            editForm: {
                                id: "",
                                url: "",
                                description: "",
                                isEnable: !1,
                                createdBy: "",
                                createTime: "",
                                updateTime: "",
                            },
                            editFormRules: { url: [{ validator: e, trigger: "blur" }] },
                        };
                    },
                    beforeRouteUpdate: function(e, t, r) {
                        (this.currentPage = e.query.page || this.currentPage),
                        (this.pageSize = e.query.pageSize || this.pageSize),
                        this.getList(this.currentPage),
                            r();
                    },
                    created: function() {
                        var e = this;
                        (this.currentPage =
                            parseInt(this.$route.query.page) || this.currentPage),
                        (this.pageSize =
                            parseInt(this.$route.query.pageSize) || this.pageSize),
                        Object(c["a"])().then(function(t) {
                            (e.landingHosts = t.data.config.landingHosts),
                            (e.idConfig = t.data.config.idConfig),
                            (e.createForm.idLength = e.idConfig.idLength),
                            e.getList(e.currentPage);
                        });
                    },
                    computed: Object(o["a"])({}, Object(p["b"])(["role", "pinned"])),
                    methods: {
                        goto: function(e) {
                            this.$router.push(e);
                        },
                        copyShortLink: function(e, t) {
                            h(e, t);
                        },
                        getList: function(e) {
                            var t = this;
                            Object(a["b"])(e, this.pageSize).then(function(r) {
                                (t.currentPage = e),
                                (t.total = r.data.total),
                                (t.list = r.data.shortLinks),
                                1 !== t.currentPage &&
                                    0 === t.list.length &&
                                    t.total > 0 &&
                                    ((t.currentPage = 1), t.getList(1));
                            });
                        },
                        resetCreateForm: function() {
                            (this.createForm.specifyId = !1),
                            (this.createForm.setIdLength = !1),
                            (this.createForm.id = ""),
                            (this.createForm.url = ""),
                            (this.createForm.description = ""),
                            (this.createForm.isEnable = !1);
                        },
                        resetEditForm: function() {
                            (this.editForm.url = ""),
                            (this.editForm.description = ""),
                            (this.editForm.isEnable = !1),
                            (this.editForm.createdBy = ""),
                            (this.editForm.createTime = ""),
                            (this.editForm.updateTime = "");
                        },
                        getInvalidUrlTipsText: function(e) {
                            return '<textarea rows="3" style="width: 100%;border: none;resize: none;" disabled>'.concat(
                                e,
                                "</textarea><br>目标链接不是常规的URL，确定继续？"
                            );
                        },
                        handlePageSizeChange: function(e) {
                            (this.pageSize = e),
                            (this.currentPage = 1),
                            this.$router.push({
                                name: "ShortLinkList",
                                query: { page: 1, pageSize: e },
                            });
                        },
                        handleCurrentPageChange: function(e) {
                            (this.currentPage = e),
                            this.$router.push({
                                name: "ShortLinkList",
                                query: { page: e, pageSize: this.pageSize },
                            });
                        },
                        toCreate: function() {
                            var e = this;
                            Object(c["a"])().then(function(t) {
                                (e.idConfig = t.data.config.idConfig),
                                (e.createForm.idLength = e.idConfig.idLength),
                                (e.createFormDrawer = !0);
                            });
                        },
                        handleCreateFormDrawerClose: function(e) {
                            this.resetCreateForm(), e();
                        },
                        submitCreateForm: function() {
                            var e = this;
                            Object(a["a"])(this.createForm).then(function(t) {
                                e.$refs.createFormDrawer.closeDrawer(),
                                    e.$notify({
                                        title: "添加短链接成功",
                                        message: "ID：" + t.data.shortLink.id,
                                        type: "success",
                                    }),
                                    e.getList(e.currentPage);
                            });
                        },
                        onCreateFormSubmit: function() {
                            var e = this;
                            this.$refs.createForm.validate(function(t) {
                                if (!t) return !1;
                                Object(s["b"])(e.createForm.url) ?
                                    e.submitCreateForm() :
                                    e
                                    .$confirm(
                                        e.getInvalidUrlTipsText(e.createForm.url),
                                        "提示", {
                                            confirmButtonText: "确定",
                                            cancelButtonText: "再改改",
                                            type: "warning",
                                            dangerouslyUseHTMLString: !0,
                                        }
                                    )
                                    .then(function() {
                                        e.submitCreateForm();
                                    });
                            });
                        },
                        onCreateFormCancel: function() {
                            this.resetCreateForm(), (this.createFormDrawer = !1);
                        },
                        toEdit: function(e) {
                            var t = this;
                            Object(a["c"])(e).then(function(e) {
                                (t.editFormDrawer = !0), (t.editForm = e.data.shortLink);
                            });
                        },
                        handleEditFormDrawerClose: function(e) {
                            this.resetEditForm(), e();
                        },
                        submitEditForm: function() {
                            var e = this;
                            Object(a["f"])(this.editForm.id, this.editForm).then(function(
                                t
                            ) {
                                e.$refs.editFormDrawer.closeDrawer(),
                                    e.$notify({
                                        title: "更新成功",
                                        message: "ID：" + t.data.shortLink.id,
                                        type: "success",
                                    }),
                                    e.getList(e.currentPage);
                            });
                        },
                        onEditFormSubmit: function() {
                            var e = this;
                            this.$refs.editForm.validate(function(t) {
                                if (!t) return !1;
                                Object(s["b"])(e.editForm.url) ?
                                    e.submitEditForm() :
                                    e
                                    .$confirm(
                                        e.getInvalidUrlTipsText(e.editForm.url),
                                        "提示", {
                                            confirmButtonText: "确定",
                                            cancelButtonText: "再改改",
                                            type: "warning",
                                            dangerouslyUseHTMLString: !0,
                                        }
                                    )
                                    .then(function() {
                                        e.submitEditForm();
                                    });
                            });
                        },
                        onEditFormCancel: function() {
                            this.resetEditForm(), (this.editFormDrawer = !1);
                        },
                        deleteShortLink: function(e) {
                            var t = this;
                            this.$confirm("此操作会永久删除短链接，是否继续？", "删除确认", {
                                confirmButtonText: "确定",
                                cancelButtonText: "取消",
                                type: "warning",
                            }).then(function() {
                                Object(a["e"])(e).then(function(r) {
                                    t.$notify({
                                            title: "成功删除短链接",
                                            message: "ID：".concat(e),
                                            type: "success",
                                        }),
                                        t.getList(t.currentPage),
                                        t.$store.dispatch("link/unpin", e);
                                });
                            });
                        },

                        // 生成二维码函数

                        // generateQrcode: function (e) {
                        //   $(".el-table__body .el-table__row").each(function (i, n) {
                        //     $("td:last", n)
                        //       .append("<button>按钮</button>")
                        //       .click(function () {
                        //          aaa;
                        //       });
                        //   });
                        // },

                        // 生成二维码函数

                        specifyIdChange: function(e) {
                            e
                                ?
                                ((this.createForm.setIdLength = !1),
                                    this.setIdLengthChange(!1)) :
                                (this.createForm.id = "");
                        },
                        setIdLengthChange: function(e) {
                            e
                                ?
                                ((this.createForm.specifyId = !1), this.specifyIdChange(!1)) :
                                (this.createForm.idLength = this.idConfig.idLength);
                        },
                        pin: function(e) {
                            -1 == this.pinned.indexOf(e) ?
                                (this.$store.dispatch("link/pin", e),
                                    this.$message({
                                        showClose: !0,
                                        type: "success",
                                        message: "Pin ".concat(e),
                                    })) :
                                (this.$store.dispatch("link/unpin", e),
                                    this.$message({
                                        showClose: !0,
                                        type: "success",
                                        message: "Unpin ".concat(e),
                                    }));
                        },
                    },
                },
                v = g,
                b = (r("e160"), r("2877")),
                y = Object(b["a"])(v, n, i, !1, null, "901f7d5c", null);
            t["default"] = y.exports;
        },
        b311: function(e, t, r) {
            /*!
             * clipboard.js v2.0.6
             * https://clipboardjs.com/
             *
             * Licensed MIT © Zeno Rocha
             */
            (function(t, r) {
                e.exports = r();
            })(0, function() {
                return (function(e) {
                    var t = {};

                    function r(n) {
                        if (t[n]) return t[n].exports;
                        var i = (t[n] = { i: n, l: !1, exports: {} });
                        return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
                    }
                    return (
                        (r.m = e),
                        (r.c = t),
                        (r.d = function(e, t, n) {
                            r.o(e, t) ||
                                Object.defineProperty(e, t, { enumerable: !0, get: n });
                        }),
                        (r.r = function(e) {
                            "undefined" !== typeof Symbol &&
                                Symbol.toStringTag &&
                                Object.defineProperty(e, Symbol.toStringTag, {
                                    value: "Module",
                                }),
                                Object.defineProperty(e, "__esModule", { value: !0 });
                        }),
                        (r.t = function(e, t) {
                            if ((1 & t && (e = r(e)), 8 & t)) return e;
                            if (4 & t && "object" === typeof e && e && e.__esModule) return e;
                            var n = Object.create(null);
                            if (
                                (r.r(n),
                                    Object.defineProperty(n, "default", {
                                        enumerable: !0,
                                        value: e,
                                    }),
                                    2 & t && "string" != typeof e)
                            )
                                for (var i in e)
                                    r.d(
                                        n,
                                        i,
                                        function(t) {
                                            return e[t];
                                        }.bind(null, i)
                                    );
                            return n;
                        }),
                        (r.n = function(e) {
                            var t =
                                e && e.__esModule ?

                                function() {
                                    return e["default"];
                                } :
                                function() {
                                    return e;
                                };
                            return r.d(t, "a", t), t;
                        }),
                        (r.o = function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                        }),
                        (r.p = ""),
                        r((r.s = 6))
                    );
                })([
                    function(e, t) {
                        function r(e) {
                            var t;
                            if ("SELECT" === e.nodeName) e.focus(), (t = e.value);
                            else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                                var r = e.hasAttribute("readonly");
                                r || e.setAttribute("readonly", ""),
                                    e.select(),
                                    e.setSelectionRange(0, e.value.length),
                                    r || e.removeAttribute("readonly"),
                                    (t = e.value);
                            } else {
                                e.hasAttribute("contenteditable") && e.focus();
                                var n = window.getSelection(),
                                    i = document.createRange();
                                i.selectNodeContents(e),
                                    n.removeAllRanges(),
                                    n.addRange(i),
                                    (t = n.toString());
                            }
                            return t;
                        }
                        e.exports = r;
                    },
                    function(e, t) {
                        function r() {}
                        (r.prototype = {
                            on: function(e, t, r) {
                                var n = this.e || (this.e = {});
                                return (n[e] || (n[e] = [])).push({ fn: t, ctx: r }), this;
                            },
                            once: function(e, t, r) {
                                var n = this;

                                function i() {
                                    n.off(e, i), t.apply(r, arguments);
                                }
                                return (i._ = t), this.on(e, i, r);
                            },
                            emit: function(e) {
                                var t = [].slice.call(arguments, 1),
                                    r = ((this.e || (this.e = {}))[e] || []).slice(),
                                    n = 0,
                                    i = r.length;
                                for (n; n < i; n++) r[n].fn.apply(r[n].ctx, t);
                                return this;
                            },
                            off: function(e, t) {
                                var r = this.e || (this.e = {}),
                                    n = r[e],
                                    i = [];
                                if (n && t)
                                    for (var o = 0, a = n.length; o < a; o++)
                                        n[o].fn !== t && n[o].fn._ !== t && i.push(n[o]);
                                return i.length ? (r[e] = i) : delete r[e], this;
                            },
                        }),
                        (e.exports = r),
                        (e.exports.TinyEmitter = r);
                    },
                    function(e, t, r) {
                        var n = r(3),
                            i = r(4);

                        function o(e, t, r) {
                            if (!e && !t && !r) throw new Error("Missing required arguments");
                            if (!n.string(t))
                                throw new TypeError("Second argument must be a String");
                            if (!n.fn(r))
                                throw new TypeError("Third argument must be a Function");
                            if (n.node(e)) return a(e, t, r);
                            if (n.nodeList(e)) return c(e, t, r);
                            if (n.string(e)) return s(e, t, r);
                            throw new TypeError(
                                "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
                            );
                        }

                        function a(e, t, r) {
                            return (
                                e.addEventListener(t, r), {
                                    destroy: function() {
                                        e.removeEventListener(t, r);
                                    },
                                }
                            );
                        }

                        function c(e, t, r) {
                            return (
                                Array.prototype.forEach.call(e, function(e) {
                                    e.addEventListener(t, r);
                                }), {
                                    destroy: function() {
                                        Array.prototype.forEach.call(e, function(e) {
                                            e.removeEventListener(t, r);
                                        });
                                    },
                                }
                            );
                        }

                        function s(e, t, r) {
                            return i(document.body, e, t, r);
                        }
                        e.exports = o;
                    },
                    function(e, t) {
                        (t.node = function(e) {
                            return (
                                void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
                            );
                        }),
                        (t.nodeList = function(e) {
                            var r = Object.prototype.toString.call(e);
                            return (
                                void 0 !== e &&
                                ("[object NodeList]" === r ||
                                    "[object HTMLCollection]" === r) &&
                                "length" in e &&
                                (0 === e.length || t.node(e[0]))
                            );
                        }),
                        (t.string = function(e) {
                            return "string" === typeof e || e instanceof String;
                        }),
                        (t.fn = function(e) {
                            var t = Object.prototype.toString.call(e);
                            return "[object Function]" === t;
                        });
                    },
                    function(e, t, r) {
                        var n = r(5);

                        function i(e, t, r, n, i) {
                            var o = a.apply(this, arguments);
                            return (
                                e.addEventListener(r, o, i), {
                                    destroy: function() {
                                        e.removeEventListener(r, o, i);
                                    },
                                }
                            );
                        }

                        function o(e, t, r, n, o) {
                            return "function" === typeof e.addEventListener ?
                                i.apply(null, arguments) :
                                "function" === typeof r ?
                                i.bind(null, document).apply(null, arguments) :
                                ("string" === typeof e && (e = document.querySelectorAll(e)),
                                    Array.prototype.map.call(e, function(e) {
                                        return i(e, t, r, n, o);
                                    }));
                        }

                        function a(e, t, r, i) {
                            return function(r) {
                                (r.delegateTarget = n(r.target, t)),
                                r.delegateTarget && i.call(e, r);
                            };
                        }
                        e.exports = o;
                    },
                    function(e, t) {
                        var r = 9;
                        if ("undefined" !== typeof Element && !Element.prototype.matches) {
                            var n = Element.prototype;
                            n.matches =
                                n.matchesSelector ||
                                n.mozMatchesSelector ||
                                n.msMatchesSelector ||
                                n.oMatchesSelector ||
                                n.webkitMatchesSelector;
                        }

                        function i(e, t) {
                            while (e && e.nodeType !== r) {
                                if ("function" === typeof e.matches && e.matches(t)) return e;
                                e = e.parentNode;
                            }
                        }
                        e.exports = i;
                    },
                    function(e, t, r) {
                        "use strict";
                        r.r(t);
                        var n = r(0),
                            i = r.n(n),
                            o =
                            "function" === typeof Symbol &&
                            "symbol" === typeof Symbol.iterator ?

                            function(e) {
                                return typeof e;
                            } :
                            function(e) {
                                return e &&
                                    "function" === typeof Symbol &&
                                    e.constructor === Symbol &&
                                    e !== Symbol.prototype ?
                                    "symbol" :
                                    typeof e;
                            },
                            a = (function() {
                                function e(e, t) {
                                    for (var r = 0; r < t.length; r++) {
                                        var n = t[r];
                                        (n.enumerable = n.enumerable || !1),
                                        (n.configurable = !0),
                                        "value" in n && (n.writable = !0),
                                            Object.defineProperty(e, n.key, n);
                                    }
                                }
                                return function(t, r, n) {
                                    return r && e(t.prototype, r), n && e(t, n), t;
                                };
                            })();

                        function c(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function");
                        }
                        var s = (function() {
                                function e(t) {
                                    c(this, e), this.resolveOptions(t), this.initSelection();
                                }
                                return (
                                    a(e, [{
                                            key: "resolveOptions",
                                            value: function() {
                                                var e =
                                                    arguments.length > 0 && void 0 !== arguments[0] ?
                                                    arguments[0] :
                                                    {};
                                                (this.action = e.action),
                                                (this.container = e.container),
                                                (this.emitter = e.emitter),
                                                (this.target = e.target),
                                                (this.text = e.text),
                                                (this.trigger = e.trigger),
                                                (this.selectedText = "");
                                            },
                                        },
                                        {
                                            key: "initSelection",
                                            value: function() {
                                                this.text ?
                                                    this.selectFake() :
                                                    this.target && this.selectTarget();
                                            },
                                        },
                                        {
                                            key: "selectFake",
                                            value: function() {
                                                var e = this,
                                                    t =
                                                    "rtl" ==
                                                    document.documentElement.getAttribute("dir");
                                                this.removeFake(),
                                                    (this.fakeHandlerCallback = function() {
                                                        return e.removeFake();
                                                    }),
                                                    (this.fakeHandler =
                                                        this.container.addEventListener(
                                                            "click",
                                                            this.fakeHandlerCallback
                                                        ) || !0),
                                                    (this.fakeElem = document.createElement("textarea")),
                                                    (this.fakeElem.style.fontSize = "12pt"),
                                                    (this.fakeElem.style.border = "0"),
                                                    (this.fakeElem.style.padding = "0"),
                                                    (this.fakeElem.style.margin = "0"),
                                                    (this.fakeElem.style.position = "absolute"),
                                                    (this.fakeElem.style[t ? "right" : "left"] =
                                                        "-9999px");
                                                var r =
                                                    window.pageYOffset ||
                                                    document.documentElement.scrollTop;
                                                (this.fakeElem.style.top = r + "px"),
                                                this.fakeElem.setAttribute("readonly", ""),
                                                    (this.fakeElem.value = this.text),
                                                    this.container.appendChild(this.fakeElem),
                                                    (this.selectedText = i()(this.fakeElem)),
                                                    this.copyText();
                                            },
                                        },
                                        {
                                            key: "removeFake",
                                            value: function() {
                                                this.fakeHandler &&
                                                    (this.container.removeEventListener(
                                                            "click",
                                                            this.fakeHandlerCallback
                                                        ),
                                                        (this.fakeHandler = null),
                                                        (this.fakeHandlerCallback = null)),
                                                    this.fakeElem &&
                                                    (this.container.removeChild(this.fakeElem),
                                                        (this.fakeElem = null));
                                            },
                                        },
                                        {
                                            key: "selectTarget",
                                            value: function() {
                                                (this.selectedText = i()(this.target)), this.copyText();
                                            },
                                        },
                                        {
                                            key: "copyText",
                                            value: function() {
                                                var e = void 0;
                                                try {
                                                    e = document.execCommand(this.action);
                                                } catch (t) {
                                                    e = !1;
                                                }
                                                this.handleResult(e);
                                            },
                                        },
                                        {
                                            key: "handleResult",
                                            value: function(e) {
                                                this.emitter.emit(e ? "success" : "error", {
                                                    action: this.action,
                                                    text: this.selectedText,
                                                    trigger: this.trigger,
                                                    clearSelection: this.clearSelection.bind(this),
                                                });
                                            },
                                        },
                                        {
                                            key: "clearSelection",
                                            value: function() {
                                                this.trigger && this.trigger.focus(),
                                                    document.activeElement.blur(),
                                                    window.getSelection().removeAllRanges();
                                            },
                                        },
                                        {
                                            key: "destroy",
                                            value: function() {
                                                this.removeFake();
                                            },
                                        },
                                        {
                                            key: "action",
                                            set: function() {
                                                var e =
                                                    arguments.length > 0 && void 0 !== arguments[0] ?
                                                    arguments[0] :
                                                    "copy";
                                                if (
                                                    ((this._action = e),
                                                        "copy" !== this._action && "cut" !== this._action)
                                                )
                                                    throw new Error(
                                                        'Invalid "action" value, use either "copy" or "cut"'
                                                    );
                                            },
                                            get: function() {
                                                return this._action;
                                            },
                                        },
                                        {
                                            key: "target",
                                            set: function(e) {
                                                if (void 0 !== e) {
                                                    if (!e ||
                                                        "object" !==
                                                        ("undefined" === typeof e ? "undefined" : o(e)) ||
                                                        1 !== e.nodeType
                                                    )
                                                        throw new Error(
                                                            'Invalid "target" value, use a valid Element'
                                                        );
                                                    if (
                                                        "copy" === this.action &&
                                                        e.hasAttribute("disabled")
                                                    )
                                                        throw new Error(
                                                            'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                                                        );
                                                    if (
                                                        "cut" === this.action &&
                                                        (e.hasAttribute("readonly") ||
                                                            e.hasAttribute("disabled"))
                                                    )
                                                        throw new Error(
                                                            'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                                                        );
                                                    this._target = e;
                                                }
                                            },
                                            get: function() {
                                                return this._target;
                                            },
                                        },
                                    ]),
                                    e
                                );
                            })(),
                            l = s,
                            u = r(1),
                            d = r.n(u),
                            f = r(2),
                            m = r.n(f),
                            h =
                            "function" === typeof Symbol &&
                            "symbol" === typeof Symbol.iterator ?

                            function(e) {
                                return typeof e;
                            } :
                            function(e) {
                                return e &&
                                    "function" === typeof Symbol &&
                                    e.constructor === Symbol &&
                                    e !== Symbol.prototype ?
                                    "symbol" :
                                    typeof e;
                            },
                            p = (function() {
                                function e(e, t) {
                                    for (var r = 0; r < t.length; r++) {
                                        var n = t[r];
                                        (n.enumerable = n.enumerable || !1),
                                        (n.configurable = !0),
                                        "value" in n && (n.writable = !0),
                                            Object.defineProperty(e, n.key, n);
                                    }
                                }
                                return function(t, r, n) {
                                    return r && e(t.prototype, r), n && e(t, n), t;
                                };
                            })();

                        function g(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function");
                        }

                        function v(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t || ("object" !== typeof t && "function" !== typeof t) ?
                                e :
                                t;
                        }

                        function b(e, t) {
                            if ("function" !== typeof t && null !== t)
                                throw new TypeError(
                                    "Super expression must either be null or a function, not " +
                                    typeof t
                                );
                            (e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                            t &&
                                (Object.setPrototypeOf ?
                                    Object.setPrototypeOf(e, t) :
                                    (e.__proto__ = t));
                        }
                        var y = (function(e) {
                            function t(e, r) {
                                g(this, t);
                                var n = v(
                                    this,
                                    (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                                );
                                return n.resolveOptions(r), n.listenClick(e), n;
                            }
                            return (
                                b(t, e),
                                p(
                                    t, [{
                                            key: "resolveOptions",
                                            value: function() {
                                                var e =
                                                    arguments.length > 0 && void 0 !== arguments[0] ?
                                                    arguments[0] :
                                                    {};
                                                (this.action =
                                                    "function" === typeof e.action ?
                                                    e.action :
                                                    this.defaultAction),
                                                (this.target =
                                                    "function" === typeof e.target ?
                                                    e.target :
                                                    this.defaultTarget),
                                                (this.text =
                                                    "function" === typeof e.text ?
                                                    e.text :
                                                    this.defaultText),
                                                (this.container =
                                                    "object" === h(e.container) ?
                                                    e.container :
                                                    document.body);
                                            },
                                        },
                                        {
                                            key: "listenClick",
                                            value: function(e) {
                                                var t = this;
                                                this.listener = m()(e, "click", function(e) {
                                                    return t.onClick(e);
                                                });
                                            },
                                        },
                                        {
                                            key: "onClick",
                                            value: function(e) {
                                                var t = e.delegateTarget || e.currentTarget;
                                                this.clipboardAction && (this.clipboardAction = null),
                                                    (this.clipboardAction = new l({
                                                        action: this.action(t),
                                                        target: this.target(t),
                                                        text: this.text(t),
                                                        container: this.container,
                                                        trigger: t,
                                                        emitter: this,
                                                    }));
                                            },
                                        },
                                        {
                                            key: "defaultAction",
                                            value: function(e) {
                                                return w("action", e);
                                            },
                                        },
                                        {
                                            key: "defaultTarget",
                                            value: function(e) {
                                                var t = w("target", e);
                                                if (t) return document.querySelector(t);
                                            },
                                        },
                                        {
                                            key: "defaultText",
                                            value: function(e) {
                                                return w("text", e);
                                            },
                                        },
                                        {
                                            key: "destroy",
                                            value: function() {
                                                this.listener.destroy(),
                                                    this.clipboardAction &&
                                                    (this.clipboardAction.destroy(),
                                                        (this.clipboardAction = null));
                                            },
                                        },
                                    ], [{
                                        key: "isSupported",
                                        value: function() {
                                            var e =
                                                arguments.length > 0 && void 0 !== arguments[0] ?
                                                arguments[0] :
                                                ["copy", "cut"],
                                                t = "string" === typeof e ? [e] : e,
                                                r = !!document.queryCommandSupported;
                                            return (
                                                t.forEach(function(e) {
                                                    r = r && !!document.queryCommandSupported(e);
                                                }),
                                                r
                                            );
                                        },
                                    }, ]
                                ),
                                t
                            );
                        })(d.a);

                        function w(e, t) {
                            var r = "data-clipboard-" + e;
                            if (t.hasAttribute(r)) return t.getAttribute(r);
                        }
                        t["default"] = y;
                    },
                ])["default"];
            });
        },
        bfad: function(e, t, r) {
            "use strict";
            r.d(t, "c", function() {
                    return i;
                }),
                r.d(t, "b", function() {
                    return o;
                }),
                r.d(t, "a", function() {
                    return a;
                }),
                r.d(t, "e", function() {
                    return c;
                }),
                r.d(t, "f", function() {
                    return s;
                }),
                r.d(t, "d", function() {
                    return l;
                });
            var n = r("b775");

            function i(e) {
                return Object(n["a"])({
                    url: "/v1/short-link/".concat(e),
                    method: "get",
                });
            }

            function o(e, t) {
                return Object(n["a"])({
                    url: "/v1/short-link/?page=".concat(e, "&pageSize=").concat(t),
                    method: "get",
                });
            }

            function a(e) {
                return Object(n["a"])({
                    url: "/v1/short-link/",
                    method: "post",
                    data: e,
                });
            }

            function c(e) {
                return Object(n["a"])({
                    url: "/v1/short-link/".concat(e),
                    method: "delete",
                });
            }

            function s(e, t) {
                return Object(n["a"])({
                    url: "/v1/short-link/".concat(e),
                    method: "patch",
                    data: t,
                });
            }

            function l(e, t, r) {
                return Object(n["a"])({
                    url: "/v1/short-link/"
                        .concat(e, "/data?startDate=")
                        .concat(t, "&endDate=")
                        .concat(r),
                    method: "get",
                });
            }
        },
        da71: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                    return i;
                }),
                r.d(t, "c", function() {
                    return o;
                }),
                r.d(t, "b", function() {
                    return a;
                }),
                r.d(t, "d", function() {
                    return c;
                });
            var n = r("b775");

            function i() {
                return Object(n["a"])({ url: "/v1/config", method: "get" });
            }

            function o(e) {
                return Object(n["a"])({
                    url: "/v1/config/landing-hosts",
                    method: "patch",
                    data: e,
                });
            }

            function a(e) {
                return Object(n["a"])({
                    url: "/v1/config/id-length",
                    method: "patch",
                    data: e,
                });
            }

            function c(e) {
                return Object(n["a"])({
                    url: "/v1/config/short-link-404-handling",
                    method: "patch",
                    data: e,
                });
            }
        },
        e160: function(e, t, r) {
            "use strict";
            var n = r("80f1"),
                i = r.n(n);
            i.a;
        },
    },
]);