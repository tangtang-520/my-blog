/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // 更多环境变量...
    VITE_APP_ENV: string,
    VITE_APP_BASE_API: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}