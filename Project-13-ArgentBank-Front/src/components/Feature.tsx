
import './Feature.scss'

type FeatureProps = { imageName: string, imageSrc: string, title: string, text: string }

function Feature( {imageSrc, imageName, title, text}: FeatureProps ) {

      return (
            <div className='feature'>
                  <img className='feature-icon' src={imageSrc} alt={imageName} />
                  <h3 className='feature-title'>{title}</h3>
                  <p className='feature-text'>{text}</p>
            </div>
      )
}
export default Feature;



