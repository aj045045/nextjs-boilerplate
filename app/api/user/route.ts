'use server';
import { NextResponse, NextRequest } from 'next/server';
import { UserFormInterface } from '@/interfaces/user';
import {
    createErrorResponse,
    createDocument,
    fetchAllDocuments,
} from '@/lib/api-services';

export async function GET() {
    try {
        const data: UserFormInterface[] = await fetchAllDocuments<UserFormInterface>('user');
        return NextResponse.json(data);
    } catch {
        return createErrorResponse('Failed to fetch users');
    }
}

export async function POST(req: NextRequest) {
    try {
        const body: UserFormInterface = await req.json();
        if (!body.name || !body.email || !body.password) {
            return createErrorResponse('Missing required fields');
        }
        const newUser = await createDocument<UserFormInterface>('user', body);
        return NextResponse.json(newUser, { status: 201 });
    } catch {
        return createErrorResponse('User creation failed');
    }
}
