"use client";

import React, { ComponentProps, useState } from "react";
import type { BuilderBlock } from "@builder.io/sdk-react-nextjs";
import { Blocks } from "@builder.io/sdk-react-nextjs";

type Props = {
  builderBlock: BuilderBlock;
  tabs?: { label: string; content: BuilderBlock[] }[];
  externalContent?: BuilderBlock[];
  builderContext: ComponentProps<typeof Blocks>["context"] & {
    componentInfos: Record<string, any>;
  };
};
export function Tabs(props: Props) {
  const [activeTab, setActiveTab] = useState(0);
  console.log("props", props);

  return (
    <div>
      <div
        className="flex-col p-2 bg-red-300"
        style={{
          display: "flex",
          overflow: "auto",
        }}
      >
        <span className="block">Main container</span>
        <div className="p-2 bg-green-300">
          <span className="block">Tabs container</span>
          {props.tabs?.map((item, index) => (
            <button
              key={item.label}
              onClick={() => {
                setActiveTab(index);
              }}
              style={{
                padding: 20,
                color: activeTab === index ? "blue" : "#000",
              }}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
