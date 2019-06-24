import React from 'react';
import classNames from 'classnames';
import styles from './recommend.less';
import { Carousel } from 'antd';
import IconFont from '../../utils/IconFont';
import coverAll from '../../assets/coverall.jpg';
import { connect } from 'dva';
import { ConnectProps, ConnectState, Route, UserModelState } from '@/models/connect';

class login extends React.Component {
  state = {
    hot_recommend: [],
    albumList:['',''],
    rise_list: [],
    Resident_singer: [],
    carousel: [
      { url: 'http://p1.music.126.net/CM-Zao-gxW-budj3cltZoA==/109951164159206857.jpg' },
      { url: 'http://p1.music.126.net/EwL6AFWdgBwP-Tft4WKyjg==/109951164161589710.jpg' },
      { url: 'http://p1.music.126.net/CM-Zao-gxW-budj3cltZoA==/109951164159206857.jpg' },
    ],
  };
  componentDidMount(){
    // const { dispatch } = this.props;
    // if (dispatch) {
     this.props.dispatch({
        type: 'playlist/fetchPlayList',
        callback:res=>{
          console.log(res);
          this.state.hot_recommend = res.playlists.slice(0,8)
        }
      });
      ///新碟片上架
      this.props.dispatch({
        type: 'playlist/fetchAlbum',
        callback:res=>{
          this.state.albumList = res.albums
          console.log(this.state.albumList);
        }
      });
      ///榜单toplist
      this.props.dispatch({
        type: 'playlist/fetchToplist_1',
        callback:res=>{
         console.log(res);
         this.state.rise_list.push(res.playlist)
         
        }
      });
      this.props.dispatch({
        type: 'playlist/fetchToplist_2',
        callback:res=>{
         console.log(res);
         this.state.rise_list.push(res.playlist)

        }
      });
      this.props.dispatch({
        type: 'playlist/fetchToplist_3',
        callback:res=>{
         console.log(res);
         this.state.rise_list.push(res.playlist)

        }
      });
      //artist_list
      this.props.dispatch({
        type: 'playlist/artist_list',
        callback:res=>{
         console.log(res);
         this.state.Resident_singer = res.artists.slice(0,10)

        }
      });
      // console.log(temp);
    // }
  }
  left(){
    this.refs.carousel.slick.slickPrev();

  }
  right(){
    this.refs.carousel.slick.slickNext()
    
  }
  render() {

    return (
      <div>
        <div style ={{width:'100%',backgroundOrigin: 'repeat-x', backgroundImage: 'url("http://p1.music.126.net/n4RWydhvY1ZrA5IyGf6psw==/109951164164669404.jpg")'}}>
        <div style={{    position: 'relative', width: '982px',height: '336px',margin:' 0 auto' }}>
          <Carousel ref = 'carousel'>
            {this.state.carousel.map((item, index) => {
              return (
                <div>
                  <h2>
                    <img
                      style={{ width: '100%', display: 'inline-block' }}
                      src={item.url}
                      alt=""
                    />
                  </h2>
                </div>
              );
            })}
          </Carousel>
          <IconFont type="icon-changyongicon-1" onClick = {this.left.bind(this)} className={ styles.CR_left} style={{ cursor:'pointer',fontSize: '60px',color:'white' }} />
          <IconFont type="icon-changyongicon-" onClick = {this.right.bind(this)} className={styles.CR_right} style={{ cursor:'pointer',fontSize: '60px',color:'white' }} />
        </div>
        </div>
        <div className={styles.body}>
          <div className={styles.left}>
            <div className={styles.hot_recommend}>
              <div className={styles.content_head}>
                <div className={classNames( styles.title)}>热门推荐</div>
                <div className={classNames(styles.pointer_line, styles.tab)}>华语</div>
                <div className={classNames(styles.pointer_line, styles.tab)}>流行</div>
                <div className={classNames(styles.pointer_line, styles.tab)}>摇滚</div>
                <div className={classNames(styles.pointer_line, styles.tab)}>民谣</div>
                <div className={classNames(styles.pointer_line, styles.tab)}>电子</div>
                <div className={classNames(styles.tab, styles.more,styles.pointer_line)}>
                  更多
                  <IconFont type="icon-qianjin" style={{ fontSize: '16px', color: 'red' }} />
                </div>
              </div>
              <div className={styles.hr_content}>
                {this.state.hot_recommend.map((item, index) => {
                  return (
                    <div key={index} className={styles.content_navbar}>
                      <div className={styles.img}>
                        <img className={styles.cover} src={item.coverImgUrl} />
                        <div className={styles.messge}>
                          <span>{item.playCount}</span>
                          <span>paly</span>
                        </div>
                      </div>
                      <div className={styles.title}>{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.new_CD}>
              <div className={styles.content_head}>
                <div className={styles.title}>新碟上架</div>
                <div className={classNames(styles.tab, styles.more,styles.pointer_line)}>更多</div>
              </div>
              <div className={styles.new_content}>
                <div className={styles.avbar_list}>
                  {
                    this.state.albumList.map((item,index)=>{
                      return(
                        <div key ={index} className={styles.navbar}>
                        <img
                          className={styles.CD_cover}
                          src={item.picUrl}
                        />
                        <span className={styles.CD_title}>{item.name}</span>
                        <span className={styles.CD_author}>{item.company}</span>
                      </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className={styles.top_list}>
              <div className={styles.content_head}>
                <div className={styles.title}>榜单</div>
                <div className={classNames(styles.tab, styles.more,styles.pointer_line)}>更多</div>
              </div>
              <div className={styles.tl_content}>
                { this.state.rise_list.map((item,index)=>{
              return( 
                <div className={styles.content_rise}>
                <header>
                  <div style={{ position: 'relative' }}>
                    <img
                      className={styles.content_cover}
                      style={{ background: coverAll }}
                      src={item.coverImgUrl}
                    />
                    <a
                      href=""
                      className={styles.cover_shadow}
                      style={{
                        height: 80,
                        width: 80,
                        backgroundPosition: '-145px -57px',
                        backgroundImage: 'url(' + require('../../assets/coverall.jpg') + ')',
                      }}
                    ></a>
                  </div>
                  <div className={styles.content_action}>
                    <span className={styles.h4}>{item.name}</span>
                    <IconFont
                      className={styles.IconFont}
                      type="icon-iconset0481"
                      style={{ fontSize: '20px' }}
                    />
                    <IconFont
                      className={styles.IconFont}
                      type="icon-shoucangjia1"
                      style={{ fontSize: '20px', marginLeft: 20 }}
                    />
                  </div>
                </header>
                <ul className={styles.list}>
                  {item.tracks.slice(0,10).map((track, index) => {
                    return (
                      <li key={index} className={styles.list_li}>
                        <span
                          className={classNames(
                            styles.list_index,
                            index <= 2 && styles.list_index_active,
                          )}
                        >
                          {index + 1}
                        </span>
                        <span className={styles.song_name}>{track.name}</span>
                        <div className={styles.icons}>
                          <IconFont
                            className={styles.IconFont}
                            type="icon-iconset0481"
                            style={{ fontSize: '15px', marginLeft: 10 }}
                          />
                          <IconFont
                            className={styles.IconFont}
                            type="icon-jia"
                            style={{ fontSize: '15px', marginLeft: 10 }}
                          />
                          <IconFont
                            className={styles.IconFont}
                            type="icon-shoucangjia1"
                            style={{ fontSize: '15px', marginLeft: 10 }}
                          />
                        </div>
                      </li>
                    );
                  })}
                  <li className={classNames(styles.pointer_line,styles.list_li)} style={{ textAlign: 'right' }}>
                    查看全部
                  </li>
                </ul>
              </div>
              )
                })  
                }
              
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.head}>
              <span>入驻歌手</span>
              <span className = {styles.pointer_line}>查看全部</span>
            </div>
            {this.state.Resident_singer.map((item, index) => {
              return (
                <div className={styles.songer}>
                  <img src={item.picUrl} alt="" style={{cursor:'pointer'}}/>
                  <div className={classNames(styles.pointer_line, styles.songer_name)}>
                    {item.name}
                    {/* <span className={styles.songer_scr}>{item.dsc}</span> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default connect(({ playlist }: ConnectState) => ({
  playlist,
}))(login);

