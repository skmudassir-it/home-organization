import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects | ClutterFree Home Organization",
  description: "Browse our portfolio of home organization transformations — before and after projects across Portland and surrounding areas.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
