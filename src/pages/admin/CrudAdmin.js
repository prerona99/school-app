import React from 'react';
const TableComponent = ({ tableData = [], toEdit, toDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Date</th>
          <th>Time</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((ele, rowIndex) => {
          return (
            <tr key={`tr-${rowIndex}`}>
              <td>{ele.name}</td>
              <td>{ele.desc}</td>
              <td>{ele.date}</td>
              <td>{ele.time}</td>
              <td>
                <a href="#" onClick={(e) => toEdit(e, ele, rowIndex)}>
                  Edit
                </a>{' '}
                <a
                  href="#"
                  onClick={(e) => {
                    toDelete(e, rowIndex);
                  }}
                >
                  Delete
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
