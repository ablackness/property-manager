import { connect } from 'react-redux';
import PropertySearch from './PropertySearch';

function mapStoreToProps(store) {
    return {
        results: store.search.results,
        st: store.search.st,
        city: store.search.city,
        zip: store.search.zip,
        noResults: store.search.noResults,
        pending: store.search.pending
    };
}

export default connect(mapStoreToProps)(PropertySearch);