import {SiYoutubegaming} from 'react-icons/si'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Component} from 'react'
import Header from '../Header'
import SideBarCom from '../SideBarCom'
import GamingLiItems from '../GamingLiItems'
import GlobalContext from '../../context/GlobalContext'

import {
  GamingCon,
  GamingSideBarCon,
  GamingHeadingCon,
  GamingHeading,
  EmojiCon,
  GamingTopEmojiHeadingCon,
  GamingUlCon,
  GamingBelowCon,
} from './styledComponents'

class Gaming extends Component {
  state = {gamingData: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const updatedData = data.videos.map(each => ({
      id: each.id,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))
    this.setState({gamingData: updatedData})
  }

  render() {
    return (
      <GlobalContext.Consumer>
        {value => {
          const {isDark, isSelected, values} = value
          const {gamingData} = this.state
          const filteredValues = values.filter(each => each.id === isSelected)
          if (filteredValues[0].category !== 'gaming') {
            return <Redirect to="/" />
          }

          return (
            <>
              <Header />
              <GamingSideBarCon>
                <SideBarCom />
                <GamingCon isDark={isDark}>
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
                        />
                      ))}
                    </GamingUlCon>
                  </GamingBelowCon>
                </GamingCon>
              </GamingSideBarCon>
            </>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}
export default Gaming
