this.myssElement = function (element) {
    this.element = element;
    this.cssStyle = function () {
        return window.getComputedStyle(element, null);
    }
    this.outerWidth = function () {
        var ccsElement = window.getComputedStyle(element, null);
        var vouterWidth = parseInt(ccsElement.borderLeftWidth)
            + parseInt(ccsElement.paddingLeft)
            + parseInt(ccsElement.width)
            + parseInt(ccsElement.borderRightWidth)
            + parseInt(ccsElement.paddingRight);
        return vouterWidth;
    }
    this.outerHeight = function () {
        var cssElement = window.getComputedStyle(element, null);
        var vouterHight = parseInt(cssElement.borderTopWidth)
            + parseInt(cssElement.paddingTop)
            + parseInt(cssElement.height)
            + parseInt(cssElement.borderBottomWidth)
            + parseInt(cssElement.paddingBottom);
        return vouterHight;
    }
    this.cssStyle = function () {
        return window.getComputedStyle(element, null);
    }
    this.innerWidth = function () {
        var cssElement = window.getComputedStyle(element,null);
        var innerWidth = parseInt(cssElement.paddingLeft)
                + parseInt(cssElement.width)
                + parseInt(cssElement.paddingRight);
        return innerWidth;
    }
    this.innerHeight = function () {
        var cssElement = window.getComputedStyle(element,null);
        var innerHight =  parseInt(cssElement.paddingTop)
                + parseInt(cssElement.height)
                + parseInt(cssElement.paddingBottom);
        return innerHight;
    }
}