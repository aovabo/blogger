import blog from "../blog.tsx";
import { unocss_opts } from "./unocss.ts";

blog({
  author: "Xela Robavo",
  title: "Ovabo's Innovation Orchard",
  description: "Chronicles of my experimental and passion project.",
  avatar: "alex-ovabor-black.png",
  avatarClass: "square-full",
  links: [
    { title: "blog@ovabor.xyz", url: "mailto:blog@ovabor.xyz" },
    { title: "GitHub", url: "https://github.com/ovabo" },
    { title: "Twitter", url: "https://twitter.com/aovabo" },
  ],
});
