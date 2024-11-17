'use client';
import useSWR from 'swr';
import { UserFormInterface } from '@/interfaces/user';
import { SignUpSkeleton } from '@/skeleton/sign-up';
import { FormPage, TablePage } from '@/pages/user';

export default function Home() {
    const { data, isLoading } = useSWR<UserFormInterface[]>('/api/user');
    if (isLoading) return <SignUpSkeleton />;
    return <>
        <FormPage />
        <TablePage data={data} />
    </>
}
