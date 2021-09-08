import React,{Component} from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import {connect} from 'react-redux';
import {firestore,convertCollectionSnapshotToMap} from '../../firebase/firebase.utlis';
import {updateCollections} from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);




class ShopPage extends Component {
     
        state = {
            loading: true,
        }


    unsubricbeFromSnapshot = null;
   
    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
         
        collectionRef.get()
        .then(snapshot =>{

                const collectionMap = convertCollectionSnapshotToMap(snapshot);
                 updateCollections(collectionMap);
                 this.setState({loading:false});
              });
       }

        render() {

             

            const {match} = this.props;
            const {loading} = this.state;
            return(
                <div className="shop-page">
                    <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isLoading={loading}{...props}/>}/>
                    <Route path={`${match.path}/:collectionId`} render ={(props)=><CollectionPageWithSpinner isLoading={loading}{...props}/>}/>
            </div>
        )
   
}

}

const mapDispatchToProps = dispatch => ({

    updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})



export default connect(null,mapDispatchToProps) (ShopPage);