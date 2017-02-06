import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import RepairOrderAction from '../query/RepairOrderAction';
import {bindActionCreators} from 'redux';
import actions from '../action/actions';
import Immutable from 'immutable';

class RepairOrderManagement extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getKeyValueItems();
    }

    render() {
        return (
            <div>
                <RepairOrderAction repairorderquery={this.props.repairorderquery}
                                   keyValueItems={this.props.keyValueItems}
                                   dataSource={this.props.dataSource}
                                   columns={this.props.columns}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const columns = state.get('management').getIn(['columns', 'repairOrdercolumns']);
    const dataSource = state.get('management').getIn(['query', 'dataSource']);
    const keyValueItems = state.getIn(['management', 'keyValueItems']);
    return {
        columns: columns.toJS(),
        dataSource: dataSource.toJS(),
        keyValueItems: keyValueItems.toJS()
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepairOrderManagement);