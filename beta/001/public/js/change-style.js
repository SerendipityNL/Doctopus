function setStyle(element, name, value) {
	var newName = name.replace('_', '-');
	jQuery('#blocks ' + element).css(newName, value);
}

function updateStyle(element, name, value) {
	var data = {
		'element': element,
		'name': name,
		'value': value
	};
	jQuery.ajax({
		type: 'POST',
		url: '/setstyle',
		data: data
	});	
}

jQuery.fn.setPx = function() {
	var element = jQuery(this).attr('data-element');
	var name = jQuery(this).attr('name');

	// Set the initial value
	// Get the value and strip all but numbers
	var val = jQuery(this).val().replace(/\D/g, '');
	
	// Set the value
	jQuery(this).val(val);

	jQuery.fn.updateVal = function() {
		// Get the name of the field
		var name = jQuery(this).attr('name');

		// Get the element on which the style should be applied
		var element = jQuery(this).attr('data-element');

		// Get the value and strip all but numbers
		var val = jQuery(this).val().replace(/\D/g, '');

		if (val.length > 0) {
			val = (val > 64 ? 64 : val);
			val = (val < 8 ? 8 : val);
		}	

		// Set the value
		jQuery(this).val(val);

		// Apply the styling
		setStyle(element, name, val + 'px');

		// Update the database
		updateStyle(element, name, val + 'px');
	}

	// Update the field on focus out
	jQuery(this).on('blur', function() {
		jQuery(this).updateVal();
	});

	jQuery(this).on('keyup', function(e) {
		if (e.keyCode == 13) {
			jQuery(this).updateVal();
		}
	})
}

jQuery(document).ready(function() {
	
	jQuery('input').setPx();

	jQuery('select').on('change', function() {
		var element = jQuery(this).attr('data-element');
		var name = jQuery(this).attr('name');
		var val = jQuery(this).val();
		//var settingName = cssName.replace('-', '_');
		
		setStyle(element, name, val);
		updateStyle(element, name, val)
	});
});