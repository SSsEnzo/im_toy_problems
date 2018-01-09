$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var Plist = document.getElementsByTagName('p')
  for (var i = 0; i < Plist.length; i++){
    var array = Plist[i].innerText.split(" ")
    for (var j = 0; j < array.length; j++){
      array[j] = "<span>" + array[j] + " </span>";
    }
    Plist[i].innerHTML = array.join("");
  }

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  var randomNum = function() {
    return Math.floor((Math.random()*200))
  }

  // TODO: your code here!
  var spanList = document.getElementsByTagName('span')
  setInterval(function() {
    $('span').each(function(index, item){
      $(item).css({'color': `rgb(${randomNum()}, ${randomNum()}, ${randomNum()}`})
    })
  }, 1000)


});
