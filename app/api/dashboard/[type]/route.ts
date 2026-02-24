import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Banner, Event, Award, Newsletter, Presentation, Member, Enquiry } from '@/lib/models';

const models: any = {
    banners: Banner,
    events: Event,
    awards: Award,
    newsletters: Newsletter,
    presentations: Presentation,
    members: Member,
    enquiries: Enquiry,
};

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ type: string }> }
) {
    try {
        const { type } = await params;
        await dbConnect();
        const Model = models[type];
        if (!Model) return NextResponse.json({ error: 'Invalid type' }, { status: 400 });

        const data = await Model.find({}).sort({ _id: -1 });
        return NextResponse.json(data);
    } catch (error) {
        console.error("GET Error [type]:", error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function POST(
    req: NextRequest,
    { params }: { params: Promise<{ type: string }> }
) {
    try {
        const { type } = await params;
        await dbConnect();
        const Model = models[type];
        if (!Model) return NextResponse.json({ error: 'Invalid type' }, { status: 400 });

        const body = await req.json();

        // Workaround: Apply default space for title/subtitle if empty to bypass cached Mongoose validation
        if (type === 'banners') {
            if (!body.title) body.title = ' ';
            if (!body.subtitle) body.subtitle = ' ';
        }

        const newItem = await Model.create(body);
        return NextResponse.json(newItem);
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
