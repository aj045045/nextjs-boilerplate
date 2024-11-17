import { UserFormInterface } from "@/interfaces/user";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

export function TablePage({ data }: { data: UserFormInterface[] | undefined }) {
    const rows = data ?? [];
    return (
        <Table removeWrapper className="mt-5 mx-auto w-3/4">
            <TableHeader>
                <TableColumn>
                    Name
                </TableColumn>
                <TableColumn >
                    Email
                </TableColumn>
                <TableColumn>
                    Password
                </TableColumn>
            </TableHeader>
            <TableBody emptyContent={"No rows to display."}>
                {rows.map((user, index) => (
                    <TableRow key={index}>
                        <TableCell >
                            {user.name}
                        </TableCell>
                        <TableCell >
                            {user.email}
                        </TableCell>
                        <TableCell >
                            {user.password}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table >
    )
}