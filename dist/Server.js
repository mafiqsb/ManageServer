"use strict";
exports.__esModule = true;
exports.Server = void 0;
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.somePrivateLogic = function () {
        console.log('doing private Logic');
    };
    Server.prototype.createServer = function () {
        console.log('Created Server');
    };
    return Server;
}());
exports.Server = Server;
