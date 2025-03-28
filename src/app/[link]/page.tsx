import { saveLinkInteraction } from "@/server/services/analytics";
import { getLinkByName } from "@/server/services/link";
import { permanentRedirect } from "next/navigation";

type Props = {
  params: Promise<{ link: string }>;
};

export default async function Page({ params }: Props) {
  const { link } = await params;
  
  let sourceLink;
  try {
    sourceLink = await getLinkByName(link);
  } catch {
    return <div>Link not found</div>;
  }

  // add analytics
  await saveLinkInteraction(sourceLink);

  // redirect
  permanentRedirect(sourceLink.url);
}
