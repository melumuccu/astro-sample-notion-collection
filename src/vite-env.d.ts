/// <reference types="vite/client" />
//see: https://vite.dev/guide/env-and-mode.html#intellisense-for-typescript

interface ImportMetaEnv {
  readonly NOTION_DATABASE_ID: string;
  readonly NOTION_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
