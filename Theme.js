var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import cssVariables from '../utils/css-variable';
import newId from '../utils/new-id';
import consoleMessage from '../utils/console-message';
import { ThemeContext } from '../context';
import TryTagless from '../TryTagless';
import css from './Theme.module.scss';
var Theme = /** @class */ (function (_super) {
    __extends(Theme, _super);
    function Theme() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.global = false;
        _this.id = newId();
        _this.setVariables = function () {
            var _a = window.matchMedia('(prefers-color-scheme: light)').matches ?  _this.props.config[0] :  _this.props.config[1], 
                themeContext = _a.themeContext, customVariables = _a.customVariables, meta = _a.meta, restVariables = __rest(_a, ["themeContext", "customVariables", "meta"]);
            cssVariables.unset("style-" + _this.id);
            cssVariables.set({
                json: restVariables,
                prefix: 't',
                selector: _this.global ? ':root' : "#" + _this.id,
                id: "style-" + _this.id,
            });
            cssVariables.set({
                json: customVariables,
                selector: _this.global ? ':root' : "#" + _this.id,
                id: "style-" + _this.id,
            });
            if (themeContext === null || themeContext === void 0 ? void 0 : themeContext.template) {
                var template = typeof themeContext.template === 'string'
                    ? themeContext.template
                    : themeContext.template.join();
                localStorage.setItem("themeor-template-global", template);
            }
            else {
                localStorage.removeItem("themeor-template-global");
            }
        };
        return _this;
    }
    Theme.prototype.componentDidUpdate = function () {
        this.setVariables();
    };
    Theme.prototype.componentDidMount = function () {
        this.setVariables();
    };
    Theme.prototype.render = function () {
        var _a = this.props, global = _a.global,
         _b = window.matchMedia('(prefers-color-scheme: light)').matches ?  _a.config[0] :  _a.config[1],
         config = _b === void 0 ? {} : _b, children = _a.children, icons = _a.icons, TRY_TAGLESS = _a.TRY_TAGLESS, TRY_RECURSIVE_TAGLESS = _a.TRY_RECURSIVE_TAGLESS, FORCE_TAGLESS = _a.FORCE_TAGLESS, forwardRef = _a.forwardRef, restProps = __rest(_a, ["global", "config", "children", "icons", "TRY_TAGLESS", "TRY_RECURSIVE_TAGLESS", "FORCE_TAGLESS", "forwardRef"]);
        var _c = config.themeContext, themeContext = _c === void 0 ? {} : _c;
        var shallInverseOn = themeContext.shallInverseOn, template = themeContext.template, custonContext = __rest(themeContext, ["shallInverseOn", "template"]);
        var themeId = this.context.themeId;
        this.global = global;
        if (themeId && global) {
            consoleMessage({
                text: 'You can set "global" prop only once. All nested globals will be ignored',
                type: 'error',
                source: this,
            });
            this.global = false;
        }
        var context = __assign(__assign({}, custonContext), { shallInverseOn: shallInverseOn,
            template: template, backIsStrong: false, icons: icons, themeId: this.id, mergeHistory: [] });
        var componentProps = __assign(__assign({}, restProps), { children: children, id: this.id, className: css.theme });
        return (React.createElement(ThemeContext.Provider, { value: context }, this.global ? children : ((TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS) ? (React.createElement(TryTagless, __assign({ force: FORCE_TAGLESS, recursive: TRY_RECURSIVE_TAGLESS }, componentProps))) : (React.createElement("div", __assign({ ref: forwardRef }, componentProps))))));
    };
    Theme.contextType = ThemeContext;
    Theme.TryTagless = function (props) { return React.createElement(Theme, __assign({ TRY_TAGLESS: true }, props)); };
    return Theme;
}(React.Component));
export default Theme;
