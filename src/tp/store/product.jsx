export default function Product({ product }) {
  return (
    <>
      <tr>
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.description.slice(0, 200)}...</td>
        <td><span className="badge rounded-pill bg-black">{product.category}</span></td>
        <td>
          <img width={100} src={product.image} alt={product.title} />
        </td>
        <td>
          <span className="badge rounded-pill text-bg-success">
            {product.rating.rate}/5
          </span>
        </td>
      </tr>
    </>
  );
}
