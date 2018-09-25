$(function() {

  //this is a variable for testing purposes
  var insertName = "This is Project Sherlock";
  var cardStore = [];
  var cardNames = [];
  var tempCard = [];

  //this function creates the card in intrnal along the right sidebar
  var createCardInInternal = function(firstCardStore){
      $(".ui-layout__section--secondary").prepend("<div class='ui-layout__item sherlockCard'></div>")
      $(".sherlockCard").append("<section class='ui-card box-card sherlock'></section>")
      $(".sherlock").append("<h2 class='ui-card__header'>" + insertName + "</h2>")
      $(".sherlock").append("<div class='ui-card__section'></div>")
      $(".sherlock").append(firstCardStore)
      //$.each(cardNames, function( index, value ) {
      //  $(".sherlock").append("<div class='ui-card__section'> Card "+ index + ": "  + value + "</div>")
      //})
  }

  //this funcitons parese the billing card to display logic
  function parseBillingCard(elem) {
    var billingCardTitle = $(elem).find('h2').text().trim();
    console.log(billingCardTitle);

    if (billingCardTitle === 'Monthly Staff Plan') {
      console.log("I am working" + billingCardTitle);
      var monthlyStaffCard = $("<div class='ui-card__section'> You have a staff account!</div>")
      console.log(monthlyStaffCard);
      createCardInInternal(monthlyStaffCard)
    }

  }

  function addUICardsToCardStore(context){
    $(context).each(function( i , elem ){
        var currentCard = $(this).html();
        //console.log( $(this) );
        cardStore.push(currentCard)
    })
  }

  function parsingTheCards(cardStore){
    $(cardStore).each(function(i, elem ){
      //number 26 is the billing one PLEASE CHANGE ME -- famous last words ;p
      if (i === 26) {
        parseBillingCard(elem);
      } else {
        console.log("I am having fun");
      }
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
  addUICardsToCardStore(".ui-card")
  parsingTheCards(cardStore)

});
