/**
 * @property {string} day
 * @property {number} kilogram
 * @property {number} calories
 */
export class Session{
    /**
     * 
     * @param {object} data 
     */
    constructor(data) {
        this.day = data.day;
        this.kilogram = data.kilogram;
        this.calories = data.calories;
    }
}