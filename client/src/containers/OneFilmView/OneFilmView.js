import React, {Component, Fragment} from 'react';
import {Button, Form, PageHeader} from "react-bootstrap";
import {connect} from "react-redux";
import OneFilmInside from "../../components/OneFilmInside/OneFilmInside";
import {addComments, fetchComments, showOneFilm} from "../../store/actions/films";
import FormElement from "../../components/UI/Form/FormElements";
import Comments from "../../components/Comments/Comments";


class OneFilmView extends Component {

    state = {
        comment: ''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    submitFormHandler = event => {
        event.preventDefault();
        this.props.addComments({post: this.props.film._id, comment: this.state.comment});
    };

    componentDidMount() {
        this.props.showOneFilm(this.props.match.params.id);
        this.props.fetchComments(this.props.match.params.id);
    }

    render () {
        return (
            <Fragment>
                <PageHeader>
                    <p>Films</p>
                </PageHeader>
                <OneFilmInside
                    key={this.props.film._id}
                    id={this.props.film._id}
                    title={this.props.film.title}
                    description={this.props.film.description}
                    image={this.props.film.image}
                    user={this.props.film.user.username}
                    year={this.props.film.year}
                />
                <Form horizontal onSubmit={this.submitFormHandler}>

                    <FormElement
                        propertyName="comment"
                        title="Enter comment"
                        type="text"
                        value={this.state.comment}
                        changeHandler={this.inputChangeHandler}
                    />
                    <Button type='submit' style={{float: 'right', marginRight: '50px', marginBottom: "70px"}}><strong>Add comment</strong></Button>

                </Form>
                {this.props.comment.map(comment => (
                    <Comments
                        key={comment._id}
                        id={comment._id}
                        comment={comment.comment}
                        user={comment.user.username}
                        dateTime={comment.dateTime}
                    />
                ))}
            </Fragment>
        )
    }
}


const mapStateToProps = state => {
    return {
        films: state.films.films,
        user: state.users.user,
        post: state.posts.post,
        comment: state.posts.comments,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        showOneFilm: (id) => dispatch(showOneFilm(id)),
        fetchComments: (id) => dispatch(fetchComments(id)),
        addComments: (data) => dispatch(addComments(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OneFilmView);
