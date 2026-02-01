function Item({ name, category }) {
  return (
    <li className={category}>
      <span>{name}</span>
      <span className="category">{category}</span>
    </li>
  );
}

export default Item;