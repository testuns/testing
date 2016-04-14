Vendor = new Meteor.Collection('vendor');

Meteor.methods({

	'vendor.save' : function(attr){

		var data = attr;
		var running_no = 0;

		running_no = running_no+1;

		_.extend(data , {
			code : running_no
		})

		Vendor.insert(attr);


}
})