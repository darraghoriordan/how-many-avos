type MenuItemProps = {
  name: string;
  plural: string;
  price: number;
  description: string;
  housePriceIncrease: number;
};

export default function MenuItem({ name, plural, price, description, housePriceIncrease }: MenuItemProps) {
  const itemEquivalent = housePriceIncrease / price;
  const direction = itemEquivalent < 0 ? "fewer" : "more";

  return (
    <article className="menu-item">
      <div className="menu-item__title">
        <h3>{name}</h3>
        <span>${price.toFixed(2)}</span>
      </div>
      <p>{description}</p>
      <p className="menu-item__equivalent">
        That’s <strong>{Math.abs(itemEquivalent).toFixed(2)}</strong> {direction} {plural} today
      </p>
    </article>
  );
}
