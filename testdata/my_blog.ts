import blog from "../blog.tsx"
// import { unocss_opts } from "./unocss.ts";

blog({
  author: "Xela Robavo",
  title: "Robavo's Innovation Orchard",
  description: "Chronicles of My Experimental and Passion Projects.",
  avatar: "alex-ovabor-black.png",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:aovabo@alexovabor.com" },
    { title: "GitHub", url: "https://github.com/ovabo" },
    { title: "Twitter", url: "https://twitter.com/aovabo" },
  ],
  lang: "en",
  // localised format based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  dateFormat: (date) =>
    new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(date),
//  middlewares: [
    //ga("UA-XXXXXXXX-X"),
 //   redirects({
 //     "/foo": "/my_post",
      // you can skip leading slashes too
//      "bar": "my_post2",
//    }),
//  ],
  // unocss: unocss_opts, // check https://github.com/unocss/unocss
  favicon: "alexfavicon.png",
});
