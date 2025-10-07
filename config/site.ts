export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Yerassyl Portal",
  description: "Hello everyone! I'm Yerassyl!",
  navItems: [
    {
      label: "Projects",
      href: "/Projects",
    },
    {
      label: "Education",
      href: "/Education",
    },
    {
      label: "Awards",
      href: "/Awards",
    },
    {
      label: "About me",
      href: "/about",
    },
    {
      label: "Contacts",
      href: "/Contacts",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/rodnoika",
    discord: "https://discord.com/users/738963252838400042",
  },
};
