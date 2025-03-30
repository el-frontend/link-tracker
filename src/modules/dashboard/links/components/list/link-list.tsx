import { Link } from "@/server/types/link";
import LinkListItem from "./link-list-item";

type Props = {
  links: Link[];
};

const LinkList: React.FC<Props> = ({ links }) => {
  return (
    <div className="flex flex-col gap-2">
      {links.map((link, key) => (
        <LinkListItem link={link} key={`${link.id}-${key}`} />
      ))}
    </div>
  );
};

export default LinkList;
