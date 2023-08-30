import React from 'react';

const   Gallery = ({ data }) => {
  return (
    <div>
      <h2>Animal Species Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Family</th>
            <th>Order</th>
          </tr>
        </thead>
        <tbody>
          {data.map((animal, index) => (
            <tr key={index}>
              <td>{animal.name}</td>
              <td>{animal.class}</td>
              <td>{animal.family}</td>
              <td>{animal.order}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Gallery;
