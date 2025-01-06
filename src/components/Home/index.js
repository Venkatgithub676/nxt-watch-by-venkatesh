import {Component} from 'react'
import {IoMdClose, IoMdSearch} from 'react-icons/io'

import Header from '../Header'

import {
  HomeCon,
  HomePopupCon,
  TempPopupSection,
  TempPopupSectionHeading,
  TempPopupSectionImg,
  TempPopupSectionBtn,
  CloseButton,
  SearchCon,
  InputSearch,
  SearchLabel,
} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <HomeCon>
          <HomePopupCon>
            <TempPopupSection>
              <TempPopupSectionImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
              <TempPopupSectionHeading>
                Buy Nxt Watch Premium prepaid plans with UPI
              </TempPopupSectionHeading>
              <TempPopupSectionBtn>GET IT NOW</TempPopupSectionBtn>
            </TempPopupSection>
            <CloseButton>
              <IoMdClose />
            </CloseButton>
          </HomePopupCon>

          <SearchCon>
            <InputSearch placeholder="Search" />
            <SearchLabel>
              <IoMdSearch />
            </SearchLabel>
          </SearchCon>
        </HomeCon>
      </>
    )
  }
}

export default Home
