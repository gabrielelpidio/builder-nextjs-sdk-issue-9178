import type { RegisteredComponent } from "@builder.io/sdk-react-nextjs";
import { createRegisterComponentMessage } from "@builder.io/sdk-react-nextjs";
import { Tabs } from "./test";

export const tabsWithInfo = {
  component: Tabs,
  ...createRegisterComponentMessage({
    name: "Header",
    inputs: [
      {
        name: "tabs",
        type: "list",
        subFields: [
          {
            name: "label",
            type: "text",
            defaultValue: "New tab",
          },
          {
            name: "content",
            type: "uiBlocks",
            defaultValue: [],
          },
        ],
        defaultValue: [
          {
            label: "Tab 1",
            content: [],
          },
        ],
      },
    ],
  }).data,
} satisfies RegisteredComponent;
