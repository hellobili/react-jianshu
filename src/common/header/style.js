import styled from 'styled-components';
//1. 图片需要引入，直接url引入相对地址，webpack打包找不到
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
  width:100%;
  height:58px;
  border-bottom:1px solid #f0f0f0;
`

export const NavBar = styled.div`
  box-sizing:border-box;
  min-width: 768px;
  max-width: 1440px;
  margin:0 auto;
`

// 2.a标签添加attrs属性 内添加href 配置跳转链接
export const Logo = styled.a.attrs({
  href: '/'
})`
  float:left;
  display:block;
  height:56px;
  width:100px;
  background:url(${logoPic});
  background-size:contain;
`

export const Nav = styled.div`
  @media(min-width: 768px){
    width:750px;
  }
  @media(min-width:992px){
    width:960px;
  }
  
  padding:0 15px;
  height:56px;
  margin:0 auto;
  padding-right:70px;
  box-sizing:border-box;
`

export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  color:#333;
  &.left{
    float:left;s
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  border-radius:19px;
  background:#eee;
  margin-top:9px;
  margin-left:20px;

  position:relative;
  float:left;
  .zoom{
    position:absolute;
    right:5px;
    bottom:5px
    width:30px;
    line-height:30px;
    text-align:center;
    border-radius:15px;
    &.focused{
      background:#777;
      color:#fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width:160px; 
  height:38px;
  border:none;
  outline:none;
  border-radius:19px;
  padding:0 30px 0 20px;
  color:#666;
  box-sizing:border-box;
  background:#eee;
  font-size:14px;
  &::placeholder{
    color:#999
  }
  &.focused{
    width:240px;
  }
  &.slide-enter{
    width:160px;
    transition:all .2s ease-out;
  }
  &.slide-enter-active{
    width:240px;
  }
  &.slide-exit{
    transition:all .2s ease-out;
    width:240px;
  }
  &.slide-exit-active{
    width:160px;
  }
`


export const SearchInfo = styled.div`
  position:absolute;
  left:0px;
  top:56px;
  box-sizing:border-box;
  width:250px;
  padding:20px 20px 10px;
  box-shadow:0 0 8px rgba(0,0,0,0.2)
`

export const SearchInfoTitle = styled.div`
  font-size:14px;
  color:#969696;
  line-height:20px;
  margin-bottom:10px;
`

export const SearchInfoSwitch = styled.span`
  float:right;
  font-size:13px;
  .spin{
    font-size:12px;
    margin-right:2px;
  }
`
export const SearchInfoItem = styled.span`
  cursor:pointer;
  display:inline-block;
  font-size:12px;
  border:1px solid #ddd;
  border-radius:3px;
  margin-right:10px;
  margin-bottom:10px;
  line-height:20px;
  padding:2px 6px;
  color:#787878;
`
export const Addition = styled.div`
  display:inline-block;
  float:right;
  height:56px;
`

export const Button = styled.div`
  float:right;
  margin-top:9px;
  margin-right:20px;
  padding:0 20px;
  line-height:38px;
  border:1px;
  border:1px solid #ec6149;
  border-radius:19px;
  font-size:14px;
  &.reg{
    color:#ec6149;
  }
  &.writting{
    color:#fff;
    background:#ec6149;
  }
`

