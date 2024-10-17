export default function Sidebar({ data, handelToggle }) {
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
    );
}