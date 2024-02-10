"useClient"

import Image from "next/image";

const NewsRec = (props) => {
    return (
        <div className="card shadow-xl " >
                <div className="card-body">
                    <div className="w-14 h-14 rounded-full  text-white text-center flex justify-center items-center text-3xl mb-3">
                      <img className={props.img} /> 
                           
                        
                    </div>

                    <div className="card-title">{props.title}</div>

                    <div>{props.description}</div>
                </div>
            </div>
    );
};

export default NewsRec;