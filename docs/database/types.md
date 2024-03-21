---
title: "Data Types"
sidebar_position: 40
---

import ConvexValues from "@site/docs/\_convexValues.mdx";

All Convex documents are defined as Javascript objects. These objects can have
field values of any of the types below.

You can codify the shape of documents within your tables by
[defining a schema](/docs/database/schemas.mdx).

## Convex values

<ConvexValues />

## System fields

Every document in Convex has two automatically-generated system fields:

- `_id`: The [document ID](/docs/database/document-ids.mdx) of the document.
- `_creationTime`: The time this document was created, in milliseconds since the
  Unix epoch.

## Limits

Convex values must be less than 1MB in total size. This is an approximate limit
for now, but if you're running into these limits and would like a more precise
method to calculate a document's size,
[reach out to us](https://convex.dev/community). Documents can have nested
values, either objects or arrays that contain other Convex types. Convex types
can have at most 16 levels of nesting, and the cumulative size of a nested tree
of values must be under the 1MB limit.

Table names may contain alphanumeric characters ("a" to "z", "A" to "Z", and "0"
to "9") and underscores ("\_"), and they cannot start with an underscore.

For information on other limits, see [here](/docs/production/state/limits.mdx).

If any of these limits don't work for you,
[let us know](https://convex.dev/community)!

## Working with dates and times

Convex does not have a special data type for working with dates and times. How
you store dates depends on the needs of your application:

1. If you only care about a point in time, you can store a
   [UTC timestamp](https://en.wikipedia.org/wiki/Unix_time). We recommend
   following the `_creationTime` field example, which stores the timestamp as a
   `number` in milliseconds. In your functions and on the client you can create
   a JavaScript `Date` by passing the timestamp to its constructor:
   `new Date(timeInMsSinceEpoch)`. You can then print the date and time in the
   desired time zone (such as your user's machine's configured time zone).
   - To get the current UTC timestamp in your function and store it in the
     database, use `Date.now()`
2. If you care about a calendar date or a specific clock time, such as when
   implementing a booking app, you should store the actual date and/or time as a
   string. If your app supports multiple timezones you should store the timezone
   as well. [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) is a common format
   for storing dates and times together in a single string like
   `"2024-03-21T14:37:15Z"`. If your users can choose a specific time zone you
   should probably store it in a separate `string` field, usually using the
   [IANA time zone name](https://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones)
   (although you could concatenate the two fields with unique character like
   `"|"`).

For more sophisticated printing (formatting) and manipulation of dates and times
use one of the popular JavaScript libraries: [date-fns](https://date-fns.org/),
[Day.js](https://day.js.org/), [Luxon](https://moment.github.io/luxon/) or
[Moment.js](https://momentjs.com/).
