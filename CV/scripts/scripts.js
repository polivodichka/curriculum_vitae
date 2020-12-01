var language = document.getElementById('languages');
language.addEventListener('click', function (e){
    changeLang(e.target.textContent);
});

function changeLang(btnContent){
  

  console.log(btnContent);
  if(btnContent === "ru"){
    var ruElements = document.getElementsByClassName(btnContent);
    for (let i = 0; i < ruElements.length; i++) {
      var style = ruElements[i].style;
      style.display = "none";
    };
    var enElements = document.getElementsByClassName("en");
    for (let i = 0; i < enElements.length; i++) {
      var style = enElements[i].style;
      style.display = "block";
    };
    language.innerText = "en";
  }
  else{
    var ruElements = document.getElementsByClassName(btnContent);
    for (let i = 0; i < ruElements.length; i++) {
      var style = ruElements[i].style;
      style.display = "none";
    };
    var enElements = document.getElementsByClassName("ru");
    for (let i = 0; i < enElements.length; i++) {
      var style = enElements[i].style;
      style.display = "block";
    };
    language.innerText = "ru"
  }
}


