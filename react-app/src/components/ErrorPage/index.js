import "./ErrorPage.css"
import loginpagepic from "./loginpagepic.jpg"

const ErrorPage = () => {
    return (
        <div className="ErrorPage">
            <div className="actual404">
                <h1 className="actual404">
                    404
                </h1>
                <h1 className="actual404">
                    Oops! Page Not Found
                </h1>
            </div>
            <div className="picturefor404">
                <img className='picturefor404' src={loginpagepic} />
            </div>
            <h1 className='actual404'>
                In the meantime, why not enjoy a cup of tea and try exploring some of our other amazing pages?
            </h1>
        </div>
    )
}

export default ErrorPage
