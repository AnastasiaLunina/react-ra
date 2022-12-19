export default function converter(hex) {
    const longtHex = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (longtHex) {
        return(`rgb(${longtHex.slice(1).map(e => parseInt(e, 16))})`);
    }
  
    const shortHex = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
    if (shortHex) {
        return(`rgb(${shortHex.slice(1).map(e => 0x11 * parseInt(e, 16))})`);
    }
  
    return null;
}
