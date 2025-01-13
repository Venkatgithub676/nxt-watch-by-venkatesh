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
  state = {videos: [], status: apiStatusConstants.initial}

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
    const {status, videos} = this.state
    switch (status) {
      case apiStatusConstants.success:
        return this.successView(videos, isDark)
      case apiStatusConstants.loading:
        return this.loadingView()
      default:
        return null
    }
  }

  sideBar = () => (
    <SideNavBar>
      <SideBarUlCon>
        <SideBarLiItem>
          <SideBarLiBtn>
            <IoMdHome id="home" size={20} />
            <SideBarLiItemLabels htmlFor="home">Home</SideBarLiItemLabels>
          </SideBarLiBtn>
        </SideBarLiItem>

        <SideBarLiItem>
          <SideBarLiBtn>
            <HiFire id="fire" size={20} />
            <SideBarLiItemLabels htmlFor="trending">
              Trending
            </SideBarLiItemLabels>
          </SideBarLiBtn>
        </SideBarLiItem>

        <SideBarLiItem>
          <SideBarLiBtn>
            <SiYoutubegaming id="gaming" size={20} />
            <SideBarLiItemLabels>Gaming</SideBarLiItemLabels>
          </SideBarLiBtn>
        </SideBarLiItem>
        <SideBarLiItem>
          <SideBarLiBtn>
            <HiOutlineSaveAs size={20} id="save" />
            <SideBarLiItemLabels htmlFor="save">
              Saved Videos
            </SideBarLiItemLabels>
          </SideBarLiBtn>
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
          return (
            <>
              <Header />
              <SideBarHomeCon>
                {this.sideBar()}
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
