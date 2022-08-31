import { mapText } from '../config';
export var clearString = function (str) { return str.replace(/-/g, ' ').replace(/_/g, ' '); };
export var getAriaText = function (_a) {
    var from = _a.from, to = _a.to, lang = _a.lang;
    return "".concat(mapText[lang].from, " ").concat(from, " ").concat(mapText[lang].to, " ").concat(to);
};
