---
title: "Logs"
slug: "logs"
sidebar_position: 40
---

![Logs Dashboard Page](/screenshots/logs.png)

The [logs page](https://dashboard.convex.dev/deployment/logs) is a realtime view
of all activity that occurs within your deployment.

Function activity includes:

- The time of function execution.
- The outcome of the function execution (success or failure).
- The name of the invoked function.
- The output of the function, including any log lines logged by the function (ex
  `console.log`) and exceptions.
- The duration of function execution, in milliseconds (does not include network
  latency).

In addition to function activity, [deployment events](#history-view) describing
configuration changes will be present here.

You can use controls on the left-hand side of this page to filter logs by text,
function name, execution status, and log severity.

### Filter logs

Use the “Filter logs” text box on the top of the controls to filter log text.

You can use the “Functions” drop-down list to include or exclude functions from
the results.

You can also find logs for a particular error using "Filter logs" and the
[Convex request id](/docs/functions/error-handling/error-handling.mdx#debugging-errors).
For example if you see this `Error` in your browser console:

![Browser Error](/screenshots/console_error_requestid.png)

You can view the logs for that function in your dashboard by pasting that
Request ID into the 'Filter logs' search bar on the
[Logs](/docs/dashboard/deployments/logs.md) page of your Convex dashboard:

![Dashboard Filter by Request ID](/screenshots/logs_filtered_by_requestid.png)

Most error reporting services and log sinks should also be searchable by Request
ID.

### Status

The status of a log entry indicates whether the Convex function succeeded or
failed. All failed executions will include a reason, which will usually be a
JavaScript exception.

### Log Severity

The log severity filter will control which log lines are included in the logs
page. If a Convex function execution does not contain a log line matching the
severity filter, it will be omitted from the results. The "No log lines" filter
controls whether executions with no console output are included in the results.
