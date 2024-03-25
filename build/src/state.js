"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Err = exports.Ok = void 0;
function Ok(index, value, input) {
    return { type: 'ok', index, value, input };
}
exports.Ok = Ok;
function Err(index, message, input) {
    return { type: 'err', index, message, input };
}
exports.Err = Err;
//# sourceMappingURL=state.js.map