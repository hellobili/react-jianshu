import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchInfo, Addition, Button, NavBar, SearchWrapper, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem } from './style';
import { actionCreators } from './store';


const getSearchArea = (props) => {
  const { focused, mouseIn, list, page, totalPage, handleMouseIn, handleMouseLeave, handleChangePage } = props
  const newList = list.toJS()
  const pageList = []
  newList.slice((page - 1) * 10, page * 10).map(item => {
    return pageList.push(<SearchInfoItem key={item}>{item} </SearchInfoItem>)
  })
  // for (let i = (page - 1) * 10; i < page * 10; i++) {
  //   pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]} </SearchInfoItem>)
  // }
  if (focused || mouseIn) {
    return (
      <SearchInfo onMouseEnter={handleMouseIn} onMouseLeave={handleMouseLeave}>
        <SearchInfoTitle>
          热门搜索

            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>
            <i className="iconfont spin">&#xe616;</i>
            换一批
                </SearchInfoSwitch>
        </SearchInfoTitle>
        {pageList}
        {/* {
          list.map(item => {
            return(
              <SearchInfoItem key={item}>{item} </SearchInfoItem>
            )
          })
        } */}
      </SearchInfo>
    )
  } else {
    return null
  }
}


function Header(props) {
  const { focused, handleInputBlur, handleInputFocus } = props
  return (
    <HeaderWrapper>
      <NavBar>
        <Logo></Logo>
        <Addition>
          <Button className='writting'><i className='iconfont'>&#xe641;</i>写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={focused}
              classNames='slide'
            >
              <NavSearch className={focused ? 'focused' : ''} onFocus={handleInputFocus} onBlur={handleInputBlur}></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'} onFocus={handleInputFocus} >&#xe62b;</i>
            {getSearchArea(props)}
          </SearchWrapper>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
        </Nav>
      </NavBar>
    </HeaderWrapper>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    // focused: state.header.focused
    // state为immutable对象
    // 方式一
    // focused: state.get('header').get('focused')
    // 方式二
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseIn() {
      dispatch(actionCreators.mouseIn())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseOut())
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)