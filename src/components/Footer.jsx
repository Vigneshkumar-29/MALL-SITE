import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 bg-[#FAF9F6] dark:bg-stone-900 border-t border-surface-container mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-screen-2xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-serif text-[#2E4031] mb-6">Green Haven</div>
          <p className="text-xs font-body text-stone-600 dark:text-stone-400 leading-relaxed">
            Elevating the ritual of indoor gardening through curated specimens and refined aesthetics.
          </p>
        </div>
        <div className="flex flex-col gap-4 font-['Inter'] text-xs tracking-widest uppercase">
          <span className="text-stone-400 mb-2">Explore</span>
          <Link
            className="text-stone-600 dark:text-stone-400 hover:underline decoration-stone-300 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            to="/collection"
          >
            Shop
          </Link>
          <Link
            className="text-stone-600 dark:text-stone-400 hover:underline decoration-stone-300 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            to="/story"
          >
            Our Story
          </Link>
          <a
            className="text-stone-600 dark:text-stone-400 hover:underline decoration-stone-300 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="#"
          >
            Journal
          </a>
        </div>
        <div className="flex flex-col gap-4 font-['Inter'] text-xs tracking-widest uppercase">
          <span className="text-stone-400 mb-2">Client Services</span>
          <a
            className="text-stone-600 dark:text-stone-400 hover:underline decoration-stone-300 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="#"
          >
            Support
          </a>
          <a
            className="text-stone-600 dark:text-stone-400 hover:underline decoration-stone-300 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="#"
          >
            Wholesale
          </a>
          <a
            className="text-stone-600 dark:text-stone-400 hover:underline decoration-stone-300 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="#"
          >
            Care Guides
          </a>
        </div>
        <div className="flex flex-col gap-4 font-['Inter'] text-xs tracking-widest uppercase">
          <span className="text-stone-400 mb-2">Connect</span>
          <a
            className="text-stone-600 dark:text-stone-400 hover:underline decoration-stone-300 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="#"
          >
            Newsletter
          </a>
          <a
            className="text-stone-600 dark:text-stone-400 hover:underline decoration-stone-300 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="#"
          >
            Instagram
          </a>
          <a
            className="text-stone-600 dark:text-stone-400 hover:underline decoration-stone-300 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="#"
          >
            Pinterest
          </a>
        </div>
      </div>
      <div className="mt-20 px-12 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-surface-container pt-10">
        <div className="font-['Inter'] text-[10px] tracking-widest uppercase text-stone-400">
          © 2024 Green Haven Botanical Atelier
        </div>
        <div className="flex gap-8">
          <a
            className="font-['Inter'] text-[10px] tracking-widest uppercase text-stone-400 hover:text-primary transition-colors"
            href="#"
          >
            Privacy
          </a>
          <a
            className="font-['Inter'] text-[10px] tracking-widest uppercase text-stone-400 hover:text-primary transition-colors"
            href="#"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
