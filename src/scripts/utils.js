export const formatCreditCardNumber=(value)=> {
    let parsedValue = value.toString()
    var v = parsedValue.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []
    
    for (let i=0, len=match.length; i<len; i+=4) {
        parts.push(match.substring(i, i+4))
    }
    
    if (parts.length) {
        return parts.join(' ')
    } else {
        return value
    }
}
export const formatDate = (date)=>{
    let dateToFormat = new Date(date)
    let formatedDate='';
    let month =  dateToFormat.getMonth();
    month++ // getMonth() return jan 0, feb 1 ....
    if(month<9) month = '0'+ month
    let year =  dateToFormat.getFullYear();
    formatedDate = month +'/'+ year;
    return formatedDate;
}