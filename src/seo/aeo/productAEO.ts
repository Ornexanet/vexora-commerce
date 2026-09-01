import type { ProductType } from "@/mockData/products";

export type ProductAEOItem = {
  question: string;
  answer: string;
};

const getSpecification = (
  product: ProductType,
  labels: string[]
): string | undefined => {
  const specification = product.specifications?.find((item) =>
    labels.some(
      (label) =>
        item.label.toLowerCase() === label.toLowerCase()
    )
  );

  return specification?.value;
};

export function generateProductAEO(
  product: ProductType
): ProductAEOItem[] {
  const answers: ProductAEOItem[] = [];

  /* =====================================================
     1. WHAT IS THE PRODUCT?
  ===================================================== */

  answers.push({
    question: `Vad är ${product.title}?`,
    answer:
      product.overview ??
      product.description,
  });

  /* =====================================================
     2. WHO IS IT FOR?
  ===================================================== */

  const perfectFor =
    product.perfectFor?.length
      ? product.perfectFor
      : undefined;

  if (perfectFor) {
    answers.push({
      question: `Vem passar ${product.title} för?`,
      answer: `${product.title} passar särskilt bra för ${perfectFor
        .map((item) => item.toLowerCase())
        .join(", ")}.`,
    });
  }

  /* =====================================================
     3. KEY FEATURES
  ===================================================== */

  if (product.features?.length) {
    const features = product.features
      .slice(0, 4)
      .map((feature) => feature.title)
      .join(", ");

    answers.push({
      question: `Vilka är de viktigaste funktionerna i ${product.title}?`,
      answer: `Några av de viktigaste funktionerna i ${product.title} är ${features}.`,
    });
  }

  /* =====================================================
     4. BATTERY
  ===================================================== */

  const battery =
    product.battery ??
    getSpecification(product, [
      "Batteri",
      "Batteritid",
    ]);

  if (
    battery &&
    !battery.toLowerCase().includes("ingen inbyggd")
  ) {
    answers.push({
      question: `Hur är batteritiden på ${product.title}?`,
      answer: `${product.title} har ${battery.toLowerCase()}.`,
    });
  }

  /* =====================================================
     5. COMPATIBILITY
  ===================================================== */

  const compatibility = getSpecification(product, [
    "Kompatibilitet",
  ]);

  if (compatibility) {
    answers.push({
      question: `Vad är ${product.title} kompatibel med?`,
      answer: `${product.title} är kompatibel med ${compatibility}.`,
    });
  }

  /* =====================================================
     6. CAMERA
  ===================================================== */

  const camera =
    product.camera ??
    getSpecification(product, [
      "Kamera",
      "Huvudkamera",
    ]);

  if (camera) {
    answers.push({
      question: `Vilken kamera har ${product.title}?`,
      answer: `${product.title} har ${camera}.`,
    });
  }

  /* =====================================================
     7. DISPLAY
  ===================================================== */

  const display =
    product.display ??
    getSpecification(product, ["Skärm"]);

  if (display) {
    answers.push({
      question: `Vilken skärm har ${product.title}?`,
      answer: `${product.title} har ${display}.`,
    });
  }

  /* =====================================================
     8. STORAGE
  ===================================================== */

  const storage =
    product.storage ??
    getSpecification(product, ["Lagring"]);

  if (storage) {
    answers.push({
      question: `Hur mycket lagring har ${product.title}?`,
      answer: `${product.title} har ${storage} lagringsutrymme.`,
    });
  }

  /* =====================================================
     9. WARRANTY
  ===================================================== */

  if (product.warranty) {
    answers.push({
      question: `Vilken garanti har ${product.title}?`,
      answer: `${product.title} säljs med ${product.warranty}.`,
    });
  }

  /* =====================================================
     10. AVAILABILITY
  ===================================================== */

  if (product.availability) {
    answers.push({
      question: `Finns ${product.title} i lager?`,
      answer: `${product.title}: ${product.availability}.`,
    });
  }

  return answers;
}
