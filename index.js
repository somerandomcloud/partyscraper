const axios = require('axios');
const fs = require('fs');

const getEvent = async (link) => {
	let info;

	await axios.get(link)
		.then(async function(response) {
		// handle success
			const dataStart = response.data.indexOf('&quot;name&quot;:&quot;');
			const dataEnd = response.data.indexOf('</script>', dataStart);
			const result = response.data.slice(dataStart, dataEnd);

			const getName = () => {
				const start = result.indexOf('&quot;name&quot;:&quot;');
				const end = result.indexOf('&quot;,&quot;startDate&quot;:&quot;');
				let info = result.slice(start, end);

				info = info.replace('&quot;name&quot;:&quot;', '');

				return info;
			};

			const getDescription = () => {
				const start = result.indexOf('&quot;description&quot;:&quot;');
				const end = result.indexOf('&quot;,&quot;organizer&quot;:');
				let info = result.slice(start, end);

				info = info.replace('&quot;description&quot;:&quot;', '');

				return info;
			};

			const getLocation = () => {
				const start = result.indexOf('&quot;location&quot;:&quot;');
				const end = result.indexOf('&quot;,&quot;description&quot;');
				let info = result.slice(start, end);

				info = info.replace('&quot;location&quot;:&quot;', '');

				return info;
			};

			const getStart = () => {
				const start = result.indexOf('&quot;startDate&quot;:&quot;');
				const end = result.indexOf('&quot;,&quot;endDate&quot;:&quot;');
				let info = result.slice(start, end);

				info = info.replace('&quot;startDate&quot;:&quot;', '');

				return info;
			};

			const getEnd = () => {
				const start = result.indexOf('&quot;,&quot;endDate&quot;:&quot;');
				const end = result.indexOf('&quot;,&quot;eventAttendanceMode');
				let info = result.slice(start, end);

				info = info.replace('&quot;,&quot;endDate&quot;:&quot;', '');

				return info;
			};

			const getImage = () => {
				const start = response.data.indexOf('</title><link rel="icon" href="');
				const end = response.data.indexOf('" /><m', start);
				let info = response.data.slice(start, end);

				info = info.replace('</title><link rel="icon" href="', '');

				return info;
			};

			info = {
				eventName: getName(),
				eventDescription: getDescription(),
				eventLocation: getLocation(),
				eventImage: getImage(),
				date: {
					eventStart: getStart(),
					eventEnd: getEnd(),
				},
				eventOrganizers: {
					orgName: 'e',
					orgUrl: 'e',
				},
			};
		})
		.catch(function(error) {
		// handle error
			console.log(error);
		})
		.then(function() {
		// always executed
		});

	return info;
};

(async () => {

	const eventInfo = await getEvent('https://partyverse.app/events/23158');

	console.log(eventInfo);

})();