import { query } from '@/db/db';
import { NextResponse } from 'next/server';


export async function GET() {
  try {
    const result = await query('SELECT 1 AS connection_test');
    if (result.rows[0]?.connection_test === 1) {
      return NextResponse.json({ message: "Database connection OK ✅" });
    } else {
      throw new Error("Unexpected query result");
    }
  } catch (error) {
    console.error('Error connecting to database:', error);
    return NextResponse.json({ error: 'Database connection failed' }, { status: 500 });
  }
}
