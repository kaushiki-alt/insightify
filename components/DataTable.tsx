import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Column } from "@/lib/types"

type DataTableProps<T> = {
  data: T[]
  columns: Column<T>[]
  renderRow: (item: T) => React.ReactNode
  sortKey?: keyof T | null
  sortDirection?: "asc" | "desc"
  sortFn?: (key: keyof T) => void
}
export default function DataTable<T>({ data,
  columns,
  renderRow,
  sortFn, }: DataTableProps<T>) {
  return (
    <>
      {data.length > 0 && (
        <h2 className='text-lg font-semibold tracking-tight capitalize'> {`${data.length} items`} </h2>
      )}

      <div className=" border  my-2 px-4 rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={String(column.key)}
                  onClick={() => column.sortable && sortFn?.(column.key as keyof T)}
                  className={column.sortable ? 'cursor-pointer' : ''}
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => renderRow(item))}
          </TableBody>
        </Table>
      </div >
    </>
  )
}
