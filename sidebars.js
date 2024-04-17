// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      // If you change this make sure to update
      // src/theme/DocSidebar/Desktop/index.js
      // home link
      id: "home",
      label: "Home",
      className: "convex-sidebar-home",
    },
    {
      type: "html",
      value: '<hr class="convex-menu-divider" />',
      defaultStyle: false,
    },
    {
      type: "html",
      value: '<div class="convex-menu-header">Get Started</div>',
      defaultStyle: false,
    },

    {
      type: "category",
      label: "Tutorial",
      link: { type: "doc", id: "get-started" },
      items: [{ type: "autogenerated", dirName: "tutorial" }],
      className: "convex-sidebar-tutorial",
    },
    {
      type: "category",
      label: "Quickstarts",
      link: { type: "doc", id: "quickstarts" },
      items: [{ type: "autogenerated", dirName: "quickstart" }],
      className: "convex-sidebar-quickstart",
    },
    {
      type: "doc",
      id: "zen",
      label: "Zen of Convex",
      className: "convex-sidebar-zen",
    },
    {
      type: "html",
      value: '<hr class="convex-menu-divider" />',
      defaultStyle: false,
    },
    {
      type: "html",
      value: '<div class="convex-menu-header">Backend</div>',
      defaultStyle: false,
    },
    {
      type: "category",
      label: "Functions",
      link: { type: "doc", id: "functions" },
      items: [{ type: "autogenerated", dirName: "functions" }],
      className: "convex-sidebar-functions",
    },
    {
      type: "category",
      label: "Database",
      link: { type: "doc", id: "database" },
      items: [{ type: "autogenerated", dirName: "database" }],
      className: "convex-sidebar-database",
    },
    {
      type: "category",
      label: "File Storage",
      link: { type: "doc", id: "file-storage" },
      items: [{ type: "autogenerated", dirName: "file-storage" }],
      className: "convex-sidebar-file-storage",
    },
    {
      type: "category",
      label: "Authentication",
      link: { type: "doc", id: "auth" },
      items: [{ type: "autogenerated", dirName: "auth" }],
      className: "convex-sidebar-auth",
    },
    {
      type: "category",
      label: "Scheduling",
      link: { type: "doc", id: "scheduling" },
      items: [{ type: "autogenerated", dirName: "scheduling" }],
      className: "convex-sidebar-scheduling",
    },
    {
      type: "doc",
      id: "search",
      label: "Full Text Search",
      className: "convex-sidebar-search",
    },
    {
      type: "doc",
      id: "vector-search",
      label: "Vector Search",
      className: "convex-sidebar-vector",
    },
    {
      type: "doc",
      id: "ai",
      className: "convex-sidebar-ai",
    },
    {
      type: "doc",
      id: "realtime",
      className: "convex-sidebar-realtime",
    },
    {
      type: "doc",
      id: "typescript",
      className: "convex-sidebar-typescript",
    },
    {
      type: "category",
      label: "Production",
      link: { type: "doc", id: "production" },
      items: [{ type: "autogenerated", dirName: "production" }],
      className: "convex-sidebar-production",
    },
    {
      type: "doc",
      id: "open-source",
      className: "convex-sidebar-open-source",
    },
    {
      type: "html",
      value: '<hr class="convex-menu-divider" />',
      defaultStyle: false,
    },
    {
      type: "html",
      value: '<div class="convex-menu-header">Client Libraries</div>',
      defaultStyle: false,
    },
    {
      type: "category",
      label: "React",
      link: { type: "doc", id: "client/react" },
      items: [{ type: "autogenerated", dirName: "client/react" }],
      className: "convex-sidebar-react",
    },
    {
      type: "doc",
      id: "client/react-native",
      label: "React Native",
      className: "convex-sidebar-react-native",
    },
    {
      type: "category",
      label: "JavaScript",
      link: { type: "doc", id: "client/javascript" },
      items: [{ type: "autogenerated", dirName: "client/javascript" }],
      className: "convex-sidebar-javascript",
    },
    {
      type: "doc",
      id: "client/python",
      label: "Python",
      className: "convex-sidebar-python",
    },
    {
      type: "doc",
      id: "client/rust",
      label: "Rust",
      className: "convex-sidebar-rust",
    },
    {
      type: "html",
      value: '<hr class="convex-menu-divider" />',
      defaultStyle: false,
    },
    {
      type: "html",
      value: '<div class="convex-menu-header">Tools</div>',
      defaultStyle: false,
    },
    {
      type: "category",
      label: "Dashboard",
      className: "convex-sidebar-dashboard",
      items: [{ type: "autogenerated", dirName: "dashboard" }],
      link: { type: "doc", id: "dashboard" },
    },
    {
      type: "doc",
      id: "cli",
      label: "CLI",
      className: "convex-sidebar-cli",
    },
    {
      type: "html",
      value: '<hr class="convex-menu-divider" />',
      defaultStyle: false,
    },
    {
      type: "html",
      value: '<div class="convex-menu-header">API Reference</div>',
      defaultStyle: false,
    },
    {
      type: "category",
      label: "Convex API",
      collapsible: true,
      link: { type: "doc", id: "api/index" },
      items: [{ type: "autogenerated", dirName: "api" }],
      className: "convex-sidebar-convex-api",
    },
    {
      type: "category",
      label: "Generated Code",
      collapsible: true,
      link: { type: "doc", id: "generated-api/index" },
      items: [{ type: "autogenerated", dirName: "generated-api" }],
      className: "convex-sidebar-generated-code",
    },
    {
      type: "doc",
      id: "http-api/index",
      label: "HTTP API",
      className: "convex-sidebar-http-api",
    },
    {
      type: "doc",
      id: "error",
      label: "Errors",
      className: "convex-sidebar-http-api",
    },
  ],
};

module.exports = sidebars;
