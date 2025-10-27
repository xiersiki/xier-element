import message from "./service";

import { withInstallFunction } from "@xier-element/utils";

export const XrMessage = withInstallFunction(message, "$message");

export * from "./type";
// export default XrMessage;
