import React from "react"
interface dataObj {
    title: string
    date: string
    explanation: string
}
interface SidebarComp {
    data: dataObj
    handelToggle(): void
}
const Sidebar: React.FC<SidebarComp> = ({ data, handelToggle }) => {
    return (
        <aside>
            <div onClick={handelToggle}
                className="aside-overlay"></div>
            <div className="content">
                <h3 className="title">{data?.title}</h3>
                <p className="date">{data?.date}</p>
                <p className="info">{data?.explanation}</p>
                <i onClick={handelToggle}
                    className="fa-solid fa-arrow-right-long fa-2x close-icon icon"></i>
            </div>
        </aside>
    )
}
export default Sidebar