import React from 'react';
import './OneOrderView.css';
import PropTypes from 'prop-types';
// import {Image, Panel} from "react-bootstrap";
// import config from '../../config';
// import dialog from '../../assets/images/dialog.png';
// import {Link} from "react-router-dom";

const OneOrderView = props => {

        return (
          <div className="OneOrderView">
              <h4>{props.title}</h4>
              <p>{props.place}</p>
              <p>{props.willWatchDate}</p>
              <button>Remove this order</button>
          </div>  
        );
 };


OneOrderView.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    willWatchDate: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
};


export default OneOrderView;


