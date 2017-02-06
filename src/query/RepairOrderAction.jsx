import React,{Component} from 'react';
import {Tabs} from 'antd';
import RepairOrderQuery from './RepairOrderQuery'
import RepairOrderGridView from '../component/RepairOrderGridView'

class RepairOrderAction extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        const TabPane = Tabs.TabPane;
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab = "查询" key = "1">
                    <RepairOrderQuery repairorderquery ={this.props.repairorderquery}
                                      keyValueItems= {this.props.keyValueItems}/>
                    <RepairOrderGridView dataSource = {this.props.dataSource}
                                         columns = {this.props.columns}/>
                </TabPane>
                <TabPane tab = "新增" key = "2">新增</TabPane>
                <TabPane tab = "修改" key = "3">修改</TabPane>
            </Tabs>
        );
    }
}

export default RepairOrderAction;