import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {HiOutlineSaveAs, HiSaveAs} from 'react-icons/hi'

import {formatDistanceToNow} from 'date-fns'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import GlobalContext from '../../context/GlobalContext'
import SideBarCom from '../SideBarCom'
import ErrorComponent from '../ErrorComponent'

import {
  VideoItemsSideBarCon,
  VideoItemsCon,
  LoadingCon,
  VideoItemTitle,
  ViewsLikesCon,
  Views,
  LikesSaveCon,
  LikeCon,
  LikeButton,
  LikeLabel,
  DislikeCon,
  DislikeButton,
  DisikeLabel,
  MediaCon,
  MediaButton,
  MediaLabel,
  HorizantalLine,
  ChannelDetailsCon,
  ProfileImg,
  ChannelDetails,
  ChannelName,
  ChannelSubs,
  ChannelDesc,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}
class VideoItems extends Component {
  state = {
    vidItems: [],
    status: apiStatusConstants.initial,
    liked: false,
    disliked: false,
    saved: false,
  }

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
    if (response.ok) {
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
    } else {
      this.setState({status: apiStatusConstants.failure})
    }
  }

  loadingView = () => (
    <LoadingCon>
      <Loader color="blue" type="ThreeDots" />
    </LoadingCon>
  )

  failureView = () => <ErrorComponent />

  clickSave = () => {
    this.setState(prevState => ({saved: !prevState.saved}))
  }

  clickLike = () => {
    this.setState(prevState => {
      const {liked, disliked} = this.state
      if (!liked && disliked) {
        return {liked: !prevState.liked, disliked: !prevState.disliked}
      }
      return {liked: !prevState.liked}
    })
  }

  clickDislike = () => {
    this.setState(prevState => {
      const {liked, disliked} = prevState
      if (!disliked && liked) {
        return {disliked: !prevState.disliked, liked: !prevState.liked}
      }
      return {disliked: !prevState.disliked}
    })
  }

  successView = (isDark, saveVideoBtn, savedVideos) => {
    const {vidItems, liked, disliked} = this.state
    let {saved} = this.state
    const {
      publishedAt,
      title,
      videoUrl,
      viewCount,
      description,
      channel,
      id,
    } = vidItems
    const {name, subscriberCount, profileImgUrl} = channel

    // console.log(saved)
    const clickSaveBtn = () => {
      this.clickSave()
      saveVideoBtn(vidItems, saved)
    }

    const filteredValue = savedVideos.filter(each => each.id === id)
    if (filteredValue.length !== 0) {
      saved = true
    }

    return (
      <VideoItemsCon isDark={isDark}>
        <ReactPlayer url={videoUrl} width="100%" height="80vh" controls />
        <VideoItemTitle>{title}</VideoItemTitle>
        <ViewsLikesCon>
          <Views isDark={isDark}>
            {viewCount} views <BsDot />
            {formatDistanceToNow(new Date(publishedAt))}
          </Views>
          <LikesSaveCon>
            <LikeCon>
              <LikeButton
                id="like"
                onClick={this.clickLike}
                isDark={isDark}
                liked={liked}
              >
                <BiLike size={25} />
              </LikeButton>
              <LikeLabel liked={liked} htmlFor="like" isDark={isDark}>
                Like
              </LikeLabel>
            </LikeCon>
            <DislikeCon>
              <DislikeButton
                id="dislike"
                onClick={this.clickDislike}
                isDark={isDark}
                disliked={disliked}
              >
                <BiDislike size={25} />
              </DislikeButton>
              <DisikeLabel
                disliked={disliked}
                htmlFor="dislike"
                isDark={isDark}
              >
                Dislike
              </DisikeLabel>
            </DislikeCon>
            <MediaCon>
              <MediaButton
                saved={saved}
                onClick={clickSaveBtn}
                isDark={isDark}
                id="save"
              >
                {saved ? <HiOutlineSaveAs size={25} /> : <HiSaveAs size={25} />}
              </MediaButton>
              <MediaLabel htmlFor="save" saved={saved} isDark={isDark}>
                {saved ? 'Saved' : 'Save'}
              </MediaLabel>
            </MediaCon>
          </LikesSaveCon>
        </ViewsLikesCon>
        <HorizantalLine />
        <ChannelDetailsCon>
          <ProfileImg src={profileImgUrl} />
          <ChannelDetails isDark={isDark}>
            <ChannelName>{name}</ChannelName>
            <ChannelSubs isDark={isDark}>
              {subscriberCount} subscribers
            </ChannelSubs>
            <ChannelDesc isDark={isDark}>{description}</ChannelDesc>
          </ChannelDetails>
        </ChannelDetailsCon>
      </VideoItemsCon>
    )
  }

  getViews = (isDark, saveVideoBtn, savedVideos) => {
    const {status} = this.state
    // console.log(status)
    switch (status) {
      case apiStatusConstants.success:
        return this.successView(isDark, saveVideoBtn, savedVideos)
      case apiStatusConstants.loading:
        return this.loadingView()
      case apiStatusConstants.failure:
        return this.failureView()
      default:
        return null
    }
  }

  render() {
    return (
      <GlobalContext.Consumer>
        {value => {
          const {isDark, values, isSelected, saveVideoBtn, savedVideos} = value

          const filteredValues = values.filter(each => each.id === isSelected)
          if (filteredValues.length !== 0) {
            return <Redirect to="/" />
          }
          return (
            <>
              <Header />
              <VideoItemsSideBarCon>
                <SideBarCom />
                {this.getViews(isDark, saveVideoBtn, savedVideos)}
              </VideoItemsSideBarCon>
            </>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}

export default VideoItems
