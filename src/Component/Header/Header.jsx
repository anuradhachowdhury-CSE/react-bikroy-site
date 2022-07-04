import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div>
        <div >
            <nav className='header'>
            <div>
            <a href="">Home</a>
             <a href="">About</a>
             <a href="">Shop</a>
             <a href="">Contact</a>
            </div>
            <div className='awesome'>
                
            <FontAwesomeIcon icon={faCoffee} />
            <FontAwesomeIcon icon={faShoppingCart} />
            <FontAwesomeIcon icon={faShoppingCart} />
            </div>
             </nav>
             
             <div className='two-part'>
              <div>
              <img src="https://discovertemplate.com/wp-content/uploads/2020/11/E-Commerce-Animated-GIF-Icon-Pack-2.gif" alt="" />
              </div>
              <div className='written'>
                {/* <video src="https://commercetools.com/assets/pages/features-commerceplatform/01-Commerce_Platform_new.webm" controls></video> */}
              <p>COMMERCE PLATFORM
The only platform that gives you limitless commerce possibilities
Develop a highly-functional, visually-appealing customer experience that is on brand using the modern commerce solution by commercetools. Unlike legacy vendors, we empower the way you work with game-changing features and functionality, so you can focus on creating the ultimate customer experience.</p>
<p>The San Francisco Bay Area is home to social commerce giants like Facebook, Twitter, Yelp, and YouTube, and all companies – local, regional, and national – are hiring social media professionals to assist with the growing online demand from their customers. In fact, job postings for social media positions on LinkedIn have grown a record 1,357% since 2010. The need for professionals specializing in social media is rapidly increasing, and there’s no better time to hone your marketing expertise to meet this emerging market.</p>
<p>Every day, tens of millions of viewership insights are aggregated and anonymized from 29 million devices to create the smartest advertising campaigns. This proprietary viewership data is combined with third-party demographics and consumer research to deliver actionable insights to businesses of all sizes.

Find new customers.
Our first-party viewership data, combined with third-party insights, allows your business to find and reach the audiences that will be the most interested in hearing your message.
Reach them directly.
We combine our proprietary viewership data with consumer behavior insights to produce smart creative messaging for your business, delivered to the right consumers across every device.
Know that it worked.
Our exclusive reporting platform, AudienceTrak, is directly accessible to our clients and is the only ad platform that is transparent, down to the source of every impression, for TV and digital campaigns.</p>
              </div>
             </div>
             
        </div>
        
    </div>
  )
}

export default Header