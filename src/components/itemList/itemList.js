import React, {Component} from 'react';
import './itemList.css';
import gotService from '../../services/gotservice';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
export default class ItemList extends Component {


    gotService = new gotService()

    state = {
        charlist: null,
        error: false
    }

    componentDidMount(){
        this.gotService.getAllCharacters()
            .then((charlist) => {
                this.setState({
                    charlist
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
            const {id, name} = item;
            return(
                <li 
                    key={id}
                    onClick={() =>this.props.onCharSelected(id)}
                    className="list-group-item">
                    {name}
                </li>
            )
        })
    }

    render() {
        if(this.state.error) {
            return <ErrorMessage/>
        }

        const {charlist} = this.state;

        if(!charlist) {
            return <Spinner/>
        }

        const items = this.renderItems(charlist);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}