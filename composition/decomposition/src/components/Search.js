import Category from './Category';
import Input from './Input';
import logo from '../img/Yandex.png';

function Search() {
    return (
        <div className="search-box">
            <img src={logo} alt="img" className="logo-img"/>
            <div className="search">
                <Category />
                <Input />
                <div className='search-suggestion'>
                    Найдется все. Например, <span className='stock__value-change'>фаза луны сегодня</span>
                </div>  
            </div> 
        </div>
    )

}

export default Search