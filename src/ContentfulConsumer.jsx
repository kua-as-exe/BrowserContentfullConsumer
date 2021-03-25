import React from 'react';

const goTo = (url) => window.location.href = url;
const useParams = () => {
    const params = {};
    const url = new URLSearchParams(window.location.search);
    url.forEach((value, key) => params[key] = value);
    return params;
}

export const ContentfulConsumer = ({templates, query, spaceID, APItoken}) => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    React.useEffect( () => {
        setLoading(true);
        fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceID}/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Authenticate the request
              Authorization: "Bearer "+APItoken,
            },
            // send the GraphQL query
            body: JSON.stringify({ query }),
          })
            .then( data => data.json() )
            .then( data => {
                setLoading(false);
                setData(data);
            })  
    }, []);

    if(loading) return templates.loading();
    const {item: ItemTemplate} = templates;
    if(!loading && ItemTemplate && data){
        const itemsData = Object.values(data.data)[0].items;
        console.log(itemsData);
        if(Array.isArray(itemsData)) 
            return itemsData.map( (itemData, index) => <ItemTemplate key={index} {...itemData}/>)
        return ItemTemplate(itemsData);
    } 
    return <></>;
}