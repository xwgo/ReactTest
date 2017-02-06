import React, {Component} from 'react';
import {Layout, Table } from 'antd';


class RepairOrderGridView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const columns = [{
            title: '维修单号',
            dataIndex: 'Code',
            render: text => <a href="#">{text}</a>,
        }, {
            title: '状态',
            dataIndex: 'status',
        }, {
            title: '客户名称',
            dataIndex: 'CustomerName',
        }, {
            title: '手机号码',
            dataIndex: 'CellNumber',
        }, {
            title: '维修类型',
            dataIndex: 'RepairType',
        }, {
            title: '车牌号',
            dataIndex: 'VehicleLicensePlate',
        }, {
            title: 'VIN',
            dataIndex: 'Vin',
        }, {
            title: '品牌',
            dataIndex: 'PartsSalesCategoryId',
        }, {
            title: '创建人',
            dataIndex: 'CreatorName',
        }, {
            title: '创建时间',
            dataIndex: 'CreateTime',
        }];

       /* const data = [{
            key: '1',
            Code: 'REPFT003882201407260002',
            status: 1,
            CustomerName: '魏子哲',
            CellNumber: '18032865239',
            RepairType: '普通维修',
            VehicleLicensePlate: '冀A190G2',
            Vin: 'LVBV3JBB1DJ058462',
            PartsSalesCategoryId: '奥铃',
            CreatorName: 'FT003882',
            CreateTime: '2014-07-26 16:37:15'
        }, {
            key: '2',
            Code: 'REPFT003882201407260001',
            status: 2,
            CustomerName: '高兴成',
            CellNumber: '15055257006',
            RepairType: '普通维修',
            VehicleLicensePlate: '沪D85470',
            Vin: 'LVBV4JBBXEJ005872',
            PartsSalesCategoryId: '欧马可',
            CreatorName: 'FT003882',
            CreateTime: '2014-07-26 16:37:15'
        }];*/

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User',
            }),
        };
        return (
                <Table rowSelection={rowSelection} columns={this.props.columns} dataSource={this.props.dataSource} />
        );
    }
}

RepairOrderGridView.propTypes = {
    columns: React.PropTypes.array
};

export default RepairOrderGridView;