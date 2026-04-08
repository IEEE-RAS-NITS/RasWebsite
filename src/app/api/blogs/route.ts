import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=("robotics" OR "robot" OR "automation" OR "autonomous systems" OR "humanoid robot" OR "robotics research" OR "industrial robot")&language=en&sortBy=publishedAt&pageSize=100&apiKey=4f15414297104377871d0f09d08277b6`
    );

    const data = await res.json();

    const roboticsKeywords = [
      "robot",
      "robotics",
      "automation",
      "autonomous",
      "humanoid",
      "robot arm",
      "industrial robot",
      "AI robot",
      "machine learning robot",
    ];

    const bannedKeywords = [
      "sex",
      "celebrity",
      "movie",
      "entertainment",
      "fashion",
      "music",
      "dating",
      "adult",
      "politics",
      "crime",
    ];

    const formatted = data.articles
      .filter((item: any) => {
        if (!item.title || !item.urlToImage || item.urlToImage.trim() === "")
          return false;

        const text = (
          item.title +
          " " +
          (item.description || "")
        ).toLowerCase();

        const isRelevant = roboticsKeywords.some((keyword) =>
          text.includes(keyword)
        );

        const isClean = !bannedKeywords.some((word) =>
          text.includes(word)
        );

        return isRelevant && isClean;
      })
      .map((item: any, index: number) => ({
        id: index + 1,
        title: item.title,
        description:
          item.description || "No description available.",
        image: item.urlToImage,
        url: item.url,
      }));

    return NextResponse.json({ articles: formatted });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}