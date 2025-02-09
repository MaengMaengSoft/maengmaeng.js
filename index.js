const 맹맹 = {
    target: function (selector) {
        const element = document.querySelector(selector);
        if (!element) {
            console.error(`선택자 "${selector}"에 해당하는 요소를 찾을 수 없습니다.`);
        }
        return element || {};
    },

    get: function ({ target, event, code }) {
        const element = this.target(target);
        if (element) {
            element.addEventListener(event, code);
        }
    },

    repeat: function({index, to, code}) {
        for (let i = index; i < to; i++) {
            code();
        }
    },
    
    style: function(styles) {
        const target = styles.target || "body";
        delete styles.target;
        const keys = Object.keys(styles);
        const elements = document.querySelectorAll(target);
        for (var i = 0; i < elements.length; i++) {
            for (var j = 0; j < keys.length; j++) {
                elements[i].style[keys[j]] = styles[keys[j]];
            }
        }
    },
}
