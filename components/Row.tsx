import { TableCell, TableRow } from "@/components/ui/table"
import { User } from "@/lib/types"
import { useRouter } from "next/navigation"

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
      <TableCell className="text-right"></TableCell>
    </TableRow>
  )
}