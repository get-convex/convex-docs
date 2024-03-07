import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  text: string;
}

export default function Markdown({ text }: MarkdownProps) {
  return (
    <ReactMarkdown
      components={{
        pre: ({ children }) => (
          <div className="cs-markdown-code">
            <pre>{children}</pre>
          </div>
        ),
      }}
    >
      {text}
    </ReactMarkdown>
  );
}
