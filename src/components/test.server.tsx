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
        </div>
      </div>
      {props.tabs?.length && props.tabs.length > 0
        ? props.tabs.map((tab, index) => (
            <div id="tab-render" className="bg-blue-300 p-2" key={tab.label}>
              <span className="block">{"Content container " + tab.label}</span>
              <Blocks
                blocks={tab.content}
                parent={props.builderBlock.id}
                path={`component.options.tabs.${index}.content`}
                context={props.builderContext}
                registeredComponents={props.builderContext?.componentInfos}
              />
            </div>
          ))
        : null}
      <Blocks
        blocks={props.externalContent}
        parent={props.builderBlock.id}
        path={`component.options.externalContent`}
        context={props.builderContext}
        registeredComponents={props.builderContext?.componentInfos}
      />
    </div>
  );
}
