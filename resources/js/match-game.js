var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

 MatchGame.generateCardValues = function () {
   var temp_array = [  ];
   var n = 1;
        for (var i = 0;  i < 8;  i++)  {
          temp_array.push(n);
          temp_array.push(n);
          n++;
     }
     console.log(temp_array);

   var count = 1;
   var start_array = [ ];
     while (count <= temp_array.length) {
      function random_item(temp_array)  {
        var x = temp_array[Math.floor(Math.random()*temp_array.length)];
        start_array.push(x);
        temp_array.splice(x, 1);
        count++;
      };
    }
     console.log(start_array);
   };

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
