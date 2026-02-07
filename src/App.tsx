import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { ListingsPage } from '@/pages/ListingsPage';
import { ListingDetailPage } from '@/pages/ListingDetailPage';
import { MyListingsPage } from '@/pages/MyListingsPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { TermsPage } from '@/pages/TermsPage';
import { AccessibilityPage } from '@/pages/AccessibilityPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/listing/:mlsNumber" element={<ListingDetailPage />} />
          <Route path="/my-listings" element={<MyListingsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
