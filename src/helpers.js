export function processContentfulItem (item){
    item = item.fields
    Object.entries(item).forEach( ([key, value]) => {
        console.log(value.fields && value.fields.file);
        if(
        value.fields && value.fields.file &&
        value.fields.file.contentType.includes('image'))
        {
        item[key] = item[key].fields;
        item[key].src = item[key].file.url;
        delete item[key].file;
        }  
    })
    return item
}