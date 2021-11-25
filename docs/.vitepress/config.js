module.exports = {
  title: "Yuna Docs",
  description: "Yuna music bot.",
  lang: "en-US",
  themeConfig: {
    sidebar: {
      "/": getMainSidebar(),
    },
  },
};

function getMainSidebar() {
  return [
    { text: "Home", link: "/" },
    { text: "FAQ", link: "/faq" },
    { text: "Change Logs", link: "/change-logs" },
    {
      text: "Commands",
      children: [{ text: "Music", link: "/commands/music" }],
    },
  ];
}
