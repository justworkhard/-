import React from 'react';
import classNames from 'classnames'
import styles from './recommend.less';
import {Carousel} from 'antd'
import IconFont from '../../utils/IconFont'
class login extends React.Component {
  state = {
    hot_recommend:[
      {cover_url:'http://p1.music.126.net/YTj1z3vmY2mM4DHLPOLk8g==/109951163940256358.jpg?param=140y140',title:'民谣',play_account:100},
      {cover_url:'http://p1.music.126.net/YTj1z3vmY2mM4DHLPOLk8g==/109951163940256358.jpg?param=140y140',title:'民谣',play_account:100},
      {cover_url:'http://p1.music.126.net/YTj1z3vmY2mM4DHLPOLk8g==/109951163940256358.jpg?param=140y140',title:'民谣',play_account:100},
      {cover_url:'http://p1.music.126.net/YTj1z3vmY2mM4DHLPOLk8g==/109951163940256358.jpg?param=140y140',title:'民谣',play_account:100},
      {cover_url:'http://p1.music.126.net/YTj1z3vmY2mM4DHLPOLk8g==/109951163940256358.jpg?param=140y140',title:'民谣',play_account:100},
      {cover_url:'http://p1.music.126.net/YTj1z3vmY2mM4DHLPOLk8g==/109951163940256358.jpg?param=140y140',title:'民谣',play_account:100},
      {cover_url:'http://p1.music.126.net/YTj1z3vmY2mM4DHLPOLk8g==/109951163940256358.jpg?param=140y140',title:'民谣',play_account:100},
      {cover_url:'http://p1.music.126.net/YTj1z3vmY2mM4DHLPOLk8g==/109951163940256358.jpg?param=140y140',title:'民谣',play_account:100},
    ],
    rise_list : [
      {url:'',song_name:'孤单'},
      {url:'',song_name:'孤单'},
      {url:'',song_name:'孤单'},
      {url:'',song_name:'孤单'},
      {url:'',song_name:'孤单'},
      {url:'',song_name:'孤单'},
      {url:'',song_name:'孤单'},
      {url:'',song_name:'孤单'},
      {url:'',song_name:'孤单'},
      {url:'',song_name:'孤单'},
    ],
    Resident_singer : [
      {avadar : 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62',name : '张惠妹',dsc : '中国台湾歌手'},
      {avadar : 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62',name : '张惠妹',dsc : '中国台湾歌手'},
      {avadar : 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62',name : '张惠妹',dsc : '中国台湾歌手'},
      {avadar : 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62',name : '张惠妹',dsc : '中国台湾歌手'},
      {avadar : 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62',name : '张惠妹',dsc : '中国台湾歌手'},
      {avadar : 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62',name : '张惠妹',dsc : '中国台湾歌手'},
      {avadar : 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62',name : '张惠妹',dsc : '中国台湾歌手'},
      {avadar : 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62',name : '张惠妹',dsc : '中国台湾歌手'},
    ]
  }
  render() {
    return (
      <div>
        <Carousel>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
        <div className={styles.body}>
          <div className={styles.left}>
            <div className={styles.hot_recommend}>
              <div className={styles.content_head}>
                <div className = {styles.title}>热门推荐</div>
                <div className = {styles.tab}>华语</div>
                <div className = {styles.tab}>流行</div>
                <div className = {styles.tab}>摇滚</div>
                <div className = {styles.tab}>民谣</div>
                <div className = {styles.tab}>电子</div>
                <div className = {classNames(styles.tab,styles.more)}>更多<IconFont type='icon-qianjin' style={{ fontSize: '16px', color: 'red' }}/></div>
              </div>
              <div className = {styles.hr_content}>
                {this.state.hot_recommend.map((item,index)=>{
                  return(
                    <div key = {index} className = {styles.content_navbar}>
                    <div className = {styles.img}>
                      <img className = {styles.cover} src={item.cover_url}/>
                      <div className = {styles.messge}>
                        <span>{item.play_account}</span>
                        <span>paly</span>
                      </div>
                    </div>
                    <div className = {styles.title}>{item.title}</div>
                  </div>
                  )
                })}
              </div>
            </div>
            <div className={styles.new_CD}>
              <div className={styles.content_head}>
                <div className = {styles.title}>新碟上架</div>
                <div className = {classNames(styles.tab,styles.more)}>更多</div>
              </div>
              <div className={styles.new_content}>
                <div className = {styles.avbar_list}>
                  <div className = {styles.navbar}>
                    <img className = {styles.CD_cover} src='http://p4.music.126.net/tNvWcu3P_7qia_Cep6S0aA==/109951164138999622.jpg?param=100y100'/>
                    <span className = {styles.CD_title}>鸡你太美</span>
                    <span className = {styles.CD_author}>蔡徐坤</span>
                  </div>
                  <div className = {styles.navbar}>
                    <img className = {styles.CD_cover} src='http://p4.music.126.net/tNvWcu3P_7qia_Cep6S0aA==/109951164138999622.jpg?param=100y100'/>
                    <span className = {styles.CD_title}>鸡你太美</span>
                    <span className = {styles.CD_author}>蔡徐坤</span>
                  </div>
                  <div className = {styles.navbar}>
                    <img className = {styles.CD_cover} src='http://p4.music.126.net/tNvWcu3P_7qia_Cep6S0aA==/109951164138999622.jpg?param=100y100'/>
                    <span className = {styles.CD_title}>鸡你太美</span>
                    <span className = {styles.CD_author}>蔡徐坤</span>
                  </div>
                  <div className = {styles.navbar}>
                    <img className = {styles.CD_cover} src='http://p4.music.126.net/tNvWcu3P_7qia_Cep6S0aA==/109951164138999622.jpg?param=100y100'/>
                    <span className = {styles.CD_title}>鸡你太美</span>
                    <span className = {styles.CD_author}>蔡徐坤</span>
                  </div>
                  <div className = {styles.navbar}>
                    <img className = {styles.CD_cover} src='http://p4.music.126.net/tNvWcu3P_7qia_Cep6S0aA==/109951164138999622.jpg?param=100y100'/>
                    <span className = {styles.CD_title}>鸡你太美</span>
                    <span className = {styles.CD_author}>蔡徐坤</span>
                  </div>
                  <div className = {styles.navbar}>
                    <img className = {styles.CD_cover} src='http://p4.music.126.net/tNvWcu3P_7qia_Cep6S0aA==/109951164138999622.jpg?param=100y100'/>
                    <span className = {styles.CD_title}>鸡你太美</span>
                    <span className = {styles.CD_author}>蔡徐坤</span>
                  </div>
                  <div className = {styles.navbar}>
                    <img className = {styles.CD_cover} src='http://p4.music.126.net/tNvWcu3P_7qia_Cep6S0aA==/109951164138999622.jpg?param=100y100'/>
                    <span className = {styles.CD_title}>鸡你太美</span>
                    <span className = {styles.CD_author}>蔡徐坤</span>
                  </div>
                  <div className = {styles.navbar}>
                    <img className = {styles.CD_cover} src='http://p4.music.126.net/tNvWcu3P_7qia_Cep6S0aA==/109951164138999622.jpg?param=100y100'/>
                    <span className = {styles.CD_title}>鸡你太美</span>
                    <span className = {styles.CD_author}>蔡徐坤</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.top_list}>
              <div className={styles.content_head}>
                <div className = {styles.title}>榜单</div>
                <div className = {classNames(styles.tab,styles.more)}>更多</div>
              </div>
              <div className = {styles.tl_content}>
                <div className = {styles.content_rise}>
                  <header >
                    <img className = {styles.content_cover} src='http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100'/>
                    <div className = {styles.content_action}>
                      <span>云音乐飙升榜</span>
                      <IconFont type='icon-bofang'/>
                      <img className = {styles.action_collection} src="" alt=""/>
                    </div>
                  </header>
                  <ul className = {styles.list}>
                    {
                      this.state.rise_list.map((item,index)=>{
                        return(
                          <li key = {index}><span className = {classNames(styles.list_index,index<=2&& styles.list_index_active)}>{index+1}</span>{item.song_name}</li>
                        )
                      })
                    }
                    <li style = {{textAlign:"right"}}>查看全部</li>                    
                  </ul>
                </div>
                <div className = {styles.content_rise}>
                  <header >
                    <img className = {styles.content_cover} src='http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100'/>
                    <div className = {styles.content_action}>
                      <span>云音乐飙升榜</span>
                      <img className = {styles.action_play} src="" alt=""/>
                      <img className = {styles.action_collection} src="" alt=""/>
                    </div>
                  </header>
                  <ul className = {styles.list}>
                    {
                      this.state.rise_list.map((item,index)=>{
                        return(
                          <li key = {index}><span className = {classNames(styles.list_index,index<=2&& styles.list_index_active)}>{index+1}</span>{item.song_name}</li>
                        )
                      })
                    }
                    <li style = {{textAlign:"right"}}>查看全部</li>                    
                  </ul>
                </div>
                <div className = {styles.content_rise}>
                  <header >
                    <img className = {styles.content_cover} src='http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100'/>
                    <div className = {styles.content_action}>
                      <span>云音乐飙升榜</span>
                      <img className = {styles.action_play} src="" alt=""/>
                      <img className = {styles.action_collection} src="" alt=""/>
                    </div>
                  </header>
                  <ul className = {styles.list}>
                    {
                      this.state.rise_list.map((item,index)=>{
                        return(
                          <li key = {index}><span className = {classNames(styles.list_index,index<=2&& styles.list_index_active)}>{index+1}</span>{item.song_name}</li>
                        )
                      })
                    }
                    <li style = {{textAlign:"right"}}>查看全部</li>                    
                  </ul>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className = {styles.head}>
              <span>入驻歌手</span>
              <span>查看全部</span>
            </div>
            {
              this.state.Resident_singer.map((item,index)=>{
                return(
                  <div className = {styles.songer}>
                  <img src={item.avadar} alt=""/>
                  <div className = {styles.songer_name}>
                    {item.name}
                    <span className = {styles.songer_scr}>{item.dsc}</span>
                  </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
export default login;
