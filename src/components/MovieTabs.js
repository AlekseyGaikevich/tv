import React, { Component } from 'react';

const MovieTabs = props => {

    const { sort_by, updateSortBy } = props;

    const handleClick = val => () => updateSortBy(val);

    const getClassLink = val => `btn--movietab ${sort_by === val ? "active" : ""}`;

    return (
        <div className="block_btn--movietab">
            <button type="button"
                className={getClassLink("popularity.asc")}
                onClick={handleClick('popularity.asc')}>
                Populatity desc
            </button>
            <button type="button"
                className={getClassLink("revenue.asc")}
                onClick={handleClick('revenue.asc')}>
                Revenue desc
            </button>
            <button type="button"
                className={getClassLink("vote_average.asc")}
                onClick={handleClick('vote_average.asc')}>
                Vote average desc
            </button>
        </div>
    )
};

export default MovieTabs;