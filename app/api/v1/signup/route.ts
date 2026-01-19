
import { prisma } from "../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){

    const data = await req.json();
    console.log(data);
    const user = await prisma.user.create({
        data:{
            username:data.user,
            password:data.password,
            
        }
    })

    return NextResponse.json({
      message: "done"
    })
}