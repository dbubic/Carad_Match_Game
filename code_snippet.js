MatchGame.generateCardValues = function () {
  var temp_array = [ i ];
       for (var i = 1;  i = 8;  i++)  {
         temp_array.push(i);
         temp_array.push(i);
    }
    temp_array.splice(0, 1);
    console.log(temp_array);

    /*var count = 1;
    var start_array = [ ];
    while (count <= temp_array.length) {
     function random_item(temp_array)  {
       var x = temp_array[Math.floor(Math.random()*temp_array.length)];
       start_array.push(x);
       temp_array.splice(x, 1);
       count=count+1;
     };
   }
    console.log(start_array);*/
  };
