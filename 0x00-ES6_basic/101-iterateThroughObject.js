/* eslint-disable */
export default function iterateThroughObject(reportWithIterator) {
   let itemstr = '', i = 0;
   for (const item of reportWithIterator) {
        if (reportWithIterator.length - 1 == i) {
            itemstr += item
        }
        else {
            itemstr += item + ' | ';
        }
        i++;
   }
   return itemstr;
}
