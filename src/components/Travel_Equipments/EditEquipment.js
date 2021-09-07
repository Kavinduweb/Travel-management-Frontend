import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditEquipment = () => {
  let history = useHistory();
  const { id } = useParams();
  const [equipment, setEquipment] = useState({
    name: "",
    description: "",
    price: "",
  });

  const { name, description, price } = equipment;
  const onInputChange = e => {
    setEquipment({ ...equipment, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadEquipment();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8070/equipment/update/${id}`, equipment);
    history.push("/equipment/admin");
  };

  const loadEquipment = async () => {
    const result = await axios.get(`http://localhost:8070/equipment/get/${id}`);
    setEquipment(result.data.equipment);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit An Equipment</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Equipment Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter The Description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter The Price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Equipment</button>
        </form>
      </div>
    </div>
  );
};

export default EditEquipment;
