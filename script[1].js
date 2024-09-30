window.requestAnimationFrame= function() {
  return (
    window.requestAnimationFrame ||
    window.wedkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback);
    }
  );
};