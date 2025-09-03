'use client'

import Link from "next/link"
import { ShoppingCart } from "lucide-react";

export default function ShoppingCartIcon(){
    return(
        <div>
            <Link href={'/cart'}><ShoppingCart className="w-4 h-4 text-gray-600 relative"/>
                <span className="absolute -top-3 -right-3 bg-amber-400 text-gray-600 rounded-full w-4 h-4
                flex items-center justify-center text-xs font-medium">0</span>
            </Link>
        </div>
    )
}
