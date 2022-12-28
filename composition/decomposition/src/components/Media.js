import MediaSection from './MediaSection';
import {visit, tele, air} from '../data/data';
import { v4 as uuidv4 } from 'uuid';
import rain from '../img/rain.png';

function Media() {
    return (
        <div className="media">
            <div>
                <MediaSection  title={'Погода'} type={'weather'}>
                    <img src={rain} alt="weather"></img>
                    <span>+17°</span>
                    <div>
                        <div>Утром +17,</div>
                        <div>днем +20</div>
                    </div>
                </MediaSection>
                <MediaSection title={'Посещаемое'} type={'visit'}>
                    {visit.map((item) => <div key={uuidv4()}><span>{item.title}</span> - {item.description}</div>)}
                </MediaSection>            
            </div>
            <div>
                <MediaSection title={'Карты Германии'}>
                    <span>Расписания</span>
                </MediaSection>
                <MediaSection title={'Телепрограмма'} type={'tele'}>
                    {tele.map((item) => <div key={uuidv4()}><span>{item.time}</span>{item.name}<span className='channel'>{item.channel}</span></div>)}
                </MediaSection>
            </div>
            <div>
                <MediaSection title={'Эфир'} type={'air'}>
                    {air.map((item) => <div key={uuidv4()}>{item.title}<span className='channel'>{item.channel}</span></div>)}
                </MediaSection>
            </div>
        </div>
    )
}

export default Media