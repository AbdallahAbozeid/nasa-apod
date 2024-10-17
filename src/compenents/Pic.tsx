export default function Pic({ data }) {
    return (
        <div className="img-container">
            <img className="img"
                src={data.hdurl} alt={data.title || 'bg-img'} />
        </div>
    );
}