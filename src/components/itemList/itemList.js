import React, {Component} from 'react';
import './itemList.css';

import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
export default class ItemList extends Component {


    

    state = {
        itemlist: null,
        error: false
    }

    componentDidMount(){
        const {getData} = this.props;
        getData()
            .then((itemlist) => {
                this.setState({
                    itemlist
                })
            })
    }
    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    renderItems(arr){
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return(
                <li 
                    key={id}
                    onClick={() =>this.props.onItemSelected(id)}
                    className="list-group-item">
                    {label}
                </li>
            )
        })
    }

    render() {
        if(this.state.error) {
            return <ErrorMessage/>
        }

        const {itemlist} = this.state;

        if(!itemlist) {
            return <Spinner/>
        }

        const items = this.renderItems(itemlist);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}