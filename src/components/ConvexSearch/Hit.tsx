import React from "react";
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
    <a
      href={getRelativeUrl(hit.objectID)}
      className="hover:no-underline focus-within:outline-none"
    >
      <span className="font-bold text-lg flex items-center gap-2 mb-2 text-neutral-n12 leading-tight">
        <img
          src="https://search.convex.dev/icon-convex.svg"
          alt="Convex logo"
          width={20}
          height={20}
        />
        {hit.title}
      </span>
      <div className="overflow-hidden line-clamp-2 text-neutral-n9 leading-snug">
        {hit.contents}
      </div>
    </a>
  );
};

const renderStackContent = (hit: StackHit) => {
  return (
    <a
      href={`https://stack.convex.dev/${hit.objectID}`}
      className="hover:no-underline focus-within:outline-none"
      target="_blank"
    >
      <span className="font-bold text-lg flex items-center gap-2 mb-2 text-neutral-n12 leading-tight">
        <img
          src="https://search.convex.dev/icon-stack.svg"
          alt="Stack logo"
          width={20}
          height={20}
        />
        {hit.title}
      </span>
      <div className="overflow-hidden line-clamp-2 text-neutral-n9 leading-snug">
        {hit.content}
      </div>
    </a>
  );
};

const renderDiscordContent = (hit: DiscordHit) => (
  <div>
    <a
      href={hit.url}
      className="hover:no-underline focus-within:outline-none"
      target="_blank"
    >
      <span className="font-bold text-lg flex items-center gap-2 mb-2 text-neutral-n12 leading-tight">
        <img
          src="https://search.convex.dev/icon-discord.svg"
          alt="Discord logo"
          width={20}
          height={20}
        />
        {hit.title}
      </span>
    </a>
    <ol className="p-0 pt-2 pl-2">
      {hit.messages.slice(0, 3).map((message, index) => (
        <li key={index} className="text-neutral-n9 flex items-start gap-2 mb-4">
          <img
            src={message.author.avatar}
            alt={`Profile image for ${message.author.name}`}
            width={28}
            height={28}
            className="rounded-full shrink-0 bg-neutral-n11"
          />
          <div className="flex flex-col overflow-hidden gap-1 w-full">
            <strong className="flex gap-1 items-center">
              <span>{message.author.name}</span>
              {message.author.convexer && (
                <img
                  src="https://search.convex.dev/icon-convex.svg"
                  alt="Convex team member"
                  width={16}
                  height={16}
                />
              )}
            </strong>
            <div className="overflow-hidden line-clamp-2 text-neutral-n9 leading-snug">
              {message.body}
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
