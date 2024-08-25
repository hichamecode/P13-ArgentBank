
import './Home.scss'
import Layout from "../components/Layout";
import Feature from '../components/Feature';
// import of icons
import chatIcon from '../assets/img/icon-chat.png'
import moneyIcon from '../assets/img/icon-money.png'
import securityIcon from '../assets/img/icon-security.png'

function Home() {

      return (
            <Layout>
                  <main>
                        <div className="hero">
                              <section className="hero-content">
                                    <p className="subtitle">No fees.</p>
                                    <p className="subtitle">No minimum deposit.</p>
                                    <p className="subtitle">High interest rates.</p>
                                    <p className="text">Open a savings account with Argent Bank today!</p>
                                    <h2 className="sr-only">Promoted content</h2>
                              </section>
                        </div>
                        <section className="features">
                              <h2 className="sr-only">Features</h2>
                              <Feature 
                              imageSrc={chatIcon} 
                              imageName='Chat Icon' 
                              title='You are our #1 priority' 
                              text='
                                 Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
                               />
                              <Feature 
                              imageSrc={moneyIcon} 
                              imageName='Money Icon' 
                              title='More savings means higher rates'
                              text='The more you save with us, the higher your interest rate will be!'
                              />
                              <Feature 
                              imageSrc={securityIcon}
                               imageName='Security Icon' 
                               title='Security you can trust'
                               text='We use top of the line encryption to make sure your data and money is always safe.'/>
                        </section>
                  </main>
            </Layout>
      )
}

export default Home;