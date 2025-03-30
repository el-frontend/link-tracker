import { Badge } from "@/core/components/ui/badge";
import { ReactElement } from "react";

type Props = {
  value: number;
  icon: ReactElement;
  suffix: string;
};

const LinksStatisticsItem: React.FC<Props> = ({ icon, suffix, value }) => {
  return (
    <Badge variant="outline" className="h-8 [&>svg]:size-5">
      {icon}
      {Intl.NumberFormat("en-US", { notation: "standard" }).format(value)}
      {suffix}
    </Badge>
  );
};

export default LinksStatisticsItem;
