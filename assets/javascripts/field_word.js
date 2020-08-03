$(document).ready(function() {
	console.log('field_word');

	var cf_id = 50;
	

	if ($('#issue_custom_field_values_'+cf_id).length > 0) {

		var field_name = $('.cf_'+cf_id+' > .label').text().slice(0,-1);

		var tpl = '<hr><fieldset class="collapsible collapsed" style="border:none;padding-left: 0px;"><legend onclick="toggleFieldset(this);" style="padding-left: 9px;"><b>'+field_name+'</b></legend><div style="display: none;background:white;">'+$('.cf_'+cf_id+' > .value').text()+'</div>';

		if (field_name == '')
			field_name = $('[for=issue_custom_field_values_'+cf_id+']').text();
		
		var data_word  = $('#issue_custom_field_values_'+cf_id).html();

		if (data_word == '')
			tpl = '';

		CKEDITOR.config.height = "700px";

		$('#issue_custom_field_values_'+cf_id).closest('p').remove();

		if ($('.issue > .description').length > 0)
			$('.issue > .description').after(tpl);
		else
			$('.issue > hr:first').before(tpl);

		$('[for=issue_description]').closest('p').after('<p><label for="cf_'+cf_id+'">'+field_name+'</label><a href="#" onclick="$(this).hide(); $(&quot;#cf_'+cf_id+'_description&quot;).show(); return false;"><span class="icon icon-edit">Редактировать</span></a><span id="cf_'+cf_id+'_description" style="display:none"><textarea name="issue[custom_field_values]['+cf_id+']" id="issue_custom_field_values_'+cf_id+'" class="text_cf wiki-edit" data-auto-complete="true" data-tribute="true">'+data_word+'</textarea></span><script>CKEDITOR.replace(\'issue_custom_field_values_'+cf_id+'\');</script></p>');
	}	
});
