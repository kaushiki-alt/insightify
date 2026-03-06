import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { User } from "@/lib/types"
import { useRouter } from "next/navigation";

type UsersTableProps = {
  users: User[];
  sortKey : keyof User | null,
  sortDirection : 'asc'| 'desc',
  sortfn: (sortkey: keyof User) => void
}
export default function UsersTable({ users, sortfn, sortKey, sortDirection }: UsersTableProps) {
  const router = useRouter()
  return (
    <>
      {
        users.length < 1 ? (
          <h2 className="font-medium text-3xl p-2">No user found</h2>
        ) : (
          <>
            {users.length > 1 && (
              <h2 className='text-lg font-semibold tracking-tight capitalize'> {`${users.length} users`} </h2>
            )}

            <div className=" border  my-2 px-4 rounded-lg">
              <Table>
                <TableHeader>

                  <TableRow>
                    <TableHead onClick={() => sortfn('username')} className='cursor-pointer'>Username 
                    </TableHead>
                    <TableHead onClick={() => sortfn('firstName')} className='cursor-pointer'>Name</TableHead>
                    <TableHead onClick={() => sortfn('age')} className='cursor-pointer'>Age</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="text-right ">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => {
                    const { id, firstName, lastName, email, phone, age, gender, username, address, role } = user;
                    const name = `${firstName} ${lastName}`
                    return <TableRow key={id} onClick={() => router.push(`users/${id}`)}>
                      <TableCell className="font-medium">{username}</TableCell>
                      <TableCell>{name}</TableCell>
                      <TableCell>{age}</TableCell>
                      <TableCell>{gender}</TableCell>
                      <TableCell>{phone}</TableCell>
                      <TableCell>{email}</TableCell>
                      <TableCell>{address.country}</TableCell>
                      <TableCell>{role}</TableCell>
                      <TableCell className="text-right">{ }</TableCell>
                    </TableRow>
                  })}
                </TableBody>
              </Table>
            </div >
          </>
        )
      }
    </>
  )
}
