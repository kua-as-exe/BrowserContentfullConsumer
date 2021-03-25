# BrowserContentfullConsumer
Package to easily connect Contentful API to your static HTML webpages rendered by React.

## How to

Include the script inside `<head>` tag:
```html
<script src="./contentfulConsumer.min.js"></script>
```
Example:
```html
<head>
    ...
    <script src="./contentfulConsumer.min.js"></script>
    ...
</head>
```

Conigure your templates and contentful api's inside 



Example:
```html

<div class="container">
    <div class="row" id="root" />
</div>
<script type="text/babel">
    const templates = {
        item: ({title, description, image}) => ( 
            <div> 
                <h1>{title}</h1>
            </div>
        ),
        loading:() => ( 
            <h1>Loading content</h1> 
        )
    }
    // visit: https://graphql.contentful.com/content/v1/spaces/[YOUR_SPACE_ID]/explore?access_token=[YOUR_ACCESS_TOKEN]
    // to test and get your query
    const query = `{
        paginaCollection {
            items {
                title
                description
                url
                image{
                    url
                }
            }
        }
    }`
    loadContentfulData({
        elementID: 'root',
        spaceID:'1hda8s7jo1uh', // this is a fake ID
        APItoken:'Aj19m-"he78a6h29a7GJSd719h1jao_1dja729HAS72', // (fake API)
        query, templates
    })
</script>
```