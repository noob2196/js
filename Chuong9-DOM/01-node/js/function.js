function getElementsByClassName(parentNode, targetClass) {
    var retnode = [];
    var elements = parentNode.getElementsByTagName("*");
    console.log(elements);
    if (elements.length > 0) {
        var myClass = new RegExp('\\b' + targetClass + '\\b');
        for (var i = 0; i < elements.length; i++) {
            console.log(elements.item(i).className);
            var classz = elements.item(i).className;
            if (myClass.test(classz) == 1) {
                retnode.push(elements.item(i));
            }

        }
    }
    return retnode;
}