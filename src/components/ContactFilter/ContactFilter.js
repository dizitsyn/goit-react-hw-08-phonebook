import React from 'react';
import { connect } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';
import contactSelectors from '../../redux/contacts/contacts-selectors';

function CobtactFilter({ filterHandler, filter }) {
  return (
    <label>
      find
      <input value={filter} onChange={filterHandler} />
    </label>
  );
}

const mapStateToProps = state => ({
  value: contactSelectors.filterValue(state),
});

const mapDispatchToProps = dispatch => ({
  filterHandler: e => dispatch(contactActions.filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CobtactFilter);
