this.myssElement = function (objHTML) {
    this.element = objHTML; // boxA
   
    function getStyleElement(element) {
        var styleElement;
        if (element.currentStyle) {
            styleElement = element.currentStyle; // IE
        } else {
            styleElement = window.getComputedStyle(element,null);
        }
        return styleElement;
    }
}