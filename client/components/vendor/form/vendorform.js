
Template.LookupAddVendor.helpers(

		FormData = function($form){

			return _($form.serializeArray()).reduce(function (acc, field) {

				if(!/^__[a-z]./.test(field.name)){
					acc[field.name] = field.value;
				}

				return acc;

			}, {});

		}
);

Template.LookupAddVendor.events({

	'submit form' : function(e , tpl){

		e.preventDefault();
		var form = $(e.currentTarget);

		swal({

			title: '',
			text: 'Adakah anda pasti untuk menyimpan maklumat ini?',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: "YA",
			cancelButtonText: "TIDAK",
			closeOnConfirm: false

		}, function(isConfirm){

			if(isConfirm){

				var data = FormData(form);

				_.extend(data, {
					status : 'aktif',
					process:1
				});

				Meteor.call ('vendor.save' , data, function(err){

					if(err){

						swal ('' , err.message, 'error');

					}
					else {

						swal ({
							title: '',
							text: 'Maklumat telah berjaya disimpan.',
							confirmButtonText: 'OK',
							type: 'success'
						})

						tpl.find('form').reset();
						$(tpl.firstNode).modal('hide');

					}
				});
			}

		});

	}

});



Template.LookupAddVendor.onRendered(function() {


})