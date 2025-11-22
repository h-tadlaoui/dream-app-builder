import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ReportLost from "./pages/ReportLost";
import ReportFound from "./pages/ReportFound";
import ReportAnonymous from "./pages/ReportAnonymous";
import BrowseLost from "./pages/BrowseLost";
import BrowseFound from "./pages/BrowseFound";
import BrowseAnonymous from "./pages/BrowseAnonymous";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/report-lost" element={<ReportLost />} />
          <Route path="/report-found" element={<ReportFound />} />
          <Route path="/report-anonymous" element={<ReportAnonymous />} />
          <Route path="/browse-lost" element={<BrowseLost />} />
          <Route path="/browse-found" element={<BrowseFound />} />
          <Route path="/browse-anonymous" element={<BrowseAnonymous />} />
          <Route path="/history" element={<History />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
