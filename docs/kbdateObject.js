//
// kbdateObject.js
// job    : creates a date-based knowlege base ID
// git    : https://github.com/motetpaper/kbdate-js/upload/main
// lic    : MIT
//
//

export class kbdateObject {

  constructor(str) {
    this.#input = !!str ? ''+str : (new Date()).toString()
    this.#build();
  }

  #input = null;
  #kbdate = null;

  toString() {
    return this.#kbdate;
  }

  #build() {

    const dt = new Date(this.#input);

    const yyyy = dt.getFullYear();

    // year shard
    const yy = '' + yyyy.toString().substring(2);

    // month shard
    const mm = '' + (dt.getMonth()+1).toString().padStart(2,'0');

    // minutes shard
    // number of minutes elapsed since the start of the month
    const d = +(dt.getDate() - 1) * 24 * 60;
    const h = dt.getHours() * 60;
    const m = dt.getMinutes();

    const total = +d + h + m;
    const MMMMM = total.toString().padStart(5,'0');
    this.#kbdate = `KB${yy}${mm}${MMMMM}`;
  }
}
