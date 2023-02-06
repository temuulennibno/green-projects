import { SlPencil, SlTrash } from 'react-icons/sl';

const ListItem = ({ item, index }) => {
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td style={{ whiteSpace: 'nowrap' }}>
        <button className="btn btn-sm btn-outline-primary me-2">
          <SlPencil />
        </button>
        <button className="btn btn-sm btn-outline-danger">
          <SlTrash />
        </button>
      </td>
    </tr>
  );
};

export default function PostList() {
  const items = [
    { name: 'How to become', description: '...' },
    { name: 'You should', description: '...' },
    { name: 'Entire class is', description: '...' },
  ];
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th width="1">#</th>
          <th>Name</th>
          <th>Description</th>
          <th width="1">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <ListItem item={item} index={index + 1} key={`list-item-${index}`} />
        ))}
      </tbody>
    </table>
  );
}
