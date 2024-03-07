---
title: "Settings"
slug: "deployment-settings"
sidebar_position: 60
---

The [deployment settings page](https://dashboard.convex.dev/deployment/settings)
gives you access to information and configuration options related to a specific
deployment (**production**, your personal **development** deployment, or a
**preview** deployment).

## URL and Deploy Key

The [URL and deploy key page](https://dashboard.convex.dev/deployment/settings)
shows:

- The URL this deployment is hosted at. Some Convex integrations may require the
  deployment URL for configuration.
- The deployment's deploy key, used to
  [integrate with build tools such as Netlify and Vercel](/docs/production/hosting/hosting.mdx)
  and
  [syncing data with Airbyte and Fivetran](/docs/database/import-export/streaming.md).

![Deployment Settings Dashboard Page](/screenshots/deployment_settings.png)

## Environment Variables

The
[environment variables page](https://dashboard.convex.dev/deployment/settings/environment-variables)
lets you add, change, remove and copy the deployment's
[environment variables](/docs/production/environment-variables.mdx).

![deployment settings environment variables page](/screenshots/deployment_settings_env_vars.png)

## Authentication

The
[authentication page](https://dashboard.convex.dev/deployment/settings/authentication)
shows the values configured in your `auth.config.js` for user
[authentication](/docs/auth.mdx) implementation.

![deployment settings authentication page](/screenshots/deployment_settings_auth.png)

## Snapshot Export

The
[snapshot export page](https://dashboard.convex.dev/deployment/settings/snapshot-export)
lets you [export a snapshot](/docs/database/import-export/export.mdx) of the
data stored in your deployment's database

![deployment settings export page](/screenshots/deployment_settings_snapshot_export.png)

## Streaming Export and Integrations

The
[streaming export page](https://dashboard.convex.dev/deployment/settings/streaming-export)
points to instructions on how to setup
[streaming export](/docs/database/import-export/streaming.md).

The
[integrations page](https://dashboard.convex.dev/deployment/settings/integrations)
lets you configure
[log streaming and exception reporting](/docs/production/integrations/integrations.mdx).

## Pause Deployment

On the
[pause deployment page](https://dashboard.convex.dev/deployment/settings/pause-deployment)
you can [pause your deployment](/docs/production/pause-deployment.mdx) with the
pause button.

![deployment settings pause deployment page](/screenshots/deployment_settings_pause.png)
