import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogPost {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
  readTime?: string;
}

const posts: BlogPost[] = [
  {
    id: "1",
    category: "Strategy",
    title: "Why Most Startups Keep Getting Design Wrong",
    description: "Many teams move fast on product but fall behind on design. This post breaks down why that happens, how it holds you back, and what to do instead.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    href: "/blog/design-strategy",
    readTime: "5 min read",
  },
  {
    id: "2",
    category: "Growth",
    title: "The Real Cost of Bad Design",
    description: "Poor design slows down decisions, clutters your message and stalls growth.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800",
    href: "/blog/cost-of-design",
  },
  {
    id: "3",
    category: "Operations",
    title: "How to Get More Done Without Hiring",
    description: "Lean teams are using design subscriptions to stay fast without hiring.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
    href: "/blog/lean-operations",
  },
  {
    id: "4",
    category: "Workflow",
    title: "What Working With RAS Looks Like",
    description: "A behind the scenes look at how founders use design subscriptions to move faster.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=800",
    href: "/blog/workflow",
  },
];

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none" className="shrink-0 transition-transform group-hover:translate-x-1">
      <path d="M11.5 1.77L17.79 8.25H0.44V9.66H17.79L11.5 16.14L12.46 17.13L18.89 10.51C19.29 10.09 19.51 9.54 19.51 8.95C19.51 8.37 19.29 7.81 18.89 7.4L12.46 0.78L11.5 1.77Z" fill="currentColor" />
    </svg>
  );
}

export default function BlogPage() {
  const [featured, ...others] = posts;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      
      <main className="py-12 md:py-20 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          <div className="mb-12 md:mb-16 text-center">
            <span className="inline-block px-4 py-1 mb-4 text-[10px] md:text-xs font-semibold tracking-widest uppercase bg-white border border-gray-200 rounded-full text-gray-500">
              Blog
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
              Practical reads to help <br className="hidden sm:block" />
              <span className="italic font-serif font-medium text-gray-700">you move faster.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
           
            <Link href={featured.href} className="group md:col-span-3 flex flex-col md:flex-row bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all hover:border-blue-500 hover:shadow-xl">
              <div className="w-full md:w-1/2 h-64 md:h-96 overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">{featured.category}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{featured.title}</h3>
                <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed line-clamp-3">{featured.description}</p>
                <div className="mt-auto flex items-center justify-between border-t pt-6 border-gray-100">
                  <span className="text-xs md:text-sm font-medium text-gray-400">● {featured.readTime}</span>
                  <span className="text-xs md:text-sm font-bold italic font-serif">by IEEE RAS</span>
                </div>
              </div>
            </Link>

           
            {others.map((post) => (
              <Link key={post.id} href={post.href} className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all hover:border-blue-500 hover:shadow-lg">
                <div className="h-52 md:h-56 overflow-hidden relative">
                  <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-800">
                    {post.category}
                  </div>
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-2">{post.description}</p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-blue-600">
                    Read Article <ArrowIcon />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
           
