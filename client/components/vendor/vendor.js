VendorCtrl = RouteController.extend({

	template : 'Vendor',

	subscriptions: function(){

		var subs = [];

		subs.push(Meteor.subscribe('vendor', {}))

		return subs;
	},


	data: function () {

		var data = Vendor.find({}, {
			sort : {code: -1}
		})

		this.state.set('paging.count', data.length);

		return data;
	}

}).helpers({

	isReady: function () {

		return this.ready();

	}

});

Template.Vendor.events({

	'click [xaction="add"]': function(e , tpl){

		var ctrl = Iron.controller();

		$('#LookupAddVendor').modal({
			backdrop:false,
			show: true
		})
	}
});

Template.Vendor.onRendered(function(){

});