export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div style={{ padding: 50 }}>
      <h1>Slug:</h1>
      <h2>{slug}</h2>
    </div>
  );
}
