import React from 'react';

export default class Property extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { result } = this.props;
        return (
            <div>
                <div className='card mt-2 mb-2'>
                    <div className='card-header'>{result.name}</div>
                    <div className='card-body'>
                        <div className='card-text'>{`${result.address1} ${result.address2?result.address2:''}, ${result.city} ${result.state}, ${result.zip}`}</div>
                        <div className='card-text'>{'Rent: ' + result.rent}</div>
                        <div className='card-text'>{'Lease Term: ' + result.leaseTerm}</div>
                        <div className='card-text'>{'Pets Allowed: ' + (result.pets?'Yes':'No')}</div>
                        <div className='card-text'>{'Square Footage: ' + result.sqft}</div>
                    </div>
                </div>
            </div>
        )
    }
}