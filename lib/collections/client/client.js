Client = new Meteor.Collection('client');

Meteor.methods({

	'client.save' : function(attr){

		var data = attr;
		var running_no = 0;

		running_no = running_no+1;

		_.extend(data , {
			code : running_no,
			name : name,
			website: website,
			note : note,
			created: {
				dt : moment().toDate()
			}
		})

		Client.insert(attr);


}
})