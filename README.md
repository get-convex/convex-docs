# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern
static website generator.

## Installation

As mentioned in the "JavaScript packages" section in the top-level `README.md`,
you'll need to use `rush` to install dependencies. Don't run `npm install`
directly, run the following Rush command instead:

```console
just rush install
```

## Local Development

```console
just run-docs
```

This command starts a local dev server and opens up a browser window. Most
changes are reflected live without having to restart the server.

If you make changes to the `convex` NPM package and want to see them reflected
in API docs, run `just rush build -t convex` and restart the server.

The command runs `npm run dev`, which will not run all checks in our presubmits.
For example, broken links are not checked. To view all errors, try building and
testing:

```console
npm run test
npm run build
```

### AI Chat

To get AI chat working when running docs locally, you need to create
`.env.local` file in this directory with a `CONVEX_URL` environment variable:

```yaml
CONVEX_URL="https://fantastic-otter-933.convex.cloud" # team: convex, project: ai-bot
```

#### Using your own AI Chat deployment

Follow the README in `npm-packages/convex-ai-chat`.

### Spell-checking in VS Code

You can enable spell checking in VS Code by installing
[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker).

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

## Deploying to production

We generally try to only deploy docs alongside NPM releases to avoid
split-braining our customers (see [here](/ops/services/npm/release.md)).

If we want to deploy docs changes between NPM releases, we have two options:

- Deploy docs off of `release` (following instructions
  [here](/ops/services/npm/release.md#docs))
- Cherry-pick the docs change

To check if it's safe to deploy off of `release`, check for any changes between
`docs-prod` (what's currently deployed) and `release`:

```
git pull
git log --oneline origin/docs-prod...origin/release npm-packages/docs npm-packages/convex
```

Look out for docs changes that might cover yet to be released features, or
changes to types or functions in the `convex` npm package, since we
auto-generate documentation for those. (When in doubt, feel free to ask in the
#docs slack channel).

If the set of changes looks fine, follow the instructions
[here](/ops/services/npm/release.md#docs).

If the set of changes does not look fine, we can cherry-pick the change we want
to deploy. Make sure the commit is on `release`, and then run the following
commands to cherry-pick and push:

```
git pull
git checkout docs-prod
git cherry-pick <your commit>
git log # verify this looks reasonable
git push --force-with-lease origin docs-prod
```

## Preview Deployment

We currently don't create a preview deployment if you open a PR against `main`.
To get a preview deployment you can link from your PR manually, follow these
steps:

1. Checkout the branch you're developing on
2. Create a new branch you will use for docs previews, like
   "sshader/docs-preview":

   ```
   git checkout -b $USER/docs-preview
   ```

3. Amend your last commit:

   ```
   git commit --amend -C HEAD
   ```

4. Push the branch and open a PR against the `docs-prod` branch

This PR will never get merged, and just exists for creating a preview
deployment. See
[this section](/npm-packages/docs/README.md#deploying-to-production) for how to
actually deploy changes to production.

If you make changes and you want to update the preview point the your preview
branch at your current commit, amend it and push it:

```
git branch -f $USER/docs-preview
git commit --amend -C HEAD
git push
```

You should amend the commit because if you create two PRs with the same top
commit mergify will complain and won't allow you to merge to `main`.

# Dependency notes

Typedoc plugins don't seem to work in our monorepo with Rush: they only work
when installed from npm.

We needed to update a couple, so we forked them at
https://github.com/get-convex/typedoc-plugin-markdown

Iterating on typedoc plugins is rough, typedoc implements their own module
resolution such that our rush/pnpm solution doesn't work. So to iterate I

1. cloned our typedoc-plugin-markdown fork and set a globalOverride in
   rush/pnpm-config.json
2. make changes there and did a build with yarn run build
3. removed the dependency from dashboard's package.json
4. just rush update
5. re-added the dependency to dashboard's package.json
6. just rush update
7. repeat from 2.
8. remove the globalOverridel, increment the typedoc-plugin-markdown version
   number and publish, and update docs package.json deps
