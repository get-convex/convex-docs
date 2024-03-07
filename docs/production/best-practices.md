---
title: "Best Practices"
sidebar_position: 170
---

Here's a collection of our recommendations on how best to use Convex to build
your application. If you want guidance specific to your app's needs or have
discovered other ways of using Convex,
[message us on Discord](https://convex.dev/community)!

## Use [TypeScript](/docs/typescript.mdx)!

All Convex libraries have complete type annotations and using theses types is a
great way to learn the framework.

Even better, Convex supports [code generation](/generated-api/) to create types
that are specific to your app's [schema](/docs/database/schemas.mdx) and
[Convex functions](/docs/functions.mdx).

Code generation is run automatically by
[`npx convex dev`](/docs/cli.md#run-the-convex-dev-server).

## Functions

### Use [argument validation](/docs/functions/args-validation.mdx) in all public functions.

Argument validation prevents malicious users from calling your functions with
the wrong types of arguments. It's okay to skip argument validation for
[internal functions](/docs/functions/internal-functions.mdx) because they are
not publicly accessible.

### Use `console.log` to debug your Convex functions.

All server-side logs from Convex functions are shown on the
[dashboard Logs page](/docs/dashboard/deployments/logs.md). If a server-side
exception occurs, it will also be logged as an error event.

On a **dev deployment** the logs will also be forwarded to the client and will
show up in the browser developer tools Console for the user who invoked the
function call, including full server error messages and server-side stack
traces.

### Use helper functions to write shared code.

You can feel free to write additional helper functions in your `/convex`
directory and use them within your Convex functions. Helpers can be a powerful
way to share business logic, authorization code, and more.

### Prefer queries and mutations over actions

You should generally avoid using actions when the same goal can be achieved
using queries or mutations. Since actions can have side effects, they can't be
automatically retried nor their results cached. Actions should be used in more
limited scenarios, such as calling third-party services.

## Database

### Use indexes or paginate all large database queries.

[Database indexes](/docs/database/indexes/indexes.md) with
[range expressions](/docs/database/indexes/indexes.md#querying-documents-using-indexes)
allow you to write efficient database queries that only scan a small number of
documents in the table. [Pagination](/docs/database/pagination.mdx) allows you
to quickly display incremental lists of results. If your table could contain
more than a few thousand documents, you should consider pagination or an index
with a range expression to ensure that your queries stay fast.

For more details, check out our
[Introduction to Indexes and Query Performance](/docs/database/indexes/indexes-and-query-perf.md)
article.

### Use tables to separate logical object types.

Even though Convex does support nested documents, it is often better to put
separate objects into separate tables and use `Id`s to create references between
them. This will give you more flexibility when loading and
[querying documents](/docs/database/reading-data.mdx).

You can read more about this at [Document IDs](/docs/database/document-ids.mdx).

## UI patterns

### Check for `undefined` to determine if a query is loading.

The [`useQuery` React hook](/api/modules/react#usequery) will return `undefined`
when it is first mounted, before the query has been loaded from Convex. Once a
query is loaded it will never be `undefined` again (even as the data reactively
updates). `undefined` is not a valid return type for queries (you can see the
types that Convex supports at [Data Types](/docs/database/types.md))

You can use this as a signal for when to render loading indicators and
placeholder UI.

### Add optimistic updates for the interactions you want to feel snappy.

By default all relevant `useQuery` hooks will update automatically after a
mutation is synced from Convex. If you would like some interactions to happen
even faster, you can add
[optimistic updates](/docs/client/react/optimistic-updates.mdx) to your
`useMutation` calls so that the UI updates instantaneously.

### Use an exception handling service and error boundaries to manage errors.

Inevitably, your Convex functions will have bugs and hit exceptions. If you have
an exception handling service and error boundaries configured, you can ensure
that you hear about these errors and your users see appropriate UI.

See [Error Handling](/docs/functions/error-handling/error-handling.mdx) for more
information.
