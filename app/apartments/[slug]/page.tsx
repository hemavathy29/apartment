import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApartmentDetailClient from "@/components/ApartmentDetailClient";
import { apartments, getApartmentBySlug } from "@/lib/apartments";
import type { Metadata } from "next";

export function generateStaticParams() {
  return apartments.map((apt) => ({ slug: apt.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const apt = getApartmentBySlug(slug);
  if (!apt) return {};
  return {
    title: `${apt.name} | Apartment Service Chennai`,
    description: apt.description,
  };
}

export default async function ApartmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const apt = getApartmentBySlug(slug);
  if (!apt) notFound();

  return (
    <>
      <Navbar />
      <main>
        <ApartmentDetailClient apt={apt} />
      </main>
      <Footer />
    </>
  );
}
