import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import qs from 'qs'
import { Icon, Button, Row, Col, message } from 'antd'
import API from '@/axios/api_calendar'
import bg from '@/assets/imgs/bg.png'
import CONFIGURE from '@/axios/env.js'
import styles from './styles/index.module.less'

class Example extends Component {
  state = {
    data: ''
  }

  componentDidMount = () => {
    this.getLines()
  }

  getLines = () => {
    API.getLines(qs.stringify({ today: true })).then(res => {
      this.setState({ data: res.data[0] })
    })
  }

  getToday = () => {
    // 获取当前日期
    let date = new Date()

    // 获取当前月份
    let nowMonth = date.getMonth() + 1

    // 获取当前是几号
    let strDate = date.getDate()

    // 添加分隔符“.”
    let seperator = '.'

    // 对月份进行处理，1-9月在前面添加一个“0”
    if (nowMonth >= 1 && nowMonth <= 9) {
      nowMonth = '0' + nowMonth
    }

    // 对月份进行处理，1-9号在前面添加一个“0”
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate
    }

    // 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
    return date.getFullYear() + seperator + nowMonth + seperator + strDate
  }

  checkImgExists = imgurl => {
    var ImgObj = new Image() //判断图片是否存在
    ImgObj.src = imgurl
    //存在图片
    if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
      return true
    } else {
      return false
    }
  }

  render() {
    if (this.state.data) {
      const { data } = this.state
      let background = data.file_path
      // 服务器地址拼接
      if (data.md5) data.md5 = `${CONFIGURE.picURL}${data.md5}`
      // 图片URL
      if (data.file_path && !this.checkImgExists(data.file_path)) {
        if (data.md5) {
          background = data.md5
          // 服务器地址也不存在
          if (!this.checkImgExists(data.md5)) {
            background = bg
          }
        } else {
          background = bg
        }
      }

      return (
        <div
          style={{
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              height: '100vh',
              backgroundSize: 'cover',
              backgroundImage: 'url(' + background + ')'
            }}
          >
            <div className={styles.bgwrap}>
              <Row>
                <Col xs={2} sm={2} md={2} lg={4} xl={6}></Col>
                <Col xs={20} sm={20} md={20} lg={16} xl={12}>
                  <p className={styles.lines}> {data.lines}</p>
                  <p className={styles.title}>
                    ——《 {data.title}》&nbsp; {data.character}
                  </p>
                </Col>
                <Col xs={2} sm={2} md={2} lg={4} xl={6}></Col>
              </Row>
              <Link to="/line">
                <p className={styles.edit}>
                  <Icon type="edit" />
                  &nbsp;贡献台词
                </p>
              </Link>
              <p className={styles.today}> {this.getToday()}</p>
            </div>
          </div>
        </div>
      )
    } else {
      return 'loading'
    }
  }
}

export default Example
