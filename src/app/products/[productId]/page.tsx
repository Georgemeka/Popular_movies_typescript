import { Metadata } from "next";

interface productIdProps {
  params: { productId: string };
}

export const generateMetadata = async ({
  params,
}: productIdProps): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductId({ params }: productIdProps) {
  return <div>Product {params.productId}</div>;
}
