import { NextResponse } from 'next/server';

let cart = [];

export async function GET() {
    return NextResponse.json(cart);
}

export async function POST(req) {
    let a = await req.json();
    cart.push(a)
    return NextResponse.json({message:'success'})
}