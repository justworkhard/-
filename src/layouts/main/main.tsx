import React from 'react';
import styles from './main.less';
import classNames from 'classnames'
import IconFont from '../../utils/IconFont';
import {Modal} from 'antd'


class App extends React.Component{
  constructor(prop:any){
    super(prop)
  }
  state = {
   headerList : [{name:'推荐'},{name:'排行榜'},{name:'歌单'},{name:'主播电台'},{name:'歌手'},{name:'新碟上架'}],
   activeIndex : 0,
   sub_active_index : 0,
   visible:false,
   password :'',
   name :'',
   erro_warn:false
  }
  changeName(){
    this.setState({name:'GJD'})
  }
  login(){
    if(this.state.name === 'admin' && this.state.password === '1'){
      this.setState({erro_warn:false})
    }else{
      this.setState({erro_warn:true})
    }
  }
  handleinput_name = (event:any)=>{
    this.setState({name: event.target.value});
  }
  handleinput_pw = (event:any)=>{
    this.setState({password: event.target.value});
  }
  render(){
    return(
      <div className = {styles.body}>
        <div className = {styles.header}>
          <div className = {styles.head_left}>
            <div style = {{background: `url(https://s2.music.126.net/style/web2/img/frame/topbar.png?b69861fe3aca6bd98e2d7351f69a409d)`, height:'70px' ,width:'176px'}}></div>
            <div onClick ={()=>{this.setState({activeIndex:0})}} className = {classNames( styles.left_item,this.state.activeIndex ==0 ?styles.active:'')}>发现音乐</div>
            <div onClick ={()=>{this.setState({activeIndex:1})}} className = {classNames( styles.left_item,this.state.activeIndex ==1 ?styles.active:'')}>我的音乐</div>
            <div onClick ={()=>{this.setState({activeIndex:2})}} className = {classNames( styles.left_item,this.state.activeIndex ==2 ?styles.active:'')}>朋友</div>
            <div onClick ={()=>{this.setState({activeIndex:3})}} className = {classNames( styles.left_item,this.state.activeIndex ==3 ?styles.active:'')}>商城</div>
            <div onClick ={()=>{this.setState({activeIndex:4})}} className = {classNames( styles.left_item,this.state.activeIndex ==4 ?styles.active:'')}>音乐人</div>
            <div onClick ={()=>{this.setState({activeIndex:5})}} className = {classNames( styles.left_item,this.state.activeIndex ==5 ?styles.active:'')}>下载客户端</div>
          </div>
          <div className = {styles.head_right}>
            <div className = {styles.right_item}>
              <div className = {styles.MyInput}>
                <IconFont type = 'icon-xiazai17' style = {{color:'#828282',marginRight:'10px'}}/>
                <input type="text" placeholder = '音乐/频道/电台/用户'/>
              </div>
            </div>
            <div className = {classNames(styles.right_item,styles.center)} style = {{cursor: 'pointer'}}>创作者中心</div>
            <div className = {classNames(styles.right_item,styles.login)} style = {{cursor: 'pointer'}}>登录<IconFont type = 'icon-xiajiantou'/>
                <ul className = {styles.login_type_list}>
                  <li onClick = {()=>{this.setState({visible:true})}} ><IconFont type = 'icon-shouji' className = {styles.IconFont}  style = {{fontSize:'22px'}}/> 手机号登录</li>
                  <li><IconFont type = 'icon-changyonglogo28' className = {styles.IconFont}  style = {{fontSize:'23px'}}/>微信登录</li>
                  <li><IconFont type = 'icon-qq' className = {styles.IconFont}  style = {{fontSize:'17px'}}/>QQ登录</li>
                  <li><IconFont type = 'icon-xinlang' className = {styles.IconFont}  style = {{fontSize:'17px'}}/>新浪微博登录</li>
                  <li><IconFont type = 'icon-shouji' className = {styles.IconFont} style = {{fontSize:'22px'}}/>网易邮箱账号登录</li>

                </ul>
            </div>           
          </div>
          <div className = {styles.item_class}>
            {this.state.headerList.map( (item,index) =>{
              return <div key = {index} onClick ={()=>{this.setState({sub_active_index:index})}} className = {classNames(styles.name,this.state.sub_active_index == index ?styles.name_active:'')}>{item.name}</div>
            })}
          </div>
        </div>
        {this.props.children}
        <div className = {styles.footer}>
          
        </div>
        <Modal
          title="手机号登录"
          visible={this.state.visible}
          footer={null}
          onCancel={()=>{this.setState({visible:false})}}
        >
         <div className = {styles.modal}>
           <input type="text" placeholder = '请输入手机号' onChange = {this.handleinput_name.bind(this)}/>
           <input type="text" placeholder = '请输入密码' onChange = {this.handleinput_pw.bind(this)}/>
           {
             this.state.erro_warn ?  <div className = {styles.erro_warn} >账号或密码错误！</div> :''
           }
           <div className = {styles.remenber_PS}>
             <input className = {styles.checkbox} type="checkbox" />
             <span>忘记密码？</span>
           </div>
           <div className = {styles.btn_login} onClick = {this.login.bind(this)}>登录</div>
         </div>
        </Modal>
      </div>
    )
  }
}

export default App