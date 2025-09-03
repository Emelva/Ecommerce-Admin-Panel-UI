'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter(){
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    function handleFilter(value:string){
        const params = new URLSearchParams(searchParams);
        params.set("sort", value);
        router.push(`${pathname}? ${params.toString()}`, {scroll: false})
    }
    return(
        <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6">
            <span>Sort by:</span>
            <select className="ring-1 ring-gray-200 shadow-md p-1 rounded-sm"
            onChange={() => handleFilter(e.target.value)} name="sort" id="sort">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
        </div>
    )
}