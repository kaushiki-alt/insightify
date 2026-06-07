import { TableCell, TableRow } from "@/components/ui/table"
import { User } from "@/lib/types"
import { useRouter } from "next/navigation"
import TableActions from "./TableActions"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Edit, MoreHorizontal, Trash, View } from "lucide-react"
import { Button } from "./ui/button"

type UserRowProps = {
  user: User
}

export default function Row({ user }: UserRowProps) {
  const router = useRouter()

  const { id, firstName, lastName, email, phone, age, gender, username, address, role } = user
  const name = `${firstName} ${lastName}`

  return (
    <TableRow onClick={() => router.push(`users/${id}`)}>
      <TableCell className="font-medium">{username}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{age}</TableCell>
      <TableCell>{gender}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{address.country}</TableCell>
      <TableCell>{role}</TableCell>
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={'outline'} size='icon-sm'>
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-30" align="start">
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={(e) => {
                e.stopPropagation();
                console.log("edit", id)
              }}>
                <Edit />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={(e) => {
                e.stopPropagation();
                console.log("delete", id)
              }}>
                <Trash />
                Delete
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push(`users/${id}`)}>
                <View />
                View
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

      </TableCell>

    </TableRow>
  )
}