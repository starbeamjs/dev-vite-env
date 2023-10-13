import "vite/client";

interface ImportMeta {
  env: {
    PROD: boolean | undefined;
    DEV: boolean | undefined;
    MODE: string | undefined;
    STARBEAM_TRACE: boolean;
  };
}
