import { ajaxMise } from './index'

const arr = ajaxMise('http://sec-m.ctrip.com/restapi/soa2/15656/listProductComments','POST',
{"productId":"1015820366"},'async')
console.log(arr)