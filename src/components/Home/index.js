import {Component} from 'react'
import {IoMdClose, IoMdSearch, IoMdHome} from 'react-icons/io'
import {HiFire, HiOutlineSaveAs} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'
import Header from '../Header'
import GlobalContext from '../../context/GlobalContext'
import HomeVideos from '../HomeVideos'

import {
  HomeCon,
  HomePopupCon,
  TempPopupSection,
  TempPopupSectionHeading,
  TempPopupSectionImg,
  TempPopupSectionBtn,
  CloseButton,
  SearchCon,
  InputSearch,
  SearchLabel,
  UlCon,
  LoadingCon,
  SearchVideosCon,
  SideBarHomeCon,
  SideNavBar,
  SideBarUlCon,
  SideBarLiItem,
  SideBarLiItemLabels,
  SideBarLiBtn,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Home extends Component {
  state = {
    videos: [],
    status: apiStatusConstants.initial,
    isSelected: 'HomeBtn',
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({status: apiStatusConstants.loading})
    const api = 'https://apis.ccbp.in/videos/all?search='
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    }
    const response = await fetch(api, options)
    const data = await response.json()
    const updatedData = data.videos.map(each => ({
      id: each.id,
      publishedAt: each.published_at,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
      channel: {
        name: each.channel.name,
        profileImgUrl: each.channel.profile_image_url,
      },
    }))
    this.setState({videos: updatedData, status: apiStatusConstants.success})
  }

  successView = (videos, isDark) => (
    <UlCon>
      {videos.map(each => (
        <HomeVideos each={each} key={each.id} isDark={isDark} />
      ))}
    </UlCon>
  )

  loadingView = () => (
    <LoadingCon>
      <Loader color="blue" type="BallTriangle" />
    </LoadingCon>
  )

  getViews = isDark => {
    const {status, videos, isSelected} = this.state
    switch (status) {
      case apiStatusConstants.success:
        return this.successView(videos, isDark)
      case apiStatusConstants.loading:
        return this.loadingView()
      default:
        return null
    }
  }

  clickBtn = event => {
    console.log(event.target.id)
    this.setState({isSelected: event.target.id})
  }

  sideBar = isSelected => (
    <SideNavBar>
      <SideBarUlCon>
        <SideBarLiItem selected={isSelected === 'HomeBtn'}>
          <SideBarLiBtn
            id="HomeBtn"
            onClick={this.clickBtn}
            selected={isSelected === 'HomeBtn'}
          >
            <IoMdHome size={20} />
          </SideBarLiBtn>
          <SideBarLiItemLabels
            htmlFor="HomeBtn"
            selected={isSelected === 'HomeBtn'}
          >
            Home
          </SideBarLiItemLabels>
        </SideBarLiItem>

        <SideBarLiItem selected={isSelected === 'TrendingBtn'}>
          <SideBarLiBtn
            id="TrendingBtn"
            onClick={this.clickBtn}
            selected={isSelected === 'TrendingBtn'}
          >
            <HiFire size={20} />
          </SideBarLiBtn>
          <SideBarLiItemLabels
            htmlFor="TrendingBtn"
            selected={isSelected === 'TrendingBtn'}
          >
            Trending
          </SideBarLiItemLabels>
        </SideBarLiItem>

        <SideBarLiItem selected={isSelected === 'GamingBtn'}>
          <SideBarLiBtn
            onClick={this.clickBtn}
            id="GamingBtn"
            selected={isSelected === 'GamingBtn'}
          >
            <SiYoutubegaming size={20} />
          </SideBarLiBtn>
          <SideBarLiItemLabels
            htmlFor="GamingBtn"
            selected={isSelected === 'GamingBtn'}
          >
            Gaming
          </SideBarLiItemLabels>
        </SideBarLiItem>
        <SideBarLiItem selected={isSelected === 'SaveBtn'}>
          <SideBarLiBtn
            onClick={this.clickBtn}
            id="SaveBtn"
            selected={isSelected === 'SaveBtn'}
          >
            <HiOutlineSaveAs size={20} />
          </SideBarLiBtn>
          <SideBarLiItemLabels
            htmlFor="SaveBtn"
            selected={isSelected === 'SaveBtn'}
          >
            Saved Videos
          </SideBarLiItemLabels>
        </SideBarLiItem>
      </SideBarUlCon>
    </SideNavBar>
  )

  render() {
    // console.log(status)

    return (
      <GlobalContext.Consumer>
        {value => {
          const {isDark} = value
          const {isSelected} = this.state

          return (
            <>
              <Header />
              <SideBarHomeCon>
                {this.sideBar(isSelected)}
                <HomeCon>
                  <HomePopupCon>
                    <TempPopupSection>
                      <TempPopupSectionImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
                      <TempPopupSectionHeading>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </TempPopupSectionHeading>
                      <TempPopupSectionBtn onClick={this.getData}>
                        GET IT NOW
                      </TempPopupSectionBtn>
                    </TempPopupSection>
                    <CloseButton>
                      <IoMdClose />
                    </CloseButton>
                  </HomePopupCon>
                  <SearchVideosCon isDark={isDark}>
                    <SearchCon>
                      <InputSearch placeholder="Search" isDark={isDark} />
                      <SearchLabel isDark={isDark}>
                        <IoMdSearch />
                      </SearchLabel>
                    </SearchCon>
                    {this.getViews(isDark)}
                  </SearchVideosCon>
                </HomeCon>
              </SideBarHomeCon>
            </>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}

export default Home
