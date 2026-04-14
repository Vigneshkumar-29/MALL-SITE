import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { Suspense, lazy } from "react";
import DeckNav from "./components/layout/DeckNav";

// Code Splitting - Lazy load modules for massive performance gains
const DeckView = lazy(() => import("./pages/DeckView"));
const EventsModule = lazy(() => import("./pages/EventsModule"));
const SponsorshipModule = lazy(() => import("./pages/SponsorshipModule"));
const LeasingModule = lazy(() => import("./pages/LeasingModule"));

// Simple manual ScrollToTop since we deleted the old one
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <DeckNav />
      <Suspense fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#c9a96e] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<DeckView />} />
          <Route path="/events" element={<EventsModule />} />
          <Route path="/sponsorship" element={<SponsorshipModule />} />
          <Route path="/leasing" element={<LeasingModule />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
