import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    
    // Check against env variable or fallback to new password
    const validPassword = process.env.PORTAL_PASSWORD || 'KemiPamatee#1';
    if (password === validPassword) {
      const response = NextResponse.json({ success: true });
      
      // Set an HTTP-only cookie that lasts for 7 days
      response.cookies.set({
        name: 'portal_auth',
        value: password,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7 // 7 days
      });
      
      return response;
    }
    
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
