import React from 'react';
import { useState } from 'react';
import converter from './converter';

export default function Hex2Rgb() {
   const [inputHex, setInputHex] = useState('#34495e');
   const [result, setResult] = useState(converter(inputHex));

   let hex2rgbBgColor = {backgroundColor:result};

    const handleChange = (event) => {
        const { value } = event.target;

        setInputHex(value);
        setResult('');

        if (converter(value)) {
            const rgb = converter(value)
            setResult(rgb);
        } else {
            setResult('No such a color');
        }
    };

  return (
        <div className="hex2rgb__container" style={hex2rgbBgColor}>
            <div className='hex2rgb__content'>
                <div className='hex__input-container'>
                    <input className='hex__input' name="name" value={inputHex} onChange={handleChange} />
                </div>
                <div className='rgb__result'>
                    <p className='rgb__result-par'>{result}</p>
                </div>
                <div className="rgb__result-test">
                    <p>#9921ff</p>
                    <p>#7bfebc</p>
                    <p>#fb0400</p>
                    <p>#e6fb15</p>
                    <p>#000</p>
                </div>
            </div>
        </div>
  )
}
