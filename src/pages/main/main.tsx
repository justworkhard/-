import React from 'react';
import styles from './main.less';
import classNames from 'classnames';
import IconFont from '../../utils/IconFont';

class App extends React.Component {
  constructor(prop: any) {
    super(prop);
  }
  state = {
    headerList: [
      { name: '推荐' },
      { name: '排行榜' },
      { name: '歌单' },
      { name: '主播电台' },
      { name: '歌手' },
      { name: '新碟上架' },
    ],
    activeIndex: 0,
    sub_active_index: 0,
  };
  changeName() {
    console.log('test');

    this.setState({ name: 'GJD' });
  }
  render() {
    return (
      <div>
        <div className={styles.header}>
          <div className={styles.head_left}>
            <img src="" alt="" />
            <div
              onClick={() => {
                this.setState({ activeIndex: 0 });
              }}
              className={classNames(
                styles.left_item,
                this.state.activeIndex == 0 ? styles.active : '',
              )}
            >
              发现音乐
            </div>
            <div
              onClick={() => {
                this.setState({ activeIndex: 1 });
              }}
              className={classNames(
                styles.left_item,
                this.state.activeIndex == 1 ? styles.active : '',
              )}
            >
              我的音乐
            </div>
            <div
              onClick={() => {
                this.setState({ activeIndex: 2 });
              }}
              className={classNames(
                styles.left_item,
                this.state.activeIndex == 2 ? styles.active : '',
              )}
            >
              朋友
            </div>
            <div
              onClick={() => {
                this.setState({ activeIndex: 3 });
              }}
              className={classNames(
                styles.left_item,
                this.state.activeIndex == 3 ? styles.active : '',
              )}
            >
              商城
            </div>
            <div
              onClick={() => {
                this.setState({ activeIndex: 4 });
              }}
              className={classNames(
                styles.left_item,
                this.state.activeIndex == 4 ? styles.active : '',
              )}
            >
              音乐人
            </div>
            <div
              onClick={() => {
                this.setState({ activeIndex: 5 });
              }}
              className={classNames(
                styles.left_item,
                this.state.activeIndex == 5 ? styles.active : '',
              )}
            >
              下载客户端
            </div>
          </div>
          <div className={styles.head_right}>
            <div className={styles.right_item}>
              <div className={styles.MyInput}>
                <IconFont type = 'icon-xiazai17'/>
                <input type="text" placeholder="音乐/频道/电台/用户" />
              </div>
            </div>
            <div
              className={classNames(styles.right_item, styles.center)}
              style={{ cursor: 'pointer' }}
            >
              创作者中心
            </div>
            <div className={styles.right_item} style={{ cursor: 'pointer' }}>
              登录
            </div>
          </div>
          <div className={styles.item_class}>
            {this.state.headerList.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    this.setState({ sub_active_index: index });
                  }}
                  className={classNames(
                    styles.name,
                    this.state.sub_active_index == index ? styles.name_active : '',
                  )}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
