import {HiOutlineSaveAs} from 'react-icons/hi'
import Header from '../Header'
import SideBarCom from '../SideBarCom'
import GlobalContext from '../../context/GlobalContext'

import {
  SavedSideBarCon,
  SavedCon,
  SavedTopEmojiHeadingCon,
  SavedHeadingCon,
  EmojiCon,
  SavedHeading,
  SavedBelowCon,
  SavedUlCon,
  NoSavedVideosCon,
  NoSavedVideosImg,
  NoSavedVideosHeading,
  NoSavedVideosPara,
} from './styledComponents'

import SavedLiItems from '../SavedLiItems'

const Saved = () => (
  <GlobalContext.Consumer>
    {value => {
      const {isDark, clickBtn, savedVideos} = value
      console.log(savedVideos)
      return (
        <>
          <Header />

          <SavedSideBarCon>
            <SideBarCom />
            <SavedCon isDark={isDark} data-testid="savedVideos">
              {savedVideos.length === 0 ? (
                <NoSavedVideosCon isDark={isDark}>
                  <NoSavedVideosImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideosHeading isDark={isDark}>
                    No saved videos found
                  </NoSavedVideosHeading>
                  <NoSavedVideosPara isDark={isDark}>
                    Save your videos by clicking a button
                  </NoSavedVideosPara>
                </NoSavedVideosCon>
              ) : (
                <>
                  <SavedTopEmojiHeadingCon isDark={isDark}>
                    <SavedHeadingCon>
                      <EmojiCon>
                        <HiOutlineSaveAs size={40} />
                      </EmojiCon>
                      <SavedHeading isDark={isDark}>Saved Videos</SavedHeading>
                    </SavedHeadingCon>
                  </SavedTopEmojiHeadingCon>
                  <SavedBelowCon isDark={isDark}>
                    <SavedUlCon>
                      {savedVideos.map(each => (
                        <SavedLiItems
                          each={each}
                          key={each.id}
                          isDark={isDark}
                          clickBtn={clickBtn}
                        />
                      ))}
                    </SavedUlCon>
                  </SavedBelowCon>
                </>
              )}
            </SavedCon>
          </SavedSideBarCon>
        </>
      )
    }}
  </GlobalContext.Consumer>
)
export default Saved
