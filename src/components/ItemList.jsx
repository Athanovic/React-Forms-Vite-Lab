import Item from "./Item";

function ItemList({ items }) {
  return (
    <ul className="Items">
      {items && items.map((item, index) => (
        <Item key={index} name={item.name} category={item.category} />
      ))}
    </ul>
  );
}

export default ItemList;
