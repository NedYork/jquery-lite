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

  DOMNodeCollection.prototype.empty = function () {
    for (var i = 0; i < this.htmlElements.length; i++) {
      this.htmlElements[i].innerHTML = "";
    }
  };

  DOMNodeCollection.prototype.append = function (item) {
    if (item instanceof DOMNodeCollection) {
      for (var i = 0; i < this.htmlElements.length; i++) {
        for (var j = 0; j < item.htmlElements.length; j++) {
          this.htmlElements[i].innerHTML += item.htmlElements[j].outerHTML;
        }
      }
    } else if (item instanceof HTMLElement) {
      for (var i = 0; i < this.htmlElements.length; i++) {
        this.htmlElements[i].innerHTML += item.outerHTML;
      }
    } else if (typeof item === "string") {
      for (var i = 0; i < this.htmlElements.length; i++) {
        this.htmlElements[i].innerHTML += item;
      }
    }
  };

  DOMNodeCollection.prototype.attr = function (key, value) {
    if (typeof value === "undefined") {
      for (var i = 0; i < this.htmlElements.length; i++) {
        try {
          return this.htmlElements[i].attributes[key].nodeValue;
        } catch (e) {
          break;
        }
      }
    } else {
      for (var i = 0; i < this.htmlElements.length; i++) {
        var node = this.htmlElements[i].setAttribute(key, value);
      }
    }
  };


})();
