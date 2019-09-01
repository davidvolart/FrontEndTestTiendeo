import React,{Component} from 'react';
import './index.css';
import EditTarget from '../EditTarjeta/editTarget'

    class Item extends Component {

        constructor(props){
            super(props);
            this.state = { isEditMode: false }   
        }

        render() {
            if(this.state.isEditMode){
                return(
                    <div className="targets">
                        <EditTarget item = {this.props.item} onSubmit = {() => this.handleUpdate()} cancel={() => this.cancel()}/>
                    </div>
                );
            }else{
                return(
                    <div className="targets">
                        <div className="container">
                            <img src={this.props.item.url} alt={this.props.item.title}/>
                            <div className="bottom-left">{this.props.item.title}</div>
                            <div className="button-edit"><a href="#" onClick={this.onEdit}> EDIT </a></div>
                            <div className="button-delete"><a href="#" onClick={this.props.deleteFunction}> DELETE </a></div>  
                        </div>
                        <div className="description-box">
                            <p>{this.props.item.description}</p>
                        </div>
                    </div>
                );
            } 
        }

       
        onEdit = (e) => {
            e.preventDefault();
            this.setState({
                isEditMode: true
            });
        }

        handleUpdate(){
            this.setState({
                isEditMode: false
            });
        }




    }
export default Item