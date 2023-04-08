import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard'
import alexaImage from './images/alexa.png'
import cortanaImage from './images/cortana.png'
import siriImage from './images/siri.png'

function App() {
  return (
    <div>
      <div className='hero is-primary has-text-centered'>
        <div className='hero-body center'>
          <p className='title'>Personal Digital Assistants </p>
        </div>
      </div>
      {/* <div>Personal Digital Assistants </div> */}

      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard
                title='alexa'
                handle='@alexa99'
                image={alexaImage}
                description='this is alexa developed by amazon, its is a persnal digital assistant'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title='cortana'
                handle='@cortana32'
                image={cortanaImage}
                description='this was also a digital assistant but nobody can use this,cortana was developed by microsoft'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title='siri'
                handle='@siri01'
                image={siriImage}
                description='this is apples digital assistance only available in apple products'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
