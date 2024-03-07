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
