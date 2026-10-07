import { redirect } from "next/navigation";

export const metadata = {
  title: "Free Business Tools — DukanHisab",
  description: "Free online business tools for Indian shopkeepers, including GST Calculator, invoice generator, and accounting utilities.",
};

export default function ToolsPage() {
  redirect("/tools/gst-calculator");
}
