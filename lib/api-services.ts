import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Document, OptionalUnlessRequiredId, WithId } from 'mongodb';

// Fetch all documents with proper typing
export async function fetchAllDocuments<T extends Document>(
    collectionName: string
): Promise<WithId<T>[]> {
    const { db } = await connectToDatabase();
    return db.collection<T>(collectionName).find({}).toArray();
}

// Create a document with corrected type and explicit return type
export async function createDocument<T extends Document>(
    collectionName: string,
    data: OptionalUnlessRequiredId<T>
): Promise<WithId<T>> {
    const { db } = await connectToDatabase();
    const result = await db.collection<T>(collectionName).insertOne(data);
    return { ...data, _id: result.insertedId } as WithId<T>;
}

// Utility function for error response
export function createErrorResponse(message: string) {
    return NextResponse.json({ error: message }, { status: 500 });
}
