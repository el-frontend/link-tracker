"use client";

import { Input } from "@/core/components/ui/input";
import useDebounce from "@/core/hooks/use-debounce";
import { IconSearch } from "@tabler/icons-react";
import { ChangeEvent, useEffect, useState } from "react";

const LinksToolbarSearch = () => {
  const [search, setSearch] = useState("");
  const debounceValue = useDebounce<string>(search, 200);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    console.log("change url search");
  }, [debounceValue]);

  return (
    <div className="relative">
      <IconSearch className="absolute top-2 left-3 w-5 h-5 text-muted-foreground" />
      <Input
        placeholder="Search for Link"
        onChange={handleChange}
        value={search}
        className="min-w-64 pl-9"
      />
    </div>
  );
};

export default LinksToolbarSearch;
