import './AppContent.scss';
import Card from "../card/Card";

const AppContent = () => {
    return (
        <div className="content">
            <h2 className="content__title">Все кроссовки</h2>

            <div className="content__cards">
                <Card/>
            </div>
        </div>
    )
}

export default AppContent;