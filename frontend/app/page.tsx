import Link from "next/link";
import { getNavigation } from "../lib/api";

export default async function HomePage() {
  const navigation = await getNavigation();

  return (
    <main style={{ padding: "24px" }}>
      <h1>Product Data Explorer</h1>

      <ul style={{ marginTop: "16px" }}>
        {navigation.map((item: any) => (
          <li key={item.id} style={{ marginBottom: "8px" }}>
            <Link href={`/category/${item.slug.replace("/collections/", "")}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
