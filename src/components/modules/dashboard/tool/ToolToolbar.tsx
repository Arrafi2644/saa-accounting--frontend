"use client";

import { SearchForm } from "@/components/search-form";
import Sort from "@/components/Sort";

type Props = {
  onSearchChange?: (value: string) => void;
  onSortChange?: (value: string) => void;
};

export default function ToolToolbar({ onSearchChange, onSortChange }: Props) {
  return (
    <div className="flex items-center justify-between my-4">
      {/* Search + Sort */}
      <div className="flex gap-4">
        <SearchForm onSearchChange={onSearchChange} />
        <Sort onChange={onSortChange} />
      </div>
    </div>
  );
}
