/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SLACK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
