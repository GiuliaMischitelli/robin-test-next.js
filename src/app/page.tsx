import ProductList from "./components/ProductList";
import PageFooter from "./layout/PageFooter";
import PageHeader from "./layout/PageHeader";

export default function Home() {
  return (
    <main className="home-page">
        <PageHeader />
        <ProductList />
        <PageFooter />
    </main>
  );
}
