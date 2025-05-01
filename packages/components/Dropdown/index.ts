import dropdown from "./DropDown.vue";
import dropdownMenu from "./DropDownMenu.vue";
import dropdownItem from "./DropDownItem.vue";

import { withInstall } from "@xier-element/utils";

export const XrDropDown = withInstall(dropdown);
export const XrDropDownMenu = withInstall(dropdownMenu);
export const XrDropDownItem = withInstall(dropdownItem);
// XrDropDown.install = (app) => {
//     app.component(XrDropDown.name!, XrDropDown)
//     app.component(XrDropDownMenu.name!, XrDropDownMenu)
//     app.component(XrDropDownItem.name!, XrDropDownItem)
//   }

export * from "./types";
