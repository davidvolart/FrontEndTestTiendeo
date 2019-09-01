import React from 'react';
import { connect } from 'react-redux'
import Item from '../Item/item';
import './index.css';
import Actions from '../../redux/action';

const Listado = ({items, deleteFunction}) => (
    <div className="items">
      {items.map(item =>
        <Item item = {item} deleteFunction = {() => deleteFunction(item.id)}/>
      )}
    </div>
  )

const mapStateToProps = (state)=>({
    items: state
})

const mapDispatchToProps = (dispatch)=> ({ 
  deleteFunction:  id => dispatch(Actions.deleteItem(id))
})

  
export default connect(mapStateToProps,mapDispatchToProps)(Listado)