# partyscraper [OBSOLETE]

This sucks, use partyverse-wrapper

Partyverse Website: https://partyverse.app/

Partyverse Discord: https://discord.gg/YHzYv6Gkb7

Example usage: 

```js
const partyscraper = require('./index');

(async () => {

	const eventInfo = await partyscraper.getEvent('https://partyverse.app/events/23218');

	const userInfo = await partyscraper.getUser('https://partyverse.app/users/Berlin')

	const teamInfo = await partyscraper.getTeam('https://partyverse.app/teams/1')

	console.log(eventInfo);

	console.log('\n\n')

	console.log(userInfo);

	console.log('\n\n')

	console.log(teamInfo);

})();
```

___

<details>
  <summary>Example of getEvent</summary>

  ```js
{
	"id":23218,
	"createdAt":"2022-03-29T15:40:00.972967+00:00",
	"updatedAt":"2022-03-29T15:40:00.972967+00:00",
	"startDate":"2022-04-12T18:00:00+00:00",
	"description":"Any description **bold text here*",
	"title":"Any title",
	"tags":[
		"Night Club",
		"Bar",
		"Test"
	],
	"attachments":[
		"7ad4434e-7ea0-4300-b8ac-655e479a6491.png"
	],
	"location":"google.com",
	"organizerId":1,
	"endDate":"2022-04-13T20:00:00+00:00",
	"locationId":-1,
	"ageRating":0,
	"game":"vrchat",
	"recurrenceId":13,
	"nextEventId":null,
	"eventTeams":{
		"id":1,
		"createdAt":"2021-09-12T21:29:33+00:00",
		"updatedAt":"2021-09-12T21:29:33+00:00",
		"ownerId":"8849ca9e-551a-4351-bc80-56427dcbd948",
		"name":"Partyverse",
		"approved":true,
		"iconUrl":"icon.png",
		"verified":true,
		"externalId":null,
		"description":"This is the official Partyverse profile on Partyverse. That feels kind of weird to say.",
		"discordUrl":"https://discord.gg/bWdU3edftH",
		"twitterUrl":null,
		"instagramUrl":null
	},
	"peopleJoining":[
		{
			"count":0
		}
	]
}
```
  
</details>

___
<details>
  <summary>Example of getUser</summary>

  ```js
{
	"id":"54d90633-2cbc-4780-ae10-11ce5075ae2d",
	"created_at":"2021-12-18T14:58:11.233302+00:00",
	"updated_at":"2021-12-18T14:58:11.233302+00:00",
	"slug":"Berlin",
	"displayName":"Berlin",
	"description":"My Discord is:\nICodeInAssembly#7117",
	"avatar":null,
	"lastReadNotification":null,
	"eventSubscription":[
		
	]
}
```
  
</details>

___

<details>
  <summary>Example of getTeam</summary>

  ```js
{
	"id":1,
	"createdAt":"2021-09-12T21:29:33+00:00",
	"updatedAt":"2021-09-12T21:29:33+00:00",
	"ownerId":"8849ca9e-551a-4351-bc80-56427dcbd948",
	"name":"Partyverse",
	"approved":true,
	"iconUrl":"icon.png",
	"verified":true,
	"externalId":null,
	"description":"This is the official Partyverse profile on Partyverse. That feels kind of weird to say.",
	"discordUrl":"https://discord.gg/bWdU3edftH",
	"twitterUrl":null,
	"instagramUrl":null
}
```
  
</details>

___
