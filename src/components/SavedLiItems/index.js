import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import {
  SavedLiItem,
  SavedInternalCon,
  SavedItemThumbnail,
  BioCon,
  SavedItemMatterConDesktop,
  SavedItemTitle,
  ChannelNameBio,
  SavedItemName,
  DotCon,
  SavedItemViewCount,
  SavedProfMatterConMob,
  SavedItemsMatterConMobile,
  SavedItemViewCountMobile,
  SavedItemProfileImg,
} from './styledComponents'

const SavedLiItems = props => {
  const {each, isDark} = props
  const {id, publishedAt, thumbnailUrl, title, viewCount, channel} = each
  const {name, profileImgUrl} = channel

  return (
    <SavedLiItem>
      <Link
        to={`/videos/${id}`}
        style={{textDecoration: 'none', color: '#000000'}}
      >
        <SavedInternalCon>
          <SavedItemThumbnail src={thumbnailUrl} alt="video thumbnail" />
          <BioCon>
            <SavedItemProfileImg src={profileImgUrl} />
            <SavedItemMatterConDesktop>
              <SavedItemTitle isDark={isDark}>{title}</SavedItemTitle>
              <ChannelNameBio>
                <SavedItemName isDark={isDark}>{name}</SavedItemName>
                <DotCon>
                  <BsDot />
                </DotCon>
                <SavedItemViewCount isDark={isDark}>
                  {viewCount} <BsDot />{' '}
                  {formatDistanceToNow(new Date(publishedAt))}
                </SavedItemViewCount>
              </ChannelNameBio>
            </SavedItemMatterConDesktop>
          </BioCon>
        </SavedInternalCon>
      </Link>
    </SavedLiItem>
  )
}

export default SavedLiItems
