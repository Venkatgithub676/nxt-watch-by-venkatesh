import {SiYoutubegaming} from 'react-icons/si'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import Header from '../Header'
import SideBarCom from '../SideBarCom'
import GamingLiItems from '../GamingLiItems'
import GlobalContext from '../../context/GlobalContext'
import ErrorComponent from '../ErrorComponent'

import {
  GamingCon,
  GamingSideBarCon,
  GamingHeadingCon,
  GamingHeading,
  EmojiCon,
  GamingTopEmojiHeadingCon,
  GamingUlCon,
  GamingBelowCon,
  LoadingCon,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Gaming extends Component {
  state = {gamingData: [], status: apiStatusConstants.initial}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({status: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingData: updatedData,
        status: apiStatusConstants.success,
      })
    } else {
      this.setState({status: apiStatusConstants.failure})
    }
  }

  successView = (isDark, clickBtn, gamingData) => (
    <GamingCon isDark={isDark} data-testid="gaming">
      <GamingTopEmojiHeadingCon isDark={isDark}>
        <GamingHeadingCon>
          <EmojiCon>
            <SiYoutubegaming size={40} />
          </EmojiCon>
          <GamingHeading isDark={isDark}>Gaming</GamingHeading>
        </GamingHeadingCon>
      </GamingTopEmojiHeadingCon>
      <GamingBelowCon isDark={isDark}>
        <GamingUlCon>
          {gamingData.map(each => (
            <GamingLiItems
              each={each}
              key={each.id}
              isDark={isDark}
              clickBtn={clickBtn}
            />
          ))}
        </GamingUlCon>
      </GamingBelowCon>
    </GamingCon>
  )

  loadingView = () => (
    <LoadingCon data-testid="loader">
      <Loader color="blue" type="ThreeDots" />
    </LoadingCon>
  )

  failureView = () => <ErrorComponent />

  getViews = (isDark, clickBtn) => {
    const {status, gamingData} = this.state
    // console.log(videos)
    switch (status) {
      case apiStatusConstants.success:
        return this.successView(isDark, clickBtn, gamingData)
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
          const {isDark, isSelected, values, clickBtn} = value

          const filteredValues = values.filter(each => each.id === isSelected)

          return (
            <>
              <Header />
              <GamingSideBarCon>
                <SideBarCom />
                {this.getViews(isDark, clickBtn)}
              </GamingSideBarCon>
            </>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}
export default Gaming
