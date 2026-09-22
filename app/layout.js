import "./globals.css";

export const metadata = {
  title: "DukanHisab — Your Business Has a Memory | Connected Shop Accounting & POS",
  description: "DukanHisab connects every sale, purchase, barcode scan, customer, supplier, payment, and expense in one smart ecosystem with Mobile App and Web Panel.",
  keywords: ["DukanHisab", "shop management", "kirana billing", "POS system", "inventory management", "business accounting", "barcode billing"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
