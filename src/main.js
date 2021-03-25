import ReactDOM from 'react-dom';
import React from 'react';
import { ContentfulConsumer } from './ContentfulConsumer.jsx';
import * as Babel from '@babel/standalone';

window.React = React;
window.Babel = Babel;
window.loadContentfulData = ({
    elementID,
    spaceID,
    APItoken,
    templates,
    query
}) => {
    console.log(elementID, spaceID, APItoken, templates, query)
    ReactDOM.render(
        <ContentfulConsumer 
            spaceID={spaceID}
            APItoken={APItoken}
            templates={templates}
            query={query}
        />, 
        document.getElementById(elementID)
    );
};