import { vLoading } from "./directive";
import { Loading } from "./service";

import type { App } from "vue";

export const XrLoading = {
  name: "XrLoading",
  install(app: App) {
    app.directive("loading", vLoading);
    app.config.globalProperties.$loading = Loading;
  },
  directive: vLoading,
  service: Loading,
};

export default XrLoading;

export {
  vLoading,
  vLoading as XrLoadingDirective,
  Loading as XrLoadingService,
};

export * from "./types";
