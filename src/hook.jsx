const goTo = (url) => window.location.href = url;
const useParams = () => {
    const params = {};
    const url = new URLSearchParams(window.location.search);
    url.forEach((value, key) => params[key] = value);
    return params;
}

class Click extends React.Component {
    state = {
        data: [],
        isLoading: true
    }
    componentDidMount(){
        fetch(this.props.url)
            .then(data => data.json())
            .then( data => {
                this.setState({isLoading: false, data });
            })  
    }

    render(){
        const {data, isLoading} = this.state;
        const {template, loading} = this.props;

        if(isLoading && loading) return loading();
        if(template){
            if(Array.isArray(data)) 
                return data.map(template)
            return template(data);
        }

        return <span>No hay plantilla</span>;
    }
}