// import {
//   describe,
//   it,
//   expect,
//   beforeAll,
//   beforeEach,
//   afterEach,
//   vi,
// } from "vitest";
// import { nextTick } from "vue";
// import XrMessage from "./MessageItem.vue";
// import { mount } from "@vue/test-utils";

// let Message: any;
// beforeEach(() => {
//   // 每个用例前清理 DOM
//   document.body.innerHTML = "";
// });

// afterEach(() => {
//   vi.useRealTimers();
// });

// XrMessage &&
//   describe("Message组件", () => {
//     it("基础功能", async () => {
//       Message = XrMessage;
//       Message({
//         message: "hello world",
//       });
//       await nextTick();
//       expect(document.body.querySelector(".xr-message")?.textContent).toContain(
//         "hello world"
//       );
//     });
//   });
