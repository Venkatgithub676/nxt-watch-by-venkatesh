import {Component} from 'react'
import {IoMdClose, IoMdSearch} from 'react-icons/io'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'
import Header from '../Header'
import GlobalContext from '../../context/GlobalContext'
import HomeVideos from '../HomeVideos'
import SideBarCom from '../SideBarCom'
import ErrorComponent from '../ErrorComponent'
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
  SearchBtn,
  UlCon,
  LoadingCon,
  SearchVideosCon,
  SideBarHomeCon,
  NoVideosCon,
  NoVideosImg,
  NoVideosHeading,
  NoVideosPara,
  NoVideosRetryBtn,
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
    searchInput: '',
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({status: apiStatusConstants.loading})
    const {searchInput} = this.state
    const api = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    // console.log(api)
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    }
    const response = await fetch(api, options)
    if (response.ok) {
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
    } else {
      this.setState({status: apiStatusConstants.failure})
    }
  }

  successView = (videos, isDark, clickBtn) => (
    <UlCon>
      {videos.length !== 0 ? (
        videos.map(each => (
          <HomeVideos
            each={each}
            key={each.id}
            isDark={isDark}
            clickBtn={clickBtn}
          />
        ))
      ) : (
        <NoVideosCon>
          <NoVideosImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" />
          <NoVideosHeading isDark={isDark}>
            No Search results found
          </NoVideosHeading>
          <NoVideosPara>
            Try different key words or remove search filter
          </NoVideosPara>
          <NoVideosRetryBtn type="button" onClick={this.retryBtn}>
            Retry
          </NoVideosRetryBtn>
        </NoVideosCon>
      )}
    </UlCon>
  )

  loadingView = () => (
    <LoadingCon>
      <Loader color="blue" type="ThreeDots" />
    </LoadingCon>
  )

  failureView = () => <ErrorComponent />

  getViews = (isDark, clickBtn) => {
    const {status, videos} = this.state
    // console.log(videos)
    switch (status) {
      case apiStatusConstants.success:
        return this.successView(videos, isDark, clickBtn)
      case apiStatusConstants.loading:
        return this.loadingView()
      case apiStatusConstants.failure:
        return this.failureView()
      default:
        return null
    }
  }

  onClickPopupClose = () => {
    this.setState({popupClose: false})
  }

  inputSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  retryBtn = () => {
    this.setState({searchInput: ''}, this.getData)
  }

  searchBtn = () => {
    // const {searchInput} = this.state
    // console.log(searchInput)
    this.getData()
  }

  render() {
    // console.log(status)

    return (
      <GlobalContext.Consumer>
        {value => {
          const {isDark, clickBtn} = value
          const {popupClose, searchInput} = this.state

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
                        <TempPopupSectionBtn>GET IT NOW</TempPopupSectionBtn>
                      </TempPopupSection>
                      <CloseButton onClick={this.onClickPopupClose}>
                        <IoMdClose />
                      </CloseButton>
                    </HomePopupCon>
                  )}
                  <SearchVideosCon isDark={isDark}>
                    <SearchCon>
                      <InputSearch
                        placeholder="Search"
                        onChange={this.inputSearch}
                        type="search"
                        isDark={isDark}
                        value={searchInput}
                      />
                      <SearchBtn onClick={this.searchBtn} isDark={isDark}>
                        <IoMdSearch />
                      </SearchBtn>
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
