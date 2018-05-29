import React from 'react';
import PropTypes from 'prop-types';
import {Image, Panel} from "react-bootstrap";
import config from '../../config';
import dialog from '../../assets/images/dialog.png';
import {Link} from "react-router-dom";

const OneFilmList = props => {

    let image = dialog;

    if (props.image) {
        image = config.apiUrl + '/uploads/' + props.image;
    }

    return (
        <Panel>
            <Panel.Body>
                <Image style={{width: '80px', height: 'auto', float: 'left'}} src={image} thumbnail/>
                <div  style={{paddingLeft: '100px'}}>
                    <p>
                        <Link to={"/films/" +   props.id}>{props.title}</Link>
                    </p>
                    <p>{props.year}</p>
                    <p>{props.description}</p>
                </div>
            </Panel.Body>
        </Panel>
    );
};

OneFilmList.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    user: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};

export default OneFilmList;