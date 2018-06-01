import React, {Component, Fragment} from 'react';


import {connect} from "react-redux";
import {PageHeader} from "react-bootstrap";
import {fetchGetAllFilms} from "../../store/actions/films";
import OneFilmList from "../../components/OneFilmList/OneFilmList";


class AllFilmsView extends Component {
    componentDidMount() {
        this.props.fetchGetAllFilms(this.props);
    }

    render() {
        return (
            <Fragment>
                <PageHeader>
                    <p>
                        Films
                    </p>
                </PageHeader>
                {this.props.films.map(film => {
                        return (
                            <OneFilmList
                                key={film._id}
                                id={film._id}
                                title={film.title}
                                image={film.image}
                                user={film.user.username}
                                description={film.description}
                            />
                        )
                    }
                )}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        films: state.films.films,
        user: state.users.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGetAllFilms : (id) => dispatch(fetchGetAllFilms(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllFilmsView);