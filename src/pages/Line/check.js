
import React from 'react';
import { Checkbox } from 'antd';

class Check extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indeterminate: false,
      checkAll: true,
      checkedList: [],
    } 
  }

  componentWillReceiveProps(nextProps) {
    // console.log(11,nextProps)
    // 第一次更新checkedList
    // if(!this.initialValueChange){
    //   this.initialValue = nextProps.value
    //   this.initialValueChange = true
    //   console.log(1111,this.initialValue)
    // }
    if(nextProps.value !== this.state.checkedList){
      this.setState({checkedList: nextProps.value, checkAll:true, indeterminate:false});
    }
    const { Lists } = nextProps 
    if (Lists) {
      this.plainOptions = Lists
      this.setState({
        indeterminate:
          this.plainOptions
            .map(item => item.value)
            .sort()
            .join(',') !== nextProps.value.sort().join(','),
        checkAll:
          this.plainOptions
            .map(item => item.value)
            .sort()
            .join(',') === nextProps.value.sort().join(',')
      })
      if (nextProps.value.length === 0) {
        this.setState({indeterminate: false})
      }
    }
  }

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < this.plainOptions.length,
      checkAll: checkedList.length === this.plainOptions.length,
    },()=>{
      this.triggerChange(this.state)
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? this.plainOptions.map((item)=>(item.value)) : [],
      indeterminate: false,
      checkAll: e.target.checked,
    },()=>{
      this.triggerChange(this.state)
    });
  };
  triggerChange = ({ checkedList }) => {
    // console.log(checkedList)
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(checkedList);
    }
  }
  render() {
    return (
      <>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            全选
          </Checkbox>
        </div>
        <Checkbox.Group options={this.plainOptions} value={this.state.checkedList} onChange={this.onChange} />
      </>
    );
  }
}

export default Check