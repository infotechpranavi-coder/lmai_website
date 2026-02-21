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

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ type: string; id: string }> }
) {
    try {
        const { type, id } = await params;
        await dbConnect();
        const Model = models[type];
        if (!Model) return NextResponse.json({ error: 'Invalid type' }, { status: 400 });

        const body = await req.json();
        const updatedItem = await Model.findByIdAndUpdate(id, body, { new: true });
        return NextResponse.json(updatedItem);
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ type: string; id: string }> }
) {
    try {
        const { type, id } = await params;
        await dbConnect();
        const Model = models[type];
        if (!Model) return NextResponse.json({ error: 'Invalid type' }, { status: 400 });

        await Model.findByIdAndDelete(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
