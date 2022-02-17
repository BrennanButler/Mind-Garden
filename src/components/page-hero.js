

const PageHero = ({
    media,
    content
}) => {

    return (
        <div className="mind-garden-page-hero">
            
            <div className="mind-garden-page-hero-content-container">
                <div className="container">
                    {content}
                </div> 
            </div>
            <div className="mind-garden-page-hero-media-container">
                {media}
            </div>
        </div>
    )
}

export default PageHero;