import {HiOutlineSaveAs} from 'react-icons/hi'
import SideBarCom from '../SideBarCom'
import GlobalContext from '../../context/GlobalContext'

import {
  SavedSideBarCon,
  SavedCon,
  SaveCon,
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

const Saved = props => (
  <GlobalContext.Consumer>
    {value => {
      const {isDark, clickBtn, savedVideos} = value
      /* console.log(savedVideos) */
      const {match} = props
      const {path} = match
      return (
        <SavedSideBarCon>
          <SideBarCom originalPath={path} />
          <SavedCon isDark={isDark}>
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
                  You can save your videos while watching them
                </NoSavedVideosPara>
              </NoSavedVideosCon>
            ) : (
              <SaveCon data-testid="savedVideos">
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
              </SaveCon>
            )}
          </SavedCon>
        </SavedSideBarCon>
      )
    }}
  </GlobalContext.Consumer>
)
export default Saved
