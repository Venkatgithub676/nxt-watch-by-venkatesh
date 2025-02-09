import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import GlobalContext from '../../context/GlobalContext'
import SideBarCom from '../SideBarCom'
import TrendingLiItems from '../TrendingLiItems'
import {
  TrendingCon,
  TrendingSideBarCon,
  TrendingHeadingCon,
  TrendingHeading,
  EmojiCon,
  TrendingTopEmojiHeadingCon,
  TrendingUlCon,
  TrendingBelowCon,
  LoadingCon,
} from './styledComponents'

import ErrorComponent from '../ErrorComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Trending extends Component {
  state = {trendingData: [], status: apiStatusConstants.initial}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({status: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    // console.log(jwtToken)
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
      const updatedData = data.videos.map(each => ({
        id: each.id,
        channel: {
          name: each.channel.name,
          profileImgUrl: each.channel.profile_image_url,
        },
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      // console.log(updatedData)
      this.setState({
        trendingData: updatedData,
        status: apiStatusConstants.success,
      })
    } else {
      this.setState({status: apiStatusConstants.failure})
    }
  }

  successView = (isDark, clickBtn, trendingData) => (
    <TrendingCon>
      <TrendingTopEmojiHeadingCon isDark={isDark}>
        <TrendingHeadingCon>
          <EmojiCon>
            <HiFire size={40} />
          </EmojiCon>
          <TrendingHeading isDark={isDark}>Trending</TrendingHeading>
        </TrendingHeadingCon>
      </TrendingTopEmojiHeadingCon>
      <TrendingBelowCon isDark={isDark}>
        <TrendingUlCon>
          {trendingData.map(each => (
            <TrendingLiItems
              each={each}
              key={each.id}
              isDark={isDark}
              clickBtn={clickBtn}
            />
          ))}
        </TrendingUlCon>
      </TrendingBelowCon>
    </TrendingCon>
  )

  loadingView = isDark => (
    <LoadingCon data-testid="loader" isDark={isDark}>
      <Loader color="blue" type="ThreeDots" />
    </LoadingCon>
  )

  failureView = () => <ErrorComponent />

  getViews = (isDark, clickBtn) => {
    const {status, trendingData} = this.state
    // console.log(videos)
    switch (status) {
      case apiStatusConstants.success:
        return this.successView(isDark, clickBtn, trendingData)
      case apiStatusConstants.loading:
        return this.loadingView(isDark)
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
          const {isDark, isSelected, values, clickBtn} = value
          const filteredValues = values.filter(each => each.id === isSelected)
          // console.log(isSelected)

          return (
            <TrendingSideBarCon isDark={isDark} data-testid="trending">
              <SideBarCom />
              {this.getViews(isDark, clickBtn)}
            </TrendingSideBarCon>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}
export default Trending
