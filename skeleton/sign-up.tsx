'use client';
import { Skeleton } from '@nextui-org/react';

export function SignUpSkeleton() {
    return (
        <>
            <div className='flex space-x-10 mb-5'>
                <Skeleton className="h-14 w-full rounded-large" />
                <Skeleton className="h-14 w-full rounded-large" />
                <Skeleton className="h-14 w-full rounded-large" />
            </div>
            <Skeleton className="h-10 w-full rounded-medium" />
            <Skeleton className="h-screen mt-5 mx-auto w-3/4 rounded-medium" />
        </>
    );
}
