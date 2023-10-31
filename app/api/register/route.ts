import connectToDB from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    await connectToDB();
    const isUserAlready = await User.findOne({ email: email });
    if (isUserAlready) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 500 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ email, password: hashedPassword });
    return NextResponse.json({ message: 'User registered.' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred while registering the user.' },
      { status: 500 }
    );
  }
}
