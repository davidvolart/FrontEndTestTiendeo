import React from 'react';
import { connect } from 'react-redux'
import Item from '../Item/item';
import './index.css';


const Listado = ({items}) => (
    <div className="items">
      {items.map(item =>
        <Item item = {item}/>
      )}
    </div>
  )

const mapStateToProps = (state)=>({
    items: state
})

  
export default connect(mapStateToProps)(Listado)