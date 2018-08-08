'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

var _default = require('../../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// wait for https://github.com/DefinitelyTyped/DefinitelyTyped/pull/18278
// them below any and change to IAccordionStyle
exports['default'] = _reactNative.StyleSheet.create({
    container: {

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: _reactNative.StyleSheet.hairlineWidth,
        borderBottomColor: '#303232'
    },
    arrow: {
        width: 12,
        height: 12
    },
    headerWrap: {
        flex: 1,
        height: _default2['default'].list_item_height,
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerText: {
        color: '#edfafa',
        fontSize: _default2['default'].font_size_heading
    },
    content: {
        paddingVertical: _default2['default'].v_spacing_md,
        paddingHorizontal: _default2['default'].h_spacing_md,
        borderBottomWidth: _reactNative.StyleSheet.hairlineWidth,
        borderBottomColor: '#303232'
    },
    contentText: {
        fontSize: _default2['default'].font_size_subhead,
        color: '#edfafa'
    }
});
module.exports = exports['default'];