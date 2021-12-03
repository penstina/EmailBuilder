
    document.addEventListener('contextmenu', event => event.preventDefault());

    var URL = window.URL || window.webkitURL

window.swapImage = function (elm) {
  var index = elm.dataset.index
  // URL.createObjectURL is faster then using the filereader with base64
  var url = URL.createObjectURL(elm.files[0])
  document.querySelector('img[data-index="2"]').src = url
}

window.swapImage2 = function (elm) {
  var index2 = elm.dataset.index
  // URL.createObjectURL is faster then using the filereader with base64
  var url2 = URL.createObjectURL(elm.files[0])
  document.querySelector('img[data-index="1"]').src = url2
}

    const html = document.querySelector('html')
const inputs = [].slice.call(document.querySelectorAll('input'));

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate(e) {
  if (this.type === 'color') {
    html.style.setProperty('--primaryColor', this.value)
  } 
}


       function disclaimerCopyFunction() {
  var disclaimer = document.getElementById("disclaimerCopyInput").value;
  document.getElementById("disclaimerCopy").innerHTML = disclaimer;
}
   function preheaderCopyFunction() {
  var a = document.getElementById("preheaderCopyInput").value;
  document.getElementById("preheaderCopy").innerHTML = a;
}
   function blueBarCopyFunction() {
  var b = document.getElementById("blueBarCopyInput").value;
  document.getElementById("blueBarCopy").innerHTML = b;
}
    function bodyCopyFunction() {
  var c = document.getElementById("bodyCopyInput").value;
  document.getElementById("bodyCopy, bodyCopy2").innerHTML = c;
}
    function NumberFunction() {
  var d = document.getElementById("NumberInput").value;
  document.getElementById("raceNumber").innerHTML = d;
}
    function instagramFunction() {
  var e = document.getElementById("instagramInput").value;
  document.getElementById("instagramHandle").innerHTML = e;
}
    function twitterFunction() {
  var f = document.getElementById("twitterInput").value;
  document.getElementById("twitterHandle").innerHTML = f;
}
     function facebookFunction() {
  var g = document.getElementById("facebookInput").value;
  document.getElementById("facebookHandle").innerHTML = g;
}

$("button").click(function(){
  $("p").append("<b>Appended text</b>");
});


var doc = new jsPDF();

$('#cmd').click(function () {   
    doc.fromHTML($('#content').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf');
});
