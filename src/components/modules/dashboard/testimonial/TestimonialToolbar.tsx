import Sort from "@/components/Sort";
import { SearchForm } from "@/components/search-form";

const TestimonialToolbar = ({
  onSearchChange,
  onSortChange,
}: {
  onSearchChange: (value: string) => void;
  onSortChange: (value: string) => void;
}) => {
  return (
    <div className="my-4 flex items-center gap-4">
      <SearchForm onSearchChange={onSearchChange} />
      <Sort onChange={onSortChange} />
    </div>
  );
};

export default TestimonialToolbar;
