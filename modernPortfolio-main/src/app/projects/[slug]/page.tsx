import ClientPage from "./client-page";
import { portfolioData } from "@/lib/data";

export function generateStaticParams() {
    return portfolioData.projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function Page() {
    return <ClientPage />;
}
