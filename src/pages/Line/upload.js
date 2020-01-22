import React from 'react';
import {
  Upload, message, Button, Icon,
} from 'antd';
import axios from 'axios';
import Env from '@/axios/env.js';

class UpLoad extends React.Component {
  constructor(props) {
    super(props);
    const {callBack} = this.props
    this.propsConfig = {
    name: 'file',
    action: '',
    headers: {
      authorization: 'authorization-text',
    },
    withCredentials: true,
    beforeUpload: (file) => { 
      const isLt2M = file.size / 1024/1024 < 5;
      if (!/image\/\w+/.test(file.type)) {
        message.error('请确保文件为图像类型')
        return false
      }
      if (!isLt2M) {
        message.error('图片大小不能超过5M')
        return false
      }
    },
    customRequest : (files)=>{
      const { file } = files
      let formData = new FormData();
      formData.append("file", file);
      const config = {
        method: 'POST',
        url: `${Env.baseURL}upload`,
        data: formData,
        headers: { 'content-type': 'multipart/form-data' },
      }
      axios(config).then((res) => {
          if(res.data.code === 200){
            message.success('上传成功')
            callBack(res.data.md5)
          }else{
            message.error('上传失败')
          }
        }).catch((e) => {
          console.log(e)
        });
      console.log(33333,files)
    },
    onRemove: (file) => {
      console.log(file)
    },
    onStart: (file) => {
      console.log('onStart', file.name);
    },
    onSuccess(file) {
      console.log('onSuccess', file);
    },
    onProgress(step, file) {
      console.log('onProgress', Math.round(step.percent), file.name);
    },
    onError(err) {
      console.log('onError', err);
    },
  
  
    }
  }
 
  triggerChange = (changedValue) => {
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(changedValue);
    }
  }

  render(){
    return (
      <Upload {...this.propsConfig} {...this.props}>
        <Button>
          <Icon type="upload" /> 点击上传
        </Button>
      </Upload>
    )
  }
}
export default UpLoad