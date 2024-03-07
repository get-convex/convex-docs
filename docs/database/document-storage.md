---
title: Tables & Documents
sidebar_position: 1
todo:
  merge this with other docs / combine with "document IDs" doc, also mention
  that documents don't have to have the same shape
---

## Tables

Your Convex deployment contains tables that hold your app's data. Initially,
your deployment contains no tables or documents.

Each table springs into existence as soon as you add the first document to it.

```javascript
// `friends` table doesn't exist.
await ctx.db.insert("friends", { name: "Jamie" });
// Now it does, and it has one document.
```

You do not have to specify a schema up front or create tables explicitly.

## Documents

Tables contain documents. Documents are very similar to JavaScript objects. They
have fields and values, and you can nest arrays or objects within them.

These are all valid Convex documents:

```json
{}
{"name": "Jamie"}
{"name": {"first": "Arnold", "second": "Cole"}, "age": 60}
```

They can also contain references to other documents in other tables. See
[Data Types](/docs/database/types.md) to learn more about the types supported in
Convex and [Document IDs](/docs/database/document-ids.mdx) to learn about how to
use those types to model your data.
