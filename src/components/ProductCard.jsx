function ProductCard() {
  return (
    <div className="text-3xl font-bold underline">
      {
          products.products.map(elemento => (
            <ProductCard />
          ))
        }
    </div>
  );
}

export default ProductCard;