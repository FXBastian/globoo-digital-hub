
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GlobooBankPage from "./pages/GlobooBankPage";
import GlobooExchangePage from "./pages/GlobooExchangePage";
import GlobooStockPage from "./pages/GlobooStockPage";
import GlobooEscrowPage from "./pages/GlobooEscrowPage";
import GlobooTokenizerPage from "./pages/GlobooTokenizerPage";
import GlobooCrowdfundingPage from "./pages/GlobooCrowdfundingPage";
import GlobooCommunityPage from "./pages/GlobooCommunityPage";
import GlobooConceptsPage from "./pages/GlobooConceptsPage";
import CryptoInfoPage from "./pages/CryptoInfoPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bank" element={<GlobooBankPage />} />
          <Route path="/exchange" element={<GlobooExchangePage />} />
          <Route path="/stock" element={<GlobooStockPage />} />
          <Route path="/escrow" element={<GlobooEscrowPage />} />
          <Route path="/tokenizer" element={<GlobooTokenizerPage />} />
          <Route path="/crowdfunding" element={<GlobooCrowdfundingPage />} />
          <Route path="/community" element={<GlobooCommunityPage />} />
          <Route path="/concepts" element={<GlobooConceptsPage />} />
          <Route path="/crypto-info" element={<CryptoInfoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
