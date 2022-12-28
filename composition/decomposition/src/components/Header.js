import { news, stocks, adv } from '../data/data';
import NewsBlock from './NewsSection';
import Stocks from './Stocks';
import Advertising from './Advertising';

function Header() {
    return (
        <div className="header">
            <div>
                <NewsBlock news={news} />
                <Stocks stocks={stocks} />
            </div>
            <Advertising {...adv} />    
        </div>
    )
}

export default Header;