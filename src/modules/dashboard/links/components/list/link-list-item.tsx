import { Card, CardContent, CardFooter } from "@/core/components/ui/card";
import { Link } from "@/server/types/link";
import {
    MousePointerClickIcon,
    PersonStandingIcon
} from "lucide-react";
import LinkListItemDetails from "./link-list-item-details";
import LinksStatisticsItem from "./link-statistics-item";

type Props = {
  link: Link;
};

const LinkListItem: React.FC<Props> = ({ link }) => {
  return (
    <Card>
      <CardContent>
        <LinkListItemDetails
          name={link.name}
          icon={link.icon}
          shortUrl={link.shortUrl}
          url={link.url}
        />
      </CardContent>
      <CardFooter>
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2">
            <LinksStatisticsItem
              icon={<PersonStandingIcon/>}
              suffix="Visitors"
              value={258}
            />
            <LinksStatisticsItem
              icon={<MousePointerClickIcon/>}
              suffix="Clicks"
              value={1520}
            />
          </div>
          <span className="text-base">
            {Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
              link.updatedAt
            )}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LinkListItem;
