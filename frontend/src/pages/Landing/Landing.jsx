import './Landing.scss'

import { useNavigate } from 'react-router-dom'
import { ShortButton } from '../../components/Button/Button'
import PropTypes from 'prop-types'

import { ReactComponent as LeafIcon } from '../../assets/svg/leaf.svg'
import { ReactComponent as HomeIcon } from '../../assets/svg/home.svg'
import { ReactComponent as TrefleIcon } from '../../assets/svg/trefle.svg'

import DiscoverImage from '../../assets/images/Discover.jpg'
import FindImage from '../../assets/images/Find.jpg'
import ImagesImage from '../../assets/images/Images.jpg'
import SearchImage from '../../assets/images/Search.jpg'

/**
 * Landing Page
 * @returns {React.JSX.Element}
 */
function Landing() {
  return (
    <section id="landing">
      <div className='top'>
        <h1 id='app-name'>Plantpedia</h1>
        <LeafIcon/>
      </div>

      <article id='information'>
        <h2 id='welcome'>Welcome to your plant finder!</h2>
        <Start/>
        <div id='sections'>
          <Section>
            <p>
              Discover a world of natural beauty.<br />
              Explore a vast collection of plants and find the perfect one for your garden or green space.
            </p>
            <img src={DiscoverImage} alt="Discover section image" />
          </Section>
          <Section type='reverse'>
            <img src={FindImage} alt="Find section image" />
            <p>
              Whether you are an experienced gardener or a nature lover, we are here to help.<br />
              Find species of flowers, trees and exotic plants.
            </p>
          </Section>
          <Section>
            <p>
              Take a look at our high-quality images, read full descriptions, and get valuable advice from our experts.
            </p>
            <img src={ImagesImage} alt="Images section image" />
          </Section>
          <Section type='reverse'>
            <img src={SearchImage} alt="Search section image" />
            <p>
              Refine your search with advanced filters and find the perfect plant for your location and conditions.
            </p>
          </Section>
          <Section>
            <p>
              Start exploring and immerse yourself in the wonderful variety of plants offered by Trefle!
            </p>
            <TrefleIcon/>
          </Section>
        </div>
        <Start/>
      </article>
    </section>
  )
}

/**
 * Start Component
 * @description Navigates to /home path
 * @returns {React.JSX.Element}
 */
function Start() {
  const navigate = useNavigate()

  function navigateToHome() {
    navigate('/home')
  }

  return (
    <div className='start'>
      <h3 className='start-message'>Start searching!</h3>
      <ShortButton onClick={navigateToHome}>
        <HomeIcon className='home-icon'/>
      </ShortButton>
    </div>
  )
}

/**
 * Section Component
 * @description To use within Landing page to display sections
 * of paragraphs with image like Figma file
 * @param {any} Destructured_Props
 * @param {any} children Children content
 * @returns {React.JSX.Element}
 */
function Section({ children, type }) {
  return (
    <section className={`section ${type ? type : ''}`}>
      {children}
    </section>
  )
}
Section.propTypes = {
  children: PropTypes.any
}

export default Landing