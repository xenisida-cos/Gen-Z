var fill = document.getElementById('railFill');
function updateRail(){
  var h = document.documentElement;
  var scrollable = h.scrollHeight - h.clientHeight;
  var pct = scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0;
  fill.style.width = pct + '%';
}
document.addEventListener('scroll', updateRail, { passive: true });
window.addEventListener('resize', updateRail);
updateRail();