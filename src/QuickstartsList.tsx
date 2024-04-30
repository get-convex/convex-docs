import ExpoLogo from "@site/static/img/expo-logo.svg";
import NextJSLogo from "@site/static/img/nextjs-logo.svg";
import HtmlLogo from "@site/static/img/html-logo.svg";
import NodeLogo from "@site/static/img/node-logo.svg";
import BunLogo from "@site/static/img/bun-logo.svg";
import PythonLogo from "@site/static/img/python-logo.svg";
import ReactLogo from "@site/static/img/react-logo.svg";
import RemixLogo from "@site/static/img/remix-logo.svg";
import RustLogo from "@site/static/img/rust-logo.svg";
import SvelteLogo from "@site/static/img/svelte-logo.svg";
import React from "react";
import { DocCardList } from "./DocCardList";

export function QuickstartsList() {
  return (
    <DocCardList
      items={[
        {
          icon: <ReactLogo height={40} />,
          href: "/quickstart/react",
          docId: "quickstart/react",
          label: "React",
        },
        {
          icon: <NextJSLogo height={40} />,
          invertIcon: true,
          href: "/quickstart/nextjs",
          docId: "quickstart/nextjs",
          label: "Next.js",
        },
        {
          icon: <RemixLogo height={40} />,
          invertIcon: true,
          href: "/quickstart/remix",
          docId: "quickstart/remix",
          label: "Remix",
        },
        {
          icon: <ExpoLogo height={40} />,
          invertIcon: true,
          href: "/quickstart/react-native",
          docId: "quickstart/react-native",
          label: "React Native",
        },
        {
          icon: <SvelteLogo height={40} />,
          href: "/quickstart/svelte",
          docId: "quickstart/svelte",
          label: "Svelte",
        },
        {
          icon: <NodeLogo height={40} />,
          href: "/quickstart/nodejs",
          docId: "quickstart/nodejs",
          label: "Node.js",
        },
        {
          icon: <BunLogo height={40} />,
          href: "/quickstart/bun",
          docId: "quickstart/bun",
          label: "Bun",
        },
        {
          icon: <HtmlLogo height={40} />,
          invertIcon: true,
          href: "/quickstart/script-tag",
          docId: "quickstart/script-tag",
          label: "Script tag",
        },
        {
          icon: <PythonLogo height={40} />,
          href: "/quickstart/python",
          docId: "quickstart/python",
          label: "Python",
        },
        {
          icon: <RustLogo height={40} width={40} />,
          href: "/quickstart/rust",
          docId: "quickstart/rust",
          label: "Rust",
        },
      ]}
    />
  );
}
