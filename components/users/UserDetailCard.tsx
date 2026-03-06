import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { User } from "@/lib/types";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Edit } from "lucide-react";

const DetailRow = ({ value, label }: { value: React.ReactNode, label: string }) => {
    return (
        <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground capitalize">{label}</p>
            <div className="font-medium">{value}</div>
        </div>
    )
}

export const UserDetailCard = ({ user }: { user: User }) => {
    const {
        email,
        phone,
        firstName,
        lastName,
        age,
        gender,
        username,
        role,
    } = user;

    const name = `${firstName} ${lastName}`;

    const details = [
        { label: "Full Name", value: name },
        { label: "Email", value: email ?? "—" },
        { label: "Phone", value: phone ?? "—" },
        { label: "Username", value: username ?? "—" },
        { label: "Age", value: age },
        { label: "Gender", value: gender },
        { label: "Role", value: role },
    ];

    return (
        <Card className="w-full bg-card">
            <CardHeader>
                <CardTitle>Personal Details</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                {details.map((item, index) => (
                    <React.Fragment key={item.label}>
                        <DetailRow label={item.label} value={item.value} />
                        {index < details.length - 1 && <Separator className="my-4" />}
                    </React.Fragment>
                ))}

                <div className='justify-self-end align-bottom'>
                    <Button variant="outline" size="sm">
                        <Edit size={16} />
                        Edit
                    </Button>
                </div>

            </CardContent>
        </Card>
    );
};

export const UserAddressCard = ({ user }: { user: User }) => {
    const { address } = user;

    const addressDetails = [
        { label: "Street", value: address?.address ?? "—" },
        { label: "City", value: address?.city ?? "—" },
        { label: "State", value: address?.state ?? "—" },
        { label: "Postal Code", value: address?.postalCode ?? "—" },
    ];

    return (
        <Card className="w-full bg-card">
            <CardHeader>
                <CardTitle>Address Details</CardTitle>
            </CardHeader>
            <CardContent className="p-6 py-4">
                {addressDetails.map((item, index) => (
                    <React.Fragment key={item.label}>
                        <DetailRow label={item.label} value={item.value} />
                        {index < addressDetails.length - 1 && (
                            <Separator className="my-2" />
                        )}
                    </React.Fragment>
                ))}
            </CardContent>
        </Card>
    );
};

export const UserBankCard = ({ user }: { user: User }) => {
    const { bank } = user;

    if (!bank) return null;

    // Mask card number
    const maskedCard = `•••• •••• •••• ${bank.cardNumber.slice(-4)}`;

    const bankDetails = [
        { label: "Card Type", value: bank.cardType },
        { label: "Card Number", value: maskedCard },
        { label: "Expiry Date", value: bank.cardExpire },
        { label: "Currency", value: bank.currency },
    ];

    return (
        <Card className="w-full bg-card">
            <CardHeader>
                <CardTitle>Bank Details</CardTitle>
            </CardHeader>
            <CardContent className="p-6 py-4">
                {bankDetails.map((item, index) => (
                    <React.Fragment key={item.label}>
                        <DetailRow label={item.label} value={item.value} />
                        {index < bankDetails.length - 1 && (
                            <Separator className="my-2" />
                        )}
                    </React.Fragment>
                ))}
            </CardContent>
        </Card>
    );
};