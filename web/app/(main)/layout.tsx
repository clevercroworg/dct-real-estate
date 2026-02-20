import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { VisitModalProvider } from '../../components/project/VisitModalContext';
import VisitModal from '../../components/project/VisitModal';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <VisitModalProvider>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <VisitModal />
    </VisitModalProvider>
  );
}
