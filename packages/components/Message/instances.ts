import { shallowReactive } from "vue";
import type { MessageInstance } from "./type";

export const instances = shallowReactive<MessageInstance[]>([]);
