import { Button } from "@/core/components/ui/button";
import { IconLinkPlus } from "@tabler/icons-react";
import LinksToolbarSearch from "./links-toolbar-search";

const LinksToolbar = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <LinksToolbarSearch />
      <Button>
        Create Link
        <IconLinkPlus />
      </Button>
    </div>
  );
};

export default LinksToolbar;
