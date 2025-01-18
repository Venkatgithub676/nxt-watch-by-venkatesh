import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBarCom from '../SideBarCom'

import {
  VideoItemsSideBarCon,
  VideoItemsCon,
  LoadingCon,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}
class VideoItems extends Component {
  state = {vidItems: [], status: apiStatusConstants.initial}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({status: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    // console.log(data)
    const videoDtls = data.video_details
    const updatedData = {
      channel: {
        name: videoDtls.channel.name,
        profileImgUrl: videoDtls.channel.profile_image_url,
        subscriberCount: videoDtls.channel.subscriber_count,
      },
      id: videoDtls.id,
      publishedAt: videoDtls.published_at,
      thumbnailUrl: videoDtls.thumbnail_url,
      title: videoDtls.title,
      videoUrl: videoDtls.video_url,
      viewCount: videoDtls.view_count,
      description: videoDtls.description,
    }
    // console.log(updatedData)
    this.setState({vidItems: updatedData, status: apiStatusConstants.success})
  }

  successView = () => {
    const {vidItems} = this.state
    const {
      id,
      publishedAt,
      thumbnailUrl,
      title,
      videoUrl,
      viewCount,
      description,
      channel,
    } = vidItems
    const {name, subscriberCount, profileImgUrl} = channel

    return <VideoItemsCon>{}</VideoItemsCon>
  }

  loadingView = () => (
    <LoadingCon>
      <Loader type="Circles" color="red" />
    </LoadingCon>
  )

  getViews = () => {
    const {status} = this.state
    console.log(status)
    switch (status) {
      case apiStatusConstants.success:
        return this.successView()
      case apiStatusConstants.loading:
        return this.loadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <VideoItemsSideBarCon>
          <SideBarCom />
          {this.getViews()}
        </VideoItemsSideBarCon>
      </>
    )
  }
}

export default VideoItems
