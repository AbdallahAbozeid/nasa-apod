import React from "react";

interface PicComp {
    data: {
        title: string
        explanation: string
        date: string
        hdurl: string
    }
}

const Pic: React.FC<PicComp> = ({ data }) => {
    return (
        <div className="img-container">
            <img className="img"
                src={data.hdurl} alt={data.title || 'bg-img'} />
        </div>
    )
}
export default Pic