$(document).ready(function(){
	$("#btnSubmit").click(function(){
    var isChecked = jQuery("input[name=size]:checked").val();
     if(!isChecked){
         alert('Select Size');
     }else{
         alert('You have selected :'+isChecked);
     }
});
});