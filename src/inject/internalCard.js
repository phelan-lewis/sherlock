$(function() {

  //this is a variable for testing purposes
  var insertName = "Hello Jordan, this is a proof concept";

  var cardStore = [];

  var cardNames = [];

  //this function creates the card in intrnal along the right sidebar
  var addSomeData = function(){
      $(".ui-layout__section--secondary").append("<div class='ui-layout__item sherlockCard'></div>")
      $(".sherlockCard").append("<section class='ui-card box-card sherlock'></section>")
      $(".sherlock").append("<h2 class='ui-card__header'>This is a Test Card</h2>")
      $(".sherlock").append("<div class='ui-card__section'>" + insertName + "</div>")
      $.each(cardNames, function( index, value ) {
        $(".sherlock").append("<div class='ui-card__section'> Card "+ index + ": "  + value + "</div>")
      })
  }

  function getCards(context) {
    var planCardA = $("a[id*='plan']");
      planCardA.attr('id', 'plan');
      planCardA.attr('href', '#plan');

    // gather all of the card IDs
    var cardIds = $('.ui-anchor')
      .map(function() {
        // ensure that the .ui-anchor has a parent of .ui-card and .ui-layout__section--primary
        if (($(this).parents('.ui-card').length > 0) && ($(this).parents('.ui-layout__section--' + context).length > 0)) {
          var good = true;
          var id = this.id;

          var cardObject = $(this);

          $.each(cardObject, function( index, value ){
              console.log("This is Index: " + value );
          })

          var override = false;
          var overvalue;

          if (id.indexOf('plan') !== -1) {
            var override = true;
            overvalue = 'plan';
          }

          // $.each(blacklistElements, function(key, value) {
          //   if (id == value) {
          //     good = false;
          //   }
          // });
          if (good) {
            if (override) {
              return overvalue;
            } else {
              return this.id;
            }
          }
        }
      }).get();

    // get card names from card IDs
    $.each(cardIds, function(key, value) {

      var attempts = [
        $('#' + this.valueOf()).parent().clone().children().remove().end().text().trim(),
        $('#' + value).siblings('a').text().trim(),
        $('#' + value).siblings('.expandable-card-title').text().trim(),
        $('#' + value).text().trim()
      ];

      $.each(attempts, function(key, attempt) {
        if (attempt.length > 0) {
          cardNames.push(attempt);
        }
      });
    });
  }

  getCards("primary");
  getCards("secondary");
  addSomeData()

});
