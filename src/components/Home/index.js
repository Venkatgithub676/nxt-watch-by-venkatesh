import {Component} from 'react'
import {IoMdClose, IoMdSearch} from 'react-icons/io'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
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

  successView = videos => (
    <UlCon>
      {videos.map(each => (
        <HomeVideos each={each} key={each.id} />
      ))}
    </UlCon>
  )

  loadingView = () => (
    <LoadingCon>
      <Loader color="blue" type="BallTriangle" />
    </LoadingCon>
  )

  getViews = () => {
    const {status, videos} = this.state
    switch (status) {
      case apiStatusConstants.success:
        return this.successView(videos)
      case apiStatusConstants.loading:
        return this.loadingView()
      default:
        return null
    }
  }

  render() {
    const {videos, status} = this.state
    // console.log(status)
    return (
      <>
        <Header />
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

          <SearchCon>
            <InputSearch placeholder="Search" />
            <SearchLabel>
              <IoMdSearch />
            </SearchLabel>
          </SearchCon>
        </HomeCon>
        {this.getViews()}
      </>
    )
  }
}

export default Home
