import React,{Component} from 'react';
import './index.css';
import { connect } from 'react-redux'
import Actions from '../../redux/action'

class EditTarget extends Component{

    constructor(props){
        super(props);
        this.state={
            id : 0,
            title: this.props.item.title,
            description: this.props.item.description,
            url: this.props.item.url
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();

        this.props.onSubmit();
        
        const target = {
            id : this.props.item.id,
            title : this.state.title,
            description: this.state.description,
            url: this.state.url ? this.state.url : 'https://i.blogs.es/2b7c9a/moon-colors/450_1000.jpg'
        }

        this.props.update(target);
    }


    render(){
        return(
            
            <div className="formEdit">
                    <button id="cancelEdit" onClick={this.props.onSubmit}>Cancelar</button>
                    <h1>Editar tarjeta</h1>
                    <form
                        onSubmit={this.onSubmit}>
                        <div className="title">
                            <input id="title" type="text" name="title" placeholder="Titulo" value={this.state.title} onChange={this.onChange} required/>
                        </div>
                        <div className="description">
                            <input id="description" type="text" name="description" placeholder="Descripción" value={this.state.description} onChange={this.onChange} required/>
                        </div>
                        <div className="url">
                            <input id="url" type="text" name="url" placeholder="Imagen (Url)" value={this.state.url} onChange={this.onChange}/>
                        </div>
                        <div className="editTarget">
                            <button type="submit" >Guardar</button>
                        </div>
                    </form>
            </div>
        );
    }
}

const mapDispatchToProps= (dispatch)=> ({ 
    update:  target => dispatch(Actions.updateItem(target))
})

export default connect(null,mapDispatchToProps)(EditTarget)
