import Sort from "@/components/Sort";
import { SearchForm } from "@/components/search-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ServiceToolbar = ({
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
 
       <Button>
        <Link href="/dashboard/service-management/create-service">Create Service</Link>
       </Button>
     </div>
  );
};

export default ServiceToolbar;
