/**
 * 
 * @param text allows single string;
 * ```ts
 * capitalize("hello") // Hello
 * ```
 */
export const capitalize = (text: string): string => {
    return text[ 0 ].toUpperCase() + text.slice(1);
}

/**
 * 
 * @param text allows just a string;
 * ```ts
 * const text = "Hi my    name   is Jeny";
 * 
 * trim(text) // "Hi my name is Jeny"
 * ```
 */

export const trim = (text: string): string => {
    const splitted = text.split(' ');
    let response = ''
    for (let t of splitted) {
        if (t !== '') response += ' ' + t;
    }

    return response.slice(1);
}

/**
 * @name camelCase
 * @param text { string }
 * @example
 * ```js
 * const text = "layout menu index"
 * 
 * camelCase(text) // "LayoutMenuIndex"
 * ```
 */

export function camelCase(text: string): string {
    let splitted = trim(text).split(' ');
    let finished = '';
    for (let t of splitted) {
        finished += capitalize(t);
    }
    return finished;
}

/**
 * @param val { number }
 * @description its checking number is integer or other number like (float, double);
 * 
 * `if gives true integer` 
 * ```ts
 * isInt(23.45) // false
 * ```
 */

export function isInt(val: number) {
    return +val % 1 === 0;
}

/**
 * @example 
 * ```js
 * const text = "layout menu index"
 * 
 * snakeCase(text) // "layout_menu_index"
 * ```
 */

export function snakeCase(text: string) {
    return trim(text).replaceAll(' ', '_').toLowerCase();
}

/**
 * @example 
 * ```ts
 * const arr = [1,2,3,4,5]
 * 
 * chunk(arr, 2) // [[1,2],[3,4],[5]]
 * ```
 */

export function chunk(arr: any[], num: number) {
    let chunkLength = arr.length / num;

    if (!isInt(chunkLength)) chunkLength++;

     /**
     * @description i variable for chunk length. Chunk length mining response
     *  array must be include that number;
     */ let i: number = 0;
    let outChunk: any[] = [];
    let countIndex: number = 0;
    for (i = 0; i < Math.floor(chunkLength); i++) {
        let inChunk = [];
        /** 
         * @description g variable for counting number (num) how many chunks need for array (arr)
         */ let g: number;


        for (g = 0; g < +num; g++) {
            if (arr.length - countIndex > 0) {
                inChunk.push(arr[ countIndex ]);
            }
            countIndex++;
        }
        outChunk.push(inChunk);
    }
    return outChunk;
}



/**
 * @description Creates an array with all falsey values removed. 
 *      The values false, null, 0, "", undefined, and NaN are falsey.
 * 
 * ```ts
 * compact([0,3,false, '', NaN, 5])
 * // => [0,3,5]
 * ```
 */

export const compact = (arr: any[]) => arr.filter(e => !!e !== false);

/** 
 * @description `Difference just A array`
 * 
 * ```ts
 * difference([2, 1], [2, 3]); 
 * // [1] 
 * ```
*/

export function differenceA(A: Array<any>, B: Array<any>) {
    return A.filter(e => !B.includes(e));
}

/** 
 * @description `Difference two arrays`
 * ```ts
 * difference([3,2, 1], [2, 3,5]); 
 * // [1,5] 
 * ```
*/

export function difference<T extends unknown>(A: T[], B: T[]) {
    return A.filter(e => !B.includes(e)).concat(B.filter(x => !A.includes(x)));
}

/**
 * 
 * @param arr must be declare array
 * @param num how many length you want to drop
 * @example
 * ```ts
 * _.drop([4,5,6], 1) // [2,3]
 * 
 * _.drop([4,5,6], 2) // [3]
 * 
 * _.drop([4,5,6], 3) // []
 * ```
 */

export const drop = <T extends unknown>(arr: T[], num: number) => arr.splice(num)

/**
 *
 * @example
 * ```ts
 * _.dropRight([4,5,6], 1) // [4]
 * 
 * _.dropRight([4,5,6], 2) // [4,2]
 * 
 * _.dropRight([4,5,6], 3) // [4,5,6]
 * ```
 */

export const dropRight = <T extends unknown>(arr: T[], num: number) => arr.splice(0, num);







