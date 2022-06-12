/**
 * @license
 clipboard.js v2.0.6
 https://clipboardjs.com/

 Licensed MIT © Zeno Rocha
*/
"use strict";
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-13714370"],
    {
        "80f1": function(branchData, beforeZero, afterZero) {},
        9472: function(cas, model, $) {
            /**
             * @return {undefined}
             */
            function success() {
                schema["default"].prototype.$message({
                    message: "\u590d\u5236\u6210\u529f",
                    type: "success",
                    duration: 1500,
                });
            }
            /**
             * @return {undefined}
             */
            function error() {
                schema["default"].prototype.$message({
                    message: "\u590d\u5236\u5931\u8d25",
                    type: "error",
                });
            }
            /**
             * @param {?} text
             * @param {!Event} value
             * @return {undefined}
             */
            function build(text, value) {
                var component = new global.a(value.target, {
                    text: function() {
                        return text;
                    },
                });
                component.on("success", function() {
                    success();
                    component.off("error");
                    component.off("success");
                    component.destroy();
                });
                component.on("error", function() {
                    error();
                    component.off("error");
                    component.off("success");
                    component.destroy();
                });
                component.onClick(value);
            }
            $.r(model);
            /**
             * @return {?}
             */
            var render = function() {
                var self = this;
                var _h = self.$createElement;
                var h = self._self._c || _h;
                return h(
                    "el-main", [
                        h(
                            "el-drawer", {
                                ref: "createFormDrawer",
                                attrs: {
                                    visible: self.createFormDrawer,
                                    direction: "rtl",
                                    "before-close": self.handleCreateFormDrawerClose,
                                },
                                on: {
                                    "update:visible": function(navigatorType) {
                                        /** @type {boolean} */
                                        self.createFormDrawer = navigatorType;
                                    },
                                },
                            }, [
                                h(
                                    "div", {
                                        staticStyle: {
                                            width: "90%",
                                            "margin-left": "15px",
                                        },
                                    }, [
                                        h(
                                            "h2", {
                                                staticStyle: {
                                                    "margin-top": "0",
                                                    color: "#606266",
                                                },
                                            }, [self._v("\u6dfb\u52a0\u77ed\u94fe\u63a5")]
                                        ),
                                        self._v(" "),
                                        h(
                                            "el-form", {
                                                ref: "createForm",
                                                attrs: {
                                                    model: self.createForm,
                                                    rules: self.createFormRules,
                                                },
                                            }, [
                                                h(
                                                    "el-form-item", {
                                                        directives: [{
                                                            name: "show",
                                                            rawName: "v-show",
                                                            value: 2 === self.role,
                                                            expression: "role === 2",
                                                        }, ],
                                                        attrs: {
                                                            label: "\u6307\u5b9a ID",
                                                            prop: "id",
                                                        },
                                                    }, [
                                                        h("el-switch", {
                                                            on: {
                                                                change: function(f) {
                                                                    return self.specifyIdChange(f);
                                                                },
                                                            },
                                                            model: {
                                                                value: self.createForm.specifyId,
                                                                callback: function(newValue) {
                                                                    self.$set(
                                                                        self.createForm,
                                                                        "specifyId",
                                                                        newValue
                                                                    );
                                                                },
                                                                expression: "createForm.specifyId",
                                                            },
                                                        }),
                                                        self._v(" "),
                                                        h(
                                                            "el-popover", {
                                                                attrs: {
                                                                    placement: "bottom",
                                                                    width: "320",
                                                                    trigger: "hover",
                                                                },
                                                            }, [
                                                                h("p", [
                                                                    self._v(
                                                                        "\u8bbe\u7f6e\u4f60\u671f\u671b\u7684ID\uff0c\u8bbe\u7f6e\u540e\u968f\u673aID\u5c06\u4e0d\u8d77\u4f5c\u7528\u3002"
                                                                    ),
                                                                ]),
                                                                self._v(" "),
                                                                h("i", {
                                                                    staticClass: "el-icon-question",
                                                                    attrs: {
                                                                        slot: "reference",
                                                                    },
                                                                    slot: "reference",
                                                                }),
                                                            ]
                                                        ),
                                                        self._v(" "),
                                                        h("el-input", {
                                                            directives: [{
                                                                name: "show",
                                                                rawName: "v-show",
                                                                value: self.createForm.specifyId,
                                                                expression: "createForm.specifyId",
                                                            }, ],
                                                            attrs: {
                                                                disabled: self.createForm.setIdLength,
                                                                placeholder: "\u793a\u4f8b\uff1ahome",
                                                            },
                                                            model: {
                                                                value: self.createForm.id,
                                                                callback: function(newValue) {
                                                                    self.$set(self.createForm, "id", newValue);
                                                                },
                                                                expression: "createForm.id",
                                                            },
                                                        }),
                                                    ],
                                                    1
                                                ),
                                                self._v(" "),
                                                h(
                                                    "el-form-item", {
                                                        directives: [{
                                                            name: "show",
                                                            rawName: "v-show",
                                                            value: 2 === self.role,
                                                            expression: "role === 2",
                                                        }, ],
                                                        attrs: {
                                                            label: "\u6307\u5b9a\u968f\u673a ID \u957f\u5ea6",
                                                            prop: "idLength",
                                                        },
                                                    }, [
                                                        h("el-switch", {
                                                            on: {
                                                                change: function(f) {
                                                                    return self.setIdLengthChange(f);
                                                                },
                                                            },
                                                            model: {
                                                                value: self.createForm.setIdLength,
                                                                callback: function(newValue) {
                                                                    self.$set(
                                                                        self.createForm,
                                                                        "setIdLength",
                                                                        newValue
                                                                    );
                                                                },
                                                                expression: "createForm.setIdLength",
                                                            },
                                                        }),
                                                        self._v(" "),
                                                        h(
                                                            "el-popover", {
                                                                attrs: {
                                                                    placement: "bottom",
                                                                    width: "320",
                                                                    trigger: "hover",
                                                                },
                                                            }, [
                                                                h("p", [
                                                                    self._v(
                                                                        "\u5728\u5141\u8bb8\u7684\u8303\u56f4\u5185\u6307\u5b9a\u968f\u673aID\u7684\u957f\u5ea6\uff0c\u4e0d\u6307\u5b9a\u65f6\u4f1a\u4f7f\u7528\u7cfb\u7edf\u9ed8\u8ba4\u8bbe\u7f6e\u3002"
                                                                    ),
                                                                ]),
                                                                self._v(" "),
                                                                h("i", {
                                                                    staticClass: "el-icon-question",
                                                                    attrs: {
                                                                        slot: "reference",
                                                                    },
                                                                    slot: "reference",
                                                                }),
                                                            ]
                                                        ),
                                                        self._v(" "),
                                                        h("el-slider", {
                                                            directives: [{
                                                                name: "show",
                                                                rawName: "v-show",
                                                                value: self.createForm.setIdLength,
                                                                expression: "createForm.setIdLength",
                                                            }, ],
                                                            attrs: {
                                                                "show-input": "",
                                                                disabled: self.createForm.specifyId,
                                                                min: self.idConfig.idMinimumLength,
                                                                max: self.idConfig.idMaximumLength,
                                                            },
                                                            model: {
                                                                value: self.createForm.idLength,
                                                                callback: function(newValue) {
                                                                    self.$set(
                                                                        self.createForm,
                                                                        "idLength",
                                                                        newValue
                                                                    );
                                                                },
                                                                expression: "createForm.idLength",
                                                            },
                                                        }),
                                                    ],
                                                    1
                                                ),
                                                self._v(" "),
                                                h(
                                                    "el-form-item", {
                                                        attrs: {
                                                            label: "\u76ee\u6807\u94fe\u63a5",
                                                            prop: "url",
                                                        },
                                                    }, [
                                                        h("el-input", {
                                                            attrs: {
                                                                placeholder: "\u793a\u4f8b\uff1ahttps://github.com/jwma/jump-jump",
                                                            },
                                                            model: {
                                                                value: self.createForm.url,
                                                                callback: function(newValue) {
                                                                    self.$set(self.createForm, "url", newValue);
                                                                },
                                                                expression: "createForm.url",
                                                            },
                                                        }),
                                                    ],
                                                    1
                                                ),
                                                self._v(" "),
                                                h(
                                                    "el-form-item", {
                                                        attrs: {
                                                            label: "\u63cf\u8ff0",
                                                            prop: "description",
                                                        },
                                                    }, [
                                                        h("el-input", {
                                                            attrs: {
                                                                type: "textarea",
                                                                placeholder: "\u793a\u4f8b\uff1a\u67d0\u67d0\u5e16\u5b50\u4f7f\u7528",
                                                            },
                                                            model: {
                                                                value: self.createForm.description,
                                                                callback: function(newValue) {
                                                                    self.$set(
                                                                        self.createForm,
                                                                        "description",
                                                                        newValue
                                                                    );
                                                                },
                                                                expression: "createForm.description",
                                                            },
                                                        }),
                                                    ],
                                                    1
                                                ),
                                                self._v(" "),
                                                h(
                                                    "el-form-item", {
                                                        attrs: {
                                                            label: "\u542f\u7528\uff1f",
                                                            prop: "isEnable",
                                                        },
                                                    }, [
                                                        h("el-switch", {
                                                            model: {
                                                                value: self.createForm.isEnable,
                                                                callback: function(newValue) {
                                                                    self.$set(
                                                                        self.createForm,
                                                                        "isEnable",
                                                                        newValue
                                                                    );
                                                                },
                                                                expression: "createForm.isEnable",
                                                            },
                                                        }),
                                                        self._v(" "),
                                                        h(
                                                            "el-popover", {
                                                                attrs: {
                                                                    placement: "bottom",
                                                                    width: "320",
                                                                    trigger: "hover",
                                                                },
                                                            }, [
                                                                h("p", [
                                                                    self._v(
                                                                        "\u5f00\u542f\u540e\u77ed\u94fe\u63a5\u53ef\u4ee5\u6b63\u5e38\u88ab\u8bbf\u95ee\uff0c\u5173\u95ed\u540e\u77ed\u94fe\u63a5\u88ab\u8bbf\u95ee\u65f6\u4f1a\u544a\u77e5\u7528\u6237\u8bbf\u95ee\u7684\u9875\u9762\u4e0d\u5b58\u5728\u3002"
                                                                    ),
                                                                    h("br"),
                                                                    self._v(" "),
                                                                    h("strong", [
                                                                        self._v(
                                                                            "\u6ce8\u610f\uff1a\u5173\u95ed\u540e\u4e0d\u4f1a\u7edf\u8ba1\u77ed\u94fe\u63a5\u8bbf\u95ee\u7684\u6570\u636e\u3002"
                                                                        ),
                                                                    ]),
                                                                ]),
                                                                self._v(" "),
                                                                h("i", {
                                                                    staticClass: "el-icon-question",
                                                                    attrs: {
                                                                        slot: "reference",
                                                                    },
                                                                    slot: "reference",
                                                                }),
                                                            ]
                                                        ),
                                                    ],
                                                    1
                                                ),
                                                self._v(" "),
                                                h(
                                                    "el-form-item", [
                                                        h(
                                                            "el-button", {
                                                                attrs: {
                                                                    size: "mini",
                                                                    type: "primary",
                                                                },
                                                                on: {
                                                                    click: self.onCreateFormSubmit,
                                                                },
                                                            }, [self._v("\u6dfb\u52a0")]
                                                        ),
                                                        self._v(" "),
                                                        h(
                                                            "el-button", {
                                                                attrs: {
                                                                    size: "mini",
                                                                },
                                                                on: {
                                                                    click: self.onCreateFormCancel,
                                                                },
                                                            }, [self._v("\u53d6\u6d88")]
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
                        self._v(" "),
                        h(
                            "el-drawer", {
                                ref: "editFormDrawer",
                                attrs: {
                                    visible: self.editFormDrawer,
                                    direction: "rtl",
                                    "before-close": self.handleEditFormDrawerClose,
                                },
                                on: {
                                    "update:visible": function(navigatorType) {
                                        /** @type {boolean} */
                                        self.editFormDrawer = navigatorType;
                                    },
                                },
                            }, [
                                h(
                                    "div", {
                                        staticStyle: {
                                            width: "90%",
                                            "margin-left": "15px",
                                        },
                                    }, [
                                        h(
                                            "h2", {
                                                staticStyle: {
                                                    "margin-top": "0",
                                                    color: "#606266",
                                                },
                                            }, [
                                                self._v(
                                                    "\u66f4\u65b0\uff1a" + self._s(self.editForm.id)
                                                ),
                                            ]
                                        ),
                                        self._v(" "),
                                        h(
                                            "el-form", {
                                                ref: "editForm",
                                                attrs: {
                                                    model: self.editForm,
                                                    rules: self.editFormRules,
                                                },
                                            }, [
                                                h(
                                                    "el-form-item", {
                                                        attrs: {
                                                            label: "\u76ee\u6807\u94fe\u63a5",
                                                            prop: "url",
                                                        },
                                                    }, [
                                                        h("el-input", {
                                                            attrs: {
                                                                placeholder: "\u793a\u4f8b\uff1ahttps://github.com/jwma/jump-jump",
                                                            },
                                                            model: {
                                                                value: self.editForm.url,
                                                                callback: function(newValue) {
                                                                    self.$set(self.editForm, "url", newValue);
                                                                },
                                                                expression: "editForm.url",
                                                            },
                                                        }),
                                                    ],
                                                    1
                                                ),
                                                self._v(" "),
                                                h(
                                                    "el-form-item", {
                                                        attrs: {
                                                            label: "\u63cf\u8ff0",
                                                            prop: "description",
                                                        },
                                                    }, [
                                                        h("el-input", {
                                                            attrs: {
                                                                type: "textarea",
                                                                placeholder: "\u793a\u4f8b\uff1a\u67d0\u67d0\u5e16\u5b50\u4f7f\u7528",
                                                            },
                                                            model: {
                                                                value: self.editForm.description,
                                                                callback: function(newValue) {
                                                                    self.$set(
                                                                        self.editForm,
                                                                        "description",
                                                                        newValue
                                                                    );
                                                                },
                                                                expression: "editForm.description",
                                                            },
                                                        }),
                                                    ],
                                                    1
                                                ),
                                                self._v(" "),
                                                h(
                                                    "el-form-item", {
                                                        attrs: {
                                                            label: "\u542f\u7528\uff1f",
                                                            prop: "isEnable",
                                                        },
                                                    }, [
                                                        h("el-switch", {
                                                            model: {
                                                                value: self.editForm.isEnable,
                                                                callback: function(newValue) {
                                                                    self.$set(
                                                                        self.editForm,
                                                                        "isEnable",
                                                                        newValue
                                                                    );
                                                                },
                                                                expression: "editForm.isEnable",
                                                            },
                                                        }),
                                                        self._v(" "),
                                                        h(
                                                            "el-popover", {
                                                                attrs: {
                                                                    placement: "bottom",
                                                                    width: "320",
                                                                    trigger: "hover",
                                                                },
                                                            }, [
                                                                h("p", [
                                                                    self._v(
                                                                        "\u5f00\u542f\u540e\u77ed\u94fe\u63a5\u53ef\u4ee5\u6b63\u5e38\u88ab\u8bbf\u95ee\uff0c\u5173\u95ed\u540e\u77ed\u94fe\u63a5\u88ab\u8bbf\u95ee\u65f6\u4f1a\u544a\u77e5\u7528\u6237\u8bbf\u95ee\u7684\u9875\u9762\u4e0d\u5b58\u5728\u3002"
                                                                    ),
                                                                    h("br"),
                                                                    self._v(" "),
                                                                    h("strong", [
                                                                        self._v(
                                                                            "\u6ce8\u610f\uff1a\u5173\u95ed\u540e\u4e0d\u4f1a\u7edf\u8ba1\u77ed\u94fe\u63a5\u8bbf\u95ee\u7684\u6570\u636e\u3002"
                                                                        ),
                                                                    ]),
                                                                ]),
                                                                self._v(" "),
                                                                h("i", {
                                                                    staticClass: "el-icon-question",
                                                                    attrs: {
                                                                        slot: "reference",
                                                                    },
                                                                    slot: "reference",
                                                                }),
                                                            ]
                                                        ),
                                                    ],
                                                    1
                                                ),
                                                self._v(" "),
                                                h(
                                                    "el-form-item", {
                                                        attrs: {
                                                            label: "\u521b\u5efa\u4eba",
                                                        },
                                                    }, [
                                                        h(
                                                            "span", {
                                                                staticStyle: {
                                                                    color: "#909399",
                                                                },
                                                            }, [self._v(self._s(self.editForm.createdBy))]
                                                        ),
                                                    ]
                                                ),
                                                self._v(" "),
                                                h(
                                                    "el-form-item", {
                                                        attrs: {
                                                            label: "\u6dfb\u52a0\u65f6\u95f4",
                                                        },
                                                    }, [
                                                        h(
                                                            "span", {
                                                                staticStyle: {
                                                                    color: "#909399",
                                                                },
                                                            }, [
                                                                self._v(
                                                                    self._s(
                                                                        self._f("dateformat")(
                                                                            self.editForm.createTime
                                                                        )
                                                                    )
                                                                ),
                                                            ]
                                                        ),
                                                    ]
                                                ),
                                                self._v(" "),
                                                h(
                                                    "el-form-item", {
                                                        attrs: {
                                                            label: "\u66f4\u65b0\u65f6\u95f4",
                                                        },
                                                    }, [
                                                        h(
                                                            "span", {
                                                                staticStyle: {
                                                                    color: "#909399",
                                                                },
                                                            }, [
                                                                self._v(
                                                                    self._s(
                                                                        self._f("dateformat")(
                                                                            self.editForm.updateTime
                                                                        )
                                                                    )
                                                                ),
                                                            ]
                                                        ),
                                                    ]
                                                ),
                                                self._v(" "),
                                                h(
                                                    "el-form-item", [
                                                        h(
                                                            "el-button", {
                                                                attrs: {
                                                                    size: "mini",
                                                                    type: "primary",
                                                                },
                                                                on: {
                                                                    click: self.onEditFormSubmit,
                                                                },
                                                            }, [self._v("\u66f4\u65b0")]
                                                        ),
                                                        self._v(" "),
                                                        h(
                                                            "el-button", {
                                                                attrs: {
                                                                    size: "mini",
                                                                },
                                                                on: {
                                                                    click: self.onEditFormCancel,
                                                                },
                                                            }, [self._v("\u53d6\u6d88")]
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
                        self._v(" "),
                        h(
                            "el-button", {
                                attrs: {
                                    icon: "el-icon-refresh",
                                    size: "mini",
                                },
                                on: {
                                    click: function(val) {
                                        return self.getList(self.currentPage);
                                    },
                                },
                            }, [self._v("\u5237\u65b0")]
                        ),
                        self._v(" "),
                        h(
                            "el-button", {
                                attrs: {
                                    icon: "el-icon-plus",
                                    size: "mini",
                                    type: "primary",
                                },
                                on: {
                                    click: function(val) {
                                        return self.toCreate();
                                    },
                                },
                            }, [self._v("\u6dfb\u52a0\n  ")]
                        ),
                        self._v(" "),
                        h(
                            "el-table", {
                                staticStyle: {
                                    width: "100%",
                                },
                                attrs: {
                                    data: self.list,
                                    "max-height": "800",
                                    fit: "",
                                },
                            }, [
                                h("el-table-column", {
                                    attrs: {
                                        label: "\u77ed\u94fe\u63a5",
                                        width: "250",
                                    },
                                    scopedSlots: self._u([{
                                        key: "default",
                                        fn: function(args) {
                                            return [
                                                h("i", {
                                                    class: {
                                                        "el-icon-star-off":
                                                        -1 == self.pinned.indexOf(args.row.id),
                                                            "el-icon-star-on":
                                                            -1 != self.pinned.indexOf(args.row.id),
                                                    },
                                                    staticStyle: {
                                                        cursor: "pointer",
                                                    },
                                                    on: {
                                                        click: function(val) {
                                                            return self.pin(args.row.id);
                                                        },
                                                    },
                                                }),
                                                self._v(" "),
                                                h(
                                                    "el-dropdown", {
                                                        attrs: {
                                                            size: "small",
                                                        },
                                                    }, [
                                                        h(
                                                            "span", {
                                                                staticClass: "el-dropdown-link",
                                                                staticStyle: {
                                                                    cursor: "pointer",
                                                                },
                                                            }, [
                                                                self._v(
                                                                    "\n            " + self._s(args.row.id)
                                                                ),
                                                                h("i", {
                                                                    staticClass: "el-icon-arrow-down el-icon--right",
                                                                }),
                                                            ]
                                                        ),
                                                        self._v(" "),
                                                        h(
                                                            "el-dropdown-menu", {
                                                                attrs: {
                                                                    slot: "dropdown",
                                                                },
                                                                slot: "dropdown",
                                                            },
                                                            self._l(self.landingHosts, function(result) {
                                                                return h("el-dropdown-item", [
                                                                    h(
                                                                        "span", {
                                                                            on: {
                                                                                click: function(event) {
                                                                                    return self.copyShortLink(
                                                                                        result + args.row.id,
                                                                                        event
                                                                                    );
                                                                                },
                                                                            },
                                                                        }, [self._v(self._s(result + args.row.id))]
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
                                self._v(" "),
                                h("el-table-column", {
                                    attrs: {
                                        prop: "url",
                                        label: "\u76ee\u6807\u94fe\u63a5",
                                        width: "250",
                                    },
                                    scopedSlots: self._u([{
                                        key: "default",
                                        fn: function(args) {
                                            return [
                                                h(
                                                    "el-dropdown", {
                                                        attrs: {
                                                            size: "small",
                                                        },
                                                    }, [
                                                        h(
                                                            "span", {
                                                                staticClass: "el-dropdown-link",
                                                                staticStyle: {
                                                                    cursor: "pointer",
                                                                },
                                                            }, [
                                                                h(
                                                                    "span", {
                                                                        staticStyle: {
                                                                            width: "200px",
                                                                            overflow: "hidden",
                                                                            "text-overflow": "ellipsis",
                                                                            "white-space": "nowrap",
                                                                            display: "inline-block",
                                                                        },
                                                                    }, [self._v(self._s(args.row.url))]
                                                                ),
                                                            ]
                                                        ),
                                                        self._v(" "),
                                                        h(
                                                            "el-dropdown-menu", {
                                                                attrs: {
                                                                    slot: "dropdown",
                                                                },
                                                                slot: "dropdown",
                                                            }, [
                                                                h(
                                                                    "el-dropdown-item", {
                                                                        staticStyle: {
                                                                            "line-height": "18px",
                                                                        },
                                                                    }, [
                                                                        h(
                                                                            "span", {
                                                                                on: {
                                                                                    click: function(event) {
                                                                                        return self.copyShortLink(
                                                                                            args.row.url,
                                                                                            event
                                                                                        );
                                                                                    },
                                                                                },
                                                                            }, [self._v(self._s(args.row.url))]
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
                                self._v(" "),
                                h("el-table-column", {
                                    attrs: {
                                        label: "\u63cf\u8ff0",
                                        width: "300",
                                    },
                                    scopedSlots: self._u([{
                                        key: "default",
                                        fn: function(args) {
                                            return [
                                                self._v(
                                                    "\n        " +
                                                    self._s(
                                                        args.row.description ?
                                                        args.row.description :
                                                        "-"
                                                    ) +
                                                    "\n      "
                                                ),
                                            ];
                                        },
                                    }, ]),
                                }),
                                self._v(" "),
                                h("el-table-column", {
                                    attrs: {
                                        label: "\u542f\u7528\uff1f",
                                        width: "70",
                                        align: "center",
                                    },
                                    scopedSlots: self._u([{
                                        key: "default",
                                        fn: function(args) {
                                            return [
                                                h("i", {
                                                    class: {
                                                        "el-icon-check": args.row.isEnable,
                                                            "el-icon-close": !args.row.isEnable,
                                                    },
                                                }),
                                            ];
                                        },
                                    }, ]),
                                }),
                                self._v(" "),
                                h("el-table-column", {
                                    attrs: {
                                        label: "\u521b\u5efa\u4eba",
                                        width: "150",
                                        align: "center",
                                    },
                                    scopedSlots: self._u([{
                                        key: "default",
                                        fn: function(context) {
                                            return [
                                                self._v(
                                                    "\n        " +
                                                    self._s(context.row.createdBy) +
                                                    "\n      "
                                                ),
                                            ];
                                        },
                                    }, ]),
                                }),
                                self._v(" "),
                                h("el-table-column", {
                                    attrs: {
                                        label: "\u6dfb\u52a0\u65f6\u95f4",
                                        width: "100",
                                    },
                                    scopedSlots: self._u([{
                                        key: "default",
                                        fn: function(a) {
                                            return [
                                                self._v(
                                                    "\n        " +
                                                    self._s(
                                                        self._f("dateformat")(
                                                            a.row.createTime,
                                                            "DD/MM/YY"
                                                        )
                                                    ) +
                                                    "\n      "
                                                ),
                                            ];
                                        },
                                    }, ]),
                                }),
                                self._v(" "),
                                h("el-table-column", {
                                    attrs: {
                                        label: "\u66f4\u65b0\u65f6\u95f4",
                                        width: "100",
                                    },
                                    scopedSlots: self._u([{
                                        key: "default",
                                        fn: function(data) {
                                            return [
                                                self._v(
                                                    "\n        " +
                                                    self._s(
                                                        self._f("dateformat")(
                                                            data.row.updateTime,
                                                            "DD/MM/YY"
                                                        )
                                                    ) +
                                                    "\n      "
                                                ),
                                            ];
                                        },
                                    }, ]),
                                }),
                                self._v(" "),
                                h("el-table-column", {
                                    attrs: {
                                        label: "\u64cd\u4f5c",
                                    },
                                    scopedSlots: self._u([{
                                        key: "default",
                                        fn: function(args) {
                                            return [
                                                h("el-button", {
                                                    attrs: {
                                                        size: "mini",
                                                        circle: "",
                                                        icon: "el-icon-s-data",
                                                    },
                                                    on: {
                                                        click: function(val) {
                                                            return self.goto({
                                                                name: "ShortLinkData",
                                                                params: {
                                                                    id: args.row.id,
                                                                },
                                                            });
                                                        },
                                                    },
                                                }),
                                                self._v(" "),
                                                h("el-button", {
                                                    attrs: {
                                                        size: "mini",
                                                        circle: "",
                                                        icon: "el-icon-edit-outline",
                                                    },
                                                    on: {
                                                        click: function(val) {
                                                            return self.toEdit(args.row.id);
                                                        },
                                                    },
                                                }),
                                                self._v(" "),
                                                h("el-button", {
                                                    attrs: {
                                                        type: "danger",
                                                        size: "mini",
                                                        icon: "el-icon-delete-solid",
                                                        circle: "",
                                                    },
                                                    on: {
                                                        click: function(val) {
                                                            return self.deleteShortLink(args.row.id);
                                                        },
                                                    },
                                                }),
                                            ];
                                        },
                                    }, ]),
                                }),
                                self._v(" "),
                                h("el-table-column", {
                                    attrs: {
                                        label: "\u4e8c\u7ef4\u7801",
                                    },
                                    scopedSlots: self._u([{
                                        key: "default",
                                        fn: function(callback) {
                                            return [
                                                h("el-button", {
                                                    attrs: {
                                                        size: "mini",
                                                        circle: "",
                                                        icon: "el-icon-picture",
                                                    },
                                                    on: {
                                                        click: function(val) {},
                                                    },
                                                }),
                                            ];
                                        },
                                    }, ]),
                                }),
                            ],
                            1
                        ),
                        self._v(" "),
                        h(
                            "div", {
                                staticClass: "paginator-container",
                            }, [
                                h("el-pagination", {
                                    attrs: {
                                        "current-page": self.currentPage,
                                        "page-sizes": [10, 20, 30],
                                        "page-size": self.pageSize,
                                        layout: "total, sizes, prev, pager, next, jumper",
                                        total: self.total,
                                    },
                                    on: {
                                        "size-change": self.handlePageSizeChange,
                                        "current-change": self.handleCurrentPageChange,
                                    },
                                }),
                            ],
                            1
                        ),
                    ],
                    1
                );
            };
            /** @type {!Array} */
            var thirdArgument = [];
            var attributes = $("db72");
            var row = $("bfad");
            var to = $("da71");
            var list = $("61f7");
            var schema = $("2b0e");
            var x = $("b311");
            var global = $.n(x);
            var o = $("2f62");
            var Field = {
                name: "ShortLinkList",
                data: function() {
                    /**
                     * @param {?} $el
                     * @param {string} val
                     * @param {?} cb
                     * @return {undefined}
                     */
                    var foo = function($el, val, cb) {
                        if ("" !== val) {
                            cb();
                        } else {
                            cb(new Error("\u8bf7\u8f93\u5165\u76ee\u6807\u94fe\u63a5"));
                        }
                    };
                    return {
                        landingHosts: [],
                        list: [],
                        total: 0,
                        currentPage: 1,
                        pageSize: 20,
                        createFormDrawer: false,
                        idConfig: {
                            idMinimumLength: 0,
                            idLength: 0,
                            idMaximumLength: 0,
                        },
                        createForm: {
                            specifyId: false,
                            setIdLength: false,
                            id: "",
                            url: "",
                            description: "",
                            isEnable: false,
                            idLength: 0,
                        },
                        createFormRules: {
                            url: [{
                                required: true,
                                validator: foo,
                                trigger: "blur",
                            }, ],
                        },
                        editFormDrawer: false,
                        editForm: {
                            id: "",
                            url: "",
                            description: "",
                            isEnable: false,
                            createdBy: "",
                            createTime: "",
                            updateTime: "",
                        },
                        editFormRules: {
                            url: [{
                                validator: foo,
                                trigger: "blur",
                            }, ],
                        },
                    };
                },
                beforeRouteUpdate: function(from, to, next) {
                    this.currentPage = from.query.page || this.currentPage;
                    this.pageSize = from.query.pageSize || this.pageSize;
                    this.getList(this.currentPage);
                    next();
                },
                created: function() {
                    var $scope = this;
                    this.currentPage =
                        parseInt(this.$route.query.page) || this.currentPage;
                    this.pageSize = parseInt(this.$route.query.pageSize) || this.pageSize;
                    Object(to["a"])().then(function(oae) {
                        $scope.landingHosts = oae.data.config.landingHosts;
                        $scope.idConfig = oae.data.config.idConfig;
                        $scope.createForm.idLength = $scope.idConfig.idLength;
                        $scope.getList($scope.currentPage);
                    });
                },
                computed: Object(attributes["a"])({},
                    Object(o["b"])(["role", "pinned"])
                ),
                methods: {
                    goto: function(path) {
                        this.$router.push(path);
                    },
                    copyShortLink: function(version, callback) {
                        build(version, callback);
                    },
                    getList: function(num) {
                        var self = this;
                        Object(row["b"])(num, this.pageSize).then(function(
                            currentPayload
                        ) {
                            /** @type {number} */
                            self.currentPage = num;
                            self.total = currentPayload.data.total;
                            self.list = currentPayload.data.shortLinks;
                            if (
                                1 !== self.currentPage &&
                                0 === self.list.length &&
                                self.total > 0
                            ) {
                                /** @type {number} */
                                self.currentPage = 1;
                                self.getList(1);
                            }
                        });
                    },
                    resetCreateForm: function() {
                        /** @type {boolean} */
                        this.createForm.specifyId = false;
                        /** @type {boolean} */
                        this.createForm.setIdLength = false;
                        /** @type {string} */
                        this.createForm.id = "";
                        /** @type {string} */
                        this.createForm.url = "";
                        /** @type {string} */
                        this.createForm.description = "";
                        /** @type {boolean} */
                        this.createForm.isEnable = false;
                    },
                    resetEditForm: function() {
                        /** @type {string} */
                        this.editForm.url = "";
                        /** @type {string} */
                        this.editForm.description = "";
                        /** @type {boolean} */
                        this.editForm.isEnable = false;
                        /** @type {string} */
                        this.editForm.createdBy = "";
                        /** @type {string} */
                        this.editForm.createTime = "";
                        /** @type {string} */
                        this.editForm.updateTime = "";
                    },
                    getInvalidUrlTipsText: function(availableBaseTypes) {
                        return '<textarea rows="3" style="width: 100%;border: none;resize: none;" disabled>'.concat(
                            availableBaseTypes,
                            "</textarea><br>\u76ee\u6807\u94fe\u63a5\u4e0d\u662f\u5e38\u89c4\u7684URL\uff0c\u786e\u5b9a\u7ee7\u7eed\uff1f"
                        );
                    },
                    handlePageSizeChange: function(pageSize) {
                        /** @type {number} */
                        this.pageSize = pageSize;
                        /** @type {number} */
                        this.currentPage = 1;
                        this.$router.push({
                            name: "ShortLinkList",
                            query: {
                                page: 1,
                                pageSize: pageSize,
                            },
                        });
                    },
                    handleCurrentPageChange: function(n) {
                        /** @type {number} */
                        this.currentPage = n;
                        this.$router.push({
                            name: "ShortLinkList",
                            query: {
                                page: n,
                                pageSize: this.pageSize,
                            },
                        });
                    },
                    toCreate: function() {
                        var api = this;
                        Object(to["a"])().then(function(oae) {
                            api.idConfig = oae.data.config.idConfig;
                            api.createForm.idLength = api.idConfig.idLength;
                            /** @type {boolean} */
                            api.createFormDrawer = true;
                        });
                    },
                    handleCreateFormDrawerClose: function(saveNotifs) {
                        this.resetCreateForm();
                        saveNotifs();
                    },
                    submitCreateForm: function() {
                        var self = this;
                        Object(row["a"])(this.createForm).then(function(simpleselect) {
                            self.$refs.createFormDrawer.closeDrawer();
                            self.$notify({
                                title: "\u6dfb\u52a0\u77ed\u94fe\u63a5\u6210\u529f",
                                message: "ID\uff1a" + simpleselect.data.shortLink.id,
                                type: "success",
                            });
                            self.getList(self.currentPage);
                        });
                    },
                    onCreateFormSubmit: function() {
                        var $ = this;
                        this.$refs.createForm.validate(function(canCreateDiscussions) {
                            if (!canCreateDiscussions) {
                                return false;
                            }
                            if (Object(list["b"])($.createForm.url)) {
                                $.submitCreateForm();
                            } else {
                                $.$confirm(
                                    $.getInvalidUrlTipsText($.createForm.url),
                                    "\u63d0\u793a", {
                                        confirmButtonText: "\u786e\u5b9a",
                                        cancelButtonText: "\u518d\u6539\u6539",
                                        type: "warning",
                                        dangerouslyUseHTMLString: true,
                                    }
                                ).then(function() {
                                    $.submitCreateForm();
                                });
                            }
                        });
                    },
                    onCreateFormCancel: function() {
                        this.resetCreateForm();
                        /** @type {boolean} */
                        this.createFormDrawer = false;
                    },
                    toEdit: function(rowIndex) {
                        var $scope = this;
                        Object(row["c"])(rowIndex).then(function(simpleselect) {
                            /** @type {boolean} */
                            $scope.editFormDrawer = true;
                            $scope.editForm = simpleselect.data.shortLink;
                        });
                    },
                    handleEditFormDrawerClose: function(saveNotifs) {
                        this.resetEditForm();
                        saveNotifs();
                    },
                    submitEditForm: function() {
                        var self = this;
                        Object(row["f"])(this.editForm.id, this.editForm).then(function(
                            simpleselect
                        ) {
                            self.$refs.editFormDrawer.closeDrawer();
                            self.$notify({
                                title: "\u66f4\u65b0\u6210\u529f",
                                message: "ID\uff1a" + simpleselect.data.shortLink.id,
                                type: "success",
                            });
                            self.getList(self.currentPage);
                        });
                    },
                    onEditFormSubmit: function() {
                        var $ = this;
                        this.$refs.editForm.validate(function(canCreateDiscussions) {
                            if (!canCreateDiscussions) {
                                return false;
                            }
                            if (Object(list["b"])($.editForm.url)) {
                                $.submitEditForm();
                            } else {
                                $.$confirm(
                                    $.getInvalidUrlTipsText($.editForm.url),
                                    "\u63d0\u793a", {
                                        confirmButtonText: "\u786e\u5b9a",
                                        cancelButtonText: "\u518d\u6539\u6539",
                                        type: "warning",
                                        dangerouslyUseHTMLString: true,
                                    }
                                ).then(function() {
                                    $.submitEditForm();
                                });
                            }
                        });
                    },
                    onEditFormCancel: function() {
                        this.resetEditForm();
                        /** @type {boolean} */
                        this.editFormDrawer = false;
                    },
                    deleteShortLink: function(type) {
                        var self = this;
                        this.$confirm(
                            "\u6b64\u64cd\u4f5c\u4f1a\u6c38\u4e45\u5220\u9664\u77ed\u94fe\u63a5\uff0c\u662f\u5426\u7ee7\u7eed\uff1f",
                            "\u5220\u9664\u786e\u8ba4", {
                                confirmButtonText: "\u786e\u5b9a",
                                cancelButtonText: "\u53d6\u6d88",
                                type: "warning",
                            }
                        ).then(function() {
                            Object(row["e"])(type).then(function(canCreateDiscussions) {
                                self.$notify({
                                    title: "\u6210\u529f\u5220\u9664\u77ed\u94fe\u63a5",
                                    message: "ID\uff1a".concat(type),
                                    type: "success",
                                });
                                self.getList(self.currentPage);
                                self.$store.dispatch("link/unpin", type);
                            });
                        });
                    },
                    specifyIdChange: function(data) {
                        if (data) {
                            /** @type {boolean} */
                            this.createForm.setIdLength = false;
                            this.setIdLengthChange(false);
                        } else {
                            /** @type {string} */
                            this.createForm.id = "";
                        }
                    },
                    setIdLengthChange: function(data) {
                        if (data) {
                            /** @type {boolean} */
                            this.createForm.specifyId = false;
                            this.specifyIdChange(false);
                        } else {
                            this.createForm.idLength = this.idConfig.idLength;
                        }
                    },
                    pin: function(e) {
                        if (-1 == this.pinned.indexOf(e)) {
                            this.$store.dispatch("link/pin", e);
                            this.$message({
                                showClose: true,
                                type: "success",
                                message: "Pin ".concat(e),
                            });
                        } else {
                            this.$store.dispatch("link/unpin", e);
                            this.$message({
                                showClose: true,
                                type: "success",
                                message: "Unpin ".concat(e),
                            });
                        }
                    },
                },
            };
            var REkey = Field;
            var attrs = ($("e160"), $("2877"));
            var value = Object(attrs["a"])(
                REkey,
                render,
                thirdArgument,
                false,
                null,
                "901f7d5c",
                null
            );
            model["default"] = value.exports;
        },
        b311: function(module, selector, convertToImages) {
            (function(addedRenderer, factory) {
                module.exports = factory();
            })(0, function() {
                return (function(e) {
                    /**
                     * @param {string} i
                     * @return {?}
                     */
                    function t(i) {
                        if (n[i]) {
                            return n[i].exports;
                        }
                        var module = (n[i] = {
                            i: i,
                            l: false,
                            exports: {},
                        });
                        return (
                            e[i].call(module.exports, module, module.exports, t),
                            (module.l = true),
                            module.exports
                        );
                    }
                    var n = {};
                    return (
                        (t.m = e),
                        (t.c = n),
                        (t.d = function(o, name, n) {
                            if (!t.o(o, name)) {
                                Object.defineProperty(o, name, {
                                    enumerable: true,
                                    get: n,
                                });
                            }
                        }),
                        (t.r = function(arg) {
                            if ("undefined" !== typeof Symbol && Symbol.toStringTag) {
                                Object.defineProperty(arg, Symbol.toStringTag, {
                                    value: "Module",
                                });
                            }
                            Object.defineProperty(arg, "__esModule", {
                                value: true,
                            });
                        }),
                        (t.t = function(e, a) {
                            if ((1 & a && (e = t(e)), 8 & a)) {
                                return e;
                            }
                            if (4 & a && "object" === typeof e && e && e.__esModule) {
                                return e;
                            }
                            /** @type {!Object} */
                            var d = Object.create(null);
                            if (
                                (t.r(d),
                                    Object.defineProperty(d, "default", {
                                        enumerable: true,
                                        value: e,
                                    }),
                                    2 & a && "string" != typeof e)
                            ) {
                                var key;
                                for (key in e) {
                                    t.d(
                                        d,
                                        key,
                                        function(childProp) {
                                            return e[childProp];
                                        }.bind(null, key)
                                    );
                                }
                            }
                            return d;
                        }),
                        (t.n = function(e) {
                            /** @type {function(): ?} */
                            var n =
                                e && e.__esModule ?

                                function() {
                                    return e["default"];
                                } :
                                function() {
                                    return e;
                                };
                            return t.d(n, "a", n), n;
                        }),
                        (t.o = function(t, object) {
                            return Object.prototype.hasOwnProperty.call(t, object);
                        }),
                        (t.p = ""),
                        t((t.s = 6))
                    );
                })([
                    function(module, canCreateDiscussions) {
                        /**
                         * @param {!Object} input
                         * @return {?}
                         */
                        function select(input) {
                            var els;
                            if ("SELECT" === input.nodeName) {
                                input.focus();
                                els = input.value;
                            } else {
                                if (
                                    "INPUT" === input.nodeName ||
                                    "TEXTAREA" === input.nodeName
                                ) {
                                    var readonly = input.hasAttribute("readonly");
                                    if (!readonly) {
                                        input.setAttribute("readonly", "");
                                    }
                                    input.select();
                                    input.setSelectionRange(0, input.value.length);
                                    if (!readonly) {
                                        input.removeAttribute("readonly");
                                    }
                                    els = input.value;
                                } else {
                                    if (input.hasAttribute("contenteditable")) {
                                        input.focus();
                                    }
                                    /** @type {(Selection|null)} */
                                    var sel = window.getSelection();
                                    /** @type {(Range|null)} */
                                    var range = document.createRange();
                                    range.selectNodeContents(input);
                                    sel.removeAllRanges();
                                    sel.addRange(range);
                                    /** @type {string} */
                                    els = sel.toString();
                                }
                            }
                            return els;
                        }
                        /** @type {function(!Object): ?} */
                        module.exports = select;
                    },
                    function(module, canCreateDiscussions) {
                        /**
                         * @return {undefined}
                         */
                        function E() {}
                        E.prototype = {
                            on: function(type, callback, ctx) {
                                var e = this.e || (this.e = {});
                                return (
                                    (e[type] || (e[type] = [])).push({
                                        fn: callback,
                                        ctx: ctx,
                                    }),
                                    this
                                );
                            },
                            once: function(type, listener, ctx) {
                                /**
                                 * @return {undefined}
                                 */
                                function handler() {
                                    self.off(type, handler);
                                    listener.apply(ctx, arguments);
                                }
                                var self = this;
                                return (handler._ = listener), this.on(type, handler, ctx);
                            },
                            emit: function(name) {
                                /** @type {!Array<?>} */
                                var cmd_args = [].slice.call(arguments, 1);
                                var readyList = ((this.e || (this.e = {}))[name] || []).slice();
                                /** @type {number} */
                                var i = 0;
                                var inputsSize = readyList.length;
                                i;
                                for (; i < inputsSize; i++) {
                                    readyList[i].fn.apply(readyList[i].ctx, cmd_args);
                                }
                                return this;
                            },
                            off: function(name, callback) {
                                var e = this.e || (this.e = {});
                                var evts = e[name];
                                /** @type {!Array} */
                                var liveEvents = [];
                                if (evts && callback) {
                                    /** @type {number} */
                                    var i = 0;
                                    var l = evts.length;
                                    for (; i < l; i++) {
                                        if (evts[i].fn !== callback && evts[i].fn._ !== callback) {
                                            liveEvents.push(evts[i]);
                                        }
                                    }
                                }
                                return (
                                    liveEvents.length ? (e[name] = liveEvents) : delete e[name],
                                    this
                                );
                            },
                        };
                        /** @type {function(): undefined} */
                        module.exports = E;
                        /** @type {function(): undefined} */
                        module.exports.TinyEmitter = E;
                    },
                    function(module, canCreateDiscussions, $) {
                        /**
                         * @param {(Object|string)} target
                         * @param {!Object} type
                         * @param {!Object} callback
                         * @return {?}
                         */
                        function listen(target, type, callback) {
                            if (!target && !type && !callback) {
                                throw new Error("Missing required arguments");
                            }
                            if (!item.string(type)) {
                                throw new TypeError("Second argument must be a String");
                            }
                            if (!item.fn(callback)) {
                                throw new TypeError("Third argument must be a Function");
                            }
                            if (item.node(target)) {
                                return listenNode(target, type, callback);
                            }
                            if (item.nodeList(target)) {
                                return listenNodeList(target, type, callback);
                            }
                            if (item.string(target)) {
                                return listenSelector(target, type, callback);
                            }
                            throw new TypeError(
                                "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
                            );
                        }
                        /**
                         * @param {!Object} node
                         * @param {!Object} type
                         * @param {!Object} callback
                         * @return {?}
                         */
                        function listenNode(node, type, callback) {
                            return (
                                node.addEventListener(type, callback), {
                                    destroy: function() {
                                        node.removeEventListener(type, callback);
                                    },
                                }
                            );
                        }
                        /**
                         * @param {(Object|string)} nodeList
                         * @param {!Object} type
                         * @param {!Object} callback
                         * @return {?}
                         */
                        function listenNodeList(nodeList, type, callback) {
                            return (
                                Array.prototype.forEach.call(nodeList, function(e) {
                                    e.addEventListener(type, callback);
                                }), {
                                    destroy: function() {
                                        Array.prototype.forEach.call(nodeList, function(e) {
                                            e.removeEventListener(type, callback);
                                        });
                                    },
                                }
                            );
                        }
                        /**
                         * @param {(Object|string)} selector
                         * @param {!Object} type
                         * @param {!Object} callback
                         * @return {?}
                         */
                        function listenSelector(selector, type, callback) {
                            return delegate(document.body, selector, type, callback);
                        }
                        var item = $(3);
                        var delegate = $(4);
                        /** @type {function((Object|string), !Object, !Object): ?} */
                        module.exports = listen;
                    },
                    function(canCreateDiscussions, options) {
                        /**
                         * @param {?} parent
                         * @return {?}
                         */
                        options.node = function(parent) {
                            return (
                                void 0 !== parent &&
                                parent instanceof HTMLElement &&
                                1 === parent.nodeType
                            );
                        };
                        /**
                         * @param {?} value
                         * @return {?}
                         */
                        options.nodeList = function(value) {
                            /** @type {string} */
                            var r = Object.prototype.toString.call(value);
                            return (
                                void 0 !== value &&
                                ("[object NodeList]" === r ||
                                    "[object HTMLCollection]" === r) &&
                                "length" in value &&
                                (0 === value.length || options.node(value[0]))
                            );
                        };
                        /**
                         * @param {!Object} s
                         * @return {?}
                         */
                        options.string = function(s) {
                            return "string" === typeof s || s instanceof String;
                        };
                        /**
                         * @param {!Object} e
                         * @return {?}
                         */
                        options.fn = function(e) {
                            /** @type {string} */
                            var this_area = Object.prototype.toString.call(e);
                            return "[object Function]" === this_area;
                        };
                    },
                    function(module, canCreateDiscussions, require) {
                        /**
                         * @param {!Object} d
                         * @param {?} s
                         * @param {?} e
                         * @param {?} prop
                         * @param {?} obj
                         * @return {?}
                         */
                        function callback(d, s, e, prop, obj) {
                            var n = listener.apply(this, arguments);
                            return (
                                d.addEventListener(e, n, obj), {
                                    destroy: function() {
                                        d.removeEventListener(e, n, obj);
                                    },
                                }
                            );
                        }
                        /**
                         * @param {!Object} e
                         * @param {?} text
                         * @param {?} params
                         * @param {?} errors
                         * @param {?} items
                         * @return {?}
                         */
                        function render(e, text, params, errors, items) {
                            return "function" === typeof e.addEventListener ?
                                callback.apply(null, arguments) :
                                "function" === typeof params ?
                                callback.bind(null, document).apply(null, arguments) :
                                ("string" === typeof e && (e = document.querySelectorAll(e)),
                                    Array.prototype.map.call(e, function(e) {
                                        return callback(e, text, params, errors, items);
                                    }));
                        }
                        /**
                         * @param {?} event
                         * @param {?} selector
                         * @param {?} source
                         * @param {!Function} sender
                         * @return {?}
                         */
                        function listener(event, selector, source, sender) {
                            return function(evt) {
                                evt.delegateTarget = closest(evt.target, selector);
                                if (evt.delegateTarget) {
                                    sender.call(event, evt);
                                }
                            };
                        }
                        var closest = require(5);
                        /** @type {function(!Object, ?, ?, ?, ?): ?} */
                        module.exports = render;
                    },
                    function(module, canCreateDiscussions) {
                        /**
                         * @param {!Node} a
                         * @param {?} v
                         * @return {?}
                         */
                        function render(a, v) {
                            for (; a && a.nodeType !== undefined;) {
                                if ("function" === typeof a.matches && a.matches(v)) {
                                    return a;
                                }
                                a = a.parentNode;
                            }
                        }
                        /** @type {number} */
                        var undefined = 9;
                        if ("undefined" !== typeof Element && !Element.prototype.matches) {
                            var proto = Element.prototype;
                            /** @type {function(this:Element, string, (Node|NodeList<?>|null)=): boolean} */
                            proto.matches =
                                proto.matchesSelector ||
                                proto.mozMatchesSelector ||
                                proto.msMatchesSelector ||
                                proto.oMatchesSelector ||
                                proto.webkitMatchesSelector;
                        }
                        /** @type {function(!Node, ?): ?} */
                        module.exports = render;
                    },
                    function(canCreateDiscussions, res, r) {
                        /**
                         * @param {!AudioNode} that
                         * @param {!Function} size
                         * @return {undefined}
                         */
                        function get(that, size) {
                            if (!(that instanceof size)) {
                                throw new TypeError("Cannot call a class as a function");
                            }
                        }
                        /**
                         * @param {!AudioNode} instance
                         * @param {!Function} Constructor
                         * @return {undefined}
                         */
                        function _classCallCheck(instance, Constructor) {
                            if (!(instance instanceof Constructor)) {
                                throw new TypeError("Cannot call a class as a function");
                            }
                        }
                        /**
                         * @param {string} call
                         * @param {string} value
                         * @return {?}
                         */
                        function _possibleConstructorReturn(call, value) {
                            if (!call) {
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            }
                            return !value ||
                                ("object" !== typeof value && "function" !== typeof value) ?
                                call :
                                value;
                        }
                        /**
                         * @param {string} subClass
                         * @param {!Object} superClass
                         * @return {undefined}
                         */
                        function _inherits(subClass, superClass) {
                            if ("function" !== typeof superClass && null !== superClass) {
                                throw new TypeError(
                                    "Super expression must either be null or a function, not " +
                                    typeof superClass
                                );
                            }
                            /** @type {!Object} */
                            subClass.prototype = Object.create(
                                superClass && superClass.prototype, {
                                    constructor: {
                                        value: subClass,
                                        enumerable: false,
                                        writable: true,
                                        configurable: true,
                                    },
                                }
                            );
                            if (superClass) {
                                if (Object.setPrototypeOf) {
                                    Object.setPrototypeOf(subClass, superClass);
                                } else {
                                    /** @type {!Object} */
                                    subClass.__proto__ = superClass;
                                }
                            }
                        }
                        /**
                         * @param {string} suffix
                         * @param {!Node} element
                         * @return {?}
                         */
                        function getAttributeValue(suffix, element) {
                            /** @type {string} */
                            var attribute = "data-clipboard-" + suffix;
                            if (element.hasAttribute(attribute)) {
                                return element.getAttribute(attribute);
                            }
                        }
                        r.r(res);
                        var start = r(0);
                        var i = r.n(start);
                        /** @type {function(!Object): ?} */
                        var s_SPLICE =
                            "function" === typeof Symbol &&
                            "symbol" === typeof Symbol.iterator ?

                            function(objOrTsid) {
                                return typeof objOrTsid;
                            } :
                            function(obj) {
                                return obj &&
                                    "function" === typeof Symbol &&
                                    obj.constructor === Symbol &&
                                    obj !== Symbol.prototype ?
                                    "symbol" :
                                    typeof obj;
                            };
                        var installNativeEvent$2 = (function() {
                            /**
                             * @param {!Function} a
                             * @param {string} n
                             * @return {undefined}
                             */
                            function t(a, n) {
                                /** @type {number} */
                                var i = 0;
                                for (; i < n.length; i++) {
                                    var prop = n[i];
                                    prop.enumerable = prop.enumerable || false;
                                    /** @type {boolean} */
                                    prop.configurable = true;
                                    if ("value" in prop) {
                                        /** @type {boolean} */
                                        prop.writable = true;
                                    }
                                    Object.defineProperty(a, prop.key, prop);
                                }
                            }
                            return function(e, r, n) {
                                return r && t(e.prototype, r), n && t(e, n), e;
                            };
                        })();
                        var currentRelations = (function() {
                            /**
                             * @param {?} $timeout
                             * @return {undefined}
                             */
                            function n($timeout) {
                                get(this, n);
                                this.resolveOptions($timeout);
                                this.initSelection();
                            }
                            return (
                                installNativeEvent$2(n, [{
                                        key: "resolveOptions",
                                        value: function() {
                                            var options =
                                                arguments.length > 0 && void 0 !== arguments[0] ?
                                                arguments[0] :
                                                {};
                                            this.action = options.action;
                                            this.container = options.container;
                                            this.emitter = options.emitter;
                                            this.target = options.target;
                                            this.text = options.text;
                                            this.trigger = options.trigger;
                                            /** @type {string} */
                                            this.selectedText = "";
                                        },
                                    },
                                    {
                                        key: "initSelection",
                                        value: function() {
                                            if (this.text) {
                                                this.selectFake();
                                            } else {
                                                if (this.target) {
                                                    this.selectTarget();
                                                }
                                            }
                                        },
                                    },
                                    {
                                        key: "selectFake",
                                        value: function() {
                                            var _this = this;
                                            /** @type {boolean} */
                                            var isRTL =
                                                "rtl" == document.documentElement.getAttribute("dir");
                                            this.removeFake();
                                            /**
                                             * @return {?}
                                             */
                                            this.fakeHandlerCallback = function() {
                                                return _this.removeFake();
                                            };
                                            this.fakeHandler =
                                                this.container.addEventListener(
                                                    "click",
                                                    this.fakeHandlerCallback
                                                ) || true;
                                            /** @type {!Element} */
                                            this.fakeElem = document.createElement("textarea");
                                            /** @type {string} */
                                            this.fakeElem.style.fontSize = "12pt";
                                            /** @type {string} */
                                            this.fakeElem.style.border = "0";
                                            /** @type {string} */
                                            this.fakeElem.style.padding = "0";
                                            /** @type {string} */
                                            this.fakeElem.style.margin = "0";
                                            /** @type {string} */
                                            this.fakeElem.style.position = "absolute";
                                            /** @type {string} */
                                            this.fakeElem.style[isRTL ? "right" : "left"] = "-9999px";
                                            /** @type {number} */
                                            var y_body_bottom =
                                                window.pageYOffset ||
                                                document.documentElement.scrollTop;
                                            /** @type {string} */
                                            this.fakeElem.style.top = y_body_bottom + "px";
                                            this.fakeElem.setAttribute("readonly", "");
                                            this.fakeElem.value = this.text;
                                            this.container.appendChild(this.fakeElem);
                                            this.selectedText = i()(this.fakeElem);
                                            this.copyText();
                                        },
                                    },
                                    {
                                        key: "removeFake",
                                        value: function() {
                                            if (this.fakeHandler) {
                                                this.container.removeEventListener(
                                                    "click",
                                                    this.fakeHandlerCallback
                                                );
                                                /** @type {null} */
                                                this.fakeHandler = null;
                                                /** @type {null} */
                                                this.fakeHandlerCallback = null;
                                            }
                                            if (this.fakeElem) {
                                                this.container.removeChild(this.fakeElem);
                                                /** @type {null} */
                                                this.fakeElem = null;
                                            }
                                        },
                                    },
                                    {
                                        key: "selectTarget",
                                        value: function() {
                                            this.selectedText = i()(this.target);
                                            this.copyText();
                                        },
                                    },
                                    {
                                        key: "copyText",
                                        value: function() {
                                            var succeeded = void 0;
                                            try {
                                                succeeded = document.execCommand(this.action);
                                            } catch (t) {
                                                /** @type {boolean} */
                                                succeeded = false;
                                            }
                                            this.handleResult(succeeded);
                                        },
                                    },
                                    {
                                        key: "handleResult",
                                        value: function(succeeded) {
                                            this.emitter.emit(succeeded ? "success" : "error", {
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
                                            if (this.trigger) {
                                                this.trigger.focus();
                                            }
                                            document.activeElement.blur();
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
                                            var action =
                                                arguments.length > 0 && void 0 !== arguments[0] ?
                                                arguments[0] :
                                                "copy";
                                            if (
                                                ((this._action = action),
                                                    "copy" !== this._action && "cut" !== this._action)
                                            ) {
                                                throw new Error(
                                                    'Invalid "action" value, use either "copy" or "cut"'
                                                );
                                            }
                                        },
                                        get: function() {
                                            return this._action;
                                        },
                                    },
                                    {
                                        key: "target",
                                        set: function(obj) {
                                            if (void 0 !== obj) {
                                                if (!obj ||
                                                    "object" !==
                                                    ("undefined" === typeof obj ?
                                                        "undefined" :
                                                        s_SPLICE(obj)) ||
                                                    1 !== obj.nodeType
                                                ) {
                                                    throw new Error(
                                                        'Invalid "target" value, use a valid Element'
                                                    );
                                                }
                                                if (
                                                    "copy" === this.action &&
                                                    obj.hasAttribute("disabled")
                                                ) {
                                                    throw new Error(
                                                        'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                                                    );
                                                }
                                                if (
                                                    "cut" === this.action &&
                                                    (obj.hasAttribute("readonly") ||
                                                        obj.hasAttribute("disabled"))
                                                ) {
                                                    throw new Error(
                                                        'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                                                    );
                                                }
                                                /** @type {!Object} */
                                                this._target = obj;
                                            }
                                        },
                                        get: function() {
                                            return this._target;
                                        },
                                    },
                                ]),
                                n
                            );
                        })();
                        var Form = currentRelations;
                        var x = r(1);
                        var clonedI = r.n(x);
                        var e = r(2);
                        var notifyAttributes = r.n(e);
                        /** @type {function(?): ?} */
                        var defined =
                            "function" === typeof Symbol &&
                            "symbol" === typeof Symbol.iterator ?

                            function(canCreateDiscussions) {
                                return typeof canCreateDiscussions;
                            } :
                            function(obj) {
                                return obj &&
                                    "function" === typeof Symbol &&
                                    obj.constructor === Symbol &&
                                    obj !== Symbol.prototype ?
                                    "symbol" :
                                    typeof obj;
                            };
                        var _createClass = (function() {
                            /**
                             * @param {!Function} a
                             * @param {string} n
                             * @return {undefined}
                             */
                            function t(a, n) {
                                /** @type {number} */
                                var i = 0;
                                for (; i < n.length; i++) {
                                    var prop = n[i];
                                    prop.enumerable = prop.enumerable || false;
                                    /** @type {boolean} */
                                    prop.configurable = true;
                                    if ("value" in prop) {
                                        /** @type {boolean} */
                                        prop.writable = true;
                                    }
                                    Object.defineProperty(a, prop.key, prop);
                                }
                            }
                            return function(e, r, n) {
                                return r && t(e.prototype, r), n && t(e, n), e;
                            };
                        })();
                        var tree = (function(_EventEmitter) {
                            /**
                             * @param {?} trigger
                             * @param {?} options
                             * @return {?}
                             */
                            function Agent(trigger, options) {
                                _classCallCheck(this, Agent);
                                var _this = _possibleConstructorReturn(
                                    this,
                                    (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this)
                                );
                                return (
                                    _this.resolveOptions(options),
                                    _this.listenClick(trigger),
                                    _this
                                );
                            }
                            return (
                                _inherits(Agent, _EventEmitter),
                                _createClass(
                                    Agent, [{
                                            key: "resolveOptions",
                                            value: function() {
                                                var options =
                                                    arguments.length > 0 && void 0 !== arguments[0] ?
                                                    arguments[0] :
                                                    {};
                                                this.action =
                                                    "function" === typeof options.action ?
                                                    options.action :
                                                    this.defaultAction;
                                                this.target =
                                                    "function" === typeof options.target ?
                                                    options.target :
                                                    this.defaultTarget;
                                                this.text =
                                                    "function" === typeof options.text ?
                                                    options.text :
                                                    this.defaultText;
                                                this.container =
                                                    "object" === defined(options.container) ?
                                                    options.container :
                                                    document.body;
                                            },
                                        },
                                        {
                                            key: "listenClick",
                                            value: function(listener) {
                                                var clickbuster = this;
                                                this.listener = notifyAttributes()(
                                                    listener,
                                                    "click",
                                                    function(e) {
                                                        return clickbuster.onClick(e);
                                                    }
                                                );
                                            },
                                        },
                                        {
                                            key: "onClick",
                                            value: function(event) {
                                                var trigger =
                                                    event.delegateTarget || event.currentTarget;
                                                if (this.clipboardAction) {
                                                    /** @type {null} */
                                                    this.clipboardAction = null;
                                                }
                                                this.clipboardAction = new Form({
                                                    action: this.action(trigger),
                                                    target: this.target(trigger),
                                                    text: this.text(trigger),
                                                    container: this.container,
                                                    trigger: trigger,
                                                    emitter: this,
                                                });
                                            },
                                        },
                                        {
                                            key: "defaultAction",
                                            value: function(type) {
                                                return getAttributeValue("action", type);
                                            },
                                        },
                                        {
                                            key: "defaultTarget",
                                            value: function(id) {
                                                var selector = getAttributeValue("target", id);
                                                if (selector) {
                                                    return document.querySelector(selector);
                                                }
                                            },
                                        },
                                        {
                                            key: "defaultText",
                                            value: function(type) {
                                                return getAttributeValue("text", type);
                                            },
                                        },
                                        {
                                            key: "destroy",
                                            value: function() {
                                                this.listener.destroy();
                                                if (this.clipboardAction) {
                                                    this.clipboardAction.destroy();
                                                    /** @type {null} */
                                                    this.clipboardAction = null;
                                                }
                                            },
                                        },
                                    ], [{
                                        key: "isSupported",
                                        value: function() {
                                            var appId =
                                                arguments.length > 0 && void 0 !== arguments[0] ?
                                                arguments[0] :
                                                ["copy", "cut"];
                                            var pipelets =
                                                "string" === typeof appId ? [appId] : appId;
                                            /** @type {boolean} */
                                            var msg = !!document.queryCommandSupported;
                                            return (
                                                pipelets.forEach(function(a) {
                                                    msg = msg && !!document.queryCommandSupported(a);
                                                }),
                                                msg
                                            );
                                        },
                                    }, ]
                                ),
                                Agent
                            );
                        })(clonedI.a);
                        res["default"] = tree;
                    },
                ])["default"];
            });
        },
        bfad: function(markRead, msg, r) {
            /**
             * @param {?} b
             * @return {?}
             */
            function i(b) {
                return Object(list["a"])({
                    url: "/v1/short-link/".concat(b),
                    method: "get",
                });
            }
            /**
             * @param {?} channels
             * @param {?} t
             * @return {?}
             */
            function isLikeRGBA(channels, t) {
                return Object(list["a"])({
                    url: "/v1/short-link/?page=".concat(channels, "&pageSize=").concat(t),
                    method: "get",
                });
            }
            /**
             * @param {!Object} data
             * @return {?}
             */
            function createIdentityCardPhoto(data) {
                return Object(list["a"])({
                    url: "/v1/short-link/",
                    method: "post",
                    data: data,
                });
            }
            /**
             * @param {?} n
             * @return {?}
             */
            function c(n) {
                return Object(list["a"])({
                    url: "/v1/short-link/".concat(n),
                    method: "delete",
                });
            }
            /**
             * @param {?} group
             * @param {!Object} sender
             * @return {?}
             */
            function factory(group, sender) {
                return Object(list["a"])({
                    url: "/v1/short-link/".concat(group),
                    method: "patch",
                    data: sender,
                });
            }
            /**
             * @param {?} node
             * @param {?} obj
             * @param {?} model
             * @return {?}
             */
            function _findIndex(node, obj, model) {
                return Object(list["a"])({
                    url: "/v1/short-link/"
                        .concat(node, "/data?startDate=")
                        .concat(obj, "&endDate=")
                        .concat(model),
                    method: "get",
                });
            }
            r.d(msg, "c", function() {
                return i;
            });
            r.d(msg, "b", function() {
                return isLikeRGBA;
            });
            r.d(msg, "a", function() {
                return createIdentityCardPhoto;
            });
            r.d(msg, "e", function() {
                return c;
            });
            r.d(msg, "f", function() {
                return factory;
            });
            r.d(msg, "d", function() {
                return _findIndex;
            });
            var list = r("b775");
        },
        da71: function(markRead, msg, r) {
            /**
             * @return {?}
             */
            function $a_get$10() {
                return Object(list["a"])({
                    url: "/v1/config",
                    method: "get",
                });
            }
            /**
             * @param {!Object} item
             * @return {?}
             */
            function setup(item) {
                return Object(list["a"])({
                    url: "/v1/config/landing-hosts",
                    method: "patch",
                    data: item,
                });
            }
            /**
             * @param {!Object} translations
             * @return {?}
             */
            function factory(translations) {
                return Object(list["a"])({
                    url: "/v1/config/id-length",
                    method: "patch",
                    data: translations,
                });
            }
            /**
             * @param {!Object} src
             * @return {?}
             */
            function Resource(src) {
                return Object(list["a"])({
                    url: "/v1/config/short-link-404-handling",
                    method: "patch",
                    data: src,
                });
            }
            r.d(msg, "a", function() {
                return $a_get$10;
            });
            r.d(msg, "c", function() {
                return setup;
            });
            r.d(msg, "b", function() {
                return factory;
            });
            r.d(msg, "d", function() {
                return Resource;
            });
            var list = r("b775");
        },
        e160: function(minr, maxr, r) {
            var x = r("80f1");
            var i = r.n(x);
            i.a;
        },
    },
]);