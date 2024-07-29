import landingImage from '../assets/landing.png'
import appDownload from '../assets/appDownload.png'
const HomePage =() => {
    return (
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-3xl font-bold tracking-tight text-orange-600">
                    Get your favorite food at Home !
                </h1>
                <span className="text-xl"> Food at your doorsteps !</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage}/>
                <div className='flex flex-col items-center justify-center gap-4 text-center'>
                    <span className='font-bold text-3xl tracking-tighter'>
                        Order Delivery Even Faster With Us!
                    </span>
                    <span>
                        Download our App from App Store and Google Play Store for Faster Ordering! 
                    </span>
                    <img src={appDownload} />
                </div>
            </div>
        </div>  
    );
};

export default HomePage;