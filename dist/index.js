import Vue, { h } from 'vue';
import { Prop, Component } from 'vue-property-decorator';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Badge = /** @class */function (_super) {
  __extends(Badge, _super);
  function Badge() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Badge.prototype.render = function () {
    var _a;
    return h("span", {
      "class": "lp-badge ".concat(this.color, " ").concat(this.letterSpacing ? 'lp-letter-spacing' : '')
    }, [(_a = this.$slots["default"]) !== null && _a !== void 0 ? _a : this.text]);
  };
  __decorate([Prop({
    type: [String, Number],
    required: false
  })], Badge.prototype, "text", void 0);
  __decorate([Prop({
    type: String,
    required: false,
    "default": function _default() {
      return Badge.Color.PRIMARY;
    }
  })], Badge.prototype, "color", void 0);
  __decorate([Prop({
    type: Boolean,
    required: false
  })], Badge.prototype, "letterSpacing", void 0);
  Badge = __decorate([Component({
    name: 'Badge'
  })], Badge);
  return Badge;
}(Vue);
(function (Badge) {
  (function (Color) {
    Color["PRIMARY"] = "primary";
    Color["PRIMARY_LIGHT"] = "primary-light";
    Color["GREY"] = "grey";
    Color["GREY_LIGHT"] = "grey-light";
    Color["GREY_DARK"] = "grey-dark";
    Color["BLACK"] = "black";
    Color["BLACK_LIGHT"] = "black-light";
    Color["GREEN"] = "green";
    Color["GREEN_LIGHT"] = "green-light";
    Color["RED"] = "red";
    Color["RED_LIGHT"] = "red-light";
    Color["PINK"] = "pink";
    Color["PINK_LIGHT"] = "pink-light";
    Color["PLUM"] = "plum";
    Color["PLUM_LIGHT"] = "plum-light";
    Color["ORANGE"] = "orange";
    Color["ORANGE_LIGHT"] = "orange-light";
    Color["CYAN"] = "cyan";
    Color["CYAN_LIGHT"] = "cyan-light";
    Color["YELLOW"] = "yellow";
    Color["YELLOW_LIGHT"] = "yellow-light";
  })(Badge.Color || (Badge.Color = {}));
})(Badge || (Badge = {}));

export { Badge };
