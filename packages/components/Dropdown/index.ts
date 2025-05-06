import dropdown from "./DropDown.vue";
import dropdownMenu from "./DropDownMenu.vue";
import dropdownItem from "./DropDownItem.vue";

import { withInstall } from "@xier-element/utils";

export const XrDropdown = withInstall(dropdown);
export const XrDropdownMenu = withInstall(dropdownMenu);
export const XrDropdownItem = withInstall(dropdownItem);
export * from "./types";
