import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';

import BeerModal from './BeerModal';
import { dummyBeersData as Favorites } from "../../../constants/dummyData";

class Beer extends Component {
    constructor(props){
        super(props);

        this.state = {
            isFavorite: false,
            showModal: false,
        };
    }
    
    handleModalOpen =() => {
        this.setState({
            showModal: true,
        });
    };

    handleModalClose =() => {
        this.setState({
            showModal: false,
        });
    };

    render(){
        const { isFavorite,showModal } = this.state;
        const { id, name, description, image_url} = this.props.info;

        return(
            <Fragment>
            {showModal ? (
                <BeerModal
                    show={showModal} 
                    handleClose={this.handleModalClose} 
                    beerId={id}
                /> 
            ) : (null)}
            
            <div className="card">
                <span className={`favourite ${isFavorite ? "active" : "" }`}>
                    <i className="far fa-star" />
                </span>
                <div
                 className="card__imgcontainer" 
                 style={{backgroundImage : `url(${image_url})` }}
                />
               <h2 onClick={this.handleModalOpen}> {name}</h2>
            
               <span className="card__description"> {description}  </span>
            </div>  
            </Fragment>
        );
    }
}

Beer.propTypes = {
    info: PropTypes.shape ({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        image_url: PropTypes.string,
    }),
};


export default Beer;