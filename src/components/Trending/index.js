import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Header from '../Header'
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
} from './styledComponents'

class Trending extends Component {
  state = {trendingData: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
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
    console.log(updatedData)
    this.setState({trendingData: updatedData})
  }

  render() {
    const {trendingData} = this.state
    return (
      <GlobalContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <TrendingSideBarCon>
                <SideBarCom />
                <TrendingCon>
                  <TrendingTopEmojiHeadingCon>
                    <TrendingHeadingCon>
                      <EmojiCon>
                        <HiFire size={40} />
                      </EmojiCon>
                      <TrendingHeading>Trending</TrendingHeading>
                    </TrendingHeadingCon>
                  </TrendingTopEmojiHeadingCon>
                  <TrendingBelowCon>
                    <TrendingUlCon>
                      {trendingData.map(each => (
                        <TrendingLiItems each={each} key={each.id} />
                      ))}
                    </TrendingUlCon>
                  </TrendingBelowCon>
                </TrendingCon>
              </TrendingSideBarCon>
            </>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}
export default Trending
