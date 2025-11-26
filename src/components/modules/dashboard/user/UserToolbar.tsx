"use client";

import { useState } from "react";
import { SearchForm } from "@/components/search-form";
import RegisterModal from "@/components/modules/dashboard/user/RegisterModal";
import Sort from "@/components/Sort";

type UserToolbarProps = {
    onSearchChange?: (value: string) => void;
    onSortChange?: (value: string) => void;
};

export default function UserToolbar({ onSearchChange, onSortChange }: UserToolbarProps) {

    return (
        <div className="flex items-center justify-between gap-2 w-full my-4">
            <div className="flex items-center gap-4">

                {/* Search */}
                <SearchForm onSearchChange={onSearchChange} />

                {/* Sort */}
                <Sort onChange={onSortChange} />
            </div>
            {/* Register User Modal */}
            <RegisterModal />
        </div>
    );
}
