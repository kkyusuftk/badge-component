import { __extends, __decorate, __metadata } from '../../../node_modules/tslib/tslib.es6.js';
import Vue, { h } from 'vue';
import 'reflect-metadata';
import { Prop, Component } from 'vue-property-decorator';

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
    required: true
  }), __metadata("design:type", Object)], Badge.prototype, "text", void 0);
  __decorate([Prop({
    type: Boolean,
    required: false,
    "default": function _default() {
      return Badge.Color.PRIMARY;
    }
  }), __metadata("design:type", String)], Badge.prototype, "color", void 0);
  __decorate([Prop({
    type: Boolean,
    required: false
  }), __metadata("design:type", Boolean)], Badge.prototype, "letterSpacing", void 0);
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
