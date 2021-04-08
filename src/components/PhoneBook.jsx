import React, { Component } from "react";

class Phonebook extends Component {
  state = {
    contacts: [],
    name: "",
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>

        <form action="">
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <button type="submite">Add contact</button>
        </form>
      </div>
    );
  }
}

export default Phonebook;
