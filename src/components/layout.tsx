import Footer from "./Footer";
import Header from "./Header";

export function Layout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
