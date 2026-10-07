import "./globals.css";

export const metadata = {
  title: "DukanHisab — Your Business Has a Memory | Connected Shop Accounting & POS",
  description: "DukanHisab connects every sale, purchase, barcode scan, customer, supplier, payment, and expense in one smart ecosystem with Mobile App and Web Panel.",
  keywords: ["DukanHisab", "shop management", "kirana billing", "POS system", "inventory management", "business accounting", "barcode billing"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}
