function MediaSection(props) {
    return (
        <div className="media__section-container">
            <h2 className="title"><a href="#0">{props.title}</a></h2>
            <div className={props.type}>
                {props.children}
            </div>   
        </div>
    )
}

export default MediaSection;