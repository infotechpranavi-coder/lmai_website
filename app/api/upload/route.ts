import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    folder: process.env.CLOUDINARY_FOLDER || 'lmai',
                },
                (error, result) => {
                    if (error) {
                        console.error('Cloudinary upload error:', error);
                        resolve(NextResponse.json({ error: 'Upload failed' }, { status: 500 }));
                    } else {
                        resolve(NextResponse.json({ url: result?.secure_url }));
                    }
                }
            );

            uploadStream.end(buffer);
        });
    } catch (error) {
        console.error('Upload API error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
