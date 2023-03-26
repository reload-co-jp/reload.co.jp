import partytown from "@astrojs/partytown"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://reload.co.jp",
  integrations: [
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
})
