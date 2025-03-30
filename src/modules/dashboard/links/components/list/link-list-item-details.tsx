'use client';

import { useClipboard } from "@/core/hooks/use-clipboard";
import { useExternalLink } from "@/core/hooks/use-external-link";
import {
  IconCopy,
  IconCornerDownRight,
  IconExternalLink,
} from "@tabler/icons-react";
import { EllipsisIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

type Props = {
  name: string;
  icon: string;
  url: string;
  shortUrl: string;
};

const LinkListItemDetails: React.FC<Props> = ({
  icon,
  name,
  shortUrl,
  url,
}) => {
  const openExternalLink = useExternalLink();
  const {onCopy} = useClipboard();

  const onOpenLink = () => {
    openExternalLink(url, { newTab: true, noReferrer: true });
  };

  const onCopyLink = async () => {
      await onCopy(url)
      toast.success('Link copied to clipboard');
  }

  return (
    <div className="border border-card rounder-md flex justify-between items-center">
      <div className="flex gap-4 items-center justify-center">
        <Image
          src={icon}
          alt={name}
          width={48}
          height={48}
          style={{ objectFit: "cover" }}
        />

        <div className="flex flex-col justify-between items-start gap-1">
          <div className="flex gap-2 justify-center items-center">
            <span className="font-semibold text-base">{shortUrl}</span>
            <IconCopy className="w-4 h-4 cursor-pointer" onClick={onCopyLink}/>
            <IconExternalLink className="w-4 h-4 cursor-pointer" onClick={onOpenLink} />
          </div>
          <div className="flex gap-2">
            <IconCornerDownRight className="w-5 h-5" />
            <span className="text-muted-foreground">{url}</span>
          </div>
        </div>
      </div>
      <EllipsisIcon />
    </div>
  );
};

export default LinkListItemDetails;
