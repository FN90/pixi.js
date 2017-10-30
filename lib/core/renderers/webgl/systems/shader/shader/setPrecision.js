'use strict';

exports.__esModule = true;
exports.default = setPrecision;
/**
 * Sets the float precision on the shader. If the precision is already present this function will do nothing
 * @param {string} src       the shader source
 * @param {string} precision The float precision of the shader. Options are 'lowp', 'mediump' or 'highp'.
 *
 * @return {string} modified shader source
 */
function setPrecision(src, precision) {
    if (src.substring(0, 9) !== 'precision' && src.substring(0, 1) !== '#') {
        return 'precision ' + precision + ' float;\n' + src;
    }

    return src;
}
//# sourceMappingURL=setPrecision.js.map