import React from "react";
import Markdown from "./Markdown";
import {
  DiscordHit,
  DocsHit,
  SearchHit,
  StackHit,
  isDiscordHit,
  isDocsHit,
  isStackHit,
} from "./types";

const getRelativeUrl = (url: string) => {
  const urlObj = new URL(url);
  return urlObj.pathname;
};

type HitProps = {
  hit: SearchHit;
};

const renderDocsContent = (hit: DocsHit) => {
  return (
    <a href={getRelativeUrl(hit.objectID)} className="cs-hit">
      <span className="cs-hit-title">
        <img
          src="https://search.convex.dev/icon-convex.svg"
          alt="Convex logo"
          width={20}
          height={20}
        />
        {hit.title}
      </span>
      <div className="cs-hit-content">
        <Markdown text={hit.contents} />
      </div>
    </a>
  );
};

const renderStackContent = (hit: StackHit) => {
  return (
    <a
      href={`https://stack.convex.dev/${hit.objectID}`}
      className="cs-hit"
      target="_blank"
    >
      <span className="cs-hit-title">
        <img
          src="https://search.convex.dev/icon-stack.svg"
          alt="Stack logo"
          width={20}
          height={20}
        />
        {hit.title}
      </span>
      <div className="cs-hit-content">
        <Markdown text={hit.content} />
      </div>
    </a>
  );
};

const renderDiscordContent = (hit: DiscordHit) => (
  <div className="cs-hit">
    <a href={hit.url} className="cs-hit-title" target="_blank">
      <img
        src="https://search.convex.dev/icon-discord.svg"
        alt="Discord logo"
        width={20}
        height={20}
      />
      {hit.title}
    </a>
    <ol className="cs-hit-thread">
      {hit.messages.slice(0, 3).map((message, index) => (
        <li key={index} className="cs-hit-message">
          <img
            src={message.author.avatar}
            alt={`Profile image for ${message.author.name}`}
            width={32}
            height={32}
            className="cs-hit-message-avatar"
          />
          <div className="cs-hit-message-wrapper">
            <strong className="cs-hit-message-author">
              <span>{message.author.name}</span>
              {message.author.convexer && (
                <img
                  src="https://search.convex.dev/icon-convex.svg"
                  alt="Convex team member"
                  width={20}
                  height={20}
                />
              )}
            </strong>
            <div className="cs-markdown">
              <Markdown text={message.body} />
            </div>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

export default function Hit({ hit }: HitProps) {
  if (isDocsHit(hit)) {
    return renderDocsContent(hit);
  }
  if (isStackHit(hit)) {
    return renderStackContent(hit);
  }
  if (isDiscordHit(hit)) {
    return renderDiscordContent(hit);
  }
}
