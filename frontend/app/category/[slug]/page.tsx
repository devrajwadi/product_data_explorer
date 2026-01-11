export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <main style={{ padding: "24px" }}>
      <h2>Category: {params.slug}</h2>
      <p>Products will be shown here.</p>
    </main>
  );
}
