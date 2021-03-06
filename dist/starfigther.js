"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_ship_1 = require("./base-ship");
var MillenniumFalcon = /** @class */ (function (_super) {
    __extends(MillenniumFalcon, _super);
    function MillenniumFalcon() {
        return _super.call(this, "hyperdrive") || this;
    }
    MillenniumFalcon.prototype.jumpToHiperSpace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpToHiperSpace.call(this);
        }
        else {
            console.log("Failed to jump to into hyperspace");
        }
    };
    return MillenniumFalcon;
}(base_ship_1.Spacecraft));
exports.MillenniumFalcon = MillenniumFalcon;
