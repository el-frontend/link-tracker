import { Link } from "@/server/types/link";
import LinkList from "../components/list/link-list";
import LinksToolbar from "../components/toolbar/links-toolbar";

type Props = {
  links: Link[];
};

const LinksContainer: React.FC<Props> = ({ links }) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
          <LinksToolbar />
          <LinkList links={links} />
        </div>
      </div>
    </div>
  );
};

export default LinksContainer;
