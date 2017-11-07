import React from 'react';
import Property from '../Property/Property';
import {
    getPropertiesByState,
    updateState
} from './propertySearchActions'

export default class PropertySearch extends React.Component {
    constructor(props){
        super(props);

        this.searchState = this.searchState.bind(this);
        this.searchCity = this.searchCity.bind(this);
        // this.searchZip = this.searchZip.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
    }

    searchState() {
        const { dispatch, st } = this.props;
        dispatch(getPropertiesByState(st));
    }

    searchCity() {
        const { dispatch, city } = this.props;
        dispatch
    }

    handleStateChange(event) {
        const { dispatch } = this.props;
        const value = event.target.value;
        dispatch(updateState(value));
    }

    render() {
        var arr = [1,2,3];
        const { st, results, pending, noResults } = this.props;
        let snippet;

        if (pending) {
            snippet = <h1>Pending...</h1>
        } else if (noResults) {
            snippet = <h1>No results to display</h1>
        } else {
            snippet = 
                results.data.map( (result, index) => {
                        return <Property key={result.id} result={result}/>
                    })
        }

        return (
            <div>
                <h2 className='text-center'>Property Search</h2>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-3 text-center panel'> 
                        <div className='input-group'>
                            <input onChange={ this.handleStateChange } className='form-control' value={st} type='text' placeholder='Search by State...' /> 
                            <span className='input-group-btn'>
                                <button onClick={ this.searchState } className='btn btn-primary'>Go!</button>
                            </span>
                        </div>
                    </div>
                    <div className='col-md-4 text-center panel'>
                        <div className='input-group'>
                            <input className='form-control' type='text' placeholder='Search by City...' /> 
                            <span className='input-group-btn'>
                                <button className='btn btn-primary'>Go!</button>
                            </span>
                        </div>
                    </div>
                    <div className='col-md-3 text-center panel'>
                        <div className='input-group'>
                            <input className='form-control' type='text' placeholder='Search by Zip...' /> 
                            <span className='input-group-btn'>
                                <button className='btn btn-primary'>Go!</button>
                            </span>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                </div>
                <div className='col-md-10 offset-md-1'>
                    {snippet}
                </div>


                
            </div>
        )
    }
}