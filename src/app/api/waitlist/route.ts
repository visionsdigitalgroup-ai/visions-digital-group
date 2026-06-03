import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      company,
      businessType,
      employees,
      biggestChallenge,
      source,
    } = body;

    if (!name || !email || !company) {
      return NextResponse.json(
        {
          error:
            "Name, email and company are required",
        },
        {
          status: 400,
        }
      );
    }

    const { error } = await supabase
      .from("waitlist")
      .insert([
        {
          name,
          email,
          phone,
          company,
          business_type:
            businessType,
          employees,
          biggest_challenge:
            biggestChallenge,
          source:
            source ||
            "website",
        },
      ]);

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          error:
            error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Founder added successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}