import './css/globals.css';
import ProductList from "./components/ProductList";
import PageFooter from "./layout/PageFooter";
import PageHeader from "./layout/PageHeader";
import { ShoppingCartContextProvider } from './providers/ShoppingCartProvider';
import ThemeContextProvider from './providers/ThemeContextProvider';

export default function Home() {
  return (
    <main className="home-page">
        <PageHeader />
        <ProductList />
        <PageFooter />
    </main>
  );
}
