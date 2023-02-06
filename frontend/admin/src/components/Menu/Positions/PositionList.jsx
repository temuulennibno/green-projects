import { useState } from 'react';
import { SlPencil, SlTrash } from 'react-icons/sl';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListItem = ({ item, index, onEdit }) => {
  const [deleted, setDeleted] = useState(false);

  const deleteItem = () => {
    axios
      .delete('http://localhost:8000/menu-positions/' + item.id)
      .then(() => {
        toast.success('Амжилттай устгалаа');
        setDeleted(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error('Алдаа гарлаа');
      });
  };

  if (deleted) return <></>;

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>
        <Link to={`/menu-positions/${item.id}`}>{item.name}</Link>
      </td>
      <td>{item.alias}</td>
      <td style={{ whiteSpace: 'nowrap' }}>
        <button className="btn btn-sm btn-outline-primary me-2" onClick={() => onEdit(item)}>
          <SlPencil />
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={deleteItem}>
          <SlTrash />
        </button>
      </td>
    </tr>
  );
};

export default function MenuPositionList({ items, onEdit }) {
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th width="1">#</th>
          <th>Name</th>
          <th>Alias</th>
          <th width="1">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => (
          <ListItem item={item} index={index + 1} key={`list-item-${index}`} onEdit={onEdit} />
        ))}
      </tbody>
    </table>
  );
}
