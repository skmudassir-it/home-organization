import type { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | ClutterFree Home Organization",
  description: "Explore our full range of professional home organizing services — from whole-home decluttering to closet design, garage makeovers, and move management.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
