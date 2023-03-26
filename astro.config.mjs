import partytown from "@astrojs/partytown"
import { defineConfig } from "astro/config"
import compress from "astro-compress"

export default defineConfig({
  site: "https://reload.co.jp",
  integrations: [
    compress(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
})
