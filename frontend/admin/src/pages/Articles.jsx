import { useState } from 'react';
import PostCreate from '../components/Blogs/PostCreate';
import PostList from '../components/Blogs/PostList';
import Heading from '../components/Heading';
import DynamicModal from '../components/utils/DynamicModal';

export default function Articles() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container-sm body-container">
        <Heading title="Blog posts" handleShow={handleShow} />
        <PostList />
      </div>
      <DynamicModal show={show} handleClose={handleClose} title="Create post" content={<PostCreate />} />
    </>
  );
}
