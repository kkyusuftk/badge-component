import { __extends, __decorate, __metadata } from '../../../node_modules/tslib/tslib.es6.js';
import Vue, { h } from 'vue';
import { Prop, Component } from 'vue-property-decorator';

// TODO(ignat): Refactor and split into 2 components - Hint and Notification.
var Hint = /** @class */function (_super) {
  __extends(Hint, _super);
  function Hint() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.hasActivator = false;
    _this.isVisible = false;
    return _this;
  }
  Hint_1 = Hint;
  Object.defineProperty(Hint.prototype, "classNames", {
    get: function get() {
      var result = ['lp-hint', "lp-hint--".concat(this.type)];
      if (this.position !== Hint_1.Position.AUTO) {
        if (this.hasActivator) {
          result.push('lp-hint--has-activator');
        } else {
          result.push('lp-hint--has-close');
        }
        result.push("lp-hint--".concat(this.position));
      }
      return result.join(' ');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Hint.prototype, "visibilityStyle", {
    get: function get() {
      return {
        visibility: this.isVisible ? 'visible' : 'hidden'
      };
    },
    enumerable: false,
    configurable: true
  });
  Hint.prototype.render = function () {
    this.hasActivator = !!(this.$slots && this.$slots["default"]);
    if (this.hasActivator) {
      return h("div", {
        "class": ['lp-hint-activator', this.activatorClass || ''].join(' '),
        "on": {
          "mouseenter": this.toggleVisibility,
          "mouseleave": this.toggleVisibility
        }
      }, [this.$slots && this.$slots["default"], this.renderHint()]);
    } else {
      // There's no activator so the hint should be visible by default.
      this.isVisible = true;
      if (this.timeout !== 0) {
        setTimeout(this.onClose.bind(this), this.timeout || Hint_1.DEFAULT_TIMEOUT);
      }
      return this.renderHint();
    }
  };
  Hint.prototype.renderHint = function () {
    if (this.text) {
      return h("div", {
        "class": this.classNames,
        "style": this.visibilityStyle
      }, [this.renderTitle(), this.renderText(), this.renderCloseButton()]);
    }
    return null;
  };
  Hint.prototype.renderTitle = function () {
    if (this.title) {
      return h("div", {
        "class": "lp-hint-title"
      }, [this.title]);
    }
    return null;
  };
  Hint.prototype.renderText = function () {
    if (this.text) {
      return h("div", {
        "class": "lp-hint-text"
      }, [this.text]);
    }
    return null;
  };
  Hint.prototype.renderCloseButton = function () {
    if (!this.hasActivator) {
      return h("button", {
        "class": "lp-hint-close",
        "on": {
          "click": this.onClose
        }
      }, ["\xD7"]);
    }
    return null;
  };
  Hint.prototype.toggleVisibility = function (e) {
    this.isVisible = e.type.toLowerCase().indexOf('enter') !== -1;
  };
  Hint.prototype.onClose = function () {
    this.$emit('close');
  };
  var Hint_1;
  Hint.DEFAULT_TIMEOUT = 5000; // 5 seconds
  __decorate([Prop({
    type: String,
    required: false
  }), __metadata("design:type", String)], Hint.prototype, "title", void 0);
  __decorate([Prop({
    type: String,
    required: false
  }), __metadata("design:type", String)], Hint.prototype, "text", void 0);
  __decorate([Prop({
    type: String,
    required: false,
    "default": function _default() {
      return Hint.Type.NORMAL;
    }
  }), __metadata("design:type", String)], Hint.prototype, "type", void 0);
  __decorate([Prop({
    type: String,
    required: false,
    "default": function _default() {
      return Hint.Position.AUTO;
    }
  }), __metadata("design:type", String)], Hint.prototype, "position", void 0);
  __decorate([Prop({
    type: String,
    required: false
  }), __metadata("design:type", String)], Hint.prototype, "activatorClass", void 0);
  __decorate([Prop({
    type: Number,
    required: false
  }), __metadata("design:type", Number)], Hint.prototype, "timeout", void 0);
  Hint = Hint_1 = __decorate([Component({
    name: 'Hint'
  })], Hint);
  return Hint;
}(Vue);
(function (Hint) {
  (function (Type) {
    Type["NORMAL"] = "normal";
    Type["WARNING"] = "warning";
    Type["ERROR"] = "error";
  })(Hint.Type || (Hint.Type = {}));
  (function (Position) {
    Position["AUTO"] = "auto";
    Position["BOTTOM"] = "bottom";
    Position["LEFT"] = "left";
    Position["RIGHT"] = "right";
    Position["TOP"] = "top";
  })(Hint.Position || (Hint.Position = {}));
})(Hint || (Hint = {}));

export { Hint };
