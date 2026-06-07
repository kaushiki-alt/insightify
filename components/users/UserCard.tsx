import { User } from '@/lib/types'
import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Edit, MoreVertical, Trash, View } from 'lucide-react'
import { Button } from '../ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'


const UserCard = ({ user }: { user: User }) => {
    const router = useRouter()
    const { id, image, lastName, firstName, username, age, gender, role } = user
    const name = firstName + " " + lastName
    return (
        <Card className='px-4 p-2 flex flex-row items-center justify-between' onClick={() => router.push(`users/${id}`)}>
            <div className="flex items-center gap-4">
                <div className='bg-accent p-2 rounded-lg w-fit'>
                    <Image src={image} height={25} width={25} alt='user-profile' />
                </div>
                <div className="">
                    <h3 className="font-semibold my-0 text-primary/60">{username}</h3>
                    <h4 className="my-0 text-muted-foreground text-sm">{name}</h4>
                    <p className="text-xs text-muted-foreground/80 mt-1 capitalize">
                        {[age, gender, role]
                            .filter(Boolean)
                            .join(" • ")}
                    </p>
                </div>

            </div>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={'outline'} size='icon-sm'>
                        <MoreVertical className="size-4" />
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
        </Card>
    )
}

export default UserCard
