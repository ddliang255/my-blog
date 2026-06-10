import Image from "next/image";
// 直接用 SVG 图标，避免 lucide-react 引入问题
const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
const Calendar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);
const Tag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.828 8.828a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>
);

// 文章数据（后续可替换为 CMS 或 API）
const posts = [
  {
    id: 1,
    title: "我的前端学习之路",
    excerpt: "从零开始学习 HTML、CSS、JavaScript，到用 React 和 Next.js 构建完整项目的心路历程。",
    date: "2026-06-10",
    tags: ["前端", "学习"],
    cover: "/blog/cover-1.jpg",
  },
  {
    id: 2,
    title: "用 Vue 3 开发漫剧正反转应用",
    excerpt: "同一个故事，两种真相。如何用代码实现互动叙事，让读者的选择改变剧情走向。",
    date: "2026-06-09",
    tags: ["Vue", "项目"],
    cover: "/blog/cover-2.jpg",
  },
  {
    id: 3,
    title: "股票数据可视化大屏实战",
    excerpt: "用 Vite + Vue 搭建实时数据大屏，ECharts 图表配置与性能优化笔记。",
    date: "2026-06-08",
    tags: ["数据可视化", "Vue"],
    cover: "/blog/cover-3.jpg",
  },
];

// 标签颜色
const tagColors: Record<string, string> = {
  前端: "bg-blue-100 text-blue-700",
  学习: "bg-green-100 text-green-700",
  Vue: "bg-emerald-100 text-emerald-700",
  项目: "bg-purple-100 text-purple-700",
  "数据可视化": "bg-orange-100 text-orange-700",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* ===== 顶部导航 ===== */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto max-w-4xl flex items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
           咕噜小亮的博客
          </a>
          <div className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="/posts" className="transition hover:text-zinc-900 dark:hover:text-zinc-100">文章</a>
            <a href="/about" className="transition hover:text-zinc-900 dark:hover:text-zinc-100">关于</a>
            <a href="/rss.xml" className="transition hover:text-zinc-900 dark:hover:text-zinc-100">RSS</a>
          </div>
        </div>
      </nav>

      {/* ===== Hero ===== */}
      <section className="relative mx-auto max-w-4xl px-6 py-24 text-center overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-950" />
          {/* 网格点阵背景 */}
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        {/* 头像 */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* 头像外圈光晕 */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur-sm animate-pulse" />
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-zinc-900">
              <Image
                src="/avatar-anime.svg"
                alt="咕噜小亮"
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
            {/* 在线状态 */}
            <div className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-4 border-white bg-green-500 dark:border-zinc-900" />
          </div>
        </div>

        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-1.5 text-sm text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          正在书写 · 2026
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
          记录学习，记录成长
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          前端开发 · Web 应用 · 数据可视化 · 偶尔写点代码以外的思考
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/posts"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            浏览文章 <ArrowRight size={16} />
          </a>
          <a
            href="/about"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-100 dark:hover:text-zinc-100"
          >
            关于我
          </a>
        </div>
      </section>

      {/* ===== 最新文章 ===== */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">最新文章</h2>
          <a href="/posts" className="text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
            查看全部 →
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:border-zinc-900/20 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-100/20"
            >
              {/* 封面图占位 */}
              <div className="aspect-video bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center text-4xl dark:from-zinc-800 dark:to-zinc-900">
                📝
              </div>

              <div className="flex flex-1 flex-col p-6">
                {/* 标签 */}
                <div className="mb-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${tagColors[tag] || "bg-zinc-100 text-zinc-700"}`}
                    >
                      <Tag /> {tag}
                    </span>
                  ))}
                </div>

                {/* 标题 */}
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-400">
                  <a href={`/posts/${post.id}`}>{post.title}</a>
                </h3>

                {/* 摘要 */}
                <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {post.excerpt}
                </p>

                {/* 日期 */}
                <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
                  <Calendar /> {post.date}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-4xl flex flex-col items-center gap-4 px-6 py-12 text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © 2026 咕噜小亮的博客 · Built with Next.js & Tailwind CSS
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="https://github.com" className="transition hover:text-zinc-900 dark:hover:text-zinc-100">GitHub</a>
            <a href="https://twitter.com" className="transition hover:text-zinc-900 dark:hover:text-zinc-100">Twitter</a>
            <a href="mailto:hello@example.com" className="transition hover:text-zinc-900 dark:hover:text-zinc-100">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
