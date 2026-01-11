export async function getNavigation() {
  const res = await fetch("http://localhost:4000/navigation", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch navigation");
  }

  return res.json();
}
