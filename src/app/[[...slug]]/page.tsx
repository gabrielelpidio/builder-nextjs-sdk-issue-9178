import {
  Content,
  fetchOneEntry,
  getBuilderSearchParams,
} from "@builder.io/sdk-react-nextjs";
import { tabsWithInfo } from "@/components/test.info";

interface MyPageProps {
  params: {
    slug?: string[];
  };
  searchParams: Record<string, string>;
}

const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY || "";

export default async function Page(props: MyPageProps) {
  const urlPath = `/${props.params.slug?.join("/") || ""}`;

  const content = await fetchOneEntry({
    model: "page",
    apiKey,
    options: getBuilderSearchParams(props.searchParams),
    userAttributes: { urlPath },
  });

  return (
    <Content
      enrich={true}
      apiVersion="v3"
      apiKey={apiKey}
      content={content}
      customComponents={[tabsWithInfo]}
      model="page"
    />
  );
}
