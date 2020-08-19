$(document).ready(function() {
	console.log('field_word');

	var cf_id = 50;
	
	
	if ($('#issue_custom_field_values_'+cf_id).length > 0) {

		var mat = $('title').text().match(/#([0-9]+)/g);

		if(typeof(mat) != "undefined" && mat !== null) {	

			var issue_id = mat[0].replace('#', '');

			var data_word  = '';

			$.ajax({
  				type: "GET",
  				beforeSend: function(request) {
    				request.setRequestHeader("X-Redmine-API-Key", "bf506c99ba7b5e884b1c4fd758c9cef98614be97");
  				},
  				url: "/redmine/issues.json",
  				data: "issue_id=" + issue_id,
  				processData: false,
  				success: function(data) {
    			
    				if(typeof(data.issues[0]) != "undefined" && data.issues[0] !== null) {
  						$.each(data.issues[0].custom_fields, function(index, value){
						if (value.id == cf_id)
    						data_word = value.value;
						});

						var field_name = $('.cf_'+cf_id+' > .label').text().slice(0,-1);

						if (field_name == '')
							field_name = $('[for=issue_custom_field_values_'+cf_id+']').text();

						var tpl = '<hr><fieldset class="collapsible collapsed" style="border:none;padding-left: 0px;"><legend onclick="toggleFieldset(this);" style="padding-left: 15px;color: #2996cc;"><b>'+field_name+'</b></legend><div style="display: none;background:white;">'+data_word+'</div>';

						if (data_word == '')
							tpl = '';

						CKEDITOR.config.height = "700px";

						$('#issue_custom_field_values_'+cf_id).closest('p').remove();

						if ($('.issue').find('.description').length > 0) {
							$('.issue').find('.description').after(tpl);
							console.log('222');
						} else {
							$('.issue > hr:first').before(tpl);
							console.log('111');
						}	

						$('[for=issue_description]').closest('p').after('<p><label for="cf_'+cf_id+'">'+field_name+'</label><a href="#" onclick="$(this).hide(); $(&quot;#cf_'+cf_id+'_description&quot;).show(); return false;"><span class="icon icon-edit">Редактировать</span></a><span id="cf_'+cf_id+'_description" style="display:none"><textarea name="issue[custom_field_values]['+cf_id+']" id="issue_custom_field_values_'+cf_id+'" class="text_cf wiki-edit" data-auto-complete="true" data-tribute="true">'+data_word+'</textarea></span><script>CKEDITOR.replace(\'issue_custom_field_values_'+cf_id+'\');</script></p>');
					}	
  				}
			});
		} else {
			data_word = '';
			var field_name = $('.cf_'+cf_id+' > .label').text().slice(0,-1);

						if (field_name == '')
							field_name = $('[for=issue_custom_field_values_'+cf_id+']').text();
			CKEDITOR.config.height = "700px";
			$('#issue_custom_field_values_'+cf_id).closest('p').remove();
			$('[for=issue_description]').closest('p').after('<p><label for="cf_'+cf_id+'">'+field_name+'</label><a href="#" onclick="$(this).hide(); $(&quot;#cf_'+cf_id+'_description&quot;).show(); return false;"><span class="icon icon-edit">Редактировать</span></a><span id="cf_'+cf_id+'_description" style="display:none"><textarea name="issue[custom_field_values]['+cf_id+']" id="issue_custom_field_values_'+cf_id+'" class="text_cf wiki-edit" data-auto-complete="true" data-tribute="true">'+data_word+'</textarea></span><script>CKEDITOR.replace(\'issue_custom_field_values_'+cf_id+'\');</script></p>');

		}
	
	}
});
