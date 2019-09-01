import React,{Component} from 'react';
import './index.css';

    class Item extends Component {

        render() {
                return(
                    <div className="targets">
                        <div className="container">
                            <img src={this.props.item.url} alt={this.props.item.title}/>
                            <div className="bottom-left">{this.props.item.title}</div>
                        </div>
                        <div className="description-box">
                            <p>{this.props.item.description}</p>
                        </div>
                    </div>
                );
        }
    }
export default Item