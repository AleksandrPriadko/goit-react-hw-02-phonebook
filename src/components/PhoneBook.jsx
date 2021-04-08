import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class Phonebook extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleChange = (e) => {
    //console.log(e.currentTarget);
    const { name, value } = e.currentTarget;
    this.setState({
      contacts: [
        {
          id: uuidv4(),
          name: value,
        },
      ],
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.contacts);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>

        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submite">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default Phonebook;
