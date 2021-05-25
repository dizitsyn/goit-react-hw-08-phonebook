import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import './ContactForm.scss';

class ContactForm extends Component {
 state = {
         name: "",
        number: "",
    }

   
   
    inputHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
    submitHandler = (e) => {
    e.preventDefault();
    this.props.addContact(this.state)
   };
   
   componentDidMount() {
     this.props.fetchContacts()
   }



    render() {
        return (
           <form onSubmit={this.submitHandler} className="ContactForm">
          <label>Name<input
            onChange={this.inputHandler}
            type="text"
              name="name"
              
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            /></label>
            
            <label>Tel
             
          <input
            onChange={this.inputHandler}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          /></label>
          <button type="submit">Add</button>
        </form>
        )
    }
}

 const mapDispatchToProps = dispatch => ({
   addContact: contact => dispatch(contactsOperations.addContact(contact)),
   fetchContacts: ()=>dispatch(contactsOperations.fetchContacts())
})


export default connect(null, mapDispatchToProps)(ContactForm);
