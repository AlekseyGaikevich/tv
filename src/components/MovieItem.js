import React, { Component } from 'react';
import './../scss/movieItem.scss';
import './../scss/buttons.scss';
import Image from './Image';
import like from './../img/like.svg';
import unlike from './../img/unlike.svg';

class MovieItem extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            like: false
        };
    };

    toggleOverview = () => {
        this.setState({
            show: !this.state.show
        });
    };

    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
    };

    render() {
        const { data: { title, voteAverage, overview } } = this.props;
        // console.log(this.props.data)
        return (
            <div className="card">
                <h3>{title}</h3>
                <Image values={this.props.data} />
                <div>
                    <p>{voteAverage}</p>
                    <div className="btn-block-item">
                        <button type="button" className="btn-description" onClick={this.toggleOverview}>
                            {this.state.show ? 'Скрыть описание' : 'Показать описание'}
                        </button>
                        <button type="button" className="btn-like" onClick={this.handleLike}>
                            {this.state.like ? <img src={unlike} alt="" /> : <img src={like} alt="" />}
                        </button>
                    </div>
                    {this.state.show ? <p>{overview}</p> : null}
                </div>
            </div>
        );
    };
};

export default MovieItem;