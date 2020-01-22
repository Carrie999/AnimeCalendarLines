import React, { Component } from 'react'
import { Row, Col, Button, Form, Input, Select, message } from 'antd'
import qs from 'qs'
import CONFIGURE from '@/axios/env.js'
import API from '@/axios/api_calendar'
import styles from './styles/index.module.less'
import Upload from './upload.js'

class RegistrationForm extends React.Component {
  state = {}
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        if (!this.state.md5 && !values.file_path) {
          message.error('请上传图片或者填写图片路径')
          return
        }
        if (this.state.md5) {
          values.md5 = this.state.md5
        }
        if (!this.EDIT) {
          API.postLines(values)
            .then(res => {
              if (res && res.code === 200) {
                message.success('创建成功')
                this.setState({ md5: '' })
                this.props.form.resetFields()
                // this.props.history.goBack()
              } else {
                message.error(res.message)
              }
            })
            .catch(err => {
              message.error(err)
            })
        } else {
          values._id = window.location.search.slice(1)
          API.putLines(values).then(res => {
            if (res.code === 200) {
              message.success('修改任务成功')
              this.props.history.goBack()
            } else {
              message.error(res.message)
            }
          })
        }
      }
    })
  }

  componentDidMount = () => {
    if (window.location.search.slice(1)) {
      this.EDIT = true
      this.getLineDetail()
    } else {
      this.EDIT = false
    }
  }

  getLineDetail = async () => {
    let res = await API.getLines(
      qs.stringify({ _id: window.location.search.slice(1) })
    )

    if (res.code === 200) {
      const { lines, character, title, md5, file_path } = res.data[0]
      this.setState({
        lines,
        character,
        title,
        md5,
        file_path
      })
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 19,
          offset: 5
        }
      }
    }
    return (
      <Form {...formItemLayout}>
        <span className={styles.prompt}>上传图片或者图片url上传其一即可 </span>
        <Form.Item label="上传图片">
          <Upload
            callBack={md5 => {
              this.setState({ md5 })
            }}
          />
        </Form.Item>
        {this.state.md5 && (
          <img
            className={styles.img}
            src={`${CONFIGURE.picURL}${this.state.md5}`}
          />
        )}

        {!this.state.md5 && (
          <Form.Item label="图片url">
            {getFieldDecorator('file_path', {
              initialValue: this.EDIT ? this.state.file_path : '',
              rules: [
                { required: false, message: '请输入图片url!', whitespace: true }
              ]
            })(<Input />)}
          </Form.Item>
        )}
        {this.state.file_path && (
          <img className={styles.img} src={this.state.file_path} />
        )}

        <Form.Item label="台词">
          {getFieldDecorator('lines', {
            initialValue: this.EDIT ? this.state.lines : '',
            rules: [
              { required: true, message: '请输入台词!', whitespace: true }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="动漫角色">
          {getFieldDecorator('character', {
            initialValue: this.EDIT ? this.state.character : '',
            rules: [
              { required: true, message: '请输入动漫角色!', whitespace: true }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="动漫名称">
          {getFieldDecorator('title', {
            initialValue: this.EDIT ? this.state.title : '',
            rules: [
              { required: true, message: '请输入动漫名称!', whitespace: true }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" onClick={this.handleSubmit}>
            {!this.EDIT ? '提交台词' : '保存'}
          </Button>
          <Button
            style={{ marginLeft: '20px' }}
            onClick={() => {
              this.props.history.goBack()
            }}
          >
            返回
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(
  RegistrationForm
)

const UsersAdd = props => {
  return (
    <>
      <Row>
        <Col span={15}>
          <WrappedRegistrationForm {...props} />
        </Col>
      </Row>
    </>
  )
}

export default UsersAdd
