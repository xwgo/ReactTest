import Immutable from 'immutable';
const management = Immutable.fromJS({
    columns: {
        repairOrdercolumns: [{
            title: '维修单号',
            dataIndex: 'Code'
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
        }]
    },
    query: {
        dataSource: [],
        //查询数据条件
        filter: [
            {
                Code: ''
            }
        ],
    },
    keyValueItems: {
        repairTypes:[]
    }
});

export default {management};