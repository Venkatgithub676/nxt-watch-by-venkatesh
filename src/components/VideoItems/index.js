import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {HiOutlineSaveAs, HiSaveAs} from 'react-icons/hi'

import {formatDistanceToNow} from 'date-fns'

import GlobalContext from '../../context/GlobalContext'
import SideBarCom from '../SideBarCom'
import ErrorComponent from '../ErrorComponent'

import {
  VideoItemsSideBarCon,
  VideoItemsCon,
  VideoPlayer,
  LoadingCon,
  VideoItemsMatterCon,
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
  SaveCon,
  SaveButton,
  SaveText,
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
    vidItems: {},
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
      this.setState({vidItems: {}, status: apiStatusConstants.failure})
    }
  }

  loadingView = () => (
    <LoadingCon data-testid="loader">
      <Loader color="blue" type="ThreeDots" />
    </LoadingCon>
  )

  failureView = () => <ErrorComponent />

  getBtnDetails = event => {
    // console.log(event.target.id)
    if (event.target.id === 'like') {
      this.setState(prevState => {
        const {liked, disliked} = this.state
        if (!liked && disliked) {
          return {liked: !prevState.liked, disliked: !prevState.disliked}
        }
        return {liked: !prevState.liked}
      })
    }
    if (event.target.id === 'dislike') {
      this.setState(prevState => {
        const {liked, disliked} = prevState
        if (!disliked && liked) {
          return {disliked: !prevState.disliked, liked: !prevState.liked}
        }
        return {disliked: !prevState.disliked}
      })
    }
    if (event.target.id === 'saved') {
      this.setState(prevState => ({saved: !prevState.saved}))
    }
  }

  successView = (isDark, saveVideoBtn, savedVideos) => {
    const {vidItems, liked, disliked, saved} = this.state
    // let saved = false
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
      this.getBtnDetails()
      saveVideoBtn(vidItems, saved)
    }

    const filteredValue = savedVideos.filter(each => each.id === id)
    // if (filteredValue.length !== 0) {
    //   saved = true
    // }

    return (
      <VideoItemsCon isDark={isDark} data-testid="videoItemDetails">
        <VideoPlayer>
          <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
        </VideoPlayer>
        <VideoItemsMatterCon>
          <VideoItemTitle>{title}</VideoItemTitle>
          <ViewsLikesCon>
            <Views isDark={isDark}>
              {viewCount} views <BsDot />
              {formatDistanceToNow(new Date(publishedAt))}
            </Views>
            <LikesSaveCon onClick={this.getBtnDetails}>
              <LikeCon>
                <LikeLabel liked={liked} isDark={isDark}>
                  <BiLike />
                </LikeLabel>

                <LikeButton id="like" isDark={isDark} liked={liked}>
                  Like
                </LikeButton>
              </LikeCon>

              <DislikeCon>
                <DisikeLabel disliked={disliked} isDark={isDark}>
                  <BiDislike />
                </DisikeLabel>

                <DislikeButton id="dislike" isDark={isDark} disliked={disliked}>
                  Dislike
                </DislikeButton>
              </DislikeCon>

              <SaveCon>
                <SaveText saved={saved} isDark={isDark}>
                  {saved ? <HiOutlineSaveAs /> : <HiSaveAs size={25} />}
                </SaveText>
                <SaveButton saved={saved} id="saved" isDark={isDark}>
                  {saved ? 'Saved' : 'Save'}
                </SaveButton>
              </SaveCon>
            </LikesSaveCon>
          </ViewsLikesCon>
          <HorizantalLine />
          <ChannelDetailsCon>
            <ProfileImg src={profileImgUrl} alt="channel logo" />
            <ChannelDetails isDark={isDark}>
              <ChannelName>{name}</ChannelName>
              <ChannelSubs isDark={isDark}>
                {subscriberCount} subscribers
              </ChannelSubs>
            </ChannelDetails>
          </ChannelDetailsCon>
          <ChannelDesc isDark={isDark}>{description}</ChannelDesc>
        </VideoItemsMatterCon>
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
          const {isDark, saveVideoBtn, savedVideos} = value

          return (
            <VideoItemsSideBarCon>
              <SideBarCom />
              {this.getViews(isDark, saveVideoBtn, savedVideos)}
            </VideoItemsSideBarCon>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}

export default VideoItems
