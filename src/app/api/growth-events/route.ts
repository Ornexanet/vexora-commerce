
import { NextResponse } from "next/server";
export async function POST(request: Request)
{
    try{
   const body = await request.json();
   console.log("Growth Event Recevied:", 
   body)
   return NextResponse.json({
    success: true,
    massage: "Event received successfully",
   });
} catch {
    return NextResponse.json(
{
    success: false,
    message: "Invalid JSON",
},
{ status: 400 }
    );
}
}