const SET_THEME_COLOR = 'SET_THEME_COLOR';
const SET_PRIMARY_COLOR = 'SET_PRIMARY_COLOR';
const SET_ACCENT_COLOR = 'SET_ACCENT_COLOR';

function setThemeColor(primary, accent) {
    return {
        type: SET_THEME_COLOR,
        primary: primary,
        accent: accent
    };
}

function setPrimaryColor(color) {
    return {
        type: SET_PRIMARY_COLOR,
        color: color,
    };
}

function setAccentColor(color) {
    return {
        type: SET_ACCENT_COLOR,
        color: color,
    };
}

export {
    SET_THEME_COLOR,
    SET_PRIMARY_COLOR,
    SET_ACCENT_COLOR,
    setThemeColor,
    setPrimaryColor,
    setAccentColor
}



