import React from "react";
interface dataObj {
    title: string
    explanation: string
    date: string
    hdurl: string
}
interface FooterComp {
    data: dataObj | null
    handelToggle(): void
}
const Footer: React.FC<FooterComp> = ({ data, handelToggle }) => {
    return (
        <footer className="footer">
            <div
                className="bg-gradient"></div>
            <div className="caption">
                <h2 className="title">APOD</h2>
                <h3 className="description">{data?.title}</h3>
            </div>
            <i onClick={handelToggle}
                className="fa-solid fa-circle-info fa-2x info-icon icon"></i>
        </footer>
    )
}

export default Footer