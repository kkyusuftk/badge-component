import { __extends, __decorate, __metadata } from '../../../node_modules/tslib/tslib.es6.js';
import Vue, { h } from 'vue';
import { Prop, Component } from 'vue-property-decorator';

var ColorPreview = /** @class */function (_super) {
  __extends(ColorPreview, _super);
  function ColorPreview() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  ColorPreview.prototype.render = function () {
    return h("div", {
      "class": "lp-color-preview",
      "style": {
        boxShadow: "inset 0 0 0 1000px ".concat(this.color),
        height: "".concat(this.height, "px"),
        width: "".concat(this.width, "px")
      }
    });
  };
  __decorate([Prop({
    type: String,
    required: true
  }), __metadata("design:type", String)], ColorPreview.prototype, "color", void 0);
  __decorate([Prop({
    type: Number,
    required: false,
    "default": 32
  }), __metadata("design:type", Number)], ColorPreview.prototype, "height", void 0);
  __decorate([Prop({
    type: Number,
    required: false,
    "default": 32
  }), __metadata("design:type", Number)], ColorPreview.prototype, "width", void 0);
  ColorPreview = __decorate([Component({
    name: 'ColorPreview'
  })], ColorPreview);
  return ColorPreview;
}(Vue);

export { ColorPreview };
