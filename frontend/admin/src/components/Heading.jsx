import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

import { SlPlus } from 'react-icons/sl';

export default function Heading({ title, handleShow }) {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center my-3">
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <Button size="sm" variant="primary" onClick={handleShow}>
            Create <SlPlus />
          </Button>
        </div>
      </div>
    </>
  );
}
