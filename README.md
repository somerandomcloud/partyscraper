# partyscraper

Scrapes a partyverse event link to get info about that.

Partyverse Website: https://partyverse.app/

Partyverse Discord: https://discord.gg/YHzYv6Gkb7

Example usage: 

```js
const partyscraper = require('./index');

(async () => {

	const eventInfo = await partyscraper.getEvent('https://partyverse.app/events/23158');

	console.log(eventInfo);

})();
```

Example request response:

```js
{
  id: 23158,
  createdAt: '2022-03-27T20:55:15.879407+00:00',
  updatedAt: '2022-03-27T20:55:15.879407+00:00',
  startDate: '2022-03-28T13:00:00+00:00',
  description: 'A cozy inn in the region of Kugune that offers a relaxing atmosphere with a restaurant and an onsen',
  title: 'The Inari Inn',
  tags: [ 'Bar', 'Restaurant' ],
  attachments: [ 'e9817063-c423-4edd-86f3-299f2befeb86.jpeg' ],
  location: ' Shirogane - Ward 4 - Plot 4',
  organizerId: 119,
  endDate: '2022-03-28T22:00:00+00:00',
  locationId: 12,
  ageRating: 0,
  game: 'final-fantasy-xiv',
  recurrenceId: 11,
  nextEventId: 23159,
  eventTeams: {
    id: 119,
    createdAt: '2022-03-27T20:50:53.116176+00:00',
    updatedAt: '2022-03-27T20:50:53.116176+00:00',
    ownerId: '62c14478-8b21-4241-88d1-7d3438ff5db0',
    name: 'Narukai and Co',
    approved: true,
    iconUrl: 'cd0d3a6a-a3df-4e32-9a0b-e52feab043fc.jpeg',
    verified: false,
    externalId: null,
    description: null,
    discordUrl: null,
    twitterUrl: null,
    instagramUrl: null
  },
  peopleJoining: [ { count: 1 } ]
}
```