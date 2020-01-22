import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, message } from 'antd'
import qs from 'qs'
import API from '@/axios/api_calendar'
import styles from './styles/index.module.less'
import { Table, Divider, Tag } from 'antd'

class Datasets extends Component {
  state = {
    columns: [
      {
        title: '台词',
        dataIndex: 'lines',
        key: 'lines',
        width: '50%',
        render: text => <a>{text}</a>
      },
      {
        title: '动漫角色',
        dataIndex: 'character',
        key: 'character'
      },
      {
        title: '番名',
        dataIndex: 'title',
        key: 'title'
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <Link to={`line?${record._id}`}>编辑</Link>
            {(localStorage.getItem('username') === '织雪纱奈' ||
              localStorage.getItem('username') === 'carrie' ||
              localStorage.getItem('username') === 'pangyajing') && (
              <span>
                <Divider type="vertical" />
                <a onClick={this.deleteLine.bind(this, record._id)}>删除</a>
              </span>
            )}
          </span>
        )
      }
    ],
    data: []
  }

  componentDidMount = () => {
    this.getLines()
  }
  getLines = () => {
    API.getLines().then(res => {
      res.data.map(item => {
        item.key = item._id
      })
      this.setState({ data: res.data })
    })
  }
  deleteLine = _id => {
    API.delLines({ _id }).then(res => {
      if (res.code === 200) {
        message.success('删除成功')
      }
    })
  }
  render() {
    return (
      <>
        <Link to="/line">
          <Button className={styles.btn} type="primary">
            新建台词
          </Button>
        </Link>
        <Link to="/today">
          <Button className={styles.btn2} type="primary">
            今日日历台词
          </Button>
        </Link>
        <Table
          columns={this.state.columns}
          dataSource={this.state.data}
          pagination={{ pageSize: 50 }}
        />
      </>
    )
  }
}

export default Datasets
