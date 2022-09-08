export var transformDate = function (_a) {
    var date = _a.date, lang = _a.lang, type = _a.type, withoutDay = _a.withoutDay;
    var _date = new Date(date);
    switch (type) {
        case 'only-number':
            return _date.toLocaleDateString(lang, {
                year: 'numeric',
                month: 'numeric',
                day: withoutDay ? undefined : 'numeric',
            });
        case 'short':
            return _date.toLocaleDateString(lang, {
                year: 'numeric',
                month: 'short',
                day: withoutDay ? undefined : '2-digit',
            });
        case 'with-weekday':
            return _date.toLocaleDateString(lang, {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: withoutDay ? undefined : '2-digit',
            });
        case 'full':
            return _date.toLocaleDateString(lang, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: withoutDay ? undefined : '2-digit',
            });
    }
};
export var getAccessibilityDate = function (_a) {
    var date = _a.date, lang = _a.lang, withoutDay = _a.withoutDay;
    var _date = new Date(date);
    return _date.toLocaleDateString(lang, {
        year: 'numeric',
        month: 'numeric',
        day: withoutDay ? undefined : 'numeric',
    });
};
