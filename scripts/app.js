'use strict';

$(document).ready(function() {
  $('.btn').on('click', function() {
  	var $this = $(this);
  	if($this.hasClass('btn-default')){
    	$this.removeClass('btn-default').addClass('btn-success');
    	$this.append('<span class="glyphicon glyphicon-apple"></span>');
    }
    else if($this.hasClass('btn-success')){
    	$this.removeClass('btn-success').addClass('btn-default');
    	$this.find('.glyphicon').remove();
    }
  });

  $('.replace').on('click', function() {
  	var button = $(this);
  	if(button.hasClass('two')){
		var message = $('<p>This is replacement text 2.0!!!</p>');
  	}
  	else{
    	var message = $('<p>This is replacement text!!!</p>');
    }
    var $this = $(this).closest('.col-xs-4');
    $this.find('p').remove();
    $(message).insertBefore($this.find('.btn'));
  });

  $(function() { $('body').hide().show(); });

});
