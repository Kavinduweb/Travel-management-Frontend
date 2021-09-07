import React, {useState} from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddEquipment = () => {
    let history = useHistory();
    const [equipment, setEquipment] = useState({
      name: "",
      description: "",
      price: ""
    });
  
    const { name, description, price } = equipment;
    const onInputChange = e => {
      setEquipment({ ...equipment, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.post("http://localhost:8070/equipment/add", equipment);
      history.push("/equipment/admin");
    };
    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add Equipment</h2>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Name"
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Description"
                name="description"
                value={description}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter Price"
                name="price"
                value={price}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-block">Done</button>
          </form>
        </div>
      </div>
    );
};

export default AddEquipment;