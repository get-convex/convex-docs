import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";
import { ConvexAiChat as ConvexAiChatComponent } from "convex-ai-chat/react";
import "convex-ai-chat/react/styles-docs.css";

export function ConvexAiChat() {
  const {
    siteConfig: {
      customFields: { convexUrl },
    },
  } = useDocusaurusContext();

  const configuredConvexUrl = getConvexURLFromQueryParam() ?? convexUrl;

  return configuredConvexUrl !== undefined ? (
    <ConvexAiChatComponent
      convexUrl={configuredConvexUrl}
      infoMessage={
        "Convex AI Bot can make mistakes. " +
        "When in doubt, reach out to our human team on Discord."
      }
      welcomeMessage="Hey there, what can I answer about Convex?"
      renderTrigger={(onClick) => (
        <button className="convex-ai-chat" onClick={onClick}>
          <span />
        </button>
      )}
    />
  ) : null;
}

function getConvexURLFromQueryParam() {
  if (typeof window === "undefined") {
    return undefined;
  }
  const url = window.location.href;
  const urlParams = new URLSearchParams(new URL(url).search);
  return urlParams.get("chatUrl");
}
