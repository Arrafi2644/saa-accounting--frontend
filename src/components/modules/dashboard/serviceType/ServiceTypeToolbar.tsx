import Sort from "@/components/Sort";
import { SearchForm } from "@/components/search-form";
import CreateServiceTypeModal from "./CreateServiceTypeModal";

const ServiceTypeToolbar = ({
  onSearchChange,
  onSortChange,
}: {
  onSearchChange: (value: string) => void;
  onSortChange: (value: string) => void;
}) => {
  return (
    <div className="my-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <SearchForm onSearchChange={onSearchChange} />
        <Sort onChange={onSortChange} />
      </div>

      <CreateServiceTypeModal />
    </div>
  );
};

export default ServiceTypeToolbar;
