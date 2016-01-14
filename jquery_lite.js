(function () {
  window.$l = function (input) {
    if (typeof input === "string") {
      var nodeCollection = document.querySelectorAll(input);
      nodeCollection = [].slice.call(nodeCollection);
    }
  };


})();
