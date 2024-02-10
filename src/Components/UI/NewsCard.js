
const NewsCard = (props) => {
    return (
        <div className="card shadow-xl overflow-hidden">
            <div className="card-body pt-5 py-5">
                <div>{props.category}</div>
                <div className="card-title mb-2">{props.title}</div>
                <div className="">{props.description}</div>
                <div className="pr-5">{props.link}</div> 
            </div>
        </div>
    );
};

export default NewsCard;
