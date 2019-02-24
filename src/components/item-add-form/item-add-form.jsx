import React, { Component } from 'react';
import './item-add-form.css';

class ItemAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const { name } = this.state;
    const { onAdded } = this.props;
    onAdded(name);
    this.changeName('');
  }

  changeName(name) {
    this.setState({
      name,
    });
  }

  render() {
    const { name } = this.state;

    return (
      <form
        className="item-add-form input-group mb-3"
        onSubmit={e => this.onSubmit(e)}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Todo's name"
          aria-label="Todo's name"
          value={name}
          onChange={e => this.changeName(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default ItemAddForm;
