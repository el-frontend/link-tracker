import LinksContainer from "@/modules/dashboard/links/containers/links-container";
import { getLinks } from "@/server/services/link";
import { Link } from "@/server/types/link";

export default async function Page() {
  let links: Link[] = [];
  try {
    links = await getLinks();
  } catch (e) {
    console.log(e);
  }

  return <LinksContainer links={links} />;
}
