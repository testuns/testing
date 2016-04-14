SupportCtrl = RouteController.extend({

	template : 'Support',

	subscriptions: function(){

		var subs = [];

		subs.push(Meteor.subscribe('support', {}))

		return subs;
	},

	data: function () {

		var data = Support.find({}, {
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