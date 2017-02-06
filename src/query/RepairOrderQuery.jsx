import React, {Component} from 'react';
import {Form, Row, Col, Input, Button, DatePicker, Select} from 'antd';
import moment from 'moment';
const FormItem = Form.Item;
const Option = Select.Option;


class RepairOrderQuery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expand: false
        }
        this.toggle = this.toggle.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSearch11 = this.handleSearch11.bind(this);
    }

    toggle() {
        const {expand} = this.state;
        this.setState({expand: !expand});
    }

    handleSearch11(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if(!err)
                this.props.repairorderquery(values);
        });
    }

    handleSearch() {
        this.props.repairorderquery()
    };

    handleReset(){
        this.props.form.resetFields();
    }

    render() {
        const options = this.props.keyValueItems.repairTypes.map(m => <Option key={m.id} value={m.value}>{m.value}</Option>);
        const expand = this.state.expand;
        const {getFieldDecorator} = this.props.form;
        const {RangePicker} = DatePicker;
        const dateFormat = 'YYYY/MM/DD';
        const formItemLayout = {
            labelCol: {span: 10},
            wrapperCol: {span: 14},
        };
        const formItemLayout11 = {
            labelCol: {span: 6},
            wrapperCol: {span: 18},
        };

        const children = [];
        children.push(
            <Col span={6} key="1">
                <FormItem {...formItemLayout} label='车牌号'>
                    {getFieldDecorator('VehicleLicensePlate')(
                        <Input />
                    )}
                </FormItem>
            </Col>
        );
        children.push(
            <Col span={6} key="2">
                <FormItem {...formItemLayout} label='维修单编号'>
                    {getFieldDecorator('Code')(
                        <Input />
                    )}
                </FormItem>
            </Col>
        );
        children.push(
            <Col span={6} key="3">
                <FormItem {...formItemLayout} label='服务站编号'>
                    {getFieldDecorator('DealerCode')(
                        <Input />
                    )}
                </FormItem>
            </Col>
        );
        children.push(
            <Col span={6} key="4">
                <FormItem {...formItemLayout} label='维修类型'>
                    {getFieldDecorator('RepairType')(
                        <Select defaultValue="普通维修" style={{width: 150}}>
                            {options}
                        </Select>
                    )}
                </FormItem>
            </Col>
        );
        children.push(
            <Col span={6} key="5">
                <FormItem {...formItemLayout} label='品牌'>
                    {getFieldDecorator('PartsSalesCategoryId')(
                        <Input />
                    )}
                </FormItem>
            </Col>
        );
        children.push(
            <Col span={6} key="6">
                <FormItem {...formItemLayout} label='VIN码'>
                    {getFieldDecorator('Vin')(
                        <Input />
                    )}
                </FormItem>
            </Col>
        );
        children.push(
            <Col span={6} key="7">
                <FormItem {...formItemLayout} label='状态'>
                    {getFieldDecorator('status')(
                        <Input />
                    )}
                </FormItem>
            </Col>
        );
        children.push(
            <Col span={6} key="8">
                <FormItem {...formItemLayout} label='服务站名称'>
                    {getFieldDecorator('DealerName')(
                        <Input />
                    )}
                </FormItem>
            </Col>
        );
        children.push(
            <Col span={6} key="9">
                <FormItem {...formItemLayout} label='服务产品线'>
                    {getFieldDecorator('ProductService')(
                        <Input />
                    )}
                </FormItem>
            </Col>
        );
        children.push(
            <Col span={6} key="10">
                <FormItem {...formItemLayout11} label='创建时间'>
                    {getFieldDecorator('CreateTime')(
                        <RangePicker
                            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                            format={dateFormat}
                        />
                    )}
                </FormItem>
            </Col>
        );
        return (

            <Form horizontal
                  className="ant-advanced-search-form">
                <Row gutter={40}>
                    {children}
                </Row>
                <Row>
                    <Col span={24} style={{textAlign: 'left'}}>
                        <Button type="primary" htmlType="submit" onClick={this.handleSearch11}>查询</Button>
                        <Button style={{marginLeft: 8}} onClick={this.handleReset}>
                            清除
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default Form.create()(RepairOrderQuery);