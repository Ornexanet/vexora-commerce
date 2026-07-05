export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main style={{ padding: "80px", fontSize: "32px" }}>
      Dynamic route works: {slug}
    </main>
  );
}
