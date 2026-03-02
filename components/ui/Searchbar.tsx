"use client";
import { useState } from "react";

export default function SearchBar() {
    return (
        <div className="w-full flex justify-center my-4">
            <input
                className="w-1/2 bg-white text-black p-4 rounded-md"
                onChange={(e) => setSearchBarInput(e.target.value)}
                placeholder="Search posts..."
            ></input>
        </div>
    );
}
