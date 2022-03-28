const axios = require('axios');
const fs = require('fs');

axios.get('https://partyverse.app/events/23158')
	.then(function(response) {
		// handle success
		// console.log(response.data);
		fs.writeFileSync('./balls.html', response.data);

		const dataStart = response.data.indexOf('&quot;name&quot;:&quot;');
		const dataEnd = response.data.indexOf('</script>', dataStart);
		const result = response.data.slice(dataStart, dataEnd);

		console.log(dataStart);
		console.log(dataEnd);
		console.log(result);

		const getName = () => {
			const nameStart = result.indexOf('&quot;name&quot;:&quot;');
			const nameEnd = result.indexOf('&quot;,&quot;startDate&quot;:&quot;');
			let name = result.slice(nameStart, nameEnd);

			name = name.replace('&quot;name&quot;:&quot;', '');

			return name;
		};

		const getDescription = () => {
			const descriptionStart = result.indexOf('&quot;description&quot;:&quot;');
			const descriptionEnd = result.indexOf('&quot;,&quot;organizer&quot;:');
			let description = result.slice(descriptionStart, descriptionEnd);

			description = description.replace('&quot;description&quot;:&quot;', '');

			return description;
		};

		const info = {
			eventName: getName(),
			eventDescription: getDescription(),
		};

		console.log(info);
	})
	.catch(function(error) {
		// handle error
		console.log(error);
	})
	.then(function() {
		// always executed
	});