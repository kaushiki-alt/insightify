import KpiCard from "@/components/dashboard/KpiCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DetailRow, UserAddressCard, UserBankCard, UserDetailCard } from "@/components/users/UserDetailCard";
import { ExtendedUser, User } from "@/lib/types";
import { getUserByID } from "@/lib/utils";
import { ActivityIcon, LineChartIcon } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

async function UserDetails({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const userID = Number(id);

    const base_url = `https://dummyjson.com/users`;

    const user = await getUserByID(base_url, userID);
    console.log(user);

    const { email, username, image, status, createdAt, lastLogin } = user
    const createdAtDate = new Date(createdAt).toLocaleDateString();
    const lastLoginDate = new Date(lastLogin).toLocaleDateString();
    return (
        <Card className="p-4 md:p-8">
            <CardContent className="intro flex gap-4 items-center justify-left p-0">
                <img src={image} alt='user profile' width="80" height="80" />
                <div className="details flex flex-col gap-1">
                    <h2 className="text-xl font-semibold text-primary/90">{username}</h2>
                    <p
                        className=" text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full break-all text-center max-w-full" >
                        {email}
                    </p>
                </div>
            </CardContent>

            <CardContent className="personals p-0 mt-4">
                <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
                    <UserDetailCard user={user} />
                    <div className="flex flex-col gap-4">
                        <UserAddressCard user={user} />
                        <UserBankCard user={user} />
                    </div>
                </div>
            </CardContent>

            <Card className="stats gap-3">
                <CardHeader className="flex gap-1 items-center">
                    <ActivityIcon className="size-5 text-muted-foreground" />
                    <CardTitle> Account Overview</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-col-2 lg:grid-cols-3 gap-2">
                    <KpiCard title="Status" data={status === 'active' ?
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300 font-medium text-md px-3">
                            {status}
                        </Badge> :
                        status === 'pending' ?
                            <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                                {status}
                            </Badge> :
                            <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
                                {status}
                            </Badge>} />
                    <KpiCard title="Created at" data={createdAtDate} />
                    <KpiCard title="Last Login at" data={lastLoginDate} />
                </CardContent>
            </Card>
        </Card>
    );
}
export default UserDetails;

// skeleton
// a common error page
// add edit functionality


//  --> (switch to main)
// add breadcrumbs
// change g volor to the sidebar and navbar
// improve the Ui of KPi cards

// collapse in mobile screen
