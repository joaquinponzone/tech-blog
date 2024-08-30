import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get("image") as File;

    if (!imageFile) {
      return NextResponse.json({ error: "No image file provided" }, { status: 400 });
    }

    const blob = await put(imageFile.name, imageFile, {
      access: "public",
    });

    revalidatePath("/");

    return NextResponse.json({ success: true, blob });
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
  }
}