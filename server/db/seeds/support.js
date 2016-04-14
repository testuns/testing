if (Support.find().count() == 0) {

	var support = [

		{
			code: '1',
			header: 'PARTNERSHIPS',
			title: 'The key to strong strategic relationship',
			descriptionBi:'We have a proven track record in providing a high level of technical expertise to our industry partners, both corporate clients and vendors. Our founding principle is to build strategic long-term business relationship based on mutual trust, proven results and appreciation for each other’s needs. Everyone wins when business and technical issues are resolved effectively and rapidly. This fosters a co-operative and productive atmosphere to help achieve the ultimate goal getting the job done to specification, cost effectively and on time with maximum confidence.',
			descriptionBm:''
		},
		{
			code: '2',
			header: 'INVOLVEMENT',
			title: 'Understanding how your organization works.',
			descriptionBi:'To be a successful business partner, it is our obligation to acquire a thorough understanding of how your organization operates. Through careful analysis of the business requirement and constraints, work practice, platform investment and growth plan in your organization, KANNTRONICS will provide you the most appropriate IT solution.',
			descriptionBm:'dd'
		},
		{
			code: '3',
			header: 'STANDARDS',
			title: 'Adherence to proven known quantities.',
			descriptionBi:'KANNTRONICS assures quality deliverable by employing established industry standards, methodologies and technology. We utilize state-of the-art techniques and employ cutting edge technology as the basis for our solutions',
			descriptionBm:'dd'
		},
		{
			code: '4',
			header: 'INTEGRATION',
			title: 'Cost effective & efficient utilization information',
			descriptionBi:'By integrating computing resources such as Linux servers, to industry defect to desktop clients running MS-Windows, we will assist you in extracting the most from your IT investment. Through the se of clients/ server technology we can further enhance the responsiveness and effectiveness of corporate decision making, improve user productivity, simplify work practices and remove costs associated with former bottlenecks. An investment in IT integration gives your organization a gain in system performance and throughput, as well as a more useful and efficient computing service for your money.',
			descriptionBm:'dd'
		},
		{
			code: '5',
			header: 'QUALITY',
			title: 'Provide the best in world',
			descriptionBi:'Our company is committed to the continual improvement in the quality of products and services produced, to meet clients expectations. We recognize that quality is the whole development team’s responsibility. Properly implemented, our attention to quality is not in conflict with our client’s requirement of low cost and timely delivery.',
			descriptionBm:'dd'
		}

	];

	support.forEach(function (support) {

		Support.insert({
			code: support.code,
			name: support.header.toUpperCase(),
			header:support.title,
			descriptionBi:support.descriptionBi,
			descriptionBm:support.descriptionBm
		})

	})

}

