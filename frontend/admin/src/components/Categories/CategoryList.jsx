import { SlPencil, SlTrash } from "react-icons/sl";
import { useRemoveCategory } from "../../hooks/categories";

const ListItem = ({ item, index, onEdit }) => {
  const { deleteItem, deleted } = useRemoveCategory(item.id);

  if (deleted) return <></>;

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{item.name}</td>
      <td style={{ whiteSpace: "nowrap" }}>
        <button
          className="btn btn-sm btn-outline-primary me-2"
          onClick={() => onEdit(item)}
        >
          <SlPencil />
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={deleteItem}>
          <SlTrash />
        </button>
      </td>
    </tr>
  );
};

export default function CategoryList({ items, onEdit }) {
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th width="1">#</th>
          <th>Name</th>
          <th width="1">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => (
          <ListItem
            item={item}
            index={index + 1}
            key={`list-item-${index}`}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
}
