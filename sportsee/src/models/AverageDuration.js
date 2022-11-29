/**
 * @property {number} day
 * @property {number} sessionLength
 */

 export class AverageDuration{
    /**
     * 
     * @param {object} data 
     */
    constructor(data) {
        this.day = data.day;
        this.sessionLength = data.sessionLength;
    }
}