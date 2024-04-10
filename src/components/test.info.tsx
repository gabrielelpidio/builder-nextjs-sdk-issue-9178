import type { RegisteredComponent } from "@builder.io/sdk-react-nextjs";
import { createRegisterComponentMessage } from "@builder.io/sdk-react-nextjs";
import { Tabs } from "./test.server";
import { Tabs as TabsClient } from "./test";

export const tabsWithInfo = {
  component: Tabs,
  isRSC: true,
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
      {
        name: "externalContent",
        type: "uiBlocks",
        defaultValue: [],
      },
    ],
  }).data,
} satisfies RegisteredComponent;

export const tabsWithInfoClient = {
  component: TabsClient,
  ...createRegisterComponentMessage({
    name: "Header Client",
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
      {
        name: "externalContent",
        type: "uiBlocks",
        defaultValue: [],
      },
    ],
  }).data,
} satisfies RegisteredComponent;
