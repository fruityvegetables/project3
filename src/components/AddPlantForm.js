import React from "react";

class AddPlantForm extends React.Component {
    //for onSubmit
    createPlant = (event) => {
        //stop form from submitting
        event.preventDefault();
        console.log("GROWING GREEN GREEN PLANTS 🌱 ")
    }
    render() {
        return (
            <form className="plant-edit" onSubmit={this.createPlant}>
                    <input name="name" type="text" placeholder="Name" /> 
                    <input name="price" type="text" placeholder="Price" /> 
                    <select name="status">
                        <option value="Available">Available!</option>
                        <option value="Unavailable">Sold Out</option>
                    </select>

                    <textarea name="desc" placeholder="Desc" /> 
                    <input name="image" type="text" placeholder="Image" /> 
                    <button type="submit">+Add Plant</button>
            </form>
           
        );
    }

}  

export default AddPlantForm;