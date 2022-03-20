import '../styles/Banner.css'

function Banner({ children }){
    return (
        <div className="bg-banner">{children}</div>
    );
}

export default Banner