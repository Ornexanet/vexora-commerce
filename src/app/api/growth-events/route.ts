
import { NextResponse } from "next/server";
import {Redis} from "@upstash/redis";

const redis = Redis.fromEnv();

const allowedEvent = [
    "product_viewed",
    "add_to_cart",
    "add_to_wishlist",
    "checkout_started",
    "purchase_completed",
    "hero_pagination_clicked",
    "experiment_exposure",
    "landing_cta_clicked",

];
export async function POST(request: Request)
{
    try{
   const body = await request.json();
   if(
    typeof body?.event !== "string" ||
    !allowedEvent.includes(body.event)
   ){
    return NextResponse.json(
        {
            succes: false,
            message: "Invalid growth event",
        },
        {status: 400 }
    );
    }
    await redis.lpush(
        "growth:v2:events",
        JSON.stringify(body)
    );
   
   console.log("Growth Event Recevied:", 
   body)
   return NextResponse.json({
    success: true,
    massage: "Event received successfully",
   });
} catch (error) {
  console.error("Growth API Error:", error);

    return NextResponse.json(
{
    success: false,
    message: "Invalid JSON",
},
{ status: 400 }
    );
}
}