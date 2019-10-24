

var memory_array = ['1/16','1/4', '5/16', '11/32', '3/8', '7/16', '1/2', '9/16', '5/8', '11/16', '3/4', '13/16', '7/8', '15/16','1','4','6','8','10','12','14','16','18'];

var memory_values = [];
var memory_title_ids =[];
var tiles_flipped = 0;
Array.prototype.memory_title_shuffle = function (){
  var i = this.length, j, temp;
  while(--i > 0 ){
    j= Math.floor(Math.random() * (i+1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }

  function newBoard(){
    tiles_flipped = 0;
    var output = 'test';
    memory_array.memory_tile_shuffle();
    for (var i=0; i < memory_array.length; i++){

    }

    document.getElementById('memory_board').innerHTML = output;
  }
