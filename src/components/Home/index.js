import {Component} from 'react'
import {IoMdClose, IoMdSearch} from 'react-icons/io'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'
import Header from '../Header'
import GlobalContext from '../../context/GlobalContext'
import HomeVideos from '../HomeVideos'
import SideBarCom from '../SideBarCom'
import {
  TopCon,
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
    popupClose: true,
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

  successView = (videos, isDark, clickBtn) => (
    <UlCon>
      {videos.map(each => (
        <HomeVideos
          each={each}
          key={each.id}
          isDark={isDark}
          clickBtn={clickBtn}
        />
      ))}
    </UlCon>
  )

  loadingView = () => (
    <LoadingCon>
      <Loader color="blue" type="Circles" />
    </LoadingCon>
  )

  getViews = (isDark, clickBtn) => {
    const {status, videos} = this.state
    switch (status) {
      case apiStatusConstants.success:
        return this.successView(videos, isDark, clickBtn)
      case apiStatusConstants.loading:
        return this.loadingView()
      default:
        return null
    }
  }

  onClickPopupClose = () => {
    this.setState({popupClose: false})
  }

  render() {
    // console.log(status)

    return (
      <GlobalContext.Consumer>
        {value => {
          const {isDark, clickBtn} = value
          const {popupClose} = this.state

          return (
            <TopCon>
              <Header />
              <SideBarHomeCon>
                <SideBarCom />

                <HomeCon>
                  {popupClose && (
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
                      <CloseButton onClick={this.onClickPopupClose}>
                        <IoMdClose />
                      </CloseButton>
                    </HomePopupCon>
                  )}
                  <SearchVideosCon isDark={isDark}>
                    <SearchCon>
                      <InputSearch placeholder="Search" isDark={isDark} />
                      <SearchLabel isDark={isDark}>
                        <IoMdSearch />
                      </SearchLabel>
                    </SearchCon>
                    {this.getViews(isDark, clickBtn)}
                  </SearchVideosCon>
                </HomeCon>
              </SideBarHomeCon>
            </TopCon>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}

export default Home
