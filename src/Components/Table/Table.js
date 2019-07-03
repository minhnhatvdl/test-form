import React from "react";
import {table} from "./Table.module.css"

const Table = ({ listUser }) => (
  <table className={table}>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>City</th>
        <th>Right</th>
      </tr>
    </thead>
    <tbody>
      {Array.isArray(listUser) && listUser.length > 0 ? (
        listUser.map(({ id, nom, prenom, ville, right }, index) => (
          <tr key={id}>
            <td>{index + 1}</td>
            <td>{prenom}</td>
            <td>{nom}</td>
            <td>{ville}</td>
            <td>{right}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="5">No data</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default Table;
