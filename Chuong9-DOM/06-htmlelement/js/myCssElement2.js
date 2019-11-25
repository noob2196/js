this.myssElement = function (objHTML) {
    this.element = objHTML; // boxA

    /*=============================================================
   * PUBLIC FUNCTIONS
   * =============================================================
   */
    this.cssStyle = function () {
        return getStyleElement(objHTML);
    }
    this.outerWidth = function () {
        return getOuterWidth(objHTML);
    }

    this.outerHeight = function () {
        return getOuterHeight(objHTML);
    }

    this.innerHeight = function () {
        return getInnerHeight(objHTML);
    }

    this.innerWidth = function () {
        return getInnerWidth(objHTML);
    }

    this.position = function (vType) {
        if (vType != "min") {
            return getPostionMax(objHTML);
        } else {
            return getPostionMin(objHTML);
        }
    }

    /*=============================================================
    * PRIVATE FUNCTIONS
    * =============================================================
    */

    function getPostionMax(elemt) {
        var left, right, top, bottom;

        left = elemt.offsetLeft;
        top = elemt.offsetTop;
        right = elemt.offsetLeft + elemt.offsetWidth;
        bottom = elemt.offsetTop + elemt.offsetHeight;

        return { left: left, top: top, right: right, bottom: bottom }
    }

    function getPostionMin(elemt) {
        var left, right, top, bottom;
        var ccsElemt = getStyleElement(elemt);

        left = elemt.offsetLeft + parseInt(ccsElemt.borderLeftWidth);
        top = elemt.offsetTop + parseInt(ccsElemt.borderTopWidth);
        right = elemt.offsetLeft + elemt.offsetWidth - parseInt(ccsElemt.borderRightWidth);
        bottom = elemt.offsetTop + elemt.offsetHeight - parseInt(ccsElemt.borderBottomWidth);

        return { left: left, top: top, right: right, bottom: bottom }
    }

    function getOuterWidth(elemt) {
        var vOuterWidth = elemt.offsetWidth;
        return vOuterWidth;
    }

    function getOuterHeight(elemt) {
        var vOuterHeight = elemt.offsetHeight;
        return vOuterHeight;
    }

    function getInnerHeight(elemt) {
        var cssElement = getStyleElement(elemt);
        var vInnerHeight = elemt.offsetHeight - parseInt(cssElement.borderTopWidth) - parseInt(cssElement.borderBottomWidth);
        return vInnerHeight;
    }

    function getInnerWidth(elemt) {
        var cssElement = getStyleElement(elemt);
        var vInnerWidth = elemt.offsetWidth - parseInt(cssElement.borderLeftWidth) - parseInt(cssElement.borderRightWidth);
        return vInnerWidth;
    }
    function getStyleElement(element) {
        var styleElement;
        if (element.currentStyle) {
            styleElement = element.currentStyle; // IE
        } else {
            styleElement = window.getComputedStyle(element, null);
        }
        return styleElement;
    }
}