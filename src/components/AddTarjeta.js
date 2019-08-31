import React,{Component} from 'react';
import '../App.css';
import { connect } from 'react-redux'
import Actions from '../redux/action'

class addTarget extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            id : 0,
            title:'',
            description:'',
            url:'' 
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();

        const target = {
            title : this.state.title,
            description: this.state.description,
            url: this.state.url ? this.state.url : 'https://i.blogs.es/2b7c9a/moon-colors/450_1000.jpg'
        }

        this.props.create(target);
        
        this.setState({
            title: '',
            description:'',
            url:''
        });
    }

    render(){
        return(
            <div className="form">
                <h1>Nueva tarjeta</h1>
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
                    <div className="addTarget">
                        <button type="submit" >Añadir</button>
                    </div>
                </form>
            </div>
        );
    }
}
  
  const mapDispatchToProps= (dispatch)=> ({ 
        create:  task => dispatch(Actions.createItem(task))
  })

export default connect(mapDispatchToProps)(addTarget)
