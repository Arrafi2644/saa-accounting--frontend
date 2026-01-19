"use client";

import { SearchForm } from "@/components/search-form";
import Sort from "@/components/Sort";
import CreateArticleModal from "./CreateArticleModal";

type Props = {
  onSearchChange?: (value: string) => void;
  onSortChange?: (value: string) => void;
};

export default function ArticleToolbar({
  onSearchChange,
  onSortChange,
}: Props) {
  return (
    <div className="flex items-center justify-between my-4">
      <div className="flex gap-4">
        <SearchForm onSearchChange={onSearchChange} />
        <Sort onChange={onSortChange} />
      </div>
      <CreateArticleModal />
    </div>
  );
}
