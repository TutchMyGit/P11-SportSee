/**
 * @property {number} value
 * @property {number} kind
 */

export class Performance{
    /**
     * 
     * @param {object} data 
     */
    constructor(data) {
        this.value = data.value;
        this.kind = data.kind;
    }
}