"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(10); // ✅ changed to 10

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=("robotics" OR "robot" OR "automation" OR "autonomous systems" OR "humanoid robot" OR "robotics research" OR "industrial robot")&language=en&sortBy=publishedAt&pageSize=100&apiKey=4f15414297104377871d0f09d08277b6`
        );

        const data = await res.json();
        console.log("data is" ,data)

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
            // ✅ discard if no image
            if (!item.title || !item.urlToImage || item.urlToImage.trim() === "") return false;

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

          console.log("formatted", formatted)

        setBlogs(formatted);
        console.log(blogs)
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-12 md:py-20 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          {/* ===================== WEEKLY NEWSLETTER ===================== */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
              Weekly Newsletter
            </h2>

            <Link
              href="/ras1.pdf"
              target="_blank"
              className="group flex flex-col md:flex-row bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-full md:w-1/2 h-64 md:h-80 overflow-hidden">
                <img
                  src="/weekly_nl.jpeg"
                  alt="Newsletter"
                  className="w-full h-full object-fit"
                />
              </div>

              <div className="p-6 md:p-10 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-3">
                  IEEE RAS Newsletter
                </span>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  What if your wheelchair could help you eat?
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Discover the future of assistive technology with a groundbreaking
                  robot-assisted feeding system designed for independence,
                  safety, and user control.
                </p>

                <span className="text-sm font-semibold text-purple-600">
                  Read Full Newsletter →
                </span>
              </div>
            </Link>
          </div>

          {/* ===================== BLOGS SECTION ===================== */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
              Blogs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {blogs.slice(0, visibleCount).map((blog) => (
                <a
                  key={blog.id}
                  href={blog.url}
                  target="_blank"
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="h-52 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                      {blog.title}
                    </h3>

                    <p className="text-sm text-gray-500 mb-4">
                      {blog.description}
                    </p>

                    <span className="text-sm font-semibold text-blue-600">
                      Read More →
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* LOAD MORE BUTTON */}
            {visibleCount < blogs.length && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 10)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                >
                  Load More
                </button>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}