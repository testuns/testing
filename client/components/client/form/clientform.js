Template.LookupAddClient.helpers({});

Template.LookupAddClient.events({

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
		}), function(isConfirm){

			if(isConfirm){

				var data = typeof FormData(form)

				_.extend(data, {
					status : 'aktif',
					process:1
				});

				Meteor.call ('claim.save' , data, function(err){

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
				})
			}
		}
	}

})