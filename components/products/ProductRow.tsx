'use client'
import { TableCell, TableRow } from "@/components/ui/table"
import { Product } from "@/lib/types"
import { useRouter } from "next/navigation"
import TableActions from "../TableActions"
import { Badge } from "@/components/ui/badge"

type StockBadgeProps = {
    stock: number
}

export function StockBadge({ stock }: StockBadgeProps) {
    if (stock === 0) {
        return (
            <Badge variant="destructive">
                🔴 Out of Stock
            </Badge>
        )
    }

    if (stock <= 10) {
        return (
            <Badge className="bg-yellow-500/20 hover:bg-yellow-500/40 text-yellow-500">
                🟡 Low Stock
            </Badge>
        )
    }

    return (
        <Badge className="bg-green-600/20 hover:bg-green-600/40 text-green-600">
            🟢 In Stock
        </Badge>
    )
}

type ProductRowProps = {
    product: Product
}



export default function Row({ product }: ProductRowProps) {
    const router = useRouter()

    const { id, title, category, brand, price, stock, thumbnail, rating } = product;

    return (
        <TableRow onClick={() => console.log('row clicked')}>
            <TableCell className="font-medium"><img src={thumbnail} alt={title} width='200px' /></TableCell>
            <TableCell>{title || "--"}</TableCell>
            <TableCell>{category || "--"}</TableCell>
            <TableCell>{brand || "--"}</TableCell>
            <TableCell>{price || "--"}</TableCell>
            <TableCell>{rating || "--"}</TableCell>
            <TableCell>
                <div className="flex flex-col items-center gap-2">
                    <span>{stock}</span>
                    <StockBadge stock={stock} />
                </div>
            </TableCell>
            <TableCell className="text-right">
                <TableActions
                    onView={() => router.push(`/app/products/${id}`)}
                    onEdit={() => console.log("edit", id)}
                    onDelete={() => console.log("delete", id)}
                />
            </TableCell>
        </TableRow>
    )
}