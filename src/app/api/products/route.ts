import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");

  try {
    let products;

    if (cat) {
      products = await prisma.product.findMany({
        where: {
          catSlug: cat,
        },
        // take: 6, // Burada sadece 6 öğe çekilecek.
      });
    } else {
      products = await prisma.product.findMany({
        where: {
          isFeatured: true,
        },
        // take: 6, // Burada sadece 6 öğe çekilecek.
      });
    }

    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

export const POST = () => {
  return new NextResponse("Hello", { status: 200 });
};
