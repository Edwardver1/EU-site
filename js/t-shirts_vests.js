$(document).ready(function(){
   $('#column1').hover(
    function(){
      $('#art1').attr('src','img/Cotton T-shirt (1).jpg')
    },
    function(){
      $('#art1').attr('src','img/Cotton T-shirt (2).jpg')
    }
   )

   $('#column2').hover(
    function(){
      $('#art2').attr('src','img/Polo Shirt  (2).jpg')
    },
    function(){
      $('#art2').attr('src','img/Polo Shirt  (1).jpg')
    }
   )

   $('#column3').hover(
    function(){
      $('#art3').attr('src','img/Printed Polo Shirt  (1).jpg')
    },
    function(){
      $('#art3').attr('src','img/Printed Polo Shirt  (2).jpg')
    }

   )
   $('#column4').hover(
    function(){
      $('#art4').attr('src','img/T-shirt with Chest Pocket  (2).jpg')
    },
    function(){
      $('#art4').attr('src','img/T-shirt with Chest Pocket  (1).jpg')
    }
   )

   $('#column5').hover(
    function(){
      $('#art5').attr('src','img/T-shirt with Printed Design  (2).jpg')
    },
    function(){
      $('#art5').attr('src','img/T-shirt with Printed Design  (1).jpg')
    }
   )

   $('#column6').hover(
    function(){
      $('#art6').attr('src','img/Tank top with Chest Pocket (2).jpg')
    },
    function(){
      $('#art6').attr('src','img/Tank top with Chest Pocket (1).jpg')
    }
   )

});