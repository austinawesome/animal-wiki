function questionClick(){
  $(this).find(".question , .answer").toggleClass("hidden")
};
$(".col-md-6").on("click",questionClick);
