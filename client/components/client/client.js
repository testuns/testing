ClientCtrl = RouteController.extend({

	template : 'Client',

	data: function () {

		var data = [
			{
				id: '1',
				refno: '',
				status: '',
				name:'',
				date:''
			},
			{
				id: '2',
				refno: '',
				status: '',
				name:'',
				date:''
			},
			{
				id: '3',
				refno: '',
				status: '',
				name:'',
				date:''
			},
			{
				id: '1',
				refno: '',
				status: '',
				name:'',
				date:''
			},
			{
				id: '2',
				refno: '',
				status: '',
				name:'',
				date:''
			},
			{
				id: '3',
				refno: '',
				status: '',
				name:'',
				date:''
			}
		]

		return data;
	}

}).helpers({

	isReady: function () {

		return this.ready();

	}

});

Template.Client.events({

	'click [xaction="add"]': function(e , tpl){

		var ctrl = Iron.controller();

		ctrl.state.set('claim_selected' , undefined);

		$('#LookupAddClient').modal({
			backdrop:false,
			show: true
		})
	}
});

Template.Client.onRendered(function(){

});