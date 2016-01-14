(function () {
  window.$l = function (input) {
    var nodeCollection;
    if (typeof input === "string") {
      nodeCollection = document.querySelectorAll(input);
      nodeCollection = [].slice.call(nodeCollection);
    } else if (input instanceof HTMLElement) {
      nodeCollection = [input];
    }
    return new DOMNodeCollection(nodeCollection);
  };

  var DOMNodeCollection = function (htmlElements) {
    this.htmlElements = htmlElements;
  };

  DOMNodeCollection.prototype.html = function (content) {
    if (typeof content === "undefined") {
      return this.htmlElements[0].innerHTML;
    } else {
      for (var i = 0; i < this.htmlElements.length; i++) {
        this.htmlElements[i].innerHTML = content;
      }
    }
  };


})();
