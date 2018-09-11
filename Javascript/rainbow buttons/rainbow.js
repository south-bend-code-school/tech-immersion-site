(function(){

  $(document).ready(init);

  function init() {
    $('#rainbow').click(red);
  }

  function red() {
    $('#rainbow').css('background-color', 'red');
    $('#rainbow').click(orange);
  }

  function orange() {
    $('#rainbow').css('background-color', 'orange');
    $('#rainbow').click(yellow);
  }

  function yellow() {
    $('#rainbow').css('background-color', 'yellow');
    $('#rainbow').click(green);
  }

  function green() {
    $('#rainbow').css('background-color', 'green');
    $('#rainbow').click(blue);
  }

  function blue() {
    $('#rainbow').css('background-color', 'blue');
    $('#rainbow').click(purple);
  }

  function purple() {
    $('#rainbow').css('background-color', 'purple');
    $('#rainbow').click(red);
  }

})();
